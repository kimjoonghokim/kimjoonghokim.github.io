(this.webpackJsonptimebox=this.webpackJsonptimebox||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"tasks":[{"text":"Clean the living room","day":"","reminder":false,"id":1},{"text":"Finish my assignment","day":"","reminder":true,"id":2},{"text":"Email professor","day":"","reminder":true,"id":3},{"text":"Do the dishes","day":"","reminder":false,"id":4},{"text":"Grocery shopping","day":"","reminder":true,"id":5},{"text":"asda","day":"","reminder":false,"id":6},{"text":"testes","day":"","reminder":false,"id":7}]}')},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),s=n.n(c),a=n(13),o=n.n(a),i=(n(21),n(11)),u=n(15),d=n(5),l=n.n(d),j=n(7),h=n(4),b=n(6),f=n(2),x=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(r.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};x.defaultProps={color:"steelblue"};var p=x,O=function(e){var t=e.title,n=e.onAdd,c=e.showAdd,s=Object(f.e)();return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{children:t}),"/"===s.pathname&&Object(r.jsx)(p,{color:c?"red":"green",text:c?"X":"+",onClick:n})]})};O.defaultProps={title:"TimeBox!"};var m=O,g=function(){return Object(r.jsx)("footer",{children:Object(r.jsx)(b.b,{to:"/about",children:"About"})})},k=n(14),v=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(r.jsxs)("div",{className:"task ".concat(t.reminder&&"reminder"),onDoubleClick:function(){return c(t.id)},children:[Object(r.jsxs)("h3",{children:[t.text," ",Object(r.jsx)(k.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(r.jsx)("p",{children:t.day})]})},y=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(r.jsx)(r.Fragment,{children:t.map((function(e,t){return Object(r.jsx)(v,{task:e,onDelete:n,onToggle:c},t)}))})},T=function(e){var t=e.onAdd,n=Object(c.useState)(""),s=Object(h.a)(n,2),a=s[0],o=s[1],i=Object(c.useState)(""),u=Object(h.a)(i,2),d=u[0],l=u[1],j=Object(c.useState)(!1),b=Object(h.a)(j,2),f=b[0],x=b[1];return Object(r.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:d,reminder:f}),o(""),l(""),x(!1)):alert("Please add a task")},children:[Object(r.jsxs)("div",{className:"form-control",children:[Object(r.jsx)("label",{children:"Task"}),Object(r.jsx)("input",{type:"text",placeholder:"Add Task",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(r.jsxs)("div",{className:"form-control form-control-check",children:[Object(r.jsx)("label",{children:"Set Reminder"}),Object(r.jsx)("input",{type:"checkbox",checked:f,value:f,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(r.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},w=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:"Version 0.0.1"}),Object(r.jsx)("h4",{style:{color:"red"},children:"Please note that this is a work in progress! It is mostly incomplete!!"}),Object(r.jsx)("h1",{children:"\xa0"}),Object(r.jsx)("h5",{children:"The purpose of this app is to guide the user through the steps of:"}),Object(r.jsx)("h5",{style:{fontWeight:"normal"},children:'1. "Braindumping" a task list'}),Object(r.jsx)("h5",{style:{fontWeight:"normal"},children:"2. Picking the three priority tasks"}),Object(r.jsx)("h5",{style:{fontWeight:"normal"},children:"3. Organizing the tasks into a schedule"}),Object(r.jsx)("h5",{children:"So far, only the task tracker part of the design is implemented"}),Object(r.jsx)("h1",{children:"\xa0"}),Object(r.jsx)("h5",{children:"Please also note that this is designed for phone screens"}),Object(r.jsx)("h1",{children:"\xa0"}),Object(r.jsx)(b.b,{to:"/",children:"Go Back"})]})},S=n(10),C=function(){var e=Object(c.useState)(!1),t=Object(h.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),o=Object(h.a)(a,2),d=o[0],x=o[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,x(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S);case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,x([].concat(Object(u.a)(d),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(S,t,{method:"DELETE"});case 2:200===e.sent.status?x(d.filter((function(e){return e.id!==t}))):alert("Error Deleting This Task");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,r=Object(i.a)(Object(i.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return c=e.sent,e.next=9,c.json();case 9:s=e.sent,x(d.map((function(e){return e.id===t?Object(i.a)(Object(i.a)({},e),{},{reminder:s.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)(b.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(m,{onAdd:function(){return s(!n)},showAdd:n}),Object(r.jsxs)(f.c,{children:[Object(r.jsx)(f.a,{path:"/",element:Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)(T,{onAdd:k}),d.length>0?Object(r.jsx)(y,{tasks:d,onDelete:v,onToggle:C}):"No Tasks To Show"]})}),Object(r.jsx)(f.a,{path:"/about",element:Object(r.jsx)(w,{})})]}),Object(r.jsx)(g,{})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),N()}},[[23,1,2]]]);
//# sourceMappingURL=main.37d8672b.chunk.js.map