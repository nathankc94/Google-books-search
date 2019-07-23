(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(209)},136:function(e,t,a){},209:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(107),o=a.n(r),c=a(212),m=a(214),i=a(213);var u=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("h2",{className:"text-white"},"Google Book Search")),l.a.createElement("div",null,l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{id:"home"},l.a.createElement("a",{className:"nav-link",href:"/"},l.a.createElement("button",{className:"btn btn-info text-white",type:"button"},"Search Books"))),l.a.createElement("li",{id:"savedBooks"},l.a.createElement("a",{className:"nav-link",href:"/saved"},l.a.createElement("button",{className:"btn btn-info text-white",type:"button"},"Saved Books"))))))},s=a(108),h=a(109),E=a(112),d=a(110),b=a(113),f=a(24),p=a.n(f),v={getGoogleSearchBooks:function(e){return p.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},getBooks:function(){return p.a.get("/api/books")},getBook:function(e){return p.a.get("/api/books/"+e)},saveBook:function(e){return p.a.post("/api/books",e)},deleteBook:function(e){return p.a.delete("/api/books/"+e)}};var k=function(e){var t=e.children;return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};function g(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function w(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function N(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var B=function(e){return l.a.createElement(g,null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:""},l.a.createElement("h3",null,"Search For Book")),l.a.createElement("br",null),l.a.createElement("input",{className:"col-12 form-control",value:e.search,type:"text",name:"searchBook",placeholder:"Enter Book's Name",onChange:e.handleInputChange})),l.a.createElement("button",{type:"submit",className:"btn btn-info text-white",onClick:e.handleFormSubmit},"Submit")))},S=(a(136),a(137),{color:"black"}),x=function(e){return l.a.createElement(g,null,l.a.createElement("div",null,l.a.createElement("h2",null,"Book Results"),l.a.createElement("br",null),e.books.map(function(e){return l.a.createElement(g,{key:e.id},l.a.createElement(w,null,l.a.createElement(N,{size:"xs-4 sm-2"},l.a.createElement("img",{src:e.image})),l.a.createElement(N,{size:"xs-8 sm-9"},l.a.createElement("h3",null,e.title),l.a.createElement("h5",null,e.author),l.a.createElement("p",null,e.description),l.a.createElement("button",null,l.a.createElement("a",{href:e.link,target:"_blank",style:S},"View Book ")))),l.a.createElement("br",null))})))},y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={search:"",books:[]},a.handleInputChange=function(e){a.setState({search:e.target.value})},a.handleFormSubmit=function(e){e.preventDefault(),v.getGoogleSearchBooks(a.state.search).then(function(e){var t=e.data.items;t=t.map(function(e){return e={id:e.id,title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.volumeInfo.infoLink},console.log(e),e}),a.setState({books:t})}).catch(function(e){return console.error(e)})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(g,null,l.a.createElement(k,null,l.a.createElement("h1",null,"Search for books down below.")),l.a.createElement(B,{handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),l.a.createElement("br",null),l.a.createElement(x,{books:this.state.books}))}}]),t}(n.Component),I=a(65),j=a.n(I);var C=function(){return l.a.createElement(g,{fluid:!0},l.a.createElement(w,null,l.a.createElement(N,{size:"md-12"},l.a.createElement(k,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var F=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(u,null),l.a.createElement(m.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:y}),l.a.createElement(i.a,{exact:!0,path:"/saved",component:j.a}),l.a.createElement(i.a,{exact:!0,path:"/saved/:id",component:j.a}),l.a.createElement(i.a,{component:C}))))};o.a.render(l.a.createElement(F,null),document.getElementById("root"))},65:function(e,t){}},[[114,1,2]]]);
//# sourceMappingURL=main.d2b8ebd3.chunk.js.map