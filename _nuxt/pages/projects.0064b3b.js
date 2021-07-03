(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{348:function(t,e,o){var content=o(390);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("7c83107e",content,!0,{sourceMap:!1})},380:function(t,e,o){var map={"./2048.png":381,"./acecaddie.png":382,"./arm-emulator.png":383,"./caterpillar.png":384,"./institution.jpg":385,"./laptop.png":386,"./neuron.png":387,"./sortbot.png":388};function n(t){var e=r(t);return o(e)}function r(t){if(!o.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=r,t.exports=n,n.id=380},381:function(t,e,o){t.exports=o.p+"img/2048.7b97740.png"},382:function(t,e,o){t.exports=o.p+"img/acecaddie.7944cea.png"},383:function(t,e,o){t.exports=o.p+"img/arm-emulator.c370c49.png"},384:function(t,e,o){t.exports=o.p+"img/caterpillar.700eced.png"},385:function(t,e,o){t.exports=o.p+"img/institution.979c2dc.jpg"},386:function(t,e,o){t.exports=o.p+"img/laptop.1e30859.png"},387:function(t,e,o){t.exports=o.p+"img/neuron.a145563.png"},388:function(t,e,o){t.exports=o.p+"img/sortbot.c71c289.png"},389:function(t,e,o){"use strict";var n=o(348);o.n(n).a},390:function(t,e,o){(e=o(11)(!1)).push([t.i,".projects-iterator-container[data-v-7b71d962]{padding-left:20px;padding-right:20px}.project-img[data-v-7b71d962]{margin:auto;width:auto}.project-expand[data-v-7b71d962]:hover,.project-img[data-v-7b71d962]:hover,.project-title[data-v-7b71d962]:hover{cursor:pointer}.card-right[data-v-7b71d962]{float:right;margin-left:15px}.card-top[data-v-7b71d962]{float:top;margin-top:10px}.scroll[data-v-7b71d962]{overflow-y:auto}",""]),t.exports=e},421:function(t,e,o){"use strict";o.r(e);o(146);var n={name:"ProjectsPage",head:function(){return{title:"Projects",meta:[{hid:"description",name:"description",content:"Portfolifo of Sze Tyng Lee's projects"}]}},components:{OutlinedCard:function(){return Promise.resolve().then(o.bind(null,333))}},data:function(){return{projects:[{title:"Guardrails",description:"\t\t\t\t\tDesigned and built a multi-agent system simulator in F# to investigate the effects of having minimal \t\t\t\t\trecognition of rights to self-organise (i.e. guardrails) on the sustainability of electronic institutions. Using \t\t\t\t\tthe method of sociologically-inspired computing, these institutions are designed according to the \t\t\t\t\t<a href='https://en.wikipedia.org/wiki/Elinor_Ostrom#Design_principles_for_Common_Pool_Resource_(CPR)_institution' target='_blank'>principles</a> \t\t\t\t\tproposed by political economist, Elinor Ostrom.\t\t\t\t\t",url:"https://github.com/szetyng/Guardrails",links:[{url:"https://drive.google.com/open?id=1fzMeVbB9MzWxGHrpk6X85kNun_6NYvJ8OUVmduqiQtc",color:"grey darken-2",title:"Slides"}],imgSrc:"institution.jpg",expand:!1},{title:"CaterPillar",description:"\t\t\t\t\t\t  Developed a smart pill organiser to improve pill adherence and reduce medication errors among \t\t\t\t\t\t\tthe elderly. The CaterPillar system involves an electronic pillbox and Android applications for \t\t\t\t\t\t\ttablets and smartwatches. It learns to provide adaptive reminders based on data regarding the \t\t\t\t\t\t\tuser's daily routines.\t\t\t\t\t",url:"https://github.com/szetyng/CaterPillar",links:[{url:"https://youtu.be/Fv4SDEJEMSU",color:"grey darken-2",title:"Demo Video"}],imgSrc:"caterpillar.png",expand:!1},{title:"neuron",description:"\t\t\t\t\t  Collaborated with Microsoft to create an extension for Visual Studio Code, which has since been \t\t\t\t\t\t<a href='https://blogs.msdn.microsoft.com/pythonengineering/2018/11/08/data-science-with-python-in-visual-studio-code/?fbclid=IwAR3M5REwXMSCxgCCiqKez_cMJr4WVYYy1DA3UjjjnhpNGDluQiSo4GnhBk0' target='_blank'>incorporated into their Python extension</a> \t\t\t\t\t\tas part of their Data Science features. It combines the \t\t\t\t\t\trich experience of using the code editor with the interactive programming model of Jupyter notebook.\t\t\t\t\t",url:"https://github.com/neuron-team/vscode-ipe",links:[{url:"https://youtu.be/amuV0z9eVg4",color:"grey darken-2",title:"Demo Video"}],imgSrc:"neuron.png",expand:!1},{title:"Spam Detection",description:"\t\t\t\t\t\tApplied the theory learned in Introduction to Machine Learning to classify emails as either spam or ham.\t\t\t\t\t",url:"https://github.com/szetyng/machine-learning-spam",imgSrc:"laptop.png",expand:!1},{title:"ARM Emulator",description:"\t\t\t\t\t\tWrote and fully tested an ARM emulator in F#. The programme is able to parse and consecutively simulate a subset of the \t\t\t\t\t\tARM UAL instructions. Aimed to recreate <a href='https://salmanarif.bitbucket.io/visual/' target='_blank'>VisUAL</a>, \t\t\t\t\t\ta visual ARM emulator used in Introduction to Computer Architecture in Imperial College London as an aide in teaching the \t\t\t\t\t\tARM assembly language.\t\t\t\t\t",url:"https://github.com/szetyng/HLP5",imgSrc:"arm-emulator.png",expand:!1},{title:"AceCaddie",description:"\t\t\t\t\t\tUsed an accelerometer to build an IoT device that tracks golf scores automatically when it is \t\t\t\t\t\tattached to the golf club in use. The accompanying mobile app allows friends to compete against each other.\t\t\t\t\t",url:"https://github.com/szetyng/embedded",links:[{url:"https://dharshana1407.wixsite.com/acecaddie",color:"grey darken-2",title:"Website"}],imgSrc:"acecaddie.png",expand:!1},{title:"SortBot",description:"\t\t\t\t\t\tImplemented a classifier that uses machine vision to sort items into four different recycling categories \t\t\t\t\t\tfor a self-sorting recycling machine. Aims to encourage recyling on the Imperial College London campus by \t\t\t\t\t\tawarding points to users of the machine through an accompanying mobile app.\t\t\t\t\t",url:"https://github.com/szetyng/sortbot",links:[{url:"http://www.ee.ic.ac.uk/guo.liew15/yr2proj/default.htm",color:"grey darken-2",title:"Website"},{url:"https://szetyng.github.io/assets/videos/sortbot.mp4",color:"green darken-2",title:"App Demo"}],imgSrc:"sortbot.png",expand:!1},{title:"2048",description:"\t\t\t\t\t\tRecreated the popular 2048 game in C++.\t\t\t\t\t",url:"https://github.com/szetyng/2048",imgSrc:"2048.png",expand:!1}]}},methods:{displayProjectInfo:function(t){t.expand=!0;var e=this.projects.findIndex((function(p){return p.title===t.title}));this.projects[e]=t},closeProjectInfo:function(t){t.expand=!1;var e=this.projects.findIndex((function(p){return p.title===t.title}));this.projects[e]=t}},filters:{iconify:function(title){return"Website"===title?"mdi-open-in-app":"App Demo"===title||"Demo Video"===title?"mdi-video":"Slides"===title?"mdi-play-box-outline":void 0}}},r=(o(389),o(61)),c=o(91),l=o.n(c),d=o(151),m=o(138),h=o(117),f=o(324),v=o(331),y=o(417),x=o(339),_=o(137),k=o(115),j=o(327),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",md:"10",lg:"8"}},[n("OutlinedCard",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Projects")]},proxy:!0}])},[t._v(" "),[n("v-data-iterator",{staticClass:"projects-iterator-container",attrs:{items:t.projects,"hide-default-footer":""}},[[n("v-row",{attrs:{justify:"center"}},t._l(t.projects,(function(e){return n("v-col",{key:e.title,attrs:{cols:"12",sm:"12",md:"12",xl:"6"}},[n("v-card",{attrs:{outlined:"",flat:"","min-height":"300"}},[n("v-card",{staticClass:"scroll",attrs:{height:"250px",flat:""}},[e.expand?n("v-container",{attrs:{fluid:""}},[n("span",{staticClass:"card-right"},[n("v-btn",{attrs:{icon:""},on:{click:function(o){return t.closeProjectInfo(e)}}},[n("v-icon",{attrs:{color:"black"}},[t._v("mdi-close")])],1)],1),t._v(" "),n("v-card-text",[n("span",{domProps:{innerHTML:t._s(e.description)}})]),t._v(" "),n("v-card-actions",t._l(e.links,(function(link,i){return n("v-btn",{key:i,attrs:{text:"",outlined:"",color:link.color,href:link.url}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(link.title)+" \n\t\t\t\t\t\t\t\t\t\t\t\t\t"),n("v-icon",{attrs:{right:""}},[t._v(t._s(t._f("iconify")(link.title)))])],1)})),1)],1):n("v-img",{staticClass:"project-img",attrs:{src:o(380)("./"+e.imgSrc),height:"245px",contain:""},on:{click:function(o){return t.displayProjectInfo(e)}}})],1),t._v(" "),n("v-divider"),t._v(" "),n("span",{staticClass:"card-right card-top"},[n("v-btn",{attrs:{icon:""},on:{click:function(o){return t.displayProjectInfo(e)}}},[n("v-icon",{attrs:{color:"black"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\tmdi-dots-vertical\n\t\t\t\t\t\t\t\t\t\t\t")])],1)],1),t._v(" "),n("v-card-title",{staticClass:"project-title text-h5 font-weight-light",on:{click:function(o){return t.displayProjectInfo(e)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t\t\t\t\t\t")]),t._v(" "),n("v-card-actions",[n("v-btn",{attrs:{text:"",href:e.url,color:"deep-orange accent-4"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tGithub\n\t\t\t\t\t\t\t\t\t\t")])],1)],1)],1)})),1)]],2)]],2)],1)],1)],1)}),[],!1,null,"7b71d962",null);e.default=component.exports;l()(component,{OutlinedCard:o(333).default}),l()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VCardTitle:h.d,VCol:f.a,VContainer:v.a,VDataIterator:y.a,VDivider:x.a,VIcon:_.a,VImg:k.a,VRow:j.a})}}]);