/* ৬০ দিনের কনটেন্ট — ফেজ ১ ও ২ (দিন ১–২০)
   D(শিরোনাম, কীওয়ার্ড, লক্ষ্য, ছাঁচ/নিয়ম, [বাক্য: "ইংরেজি|বাংলা|উচ্চারণ"×5], [শব্দ: "ইংরেজি|বাংলা|উচ্চারণ"×10],
     [উচ্চারণ-ফোকাস: "শব্দ|উচ্চারণ|নোট"×3], [কথোপকথন: "ইংরেজি|বাংলা"×4 — পর্যায়ক্রমে A,B,A,B], বলার কাজ, টিপ) */
const C60=[];
const D=(bn,kw,g,pat,S,V,P,L,sp,tip)=>C60.push({bn,kw,g,pat,S:S.map(x=>x.split('|')),V:V.map(x=>x.split('|')),P:P.map(x=>x.split('|')),L:L.map(x=>x.split('|')),sp,tip});

/* ===== ফেজ ১: ভিত্তি (দিন ১–১০) ===== */
D("ইংরেজি বর্ণমালা ও ধ্বনি","english alphabet sounds","A–Z এর নাম ও ধ্বনি চিনে প্রতিটি অক্ষরের একটি শব্দ বলতে পারা।",
"ইংরেজিতে Capital Letter (A, B, C) ও Small Letter (a, b, c) আছে। বাক্যের শুরু ও নামের প্রথম অক্ষর Capital হয়: My name is Rina।",
["A for Apple, B for Ball.|A থেকে আপেল, B থেকে বল।|এ ফর অ্যাপল, বি ফর বল।","C for Cat, D for Dog.|C থেকে বিড়াল, D থেকে কুকুর।|সি ফর ক্যাট, ডি ফর ডগ।","E for Egg, F for Fish.|E থেকে ডিম, F থেকে মাছ।|ই ফর এগ, এফ ফর ফিশ।","G for Girl, H for Hand.|G থেকে মেয়ে, H থেকে হাত।|জি ফর গার্ল, এইচ ফর হ্যান্ড।","My name is Rina. R-I-N-A.|আমার নাম রিনা। বানান R-I-N-A।|মাই নেইম ইজ রিনা। আর-আই-এন-এ।"],
["apple|আপেল|অ্যাপল","ball|বল|বল","cat|বিড়াল|ক্যাট","dog|কুকুর|ডগ","egg|ডিম|এগ","fish|মাছ|ফিশ","girl|মেয়ে|গার্ল","hand|হাত|হ্যান্ড","ice|বরফ|আইস","juice|রস|জুস"],
["A E I O U|এ ই আই ও ইউ|এই ৫টি Vowel-এর নাম মুখস্থ করো","W|ডাবলিউ|'ডাবল-ইউ' — দুই ইউ জুড়ে","Z|জেড (UK) / জি (US)|দুটোই শুদ্ধ"],
["How do you spell your name?|আপনার নামের বানান কীভাবে করেন?","R-I-N-A. Rina.|আর-আই-এন-এ। রিনা।","Is it R as in Rose?|R কি Rose-এর R?","Yes, that is right.|হ্যাঁ, ঠিক।"],
"নিজের নাম ও পরিবারের ৩ জনের নামের বানান ইংরেজিতে অক্ষর ধরে বলো (S-O-L-I-M-A-N)।",
"ফোনে বা অফিসে নাম বলতে বানান বলা লাগে — প্রতিটি অক্ষর আলাদা করে স্পষ্ট বলো।");

D("Vowel, Consonant ও Article (a / an / the)","a an the articles","Vowel ও Consonant চিনে a, an, the সঠিকভাবে বসাতে পারা।",
"Vowel (A E I O U) দিয়ে শব্দের ধ্বনি শুরু হলে an: an apple। বাকি ক্ষেত্রে a: a cat। নির্দিষ্ট কিছু বোঝাতে the: the apple। (শব্দের লেখা নয়, শুরুর ধ্বনি দেখো: an hour, a university)",
["I have an apple.|আমার একটি আপেল আছে।|আই হ্যাভ অ্যান অ্যাপল।","She has a cat.|তার একটি বিড়াল আছে।|শি হ্যাজ আ ক্যাট।","The cat is on the table.|বিড়ালটি টেবিলের ওপর।|দ্য ক্যাট ইজ অন দ্য টেইবল।","He is an honest man.|সে একজন সৎ মানুষ।|হি ইজ অ্যান অনেস্ট ম্যান।","It is a university.|এটি একটি বিশ্ববিদ্যালয়।|ইট ইজ আ ইউনিভার্সিটি।"],
["orange|কমলা|অরেঞ্জ","umbrella|ছাতা|আমব্রেলা","hour|ঘণ্টা|আওয়ার","tree|গাছ|ট্রি","book|বই|বুক","pen|কলম|পেন","table|টেবিল|টেইবল","chair|চেয়ার|চেয়ার","door|দরজা|ডোর","window|জানালা|উইন্ডো"],
["an apple|অ্যান অ্যাপল|an + vowel জুড়ে বলো: 'অ্যানঅ্যাপল'","the|দ্য / দি|consonant-এর আগে 'দ্য', vowel-এর আগে 'দি'","hour|আওয়ার|h নীরব, তাই an hour"],
["What is this?|এটা কী?","It is a pen.|এটা একটি কলম।","And that?|আর ওটা?","That is an umbrella.|ওটা একটি ছাতা।"],
"ঘরের ১০টি জিনিস দেখে a / an / the সহ বলো: 'a chair', 'an umbrella', 'the door'…",
"লেখা নয়, শুরুর ধ্বনি দেখো: an hour (h নীরব), a university ('ইউ' ধ্বনি = consonant)।");

D("Phonics: ধ্বনি জুড়ে শব্দ পড়া","phonics for beginners","ছোট স্বরধ্বনি ও ধ্বনি জুড়ে সহজ শব্দ ঠিকভাবে পড়তে পারা।",
"ধ্বনি জুড়ে শব্দ: B-a-t = bat (ব্যাট)। ছোট স্বর: a = অ্যা (cat), e = এ (pen), i = ই (sit), o = অ (dog), u = আ (bus)।",
["The cat sat on the mat.|বিড়ালটি মাদুরে বসল।|দ্য ক্যাট স্যাট অন দ্য ম্যাট।","Ben has a red pen.|বেনের একটি লাল কলম আছে।|বেন হ্যাজ আ রেড পেন।","The pig is big.|শূকরটি বড়।|দ্য পিগ ইজ বিগ।","The dog is on the log.|কুকুরটি কাঠের গুঁড়ির ওপর।|দ্য ডগ ইজ অন দ্য লগ।","The bus is full of fun.|বাসটি মজায় ভরা।|দ্য বাস ইজ ফুল অভ ফান।"],
["bat|ব্যাট|ব্যাট","hat|টুপি|হ্যাট","red|লাল|রেড","big|বড়|বিগ","sit|বসা|সিট","dog|কুকুর|ডগ","sun|সূর্য|সান","bus|বাস|বাস","mug|মগ|মাগ","hen|মুরগি|হেন"],
["cat|ক্যাট|a = 'অ্যা' ধ্বনি","pen|পেন|e = ছোট 'এ'","sit|সিট|i = ছোট ও দ্রুত 'ই'"],
["Spell 'cat'.|'cat' বানান করো।","C-A-T. Cat.|সি-এ-টি। ক্যাট।","What sound is the A?|A-এর ধ্বনি কী?","It is 'a' as in apple.|apple-এর 'অ্যা' ধ্বনি।"],
"bat, cat, hat, mat, rat — এই ছন্দের শব্দ ৫ বার করে বলো; তারপর -en (ten, pen, hen) ও -ig (big, pig, dig)।",
"ছোট ৫টি স্বর ঠিক করতে পারলে ইংরেজির ৮০% শব্দ ঠিক পড়া যায়।");

D("কঠিন ধ্বনি (th, v, w, r) ও সংখ্যা ১–২০","th v w r pronunciation","বাংলায় নেই এমন ধ্বনি th, v, w, r স্পষ্ট বলা এবং ১–২০ গোনা।",
"th: জিভ দুই দাঁতের মাঝে; v: ওপরের দাঁত নিচের ঠোঁটে; w: ঠোঁট গোল; r: জিভ কোথাও না ছুঁয়ে। সংখ্যা: one থেকে twenty।",
["Thank you very much.|অনেক ধন্যবাদ।|থ্যাংক ইউ ভেরি মাচ।","I have three brothers.|আমার তিন ভাই আছে।|আই হ্যাভ থ্রি ব্রাদার্স।","We went to the village on Wednesday.|আমরা বুধবার গ্রামে গিয়েছিলাম।|উই ওয়েন্ট টু দ্য ভিলেজ অন ওয়েন্সডে।","The water is very cold.|পানি খুব ঠান্ডা।|দ্য ওয়াটার ইজ ভেরি কোল্ড।","I have twenty books.|আমার কুড়িটি বই আছে।|আই হ্যাভ টুয়েন্টি বুকস।"],
["three|তিন|থ্রি","thing|জিনিস|থিং","very|খুব|ভেরি","village|গ্রাম|ভিলেজ","water|পানি|ওয়াটার","week|সপ্তাহ|উইক","road|রাস্তা|রোড","right|ডান / ঠিক|রাইট","twelve|বারো|টুয়েলভ","twenty|কুড়ি|টুয়েন্টি"],
["think / this|থিংক / দিস|th দুই রকম: ফুঁ দিয়ে (think), কণ্ঠ কাঁপিয়ে (this)","very / berry|ভেরি / বেরি|v-তে দাঁত-ঠোঁট লাগবে","wine / vine|ওয়াইন / ভাইন|w-তে ঠোঁট গোল"],
["How many brothers do you have?|তোমার কয় ভাই?","I have three brothers.|আমার তিন ভাই।","Are they older than you?|তারা কি তোমার চেয়ে বড়?","Two are older. One is younger.|দুজন বড়, একজন ছোট।"],
"১ থেকে ২০ গোনো; তারপর th/v/w/r সহ ১০টি শব্দ আয়নায় নিজের মুখ দেখে বলো।",
"আয়নায় দেখো জিভ দাঁতে লাগছে কি না — th-এর সবচেয়ে বড় পরীক্ষা এটি।");

D("শুভেচ্ছা, Thank you, Welcome, Sorry ও 'I am'","greetings thank you welcome sorry english","শুভেচ্ছা বিনিময় ও 'I am' দিয়ে নিজের পরিচয় দিতে পারা।",
"I am + নাম / পেশা / অবস্থা = আমি … (I am Hasan. I am a boy. I am happy.)। ধন্যবাদের উত্তর: You're welcome।",
["I am Hasan. I am a student.|আমি হাসান। আমি একজন ছাত্র।|আই অ্যাম হাসান। আই অ্যাম আ স্টুডেন্ট।","I am happy to meet you.|আপনার সাথে দেখা হয়ে আমি খুশি।|আই অ্যাম হ্যাপি টু মিট ইউ।","Thank you so much. You're welcome.|অনেক ধন্যবাদ। স্বাগতম/কিছু না।|থ্যাংক ইউ সো মাচ। ইয়োর ওয়েলকাম।","I am sorry. That's okay.|আমি দুঃখিত। ঠিক আছে।|আই অ্যাম সরি। দ্যাটস ওকে।","Good morning. How are you?|সুপ্রভাত। কেমন আছেন?|গুড মর্নিং। হাউ আর ইউ?"],
["hello|হ্যালো|হ্যালো","thanks|ধন্যবাদ|থ্যাংকস","welcome|স্বাগতম|ওয়েলকাম","sorry|দুঃখিত|সরি","please|দয়া করে|প্লিজ","excuse me|মাফ করবেন|এক্সকিউজ মি","goodbye|বিদায়|গুডবাই","fine|ভালো|ফাইন","happy|খুশি|হ্যাপি","tired|ক্লান্ত|টায়ার্ড"],
["welcome|ওয়েলকাম|'ওয়েল' + 'কাম'","sorry|সরি|'সরি' — 'স্যরি' নয়","thanks|থ্যাংকস|th + ank + s"],
["Good morning! How are you?|সুপ্রভাত! কেমন আছেন?","I am fine, thank you. And you?|ভালো, ধন্যবাদ। আপনি?","I am good. Thanks for asking.|ভালো। জিজ্ঞাসার জন্য ধন্যবাদ।","You are welcome.|আপনাকেও স্বাগতম।"],
"৩০ সেকেন্ডে পরিচয় দাও: 'I am … I am a … I am happy to meet you.' রেকর্ড করো।",
"Thank you-র উত্তরে সবসময় 'You're welcome' বা 'No problem' বলো — কথা স্বাভাবিক শোনায়।");

D("I + verb: নিয়মিত কাজ (Present Simple)","present simple daily habits","রোজকার অভ্যাস ও কাজ 'I + verb' দিয়ে বলতে পারা।",
"I + verb = আমি (সাধারণত) করি: I eat rice. I play football. he / she / it হলে verb-এ s/es: He plays, She goes।",
["I eat rice every day.|আমি প্রতিদিন ভাত খাই।|আই ঈট রাইস এভরি ডে।","I play football with my friends.|আমি বন্ধুদের সাথে ফুটবল খেলি।|আই প্লে ফুটবল উইথ মাই ফ্রেন্ডস।","I brush my teeth in the morning.|আমি সকালে দাঁত ব্রাশ করি।|আই ব্রাশ মাই টীথ ইন দ্য মর্নিং।","I go to school by bus.|আমি বাসে স্কুলে যাই।|আই গো টু স্কুল বাই বাস।","I read books at night.|আমি রাতে বই পড়ি।|আই রীড বুকস অ্যাট নাইট।"],
["eat|খাওয়া|ঈট","drink|পান করা|ড্রিংক","play|খেলা|প্লে","walk|হাঁটা|ওয়াক","read|পড়া|রীড","write|লেখা|রাইট","sleep|ঘুমানো|স্লীপ","cook|রান্না করা|কুক","wash|ধোয়া|ওয়াশ","work|কাজ করা|ওয়ার্ক"],
["eat / it|ঈট / ইট|লম্বা 'ঈ' বনাম ছোট 'ই'","brush|ব্রাশ|শেষে 'sh' = শ","read|রীড (এখন) / রেড (অতীত)|একই বানান, দুই উচ্চারণ"],
["What do you do every day?|তুমি প্রতিদিন কী করো?","I wake up early. I eat breakfast. I go to work.|আমি ভোরে উঠি, নাস্তা করি, কাজে যাই।","Do you play any sport?|তুমি কি কোনো খেলা খেলো?","Yes, I play badminton.|হ্যাঁ, ব্যাডমিন্টন খেলি।"],
"সকাল থেকে রাত — রোজ যা করো তার ৮টি বাক্য 'I + verb' দিয়ে বলো।",
"I / you / we / they-এর সাথে verb-এ s নেই; he / she / it হলেই s: I eat — He eats।");

D("I am + verb-ing: এখন যা করছি","present continuous i am eating","এই মুহূর্তে যা করছি তা I am + verb-ing দিয়ে বলতে পারা।",
"I am + verb+ing = আমি এখন … করছি। I am eating. I am sitting. (সংক্ষেপে I'm eating)। run → running, sit → sitting; make → making।",
["I am eating lunch now.|আমি এখন দুপুরের খাবার খাচ্ছি।|আই অ্যাম ঈটিং লাঞ্চ নাউ।","I am sitting in my room.|আমি আমার ঘরে বসে আছি।|আই অ্যাম সিটিং ইন মাই রুম।","I am watching TV.|আমি টিভি দেখছি।|আই অ্যাম ওয়াচিং টিভি।","I am talking to my friend.|আমি বন্ধুর সাথে কথা বলছি।|আই অ্যাম টকিং টু মাই ফ্রেন্ড।","I am learning English.|আমি ইংরেজি শিখছি।|আই অ্যাম লার্নিং ইংলিশ।"],
["sit|বসা|সিট","stand|দাঁড়ানো|স্ট্যান্ড","run|দৌড়ানো|রান","talk|কথা বলা|টক","listen|শোনা|লিসেন","watch|দেখা|ওয়াচ","learn|শেখা|লার্ন","study|পড়াশোনা করা|স্টাডি","wait|অপেক্ষা করা|ওয়েট","help|সাহায্য করা|হেল্প"],
["-ing|ইং|শেষে 'ইং', 'ইন' নয়","listen|লিসেন|t নীরব","watching|ওয়াচিং|ch = চ"],
["What are you doing?|তুমি এখন কী করছ?","I am cooking dinner.|আমি রাতের খাবার রাঁধছি।","Are you busy?|তুমি কি ব্যস্ত?","A little. I am also talking to you.|একটু। আর তোমার সাথেও কথা বলছি।"],
"এই মুহূর্তে তুমি ও তোমার চারপাশের মানুষ কী করছে — ৬টি বাক্য বলো।",
"'now', 'at the moment', 'right now' শব্দ থাকলেই সাধারণত -ing ব্যবহার হয়।");

D("I + verb (অতীত): যা করেছি","past simple went ate saw","আগে শেষ হয়ে গেছে এমন কাজ অতীত রূপে বলতে পারা।",
"I + verb(past) = আমি করেছিলাম। নিয়মিত verb-এ -ed (played, watched); অনিয়মিতে নতুন রূপ: go → went, eat → ate, see → saw।",
["I ate rice for lunch.|আমি দুপুরে ভাত খেয়েছি।|আই এইট রাইস ফর লাঞ্চ।","I went to the market yesterday.|আমি গতকাল বাজারে গিয়েছিলাম।|আই ওয়েন্ট টু দ্য মার্কেট ইয়েস্টারডে।","I played cricket last week.|আমি গত সপ্তাহে ক্রিকেট খেলেছি।|আই প্লেইড ক্রিকেট লাস্ট উইক।","I slept early last night.|আমি গত রাতে তাড়াতাড়ি ঘুমিয়েছি।|আই স্লেপ্ট আর্লি লাস্ট নাইট।","I saw my friend today.|আমি আজ বন্ধুকে দেখেছি।|আই সো মাই ফ্রেন্ড টুডে।"],
["went|গিয়েছিলাম|ওয়েন্ট","ate|খেয়েছি|এইট","saw|দেখেছি|সো","slept|ঘুমিয়েছি|স্লেপ্ট","ran|দৌড়েছি|র‍্যান","came|এসেছি|কেইম","took|নিয়েছি|টুক","bought|কিনেছি|বট","wrote|লিখেছি|রোট","yesterday|গতকাল|ইয়েস্টারডে"],
["played / watched|প্লেইড / ওয়াচ্ট|-ed = d বা t ধ্বনি","wanted|ওয়ান্টিড|t/d-এর পরে -ed = 'ইড'","bought|বট|gh নীরব"],
["What did you do yesterday?|গতকাল তুমি কী করেছ?","I went to the market. I bought fish.|আমি বাজারে গিয়ে মাছ কিনেছি।","Did you walk?|হেঁটে গিয়েছিলে?","No, I took a rickshaw.|না, রিকশা নিয়েছিলাম।"],
"গতকাল সারাদিন কী করেছ — ৮টি অতীত বাক্যে বলো।",
"yesterday, last week, ago — এগুলো past-এর সংকেত।");

D("I will: ভবিষ্যতের কথা","will future tense I will","আগামীতে কী করবে তা 'I will' দিয়ে বলতে পারা।",
"I will + verb = আমি করব। সংক্ষেপে I'll। সিদ্ধান্ত বা প্রতিশ্রুতি বোঝায়। will-এর পরে verb মূল রূপে: I will go।",
["I will call you tomorrow.|আমি কাল তোমাকে ফোন করব।|আই উইল কল ইউ টুমরো।","I will go to the market.|আমি বাজারে যাব।|আই উইল গো টু দ্য মার্কেট।","I will help you.|আমি তোমাকে সাহায্য করব।|আই উইল হেল্প ইউ।","I will study English tonight.|আজ রাতে আমি ইংরেজি পড়ব।|আই উইল স্টাডি ইংলিশ টুনাইট।","I will be a doctor.|আমি ডাক্তার হব।|আই উইল বি আ ডক্টর।"],
["tomorrow|আগামীকাল|টুমরো","tonight|আজ রাতে|টুনাইট","soon|শিগগির|সুন","later|পরে|লেটার","next week|আগামী সপ্তাহ|নেক্সট উইক","plan|পরিকল্পনা|প্ল্যান","promise|প্রতিশ্রুতি|প্রমিস","try|চেষ্টা করা|ট্রাই","start|শুরু করা|স্টার্ট","finish|শেষ করা|ফিনিশ"],
["will / I'll|উইল / আইল|দ্রুত বললে I will → I'll","tomorrow|টুমরো|মাঝের অংশে জোর","promise|প্রমিস|শেষে s ধ্বনি"],
["What will you do tomorrow?|আগামীকাল কী করবে?","I will go to the park.|আমি পার্কে যাব।","Will you go alone?|একা যাবে?","No, I will go with my family.|না, পরিবারের সাথে যাব।"],
"আগামীকাল ও আগামী সপ্তাহে কী করবে — ৬টি 'I will' বাক্য বলো।",
"I will go (✓), I will went (✗) — will-এর পরে verb সবসময় মূল রূপে।");

D("ফেজ ১ রিভিউ: আমার পরিচয়","self introduction english review","এ পর্যন্ত শেখা ছাঁচ মিলিয়ে ১ মিনিটে নিজের পরিচয় বলতে পারা।",
"ছাঁচগুলো: I am… / I + verb / I am + verb-ing / I + verb(past) / I will… — সবগুলো মিলিয়ে ছোট অনুচ্ছেদ বলো।",
["I am Rina. I am a teacher.|আমি রিনা। আমি শিক্ষক।|আই অ্যাম রিনা। আই অ্যাম আ টিচার।","I wake up early every day.|আমি রোজ ভোরে উঠি।|আই ওয়েক আপ আর্লি এভরি ডে।","I am studying English now.|আমি এখন ইংরেজি পড়ছি।|আই অ্যাম স্টাডিং ইংলিশ নাউ।","I went to the park yesterday.|আমি গতকাল পার্কে গিয়েছিলাম।|আই ওয়েন্ট টু দ্য পার্ক ইয়েস্টারডে।","I will speak English every day.|আমি রোজ ইংরেজি বলব।|আই উইল স্পীক ইংলিশ এভরি ডে।"],
["breakfast|সকালের নাস্তা|ব্রেকফাস্ট","morning|সকাল|মর্নিং","evening|সন্ধ্যা|ঈভনিং","family|পরিবার|ফ্যামিলি","friend|বন্ধু|ফ্রেন্ড","school|স্কুল|স্কুল","house|বাড়ি|হাউস","market|বাজার|মার্কেট","today|আজ|টুডে","every day|প্রতিদিন|এভরি ডে"],
["breakfast|ব্রেকফাস্ট|ব্রেক-ফাস্ট","evening|ঈভনিং|ঈভ-নিং","family|ফ্যামিলি|ফ্যাম-লি"],
["Tell me about yourself.|নিজের সম্পর্কে বলো।","I am Rina. I am a teacher. I live in Dhaka.|আমি রিনা, শিক্ষক, ঢাকায় থাকি।","What do you do every day?|প্রতিদিন কী করো?","I teach, I cook, and I read.|পড়াই, রান্না করি, আর পড়ি।"],
"১ মিনিটের 'আমার পরিচয়': নাম, পেশা, রুটিন, গতকাল, আগামীকাল — রেকর্ড করো।",
"আজকের রেকর্ডিং রেখে দাও; ফেজ ৬-এ আবার রেকর্ড করে তুলনা করবে।");

/* ===== ফেজ ২: সহজ বাক্য ও দৈনন্দিন কথা (দিন ১১–২০) ===== */
D("I have: আমার আছে","i have has possession english","'আমার আছে' বাক্য ও মালিকানা বলতে পারা।",
"I / you / we / they + have; he / she / it + has। I have a bag. She has a car। অসুখের ক্ষেত্রেও: I have a fever।",
["I have a phone.|আমার একটি ফোন আছে।|আই হ্যাভ আ ফোন।","I have two brothers.|আমার দুই ভাই আছে।|আই হ্যাভ টু ব্রাদার্স।","I have a fever.|আমার জ্বর হয়েছে।|আই হ্যাভ আ ফীভার।","She has a new car.|তার একটি নতুন গাড়ি আছে।|শি হ্যাজ আ নিউ কার।","We have a big house.|আমাদের একটি বড় বাড়ি আছে।|উই হ্যাভ আ বিগ হাউস।"],
["phone|ফোন|ফোন","bag|ব্যাগ|ব্যাগ","car|গাড়ি|কার","money|টাকা|মানি","fever|জ্বর|ফীভার","headache|মাথাব্যথা|হেডেইক","brother|ভাই|ব্রাদার","sister|বোন|সিস্টার","time|সময়|টাইম","idea|ধারণা|আইডিয়া"],
["has|হ্যাজ|শেষে z ধ্বনি","fever|ফীভার|v = দাঁত-ঠোঁট","headache|হেডেইক|ch = ক"],
["Do you have a pen?|তোমার কাছে কলম আছে?","Yes, I have two pens.|হ্যাঁ, দুটো আছে।","Can I have one?|একটা নিতে পারি?","Sure, here you are.|অবশ্যই, এই নাও।"],
"নিজের ব্যাগ, ঘর ও পরিবারের সদস্য নিয়ে 'I have' দিয়ে ৮টি বাক্য বলো।",
"he / she / it-এর সাথে has: She has (✓), She have (✗)।");

D("I have to: করতেই হবে","i have to must english","বাধ্যবাধকতা ও করণীয় কাজ বলতে পারা।",
"I have to + verb = আমাকে … করতে হবে। he / she / it হলে has to: She has to cook। সংক্ষেপে বললে 'হ্যাফ টু / হ্যাস্টু'।",
["I have to study now.|আমাকে এখন পড়তে হবে।|আই হ্যাভ টু স্টাডি নাউ।","I have to go to the office.|আমাকে অফিসে যেতে হবে।|আই হ্যাভ টু গো টু দ্য অফিস।","She has to cook dinner.|তাকে রাতের খাবার রাঁধতে হবে।|শি হ্যাজ টু কুক ডিনার।","We have to wake up early.|আমাদের ভোরে উঠতে হবে।|উই হ্যাভ টু ওয়েক আপ আর্লি।","I have to pay the bill.|আমাকে বিল দিতে হবে।|আই হ্যাভ টু পে দ্য বিল।"],
["exam|পরীক্ষা|ইগজ্যাম","homework|হোমওয়ার্ক|হোমওয়ার্ক","office|অফিস|অফিস","meeting|মিটিং|মীটিং","bill|বিল|বিল","ticket|টিকেট|টিকেট","deadline|সময়সীমা|ডেডলাইন","appointment|অ্যাপয়েন্টমেন্ট|অ্যাপয়েন্টমেন্ট","pay|দেওয়া (টাকা)|পে","leave|ছেড়ে যাওয়া|লীভ"],
["have to|হ্যাভ টু|দ্রুত বললে 'হ্যাফ টু'","has to|হ্যাজ টু|দ্রুত বললে 'হ্যাস্টু'","exam|ইগজ্যাম|x = গজ"],
["Are you free today?|আজ কি তুমি ফ্রি?","No, I have to go to the office.|না, আমাকে অফিসে যেতে হবে।","What about tomorrow?|আগামীকাল?","I have to take my son to school.|আমাকে ছেলেকে স্কুলে নিতে হবে।"],
"আজ তোমার কী কী করতেই হবে — ৬টি বাক্য বলো।",
"have to-এর পরে verb মূল রূপে: I have to go (✓), I have to went (✗)।");

D("I want / I want to: চাওয়া","i want to english sentences","নিজের ইচ্ছা ও চাহিদা বলতে পারা।",
"I want + noun = আমি … চাই (I want water)। I want to + verb = আমি … করতে চাই (I want to eat)। he / she / it হলে wants।",
["I want some water.|আমি একটু পানি চাই।|আই ওয়ান্ট সাম ওয়াটার।","I want a new phone.|আমি একটি নতুন ফোন চাই।|আই ওয়ান্ট আ নিউ ফোন।","I want to eat rice.|আমি ভাত খেতে চাই।|আই ওয়ান্ট টু ঈট রাইস।","I want to learn English.|আমি ইংরেজি শিখতে চাই।|আই ওয়ান্ট টু লার্ন ইংলিশ।","She wants to be a doctor.|সে ডাক্তার হতে চায়।|শি ওয়ান্টস টু বি আ ডক্টর।"],
["want|চাওয়া|ওয়ান্ট","need|প্রয়োজন|নীড","wish|ইচ্ছা|উইশ","dream|স্বপ্ন|ড্রীম","goal|লক্ষ্য|গোল","gift|উপহার|গিফট","tea|চা|টী","coffee|কফি|কফি","rest|বিশ্রাম|রেস্ট","trip|ভ্রমণ|ট্রিপ"],
["want to|ওয়ান্ট টু|দ্রুত: 'ওয়ানা'","wants|ওয়ান্টস|শেষে s স্পষ্ট","dream|ড্রীম|লম্বা 'ঈ'"],
["What do you want?|তুমি কী চাও?","I want a cup of tea.|আমি এক কাপ চা চাই।","What do you want to be?|তুমি কী হতে চাও?","I want to be a teacher.|আমি শিক্ষক হতে চাই।"],
"নিজের ৫টি চাওয়া ও ৫টি স্বপ্ন 'I want / I want to' দিয়ে বলো।",
"want to-এর পরে verb: I want to go। শুধু want-এর পরে noun: I want tea।");

D("I should / I can: উচিত ও সামর্থ্য","should can english","পরামর্শ (উচিত) ও সামর্থ্য (পারি) বলতে পারা।",
"I should + verb = আমার … করা উচিত। I can + verb = আমি … করতে পারি। না পারলে can't / cannot।",
["I should sleep early.|আমার তাড়াতাড়ি ঘুমানো উচিত।|আই শুড স্লীপ আর্লি।","You should drink more water.|তোমার আরও পানি খাওয়া উচিত।|ইউ শুড ড্রিংক মোর ওয়াটার।","I can swim.|আমি সাঁতার কাটতে পারি।|আই ক্যান সুইম।","I can speak a little English.|আমি একটু ইংরেজি বলতে পারি।|আই ক্যান স্পীক আ লিটল ইংলিশ।","I cannot drive a car.|আমি গাড়ি চালাতে পারি না।|আই ক্যান্ট ড্রাইভ আ কার।"],
["sleep|ঘুমানো|স্লীপ","exercise|ব্যায়াম|এক্সারসাইজ","healthy|সুস্থ|হেলথি","swim|সাঁতার কাটা|সুইম","sing|গান গাওয়া|সিং","drive|গাড়ি চালানো|ড্রাইভ","cook|রান্না করা|কুক","speak|বলা|স্পীক","understand|বোঝা|আন্ডারস্ট্যান্ড","try|চেষ্টা করা|ট্রাই"],
["should|শুড|l নীরব","can / can't|ক্যান / ক্যান্ট|can দুর্বল, can't জোরালো ও লম্বা","exercise|এক্সারসাইজ|প্রথম অংশে জোর"],
["What should I do?|আমার কী করা উচিত?","You should exercise every day.|তোমার রোজ ব্যায়াম করা উচিত।","Can you swim?|তুমি কি সাঁতার জানো?","Yes, I can swim and I can run.|হ্যাঁ, সাঁতার ও দৌড় দুটোই পারি।"],
"নিজের ৫টি পারা ও ৩টি না-পারা, আর ৩টি করণীয় (উচিত) বলো।",
"should ও can-এর পরে verb সবসময় মূল রূপে; he/she-তেও s নেই: He can swim।");

D("ব্যক্তি: I, you, we, he, she, it, they","pronouns i you we he she it they","সব ব্যক্তির সাথে সঠিক verb ব্যবহার করতে পারা।",
"I / you / we / they → verb মূল রূপে; he / she / it → verb+s। be-verb: I am, you / we / they are, he / she / it is।",
["You are my friend.|তুমি আমার বন্ধু।|ইউ আর মাই ফ্রেন্ড।","We play together.|আমরা একসাথে খেলি।|উই প্লে টুগেদার।","He works in a bank.|সে ব্যাংকে কাজ করে।|হি ওয়ার্কস ইন আ ব্যাংক।","She cooks very well.|সে খুব ভালো রান্না করে।|শি কুকস ভেরি ওয়েল।","They live in Chittagong.|তারা চট্টগ্রামে থাকে।|দে লিভ ইন চিটাগং।"],
["you|তুমি/আপনি|ইউ","we|আমরা|উই","he|সে (পুরুষ)|হি","she|সে (নারী)|শি","it|এটি|ইট","they|তারা|দে","mother|মা|মাদার","father|বাবা|ফাদার","teacher|শিক্ষক|টীচার","neighbor|প্রতিবেশী|নেইবার"],
["he / she|হি / শি|লম্বা 'ই'","they|দে|th = কণ্ঠ কাঁপিয়ে","works|ওয়ার্কস|শেষে s ধ্বনি"],
["Who is she?|সে কে?","She is my mother. She works in a school.|সে আমার মা। স্কুলে কাজ করে।","And he?|আর সে?","He is my father. He drives a bus.|সে আমার বাবা। বাস চালায়।"],
"পরিবারের ৫ জনের পরিচয় বলো: 'He is … He works … She is … She likes …'।",
"s যুক্ত করার সময় শেষের ধ্বনি স্পষ্ট বলো: works (ওয়ার্কস), plays (প্লেইজ)।");

D("This, That, These, Those + There ও It","this that these those there is","কাছের/দূরের, একবচন/বহুবচন জিনিস চিনিয়ে বলতে পারা।",
"কাছে: this (একটি), these (একাধিক); দূরে: that (একটি), those (একাধিক)। There is / There are = আছে। It = এটি (জিনিস/আবহাওয়া): It is raining।",
["This is my phone.|এটি আমার ফোন।|দিস ইজ মাই ফোন।","That is a big tree.|ওটা একটি বড় গাছ।|দ্যাট ইজ আ বিগ ট্রী।","These are my books.|এগুলো আমার বই।|দীজ আর মাই বুকস।","Those are birds.|ওগুলো পাখি।|দোজ আর বার্ডস।","There is a cat. It is on the sofa.|একটি বিড়াল আছে। ওটা সোফায়।|দেয়ার ইজ আ ক্যাট। ইট ইজ অন দ্য সোফা।"],
["this|এটি|দিস","that|ওটি|দ্যাট","these|এগুলো|দীজ","those|ওগুলো|দোজ","near|কাছে|নিয়ার","far|দূরে|ফার","here|এখানে|হিয়ার","there|ওখানে|দেয়ার","bird|পাখি|বার্ড","wall|দেয়াল|ওয়াল"],
["this / these|দিস / দীজ|ছোট ই বনাম লম্বা ঈ","that / those|দ্যাট / দোজ|th কণ্ঠ কাঁপিয়ে","there|দেয়ার|th + air"],
["What is this?|এটা কী?","This is my new bag.|এটা আমার নতুন ব্যাগ।","And what are those?|আর ওগুলো কী?","Those are my brother's shoes.|ওগুলো আমার ভাইয়ের জুতা।"],
"ঘরের জিনিস দেখিয়ে this / that / these / those দিয়ে ১০টি বাক্য বলো।",
"this / these = কাছে, that / those = দূরে। হাত দিয়ে দেখিয়ে অনুশীলন করো।");

D("সংখ্যা, সময়, তারিখ ও দাম","english numbers time date price","সংখ্যা, সময়, তারিখ ও দাম ইংরেজিতে বলতে পারা।",
"21–99: twenty-one, thirty-five… 100 = one hundred, 1,000 = one thousand। সময়: It is seven o'clock / half past seven। তারিখ: May fifth।",
["It is seven o'clock.|এখন সাতটা বাজে।|ইট ইজ সেভেন ও'ক্লক।","It costs one hundred taka.|এর দাম একশো টাকা।|ইট কস্টস ওয়ান হান্ড্রেড টাকা।","Today is Friday.|আজ শুক্রবার।|টুডে ইজ ফ্রাইডে।","My birthday is on May fifth.|আমার জন্মদিন পাঁচই মে।|মাই বার্থডে ইজ অন মে ফিফথ।","The bill is one thousand two hundred taka.|বিল এক হাজার দুইশো টাকা।|দ্য বিল ইজ ওয়ান থাউজেন্ড টু হান্ড্রেড টাকা।"],
["ten|দশ|টেন","twenty|কুড়ি|টুয়েন্টি","hundred|একশো|হান্ড্রেড","thousand|হাজার|থাউজেন্ড","o'clock|ঘড়ির কাঁটায়|ও'ক্লক","minute|মিনিট|মিনিট","hour|ঘণ্টা|আওয়ার","day|দিন|ডে","month|মাস|মান্থ","year|বছর|ইয়ার"],
["thirteen / thirty|থার্টিন / থার্টি|-teen শেষে জোর, -ty শুরুতে","fifth|ফিফথ|শেষে th","thousand|থাউজেন্ড|th + ou = আউ"],
["What time is it?|কটা বাজে?","It is half past three.|সাড়ে তিনটা।","How much is this?|এটার দাম কত?","It is five hundred taka.|পাঁচশো টাকা।"],
"নিজের ফোন নম্বর, জন্মতারিখ, আজকের তারিখ ও সময় এবং ৫টি দাম ইংরেজিতে বলো।",
"13 আর 30 গুলিয়ে ফেলা সবচেয়ে সাধারণ ভুল; stress কোথায় তা কানে ধরো।");

D("Be (হওয়া) ও মালিকানা (my, your, his, her…)","possessive adjectives my your his her","'হওয়া' বোঝাতে be এবং 'আমার/তোমার…' বোঝাতে my, your ব্যবহার করতে পারা।",
"I want to be… / I will be… = হতে চাই / হব। মালিকানা: my (আমার), your (তোমার), his (তার-পু.), her (তার-নারী), our (আমাদের), their (তাদের), its (এর)।",
["I want to be a teacher.|আমি শিক্ষক হতে চাই।|আই ওয়ান্ট টু বি আ টীচার।","She is my mother.|সে আমার মা।|শি ইজ মাই মাদার।","This is his bag.|এটা তার ব্যাগ।|দিস ইজ হিজ ব্যাগ।","Their house is big.|তাদের বাড়ি বড়।|দেয়ার হাউস ইজ বিগ।","Our school is near.|আমাদের স্কুল কাছেই।|আওয়ার স্কুল ইজ নিয়ার।"],
["my|আমার|মাই","your|তোমার|ইয়োর","his|তার (পু.)|হিজ","her|তার (নারী)|হার","our|আমাদের|আওয়ার","their|তাদের|দেয়ার","its|এর|ইটস","own|নিজের|ওউন","kind|দয়ালু|কাইন্ড","successful|সফল|সাকসেসফুল"],
["our|আওয়ার|'আওয়ার' (hour-এর মতো)","their / there|দেয়ার / দেয়ার|একই উচ্চারণ, ভিন্ন অর্থ","successful|সাকসেসফুল|দ্বিতীয় অংশে জোর"],
["What do you want to be?|তুমি কী হতে চাও?","I want to be a doctor.|আমি ডাক্তার হতে চাই।","Is that your clinic?|ওটা কি তোমার ক্লিনিক?","Not yet. It will be my clinic one day.|এখনো না। একদিন হবে।"],
"নিজের ভবিষ্যৎ লক্ষ্য ও পরিবারের কারও লক্ষ্য নিয়ে 'I want to be… He wants to be…' বলো।",
"its (এর) ও it's (it is) আলাদা: The cat is in its bed; It's a cat।");

D("I know / I like to / I hate to / I like + verb-ing","like hate love english sentences","পছন্দ-অপছন্দ ও জানা কথা প্রকাশ করতে পারা।",
"I know = জানি/চিনি; I like to + verb / I like + verb-ing = করতে পছন্দ করি; I hate to… = ঘৃণা করি; I do not like… = পছন্দ করি না।",
["I know him.|আমি তাকে চিনি।|আই নো হিম।","I like to read books.|আমি বই পড়তে পছন্দ করি।|আই লাইক টু রীড বুকস।","I like reading books.|আমি বই পড়া পছন্দ করি।|আই লাইক রীডিং বুকস।","I hate to wake up early.|আমি ভোরে উঠতে ঘৃণা করি।|আই হেইট টু ওয়েক আপ আর্লি।","I do not like cold tea.|আমি ঠান্ডা চা পছন্দ করি না।|আই ডু নট লাইক কোল্ড টী।"],
["know|জানা|নো","like|পছন্দ করা|লাইক","love|ভালোবাসা|লাভ","hate|ঘৃণা করা|হেইট","enjoy|উপভোগ করা|ইনজয়","prefer|বেশি পছন্দ করা|প্রিফার","favorite|প্রিয়|ফেইভারিট","hobby|শখ|হবি","music|গান/সংগীত|মিউজিক","movie|সিনেমা|মুভি"],
["know|নো|k নীরব","hate|হেইট|'হেইট', 'হ্যাট' নয়","favorite|ফেইভারিট|তিন অংশ: ফেইভ-রিট"],
["What do you like to do?|তুমি কী করতে পছন্দ করো?","I like to read and listen to music.|আমি পড়তে ও গান শুনতে পছন্দ করি।","What do you hate?|কী ঘৃণা করো?","I hate to wait in traffic.|আমি যানজটে অপেক্ষা করতে ঘৃণা করি।"],
"নিজের ৫টি পছন্দ, ৩টি অপছন্দ ও ১টি শখ নিয়ে ১ মিনিট বলো।",
"like to + verb এবং like + verb-ing — দুটোর অর্থ প্রায় এক; দুটোই অনুশীলন করো।");

D("ফেজ ২ রিভিউ: ছোট গল্প পড়া ও বলা","english short story for beginners","এ পর্যন্ত সব ছাঁচ দিয়ে একটি ছোট গল্প পড়া ও নিজের গল্প বলা।",
"এই ফেজের সব ছাঁচ: have / have to / want to / should / can / this-that / be / like to। নিচের গল্পটি জোরে পড়ে নিজের নামে বদলে বলো।",
["I am Rimon. I want to be a doctor.|আমি রিমন। আমি ডাক্তার হতে চাই।|আই অ্যাম রিমন। আই ওয়ান্ট টু বি আ ডক্টর।","I have an exam tomorrow. I have to study.|আগামীকাল আমার পরীক্ষা আছে। আমাকে পড়তে হবে।|আই হ্যাভ অ্যান ইগজ্যাম টুমরো। আই হ্যাভ টু স্টাডি।","I should sleep early. I can pass the exam.|আমার তাড়াতাড়ি ঘুমানো উচিত। আমি পাস করতে পারব।|আই শুড স্লীপ আর্লি। আই ক্যান পাস দ্য ইগজ্যাম।","I know I can do it.|আমি জানি আমি পারব।|আই নো আই ক্যান ডু ইট।","I will be the best doctor one day.|আমি একদিন সেরা ডাক্তার হব।|আই উইল বি দ্য বেস্ট ডক্টর ওয়ান ডে।"],
["story|গল্প|স্টোরি","exam|পরীক্ষা|ইগজ্যাম","pass|পাস করা|পাস","marks|নম্বর|মার্কস","best|সেরা|বেস্ট","one day|একদিন|ওয়ান ডে","hard|কঠিন / কঠোর|হার্ড","easy|সহজ|ঈজি","clever|চালাক|ক্লেভার","brave|সাহসী|ব্রেইভ"],
["best|বেস্ট|শেষে st","brave|ব্রেইভ|'ব্রেইভ' — 'ব্রাভ' নয়","clever|ক্লেভার|প্রথম অংশে জোর"],
["Can you tell me a story?|আমাকে একটি গল্প বলবে?","Yes. I am Rimon. I want to be a doctor.|হ্যাঁ। আমি রিমন, ডাক্তার হতে চাই।","Is it hard to be a doctor?|ডাক্তার হওয়া কি কঠিন?","Yes, but I will study hard.|হ্যাঁ, কিন্তু আমি কঠোর পড়ব।"],
"নিজের (বা বানানো) একজন মানুষের গল্প ৮–১০ বাক্যে বলো: কী হতে চায়, কী করতে হবে, কী করা উচিত।",
"গল্প বলার সময় ছাঁচগুলো একটার পর একটা বসাও — এতে ব্যাকরণ আপনা-আপনি অভ্যাস হয়ে যায়।");
/* ৬০ দিনের কনটেন্ট — ফেজ ৩ ও ৪ (দিন ২১–৪০) */
/* ===== ফেজ ৩: প্রশ্ন, না-বাচক ও শব্দভান্ডার (দিন ২১–৩০) ===== */
D("প্রশ্ন ১: Wh-প্রশ্ন (What, Where, Who, When)","wh questions what where who when","What, Where, Who, When দিয়ে প্রশ্ন করা ও উত্তর দেওয়া।",
"Wh-word + helping verb + subject + verb? : What do you want? Where does she live? Who is he? When will you come?",
["What is your name?|তোমার নাম কী?|হোয়াট ইজ ইয়োর নেইম?","Where do you live?|তুমি কোথায় থাকো?|হোয়ার ডু ইউ লিভ?","Who is that man?|ওই লোকটি কে?|হু ইজ দ্যাট ম্যান?","When will you come?|তুমি কখন আসবে?|হোয়েন উইল ইউ কাম?","What are you doing?|তুমি কী করছ?|হোয়াট আর ইউ ডুইং?"],
["what|কী|হোয়াট","where|কোথায়|হোয়ার","who|কে|হু","when|কখন|হোয়েন","why|কেন|হোয়াই","which|কোনটি|হুইচ","whose|কার|হুজ","how|কীভাবে|হাউ","how much|কত|হাউ মাচ","how many|কয়টি|হাউ ম্যানি"],
["what|হোয়াট|wh = 'হ্‌ও'","who|হু|w নীরব","where|হোয়ার|শেষে 'আর'"],
["Where do you live?|তুমি কোথায় থাকো?","I live in Dhaka. And you?|ঢাকায়। আর তুমি?","I live in Sylhet. What do you do?|সিলেটে। তুমি কী করো?","I am a teacher.|আমি শিক্ষক।"],
"একজন নতুন মানুষকে ৮টি Wh-প্রশ্ন করো (নাম, বাসা, পেশা, শখ…) এবং নিজে উত্তর দাও।",
"প্রশ্নের শেষে কণ্ঠ নামে (↘) Wh-প্রশ্নে, আর Yes/No প্রশ্নে ওঠে (↗)।");

D("প্রশ্ন ২: Yes/No প্রশ্ন (Do, Does, Did, Are, Is, Can, Will)","yes no questions do does did english","Do/Does/Did/Are/Is/Can/Will দিয়ে হ্যাঁ/না প্রশ্ন করা।",
"helping verb আগে বসে: Do you like tea? Does she work? Did you go? Are you ready? Can you help? Will you come?",
["Do you like tea?|তুমি কি চা পছন্দ করো?|ডু ইউ লাইক টী?","Does she work here?|সে কি এখানে কাজ করে?|ডাজ শি ওয়ার্ক হিয়ার?","Did you eat lunch?|তুমি কি দুপুরে খেয়েছ?|ডিড ইউ ঈট লাঞ্চ?","Are you ready?|তুমি কি প্রস্তুত?|আর ইউ রেডি?","Can you help me?|তুমি কি আমাকে সাহায্য করতে পারো?|ক্যান ইউ হেল্প মি?"],
["ready|প্রস্তুত|রেডি","free|ফ্রি / খালি|ফ্রী","busy|ব্যস্ত|বিজি","late|দেরি|লেইট","early|আগে|আর্লি","sure|নিশ্চিত|শুর","right|ঠিক|রাইট","wrong|ভুল|রং","open|খোলা|ওপেন","closed|বন্ধ|ক্লোজড"],
["does|ডাজ|'ডাজ', 'ডোজ' নয়","did you|ডিড ইউ|দ্রুত: 'ডিডিউ'","busy|বিজি|s = জ"],
["Do you speak English?|তুমি কি ইংরেজি বলো?","Yes, a little.|হ্যাঁ, একটু।","Can you speak slowly, please?|দয়া করে ধীরে বলবে?","Sure. Is that better?|অবশ্যই। এবার ভালো?"],
"পরিবারের কাউকে ৮টি Yes/No প্রশ্ন করার অভিনয় করো; প্রতিটির হ্যাঁ/না উত্তর দাও।",
"Does/Did-এর পরে verb মূল রূপে: Does she work? (✓) Does she works? (✗)।");

D("না-বাচক বাক্য (not): don't, doesn't, didn't, can't, won't","negative sentences english dont doesnt","যেকোনো ছাঁচকে না-বাচক করতে পারা।",
"am/is/are + not; do/does/did + not + verb; can/will/should + not। সংক্ষেপে: don't, doesn't, didn't, can't, won't, shouldn't।",
["I don't know.|আমি জানি না।|আই ডোন্ট নো।","She doesn't eat meat.|সে মাংস খায় না।|শি ডাজন্ট ঈট মীট।","I didn't go to school.|আমি স্কুলে যাইনি।|আই ডিডন্ট গো টু স্কুল।","I can't hear you.|আমি তোমার কথা শুনতে পাচ্ছি না।|আই ক্যান্ট হিয়ার ইউ।","I won't be late.|আমি দেরি করব না।|আই ওউন্ট বি লেইট।"],
["not|না|নট","never|কখনো না|নেভার","nobody|কেউ না|নোবডি","nothing|কিছু না|নাথিং","nowhere|কোথাও না|নোওয়ার","none|একটিও না|নান","no|না / কোনো|নো","sorry|দুঃখিত|সরি","problem|সমস্যা|প্রবলেম","trouble|ঝামেলা|ট্রাবল"],
["can't|ক্যান্ট|'ক্যান' থেকে লম্বা ও জোরালো","won't|ওউন্ট|'ওউ' ধ্বনি","didn't|ডিডন্ট|ডি-ডন্ট"],
["Do you eat fish?|মাছ খাও?","No, I don't eat fish.|না, মাছ খাই না।","Why not?|কেন নয়?","I don't like the smell.|গন্ধটা পছন্দ নয়।"],
"নিজের ৮টি 'না' বাক্য বলো: যা খাও না, করো না, পারো না, যাবে না।",
"does/did-এর সাথে not থাকলে মূল verb-এ s/ed নেই: She doesn't like (✓)।");

D("সময় ও পুনরাবৃত্তি: always, usually, sometimes, never","adverbs of frequency always usually sometimes","কাজ কতবার হয় তা বলতে পারা।",
"frequency word বসে verb-এর আগে, be-verb-এর পরে: I always wake up early. He is never late। 100% always → usually → often → sometimes → rarely → 0% never।",
["I always drink tea in the morning.|আমি সবসময় সকালে চা খাই।|আই অলওয়েজ ড্রিংক টী ইন দ্য মর্নিং।","She usually walks to work.|সে সাধারণত হেঁটে কাজে যায়।|শি ইউজুয়ালি ওয়াক্স টু ওয়ার্ক।","We sometimes eat out.|আমরা মাঝে মাঝে বাইরে খাই।|উই সামটাইমস ঈট আউট।","I rarely watch TV.|আমি খুব কম টিভি দেখি।|আই রেয়ারলি ওয়াচ টিভি।","He is never late.|সে কখনো দেরি করে না।|হি ইজ নেভার লেইট।"],
["always|সবসময়|অলওয়েজ","usually|সাধারণত|ইউজুয়ালি","often|প্রায়ই|অফেন","sometimes|মাঝে মাঝে|সামটাইমস","rarely|খুব কম|রেয়ারলি","never|কখনো না|নেভার","every day|প্রতিদিন|এভরি ডে","once|একবার|ওয়ান্স","twice|দুইবার|টোয়াইস","weekly|সাপ্তাহিক|উইকলি"],
["often|অফেন|t প্রায়ই নীরব","usually|ইউজুয়ালি|ইউ-জু-য়া-লি","twice|টোয়াইস|tw = টো"],
["How often do you exercise?|কতবার ব্যায়াম করো?","I exercise three times a week.|সপ্তাহে তিনবার।","Do you ever skip it?|কখনো বাদ দাও?","Sometimes, when it rains.|বৃষ্টি হলে মাঝে মাঝে।"],
"নিজের ৮টি অভ্যাস frequency word সহ বলো (always, usually, never…)।",
"always/never be-verb-এর পরে: I am always late; কিন্তু সাধারণ verb-এর আগে: I always eat।");

D("স্থান ও দিকের Preposition (in, on, at, under, near)","prepositions of place in on at under","জিনিস ও মানুষ কোথায় আছে তা বলতে পারা।",
"in = ভেতরে (in the room); on = ওপরে ছুঁয়ে (on the table); at = নির্দিষ্ট বিন্দু (at the door); under = নিচে; near = কাছে; behind = পেছনে; between = মাঝে।",
["The book is on the table.|বইটি টেবিলের ওপর।|দ্য বুক ইজ অন দ্য টেইবল।","The cat is under the chair.|বিড়ালটি চেয়ারের নিচে।|দ্য ক্যাট ইজ আন্ডার দ্য চেয়ার।","I am at home.|আমি বাড়িতে আছি।|আই অ্যাম অ্যাট হোম।","The school is near my house.|স্কুলটি আমার বাড়ির কাছে।|দ্য স্কুল ইজ নিয়ার মাই হাউস।","He is standing behind you.|সে তোমার পেছনে দাঁড়িয়ে।|হি ইজ স্ট্যান্ডিং বিহাইন্ড ইউ।"],
["in|ভেতরে|ইন","on|ওপরে|অন","at|এ / তে|অ্যাট","under|নিচে|আন্ডার","near|কাছে|নিয়ার","behind|পেছনে|বিহাইন্ড","between|মাঝখানে|বিটুইন","next to|পাশে|নেক্সট টু","in front of|সামনে|ইন ফ্রন্ট অভ","opposite|বিপরীতে|অপোজিট"],
["between|বিটুইন|'টুইন' অংশে জোর","behind|বিহাইন্ড|h নীরব নয়: বি-হাইন্ড","opposite|অপোজিট|অপ-জিট"],
["Where is the bank?|ব্যাংক কোথায়?","It is next to the pharmacy.|ওষুধের দোকানের পাশে।","Is it near here?|এখান থেকে কাছে?","Yes, it is opposite the mosque.|হ্যাঁ, মসজিদের উল্টো দিকে।"],
"নিজের ঘরের ১০টি জিনিস কোথায় আছে — in/on/under/near/behind দিয়ে বলো।",
"at = বিন্দু (at the door), in = ঘেরা জায়গা (in the room), on = পৃষ্ঠ (on the wall)।");

D("সময়ের Preposition (at, on, in, for, since)","prepositions of time at on in","সময়, দিন ও মাস বোঝাতে সঠিক preposition ব্যবহার করা।",
"at + ঘড়ির সময় (at 5 o'clock); on + দিন/তারিখ (on Friday); in + মাস/বছর/ঋতু (in May, in 2025, in winter); for + সময়কাল; since + শুরুর সময়।",
["I wake up at six.|আমি ছয়টায় উঠি।|আই ওয়েক আপ অ্যাট সিক্স।","We have a meeting on Monday.|সোমবার আমাদের মিটিং।|উই হ্যাভ আ মীটিং অন মান্ডে।","My birthday is in June.|আমার জন্মদিন জুনে।|মাই বার্থডে ইজ ইন জুন।","I have lived here for five years.|আমি পাঁচ বছর ধরে এখানে আছি।|আই হ্যাভ লিভড হিয়ার ফর ফাইভ ইয়ার্স।","I have worked here since 2020.|আমি ২০২০ থেকে এখানে কাজ করছি।|আই হ্যাভ ওয়ার্কড হিয়ার সিন্স টুয়েন্টি টুয়েন্টি।"],
["Monday|সোমবার|মান্ডে","Friday|শুক্রবার|ফ্রাইডে","weekend|সপ্তাহান্ত|উইকএন্ড","January|জানুয়ারি|জ্যানুয়ারি","summer|গ্রীষ্ম|সামার","winter|শীত|উইন্টার","noon|দুপুর|নুন","midnight|মধ্যরাত|মিডনাইট","during|চলাকালীন|ডিউরিং","until|পর্যন্ত|আনটিল"],
["Wednesday|ওয়েন্সডে|d নীরব","February|ফেব্রুয়ারি|ফেব-রু-য়ারি","since|সিন্স|শেষে s"],
["What time do you wake up?|কটায় ওঠো?","At six, every day.|প্রতিদিন ছয়টায়।","And on Fridays?|আর শুক্রবারে?","I sleep until eight.|আটটা পর্যন্ত ঘুমাই।"],
"নিজের সপ্তাহের রুটিন বলো: কোন দিন কটায় কী করো।",
"মনে রাখো: at the weekend (UK) / on the weekend (US); on Friday, in the morning, at night।");

D("বিশেষণ (Adjective) ১: বর্ণনার শব্দ","adjectives english big small good bad","মানুষ ও জিনিসের বর্ণনা বিশেষণ দিয়ে করা।",
"adjective বসে noun-এর আগে (a big house) অথবা be-verb-এর পরে (The house is big)। বিপরীত শব্দ জোড়ায় শেখো।",
["This is a big house.|এটি একটি বড় বাড়ি।|দিস ইজ আ বিগ হাউস।","The tea is hot.|চা গরম।|দ্য টী ইজ হট।","He is a kind man.|সে একজন দয়ালু মানুষ।|হি ইজ আ কাইন্ড ম্যান।","The room is clean and quiet.|ঘরটি পরিষ্কার ও শান্ত।|দ্য রুম ইজ ক্লীন অ্যান্ড কোয়ায়েট।","She is tall and beautiful.|সে লম্বা ও সুন্দরী।|শি ইজ টল অ্যান্ড বিউটিফুল।"],
["big / small|বড় / ছোট|বিগ / স্মল","hot / cold|গরম / ঠান্ডা|হট / কোল্ড","new / old|নতুন / পুরোনো|নিউ / ওল্ড","good / bad|ভালো / খারাপ|গুড / ব্যাড","easy / hard|সহজ / কঠিন|ঈজি / হার্ড","fast / slow|দ্রুত / ধীর|ফাস্ট / স্লো","clean / dirty|পরিষ্কার / নোংরা|ক্লীন / ডার্টি","tall / short|লম্বা / বেঁটে|টল / শর্ট","rich / poor|ধনী / গরিব|রিচ / পুওর","happy / sad|খুশি / দুঃখী|হ্যাপি / স্যাড"],
["beautiful|বিউটিফুল|বিউ-টি-ফুল","quiet|কোয়ায়েট|কোয়া-য়েট","dirty|ডার্টি|'ডার্টি' — r উচ্চারিত"],
["How is your new house?|তোমার নতুন বাড়ি কেমন?","It is big and clean.|বড় ও পরিষ্কার।","Is it quiet?|শান্ত কি?","Yes, very quiet and beautiful.|হ্যাঁ, খুব শান্ত ও সুন্দর।"],
"ঘর, শহর বা বন্ধুর বর্ণনা ১০টি বিশেষণ ব্যবহার করে করো।",
"a/an ঠিক রাখো: an old house, a big house।");

D("তুলনা: bigger, the biggest, as … as","comparative superlative english bigger biggest","দুটি জিনিসের তুলনা ও সেরা বলতে পারা।",
"ছোট শব্দে -er / -est (tall → taller → the tallest); বড় শব্দে more / the most (beautiful → more beautiful → the most beautiful)। as … as = সমান। অনিয়মিত: good → better → best।",
["This book is better than that one.|এই বইটি ওটার চেয়ে ভালো।|দিস বুক ইজ বেটার দ্যান দ্যাট ওয়ান।","He is taller than me.|সে আমার চেয়ে লম্বা।|হি ইজ টলার দ্যান মি।","She is the best student.|সে সেরা ছাত্রী।|শি ইজ দ্য বেস্ট স্টুডেন্ট।","This is the most expensive phone.|এটি সবচেয়ে দামি ফোন।|দিস ইজ দ্য মোস্ট এক্সপেনসিভ ফোন।","I am as tall as my brother.|আমি ভাইয়ের মতোই লম্বা।|আই অ্যাম অ্যাজ টল অ্যাজ মাই ব্রাদার।"],
["better|আরও ভালো|বেটার","best|সেরা|বেস্ট","worse|আরও খারাপ|ওয়ার্স","cheap|সস্তা|চীপ","expensive|দামি|এক্সপেনসিভ","heavy|ভারী|হেভি","light|হালকা|লাইট","near|কাছে|নিয়ার","far|দূরে|ফার","than|চেয়ে|দ্যান"],
["than|দ্যান|th কণ্ঠ কাঁপিয়ে","expensive|এক্সপেনসিভ|দ্বিতীয় অংশে জোর","worse|ওয়ার্স|'ওয়ার্স'"],
["Which phone is better?|কোন ফোনটি ভালো?","This one is better, but it is more expensive.|এটি ভালো, তবে বেশি দামি।","Is the other one cheaper?|অন্যটি কি সস্তা?","Yes, it is the cheapest in the shop.|হ্যাঁ, দোকানের সবচেয়ে সস্তা।"],
"বন্ধু/ভাইবোনের সাথে নিজের তুলনা করো, এবং নিজের শহরের সেরা ৫টি জিনিস বলো।",
"than-এর আগে comparative: taller than; the-এর পরে superlative: the tallest।");

D("এখনকার ও চলমান কাজ: Present Continuous বিস্তারিত","present continuous questions negatives","He/She/They + is/are + verb-ing এবং প্রশ্ন ও না-বাচক রূপ শেখা।",
"He is working. They are playing. প্রশ্ন: Is he working? না: He is not working। অচিরেই হবে এমন পরিকল্পনাও বলা যায়: I am meeting him tomorrow।",
["He is working in the garden.|সে বাগানে কাজ করছে।|হি ইজ ওয়ার্কিং ইন দ্য গার্ডেন।","They are playing football.|তারা ফুটবল খেলছে।|দে আর প্লেইং ফুটবল।","Is she sleeping now?|সে কি এখন ঘুমাচ্ছে?|ইজ শি স্লীপিং নাউ?","I am not watching TV.|আমি টিভি দেখছি না।|আই অ্যাম নট ওয়াচিং টিভি।","I am meeting my teacher tomorrow.|আমি কাল শিক্ষকের সাথে দেখা করব।|আই অ্যাম মীটিং মাই টীচার টুমরো।"],
["garden|বাগান|গার্ডেন","kitchen|রান্নাঘর|কিচেন","bedroom|শোবার ঘর|বেডরুম","street|রাস্তা|স্ট্রীট","park|পার্ক|পার্ক","rain|বৃষ্টি|রেইন","raining|বৃষ্টি হচ্ছে|রেইনিং","shopping|কেনাকাটা|শপিং","cooking|রান্না|কুকিং","resting|বিশ্রাম নিচ্ছে|রেস্টিং"],
["they're|দেয়ার|'দেয়ার' (there-এর মতো)","working|ওয়ার্কিং|ওয়ার্ক + ইং","raining|রেইনিং|রেইন-ইং"],
["Where is your brother?|তোমার ভাই কোথায়?","He is working in the garden.|সে বাগানে কাজ করছে।","And your sister?|আর বোন?","She is cooking in the kitchen.|সে রান্নাঘরে রান্না করছে।"],
"ঘরের সবাই এখন কে কী করছে — ৮টি বাক্যে বলো (সত্য বা কল্পিত)।",
"state verb (know, like, want) সাধারণত -ing হয় না: I know (✓), I am knowing (✗)।");

D("ফেজ ৩ রিভিউ: প্রশ্ন-উত্তর খেলা","english question answer practice","প্রশ্ন ও না-বাচক মিলিয়ে ছোট সাক্ষাৎকার চালাতে পারা।",
"Wh-প্রশ্ন + Yes/No প্রশ্ন + not + preposition + adjective — সব মিলিয়ে পরিচিত কারও সাক্ষাৎকার নাও।",
["Where do you work?|তুমি কোথায় কাজ করো?|হোয়ার ডু ইউ ওয়ার্ক?","Do you like your job?|তোমার কাজ কি পছন্দ?|ডু ইউ লাইক ইয়োর জব?","I don't work on Fridays.|আমি শুক্রবারে কাজ করি না।|আই ডোন্ট ওয়ার্ক অন ফ্রাইডেজ।","My office is near the station.|আমার অফিস স্টেশনের কাছে।|মাই অফিস ইজ নিয়ার দ্য স্টেশন।","It is bigger than my old office.|এটি আমার পুরোনো অফিসের চেয়ে বড়।|ইট ইজ বিগার দ্যান মাই ওল্ড অফিস।"],
["interview|সাক্ষাৎকার|ইন্টারভিউ","question|প্রশ্ন|কোয়েশ্চান","answer|উত্তর|আনসার","ask|জিজ্ঞাসা করা|আস্ক","reply|জবাব দেওয়া|রিপ্লাই","job|চাকরি|জব","office|অফিস|অফিস","station|স্টেশন|স্টেইশন","colleague|সহকর্মী|কলীগ","boss|বস|বস"],
["question|কোয়েশ্চান|'ch' ধ্বনি","answer|আনসার|w নীরব","colleague|কলীগ|শেষে 'গ' ধ্বনি"],
["Can I ask you some questions?|কিছু প্রশ্ন করতে পারি?","Of course. Go ahead.|অবশ্যই। করুন।","Where do you work?|কোথায় কাজ করেন?","I work in a bank near the station.|স্টেশনের কাছে এক ব্যাংকে।"],
"পরিচিত কারও (বা কল্পিত কারও) ১০টি প্রশ্নের একটি সাক্ষাৎকার বলে রেকর্ড করো।",
"প্রশ্নের উত্তরে পুরো বাক্যে বলো; শুধু 'yes' বা 'no' নয়।");

/* ===== ফেজ ৪: দৈনন্দিন জীবনের কথোপকথন (দিন ৩১–৪০) ===== */
D("দৈনন্দিন রুটিন ও সময়সূচি (Daily Routine)","daily routine english speaking","সকাল থেকে রাত পর্যন্ত নিজের রুটিন ধারাবাহিকভাবে বলা।",
"ক্রম বোঝাতে: first, then, after that, finally। কাজের শব্দ: wake up, get up, take a shower, have breakfast, go to work, come back, go to bed।",
["I wake up at six and take a shower.|আমি ছয়টায় উঠে গোসল করি।|আই ওয়েক আপ অ্যাট সিক্স অ্যান্ড টেইক আ শাওয়ার।","Then I have breakfast and go to work.|তারপর নাস্তা করে কাজে যাই।|দেন আই হ্যাভ ব্রেকফাস্ট অ্যান্ড গো টু ওয়ার্ক।","I come back home at five.|আমি পাঁচটায় বাড়ি ফিরি।|আই কাম ব্যাক হোম অ্যাট ফাইভ।","After that I cook dinner.|এরপর রাতের খাবার রাঁধি।|আফটার দ্যাট আই কুক ডিনার।","Finally, I go to bed at eleven.|সবশেষে এগারোটায় ঘুমাতে যাই।|ফাইনালি, আই গো টু বেড অ্যাট ইলেভেন।"],
["wake up|ঘুম থেকে ওঠা|ওয়েক আপ","get up|বিছানা ছাড়া|গেট আপ","take a shower|গোসল করা|টেইক আ শাওয়ার","have breakfast|নাস্তা করা|হ্যাভ ব্রেকফাস্ট","go to work|কাজে যাওয়া|গো টু ওয়ার্ক","come back|ফিরে আসা|কাম ব্যাক","have lunch|দুপুরের খাবার খাওয়া|হ্যাভ লাঞ্চ","have dinner|রাতের খাবার খাওয়া|হ্যাভ ডিনার","go to bed|ঘুমাতে যাওয়া|গো টু বেড","routine|রুটিন|রুটীন"],
["routine|রুটীন|'রু-টীন', শেষে জোর","shower|শাওয়ার|শা-ওয়ার","eleven|ইলেভেন|দ্বিতীয় অংশে জোর"],
["What is your daily routine?|তোমার দৈনিক রুটিন কী?","I wake up at six, then I go to work.|ছয়টায় উঠি, তারপর কাজে যাই।","When do you come back?|কখন ফেরো?","Around five, and then I cook dinner.|পাঁচটার দিকে, তারপর রান্না।"],
"১ মিনিটে নিজের পুরো দিনের রুটিন বলো (first, then, after that, finally ব্যবহার করে)।",
"সময় বলতে at + সময়: at six, at half past seven।");

D("বাজার, দোকান ও কেনাকাটা","shopping english conversation price","দোকানে দাম জিজ্ঞেস, দরদাম ও কেনাকাটা করতে পারা।",
"How much is / are…? / I would like… / Can I have…? / Do you have…? / It's too expensive / Can you give a discount?",
["How much is this shirt?|এই শার্টের দাম কত?|হাউ মাচ ইজ দিস শার্ট?","Do you have a bigger size?|আরও বড় সাইজ আছে?|ডু ইউ হ্যাভ আ বিগার সাইজ?","It is too expensive. Can you give a discount?|অনেক দামি। কিছু ছাড় দেবেন?|ইট ইজ টু এক্সপেনসিভ। ক্যান ইউ গিভ আ ডিসকাউন্ট?","I would like two kilos of rice.|আমি দুই কেজি চাল নিতে চাই।|আই উড লাইক টু কিলোজ অভ রাইস।","Can I pay by card?|কার্ডে দিতে পারি?|ক্যান আই পে বাই কার্ড?"],
["price|দাম|প্রাইস","discount|ছাড়|ডিসকাউন্ট","cash|নগদ|ক্যাশ","change|খুচরা/ফেরত|চেইঞ্জ","receipt|রসিদ|রিসীট","size|সাইজ|সাইজ","kilo|কেজি|কীলো","dozen|ডজন|ডাজেন","bag|ব্যাগ|ব্যাগ","shop|দোকান|শপ"],
["receipt|রিসীট|p নীরব","discount|ডিসকাউন্ট|প্রথম অংশে জোর","dozen|ডাজেন|'ডাজেন'"],
["Hello, how much is this shirt?|হ্যালো, এই শার্টের দাম কত?","It is eight hundred taka.|আটশো টাকা।","That is too expensive. Can you give a discount?|অনেক দামি। ছাড় দেবেন?","Okay, seven hundred taka for you.|ঠিক আছে, আপনার জন্য সাতশো।"],
"দোকানির সাথে দরদামের ছোট নাটক করো: দাম জিজ্ঞাসা, ছাড় চাওয়া, টাকা দেওয়া।",
"'I would like' 'I want'-এর চেয়ে বেশি ভদ্র — দোকানে এটিই ব্যবহার করো।");

D("খাবার ও রেস্তোরাঁ","restaurant english ordering food","রেস্তোরাঁয় খাবার অর্ডার ও বিল চাইতে পারা।",
"Can I see the menu? / I'll have… / What do you recommend? / Could we have the bill, please? / It was delicious.",
["Can I see the menu, please?|মেনুটি দেখতে পারি?|ক্যান আই সী দ্য মেনু, প্লিজ?","I will have chicken and rice.|আমি মুরগি আর ভাত নেব।|আই উইল হ্যাভ চিকেন অ্যান্ড রাইস।","What do you recommend?|আপনি কী খাওয়ার পরামর্শ দেন?|হোয়াট ডু ইউ রেকমেন্ড?","Could we have some water?|একটু পানি পেতে পারি?|কুড উই হ্যাভ সাম ওয়াটার?","The food was delicious. Can we have the bill?|খাবার সুস্বাদু ছিল। বিলটি দেবেন?|দ্য ফুড ওয়জ ডেলিশাস। ক্যান উই হ্যাভ দ্য বিল?"],
["menu|মেনু|মেনিউ","order|অর্ডার|অর্ডার","waiter|ওয়েটার|ওয়েইটার","bill|বিল|বিল","spicy|ঝাল|স্পাইসি","sweet|মিষ্টি|সুইট","delicious|সুস্বাদু|ডেলিশাস","hungry|ক্ষুধার্ত|হাংগ্রি","thirsty|তৃষ্ণার্ত|থার্স্টি","dessert|মিষ্টান্ন|ডিজার্ট"],
["menu|মেনিউ|'মেন-ইউ'","delicious|ডেলিশাস|টি = শ","dessert|ডিজার্ট|জোর দ্বিতীয় অংশে"],
["Are you ready to order?|অর্ডার করতে প্রস্তুত?","Yes. I will have chicken curry and rice.|হ্যাঁ, মুরগির তরকারি ও ভাত।","Anything to drink?|পানীয় কিছু?","Just water, please.|শুধু পানি, প্লিজ।"],
"রেস্তোরাঁর পুরো দৃশ্য অভিনয় করো: বসা, অর্ডার, খাওয়া, বিল।",
"Could you… / Could we… — প্রশ্নের ভদ্র রূপ; বেশি ব্যবহার করো।");

D("পথ জিজ্ঞাসা ও যাতায়াত","asking directions english transport","রাস্তা জিজ্ঞাসা ও বাস/রিকশায় যাতায়াতের কথা বলা।",
"Excuse me, how can I get to…? / Turn left / Turn right / Go straight / It's on your left / How far is it? / How long does it take?",
["Excuse me, how can I get to the station?|মাফ করবেন, স্টেশনে কীভাবে যাব?|এক্সকিউজ মি, হাউ ক্যান আই গেট টু দ্য স্টেইশন?","Go straight and turn left.|সোজা গিয়ে বাঁয়ে ঘুরুন।|গো স্ট্রেইট অ্যান্ড টার্ন লেফট।","It is on your right.|এটি আপনার ডান দিকে।|ইট ইজ অন ইয়োর রাইট।","How far is it?|কত দূর?|হাউ ফার ইজ ইট?","It takes ten minutes by bus.|বাসে দশ মিনিট লাগে।|ইট টেইকস টেন মিনিটস বাই বাস।"],
["left|বাম|লেফট","right|ডান|রাইট","straight|সোজা|স্ট্রেইট","corner|মোড়|কর্নার","traffic|যানজট|ট্র্যাফিক","bus stop|বাস স্টপ|বাস স্টপ","road|রাস্তা|রোড","bridge|সেতু|ব্রিজ","turn|ঘোরা|টার্ন","cross|পার হওয়া|ক্রস"],
["straight|স্ট্রেইট|str + eight","traffic|ট্র্যাফিক|প্রথম অংশে জোর","bridge|ব্রিজ|dge = জ"],
["Excuse me, where is the post office?|মাফ করবেন, ডাকঘর কোথায়?","Go straight and turn right at the corner.|সোজা গিয়ে মোড়ে ডানে ঘুরুন।","Is it far?|দূরে?","No, about five minutes on foot.|না, হেঁটে প্রায় পাঁচ মিনিট।"],
"নিজের বাড়ি থেকে নিকটস্থ দোকান/মসজিদ/স্টেশনে যাওয়ার পথ ইংরেজিতে বর্ণনা করো।",
"পথ বলার সময় ছোট বাক্য ও ক্রমিক শব্দ (first, then, next) ব্যবহার করো।");

D("স্বাস্থ্য ও ডাক্তারের কাছে","doctor english conversation symptoms","অসুস্থতা ও উপসর্গ ডাক্তারকে বলতে পারা।",
"I have a / I feel / My … hurts / How long have you had it? / Take this medicine twice a day।",
["I have a headache and a fever.|আমার মাথাব্যথা ও জ্বর।|আই হ্যাভ আ হেডেইক অ্যান্ড আ ফীভার।","My stomach hurts.|আমার পেটে ব্যথা।|মাই স্টমাক হার্টস।","I feel very weak.|আমি খুব দুর্বল বোধ করছি।|আই ফীল ভেরি উইক।","Take this medicine twice a day.|এই ওষুধ দিনে দুইবার খান।|টেইক দিস মেডিসিন টোয়াইস আ ডে।","You should rest and drink water.|বিশ্রাম নিন ও পানি খান।|ইউ শুড রেস্ট অ্যান্ড ড্রিংক ওয়াটার।"],
["doctor|ডাক্তার|ডক্টর","medicine|ওষুধ|মেডিসিন","pain|ব্যথা|পেইন","cough|কাশি|কফ","cold|সর্দি|কোল্ড","stomach|পেট|স্টমাক","weak|দুর্বল|উইক","hurt|ব্যথা করা|হার্ট","prescription|প্রেসক্রিপশন|প্রিস্ক্রিপশন","hospital|হাসপাতাল|হস্পিটাল"],
["stomach|স্টমাক|ch = ক","medicine|মেডিসিন|মেড-সিন","cough|কফ|gh = ফ"],
["What is the problem?|সমস্যা কী?","I have a fever and a cough.|আমার জ্বর ও কাশি।","Since when?|কবে থেকে?","Since yesterday.|গতকাল থেকে।"],
"ডাক্তারের কাছে কল্পিত রোগ বলার ছোট নাটক করো (২ মিনিট)।",
"শরীরের অংশের নাম শিখলে 'My … hurts' দিয়ে যেকোনো ব্যথা বলা যায়।");

D("ফোনে কথা ও আমন্ত্রণ","phone call english conversation","ফোন ধরা, কল করা ও আমন্ত্রণ জানানো/গ্রহণ করা।",
"Hello, this is… / Can I speak to…? / Hold on, please / I'll call you back / Would you like to…? / I'd love to। ",
["Hello, this is Rina speaking.|হ্যালো, আমি রিনা বলছি।|হ্যালো, দিস ইজ রিনা স্পীকিং।","Can I speak to Mr. Karim?|করিম সাহেবের সাথে কথা বলতে পারি?|ক্যান আই স্পীক টু মিস্টার করিম?","Hold on, please.|একটু ধরুন।|হোল্ড অন, প্লিজ।","I will call you back later.|আমি পরে কল করব।|আই উইল কল ইউ ব্যাক লেইটার।","Would you like to join us for dinner?|আমাদের সাথে রাতের খাবারে আসবে?|উড ইউ লাইক টু জয়েন আস ফর ডিনার?"],
["call|কল|কল","number|নম্বর|নাম্বার","message|বার্তা|মেসেজ","busy|ব্যস্ত|বিজি","line|লাইন|লাইন","wrong number|ভুল নম্বর|রং নাম্বার","hold on|ধরুন|হোল্ড অন","invite|আমন্ত্রণ জানানো|ইনভাইট","join|যোগ দেওয়া|জয়েন","reply|উত্তর|রিপ্লাই"],
["hello|হ্যালো|দ্বিতীয় অংশে জোর","message|মেসেজ|শেষে 'জ'","invite|ইনভাইট|শেষে জোর"],
["Hello, can I speak to Mr. Karim?|করিম সাহেবের সাথে কথা বলতে পারি?","Sorry, he is not here. Can I take a message?|দুঃখিত, তিনি নেই। বার্তা রাখব?","Please tell him Rina called.|বলবেন রিনা ফোন করেছিল।","Sure. I will tell him.|অবশ্যই, বলব।"],
"ফোনে নিজের পরিচয় দিয়ে বন্ধুকে বাড়িতে আসতে আমন্ত্রণ জানানোর কথোপকথন বলো।",
"ফোনে ধীরে ও স্পষ্ট বলো; বুঝতে না পারলে 'Could you repeat that?' বলো।");

D("অতীতের অভিজ্ঞতা: Past Simple প্রশ্ন ও না-বাচক","past simple questions did not","Did দিয়ে প্রশ্ন ও didn't দিয়ে না-বাচক অতীত বাক্য বলতে পারা।",
"Did + subject + verb (মূল রূপ)? / subject + didn't + verb। উত্তর: Yes, I did. / No, I didn't।",
["Did you go to the market?|তুমি কি বাজারে গিয়েছিলে?|ডিড ইউ গো টু দ্য মার্কেট?","Yes, I did. I bought vegetables.|হ্যাঁ, সবজি কিনেছি।|ইয়েস, আই ডিড। আই বট ভেজিটেবলস।","I didn't sleep well last night.|গত রাতে ভালো ঘুমাইনি।|আই ডিডন্ট স্লীপ ওয়েল লাস্ট নাইট।","What did you eat for breakfast?|নাস্তায় কী খেয়েছ?|হোয়াট ডিড ইউ ঈট ফর ব্রেকফাস্ট?","Where did you go last weekend?|গত সপ্তাহান্তে কোথায় গিয়েছিলে?|হোয়ার ডিড ইউ গো লাস্ট উইকএন্ড?"],
["vegetables|সবজি|ভেজিটেবলস","last night|গত রাতে|লাস্ট নাইট","last weekend|গত সপ্তাহান্তে|লাস্ট উইকএন্ড","ago|আগে|অ্যাগো","yesterday|গতকাল|ইয়েস্টারডে","then|তারপর|দেন","after|পরে|আফটার","before|আগে|বিফোর","while|যখন|হোয়াইল","already|ইতিমধ্যে|অলরেডি"],
["vegetables|ভেজিটেবলস|ভেজ-টা-বলস (৩ অংশ)","already|অলরেডি|অল-রেডি","weekend|উইকএন্ড|প্রথম অংশে জোর"],
["What did you do last weekend?|গত সপ্তাহান্তে কী করেছিলে?","I visited my grandmother.|দাদির বাড়ি গিয়েছিলাম।","Did you stay overnight?|রাত কাটিয়েছিলে?","No, I came back in the evening.|না, সন্ধ্যায় ফিরেছি।"],
"গত সপ্তাহান্তে বা গতকালের ঘটনা ১ মিনিটে গল্পের মতো বলো।",
"Did-এর পরে verb মূল রূপে: Did you went? (✗) Did you go? (✓)।");

D("ভবিষ্যৎ পরিকল্পনা: going to ও will","going to future plans english","পরিকল্পনা (going to) ও সিদ্ধান্ত (will) আলাদা করে বলা।",
"going to = আগে থেকে ঠিক করা পরিকল্পনা (I am going to travel next month)। will = এখনই নেওয়া সিদ্ধান্ত/প্রতিশ্রুতি (I'll help you)।",
["I am going to visit Cox's Bazar next month.|আমি আগামী মাসে কক্সবাজার যাব।|আই অ্যাম গোইং টু ভিজিট কক্সেস বাজার নেক্সট মান্থ।","She is going to start a new job.|সে নতুন চাকরি শুরু করবে।|শি ইজ গোইং টু স্টার্ট আ নিউ জব।","We are not going to wait.|আমরা অপেক্ষা করব না।|উই আর নট গোইং টু ওয়েট।","What are you going to do tomorrow?|আগামীকাল কী করবে?|হোয়াট আর ইউ গোইং টু ডু টুমরো?","The phone is ringing. I'll answer it.|ফোন বাজছে। আমি ধরছি।|দ্য ফোন ইজ রিংগিং। আইল আনসার ইট।"],
["plan|পরিকল্পনা|প্ল্যান","travel|ভ্রমণ করা|ট্র্যাভেল","visit|ঘুরতে যাওয়া|ভিজিট","start|শুরু করা|স্টার্ট","next month|আগামী মাস|নেক্সট মান্থ","next year|আগামী বছর|নেক্সট ইয়ার","soon|শিগগির|সুন","decide|সিদ্ধান্ত নেওয়া|ডিসাইড","maybe|হয়তো|মেইবি","hope|আশা|হোপ"],
["going to|গোইং টু|দ্রুত: 'গনা'","maybe|মেইবি|মেই-বি","decide|ডিসাইড|শেষে জোর"],
["What are you going to do next month?|আগামী মাসে কী করবে?","I am going to travel to Cox's Bazar.|কক্সবাজার যাব।","Are you going alone?|একা?","No, I am going with my family.|না, পরিবারের সাথে।"],
"আগামী মাস ও বছরের ৬টি পরিকল্পনা going to দিয়ে বলো।",
"পরিকল্পনা = going to; তাৎক্ষণিক সিদ্ধান্ত = will। দুটোই অনুশীলন করো।");

D("ফেজ ৪ রিভিউ: দৈনন্দিন পরিস্থিতির সংলাপ","everyday english conversation practice","সপ্তাহের সব পরিস্থিতি (দোকান, রেস্তোরাঁ, পথ, ডাক্তার, ফোন) নিজে নিজে সংলাপ করে বলা।",
"আজ ৫টি পরিস্থিতির ছোট সংলাপ বলো: দোকানে, রেস্তোরাঁয়, পথ জিজ্ঞাসা, ডাক্তার, ফোন।",
["How much is this?|এটার দাম কত?|হাউ মাচ ইজ দিস?","I will have rice and chicken.|আমি ভাত ও মুরগি নেব।|আই উইল হ্যাভ রাইস অ্যান্ড চিকেন।","How can I get to the station?|স্টেশনে কীভাবে যাব?|হাউ ক্যান আই গেট টু দ্য স্টেইশন?","I have a headache.|আমার মাথাব্যথা।|আই হ্যাভ আ হেডেইক।","I will call you back.|আমি পরে ফোন করব।|আই উইল কল ইউ ব্যাক।"],
["situation|পরিস্থিতি|সিচুয়েইশন","conversation|কথোপকথন|কনভার্সেশন","role play|ভূমিকা অভিনয়|রোল প্লে","polite|ভদ্র|পোলাইট","please|প্লিজ|প্লীজ","thank you|ধন্যবাদ|থ্যাংক ইউ","excuse me|মাফ করবেন|এক্সকিউজ মি","pardon|আবার বলুন|পার্ডন","repeat|পুনরাবৃত্তি করা|রিপীট","slowly|ধীরে|স্লোলি"],
["conversation|কনভার্সেশন|চার অংশ: কন-ভার-সে-শন","polite|পোলাইট|শেষে জোর","pardon|পার্ডন|প্রথম অংশে জোর"],
["Excuse me, could you repeat that?|মাফ করবেন, আবার বলবেন?","Sure. How can I get to the station?|অবশ্যই। স্টেশনে কীভাবে যাব?","Please speak slowly.|ধীরে বলুন।","Of course. Go straight and turn left.|অবশ্যই। সোজা গিয়ে বাঁয়ে ঘুরুন।"],
"৫টি পরিস্থিতির সংলাপ নিজে দুই ভূমিকায় বলে রেকর্ড করো (প্রতিটি ৩০ সেকেন্ড)।",
"ভদ্র শব্দ (please, excuse me, could you) যোগ করলে কথা স্বাভাবিক ও ভদ্র শোনায়।");
/* ৬০ দিনের কনটেন্ট — ফেজ ৫ ও ৬ (দিন ৪১–৬০) */
/* ===== ফেজ ৫: কথা চালানো ও নিজের মত প্রকাশ (দিন ৪১–৫০) ===== */
D("মতামত ও কারণ: I think, because, so","giving opinions because so english","নিজের মত কারণসহ প্রকাশ করতে পারা।",
"I think… / In my opinion… / because (কারণ) / so (ফলে) / but (কিন্তু) / and (এবং)। I like it because it is easy।",
["I think English is useful.|আমার মনে হয় ইংরেজি দরকারি।|আই থিংক ইংলিশ ইজ ইউজফুল।","I like it because it is easy.|আমি এটি পছন্দ করি কারণ সহজ।|আই লাইক ইট বিকজ ইট ইজ ঈজি।","It was raining, so I stayed home.|বৃষ্টি হচ্ছিল, তাই বাড়িতে থেকেছি।|ইট ওয়জ রেইনিং, সো আই স্টেইড হোম।","I am tired but I will finish the work.|আমি ক্লান্ত কিন্তু কাজ শেষ করব।|আই অ্যাম টায়ার্ড বাট আই উইল ফিনিশ দ্য ওয়ার্ক।","In my opinion, this is a good idea.|আমার মতে এটি ভালো ধারণা।|ইন মাই অপিনিয়ন, দিস ইজ আ গুড আইডিয়া।"],
["opinion|মত|অপিনিয়ন","because|কারণ|বিকজ","so|তাই|সো","but|কিন্তু|বাট","and|এবং|অ্যান্ড","or|অথবা|অর","useful|কাজের|ইউজফুল","important|গুরুত্বপূর্ণ|ইমপোর্ট্যান্ট","agree|একমত হওয়া|অ্যাগ্রী","disagree|দ্বিমত|ডিসঅ্যাগ্রী"],
["because|বিকজ|'বি-কজ' (z ধ্বনি)","opinion|অপিনিয়ন|দ্বিতীয় অংশে জোর","important|ইমপোর্ট্যান্ট|পোর্ট-এ জোর"],
["Do you think English is important?|ইংরেজি কি জরুরি?","Yes, because it helps me get a good job.|হ্যাঁ, কারণ ভালো চাকরি পেতে সাহায্য করে।","I agree. It also helps travel.|একমত। ভ্রমণেও সাহায্য করে।","Right. So I study every day.|ঠিক। তাই রোজ পড়ি।"],
"একটি বিষয়ে (মোবাইল, ইংরেজি শেখা, শহর বনাম গ্রাম) ১ মিনিট মত দাও, ২টি কারণসহ।",
"'because'-এর পরে পূর্ণ বাক্য; 'so'-এর আগে কারণ, পরে ফল।");

D("সম্মতি-অসম্মতি, অনুরোধ ও ভদ্রতা","polite requests agree disagree english","ভদ্রভাবে অনুরোধ, সম্মতি ও অসম্মতি প্রকাশ করা।",
"Could you…? / Would you mind…? / May I…? / I agree / I'm afraid I disagree / That's a good point। ",
["Could you help me, please?|দয়া করে আমাকে সাহায্য করবেন?|কুড ইউ হেল্প মি, প্লিজ?","Would you mind opening the window?|জানালাটি খুলে দেবেন কি?|উড ইউ মাইন্ড ওপেনিং দ্য উইন্ডো?","May I sit here?|এখানে বসতে পারি?|মে আই সিট হিয়ার?","I agree with you.|আমি তোমার সাথে একমত।|আই অ্যাগ্রী উইথ ইউ।","I am afraid I disagree.|দুঃখিত, আমি একমত নই।|আই অ্যাম অ্যাফ্রেইড আই ডিসঅ্যাগ্রী।"],
["request|অনুরোধ|রিকোয়েস্ট","permission|অনুমতি|পারমিশন","mind|আপত্তি করা|মাইন্ড","allow|অনুমতি দেওয়া|অ্যালাউ","refuse|প্রত্যাখ্যান|রিফিউজ","accept|গ্রহণ করা|অ্যাকসেপ্ট","point|যুক্তি|পয়েন্ট","maybe|হয়তো|মেইবি","certainly|অবশ্যই|সার্টেনলি","afraid|ভীত / দুঃখিত|অ্যাফ্রেইড"],
["would you|উড ইউ|দ্রুত: 'উডজু'","permission|পারমিশন|মি = শ","afraid|অ্যাফ্রেইড|শেষে 'ইড'"],
["Would you mind closing the door?|দরজাটি বন্ধ করবেন?","Not at all. Here you go.|মোটেও না। এই যে।","May I borrow your pen?|আপনার কলমটি ধার নিতে পারি?","Certainly. Take it.|অবশ্যই, নিন।"],
"৫টি অনুরোধ (বন্ধু, বস, অপরিচিত) ও তার ভদ্র উত্তর বলো।",
"Would you mind-এর পরে verb+ing: Would you mind opening… ✓");

D("ছোট গল্প বলা (Past Story)","telling a story in english past","ক্রম ও সংযোজক শব্দ দিয়ে অতীতের গল্প বলা।",
"One day… / First… / Then… / After that… / Suddenly… / Finally… / In the end…। অতীত রূপ ব্যবহার করো।",
["One day, I went to the market.|একদিন আমি বাজারে গেলাম।|ওয়ান ডে, আই ওয়েন্ট টু দ্য মার্কেট।","Suddenly, it started to rain.|হঠাৎ বৃষ্টি শুরু হল।|সাডেনলি, ইট স্টার্টেড টু রেইন।","I ran to a small shop.|আমি একটি ছোট দোকানে দৌড়ে গেলাম।|আই র‍্যান টু আ স্মল শপ।","After that, I met an old friend.|এরপর এক পুরোনো বন্ধুর সাথে দেখা হল।|আফটার দ্যাট, আই মেট অ্যান ওল্ড ফ্রেন্ড।","In the end, we had tea together.|শেষে আমরা একসাথে চা খেলাম।|ইন দি এন্ড, উই হ্যাড টী টুগেদার।"],
["suddenly|হঠাৎ|সাডেনলি","finally|অবশেষে|ফাইনালি","meet / met|দেখা করা / করেছিলাম|মীট / মেট","began|শুরু হল|বিগ্যান","happened|ঘটল|হ্যাপেন্ড","remember|মনে পড়া|রিমেম্বার","forget / forgot|ভোলা / ভুলে গিয়েছিলাম|ফরগেট / ফরগট","lucky|ভাগ্যবান|লাকি","surprised|অবাক|সারপ্রাইজড","story|গল্প|স্টোরি"],
["suddenly|সাডেনলি|প্রথম অংশে জোর","surprised|সারপ্রাইজড|মাঝখানে 'প্রাই'","remember|রিমেম্বার|মেম-এ জোর"],
["What happened yesterday?|গতকাল কী হয়েছিল?","I went to the market, and suddenly it rained.|বাজারে গিয়েছিলাম, হঠাৎ বৃষ্টি।","What did you do?|কী করলে?","I ran to a shop and met an old friend.|দোকানে দৌড়ে গিয়ে এক পুরোনো বন্ধুর সাথে দেখা।"],
"গত সপ্তাহের একটি মজার বা অদ্ভুত ঘটনা One day… থেকে In the end… পর্যন্ত ক্রমে বলো।",
"গল্পে সময়ের ক্রম বোঝাতে বাক্যের শুরুতে ক্রমিক শব্দ ব্যবহার করো।");

D("নিজের সম্পর্কে বিস্তারিত বলা (পরিবার, শখ, লক্ষ্য)","talk about yourself family hobbies goals","পরিবার, শখ ও লক্ষ্য নিয়ে ২ মিনিট কথা বলতে পারা।",
"My family has… / In my free time I… / My goal is to… / I am interested in… / I am good at…",
["There are five people in my family.|আমার পরিবারে পাঁচজন সদস্য।|দেয়ার আর ফাইভ পিপল ইন মাই ফ্যামিলি।","In my free time, I read and play cricket.|অবসরে আমি পড়ি ও ক্রিকেট খেলি।|ইন মাই ফ্রী টাইম, আই রীড অ্যান্ড প্লে ক্রিকেট।","I am interested in technology.|আমি প্রযুক্তিতে আগ্রহী।|আই অ্যাম ইন্টারেস্টেড ইন টেকনোলজি।","I am good at maths.|আমি অঙ্কে ভালো।|আই অ্যাম গুড অ্যাট ম্যাথস।","My goal is to speak English fluently.|আমার লক্ষ্য সাবলীল ইংরেজি বলা।|মাই গোল ইজ টু স্পীক ইংলিশ ফ্লুয়েন্টলি।"],
["hobby|শখ|হবি","free time|অবসর|ফ্রী টাইম","interested in|আগ্রহী|ইন্টারেস্টেড ইন","good at|দক্ষ|গুড অ্যাট","goal|লক্ষ্য|গোল","fluently|সাবলীলভাবে|ফ্লুয়েন্টলি","member|সদস্য|মেম্বার","relative|আত্মীয়|রেলাটিভ","hometown|নিজের শহর|হোমটাউন","future|ভবিষ্যৎ|ফিউচার"],
["interested|ইন্টারেস্টিড|ইন-ট্রা-স্টিড","fluently|ফ্লুয়েন্টলি|ফ্লু-এন্ট-লি","future|ফিউচার|ফিউ-চার"],
["Tell me about your family.|তোমার পরিবার সম্পর্কে বলো।","There are five people in my family.|আমার পরিবারে পাঁচজন।","What do you do in your free time?|অবসরে কী করো?","I read books and play cricket.|বই পড়ি ও ক্রিকেট খেলি।"],
"নিজের সম্পর্কে ২ মিনিট বলো: পরিবার, বাড়ি, শখ, ভালো যে কাজ, লক্ষ্য। রেকর্ড করো।",
"তথ্যের সাথে কারণ বা ছোট গল্প যোগ করলে কথা আরও আকর্ষণীয় হয়।");

D("আবহাওয়া, ঋতু ও ছোট আলাপ (Small Talk)","weather small talk english","অপরিচিতের সাথে আবহাওয়া নিয়ে ছোট আলাপ শুরু করা।",
"It's hot/cold/rainy today। Nice weather, isn't it? / What's the weather like? / It looks like rain।",
["It is very hot today.|আজ খুব গরম।|ইট ইজ ভেরি হট টুডে।","Nice weather, isn't it?|সুন্দর আবহাওয়া, তাই না?|নাইস ওয়েদার, ইজন্ট ইট?","It looks like rain.|মনে হচ্ছে বৃষ্টি হবে।|ইট লুকস লাইক রেইন।","I love the winter season.|আমি শীতকাল ভালোবাসি।|আই লাভ দ্য উইন্টার সীজন।","How was your weekend?|তোমার সপ্তাহান্ত কেমন ছিল?|হাউ ওয়জ ইয়োর উইকএন্ড?"],
["weather|আবহাওয়া|ওয়েদার","sunny|রৌদ্রোজ্জ্বল|সানি","cloudy|মেঘলা|ক্লাউডি","rainy|বৃষ্টিময়|রেইনি","windy|বাতাসের|উইন্ডি","foggy|কুয়াশাচ্ছন্ন|ফগি","humid|আর্দ্র|হিউমিড","season|ঋতু|সীজন","temperature|তাপমাত্রা|টেম্পারেচার","storm|ঝড়|স্টর্ম"],
["weather|ওয়েদার|th কণ্ঠ কাঁপিয়ে","temperature|টেম্পারেচার|টেম-প্রা-চার","humid|হিউমিড|h উচ্চারিত"],
["Nice weather today, isn't it?|আজ সুন্দর আবহাওয়া, তাই না?","Yes, but a little hot.|হ্যাঁ, তবে একটু গরম।","It looks like rain later.|পরে বৃষ্টি হতে পারে।","I hope so. We need the rain.|আশা করি। বৃষ্টি দরকার।"],
"আজকের আবহাওয়া ও প্রিয় ঋতু নিয়ে ১ মিনিট বলো; তারপর কাউকে ছোট প্রশ্ন করো।",
"Small talk শুরু হয় প্রায়ই আবহাওয়া দিয়ে — এটি আত্মবিশ্বাস বাড়ায়।");

D("ভ্রমণ ও হোটেল","travel hotel english conversation","ভ্রমণ, টিকিট ও হোটেলে ব্যবহারযোগ্য কথোপকথন।",
"I'd like to book… / How much is a ticket to…? / Do you have a room? / What time is check-out?",
["I would like to book a room.|আমি একটি রুম বুক করতে চাই।|আই উড লাইক টু বুক আ রুম।","How much is a ticket to Chittagong?|চট্টগ্রামের টিকিট কত?|হাউ মাচ ইজ আ টিকেট টু চিটাগং?","What time is check-out?|চেক-আউট কখন?|হোয়াট টাইম ইজ চেক-আউট?","Is breakfast included?|নাস্তা কি অন্তর্ভুক্ত?|ইজ ব্রেকফাস্ট ইনক্লুডেড?","My train leaves at nine.|আমার ট্রেন নয়টায় ছাড়ে।|মাই ট্রেইন লীভস অ্যাট নাইন।"],
["ticket|টিকেট|টিকেট","train|ট্রেন|ট্রেইন","flight|ফ্লাইট|ফ্লাইট","passport|পাসপোর্ট|পাসপোর্ট","luggage|মালপত্র|লাগেজ","reservation|সংরক্ষণ|রিজার্ভেইশন","hotel|হোটেল|হোটেল","check-in|চেক-ইন|চেক-ইন","single room|একক রুম|সিঙ্গল রুম","arrive|পৌঁছানো|অ্যারাইভ"],
["passport|পাসপোর্ট|প্যাস-পোর্ট","luggage|লাগেজ|লা-গেজ","reservation|রিজার্ভেইশন|রে-জার-ভে-শন"],
["Good evening. I have a reservation.|শুভ সন্ধ্যা। আমার রিজার্ভেশন আছে।","May I have your name, please?|আপনার নাম বলবেন?","Rina Akter, for two nights.|রিনা আক্তার, দুই রাতের জন্য।","Welcome. Here is your key.|স্বাগতম। এই নিন চাবি।"],
"হোটেলে চেক-ইন ও ট্রেনের টিকিট কাটার দুটি ছোট সংলাপ বলো।",
"বুক/টিকিট সংক্রান্ত শব্দ (book, reserve, cancel, confirm) একসাথে শেখো।");

D("কর্মজীবন: কাজ ও সহকর্মী (Workplace English)","workplace english conversation office","অফিসে সহকর্মী ও বসের সাথে সাধারণ কথোপকথন।",
"Can you send me the file? / I'll finish it by Friday / Let's have a meeting / I am responsible for… / I need your help।",
["Can you send me the file, please?|ফাইলটি পাঠাবেন কি?|ক্যান ইউ সেন্ড মি দ্য ফাইল, প্লিজ?","I will finish the report by Friday.|আমি শুক্রবারের মধ্যে প্রতিবেদন শেষ করব।|আই উইল ফিনিশ দ্য রিপোর্ট বাই ফ্রাইডে।","Let's have a meeting at ten.|দশটায় মিটিং করি।|লেটস হ্যাভ আ মীটিং অ্যাট টেন।","I am responsible for sales.|আমি বিক্রয়ের দায়িত্বে আছি।|আই অ্যাম রেসপন্সিবল ফর সেইলস।","I need your help with this task.|এই কাজে তোমার সাহায্য দরকার।|আই নীড ইয়োর হেল্প উইথ দিস টাস্ক।"],
["colleague|সহকর্মী|কলীগ","manager|ম্যানেজার|ম্যানেজার","report|প্রতিবেদন|রিপোর্ট","email|ইমেইল|ঈমেইল","task|কাজ|টাস্ক","deadline|শেষ সময়|ডেডলাইন","meeting|সভা|মীটিং","schedule|সূচি|শিডিউল","salary|বেতন|স্যালারি","promotion|পদোন্নতি|প্রমোশন"],
["schedule|শিডিউল (US) / শেডিউল (UK)|দুটোই শুদ্ধ","responsible|রেসপন্সিবল|স্পন-এ জোর","salary|স্যালারি|স্যাল-আ-রি"],
["Good morning. Do you have a minute?|সুপ্রভাত। এক মিনিট আছে?","Sure. What is it?|অবশ্যই। কী ব্যাপার?","I need your help with the report.|প্রতিবেদনে সাহায্য দরকার।","No problem. Let's sit together at ten.|সমস্যা নেই। দশটায় একসাথে বসি।"],
"নিজের কাজ বা পড়াশোনার একটি পরিস্থিতিতে সহকর্মীর সাথে ছোট সংলাপ বলো।",
"কর্মক্ষেত্রে 'Could you…' ও 'Would you mind…' বেশি ব্যবহার করো।");

D("চাকরির ইন্টারভিউ ১: Tell me about yourself","job interview tell me about yourself","'Tell me about yourself' প্রশ্নের ভালো উত্তর তৈরি করা।",
"উত্তরের কাঠামো: নাম → পড়াশোনা → অভিজ্ঞতা → দক্ষতা → লক্ষ্য। I have a degree in… / I have … years of experience in…",
["My name is Rina Akter.|আমার নাম রিনা আক্তার।|মাই নেইম ইজ রিনা আক্তার।","I have a degree in business studies.|আমার বিবিএ ডিগ্রি আছে।|আই হ্যাভ আ ডিগ্রী ইন বিজনেস স্টাডিজ।","I have two years of experience in sales.|বিক্রয়ে আমার দুই বছরের অভিজ্ঞতা আছে।|আই হ্যাভ টু ইয়ার্স অভ এক্সপীরিয়েন্স ইন সেইলস।","I am good at teamwork and communication.|আমি দলগত কাজ ও যোগাযোগে ভালো।|আই অ্যাম গুড অ্যাট টীমওয়ার্ক অ্যান্ড কমিউনিকেইশন।","My goal is to grow with your company.|আমার লক্ষ্য আপনার কোম্পানির সাথে বেড়ে ওঠা।|মাই গোল ইজ টু গ্রো উইথ ইয়োর কোম্পানি।"],
["degree|ডিগ্রি|ডিগ্রী","experience|অভিজ্ঞতা|এক্সপীরিয়েন্স","skill|দক্ষতা|স্কিল","strength|শক্তি/গুণ|স্ট্রেংথ","weakness|দুর্বলতা|উইকনেস","teamwork|দলগত কাজ|টীমওয়ার্ক","communication|যোগাযোগ|কমিউনিকেইশন","company|প্রতিষ্ঠান|কাম্পানি","position|পদ|পজিশন","apply|আবেদন করা|অ্যাপ্লাই"],
["experience|এক্সপীরিয়েন্স|পীর-এ জোর","strength|স্ট্রেংথ|str + ength","position|পজিশন|জি-তে জোর"],
["Tell me about yourself.|নিজের সম্পর্কে বলুন।","I am Rina. I have a degree in business and two years of sales experience.|আমি রিনা, বিবিএ ডিগ্রি ও দুই বছরের বিক্রয় অভিজ্ঞতা আছে।","What are your strengths?|আপনার শক্তি কী?","Teamwork and communication.|দলগত কাজ ও যোগাযোগ।"],
"নিজের জন্য ১ মিনিটের 'Tell me about yourself' উত্তর বানিয়ে রেকর্ড করো।",
"উত্তর ১ মিনিটের মধ্যে রাখো; বেশি লম্বা হলে মূল পয়েন্ট হারিয়ে যায়।");

D("চাকরির ইন্টারভিউ ২: সাধারণ প্রশ্ন","common job interview questions english","Strength, weakness, why this job, salary, ভবিষ্যৎ লক্ষ্য — এই প্রশ্নের উত্তর দেওয়া।",
"Why do you want this job? / What is your biggest strength? / Where do you see yourself in five years? / Why should we hire you?",
["I want this job because I like to help people.|আমি এই চাকরি চাই কারণ মানুষকে সাহায্য করতে ভালোবাসি।|আই ওয়ান্ট দিস জব বিকজ আই লাইক টু হেল্প পিপল।","My biggest strength is that I learn quickly.|আমার বড় শক্তি আমি দ্রুত শিখি।|মাই বিগেস্ট স্ট্রেংথ ইজ দ্যাট আই লার্ন কুইকলি।","In five years, I want to be a team leader.|পাঁচ বছরে আমি টিম লিডার হতে চাই।|ইন ফাইভ ইয়ার্স, আই ওয়ান্ট টু বি আ টীম লীডার।","I work hard and I am always on time.|আমি কঠোর পরিশ্রম করি ও সবসময় সময়মতো থাকি।|আই ওয়ার্ক হার্ড অ্যান্ড আই অ্যাম অলওয়েজ অন টাইম।","I am ready to learn and grow.|আমি শিখতে ও এগোতে প্রস্তুত।|আই অ্যাম রেডি টু লার্ন অ্যান্ড গ্রো।"],
["hire|নিয়োগ দেওয়া|হায়ার","leader|নেতা|লীডার","quickly|দ্রুত|কুইকলি","on time|সময়মতো|অন টাইম","hard-working|পরিশ্রমী|হার্ড-ওয়ার্কিং","honest|সৎ|অনেস্ট","reliable|নির্ভরযোগ্য|রিলায়েবল","salary|বেতন|স্যালারি","expect|আশা করা|ইক্সপেক্ট","negotiate|আলোচনা করা|নেগোশিয়েট"],
["honest|অনেস্ট|h নীরব","reliable|রিলায়েবল|রি-লাই-আ-বল","negotiate|নেগোশিয়েট|শি = শি"],
["Why should we hire you?|কেন আপনাকে নেব?","I work hard and I learn quickly.|আমি পরিশ্রম করি ও দ্রুত শিখি।","Where do you see yourself in five years?|পাঁচ বছর পরে নিজেকে কোথায় দেখেন?","As a team leader in your company.|আপনার কোম্পানির টিম লিডার হিসেবে।"],
"৫টি সাধারণ ইন্টারভিউ প্রশ্নের উত্তর ১ মিনিটে করে রেকর্ড করো।",
"উত্তরে সত্যি অভিজ্ঞতা বা ছোট উদাহরণ দিলে বিশ্বাসযোগ্যতা বাড়ে।");

D("ফেজ ৫ রিভিউ: ৩ মিনিটের স্বাধীন বক্তব্য","speak for three minutes english topic","একটি পরিচিত বিষয়ে ২–৩ মিনিট নিজে থেকে বলতে পারা।",
"কাঠামো: ভূমিকা → ৩টি পয়েন্ট (কারণসহ) → উপসংহার। শুরু: Today I want to talk about… / শেষ: To sum up…",
["Today I want to talk about my hometown.|আজ আমি আমার নিজের শহর নিয়ে বলব।|টুডে আই ওয়ান্ট টু টক অ্যাবাউট মাই হোমটাউন।","First, it is a beautiful and quiet place.|প্রথমত, এটি সুন্দর ও শান্ত।|ফার্স্ট, ইট ইজ আ বিউটিফুল অ্যান্ড কোয়ায়েট প্লেইস।","Second, the people are very kind.|দ্বিতীয়ত, মানুষগুলো খুব দয়ালু।|সেকেন্ড, দ্য পিপল আর ভেরি কাইন্ড।","Finally, the food is delicious.|অবশেষে, খাবার সুস্বাদু।|ফাইনালি, দ্য ফুড ইজ ডেলিশাস।","To sum up, I love my hometown.|সংক্ষেপে, আমি আমার শহরকে ভালোবাসি।|টু সাম আপ, আই লাভ মাই হোমটাউন।"],
["topic|বিষয়|টপিক","introduction|ভূমিকা|ইন্ট্রোডাকশন","conclusion|উপসংহার|কনক্লুশন","firstly|প্রথমত|ফার্স্টলি","secondly|দ্বিতীয়ত|সেকেন্ডলি","finally|অবশেষে|ফাইনালি","to sum up|সংক্ষেপে|টু সাম আপ","example|উদাহরণ|ইগজ্যাম্পল","speech|বক্তব্য|স্পীচ","confident|আত্মবিশ্বাসী|কনফিডেন্ট"],
["introduction|ইন্ট্রোডাকশন|ডাক-এ জোর","conclusion|কনক্লুশন|ক্লু-তে জোর","confident|কনফিডেন্ট|কন-ফি-ডেন্ট"],
["What topic will you speak about?|কোন বিষয়ে বলবে?","My hometown. I have three points.|নিজের শহর। আমার তিনটি পয়েন্ট।","Great. Speak for two minutes.|ভালো। দুই মিনিট বলো।","Okay. Today I want to talk about my hometown.|ঠিক আছে। আজ আমি নিজের শহর নিয়ে বলব।"],
"একটি বিষয়ে (আমার শহর / প্রিয় মানুষ / আমার স্বপ্ন) ২–৩ মিনিট বলো, রেকর্ড করো ও পুনরায় শুনে ভুল চিহ্নিত করো।",
"নিজের রেকর্ডিং শোনাই উন্নতির দ্রুততম উপায়।");

/* ===== ফেজ ৬: আত্মবিশ্বাস ও বাস্তব প্রয়োগ (দিন ৫১–৬০) ===== */
D("ভিসা ইন্টারভিউ ১: পরিচয় ও ভ্রমণের উদ্দেশ্য","visa interview english basic questions","ভিসা ইন্টারভিউয়ে পরিচয় ও ভ্রমণের উদ্দেশ্য স্পষ্টভাবে বলা।",
"What is the purpose of your visit? / How long will you stay? / Who will pay for your trip? / Where will you stay? উত্তর ছোট ও সত্য রাখো।",
["I am going for study.|আমি পড়াশোনার জন্য যাচ্ছি।|আই অ্যাম গোইং ফর স্টাডি।","I will stay for two years.|আমি দুই বছর থাকব।|আই উইল স্টে ফর টু ইয়ার্স।","My parents will pay for my trip.|আমার বাবা-মা খরচ দেবেন।|মাই প্যারেন্টস উইল পে ফর মাই ট্রিপ।","I will stay in a university dormitory.|আমি বিশ্ববিদ্যালয়ের হলে থাকব।|আই উইল স্টে ইন আ ইউনিভার্সিটি ডর্মিটরি।","I will come back after my studies.|পড়া শেষে আমি ফিরে আসব।|আই উইল কাম ব্যাক আফটার মাই স্টাডিজ।"],
["visa|ভিসা|ভীসা","purpose|উদ্দেশ্য|পারপাস","visit|ভ্রমণ|ভিজিট","stay|থাকা|স্টে","sponsor|পৃষ্ঠপোষক|স্পনসর","dormitory|ছাত্রাবাস|ডর্মিটরি","embassy|দূতাবাস|এমবাসি","document|কাগজপত্র|ডকুমেন্ট","return|ফিরে আসা|রিটার্ন","approved|অনুমোদিত|অ্যাপ্রুভড"],
["purpose|পারপাস|'পার-পাস'","embassy|এমবাসি|এম-বা-সি","documents|ডকুমেন্টস|ডক-ইউ-মেন্টস"],
["What is the purpose of your visit?|আপনার ভ্রমণের উদ্দেশ্য কী?","I am going for higher studies.|আমি উচ্চশিক্ষার জন্য যাচ্ছি।","How long will you stay?|কত সময় থাকবেন?","For two years. I will return after that.|দুই বছর। এরপর ফিরে আসব।"],
"ভিসা কর্মকর্তাকে ৫টি মৌলিক প্রশ্নের উত্তর দাও (সংক্ষিপ্ত, সত্য, স্পষ্ট) এবং রেকর্ড করো।",
"ভিসা ইন্টারভিউয়ে উত্তর ছোট ও স্পষ্ট রাখো; অতিরিক্ত তথ্য ঝুঁকি বাড়ায়।");

D("ভিসা ইন্টারভিউ ২: আর্থিক ও পরিবার সংক্রান্ত প্রশ্ন","visa interview financial family questions","পরিবার, আর্থিক সামর্থ্য ও ফিরে আসার পরিকল্পনা নিয়ে আত্মবিশ্বাসী উত্তর।",
"What does your father do? / How will you fund your studies? / Do you have relatives there? / Why will you come back?",
["My father is a businessman.|আমার বাবা ব্যবসায়ী।|মাই ফাদার ইজ আ বিজনেসম্যান।","My family will fund my studies.|আমার পরিবার খরচ দেবে।|মাই ফ্যামিলি উইল ফান্ড মাই স্টাডিজ।","I have a scholarship.|আমি বৃত্তি পেয়েছি।|আই হ্যাভ আ স্কলারশিপ।","I have no relatives there.|সেখানে আমার আত্মীয় নেই।|আই হ্যাভ নো রেলাটিভস দেয়ার।","My family and my job are here, so I will come back.|আমার পরিবার ও কাজ এখানে, তাই ফিরব।|মাই ফ্যামিলি অ্যান্ড মাই জব আর হিয়ার, সো আই উইল কাম ব্যাক।"],
["businessman|ব্যবসায়ী|বিজনেসম্যান","scholarship|বৃত্তি|স্কলারশিপ","fund|অর্থায়ন|ফান্ড","bank statement|ব্যাংক স্টেটমেন্ট|ব্যাংক স্টেইটমেন্ট","income|আয়|ইনকাম","savings|সঞ্চয়|সেইভিংস","relative|আত্মীয়|রেলাটিভ","tie|বন্ধন|টাই","confirm|নিশ্চিত করা|কনফার্ম","evidence|প্রমাণ|এভিডেন্স"],
["scholarship|স্কলারশিপ|স্কল-আর-শিপ","evidence|এভিডেন্স|এভ-ই-ডেন্স","income|ইনকাম|ইন-কাম"],
["How will you pay for your studies?|কীভাবে খরচ চালাবেন?","I have a scholarship, and my family will help.|বৃত্তি আছে, পরিবারও সাহায্য করবে।","Why will you return?|কেন ফিরবেন?","My family and my job are here.|আমার পরিবার ও কাজ এখানে।"],
"নিজের (বা কল্পিত) ভিসা ইন্টারভিউর ৮টি প্রশ্ন-উত্তর রেকর্ড করো।",
"মিথ্যা বলো না; সত্য ও স্পষ্টতা ইন্টারভিউয়ে বিশ্বাসযোগ্যতা আনে।");

D("ফরমাল ইন্ট্রোডাকশন ও মিটিং","formal introduction english meeting","আনুষ্ঠানিক ইন্ট্রোডাকশন, ব্যবসায়িক মিটিং ও ভদ্র ভাষা শেখা।",
"Allow me to introduce myself / It is a pleasure to meet you / I would like to introduce my colleague / Thank you for your time।",
["Allow me to introduce myself. I am Rina Akter.|আমাকে পরিচয় দিতে দিন। আমি রিনা আক্তার।|অ্যালাউ মি টু ইন্ট্রোডিউস মাইসেলফ। আই অ্যাম রিনা আক্তার।","It is a pleasure to meet you.|আপনার সাথে দেখা হয়ে আনন্দিত।|ইট ইজ আ প্লেজার টু মীট ইউ।","I would like to introduce my colleague, Mr. Hasan.|আমি আমার সহকর্মী হাসান সাহেবের পরিচয় দিতে চাই।|আই উড লাইক টু ইন্ট্রোডিউস মাই কলীগ, মিস্টার হাসান।","Thank you for your time.|আপনার সময়ের জন্য ধন্যবাদ।|থ্যাংক ইউ ফর ইয়োর টাইম।","I look forward to working with you.|আপনার সাথে কাজ করার অপেক্ষায় আছি।|আই লুক ফরওয়ার্ড টু ওয়ার্কিং উইথ ইউ।"],
["introduce|পরিচয় করানো|ইন্ট্রোডিউস","pleasure|আনন্দ|প্লেজার","formal|আনুষ্ঠানিক|ফর্মাল","agenda|আলোচ্যসূচি|এজেন্ডা","appreciate|কদর করা|অ্যাপ্রীশিয়েট","opportunity|সুযোগ|অপরচুনিটি","represent|প্রতিনিধিত্ব|রিপ্রেজেন্ট","company|কোম্পানি|কাম্পানি","partner|অংশীদার|পার্টনার","proposal|প্রস্তাব|প্রপোজাল"],
["pleasure|প্লেজার|s = জ","opportunity|অপরচুনিটি|টিউ-তে জোর","appreciate|অ্যাপ্রীশিয়েট|প্রী = প্রী"],
["Good morning. I am Rina Akter from ABC Company.|সুপ্রভাত। আমি ABC কোম্পানির রিনা আক্তার।","Good morning. It is a pleasure to meet you.|সুপ্রভাত। দেখা হয়ে ভালো লাগল।","Thank you for your time today.|আজ সময় দেওয়ার জন্য ধন্যবাদ।","The pleasure is mine. Please sit down.|আমারই আনন্দ। বসুন।"],
"৩০ সেকেন্ডের একটি ফরমাল পরিচিতি বানাও; তারপর বন্ধুর পরিচয় দাও।",
"ফরমালে সংক্ষেপ (don't, I'm) কম; পূর্ণ রূপ (do not, I am) বেশি ব্যবহার করো।");

D("শোনার দক্ষতা: দ্রুত ইংরেজি বোঝা","english listening skills connected speech","দ্রুত কথার সংযুক্ত উচ্চারণ (want to → wanna) চিনতে ও বুঝতে পারা।",
"দ্রুত কথায় শব্দ জুড়ে যায়: want to → wanna; going to → gonna; give me → gimme; what do you → whaddaya। শোনার জন্য: ৩ বার শুনো — মূল ভাব, তারপর শব্দ, তারপর লিখে মেলাও।",
["I wanna go home.|আমি বাড়ি যেতে চাই।|আই ওয়ানা গো হোম।","What are you gonna do?|তুমি কী করবে?|হোয়াট আর ইউ গনা ডু?","Give me a minute.|আমাকে এক মিনিট দাও।|গিমি আ মিনিট।","Where did you go?|তুমি কোথায় গিয়েছিলে?|হোয়ার ডিডজু গো?","I don't know.|আমি জানি না।|আই ডোনো।"],
["wanna|ওয়ানা (want to)|ওয়ানা","gonna|গনা (going to)|গনা","gimme|গিমি (give me)|গিমি","kinda|কাইন্ডা (kind of)|কাইন্ডা","lemme|লেমি (let me)|লেমি","dunno|ডানো (don't know)|ডানো","outta|আউটা (out of)|আউটা","hafta|হ্যাফটা (have to)|হ্যাফটা","coulda|কুডা (could have)|কুডা","shoulda|শুডা (should have)|শুডা"],
["want to|ওয়ানা|দ্রুত কথায়","going to|গনা|ভবিষ্যৎ","don't know|ডোনো|না জানা"],
["What are you gonna do tonight?|আজ রাতে কী করবে?","I dunno. Maybe watch a movie.|জানি না। হয়তো সিনেমা।","Do you wanna come with me?|আমার সাথে আসবে?","Sure, why not?|অবশ্যই, কেন নয়?"],
"যেকোনো ইংরেজি ভিডিও (৩ মিনিট) ৩ বার শুনে মূল ভাব, তারপর ৫টি নতুন শব্দ লিখে নাও।",
"এই রূপগুলো শুধু বুঝতে শেখো; লেখায় বা ফরমালে want to, going to-ই লেখো।");

D("উচ্চারণ ও ইন্টোনেশন: স্ট্রেস, সুর, ছন্দ","english intonation stress rhythm","শব্দ ও বাক্যের স্ট্রেস, সুর ওঠা-নামা ও ছন্দ আয়ত্ত করা।",
"শব্দে স্ট্রেস: PHOto, phoTOgraphy। বাক্যে মূল শব্দে জোর (content words), ছোট শব্দ (a, the, of) হালকা। Yes/No প্রশ্নে সুর ওঠে ↗, Wh-প্রশ্ন ও বিবৃতিতে নামে ↘।",
["I WANT to GO to the MARket.|আমি বাজারে যেতে চাই।|আই ওয়ান্ট টু গো টু দ্য মার্কেট।","Are you READy? ↗|তুমি কি প্রস্তুত?|আর ইউ রেডি?","What is your NAME? ↘|তোমার নাম কী?|হোয়াট ইজ ইয়োর নেইম?","I like TEA, COFFee, and MILK.|আমি চা, কফি ও দুধ পছন্দ করি।|আই লাইক টী, কফি, অ্যান্ড মিল্ক।","I did NOT say that!|আমি এটা বলিনি!|আই ডিড নট সে দ্যাট!"],
["photograph|ফোটোগ্রাফ|PHO-to-graph","photographer|ফটোগ্রাফার|pho-TOG-ra-pher","important|ইমপোর্ট্যান্ট|im-POR-tant","banana|বানানা|ba-NA-na","computer|কম্পিউটার|com-PU-ter","remember|রিমেম্বার|re-MEM-ber","beautiful|বিউটিফুল|BEAU-ti-ful","wonderful|ওয়ান্ডারফুল|WON-der-ful","interesting|ইন্টারেস্টিং|IN-ter-est-ing","vegetable|ভেজিটেবল|VEG-ta-ble"],
["photograph / photographer|ফোটোগ্রাফ / ফটোগ্রাফার|একই শব্দ, স্ট্রেস বদলায়","record (noun/verb)|রেকর্ড / রিকর্ড|noun-এ প্রথমে, verb-এ শেষে","present (noun/verb)|প্রেজেন্ট / প্রিজেন্ট|ঐ একই নিয়ম"],
["Are you ready? ↗|তুমি কি প্রস্তুত? (সুর ওঠে)","Yes, I am. ↘|হ্যাঁ, প্রস্তুত। (সুর নামে)","What is your plan? ↘|তোমার পরিকল্পনা কী?","I want to learn English. ↘|আমি ইংরেজি শিখতে চাই।"],
"৫টি Yes/No প্রশ্ন (↗) ও ৫টি Wh-প্রশ্ন (↘) জোরে বলো; তারপর রেকর্ড করে নিজের সুর শোনো।",
"বাংলায় সুর কম ওঠে-নামে; ইংরেজিতে তা বেশি — একটু বাড়িয়ে অনুশীলন করো।");

D("বাস্তব সংলাপ: জরুরি অবস্থা ও সমস্যা সমাধান","emergency english phrases problem solving","জরুরি পরিস্থিতিতে সাহায্য চাওয়া ও সমস্যা বর্ণনা করতে পারা।",
"Help! / Call an ambulance! / I lost my wallet / There is a problem with… / Can you help me? / I need to report…",
["Help! Please call an ambulance.|সাহায্য করুন! অ্যাম্বুলেন্স ডাকুন।|হেল্প! প্লিজ কল অ্যান অ্যাম্বুলেন্স।","I lost my wallet.|আমি আমার মানিব্যাগ হারিয়েছি।|আই লস্ট মাই ওয়ালেট।","I missed my bus.|আমার বাস মিস হয়েছে।|আই মিসড মাই বাস।","There is a problem with my phone.|আমার ফোনে সমস্যা।|দেয়ার ইজ আ প্রবলেম উইথ মাই ফোন।","I need to report a theft.|আমি চুরির অভিযোগ জানাতে চাই।|আই নীড টু রিপোর্ট আ থেফট।"],
["emergency|জরুরি অবস্থা|ইমার্জেন্সি","ambulance|অ্যাম্বুলেন্স|অ্যাম্বুলেন্স","police|পুলিশ|পলীস","fire|আগুন|ফায়ার","lost|হারানো|লস্ট","stolen|চুরি হওয়া|স্টোলেন","wallet|মানিব্যাগ|ওয়ালেট","accident|দুর্ঘটনা|অ্যাক্সিডেন্ট","danger|বিপদ|ডেইঞ্জার","safe|নিরাপদ|সেইফ"],
["emergency|ইমার্জেন্সি|মার-এ জোর","ambulance|অ্যাম্বুলেন্স|অ্যাম-বু-লেন্স","accident|অ্যাক্সিডেন্ট|ক-সি"],
["Excuse me, I lost my wallet.|মাফ করবেন, আমার মানিব্যাগ হারিয়েছে।","Where did you lose it?|কোথায় হারিয়েছেন?","I think in the bus.|বাসে মনে হয়।","Let's go and report it to the police.|চলুন পুলিশে জানাই।"],
"৩টি জরুরি পরিস্থিতির (হারানো, দুর্ঘটনা, অসুস্থতা) সংলাপ বলো।",
"জরুরি অবস্থায় ছোট, স্পষ্ট বাক্য ও ধীর গলা — আতঙ্ক কমায়।");

D("সম্পূর্ণ রিভিউ ১: ধারণা ও শব্দভান্ডার","english grammar vocabulary full review","৬০ দিনের মূল ছাঁচ ও শব্দ একসাথে ঝালিয়ে নেওয়া।",
"সব ছাঁচ একবার করে পুনরালোচনা: I am / I + verb / -ing / past / will / have / have to / want to / should / can / questions / not / prepositions / comparison / going to।",
["I am a student and I study every day.|আমি ছাত্র ও প্রতিদিন পড়ি।|আই অ্যাম আ স্টুডেন্ট অ্যান্ড আই স্টাডি এভরি ডে।","I went to school yesterday and I will go tomorrow.|গতকাল স্কুলে গিয়েছিলাম, কাল যাব।|আই ওয়েন্ট টু স্কুল ইয়েস্টারডে অ্যান্ড আই উইল গো টুমরো।","I don't like coffee, but I can drink tea.|আমি কফি পছন্দ করি না, কিন্তু চা খেতে পারি।|আই ডোন্ট লাইক কফি, বাট আই ক্যান ড্রিংক টী।","Where is the bank, and how can I get there?|ব্যাংক কোথায়, আর কীভাবে যাব?|হোয়ার ইজ দ্য ব্যাংক, অ্যান্ড হাউ ক্যান আই গেট দেয়ার?","I am going to speak English every day.|আমি রোজ ইংরেজি বলব বলে ঠিক করেছি।|আই অ্যাম গোইং টু স্পীক ইংলিশ এভরি ডে।"],
["review|পুনরালোচনা|রিভিউ","practice|অনুশীলন|প্র্যাকটিস","progress|অগ্রগতি|প্রোগ্রেস","mistake|ভুল|মিসটেইক","correct|ঠিক করা|কারেক্ট","improve|উন্নতি করা|ইম্প্রুভ","remember|মনে রাখা|রিমেম্বার","understand|বোঝা|আন্ডারস্ট্যান্ড","confident|আত্মবিশ্বাসী|কনফিডেন্ট","fluent|সাবলীল|ফ্লুয়েন্ট"],
["progress|প্রোগ্রেস (noun)|প্রথমে জোর","improve|ইম্প্রুভ|শেষে জোর","mistake|মিসটেইক|টেই-তে জোর"],
["How is your English now?|তোমার ইংরেজি এখন কেমন?","Much better. I can speak with confidence.|অনেক ভালো। আত্মবিশ্বাসে বলতে পারি।","What was the hardest part?|সবচেয়ে কঠিন কী ছিল?","Pronunciation, but I am improving.|উচ্চারণ, তবে উন্নতি করছি।"],
"৬০ দিনের সবচেয়ে কঠিন ৫টি বিষয় বেছে সেগুলো আবার অনুশীলন করো এবং নিজের ভুলের তালিকা বানাও।",
"পুনরালোচনায় নতুন কিছু শিখো না; যা শিখেছ তা স্বয়ংক্রিয় করো।");

D("সম্পূর্ণ রিভিউ ২: উচ্চারণ ও কথোপকথন","english speaking test self assessment","৬০ দিনের উন্নতি পরিমাপ করতে ও নিজের মূল্যায়ন করতে পারা।",
"দিন ১০-এর রেকর্ডিংয়ের সাথে আজকের রেকর্ডিং তুলনা করো: স্পষ্টতা, গতি, ভুল, আত্মবিশ্বাস। নিজেকে ১–৫ নম্বর দাও।",
["I have improved a lot in two months.|দুই মাসে আমি অনেক উন্নতি করেছি।|আই হ্যাভ ইম্প্রুভড আ লট ইন টু মান্থস।","My pronunciation is clearer now.|আমার উচ্চারণ এখন স্পষ্ট।|মাই প্রনানসিয়েইশন ইজ ক্লিয়ারার নাউ।","I can talk about daily life easily.|আমি দৈনন্দিন জীবন নিয়ে সহজে বলতে পারি।|আই ক্যান টক অ্যাবাউট ডেইলি লাইফ ঈজিলি।","I still make some mistakes.|আমি এখনো কিছু ভুল করি।|আই স্টিল মেইক সাম মিসটেইকস।","I will keep practicing every day.|আমি রোজ অনুশীলন চালিয়ে যাব।|আই উইল কীপ প্র্যাকটিসিং এভরি ডে।"],
["assessment|মূল্যায়ন|অ্যাসেসমেন্ট","score|নম্বর|স্কোর","clear|স্পষ্ট|ক্লিয়ার","fast|দ্রুত|ফাস্ট","slow|ধীর|স্লো","accent|উচ্চারণভঙ্গি|অ্যাকসেন্ট","fluency|সাবলীলতা|ফ্লুয়েন্সি","confidence|আত্মবিশ্বাস|কনফিডেন্স","habit|অভ্যাস|হ্যাবিট","keep going|চালিয়ে যাও|কীপ গোইং"],
["pronunciation|প্রনানসিয়েইশন|pro-NUN-ci-A-tion","assessment|অ্যাসেসমেন্ট|সেস-এ জোর","fluency|ফ্লুয়েন্সি|ফ্লু-এন-সি"],
["How do you feel about your English?|ইংরেজি নিয়ে কেমন লাগছে?","Much more confident than before.|আগের চেয়ে অনেক আত্মবিশ্বাসী।","What is your next goal?|পরের লক্ষ্য কী?","To speak fluently with foreigners.|বিদেশিদের সাথে সাবলীল কথা বলা।"],
"৩ মিনিটের একটি স্বাধীন বক্তৃতা রেকর্ড করে দিন ১০-এর সাথে তুলনা করো এবং ৩টি উন্নতি ও ৩টি পরের লক্ষ্য লেখো।",
"তুমি ৬০ দিন নিয়মিত ছিলে — এটাই সবচেয়ে বড় সাফল্য। এবার আরও ৪০ দিনের উন্নত স্তর (ফেজ ৭–১০) অপেক্ষা করছে।");
D("ব্যাংক, ডাকঘর ও সেবা প্রতিষ্ঠানে কথা","bank post office english conversation","ব্যাংক, ডাকঘর ও সরকারি সেবায় প্রয়োজনীয় কথা বলতে পারা।",
"I would like to… (open an account / send a parcel) / How long will it take? / What documents do I need? / Please fill in this form।",
["I would like to open an account.|আমি একটি অ্যাকাউন্ট খুলতে চাই।|আই উড লাইক টু ওপেন অ্যান অ্যাকাউন্ট।","What documents do I need?|আমার কী কী কাগজ লাগবে?|হোয়াট ডকুমেন্টস ডু আই নীড?","How long will it take?|কতক্ষণ লাগবে?|হাউ লং উইল ইট টেইক?","I want to send this parcel to Dhaka.|আমি এই পার্সেল ঢাকায় পাঠাতে চাই।|আই ওয়ান্ট টু সেন্ড দিস পার্সেল টু ঢাকা।","Please fill in this form.|দয়া করে এই ফর্মটি পূরণ করুন।|প্লিজ ফিল ইন দিস ফর্ম।"],
["account|হিসাব|অ্যাকাউন্ট","deposit|জমা দেওয়া|ডিপোজিট","withdraw|তোলা|উইথড্র","balance|জমা অর্থ|ব্যালেন্স","form|ফর্ম|ফর্ম","signature|স্বাক্ষর|সিগনেচার","parcel|পার্সেল|পার্সেল","stamp|ডাকটিকিট|স্ট্যাম্প","address|ঠিকানা|অ্যাড্রেস","queue|সারি|কিউ"],
["queue|কিউ|শুধু 'কিউ' — বাকি অক্ষর নীরব","signature|সিগনেচার|সিগ-না-চার","deposit|ডিপোজিট|পোজ-এ জোর"],
["Good morning. How can I help you?|সুপ্রভাত। কীভাবে সাহায্য করতে পারি?","I would like to open a savings account.|আমি সঞ্চয়ী হিসাব খুলতে চাই।","Please fill in this form and sign here.|এই ফর্ম পূরণ করে এখানে সই করুন।","Thank you. How long will it take?|ধন্যবাদ। কতক্ষণ লাগবে?"],
"ব্যাংকে হিসাব খোলা বা ডাকঘরে পার্সেল পাঠানোর কথোপকথন বলো।",
"কর্মকর্তাকে বুঝতে না পারলে বলো: 'Could you say that again, please?'");

D("পরিবার, বন্ধু ও সামাজিক অনুষ্ঠান","congratulations invitation english social","অভিনন্দন, শোক-সমবেদনা ও আমন্ত্রণ ইংরেজিতে বলতে পারা।",
"Congratulations on… / Happy birthday! / I'm sorry for your loss / Would you like to come to…? / Thank you for inviting me।",
["Congratulations on your new job!|নতুন চাকরির জন্য অভিনন্দন!|কনগ্র্যাচুলেশন্স অন ইয়োর নিউ জব!","Happy birthday! Many happy returns.|শুভ জন্মদিন! বহু বছর বাঁচো।|হ্যাপি বার্থডে! মেনি হ্যাপি রিটার্নস।","I am sorry for your loss.|আপনার ক্ষতিতে আমি দুঃখিত।|আই অ্যাম সরি ফর ইয়োর লস।","Would you like to come to my wedding?|আমার বিয়েতে আসবে?|উড ইউ লাইক টু কাম টু মাই ওয়েডিং?","Thank you for inviting me.|আমন্ত্রণের জন্য ধন্যবাদ।|থ্যাংক ইউ ফর ইনভাইটিং মি।"],
["congratulations|অভিনন্দন|কনগ্র্যাচুলেশন্স","wedding|বিয়ে|ওয়েডিং","party|অনুষ্ঠান|পার্টি","guest|অতিথি|গেস্ট","gift|উপহার|গিফট","celebrate|উদযাপন করা|সেলিব্রেট","festival|উৎসব|ফেস্টিভ্যাল","Eid|ঈদ|ঈদ","wish|শুভেচ্ছা|উইশ","neighbor|প্রতিবেশী|নেইবার"],
["congratulations|কনগ্র্যাচুলেশন্স|গ্র্যাচ = গ্র্যাচ","guest|গেস্ট|u নীরব","celebrate|সেলিব্রেট|শুরুতে জোর"],
["Congratulations on your new job!|নতুন চাকরির জন্য অভিনন্দন!","Thank you so much!|অনেক ধন্যবাদ!","Let's celebrate. Come to dinner on Friday.|চলো উদযাপন করি। শুক্রবার রাতের খাবারে এসো।","I would love to. Thank you for inviting me.|অবশ্যই। আমন্ত্রণের জন্য ধন্যবাদ।"],
"৩টি অনুষ্ঠান (জন্মদিন, ঈদ, বিয়ে) উপলক্ষে বন্ধুকে ইংরেজিতে শুভেচ্ছা জানানোর বার্তা বলো।",
"শুভেচ্ছা ও সমবেদনায় কণ্ঠের সুর উষ্ণ রাখো — শব্দের চেয়ে সুরই বেশি আন্তরিকতা দেখায়।");

D("প্রতিদিনের ক্রিয়া ও Phrasal Verb","everyday phrasal verbs english","সবচেয়ে বেশি ব্যবহৃত ক্রিয়া ও Phrasal Verb আয়ত্ত করা।",
"Phrasal verb = verb + ছোট শব্দ, নতুন অর্থ: turn on (চালু করা), turn off (বন্ধ করা), wake up, get up, look for, pick up, put on।",
["Please turn on the light.|আলোটি জ্বালাও।|প্লিজ টার্ন অন দ্য লাইট।","I wake up early and get up at six.|আমি ভোরে জেগে ছয়টায় উঠি।|আই ওয়েক আপ আর্লি অ্যান্ড গেট আপ অ্যাট সিক্স।","I am looking for my keys.|আমি আমার চাবি খুঁজছি।|আই অ্যাম লুকিং ফর মাই কীজ।","Can you pick me up at five?|পাঁচটায় আমাকে তুলে নেবে?|ক্যান ইউ পিক মি আপ অ্যাট ফাইভ?","Put on your jacket. It is cold.|জ্যাকেট পরো। ঠান্ডা।|পুট অন ইয়োর জ্যাকেট। ইট ইজ কোল্ড।"],
["turn on|চালু করা|টার্ন অন","turn off|বন্ধ করা|টার্ন অফ","look for|খোঁজা|লুক ফর","pick up|তুলে নেওয়া|পিক আপ","put on|পরা|পুট অন","take off|খুলে ফেলা|টেইক অফ","give up|হাল ছাড়া|গিভ আপ","find out|জানতে পারা|ফাইন্ড আউট","come in|ভেতরে আসা|কাম ইন","sit down|বসা|সিট ডাউন"],
["turn off|টার্ন অফ|দ্রুত: 'টার্নঅফ'","pick up|পিক আপ|'পিকআপ'","find out|ফাইন্ড আউট|'ফাইন্ডাউট'"],
["I can't find my phone.|আমার ফোন খুঁজে পাচ্ছি না।","Look for it. Did you turn it off?|খোঁজো। বন্ধ করেছিলে?","No. Oh, here it is, under the bag!|না। ওই তো, ব্যাগের নিচে!","Good. Don't give up so quickly.|ভালো। এত সহজে হাল ছাড়ো না।"],
"৮টি phrasal verb দিয়ে নিজের জীবনের বাক্য বানাও।",
"Phrasal verb শব্দ জোড়ায় শেখো; আলাদা করে শিখলে অর্থ গুলিয়ে যায়।");

/* ---- ক্রম ঠিক করা: ফেজ ৪ ও ৬-এ অতিরিক্ত ৩ দিন বসানো ---- */
(()=>{const x=C60.splice(57,3);C60.splice(38,0,x[0]);C60.splice(56,0,x[1],x[2])})();
/* ===== ফেজ ৭: মধ্যম স্তরের গ্রামার (দিন ৬১–৭০) ===== */
D("Present Perfect: have/has + verb(3)","present perfect tense have has done","অভিজ্ঞতা ও এইমাত্র শেষ হওয়া কাজ Present Perfect-এ বলা।",
"have/has + verb-এর ৩য় রূপ (V3): I have eaten. She has gone. ever, never, already, yet, just-এর সাথে ব্যবহৃত হয়। অনিয়মিত V3: go-went-gone, eat-ate-eaten, see-saw-seen।",
["I have visited Cox's Bazar twice.|আমি দুবার কক্সবাজার গিয়েছি।|আই হ্যাভ ভিজিটেড কক্সেস বাজার টোয়াইস।","She has already finished her homework.|সে ইতিমধ্যে হোমওয়ার্ক শেষ করেছে।|শি হ্যাজ অলরেডি ফিনিশ্ড হার হোমওয়ার্ক।","Have you ever eaten sushi?|তুমি কি কখনো সুশি খেয়েছ?|হ্যাভ ইউ এভার ইটেন সুশি?","I have never seen snow.|আমি কখনো তুষার দেখিনি।|আই হ্যাভ নেভার সীন স্নো।","He has just left the office.|সে এইমাত্র অফিস ছেড়েছে।|হি হ্যাজ জাস্ট লেফট দি অফিস।"],
["ever|কখনো|এভার","never|কখনোই না|নেভার","already|ইতিমধ্যে|অলরেডি","yet|এখনো|ইয়েট","just|এইমাত্র|জাস্ট","since|থেকে|সিন্স","for|ধরে|ফর","recently|সম্প্রতি|রীসেন্টলি","so far|এ পর্যন্ত|সো ফার","experience|অভিজ্ঞতা|ইক্সপীরিয়েন্স"],
["been|বিন (US: বিন / UK: বীন)|দুটোই চলে","eaten|ইটেন|ই-টেন","seen|সীন|লম্বা 'ঈ'"],
["Have you ever been abroad?|তুমি কি কখনো বিদেশে গিয়েছ?","Yes, I have been to Malaysia twice.|হ্যাঁ, দুবার মালয়েশিয়া গিয়েছি।","Have you visited Japan?|জাপান গিয়েছ?","No, not yet. I hope to go soon.|না, এখনো না। শিগগির যাওয়ার আশা।"],
"জীবনের ৮টি অভিজ্ঞতা 'I have…' দিয়ে বলো (গিয়েছি, খেয়েছি, দেখেছি, শিখেছি)।",
"নির্দিষ্ট অতীত সময় (yesterday, in 2020) থাকলে Past Simple; সময় নির্দিষ্ট না থাকলে Present Perfect।");

D("Present Perfect বনাম Past Simple","present perfect vs past simple difference","দুই tense-এর পার্থক্য বুঝে সঠিকটি বেছে নেওয়া।",
"নির্দিষ্ট অতীত সময় → Past Simple (I went there in 2020)। অনির্দিষ্ট সময় / এখনও প্রাসঙ্গিক → Present Perfect (I have been there)। for = সময়কাল, since = শুরুর সময়।",
["I lived in Dhaka for five years.|আমি পাঁচ বছর ঢাকায় ছিলাম (এখন নেই)।|আই লিভড ইন ঢাকা ফর ফাইভ ইয়ার্স।","I have lived in Dhaka for five years.|আমি পাঁচ বছর ধরে ঢাকায় আছি (এখনও)।|আই হ্যাভ লিভড ইন ঢাকা ফর ফাইভ ইয়ার্স।","I lost my keys yesterday.|আমি গতকাল চাবি হারিয়েছি।|আই লস্ট মাই কীজ ইয়েস্টারডে।","I have lost my keys.|আমার চাবি হারিয়ে গেছে (এখনও পাইনি)।|আই হ্যাভ লস্ট মাই কীজ।","She has worked here since 2021.|সে ২০২১ থেকে এখানে কাজ করছে।|শি হ্যাজ ওয়ার্কড হিয়ার সিন্স টুয়েন্টি টোয়েন্টি-ওয়ান।"],
["ago|আগে|অ্যাগো","last year|গত বছর|লাস্ট ইয়ার","in 2020|২০২০ সালে|ইন টোয়েন্টি টোয়েন্টি","until now|এখন পর্যন্ত|আনটিল নাউ","lately|ইদানীং|লেইটলি","once|একবার|ওয়ান্স","several times|বেশ কয়েকবার|সেভারাল টাইমস","at the moment|এই মুহূর্তে|অ্যাট দ্য মোমেন্ট","experience|অভিজ্ঞতা|ইক্সপীরিয়েন্স","result|ফল|রিজাল্ট"],
["since / for|সিন্স / ফর|দুটো আলাদা অর্থ","lived|লিভড|d ধ্বনি","worked|ওয়ার্কড্|শেষে t ধ্বনি"],
["How long have you worked here?|কতদিন ধরে এখানে কাজ করছেন?","I have worked here for three years.|তিন বছর ধরে।","Where did you work before?|আগে কোথায় ছিলেন?","I worked at a bank in Chittagong.|চট্টগ্রামের এক ব্যাংকে।"],
"নিজের জীবনের ৫টি ঘটনা Past Simple-এ এবং ৫টি অভিজ্ঞতা Present Perfect-এ বলো।",
"'ago' থাকলে সবসময় Past Simple: I met him two years ago (✓), I have met him two years ago (✗)।");

D("Past Continuous ও Past Perfect","past continuous past perfect english","অতীতে চলমান কাজ ও আগে ঘটা কাজ বোঝাতে পারা।",
"Past Continuous: was/were + verb-ing (I was sleeping when you called)। Past Perfect: had + V3 (I had left before he came)। while = চলমান কাজ; when = ঘটনা।",
["I was studying when the light went out.|আমি পড়ছিলাম যখন বিদ্যুৎ গেল।|আই ওয়জ স্টাডিইং হোয়েন দ্য লাইট ওয়েন্ট আউট।","They were playing football at five.|পাঁচটায় তারা ফুটবল খেলছিল।|দে ওয়ার প্লেইং ফুটবল অ্যাট ফাইভ।","I had finished dinner before he arrived.|সে আসার আগেই আমি খাবার শেষ করেছিলাম।|আই হ্যাড ফিনিশ্ড ডিনার বিফোর হি অ্যারাইভড।","She was cooking while I was cleaning.|সে রান্না করছিল আর আমি পরিষ্কার করছিলাম।|শি ওয়জ কুকিং হোয়াইল আই ওয়জ ক্লিনিং।","By the time we reached, the train had left.|আমরা পৌঁছানোর আগেই ট্রেন ছেড়ে গিয়েছিল।|বাই দ্য টাইম উই রীচ্ড, দ্য ট্রেইন হ্যাড লেফট।"],
["while|যখন (চলাকালীন)|হোয়াইল","when|যখন|হোয়েন","by the time|ততক্ষণে|বাই দ্য টাইম","before|আগে|বিফোর","after|পরে|আফটার","suddenly|হঠাৎ|সাডেনলি","meanwhile|এদিকে|মীনহোয়াইল","already|ইতিমধ্যে|অলরেডি","arrive|পৌঁছানো|অ্যারাইভ","reach|পৌঁছানো|রীচ"],
["was|ওয়জ|দুর্বল রূপ 'ওয়জ'","were|ওয়ার|দুর্বল রূপ","had|হ্যাড|দ্রুত 'হ্যাড/আড'"],
["What were you doing at ten last night?|গত রাত দশটায় কী করছিলে?","I was watching a movie. What about you?|সিনেমা দেখছিলাম। তুমি?","I was studying. I had already eaten dinner.|পড়ছিলাম। আগেই খাবার খেয়েছিলাম।","That is good. You were busy.|ভালো। তুমি ব্যস্ত ছিলে।"],
"গত সপ্তাহের একটি ঘটনা বলো যেখানে একটি কাজ চলছিল আর হঠাৎ কিছু ঘটল (was doing… when…)।",
"দুটি অতীত ঘটনার আগেরটিতে had+V3, পরেরটিতে Past Simple।");

D("Modal Verbs: must, may, might, could, would","modal verbs must may might could would","সম্ভাবনা, বাধ্যবাধকতা ও ভদ্র অনুরোধে modal ঠিকভাবে ব্যবহার করা।",
"modal + verb (মূল রূপ): must (অবশ্যই), may/might (হয়তো), could (পারতাম/ভদ্র অনুরোধ), would (ভদ্র/শর্ত)। must not = নিষেধ; don't have to = বাধ্য নও।",
["You must wear a helmet.|তোমাকে অবশ্যই হেলমেট পরতে হবে।|ইউ মাস্ট ওয়ার আ হেলমেট।","It may rain this evening.|আজ সন্ধ্যায় বৃষ্টি হতে পারে।|ইট মে রেইন দিস ঈভনিং।","He might be late.|সে হয়তো দেরি করবে।|হি মাইট বি লেইট।","Could you open the window?|জানালাটি খুলবে কি?|কুড ইউ ওপেন দ্য উইন্ডো?","You don't have to come tomorrow.|তোমাকে কাল আসতেই হবে না।|ইউ ডোন্ট হ্যাভ টু কাম টুমরো।"],
["must|অবশ্যই|মাস্ট","may|হতে পারে/অনুমতি|মে","might|হয়তো|মাইট","could|পারতাম|কুড","would|করতাম/ভদ্র|উড","allowed|অনুমোদিত|অ্যালাউড","forbidden|নিষিদ্ধ|ফরবিডেন","necessary|প্রয়োজনীয়|নেসেসারি","possible|সম্ভব|পসিবল","probably|সম্ভবত|প্রবাবলি"],
["could|কুড|l নীরব","would|উড|l নীরব","might|মাইট|gh নীরব"],
["May I come in?|ভেতরে আসতে পারি?","Yes, you may. Please sit down.|হ্যাঁ, বসুন।","Could you help me with this form?|এই ফর্মে সাহায্য করবেন?","Of course. You must sign here.|অবশ্যই। এখানে সই করতে হবে।"],
"নিজের ঘর ও অফিসের ৫টি নিয়ম (must / must not) এবং ৫টি সম্ভাবনা (may / might) বলো।",
"modal-এর পরে verb মূল রূপে এবং কোনো s/ed/ing নেই: He can swim (✓)।");

D("Used to ও অভ্যাসের কথা","used to past habits english","অতীতের অভ্যাস ও বর্তমানের পরিবর্তন বলতে পারা।",
"used to + verb = আগে করতাম (এখন করি না)। be used to + ing = অভ্যস্ত। would = অতীতের অভ্যাস (শুধু কাজের ক্ষেত্রে)।",
["I used to play cricket every day.|আমি আগে প্রতিদিন ক্রিকেট খেলতাম।|আই ইউস্ট টু প্লে ক্রিকেট এভরি ডে।","She didn't use to wake up early.|সে আগে ভোরে উঠত না।|শি ডিডন্ট ইউস টু ওয়েক আপ আর্লি।","Did you use to live here?|তুমি কি আগে এখানে থাকতে?|ডিড ইউ ইউস টু লিভ হিয়ার?","I am used to waking up early.|আমি ভোরে ওঠায় অভ্যস্ত।|আই অ্যাম ইউস্ট টু ওয়েকিং আপ আর্লি।","Life was different. We would walk to school.|জীবন অন্যরকম ছিল। আমরা হেঁটে স্কুলে যেতাম।|লাইফ ওয়জ ডিফারেন্ট। উই উড ওয়াক টু স্কুল।"],
["habit|অভ্যাস|হ্যাবিট","childhood|শৈশব|চাইল্ডহুড","change|পরিবর্তন|চেইঞ্জ","used to|আগে করতাম|ইউস্ট টু","get used to|অভ্যস্ত হওয়া|গেট ইউস্ট টু","different|আলাদা|ডিফারেন্ট","past|অতীত|পাস্ট","these days|আজকাল|দীজ ডেইজ","no longer|আর না|নো লংগার","once|একসময়|ওয়ান্স"],
["used to|ইউস্ট টু|'ইউজড' নয় — 'ইউস্ট'","childhood|চাইল্ডহুড|ল্ড-হুড","different|ডিফারেন্ট|ডিফ-রেন্ট"],
["Did you use to play outside?|আগে বাইরে খেলতে?","Yes, we used to play all day.|হ্যাঁ, সারাদিন খেলতাম।","And now?|এখন?","Now I am used to staying at home with my phone.|এখন ফোন নিয়ে ঘরে থাকতে অভ্যস্ত।"],
"তোমার শৈশব ও এখনকার জীবনের ৬টি পার্থক্য used to দিয়ে বলো।",
"used to-এর প্রশ্ন ও না-বাচকে use to (d ছাড়া): Did you use to…?");

D("Passive Voice: কাজটি কে করল তা নয়, কী হল","passive voice english","Active ও Passive voice আলাদা করে বলতে পারা।",
"Passive = be + V3 (by + কর্তা): The book was written by him। ব্যবহার: কর্তা অজানা বা গুরুত্বহীন হলে। Present: is/are + V3; Past: was/were + V3; Future: will be + V3।",
["English is spoken all over the world.|সারা বিশ্বে ইংরেজি বলা হয়।|ইংলিশ ইজ স্পোকেন অল ওভার দ্য ওয়ার্ল্ড।","The window was broken yesterday.|জানালাটি গতকাল ভাঙা হয়েছে।|দ্য উইন্ডো ওয়জ ব্রোকেন ইয়েস্টারডে।","This house was built in 1990.|এই বাড়ি ১৯৯০ সালে তৈরি হয়েছে।|দিস হাউস ওয়জ বিল্ট ইন নাইনটিন নাইন্টি।","The work will be finished tomorrow.|কাজটি কাল শেষ হবে।|দ্য ওয়ার্ক উইল বি ফিনিশ্ড টুমরো।","My phone has been stolen.|আমার ফোন চুরি গেছে।|মাই ফোন হ্যাজ বিন স্টোলেন।"],
["built|তৈরি হয়েছে|বিল্ট","written|লেখা হয়েছে|রিটেন","broken|ভাঙা|ব্রোকেন","stolen|চুরি|স্টোলেন","made|তৈরি|মেইড","sent|পাঠানো|সেন্ট","invited|আমন্ত্রিত|ইনভাইটেড","cancelled|বাতিল|ক্যানসেল্ড","delivered|সরবরাহ|ডেলিভার্ড","repaired|মেরামত|রিপেয়ার্ড"],
["written|রিটেন|w নীরব","cancelled|ক্যানসেল্ড|c = ক","delivered|ডেলিভার্ড|v = দাঁত-ঠোঁট"],
["Where is your phone?|তোমার ফোন কোথায়?","It was stolen yesterday.|গতকাল চুরি হয়েছে।","Has it been reported to the police?|পুলিশে জানানো হয়েছে?","Yes, a report has been filed.|হ্যাঁ, অভিযোগ দাখিল হয়েছে।"],
"নিজের চারপাশের ৮টি জিনিস কে/কীভাবে তৈরি বা কী হয়েছে তা Passive-এ বলো।",
"Passive-এ verb-এর তৃতীয় রূপ (V3) ভুল হলে পুরো বাক্য ভুল হয়ে যায়; অনিয়মিত V3 মুখস্থ করো।");

D("Conditional ১: যদি ... তাহলে (Zero ও First)","conditionals zero first if clause","বাস্তব সম্ভাবনার শর্ত বলতে পারা।",
"Zero: If + Present, Present (সবসময় সত্য: If you heat ice, it melts)। First: If + Present, will + verb (সম্ভাব্য: If it rains, I will stay home)। unless = if not।",
["If you heat water, it boils.|পানি গরম করলে তা ফোটে।|ইফ ইউ হীট ওয়াটার, ইট বয়েলস।","If it rains, I will stay home.|বৃষ্টি হলে আমি বাড়িতে থাকব।|ইফ ইট রেইনস, আই উইল স্টে হোম।","If you study hard, you will pass.|কঠোর পড়লে তুমি পাস করবে।|ইফ ইউ স্টাডি হার্ড, ইউ উইল পাস।","Unless you hurry, you will be late.|তাড়াতাড়ি না করলে দেরি হবে।|আনলেস ইউ হারি, ইউ উইল বি লেইট।","I will call you if I get time.|সময় পেলে ফোন করব।|আই উইল কল ইউ ইফ আই গেট টাইম।"],
["if|যদি|ইফ","unless|না হলে|আনলেস","otherwise|নয়তো|আদারওয়াইজ","as long as|যতক্ষণ|অ্যাজ লং অ্যাজ","in case|যদি...হয়|ইন কেইস","provided|শর্তে|প্রোভাইডেড","condition|শর্ত|কন্ডিশন","chance|সুযোগ|চান্স","maybe|হয়তো|মেইবি","depend|নির্ভর করা|ডিপেন্ড"],
["unless|আনলেস|আন-লেস","otherwise|আদারওয়াইজ|আদার + ওয়াইজ","depend|ডিপেন্ড|পেন-এ জোর"],
["What will you do if it rains tomorrow?|কাল বৃষ্টি হলে কী করবে?","If it rains, I will stay home and study.|বৃষ্টি হলে বাড়িতে পড়ব।","And if it doesn't rain?|আর না হলে?","I will go to the park with my friends.|বন্ধুদের সাথে পার্কে যাব।"],
"৮টি 'যদি…তাহলে' বাক্য বলো — লক্ষ্য, আবহাওয়া ও পরিকল্পনা নিয়ে।",
"if-clause-এ will বসে না: If it rains (✓), If it will rain (✗)।");

D("Comparative আরও: as…as, too, enough, so…that","too enough so that as as english","পরিমাণ ও মাত্রা বোঝাতে too, enough, so…that ব্যবহার করা।",
"too + adj = অতিরিক্ত (নেতিবাচক): too hot। adj + enough = যথেষ্ট: tall enough। so + adj + that = এত…যে: so tired that I slept। as…as = সমান।",
["It is too hot to go outside.|বাইরে যাওয়ার জন্য অনেক গরম।|ইট ইজ টু হট টু গো আউটসাইড।","He is old enough to drive.|সে গাড়ি চালানোর মতো বয়সী।|হি ইজ ওল্ড ইনাফ টু ড্রাইভ।","I was so tired that I slept early.|আমি এত ক্লান্ত ছিলাম যে তাড়াতাড়ি ঘুমালাম।|আই ওয়জ সো টায়ার্ড দ্যাট আই স্লেপ্ট আর্লি।","This bag is as heavy as that one.|এই ব্যাগ ওটার মতোই ভারী।|দিস ব্যাগ ইজ অ্যাজ হেভি অ্যাজ দ্যাট ওয়ান।","The food is not spicy enough.|খাবার যথেষ্ট ঝাল নয়।|দ্য ফুড ইজ নট স্পাইসি ইনাফ।"],
["too|অতিরিক্ত|টু","enough|যথেষ্ট|ইনাফ","so|এত|সো","such|এমন|সাচ","quite|বেশ|কোয়াইট","rather|কিছুটা|র‍্যাদার","really|সত্যিই|রিয়্যালি","extremely|অত্যন্ত|এক্সট্রীমলি","slightly|সামান্য|স্লাইটলি","almost|প্রায়|অলমোস্ট"],
["enough|ইনাফ|gh = ফ","quite|কোয়াইট|qu = কোয়া","rather|র‍্যাদার|th কণ্ঠ কাঁপিয়ে"],
["Is the soup hot enough?|স্যুপ কি যথেষ্ট গরম?","No, it is not hot enough.|না, যথেষ্ট গরম নয়।","Shall I heat it again?|আবার গরম করব?","Yes, but not too hot, please.|হ্যাঁ, তবে বেশি গরম নয়।"],
"নিজের ঘর, শহর ও কাজ নিয়ে ৮টি বাক্য বলো (too / enough / so…that)।",
"too-এর অর্থ নেতিবাচক (অতিরিক্ত); 'very' ইতিবাচক। I am too happy (সাধারণত নেতিবাচক ইঙ্গিত দেয়)।");

D("মধ্যম স্তরের শব্দভান্ডার: কাজ, শিক্ষা, প্রযুক্তি","intermediate vocabulary work education technology","শিক্ষা, প্রযুক্তি ও কাজ-সংক্রান্ত দৈনন্দিন শব্দ আয়ত্ত করা।",
"শব্দ-পরিবার (word family): create → creation → creative → creatively। এক শব্দ থেকে noun/adjective/adverb বানানো শিখলে শব্দভান্ডার দ্রুত বাড়ে।",
["Technology has changed our lives.|প্রযুক্তি আমাদের জীবন বদলেছে।|টেকনোলজি হ্যাজ চেইঞ্জড আওয়ার লাইভস।","I work on a computer all day.|আমি সারাদিন কম্পিউটারে কাজ করি।|আই ওয়ার্ক অন আ কম্পিউটার অল ডে।","She is a creative designer.|সে একজন সৃজনশীল ডিজাইনার।|শি ইজ আ ক্রিয়েটিভ ডিজাইনার।","Education is the key to success.|শিক্ষা সাফল্যের চাবিকাঠি।|এডুকেশন ইজ দ্য কী টু সাকসেস।","We use apps to learn new skills.|আমরা নতুন দক্ষতা শিখতে অ্যাপ ব্যবহার করি।|উই ইউজ অ্যাপস টু লার্ন নিউ স্কিলস।"],
["technology|প্রযুক্তি|টেকনোলজি","education|শিক্ষা|এডুকেশন","career|ক্যারিয়ার|ক্যারিয়ার","skill|দক্ষতা|স্কিল","internet|ইন্টারনেট|ইন্টারনেট","software|সফটওয়্যার|সফটওয়্যার","online|অনলাইন|অনলাইন","develop|উন্নয়ন করা|ডেভেলপ","creative|সৃজনশীল|ক্রিয়েটিভ","achieve|অর্জন করা|অ্যাচীভ"],
["technology|টেকনোলজি|নল-এ জোর","career|ক্যারিয়ার|র-য়ার","achieve|অ্যাচীভ|ch = চ"],
["What do you do?|তুমি কী করো?","I work in software development.|আমি সফটওয়্যার ডেভেলপমেন্টে কাজ করি।","Is it a good career?|এটা কি ভালো ক্যারিয়ার?","Yes, but you must learn new skills all the time.|হ্যাঁ, তবে সবসময় নতুন দক্ষতা শিখতে হয়।"],
"তোমার পেশা বা পড়াশোনা নিয়ে ২ মিনিট মধ্যম স্তরের শব্দ দিয়ে বলো।",
"একই শব্দের noun, verb ও adjective রূপ একসাথে শেখো।");

D("ফেজ ৭ রিভিউ: মধ্যম স্তরের গ্রামার","intermediate english grammar review","এ পর্যন্ত শেখা মধ্যম স্তরের tense ও modal মিলিয়ে বলতে পারা।",
"Present Perfect, Past Continuous, Past Perfect, Modals, Used to, Passive ও Conditionals — সব একটি অনুচ্ছেদে ব্যবহার করে নিজের জীবনের গল্প বলো।",
["I have lived in Dhaka for ten years.|আমি দশ বছর ধরে ঢাকায় আছি।|আই হ্যাভ লিভড ইন ঢাকা ফর টেন ইয়ার্স।","I used to live in a village.|আমি আগে গ্রামে থাকতাম।|আই ইউস্ট টু লিভ ইন আ ভিলেজ।","When I moved here, I had never seen a tall building.|এখানে আসার আগে আমি কখনো উঁচু ভবন দেখিনি।|হোয়েন আই মুভড হিয়ার, আই হ্যাড নেভার সীন আ টল বিল্ডিং।","If I work hard, I will achieve my dream.|কঠোর পরিশ্রম করলে স্বপ্ন পূরণ হবে।|ইফ আই ওয়ার্ক হার্ড, আই উইল অ্যাচীভ মাই ড্রীম।","My dream can be reached only by effort.|আমার স্বপ্ন শুধু চেষ্টা দিয়েই পূরণ করা যায়।|মাই ড্রীম ক্যান বি রীচ্ড ওনলি বাই এফোর্ট।"],
["review|পুনরালোচনা|রিভিউ","tense|কাল|টেন্স","structure|গঠন|স্ট্রাকচার","accuracy|নির্ভুলতা|অ্যাক্যুরেসি","mistake|ভুল|মিসটেইক","improve|উন্নতি|ইম্প্রুভ","practice|অনুশীলন|প্র্যাকটিস","correct|শুদ্ধ|কারেক্ট","explain|ব্যাখ্যা|ইক্সপ্লেইন","example|উদাহরণ|ইগজ্যাম্পল"],
["accuracy|অ্যাক্যুরেসি|অ্যাক-ইউ-রা-সি","structure|স্ট্রাকচার|স্ট্রাক-চার","explain|ইক্সপ্লেইন|প্লেইন-এ জোর"],
["Tell me about your life.|তোমার জীবনের কথা বলো।","I used to live in a village, but I have lived in Dhaka for ten years.|আগে গ্রামে ছিলাম, ঢাকায় দশ বছর।","What do you plan to do?|কী পরিকল্পনা?","If I work hard, I will achieve my dream.|কঠোর পরিশ্রম করলে স্বপ্ন পূরণ হবে।"],
"নিজের জীবনের গল্প ৩ মিনিটে বলো — অতীত, বর্তমান ও ভবিষ্যৎ সব মিলিয়ে।",
"নিজের রেকর্ডিং শুনে কোন tense-এ বেশি ভুল হচ্ছে চিহ্নিত করো ও সেটি আবার অনুশীলন করো।");

/* ===== ফেজ ৮: উন্নত গ্রামার ও প্রকাশভঙ্গি (দিন ৭১–৮০) ===== */
D("Conditional ২ ও ৩: কাল্পনিক শর্ত","second third conditional if I were","অবাস্তব ও অতীতের কাল্পনিক শর্ত বলতে পারা।",
"Second: If + Past, would + verb (If I had money, I would buy a car)। Third: If + had + V3, would have + V3 (If I had studied, I would have passed)। If I were you…",
["If I had a car, I would drive to work.|আমার গাড়ি থাকলে আমি গাড়ি চালিয়ে কাজে যেতাম।|ইফ আই হ্যাড আ কার, আই উড ড্রাইভ টু ওয়ার্ক।","If I were you, I would accept the offer.|আমি তোমার জায়গায় হলে প্রস্তাবটি নিতাম।|ইফ আই ওয়ার ইউ, আই উড অ্যাকসেপ্ট দ্য অফার।","If I had studied, I would have passed.|পড়লে আমি পাস করতাম (কিন্তু পড়িনি)।|ইফ আই হ্যাড স্টাডিড, আই উড হ্যাভ পাসড।","I wish I had more time.|ইশ, যদি আমার আরও সময় থাকত!|আই উইশ আই হ্যাড মোর টাইম।","She would have come if you had called her.|তুমি ফোন করলে সে আসত।|শি উড হ্যাভ কাম ইফ ইউ হ্যাড কলড হার।"],
["wish|আকাঙ্ক্ষা করা|উইশ","regret|অনুশোচনা|রিগ্রেট","imagine|কল্পনা করা|ইমাজিন","suppose|ধরো|সাপোজ","chance|সুযোগ|চান্স","opportunity|সুযোগ|অপরচুনিটি","mistake|ভুল|মিসটেইক","advice|পরামর্শ|অ্যাডভাইস","decision|সিদ্ধান্ত|ডিসিশন","lucky|ভাগ্যবান|লাকি"],
["would have|উড হ্যাভ|দ্রুত: 'উডভ'","wish|উইশ|শেষে শ","imagine|ইমাজিন|জি = জ"],
["What would you do if you won a lottery?|লটারি জিতলে কী করতে?","I would buy a house for my parents.|বাবা-মায়ের জন্য বাড়ি কিনতাম।","And if you could travel anywhere?|আর যেখানে খুশি ভ্রমণ করতে পারলে?","I would go to Japan.|জাপানে যেতাম।"],
"৬টি কাল্পনিক ইচ্ছা (If I…, I would…) ও ৪টি অতীতের অনুশোচনা (If I had…, I would have…) বলো।",
"If-clause-এ I/he/she-এর সাথেও were ব্যবহার করা হয়: If I were you (✓)।");

D("Reported Speech: অন্যের কথা বলা","reported speech indirect speech english","অন্যের বলা কথা বর্ণনা করতে পারা।",
"Direct: He said, \"I am tired.\" → Indirect: He said that he was tired। কাল এক ধাপ পিছিয়ে যায়: am → was, will → would, today → that day, tomorrow → the next day। প্রশ্ন: He asked if/whether…",
["She said that she was busy.|সে বলল যে সে ব্যস্ত।|শি সেড দ্যাট শি ওয়জ বিজি।","He told me that he would call later.|সে আমাকে বলল সে পরে ফোন করবে।|হি টোল্ড মি দ্যাট হি উড কল লেইটার।","They said that they had finished.|তারা বলল যে তারা শেষ করেছে।|দে সেড দ্যাট দে হ্যাড ফিনিশ্ড।","She asked me where I lived.|সে আমাকে জিজ্ঞাসা করল আমি কোথায় থাকি।|শি আস্কড মি হোয়ার আই লিভড।","He asked if I could help him.|সে জিজ্ঞাসা করল আমি সাহায্য করতে পারি কিনা।|হি আস্কড ইফ আই কুড হেল্প হিম।"],
["say / said|বলা / বলেছিল|সে / সেড","tell / told|বলা / বলেছিল|টেল / টোল্ড","ask / asked|জিজ্ঞাসা|আস্ক / আস্কড","reply|জবাব|রিপ্লাই","explain|ব্যাখ্যা|ইক্সপ্লেইন","mention|উল্লেখ করা|মেনশন","suggest|পরামর্শ দেওয়া|সাজেস্ট","promise|প্রতিশ্রুতি|প্রমিস","complain|অভিযোগ করা|কমপ্লেইন","announce|ঘোষণা করা|অ্যানাউন্স"],
["said|সেড|'সেড' (সেইড নয়)","asked|আস্কড্|শেষে t ধ্বনি","announce|অ্যানাউন্স|নাউন্স-এ জোর"],
["What did the doctor say?|ডাক্তার কী বললেন?","He said that I should rest for a week.|তিনি বললেন এক সপ্তাহ বিশ্রাম নিতে।","Did he ask about your diet?|তিনি কি খাবার নিয়ে জিজ্ঞাসা করেছেন?","Yes, he asked what I usually ate.|হ্যাঁ, আমি সাধারণত কী খাই তা জিজ্ঞাসা করলেন।"],
"আজ দিনে কেউ তোমাকে কী বলেছে তা Reported Speech-এ ৬টি বাক্যে বলো।",
"reported question-এ প্রশ্নবোধক বসে না এবং subject আগে: He asked where I lived (✓)।");

D("Relative Clause: who, which, that, whose","relative clauses who which that whose","একটি বাক্যে বিস্তারিত তথ্য জুড়ে দীর্ঘ বাক্য তৈরি করা।",
"who = মানুষ; which = জিনিস; that = মানুষ/জিনিস; whose = যার; where = জায়গা। The man who lives next door is a doctor।",
["The man who lives next door is a doctor.|পাশের বাড়ির লোকটি ডাক্তার।|দ্য ম্যান হু লিভস নেক্সট ডোর ইজ আ ডক্টর।","This is the book which I bought yesterday.|এটাই সেই বই যেটা আমি গতকাল কিনেছি।|দিস ইজ দ্য বুক হুইচ আই বট ইয়েস্টারডে।","I know a girl whose father is a pilot.|আমি এক মেয়েকে চিনি যার বাবা পাইলট।|আই নো আ গার্ল হুজ ফাদার ইজ আ পাইলট।","That is the school where I studied.|ওটাই সেই স্কুল যেখানে আমি পড়েছি।|দ্যাট ইজ দ্য স্কুল হোয়ার আই স্টাডিড।","The phone that I lost was new.|আমি যে ফোন হারিয়েছি সেটি নতুন ছিল।|দ্য ফোন দ্যাট আই লস্ট ওয়জ নিউ।"],
["who|যে (মানুষ)|হু","which|যেটি|হুইচ","that|যেটি / যে|দ্যাট","whose|যার|হুজ","where|যেখানে|হোয়ার","neighbor|প্রতিবেশী|নেইবার","pilot|বৈমানিক|পাইলট","describe|বর্ণনা করা|ডিস্ক্রাইব","person|ব্যক্তি|পার্সন","place|জায়গা|প্লেইস"],
["whose|হুজ|'হু-জ' = who's-এর মতো","which|হুইচ|wh = 'হ্‌ও'","describe|ডিস্ক্রাইব|ক্রাইব-এ জোর"],
["Who is that man?|ওই লোকটি কে?","He is the man who lives next door.|সে পাশের বাড়ির লোক।","What does he do?|সে কী করে?","He is a doctor who works at the city hospital.|সে ডাক্তার, শহরের হাসপাতালে কাজ করে।"],
"একজন মানুষ, একটি জায়গা ও একটি জিনিস who/which/where দিয়ে বর্ণনা করো (৬টি বাক্য)।",
"মানুষের জন্য who, জিনিসের জন্য which; that দুটোর জন্যই চলে।");

D("Gerund ও Infinitive: verb-ing বনাম to + verb","gerund infinitive english enjoy want","কোন verb-এর পরে -ing আর কোনটির পরে to+verb তা জানা।",
"enjoy/finish/avoid/mind + -ing (enjoy reading)। want/hope/decide/plan/learn + to + verb (want to learn)। like/love/hate উভয়ই চলে। stop to do (থেমে করা) ≠ stop doing (বন্ধ করা)।",
["I enjoy playing cricket.|আমি ক্রিকেট খেলতে উপভোগ করি।|আই ইনজয় প্লেইং ক্রিকেট।","She decided to learn English.|সে ইংরেজি শেখার সিদ্ধান্ত নিল।|শি ডিসাইডেড টু লার্ন ইংলিশ।","I finished doing my homework.|আমি হোমওয়ার্ক করা শেষ করেছি।|আই ফিনিশ্ড ডুইং মাই হোমওয়ার্ক।","He avoids eating fast food.|সে ফাস্ট ফুড খাওয়া এড়িয়ে চলে।|হি অ্যাভয়েডস ইটিং ফাস্ট ফুড।","I stopped to buy some water.|আমি পানি কিনতে থামলাম।|আই স্টপ্ড টু বাই সাম ওয়াটার।"],
["enjoy|উপভোগ|ইনজয়","avoid|এড়ানো|অ্যাভয়েড","finish|শেষ করা|ফিনিশ","suggest|প্রস্তাব|সাজেস্ট","consider|বিবেচনা|কনসিডার","decide|সিদ্ধান্ত|ডিসাইড","hope|আশা|হোপ","plan|পরিকল্পনা|প্ল্যান","manage|সামলানো|ম্যানেজ","refuse|প্রত্যাখ্যান|রিফিউজ"],
["avoid|অ্যাভয়েড|ভয়েড-এ জোর","consider|কনসিডার|সিড-এ জোর","manage|ম্যানেজ|ম্যান-ইজ"],
["What do you enjoy doing?|তুমি কী করতে উপভোগ করো?","I enjoy reading and cooking.|আমি পড়া ও রান্না উপভোগ করি।","What do you want to do next year?|আগামী বছর কী করতে চাও?","I want to learn a new language.|নতুন ভাষা শিখতে চাই।"],
"৫টি 'enjoy/finish/avoid + -ing' বাক্য ও ৫টি 'want/plan/decide + to' বাক্য বলো।",
"মনে রাখো: enjoy to read (✗), enjoy reading (✓)।");

D("Question Tag ও Short Answers","question tags short answers english","বাক্যের শেষে tag প্রশ্ন দিয়ে সম্মতি বা নিশ্চিতকরণ চাওয়া।",
"ইতিবাচক বাক্যের পর না-বাচক tag, না-বাচকের পর ইতিবাচক: You are a student, aren't you? / She doesn't like tea, does she? সুর নামলে নিশ্চিত, উঠলে জিজ্ঞাসা।",
["It is a nice day, isn't it?|সুন্দর দিন, তাই না?|ইট ইজ আ নাইস ডে, ইজন্ট ইট?","You speak English, don't you?|তুমি ইংরেজি বলো, তাই না?|ইউ স্পীক ইংলিশ, ডোন্ট ইউ?","She can't swim, can she?|সে সাঁতার জানে না, তাই না?|শি ক্যান্ট সুইম, ক্যান শি?","They have left, haven't they?|তারা চলে গেছে, তাই না?|দে হ্যাভ লেফট, হ্যাভন্ট দে?","Let's go, shall we?|চলো যাই, কেমন?|লেটস গো, শ্যাল উই?"],
["tag|ট্যাগ|ট্যাগ","confirm|নিশ্চিত করা|কনফার্ম","agree|একমত|অ্যাগ্রী","check|যাচাই|চেক","sure|নিশ্চিত|শুর","right|ঠিক|রাইট","correct|শুদ্ধ|কারেক্ট","exactly|ঠিক তাই|ইগজ্যাক্টলি","indeed|সত্যিই|ইনডীড","really|সত্যিই|রিয়্যালি"],
["isn't it|ইজন্ট ইট|দ্রুত 'ইজনিট'","don't you|ডোন্ট ইউ|'ডোন্ট চু'","shall we|শ্যাল উই|শ্যাল-উই"],
["It is a nice day, isn't it?|সুন্দর দিন, তাই না?","Yes, it is. It isn't too hot.|হ্যাঁ, বেশি গরম নয়।","You live nearby, don't you?|তুমি কাছেই থাকো, তাই না?","Yes, I do. Just two streets away.|হ্যাঁ, মাত্র দুই রাস্তা দূরে।"],
"পরিচিত ১০টি তথ্য নিশ্চিত করতে tag প্রশ্ন করো (কণ্ঠ নামিয়ে ও উঠিয়ে দুভাবে)।",
"I am-এর tag হয় aren't I?; Let's-এর tag হয় shall we?");
D("Linking Words: সংযোজক শব্দ","linking words however although therefore english","however, although, therefore ইত্যাদি দিয়ে বাক্য জুড়ে সাবলীল করা।",
"বিপরীত: but, however, although। কারণ: because, since। ফল: so, therefore। যোগ: and, also, moreover। ক্রম: first, then, finally। although-এর পরে পূর্ণ বাক্য: Although it was late, I went।",
["Although it was raining, we went out.|বৃষ্টি হলেও আমরা বাইরে গেলাম।|অলদো ইট ওয়জ রেইনিং, উই ওয়েন্ট আউট।","He is rich. However, he is not happy.|সে ধনী। তবুও সে সুখী নয়।|হি ইজ রিচ। হাউএভার, হি ইজ নট হ্যাপি।","I was tired; therefore, I went to bed.|আমি ক্লান্ত ছিলাম, তাই ঘুমাতে গেলাম।|আই ওয়জ টায়ার্ড; দেয়ারফোর, আই ওয়েন্ট টু বেড।","She is smart. Moreover, she is hard-working.|সে বুদ্ধিমান। তাছাড়া সে পরিশ্রমীও।|শি ইজ স্মার্ট। মোরওভার, শি ইজ হার্ড-ওয়ার্কিং।","In addition, we need more time.|এছাড়া আমাদের আরও সময় দরকার।|ইন অ্যাডিশন, উই নীড মোর টাইম।"],
["however|তবে|হাউএভার","although|যদিও|অলদো","therefore|তাই|দেয়ারফোর","moreover|তাছাড়া|মোরওভার","in addition|এছাড়া|ইন অ্যাডিশন","as a result|ফলস্বরূপ|অ্যাজ আ রিজাল্ট","for example|যেমন|ফর ইগজ্যাম্পল","in contrast|বিপরীতে|ইন কনট্রাস্ট","on the other hand|অন্যদিকে|অন দি আদার হ্যান্ড","finally|অবশেষে|ফাইনালি"],
["although|অলদো|gh নীরব","therefore|দেয়ারফোর|দেয়ার + ফোর","moreover|মোরওভার|মোর + ওভার"],
["Do you like living in the city?|শহরে থাকতে কেমন লাগে?","I like it. However, it is too noisy.|ভালো লাগে, তবে খুব গোলমাল।","Why do you stay then?|তাহলে থাকো কেন?","Because my job is here. Moreover, my family lives here.|কারণ কাজ এখানে, তাছাড়া পরিবারও।"],
"একটি বিষয়ে (শহরে থাকা, অনলাইন পড়া) ইতিবাচক ও নেতিবাচক দিক ৪টি linking word দিয়ে বলো।",
"কথায় but, so, because বেশি; however, therefore লেখায় ও ফরমালে বেশি।");

D("Phrasal Verbs ২ ও কথোপকথনের Expression","advanced phrasal verbs english expressions","আরও ১০টি জরুরি phrasal verb ও কথ্য expression শেখা।",
"phrasal verb-এর কিছু আলাদা করা যায় (turn it off), কিছু যায় না (look after him)। কথ্য expression: Never mind, No worries, I see, Sounds good।",
["Can you look after my bag?|আমার ব্যাগটি দেখে রাখবে?|ক্যান ইউ লুক আফটার মাই ব্যাগ?","We ran out of milk.|আমাদের দুধ ফুরিয়ে গেছে।|উই র‍্যান আউট অভ মিল্ক।","Let's catch up this weekend.|এই সপ্তাহান্তে দেখা করে গল্প করি।|লেটস ক্যাচ আপ দিস উইকএন্ড।","I can't put up with this noise.|আমি এই গোলমাল সহ্য করতে পারছি না।|আই ক্যান্ট পুট আপ উইথ দিস নয়েজ।","Never mind. It's not important.|কিছু না। এটা গুরুত্বপূর্ণ নয়।|নেভার মাইন্ড। ইটস নট ইমপোর্ট্যান্ট।"],
["look after|দেখাশোনা করা|লুক আফটার","run out of|ফুরিয়ে যাওয়া|র‍্যান আউট অভ","catch up|পিছিয়ে থাকা মেটানো|ক্যাচ আপ","put up with|সহ্য করা|পুট আপ উইথ","get along|মিলেমিশে থাকা|গেট অ্যালং","figure out|বুঝে ফেলা|ফিগার আউট","set up|প্রতিষ্ঠা করা|সেট আপ","carry on|চালিয়ে যাওয়া|ক্যারি অন","call off|বাতিল করা|কল অফ","show up|হাজির হওয়া|শো আপ"],
["figure out|ফিগার আউট|দ্রুত 'ফিগারাউট'","carry on|ক্যারি অন|ক্যারিঅন","get along|গেট অ্যালং|গেটালং"],
["Did the meeting go ahead?|মিটিং কি হয়েছে?","No, they called it off.|না, বাতিল হয়েছে।","Why?|কেন?","The manager didn't show up.|ম্যানেজার আসেননি।"],
"৮টি phrasal verb দিয়ে গত সপ্তাহের ঘটনা বলো।",
"phrasal verb আলাদা করে নয়, বাক্যের ভেতরে শেখো।");

D("Idioms ও Common Expressions","english idioms common expressions","১০টি জনপ্রিয় idiom দিয়ে কথাকে স্বাভাবিক ও জীবন্ত করা।",
"Idiom-এর আক্ষরিক অর্থ নয়, ভাবার্থ বোঝো: a piece of cake = খুব সহজ; hit the books = কঠোর পড়া; break the ice = আড়ষ্টতা ভাঙা।",
["The exam was a piece of cake.|পরীক্ষা খুব সহজ ছিল।|দ্য ইগজ্যাম ওয়জ আ পীস অভ কেইক।","I have to hit the books tonight.|আজ রাতে আমাকে কঠোর পড়তে হবে।|আই হ্যাভ টু হিট দ্য বুকস টুনাইট।","He told a joke to break the ice.|সে আড়ষ্টতা ভাঙতে একটি জোক বলল।|হি টোল্ড আ জোক টু ব্রেক দ্য আইস।","It is raining cats and dogs.|মুষলধারে বৃষ্টি হচ্ছে।|ইট ইজ রেইনিং ক্যাটস অ্যান্ড ডগস।","Let's call it a day.|আজকের মতো শেষ করি।|লেটস কল ইট আ ডে।"],
["piece of cake|সহজ কাজ|পীস অভ কেইক","hit the books|কঠোর পড়া|হিট দ্য বুকস","break the ice|আড়ষ্টতা ভাঙা|ব্রেক দ্য আইস","call it a day|শেষ করা|কল ইট আ ডে","under the weather|অসুস্থ|আন্ডার দ্য ওয়েদার","once in a blue moon|কালেভদ্রে|ওয়ান্স ইন আ ব্লু মুন","spill the beans|গোপন ফাঁস|স্পিল দ্য বীনস","on cloud nine|আনন্দে আত্মহারা|অন ক্লাউড নাইন","cost an arm and a leg|খুব দামি|কস্ট অ্যান আর্ম অ্যান্ড আ লেগ","the ball is in your court|এখন তোমার পালা|দ্য বল ইজ ইন ইয়োর কোর্ট"],
["spill the beans|স্পিল দ্য বীনস|স্পিল + দ্য + বীনস","once in a blue moon|ওয়ান্স ইন আ ব্লু মুন|টানা বলো","under the weather|আন্ডার দ্য ওয়েদার|ওয়েদার-এ th কণ্ঠ কাঁপিয়ে"],
["How was your exam?|পরীক্ষা কেমন হল?","It was a piece of cake!|খুব সহজ!","I feel under the weather today.|আমি আজ অসুস্থ বোধ করছি।","Take rest. Let's call it a day.|বিশ্রাম নাও। আজ এখানেই শেষ।"],
"৫টি idiom নিজের জীবনের পরিস্থিতিতে ব্যবহার করে বাক্য বানাও।",
"idiom শব্দে শব্দে অনুবাদ করো না; ভাবার্থ মুখস্থ করো ও পরিস্থিতিতে বলো।");

D("উন্নত Preposition ও Article","advanced prepositions articles english","কঠিন preposition ও article-এর সঠিক ব্যবহার আয়ত্ত করা।",
"depend on, interested in, good at, afraid of, responsible for, different from। article: first mention = a/an, পুনরায় = the; the + একমাত্র জিনিস (the sun); the ছাড়া সাধারণ বহুবচন (I like cats)।",
["I depend on my parents.|আমি বাবা-মায়ের ওপর নির্ভরশীল।|আই ডিপেন্ড অন মাই প্যারেন্টস।","She is afraid of dogs.|সে কুকুরকে ভয় পায়।|শি ইজ অ্যাফ্রেইড অভ ডগস।","He is responsible for the project.|সে প্রকল্পের দায়িত্বে।|হি ইজ রেসপন্সিবল ফর দ্য প্রজেক্ট।","This phone is different from that one.|এই ফোন ওটার থেকে আলাদা।|দিস ফোন ইজ ডিফারেন্ট ফ্রম দ্যাট ওয়ান।","I saw a man. The man was tall.|আমি একজনকে দেখলাম। লোকটি লম্বা ছিল।|আই সো আ ম্যান। দ্য ম্যান ওয়জ টল।"],
["depend on|নির্ভর করা|ডিপেন্ড অন","afraid of|ভয় পাওয়া|অ্যাফ্রেইড অভ","good at|দক্ষ|গুড অ্যাট","interested in|আগ্রহী|ইন্টারেস্টিড ইন","responsible for|দায়ী|রেসপন্সিবল ফর","different from|আলাদা|ডিফারেন্ট ফ্রম","proud of|গর্বিত|প্রাউড অভ","tired of|বিরক্ত|টায়ার্ড অভ","similar to|অনুরূপ|সিমিলার টু","married to|বিবাহিত|ম্যারিড টু"],
["responsible|রেসপন্সিবল|স্পন-এ জোর","similar|সিমিলার|সিম-ইলার","married|ম্যারিড|ম্যা-রিড"],
["Are you interested in music?|গানে আগ্রহী?","Yes, and I am good at singing.|হ্যাঁ, গান গাইতেও ভালো।","Are you afraid of performing?|পারফর্ম করতে ভয় পাও?","No, I am proud of my voice.|না, আমি নিজের গলায় গর্বিত।"],
"নিজের সম্পর্কে ১০টি বাক্য বলো যেখানে এই preposition জোড়া ব্যবহার করো।",
"preposition শব্দের সাথে জোড়ায় শেখো: interested + in, afraid + of।");

D("ফেজ ৮ রিভিউ: উন্নত গ্রামার ও সাবলীল প্রকাশ","advanced english grammar review fluency","উন্নত গ্রামার একসাথে ব্যবহার করে ৩ মিনিট বলতে পারা।",
"কাল্পনিক শর্ত, Reported Speech, Relative clause, Gerund/Infinitive, Question tag, linking word ও idiom — সব মিলিয়ে একটি বিষয়ে বলো।",
["If I could change one thing, I would improve education.|একটি জিনিস বদলাতে পারলে আমি শিক্ষা উন্নত করতাম।|ইফ আই কুড চেইঞ্জ ওয়ান থিং, আই উড ইম্প্রুভ এডুকেশন।","My teacher, who inspired me, said that I should never give up.|যে শিক্ষক আমাকে অনুপ্রাণিত করেছেন তিনি বলেছিলেন হাল ছেড়ো না।|মাই টীচার, হু ইনস্পায়ার্ড মি, সেড দ্যাট আই শুড নেভার গিভ আপ।","Although it was difficult, I enjoyed learning.|কঠিন হলেও শিখতে ভালো লেগেছিল।|অলদো ইট ওয়জ ডিফিকাল্ট, আই ইনজয়ড লার্নিং।","It is a great chance, isn't it?|এটা দারুণ সুযোগ, তাই না?|ইট ইজ আ গ্রেট চান্স, ইজন্ট ইট?","I will keep going no matter what.|যাই হোক আমি চালিয়ে যাব।|আই উইল কীপ গোইং নো ম্যাটার হোয়াট।"],
["inspire|অনুপ্রাণিত করা|ইনস্পায়ার","motivate|অনুপ্রেরণা দেওয়া|মোটিভেইট","challenge|চ্যালেঞ্জ|চ্যালেঞ্জ","effort|চেষ্টা|এফোর্ট","patience|ধৈর্য|পেইশেন্স","determination|দৃঢ় সংকল্প|ডিটারমিনেইশন","progress|অগ্রগতি|প্রোগ্রেস","achievement|অর্জন|অ্যাচীভমেন্ট","fluent|সাবলীল|ফ্লুয়েন্ট","confident|আত্মবিশ্বাসী|কনফিডেন্ট"],
["determination|ডিটারমিনেইশন|ডি-টার-মি-নে-শন","achievement|অ্যাচীভমেন্ট|অ্যাচীভ-মেন্ট","patience|পেইশেন্স|পেই-শেন্স"],
["What inspired you to learn English?|ইংরেজি শিখতে কী অনুপ্রাণিত করল?","I wanted a better career, so I started.|ভালো ক্যারিয়ার চাইছিলাম, তাই শুরু করি।","Is it difficult?|কঠিন?","It was at first, but now I am improving.|প্রথমে ছিল, এখন উন্নতি হচ্ছে।"],
"একটি বিষয়ে (আমার স্বপ্ন / আমার শিক্ষক / আমার শহর) উন্নত গ্রামার দিয়ে ৩ মিনিট বলে রেকর্ড করো।",
"উন্নত গ্রামার অল্প-অল্প ব্যবহার করো; জোর করে সব ঢুকিও না।");

/* ===== ফেজ ৯: বাস্তব জীবনের সাবলীলতা (দিন ৮১–৯০) ===== */
D("প্রেজেন্টেশন: কাঠামো ও শুরু-শেষ","english presentation skills structure","৩ মিনিটের একটি প্রেজেন্টেশন সাজিয়ে দিতে পারা।",
"কাঠামো: Opening (greeting + topic) → Agenda (first, second, third) → Body → Conclusion → Questions। শুরু: Good morning everyone, today I'll talk about… / শেষ: To sum up… Thank you.",
["Good morning everyone. Today I will talk about time management.|সুপ্রভাত সবাই। আজ আমি সময় ব্যবস্থাপনা নিয়ে বলব।|গুড মর্নিং এভরিওয়ান। টুডে আই উইল টক অ্যাবাউট টাইম ম্যানেজমেন্ট।","I will cover three main points.|আমি তিনটি মূল বিষয় আলোচনা করব।|আই উইল কভার থ্রি মেইন পয়েন্টস।","Let me show you this chart.|এই চার্টটি দেখাই।|লেট মি শো ইউ দিস চার্ট।","To sum up, planning saves time.|সংক্ষেপে, পরিকল্পনা সময় বাঁচায়।|টু সাম আপ, প্ল্যানিং সেইভস টাইম।","Thank you. Are there any questions?|ধন্যবাদ। কোনো প্রশ্ন?|থ্যাংক ইউ। আর দেয়ার এনি কোয়েশ্চানস?"],
["presentation|উপস্থাপনা|প্রেজেন্টেইশন","audience|শ্রোতা|অডিয়েন্স","chart|চার্ট|চার্ট","slide|স্লাইড|স্লাইড","agenda|আলোচ্যসূচি|এজেন্ডা","topic|বিষয়|টপিক","point|পয়েন্ট|পয়েন্ট","summary|সারসংক্ষেপ|সামারি","statistics|পরিসংখ্যান|স্ট্যাটিস্টিকস","feedback|প্রতিক্রিয়া|ফীডব্যাক"],
["audience|অডিয়েন্স|অ-ডি-য়েন্স","statistics|স্ট্যাটিস্টিকস|টিস-এ জোর","agenda|এজেন্ডা|জেন-এ জোর"],
["Are you ready for your presentation?|প্রেজেন্টেশনের জন্য প্রস্তুত?","Almost. I have three points.|প্রায়। তিনটি পয়েন্ট আছে।","What is your topic?|বিষয় কী?","Time management. Let me practice for you.|সময় ব্যবস্থাপনা। আপনার সামনে অনুশীলন করি।"],
"যেকোনো বিষয়ে ৩ মিনিটের প্রেজেন্টেশন (opening, 3 points, conclusion) বলে রেকর্ড করো।",
"ধীরে বলো, প্রতিটি পয়েন্টের পরে ১ সেকেন্ড থামো।");

D("মিটিং ও দর-কষাকষি (Negotiation)","english business meeting negotiation phrases","মিটিংয়ে মত দেওয়া, সম্মতি ও আপস করার ভাষা শেখা।",
"মত: I'd like to suggest… / Can we agree on…? / সম্মতি: That works for me. / আপত্তি: I'm afraid that's not possible. / আপস: How about…? / Let's meet halfway।",
["I would like to suggest a new schedule.|আমি একটি নতুন সূচি প্রস্তাব করতে চাই।|আই উড লাইক টু সাজেস্ট আ নিউ শিডিউল।","That works for me.|এটি আমার জন্য ঠিক আছে।|দ্যাট ওয়ার্কস ফর মি।","I'm afraid that is not possible.|দুঃখিত, তা সম্ভব নয়।|আই'ম অ্যাফ্রেইড দ্যাট ইজ নট পসিবল।","How about we meet halfway?|মাঝামাঝি করলে কেমন হয়?|হাউ অ্যাবাউট উই মীট হাফওয়ে?","Let's confirm the details by email.|চলো ইমেইলে বিস্তারিত নিশ্চিত করি।|লেটস কনফার্ম দ্য ডিটেইলস বাই ঈমেইল।"],
["negotiate|দর-কষাকষি|নেগোশিয়েট","agree|একমত|অ্যাগ্রী","deal|চুক্তি|ডীল","offer|প্রস্তাব|অফার","budget|বাজেট|বাজেট","deadline|সময়সীমা|ডেডলাইন","contract|চুক্তি|কনট্র্যাক্ট","compromise|আপস|কমপ্রোমাইজ","discount|ছাড়|ডিসকাউন্ট","terms|শর্ত|টার্মস"],
["compromise|কমপ্রোমাইজ|কম-প্রো-মাইজ","contract|কনট্র্যাক্ট (noun)|শুরুতে জোর","negotiate|নেগোশিয়েট|গো-শি-এইট"],
["Our budget is lower than that.|আমাদের বাজেট এর চেয়ে কম।","How about a ten percent discount?|দশ শতাংশ ছাড় কেমন?","That works for us if you can deliver by Friday.|শুক্রবারের মধ্যে দিলে আমাদের চলবে।","Deal. I will send the contract today.|চুক্তি। আজই কন্ট্র্যাক্ট পাঠাচ্ছি।"],
"একটি কাল্পনিক ক্রয়-বিক্রয় বা সময়সূচি নিয়ে মিটিংয়ের দুই ভূমিকা অভিনয় করো।",
"নেগোশিয়েশনে 'No' এড়িয়ে 'I'm afraid' বা 'How about…' বলো; ভদ্রতা দৃঢ়তাকে কমায় না।");

D("ইমেইল ও চিঠি লেখা","english email writing formal informal","ফরমাল ও ইনফরমাল ইমেইল লেখা।",
"কাঠামো: Subject → Greeting (Dear Mr. Karim,) → উদ্দেশ্য → বিস্তারিত → ধন্যবাদ → Closing (Best regards, Rina)। ফরমাল: I am writing to… / Please find attached… / I look forward to your reply।",
["Dear Mr. Karim, I am writing to ask about the job.|প্রিয় করিম সাহেব, আমি চাকরির বিষয়ে জানতে লিখছি।|ডিয়ার মিস্টার করিম, আই অ্যাম রাইটিং টু আস্ক অ্যাবাউট দ্য জব।","Please find my CV attached.|আমার সিভি সংযুক্ত আছে।|প্লিজ ফাইন্ড মাই সিভি অ্যাটাচড।","I look forward to hearing from you.|আপনার উত্তরের অপেক্ষায় রইলাম।|আই লুক ফরওয়ার্ড টু হিয়ারিং ফ্রম ইউ।","Thank you for your quick reply.|দ্রুত উত্তরের জন্য ধন্যবাদ।|থ্যাংক ইউ ফর ইয়োর কুইক রিপ্লাই।","Best regards, Rina Akter|শুভেচ্ছান্তে, রিনা আক্তার।|বেস্ট রিগার্ডস, রিনা আক্তার।"],
["subject|বিষয়|সাবজেক্ট","attach|সংযুক্ত করা|অ্যাটাচ","reply|উত্তর|রিপ্লাই","forward|ফরওয়ার্ড করা|ফরওয়ার্ড","regards|শুভেচ্ছা|রিগার্ডস","sincerely|আন্তরিকভাবে|সিনসীয়ারলি","request|অনুরোধ|রিকোয়েস্ট","inform|জানানো|ইনফর্ম","confirm|নিশ্চিত|কনফার্ম","enclosed|সংযুক্ত|ইনক্লোজড"],
["sincerely|সিনসীয়ারলি|সিন-সীয়ার-লি","regards|রিগার্ডস|গার্ডস","enclosed|ইনক্লোজড|ক্লোজ-এ জোর"],
["Did you send the email?|ইমেইল পাঠিয়েছ?","Yes, I attached my CV.|হ্যাঁ, সিভি সংযুক্ত করেছি।","Did you write a subject line?|বিষয় লিখেছ?","Yes, 'Application for Sales Executive'.|হ্যাঁ, 'সেলস এক্সিকিউটিভ পদের আবেদন'।"],
"একটি কাল্পনিক চাকরির আবেদনের ইমেইল ৮টি বাক্যে লিখে খাতায় রাখো ও জোরে পড়ো।",
"ফরমাল ইমেইলে সংক্ষেপ (I'm, don't) এড়াও।");

D("গ্রাহকসেবা ও অভিযোগ নিয়ে কথা","customer service complaint english phrases","অভিযোগ জানানো ও গ্রাহককে সাহায্য করার ভদ্র ভাষা।",
"অভিযোগ: I'd like to make a complaint about… / সমাধান: I'm sorry for the inconvenience. / We will fix it as soon as possible. / Could I have a refund?",
["I would like to make a complaint.|আমি একটি অভিযোগ জানাতে চাই।|আই উড লাইক টু মেইক আ কমপ্লেইন্ট।","The product is damaged.|পণ্যটি ক্ষতিগ্রস্ত।|দ্য প্রোডাক্ট ইজ ড্যামেজড।","I am sorry for the inconvenience.|অসুবিধার জন্য দুঃখিত।|আই অ্যাম সরি ফর দি ইনকনভীনিয়েন্স।","Could I have a refund, please?|আমি কি টাকা ফেরত পেতে পারি?|কুড আই হ্যাভ আ রিফান্ড, প্লিজ?","We will replace it within two days.|আমরা দুই দিনের মধ্যে বদলে দেব।|উই উইল রিপ্লেইস ইট উইদিন টু ডেইজ।"],
["complaint|অভিযোগ|কমপ্লেইন্ট","refund|টাকা ফেরত|রিফান্ড","replace|বদলে দেওয়া|রিপ্লেইস","damaged|ক্ষতিগ্রস্ত|ড্যামেজড","faulty|ত্রুটিপূর্ণ|ফল্টি","warranty|ওয়ারেন্টি|ওয়ারেন্টি","order|অর্ডার|অর্ডার","delivery|ডেলিভারি|ডেলিভারি","inconvenience|অসুবিধা|ইনকনভীনিয়েন্স","apologize|ক্ষমা চাওয়া|অ্যাপোলজাইজ"],
["inconvenience|ইনকনভীনিয়েন্স|ভী-তে জোর","warranty|ওয়ারেন্টি|ওয়ার-অন-টি","apologize|অ্যাপোলজাইজ|পল-এ জোর"],
["Hello, how can I help you?|হ্যালো, কীভাবে সাহায্য করতে পারি?","I received a damaged phone.|আমি একটি ক্ষতিগ্রস্ত ফোন পেয়েছি।","I am very sorry. We will replace it.|দুঃখিত। আমরা বদলে দেব।","Thank you. How long will it take?|ধন্যবাদ। কতদিন লাগবে?"],
"একটি অভিযোগ ও তার সমাধানের ফোনালাপ দুই ভূমিকায় অভিনয় করো।",
"অভিযোগে রাগ নয়, স্পষ্ট তথ্য ও দৃঢ় ভদ্রতা কাজ করে।");

D("আলোচনা ও বিতর্ক: পক্ষে-বিপক্ষে বলা","english discussion debate agree disagree opinion","যুক্তি দিয়ে একমত বা দ্বিমত প্রকাশ করতে পারা।",
"মত: In my view… / একমত: I couldn't agree more. / আংশিক: I see your point, but… / দ্বিমত: I don't think that's true because… / উদাহরণ: For instance…",
["In my view, online learning is effective.|আমার মতে অনলাইনে শেখা কার্যকর।|ইন মাই ভিউ, অনলাইন লার্নিং ইজ ইফেক্টিভ।","I couldn't agree more.|আমি পুরোপুরি একমত।|আই কুডন্ট অ্যাগ্রী মোর।","I see your point, but I disagree.|তোমার কথা বুঝি, কিন্তু আমি একমত নই।|আই সী ইয়োর পয়েন্ট, বাট আই ডিসঅ্যাগ্রী।","For instance, many students lose focus.|যেমন, অনেক ছাত্র মনোযোগ হারায়।|ফর ইনস্ট্যান্স, মেনি স্টুডেন্টস লুজ ফোকাস।","On balance, both methods have value.|সামগ্রিকভাবে দুই পদ্ধতিরই মূল্য আছে।|অন ব্যালেন্স, বোথ মেথডস হ্যাভ ভ্যালু।"],
["argue|তর্ক করা|আর্গিউ","evidence|প্রমাণ|এভিডেন্স","topic|বিষয়|টপিক","advantage|সুবিধা|অ্যাডভান্টেজ","disadvantage|অসুবিধা|ডিসঅ্যাডভান্টেজ","effective|কার্যকর|ইফেক্টিভ","focus|মনোযোগ|ফোকাস","conclude|সিদ্ধান্তে আসা|কনক্লুড","valid|যথার্থ|ভ্যালিড","balance|ভারসাম্য|ব্যালেন্স"],
["advantage|অ্যাডভান্টেজ|ভান-এ জোর","evidence|এভিডেন্স|এভ-ই-ডেন্স","valid|ভ্যালিড|ভ্যা-লিড"],
["Do you think students should use phones in class?|ক্লাসে ছাত্রদের ফোন ব্যবহার করা উচিত?","I disagree because phones distract students.|আমি একমত নই কারণ ফোন মনোযোগ নষ্ট করে।","But phones can help research.|কিন্তু ফোন গবেষণায় সাহায্য করে।","I see your point, but rules are needed.|বুঝি, তবে নিয়ম দরকার।"],
"যেকোনো একটি বিতর্কিত বিষয়ে ২ মিনিট পক্ষে ও ২ মিনিট বিপক্ষে বলো।",
"বিতর্কে তথ্য ও উদাহরণ দাও; ব্যক্তিগত আক্রমণ নয়।");

D("সংবাদ ও ভিডিও থেকে সারাংশ","summarize news english summary","শোনা বা পড়া জিনিস নিজের ভাষায় সারাংশ করতে পারা।",
"কাঠামো: Who? What? When? Where? Why? → The article is about… / The main point is… / According to the speaker… / In short…। পরিবর্তন: নিজের শব্দে বলো, হুবহু মুখস্থ নয়।",
["The article is about climate change.|প্রবন্ধটি জলবায়ু পরিবর্তন নিয়ে।|দি আর্টিকল ইজ অ্যাবাউট ক্লাইমেট চেঞ্জ।","The main point is that we must act now.|মূল কথা হল এখনই পদক্ষেপ নেওয়া দরকার।|দ্য মেইন পয়েন্ট ইজ দ্যাট উই মাস্ট অ্যাক্ট নাউ।","According to the report, prices have increased.|প্রতিবেদন অনুযায়ী দাম বেড়েছে।|অ্যাকর্ডিং টু দ্য রিপোর্ট, প্রাইসেস হ্যাভ ইনক্রীসড।","It happened in Dhaka last week.|এটি গত সপ্তাহে ঢাকায় ঘটেছিল।|ইট হ্যাপেন্ড ইন ঢাকা লাস্ট উইক।","In short, the situation is serious.|সংক্ষেপে পরিস্থিতি গুরুতর।|ইন শর্ট, দ্য সিচুয়েইশন ইজ সিরিয়াস।"],
["article|প্রবন্ধ|আর্টিকল","report|প্রতিবেদন|রিপোর্ট","headline|শিরোনাম|হেডলাইন","according to|অনুযায়ী|অ্যাকর্ডিং টু","main idea|মূল ভাব|মেইন আইডিয়া","detail|বিস্তারিত|ডীটেইল","increase|বৃদ্ধি|ইনক্রীস","decrease|হ্রাস|ডিক্রীস","situation|পরিস্থিতি|সিচুয়েইশন","serious|গুরুতর|সিরিয়াস"],
["increase (noun/verb)|ইনক্রীস / ইনক্রীস|noun-এ প্রথমে জোর","serious|সিরিয়াস|সি-রি-য়াস","headline|হেডলাইন|হেড + লাইন"],
["What was the news about?|খবরটি কী নিয়ে?","It was about rising prices.|দাম বৃদ্ধি নিয়ে।","What was the main point?|মূল কথা কী?","That people must save more.|মানুষকে আরও সঞ্চয় করতে হবে।"],
"একটি ৩ মিনিটের সহজ ইংরেজি ভিডিও বা খবর দেখে ১ মিনিটে নিজের ভাষায় সারাংশ বলো।",
"সারাংশে নিজের শব্দ ব্যবহার করো; মূল বাক্য কপি করো না।");

D("উন্নত ইন্টারভিউ: আচরণগত প্রশ্ন (STAR)","behavioral interview STAR english","উদাহরণসহ উত্তর (STAR পদ্ধতি) দিতে পারা।",
"STAR = Situation (পরিস্থিতি), Task (দায়িত্ব), Action (কী করলে), Result (ফল)। Tell me about a time when you solved a problem… উত্তর: In my previous job… / My task was… / I decided to… / As a result…",
["In my previous job, we had a tight deadline.|আগের চাকরিতে আমাদের কঠিন ডেডলাইন ছিল।|ইন মাই প্রিভিয়াস জব, উই হ্যাড আ টাইট ডেডলাইন।","My task was to finish the report.|আমার দায়িত্ব ছিল প্রতিবেদন শেষ করা।|মাই টাস্ক ওয়জ টু ফিনিশ দ্য রিপোর্ট।","I organized the team and shared the work.|আমি দল গুছিয়ে কাজ ভাগ করলাম।|আই অর্গানাইজড দ্য টীম অ্যান্ড শেয়ার্ড দ্য ওয়ার্ক।","As a result, we finished two days early.|ফলে আমরা দুই দিন আগে শেষ করলাম।|অ্যাজ আ রিজাল্ট, উই ফিনিশ্ড টু ডেইজ আর্লি।","I learned the value of teamwork.|আমি দলগত কাজের মূল্য শিখলাম।|আই লার্নড দ্য ভ্যালু অভ টীমওয়ার্ক।"],
["situation|পরিস্থিতি|সিচুয়েইশন","task|দায়িত্ব|টাস্ক","action|পদক্ষেপ|অ্যাকশন","result|ফল|রিজাল্ট","challenge|চ্যালেঞ্জ|চ্যালেঞ্জ","solve|সমাধান|সলভ","organize|সংগঠিত|অর্গানাইজ","lead|নেতৃত্ব|লীড","achievement|অর্জন|অ্যাচীভমেন্ট","lesson|শিক্ষা|লেসন"],
["organized|অর্গানাইজড|অর-গা-নাইজড","achievement|অ্যাচীভমেন্ট|অ্যাচীভ-মেন্ট","lesson|লেসন|লেস-ন"],
["Tell me about a time you solved a problem.|একটি সমস্যা সমাধানের ঘটনা বলুন।","In my previous job we had a tight deadline.|আগের চাকরিতে কঠিন ডেডলাইন ছিল।","What did you do?|আপনি কী করলেন?","I organized the team, and we finished early.|দল গুছিয়ে আগেই শেষ করলাম।"],
"নিজের জীবনের একটি সমস্যা সমাধানের গল্প STAR কাঠামোয় ২ মিনিটে বলো।",
"ফলাফলে সংখ্যা বা প্রমাণ দিলে উত্তর শক্তিশালী হয়।");

D("বিদেশ সফর ও বিদেশে বসবাসের ইংরেজি","english abroad airport immigration hotel","বিমানবন্দর, ইমিগ্রেশন, বিদেশে বাড়ি ভাড়া ও দৈনন্দিন কথা বলতে পারা।",
"Airport: Where is the check-in counter? / Immigration: I am here for study. / Accommodation: I am looking for a room to rent। Daily: Where can I buy a SIM card?",
["Where is the check-in counter?|চেক-ইন কাউন্টার কোথায়?|হোয়ার ইজ দ্য চেক-ইন কাউন্টার?","I am here for study. I will stay for two years.|আমি পড়াশোনার জন্য এসেছি। দুই বছর থাকব।|আই অ্যাম হিয়ার ফর স্টাডি। আই উইল স্টে ফর টু ইয়ার্স।","I am looking for a room to rent.|আমি ভাড়ার জন্য একটি রুম খুঁজছি।|আই অ্যাম লুকিং ফর আ রুম টু রেন্ট।","Where can I buy a SIM card?|সিম কার্ড কোথায় কিনতে পারি?|হোয়ার ক্যান আই বাই আ সিম কার্ড?","Could you tell me how to use public transport?|পাবলিক ট্রান্সপোর্ট কীভাবে ব্যবহার করব বলবেন?|কুড ইউ টেল মি হাউ টু ইউজ পাবলিক ট্রান্সপোর্ট?"],
["airport|বিমানবন্দর|এয়ারপোর্ট","immigration|ইমিগ্রেশন|ইমিগ্রেইশন","customs|শুল্ক|কাস্টমস","boarding pass|বোর্ডিং পাস|বোর্ডিং পাস","gate|গেট|গেইট","rent|ভাড়া|রেন্ট","landlord|বাড়িওয়ালা|ল্যান্ডলর্ড","deposit|জামানত|ডিপোজিট","insurance|বীমা|ইনশিওরেন্স","currency|মুদ্রা|কারেন্সি"],
["immigration|ইমিগ্রেইশন|গ্রে-তে জোর","customs|কাস্টমস|শেষে স","insurance|ইনশিওরেন্স|শুর-এ জোর"],
["What is the purpose of your visit?|আপনার আসার উদ্দেশ্য কী?","I am here to study for a master's degree.|মাস্টার্স পড়তে এসেছি।","How long will you stay?|কতদিন থাকবেন?","For two years.|দুই বছর।"],
"বিদেশে প্রথম দিন (বিমানবন্দর → ইমিগ্রেশন → থাকার জায়গা → সিম কার্ড) ৪টি সংলাপ বলো।",
"বিদেশে ধীরে ও স্পষ্ট বলো; 'Could you repeat?' বলতে লজ্জা পেও না।");

D("ফেজ ৯ রিভিউ: বাস্তব জীবনের সাবলীলতা","real life english fluency review","পেশাদার ও বাস্তব পরিস্থিতিতে আত্মবিশ্বাসে কথা বলতে পারা।",
"প্রেজেন্টেশন, মিটিং, ইমেইল, অভিযোগ, বিতর্ক, সারাংশ, STAR ইন্টারভিউ ও বিদেশে চলা — একটি করে ১ মিনিটের অনুশীলন।",
["Good morning. I would like to present our plan.|সুপ্রভাত। আমি আমাদের পরিকল্পনা উপস্থাপন করতে চাই।|গুড মর্নিং। আই উড লাইক টু প্রেজেন্ট আওয়ার প্ল্যান।","I am writing to confirm our meeting.|আমি মিটিং নিশ্চিত করতে লিখছি।|আই অ্যাম রাইটিং টু কনফার্ম আওয়ার মীটিং।","I see your point, but I have a different view.|বুঝি, তবে আমার মত আলাদা।|আই সী ইয়োর পয়েন্ট, বাট আই হ্যাভ আ ডিফারেন্ট ভিউ।","In my previous job, I solved a major problem.|আগের চাকরিতে আমি একটি বড় সমস্যা সমাধান করেছিলাম।|ইন মাই প্রিভিয়াস জব, আই সলভড আ মেজর প্রবলেম।","Could you help me find the way?|পথ খুঁজে পেতে সাহায্য করবেন?|কুড ইউ হেল্প মি ফাইন্ড দ্য ওয়ে?"],
["professional|পেশাদার|প্রফেশনাল","fluent|সাবলীল|ফ্লুয়েন্ট","confident|আত্মবিশ্বাসী|কনফিডেন্ট","clear|স্পষ্ট|ক্লিয়ার","polite|ভদ্র|পোলাইট","accurate|নির্ভুল|অ্যাকিউরেট","natural|স্বাভাবিক|ন্যাচারাল","pace|গতি|পেইস","pause|বিরতি|পজ","tone|সুর|টোন"],
["professional|প্রফেশনাল|ফেশ-এ জোর","accurate|অ্যাকিউরেট|অ্যাক-ইউ-রেট","natural|ন্যাচারাল|ন্যাচ-রাল"],
["How was your week of practice?|অনুশীলনের সপ্তাহ কেমন?","I practiced presentations and meetings.|প্রেজেন্টেশন ও মিটিং অনুশীলন করেছি।","Do you feel more confident?|আরও আত্মবিশ্বাসী?","Yes, much more than before.|হ্যাঁ, আগের চেয়ে অনেক বেশি।"],
"৫ মিনিটের পূর্ণ সিমুলেশন: প্রেজেন্টেশন → প্রশ্নোত্তর → মিটিং আলাপ। রেকর্ড করে নিজেকে নম্বর দাও।",
"নিজের রেকর্ডিংয়ে গতি, বিরতি ও সুর লক্ষ্য করো।");

/* ===== ফেজ ১০: দক্ষতা ও চূড়ান্ত অনুশীলন (দিন ৯১–১০০) ===== */
D("উচ্চারণ মাস্টারি ১: স্বরধ্বনির সূক্ষ্ম পার্থক্য","english vowel sounds minimal pairs","সূক্ষ্ম স্বরধ্বনি (ship/sheep, full/fool) পার্থক্য করে বলতে পারা।",
"Minimal pair = একটি ধ্বনির তফাতে অর্থ বদলায়: ship (জাহাজ) / sheep (ভেড়া), full / fool, bad / bed। ছোট ধ্বনি দ্রুত ও আলগা, লম্বা ধ্বনি টানা।",
["The ship is in the sea, and the sheep are on the hill.|জাহাজ সাগরে, ভেড়া পাহাড়ে।|দ্য শিপ ইজ ইন দ্য সী, অ্যান্ড দ্য শীপ আর অন দ্য হিল।","This bed is bad.|এই বিছানা খারাপ।|দিস বেড ইজ ব্যাড।","The cat sat on the cot.|বিড়ালটি খাটে বসল।|দ্য ক্যাট স্যাট অন দ্য কট।","I full the glass with fool.|(ভুল উদাহরণ — পার্থক্য শোনো)|আই ফুল দ্য গ্লাস উইথ ফুল।","Put the pot in the pit.|হাঁড়ি গর্তে রাখো।|পুট দ্য পট ইন দ্য পিট।"],
["ship / sheep|শিপ / শীপ|ছোট ই / লম্বা ঈ","full / fool|ফুল / ফুল|ছোট উ / লম্বা ঊ","bad / bed|ব্যাড / বেড|অ্যা / এ","cut / cot|কাট / কট|আ / অ","pit / pet|পিট / পেট|ই / এ","live / leave|লিভ / লীভ|ছোট / লম্বা","pull / pool|পুল / পুল|ছোট উ / লম্বা ঊ","hat / hut|হ্যাট / হাট|অ্যা / আ","fit / feet|ফিট / ফীট|ছোট / লম্বা","luck / lock|লাক / লক|আ / অ"],
["ship / sheep|শিপ / শীপ|সময়ে পার্থক্য","bad / bed|ব্যাড / বেড|মুখ কত খোলা","cut / cot|কাট / কট|ঠোঁট কেমন"],
["Where is the sheep?|ভেড়া কোথায়?","The sheep is on the hill. The ship is at sea.|ভেড়া পাহাড়ে, জাহাজ সাগরে।","Which is bigger?|কোনটি বড়?","The ship is bigger.|জাহাজ।"],
"১০টি minimal pair ধীরে ও দ্রুত বলো; রেকর্ড করে শোনো কি পার্থক্য স্পষ্ট।",
"লম্বা ধ্বনিতে গলা টানো, ছোট ধ্বনিতে দ্রুত শেষ করো।");

D("উচ্চারণ মাস্টারি ২: শব্দের stress ও বাক্যের ছন্দ","english word stress sentence rhythm","শব্দ ও বাক্যের stress আয়ত্ত করে স্বাভাবিক ছন্দে বলা।",
"ইংরেজি stress-timed: মূল শব্দ (noun, verb, adjective) লম্বা ও জোরালো; ছোট শব্দ (a, the, of, to) দ্রুত ও হালকা। I WANT to GO to the MARket। Schwa (ə) সবচেয়ে সাধারণ ধ্বনি: about, banana।",
["I WANT to GO to the MARket.|আমি বাজারে যেতে চাই।|আই ওয়ান্ট টু গো টু দ্য মার্কেট।","She is a TEAcher of ENglish.|সে ইংরেজির শিক্ষক।|শি ইজ আ টীচার অভ ইংলিশ।","The a-BOUT is a schwa.|about শব্দের 'a' হালকা।|দি আ-বাউট ইজ আ শোয়া।","I'll CALL you toMORrow.|আমি কাল ফোন করব।|আইল কল ইউ টুমরো।","Don't FORget to BRING your BOOK.|বই আনতে ভুলো না।|ডোন্ট ফরগেট টু ব্রিং ইয়োর বুক।"],
["about|আবাউট|a হালকা (schwa)","banana|বানানা|প্রথম ও শেষ a হালকা","computer|কমপিউটার|প্রথম অংশ হালকা","photograph|ফোটোগ্রাফ|PHO-to-graph","photographer|ফটোগ্রাফার|pho-TOG-ra-pher","important|ইমপোর্ট্যান্ট|im-POR-tant","opportunity|অপরচুনিটি|op-por-TU-ni-ty","education|এডুকেশন|ed-u-CA-tion","communication|কমিউনিকেশন|com-mu-ni-CA-tion","pronunciation|প্রনানসিয়েশন|pro-nun-ci-A-tion"],
["photograph / photographer|ফোটোগ্রাফ / ফটোগ্রাফার|stress সরে","record (noun) / record (verb)|রেকর্ড / রিকর্ড|noun-এ প্রথমে","present (noun) / present (verb)|প্রেজেন্ট / প্রিজেন্ট|ঐ নিয়ম"],
["Can you say it with the right rhythm?|ঠিক ছন্দে বলতে পারবে?","I WANT to GO to the MARket.|আমি বাজারে যেতে চাই।","Good. Now faster.|ভালো। এবার দ্রুত।","I WANT to GO to the MARket.|আমি বাজারে যেতে চাই।"],
"১০টি বাক্য (stress বড় অক্ষরে চিহ্নিত) তাল রেখে (টেবিলে টোকা দিয়ে) বলো।",
"ছন্দ ঠিক হলে দ্রুত বললেও স্পষ্ট শোনায়।");

D("মাতৃভাষীর গতিতে শোনা ও ধরা (Native Speed Listening)","native speed english listening practice","মাতৃভাষীর স্বাভাবিক গতির কথা বোঝার কৌশল আয়ত্ত করা।",
"৪ ধাপ: ১) পুরোটা শোনো (মূল ভাব) ২) আবার শুনে নোট ৩) ট্রান্সক্রিপ্ট মেলাও ৪) shadowing। না বুঝলেও থেমো না; প্রসঙ্গ থেকে অনুমান করো।",
["Could you play it again, please?|দয়া করে আবার চালাবে?|কুড ইউ প্লে ইট অগেন, প্লিজ?","I caught the main idea.|আমি মূল ভাব ধরেছি।|আই কট দ্য মেইন আইডিয়া।","I missed the last part.|শেষ অংশ ধরতে পারিনি।|আই মিসড দ্য লাস্ট পার্ট।","The speaker talks very fast.|বক্তা খুব দ্রুত বলে।|দ্য স্পীকার টকস ভেরি ফাস্ট।","Let me check the transcript.|ট্রান্সক্রিপ্ট মিলিয়ে দেখি।|লেট মি চেক দ্য ট্র্যান্সক্রিপ্ট।"],
["listen|শোনা|লিসেন","catch|ধরা|ক্যাচ","miss|ধরতে না পারা|মিস","guess|অনুমান করা|গেস","context|প্রসঙ্গ|কনটেক্সট","transcript|ট্রান্সক্রিপ্ট|ট্র্যান্সক্রিপ্ট","accent|উচ্চারণ-ভঙ্গি|অ্যাকসেন্ট","speed|গতি|স্পীড","clue|সূত্র|ক্লু","gist|সারকথা|জিস্ট"],
["transcript|ট্র্যান্সক্রিপ্ট|ট্র্যান-স্ক্রিপ্ট","context|কনটেক্সট|কন-টেক্সট","gist|জিস্ট|g = জ"],
["Did you understand the podcast?|পডকাস্ট বুঝেছ?","I got the main idea but missed some details.|মূল ভাব বুঝেছি, কিছু বিস্তারিত বাদ গেছে।","Listen again with the transcript.|ট্রান্সক্রিপ্ট দেখে আবার শোনো।","Good idea. I will do that.|ভালো কথা। তাই করব।"],
"৫ মিনিটের একটি ইংরেজি পডকাস্ট (BBC Learning English বা TED) ৪ ধাপে অনুশীলন করো।",
"রোজ ১০ মিনিট শোনা, সপ্তাহে একবার ৩০ মিনিটের চেয়ে ভালো।");

D("পড়ার দক্ষতা: প্রবন্ধ পড়া ও শব্দ অনুমান","english reading skills article vocabulary guess","ইংরেজি প্রবন্ধ পড়ে মূল ভাব ও নতুন শব্দের অর্থ অনুমান করা।",
"কৌশল: Skim (দ্রুত চোখ বুলাও) → Scan (নির্দিষ্ট তথ্য খোঁজো) → নতুন শব্দ: প্রসঙ্গ থেকে অনুমান → পরে অভিধানে মেলাও। উপসর্গ: un-, re-, dis- ; প্রত্যয়: -ful, -less, -ness।",
["Skim the text first, then read it carefully.|আগে দ্রুত চোখ বুলাও, তারপর মনোযোগ দিয়ে পড়ো।|স্কিম দ্য টেক্সট ফার্স্ট, দেন রীড ইট কেয়ারফুলি।","I can guess the meaning from context.|আমি প্রসঙ্গ থেকে অর্থ অনুমান করতে পারি।|আই ক্যান গেস দ্য মীনিং ফ্রম কনটেক্সট।","'Unhappy' means not happy.|'আনহ্যাপি' মানে সুখী নয়।|আনহ্যাপি মীনস নট হ্যাপি।","'Helpful' means full of help.|'হেল্পফুল' মানে সাহায্যে ভরা।|হেল্পফুল মীনস ফুল অভ হেল্প।","I underline new words and check them later.|নতুন শব্দ দাগ দিয়ে পরে দেখি।|আই আন্ডারলাইন নিউ ওয়ার্ডস অ্যান্ড চেক দেম লেইটার।"],
["skim|দ্রুত পড়া|স্কিম","scan|খুঁজে পড়া|স্ক্যান","prefix|উপসর্গ|প্রিফিক্স","suffix|প্রত্যয়|সাফিক্স","guess|অনুমান|গেস","meaning|অর্থ|মীনিং","paragraph|অনুচ্ছেদ|প্যারাগ্রাফ","title|শিরোনাম|টাইটেল","author|লেখক|অথর","summary|সারসংক্ষেপ|সামারি"],
["paragraph|প্যারাগ্রাফ|প্যা-রা-গ্রাফ","author|অথর|th নয়, অ-থর","suffix|সাফিক্স|সাফ-ইক্স"],
["How do you read English articles?|ইংরেজি প্রবন্ধ কীভাবে পড়ো?","I skim first, then I read carefully.|আগে চোখ বুলাই, তারপর মনোযোগ দিয়ে পড়ি।","What about new words?|নতুন শব্দ?","I guess the meaning from context first.|আগে প্রসঙ্গ থেকে অনুমান করি।"],
"একটি ছোট ইংরেজি প্রবন্ধ (BBC Learning English) পড়ো, ৫টি নতুন শব্দ লিখে অর্থ অনুমান করো।",
"রোজ ১টি ছোট প্রবন্ধ পড়ো — এক মাসে শব্দভান্ডার অনেক বাড়বে।");

D("Speaking Test: Part 1 (পরিচিত বিষয়ে প্রশ্ন)","english speaking test part 1 familiar topics","পরিচিত বিষয়ে (বাড়ি, কাজ, শখ) সংক্ষিপ্ত ও সাবলীল উত্তর দেওয়া।",
"উত্তরের নিয়ম: সরাসরি উত্তর + কারণ + উদাহরণ (২–৩ বাক্য)। Do you like…? → Yes, I do. I like it because… For example…",
["Yes, I enjoy cooking because it is relaxing.|হ্যাঁ, রান্না করতে ভালো লাগে কারণ এটি স্বস্তিদায়ক।|ইয়েস, আই ইনজয় কুকিং বিকজ ইট ইজ রিল্যাক্সিং।","I live in a small apartment in Dhaka.|আমি ঢাকায় একটি ছোট ফ্ল্যাটে থাকি।|আই লিভ ইন আ স্মল অ্যাপার্টমেন্ট ইন ঢাকা।","In my free time, I usually read novels.|অবসরে আমি সাধারণত উপন্যাস পড়ি।|ইন মাই ফ্রী টাইম, আই ইউজুয়ালি রীড নভেলস।","I prefer tea to coffee.|আমি কফির চেয়ে চা বেশি পছন্দ করি।|আই প্রিফার টী টু কফি।","My hometown is famous for its rivers.|আমার শহর নদীর জন্য বিখ্যাত।|মাই হোমটাউন ইজ ফেইমাস ফর ইটস রিভার্স।"],
["apartment|ফ্ল্যাট|অ্যাপার্টমেন্ট","relaxing|স্বস্তিদায়ক|রিল্যাক্সিং","novel|উপন্যাস|নভেল","hometown|নিজের শহর|হোমটাউন","famous|বিখ্যাত|ফেইমাস","prefer|বেশি পছন্দ|প্রিফার","usually|সাধারণত|ইউজুয়ালি","enjoy|উপভোগ|ইনজয়","interest|আগ্রহ|ইন্টারেস্ট","describe|বর্ণনা|ডিস্ক্রাইব"],
["apartment|অ্যাপার্টমেন্ট|পার্ট-এ জোর","novel|নভেল|ন-ভেল","describe|ডিস্ক্রাইব|ক্রাইব-এ জোর"],
["Do you work or study?|তুমি কাজ করো না পড়ো?","I work as a software tester.|আমি সফটওয়্যার টেস্টার।","Do you like your job?|কাজটি কেমন লাগে?","Yes, because it is challenging. For example, I solve new problems every day.|হ্যাঁ, কারণ চ্যালেঞ্জিং। যেমন রোজ নতুন সমস্যা সমাধান করি।"],
"১০টি পরিচিত প্রশ্নের উত্তর (প্রতিটি ২–৩ বাক্য) দাও ও রেকর্ড করো।",
"'Yes/No' বলে থেমে যেও না; কারণ ও উদাহরণ যোগ করো।");

D("Speaking Test: Part 2 (২ মিনিটের একক বক্তব্য)","english speaking test part 2 long turn cue card","১ মিনিট প্রস্তুতি নিয়ে ২ মিনিট একটানা বলতে পারা।",
"Cue card: Describe a person/place/event… কাঠামো: Who/what/where → বিস্তারিত (3 পয়েন্ট) → অনুভূতি/কারণ। সংযোগ: Let me tell you about… / What I like most is… / The reason is that…",
["Let me tell you about my best friend.|আমি আমার সেরা বন্ধুর কথা বলি।|লেট মি টেল ইউ অ্যাবাউট মাই বেস্ট ফ্রেন্ড।","We have known each other since childhood.|আমরা ছোটবেলা থেকে একে অপরকে চিনি।|উই হ্যাভ নোন ইচ আদার সিন্স চাইল্ডহুড।","What I like most is his sense of humor.|আমার সবচেয়ে ভালো লাগে তার রসবোধ।|হোয়াট আই লাইক মোস্ট ইজ হিজ সেন্স অভ হিউমার।","The reason is that he always supports me.|কারণ সে সবসময় আমাকে সমর্থন করে।|দ্য রীজন ইজ দ্যাট হি অলওয়েজ সাপোর্টস মি।","That is why he is special to me.|এ জন্যই সে আমার কাছে বিশেষ।|দ্যাট ইজ হোয়াই হি ইজ স্পেশাল টু মি।"],
["describe|বর্ণনা করা|ডিস্ক্রাইব","memorable|স্মরণীয়|মেমোরেবল","sense of humor|রসবোধ|সেন্স অভ হিউমার","support|সমর্থন|সাপোর্ট","childhood|শৈশব|চাইল্ডহুড","special|বিশেষ|স্পেশাল","reason|কারণ|রীজন","feeling|অনুভূতি|ফীলিং","experience|অভিজ্ঞতা|ইক্সপীরিয়েন্স","detail|বিস্তারিত|ডীটেইল"],
["memorable|মেমোরেবল|মেম-র-ব্ল","humor|হিউমার|h উচ্চারিত","experience|ইক্সপীরিয়েন্স|পীর-এ জোর"],
["Describe a memorable person.|একজন স্মরণীয় মানুষের বর্ণনা দাও।","I will talk about my teacher.|আমি আমার শিক্ষকের কথা বলব।","Please begin now.|এবার শুরু করো।","Let me tell you about my teacher.|আমার শিক্ষক সম্পর্কে বলি।"],
"৫টি cue card বিষয়ে (একজন মানুষ, জায়গা, ঘটনা, জিনিস, অভিজ্ঞতা) প্রতিটি ২ মিনিট বলে রেকর্ড করো।",
"প্রস্তুতির ১ মিনিটে ৫টি কী-পয়েন্ট লিখো; পুরো বাক্য নয়।");

D("Speaking Test: Part 3 (গভীর আলোচনা)","english speaking test part 3 discussion abstract","বিমূর্ত ও সামাজিক বিষয়ে যুক্তি দিয়ে আলোচনা করতে পারা।",
"কৌশল: PREP = Point (মত) → Reason (কারণ) → Example (উদাহরণ) → Point (পুনরায়)। ভাষা: It depends on… / Generally speaking… / One possible reason is… / On the whole…",
["Generally speaking, young people prefer online shopping.|সাধারণত তরুণরা অনলাইনে কেনাকাটা পছন্দ করে।|জেনারেলি স্পীকিং, ইয়াং পিপল প্রিফার অনলাইন শপিং।","It depends on the situation.|এটা পরিস্থিতির ওপর নির্ভর করে।|ইট ডিপেন্ডস অন দ্য সিচুয়েইশন।","One possible reason is convenience.|একটি সম্ভাব্য কারণ সুবিধা।|ওয়ান পসিবল রীজন ইজ কনভীনিয়েন্স।","For example, people can compare prices easily.|যেমন মানুষ সহজে দাম তুলনা করতে পারে।|ফর ইগজ্যাম্পল, পিপল ক্যান কমপেয়ার প্রাইসেস ঈজিলি।","On the whole, I think it is a positive change.|সামগ্রিকভাবে আমি একে ইতিবাচক পরিবর্তন মনে করি।|অন দ্য হোল, আই থিংক ইট ইজ আ পজিটিভ চেঞ্জ।"],
["convenience|সুবিধা|কনভীনিয়েন্স","society|সমাজ|সোসাইটি","trend|প্রবণতা|ট্রেন্ড","impact|প্রভাব|ইমপ্যাক্ট","generation|প্রজন্ম|জেনারেইশন","environment|পরিবেশ|এনভায়রনমেন্ট","government|সরকার|গভর্নমেন্ট","responsibility|দায়িত্ব|রেসপন্সিবিলিটি","development|উন্নয়ন|ডেভেলপমেন্ট","benefit|সুবিধা|বেনিফিট"],
["environment|এনভায়রনমেন্ট|ভাই-র-ন-মেন্ট","responsibility|রেসপন্সিবিলিটি|বিল-এ জোর","government|গভর্নমেন্ট|n নীরব-ই"],
["Why do people prefer online shopping?|মানুষ কেন অনলাইনে কেনাকাটা পছন্দ করে?","One reason is convenience.|একটি কারণ সুবিধা।","Is it always better?|সবসময়ই কি ভালো?","It depends. Sometimes shops are better for quality.|নির্ভর করে। কখনো দোকান মান যাচাইয়ে ভালো।"],
"৫টি বিমূর্ত প্রশ্ন (প্রযুক্তি, পরিবেশ, শিক্ষা) PREP কাঠামোয় ১ মিনিট করে উত্তর দাও।",
"যুক্তি দুর্বল হলে সৎভাবে বলো 'It depends'; জোর করে ভুল বলো না।");

D("আত্মবিশ্বাসী পাবলিক স্পিকিং ও ভুল সংশোধনের অভ্যাস","public speaking self correction english","মঞ্চে আত্মবিশ্বাসে বলা ও নিজের ভুল নিজে ধরার কৌশল।",
"মঞ্চ-কৌশল: চোখে চোখ রাখো, ধীরে বলো, বিরতি দাও, হাত ব্যবহার করো। ভুল ধরা: রেকর্ড → শোনো → ভুল তালিকা → ঠিক করে আবার → একই ভুল ৩ সপ্তাহে কমাও।",
["Take a deep breath and speak slowly.|গভীর শ্বাস নাও ও ধীরে বলো।|টেইক আ ডীপ ব্রেথ অ্যান্ড স্পীক স্লোলি।","Make eye contact with the audience.|শ্রোতাদের সাথে চোখে চোখ রাখো।|মেইক আই কনট্যাক্ট উইথ দি অডিয়েন্স।","I will pause for effect.|আমি জোর দিতে একটু থামব।|আই উইল পজ ফর ইফেক্ট।","Sorry, let me say that again.|দুঃখিত, আবার বলি।|সরি, লেট মি সে দ্যাট অগেন।","Mistakes are part of learning.|ভুল শেখার অংশ।|মিসটেইকস আর পার্ট অভ লার্নিং।"],
["eye contact|চোখে চোখ|আই কনট্যাক্ট","pause|বিরতি|পজ","gesture|অঙ্গভঙ্গি|জেসচার","nervous|নার্ভাস|নার্ভাস","calm|শান্ত|কাম","breathe|শ্বাস নেওয়া|ব্রীদ","stage|মঞ্চ|স্টেইজ","courage|সাহস|কারেজ","correct|সংশোধন|কারেক্ট","habit|অভ্যাস|হ্যাবিট"],
["breathe|ব্রীদ|th কণ্ঠ কাঁপিয়ে","courage|কারেজ|শেষে জ","gesture|জেসচার|জে-স-চার"],
["I feel nervous before speaking.|বলার আগে আমি নার্ভাস থাকি।","Take a deep breath and speak slowly.|গভীর শ্বাস নাও ও ধীরে বলো।","Does it work?|কাজ হয়?","Yes, it helps me stay calm.|হ্যাঁ, শান্ত থাকতে সাহায্য করে।"],
"বন্ধু/পরিবারের সামনে ৩ মিনিটের একটি বক্তব্য দাও; ভিডিও রেকর্ড করে নিজের হাত-চোখ-গলার সুর দেখো।",
"নার্ভাস লাগা স্বাভাবিক; ধীরে শ্বাস ও ধীর গতিই সবচেয়ে কার্যকর।");

D("কোর্স সমাপ্তি: ১০০ দিনের চূড়ান্ত মূল্যায়ন ও ভবিষ্যৎ পরিকল্পনা","english course final assessment graduation next steps","১০০ দিনের উন্নতি মাপা, উদযাপন ও পরবর্তী ধাপের পরিকল্পনা করা।",
"দিন ১ ও দিন ১০ ও দিন ৬০-এর রেকর্ডিংয়ের সাথে আজকের ৫ মিনিটের বক্তৃতা তুলনা করো। পরবর্তী পরিকল্পনা: রোজ ৩০ মিনিট (শোনা, বলা), সপ্তাহে ১টি নতুন বিষয়, মাসে ১টি বই/পডকাস্ট সিরিজ।",
["I have completed one hundred days of practice.|আমি একশো দিনের অনুশীলন সম্পন্ন করেছি।|আই হ্যাভ কমপ্লিটেড ওয়ান হান্ড্রেড ডেইজ অভ প্র্যাকটিস।","My speaking has become much clearer.|আমার কথা অনেক স্পষ্ট হয়েছে।|মাই স্পীকিং হ্যাজ বিকাম মাচ ক্লিয়ারার।","I am proud of my progress.|আমি আমার অগ্রগতিতে গর্বিত।|আই অ্যাম প্রাউড অভ মাই প্রোগ্রেস।","I will keep practicing every day.|আমি রোজ অনুশীলন চালিয়ে যাব।|আই উইল কীপ প্র্যাকটিসিং এভরি ডে।","English has opened new doors for me.|ইংরেজি আমার সামনে নতুন দরজা খুলেছে।|ইংলিশ হ্যাজ ওপেনড নিউ ডোরস ফর মি।"],
["graduate|সমাপ্ত করা|গ্র্যাজুয়েট","accomplish|সম্পন্ন করা|অ্যাকমপ্লিশ","proud|গর্বিত|প্রাউড","journey|যাত্রা|জার্নি","goal|লক্ষ্য|গোল","future|ভবিষ্যৎ|ফিউচার","opportunity|সুযোগ|অপরচুনিটি","grateful|কৃতজ্ঞ|গ্রেটফুল","continue|চালিয়ে যাওয়া|কনটিনিউ","celebrate|উদযাপন|সেলিব্রেট"],
["accomplish|অ্যাকমপ্লিশ|কম-প-এ জোর","journey|জার্নি|জ + আর্নি","grateful|গ্রেটফুল|গ্রেইট-ফুল"],
["How do you feel after one hundred days?|একশো দিন পর কেমন লাগছে?","I feel proud and confident.|গর্বিত ও আত্মবিশ্বাসী।","What is your next goal?|পরের লক্ষ্য কী?","To speak English fluently with anyone, anywhere.|যে কারও সাথে যেকোনো জায়গায় সাবলীল ইংরেজি বলা।"],
"৫ মিনিটের চূড়ান্ত বক্তৃতা: আমার ১০০ দিনের যাত্রা, যা শিখলাম, যা পারি, পরবর্তী লক্ষ্য। রেকর্ড করে সংরক্ষণ করো।",
"তুমি ১০০ দিন নিয়মিত ছিলে — এটাই সবচেয়ে বড় সাফল্য। এখন রোজ ৩০ মিনিট বলা চালিয়ে যাও।");
D("সামাজিক আড্ডা ও নেটওয়ার্কিং","english small talk networking social","অপরিচিতদের সাথে আলাপ জমানো ও সম্পর্ক তৈরি করা।",
"শুরু: Hi, I don't think we've met. / প্রশ্ন: What do you do? / সংযোগ: That sounds interesting! / বিদায়: It was great talking to you. Let's keep in touch।",
["Hi, I don't think we have met. I am Rina.|হাই, মনে হয় আমাদের দেখা হয়নি। আমি রিনা।|হাই, আই ডোন্ট থিংক উই হ্যাভ মেট। আই অ্যাম রিনা।","What brings you to this event?|আপনি এই অনুষ্ঠানে কেন এসেছেন?|হোয়াট ব্রিংস ইউ টু দিস ইভেন্ট?","That sounds really interesting!|এটা সত্যিই মজার শোনাচ্ছে!|দ্যাট সাউন্ডস রিয়্যালি ইন্টারেস্টিং!","Here is my card. Let's keep in touch.|এই নিন আমার কার্ড। যোগাযোগ রাখি।|হিয়ার ইজ মাই কার্ড। লেটস কীপ ইন টাচ।","It was great talking to you.|আপনার সাথে কথা বলে ভালো লাগল।|ইট ওয়জ গ্রেট টকিং টু ইউ।"],
["network|যোগাযোগের জাল|নেটওয়ার্ক","event|অনুষ্ঠান|ইভেন্ট","introduce|পরিচয় করানো|ইন্ট্রোডিউস","business card|ব্যবসায়িক কার্ড|বিজনেস কার্ড","connect|যুক্ত হওয়া|কানেক্ট","interesting|মজার|ইন্টারেস্টিং","colleague|সহকর্মী|কলীগ","industry|শিল্প|ইন্ডাস্ট্রি","keep in touch|যোগাযোগ রাখা|কীপ ইন টাচ","follow up|পরে যোগাযোগ|ফলো আপ"],
["interesting|ইন্টারেস্টিং|IN-ter-est-ing (৩ অংশ)","industry|ইন্ডাস্ট্রি|ইন-ডা-স্ট্রি","colleague|কলীগ|শেষে 'গ'"],
["Hi, I am Rina. What do you do?|হাই, আমি রিনা। আপনি কী করেন?","I work in marketing. And you?|মার্কেটিংয়ে। আর আপনি?","I am a teacher. That sounds interesting!|শিক্ষক। শুনতে মজার!","Let's keep in touch.|যোগাযোগ রাখি।"],
"একটি কাল্পনিক অনুষ্ঠানে ৩ জনের সাথে আলাপ জমানোর অভিনয় করো (৩ মিনিট)।",
"প্রশ্ন করো, মনোযোগ দিয়ে শোনো, নিজের কথাও যোগ করো — ভারসাম্য রাখো।");

D("শব্দভান্ডার মাস্টারি: Collocation ও Word Family","english collocations word family vocabulary","শব্দ জোড়ায় (collocation) শেখা এবং এক শব্দ থেকে একাধিক রূপ বানানো।",
"Collocation = যে শব্দ একসাথে স্বাভাবিক শোনায়: make a decision (do a decision ✗), take a break, heavy rain, strong tea। Word family: succeed → success → successful → successfully।",
["I need to make a decision soon.|আমাকে শিগগির সিদ্ধান্ত নিতে হবে।|আই নীড টু মেইক আ ডিসিশন সুন।","Let's take a break for ten minutes.|দশ মিনিট বিরতি নিই।|লেটস টেইক আ ব্রেইক ফর টেন মিনিটস।","It was heavy rain all night.|সারা রাত ভারী বৃষ্টি ছিল।|ইট ওয়জ হেভি রেইন অল নাইট।","She achieved great success.|সে দারুণ সাফল্য অর্জন করেছে।|শি অ্যাচীভড গ্রেট সাকসেস।","He successfully completed the project.|সে সফলভাবে প্রকল্প সম্পন্ন করেছে।|হি সাকসেসফুলি কমপ্লিটেড দ্য প্রজেক্ট।"],
["make a decision|সিদ্ধান্ত নেওয়া|মেইক আ ডিসিশন","take a break|বিরতি নেওয়া|টেইক আ ব্রেইক","do homework|হোমওয়ার্ক করা|ডু হোমওয়ার্ক","heavy rain|ভারী বৃষ্টি|হেভি রেইন","strong tea|কড়া চা|স্ট্রং টী","succeed|সফল হওয়া|সাকসীড","success|সাফল্য|সাকসেস","successful|সফল|সাকসেসফুল","successfully|সফলভাবে|সাকসেসফুলি","pay attention|মনোযোগ দেওয়া|পে অ্যাটেনশন"],
["success|সাকসেস|সেস-এ জোর","successful|সাকসেসফুল|সেস-এ জোর","attention|অ্যাটেনশন|টেন-এ জোর"],
["Why are you smiling?|হাসছ কেন?","I made an important decision today.|আজ একটি গুরুত্বপূর্ণ সিদ্ধান্ত নিয়েছি।","What is it?|কী সেটা?","I will take a break from work and learn English full time.|কাজ থেকে বিরতি নিয়ে পুরো সময় ইংরেজি শিখব।"],
"১০টি collocation দিয়ে নিজের জীবনের বাক্য বানাও এবং ৩টি শব্দের word family লিখে বলো।",
"অভিধানে শব্দ দেখলে তার collocation ও উদাহরণ বাক্যও পড়ো।");

(()=>{const x=C60.splice(98,2);C60.splice(88,0,x[0]);C60.splice(98,0,x[1])})();
const NDAYS=C60.length,MINUTES=150;
const PH_META=[
 {n:"ভিত্তি",d:"বর্ণমালা, ধ্বনি ও প্রথম বাক্য",len:10},
 {n:"সহজ বাক্য",d:"I have / want / should / can ও ব্যক্তি-শব্দ",len:10},
 {n:"প্রশ্ন ও শব্দভান্ডার",d:"প্রশ্ন, না-বাচক, preposition ও বিশেষণ",len:10},
 {n:"দৈনন্দিন সংলাপ",d:"দোকান, রেস্তোরাঁ, পথ, ডাক্তার, ফোন",len:10},
 {n:"কথা চালানো",d:"মত, গল্প, ভ্রমণ, কর্মজীবন ও ইন্টারভিউ",len:10},
 {n:"আত্মবিশ্বাস",d:"ভিসা, ফরমাল, শোনা ও উচ্চারণ",len:10},
 {n:"মধ্যম গ্রামার",d:"Perfect, Modal, Passive, Conditional",len:10},
 {n:"উন্নত গ্রামার",d:"Reported speech, Relative clause, Idiom",len:10},
 {n:"বাস্তব সাবলীলতা",d:"প্রেজেন্টেশন, মিটিং, ইমেইল, বিতর্ক",len:10},
 {n:"দক্ষতা ও মাস্টারি",d:"উচ্চারণ, শোনা, পড়া, Speaking Test",len:10}];
const PHASES=[];{let i=0;PH_META.forEach(m=>{PHASES.push({n:m.n,d:m.d,days:C60.slice(i,i+m.len).map(x=>[x.bn,x.kw,null,x.sp]),c:C60.slice(i,i+m.len)});i+=m.len})}
const CONTENT=C60.map(x=>({g:x.g,pat:x.pat,S:x.S,V:x.V,P:x.P,L:x.L,tip:x.tip}));

const q=encodeURIComponent;
const yt=s=>"https://www.youtube.com/results?search_query="+q(s);
/* দিনের ৬টি কাজ = ১৫০ মিনিট */
function build(kw,sp){return[
 {ic:"📚",t:"আজকের ১০টি শব্দ",m:30,
  d:"১০টি শব্দ একটি একটি করে: ইংরেজি পড়ো → বাংলা অর্থ → উচ্চারণ। 🔊 চেপে শোনো, ৩ বার জোরে বলো, খাতায় ২ বার লেখো, প্রতিটি দিয়ে নিজের একটি ছোট বাক্য বানাও। শেষে গতকাল ও ৭ দিন আগের শব্দ দ্রুত ঝালিয়ে নাও।",
  r:[["Cambridge Dictionary — শব্দের অর্থ ও উচ্চারণ","dictionary.cambridge.org","https://dictionary.cambridge.org/search/english/direct/?q="+q(kw)],["Forvo — মাতৃভাষীর উচ্চারণ","forvo.com","https://forvo.com/"],["YouTube — "+kw+" vocabulary","ভিডিও লেসন",yt(kw+" vocabulary for beginners")]]},
 {ic:"🔤",t:"উচ্চারণ ও ধ্বনি",m:25,
  d:"৩টি কঠিন শব্দ আলাদা করে ৫ বার করে বলো। আয়নায় নিজের মুখ ও জিভ দেখো। ধীরে (🐢) শুনে নকল করো, তারপর স্বাভাবিক গতিতে। আজকের ১০টি শব্দও জোরে একবার পড়ো।",
  r:[["YouGlish — বাস্তব মানুষের উচ্চারণ","youglish.com","https://youglish.com/pronounce/"+q(kw)+"/english"],["Rachel's English — উচ্চারণ","YouTube",yt("Rachel's English pronunciation")],["Cambridge — IPA","উচ্চারণ চিহ্ন","https://dictionary.cambridge.org/"]]},
 {ic:"🧩",t:"ছাঁচ ও বাক্য",m:30,
  d:"আজকের ছাঁচটি (নিয়ম) মনোযোগ দিয়ে পড়ো। ৫টি উদাহরণ বাক্য একটি একটি করে 🔊 শুনে বলো। এরপর একই ছাঁচে নিজের ১০টি বাক্য লেখো (খাতায়) ও জোরে পড়ো।",
  r:[["British Council LearnEnglish — Grammar","learnenglish.britishcouncil.org","https://learnenglish.britishcouncil.org/grammar"],["YouTube — "+kw+" lesson","গ্রামার ব্যাখ্যা",yt(kw+" English lesson for Bengali")]]},
 {ic:"🎧",t:"শোনা ও Shadowing",m:25,
  d:"নিচের কথোপকথন (🔊) আগে শুধু শোনো, তারপর বাক্য ধরে ধরে স্পিকারের সাথে সাথে বলো (shadowing)। শেষে নিজে দুই ভূমিকায় বলো। এরপর ১০ মিনিট সহজ ইংরেজি অডিও শোনো।",
  r:[["BBC Learning English","সহজ অডিও ও ট্রান্সক্রিপ্ট","https://www.bbc.co.uk/learningenglish/"],["ELLLO — বিভিন্ন উচ্চারণে শোনা","elllo.org","https://elllo.org/"],["YouTube — "+kw+" conversation","বাস্তব উদাহরণ",yt(kw+" English conversation slow")]]},
 {ic:"💬",t:"কথোপকথন ও বলার অনুশীলন",m:25,
  d:sp,
  r:[["AI পার্টনারের সাথে অনুশীলন","claude.ai-তে লেখো: “আমার সাথে "+kw+" নিয়ে সহজ ইংরেজিতে কথোপকথন করো ও ভুল ঠিক করো”","https://claude.ai/"],["YouTube — "+kw+" sample","নমুনা শুনে তুলনা করো",yt(kw+" speaking practice")]]},
 {ic:"🎙️",t:"রেকর্ড, লেখা ও রিভিউ",m:15,
  d:"আজকের বলার অনুশীলন ১ মিনিট ফোনে রেকর্ড করো। শোনো, ২টি ভুল খুঁজে লেখো, ঠিক করে আবার রেকর্ড করো। তারপর আজ যা শিখলে তার ৫টি বাক্য খাতায় লিখে রাখো (ডায়েরি)। সুন্দর লাগলে আগের দিনের একটি পাঠ দ্রুত চোখ বুলিয়ে নাও।",
  r:[["Dictation.io — বলো, লেখা দেখো","dictation.io","https://dictation.io/speech"],["Google Translate — যাচাই","translate.google.com","https://translate.google.com/?sl=bn&tl=en"]]}
]}
const DAYS=[];PHASES.forEach((p,pi)=>p.days.forEach(x=>DAYS.push({pi,bn:x[0],kw:x[1],sp:x[3]})));
const CURR={about:{
 who:"যাঁরা ইংরেজি একদমই শুরু করতে চান বা বাংলা দিয়ে বুঝে ধাপে ধাপে বলতে শিখতে চান। কোর্সটি 'সবকিছু পারি না কোর্স (PuroPuri English Shikhi)'-র ক্রম (বর্ণমালা → ধ্বনি → শব্দ → \"I\" ছাঁচ → প্রশ্ন → না-বাচক → preposition → বিশেষণ → পড়া) এবং 10 Minute School-এর Spoken English কোর্সের ৬০ ক্লাসের রূপরেখা (এরপর আরও ৪০ দিন উন্নত স্তর) (Easy → Medium → Hard; Daily Use, Daily Routine, Job, Visa Interview, Formal Introduction) অনুসরণ করে বানানো।",
 time:"প্রতিদিন ২ ঘণ্টা ৩০ মিনিট (১৫০ মিনিট) × ৬০ দিন = ২৫০ ঘণ্টা। চাইলে দুই ভাগে পড়তে পারো: সকালে ১ ঘণ্টা ১৫ মিনিট (কাজ ১-৩), রাতে ১ ঘণ্টা ১৫ মিনিট (কাজ ৪-৬)।",
 method:[["📚 ৩০ মি — শব্দ","প্রতিদিন ১০টি নতুন শব্দ + পুরোনো শব্দের ঝালাই (spaced repetition)।"],["🔤 ২৫ মি — উচ্চারণ","কঠিন ধ্বনি, stress ও 🔊 শুনে নকল।"],["🧩 ৩০ মি — ছাঁচ","একটি ছাঁচ + ৫ বাক্য + নিজের ১০ বাক্য।"],["🎧 ২৫ মি — শোনা","কথোপকথন শোনা ও shadowing।"],["💬 ২৫ মি — বলা","পরিস্থিতিভিত্তিক বলা ও role-play।"],["🎙️ ১৫ মি — রেকর্ড","রেকর্ড, ভুল ধরা, ডায়েরি লেখা।"]],
 tips:["প্রতিদিন একই সময়ে বসো; সময় বাঁধা থাকলে অভ্যাস তৈরি হয়।","শব্দ জোরে বলো — নীরবে পড়লে উচ্চারণ হয় না।","ভুল হলে থামো না; আগে বলার সাহস, পরে নির্ভুলতা।","প্রতি ১০ দিন পরপর রিভিউ দিনে পুরোনো শব্দ ও ছাঁচ আবার করো।","সপ্তাহে একবার নিজের রেকর্ডিং আগের সপ্তাহের সাথে তুলনা করো।","সব কাজ একদিনে না পারলে ২ ভাগে সকাল-রাতে ভাগ করো।"],
 faq:[["২.৫ ঘণ্টা একসাথে বসতে না পারলে?","কাজগুলো দুই বা তিন ভাগে ভাগ করো। যেকোনো ক্রমে করা যায়, তবে ১ম কাজ (শব্দ) সবার আগে করলে ভালো।"],["কোনো দিন বাদ গেলে?","পরের দিন ওই দিনটি আগে শেষ করো, তারপর নতুন দিন। চেইন ভাঙলেও আবার শুরু করো।"],["উচ্চারণ ঠিক হচ্ছে কি না কীভাবে বুঝব?","🔊 শুনে নিজের রেকর্ডিংয়ের সাথে মেলাও, YouGlish-এ মাতৃভাষীর উচ্চারণ শোনো, এবং AI পার্টনারকে শুনে ভুল ধরতে বলো।"],["বাংলা ব্যবহার করব কেন?","শুরুতে বাংলা অর্থ ও উচ্চারণ বোঝাপড়া দ্রুত করে। প্রথম ৬০ দিনের পর ধীরে ধীরে ইংরেজিতে ভাবার অভ্যাস করো।"]]},
 phases:[
 {goal:"বর্ণমালা, স্বরধ্বনি ও কঠিন ধ্বনি আয়ত্ত করা এবং \"I\" দিয়ে প্রথম বাক্য বলা।",outcomes:["A–Z নাম ও ধ্বনি চেনা","a / an / the ঠিকভাবে বসানো","I am / I + verb / -ing / past / will দিয়ে বাক্য বলা","নিজের পরিচয় ১ মিনিটে বলা"],check:["বর্ণমালা দেখে বানান বলতে পারি","th, v, w, r ধ্বনি স্পষ্ট বলতে পারি","১–২০ গুনতে পারি","৫টি ছাঁচে নিজের বাক্য বলতে পারি"],test:"১ মিনিটের 'আমার পরিচয়' রেকর্ড করে সংরক্ষণ করো।"},
 {goal:"have, have to, want to, should, can ও ব্যক্তি-সর্বনাম দিয়ে সহজ বাক্য বলা।",outcomes:["পছন্দ-অপছন্দ ও চাহিদা বলা","this/that/these/those ব্যবহার","সংখ্যা, সময় ও দাম বলা","ছোট গল্প পড়া ও বলা"],check:["I have / has সঠিক ব্যবহার করি","I want to / should / can দিয়ে ৫টি বাক্য বলতে পারি","সময় ও দাম ইংরেজিতে বলতে পারি","ছোট গল্প ৮ বাক্যে বলতে পারি"],test:"নিজের একটি ছোট গল্প ৮–১০ বাক্যে বলো।"},
 {goal:"প্রশ্ন করা, না-বাচক বাক্য, preposition ও বিশেষণ আয়ত্ত করা।",outcomes:["Wh-ও Yes/No প্রশ্ন","don't/doesn't/didn't ব্যবহার","in/on/at সঠিক ব্যবহার","তুলনা (bigger, the best)"],check:["৫টি Wh-প্রশ্ন করতে পারি","না-বাচক বাক্য সঠিক বানাতে পারি","জিনিস কোথায় তা বলতে পারি","দুটি জিনিসের তুলনা করতে পারি"],test:"একজনের ১০টি প্রশ্নের সাক্ষাৎকার রেকর্ড করো।"},
 {goal:"দৈনন্দিন পরিস্থিতিতে (দোকান, রেস্তোরাঁ, পথ, ডাক্তার, ফোন, অনুষ্ঠান) কথা বলা।",outcomes:["রুটিন ধারাবাহিকভাবে বলা","কেনাকাটা ও অর্ডার করা","পথ জিজ্ঞাসা ও বোঝানো","ফোনে কথা বলা"],check:["রুটিন ১ মিনিটে বলতে পারি","দোকানে দরদাম করতে পারি","পথ বলতে পারি","ফোনে নিজের পরিচয় দিতে পারি"],test:"৫টি পরিস্থিতির সংলাপ রেকর্ড করো।"},
 {goal:"মত, গল্প, ভ্রমণ ও কর্মজীবনের ইংরেজি এবং চাকরির ইন্টারভিউয়ের প্রস্তুতি।",outcomes:["কারণসহ মত দেওয়া","অতীতের গল্প বলা","চাকরির ইন্টারভিউয়ে নিজের পরিচয় ও শক্তি বলা","২–৩ মিনিট স্বাধীন বক্তব্য"],check:["মত ও কারণ বলতে পারি","গল্প শুরু-মাঝ-শেষে বলতে পারি","'Tell me about yourself' বলতে পারি","২ মিনিট থামা ছাড়া বলতে পারি"],test:"৩ মিনিটের স্বাধীন বক্তৃতা রেকর্ড করো।"},
 {goal:"ভিসা ইন্টারভিউ, ফরমাল ইংরেজি, দ্রুত শোনা, উচ্চারণ-ছন্দ ও আত্মবিশ্বাস।",outcomes:["ভিসা ইন্টারভিউয়ের উত্তর","ফরমাল পরিচিতি","সংযুক্ত উচ্চারণ বোঝা","৬০ দিনের মূল্যায়ন"],check:["ভিসা ইন্টারভিউয়ের ৫টি প্রশ্নের উত্তর পারি","ফরমাল পরিচয় ৩০ সেকেন্ডে দিতে পারি","gonna/wanna বুঝতে পারি","দিন ১০-এর সাথে নিজের রেকর্ডিং তুলনা করেছি"],test:"৩ মিনিটের চূড়ান্ত বক্তৃতা রেকর্ড করে দিন ১০-এর রেকর্ডিংয়ের সাথে তুলনা করো।"},
 {goal:"Present Perfect, Past Continuous/Perfect, Modal, Used to, Passive ও First Conditional আয়ত্ত করা।",outcomes:["অভিজ্ঞতা ও অতীতের কাজ নির্ভুলভাবে বলা","সম্ভাবনা ও বাধ্যবাধকতা প্রকাশ","Passive দিয়ে নিরপেক্ষ বাক্য","শর্তযুক্ত বাক্য"],check:["Present Perfect ও Past Simple আলাদা করতে পারি","৫টি modal সঠিকভাবে ব্যবহার করতে পারি","Passive voice-এ ৫টি বাক্য বলতে পারি","If-বাক্য সঠিকভাবে বলতে পারি"],test:"নিজের জীবনের গল্প ৩ মিনিটে সব tense মিলিয়ে বলো।"},
 {goal:"কাল্পনিক শর্ত, Reported Speech, Relative Clause, Gerund/Infinitive, Question Tag ও Linking Word আয়ত্ত করা।",outcomes:["অবাস্তব ও অতীতের শর্ত","অন্যের কথা বর্ণনা","দীর্ঘ ও সংযুক্ত বাক্য","idiom ও phrasal verb ব্যবহার"],check:["Second/Third Conditional-এ ৫টি বাক্য বলতে পারি","Reported speech সঠিক ব্যবহার করি","Relative clause দিয়ে বর্ণনা করতে পারি","৫টি idiom ব্যবহার করতে পারি"],test:"একটি বিষয়ে উন্নত গ্রামার দিয়ে ৩ মিনিট বলে রেকর্ড করো।"},
 {goal:"প্রেজেন্টেশন, মিটিং, ইমেইল, গ্রাহকসেবা, বিতর্ক, STAR ইন্টারভিউ ও বিদেশে চলার ইংরেজি।",outcomes:["৩ মিনিটের প্রেজেন্টেশন","ফরমাল ইমেইল লেখা","বিতর্কে যুক্তি দেওয়া","উন্নত ইন্টারভিউ উত্তর"],check:["প্রেজেন্টেশনের কাঠামো জানি","ফরমাল ইমেইল লিখতে পারি","পক্ষে-বিপক্ষে বলতে পারি","STAR উত্তর দিতে পারি"],test:"৫ মিনিটের পূর্ণ সিমুলেশন (প্রেজেন্টেশন + প্রশ্নোত্তর) রেকর্ড করো।"},
 {goal:"উচ্চারণ, ছন্দ, শোনা, পড়া, Speaking Test ও চূড়ান্ত আত্মবিশ্বাস অর্জন।",outcomes:["সূক্ষ্ম ধ্বনি ও stress আয়ত্ত","স্বাভাবিক গতির ইংরেজি বোঝা","Speaking Test-এর ৩ পর্বে প্রস্তুতি","আত্মবিশ্বাসী পাবলিক স্পিকিং"],check:["minimal pair পার্থক্য করতে পারি","পডকাস্টের মূল ভাব ধরতে পারি","২ মিনিট একটানা বলতে পারি","নিজের ভুল নিজে ধরতে পারি"],test:"৫ মিনিটের চূড়ান্ত বক্তৃতা রেকর্ড করে দিন ১, ১০ ও ৬০-এর সাথে তুলনা করো।"}]};
const dayMin=()=>MINUTES;
