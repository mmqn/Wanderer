(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(4),i=a.n(r),c=a(1),o=(a(11),a(2)),s=function(e){var t=e.uniqueValues,a=e.handleFiltering,r=Object(n.useState)(""),i=Object(c.a)(r,2),o=i[0],s=i[1],u=Object(n.useState)([]),p=Object(c.a)(u,2),d=p[0],m=p[1],f=Object(n.useMemo)(function(){var e=[];return Object.keys(t).forEach(function(a){t[a].forEach(function(t){var n="".concat(a,"|").concat(t);e.push(n)})}),e},[t]);return l.a.createElement("div",{className:"search-bar"},l.a.createElement("input",{type:"text",placeholder:"Search ".concat(t.Address.length," places..."),value:o,onChange:function(e){var t=e.target.value;s(t),function(e){if(e){var t=new RegExp(e,"gi"),a=f.filter(function(e){return t.test(e)}).map(function(e){var t=e.split("|"),a=Object(c.a)(t,2);return{id:e,targetFilterType:a[0],targetFilterValue:a[1]}});m(a)}else m([])}(t)}}),d.length>0&&l.a.createElement("div",{className:"filter-results"},d.map(function(e,t){return l.a.createElement("div",{key:"".concat(t,"-").concat(e.targetFilterType,"-").concat(e.targetFilterValue),className:"filter-type-value-set",style:{margin:"4px"},role:"button",onClick:function(){s(""),m([]),a(e)}},l.a.createElement("div",{className:"filter-type"},e.targetFilterType),l.a.createElement("div",{className:"filter-value"},e.targetFilterValue))})))},u=(l.a.createElement("a",{style:{backgroundColor:"black",color:"white",textDecoration:"none",padding:"4px 6px",fontFamily:'-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif',fontSize:"12px",fontWeight:"bold",lineHeight:"1.2",display:"inline-block",borderRadius:"3px"},href:"https://unsplash.com/@andrewtneel?utm_medium=referral&utm_campaign=photographer-credit&utm_content=creditBadge",target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from Andrew Neel"},l.a.createElement("span",{style:{display:"inline-block",padding:"2px 3px"}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",style:{height:"12px",width:"auto",position:"relative",verticalAlign:"middle",top:"-2px",fill:"white"},viewBox:"0 0 32 32"},l.a.createElement("title",null,"unsplash-logo"),l.a.createElement("path",{d:"M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"}))),l.a.createElement("span",{style:{display:"inline-block",padding:"2px 3px"}},"Background Image Credit: Andrew Neel")),l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 512 512",width:"18px"},l.a.createElement("path",{style:{fill:"#e4c200"},d:"M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035 c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719 c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"}))),p=l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 448 512",width:"18px"},l.a.createElement("path",{style:{fill:"#e4c200"},d:"M0 180V56c0-13.3 10.7-24 24-24h124c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H64v84c0 6.6-5.4 12-12 12H12c-6.6 0-12-5.4-12-12zM288 44v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12V56c0-13.3-10.7-24-24-24H300c-6.6 0-12 5.4-12 12zm148 276h-40c-6.6 0-12 5.4-12 12v84h-84c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24V332c0-6.6-5.4-12-12-12zM160 468v-40c0-6.6-5.4-12-12-12H64v-84c0-6.6-5.4-12-12-12H12c-6.6 0-12 5.4-12 12v124c0 13.3 10.7 24 24 24h124c6.6 0 12-5.4 12-12z"})),d=l.a.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 512 512",width:"18px"},l.a.createElement("path",{style:{fill:"#e4c200"},d:"M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z"})),m=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],i=a[1],o=e.placeDetails,s=e.condensed,p=e.isMobile,d=e.mapboxKey,m=o.id,f=o.Name,g=o.Description,h=o.Categories,v=o.Address,y=o.City,b=o.Region,E=o.Coordinates,x=o.Notes,w=p?window.innerWidth-80:400,k="https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/"+E.lng+","+E.lat+",9.9,0,0/"+w+"x120@2x?access_token="+d,F="https://www.google.com/maps/dir/?api=1&origin=&destination="+E.lat+","+E.lng+"&travelmode=driving",j=function(t){var a=t.ev,n=t.payload;a.stopPropagation(),e.handleFiltering(n)};return l.a.createElement("div",{className:"card has-hidden-child",onClick:function(){return i(!r)}},l.a.createElement("h2",{className:"use-ellipsis"},f),l.a.createElement("h6",{className:"use-ellipsis"},g),l.a.createElement("div",{className:"categories"},h.map(function(e){return l.a.createElement("span",{key:"".concat(m," - ").concat(e),onClick:function(t){return j({ev:t,payload:{id:'"Categories"|'.concat(e),targetFilterType:"Categories",targetFilterValue:e}})}},e)})),(r||!s)&&l.a.createElement("div",{className:"row"},l.a.createElement("p",{className:"notes"},x),l.a.createElement("div",{className:"static-map",style:{width:w,height:"120px"}},l.a.createElement("img",{src:k,alt:"".concat(f," Map Preview"),width:w,height:"120"}),p?l.a.createElement("span",{style:{position:"absolute",top:"42px",left:w-10-w/2}},u):l.a.createElement("div",{className:"hidden-child"},l.a.createElement("div",{className:"cover"}),l.a.createElement("div",{className:"address"},l.a.createElement("p",null,v),l.a.createElement("p",{className:"actionable-text",onClick:function(e){return j({ev:e,payload:{id:'"City"|'.concat(y),targetFilterType:"City",targetFilterValue:y}})}},y),l.a.createElement("p",{className:"actionable-text",onClick:function(e){return j({ev:e,payload:{id:'"Region"|'.concat(b),targetFilterType:"Region",targetFilterValue:b}})}},b)),l.a.createElement("div",{className:"get-directions"},l.a.createElement("span",{style:{position:"absolute",top:"3px",left:"-9px"}},u),l.a.createElement("span",null),l.a.createElement("a",{href:F,target:"_blank",rel:"noopener noreferrer"},"directions")))),p&&l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"address",style:{position:"relative",top:"0px",left:"0px",marginTop:"10px"}},l.a.createElement("p",null,v),l.a.createElement("p",{className:"actionable-text",onClick:function(e){j({ev:e,payload:{id:'"City"|'.concat(y),targetFilterType:"City",targetFilterValue:y}})}},y),l.a.createElement("p",{className:"actionable-text",onClick:function(e){j({ev:e,payload:{id:'"Region"|'.concat(b),targetFilterType:"Region",targetFilterValue:b}})}},b)),l.a.createElement("a",{href:F,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"underline"}},"Get Directions"))))};m.defaultProps={condensed:!1,isMobile:!1,mapboxKey:"",handleFiltering:function(){}};var f=m,g=function(e,t){if("array"===(a=e,n=t.targetFilterType,a[n]?"object"===typeof a[n]&&a[n].length?"array":"object"===typeof a[n]?"object":"primitive":"key does not exist")){if(e[t.targetFilterType].includes(t.targetFilterValue))return!0}else if(e[t.targetFilterType]===t.targetFilterValue)return!0;var a,n;return!1},h=function(e){var t=e.appliedFilters,a=e.handleRemoveFilter,r=e.handleCardsDensity,i=e.handleCardsStacking,o=Object(n.useState)(!1),s=Object(c.a)(o,2),u=s[0],m=s[1],f=t.length>0;return Object(n.useEffect)(function(){return m(!1)},[f]),l.a.createElement("div",{style:u&&f?{height:"110px"}:{},className:"mobile-command-bar",onClick:function(){return m(f&&!u)}},l.a.createElement("div",null,f&&l.a.createElement("button",{style:{float:"left",paddingTop:"13px",paddingLeft:"14px"}},l.a.createElement("span",{style:{color:"#e4c200"}},t.length),l.a.createElement("span",{key:"flash-".concat(t.length),className:"flash"},t.length>1?" Active Filters":" Active Filter")),l.a.createElement("span",{style:{float:"right",paddingTop:"2px",paddingRight:"10px"}},l.a.createElement("button",{style:{padding:"8px"},onClick:r},p),l.a.createElement("button",{style:{padding:"8px"},onClick:i},d))),f&&l.a.createElement("div",{style:{display:"flex",flexWrap:"nowrap",overflow:"scroll",margin:"50px 15px 0px"}},t.map(function(e){return l.a.createElement("div",{key:"".concat(e.targetFilterType,"-").concat(e.targetFilterValue),style:{},className:"filter-type-value-set delete",role:"button",onClick:function(t){t.stopPropagation(),a(e)}},l.a.createElement("div",{className:"filter-type"},e.targetFilterType),l.a.createElement("div",{className:"filter-value"},e.targetFilterValue))})))},v=function(e){var t=e.places,a=e.isMobile,r=e.mapboxKey,i=Object(n.useState)([]),u=Object(c.a)(i,2),p=u[0],d=u[1],m=Object(n.useState)([]),v=Object(c.a)(m,2),y=v[0],b=v[1],E=Object(n.useState)(!0),x=Object(c.a)(E,2),w=x[0],k=x[1],F=Object(n.useState)(!1),j=Object(c.a)(F,2),N=j[0],C=j[1],O=Object(n.useState)(""),S=Object(c.a)(O,2),V=S[0],M=S[1];Object(n.useEffect)(function(){return d(t)},[t]);var T=Object(n.useMemo)(function(){return{Name:t.map(function(e){return e.Name}),Categories:Object(o.a)(new Set(t.map(function(e){return e.Categories}).flat())),Address:t.map(function(e){return e.Address}),City:Object(o.a)(new Set(t.map(function(e){return e.City}).flat())),Region:Object(o.a)(new Set(t.map(function(e){return e.Region}).flat()))}},[t]),z=function(e){if(1===e.length){var a=t.filter(function(t){return g(t,e[0])});d(a)}else if(e.length>1){var n=t.filter(function(t){return e.reduce(function(e,a){if("object"===typeof e&&"object"===typeof a){var n=g(t,e),l=g(t,a);return n&&l?2:n||n?1:0}return"number"===typeof e&&"object"===typeof a?g(t,a)?e+1:e:0})===e.length});d(n)}else d(t);b(e)},A=function(e){var t=void 0===y.find(function(t){return t.id===e.id})?[].concat(Object(o.a)(y),[e]):y;z(t)},R=function(e){var t=y.filter(function(t){return t.id!==e.id});z(t)},D=function(e){M(e===V?"":e)},H=N?l.a.createElement("div",{className:"cards-container"},T.Categories.map(function(e){var t=p.filter(function(t){return t.Categories.includes(e)});return e===V?l.a.createElement(n.Fragment,{key:e},l.a.createElement("div",{className:"card card-stacked",role:"button",onClick:function(){return D(e)}},l.a.createElement("h1",null,e)),t.map(function(e){return l.a.createElement(f,{key:e.id,placeDetails:e,condensed:w,isMobile:a,mapboxKey:r,handleFiltering:A})})):t.length>0?l.a.createElement("div",{key:e,className:"card card-stacked",role:"button",onClick:function(){return D(e)}},l.a.createElement("h1",null,e)):null})):l.a.createElement("div",{className:"cards-container"},p.map(function(e){return l.a.createElement(f,{key:e.id,placeDetails:e,condensed:w,isMobile:a,mapboxKey:r,handleFiltering:A})}));return l.a.createElement(n.Fragment,null,l.a.createElement(s,{uniqueValues:T,handleFiltering:A}),H,a?l.a.createElement(h,{appliedFilters:y,handleRemoveFilter:R,handleCardsDensity:function(e){e.stopPropagation(),k(!w)},handleCardsStacking:function(e){e.stopPropagation(),C(!N)}}):l.a.createElement(n.Fragment,null,y.length>0&&l.a.createElement("div",{className:"applied-filters-menu",style:{maxHeight:"80vh",overflowY:"auto"}},l.a.createElement("h2",{key:"flash-".concat(y.length),className:"flash",style:{paddingLeft:"2px"}},"Applied Filters"),y.map(function(e){return l.a.createElement("div",{key:"".concat(e.targetFilterType,"-").concat(e.targetFilterValue),className:"filter-type-value-set delete",role:"button",onClick:function(){return R(e)}},l.a.createElement("div",{className:"filter-type"},e.targetFilterType),l.a.createElement("div",{className:"filter-value"},e.targetFilterValue))})),l.a.createElement("button",{style:{position:"fixed",bottom:"50px",right:"20px"},onClick:function(){return k(!w)}},w?"Expand All Cards":"Condense All Cards"),l.a.createElement("button",{style:{position:"fixed",bottom:"15px",right:"20px"},onClick:function(){return C(!N)}},"Switch to ",N?"Singled":"Stacked"," View")))};v.defaultProps={isMobile:!1,mapboxKey:""};var y=v,b=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1];return setTimeout(function(){return r(!0)},2e3),a?l.a.createElement("div",{style:{margin:"auto",padding:"200px 20px 0px",textAlign:"center"}},l.a.createElement("h1",null,"Oh boy, looks like you broke something \ud83c\udf26"),l.a.createElement("p",{style:{color:"#ffffff",lineHeight:"32px"}},"Just kidding, it's probably my fault. I would very much appreciate it if you would kindly send an"," ",l.a.createElement("a",{href:"mailto:mmqn.michael@gmail.com",style:{color:"#e4c200"}},"email")," ","to inform me about this!")):l.a.createElement("div",{style:{position:"fixed",top:"50vh",left:"calc(50vw - 94px)"}},l.a.createElement("h1",null,"Loading \ud83c\udf26"))};i.a.render(l.a.createElement(function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),o=Object(c.a)(i,2),s=o[0],u=o[1],p=Object(n.useState)(!1),d=Object(c.a)(p,2),m=d[0],f=d[1],g=Object(n.useState)(window.innerWidth<415),h=Object(c.a)(g,2),v=h[0],E=h[1];return Object(n.useEffect)(function(){fetch("https://wanderer-mmqn.firebaseio.com/places.json").then(function(e){if(200===e.status)return r(!0),e.json()}).then(function(e){return u(e)}),window.addEventListener("scroll",function(){window.pageYOffset>=40?f(!0):window.pageYOffset<40&&f(!1)}),window.addEventListener("resize",function(e){var t=e.target.innerWidth;v&&t>=415?E(!1):!v&&t<415&&E(!0)})},[v]),l.a.createElement(n.Fragment,null,l.a.createElement("h1",{className:"header ".concat(m?"minimize-header":"maximize-header")},"Wanderer"),!0===a&&s&&s.length>0?l.a.createElement(n.Fragment,null,l.a.createElement(y,{places:s,isMobile:v,mapboxKey:"pk.eyJ1IjoibW1xbiIsImEiOiJjazAxNDdtMGUwN3RxM2JwNGxzYWdqeDltIn0.Ctg235d9st1jNa25YSaFlg"})):l.a.createElement(b,null))},null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(12)}},[[5,1,2]]]);
//# sourceMappingURL=main.0b8c0555.chunk.js.map