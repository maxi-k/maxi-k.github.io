(this["webpackJsonpwebsite-2017"]=this["webpackJsonpwebsite-2017"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return S})),n.d(t,"f",(function(){return v})),n.d(t,"b",(function(){return k}));var a=n(105),r=n(106),i=n(121),c=n(119),s=n(72),o=n.n(s),l=n(0),u=n.n(l),m=n(69),d=n(107),h=n.n(d),g=["en","de"],f=function(e){return function(e){return g.includes(e)}(e)?e:"en"},p={default:"en",current:f(function(){var e=function(){var e=new h.a(document.location.search).get("lang"),t=navigator.languages?navigator.languages[0]:navigator.language||navigator.userLanguage;return e||t}();return"undefined"===typeof e?"en":e.indexOf("-")>0?e.split("-")[0]:e}()),cached:{}},b=function(e){return o.a.get(m.default,e)},w=function(e,t){return o.a.get(function(e){return p.cached[e]||(p.cached[e]=n(138)("./"+e+".js").default)}(e),t,b(t))},v=function(e){return w(p.current,e)},E=new Set,k=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).wrapperElem=e.as||"div",r}return Object(r.a)(n,[{key:"updateLanguage",value:function(){this.setState({lang:p.current})}},{key:"componentDidMount",value:function(){this.setState({lang:p.current}),E.add(this)}},{key:"componentWillUnmount",value:function(){E.remove(this)}},{key:"render",value:function(){var e=this.wrapperElem;return u.a.createElement(e,null,this.props.id&&w(this.state.lang,this.props.id),this.props.children)}}]),n}(u.a.Component),S=function(e){p.current=f(e),E.forEach((function(e){"undefined"!==typeof e&&e.updateLanguage&&e.updateLanguage()}))}},116:function(e,t,n){e.exports=n.p+"static/media/me.825fb57a.jpg"},131:function(e,t,n){e.exports=n(252)},137:function(e,t,n){},138:function(e,t,n){var a={"./common.js":69,"./de.js":139,"./en.js":230};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id=138},139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n(47),s=n(25),o={lang:"de",title:"Lebenslauf",person:{occupation:"Student, Softwareentwickler"},resumeSections:[{id:"Languages",name:"Sprachen",header:r.a.createElement(c.a,null),items:[{name:"Java & Scala",meta:"Sounds professional",description:r.a.createElement("p",null,"Ich habe Java und Scala sowohl in einigen privaten und universit\xe4ren Projekten verwendet, also auch w\xe4hrend meiner Praktika bei ",r.a.createElement(i.a,{href:"cv-oracle"},"Oracle")," und ",r.a.createElement(i.a,{href:"#cv-smartrac"},"Smartrac"),". Der Gro\xdfteil meiner ",r.a.createElement(i.a,{extern:!0,href:"https://github.com/maxi-k/bachelor-code"},"Bachelorarbeit")," ist in Java und ",r.a.createElement(i.a,{extern:!0,href:"https://projectreactor.io/"},"Reactive Streams")," implementiert.")},{name:"Clojure",meta:"\u03bb x y . x",description:r.a.createElement("p",null,"Initial lernte ich Clojure(Script) beim Implementieren einer ",r.a.createElement(i.a,{extern:!0,href:"https://github.com/maxi-k/drawer"},"Webseite \xfcber 4D-Rotation")," f\xfcr ein Paper in der Schule kennen. Mein j\xfcngstes Lisp-Projekt war das ",r.a.createElement(i.a,{extern:!0,href:"https://en.wikipedia.org/wiki/Beer_distribution_game"},"Beer Distribution Game")," in full-stack Clojure und ClojureScript unter Verwendung von Websockets.")},{name:"C++",meta:"Efficiency\xb2",description:r.a.createElement("p",null,"Im Rahmen von Vorlesungen und Seminaren habe ich verschiedene Teile von Datenbanken in C++ implementiert. Auch w\xe4hrend meiner Masterarbeit kam die Sprache vielseitig zum Einsatz.")},{name:"JavaScript",meta:"hype.js",description:r.a.createElement("p",null,"Ich habe mehr Frontends und Backends mit mehr Frameworks und Bibliotheken implementiert als ich mich erinnern kann, reichend von Node und Angular bis hin zu React-Native mit TypeScript.")}]},{id:"Education",name:"Ausbildung",items:[{name:"10/2018 - 2020",meta:"Master of Science, Mehrere Universit\xe4ten",description:r.a.createElement("p",null,"Ich bin Teil des ",r.a.createElement(i.a,{extern:!0,href:"https://elite-se.informatik.uni-augsburg.de/"},"Software Engineering Elite Graduate Program"),", mit voraussichtlichem Abschluss im Sommer 2020. Als Teil des Studiengangs bin ich Student an der Universit\xe4t Augsburg, der Technischen Universit\xe4t M\xfcnchen, sowie an der Ludiwg-Maximilians Universit\xe4t M\xfcnchen.")},{name:"09/2015 - 09/2018",meta:"Bachelor of Science, Universit\xe4t Augsburg. Abschlussnote 1,56",description:r.a.createElement("p",null,"Bis 2018 studierte ich an der Universit\xe4t Augsburg ",r.a.createElement(i.a,{extern:!0,href:"https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"}," Ingenieurinformatik")," im Bachelor.")},{name:"09/2007 - 6/2015",meta:"Abitur, Note 1.2 (A)",description:r.a.createElement("p",null,"Ich besuchte das ",r.a.createElement(i.a,{extern:!0,href:"https://www.jakob-brucker-gymnasium.de"},"Jakob-Brucker-Gymnasium")," in Kaufbeuren (Bayern) mit dem humanistischen Vertiefungsbereich (Latein und Altgriechisch).")}]},{id:"Working-Experience",name:"Arbeitserfahrung",items:[{name:"04/2020 - 10/2020",meta:"Universit\xe4t Jena",id:"cv-job-jena",description:r.a.createElement("p",null,"Ich bin am Lehrstuhl"," ",r.a.createElement(i.a,{extern:!0,href:"https://dbis1.github.io/"},"Datenbanken und Informationssysteme")," ","an der Universit\xe4t Jena eingestellt, w\xe4hrend ich dort meine Mastarbeit schreibe, welche von"," ",r.a.createElement(i.a,{extern:!0,href:"https://dbis1.github.io/team/leis.html"},"Prof. Dr. Viktor Leis")," ","betreut wird.")},{name:"08/2019 - 10/2019",meta:"Oracle Labs Z\xfcrich",id:"cv-oracle",description:r.a.createElement("p",null,"Als Research Assistant bei Oracle Labs in Z\xfcrich konnte ich bei einem gro\xdfen internen Softwareprojekt mitwirken. Ich habe f\xfcr einen neuen Systemteil zusammen mit meinem Mentor die Architektur erstellt und im Anschluss mit vollem Erfolg implementiert und integriert.")},{name:"10/2017 - 01/2020",meta:"Integer GmbH",id:"cv-integer",description:r.a.createElement("p",null,"Bei dem IT Dienstleister ",r.a.createElement(i.a,{extern:!0,href:"https://integer.de/"},"Integer")," nahe Augsburg entwicklte und pflegte ich interne Softwareprojekte. Zudem war ich die erste Anlaufstelle f\xfcr Softwareprojekte- und Auftr\xe4ge von Kunden, von denen ich viele von Anfang bis Ende mitdesignte und entwickelte.")},{name:"01/2016 - 10/2017",meta:"IT-Abteilung der Wirtschaftswissenschaftlichen Fakult\xe4t, Universit\xe4t Augsburg",id:"cv-itwiwi",description:r.a.createElement("p",null,"Meine Aufgaben in der ",r.a.createElement(i.a,{extern:!0,href:"https://www.uni-augsburg.de/de/fakultaet/wiwi/itwiwi/"},"IT-Abteilung")," der gr\xf6\xdften Fakult\xe4t auf dem Campus waren unteranderem die Administration mehrerer Linux-Systeme in einer virtuellen Umgebung, die Entwicklung und Pflege eine Ruby-on-Rails Applikation, so wie die Pflege des Monitoring-Systems f\xfcr die 900+ Ger\xe4te im Geb\xe4ude.")},{name:"08/2015 - 09/2015",meta:"Smartrac Technology GmbH",id:"cv-smartrac",description:r.a.createElement("p",null,"In einem Praktikum \xfcber den Sommer bei ",r.a.createElement(i.a,{extern:!0,href:"https://www.smartrac-group.com"},"Smartrac")," konnte ich eine Server-Erweiterung f\xfcr deren"," ",r.a.createElement(i.a,{extern:!0,href:"https://www.smartrac-group.com/IoT-solutions.html"},"Smart Cosmos")," ","IoT-System mit Java entwickeln, welches es erm\xf6glichte SMS in Verbindung mit IoT Events mittels"," ",r.a.createElement(i.a,{extern:!0,href:"https://www.twilio.com"},"Twilio")," zu verschicken.")}]},{id:"Certificates",name:"Zertifikate",items:[{name:"Fortgeschrittenes Englisch",meta:"Sprachlevel C2",description:r.a.createElement("p",null,"Ich erwarb das Cambridge Advanced English Certificate (CEA) 2015,"," ","und erreichte die Note A, was dem vom Europ\xe4ischen Rat festgelegten Sprachlevel C2 entspricht.")}]},{id:"Contact",name:"Kontakt",content:r.a.createElement(s.a,null)}]};t.default=o},230:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),c=n(4),s=n(47),o={lang:"en",title:"Resume",person:{occupation:"Student, Developer"},github:{languages:"Languages (Github)"},resumeSections:[{id:"Languages",name:"Languages",header:r.a.createElement(s.a,null),items:[{name:"Java & Scala",meta:"Sounds professional",description:r.a.createElement("p",null,"I used Java and Scala in muliple private and university projects, and at my internships at ",r.a.createElement(c.a,{href:"cv-oracle"},"Oracle")," and ",r.a.createElement(c.a,{href:"#cv-smartrac"},"Smartrac"),". Most of my ",r.a.createElement(c.a,{extern:!0,href:"https://github.com/maxi-k/bachelor-code"},"bachelor thesis")," is implemented with Java and ",r.a.createElement(c.a,{extern:!0,href:"https://projectreactor.io/"},"Reactive Streams"),".")},{name:"Clojure",meta:"\u03bb x y . x",description:r.a.createElement("p",null,"After learning Clojure(Script) when implementing a ",r.a.createElement(c.a,{extern:!0,href:"https://github.com/maxi-k/drawer"},"website for 4d rotation")," for a paper in school, I have last used it for implementing the ",r.a.createElement(c.a,{extern:!0,href:"https://en.wikipedia.org/wiki/Beer_distribution_game"},"Beer Distribution Game")," using fullstack Clojure and ClojureScript with websockets.")},{name:"C++",meta:"Efficiency\xb2",description:r.a.createElement("p",null,"I implemented various parts of databases in C++ for university, and used it extensively during my masters thesis.")},{name:"JavaScript",meta:"hype.js",description:r.a.createElement("p",null,"I've implemented more frontends and backends using more frameworks and libraries than I can count, from Node plus Angular to React-Native with TypeScript.")}]},{id:"Education",name:"Education",items:[{name:"10/2018 - 2020",meta:"Master of Science, Multiple Universities",description:r.a.createElement("p",null,"I am part of the ",r.a.createElement(c.a,{extern:!0,href:"https://elite-se.informatik.uni-augsburg.de/"},"Software Engineering Elite Graduate Program"),", with the goal of getting my masters degree in software engineering in 2020. As part of the program, I am a student at the University of Augsburg, the Technical University of Munich, as well as the Ludwig-Maximilians University in Munich.")},{name:"09/2015 - 09/2018",meta:"Bachelor of Science, University of Augsburg. Final Grade 1.56 (GPA 3.6~3.8)",description:r.a.createElement("p",null,"Until 2018, I was a student at the University of Augsburg, studying"," ",r.a.createElement(c.a,{extern:!0,href:"https://www.informatik.uni-augsburg.de/studium/studiengaenge/bachelor_inginf.html"},"Computer Science and Engineering"),".")},{name:"09/2007 - 6/2015",meta:"Abitur, Grade 1.2 (A)",description:r.a.createElement("p",null,"I went to the ",r.a.createElement(c.a,{extern:!0,href:"https://www.jakob-brucker-gymnasium.de"},"Jakob-Brucker-Gymnasium")," in Kaufbeuren (Bavaria), with an emphasis on humanistic studies (Latin and Ancient Greek).")}]},{id:"Working-Experience",name:"Working Experience",items:[{name:"04/2020 - 10/2020",meta:"University of Jena",id:"cv-job-jena",description:r.a.createElement("p",null,"I am employed at the chair for"," ",r.a.createElement(c.a,{extern:!0,href:"https://dbis1.github.io/"},"Databases and Information Systems")," ","at the University of Jena while writing my masters thesis there, mentored by"," ",r.a.createElement(c.a,{extern:!0,href:"https://dbis1.github.io/team/leis.html"},"Prof. Dr. Viktor Leis"),".")},{name:"08/2019 - 10/2019",meta:"Oracle Labs Zurich",id:"cv-oracle",description:r.a.createElement("p",null,"As a research assistant at Oracle Labs Zurich, I was able to contribute to a large oracle-internal software project. I designed the architecture for a completely new part of the system together with my mentor and implemented and integrated it afterwards with great success.")},{name:"10/2017 - 01/2020",meta:"Integer IT",id:"cv-integer",description:r.a.createElement("p",null,"I worked at the IT Firm ",r.a.createElement(c.a,{extern:!0,href:"https://integer.de/"},"Integer"),", where I was responsible for developing and maintaining internal software projects. Furthermore, I was the go-to guy when it came to software projects for customers, many of which I designed and developed from start to finish.")},{name:"01/2016 - 10/2017",meta:"IT-Department, Faculty of Business and Economics, University of Augsburg",id:"cv-itwiwi",description:r.a.createElement("p",null,"Working at the ",r.a.createElement(c.a,{extern:!0,href:"https://www.uni-augsburg.de/de/fakultaet/wiwi/itwiwi/"},"IT-Department")," of the biggest faculty on campus, my tasks included administering multiple Linux systems in a virtual environment, developing and maintaining a Ruby on Rails App, as well as maintaining our monitoring system for the 900+ devices in the building.")},{name:"08/2015 - 09/2015",meta:"Smartrac Technology GmbH",id:"cv-smartrac",description:r.a.createElement("p",null,"In a summer internship at ",r.a.createElement(c.a,{extern:!0,href:"https://www.smartrac-group.com"},"Smartrac"),", I got to create a server extension for their"," ",r.a.createElement(c.a,{extern:!0,href:"https://www.smartrac-group.com/IoT-solutions.html"},"Smart Cosmos")," IoT system using Java, which enabled it to send SMS in connection with IoT events using"," ",r.a.createElement(c.a,{extern:!0,href:"https://www.twilio.com"},"Twilio"),".")}]},{id:"Certificates",name:"Certificates",items:[{name:"Advanced English",meta:"Language Level C2",description:r.a.createElement("p",null,"In 2015 I acquired the Cambridge Advanced English Certificate in ESOL International, reaching Grade A, which corresponds to the Council of Europe Level C2.")}]},{id:"Contact",name:"Contact",content:r.a.createElement(i.a,null)}]};t.default=o},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=Object.freeze({DARK:"dark",LIGHT:"light"}),r={[a.DARK]:{highlight:"purple",className:"dark-theme"},[a.LIGHT]:{highlight:"blue",className:"light-theme"}},i=function(){return r[a.LIGHT]},c=function(){return i().highlight}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),i=n(19),c=n(11),s=n(4),o=Object(c.c)("social").map((function(e,t){return r.a.createElement(s.a,{className:"icon-link",key:e.name,title:e.name,name:e.name,href:e.path},r.a.createElement(i.a,{name:e.icon,size:"large"}))})),l=function(){return r.a.createElement("div",{className:"SocialLinks"},o)}},252:function(e,t,n){"use strict";n.r(t);n(132);var a=n(0),r=n.n(a),i=n(18),c=n.n(i),s=(n(137),n(11)),o=n(73),l=n(260),u=n(263),m=n(259),d=n(264),h=function(e){var t=e.id,n=e.name,a=e.children;return r.a.createElement("div",{className:"ResumeSection ResumeSection-"+t},n&&r.a.createElement(m.a,{horizontal:!0,section:!0,as:"h2"},n),a)},g={largeScreen:5,widescreen:5,computer:5,tablet:5,mobile:16},f={largeScreen:11,widescreen:11,computer:11,tablet:11,mobile:16},p=function(e){var t=e.item,n=f,a=g;return r.a.createElement(u.a.Row,{className:"ResumeSectionItem"},r.a.createElement(u.a.Column,a,r.a.createElement(d.a,{size:"small",as:t.link?"a":"h3",id:t.id,href:t.link,content:t.name,subheader:t.meta})),r.a.createElement(u.a.Column,n,t.description))},b=function(e){var t=e.id,n=e.name,a=e.header,i=e.items.map((function(e){return r.a.createElement(p,{key:e.name,item:e})}));return r.a.createElement(h,{name:n,id:t},a,r.a.createElement(u.a,{stackable:!0},i))},w=function(e){var t=e.id,n=e.name,a=e.header,i=e.content;return r.a.createElement(h,{name:n,id:t},a,i)},v=function(e){return e.sections.map((function(e){return e.items?r.a.createElement(b,{key:e.id,id:e.id,header:e.header,name:e.name,items:e.items}):r.a.createElement(w,{key:e.id,id:e.id,header:e.header,name:e.name,content:e.content})}))},E=function(){return r.a.createElement(v,{sections:Object(s.f)("resumeSections")})},k=n(116),S=n.n(k),y=n(118),x=function(){return r.a.createElement(y.a,{className:"Avatar",src:S.a,fluid:!0,circular:!0})},j=n(24),I=n(25),A=function(){return r.a.createElement("div",{className:"ResumeHeader"},r.a.createElement(d.a,{className:Object(j.b)().className,size:"huge",textAlign:"center"},r.a.createElement("h1",null,Object(s.f)("person.name")),r.a.createElement(d.a.Subheader,{className:"ResumeSubheader"},r.a.createElement("p",null,Object(s.f)("person.occupation")))),r.a.createElement(l.a,{textAlign:"center"},r.a.createElement(I.a,null)))},C=n(261),L=function(){var e=Object(j.a)(),t=s.a.map((function(t){var n=t===s.d.current;return r.a.createElement(C.a,{key:t,color:n?e:null,active:n,onClick:function(){return Object(s.e)(t)},content:t})}));return r.a.createElement(C.a.Group,{className:"LanguageButtons"},t)},N={mainWidths:{largeScreen:6,widescreen:6,computer:6,tablet:10,mobile:16},sideWidths:{largeScreen:4,widescreen:4,computer:4,tablet:6,mobile:16},fullWidths:{largeScreen:10,widescreen:10,computer:10,tablet:16,mobile:16}},O=function(){return r.a.createElement(l.a,{className:"App"},r.a.createElement(A,null),r.a.createElement(x,null),r.a.createElement(E,null))},T=function(e){var t=e.mainWidths,n=e.sideWidths,a=e.fullWidths,i=(e.restWidths,Object(o.useMediaPredicate)("(min-width: 768px)"));return r.a.createElement(l.a,{className:"App"},r.a.createElement(u.a,{centered:!0,stackable:!0,relaxed:!0,padded:!0,className:"App-Grid"},r.a.createElement(u.a.Row,null,r.a.createElement(u.a.Column,t,r.a.createElement(A,null)),i&&r.a.createElement(u.a.Column,n,r.a.createElement(x,null))),r.a.createElement(u.a.Row,null,r.a.createElement(u.a.Column,a,r.a.createElement(l.a,{align:"center"},r.a.createElement(L,null)),r.a.createElement(E,null)))))},M=function(){return Object(o.useMediaPredicate)("print")?r.a.createElement(O,null):r.a.createElement(T,N)},R=function(){return r.a.createElement(s.b,{as:M})},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(R,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");U?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):G(e)}))}}()},4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(122),r=n(0),i=n.n(r),c=n(24),s=function(e){var t=e.children,n=e.extern,r=void 0!==n&&n,s=e.nohighlight,o=void 0===s||s,l=e.className,u=Object(a.a)(e,["children","extern","nohighlight","className"]),m=Object(c.b)().className,d=o?"nohighlight":"",h=l?"".concat(m," ").concat(d," ").concat(l):m;return r?i.a.createElement("a",Object.assign({className:h,target:"_new"},u),t):i.a.createElement("a",Object.assign({className:h},u),t)}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(76),r=n(0),i=n.n(r),c=n(4),s=n(120),o=Object.freeze(["dwm","bachelor-code-arduino","hci-complementing-mirror"]),l=new Set(["HTML","CSS"]),u={},m=function(e){var t=e.items;return i.a.createElement("span",{className:"Percentile-Bar"},t.map((function(e){var t=e.color,n=e.percentage;return i.a.createElement("span",{key:t,className:"Percentile-Bar-Item",style:{width:"".concat((100*n).toFixed(3),"%"),backgroundColor:t}})})))},d=function(e){var t=e.name,n=e.color,a=e.percentage,r=e.uriKey,s=void 0===r?null:r;return i.a.createElement("span",{className:"Skill-Description"},i.a.createElement(c.a,{extern:!0,nohighlight:!0,className:"Skill-Tag",href:"https://github.com/maxi-k?tab=repositories&q=&type=&language="+encodeURIComponent((s||t.toLowerCase()).trim())},i.a.createElement("span",{className:"Skill-ColorTag",style:{backgroundColor:n}}," "),i.a.createElement("span",{className:"Skill-NameTag"},t),i.a.createElement("span",{className:"Skill-PercentageTag"},(100*a).toPrecision(2),"%")))},h=function(e){var t=function(){var e=Object(r.useState)(u.current),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){if(console.log(u),u.current)return a(u.current);fetch("https://okhkp2o8fd.execute-api.eu-central-1.amazonaws.com/default/",{method:"POST",body:JSON.stringify({top:30,exclude:o})}).then((function(e){return e.json()})).then((function(e){var t=e.skills.sort((function(e,t){return e.codeSize===t.codeSize?0:e.codeSize<t.codeSize?1:-1})).filter((function(e){return!l.has(e.name)}));return u.current={cached:!0,skills:t},a({cached:!1,skills:t})})).catch((function(e){return console.log(e),a({error:e})}))}),[]),n}();if(!t)return i.a.createElement("div",{className:"SkillLevels-Loading"});var n=t.cached,c=t.skills;if(c&&c.error)return i.a.createElement("div",{className:"SkillLevels-Error"});if(!c||0===c.length)return i.a.createElement("div",{className:"SkillLevels-Loading"});var h=c.reduce((function(e,t){return e+t.codeSize}),0),g=c.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{percentage:e.codeSize/h})})).filter((function(e){return e.percentage>=.05})),f=1-g.reduce((function(e,t){return e+t.percentage}),0);return g.push({name:"Others",color:"#eeeeee",percentage:f,uriKey:" "}),i.a.createElement("div",{className:"SkillLevels ".concat(n||"network")},i.a.createElement(m,{items:g}),i.a.createElement("div",{className:"SkillLevels-Descriptions"},g.map((function(e){return i.a.createElement(d,Object.assign({key:e.name},e))}))))}},69:function(e,t,n){"use strict";n.r(t);t.default={person:{name:"Maximilian Kuschewski"},social:[{name:"Github",path:"https://github.com/maxi-k",icon:"github"},{name:"Twitter",path:"https://twitter.com/maxikuschewski",icon:"twitter"},{name:"LinkedIn",path:"https://www.linkedin.com/in/maxi-k",icon:"linkedin"}]}}},[[131,1,2]]]);
//# sourceMappingURL=main.da6e65e4.chunk.js.map