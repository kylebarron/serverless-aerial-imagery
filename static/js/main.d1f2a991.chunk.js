(this.webpackJsonpsite=this.webpackJsonpsite||[]).push([[0],{20:function(a,t,e){a.exports=e(30)},25:function(a,t,e){},26:function(a,t,e){},30:function(a,t,e){"use strict";e.r(t);var n=e(3),r=e.n(n),i=e(18),o=e.n(i),l=(e(25),e(5)),s=e(4),m=e(7),c=e(6),d=e(8),p=(e(26),e(10)),b=function(a){function t(){var a,e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=Object(m.a)(this,(a=Object(c.a)(t)).call.apply(a,[this].concat(r)))).state={viewport:{latitude:37.8,longitude:-122.4,zoom:14,bearing:0,pitch:0}},e.landsatUrl=function(){var a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={bands:"4,3,2",color_ops:"gamma RGB 3.5, saturation 1.7, sigmoidal RGB 15 0.35"};a&&(t.pan=!0);var e=new URLSearchParams(t),n="https://landsat-lambda.kylebarron.dev/tiles/229bc0ed88ac7f39effdb554efa0959766e41bb3948754faba13f74f/{z}/{x}/{y}@2x.jpg?";return n+=e.toString()},e.naipUrl=function(){var a="https://naip-lambda.kylebarron.dev/7610d6d77fca346802fb21b89668cb12ef3162a31eb71734a8aaf5de/{z}/{x}/{y}@2x.jpg?";return a+=new URLSearchParams({color_ops:"sigmoidal RGB 4 0.5, saturation 1.25"}).toString()},e}return Object(d.a)(t,a),Object(s.a)(t,[{key:"render",value:function(){var a=this;return r.a.createElement(p.c,Object.assign({},this.state.viewport,{width:"100vw",height:"100vh",mapOptions:{hash:!0},mapStyle:"https://raw.githubusercontent.com/kylebarron/fiord-color-gl-style/master/style.json",onViewportChange:function(t){return a.setState({viewport:t})}}),r.a.createElement(p.b,{id:"naip-lambda",type:"raster",minzoom:12,maxzoom:16,tiles:[this.naipUrl()],tileSize:512},r.a.createElement(p.a,{id:"naip-lambda-layer",type:"raster",minzoom:12})),r.a.createElement(p.b,{id:"landsat-lambda",type:"raster",tileSize:512,tiles:[this.landsatUrl()],minzoom:7,maxzoom:11},r.a.createElement(p.a,{id:"landsat-lambda-layer",type:"raster",maxzoom:11})),r.a.createElement(p.b,{id:"landsat-lambda-pan",type:"raster",tileSize:512,tiles:[this.landsatUrl(!0)],minzoom:11,maxzoom:12},r.a.createElement(p.a,{id:"landsat-lambda-layer-pan",type:"raster",maxzoom:12})))}}]),t}(r.a.Component);o.a.render(r.a.createElement(b,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.d1f2a991.chunk.js.map