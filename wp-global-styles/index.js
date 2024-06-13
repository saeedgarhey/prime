(()=>{var e={9590:e=>{var t="undefined"!=typeof Element,n="function"==typeof Map,l="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function r(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,c,i,u;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(!r(e[c],a[c]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=e.entries();!(c=u.next()).done;)if(!r(c.value[1],a.get(c.value[0])))return!1;return!0}if(l&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(c=s;0!=c--;)if(e[c]!==a[c])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((s=(i=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,i[c]))return!1;if(t&&e instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==i[c]&&"__v"!==i[c]&&"__o"!==i[c]||!e.$$typeof)&&!r(e[i[c]],a[i[c]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return r(e,t)}catch(e){if((e.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw e}}}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var l={};(()=>{"use strict";n.r(l),n.d(l,{GlobalStylesProvider:()=>Ae,GlobalStylesUI:()=>Ie,useGlobalStylesOutput:()=>Be,useGlobalStylesReset:()=>x});const e=window.React,t=window.wp.components,o=window.wp.blocks,r=window.wp.i18n,a=window.wp.element,s=(0,a.forwardRef)((function({icon:e,size:t=24,...n},l){return(0,a.cloneElement)(e,{width:t,height:t,...n,ref:l})})),c=window.wp.primitives,i=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"})),u=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z"})),m=window.lodash;var p=n(9590),d=n.n(p);const g=(0,a.createContext)({user:{},base:{},merged:{},setUserConfig:()=>{}}),f="body",_=[{path:["color","palette"],valueKey:"color",cssVarInfix:"color",classes:[{classSuffix:"color",propertyName:"color"},{classSuffix:"background-color",propertyName:"background-color"},{classSuffix:"border-color",propertyName:"border-color"}]},{path:["color","gradients"],valueKey:"gradient",cssVarInfix:"gradient",classes:[{classSuffix:"gradient-background",propertyName:"background"}]},{path:["typography","fontSizes"],valueKey:"size",cssVarInfix:"font-size",classes:[{classSuffix:"font-size",propertyName:"font-size"}]},{path:["typography","fontFamilies"],valueKey:"fontFamily",cssVarInfix:"font-family",classes:[{classSuffix:"font-family",propertyName:"font-family"}]}],h={"color.background":"color","color.text":"color","elements.link.color.text":"color","color.gradient":"gradient","typography.fontSize":"font-size","typography.fontFamily":"font-family"};function E(e,t,n,l,o){const r=[(0,m.get)(e,["blocks",t,...n]),(0,m.get)(e,n)];for(const a of r)if(a){const r=["custom","theme","default"];for(const s of r){const r=a[s];if(r){const a=(0,m.find)(r,(e=>e[l]===o));if(a)return"slug"===l||E(e,t,n,"slug",a.slug)[l]===a[l]?a:void 0}}}}function b(e,t,n){if(!n||!(0,m.isString)(n))return n;let l;if(n.startsWith("var:"))l=n.slice(4).split("|");else{if(!n.startsWith("var(--wp--")||!n.endsWith(")"))return n;l=n.slice(10,-1).split("--")}const[o,...r]=l;return"preset"===o?function(e,t,n,[l,o]){const r=(0,m.find)(_,["cssVarInfix",l]);if(!r)return n;const a=E(e,t,r.path,"slug",o);if(a){const{valueKey:n}=r;return b(e,t,a[n])}return n}(e,t,n,r):"custom"===o?function(e,t,n,l){var o;const r=null!==(o=(0,m.get)(e,["blocks",t,"custom",...l]))&&void 0!==o?o:(0,m.get)(e,["custom",...l]);return r?b(e,t,r):n}(e,t,n,r):n}const y=o.__EXPERIMENTAL_PATHS_WITH_MERGE||o.__EXPERIMENTAL_PATHS_WITH_OVERRIDE,k={isGlobalStylesUserThemeJSON:!0,version:1},x=()=>{const{user:e,setUserConfig:t}=(0,a.useContext)(g);return[!!e&&!d()(e,k),(0,a.useCallback)((()=>t((()=>k))),[t])]};function v(e,t,n="all"){var l;const{merged:o,base:r,user:s,setUserConfig:c}=(0,a.useContext)(g),i=t?`settings.blocks.${t}.${e}`:`settings.${e}`,u=t=>{const l=t?`settings.blocks.${t}.${e}`:`settings.${e}`,a=t=>{const n=(0,m.get)(t,l);var o,r;return y[e]?null!==(o=null!==(r=null==n?void 0:n.custom)&&void 0!==r?r:null==n?void 0:n.theme)&&void 0!==o?o:null==n?void 0:n.default:n};let c;switch(n){case"all":c=a(o);break;case"user":c=a(s);break;case"base":c=a(r);break;default:throw"Unsupported source"}return c};return[null!==(l=u(t))&&void 0!==l?l:u(),t=>{c((n=>{const l=window.structuredClone(n),o=y[e]?i+".custom":i;return(0,m.set)(l,o,t),l}))}]}function S(e,t,n="all"){var l;const{merged:o,base:r,user:s,setUserConfig:c}=(0,a.useContext)(g),i=t?`styles.blocks.${t}.${e}`:`styles.${e}`;let u;switch(n){case"all":u=b(o.settings,t,null!==(l=(0,m.get)(s,i))&&void 0!==l?l:(0,m.get)(r,i));break;case"user":u=b(o.settings,t,(0,m.get)(s,i));break;case"base":u=b(r.settings,t,(0,m.get)(r,i));break;default:throw"Unsupported source"}return[u,n=>{c((l=>{const r=window.structuredClone(l);return(0,m.set)(r,i,function(e,t,n,l){if(!l)return l;const o=h[n],r=(0,m.find)(_,["cssVarInfix",o]);if(!r)return l;const{valueKey:a,path:s}=r,c=E(e,t,s,a,l);return c?`var:preset|${o}|${c.slug}`:l}(o.settings,t,e,n)),r}))}]}const C=["background","backgroundColor","color","linkColor","fontFamily","fontSize","fontStyle","fontWeight","lineHeight","textDecoration","textTransform","padding"];function w(e){if(!e)return C;const t=(0,o.getBlockType)(e);if(!t)return[];const n=[];return Object.keys(o.__EXPERIMENTAL_STYLE_PROPERTY).forEach((e=>{if(o.__EXPERIMENTAL_STYLE_PROPERTY[e].support)return o.__EXPERIMENTAL_STYLE_PROPERTY[e].requiresOptOut&&(0,m.has)(t.supports,o.__EXPERIMENTAL_STYLE_PROPERTY[e].support[0])&&!1!==(0,m.get)(t.supports,o.__EXPERIMENTAL_STYLE_PROPERTY[e].support)||(0,m.get)(t.supports,o.__EXPERIMENTAL_STYLE_PROPERTY[e].support,!1)?n.push(e):void 0})),n}function I(e){const[t]=v("color.palette.custom",e),[n]=v("color.palette.theme",e),[l]=v("color.palette.default",e),[o]=v("color.defaultPalette");return(0,a.useMemo)((()=>{const e=[];return n&&n.length&&e.push({name:(0,r._x)("Theme","Indicates this palette comes from the theme.","kubio"),colors:n}),o&&l&&l.length&&e.push({name:(0,r._x)("Default","Indicates this palette comes from WordPress.","kubio"),colors:l}),t&&t.length&&e.push({name:(0,r._x)("Custom","Indicates this palette is created by the user.","kubio"),colors:t}),e}),[t,n,l])}const P=()=>{const[n="serif"]=S("typography.fontFamily"),[l="black"]=S("color.text"),[o="blue"]=S("elements.link.color.text"),[r="white"]=S("color.background"),[a]=S("color.gradient");return(0,e.createElement)(t.Card,{className:"edit-site-global-styles-preview",style:{background:null!=a?a:r}},(0,e.createElement)(t.__experimentalHStack,{spacing:5},(0,e.createElement)("div",{style:{fontFamily:n,fontSize:"80px",color:l}},"Aa"),(0,e.createElement)(t.__experimentalVStack,{spacing:2},(0,e.createElement)(t.ColorIndicator,{colorValue:l}),(0,e.createElement)(t.ColorIndicator,{colorValue:o}))))},T=function({path:n,icon:l,children:o,isBack:r=!1,...a}){const c=(0,t.__experimentalUseNavigator)();return(0,e.createElement)(t.__experimentalItem,{onClick:()=>c.push(n,{isBack:r}),...a},l&&(0,e.createElement)(t.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(s,{icon:l,size:24})),(0,e.createElement)(t.FlexItem,null,o)),!l&&o)},M=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M6.9 7L3 17.8h1.7l1-2.8h4.1l1 2.8h1.7L8.6 7H6.9zm-.7 6.6l1.5-4.3 1.5 4.3h-3zM21.6 17c-.1.1-.2.2-.3.2-.1.1-.2.1-.4.1s-.3-.1-.4-.2c-.1-.1-.1-.3-.1-.6V12c0-.5 0-1-.1-1.4-.1-.4-.3-.7-.5-1-.2-.2-.5-.4-.9-.5-.4 0-.8-.1-1.3-.1s-1 .1-1.4.2c-.4.1-.7.3-1 .4-.2.2-.4.3-.6.5-.1.2-.2.4-.2.7 0 .3.1.5.2.8.2.2.4.3.8.3.3 0 .6-.1.8-.3.2-.2.3-.4.3-.7 0-.3-.1-.5-.2-.7-.2-.2-.4-.3-.6-.4.2-.2.4-.3.7-.4.3-.1.6-.1.8-.1.3 0 .6 0 .8.1.2.1.4.3.5.5.1.2.2.5.2.9v1.1c0 .3-.1.5-.3.6-.2.2-.5.3-.9.4-.3.1-.7.3-1.1.4-.4.1-.8.3-1.1.5-.3.2-.6.4-.8.7-.2.3-.3.7-.3 1.2 0 .6.2 1.1.5 1.4.3.4.9.5 1.6.5.5 0 1-.1 1.4-.3.4-.2.8-.6 1.1-1.1 0 .4.1.7.3 1 .2.3.6.4 1.2.4.4 0 .7-.1.9-.2.2-.1.5-.3.7-.4h-.3zm-3-.9c-.2.4-.5.7-.8.8-.3.2-.6.2-.8.2-.4 0-.6-.1-.9-.3-.2-.2-.3-.6-.3-1.1 0-.5.1-.9.3-1.2s.5-.5.8-.7c.3-.2.7-.3 1-.5.3-.1.6-.3.7-.6v3.4z"})),R=(0,e.createElement)(c.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)(c.Path,{d:"M17.2 10.9c-.5-1-1.2-2.1-2.1-3.2-.6-.9-1.3-1.7-2.1-2.6L12 4l-1 1.1c-.6.9-1.3 1.7-2 2.6-.8 1.2-1.5 2.3-2 3.2-.6 1.2-1 2.2-1 3 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-.8-.3-1.8-1-3zm-5.1 7.6c-2.5 0-4.6-2.1-4.6-4.6 0-.3.1-1 .8-2.3.5-.9 1.1-1.9 2-3.1.7-.9 1.3-1.7 1.8-2.3.7.8 1.3 1.6 1.8 2.3.8 1.1 1.5 2.2 2 3.1.7 1.3.8 2 .8 2.3 0 2.5-2.1 4.6-4.6 4.6z"})),V=(0,e.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(c.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})),N=window.wp.blockEditor,B=[];function L(e){return[F(e),O(e),z(e),A(e)].some(Boolean)}function F(e){const t=w(e);return v("border.color",e)[0]&&t.includes("borderColor")}function O(e){const t=w(e);return v("border.radius",e)[0]&&t.includes("borderRadius")}function z(e){const t=w(e);return v("border.style",e)[0]&&t.includes("borderStyle")}function A(e){const t=w(e);return v("border.width",e)[0]&&t.includes("borderWidth")}function G({name:n}){const[l]=S("border",n,"user"),o=e=>()=>!(null==l||!l[e]),a=e=>()=>e(void 0),s=e=>t=>{e(t||void 0)},c=(0,t.__experimentalUseCustomUnits)({availableUnits:v("spacing.units")[0]||["px","em","rem"]}),i=A(n),[u,m]=S("border.width",n),p=z(n),[d,g]=S("border.style",n),f=F(n),[_,h]=S("border.color",n),[E=B]=v("color.palette"),b=!v("color.custom")[0],y=!v("color.customGradient")[0],k=O(n),[x,C]=S("border.radius",n),w=e=>t=>{t&&!d&&g("solid"),e(t||void 0)};return(0,e.createElement)(t.__experimentalToolsPanel,{label:(0,r.__)("Border","kubio"),resetAll:()=>{h(void 0),C(void 0),g(void 0),m(void 0)}},i&&(0,e.createElement)(t.__experimentalToolsPanelItem,{className:"single-column",hasValue:o("width"),label:(0,r.__)("Width","kubio"),onDeselect:a(m),isShownByDefault:!0},(0,e.createElement)(t.__experimentalUnitControl,{value:u,label:(0,r.__)("Width","kubio"),min:0,onChange:w(m),units:c})),p&&(0,e.createElement)(t.__experimentalToolsPanelItem,{className:"single-column",hasValue:o("style"),label:(0,r.__)("Style","kubio"),onDeselect:a(g),isShownByDefault:!0},(0,e.createElement)(N.__experimentalBorderStyleControl,{value:d,onChange:s(g)})),f&&(0,e.createElement)(t.__experimentalToolsPanelItem,{hasValue:o("color"),label:(0,r.__)("Color","kubio"),onDeselect:a(h),isShownByDefault:!0},(0,e.createElement)(N.__experimentalColorGradientControl,{label:(0,r.__)("Color","kubio"),colorValue:_,colors:E,gradients:void 0,disableCustomColors:b,disableCustomGradients:y,onColorChange:w(h),clearable:!1})),k&&(0,e.createElement)(t.__experimentalToolsPanelItem,{hasValue:()=>{const e=null==l?void 0:l.radius;return"object"==typeof e?Object.entries(e).some(Boolean):!!e},label:(0,r.__)("Radius","kubio"),onDeselect:a(C),isShownByDefault:!0},(0,e.createElement)(N.__experimentalBorderRadiusControl,{values:x,onChange:s(C)})))}function $(e){const t=w(e);return t.includes("color")||t.includes("backgroundColor")||t.includes("background")||t.includes("linkColor")}const j=["horizontal","vertical"];function D(e){const t=H(e),n=W(e),l=U(e);return t||n||l}function H(e){const t=w(e),[n]=v("spacing.padding",e);return n&&t.includes("padding")}function W(e){const t=w(e),[n]=v("spacing.margin",e);return n&&t.includes("margin")}function U(e){const t=w(e),[n]=v("spacing.blockGap",e);return n&&t.includes("--wp--style--block-gap")}function X(e,t){if(!t)return e;const n={};return t.forEach((t=>{"vertical"===t&&(n.top=e.top,n.bottom=e.bottom),"horizontal"===t&&(n.left=e.left,n.right=e.right),n[t]=e[t]})),n}function Y(e){return e&&"string"==typeof e?{top:e,right:e,bottom:e,left:e}:e}function K({name:n}){const l=H(n),o=W(n),a=U(n),s=(0,t.__experimentalUseCustomUnits)({availableUnits:v("spacing.units",n)[0]||["%","px","em","rem","vw"]}),[c,i]=S("spacing.padding",n),u=Y(c),m=(0,N.__experimentalUseCustomSides)(n,"padding"),p=m&&m.some((e=>j.includes(e))),d=e=>{const t=X(e,m);i(t)},g=()=>d({}),[f,_]=S("spacing.margin",n),h=Y(f),E=(0,N.__experimentalUseCustomSides)(n,"margin"),b=E&&E.some((e=>j.includes(e))),y=e=>{const t=X(e,E);_(t)},k=()=>y({}),[x,C]=S("spacing.blockGap",n),w=()=>C(void 0);return(0,e.createElement)(t.__experimentalToolsPanel,{label:(0,r.__)("Dimensions","kubio"),resetAll:()=>{g(),k(),w()}},l&&(0,e.createElement)(t.__experimentalToolsPanelItem,{hasValue:()=>!!u&&Object.keys(u).length,label:(0,r.__)("Padding","kubio"),onDeselect:g,isShownByDefault:!0},(0,e.createElement)(t.__experimentalBoxControl,{values:u,onChange:d,label:(0,r.__)("Padding","kubio"),sides:m,units:s,allowReset:!1,splitOnAxis:p})),o&&(0,e.createElement)(t.__experimentalToolsPanelItem,{hasValue:()=>!!h&&Object.keys(h).length,label:(0,r.__)("Margin","kubio"),onDeselect:k,isShownByDefault:!0},(0,e.createElement)(t.__experimentalBoxControl,{values:h,onChange:y,label:(0,r.__)("Margin","kubio"),sides:E,units:s,allowReset:!1,splitOnAxis:b})),a&&(0,e.createElement)(t.__experimentalToolsPanelItem,{hasValue:()=>!!x,label:(0,r.__)("Block spacing","kubio"),onDeselect:w,isShownByDefault:!0},(0,e.createElement)(t.__experimentalUnitControl,{label:(0,r.__)("Block spacing","kubio"),__unstableInputWidth:"80px",min:0,onChange:C,units:s,value:x})))}function q(e){const t=J(e),n=Z(e),l=Q(e),o=w(e);return t||n||l||o.includes("fontSize")}function J(e){const t=w(e);return v("typography.lineHeight",e)[0]&&t.includes("lineHeight")}function Z(e){const t=w(e),n=v("typography.fontStyle",e)[0]&&t.includes("fontStyle"),l=v("typography.fontWeight",e)[0]&&t.includes("fontWeight");return n||l}function Q(e){const t=w(e);return v("typography.letterSpacing",e)[0]&&t.includes("letterSpacing")}function ee({name:n,element:l}){const o=w(n),r="text"!==l&&l?`elements.${l}.`:"",[a]=v("typography.fontSizes",n),s=!v("typography.customFontSize",n)[0],[c]=v("typography.fontFamilies",n),i=v("typography.fontStyle",n)[0]&&o.includes("fontStyle"),u=v("typography.fontWeight",n)[0]&&o.includes("fontWeight"),m=J(n),p=Z(n),d=Q(n),[g,f]=S(r+"typography.fontFamily",n),[_,h]=S(r+"typography.fontSize",n),[E,b]=S(r+"typography.fontStyle",n),[y,k]=S(r+"typography.fontWeight",n),[x,C]=S(r+"typography.lineHeight",n),[I,P]=S(r+"typography.letterSpacing",n),[T]=S(r+"color.background",n),[M]=S(r+"color.gradient",n),[R]=S(r+"color.text",n),V="link"===l?{textDecoration:"underline"}:{};return(0,e.createElement)(t.PanelBody,{className:"edit-site-typography-panel",initialOpen:!0},(0,e.createElement)("div",{className:"edit-site-typography-panel__preview",style:{fontFamily:null!=g?g:"serif",background:null!=M?M:T,color:R,fontSize:_,fontStyle:E,fontWeight:y,letterSpacing:I,...V}},"Aa"),o.includes("fontFamily")&&(0,e.createElement)(N.__experimentalFontFamilyControl,{fontFamilies:c,value:g,onChange:f}),o.includes("fontSize")&&(0,e.createElement)(t.FontSizePicker,{value:_,onChange:h,fontSizes:a,disableCustomFontSizes:s}),m&&(0,e.createElement)(N.LineHeightControl,{value:x,onChange:C}),p&&(0,e.createElement)(N.__experimentalFontAppearanceControl,{value:{fontStyle:E,fontWeight:y},onChange:({fontStyle:e,fontWeight:t})=>{b(e),k(t)},hasFontStyles:i,hasFontWeights:u}),d&&(0,e.createElement)(N.__experimentalLetterSpacingControl,{value:I,onChange:P}))}const te=function({name:n,parentMenu:l=""}){const o=q(n),a=$(n),s=L(n),c=D(n),i=s||c;return(0,e.createElement)(t.__experimentalItemGroup,null,o&&(0,e.createElement)(T,{icon:M,path:l+"/typography"},(0,r.__)("Typography","kubio")),a&&(0,e.createElement)(T,{icon:R,path:l+"/colors"},(0,r.__)("Colors","kubio")),i&&(0,e.createElement)(T,{icon:V,path:l+"/layout"},(0,r.__)("Layout","kubio")))},ne=function(){return(0,e.createElement)(t.Card,{size:"small"},(0,e.createElement)(t.CardBody,null,(0,e.createElement)(P,null)),(0,e.createElement)(t.CardBody,null,(0,e.createElement)(te,null)),(0,e.createElement)(t.CardDivider,null),(0,e.createElement)(t.CardBody,null,(0,e.createElement)(t.__experimentalItemGroup,null,(0,e.createElement)(t.__experimentalItem,null,(0,r.__)("Customize the appearance of specific blocks for the whole site.","kubio")),(0,e.createElement)(T,{path:"/blocks"},(0,e.createElement)(t.__experimentalHStack,{justify:"space-between"},(0,e.createElement)(t.FlexItem,null,(0,r.__)("Blocks","kubio")),(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(s,{icon:(0,r.isRTL)()?i:u})))))))},le=function({back:n,title:l,description:o}){return(0,e.createElement)(t.__experimentalVStack,{spacing:2},(0,e.createElement)(t.__experimentalHStack,{spacing:2},(0,e.createElement)(t.__experimentalView,null,(0,e.createElement)(T,{path:n,icon:(0,e.createElement)(s,{icon:(0,r.isRTL)()?u:i,variant:"muted"}),size:"small",isBack:!0,"aria-label":(0,r.__)("Navigate to the previous view","kubio")})),(0,e.createElement)(t.__experimentalSpacer,null,(0,e.createElement)(t.__experimentalHeading,{level:5},l))),o&&(0,e.createElement)("p",{className:"edit-site-global-styles-header__description"},o))};function oe({block:n}){const l=q(n.name),o=$(n.name),r=L(n.name),a=D(n.name);return l||o||r||a?(0,e.createElement)(T,{path:"/blocks/"+n.name},(0,e.createElement)(t.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(N.BlockIcon,{icon:n.icon})),(0,e.createElement)(t.FlexItem,null,n.title))):null}const re=function(){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:"/",title:(0,r.__)("Blocks","kubio"),description:(0,r.__)("Customize the appearance of specific blocks and for the whole site.","kubio")}),(0,o.getBlockTypes)().map((t=>(0,e.createElement)(oe,{block:t,key:"menu-itemblock-"+t.name}))))},ae=function({name:t}){const n=(0,o.getBlockType)(t);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:"/blocks",title:n.title}),(0,e.createElement)(te,{parentMenu:"/blocks/"+t,name:t}))},se=function({children:n}){return(0,e.createElement)(t.__experimentalHeading,{className:"edit-site-global-styles-subtitle",level:2},n)};function ce({name:n,parentMenu:l,element:o,label:a}){const s=!n,c="text"!==o&&o?`elements.${o}.`:"",i="link"===o?{textDecoration:"underline"}:{},[u]=S(c+"typography.fontFamily",n),[m]=S(c+"typography.fontStyle",n),[p]=S(c+"typography.fontWeight",n),[d]=S(c+"typography.letterSpacing",n),[g]=S(c+"color.background",n),[f]=S(c+"color.gradient",n),[_]=S(c+"color.text",n);return s?(0,e.createElement)(T,{path:l+"/typography/"+o},(0,e.createElement)(t.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(t.FlexItem,{className:"edit-site-global-styles-screen-typography__indicator",style:{fontFamily:null!=u?u:"serif",background:null!=f?f:g,color:_,fontStyle:m,fontWeight:p,letterSpacing:d,...i}},(0,r.__)("Aa","kubio")),(0,e.createElement)(t.FlexItem,null,a))):null}const ie=function({name:n}){const l=void 0===n?"":"/blocks/"+n;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:l||"/",title:(0,r.__)("Typography","kubio"),description:(0,r.__)("Manage the typography settings for different elements.","kubio")}),!n&&(0,e.createElement)("div",{className:"edit-site-global-styles-screen-typography"},(0,e.createElement)(t.__experimentalVStack,{spacing:3},(0,e.createElement)(se,null,(0,r.__)("Elements","kubio")),(0,e.createElement)(t.__experimentalItemGroup,{isBordered:!0,isSeparated:!0},(0,e.createElement)(ce,{name:n,parentMenu:l,element:"text",label:(0,r.__)("Text","kubio")}),(0,e.createElement)(ce,{name:n,parentMenu:l,element:"link",label:(0,r.__)("Links","kubio")})))),!!n&&(0,e.createElement)(ee,{name:n,element:"text"}))},ue={text:{description:(0,r.__)("Manage the fonts used on the site.","kubio"),title:(0,r.__)("Text","kubio")},link:{description:(0,r.__)("Manage the fonts and typography used on the links.","kubio"),title:(0,r.__)("Links","kubio")}},me=function({name:t,element:n}){const l=void 0===t?"/typography":"/blocks/"+t+"/typography";return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:l,title:ue[n].title,description:ue[n].description}),(0,e.createElement)(ee,{name:t,element:n}))},pe=[],de=function({name:n}){const[l]=v("color.palette.custom"),[o]=v("color.palette.theme"),[s]=v("color.palette.default"),[c]=v("color.defaultPalette",n),i=(0,a.useMemo)((()=>[...l||pe,...o||pe,...s&&c?s:pe]),[l,o,s,c]),u=n?"/blocks/"+n+"/colors/palette":"/colors/palette",m=i.length>0?(0,r.sprintf)(// Translators: %d: Number of palette colors.
// Translators: %d: Number of palette colors.
(0,r._n)("%d color","%d colors",i.length,"kubio"),i.length):(0,r.__)("Add custom colors","kubio");return(0,e.createElement)(t.__experimentalVStack,{spacing:3},(0,e.createElement)(se,null,(0,r.__)("Palette","kubio")),(0,e.createElement)(t.__experimentalItemGroup,{isBordered:!0,isSeparated:!0},(0,e.createElement)(T,{path:u},(0,e.createElement)(t.__experimentalHStack,{isReversed:0===i.length},(0,e.createElement)(t.FlexBlock,null,(0,e.createElement)(t.__experimentalZStack,{isLayered:!1,offset:-8},i.slice(0,5).map((({color:n})=>(0,e.createElement)(t.ColorIndicator,{key:n,colorValue:n}))))),(0,e.createElement)(t.FlexItem,null,m)))))};function ge({name:n,parentMenu:l}){const o=w(n),a=o.includes("backgroundColor")||o.includes("background"),[s]=S("color.background",n),[c]=S("color.gradient",n);return a?(0,e.createElement)(T,{path:l+"/colors/background"},(0,e.createElement)(t.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(t.ColorIndicator,{colorValue:null!=c?c:s})),(0,e.createElement)(t.FlexItem,null,(0,r.__)("Background","kubio")))):null}function fe({name:n,parentMenu:l}){const o=w(n).includes("color"),[a]=S("color.text",n);return o?(0,e.createElement)(T,{path:l+"/colors/text"},(0,e.createElement)(t.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(t.ColorIndicator,{colorValue:a})),(0,e.createElement)(t.FlexItem,null,(0,r.__)("Text","kubio")))):null}function _e({name:n,parentMenu:l}){const o=w(n).includes("linkColor"),[a]=S("elements.link.color.text",n);return o?(0,e.createElement)(T,{path:l+"/colors/link"},(0,e.createElement)(t.__experimentalHStack,{justify:"flex-start"},(0,e.createElement)(t.FlexItem,null,(0,e.createElement)(t.ColorIndicator,{colorValue:a})),(0,e.createElement)(t.FlexItem,null,(0,r.__)("Links","kubio")))):null}const he=function({name:n}){const l=void 0===n?"":"/blocks/"+n;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:l||"/",title:(0,r.__)("Colors","kubio"),description:(0,r.__)("Manage palettes and the default color of different global elements on the site.","kubio")}),(0,e.createElement)("div",{className:"edit-site-global-styles-screen-colors"},(0,e.createElement)(t.__experimentalVStack,{spacing:10},(0,e.createElement)(de,{name:n}),(0,e.createElement)(t.__experimentalVStack,{spacing:3},(0,e.createElement)(se,null,(0,r.__)("Elements","kubio")),(0,e.createElement)(t.__experimentalItemGroup,{isBordered:!0,isSeparated:!0},(0,e.createElement)(ge,{name:n,parentMenu:l}),(0,e.createElement)(fe,{name:n,parentMenu:l}),(0,e.createElement)(_e,{name:n,parentMenu:l}))))))};function Ee({name:n}){const[l,o]=v("color.palette.theme",n),[a]=v("color.palette.theme",n,"base"),[s,c]=v("color.palette.default",n),[i]=v("color.palette.default",n,"base"),[u,m]=v("color.palette.custom",n),[p]=v("color.defaultPalette",n);return(0,e.createElement)(t.__experimentalVStack,{className:"edit-site-global-styles-color-palette-panel",spacing:10},!!l&&!!l.length&&(0,e.createElement)(t.__experimentalPaletteEdit,{canReset:l!==a,canOnlyChangeValues:!0,colors:l,onChange:o,paletteLabel:(0,r.__)("Theme","kubio")}),!!s&&!!s.length&&!!p&&(0,e.createElement)(t.__experimentalPaletteEdit,{canReset:s!==i,canOnlyChangeValues:!0,colors:s,onChange:c,paletteLabel:(0,r.__)("Default","kubio")}),(0,e.createElement)(t.__experimentalPaletteEdit,{colors:u,onChange:m,paletteLabel:(0,r.__)("Custom","kubio"),emptyMessage:(0,r.__)("Custom colors are empty! Add some colors to create your own color palette.","kubio"),slugPrefix:"custom-"}))}function be({name:n}){const[l,o]=v("color.gradients.theme",n),[a]=v("color.gradients.theme",n,"base"),[s,c]=v("color.gradients.default",n),[i]=v("color.gradients.default",n,"base"),[u,p]=v("color.gradients.custom",n),[d]=v("color.defaultGradients",n),[g]=v("color.duotone")||[];return(0,e.createElement)(t.__experimentalVStack,{className:"edit-site-global-styles-gradient-palette-panel",spacing:10},!!l&&!!l.length&&(0,e.createElement)(t.__experimentalPaletteEdit,{canReset:l!==a,canOnlyChangeValues:!0,gradients:l,onChange:o,paletteLabel:(0,r.__)("Theme","kubio")}),!!s&&!!s.length&&!!d&&(0,e.createElement)(t.__experimentalPaletteEdit,{canReset:s!==i,canOnlyChangeValues:!0,gradients:s,onChange:c,paletteLabel:(0,r.__)("Default","kubio")}),(0,e.createElement)(t.__experimentalPaletteEdit,{gradients:u,onChange:p,paletteLabel:(0,r.__)("Custom","kubio"),emptyMessage:(0,r.__)("Custom gradients are empty! Add some gradients to create your own palette.","kubio"),slugPrefix:"custom-"}),(0,e.createElement)("div",null,(0,e.createElement)(se,null,(0,r.__)("Duotone","kubio")),(0,e.createElement)(t.__experimentalSpacer,{margin:3}),(0,e.createElement)(t.DuotonePicker,{duotonePalette:g,disableCustomDuotone:!0,disableCustomColors:!0,clearable:!1,onChange:m.noop})))}const ye=function({name:n}){const[l,o]=(0,a.useState)("solid"),s=void 0===n?"":"/blocks/"+n;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:s+"/colors",title:(0,r.__)("Palette","kubio"),description:(0,r.__)("Palettes are used to provide default color options for blocks and various design tools. Here you can edit the colors with their labels.","kubio")}),(0,e.createElement)(t.__experimentalToggleGroupControl,{className:"edit-site-screen-color-palette-toggle",value:l,onChange:o,label:(0,r.__)("Select palette type","kubio"),hideLabelFromVision:!0,isBlock:!0},(0,e.createElement)(t.__experimentalToggleGroupControlOption,{value:"solid",label:(0,r.__)("Solid","kubio")}),(0,e.createElement)(t.__experimentalToggleGroupControlOption,{value:"gradient",label:(0,r.__)("Gradient","kubio")})),"solid"===l&&(0,e.createElement)(Ee,{name:n}),"gradient"===l&&(0,e.createElement)(be,{name:n}))},ke=function({name:t}){const n=void 0===t?"":"/blocks/"+t,l=w(t),[o]=v("color.palette",t),[s]=v("color.gradients",t),[c]=v("color.custom",t),[i]=v("color.customGradient",t),u=I(t),m=function(e){const[t]=v("color.gradients.custom",e),[n]=v("color.gradients.theme",e),[l]=v("color.gradients.default",e),[o]=v("color.defaultGradients");return(0,a.useMemo)((()=>{const e=[];return n&&n.length&&e.push({name:(0,r._x)("Theme","Indicates this palette comes from the theme.","kubio"),gradients:n}),o&&l&&l.length&&e.push({name:(0,r._x)("Default","Indicates this palette comes from WordPress.","kubio"),gradients:l}),t&&t.length&&e.push({name:(0,r._x)("Custom","Indicates this palette is created by the user.","kubio"),gradients:t}),e}),[t,n,l])}(t),[p]=v("color.background",t),d=l.includes("backgroundColor")&&p&&(o.length>0||c),g=l.includes("background")&&(s.length>0||i),[f,_]=S("color.background",t),[h]=S("color.background",t,"user"),[E,b]=S("color.gradient",t),[y]=S("color.gradient",t,"user");if(!d&&!g)return null;let k={};d&&(k={colorValue:f,onColorChange:_},f&&(k.clearable=f===h));let x={};g&&(x={gradientValue:E,onGradientChange:b},E&&(x.clearable=E===y));const C={...k,...x};return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:n+"/colors",title:(0,r.__)("Background","kubio"),description:(0,r.__)("Set a background color or gradient for the whole site.","kubio")}),(0,e.createElement)(N.__experimentalColorGradientControl,{className:"edit-site-screen-background-color__control",colors:u,gradients:m,disableCustomColors:!c,disableCustomGradients:!i,__experimentalHasMultipleOrigins:!0,showTitle:!1,enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,...C}))},xe=function({name:t}){const n=void 0===t?"":"/blocks/"+t,l=w(t),[o]=v("color.palette",t),[a]=v("color.custom",t),[s]=v("color.text",t),c=I(t),i=l.includes("color")&&s&&(o.length>0||a),[u,m]=S("color.text",t),[p]=S("color.text",t,"user");return i?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:n+"/colors",title:(0,r.__)("Text","kubio"),description:(0,r.__)("Set the default color used for text across the site.","kubio")}),(0,e.createElement)(N.__experimentalColorGradientControl,{className:"edit-site-screen-text-color__control",colors:c,disableCustomColors:!a,__experimentalHasMultipleOrigins:!0,showTitle:!1,enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,colorValue:u,onColorChange:m,clearable:u===p})):null},ve=function({name:t}){const n=void 0===t?"":"/blocks/"+t,l=w(t),[o]=v("color.palette",t),[a]=v("color.custom",t),s=I(t),[c]=v("color.link",t),i=l.includes("linkColor")&&c&&(o.length>0||a),[u,m]=S("elements.link.color.text",t),[p]=S("elements.link.color.text",t,"user");return i?(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:n+"/colors",title:(0,r.__)("Links","kubio"),description:(0,r.__)("Set the default color used for links across the site.","kubio")}),(0,e.createElement)(N.__experimentalColorGradientControl,{className:"edit-site-screen-link-color__control",colors:s,disableCustomColors:!a,__experimentalHasMultipleOrigins:!0,showTitle:!1,enableAlpha:!0,__experimentalIsRenderedInSidebar:!0,colorValue:u,onColorChange:m,clearable:u===p})):null},Se=function({name:t}){const n=void 0===t?"":"/blocks/"+t,l=L(t),o=D(t);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(le,{back:n||"/",title:(0,r.__)("Layout","kubio")}),o&&(0,e.createElement)(K,{name:t}),l&&(0,e.createElement)(G,{name:t}))};function Ce({className:n,...l}){return(0,e.createElement)(t.__experimentalNavigatorScreen,{className:["edit-site-global-styles-sidebar__navigator-screen",n].filter(Boolean).join(" "),...l})}function we({name:t}){const n=void 0===t?"":"/blocks/"+t;return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(Ce,{path:n+"/typography"},(0,e.createElement)(ie,{name:t})),(0,e.createElement)(Ce,{path:n+"/typography/text"},(0,e.createElement)(me,{name:t,element:"text"})),(0,e.createElement)(Ce,{path:n+"/typography/link"},(0,e.createElement)(me,{name:t,element:"link"})),(0,e.createElement)(Ce,{path:n+"/colors"},(0,e.createElement)(he,{name:t})),(0,e.createElement)(Ce,{path:n+"/colors/palette"},(0,e.createElement)(ye,{name:t})),(0,e.createElement)(Ce,{path:n+"/colors/background"},(0,e.createElement)(ke,{name:t})),(0,e.createElement)(Ce,{path:n+"/colors/text"},(0,e.createElement)(xe,{name:t})),(0,e.createElement)(Ce,{path:n+"/colors/link"},(0,e.createElement)(ve,{name:t})),(0,e.createElement)(Ce,{path:n+"/layout"},(0,e.createElement)(Se,{name:t})))}const Ie=function(){const n=(0,o.getBlockTypes)();return(0,e.createElement)(t.__experimentalNavigatorProvider,{className:"edit-site-global-styles-sidebar__navigator-provider",initialPath:"/"},(0,e.createElement)(Ce,{path:"/"},(0,e.createElement)(ne,null)),(0,e.createElement)(Ce,{path:"/blocks"},(0,e.createElement)(re,null)),n.map((t=>(0,e.createElement)(Ce,{key:"menu-block-"+t.name,path:"/blocks/"+t.name},(0,e.createElement)(ae,{name:t.name})))),(0,e.createElement)(we,null),n.map((t=>(0,e.createElement)(we,{key:"screens-block-"+t.name,name:t.name}))))};function Pe(e){return(0,m.startsWith)(e,"var:")?`var(--wp--${e.slice(4).split("|").join("--")})`:e}function Te(e={},t,n){let l=[];return Object.keys(e).forEach((o=>{const r=t+(0,m.kebabCase)(o.replace("/","-")),a=e[o];if(a instanceof Object){const e=r+n;l=[...l,...Te(a,e,n)]}else l.push(`${r}: ${a}`)})),l}const Me=(e,t)=>{var n,l;const o=[];if(null==e||!e.settings)return o;const r=e=>{const t={};return _.forEach((({path:n})=>{const l=(0,m.get)(e,n,!1);!1!==l&&(0,m.set)(t,n,l)})),t},a=r(e.settings),s=null===(n=e.settings)||void 0===n?void 0:n.custom;return(0,m.isEmpty)(a)&&!s||o.push({presets:a,custom:s,selector:f}),(0,m.forEach)(null===(l=e.settings)||void 0===l?void 0:l.blocks,((e,n)=>{const l=r(e),a=e.custom;(0,m.isEmpty)(l)&&!a||o.push({presets:l,custom:a,selector:t[n].selector})})),o},Re=(e,t)=>{const n=Me(e,t);let l="";return n.forEach((({presets:e,custom:t,selector:n})=>{const o=function(e={}){return(0,m.reduce)(_,((t,{path:n,valueKey:l,cssVarInfix:o})=>{const r=(0,m.get)(e,n,[]);return["default","theme","custom"].forEach((e=>{r[e]&&r[e].forEach((e=>{t.push(`--wp--preset--${o}--${(0,m.kebabCase)(e.slug)}: ${e[l]}`)}))})),t}),[])}(e),r=Te(t,"--wp--custom--","--");r.length>0&&o.push(...r),o.length>0&&(l+=`${n}{${o.join(";")};}`)})),l},Ve=(e,t)=>{const n=((e,t)=>{var n,l;const r=[];if(null==e||!e.styles)return r;const a=e=>(0,m.pickBy)(e,((e,t)=>["border","color","spacing","typography"].includes(t))),s=a(e.styles);return s&&r.push({styles:s,selector:f}),(0,m.forEach)(null===(n=e.styles)||void 0===n?void 0:n.elements,((e,t)=>{e&&o.__EXPERIMENTAL_ELEMENTS[t]&&r.push({styles:e,selector:o.__EXPERIMENTAL_ELEMENTS[t]})})),(0,m.forEach)(null===(l=e.styles)||void 0===l?void 0:l.blocks,((e,n)=>{var l;const s=a(e);s&&null!=t&&null!==(l=t[n])&&void 0!==l&&l.selector&&r.push({styles:s,selector:t[n].selector}),(0,m.forEach)(null==e?void 0:e.elements,((e,l)=>{e&&null!=t&&t[n]&&null!==o.__EXPERIMENTAL_ELEMENTS&&void 0!==o.__EXPERIMENTAL_ELEMENTS&&o.__EXPERIMENTAL_ELEMENTS[l]&&r.push({styles:e,selector:t[n].selector.split(",").map((e=>e+" "+o.__EXPERIMENTAL_ELEMENTS[l])).join(",")})}))})),r})(e,t),l=Me(e,t);let r=".wp-site-blocks > * { margin-top: 0; margin-bottom: 0; }.wp-site-blocks > * + * { margin-top: var( --wp--style--block-gap ); }";return n.forEach((({selector:e,styles:t})=>{const n=function(e={}){return(0,m.reduce)(o.__EXPERIMENTAL_STYLE_PROPERTY,((t,{value:n,properties:l},o)=>{const r=n;if("elements"===(0,m.first)(r))return t;const a=(0,m.get)(e,r);if(l&&!(0,m.isString)(a))Object.entries(l).forEach((e=>{const[n,l]=e;if(!(0,m.get)(a,[l],!1))return;const o=(0,m.kebabCase)(n);t.push(`${o}: ${Pe((0,m.get)(a,[l]))}`)}));else if((0,m.get)(e,r,!1)){const n=o.startsWith("--")?o:(0,m.kebabCase)(o);t.push(`${n}: ${Pe((0,m.get)(e,r))}`)}return t}),[])}(t);0!==n.length&&(r+=`${e}{${n.join(";")};}`)})),l.forEach((({selector:e,presets:t})=>{f===e&&(e="");const n=function(e,t={}){return(0,m.reduce)(_,((n,{path:l,cssVarInfix:o,classes:r})=>{if(!r)return n;const a=(0,m.get)(t,l,[]);return["default","theme","custom"].forEach((t=>{a[t]&&a[t].forEach((({slug:t})=>{r.forEach((({classSuffix:l,propertyName:r})=>{const a=`.has-${(0,m.kebabCase)(t)}-${l}`,s=e.split(",").map((e=>`${e}${a}`)).join(","),c=`var(--wp--preset--${o}--${(0,m.kebabCase)(t)})`;n+=`${s}{${r}: ${c} !important;}`}))}))})),n}),"")}(e,t);(0,m.isEmpty)(n)||(r+=n)})),r},Ne=e=>{const t={};return e.forEach((e=>{var n,l;const o=e.name,r=null!==(n=null==e||null===(l=e.supports)||void 0===l?void 0:l.__experimentalSelector)&&void 0!==n?n:".wp-block-"+o.replace("core/","").replace("/","-");t[o]={name:o,selector:r}})),t};function Be(){const[e,t]=(0,a.useState)([]),[n,l]=(0,a.useState)({}),{merged:r}=(0,a.useContext)(g);return(0,a.useEffect)((()=>{if(null==r||!r.styles||null==r||!r.settings)return;const e=Ne((0,o.getBlockTypes)()),n=Re(r,e),a=Ve(r,e);t([{css:n,isGlobalStyles:!0},{css:a,isGlobalStyles:!0}]),l(r.settings)}),[r]),[e,n]}const Le=window.wp.coreData,Fe=window.wp.data;function Oe(e,t){if(Array.isArray(t))return t}const ze=e=>{if(null===e||"object"!=typeof e||Array.isArray(e))return e;const t=Object.fromEntries(Object.entries((0,m.mapValues)(e,ze)).filter((([,e])=>Boolean(e))));return(0,m.isEmpty)(t)?void 0:t};function Ae({children:t}){const n=function(){const[e,t,n]=function(){const{globalStylesId:e,settings:t,styles:n}=(0,Fe.useSelect)((e=>{const t=e(Le.store).__experimentalGetCurrentGlobalStylesId(),n=t?e(Le.store).getEditedEntityRecord("root","globalStyles",t):void 0;return{globalStylesId:t,settings:null==n?void 0:n.settings,styles:null==n?void 0:n.styles}}),[]),{getEditedEntityRecord:l}=(0,Fe.useSelect)(Le.store),{editEntityRecord:o}=(0,Fe.useDispatch)(Le.store),r=(0,a.useMemo)((()=>({settings:null!=t?t:{},styles:null!=n?n:{}})),[t,n]),s=(0,a.useCallback)((t=>{var n,r;const a=l("root","globalStyles",e),s=t({styles:null!==(n=null==a?void 0:a.styles)&&void 0!==n?n:{},settings:null!==(r=null==a?void 0:a.settings)&&void 0!==r?r:{}});o("root","globalStyles",e,{styles:ze(s.styles)||{},settings:ze(s.settings)||{}})}),[e]);return[!!t||!!n,r,s]}(),[l,o]=function(){const e=(0,Fe.useSelect)((e=>e(Le.store).__experimentalGetCurrentThemeBaseGlobalStyles()),[]);return[!!e,e]}(),r=(0,a.useMemo)((()=>{return o&&t?(e=o,n=t,(0,m.mergeWith)({},e,n,Oe)):{};var e,n}),[t,o]);return(0,a.useMemo)((()=>({isReady:e&&l,user:t,base:o,merged:r,setUserConfig:n})),[r,t,o,n,e,l])}();return(0,e.createElement)(g.Provider,{value:n},t)}})(),(window.kubio=window.kubio||{}).wpGlobalStyles=l})();