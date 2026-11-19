/* =====================================================================
   ext.js — প্রোফাইল, লক (পাসওয়ার্ড), PDF লাইব্রেরি ও রিডার, দৈনিক মনিটরিং
   সব ডেটা শুধু এই ডিভাইসে (IndexedDB + localStorage)। এই ফাইলে টপ-লেভেলে শুধু ঘোষণা আছে;
   index.html-এর ফাংশন (state, layer, toast, paint, go …) রানটাইমে ব্যবহৃত হয়।
   ===================================================================== */
const G=id=>document.getElementById(id);
const dk=ts=>{const d=new Date(ts);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const toEn=s=>String(s).replace(/[০-৯]/g,c=>'০১২৩৪৫৬৭৮৯'.indexOf(c));
const normPhone=raw=>{const p=toEn(raw).replace(/[\s\-()]/g,'');const m=p.match(/^(?:\+?88)?(01[3-9]\d{8})$/);return m?'+88'+m[1]:null};
const fmtPhone=p=>p?p.replace(/^\+88(\d{5})(\d{6})$/,'+88 $1-$2'):'';
const MONTHS=['জানুয়ারি','ফেব্রুয়ারি','মার্চ','এপ্রিল','মে','জুন','জুলাই','আগস্ট','সেপ্টেম্বর','অক্টোবর','নভেম্বর','ডিসেম্বর'];
const WD=['রবি','সোম','মঙ্গল','বুধ','বৃহ','শুক্র','শনি'];

/* ---------- IndexedDB (generic) ---------- */
async function dbo(store,mode,fn){const db=await getDB();if(!db)throw new Error('nodb');
  return new Promise((res,rej)=>{const tx=db.transaction(store,mode);const r=fn(tx.objectStore(store));tx.oncomplete=()=>res(r&&r.result);tx.onerror=()=>rej(tx.error);tx.onabort=()=>rej(tx.error)})}
const idbPut=(s,k,v)=>dbo(s,'readwrite',o=>o.put(v,k));
const idbGetS=(s,k)=>dbo(s,'readonly',o=>o.get(k));
const idbDel=(s,k)=>dbo(s,'readwrite',o=>o.delete(k));
const idbAll=s=>dbo(s,'readonly',o=>o.getAll());

/* ---------- পাসওয়ার্ড ---------- */
const b64=b=>btoa(String.fromCharCode(...new Uint8Array(b)));
const unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));
async function hashPw(pw,salt){const k=await crypto.subtle.importKey('raw',new TextEncoder().encode(pw),'PBKDF2',false,['deriveBits']);
  return b64(await crypto.subtle.deriveBits({name:'PBKDF2',salt,iterations:150000,hash:'SHA-256'},k,256))}
async function makePw(pw){const salt=crypto.getRandomValues(new Uint8Array(16));return{salt:b64(salt),hash:await hashPw(pw,salt)}}
async function checkPw(pw,rec){return (await hashPw(pw,unb64(rec.salt)))===rec.hash}
function pwRules(pw,name,phone){
  const l=pw.toLowerCase(),nm=(name||'').toLowerCase().replace(/\s+/g,'');
  return[
   ['কমপক্ষে ৮ অক্ষর',pw.length>=8],
   ['অন্তত ১টি ইংরেজি অক্ষর',/[A-Za-z]/.test(pw)],
   ['অন্তত ১টি সংখ্যা',/\d/.test(pw)],
   ['স্পেস নেই',pw.length>0&&!/\s/.test(pw)],
   ['সহজ/সাধারণ পাসওয়ার্ড নয় (যেমন password1, 12345678)',pw.length>0&&!['12345678','123456789','password','password1','qwerty123','abcd1234','11111111','iloveyou1'].includes(l)],
   ['নাম বা ফোন নম্বরের অংশ নেই',pw.length>0&&!(nm.length>=3&&l.includes(nm))&&!(phone&&/\d{6,}/.test(pw)&&phone.includes(pw.replace(/\D/g,'').slice(0,8))&&pw.replace(/\D/g,'').length>=6)]
  ]}
const pwScore=pw=>{let s=0;if(pw.length>=8)s++;if(pw.length>=12)s++;if(/[a-z]/.test(pw)&&/[A-Z]/.test(pw))s++;if(/\d/.test(pw)&&/[A-Za-z]/.test(pw))s++;if(/[^A-Za-z0-9]/.test(pw))s++;return Math.min(4,Math.max(pw?1:0,s-1))};

/* ---------- অ্যাভাটার ---------- */
function avatar(sz,cls){const p=state.profile,s=`width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.42)}px`;
  if(p&&p.photo)return`<img class="av ${cls||''}" style="${s}" src="${p.photo}" alt="প্রোফাইল ছবি">`;
  return`<span class="av ${cls||''}" style="${s}">${esc(((p&&p.name)||'?').trim().charAt(0).toUpperCase())}</span>`}
function fileToAvatar(f){return new Promise((res,rej)=>{const url=URL.createObjectURL(f),im=new Image();
  im.onload=()=>{const S=256,c=document.createElement('canvas');c.width=c.height=S;const m=Math.min(im.width,im.height);
   c.getContext('2d').drawImage(im,(im.width-m)/2,(im.height-m)/2,m,m,0,0,S,S);URL.revokeObjectURL(url);res(c.toDataURL('image/jpeg',.85))};
  im.onerror=()=>{URL.revokeObjectURL(url);rej(new Error('img'))};im.src=url})}
function pickPhoto(cb,camera){const i=document.createElement('input');i.type='file';i.accept='image/*';if(camera)i.setAttribute('capture','user');
  i.onchange=async()=>{const f=i.files[0];if(!f)return;try{cb(await fileToAvatar(f))}catch(e){toast('ছবিটি পড়া যায়নি, অন্য ছবি বেছে নাও')}};i.click()}

/* =====================================================================
   গেট: অনবোর্ডিং ও আনলক
   ===================================================================== */
let ob={step:1,name:'',phone:'',photo:null,pw:'',pw2:'',show:false};
function gate(html){let g=G('gate');if(!g){g=document.createElement('div');g.id='gate';g.setAttribute('role','dialog');g.setAttribute('aria-modal','true');document.body.appendChild(g);g.addEventListener('click',gateClick);g.addEventListener('input',gateInput);g.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('input')){e.preventDefault();const b=g.querySelector('[data-primary]');if(b)b.click()}})}
  g.classList.remove('out');g.innerHTML=html;document.body.classList.add('lock');return g}
function closeGate(){const g=G('gate');document.body.classList.remove('lock');if(g){g.classList.add('out');setTimeout(()=>g.remove(),380)}}
const dots=n=>`<div class="dots">${[1,2,3].map(i=>`<i class="${i===n?'on':''}"></i>`).join('')}</div>`;

function obHTML(){
  if(ob.step===1)return`<div class="gc fm">${dots(1)}<img class="lg" src="icon-192.png" alt=""><h2>স্বাগতম! 👋</h2><p class="sb2">তোমার প্রোফাইল তৈরি করো — সব তথ্য শুধু এই ফোনে থাকবে</p>
   <label for="ob-name">তোমার নাম</label><input class="fi" id="ob-name" autocomplete="name" placeholder="যেমন: Soliman Shakil" maxlength="40" value="${esc(ob.name)}"><div class="err" id="e-name"></div>
   <label for="ob-phone">মোবাইল নম্বর</label><input class="fi" id="ob-phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="01XXXXXXXXX" maxlength="17" value="${esc(ob.phone)}"><div class="err" id="e-phone"></div><div class="hint">বাংলাদেশি নম্বর (01৩–01৯…), যেমন 017XXXXXXXX</div>
   <div class="gb"><button class="btn p" data-ob="next" data-primary>পরবর্তী ›</button></div>
   <button class="lnk" data-ob="restore">📂 আগের ব্যাকআপ থেকে ফেরাও</button></div>`;
  if(ob.step===2)return`<div class="gc fm">${dots(2)}<h2>প্রোফাইল ছবি 📸</h2><p class="sb2">একটি ছবি দাও (ঐচ্ছিক) — চাইলে পরে বদলানো যাবে</p>
   <div class="photo"><div id="ob-av">${obAvatar(120)}</div><div class="row"><button class="btn g" data-ob="cam">📷 ক্যামেরা</button><button class="btn g" data-ob="gal">🖼️ গ্যালারি</button>${ob.photo?'<button class="btn d" data-ob="rm">✕ সরাও</button>':''}</div></div>
   <div class="note">ছবিটি ছোট করে এই ডিভাইসেই সংরক্ষিত হবে; কোথাও আপলোড হয় না।</div>
   <div class="gb"><button class="btn g" data-ob="back">‹ আগে</button><button class="btn p" data-ob="next" data-primary>${ob.photo?'পরবর্তী ›':'এড়িয়ে যাও ›'}</button></div></div>`;
  return`<div class="gc fm">${dots(3)}<h2>পাসওয়ার্ড দাও 🔐</h2><p class="sb2">অ্যাপ খোলার সময় এই পাসওয়ার্ড লাগবে</p>
   <label for="ob-pw">পাসওয়ার্ড</label><div class="pwr"><input class="fi" id="ob-pw" type="${ob.show?'text':'password'}" autocomplete="new-password" placeholder="কমপক্ষে ৮ অক্ষর" value="${esc(ob.pw)}"><button class="eye" data-ob="eye" aria-label="দেখাও/লুকাও">${ob.show?'🙈':'👁️'}</button></div>
   <div class="meter s${pwScore(ob.pw)}" id="meter"><i></i><i></i><i></i><i></i></div><ul class="rules" id="rules">${rulesHTML()}</ul>
   <label for="ob-pw2">পাসওয়ার্ড আবার দাও</label><input class="fi" id="ob-pw2" type="${ob.show?'text':'password'}" autocomplete="new-password" value="${esc(ob.pw2)}"><div class="err" id="e-pw2"></div>
   <div class="warn">⚠️ পাসওয়ার্ড ভুলে গেলে ফেরত আনার উপায় নেই, কারণ সব তথ্য শুধু এই ডিভাইসে থাকে। এটি এই ফোনের জন্য একটি লক — অনলাইন অ্যাকাউন্ট নয়।</div>
   <div class="gb"><button class="btn g" data-ob="back">‹ আগে</button><button class="btn p" data-ob="finish" data-primary>✓ শুরু করো</button></div></div>`}
const obAvatar=sz=>ob.photo?`<img class="av" style="width:${sz}px;height:${sz}px" src="${ob.photo}" alt="">`:`<span class="av" style="width:${sz}px;height:${sz}px;font-size:${Math.round(sz*.42)}px">${esc((ob.name.trim()||'?').charAt(0).toUpperCase())}</span>`;
const rulesHTML=()=>pwRules(ob.pw,ob.name,ob.phone).map(r=>`<li class="${r[1]?'ok':''}">${r[0]}</li>`).join('');

function showOnboarding(){gate(obHTML());setTimeout(()=>{const f=G('gate').querySelector('input');if(f&&matchMedia('(min-width:600px)').matches)f.focus()},100)}
function gateInput(e){
  const t=e.target;
  if(t.id==='ob-name'){ob.name=t.value;t.classList.remove('bad');G('e-name').textContent=''}
  if(t.id==='ob-phone'){ob.phone=t.value;t.classList.remove('bad');G('e-phone').textContent=''}
  if(t.id==='ob-pw'){ob.pw=t.value;G('meter').className='meter s'+pwScore(ob.pw);G('rules').innerHTML=rulesHTML()}
  if(t.id==='ob-pw2'){ob.pw2=t.value;G('e-pw2').textContent=''}
}
async function gateClick(e){
  const b=e.target.closest('[data-ob]');if(!b)return;const a=b.dataset.ob;
  if(a==='next'){
    if(ob.step===1){
      let ok=true;const nm=ob.name.trim();
      if(nm.length<2){G('e-name').textContent='নাম কমপক্ষে ২ অক্ষরের হতে হবে';G('ob-name').classList.add('bad');ok=false}
      if(!normPhone(ob.phone)){G('e-phone').textContent='সঠিক বাংলাদেশি মোবাইল নম্বর দাও (যেমন 017XXXXXXXX)';G('ob-phone').classList.add('bad');ok=false}
      if(!ok){const c=G('gate').querySelector('.gc');c.classList.remove('shake');void c.offsetWidth;c.classList.add('shake');return}
    }
    ob.step++;gate(obHTML());return}
  if(a==='back'){ob.step--;gate(obHTML());return}
  if(a==='cam'||a==='gal'){pickPhoto(d=>{ob.photo=d;gate(obHTML())},a==='cam');return}
  if(a==='rm'){ob.photo=null;gate(obHTML());return}
  if(a==='eye'){ob.show=!ob.show;const p1=G('ob-pw'),p2=G('ob-pw2');p1.type=p2.type=ob.show?'text':'password';b.textContent=ob.show?'🙈':'👁️';return}
  if(a==='restore'){restorePick();return}
  if(a==='finish'){
    const rules=pwRules(ob.pw,ob.name.trim(),normPhone(ob.phone));
    if(!rules.every(r=>r[1])){toast('পাসওয়ার্ডের সব শর্ত পূরণ করো');const c=G('gate').querySelector('.gc');c.classList.remove('shake');void c.offsetWidth;c.classList.add('shake');return}
    if(ob.pw!==ob.pw2){G('e-pw2').textContent='দুটি পাসওয়ার্ড মেলেনি';return}
    if(!(window.crypto&&crypto.subtle)){toast('এই ব্রাউজারে নিরাপদ পাসওয়ার্ড সম্ভব নয়। https লিংকে খোলো।');return}
    b.disabled=true;b.textContent='সংরক্ষণ হচ্ছে…';
    try{const pw=await makePw(ob.pw);
      state.profile={name:ob.name.trim(),phone:normPhone(ob.phone),photo:ob.photo,created:Date.now(),pw};
      save();ob={step:1,name:'',phone:'',photo:null,pw:'',pw2:'',show:false};
      try{sessionStorage.setItem('se40-ok','1')}catch(x){}
      closeGate();await startApp();toast('✅ প্রোফাইল তৈরি হয়েছে। শুরু করো!');
    }catch(x){b.disabled=false;b.textContent='✓ শুরু করো';toast('সংরক্ষণ করা যায়নি, আবার চেষ্টা করো')}
    return}
  /* আনলক */
  if(a==='unlock'){await tryUnlock();return}
  if(a==='forgot'){gate(`<div class="gc fm"><h2>পাসওয়ার্ড ভুলে গেছ?</h2><p class="sb2">দুঃখিত, পাসওয়ার্ড ফেরত আনা সম্ভব নয়</p>
    <div class="warn">নতুন করে শুরু করলে এই ফোনের <b>প্রোফাইল, সব অগ্রগতি ও PDF লাইব্রেরি মুছে যাবে</b>। এটি ফেরানো যাবে না। (আগে নেওয়া ব্যাকআপ থাকলে সেটি দিয়ে অগ্রগতি ফেরানো যাবে, তবে পাসওয়ার্ড একই থাকবে।)</div>
    <label class="chk"><input type="checkbox" id="fg-ok"><span>আমি বুঝেছি, সব মুছে নতুন করে শুরু করতে চাই</span></label>
    <div class="gb"><button class="btn g" data-ob="unlockback">‹ ফিরে যাও</button><button class="btn d" data-ob="wipe">সব মুছে শুরু করো</button></div></div>`);return}
  if(a==='unlockback'){showUnlock();return}
  if(a==='wipe'){if(!G('fg-ok').checked){toast('আগে নিশ্চিতকরণ বক্সে টিক দাও');return}await wipeAll();return}
}
let tries=0,lockUntil=0;
function showUnlock(){const p=state.profile;
  gate(`<div class="gc fm"><div class="ulav">${avatar(96)}</div><h2>স্বাগতম, ${esc(p.name.split(' ')[0])}!</h2><p class="sb2">অ্যাপ খুলতে পাসওয়ার্ড দাও</p>
   <label for="un-pw">পাসওয়ার্ড</label><div class="pwr"><input class="fi" id="un-pw" type="password" autocomplete="current-password" autofocus><button class="eye" data-ob="eye2" aria-label="দেখাও/লুকাও">👁️</button></div><div class="err" id="e-un"></div>
   <div class="gb"><button class="btn p" data-ob="unlock" data-primary>🔓 খোলো</button></div>
   <button class="lnk" data-ob="forgot">পাসওয়ার্ড ভুলে গেছ?</button></div>`);
  G('gate').addEventListener('click',e=>{const b=e.target.closest('[data-ob="eye2"]');if(b){const i=G('un-pw');i.type=i.type==='password'?'text':'password';b.textContent=i.type==='password'?'👁️':'🙈'}});
  setTimeout(()=>{const i=G('un-pw');if(i&&matchMedia('(min-width:600px)').matches)i.focus()},120)}
async function tryUnlock(){
  const i=G('un-pw'),er=G('e-un');if(!i)return;
  if(Date.now()<lockUntil){er.textContent='অনেকবার ভুল হয়েছে। '+bn(Math.ceil((lockUntil-Date.now())/1000))+' সেকেন্ড পরে চেষ্টা করো।';return}
  if(!i.value){er.textContent='পাসওয়ার্ড লেখো';return}
  let ok=false;try{ok=await checkPw(i.value,state.profile.pw)}catch(e){er.textContent='যাচাই করা যায়নি (ব্রাউজার সাপোর্ট করছে না)';return}
  if(ok){tries=0;try{sessionStorage.setItem('se40-ok','1')}catch(e){}closeGate();await startApp();return}
  tries++;i.value='';i.classList.add('bad');const c=G('gate').querySelector('.gc');c.classList.remove('shake');void c.offsetWidth;c.classList.add('shake');
  if(tries>=5){lockUntil=Date.now()+30000;tries=0;er.textContent='৫ বার ভুল! ৩০ সেকেন্ড অপেক্ষা করো।'}else er.textContent='ভুল পাসওয়ার্ড (আর '+bn(5-tries)+' বার চেষ্টা করা যাবে)'}
async function wipeAll(){
  try{const db=await getDB();if(db)db.close()}catch(e){}
  try{localStorage.clear();sessionStorage.clear()}catch(e){}
  try{await new Promise(r=>{const q=indexedDB.deleteDatabase('se40-db');q.onsuccess=q.onerror=q.onblocked=()=>r()})}catch(e){}
  try{const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)))}catch(e){}
  location.hash='';location.reload()}

/* ব্যাকআপ থেকে ফেরানো (গেট থেকে) */
function restorePick(){const i=G('rfile');if(i)i.click()}

/* বুট */
async function boot(){
  if(!state.profile){showOnboarding();return}
  let ok=false;try{ok=sessionStorage.getItem('se40-ok')==='1'}catch(e){}
  if(ok){await startApp();return}
  showUnlock()}
async function startApp(){try{await loadBooks()}catch(e){books=[]}
  if(!location.hash||location.hash==='#')history.replaceState(null,'',location.pathname+location.search);
  onRoute();paintChrome()}
function paintChrome(){renderSide()}
function lockApp(){try{sessionStorage.removeItem('se40-ok')}catch(e){}closeReaderIfAny();showUnlock()}

/* =====================================================================
   দৈনিক মনিটরিং
   ===================================================================== */
function dayStats(){const m={};
  for(const k of Object.keys(state.at||{})){const[d,t]=k.split('-').map(Number);if(!state.t[k]||!(d>=1&&d<=40))continue;
   const key=dk(state.at[k]),T=tasksOf(d)[t];m[key]=m[key]||{n:0,min:0};m[key].n++;m[key].min+=T?T.m:0}
  return m}
function calStreak(S){
  const keys=Object.keys(S).filter(k=>S[k].n>0).sort();let best=0,run=0,prev=null;
  for(const k of keys){const d=new Date(k+'T00:00:00');if(prev&&Math.round((d-prev)/864e5)===1)run++;else run=1;best=Math.max(best,run);prev=d}
  let cur=0;const d=new Date();d.setHours(0,0,0,0);if(!(S[dk(d)]&&S[dk(d)].n))d.setDate(d.getDate()-1);
  while(S[dk(d)]&&S[dk(d)].n){cur++;d.setDate(d.getDate()-1)}
  return{cur,best}}
const mins=s=>Math.round(s/60);
function hm(m){return m>=60?bn(Math.floor(m/60))+' ঘণ্টা '+(m%60?bn(m%60)+' মি':''):bn(m)+' মিনিট'}

function vProfile(){
  const p=state.profile||{name:'',phone:''},S=dayStats(),today=dk(Date.now()),T=S[today]||{n:0,min:0},rs=mins(state.read[today]||0);
  const st=calStreak(S),totTasks=Object.values(S).reduce((a,x)=>a+x.n,0),totMin=Object.values(S).reduce((a,x)=>a+x.min,0);
  const totRead=mins(Object.values(state.read||{}).reduce((a,x)=>a+x,0)),pages=books.reduce((a,b)=>a+(b.page||0),0);
  const nd=nextDay();
  /* ৭ দিন */
  const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-i);days.push(d)}
  const mx=Math.max(6,...days.map(d=>(S[dk(d)]||{n:0}).n));
  /* ৩৫ দিন */
  const cal=[];for(let i=34;i>=0;i--){const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()-i);cal.push(d)}
  const C=2*Math.PI*30;
  return`<div class="view">
  <div class="card phead st"><div style="position:relative;display:inline-block">${avatar(104)}<button class="rb" data-ax="photo-edit" style="position:absolute;right:-6px;bottom:-4px;min-width:36px;height:36px;border-radius:50%;background:var(--acc);color:#fff;font-size:1rem" aria-label="ছবি বদলাও">📷</button></div>
   <h1>${esc(p.name)}</h1><div class="ph1">📱 ${fmtPhone(p.phone)}${p.created?' · সদস্য: '+bn(new Date(p.created).getDate())+' '+MONTHS[new Date(p.created).getMonth()]:''}</div>
   <div class="acts"><button class="btn g" data-ax="editprofile">✏️ সম্পাদনা</button><button class="btn g" data-ax="pwchange">🔑 পাসওয়ার্ড বদলাও</button><button class="btn g" data-ax="lock">🔒 লক করো</button></div></div>

  <div class="h3 st" style="--i:1"><b>আজকের অগ্রগতি</b><a href="#day-${nd}">আজকের পাঠ ▶</a></div>
  <div class="card tday st" style="--i:2"><div class="rr"><svg viewBox="0 0 70 70" width="84" height="84"><circle cx="35" cy="35" r="30" fill="none" stroke="var(--line)" stroke-width="8"/><circle cx="35" cy="35" r="30" fill="none" stroke="var(--ok)" stroke-width="8" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C*(1-Math.min(1,T.n/6))}" style="transition:stroke-dashoffset .8s"/></svg><b>${bn(T.n)}/৬</b></div>
   <div class="tl"><b>${T.n>=6?'🎉 আজকের লক্ষ্য পূর্ণ!':T.n?'ভালো চলছে, চালিয়ে যাও!':'আজ এখনো শুরু হয়নি'}</b><div>✅ কাজ শেষ: <b>${bn(T.n)}টি</b></div><div>⏱ পড়াশোনা: <b>${hm(T.min)}</b></div><div>📖 বই পড়া: <b>${hm(rs)}</b></div></div></div>

  <div class="h3 st" style="--i:3"><b>গত ৭ দিন</b></div>
  <div class="card st" style="--i:4;padding:12px"><div class="wk">${days.map(d=>{const n=(S[dk(d)]||{n:0}).n;return`<div class="c"><span class="v">${n?bn(n):''}</span><div class="bar2 ${n?'f':''}" style="height:${Math.max(4,n/mx*80)}%"></div><small>${WD[d.getDay()]}</small></div>`}).join('')}</div><div class="hint" style="text-align:center;margin-top:6px">প্রতিদিন সম্পন্ন কাজের সংখ্যা (সর্বোচ্চ ৬)</div></div>

  <div class="h3 st" style="--i:5"><b>গত ৩৫ দিনের ক্যালেন্ডার</b></div>
  <div class="card st" style="--i:6;padding:14px"><div class="cal">${cal.map(d=>{const k=dk(d),n=(S[k]||{n:0}).n,l=n>=6?3:n>=3?2:n>=1?1:0;return`<button class="${l?'l'+l:''} ${k===today?'td':''}" data-ax="daytip" data-v="${k}" aria-label="${k}">${bn(d.getDate())}</button>`}).join('')}</div>
   <div style="display:flex;gap:12px;font-size:.74rem;color:var(--mute);margin-top:10px;flex-wrap:wrap"><span>⬜ ০</span><span>🟩 ১–২</span><span>🟩 ৩–৫</span><span>🟢 ৬ (পূর্ণ)</span></div><div class="hint" id="dtip" style="margin-top:6px">কোনো দিনে ট্যাপ করলে বিস্তারিত দেখাবে</div></div>

  <div class="h3 st" style="--i:7"><b>সামগ্রিক পরিসংখ্যান</b></div>
  <div class="kpi st" style="--i:8">
   <div class="card sc"><b>🔥 ${bn(st.cur)}</b><span>বর্তমান টানা দিন</span></div>
   <div class="card sc"><b>🏅 ${bn(st.best)}</b><span>সর্বোচ্চ টানা দিন</span></div>
   <div class="card sc"><b>${bn(doneDays())}/৪০</b><span>দিন সম্পন্ন</span></div>
   <div class="card sc"><b>${bn(totTasks)}</b><span>কাজ শেষ (তারিখসহ)</span></div>
   <div class="card sc"><b>${hm(totMin)}</b><span>মোট পড়াশোনা</span></div>
   <div class="card sc"><b>${hm(totRead)}</b><span>বই পড়ার সময়</span></div>
   <div class="card sc"><b>${bn(books.length)}</b><span>লাইব্রেরির বই</span></div>
   <div class="card sc"><b>${bn(pages)}</b><span>বইয়ের পৃষ্ঠা পড়া</span></div>
   <div class="card sc"><b>${bn(Object.values(state.c||{}).filter(Boolean).length)}/২৪</b><span>চেকপয়েন্ট</span></div>
  </div>
  <div class="hint st" style="--i:9;margin-top:10px">ℹ️ আগের ভার্সনে সম্পন্ন করা কাজের তারিখ রেকর্ড নেই; ক্যালেন্ডার ও টানা দিন নতুন কাজ থেকে গণনা হয়।</div>
  <div class="h3 st" style="--i:10"><b>আরও</b></div>
  <div class="card st" style="--i:11;padding:12px;display:flex;flex-direction:column;gap:8px"><button class="btn g blk" data-go="progress">📊 কোর্সের পূর্ণ অগ্রগতি ও ব্যাকআপ</button><button class="btn g blk" data-go="curriculum">📘 কারিকুলাম</button></div></div>`}

/* প্রোফাইল সম্পাদনা */
let editPhoto=undefined;
function formModal(html){layer(`<div class="modal fm">${html}</div>`,true)}
function editProfile(){const p=state.profile;editPhoto=undefined;
  formModal(`<h3>প্রোফাইল সম্পাদনা</h3><div class="photo"><div id="ep-av">${avatar(96)}</div><div class="row"><button class="btn g" data-ax="ep-photo">🖼️ ছবি বদলাও</button><button class="btn d" data-ax="ep-rm">✕ সরাও</button></div></div>
  <label for="ep-name">নাম</label><input class="fi" id="ep-name" value="${esc(p.name)}" maxlength="40" autocomplete="name"><div class="err" id="ep-en"></div>
  <label for="ep-phone">মোবাইল নম্বর</label><input class="fi" id="ep-phone" type="tel" inputmode="tel" value="${esc(p.phone)}" maxlength="17"><div class="err" id="ep-ep"></div>
  <div class="btns"><button class="btn p" data-ax="ep-save">সংরক্ষণ করো</button><button class="btn g" data-act="close">বাতিল</button></div>`)}
function pwModal(){formModal(`<h3>পাসওয়ার্ড বদলাও</h3>
  <label for="pc-old">বর্তমান পাসওয়ার্ড</label><input class="fi" id="pc-old" type="password" autocomplete="current-password"><div class="err" id="pc-e0"></div>
  <label for="pc-new">নতুন পাসওয়ার্ড</label><input class="fi" id="pc-new" type="password" autocomplete="new-password"><ul class="rules" id="pc-rules"></ul><div class="meter s0" id="pc-meter"><i></i><i></i><i></i><i></i></div>
  <label for="pc-new2">নতুন পাসওয়ার্ড আবার</label><input class="fi" id="pc-new2" type="password" autocomplete="new-password"><div class="err" id="pc-e2"></div>
  <div class="btns"><button class="btn p" data-ax="pc-save">বদলাও</button><button class="btn g" data-act="close">বাতিল</button></div>`);
  const upd=()=>{const v=G('pc-new').value;G('pc-meter').className='meter s'+pwScore(v);G('pc-rules').innerHTML=pwRules(v,state.profile.name,state.profile.phone).map(r=>`<li class="${r[1]?'ok':''}">${r[0]}</li>`).join('')};
  G('pc-new').addEventListener('input',upd);upd()}

/* =====================================================================
   লাইব্রেরি (PDF)
   ===================================================================== */
let books=[],lib={q:'',shelf:'all',sort:'recent'};
const shelves=()=>state.shelves||(state.shelves=['ব্যাকরণ','শব্দভাণ্ডার','শোনা ও বলা','অন্যান্য']);
async function loadBooks(){try{books=(await idbAll('meta'))||[]}catch(e){books=[]}}
const bpct=b=>b.pages?Math.min(100,Math.round(((b.page||1))/b.pages*100)):0;
function filtered(){
  let l=books.slice();const q=lib.q.trim().toLowerCase();
  if(q)l=l.filter(b=>b.title.toLowerCase().includes(q));
  if(lib.shelf==='fav')l=l.filter(b=>b.fav);else if(lib.shelf!=='all')l=l.filter(b=>b.shelf===lib.shelf);
  if(lib.sort==='name')l.sort((a,b)=>a.title.localeCompare(b.title,'bn'));
  else if(lib.sort==='progress')l.sort((a,b)=>bpct(b)-bpct(a));
  else l.sort((a,b)=>(b.last||b.added)-(a.last||a.added));
  return l}
function gridHTML(){const l=filtered();
  if(!books.length)return`<div class="empty"><div class="em">📚</div><b>তোমার লাইব্রেরি খালি</b>ফোন থেকে PDF বই যোগ করো। বই এই ফোনেই সংরক্ষিত থাকবে, অফলাইনেও পড়া যাবে এবং শেষ পড়া পৃষ্ঠা মনে রাখা হবে।<div style="margin-top:16px"><button class="btn p" data-ax="addbook">＋ PDF যোগ করো</button></div></div>`;
  if(!l.length)return`<div class="empty"><div class="em">🔎</div><b>কিছু পাওয়া যায়নি</b>অন্য শব্দে খোঁজো বা অন্য শেলফ বেছে নাও।</div>`;
  return`<div class="bgrid">${l.map((b,i)=>`<div class="bk" style="animation-delay:${Math.min(i,12)*40}ms" data-ax="openbook" data-id="${b.id}" role="button" tabindex="0"><div class="cv">${b.cover?`<img src="${b.cover}" alt="" loading="lazy">`:'📕'}</div>${b.fav?'<span class="st1">⭐</span>':''}<button class="mn" data-ax="bookmenu" data-id="${b.id}" aria-label="বইয়ের মেনু">⋮</button><div class="bi"><div class="bt">${esc(b.title)}</div><div class="bm">${esc(b.shelf||'শেলফ নেই')} · ${b.pages?bn(b.page||1)+'/'+bn(b.pages)+' পৃষ্ঠা':''}</div><div class="mb"><i style="width:${bpct(b)}%"></i></div></div></div>`).join('')}</div>`}
function vLibrary(){
  const chips=[['all','সব'],['fav','⭐ প্রিয়'],...shelves().map(s=>[s,s])];
  return`<div class="view"><h1 class="pt st">📚 আমার লাইব্রেরি</h1><p class="sub st" style="--i:1">নিজের PDF বই যোগ করো, সাজিয়ে রাখো ও ফোনেই পড়ো</p>
  <div class="lbar st" style="--i:2"><input class="fi" id="lib-q" type="search" placeholder="🔎 বই খোঁজো…" value="${esc(lib.q)}" autocomplete="off"><select class="fi" id="lib-sort" aria-label="সাজানো"><option value="recent" ${lib.sort==='recent'?'selected':''}>সাম্প্রতিক</option><option value="name" ${lib.sort==='name'?'selected':''}>নাম</option><option value="progress" ${lib.sort==='progress'?'selected':''}>অগ্রগতি</option></select></div>
  <div class="chips st" style="--i:3" id="lib-chips">${chips.map(c=>`<button class="chip ${lib.shelf===c[0]?'on':''}" data-ax="shelf" data-v="${esc(c[0])}">${esc(c[1])}</button>`).join('')}<button class="chip" data-ax="newshelf">＋ নতুন শেলফ</button></div>
  <div class="sbar st" style="--i:4" id="lib-storage">${books.length?bn(books.length)+'টি বই · ':''}<span id="lib-use"></span></div>
  <div id="bgrid">${gridHTML()}</div>
  <button class="fab" data-ax="addbook" aria-label="PDF যোগ করো">＋</button></div>`}
async function storageInfo(){try{if(navigator.storage&&navigator.storage.estimate){const e=await navigator.storage.estimate();const el=G('lib-use');if(el)el.textContent='ব্যবহৃত: '+((e.usage||0)/1048576).toFixed(1).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d])+' MB'+(e.quota?' / '+Math.round(e.quota/1048576).toString().replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d])+' MB':'')}}catch(e){}}
function renderGrid(){const g=G('bgrid');if(g)g.innerHTML=gridHTML();const c=G('lib-chips');if(c)c.querySelectorAll('.chip[data-v]').forEach(x=>x.classList.toggle('on',x.dataset.v===lib.shelf))}

let pdfP=null;
function ensurePdf(){if(window.pdfjsLib)return Promise.resolve();
  return pdfP||(pdfP=new Promise((res,rej)=>{const s=document.createElement('script');s.src='vendor/pdf.min.js';s.onload=()=>{pdfjsLib.GlobalWorkerOptions.workerSrc='vendor/pdf.worker.min.js';res()};s.onerror=()=>{pdfP=null;rej(new Error('pdfjs'))};document.head.appendChild(s)}))}
function pickBooks(){const i=document.createElement('input');i.type='file';i.accept='application/pdf,.pdf';i.multiple=true;i.onchange=()=>addBooks([...i.files]);i.click()}
const bid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
async function addBooks(files){
  if(!files.length)return;
  try{await getDB().then(d=>{if(!d)throw 0});await ensurePdf()}catch(e){toast('এই ব্রাউজারে লাইব্রেরি চালু করা যায়নি');return}
  let ok=0,i=0;
  for(const f of files){i++;
    if(!/\.pdf$/i.test(f.name)&&f.type!=='application/pdf'){toast('PDF নয়: '+f.name);continue}
    toast('যোগ হচ্ছে… '+bn(i)+'/'+bn(files.length));
    try{
      const buf=await f.arrayBuffer();
      const pdf=await pdfjsLib.getDocument({data:buf.slice(0)}).promise;
      let cover=null;try{const pg=await pdf.getPage(1),v0=pg.getViewport({scale:1}),vp=pg.getViewport({scale:240/v0.width}),c=document.createElement('canvas');c.width=vp.width;c.height=vp.height;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);await pg.render({canvasContext:x,viewport:vp}).promise;cover=c.toDataURL('image/jpeg',.72)}catch(e){}
      const id=bid(),meta={id,title:f.name.replace(/\.pdf$/i,'').replace(/[_]+/g,' '),size:f.size,added:Date.now(),last:0,page:1,pages:pdf.numPages,shelf:'',fav:false,cover,sec:0};
      await idbPut('blobs',id,new Blob([buf],{type:'application/pdf'}));await idbPut('meta',id,meta);pdf.destroy();ok++;
    }catch(e){toast('খোলা যায়নি (নষ্ট বা পাসওয়ার্ড-সুরক্ষিত): '+f.name)}
  }
  await loadBooks();if(route.n==='library')paint(true);
  if(ok)toast('✅ '+bn(ok)+'টি বই যোগ হয়েছে')}
function bookModal(id){const b=books.find(x=>x.id===id);if(!b)return;
  formModal(`<h3>বইয়ের তথ্য</h3><label for="bm-t">নাম</label><input class="fi" id="bm-t" value="${esc(b.title)}" maxlength="120">
  <label for="bm-s">শেলফ</label><select class="fi" id="bm-s"><option value="">— শেলফ নেই —</option>${shelves().map(s=>`<option ${b.shelf===s?'selected':''} value="${esc(s)}">${esc(s)}</option>`).join('')}</select>
  <label class="chk"><input type="checkbox" id="bm-f" ${b.fav?'checked':''}><span>⭐ প্রিয় বইয়ে রাখো</span></label>
  <div class="hint">সাইজ: ${(b.size/1048576).toFixed(1).replace(/\d/g,d=>'০১২৩৪৫৬৭৮৯'[d])} MB · ${bn(b.pages)} পৃষ্ঠা · ${hm(mins(b.sec||0))} পড়া হয়েছে</div>
  <div class="btns"><button class="btn p" data-ax="bm-save" data-id="${id}">সংরক্ষণ করো</button><button class="btn d" data-ax="bm-del" data-id="${id}">🗑️ বই মুছো</button><button class="btn g" data-act="close">বাতিল</button></div>`)}
function shelfModal(){formModal(`<h3>নতুন শেলফ</h3><label for="sh-n">শেলফের নাম</label><input class="fi" id="sh-n" maxlength="24" placeholder="যেমন: IELTS, গল্পের বই"><div class="err" id="sh-e"></div><div class="btns"><button class="btn p" data-ax="sh-save">তৈরি করো</button><button class="btn g" data-act="close">বাতিল</button></div>`);setTimeout(()=>{const i=G('sh-n');if(i)i.focus()},330)}

/* =====================================================================
   রিডার
   ===================================================================== */
let rd=null;
function closeReaderIfAny(){if(rd)closeReader()}
async function openReader(id){
  if(rd&&rd.id===id)return;
  if(rd)closeReader();
  const meta=books.find(b=>b.id===id);
  if(!meta){toast('বইটি পাওয়া যায়নি');go('library');return}
  document.body.classList.add('lock');
  const el=document.createElement('div');el.id='reader';if(state.seen.rnight)el.classList.add('night');
  el.innerHTML=`<div class="rtop"><button class="rb" data-ax="rdclose" aria-label="ফিরে যাও">‹</button><div class="t">${esc(meta.title)}</div><button class="rb pg" data-ax="rdjump" id="rd-pg">–</button><button class="rb" data-ax="rdzoom" data-v="-1" aria-label="ছোট করো">−</button><button class="rb" data-ax="rdzoom" data-v="1" aria-label="বড় করো">+</button><button class="rb" data-ax="rdnight" aria-label="নাইট মোড">🌙</button></div>
   <div id="rd" style="position:relative"><div class="rload"><div class="spin"></div>খুলছে…</div></div>
   <div class="rbot"><span id="rd-l">১</span><input type="range" id="rd-r" min="1" max="${meta.pages||1}" value="${meta.page||1}" aria-label="পৃষ্ঠা"><span id="rd-t">${bn(meta.pages||1)}</span></div>`;
  document.body.appendChild(el);
  const me={id,meta,pdf:null,zoom:1,ratio:1.4,ratios:[],st:[],pageW:300,cur:meta.page||1,target:meta.page||1,settle:true,tick:0,raf:0,sv:0,tm:null,tk:0};rd=me;
  try{
    await ensurePdf();const blob=await idbGetS('blobs',id);if(!blob)throw 0;
    const pdf=await pdfjsLib.getDocument({data:await blob.arrayBuffer()}).promise;if(rd!==me){pdf.destroy();return}
    me.pdf=pdf;const n=pdf.numPages;if(n!==meta.pages){meta.pages=n;G('rd-r').max=n;G('rd-t').textContent=bn(n)}
    const p1=await pdf.getPage(1),v=p1.getViewport({scale:1});me.ratio=v.height/v.width;
    const cont=G('rd');cont.innerHTML='<div id="pages"></div>';const pages=G('pages');
    for(let i=1;i<=n;i++){const d=document.createElement('div');d.className='pgx';d.id='pg'+i;d.innerHTML=`<div class="pn">${bn(i)}</div>`;pages.appendChild(d);me.st[i]={done:null,busy:false,task:null}}
    layoutPages();
    cont.addEventListener('scroll',onRdScroll,{passive:true});
    me.target=Math.min(Math.max(1,me.target),n);scrollToPage(me.target);renderVisible();
    me.tick=setInterval(rdTick,5000);
    setTimeout(()=>{me.settle=false},2500);
    updatePg();
  }catch(e){toast('এই PDF খোলা যায়নি');if(rd===me){closeReader();go('library')}}
}
function pageW(){const c=G('rd');return Math.max(220,(c.clientWidth-16))*rd.zoom}
function layoutPages(){const n=rd.pdf.numPages;rd.pageW=pageW();
  for(let i=1;i<=n;i++){const d=G('pg'+i);d.style.width=rd.pageW+'px';d.style.height=Math.round(rd.pageW*(rd.ratios[i]||rd.ratio))+'px'}}
function scrollToPage(p){const d=G('pg'+p),c=G('rd');if(d&&c)c.scrollTop=d.offsetTop-8}
function currentPage(){const c=G('rd'),n=rd.pdf.numPages,y=c.scrollTop+c.clientHeight*.35;
  let lo=1,hi=n;while(lo<hi){const m=(lo+hi)>>1,d=G('pg'+m);if(d.offsetTop+d.offsetHeight<y)lo=m+1;else hi=m}return lo}
function onRdScroll(){if(!rd||rd.raf)return;rd.raf=requestAnimationFrame(()=>{if(!rd)return;rd.raf=0;rd.cur=currentPage();updatePg();renderVisible();if(!rd.settle){rd.target=rd.cur;persistPos()}})}
function updatePg(){if(!rd||!rd.pdf)return;const n=rd.pdf.numPages;const b=G('rd-pg');if(b)b.textContent=bn(rd.cur)+' / '+bn(n);const r=G('rd-r');if(r&&document.activeElement!==r)r.value=rd.cur;const l=G('rd-l');if(l)l.textContent=bn(rd.cur)}
function persistPos(){if(!rd)return;clearTimeout(rd.sv);rd.sv=setTimeout(flushPos,1200)}
function flushPos(){if(!rd)return;const m=books.find(b=>b.id===rd.id);if(!m)return;m.page=rd.cur;m.last=Date.now();idbPut('meta',m.id,m).catch(()=>{})}
function rdTick(){if(!rd||document.visibilityState!=='visible')return;const m=books.find(b=>b.id===rd.id);if(m)m.sec=(m.sec||0)+5;const k=dk(Date.now());state.read[k]=(state.read[k]||0)+5;
  if(++rd.tk%6===0||!rd.tk){save();flushPos()}}
function renderVisible(){if(!rd||!rd.pdf)return;const c=G('rd'),top=c.scrollTop,h=c.clientHeight,n=rd.pdf.numPages;
  let lo=Math.max(1,currentPage()-1);const near=[],far=[];
  for(let i=Math.max(1,lo-3);i<=n;i++){const d=G('pg'+i),t=d.offsetTop;if(t>top+h+h*1.5)break;if(t+d.offsetHeight>=top-h*1.5)near.push(i)}
  near.forEach(renderPage);
  const keepLo=near[0]||1,keepHi=near[near.length-1]||1;
  for(let i=1;i<=n;i++){if(i>=keepLo-4&&i<=keepHi+4)continue;const s=rd.st[i];if(s.done!==null){const cv=G('pg'+i).querySelector('canvas');if(cv){cv.width=0;cv.height=0;cv.remove()}s.done=null}}}
async function renderPage(p){
  const me=rd;if(!me)return;const st=me.st[p],key=me.zoom+'|'+me.pageW;if(st.busy||st.done===key)return;st.busy=true;
  try{
    const page=await me.pdf.getPage(p);if(rd!==me)return;
    const v1=page.getViewport({scale:1});const ratio=v1.height/v1.width;const pw=me.pageW;
    const dpr=Math.min(window.devicePixelRatio||1,2),scale=pw/v1.width*dpr;
    let vp=page.getViewport({scale});const maxPx=16e6;if(vp.width*vp.height>maxPx){vp=page.getViewport({scale:scale*Math.sqrt(maxPx/(vp.width*vp.height))})}
    const d=G('pg'+p);if(!d)return;
    const c=document.createElement('canvas');c.width=Math.floor(vp.width);c.height=Math.floor(vp.height);c.style.width=pw+'px';c.style.height=Math.round(pw*ratio)+'px';
    const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);
    st.task=page.render({canvasContext:x,viewport:vp});await st.task.promise;if(rd!==me)return;
    const old=d.querySelector('canvas');if(old)old.remove();const pn=d.querySelector('.pn');if(pn)pn.remove();d.appendChild(c);
    if(Math.abs((me.ratios[p]||0)-ratio)>.001){const before=G('rd').scrollTop,pc=currentPage();me.ratios[p]=ratio;d.style.height=Math.round(pw*ratio)+'px';if(p<pc&&!me.settle)G('rd').scrollTop=before+(Math.round(pw*ratio)-Math.round(pw*(me.ratio)));}
    else d.style.height=Math.round(pw*ratio)+'px';
    st.done=key;
    if(me.settle&&p===me.target)scrollToPage(p);
  }catch(e){/* বাতিল */}finally{st.busy=false}}
function rdZoom(dir){if(!rd||!rd.pdf)return;const nz=Math.min(3,Math.max(.6,+(rd.zoom+dir*.2).toFixed(2)));if(nz===rd.zoom)return;
  const p=currentPage(),d=G('pg'+p),c=G('rd'),frac=(c.scrollTop-d.offsetTop)/Math.max(1,d.offsetHeight);
  rd.zoom=nz;for(let i=1;i<=rd.pdf.numPages;i++){const cv=G('pg'+i).querySelector('canvas');if(cv){cv.width=0;cv.remove()}rd.st[i].done=null}
  layoutPages();const d2=G('pg'+p);c.scrollTop=d2.offsetTop+frac*d2.offsetHeight;renderVisible();toast('জুম: '+bn(Math.round(nz*100))+'%')}
function closeReader(){
  if(!rd)return;const me=rd;rd=null;
  try{clearInterval(me.tick);clearTimeout(me.sv)}catch(e){}
  const m=books.find(b=>b.id===me.id);if(m&&me.pdf){m.page=me.cur;m.last=Date.now();idbPut('meta',m.id,m).catch(()=>{})}
  save();try{me.pdf&&me.pdf.destroy()}catch(e){}
  const el=G('reader');if(el)el.remove();document.body.classList.remove('lock');}
function jumpModal(){if(!rd)return;formModal(`<h3>পৃষ্ঠায় যাও</h3><label for="jp">পৃষ্ঠা নম্বর (১–${bn(rd.pdf.numPages)})</label><input class="fi" id="jp" type="number" inputmode="numeric" min="1" max="${rd.pdf.numPages}" value="${rd.cur}"><div class="btns"><button class="btn p" data-ax="jp-go">যাও</button><button class="btn g" data-act="close">বাতিল</button></div>`);setTimeout(()=>{const i=G('jp');if(i){i.focus();i.select()}},330)}

/* =====================================================================
   ইভেন্ট
   ===================================================================== */
const AX={
 addbook:()=>pickBooks(),
 openbook:a=>go('read-'+a.dataset.id),
 bookmenu:(a,e)=>{e.stopPropagation();bookModal(a.dataset.id)},
 shelf:a=>{lib.shelf=a.dataset.v;renderGrid()},
 newshelf:()=>shelfModal(),
 'sh-save':()=>{const v=G('sh-n').value.trim();if(!v){G('sh-e').textContent='নাম লেখো';return}if(shelves().includes(v)||v==='সব'){G('sh-e').textContent='এই নামে শেলফ আছে';return}shelves().push(v);save();closeLayer();lib.shelf=v;paint(true);toast('✅ শেলফ তৈরি হয়েছে')},
 'bm-save':async a=>{const b=books.find(x=>x.id===a.dataset.id);if(!b)return;const t=G('bm-t').value.trim();b.title=t||b.title;b.shelf=G('bm-s').value;b.fav=G('bm-f').checked;await idbPut('meta',b.id,b);closeLayer();paint(true);toast('✅ সংরক্ষিত')},
 'bm-del':a=>{const id=a.dataset.id,b=books.find(x=>x.id===id);formModal(`<div class="em" style="text-align:center;font-size:3rem">🗑️</div><h3>বইটি মুছবে?</h3><p style="text-align:center;color:var(--mute)">“${esc(b.title)}” এই ফোন থেকে মুছে যাবে।</p><div class="btns"><button class="btn d" data-ax="bm-del-yes" data-id="${id}">হ্যাঁ, মুছো</button><button class="btn g" data-act="close">না</button></div>`)},
 'bm-del-yes':async a=>{const id=a.dataset.id;try{await idbDel('blobs',id);await idbDel('meta',id)}catch(e){}await loadBooks();closeLayer();paint(true);toast('বইটি মুছে ফেলা হয়েছে')},
 rdclose:()=>{go('library')},
 rdzoom:a=>rdZoom(+a.dataset.v),
 rdnight:()=>{const el=G('reader');state.seen.rnight=!state.seen.rnight;el.classList.toggle('night',!!state.seen.rnight);save()},
 rdjump:()=>jumpModal(),
 'jp-go':()=>{const v=Math.round(+G('jp').value);if(!rd||!(v>=1&&v<=rd.pdf.numPages)){toast('সঠিক পৃষ্ঠা নম্বর দাও');return}closeLayer();rd.settle=true;rd.cur=rd.target=v;scrollToPage(v);renderVisible();updatePg();persistPos();setTimeout(()=>{if(rd)rd.settle=false},1200)},
 editprofile:()=>editProfile(),
 'photo-edit':()=>pickPhoto(d=>{state.profile.photo=d;save();paint(true);toast('✅ ছবি বদলানো হয়েছে')}),
 'ep-photo':()=>pickPhoto(d=>{editPhoto=d;G('ep-av').innerHTML=`<img class="av" style="width:96px;height:96px" src="${d}" alt="">`}),
 'ep-rm':()=>{editPhoto=null;G('ep-av').innerHTML=`<span class="av" style="width:96px;height:96px;font-size:40px">${esc(((G('ep-name').value||'?').trim().charAt(0)||'?').toUpperCase())}</span>`},
 'ep-save':()=>{const nm=G('ep-name').value.trim(),ph=normPhone(G('ep-phone').value);let ok=true;
   G('ep-en').textContent='';G('ep-ep').textContent='';
   if(nm.length<2){G('ep-en').textContent='নাম কমপক্ষে ২ অক্ষরের হতে হবে';ok=false}
   if(!ph){G('ep-ep').textContent='সঠিক বাংলাদেশি মোবাইল নম্বর দাও';ok=false}
   if(!ok)return;state.profile.name=nm;state.profile.phone=ph;if(editPhoto!==undefined)state.profile.photo=editPhoto;save();closeLayer();paint(true);toast('✅ প্রোফাইল হালনাগাদ হয়েছে')},
 pwchange:()=>pwModal(),
 'pc-save':async()=>{const o=G('pc-old').value,n=G('pc-new').value,n2=G('pc-new2').value;['pc-e0','pc-e2'].forEach(i=>G(i).textContent='');
   let good=false;try{good=await checkPw(o,state.profile.pw)}catch(e){}
   if(!good){G('pc-e0').textContent='বর্তমান পাসওয়ার্ড ভুল';return}
   if(!pwRules(n,state.profile.name,state.profile.phone).every(r=>r[1])){toast('নতুন পাসওয়ার্ডের সব শর্ত পূরণ করো');return}
   if(n!==n2){G('pc-e2').textContent='দুটি পাসওয়ার্ড মেলেনি';return}
   state.profile.pw=await makePw(n);save();closeLayer();toast('✅ পাসওয়ার্ড বদলানো হয়েছে')},
 lock:()=>lockApp(),
 daytip:a=>{const k=a.dataset.v,S=dayStats()[k]||{n:0,min:0},d=new Date(k+'T00:00:00'),r=mins(state.read[k]||0);
   const el=G('dtip');if(el)el.innerHTML='📅 <b>'+bn(d.getDate())+' '+MONTHS[d.getMonth()]+'</b> — '+bn(S.n)+'টি কাজ · '+hm(S.min)+(r?' · বই '+hm(r):'')}
};
function extClick(e){const a=e.target.closest('[data-ax]');if(!a)return false;const f=AX[a.dataset.ax];if(f){const r=f(a,e);if(r&&r.catch)r.catch(()=>{})}return true}
document.addEventListener('input',e=>{
  if(e.target.id==='lib-q'){lib.q=e.target.value;renderGrid()}
  if(e.target.id==='rd-r'&&rd){const v=+e.target.value;rd.settle=true;rd.cur=rd.target=v;scrollToPage(v);const l=G('rd-l');if(l)l.textContent=bn(v);const b=G('rd-pg');if(b)b.textContent=bn(v)+' / '+bn(rd.pdf.numPages);renderVisible();persistPos();clearTimeout(rd.sm);rd.sm=setTimeout(()=>{if(rd)rd.settle=false},900)}});
document.addEventListener('change',e=>{if(e.target.id==='lib-sort'){lib.sort=e.target.value;renderGrid()}});
document.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('.bk')){e.preventDefault();AX.openbook(e.target)}
  if(e.key==='Escape'&&rd&&!G('layer').classList.contains('on'))go('library')});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&rd){flushPos();save()}});
window.addEventListener('pagehide',()=>{if(rd){flushPos();save()}});
window.addEventListener('resize',()=>{if(rd&&rd.pdf){clearTimeout(rd.rz);rd.rz=setTimeout(()=>{if(!rd)return;const p=currentPage();for(let i=1;i<=rd.pdf.numPages;i++){rd.st[i].done=null}layoutPages();scrollToPage(p);renderVisible()},250)}});
