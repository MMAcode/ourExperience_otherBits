(self.webpackChunklite=self.webpackChunklite||[]).push([[9442],{353:(e,n,t)=>{"use strict";t.d(n,{Z:()=>r});var i=t(67294);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o=i.createElement("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"#292929"});const r=function(e){return i.createElement("svg",a({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),o)}},82864:(e,n,t)=>{"use strict";t.d(n,{W:()=>i});var i={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Star_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},15617:(e,n,t)=>{"use strict";t.d(n,{$l:()=>d,_C:()=>r});var i=t(319),a=t.n(i),o=t(88398),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBase_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_post"}}]}}].concat(a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]),a()([{kind:"FragmentDefinition",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]),a()(o.m.definitions))},d={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AddToCatalogBaseQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"}}]}}]}}]}}].concat(a()(l.definitions))}},84130:(e,n,t)=>{"use strict";t.d(n,{G:()=>r});var i=t(319),a=t.n(i),o=t(15617),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBase_post"}}]}}].concat(a()(o._C.definitions))}},39959:(e,n,t)=>{"use strict";t.d(n,{o:()=>Se});var i=t(67154),a=t.n(i),o=t(6479),r=t.n(o),l=t(59713),d=t.n(l),s=t(67294),c=t(6443),u=t(26350),m=t(78817),g=t(30020),v=t(87691),p=t(14646),k=t(353),f=t(63038),y=t.n(f),b=t(64718),C=t(319),I=t.n(C),h=t(39210),S=t(86015),N=t(77355),E=t(93310),P=t(78285),O=t(60015),T=t(87529),w=t(61609),F=t(97217);function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var _=s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.73 3.08A2.21 2.21 0 0 1 5 .94c1.26 0 2.27.97 2.27 2.14v2.44H2.73V3.08zm5.46 2.44V3.08C8.18 1.38 6.74 0 5 0a3.13 3.13 0 0 0-3.18 3.08v2.44c-.49 0-.95.2-1.29.55A1.9 1.9 0 0 0 0 7.39v3.74a1.9 1.9 0 0 0 .53 1.32A1.8 1.8 0 0 0 1.8 13H8.2c.48 0 .94-.2 1.28-.55.34-.35.53-.82.53-1.32V7.4a1.9 1.9 0 0 0-.53-1.32 1.8 1.8 0 0 0-1.28-.55z",fill:"#A8A8A8"});const x=function(e){return s.createElement("svg",j({width:10,height:13,viewBox:"0 0 10 13",fill:"none"},e),_)};var D=t(92305),A=t(54758);function V(e){var n,t,i=e.children,a=e.target,o=e.kind,r=e.catalog,l=e.viewer,d=s.useMemo((function(){if(r.predefined){var e,n=null===(e=a.viewerEdge.catalogsConnection)||void 0===e?void 0:e.predefinedContainingThis.find((function(e){return e.predefined===r.predefined}));return[!!n,null==n?void 0:n.catalogItemIds]}var t,i=null===(t=a.viewerEdge.catalogsConnection)||void 0===t?void 0:t.catalogsContainingThis.find((function(e){return e.catalogId===r.id}));return[!!i,null==i?void 0:i.catalogItemIds]}),[r.predefined,r.id,a.viewerEdge]),c=y()(d,2),u=c[0],m=c[1],g=(0,A.qY)(l.id,r.id,r.version,a.id,o,null!==(n=r.predefined)&&void 0!==n?n:void 0),v=y()(g,2),p=v[0],k=v[1].loading,f=(0,A.Yi)(l.id,r.id,r.version,[{entityId:a.id,entityType:o,catalogItemIds:m||[]}],null!==(t=r.predefined)&&void 0!==t?t:void 0),b=y()(f,2),C=b[0],I=b[1].loading;return i({toggleInsideCatalog:u?C:p,isInsideCatalog:u,loading:k||I})}var B={display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",paddingRight:"5px"},R=function(e){return{marginBottom:"1px","& path":{fill:e.baseColor.border.normal}}};function L(e){var n=e.catalog,t=e.target,i=e.kind,a=e.viewer,o=(0,p.I)();return s.createElement(V,{viewer:a,target:t,kind:i,catalog:n},(function(e){var t=e.toggleInsideCatalog,i=e.isInsideCatalog,a=e.loading,r=n.predefined?(0,D.S6)(n.predefined):n.name;return s.createElement("div",{className:o(B)},s.createElement(w.X,{key:n.id,checked:i,checkboxStyle:"OBVIOUS",onChange:t,disabled:a||n.visibility===F.n2.LOCKED,textScale:"L",clampText:1},r),n.visibility!==F.n2.PUBLIC&&s.createElement(N.x,{paddingLeft:"8px"},s.createElement(x,{className:o(R)})))}))}function M(e){var n=e.target,t=e.kind,i=e.catalogs,a=e.isLoading,o=e.viewer,r=e.fetchMore,l=e.scrollableEl;return a?s.createElement(N.x,{display:"flex",justifyContent:"center",padding:"40px 0"},s.createElement(v.F,{color:"DARKER",scale:"L"},s.createElement(T.T,null))):i?s.createElement(O.P,{fetchMore:r,scrollableEl:l},i.map((function(e){return s.createElement(L,{viewer:o,key:e.id,catalog:e,target:n,kind:t})}))):null}function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(Object(t),!0).forEach((function(n){d()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var K={maxHeight:"240px",overflowY:"auto",padding:"24px 20px 16px 24px"};function z(e){var n,t,i,a=e.target,o=e.kind,r=e.showCreateModal,l=e.hidePanel,d=e.viewer,c=s.useRef(null),u=(0,p.I)(),m=(0,h.Ln)({limit:h.W,userId:d.id}),g=(0,P.w)(),k=(0,b.a)(S.D,{variables:m}),f=k.data,y=k.error,C=k.loading,O=k.fetchMore;s.useEffect((function(){y&&g({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[y]);var T,w=s.useCallback((function(){r(),l()}),[r,l]),F=null==f?void 0:f.catalogsByUser.catalogs;return F&&"Catalog"===(null==f||null===(n=f.readingList)||void 0===n?void 0:n.__typename)&&(F=[f.readingList].concat(I()(F))),null!=f&&null!==(t=f.catalogsByUser)&&void 0!==t&&null!==(i=t.paging)&&void 0!==i&&i.nextPageCursor&&(T=function(){return O({variables:U(U({},m),{},{pagingOptions:U(U({},m.pagingOptions),{},{cursor:{id:f.catalogsByUser.paging.nextPageCursor.id}})})})}),s.createElement(N.x,{width:"300px"},s.createElement("div",{className:u(K),ref:c},s.createElement(M,{target:a,kind:o,viewer:d,catalogs:F,isLoading:C,fetchMore:T,scrollableEl:c.current})),!C&&s.createElement(N.x,{borderTop:"BASE_LIGHTER",padding:"20px 24px 24px"},s.createElement(v.F,{color:"ACCENT",scale:"L"},s.createElement(E.r,{onClick:w},"Create new list"))))}var G=t(63508),$=t(28655),W=t.n($),q=t(50361),Q=t.n(q),X=t(92471),Y=t(21919),Z=t(12476),J=t(18627),ee=t(11462);function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){d()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function ie(){var e=W()(["\n  fragment useAddItemToPredefinedCatalog_postViewerEdge on PostViewerEdge {\n    id\n    catalogsConnection {\n      predefinedContainingThis {\n        catalogId\n        version\n        predefined\n        catalogItemIds\n      }\n    }\n  }\n"]);return ie=function(){return e},e}function ae(){var e=W()(["\n  mutation AddToPredefinedCatalog(\n    $type: PredefinedCatalogType!\n    $operation: PredefinedCatalogAddOperationInput!\n  ) {\n    addToPredefinedCatalog(type: $type, operation: $operation) {\n      __typename\n      ... on AddToPredefinedCatalogSucces {\n        version\n        insertedItem {\n          __typename\n          catalogItemId\n          catalogId\n        }\n      }\n    }\n  }\n"]);return ae=function(){return e},e}var oe="temp-catalog-id",re=(0,X.Ps)(ae()),le=(0,X.Ps)(ie()),de=t(73917),se=t(66227),ce=t(68894),ue=t(15617),me=t(62212);function ge(e){var n=e.children,t=e.isPanelVisible,i=e.hidePanel,a=e.togglePanel,o=e.target,r=e.kind,l=e.viewer,d=e.bookmarkIcon,c=e.isInACatalog,u=e.isInReadingList,m=e.catalogsCount,g=e.popoverDisplay,v=(0,ce.O)(!1),p=y()(v,3),k=p[0],f=p[1],b=p[2],C=function(e,n,t,i){var a=(0,J.Av)(),o=(0,Y.D)(re,{variables:{type:n,operation:{preprend:{type:i,id:t}}},optimisticResponse:{addToPredefinedCatalog:{__typename:"AddToPredefinedCatalogSucces",version:A.xt,insertedItem:{__typename:"CatalogItemV2",catalogId:oe,catalogItemId:A.PH}}},onCompleted:function(e){if("AddToPredefinedCatalogSucces"===e.addToPredefinedCatalog.__typename&&i===F.ej.POST){var n=e.addToPredefinedCatalog.insertedItem;a.event("post.addToList",{listId:n.catalogId,postId:n.catalogItemId})}},update:function(a,o){var r,l=null===(r=o.data)||void 0===r?void 0:r.addToPredefinedCatalog;if("AddToPredefinedCatalogSucces"===(null==l?void 0:l.__typename)){var d,s,c=l.insertedItem,u=l.version;if(c.catalogId!==oe&&((0,Z.UV)(a,c.catalogId,u),(0,Z.Rx)(a,c.catalogId,[c.catalogItemId],i)),i===F.ej.POST){d="PostViewerEdge:".concat((0,ee.Q)(t,e)),s=le;var m=a.readFragment({id:d,fragment:s});if(null!=m&&m.catalogsConnection){var g=Q()(m.catalogsConnection.predefinedContainingThis),v=g.findIndex((function(e){return e.predefined===n}));if(-1!==v)g[v].catalogItemIds.push(c.catalogItemId);else{var p={catalogId:c.catalogId,predefined:n,version:u,catalogItemIds:[c.catalogItemId]};g.push(p)}a.writeFragment({id:d,fragment:s,data:te(te({},m),{},{catalogsConnection:te(te({},m.catalogsConnection),{},{predefinedContainingThis:g})})})}}}}});return y()(o,1)[0]}(l.id,F.l8.READING_LIST,o.id,r),I=s.useCallback((function(){a(),u||c||C()}),[a,c,u,C]);return s.createElement(de.J,{isVisible:t,popoverRenderFn:function(){return s.createElement(z,{showCreateModal:f,hidePanel:i,target:o,kind:r,viewer:l})},hide:i,targetDistance:15,referenceWidth:"100%",display:g},s.createElement(G.a,{isVisible:k,hide:b,target:o,kind:r,viewer:l}),null==n?void 0:n({onClick:I,bookmarkIcon:d,catalogsCount:m,isPanelVisible:t}))}function ve(e){var n,t,i,o=e.viewer,l=r()(e,["viewer"]),d=s.useMemo((function(){return l.kind===F.ej.POST?{postId:l.target.id,isPostKind:!0}:{postId:"",isPostKind:!1}}),[l.kind,l.target]),c=(0,b.a)(ue.$l,{ssr:!1,variables:d}).data,u=null,m=null;"Post"===(null==c||null===(n=c.postResult)||void 0===n?void 0:n.__typename)&&(u=c.postResult.viewerEdge.catalogsConnection,m=c.postResult);var g=(null===(t=u)||void 0===t?void 0:t.catalogsContainingThis)&&u.catalogsContainingThis.length>0,v=s.useMemo((function(){var e,n;return!!(null===(e=u)||void 0===e||null===(n=e.predefinedContainingThis)||void 0===n?void 0:n.find((function(e){return e.predefined===F.l8.READING_LIST})))}),[u]),p=s.useMemo((function(){var e;return((null===(e=u)||void 0===e?void 0:e.catalogsContainingThis.length)||0)+(v?1:0)}),[null===(i=u)||void 0===i?void 0:i.catalogsContainingThis.length,v]),k=s.createElement(me.l,{insideACatalog:!!g||v});return d.isPostKind?o&&u&&m?s.createElement(se.B,null,(function(e){var n=e.isVisible,t=e.toggle,i=e.hide;return s.createElement(ge,a()({},l,{target:m,viewer:o,isPanelVisible:n,togglePanel:t,hidePanel:i,bookmarkIcon:k,isInACatalog:!!g,isInReadingList:v,catalogsCount:p}))})):k:null}function pe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function ke(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?pe(Object(t),!0).forEach((function(n){d()(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):pe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var fe=function(e){return{"& svg path":{fill:e.baseColor.text.lighter}}},ye=function(e){return ke({border:"1px solid ".concat(e.baseColor.border.lighter),borderRadius:"99em",padding:"6px 15px 6px 10px",display:"flex",alignItems:"center",":hover":{borderColor:e.baseColor.border.light},"& svg":{marginRight:"8px"}},fe(e))},be=function(e){return ke({padding:"8px 2px",":hover svg path":{fill:e.baseColor.fill.darker},":focus svg path":{fill:e.baseColor.fill.darker}},fe(e))},Ce=function(e){switch(e){case"ICON_TEXT":return ye;case"ICON_SUBTLE":return be}},Ie="Add to list bookmark button",he=function(e){var n=e.bookmarkIcon,t=e.buttonStyle,i=e.onClick,a=e.isPanelVisible;return s.createElement(m.P,{ariaControls:"addToCatalogBookmarkButton",ariaLabel:Ie,ariaExpanded:a?"true":"false",onClick:i,rules:Ce(t)},n,"ICON_TEXT"===t&&s.createElement(v.F,{scale:"M"},"Save"))};function Se(e){var n=e.buttonStyle,t=void 0===n?"ICON":n,i=e.susiEntry,o=void 0===i?"list":i,l=e.susiActionUrl,d=r()(e,["buttonStyle","susiEntry","susiActionUrl"]),m=(0,p.I)(),v=(0,c.H)(),f=v.value;return v.loading||f?s.createElement(g._,{placement:"top",targetDistance:10,tooltipText:"Save"},s.createElement(ve,a()({},d,{viewer:f}),(function(e){var n=e.onClick,i=e.bookmarkIcon,a=e.isPanelVisible;return s.createElement(he,{buttonStyle:t,bookmarkIcon:i,onClick:n,isPanelVisible:a})}))):s.createElement(u.R,{operation:"register",susiEntry:o,actionUrl:l},s.createElement(he,{buttonStyle:t,bookmarkIcon:s.createElement(k.Z,{className:m(me.K),"aria-label":Ie})}))}},62212:(e,n,t)=>{"use strict";t.d(n,{l:()=>p,K:()=>u});var i=t(67294),a=t(14646);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var r=i.createElement("path",{d:"M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z",fill:"#000"});const l=function(e){return i.createElement("svg",o({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),r)};function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var s=i.createElement("path",{d:"M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z",fill:"#000"});const c=function(e){return i.createElement("svg",d({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),s)};var u=function(e){return{"& path":{fill:e.baseColor.border.darker}}},m=function(e){return{"& path":{fill:e.baseColor.fill.darker}}},g=function(){var e=(0,a.I)();return i.createElement(l,{className:e(u)})},v=function(){var e=(0,a.I)();return i.createElement(c,{className:e(m)})};function p(e){return e.insideACatalog?i.createElement(v,null):i.createElement(g,null)}},93403:(e,n,t)=>{"use strict";t.d(n,{z:()=>l});var i=t(319),a=t.n(i),o=t(98007),r=t(84130),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"}}]}}].concat(a()(o.qU.definitions),a()(r.G.definitions))}},50455:(e,n,t)=>{"use strict";t.d(n,{z:()=>C,e:()=>I});var i=t(28655),a=t.n(i),o=t(92471),r=t(67294),l=t(39959),d=t(84130),s=t(62212),c=t(6443),u=t(26350),m=t(98007),g=t(30020),v=t(14646),p=t(97217),k=t(43487),f=t(353),y=t(50458);function b(){var e=a()(["\n  fragment BookmarkButton_post on Post {\n    visibility\n    ...SusiClickable_post\n    ...AddToCatalogBookmarkButton_post\n  }\n  ","\n  ","\n"]);return b=function(){return e},e}var C=(0,o.Ps)(b(),m.qU,d.G);function I(e){var n=e.post,t=e.withReadingListTooltip,i=void 0===t||t,a=e.susiEntry,o=n.id,d=n.visibility,m=(0,v.I)(),b=(0,k.v9)((function(e){return e.config.authDomain})),C=(0,c.H)(),I=C.value;return C.loading||d===p.Wn.UNLISTED?null:I?r.createElement(l.o,{kind:p.ej.POST,target:n}):r.createElement(g._,{isVisible:i,placement:"top",targetDistance:10,tooltipText:"Bookmark story"},r.createElement(u.R,{post:n,operation:"register",actionUrl:(0,y.XET)(b,o),susiEntry:a},r.createElement(f.Z,{className:m(s.K)})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/9442.5291e270.chunk.js.map