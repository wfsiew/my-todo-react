(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(t,e,n){t.exports=n(30)},29:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(11),i=n.n(r),c=n(7),d=n(3),l=n(10),s=n(19),u={ADD_TODO:"ADD_TODO",TOGGLE_TODO:"TOGGLE_TODO",DELETE_TODO:"DELETE_TODO",SET_EDIT:"SET_EDIT",CANCEL_EDIT:"CANCEL_EDIT",UPDATE_TODO:"UPDATE_TODO"};function m(t,e){e&&localStorage.setItem("lastid",e.toString()),localStorage.setItem("todos",JSON.stringify(t))}var p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){var t=localStorage.getItem("todos");return t?JSON.parse(t):[]}(),e=arguments.length>1?arguments[1]:void 0;if(e.type===u.ADD_TODO){var n=[].concat(Object(s.a)(t),[{id:e.id,text:e.text,completed:!1,isEdit:!1,editText:e.text}]);return m(n,e.id),n}if(e.type===u.TOGGLE_TODO){var o=t.map(function(t){return t.id===e.id?Object(l.a)({},t,{completed:!t.completed}):t});return m(o),o}if(e.type===u.DELETE_TODO){var a=t.filter(function(t){return t.id!==e.id});return m(a),a}if(e.type===u.SET_EDIT){var r=t.map(function(t){return t.id===e.id?Object(l.a)({},t,{isEdit:e.isEdit}):t});return m(r),r}if(e.type===u.CANCEL_EDIT){var i=t.map(function(t){return t.id===e.id?Object(l.a)({},t,{isEdit:e.isEdit}):t});return m(i),i}if(e.type===u.UPDATE_TODO){var c=t.map(function(t){return t.id===e.id?Object(l.a)({},t,{isEdit:e.isEdit,text:e.text,editText:e.text}):t});return m(c),c}return t},E=Object(d.b)({todos:p}),T=(n(29),n(12)),f=n(4),O=n(5),h=n(8),b=n(6),v=n(9),D=0;var g=function(t){function e(t){var n;return Object(f.a)(this,e),(n=Object(h.a)(this,Object(b.a)(e).call(this,t))).handleChange=function(t){n.setState(Object(T.a)({},t.target.id,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.state.todo.trim()&&(n.props.addTodo(n.state.todo),n.setState({todo:""}))},n.state={todo:""},n}return Object(v.a)(e,t),Object(O.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"mt-2"},a.a.createElement("form",{onSubmit:this.handleSubmit},a.a.createElement("div",{className:"form-group row"},a.a.createElement("div",{className:"col-md-12 input-group"},a.a.createElement("input",{type:"text",id:"todo",name:"todo",value:this.state.todo,onChange:this.handleChange,placeholder:"Type in a new todo...",className:"form-control"}),a.a.createElement("div",{className:"input-group-append"},a.a.createElement("button",{type:"submit",disabled:""===this.state.todo,className:"btn btn-primary"},"Add Todo"))))))}}]),e}(o.Component),y=Object(c.b)(null,function(t){return{addTodo:function(e){return t((n=e,{type:u.ADD_TODO,id:(localStorage.getItem("lastid")||(D=0),++D),text:n}));var n}}})(g),x=function(t){function e(t){var n;return Object(f.a)(this,e),(n=Object(h.a)(this,Object(b.a)(e).call(this,t))).handleChange=function(t){n.setState({text:t.target.value})},n.handleKeyPress=function(t){"Enter"===t.key&&n.saveTodo()},n.deleteTodo=function(t){t.stopPropagation(),n.props.deleteTodo()},n.editTodo=function(t){t.stopPropagation(),n.props.editTodo()},n.saveTodo=function(){n.state.text.trim()&&(n.props.updateTodo(n.state.text),n.props.cancelEditTodo())},n.cancelEditTodo=function(){n.setState({text:n.props.text}),n.props.cancelEditTodo()},n.state={text:n.props.text},n}return Object(v.a)(e,t),Object(O.a)(e,[{key:"render",value:function(){var t=this.props,e=t.toggleComplete,n=t.isEdit,o=t.completed,r=t.text;return a.a.createElement("li",{className:"list-group-item"},!n&&a.a.createElement("div",{onClick:e,style:{textDecoration:o?"line-through":"none"}},a.a.createElement("div",{className:"mr-2 d-inline"},r),a.a.createElement("div",{className:"float-right"},a.a.createElement("button",{onClick:this.deleteTodo,className:"btn btn-danger mr-2"},"Delete"),a.a.createElement("button",{onClick:this.editTodo,className:"btn btn-success"},"Edit"))),n&&a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col-sm-6"},a.a.createElement("input",{type:"text",value:this.state.text,onChange:this.handleChange,onKeyPress:this.handleKeyPress,placeholder:"title",className:"form-control"})),a.a.createElement("div",{className:"col-sm-4"},a.a.createElement("button",{onClick:this.saveTodo,disabled:""===this.state.text,className:"btn btn-success mr-2"},"Save"),a.a.createElement("button",{onClick:this.cancelEditTodo,className:"btn btn-secondary"},"Cancel"))))}}]),e}(o.Component),C=function(t){function e(){return Object(f.a)(this,e),Object(h.a)(this,Object(b.a)(e).apply(this,arguments))}return Object(v.a)(e,t),Object(O.a)(e,[{key:"render",value:function(){var t=this.props,e=t.todos,n=t.toggleComplete,o=t.deleteTodo,r=t.editTodo,i=t.updateTodo,c=t.cancelEditTodo;return e.length?a.a.createElement("ul",{className:"list-group"},e.map(function(t){return a.a.createElement(x,{key:t.id,text:t.text,editText:t.editText,isEdit:t.isEdit,completed:t.completed,toggleComplete:function(){return n(t.id)},deleteTodo:function(){return o(t.id)},editTodo:function(){return r(t.id)},updateTodo:function(e){return i(t.id,e)},cancelEditTodo:function(){return c(t.id)}})})):a.a.createElement("div",{className:"alert alert-info"},a.a.createElement("div",{className:"text-center"},"Your TO-DO is Empty"))}}]),e}(o.Component);var N=Object(c.b)(function(t){return{todos:(e=t.todos,e)};var e},function(t){return{toggleComplete:function(e){return t(function(t){return{type:u.TOGGLE_TODO,id:t}}(e))},deleteTodo:function(e){return t(function(t){return{type:u.DELETE_TODO,id:t}}(e))},editTodo:function(e){return t(function(t){return{type:u.SET_EDIT,id:t,isEdit:!0}}(e))},updateTodo:function(e,n){return t(function(t,e){return{type:u.UPDATE_TODO,id:t,isEdit:!1,text:e}}(e,n))},cancelEditTodo:function(e){return t(function(t){return{type:u.CANCEL_EDIT,id:t,isEdit:!1}}(e))}}})(C);var j=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"text-center mt-2"},"To-Do App"),a.a.createElement(y,null),a.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=Object(d.c)(E);i.a.render(a.a.createElement(c.a,{store:_},a.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.c83b50e7.chunk.js.map