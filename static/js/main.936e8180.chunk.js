(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,a){e.exports=a(99)},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(35),r=a.n(s),c=(a(47),a(6)),o=a(7),m=a(13),l=a(8),u=a(14),d=(a(49),a(51),a(100)),g=a(101),p=a(102),h=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={githubico:"/assets/imgs/github.png",linkedinico:"/assets/imgs/linkedin.png",mediumico:"/assets/imgs/med.png",emailico:"/assets/imgs/email.png",resumeico:"/assets/imgs/resume.png"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement(g.a,{id:"about"},i.a.createElement(p.a,{xs:12,sm:12,md:6,align:"left",className:"img-wrap"},i.a.createElement("img",{src:"/assets/imgs/lena-edit-0.png",alt:"aboutphoto"})),i.a.createElement(p.a,{xs:12,sm:12,md:6,className:"bio"},i.a.createElement("h1",null,"About"),i.a.createElement("p",null,"Hey there! My name is Lena and i'm a full-stack web developer currently residing in the Bay Area [San Francisco]. Coming from a creative background i've always been passionate about pushing myself artistically, enjoying the many ranges and paths it can take to have someones ideas come to life - or even my own!"),i.a.createElement("div",{className:"connect"},i.a.createElement("a",{href:"https://github.com/Blonded",target:"_blank",title:"github"},i.a.createElement("img",{src:this.state.githubico,onMouseEnter:function(){e.setState({githubico:"/assets/imgs/github1.png"})},onMouseOut:function(){e.setState({githubico:"/assets/imgs/github.png"})}})),i.a.createElement("a",{href:"www.linkedin.com/in/lena-m-73b471161",target:"_blank",title:"linkedin"},i.a.createElement("img",{src:this.state.linkedinico,onMouseEnter:function(){e.setState({linkedinico:"/assets/imgs/linkedin1.png"})},onMouseOut:function(){e.setState({linkedinico:"/assets/imgs/linkedin.png"})}})),i.a.createElement("a",{href:"https://medium.com/@blonded",target:"_blank",title:"medium"},i.a.createElement("img",{src:this.state.mediumico,onMouseEnter:function(){e.setState({mediumico:"/assets/imgs/med1.png"})},onMouseOut:function(){e.setState({mediumico:"/assets/imgs/med.png"})}})),i.a.createElement("a",{href:"",target:"_blank",title:"email"},i.a.createElement("img",{src:this.state.emailico,onMouseEnter:function(){e.setState({emailico:"/assets/imgs/email1.png"})},onMouseOut:function(){e.setState({emailico:"/assets/imgs/email.png"})}})),i.a.createElement("a",{href:"",target:"_blank",title:"resume"},i.a.createElement("img",{src:this.state.resumeico,onMouseEnter:function(){e.setState({resumeico:"/assets/imgs/resume1.png"})},onMouseOut:function(){e.setState({resumeico:"/assets/imgs/resume.png"})}}))))))}}]),t}(n.Component),E=(a(87),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={recs:[{author:"jane doe",rec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare in augue mattis pretium. Lorem ipsum dolor si quis metus id ipsum interdum hendrerit ut in erat...",img:"jane.png"},{author:"jan doe",rec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare in augue mattis pretium. Lorem ipsum dolor si quis metus id ipsum interdum hendrerit ut in erat...",img:"jan.png"},{author:"jon doe",rec:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare in augue mattis pretium. Lorem ipsum dolor si quis metus id ipsum interdum hendrerit ut in erat...",img:"jon.png"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{id:"recommendations"},i.a.createElement(d.a,null,i.a.createElement(g.a,{align:"center"},this.state.recs.map(function(e,t){return i.a.createElement(p.a,{xs:12,sm:12,md:4,className:"clearfix rec rec".concat(t)},i.a.createElement(g.a,{className:"clearfix card"},i.a.createElement(p.a,{xs:12,sm:12,md:12,className:"clearfix card-top"}),i.a.createElement(p.a,{xs:12,sm:12,md:12,className:"clearfix card-btm"},i.a.createElement("img",{src:"/assets/imgs/".concat(e.img),alt:e.author}),i.a.createElement("p",null,i.a.createElement("span",null,'"'),e.rec,i.a.createElement("span",null,'"')),i.a.createElement("p",{className:"auth"},"- ",e.author),1===t?i.a.createElement("a",{href:"#",title:"linkedin recommendations",className:"btn"},"view recommendations"):"")))}))))}}]),t}(n.Component)),f=(a(89),function(){return i.a.createElement("h3",null,"Projects:")}),b=(a(91),function(){return i.a.createElement("h3",null,"Proficient in:",i.a.createElement("br",null),"HTML, CSS, Javascript, AJAX, Node, Handlebars, Linux/Unix, MySQL, MongoDB, Git, JSON, BootStrap, Material UI, Express, API, Heroku, Yarn, React, jQuery.")}),k=(a(93),function(){return i.a.createElement("div",{className:"hero"},i.a.createElement("div",{className:"logo-wrap"},i.a.createElement("img",{src:"/assets/imgs/wlogo.png",alt:"Logo"})))}),v=(a(95),function(){return i.a.createElement("footer",null,i.a.createElement("p",null," \xa9 Lena Martinson | 2019"))}),j=(a(97),function(){return i.a.createElement("div",{id:"spacer"})}),w=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(k,{id:"hero"}),i.a.createElement(h,{id:"about"}),i.a.createElement(j,{id:"spacer"}),i.a.createElement(f,{id:"projects"}),i.a.createElement(b,{id:"skills"}),i.a.createElement(E,{id:"recommendations"}),i.a.createElement(v,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,2,1]]]);
//# sourceMappingURL=main.936e8180.chunk.js.map