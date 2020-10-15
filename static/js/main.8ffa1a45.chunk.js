(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),l=a.n(r),c=(a(15),a(9)),i=a(1),s=a(6),u=a.n(s);var m=function(){return o.a.createElement("header",{className:"header page__header section"},o.a.createElement("img",{src:u.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}))},d=o.a.createContext();var f=function(e){var t=o.a.useContext(d),a=e.card.owner._id===t._id,n="element__delete-button ".concat(a?"element__delete-button_visible":"element__delete-button_hidden"),r=e.card.likes.some((function(e){return e._id===t._id})),l="element__like-button ".concat(r?"element__like-button_active":"");return o.a.createElement("li",{className:"element"},o.a.createElement("img",{className:"element__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),o.a.createElement("div",{className:"element__description"},o.a.createElement("h2",{className:"element__title"},e.card.name),o.a.createElement("div",{className:"element__like-interaction"},o.a.createElement("button",{className:l,onClick:function(){e.onCardLike(e.card)},"aria-label":"\u041b\u0430\u0439\u043a",type:"button"}),o.a.createElement("span",{className:"element__like-counter"},e.card.likes.length))),o.a.createElement("button",{className:n,onClick:function(){e.onCardDelete(e.card)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}))};var _=function(e){var t=o.a.useContext(d);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__image"},o.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),o.a.createElement("button",{className:"profile__avatar-edit",onClick:e.onEditAvatar})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},t.name),o.a.createElement("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile}),o.a.createElement("p",{className:"profile__job"},t.about)),o.a.createElement("button",{className:"profile__add-button",type:"button","aria-label":"Add",onClick:e.onAddPlace})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},e.cards.map((function(t){return o.a.createElement(f,{key:t._id,card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete})})))))};var p=function(){return o.a.createElement("footer",{className:"footer section page__footer"},o.a.createElement("h3",{className:"footer__copyright"},"\xa9 2020 \u041b\u0438\u0430 \u0427\u0438\u043a\u0430\u0442\u0438"))};var h=function(e){var t=e.card,a=e.onClose;return o.a.createElement("div",{className:"modal modal_image ".concat(t&&"modal_opened")},o.a.createElement("div",{className:"modal__content"},o.a.createElement("img",{className:"modal__image",src:t&&t.link,alt:t&&t.name}),o.a.createElement("p",{className:"modal__caption"},t&&t.name),o.a.createElement("button",{className:"modal__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a})))},v=a(7),E=a(8),b=new(function(){function e(t){Object(v.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(E.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-15",headers:{authorization:"ffb07e3e-85b9-4652-8210-bfa96acaf140","Content-Type":"application/json"}});var C=function(e){return o.a.createElement("div",{className:"modal modal_".concat(e.name," ").concat(e.isOpen?"modal_opened":"")},o.a.createElement("div",{className:"modal__container"},o.a.createElement("button",{className:"modal__close-button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),o.a.createElement("h3",{className:"modal__title"},e.title),o.a.createElement("form",{onSubmit:e.onSubmit,className:"modal__form",action:"#",name:"".concat(e.name),noValidate:!0},e.children)))};var g=function(e){return o.a.createElement("button",{type:"submit",className:"modal__submit-button"},e.onClick?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":e.button)};var k=function(e){var t=o.a.useState(""),a=Object(i.a)(t,2),n=a[0],r=a[1],l=o.a.useState(""),c=Object(i.a)(l,2),s=c[0],u=c[1],m=o.a.useContext(d);return o.a.useEffect((function(){r(m.name),u(m.about)}),[m]),o.a.createElement(C,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:n,about:s})}},o.a.createElement("label",{className:"modal__input"},o.a.createElement("input",{value:n||"",onChange:function(e){r(e.target.value)},id:"name-input",className:"modal__text modal__text_name",type:"text",name:"fullName",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",autoComplete:"off"}),o.a.createElement("span",{id:"name-input-error",className:"modal__input-error"})),o.a.createElement("label",{className:"modal__input"},o.a.createElement("input",{value:s||"",onChange:function(e){u(e.target.value)},id:"job-input",className:"modal__text modal__text_job",type:"text",name:"about",required:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"200",autoComplete:"off"}),o.a.createElement("span",{id:"job-input-error",className:"modal__input-error"})),o.a.createElement(g,{button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.isLoading}))};var N=function(e){var t=o.a.useRef("");return o.a.createElement(C,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}},o.a.createElement("label",{className:"modal__input"},o.a.createElement("input",{ref:t,id:"link-input",className:"modal__text modal__text_link",type:"url",name:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{id:"link-input-error",className:"modal__input-error"})),o.a.createElement(g,{button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.isLoading}))};var y=function(e){var t=o.a.useState(void 0),a=Object(i.a)(t,2),n=a[0],r=a[1],l=o.a.useState(void 0),c=Object(i.a)(l,2),s=c[0],u=c[1];return o.a.createElement(C,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.postNewCard({name:n,link:s})}},o.a.createElement("label",{className:"modal__input"},o.a.createElement("input",{value:n||"",onChange:function(e){r(e.target.value)},id:"title-input",className:"modal__text modal__text_place",type:"text",name:"title",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",autoComplete:"off"}),o.a.createElement("span",{id:"title-input-error",className:"modal__input-error"})),o.a.createElement("label",{className:"modal__input"},o.a.createElement("input",{value:s||"",onChange:function(e){u(e.target.value)},id:"link-input",className:"modal__text modal__text_link",type:"url",name:"url",required:!0,placeholder:"C\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),o.a.createElement("span",{id:"link-input-error",className:"modal__input-error"})),o.a.createElement(g,{button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClick:e.isLoading}))};var O=function(e){return o.a.createElement(C,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onDelete()}},o.a.createElement("button",{className:"modal__submit-button modal__submit-button_delete",type:"submit"},e.isLoading?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"))};var j=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),l=Object(i.a)(r,2),s=l[0],u=l[1],f=o.a.useState(!1),v=Object(i.a)(f,2),E=v[0],C=v[1],g=o.a.useState(!1),j=Object(i.a)(g,2),L=j[0],S=j[1],x=o.a.useState(null),D=Object(i.a)(x,2),w=D[0],U=D[1],A=o.a.useState(!1),P=Object(i.a)(A,2),R=P[0],T=P[1],I=o.a.useState(null),q=Object(i.a)(I,2),J=q[0],B=q[1],H=o.a.useState(!1),W=Object(i.a)(H,2),z=W[0],G=W[1];function M(){u(!1),C(!1),S(!1),G(!1),T(!1),B(null),U(null)}var V=o.a.useState({}),$=Object(i.a)(V,2),F=$[0],K=$[1],Q=o.a.useState([]),X=Object(i.a)(Q,2),Y=X[0],Z=X[1];function ee(e){"Escape"===e.key&&M()}function te(e){e.target.classList.contains("modal")&&M()}return o.a.useEffect((function(){Promise.all([b.getInitialCards(),b.getUserInfo()]).then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];K(n),Z(a)})).catch((function(e){return console.log(e)}))}),[]),o.a.useEffect((function(){return document.addEventListener("keydown",ee),document.addEventListener("click",te),function(){document.removeEventListener("keydown",ee),document.removeEventListener("click",te)}})),o.a.createElement(d.Provider,{value:F},o.a.createElement("div",{className:"page"},o.a.createElement(m,null),o.a.createElement(_,{cards:Y,onEditAvatar:function(){C(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){S(!0)},onCardClick:function(e){B(e),G(!0)},onCardLike:function(e){e.likes.some((function(e){return e._id===F._id}))?b.dislikeCard(e._id).then((function(t){var a=Y.map((function(a){return a._id===e._id?t:a}));Z(a)})).catch((function(e){console.log(e)})):b.likeCard(e._id).then((function(t){var a=Y.map((function(a){return a._id===e._id?t:a}));Z(a)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){T(!0),U(e)}}),o.a.createElement(p,null),o.a.createElement("section",{className:"modals"},o.a.createElement(k,{isOpen:s,isClose:M,onUpdateUser:function(e){n(!0),b.setUserInfo(e).then((function(e){K(e),M()})).catch((function(e){console.log(e)})).finally((function(){n(!1)}))},isLoading:a}),o.a.createElement(y,{isOpen:L,isClose:M,postNewCard:function(e){n(!0),b.postNewCard(e).then((function(e){return Z([e].concat(Object(c.a)(Y)))})).catch((function(e){return console.log(e)})).finally((function(){n(!1),M()}))},isLoading:a}),o.a.createElement(N,{isOpen:E,isClose:M,onUpdateAvatar:function(e){n(!0),b.setUserAvatar(e).then((function(e){K(e),M()})).catch((function(e){console.log(e)})).finally((function(){n(!1)}))},isLoading:a}),o.a.createElement(O,{isOpen:R,isClose:M,onDelete:function(){n(!0),b.deleteCard(w._id).then((function(){var e=Y.filter((function(e){return e._id!==w._id}));Z(e),M()})).catch((function(e){console.log(e)})).finally((function(){n(!1)}))},card:w,isLoading:a}),o.a.createElement(h,{isOpen:z,onClose:M,card:J}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a.p+"static/media/logo.855a8c98.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.8ffa1a45.chunk.js.map