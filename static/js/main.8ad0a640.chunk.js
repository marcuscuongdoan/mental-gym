(this["webpackJsonpmental-gym"]=this["webpackJsonpmental-gym"]||[]).push([[0],{27:function(e,a,t){},28:function(e,a,t){},45:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(18),m=t.n(i),s=(t(27),t(15)),r=(t(28),t(9)),o=t(2),g=t(13),l=(t(45),t.p+"static/media/art_1.eea87dba.png"),d=t.p+"static/media/art_2.a58d2942.png",p=t.p+"static/media/art_3.cdb1ae72.png",j=t.p+"static/media/neuroart.285445ad.png",A=t.p+"static/media/zentangle.fff135ff.png",b=t.p+"static/media/mental_check.c3a642f3.png",x=t(1);var S=function(){return Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("div",{className:"art",children:Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"art-item",children:[Object(x.jsx)("img",{className:"item",src:j,alt:"Neuroart"}),Object(x.jsx)("img",{className:"person",src:l,alt:"art1"})]}),Object(x.jsxs)("div",{className:"art-item",children:[Object(x.jsx)("img",{className:"item",src:A,alt:"Zentangle"}),Object(x.jsx)("img",{className:"person",src:d,alt:"art2"})]}),Object(x.jsxs)("div",{className:"art-item",children:[Object(x.jsx)("img",{className:"item",src:b,alt:"Mental Check"}),Object(x.jsx)("img",{className:"person",src:p,alt:"art3"})]})]})})})},h=t(22),u=(t(47),t.p+"static/media/background.3a74a9e1.png"),I={art:{name:"art",img:t.p+"static/media/art.e02fd7da.png"},locker:{name:"locker",img:t.p+"static/media/locker.94862688.png"},lounge:{name:"lounge",img:t.p+"static/media/lounge.64768837.png"},movement:{name:"movement",img:t.p+"static/media/movement.f1a02162.png"},smoothie:{name:"smoothie",img:t.p+"static/media/smoothie.4885771f.png"},sound:{name:"sound",img:t.p+"static/media/sound.74f48b70.png"},spa:{name:"spa",img:t.p+"static/media/spa.0a35cda4.png"},theatre:{name:"theatre",img:t.p+"static/media/theatre.c0084a9e.png"},write:{name:"write",img:t.p+"static/media/write.eec2c514.png"},yoga:{name:"yoga",img:t.p+"static/media/yoga.79f3b410.png"}},O=["art","locker","lounge","movement","smoothie","sound","spa","theatre","write","yoga"];var f=[{path:"/",name:"Home",component:function(){var e=Object(n.useState)(u),a=Object(h.a)(e,2),t=a[0],c=a[1],i=Object(o.f)(),m=function(e){var a=I[e.target.id];return c(a.img)},s=function(e){var a=I[e.target.id];i.push("/"+a.name)};return Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)("div",{className:"Home",children:[Object(x.jsx)("img",{className:"background",src:u,alt:"background"}),O.map((function(e){return Object(x.jsx)("div",{id:e,className:"selector",onMouseOver:m,onClick:s},e)})),Object(x.jsx)("img",{className:"room",src:t,alt:"background"})]})})}},{path:"/art",name:"Art",component:S}],w=t.p+"static/media/goethe.f522ad52.png";var N=function(){function e(e){return Object(g.b)(e,{stiffness:330,damping:22})}var a={atEnter:{opacity:0,scale:.8},atLeave:{opacity:e(0),scale:e(2)},atActive:{opacity:e(1),scale:e(1)}};return Object(x.jsxs)("div",{className:"container-wrapper",children:[Object(x.jsx)(r.a,{children:Object(x.jsx)(g.a,{atEnter:a.atEnter,atLeave:a.atLeave,atActive:a.atActive,mapStyles:function(e){return{opacity:e.opacity,transform:"scale(".concat(e.scale,")")}},className:"route-wrapper",children:f.map((function(e){return Object(n.createElement)(o.a,Object(s.a)(Object(s.a)({exact:!0},e),{},{key:e.name}))}))})}),Object(x.jsxs)("div",{className:"logo",children:[Object(x.jsx)("img",{src:w,alt:"Goethe Institute"}),Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"YOGAPOD"})]})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,49)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,i=a.getLCP,m=a.getTTFB;t(e),n(e),c(e),i(e),m(e)}))};m.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(N,{})}),document.getElementById("root")),k()}},[[48,1,2]]]);
//# sourceMappingURL=main.8ad0a640.chunk.js.map