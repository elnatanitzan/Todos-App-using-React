(this["webpackJsonpTodos-App-using-React"]=this["webpackJsonpTodos-App-using-React"]||[]).push([[0],{14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var o=a(1),n=a.n(o),s=a(9),i=a.n(s),l=a(6),d=a(7),c=a(2),r=a(3),u=a(5),h=a(4),j=(a(14),a(0)),p=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={full_display:!1},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this,e=this.props.todos.map((function(e){return Object(j.jsxs)("div",{className:"todo",todo:e,children:[Object(j.jsx)("i",{className:"fas fa-clipboard-check","data-text":"Mark as Done!",onClick:function(){return t.props.deleteTodo(e.id)}}),Object(j.jsx)("h4",{children:e.title}),Object(j.jsxs)("div",{className:"note-container",children:[Object(j.jsx)("p",{className:!1===e.full_display?"note less":"note more",children:e.text}),e.text.length>30&&Object(j.jsx)("button",{onClick:function(){return t.props.expandTodo(e.id)},className:"display-button",children:!1===e.full_display?"Expand":"Close"})]}),Object(j.jsxs)("p",{className:"date",children:[e.date," | ",e.time]})]},e.id)}));return Object(j.jsx)("div",{className:"todos",children:e})}}]),a}(o.Component),b=p,f=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={show_input:!1,new_todo:{title:null,text:null,date:null,time:null,done:!1,full_display:!1}},t.handleChange=function(e){var a=Object(l.a)({},t.state.new_todo);a[e.target.id]=e.target.value,t.setState({new_todo:a})},t.handleSubmit=function(e){t.setState({show_input:!t.state.show_input}),e.preventDefault(),t.props.addTodo(t.state.new_todo);t.setState({new_todo:{title:null,text:null,date:null,done:!1}}),e.target.reset()},t}return Object(r.a)(a,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{children:[!1===this.state.show_input&&Object(j.jsx)("i",{className:"fas fa-plus-circle",onClick:function(){return t.setState({show_input:!t.state.show_input})}}),!0===this.state.show_input&&Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:"form-class",onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:"title"}),Object(j.jsx)("input",{type:"text",id:"title",maxLength:"19",placeholder:"Title..."}),Object(j.jsx)("label",{htmlFor:"text"}),Object(j.jsx)("input",{className:"note",type:"text",id:"text",maxLength:"300",required:!0,placeholder:"task..."}),Object(j.jsx)("button",{className:"fas fa-plus-circle"})]})})]})}}]),a}(o.Component),m=f,O=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),s=0;s<o;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).state={todos:[{full_display:!1,id:Math.random().toString(36).substr(2,9),title:"*EXAMPLE* - Learn React",text:"Learn React all the morning",date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString(),done:!1},{full_display:!1,id:Math.random().toString(36).substr(2,9),title:"*EXAMPLE* - By food",text:"by food in market",date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString(),done:!1},{full_display:!1,id:Math.random().toString(36).substr(2,9),title:"*EXAMPLE* - Pray to God!",text:"go to fild todo Hidbodedut",date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString(),done:!1}]},t.addTodo=function(e){var a=Object(d.a)(t.state.todos);a.unshift(Object(l.a)(Object(l.a)({},e),{},{id:Math.random().toString(36).substr(2,9),date:(new Date).toLocaleDateString(),time:(new Date).toLocaleTimeString()})),t.setState({todos:a})},t.deleteTodo=function(e){var a=t.state.todos.filter((function(t){return t.id!==e}));t.setState({todos:a})},t.expandTodo=function(e){var a=Object(d.a)(t.state.todos),o=a.find((function(t){return t.id===e}));o.full_display=!o.full_display,t.setState({todos:a})},t}return Object(r.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("todos")&&this.setState({todos:Object(d.a)(JSON.parse(localStorage.getItem("todos")))})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todos",JSON.stringify(this.state.todos))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h1",{children:"Todos-list"}),Object(j.jsx)(m,{addTodo:this.addTodo})]}),Object(j.jsx)("div",{className:"main",children:Object(j.jsx)(b,{todos:this.state.todos,deleteTodo:this.deleteTodo,expandTodo:this.expandTodo})})]})}}]),a}(o.Component),x=O;i.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.a44de7bc.chunk.js.map