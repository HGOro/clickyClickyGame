(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e){e.exports=[{id:1,image:"barney.png",selected:!1,name:"Barney"},{id:2,image:"comicbookguy.png",selected:!1,name:"Comic Book Guy"},{id:3,image:"frankgrimes.png",selected:!1,name:"Frank Grimes"},{id:4,image:"homer.png",selected:!1,name:"Homer"},{id:5,image:"frink.png",selected:!1,name:"Frink"},{id:6,image:"kent.png",selected:!1,name:"Kent"},{id:7,image:"lisa.png",selected:!1,name:"Lisa"},{id:8,image:"maggie.png",selected:!1,name:"Maggie"},{id:9,image:"marge.png",selected:!1,name:"Marge"},{id:10,image:"milhouse.png",selected:!1,name:"Milhouse"},{id:11,image:"moe.png",selected:!1,name:"Moe"},{id:12,image:"moleman.png",selected:!1,name:"Moleman"},{id:13,image:"nelson.png",selected:!1,name:"nelson"},{id:14,image:"radioactive.png",selected:!1,name:"Radioactive Man"},{id:15,image:"bart.png",selected:!1,name:"Bart"}]},27:function(e,t,a){e.exports=a(47)},33:function(e,t,a){},34:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),i=(a(33),a(17)),s=a(18),l=a(25),m=a(19),d=a(26),g=a(20),u=(a(34),a(52)),h=a(49),p=a(50),f=a(51),k=a(53),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).shuffle=function(){var e=a.state.characters.sort(function(){return.5-Math.random()});a.setState({characters:e})},a.handleCardClick=function(e,t){var n=e.target.parentElement;a.state.characters.forEach(function(e){if(e.id===t)if(!1===e.selected){e.selected=!0;var c=a.state.clickCount+1;a.setState({clickCount:c,clickScore:"correct",scoreAlert:"Woohoo!"}),c>a.state.highScore&&a.setState({highScore:c,bestScore:"correct",scoreAlert:"Cowabunga! New High Score!"})}else n.classList.add("wrong"),a.state.characters.forEach(function(e){e.selected=!1}),a.setState({clickCount:0,clickScore:"incorrect",scoreAlert:"Doh!"})}),setTimeout(function(){n.classList.remove("wrong"),a.shuffle(),a.setState({clickScore:"",bestScore:"",scoreAlert:""})},1e3)},a.state={characters:g,clickCount:0,highScore:0,scoreAlert:"",bestScore:"",clickScore:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){this.shuffle()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u.a,{className:"navbar",fixed:"top"},c.a.createElement(u.a.Brand,{href:"#home"},"Clicky Game"),c.a.createElement(u.a.Toggle,null),c.a.createElement(u.a.Collapse,{className:"justify-content-end"},c.a.createElement("p",{className:"alertMessage"},this.state.scoreAlert),c.a.createElement(u.a.Text,null,"Score: ",c.a.createElement("span",{className:this.state.clickScore},this.state.clickCount)),c.a.createElement(u.a.Text,null,c.a.createElement("span",null," \xa0 \xa0| \xa0 \xa0 ")),c.a.createElement(u.a.Text,null,"Top Score: ",c.a.createElement("span",{className:this.state.bestScore},this.state.highScore)))),c.a.createElement(h.a,{className:"jumbotron"},c.a.createElement("h1",{className:"text-center"},"Clicky Game!"),c.a.createElement("h4",{className:"text-center"},"Click on an image to earn points, but don't click on any more than once!")),c.a.createElement(p.a,null,c.a.createElement(f.a,null,this.state.characters.map(function(t){return c.a.createElement(k.a,{className:"char-card",key:t.id,onClick:function(a){return e.handleCardClick(a,t.id)}},c.a.createElement("img",{src:"/assets/img/".concat(t.image),alt:t.name,className:"character"}))}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.280f6cd7.chunk.js.map