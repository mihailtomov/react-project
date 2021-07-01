(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},104:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},205:function(e,t,c){},206:function(e,t,c){},207:function(e,t,c){},208:function(e,t,c){},209:function(e,t,c){},210:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(83),s=c.n(a),i=c(3),o=c(2),l=(c(93),c(94),c(0)),j=function(){return Object(l.jsxs)("aside",{className:"aside-menu",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"../../logo192.png",alt:""})}),Object(l.jsxs)("nav",{children:[Object(l.jsx)(i.b,{to:"/categories/home",children:"Home"}),Object(l.jsx)(i.b,{to:"/categories/music",children:"Music"}),Object(l.jsx)(i.b,{to:"/categories/gaming",children:"Gaming"}),Object(l.jsx)(i.b,{to:"/categories/other",children:"Other"})]})]})},u=c(4),b=c(5),d=c(9),h=c(11),m=(c(100),function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return this.props.loggedIn?Object(l.jsx)("header",{className:"site-header",children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/article/create",children:"Create Article"})}),Object(l.jsx)("li",{children:Object(l.jsxs)("span",{children:["Welcome, ",Object(l.jsx)(i.b,{to:"/profile",children:this.props.username}),"!"]})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/logout",children:"Logout"})})]})})}):Object(l.jsx)("header",{className:"site-header",children:Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/login",children:"Login"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/register",children:"Register"})})]})})})}}]),c}(n.Component)),O=(c(101),c(7)),g=(c(102),function(e){var t=e.title,c=e.content,n=e._id;return Object(l.jsxs)("article",{className:"home-article",children:[Object(l.jsx)("h3",{children:Object(l.jsx)(i.b,{to:"/article/details/".concat(n),children:t})}),Object(l.jsxs)("p",{className:"description",children:[c.slice(0,150),"\u2026",Object(l.jsx)(i.b,{className:"read-more",to:"/article/details/".concat(n),children:"read more"})]})]})}),x=(c(103),function(e){var t=e.message;return Object(l.jsx)("div",{className:"error-message",children:Object(l.jsx)("span",{children:t})})}),f=(c(104),function(e){var t=e.message;return Object(l.jsx)("div",{className:"success-message",children:Object(l.jsx)("span",{children:t})})}),p=function(e){var t=e.articles,c=e.category,n=e.onSubmitError,r=e.onSucessMessage;return Object(l.jsxs)("section",{children:[n.message.length>0&&Object(l.jsx)(x,{message:n.message}),"logged in"===r.type&&Object(l.jsx)(f,{message:"Login successful!"}),"article created"===r.type&&Object(l.jsx)(f,{message:"Article created!"}),"article deleted"===r.type&&Object(l.jsx)(f,{message:"Article deleted!"}),"home"===c?Object(l.jsx)("h2",{children:"Latest articles"}):Object(l.jsx)("h2",{children:c.charAt(0).toUpperCase()+c.slice(1)}),t.map((function(e){return Object(l.jsx)(g,{title:e.title,content:e.content,author:e.author,date:e.date,_id:e._id},e._id)}))]})},v=r.a.createContext(),S="http://localhost:5000/api/articles",y=function(e,t){var c=localStorage.auth;return{method:e,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify(t)}},w={create:function(e){return fetch(S,y("POST",e)).then((function(e){return e.json()}))},getAll:function(e){return fetch("".concat(S,"/category/").concat(e)).then((function(e){return e.json()}))},getOne:function(e){return fetch("".concat(S,"/").concat(e)).then((function(e){return e.json()}))},postComment:function(e){return fetch("".concat(S,"/comments"),y("POST",e)).then((function(e){return e.json()}))},update:function(e,t){return fetch("".concat(S,"/").concat(e,"/edit"),y("PATCH",t)).then((function(e){return e.json()}))},remove:function(e){return fetch("".concat(S,"/").concat(e,"/delete"),y("DELETE",{})).then((function(e){return e.json()}))}},U=function(e,t){e(t),setTimeout((function(){e({message:""})}),3e3)},C=function(e,t){return setTimeout((function(){e({state:!1,type:""})}),t)},N=function(e){var t=e.match,c=e.location,r=Object(n.useContext)(v).loggedInStateHandler,a=Object(n.useState)([]),s=Object(o.a)(a,2),i=s[0],j=s[1],u=Object(n.useState)("home"),b=Object(o.a)(u,2),d=b[0],h=b[1],m=Object(n.useState)({message:""}),O=Object(o.a)(m,2),g=O[0],x=O[1],f=Object(n.useState)({state:!!c.message&&c.message.state,type:c.message?c.message.type:""}),S=Object(o.a)(f,2),y=S[0],N=S[1];return Object(n.useEffect)((function(){if(localStorage.auth&&r(),Math.random()>.7)throw new Error("Error throw from Home Component");var e=C(N,3e3);return function(){return clearTimeout(e)}}),[]),Object(n.useEffect)((function(){w.getAll(d).then((function(e){if(e.err)throw e.err;j(e.articles)})).catch((function(e){return U(x,e)}))}),[d]),Object(n.useEffect)((function(){t.params.category!==d&&h(t.params.category)})),i.length>0?Object(l.jsx)(p,{articles:i,category:d,onSubmitError:g,onSucessMessage:y}):Object(l.jsx)("p",{children:"There are no articles in this section. Be the first to create one!"})},I=c(13),T=c(8),E="http://localhost:5000/api/auth",P={register:"".concat(E,"/register"),login:"".concat(E,"/login"),validateToken:"".concat(E,"/validate-token")},q=function(e){return{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}},k={register:function(e){var t=e.username,c=e.password;return fetch(P.register,q({username:t,password:c})).then((function(e){return e.json()}))},login:function(e){var t=e.username,c=e.password;return fetch(P.login,q({username:t,password:c})).then((function(e){return e.json()}))},validateToken:function(e){return fetch(P.validateToken,{method:"GET",headers:{Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()}))}},_=c(18),L=c(46),A=function(e){var t=e.label,c=Object(L.a)(e,["label"]),n=Object(I.c)(c),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:c.id||c.name,children:t}),Object(l.jsx)("input",Object(_.a)(Object(_.a)({},a),c)),s.touched&&s.error?Object(l.jsx)("div",{style:{color:"red"},children:s.error}):null]})},H=function(e){var t=e.label,c=Object(L.a)(e,["label"]),n=Object(I.c)(c),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{htmlFor:c.id||c.name,children:t}),Object(l.jsx)("textarea",Object(_.a)(Object(_.a)({},a),c)),s.touched&&s.error?Object(l.jsx)("div",{style:{color:"red"},children:s.error}):null]})},F=function(e){var t=e.label,c=Object(L.a)(e,["label"]),n=Object(I.c)(c),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:c.id||c.name,children:t}),Object(l.jsx)("select",Object(_.a)(Object(_.a)({},a),c)),s.touched&&s.error?Object(l.jsx)("div",{style:{color:"red"},children:s.error}):null]})},R=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)({message:""}),s=Object(o.a)(a,2),i=s[0],j=s[1];return c?Object(l.jsx)(O.a,{to:{pathname:"/login",message:{state:!0,type:"registered"}}}):Object(l.jsx)(I.b,{initialValues:{username:"",password:"",repeatPassword:""},validationSchema:T.a({username:T.b().required("Username is required!").min(4,"Username needs to be at least 4 characters long!"),password:T.b().required("Password is required!").min(6,"Password needs to be at least 6 characters long!"),repeatPassword:T.b().required("Repeat Password is required!").test("passwords-match","Passwords should match!",(function(e){return this.parent.password===e}))}),onSubmit:function(e){k.register(e).then((function(e){if(e.err)throw e.err;r(!0)})).catch((function(e){return U(j,e)}))},children:Object(l.jsxs)("section",{children:[i.message.length>0?Object(l.jsx)(x,{message:i.message}):null,Object(l.jsx)("h2",{children:"Register"}),Object(l.jsx)("div",{children:Object(l.jsxs)(I.a,{children:[Object(l.jsx)(A,{label:"Username:",name:"username",type:"text"}),Object(l.jsx)(A,{label:"Password:",name:"password",type:"password"}),Object(l.jsx)(A,{label:"Repeat Password:",name:"repeatPassword",type:"password"}),Object(l.jsx)("input",{type:"submit",value:"Register"})]})})]})})},D=function(e){var t=e.location,c=Object(n.useState)(!1),r=Object(o.a)(c,2),a=r[0],s=r[1],i=Object(n.useState)({message:""}),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(n.useState)({state:!!t.message&&t.message.state,type:t.message?t.message.type:""}),h=Object(o.a)(d,2),m=h[0],g=h[1];return Object(n.useEffect)((function(){var e=C(g,3e3);return function(){return clearTimeout(e)}}),[]),a?Object(l.jsx)(O.a,{to:{pathname:"/categories/home",message:{state:!0,type:"logged in"}}}):Object(l.jsx)(I.b,{initialValues:{username:"",password:""},validationSchema:T.a({username:T.b().required("Username is required!"),password:T.b().required("Password is required!")}),onSubmit:function(e){k.login(e).then((function(e){if(e.err)throw e.err;localStorage.setItem("user",e.username),localStorage.setItem("auth",e.token),setTimeout((function(){s(!0)}),20)})).catch((function(e){return U(b,e)}))},children:Object(l.jsxs)("section",{children:[u.message.length>0&&Object(l.jsx)(x,{message:u.message}),m.state&&Object(l.jsx)(f,{message:"Successfully registered!"}),Object(l.jsx)("h2",{children:"Login"}),Object(l.jsx)("div",{children:Object(l.jsxs)(I.a,{children:[Object(l.jsx)(A,{label:"Username:",name:"username",type:"text"}),Object(l.jsx)(A,{label:"Password:",name:"password",type:"password"}),Object(l.jsx)("input",{type:"submit",value:"Login"})]})})]})})},M=function(){return Object(l.jsx)("section",{children:Object(l.jsx)("h2",{children:"Whoops.. There is nothing here!"})})},B=function(){var e=Object(n.useContext)(v).loggedOutStateHandler;return localStorage.clear(),setTimeout((function(){e()}),20),Object(l.jsx)(O.a,{to:"/login"})},J=(c(203),c(204),[{value:"music",label:"Music"},{value:"gaming",label:"Gaming"},{value:"other",label:"Other"}]),V=function(){return Object(l.jsxs)(I.a,{className:"article-form",children:[Object(l.jsx)(A,{label:"Title:",name:"title",type:"text",placeholder:"Title.."}),Object(l.jsx)(H,{label:"Content:",name:"content",placeholder:"Description.."}),Object(l.jsx)(F,{label:"Category:",name:"category",children:J.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.label},e.value)}))}),Object(l.jsx)(A,{label:"Image URL (optional):",name:"imageUrl",type:"text",placeholder:"http://"}),Object(l.jsx)(A,{label:"Youtube URL (optional):",name:"youtubeUrl",type:"text",placeholder:"https://"}),Object(l.jsx)("input",{type:"submit",value:"Submit"})]})},z=function(){var e=Object(n.useState)({message:""}),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useContext)(v).loggedInStateHandler,s=Object(O.g)();return Object(n.useEffect)((function(){localStorage.auth&&a()}),[]),Object(l.jsx)(I.b,{initialValues:{title:"",content:"",category:"all",imageUrl:"",youtubeUrl:"",author:localStorage.user},validationSchema:T.a({title:T.b().required("Title is required!"),content:T.b().required("Content is required!"),imageUrl:T.b().url("Invalid URL!"),youtubeUrl:T.b().url("Invalid URL!")}),onSubmit:function(e){w.create(e).then((function(e){if(e.err)throw e.err;s.push({pathname:"/categories/home",message:{state:!0,type:"article created"}})})).catch((function(e){return U(r,e)}))},children:Object(l.jsxs)("section",{className:"create-article",children:[c.message.length>0&&Object(l.jsx)(x,{message:c.message}),Object(l.jsx)("h2",{children:"Create new article"}),Object(l.jsx)("div",{children:Object(l.jsx)(V,{})})]})})},G=(c(205),function(e){var t=e._id,c=e.title,n=e.imageUrl,r=e.youtubeUrl,a=e.content,s=e.author,o=e.date,j=n||r?"300px":"0px";return Object(l.jsxs)("article",{children:[Object(l.jsx)("h3",{children:c}),localStorage.user===s&&Object(l.jsxs)("div",{className:"user-control",children:[Object(l.jsx)(i.b,{className:"user-btn",to:"/article/edit/".concat(t),children:"[Edit]"}),Object(l.jsx)(i.b,{className:"user-btn",to:"/article/delete/".concat(t),children:"[Delete]"})]}),Object(l.jsxs)("div",{className:"visual-section",style:{height:j},children:[n&&Object(l.jsx)("img",{src:n,alt:""}),r&&Object(l.jsx)("iframe",{width:"500",height:"281",src:r,title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),a.split("\n\n").map((function(e,t){return Object(l.jsx)("p",{className:"description",children:e},t)})),Object(l.jsxs)("div",{className:"article-info",children:[Object(l.jsxs)("span",{className:"author-name",children:["Published by ",Object(l.jsx)("strong",{children:s})]}),Object(l.jsx)("p",{children:Object(l.jsx)("time",{dateTime:o,children:o})})]})]})}),W=(c(206),function(e){var t=e._id,c=e.name,n=e.comment,r=e.date,a=e.number;return Object(l.jsxs)("div",{id:t,className:"comment-box",children:[Object(l.jsx)("var",{className:"comment-number",children:a}),Object(l.jsx)("div",{className:"comment-name",children:c}),Object(l.jsx)("time",{className:"comment-date",dateTime:r,children:r}),Object(l.jsx)("p",{className:"comment-description",children:n})]})}),Y=function(e){var t=e._id,c=e.title,n=e.content,r=e.imageUrl,a=e.youtubeUrl,s=e.author,i=e.date,o=e.comments,j=e.onCommentSubmitHandler;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(G,{_id:t,title:c,content:n,imageUrl:r,youtubeUrl:a,author:s,date:i}),Object(l.jsx)("h4",{children:"Comments"}),Object(l.jsx)("div",{children:o.map((function(e){return Object(l.jsx)(W,{_id:e._id,name:e.name,comment:e.comment,date:e.date,number:e.number},e._id)}))}),Object(l.jsxs)("form",{onSubmit:j,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Comment: "}),Object(l.jsx)("textarea",{name:"comment",id:"comment",cols:"30",rows:"8"}),Object(l.jsx)("input",{type:"submit",value:"Add comment"})]})]})},K=function(e){var t=e.match,c=e.location,r=Object(n.useContext)(v),a=r.loggedIn,s=r.loggedInStateHandler,i=Object(n.useState)(""),j=Object(o.a)(i,2),u=j[0],b=j[1],d=Object(n.useState)(""),h=Object(o.a)(d,2),m=h[0],O=h[1],g=Object(n.useState)(""),p=Object(o.a)(g,2),S=p[0],y=p[1],N=Object(n.useState)(""),I=Object(o.a)(N,2),T=I[0],E=I[1],P=Object(n.useState)(""),q=Object(o.a)(P,2),k=q[0],_=q[1],L=Object(n.useState)(""),A=Object(o.a)(L,2),H=A[0],F=A[1],R=Object(n.useState)(""),D=Object(o.a)(R,2),M=D[0],B=D[1],J=Object(n.useState)([]),V=Object(o.a)(J,2),z=V[0],W=V[1],K=Object(n.useState)(""),Q=Object(o.a)(K,2),X=Q[0],Z=Q[1],$=Object(n.useState)({message:""}),ee=Object(o.a)($,2),te=ee[0],ce=ee[1],ne=Object(n.useState)({state:!!c.message&&c.message.state,type:c.message?c.message.type:""}),re=Object(o.a)(ne,2),ae=re[0],se=re[1];Object(n.useEffect)((function(){localStorage.auth&&s();var e=C(se,3e3);return function(){return clearTimeout(e)}}),[]),Object(n.useEffect)((function(){var e=t.params.articleId;w.getOne(e).then((function(e){if(e.err)throw e.err;var t=e._id,c=e.title,n=e.content,r=e.imageUrl,a=e.youtubeUrl,s=e.author,i=e.date,o=e.comments;b(c),O(n),y(r),E(a),_(s),F(i),B(t),W(o)})).catch((function(e){return U(ce,e)}))}),[X]);return a?Object(l.jsxs)("section",{className:"details-article",children:[te.message.length>0&&Object(l.jsx)(x,{message:te.message}),ae.state&&Object(l.jsx)(f,{message:"Article updated!"}),Object(l.jsx)(Y,{_id:M,title:u,content:m,imageUrl:S,youtubeUrl:T,author:k,date:H,comments:z,onCommentSubmitHandler:function(e){e.preventDefault();var t=localStorage.user,c=e.target.comment.value;w.postComment({articleId:M,name:t,comment:c}).then((function(t){if(t.err)throw t.err;Z(t._id),e.target.comment.value=""})).catch((function(e){return U(ce,e)}))}})]}):Object(l.jsx)("section",{className:"details-article",children:Object(l.jsx)(G,{title:u,content:m,imageUrl:S,youtubeUrl:T,author:k,date:H})})},Q=function(e){var t=e.match,c=Object(n.useContext)(v).loggedInStateHandler,r=Object(n.useState)(""),a=Object(o.a)(r,2),s=a[0],i=a[1],j=Object(n.useState)(""),u=Object(o.a)(j,2),b=u[0],d=u[1],h=Object(n.useState)(""),m=Object(o.a)(h,2),g=m[0],f=m[1],p=Object(n.useState)(""),S=Object(o.a)(p,2),y=S[0],C=S[1],N=Object(n.useState)(""),E=Object(o.a)(N,2),P=E[0],q=E[1],k=Object(n.useState)(!1),_=Object(o.a)(k,2),L=_[0],A=_[1],H=Object(n.useState)(!1),F=Object(o.a)(H,2),R=F[0],D=F[1],M=Object(n.useState)({message:""}),B=Object(o.a)(M,2),J=B[0],z=B[1];return Object(n.useEffect)((function(){c();var e=t.params.articleId;w.getOne(e).then((function(e){if(e.err)throw e.err;var t=e.title,c=e.content,n=e.category,r=e.imageUrl,a=e.youtubeUrl;a=a.replace("embed/","watch?v="),i(t),d(c),f(n),C(r),q(a),D(!0)})).catch((function(e){return U(z,e)}))}),[]),L?Object(l.jsx)(O.a,{to:{pathname:"/article/details/".concat(t.params.articleId),message:{state:!0,type:"article updated"}}}):R?Object(l.jsx)(I.b,{initialValues:{title:s,content:b,category:g,imageUrl:y,youtubeUrl:P},validationSchema:T.a({title:T.b().required("Title is required!"),content:T.b().required("Content is required!"),imageUrl:T.b().url("Invalid URL!"),youtubeUrl:T.b().url("Invalid URL!")}),onSubmit:function(e){var c=t.params.articleId;w.update(c,e).then((function(e){if(e.err)throw e.err;A(!0)})).catch((function(e){return U(z,e)}))},children:Object(l.jsxs)("section",{className:"edit-article",children:[J.message.length>0&&Object(l.jsx)(x,{message:J.message}),Object(l.jsx)("h2",{children:"Edit your article"}),Object(l.jsx)("div",{children:Object(l.jsx)(V,{})})]})}):null},X=(c(207),function(e){var t=e.match,c=Object(n.useContext)(v).loggedInStateHandler,r=t.params.articleId,a=Object(n.useState)(!1),s=Object(o.a)(a,2),j=s[0],u=s[1],b=Object(n.useState)({message:""}),d=Object(o.a)(b,2),h=d[0],m=d[1];Object(n.useEffect)((function(){c()}),[]);return j?Object(l.jsx)(O.a,{to:{pathname:"/categories/home",message:{state:!0,type:"article deleted"}}}):Object(l.jsxs)("section",{className:"article-delete",children:[h.message.length>0&&Object(l.jsx)(x,{message:h.message}),Object(l.jsx)("h3",{children:"Are you sure you want to delete your article?"}),Object(l.jsx)(i.b,{to:"/article/details/".concat(r),children:"Back"}),Object(l.jsx)("a",{onClick:function(){w.remove(r).then((function(e){if(e.err)throw e.err;u(!0)})).catch((function(e){return U(m,e)}))},children:"Delete"})]})}),Z=(c(208),{getUserInfo:function(e){var t=localStorage.auth;return fetch("".concat("http://localhost:5000/api/users","/").concat(e),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()}))}}),$=function(){var e=Object(n.useContext)(v).loggedInStateHandler,t=Object(n.useState)(0),c=Object(o.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)([]),j=Object(o.a)(s,2),u=j[0],b=j[1],d=Object(n.useState)({message:""}),h=Object(o.a)(d,2),m=h[0],O=h[1];return Object(n.useEffect)((function(){localStorage.auth&&e();var t=localStorage.user;Z.getUserInfo(t).then((function(e){if(e.err)throw e.err;var t=e.comments,c=e.createdArticles;a(t.length),b(c)})).catch((function(e){return U(O,e)}))}),[]),Object(l.jsxs)("section",{className:"user-profile",children:[m.message.length>0&&Object(l.jsx)(x,{message:m.message}),Object(l.jsx)("i",{className:"material-icons",children:"account_circle"}),Object(l.jsx)("h4",{children:"My articles"}),Object(l.jsx)("ul",{children:u.map((function(e){return Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/article/details/".concat(e._id),children:e.title})},e._id)}))}),Object(l.jsx)("h4",{children:"Comments count"}),Object(l.jsx)("span",{children:r})]})},ee=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(e){var n;return Object(u.a)(this,c),(n=t.call(this,e)).state={hasError:!1},n}return Object(b.a)(c,[{key:"componentDidCatch",value:function(e){console.log("Error from componentDidCatch: ",e)}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)("h1",{children:"Looks like something went wrong!"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),c}(r.a.Component),te=function(e){return function(t){var c=Object(n.useContext)(v).loggedIn,r=Object(O.g)();return c?Object(l.jsx)(e,Object(_.a)({},t)):(r.push("/login"),null)}},ce=function(e){return function(t){var c=Object(O.g)();return localStorage.auth?(c.push("/categories/home"),null):Object(l.jsx)(e,Object(_.a)({},t))}},ne=function(e){Object(d.a)(c,e);var t=Object(h.a)(c);function c(){return Object(u.a)(this,c),t.apply(this,arguments)}return Object(b.a)(c,[{key:"render",value:function(){return Object(l.jsx)("main",{className:"main-wrapper",children:Object(l.jsx)(ee,{children:Object(l.jsxs)(O.d,{children:[Object(l.jsx)(O.b,{path:"/",exact:!0,children:Object(l.jsx)(O.a,{to:"/categories/home"})}),Object(l.jsx)(O.b,{path:"/categories/:category",component:N}),Object(l.jsx)(O.b,{path:"/article/create",component:te(z)}),Object(l.jsx)(O.b,{path:"/article/details/:articleId",component:K}),Object(l.jsx)(O.b,{path:"/article/edit/:articleId",component:te(Q)}),Object(l.jsx)(O.b,{path:"/article/delete/:articleId",component:te(X)}),Object(l.jsx)(O.b,{path:"/profile",component:te($)}),Object(l.jsx)(O.b,{path:"/register",component:ce(R)}),Object(l.jsx)(O.b,{path:"/login",component:ce(D)}),Object(l.jsx)(O.b,{path:"/logout",component:te(B)}),Object(l.jsx)(O.b,{component:M})]})})})}}]),c}(n.Component),re=(c(209),function(){return Object(l.jsx)("footer",{children:Object(l.jsx)("p",{children:"All rights reserved. \xa9 | Mihail Tomov"})})}),ae=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),i=s[0],u=s[1],b=function(){r(!1),u("")},d={loggedIn:c,username:i,loggedInStateHandler:function(){var e=localStorage.auth;e&&k.validateToken(e).then((function(e){e.err?(localStorage.clear(),b()):(r(!0),u(localStorage.user))}))},loggedOutStateHandler:b};return Object(l.jsxs)("div",{className:"site-wrapper",children:[Object(l.jsx)(j,{}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(m,{loggedIn:c,username:i}),Object(l.jsx)(v.Provider,{value:d,children:Object(l.jsx)(ne,{})}),Object(l.jsx)(re,{})]})]})},se=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,211)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{children:Object(l.jsx)(ae,{})})}),document.getElementById("root")),se()},93:function(e,t,c){},94:function(e,t,c){}},[[210,1,2]]]);
//# sourceMappingURL=main.370b7ee9.chunk.js.map