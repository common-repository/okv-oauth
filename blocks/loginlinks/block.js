(()=>{"use strict";var e,o={688:(e,o,t)=>{const n=window.React,r=window.wp.blocks,l=window.wp.blockEditor,i=window.wp.i18n,a=window.wp.serverSideRender;var s=t.n(a);const d=window.wp.components,c=JSON.parse('{"u2":"rd-oauth/blocks-loginlinks"}');(0,r.registerBlockType)(c.u2,{edit:({attributes:e,setAttributes:o})=>{const{displayLinkToAdmin:t,displayLinkToEditProfile:r}=e;return console.log((0,i.__)("Display link to admin dashboard","okv-oauth")),(0,n.createElement)("p",{...(0,l.useBlockProps)()},(0,n.createElement)(s(),{block:"rd-oauth/blocks-loginlinks",attributes:e}),(0,n.createElement)(l.InspectorControls,{key:"setting"},(0,n.createElement)("div",{id:"rd-oauth-loginlinks-controls",class:"components-panel__body is-opened"},(0,n.createElement)("fieldset",null,(0,n.createElement)(d.ToggleControl,{label:(0,i.__)("Display link to admin dashboard","okv-oauth"),checked:t,onChange:()=>o({displayLinkToAdmin:!t})})),(0,n.createElement)("fieldset",null,(0,n.createElement)(d.ToggleControl,{label:(0,i.__)("Display link to edit profile","okv-oauth"),checked:r,onChange:()=>o({displayLinkToEditProfile:!r})})))))}})}},t={};function n(e){var r=t[e];if(void 0!==r)return r.exports;var l=t[e]={exports:{}};return o[e](l,l.exports,n),l.exports}n.m=o,e=[],n.O=(o,t,r,l)=>{if(!t){var i=1/0;for(c=0;c<e.length;c++){for(var[t,r,l]=e[c],a=!0,s=0;s<t.length;s++)(!1&l||i>=l)&&Object.keys(n.O).every((e=>n.O[e](t[s])))?t.splice(s--,1):(a=!1,l<i&&(i=l));if(a){e.splice(c--,1);var d=r();void 0!==d&&(o=d)}}return o}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[t,r,l]},n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={961:0,646:0};n.O.j=o=>0===e[o];var o=(o,t)=>{var r,l,[i,a,s]=t,d=0;if(i.some((o=>0!==e[o]))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(s)var c=s(n)}for(o&&o(t);d<i.length;d++)l=i[d],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},t=globalThis.webpackChunkokv_oauth=globalThis.webpackChunkokv_oauth||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))})();var r=n.O(void 0,[646],(()=>n(688)));r=n.O(r)})();