!function(e,t,r,n,a){var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof l[n]&&l[n],c=o.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function i(t,r){if(!c[t]){if(!e[t]){var a="function"==typeof l[n]&&l[n];if(!r&&a)return a(t,!0);if(o)return o(t,!0);if(s&&"string"==typeof t)return s(t);var u=Error("Cannot find module '"+t+"'");throw u.code="MODULE_NOT_FOUND",u}k.resolve=function(r){var n=e[t][1][r];return null!=n?n:r},k.cache={};var d=c[t]=new i.Module(t);e[t][0].call(d.exports,k,d,d.exports,this)}return c[t].exports;function k(e){var t=k.resolve(e);return!1===t?{}:i(t)}}i.isParcelRequire=!0,i.Module=function(e){this.id=e,this.bundle=i,this.exports={}},i.modules=e,i.cache=c,i.parent=o,i.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(i,"root",{get:function(){return l[n]}}),l[n]=i;for(var u=0;u<t.length;u++)i(t[u])}({dQbBp:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");n.defineInteropFlag(r),n.export(r,"diagram",()=>x);var a=e("./chunk-K2ZEYYM2.mjs"),l=e("./chunk-S2G4O3TG.mjs");e("./chunk-DWEQZNRV.mjs"),e("./chunk-W5WXJUCF.mjs"),e("./chunk-S7WIF5TY.mjs");var o=e("./chunk-Z4IMCIJ3.mjs"),c=e("./chunk-F3FIDV27.mjs");e("./chunk-GKOISANM.mjs");var s=e("./chunk-ZXHTWV66.mjs");e("./chunk-6PZBHVHY.mjs"),e("./chunk-ZGAMZTAH.mjs"),e("./chunk-U4JKYEUK.mjs"),e("./chunk-TZBO7MLI.mjs"),e("./chunk-GRZAG2UZ.mjs"),e("./chunk-HD3LK5B5.mjs");var i=e("./chunk-DLQEHMXD.mjs"),u={packet:[]},d=structuredClone(u),k=s.defaultConfig_default.packet,p=/* @__PURE__ */(0,i.__name)(()=>{let e=(0,c.cleanAndMerge)({...k,...(0,s.getConfig)().packet});return e.showBits&&(e.paddingY+=10),e},"getConfig"),m=/* @__PURE__ */(0,i.__name)(()=>d.packet,"getPacket"),f={pushWord:/* @__PURE__ */(0,i.__name)(e=>{e.length>0&&d.packet.push(e)},"pushWord"),getPacket:m,getConfig:p,clear:/* @__PURE__ */(0,i.__name)(()=>{(0,s.clear)(),d=structuredClone(u)},"clear"),setAccTitle:s.setAccTitle,getAccTitle:s.getAccTitle,setDiagramTitle:s.setDiagramTitle,getDiagramTitle:s.getDiagramTitle,getAccDescription:s.getAccDescription,setAccDescription:s.setAccDescription},h=/* @__PURE__ */(0,i.__name)(e=>{(0,a.populateCommonDb)(e,f);let t=-1,r=[],n=1,{bitsPerRow:l}=f.getConfig();for(let{start:a,end:o,label:c}of e.blocks){if(o&&o<a)throw Error(`Packet block ${a} - ${o} is invalid. End must be greater than start.`);if(a!==t+1)throw Error(`Packet block ${a} - ${o??a} is not contiguous. It should start from ${t+1}.`);for(t=o??a,(0,s.log).debug(`Packet block ${a} - ${t} with label ${c}`);r.length<=l+1&&f.getPacket().length<1e4;){let[e,t]=g({start:a,end:o,label:c},n,l);if(r.push(e),e.end+1===n*l&&(f.pushWord(r),r=[],n++),!t)break;({start:a,end:o,label:c}=t)}}f.pushWord(r)},"populate"),g=/* @__PURE__ */(0,i.__name)((e,t,r)=>{if(void 0===e.end&&(e.end=e.start),e.start>e.end)throw Error(`Block start ${e.start} is greater than block end ${e.end}.`);return e.end+1<=t*r?[e,void 0]:[{start:e.start,end:t*r-1,label:e.label},{start:t*r,end:e.end,label:e.label}]},"getNextFittingBlock"),b={parse:/* @__PURE__ */(0,i.__name)(async e=>{let t=await (0,l.parse)("packet",e);(0,s.log).debug(t),h(t)},"parse")},j=/* @__PURE__ */(0,i.__name)((e,t,r,n)=>{let a=n.db,l=a.getConfig(),{rowHeight:c,paddingY:i,bitWidth:u,bitsPerRow:d}=l,k=a.getPacket(),p=a.getDiagramTitle(),m=c+i,f=m*(k.length+1)-(p?0:c),h=u*d+2,g=(0,o.selectSvgElement)(t);for(let[e,t]of(g.attr("viewbox",`0 0 ${h} ${f}`),(0,s.configureSvgSize)(g,f,h,l.useMaxWidth),k.entries()))D(g,t,e,l);g.append("text").text(p).attr("x",h/2).attr("y",f-m/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),D=/* @__PURE__ */(0,i.__name)((e,t,r,{rowHeight:n,paddingX:a,paddingY:l,bitWidth:o,bitsPerRow:c,showBits:s})=>{let i=e.append("g"),u=r*(n+l)+l;for(let e of t){let t=e.start%c*o+1,r=(e.end-e.start+1)*o-a;if(i.append("rect").attr("x",t).attr("y",u).attr("width",r).attr("height",n).attr("class","packetBlock"),i.append("text").attr("x",t+r/2).attr("y",u+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(e.label),!s)continue;let l=e.end===e.start,d=u-2;i.append("text").attr("x",t+(l?r/2:0)).attr("y",d).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",l?"middle":"start").text(e.start),l||i.append("text").attr("x",t+r).attr("y",d).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(e.end)}},"drawWord"),y={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},x={parser:b,db:f,renderer:{draw:j},styles:/* @__PURE__ */(0,i.__name)(({packet:e}={})=>{let t=(0,c.cleanAndMerge)(y,e);return`
	.packetByte {
		font-size: ${t.byteFontSize};
	}
	.packetByte.start {
		fill: ${t.startByteColor};
	}
	.packetByte.end {
		fill: ${t.endByteColor};
	}
	.packetLabel {
		fill: ${t.labelColor};
		font-size: ${t.labelFontSize};
	}
	.packetTitle {
		fill: ${t.titleColor};
		font-size: ${t.titleFontSize};
	}
	.packetBlock {
		stroke: ${t.blockStrokeColor};
		stroke-width: ${t.blockStrokeWidth};
		fill: ${t.blockFillColor};
	}
	`},"styles")}},{"./chunk-K2ZEYYM2.mjs":"MWQ3J","./chunk-S2G4O3TG.mjs":"dDNEE","./chunk-DWEQZNRV.mjs":"iFleL","./chunk-W5WXJUCF.mjs":"cNvOT","./chunk-S7WIF5TY.mjs":"gFBIs","./chunk-Z4IMCIJ3.mjs":"keZBJ","./chunk-F3FIDV27.mjs":"4aBfS","./chunk-GKOISANM.mjs":"9F7Gp","./chunk-ZXHTWV66.mjs":"iF86s","./chunk-6PZBHVHY.mjs":"1MOSN","./chunk-ZGAMZTAH.mjs":"bzkx3","./chunk-U4JKYEUK.mjs":"8jgcc","./chunk-TZBO7MLI.mjs":"9m8dA","./chunk-GRZAG2UZ.mjs":"4I8cr","./chunk-HD3LK5B5.mjs":"cz0yX","./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}],MWQ3J:[function(e,t,r){var n=e("@parcel/transformer-js/src/esmodule-helpers.js");function a(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}n.defineInteropFlag(r),n.export(r,"populateCommonDb",()=>a),(0,e("./chunk-DLQEHMXD.mjs").__name)(a,"populateCommonDb")},{"./chunk-DLQEHMXD.mjs":"1MRh8","@parcel/transformer-js/src/esmodule-helpers.js":"XTfsy"}]},[],0,"parcelRequire20b6");