(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{100:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(41),r=t.n(c),m=(t(57),t(58),t(101)),s=t(16),o=t(5),i=t(6),u=t(51),d=t(10),E=(t(61),t(44)),p=t.n(E),v=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"80%",value:"80"},{id:"CSS_skill",content:"CSS",porcentage:"75%",value:"75"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"80%",value:"80"},{id:"Java_skill",content:"Java",porcentage:"75%",value:"75"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"80%",value:"80"},{id:"Git_skill",content:"Git",porcentage:"80%",value:"80"},{id:"NodeJS_skill",content:"NodeJS",porcentage:"85%",value:"85"},{id:"SQL_skill",content:"SQL",porcentage:"75%",value:"75"}],about_me:[{id:"first-p-about",content:""},{id:"second-p-about",content:"Hey, My name is Musadiq Soso as you already know. Thank you for taking the time to explore my About me page, I am a recent Software engineering graduate from the University of Ontario Institute of Technology. At the moment I am in search of employment in the Software/IT industry, while searching for jobs I have also used this free time to nurture and develop my Technical skills by taking on courses and projects so as to be a hundred per cent ready for my next employer. I like to call myself a Software Developer, I have some experience in Software/IT as a front-end Web Developer Intern which I learned a lot and I\u2019m grateful for. If you wish to get in touch with or learn further about me you can Navigate to the Contact page Thank you."},{id:"third-p-about",content:""}]},e}return Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"box-shadow-full"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},n.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},n.a.createElement("img",{className:"img-fluid rounded b-shadow-a",alt:"",src:p.a})))),n.a.createElement("div",{className:"skill-mf"},this.state.skills.map((function(e){return n.a.createElement(n.a.Fragment,{key:e.id},n.a.createElement("span",null,e.content)," ",n.a.createElement("span",{className:"pull-right"},e.porcentage),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"about-me pt-4 pt-md-0"},n.a.createElement("div",{className:"title-box-2"},n.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return n.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(n.a.Component),f=function(){return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"About | Musadiq Soso")),n.a.createElement(m.a,{className:"About-main"},n.a.createElement(v,null)))},N=(t(62),t(102)),h=t(11),b=t(8),g=(t(63),t(99),t(39),t(47)),y=t.n(g),S=function(){return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Resume | Musadiq Soso")),n.a.createElement(m.a,{className:"Resume-header"},n.a.createElement(N.a,{className:"Resume-main"},n.a.createElement("section",{id:"resume",className:"resume-mf sect-pt4 route "},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"box-shadow-full"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("iframe",{width:"850",height:"600px",src:y.a})))))))))))},k=(t(91),t(48)),w=t.n(k),x=(t(92),t(49)),M=t.n(x),I=function(){return n.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route",style:{backgroundImage:"url("+M.a+")"}},n.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Musadiq Soso"),n.a.createElement("p",{className:"intro-subtitle"},n.a.createElement("span",{className:"text-slider-items"}),n.a.createElement("strong",{className:"text-slider"},n.a.createElement(w.a,{strings:["Software Developer","Use Navbar Above To Navigate","This was made with React JS"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))))},T=function(){return n.a.createElement("div",{className:"bg"},n.a.createElement(s.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Home | Musadiq Soso")),n.a.createElement(m.a,{className:"Home-main"},n.a.createElement(I,null)))},j=t(19),_=(t(93),t(94),function(){return n.a.createElement("nav",{className:"navbar",role:"navigation"},n.a.createElement("div",{className:"container"},n.a.createElement("ul",{className:"nav navbar-nav"},n.a.createElement(j.a,{className:"link",to:"/"},"HOME"),n.a.createElement(j.a,{className:"link",to:"/about",activeStyle:{color:"red"}},"ABOUT"),n.a.createElement(j.a,{className:"link",to:"/contact",activeStyle:{color:"red"}},"CONTACT"),n.a.createElement(j.a,{className:"link",to:"/resume",activeStyle:{color:"red"}},"RESUME"))))}),q=Object(h.a)(),A=function(){return n.a.createElement("div",null,n.a.createElement(b.b,{history:q},n.a.createElement(_,null),n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/",component:T}),n.a.createElement(b.a,{exact:!0,path:"/about",component:f}),n.a.createElement(b.a,{exact:!0,path:"/contact",component:O}),n.a.createElement(b.a,{exact:!0,path:"/resume",component:S}))))},J=(t(97),t(98),function(){return n.a.createElement("section",{id:"contact",className:"paralax-mf footer-paralax bg-image sect-mt4 route"},n.a.createElement("div",{className:"overlay-mf"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"contact-mf"},n.a.createElement("div",{id:"contact",className:"box-shadow-full"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"title-box-2"},n.a.createElement("h5",{className:"title-left"},"Send A Message")),n.a.createElement("div",null,n.a.createElement("form",{action:"mailto:musadiq.soso@yahoo.ca",method:"POST",className:"contactForm"},n.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),n.a.createElement("div",{id:"errormessage"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 mb-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),n.a.createElement("div",{className:"validation"}))),n.a.createElement("div",{className:"col-md-12 mb-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),n.a.createElement("div",{className:"validation"}))),n.a.createElement("div",{className:"col-md-12 mb-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),n.a.createElement("div",{className:"validation"}))),n.a.createElement("div",{className:"col-md-12 mb-3"},n.a.createElement("div",{className:"form-group"},n.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),n.a.createElement("div",{className:"validation"}))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},n.a.createElement("h5",{className:"title-left"},"Get in Touch")),n.a.createElement("div",{className:"more-info"},n.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",n.a.createElement("br",null),"Simply fill the from and send me an email, also my social media links are attached below.")),n.a.createElement("div",{className:"socials"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/MusadiqSoso",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"ico-circle"},n.a.createElement("i",{className:"iconify","data-icon":"ion-social-github-outline"})))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/musadiq-soso/",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("span",{className:"ico-circle"},n.a.createElement("i",{className:"iconify","data-icon":"ion-logo-linkedin"}))))))))))))))}),O=function(){return n.a.createElement("div",null,n.a.createElement(s.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Contact | Musadiq Soso")),n.a.createElement(m.a,{className:"Contact-header"},n.a.createElement(N.a,{className:"Contact-main"},n.a.createElement(J,null))))};var C=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(A,null))};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(C,null)),document.getElementById("root"))},39:function(e,a,t){e.exports=t.p+"static/media/fbg2.f0e39a33.jpg"},44:function(e,a,t){e.exports=t.p+"static/media/male1.3ec3891b.png"},47:function(e,a,t){e.exports=t.p+"static/media/MusadiqFinal.160b1515.pdf"},49:function(e,a,t){e.exports=t.p+"static/media/bals.27ab047e.jpg"},52:function(e,a,t){e.exports=t(100)},57:function(e,a,t){},58:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},86:function(e,a){},87:function(e,a){},88:function(e,a){},89:function(e,a){},90:function(e,a){},91:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){},97:function(e,a,t){}},[[52,1,2]]]);
//# sourceMappingURL=main.7727fcd9.chunk.js.map