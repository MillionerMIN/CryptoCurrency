(this.webpackJsonpcryptocurrency=this.webpackJsonpcryptocurrency||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){},103:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},112:function(e,t,c){},113:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},118:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(25),i=c.n(s),a=c(6),l=c(26),o=(c(70),c(71),c(120)),j=c(7),d=c(123),u=function(e){return e.app.isLoading},b=function(e){return e.app.error},x=function(e){return e.currencyList.currency},O=function(e){return e.currencyList.currentCur},m=function(e){return e.currencyList.topCurrency},h=function(e){return e.currencyList.chartHistory},p=function(e){return e.currencyList.totalCount},k=function(e){return e.currencyList.currentPage},f=function(e){return e.currencyList.perPage},g=function(e){return e.wallet.costWallet},_=function(e){return e.wallet.wallet},v=function(e){return e.wallet.sessionCostWallet},y=function(e){return e.wallet.percentTransaction},w=(c(72),c(0)),N=function(e){var t=e.children;return Object(w.jsx)("div",{className:"wrapper wrapper_pd20 wrapper_pd10",children:t})},E=c.p+"static/media/delete.96a13fed.svg",C=(c(74),c(16)),F=c(2),T={wallet:[],costWallet:0,sessionCostWallet:0,percentTransaction:0},S=function(e){return{type:"REMOVE-CRYPTO",amount:e}},U=function(){var e=Object(a.b)(),t=Object(a.c)(g),c=Object(a.c)(_),r=c.map((function(t){return Object(w.jsxs)("div",{className:"cost-wallet__group",children:[Object(w.jsx)("div",{className:"cost-wallet__name-currency",children:t.id}),Object(w.jsx)("div",{className:"cost-wallet__count-currency",children:t.count}),Object(w.jsxs)("div",{className:"cost-wallet__cost-currency",children:[t.resultUsd.toFixed(2)," $"]}),Object(w.jsx)(d.a,{variant:"danger",onClick:function(){e(S(t))},children:Object(w.jsx)("img",{src:E,alt:"delete"})})]})}));return Object(w.jsx)("section",{className:"cost-wallet cost-wallet_mr",children:Object(w.jsxs)("div",{className:"cost-wallet__wrapper",children:[Object(w.jsx)(N,{children:Object(w.jsxs)("div",{className:"cost-wallet__balance",children:[Object(w.jsx)("div",{className:"cost-wallet__title",children:"Balance:"}),Object(w.jsxs)("div",{className:"cost-wallet__cost",children:[t," $"]})]})}),Object(w.jsx)(N,{children:Object(w.jsx)("div",{className:"cost-wallet__delete",children:Object(w.jsx)("button",{className:"btn btn_delete",onClick:function(){e({type:"DELETE-WALLET"})},children:"Delete"})})}),Object(w.jsx)("div",{className:"cost-wallet__coins",children:Object(w.jsxs)(N,{children:[Object(w.jsx)("div",{className:"cost-wallet__title",children:"Currency Wallet"}),r]})})]})})},R=c(27),L=c.n(R),W=c(35),P=c(54),H=c.n(P).a.create({baseURL:"https://api.coincap.io/v2/"}),A=function(){return H.get("assets")},B=function(e,t){return H.get("assets?offset=".concat(e,"&limit=").concat(t))},M=function(e){return H.get("assets/".concat(e))},Y=function(e){return H.get("assets/".concat(e,"/history?interval=d1"))},D={isLoading:!1,error:""},I=function(e){return{type:"SET-IS-LOADING",isLoading:e}},z=function(e){return{type:"ERROR-HANDLER",text:e}},G={currency:[],currentCur:{},topCurrency:[],chartHistory:[],currentPage:0,perPage:10,totalCount:0},$=function(e){return{type:"SET-TOP-CURRENCY",topCurrency:e}},J=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},V=c(39),Z=function(e){var t=e.id,c=e.infoData,r=c.map((function(e){return e.date.slice(0,10)})),n=c.map((function(e){return e.priceUsd})),s={labels:r,datasets:[{label:t.toUpperCase(),data:n,backgroundColor:["rgba(54, 162, 235, 0.2)","rgba(75, 192, 192, 0.2)"],borderColor:["rgba(54, 162, 235, 1)","rgba(75, 192, 192, 1)"],borderWidth:1}]};return Object(w.jsx)(V.a,{data:s,options:{scales:{y:{beginAtZero:!0}}}})},q=c.p+"static/media/chevron-left.c80cdd8e.svg",K=(c(94),c(95),function(){return Object(w.jsx)("div",{className:"modalInner",children:Object(w.jsx)("div",{className:"isLoadingBlock"})})}),Q=(c(96),function(){return Object(w.jsx)("div",{className:"modal-error modal-error_position",children:Object(w.jsx)("div",{className:"modal-error__text",children:"Network error !!! Reload this page"})})}),X=function(){var e=Object(a.b)(),t=Object(a.c)(O),c=t.rank,n=t.symbol,s=t.priceUsd,i=t.marketCapUsd,o=t.supply,d=t.changePercent24Hr,x=t.volumeUsd24Hr,m=t.vwap24Hr,p=Object(a.c)(h),k=Object(j.g)().id,f=Object(a.c)(u),g=Object(a.c)(b);Object(r.useEffect)((function(){e(function(e){return function(){var t=Object(W.a)(L.a.mark((function t(c){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(I(!0)),t.prev=1,t.next=4,Y(e);case 4:r=t.sent,c({type:"GET-HISTORY",chartHistory:r.data.data}),c(I(!1)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),c(I(!1)),c(z("error"));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(k)),e(function(e){return function(){var t=Object(W.a)(L.a.mark((function t(c){var r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(I(!0)),t.prev=1,t.next=4,M(e);case 4:r=t.sent,c({type:"SET-CURRENT-CURRENCY",currentCur:r.data.data}),c(I(!1)),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),c(I(!1)),c(z("error"));case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(k))}),[e,k]);var _=Object(w.jsxs)("table",{className:"table",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{children:"Rank"}),Object(w.jsx)("th",{children:"Symbol"}),Object(w.jsx)("th",{children:"Price"}),Object(w.jsx)("th",{children:"Market Cap"}),Object(w.jsx)("th",{children:"Supply"}),Object(w.jsx)("th",{children:"Change 24Hr"}),Object(w.jsx)("th",{children:"Volume 24Hr"}),Object(w.jsx)("th",{children:"VWAP24Hr"})]})}),Object(w.jsx)("tbody",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("td",{children:c}),Object(w.jsx)("td",{children:n}),Object(w.jsx)("td",{children:"$"+(+s).toFixed(2)}),Object(w.jsx)("td",{children:"$"+(+i).toFixed(2)}),Object(w.jsx)("td",{children:(+o).toFixed(2)+"m"}),Object(w.jsx)("td",{className:+d>0?"table__text_up":"table__text_down",children:(+d).toFixed(2)+"%"}),Object(w.jsx)("td",{children:"$"+(+x).toFixed(2)}),Object(w.jsx)("td",{children:"$"+(+m).toFixed(2)})]})})]});return Object(w.jsxs)("section",{className:"information information_mr20 information_mr10   information_pd15 information_pd10-20 ",children:[f&&Object(w.jsx)(K,{}),Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"information__panel  information__panel_mb20 information__panel_mb10",children:Object(w.jsx)("div",{children:Object(w.jsx)(l.b,{className:"information__link",to:"/",children:Object(w.jsxs)("span",{children:[Object(w.jsx)("img",{src:q,alt:"React Logo"}),"Back"]})})})}),"error"===g&&Object(w.jsx)(Q,{}),_,Object(w.jsx)("div",{className:"information__barChart",children:Object(w.jsx)(Z,{infoData:p,id:k})})]})]})},ee=c(15),te=c.p+"static/media/avatar.eb51d125.svg",ce=(c(99),function(){return Object(w.jsxs)("div",{className:"profile",children:[Object(w.jsx)("div",{className:"profile__avatar",children:Object(w.jsx)("img",{className:"profile__img",src:te,alt:"ava"})}),Object(w.jsx)("span",{className:"profile__name",children:"profile@mail.com"})]})});c(100),c(101);function re(){return Object(w.jsxs)("div",{className:"lds-roller",children:[Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{}),Object(w.jsx)("div",{})]})}var ne=c.p+"static/media/error-429.55b8d755.jpeg",se=(c(102),function(){return Object(w.jsx)("div",{className:"message-error",children:Object(w.jsx)("img",{className:"message-error__img",src:ne,alt:"error429"})})}),ie=c(121),ae=c(122),le=c(124),oe=(c(103),function(e){var t=e.changeHandler,c=e.handleClose,n=e.data,s=n.id,i=n.priceUsd,a=Object(r.useState)(0),l=Object(ee.a)(a,2),o=l[0],j=l[1];return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(ie.a,{show:!0,onHide:c,animation:!1,children:[Object(w.jsx)(ie.a.Header,{closeButton:!0,children:Object(w.jsx)(ie.a.Title,{children:"Add in the Wallet"})}),Object(w.jsx)(ie.a.Body,{children:Object(w.jsxs)(ae.a,{className:"mb-3",children:[Object(w.jsx)(ae.a.Text,{children:s}),Object(w.jsx)(le.a,{type:"number","aria-label":"Amount (to the nearest dollar)",onChange:function(e){j(+e.currentTarget.value)}}),Object(w.jsx)(ae.a.Text,{children:i+" $"})]})}),Object(w.jsxs)(ie.a.Footer,{children:[Object(w.jsx)(d.a,{variant:"secondary",onClick:c,children:"Close"}),Object(w.jsx)(d.a,{variant:"primary",onClick:function(){return e="sale",0!==o&&t(o,e);var e},children:"Sale"}),Object(w.jsx)(d.a,{variant:"primary",onClick:function(){return e="buy",0!==o&&t(o,e);var e},children:"Buy"})]})]})})}),je=(c(105),function(e){var t=e.data,c=t.symbol,n=t.name,s=t.priceUsd,i=t.id,o=Object(r.useState)(!1),u=Object(ee.a)(o,2),b=u[0],x=u[1],O=+s,m=Object(j.f)(),h=function(){x(!b)},p=Object(a.b)();var k=+e.data.rank%2?"":"item_bg";return Object(w.jsxs)("div",{className:"item item_mb item_pd ".concat(k),children:[Object(w.jsxs)(l.b,{onClick:function(){return m.push("/assets/".concat(i))},className:"item__link",to:"/assets/".concat(i),children:[Object(w.jsx)("div",{className:"item__symbol",children:c}),Object(w.jsx)("div",{className:"item__text",children:n}),Object(w.jsx)("div",{className:"item__cost",children:O.toFixed(2)})]}),Object(w.jsx)(d.a,{variant:"outline-success",onClick:h,children:"+"}),b&&Object(w.jsx)(oe,{handleClose:h,changeHandler:function(e,t){var c={id:i,count:e,resultUsd:e*+s};"buy"===t&&(p({type:"ADD-CRYPTO",amount:c}),x(!b)),"sale"===t&&(p(S(c)),x(!b))},data:e.data})]})}),de=(c(106),function(e){for(var t=e.totalCount,c=e.pageSize,r=e.currentPage,n=e.onPageChange,s=Math.ceil(t/c),i=[],a=1;a<=s;a++)i.push(a);var l=r?+r.toString()[0]+1:1;return Object(w.jsx)("div",{className:"paginate paginate_mb10",children:i.map((function(e){return Object(w.jsx)("span",{className:l===e?"paginate__span paginate__span_active":"paginate__span",onClick:function(){n(e)},children:e},e)}))})}),ue=(c(107),function(e){var t=e.data,c=t.data,r=t.totalCount,n=t.currentPage,s=t.perPage,i=t.onPageChange,l=c.map((function(e){return Object(w.jsx)(je,{data:e},e.id)})),o=Object(a.c)(b);return Object(w.jsxs)("div",{className:"currency",children:[Object(w.jsx)(de,{totalCount:r,pageSize:s,currentPage:n,onPageChange:i}),o?Object(w.jsx)(se,{}):l]})}),be=function(){return Object(w.jsx)(V.b,{data:{type:"bar",labels:["Red","Blue","Yellow"],datasets:[{label:"My First Dataset",data:[300,50,100],backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]},options:{scales:{y:{beginAtZero:!1}}}})},xe=(c(108),function(){return Object(w.jsx)("div",{className:"information-panel",children:Object(w.jsx)(be,{})})}),Oe=function(e){var t=e.active,c=Object(a.c)(u),r=Object(a.c)(g),n=Object(a.c)(v),s=Object(a.c)(y),i=t?Object(w.jsx)(ue,{data:e}):Object(w.jsx)(xe,{});return Object(w.jsx)("section",{className:"content content_pd20-30 content_pd10-15",children:Object(w.jsxs)("div",{className:"content__wrapper",children:[Object(w.jsx)("div",{className:"content__item content__item_grid1-3",children:Object(w.jsx)(N,{children:Object(w.jsx)(ce,{})})}),Object(w.jsx)(N,{children:Object(w.jsxs)("div",{className:"content__item content__item_grid_container",children:[Object(w.jsx)("div",{className:"content__title",children:"Balance Wallet:"}),Object(w.jsxs)("div",{className:"content__desc",children:[r," $"]})]})}),Object(w.jsx)(N,{children:Object(w.jsxs)("div",{className:"content__item content__item_grid_container",children:[Object(w.jsx)("div",{className:"content__title",children:"Session operation:"}),Object(w.jsxs)("div",{className:"content__desc",children:[n," $"]}),Object(w.jsxs)("div",{className:"content__desc",children:[s," %"]})]})}),Object(w.jsx)("div",{className:"content__item content__item_grid1-3",children:Object(w.jsxs)(N,{children:[c&&Object(w.jsx)(re,{}),i]})})]})})},me=c.p+"static/media/digital-wallet.61d97bb8.png",he=(c(109),c(110),function(){var e=Object(a.c)(m),t=Object(a.c)(u),c=e.map((function(e){var t=(+e.priceUsd).toFixed(2);return Object(w.jsxs)("div",{className:"element",children:[Object(w.jsx)("span",{className:"element__span element__span_text_color",children:e.name}),Object(w.jsx)("span",{className:"element__span",children:t})]},e.id)}));return Object(w.jsxs)("section",{className:"info info_pd20 info_pd20-0",children:[t&&Object(w.jsx)(re,{}),Object(w.jsx)("div",{className:"info__title",children:"TOP CURRENCY"}),!t&&Object(w.jsx)("div",{className:"info__money",children:c})]})}),pe=(c(111),function(e){var t=e.value,c=e.active,r=e.onChangeButton,n=c?"btn btn-custom btn-custom_active":"btn btn-custom";return Object(w.jsx)("button",{className:n,onClick:function(){return r(t)},children:t})}),ke=function(e){var t=e.activeBtn,c=e.onChangeButton,r=[{value:"Balance",active:t},{value:"Information panel",active:!t}].map((function(e){return Object(w.jsx)(pe,{value:e.value,active:e.active,onChangeButton:c},e.value)}));return Object(w.jsxs)("section",{className:"main",children:[Object(w.jsxs)("div",{className:"main__header",children:[Object(w.jsx)("div",{className:"logo logo_center logo_end",children:Object(w.jsx)("img",{className:"logo__img",src:me,alt:"Logo"})}),Object(w.jsx)("h1",{className:"title",children:"Crypto-wallet"})]}),Object(w.jsx)("div",{className:"main__panel",children:r}),Object(w.jsx)(he,{})]})},fe=(c(112),function(){var e=Object(a.b)(),t=Object(r.useState)(!0),c=Object(ee.a)(t,2),n=c[0],s=c[1],i=Object(a.c)(x),l=Object(a.c)(p),o=Object(a.c)(k),j=Object(a.c)(f);Object(r.useEffect)((function(){e(function(){var e=Object(W.a)(L.a.mark((function e(t){var c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),e.prev=1,e.next=4,A();case 4:c=e.sent,t({type:"SET-TOTAL-COUNT",totalCount:c.data.data.length}),t($(c.data.data)),t(I(!1)),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),t(I(!1)),t(z("error"));case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()),e(function(e,t){return function(){var c=Object(W.a)(L.a.mark((function c(r){var n;return L.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r(I(!0)),c.prev=1,r(J(e)),c.next=5,B(e,t);case 5:n=c.sent,r({type:"SET-CURRENCY",currencyList:n.data.data}),r(I(!1)),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),r(z("error")),r(I(!1));case 14:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}()}(o,j))}),[e,o,j]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"base-page base-page_mr",children:Object(w.jsxs)("div",{className:"base-page__wrapper",children:[Object(w.jsx)(ke,{onChangeButton:function(){s(!n)},activeBtn:n}),Object(w.jsx)(Oe,{data:i,totalCount:l,currentPage:o,perPage:j,onPageChange:function(t){1===t&&e(J(t-1)),t>1&&e(J(+(t-1+"1")))},active:n})]})})})}),ge=(c(113),function(){return Object(w.jsx)("div",{className:"not-found not-found_mr20",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsx)("div",{className:"col-md-6 align-self-center",children:Object(w.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 800 600",children:Object(w.jsxs)("g",{children:[Object(w.jsxs)("defs",{children:[Object(w.jsx)("clipPath",{id:"GlassClip",children:Object(w.jsx)("path",{d:"M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5 s-28.485-16.599-34.877-24.192c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13 c6.755-0.61,20.546-0.608,41.785,5.087s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"})}),Object(w.jsx)("clipPath",{id:"cordClip",children:Object(w.jsx)("rect",{width:"800",height:"600"})})]}),Object(w.jsxs)("g",{id:"planet",children:[Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-miterlimit":"10",cx:"572.859",cy:"108.803",r:"90.788"}),Object(w.jsx)("circle",{id:"craterBig",fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-miterlimit":"10",cx:"548.891",cy:"62.319",r:"13.074"}),Object(w.jsx)("circle",{id:"craterSmall",fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-miterlimit":"10",cx:"591.743",cy:"158.918",r:"7.989"}),Object(w.jsx)("path",{id:"ring",fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:" M476.562,101.461c-30.404,2.164-49.691,4.221-49.691,8.007c0,6.853,63.166,12.408,141.085,12.408s141.085-5.555,141.085-12.408 c0-3.378-15.347-4.988-40.243-7.225"}),Object(w.jsx)("path",{id:"ringShadow",opacity:"0.5",fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",d:" M483.985,127.43c23.462,1.531,52.515,2.436,83.972,2.436c36.069,0,68.978-1.19,93.922-3.149"})]}),Object(w.jsxs)("g",{id:"stars",children:[Object(w.jsxs)("g",{id:"starsBig",children:[Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"518.07",y1:"245.375",x2:"518.07",y2:"266.581"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"508.129",y1:"255.978",x2:"528.01",y2:"255.978"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"154.55",y1:"231.391",x2:"154.55",y2:"252.598"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"144.609",y1:"241.995",x2:"164.49",y2:"241.995"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"320.135",y1:"132.746",x2:"320.135",y2:"153.952"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"310.194",y1:"143.349",x2:"330.075",y2:"143.349"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"200.67",y1:"483.11",x2:"200.67",y2:"504.316"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"210.611",y1:"493.713",x2:"190.73",y2:"493.713"})]})]}),Object(w.jsxs)("g",{id:"starsSmall",children:[Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"432.173",y1:"380.52",x2:"432.173",y2:"391.83"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"426.871",y1:"386.175",x2:"437.474",y2:"386.175"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"489.555",y1:"299.765",x2:"489.555",y2:"308.124"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"485.636",y1:"303.945",x2:"493.473",y2:"303.945"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"231.468",y1:"291.009",x2:"231.468",y2:"299.369"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"227.55",y1:"295.189",x2:"235.387",y2:"295.189"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"244.032",y1:"547.539",x2:"244.032",y2:"555.898"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"247.95",y1:"551.719",x2:"240.113",y2:"551.719"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"186.359",y1:"406.967",x2:"186.359",y2:"415.326"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"190.277",y1:"411.146",x2:"182.44",y2:"411.146"})]}),Object(w.jsxs)("g",{children:[Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"480.296",y1:"406.967",x2:"480.296",y2:"415.326"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",x1:"484.215",y1:"411.146",x2:"476.378",y2:"411.146"})]})]}),Object(w.jsxs)("g",{id:"circlesBig",children:[Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"588.977",cy:"255.978",r:"7.952"}),Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"450.066",cy:"320.259",r:"7.952"}),Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"168.303",cy:"353.753",r:"7.952"}),Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"429.522",cy:"201.185",r:"7.952"}),Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"200.67",cy:"176.313",r:"7.952"}),Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"133.343",cy:"477.014",r:"7.952"}),Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"283.521",cy:"568.033",r:"7.952"}),Object(w.jsx)("circle",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-miterlimit":"10",cx:"413.618",cy:"482.387",r:"7.952"})]}),Object(w.jsxs)("g",{id:"circlesSmall",children:[Object(w.jsx)("circle",{fill:"#0E0620",cx:"549.879",cy:"296.402",r:"2.651"}),Object(w.jsx)("circle",{fill:"#0E0620",cx:"253.29",cy:"229.24",r:"2.651"}),Object(w.jsx)("circle",{fill:"#0E0620",cx:"434.824",cy:"263.931",r:"2.651"}),Object(w.jsx)("circle",{fill:"#0E0620",cx:"183.708",cy:"544.176",r:"2.651"}),Object(w.jsx)("circle",{fill:"#0E0620",cx:"382.515",cy:"530.923",r:"2.651"}),Object(w.jsx)("circle",{fill:"#0E0620",cx:"130.693",cy:"305.608",r:"2.651"}),Object(w.jsx)("circle",{fill:"#0E0620",cx:"480.296",cy:"477.014",r:"2.651"})]})]}),Object(w.jsxs)("g",{id:"spaceman","clip-path":"url(cordClip)",children:[Object(w.jsx)("path",{id:"cord",fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M273.813,410.969c0,0-54.527,39.501-115.34,38.218c-2.28-0.048-4.926-0.241-7.841-0.548 c-68.038-7.178-134.288-43.963-167.33-103.87c-0.908-1.646-1.793-3.3-2.654-4.964c-18.395-35.511-37.259-83.385-32.075-118.817"}),Object(w.jsx)("path",{id:"backpack",fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M338.164,454.689l-64.726-17.353c-11.086-2.972-17.664-14.369-14.692-25.455l15.694-58.537 c3.889-14.504,18.799-23.11,33.303-19.221l52.349,14.035c14.504,3.889,23.11,18.799,19.221,33.303l-15.694,58.537 C360.647,451.083,349.251,457.661,338.164,454.689z"}),Object(w.jsxs)("g",{id:"antenna",children:[Object(w.jsx)("line",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",x1:"323.396",y1:"236.625",x2:"295.285",y2:"353.753"}),Object(w.jsx)("circle",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",cx:"323.666",cy:"235.617",r:"6.375"})]}),Object(w.jsxs)("g",{id:"armR",children:[Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M360.633,363.039c1.352,1.061,4.91,5.056,5.824,6.634l27.874,47.634c3.855,6.649,1.59,15.164-5.059,19.02l0,0 c-6.649,3.855-15.164,1.59-19.02-5.059l-5.603-9.663"}),Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M388.762,434.677c5.234-3.039,7.731-8.966,6.678-14.594c2.344,1.343,4.383,3.289,5.837,5.793 c4.411,7.596,1.829,17.33-5.767,21.741c-7.596,4.411-17.33,1.829-21.741-5.767c-1.754-3.021-2.817-5.818-2.484-9.046 C375.625,437.355,383.087,437.973,388.762,434.677z"})]}),Object(w.jsxs)("g",{id:"armL",children:[Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M301.301,347.66c-1.702,0.242-5.91,1.627-7.492,2.536l-47.965,27.301c-6.664,3.829-8.963,12.335-5.134,18.999h0 c3.829,6.664,12.335,8.963,18.999,5.134l9.685-5.564"}),Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M241.978,395.324c-3.012-5.25-2.209-11.631,1.518-15.977c-2.701-0.009-5.44,0.656-7.952,2.096 c-7.619,4.371-10.253,14.09-5.883,21.71c4.371,7.619,14.09,10.253,21.709,5.883c3.03-1.738,5.35-3.628,6.676-6.59 C252.013,404.214,245.243,401.017,241.978,395.324z"})]}),Object(w.jsxs)("g",{id:"body",children:[Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M353.351,365.387c-7.948,1.263-16.249,0.929-24.48-1.278c-8.232-2.207-15.586-6.07-21.836-11.14 c-17.004,4.207-31.269,17.289-36.128,35.411l-1.374,5.123c-7.112,26.525,8.617,53.791,35.13,60.899l0,0 c26.513,7.108,53.771-8.632,60.883-35.158l1.374-5.123C371.778,395.999,365.971,377.536,353.351,365.387z"}),Object(w.jsx)("path",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M269.678,394.912L269.678,394.912c26.3,20.643,59.654,29.585,93.106,25.724l2.419-0.114"})]}),Object(w.jsxs)("g",{id:"legs",children:[Object(w.jsxs)("g",{id:"legR",children:[Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M312.957,456.734l-14.315,53.395c-1.896,7.07,2.299,14.338,9.37,16.234l0,0c7.07,1.896,14.338-2.299,16.234-9.37l17.838-66.534 C333.451,455.886,323.526,457.387,312.957,456.734z"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",x1:"304.883",y1:"486.849",x2:"330.487",y2:"493.713"})]}),Object(w.jsxs)("g",{id:"legL",children:[Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M296.315,452.273L282,505.667c-1.896,7.07-9.164,11.265-16.234,9.37l0,0c-7.07-1.896-11.265-9.164-9.37-16.234l17.838-66.534 C278.993,441.286,286.836,447.55,296.315,452.273z"}),Object(w.jsx)("line",{fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",x1:"262.638",y1:"475.522",x2:"288.241",y2:"482.387"})]})]}),Object(w.jsxs)("g",{id:"head",children:[Object(w.jsx)("ellipse",{transform:"matrix(0.259 -0.9659 0.9659 0.259 -51.5445 563.2371)",fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",cx:"341.295",cy:"315.211",rx:"61.961",ry:"60.305"}),Object(w.jsx)("path",{id:"headStripe",fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M330.868,261.338c-7.929,1.72-15.381,5.246-21.799,10.246"}),Object(w.jsx)("path",{fill:"#FFFFFF",stroke:"#0E0620","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round","stroke-miterlimit":"10",d:" M380.857,346.164c-1.247,4.651-4.668,8.421-9.196,10.06c-9.332,3.377-26.2,7.817-42.301,3.5s-28.485-16.599-34.877-24.192 c-3.101-3.684-4.177-8.66-2.93-13.311l7.453-27.798c0.756-2.82,3.181-4.868,6.088-5.13c6.755-0.61,20.546-0.608,41.785,5.087 s33.181,12.591,38.725,16.498c2.387,1.682,3.461,4.668,2.705,7.488L380.857,346.164z"}),Object(w.jsx)("g",{"clip-path":"url(#GlassClip)",children:Object(w.jsx)("polygon",{id:"glassShine",fill:"none",stroke:"#0E0620","stroke-width":"3","stroke-miterlimit":"10",points:" 278.436,375.599 383.003,264.076 364.393,251.618 264.807,364.928 \t\t\t\t"})})]})]})]})})}),Object(w.jsxs)("div",{className:"col-md-6 align-self-center",children:[Object(w.jsx)("h1",{children:"404"}),Object(w.jsx)("h2",{children:"UH OH! You're lost."}),Object(w.jsx)("p",{children:"The page you are looking for does not exist. How you got here is a mystery. But you can click the button below to go back to the homepage."}),Object(w.jsx)(l.b,{to:"/",children:Object(w.jsx)("button",{className:"btn btn_color_green",children:"HOME"})})]})]})})}),_e=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(w.jsx)(fe,{})}}),Object(w.jsx)(j.a,{path:"/assets/:id",render:function(){return Object(w.jsx)(X,{})}}),Object(w.jsx)(j.a,{path:"/costwallet",render:function(){return Object(w.jsx)(U,{})}}),Object(w.jsx)(j.a,{path:"*",component:function(){return Object(w.jsx)(ge,{})}})]})})},ve=c.p+"static/media/telegram_icon.15b4ae4f.svg",ye=c.p+"static/media/facebook_icon.ce1fd112.svg",we=c.p+"static/media/google_icon.a9f89f88.svg",Ne=c.p+"static/media/discord_icon.dc3ee15e.svg",Ee=(c(114),function(){return Object(w.jsxs)("div",{className:"socials socials_gap40",children:[Object(w.jsx)("img",{className:"socials__image",src:ve,alt:"telegram"}),Object(w.jsx)("img",{className:"socials__image",src:ye,alt:"facebook"}),Object(w.jsx)("img",{className:"socials__image",src:we,alt:"google"}),Object(w.jsx)("img",{className:"socials__image",src:Ne,alt:"discord"})]})}),Ce=(c(115),function(){return Object(w.jsx)("footer",{className:"footer",children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"footer__wrapper",children:[Object(w.jsx)("img",{className:"logo__img",src:me,alt:"footer-logo"}),Object(w.jsx)("p",{className:"footer__text",children:"\xa9 2021 CRYPTO-WALLET"}),Object(w.jsx)(Ee,{})]})})})}),Fe=(c(116),[{name:"Homepage",hash:"/"},{name:"Cost wallet",hash:"/costwallet"},{name:"About us",hash:"/about"}]),Te=function(){var e=Object(r.useState)(!1),t=Object(ee.a)(e,2),c=t[0],n=t[1],s=function(){n(!c)},i=c?"header header_position header_open":"header header_position",a=Fe.map((function(e){return Object(w.jsx)(l.b,{className:"header__link",to:e.hash,onClick:s,children:Object(w.jsx)("div",{className:"header__item",children:e.name})},e.name)}));return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("div",{className:"mob-header mob-header_position",children:Object(w.jsx)("button",{className:"mob-header__menu",onClick:s,children:Object(w.jsxs)("div",{className:c?"mob-header__humbugger_active":"",children:[Object(w.jsx)("span",{className:"mob-header__line"}),Object(w.jsx)("span",{className:"mob-header__line"}),Object(w.jsx)("span",{className:"mob-header__line"})]})})}),Object(w.jsx)("header",{className:i,children:Object(w.jsx)("div",{className:"container",children:Object(w.jsxs)("div",{className:"header__wrapper",children:[Object(w.jsx)("div",{className:"header__logo",children:Object(w.jsx)("img",{className:"header__img",src:me,alt:"header-logo"})}),Object(w.jsx)("div",{className:"header__items",children:a}),Object(w.jsx)(Ee,{})]})})})]})};var Se,Ue=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(Te,{}),Object(w.jsx)(o.a,{children:Object(w.jsx)(_e,{})}),Object(w.jsx)(Ce,{})]})},Re=(c(117),c(34)),Le=c(60),We=function(e,t){try{var c=JSON.stringify(e);localStorage.setItem(t,c)}catch(r){}},Pe=c(59),He=Object(Re.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-IS-LOADING":return Object(F.a)(Object(F.a)({},e),{},{isLoading:t.isLoading});case"ERROR-HANDLER":return Object(F.a)(Object(F.a)({},e),{},{error:t.text});case"SET-BUTTONS":case"CHANGE-ACTIVE-BUTTON":return Object(F.a)({},e);default:return e}},currencyList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-CURRENCY":return Object(F.a)(Object(F.a)({},e),{},{currency:t.currencyList});case"SET-CURRENT-CURRENCY":return Object(F.a)(Object(F.a)({},e),{},{currentCur:t.currentCur});case"SET-TOP-CURRENCY":return Object(F.a)(Object(F.a)({},e),{},{topCurrency:t.topCurrency.filter((function(e){return+e.rank<=3}))});case"GET-HISTORY":return Object(F.a)(Object(F.a)({},e),{},{chartHistory:t.chartHistory});case"SET-CURRENT-PAGE":return Object(F.a)(Object(F.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-COUNT":return Object(F.a)(Object(F.a)({},e),{},{totalCount:t.totalCount});default:return e}},wallet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-CRYPTO":var c=e.wallet.find((function(e){return e.id===t.amount.id}));if(c){e.wallet.map((function(e){e.id===t.amount.id&&(e.resultUsd=e.resultUsd+t.amount.resultUsd,e.count=e.count+t.amount.count)}));var r=+(100*t.amount.resultUsd/e.costWallet).toFixed(3);return Object(F.a)(Object(F.a)({},e),{},{wallet:Object(C.a)(e.wallet),costWallet:e.costWallet+t.amount.resultUsd,sessionCostWallet:t.amount.resultUsd,percentTransaction:r})}return Object(F.a)(Object(F.a)({},e),{},{wallet:[].concat(Object(C.a)(e.wallet),[t.amount]),costWallet:e.costWallet+t.amount.resultUsd,sessionCostWallet:t.amount.resultUsd});case"REMOVE-CRYPTO":var n=e.wallet.find((function(e){return e.id===t.amount.id}));return n?(e.wallet.map((function(e){e.id===t.amount.id&&(e.resultUsd=e.resultUsd<t.amount.resultUsd?e.resultUsd-e.resultUsd:e.resultUsd-t.amount.resultUsd,e.count=e.count<t.amount.count?e.count-e.count:e.count-t.amount.count)})),Object(F.a)(Object(F.a)({},e),{},{wallet:Object(C.a)(e.wallet),costWallet:e.costWallet<t.amount.resultUsd?e.costWallet-e.costWallet:e.costWallet-t.amount.resultUsd,sessionCostWallet:t.amount.resultUsd})):Object(F.a)(Object(F.a)({},e),{},{wallet:[].concat(Object(C.a)(e.wallet),[t.amount]),costWallet:e.costWallet<t.amount.resultUsd?e.costWallet-e.costWallet:e.costWallet-t.amount.resultUsd,sessionCostWallet:t.amount.resultUsd});case"COST-WALLET":return Object(F.a)({},e);case"DELETE-WALLET":return Object(F.a)(Object(F.a)({},e),{},{wallet:[],costWallet:0});default:return e}}}),Ae=localStorage.getItem("wallet"),Be=localStorage.getItem("costWallet"),Me=localStorage.getItem("currentPage");Ae&&Be&&Me&&(Se={wallet:{wallet:JSON.parse(Ae),costWallet:JSON.parse(Be),sessionCostWallet:0,percentTransaction:0},currencyList:{currency:[],currentCur:{},topCurrency:[],chartHistory:[],currentPage:JSON.parse(Me),perPage:10,totalCount:0}});var Ye=Object(Re.createStore)(He,Se,Object(Pe.composeWithDevTools)(Object(Re.applyMiddleware)(Le.a)));Ye.subscribe((function(){We(Ye.getState().wallet.wallet,"wallet"),We(Ye.getState().wallet.costWallet,"costWallet"),We(Ye.getState().currencyList.currentPage,"currentPage")})),i.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(a.a,{store:Ye,children:Object(w.jsx)(l.a,{children:Object(w.jsx)(Ue,{})})})}),document.getElementById("root"))},70:function(e,t,c){},72:function(e,t,c){},74:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},99:function(e,t,c){}},[[118,1,2]]]);
//# sourceMappingURL=main.8afd8922.chunk.js.map