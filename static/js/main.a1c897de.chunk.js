(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a(269)},106:function(e,t,a){},107:function(e,t,a){},232:function(e,t,a){var n={"./001-chorizo.svg":233,"./002-ham.svg":234,"./003-steak.svg":235,"./004-pineapple.svg":236,"./005-cheese.svg":237,"./005-tomato.svg":238,"./006-garlic.svg":239,"./006-salami.svg":240,"./007-paprika.svg":241,"./007-pepperoni.svg":242,"./008-salmon.svg":243,"./chicken.svg":244,"./greenbeans.svg":245,"./paella-fuse-5741e40c5f9b58723db9a309.jpg":60,"./rabbit.svg":246,"./saffron.svg":247,"./whitebeans.svg":248};function i(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=232},233:function(e,t,a){e.exports=a.p+"static/media/001-chorizo.55a26bbf.svg"},234:function(e,t,a){e.exports=a.p+"static/media/002-ham.dbbc9190.svg"},235:function(e,t,a){e.exports=a.p+"static/media/003-steak.3ad39c0a.svg"},236:function(e,t,a){e.exports=a.p+"static/media/004-pineapple.f1d3407c.svg"},237:function(e,t,a){e.exports=a.p+"static/media/005-cheese.6eed5b62.svg"},238:function(e,t,a){e.exports=a.p+"static/media/005-tomato.ba199f9c.svg"},239:function(e,t,a){e.exports=a.p+"static/media/006-garlic.e1631c50.svg"},240:function(e,t,a){e.exports=a.p+"static/media/006-salami.c7a6c739.svg"},241:function(e,t,a){e.exports=a.p+"static/media/007-paprika.2fabbb63.svg"},242:function(e,t,a){e.exports=a.p+"static/media/007-pepperoni.813befdf.svg"},243:function(e,t,a){e.exports=a.p+"static/media/008-salmon.3d02a39d.svg"},244:function(e,t,a){e.exports=a.p+"static/media/chicken.39e3f956.svg"},245:function(e,t,a){e.exports=a.p+"static/media/greenbeans.c20d58d2.svg"},246:function(e,t,a){e.exports=a.p+"static/media/rabbit.cec7e754.svg"},247:function(e,t,a){e.exports=a.p+"static/media/saffron.0f747473.svg"},248:function(e,t,a){e.exports=a.p+"static/media/whitebeans.02884784.svg"},269:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),s=(a(106),a(10)),c=a(11),l=a(13),p=a(12),d=a(14),u=(a(107),a(22)),g=a(15),m=a(271),h=a(270),f=function(e){function t(e,a){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(p.a)(t).call(this,e,a))).handleReset=function(){return window.location.reload()},n.handleShow=n.handleShow.bind(Object(g.a)(n)),n.handleClose=n.handleClose.bind(Object(g.a)(n)),n.state={show:!0},n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,Object.assign({},this.props,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),i.a.createElement(h.a.Title,{id:"contained-modal-title-vcenter"},i.a.createElement("h1",null,"What are you doing!")),i.a.createElement(h.a.Body,null,i.a.createElement("p",null,i.a.createElement("h1",null,"Thats not paella!! thats just rice with things."))),i.a.createElement(h.a.Footer,null,i.a.createElement(m.a,{variant:"primary",onClick:this.handleReset},"Start again!"))))}}]),t}(n.Component),v=["Rabbit","Tomato","Garlic","Paprika","Chicken","Green beans","Saffron","White beans"],b={beginDrag:function(e,t,a){return{name:e.name,id:e.id}},endDrag:function(e,t,a){t.didDrop()&&(e.handleDrop(e.name),-1===v.indexOf(e.name)&&o.a.render(i.a.createElement(f,{show:"true"}),document.querySelector("#modal")).forceUpdate())}};var w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isDragging,n=e.connectDragSource,r=e.name,o=e.id,s=e.path,c={backgroundColor:"#005a5b",height:"225px",width:"100%",display:"grid",gridTemplateRows:"50% 50%",border:"solid 10px #003840",borderRadius:"50px",cursor:"move",opacity:t?"0":"1",textAlign:"center"};return n(i.a.createElement("div",{key:o,style:c},i.a.createElement("h1",{style:x},r),i.a.createElement("img",{style:k,src:a(232)("./".concat(s)),alt:r})))}}]),t}(n.Component),x={padding:"10%"},k={maxHeight:"100%",width:"100%",gridRow:"1 / span 1"},O=Object(u.DragSource)("food",b,function(e,t){return{connectDragSource:e.dragSource(),isDragging:t.isDragging()}})(w),j=[{id:0,name:"Tomato",path:"005-tomato.svg"},{id:1,name:"Garlic",path:"006-garlic.svg"},{id:2,name:"Paprika",path:"007-paprika.svg"},{id:3,name:"Chicken",path:"chicken.svg"},{id:4,name:"Green beans",path:"greenbeans.svg"},{id:5,name:"Rabbit",path:"rabbit.svg"},{id:6,name:"Saffron",path:"saffron.svg"},{id:7,name:"White beans",path:"whitebeans.svg"},{id:8,name:"Chorizo",path:"001-chorizo.svg"},{id:9,name:"Ham",path:"002-ham.svg"},{id:10,name:"Steak",path:"003-steak.svg"},{id:11,name:"Pineapple",path:"004-pineapple.svg"},{id:12,name:"Cheese",path:"005-cheese.svg"},{id:13,name:"Salami",path:"006-salami.svg"},{id:14,name:"Pepperoni",path:"007-pepperoni.svg"},{id:15,name:"Salmon",path:"008-salmon.svg"}],y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).state={flavourText:"Add Things Until You Ruin The Paella",ingredients:j.map(function(e){return i.a.createElement(O,{id:e.id,handleDrop:function(e){return a.state.deleteItem(e)},key:e.id,name:e.name,path:e.path})}),deleteItem:function(e){a.setState(function(t){var a,n=["well done","now it's cooking","keep going it smells great","wow its going to be delicious"],i=n.length,r=t.ingredients;t.flavourText;return{ingredients:r=r.filter(function(t){return t.props.name!==e}),flavourText:n[(a=i,Math.floor(Math.random()*Math.floor(a)))]}})}},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:E},i.a.createElement("h1",null,this.state.flavourText)),i.a.createElement("ul",{style:C},this.state.ingredients))}}]),t}(n.Component),E={gridRow:"2/ span 1",gridColumn:"2 / span 1",textAlign:"center",lineHeight:"0.5"},C={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr)",gridTemplateRows:"repeat(auto-fill, 1fr",gridRowGap:"0.5%",gridColumnGap:"0.5%",overflow:"hidden",overflowY:"scroll",border:"solid 10px #003840",gridRow:"3/ span 1",gridColumn:"2 / span 1",backgroundColor:"#008c72"},T=y,S=a(60),D=a.n(S);var R=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return(0,this.props.connectDropTarget)(i.a.createElement("div",{style:z}))}}]),t}(n.Component),z={backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url('".concat(D.a,"')"),boxShadow:"inset 10px 10px 0px 0px #005840",border:"solid 10px #003840",borderRadius:"100%",gridColumn:"2 / span 1",gridRow:"1 / span 1"},G=Object(u.DropTarget)("food",{},function(e,t){return{connectDropTarget:e.dropTarget()}})(R),P=a(99),A=a.n(P),F=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:I,className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Indie+Flower",rel:"stylesheet"})),i.a.createElement(T,null),i.a.createElement(G,null))}}]),t}(n.Component),I={display:"grid",gridTemplateColumns:"10vw 80vw 10vw",gridTemplateRows:"40vh 5vh 55vh"},W=Object(u.DragDropContext)(A.a)(F);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,a){e.exports=a.p+"static/media/paella-fuse-5741e40c5f9b58723db9a309.8ccc060a.jpg"}},[[101,1,2]]]);
//# sourceMappingURL=main.a1c897de.chunk.js.map