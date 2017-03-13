// threejs.org/license
(function(k,wa){"object"===typeof exports&&"undefined"!==typeof module?wa(exports):"function"===typeof define&&define.amd?define('threejs',["exports"],wa):wa(k.THREE=k.THREE||{})})(this,function(k){function wa(){}function D(a,b){this.x=a||0;this.y=b||0}function ea(a,b,c,d,e,f,g,h,l,m){Object.defineProperty(this,"id",{value:cf++});this.uuid=N.generateUUID();this.name="";this.image=void 0!==a?a:ea.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:ea.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=
void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==l?l:1;this.format=void 0!==g?g:1023;this.type=void 0!==h?h:1009;this.offset=new D(0,0);this.repeat=new D(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function ga(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function Db(a,b,c){this.uuid=N.generateUUID();this.width=
a;this.height=b;this.scissor=new ga(0,0,a,b);this.scissorTest=!1;this.viewport=new ga(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=1006);this.texture=new ea(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Eb(a,b,c){Db.call(this,a,b,c);this.activeMipMapLevel=
this.activeCubeFace=0}function na(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function q(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0}function S(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function Za(a,b,c,d,e,f,g,h,l,m){a=void 0!==a?a:[];ea.call(this,a,void 0!==b?b:301,c,d,e,f,g,h,l,m);this.flipY=!1}function Fb(a,b,c){var d=a[0];if(0>=d||0<d)return a;
var e=b*c,f=we[e];void 0===f&&(f=new Float32Array(e),we[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function xe(a,b){var c=ye[b];void 0===c&&(c=new Int32Array(b),ye[b]=c);for(var d=0;d!==b;++d)c[d]=a.allocTextureUnit();return c}function df(a,b){a.uniform1f(this.addr,b)}function ef(a,b){a.uniform1i(this.addr,b)}function ff(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y)}function gf(a,b){void 0!==b.x?a.uniform3f(this.addr,b.x,b.y,b.z):
void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b)}function hf(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w)}function jf(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b)}function kf(a,b){a.uniformMatrix3fv(this.addr,!1,b.elements||b)}function lf(a,b){void 0===b.elements?a.uniformMatrix4fv(this.addr,!1,b):(ze.set(b.elements),a.uniformMatrix4fv(this.addr,!1,ze))}function mf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTexture2D(b||
Ae,d)}function nf(a,b,c){var d=c.allocTextureUnit();a.uniform1i(this.addr,d);c.setTextureCube(b||Be,d)}function Ce(a,b){a.uniform2iv(this.addr,b)}function De(a,b){a.uniform3iv(this.addr,b)}function Ee(a,b){a.uniform4iv(this.addr,b)}function of(a){switch(a){case 5126:return df;case 35664:return ff;case 35665:return gf;case 35666:return hf;case 35674:return jf;case 35675:return kf;case 35676:return lf;case 35678:return mf;case 35680:return nf;case 5124:case 35670:return ef;case 35667:case 35671:return Ce;
case 35668:case 35672:return De;case 35669:case 35673:return Ee}}function pf(a,b){a.uniform1fv(this.addr,b)}function qf(a,b){a.uniform1iv(this.addr,b)}function rf(a,b){a.uniform2fv(this.addr,Fb(b,this.size,2))}function sf(a,b){a.uniform3fv(this.addr,Fb(b,this.size,3))}function tf(a,b){a.uniform4fv(this.addr,Fb(b,this.size,4))}function uf(a,b){a.uniformMatrix2fv(this.addr,!1,Fb(b,this.size,4))}function vf(a,b){a.uniformMatrix3fv(this.addr,!1,Fb(b,this.size,9))}function wf(a,b){a.uniformMatrix4fv(this.addr,
!1,Fb(b,this.size,16))}function xf(a,b,c){var d=b.length,e=xe(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTexture2D(b[a]||Ae,e[a])}function yf(a,b,c){var d=b.length,e=xe(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.setTextureCube(b[a]||Be,e[a])}function zf(a){switch(a){case 5126:return pf;case 35664:return rf;case 35665:return sf;case 35666:return tf;case 35674:return uf;case 35675:return vf;case 35676:return wf;case 35678:return xf;case 35680:return yf;case 5124:case 35670:return qf;
case 35667:case 35671:return Ce;case 35668:case 35672:return De;case 35669:case 35673:return Ee}}function Af(a,b,c){this.id=a;this.addr=c;this.setValue=of(b.type)}function Bf(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=zf(b.type)}function Fe(a){this.id=a;this.seq=[];this.map={}}function $a(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,l=
h.length;for(Qd.lastIndex=0;;){var m=Qd.exec(h),t=Qd.lastIndex,p=m[1],n=m[3];"]"===m[2]&&(p|=0);if(void 0===n||"["===n&&t+2===l){h=g;e=void 0===n?new Af(p,e,f):new Bf(p,e,f);h.seq.push(e);h.map[e.id]=e;break}else n=g.map[p],void 0===n&&(n=new Fe(p),p=g,g=n,p.seq.push(g),p.map[g.id]=g),g=n}}}function J(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function db(a,b,c,d,e,f,g,h,l,m,t,p){ea.call(this,null,f,g,h,l,m,d,e,t,p);this.image={data:a,width:b,height:c};this.magFilter=void 0!==
l?l:1003;this.minFilter=void 0!==m?m:1003;this.flipY=this.generateMipmaps=!1;this.unpackAlignment=1}function id(a,b){this.min=void 0!==a?a:new D(Infinity,Infinity);this.max=void 0!==b?b:new D(-Infinity,-Infinity)}function Cf(a,b){var c,d,e,f,g,h,l,m,t,p,n=a.context,u=a.state,k,r,G,w,y,K;this.render=function(v,E,L){if(0!==b.length){v=new q;var C=L.w/L.z,F=.5*L.z,da=.5*L.w,H=16/L.w,aa=new D(H*C,H),Ca=new q(1,1,0),eb=new D(1,1),Rd=new id;Rd.min.set(L.x,L.y);Rd.max.set(L.x+(L.z-16),L.y+(L.w-16));if(void 0===
w){var H=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),Q=new Uint16Array([0,1,2,0,2,3]);k=n.createBuffer();r=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,k);n.bufferData(n.ARRAY_BUFFER,H,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);n.bufferData(n.ELEMENT_ARRAY_BUFFER,Q,n.STATIC_DRAW);y=n.createTexture();K=n.createTexture();u.bindTexture(n.TEXTURE_2D,y);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);u.bindTexture(n.TEXTURE_2D,K);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,
n.TEXTURE_MIN_FILTER,n.NEAREST);var H=G={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},Q=n.createProgram(),M=n.createShader(n.FRAGMENT_SHADER),
O=n.createShader(n.VERTEX_SHADER),P="precision "+a.getPrecision()+" float;\n";n.shaderSource(M,P+H.fragmentShader);n.shaderSource(O,P+H.vertexShader);n.compileShader(M);n.compileShader(O);n.attachShader(Q,M);n.attachShader(Q,O);n.linkProgram(Q);w=Q;t=n.getAttribLocation(w,"position");p=n.getAttribLocation(w,"uv");c=n.getUniformLocation(w,"renderType");d=n.getUniformLocation(w,"map");e=n.getUniformLocation(w,"occlusionMap");f=n.getUniformLocation(w,"opacity");g=n.getUniformLocation(w,"color");h=n.getUniformLocation(w,
"scale");l=n.getUniformLocation(w,"rotation");m=n.getUniformLocation(w,"screenPosition")}n.useProgram(w);u.initAttributes();u.enableAttribute(t);u.enableAttribute(p);u.disableUnusedAttributes();n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,k);n.vertexAttribPointer(t,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,r);u.disable(n.CULL_FACE);u.setDepthWrite(!1);Q=0;for(M=b.length;Q<M;Q++)if(H=16/L.w,aa.set(H*C,H),O=b[Q],v.set(O.matrixWorld.elements[12],
O.matrixWorld.elements[13],O.matrixWorld.elements[14]),v.applyMatrix4(E.matrixWorldInverse),v.applyMatrix4(E.projectionMatrix),Ca.copy(v),eb.x=L.x+Ca.x*F+F-8,eb.y=L.y+Ca.y*da+da-8,!0===Rd.containsPoint(eb)){u.activeTexture(n.TEXTURE0);u.bindTexture(n.TEXTURE_2D,null);u.activeTexture(n.TEXTURE1);u.bindTexture(n.TEXTURE_2D,y);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,eb.x,eb.y,16,16,0);n.uniform1i(c,0);n.uniform2f(h,aa.x,aa.y);n.uniform3f(m,Ca.x,Ca.y,Ca.z);u.disable(n.BLEND);u.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,
6,n.UNSIGNED_SHORT,0);u.activeTexture(n.TEXTURE0);u.bindTexture(n.TEXTURE_2D,K);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,eb.x,eb.y,16,16,0);n.uniform1i(c,1);u.disable(n.DEPTH_TEST);u.activeTexture(n.TEXTURE1);u.bindTexture(n.TEXTURE_2D,y);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);O.positionScreen.copy(Ca);O.customUpdateCallback?O.customUpdateCallback(O):O.updateLensFlares();n.uniform1i(c,2);u.enable(n.BLEND);for(var P=0,ja=O.lensFlares.length;P<ja;P++){var W=O.lensFlares[P];.001<W.opacity&&.001<
W.scale&&(Ca.x=W.x,Ca.y=W.y,Ca.z=W.z,H=W.size*W.scale/L.w,aa.x=H*C,aa.y=H,n.uniform3f(m,Ca.x,Ca.y,Ca.z),n.uniform2f(h,aa.x,aa.y),n.uniform1f(l,W.rotation),n.uniform1f(f,W.opacity),n.uniform3f(g,W.color.r,W.color.g,W.color.b),u.setBlending(W.blending,W.blendEquation,W.blendSrc,W.blendDst),a.setTexture2D(W.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0))}}u.enable(n.CULL_FACE);u.enable(n.DEPTH_TEST);u.setDepthWrite(!0);a.resetGLState()}}}function Df(a,b){var c,d,e,f,g,h,l,m,t,p,n,u,k,r,
G,w,y;function K(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id}var v=a.context,E=a.state,L,C,F,da,H=new q,aa=new na,Ca=new q;this.render=function(q,D){if(0!==b.length){if(void 0===F){var Q=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),M=new Uint16Array([0,1,2,0,2,3]);L=v.createBuffer();C=v.createBuffer();v.bindBuffer(v.ARRAY_BUFFER,L);v.bufferData(v.ARRAY_BUFFER,Q,v.STATIC_DRAW);v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,C);v.bufferData(v.ELEMENT_ARRAY_BUFFER,
M,v.STATIC_DRAW);var Q=v.createProgram(),M=v.createShader(v.VERTEX_SHADER),O=v.createShader(v.FRAGMENT_SHADER);v.shaderSource(M,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
v.shaderSource(O,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
v.compileShader(M);v.compileShader(O);v.attachShader(Q,M);v.attachShader(Q,O);v.linkProgram(Q);F=Q;w=v.getAttribLocation(F,"position");y=v.getAttribLocation(F,"uv");c=v.getUniformLocation(F,"uvOffset");d=v.getUniformLocation(F,"uvScale");e=v.getUniformLocation(F,"rotation");f=v.getUniformLocation(F,"scale");g=v.getUniformLocation(F,"color");h=v.getUniformLocation(F,"map");l=v.getUniformLocation(F,"opacity");m=v.getUniformLocation(F,"modelViewMatrix");t=v.getUniformLocation(F,"projectionMatrix");p=
v.getUniformLocation(F,"fogType");n=v.getUniformLocation(F,"fogDensity");u=v.getUniformLocation(F,"fogNear");k=v.getUniformLocation(F,"fogFar");r=v.getUniformLocation(F,"fogColor");G=v.getUniformLocation(F,"alphaTest");Q=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");Q.width=8;Q.height=8;M=Q.getContext("2d");M.fillStyle="white";M.fillRect(0,0,8,8);da=new ea(Q);da.needsUpdate=!0}v.useProgram(F);E.initAttributes();E.enableAttribute(w);E.enableAttribute(y);E.disableUnusedAttributes();
E.disable(v.CULL_FACE);E.enable(v.BLEND);v.bindBuffer(v.ARRAY_BUFFER,L);v.vertexAttribPointer(w,2,v.FLOAT,!1,16,0);v.vertexAttribPointer(y,2,v.FLOAT,!1,16,8);v.bindBuffer(v.ELEMENT_ARRAY_BUFFER,C);v.uniformMatrix4fv(t,!1,D.projectionMatrix.elements);E.activeTexture(v.TEXTURE0);v.uniform1i(h,0);M=Q=0;(O=q.fog)?(v.uniform3f(r,O.color.r,O.color.g,O.color.b),O.isFog?(v.uniform1f(u,O.near),v.uniform1f(k,O.far),v.uniform1i(p,1),M=Q=1):O.isFogExp2&&(v.uniform1f(n,O.density),v.uniform1i(p,2),M=Q=2)):(v.uniform1i(p,
0),M=Q=0);for(var O=0,P=b.length;O<P;O++){var ja=b[O];ja.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,ja.matrixWorld);ja.z=-ja.modelViewMatrix.elements[14]}b.sort(K);for(var W=[],O=0,P=b.length;O<P;O++){var ja=b[O],A=ja.material;!1!==A.visible&&(v.uniform1f(G,A.alphaTest),v.uniformMatrix4fv(m,!1,ja.modelViewMatrix.elements),ja.matrixWorld.decompose(H,aa,Ca),W[0]=Ca.x,W[1]=Ca.y,ja=0,q.fog&&A.fog&&(ja=M),Q!==ja&&(v.uniform1i(p,ja),Q=ja),null!==A.map?(v.uniform2f(c,A.map.offset.x,A.map.offset.y),
v.uniform2f(d,A.map.repeat.x,A.map.repeat.y)):(v.uniform2f(c,0,0),v.uniform2f(d,1,1)),v.uniform1f(l,A.opacity),v.uniform3f(g,A.color.r,A.color.g,A.color.b),v.uniform1f(e,A.rotation),v.uniform2fv(f,W),E.setBlending(A.blending,A.blendEquation,A.blendSrc,A.blendDst),E.setDepthTest(A.depthTest),E.setDepthWrite(A.depthWrite),A.map?a.setTexture2D(A.map,0):a.setTexture2D(da,0),v.drawElements(v.TRIANGLES,6,v.UNSIGNED_SHORT,0))}E.enable(v.CULL_FACE);a.resetGLState()}}}function X(){Object.defineProperty(this,
"id",{value:Ef++});this.uuid=N.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=1;this.side=0;this.shading=2;this.vertexColors=0;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.colorWrite=!0;this.precision=null;this.polygonOffset=
!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.premultipliedAlpha=!1;this.overdraw=0;this._needsUpdate=this.visible=!0}function Ga(a){X.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=
this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}function ab(a){X.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=
this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a)}function Ua(a,b){this.min=void 0!==a?a:new q(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new q(-Infinity,-Infinity,-Infinity)}function Pa(a,b){this.center=void 0!==a?a:new q;this.radius=void 0!==b?b:0}function La(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}
function ua(a,b){this.normal=void 0!==a?a:new q(1,0,0);this.constant=void 0!==b?b:0}function jd(a,b,c,d,e,f){this.planes=[void 0!==a?a:new ua,void 0!==b?b:new ua,void 0!==c?c:new ua,void 0!==d?d:new ua,void 0!==e?e:new ua,void 0!==f?f:new ua]}function Ge(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g;g=G;var h=b.customDepthMaterial;d&&(g=w,h=b.customDistanceMaterial);h?g=h:(h=!1,c.morphTargets&&(f&&f.isBufferGeometry?h=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:
f&&f.isGeometry&&(h=f.morphTargets&&0<f.morphTargets.length)),b=b.isSkinnedMesh&&c.skinning,f=0,h&&(f|=1),b&&(f|=2),g=g[f]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(f=g.uuid,h=c.uuid,b=y[f],void 0===b&&(b={},y[f]=b),f=b[h],void 0===f&&(f=g.clone(),b[h]=f),g=f);g.visible=c.visible;g.wireframe=c.wireframe;h=c.side;aa.renderSingleSided&&2==h&&(h=0);aa.renderReverseSided&&(0===h?h=1:1===h&&(h=0));g.side=h;g.clipShadows=c.clipShadows;g.clippingPlanes=c.clippingPlanes;g.wireframeLinewidth=
c.wireframeLinewidth;g.linewidth=c.linewidth;d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e);return g}function f(a,b,c){if(!1!==a.visible){0!==(a.layers.mask&b.layers.mask)&&(a.isMesh||a.isLine||a.isPoints)&&a.castShadow&&(!1===a.frustumCulled||!0===l.intersectsObject(a))&&!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),r.push(a));a=a.children;for(var d=0,e=a.length;d<e;d++)f(a[d],b,c)}}var g=a.context,h=a.state,l=new jd,m=new S,
t=b.shadows,p=new D,n=new D(d.maxTextureSize,d.maxTextureSize),u=new q,k=new q,r=[],G=Array(4),w=Array(4),y={},K=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],v=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)],E=[new ga,new ga,new ga,new ga,new ga,new ga];b=new ab;b.depthPacking=3201;b.clipping=!0;d=bb.distanceRGBA;for(var L=Ia.clone(d.uniforms),C=0;4!==C;++C){var F=0!==(C&1),da=0!==(C&2),H=b.clone();H.morphTargets=F;H.skinning=
da;G[C]=H;F=new Ga({defines:{USE_SHADOWMAP:""},uniforms:L,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,morphTargets:F,skinning:da,clipping:!0});w[C]=F}var aa=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.renderSingleSided=this.renderReverseSided=!0;this.render=function(b,d){if(!1!==aa.enabled&&(!1!==aa.autoUpdate||!1!==aa.needsUpdate)&&0!==t.length){h.buffers.color.setClear(1,1,1,1);h.disable(g.BLEND);h.setDepthTest(!0);h.setScissorTest(!1);for(var y,
q,G=0,C=t.length;G<C;G++){var w=t[G],L=w.shadow;if(void 0===L)console.warn("THREE.WebGLShadowMap:",w,"has no shadow.");else{var F=L.camera;p.copy(L.mapSize);p.min(n);if(w&&w.isPointLight){y=6;q=!0;var H=p.x,da=p.y;E[0].set(2*H,da,H,da);E[1].set(0,da,H,da);E[2].set(3*H,da,H,da);E[3].set(H,da,H,da);E[4].set(3*H,0,H,da);E[5].set(H,0,H,da);p.x*=4;p.y*=2}else y=1,q=!1;null===L.map&&(L.map=new Db(p.x,p.y,{minFilter:1003,magFilter:1003,format:1023}),L.map.texture.name=w.name+".shadowMap",F.updateProjectionMatrix());
L.isSpotLightShadow&&L.update(w);L&&L.isRectAreaLightShadow&&L.update(w);H=L.map;L=L.matrix;k.setFromMatrixPosition(w.matrixWorld);F.position.copy(k);a.setRenderTarget(H);a.clear();for(H=0;H<y;H++){q?(u.copy(F.position),u.add(K[H]),F.up.copy(v[H]),F.lookAt(u),h.viewport(E[H])):(u.setFromMatrixPosition(w.target.matrixWorld),F.lookAt(u));F.updateMatrixWorld();F.matrixWorldInverse.getInverse(F.matrixWorld);L.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);L.multiply(F.projectionMatrix);L.multiply(F.matrixWorldInverse);
m.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse);l.setFromMatrix(m);r.length=0;f(b,d,F);for(var da=0,A=r.length;da<A;da++){var D=r[da],Sd=c.update(D),Sa=D.material;if(Sa&&Sa.isMultiMaterial)for(var He=Sd.groups,Sa=Sa.materials,z=0,Da=He.length;z<Da;z++){var I=He[z],J=Sa[I.materialIndex];!0===J.visible&&(J=e(D,J,q,k),a.renderBufferDirect(F,null,Sd,J,D,I))}else J=e(D,Sa,q,k),a.renderBufferDirect(F,null,Sd,J,D,null)}}}}y=a.getClearColor();q=a.getClearAlpha();a.setClearColor(y,q);aa.needsUpdate=
!1}}}function gb(a,b){this.origin=void 0!==a?a:new q;this.direction=void 0!==b?b:new q}function cb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||cb.DefaultOrder}function Td(){this.mask=1}function A(){Object.defineProperty(this,"id",{value:Ff++});this.uuid=N.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=A.DefaultUp.clone();var a=new q,b=new cb,c=new na,d=new q(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,
void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new S},normalMatrix:{value:new La}});this.matrix=new S;this.matrixWorld=new S;this.matrixAutoUpdate=A.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new Td;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};this.onBeforeRender=
function(){};this.onAfterRender=function(){}}function Gb(a,b){this.start=void 0!==a?a:new q;this.end=void 0!==b?b:new q}function Va(a,b,c){this.a=void 0!==a?a:new q;this.b=void 0!==b?b:new q;this.c=void 0!==c?c:new q}function qa(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d&&d.isVector3?d:new q;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new J;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function Ja(a){X.call(this);this.type="MeshBasicMaterial";
this.color=new J(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a)}function U(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
this.uuid=N.generateUUID();this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function sc(a,b){U.call(this,new Int8Array(a),b)}function tc(a,b){U.call(this,new Uint8Array(a),b)}function uc(a,b){U.call(this,new Uint8ClampedArray(a),b)}function vc(a,b){U.call(this,new Int16Array(a),b)}function hb(a,b){U.call(this,new Uint16Array(a),b)}function wc(a,b){U.call(this,
new Int32Array(a),b)}function ib(a,b){U.call(this,new Uint32Array(a),b)}function z(a,b){U.call(this,new Float32Array(a),b)}function xc(a,b){U.call(this,new Float64Array(a),b)}function Ie(){this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=
!1}function Ud(a){for(var b=a.length,c=-Infinity;b--;)a[b]>c&&(c=a[b]);return c}function T(){Object.defineProperty(this,"id",{value:Vd++});this.uuid=N.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=
this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function I(){Object.defineProperty(this,"id",{value:Vd++});this.uuid=N.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity}}function xa(a,b){A.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new I;this.material=void 0!==b?b:new Ja({color:16777215*Math.random()});this.drawMode=
0;this.updateMorphTargets()}function Hb(a,b,c,d,e,f){T.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new jb(a,b,c,d,e,f));this.mergeVertices()}function jb(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,k,L,C,F){var da=f/L,H=g/C,aa=f/2,A=g/2,D=k/2;g=L+1;var z=C+1,Q=f=0,M,O,P=new q;for(O=0;O<z;O++){var J=O*H-A;for(M=0;M<g;M++)P[a]=(M*da-aa)*d,P[b]=J*e,P[c]=D,m.push(P.x,P.y,P.z),P[a]=0,P[b]=0,P[c]=0<k?1:-1,
t.push(P.x,P.y,P.z),p.push(M/L),p.push(1-O/C),f+=1}for(O=0;O<C;O++)for(M=0;M<L;M++)a=n+M+g*(O+1),b=n+(M+1)+g*(O+1),c=n+(M+1)+g*O,l.push(n+M+g*O,a,c),l.push(a,b,c),Q+=6;h.addGroup(u,Q,F);u+=Q;n+=f}I.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var l=[],m=[],t=[],p=[],n=0,u=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x",
"z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(l);this.addAttribute("position",new z(m,3));this.addAttribute("normal",new z(t,3));this.addAttribute("uv",new z(p,2))}function yc(a,b,c,d){T.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new kb(a,b,c,d))}function kb(a,b,c,d){I.call(this);this.type="PlaneBufferGeometry";this.parameters=
{width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,l=a/c,m=b/d,t=[],p=[],n=[],u=[];for(a=0;a<h;a++){var k=a*m-f;for(b=0;b<g;b++)p.push(b*l-e,-k,0),n.push(0,0,1),u.push(b/c),u.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,t.push(b+g*a,e,h),t.push(e,f,h);this.setIndex(t);this.addAttribute("position",new z(p,3));this.addAttribute("normal",new z(n,3));this.addAttribute("uv",new z(u,2))}function oa(){A.call(this);
this.type="Camera";this.matrixWorldInverse=new S;this.projectionMatrix=new S}function Ea(a,b,c,d){oa.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Ib(a,b,c,d,e,f){oa.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=
void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function Gf(a,b,c){var d,e,f;return{setMode:function(a){d=a},setIndex:function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,f=4):c.array instanceof Uint16Array?(e=a.UNSIGNED_SHORT,f=2):(e=a.UNSIGNED_BYTE,f=1)},render:function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3)},renderInstances:function(g,h,l){var m=b.get("ANGLE_instanced_arrays");null===
m?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(m.drawElementsInstancedANGLE(d,l,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=l*g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*l/3))}}}function Hf(a,b,c){var d;return{setMode:function(a){d=a},render:function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3)},renderInstances:function(e){var f=b.get("ANGLE_instanced_arrays");
if(null===f)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var g=e.attributes.position,g=g.isInterleavedBufferAttribute?g.data.count:g.count;f.drawArraysInstancedANGLE(d,0,g,e.maxInstancedCount);c.calls++;c.vertices+=g*e.maxInstancedCount;d===a.TRIANGLES&&(c.faces+=e.maxInstancedCount*g/3)}}}}function If(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case "DirectionalLight":c=
{direction:new q,color:new J,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "SpotLight":c={position:new q,direction:new q,color:new J,distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "PointLight":c={position:new q,color:new J,distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new D};break;case "HemisphereLight":c={direction:new q,skyColor:new J,groundColor:new J};break;case "RectAreaLight":c=
{color:new J,position:new q,halfWidth:new q,halfHeight:new q}}return a[b.id]=c}}}function Jf(a){a=a.split("\n");for(var b=0;b<a.length;b++)a[b]=b+1+": "+a[b];return a.join("\n")}function Je(a,b,c){var d=a.createShader(b);a.shaderSource(d,c);a.compileShader(d);!1===a.getShaderParameter(d,a.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==a.getShaderInfoLog(d)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b===a.VERTEX_SHADER?"vertex":"fragment",a.getShaderInfoLog(d),
Jf(c));return d}function Ke(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD","( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function Wd(a,b){var c=Ke(b);return"vec4 "+a+"( vec4 value ) { return "+c[0]+"ToLinear"+c[1]+"; }"}function Kf(a,
b){var c=Ke(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function Lf(a,b){var c;switch(b){case 1:c="Linear";break;case 2:c="Reinhard";break;case 3:c="Uncharted2";break;case 4:c="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function Mf(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":
"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zc).join("\n")}function Nf(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}function zc(a){return""!==a}function Le(a,b){return a.replace(/NUM_DIR_LIGHTS/g,
b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights)}function Xd(a){return a.replace(/#include +<([\w\d.]+)>/g,function(a,c){var d=Z[c];if(void 0===d)throw Error("Can not resolve #include <"+c+">");return Xd(d)})}function Me(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,c,d,e){a="";for(c=parseInt(c);c<
parseInt(d);c++)a+=e.replace(/\[ i \]/g,"[ "+c+" ]");return a})}function Of(a,b,c,d){var e=a.context,f=c.extensions,g=c.defines,h=c.__webglShader.vertexShader,l=c.__webglShader.fragmentShader,m="SHADOWMAP_TYPE_BASIC";1===d.shadowMapType?m="SHADOWMAP_TYPE_PCF":2===d.shadowMapType&&(m="SHADOWMAP_TYPE_PCF_SOFT");var t="ENVMAP_TYPE_CUBE",p="ENVMAP_MODE_REFLECTION",n="ENVMAP_BLENDING_MULTIPLY";if(d.envMap){switch(c.envMap.mapping){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:case 307:t="ENVMAP_TYPE_CUBE_UV";
break;case 303:case 304:t="ENVMAP_TYPE_EQUIREC";break;case 305:t="ENVMAP_TYPE_SPHERE"}switch(c.envMap.mapping){case 302:case 304:p="ENVMAP_MODE_REFRACTION"}switch(c.combine){case 0:n="ENVMAP_BLENDING_MULTIPLY";break;case 1:n="ENVMAP_BLENDING_MIX";break;case 2:n="ENVMAP_BLENDING_ADD"}}var u=0<a.gammaFactor?a.gammaFactor:1,f=Mf(f,d,a.extensions),k=Nf(g),r=e.createProgram();c.isRawShaderMaterial?(g=[k,"\n"].filter(zc).join("\n"),m=[f,k,"\n"].filter(zc).join("\n")):(g=["precision "+d.precision+" float;",
"precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,k,d.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+u,"#define MAX_BONES "+d.maxBones,d.useFog&&d.fog?"#define USE_FOG":"",d.useFog&&d.fogExp?"#define FOG_EXP2":"",d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+p:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?
"#define USE_NORMALMAP":"",d.displacementMap&&d.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.flatShading?"#define FLAT_SHADED":"",d.skinning?"#define USE_SKINNING":"",d.useVertexTexture?"#define BONE_TEXTURE":"",d.morphTargets?"#define USE_MORPHTARGETS":"",d.morphNormals&&!1===d.flatShading?
"#define USE_MORPHNORMALS":"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+m:"",d.sizeAttenuation?"#define USE_SIZEATTENUATION":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;",
"uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;",
"\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(zc).join("\n"),m=[f,"precision "+d.precision+" float;","precision "+d.precision+" int;","#define SHADER_NAME "+c.__webglShader.name,k,d.alphaTest?"#define ALPHATEST "+d.alphaTest:"","#define GAMMA_FACTOR "+
u,d.useFog&&d.fog?"#define USE_FOG":"",d.useFog&&d.fogExp?"#define FOG_EXP2":"",d.map?"#define USE_MAP":"",d.envMap?"#define USE_ENVMAP":"",d.envMap?"#define "+t:"",d.envMap?"#define "+p:"",d.envMap?"#define "+n:"",d.lightMap?"#define USE_LIGHTMAP":"",d.aoMap?"#define USE_AOMAP":"",d.emissiveMap?"#define USE_EMISSIVEMAP":"",d.bumpMap?"#define USE_BUMPMAP":"",d.normalMap?"#define USE_NORMALMAP":"",d.specularMap?"#define USE_SPECULARMAP":"",d.roughnessMap?"#define USE_ROUGHNESSMAP":"",d.metalnessMap?
"#define USE_METALNESSMAP":"",d.alphaMap?"#define USE_ALPHAMAP":"",d.vertexColors?"#define USE_COLOR":"",d.gradientMap?"#define USE_GRADIENTMAP":"",d.flatShading?"#define FLAT_SHADED":"",d.doubleSided?"#define DOUBLE_SIDED":"",d.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+d.numClippingPlanes,"#define UNION_CLIPPING_PLANES "+(d.numClippingPlanes-d.numClipIntersection),d.shadowMapEnabled?"#define USE_SHADOWMAP":"",d.shadowMapEnabled?"#define "+m:"",d.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":
"",d.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",d.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",d.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",d.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",0!==d.toneMapping?"#define TONE_MAPPING":"",0!==d.toneMapping?Z.tonemapping_pars_fragment:"",0!==d.toneMapping?Lf("toneMapping",d.toneMapping):"",
d.outputEncoding||d.mapEncoding||d.envMapEncoding||d.emissiveMapEncoding?Z.encodings_pars_fragment:"",d.mapEncoding?Wd("mapTexelToLinear",d.mapEncoding):"",d.envMapEncoding?Wd("envMapTexelToLinear",d.envMapEncoding):"",d.emissiveMapEncoding?Wd("emissiveMapTexelToLinear",d.emissiveMapEncoding):"",d.outputEncoding?Kf("linearToOutputTexel",d.outputEncoding):"",d.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(zc).join("\n"));h=Xd(h,d);h=Le(h,d);l=Xd(l,d);l=Le(l,d);c.isShaderMaterial||
(h=Me(h),l=Me(l));l=m+l;h=Je(e,e.VERTEX_SHADER,g+h);l=Je(e,e.FRAGMENT_SHADER,l);e.attachShader(r,h);e.attachShader(r,l);void 0!==c.index0AttributeName?e.bindAttribLocation(r,0,c.index0AttributeName):!0===d.morphTargets&&e.bindAttribLocation(r,0,"position");e.linkProgram(r);d=e.getProgramInfoLog(r);t=e.getShaderInfoLog(h);p=e.getShaderInfoLog(l);u=n=!0;if(!1===e.getProgramParameter(r,e.LINK_STATUS))n=!1,console.error("THREE.WebGLProgram: shader error: ",e.getError(),"gl.VALIDATE_STATUS",e.getProgramParameter(r,
e.VALIDATE_STATUS),"gl.getProgramInfoLog",d,t,p);else if(""!==d)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",d);else if(""===t||""===p)u=!1;u&&(this.diagnostics={runnable:n,material:c,programLog:d,vertexShader:{log:t,prefix:g},fragmentShader:{log:p,prefix:m}});e.deleteShader(h);e.deleteShader(l);var q;this.getUniforms=function(){void 0===q&&(q=new $a(e,r,a));return q};var w;this.getAttributes=function(){if(void 0===w){for(var a={},b=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),c=0;c<
b;c++){var d=e.getActiveAttrib(r,c).name;a[d]=e.getAttribLocation(r,d)}w=a}return w};this.destroy=function(){e.deleteProgram(r);this.program=void 0};Object.defineProperties(this,{uniforms:{get:function(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms()}},attributes:{get:function(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes()}}});this.id=Pf++;this.code=b;this.usedTimes=1;this.program=r;this.vertexShader=
h;this.fragmentShader=l;return this}function Qf(a,b){function c(a,b){var c;a?a.isTexture?c=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding):c=3E3;3E3===c&&b&&(c=3007);return c}var d=[],e={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"phong",MeshStandardMaterial:"physical",
MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},f="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking".split(" ");
this.getParameters=function(d,f,l,m,t,p){var n=e[d.type],u;b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture?u=1024:(u=Math.floor((b.maxVertexUniforms-20)/4),void 0!==p&&p&&p.isSkinnedMesh&&(u=Math.min(p.skeleton.bones.length,u),u<p.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+p.skeleton.bones.length+", this GPU supports just "+u+" (try OpenGL instead of ANGLE)")));var k=a.getPrecision();null!==d.precision&&(k=b.getMaxPrecision(d.precision),k!==d.precision&&
console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",k,"instead."));var r=a.getCurrentRenderTarget();return{shaderID:n,precision:k,supportsVertexTextures:b.vertexTextures,outputEncoding:c(r?r.texture:null,a.gammaOutput),map:!!d.map,mapEncoding:c(d.map,a.gammaInput),envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,envMapEncoding:c(d.envMap,a.gammaInput),envMapCubeUV:!!d.envMap&&(306===d.envMap.mapping||307===d.envMap.mapping),lightMap:!!d.lightMap,aoMap:!!d.aoMap,
emissiveMap:!!d.emissiveMap,emissiveMapEncoding:c(d.emissiveMap,a.gammaInput),bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,gradientMap:!!d.gradientMap,combine:d.combine,vertexColors:d.vertexColors,fog:!!l,useFog:d.fog,fogExp:l&&l.isFogExp2,flatShading:1===d.shading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:d.skinning,
maxBones:u,useVertexTexture:b.floatVertexTextures&&p&&p.skeleton&&p.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numRectAreaLights:f.rectArea.length,numHemiLights:f.hemi.length,numClippingPlanes:m,numClipIntersection:t,shadowMapEnabled:a.shadowMap.enabled&&p.receiveShadow&&0<f.shadows.length,shadowMapType:a.shadowMap.type,
toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:d.premultipliedAlpha,alphaTest:d.alphaTest,doubleSided:2===d.side,flipSided:1===d.side,depthPacking:void 0!==d.depthPacking?d.depthPacking:!1}};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines)c.push(d),c.push(a.defines[d]);for(d=0;d<f.length;d++)c.push(b[f[d]]);return c.join()};this.acquireProgram=
function(b,c,e){for(var f,t=0,p=d.length;t<p;t++){var n=d[t];if(n.code===e){f=n;++f.usedTimes;break}}void 0===f&&(f=new Of(a,e,b,c),d.push(f));return f};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=d.indexOf(a);d[b]=d[d.length-1];d.pop();a.destroy()}};this.programs=d}function Rf(a,b,c){function d(a){var h=a.target;a=f[h.id];null!==a.index&&e(a.index);var l=a.attributes,m;for(m in l)e(l[m]);h.removeEventListener("dispose",d);delete f[h.id];m=b.get(h);m.wireframe&&e(m.wireframe);b["delete"](h);
h=b.get(a);h.wireframe&&e(h.wireframe);b["delete"](a);c.memory.geometries--}function e(c){var d;d=c.isInterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c.isInterleavedBufferAttribute?b["delete"](c.data):b["delete"](c))}var f={};return{get:function(a){var b=a.geometry;if(void 0!==f[b.id])return f[b.id];b.addEventListener("dispose",d);var e;b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=(new I).setFromObject(a)),
e=b._bufferGeometry);f[b.id]=e;c.memory.geometries++;return e}}}function Sf(a,b,c){function d(c,d){var e=c.isInterleavedBufferAttribute?c.data:c,l=b.get(e);if(void 0===l.__webglBuffer){l.__webglBuffer=a.createBuffer();a.bindBuffer(d,l.__webglBuffer);a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW);var m=a.FLOAT,t=e.array;t instanceof Float32Array?m=a.FLOAT:t instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):t instanceof Uint16Array?m=a.UNSIGNED_SHORT:
t instanceof Int16Array?m=a.SHORT:t instanceof Uint32Array?m=a.UNSIGNED_INT:t instanceof Int32Array?m=a.INT:t instanceof Int8Array?m=a.BYTE:t instanceof Uint8Array&&(m=a.UNSIGNED_BYTE);l.bytesPerElement=t.BYTES_PER_ELEMENT;l.type=m;l.version=e.version;e.onUploadCallback()}else l.version!==e.version&&(a.bindBuffer(d,l.__webglBuffer),!1===e.dynamic?a.bufferData(d,e.array,a.STATIC_DRAW):-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):
(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),l.version=e.version)}var e=new Rf(a,b,c);return{getAttributeBuffer:function(a){return a.isInterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer},getAttributeProperties:function(a){return a.isInterleavedBufferAttribute?b.get(a.data):b.get(a)},getWireframeAttribute:function(c){var e=b.get(c);if(void 0!==e.wireframe)return e.wireframe;
var h=[],l=c.index;c=c.attributes;if(null!==l){l=l.array;c=0;for(var m=l.length;c<m;c+=3){var t=l[c+0],p=l[c+1],n=l[c+2];h.push(t,p,p,n,n,t)}}else for(l=c.position.array,c=0,m=l.length/3-1;c<m;c+=3)t=c+0,p=c+1,n=c+2,h.push(t,p,p,n,n,t);h=new (65535<Ud(h)?ib:hb)(h,1);d(h,a.ELEMENT_ARRAY_BUFFER);return e.wireframe=h},update:function(b){var c=e.get(b);b.geometry.isGeometry&&c.updateFromObject(b);b=c.index;var h=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);for(var l in h)d(h[l],a.ARRAY_BUFFER);
b=c.morphAttributes;for(l in b)for(var h=b[l],m=0,t=h.length;m<t;m++)d(h[m],a.ARRAY_BUFFER);return c}}}function Tf(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+
d.width+"x"+d.height,a);return d}return a}function l(a){return N.isPowerOfTwo(a.width)&&N.isPowerOfTwo(a.height)}function m(b){return 1003===b||1004===b||1005===b?a.NEAREST:a.LINEAR}function t(b){b=b.target;b.removeEventListener("dispose",t);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture)}d["delete"](b)}q.textures--}function p(b){b=b.target;b.removeEventListener("dispose",
p);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLRenderTargetCube)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d["delete"](b.texture);d["delete"](b)}q.textures--}function n(b,g){var m=d.get(b);if(0<
b.version&&m.__version!==b.version){var n=b.image;if(void 0===n)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===n.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===m.__webglInit&&(m.__webglInit=!0,b.addEventListener("dispose",t),m.__webglTexture=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,m.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,
b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var p=h(b.image,e.maxTextureSize);if((1001!==b.wrapS||1001!==b.wrapT||1003!==b.minFilter&&1006!==b.minFilter)&&!1===l(p))if(n=p,n instanceof HTMLImageElement||n instanceof HTMLCanvasElement){var k=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");k.width=N.nearestPowerOfTwo(n.width);k.height=N.nearestPowerOfTwo(n.height);k.getContext("2d").drawImage(n,0,0,
k.width,k.height);console.warn("THREE.WebGLRenderer: image is not power of two ("+n.width+"x"+n.height+"). Resized to "+k.width+"x"+k.height,n);p=k}else p=n;var n=l(p),k=f(b.format),r=f(b.type);u(a.TEXTURE_2D,b,n);var x=b.mipmaps;if(b.isDepthTexture){x=a.DEPTH_COMPONENT;if(1015===b.type){if(!w)throw Error("Float Depth Texture only supported in WebGL2.0");x=a.DEPTH_COMPONENT32F}else w&&(x=a.DEPTH_COMPONENT16);1026===b.format&&x===a.DEPTH_COMPONENT&&1012!==b.type&&1014!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),
b.type=1012,r=f(b.type));1027===b.format&&(x=a.DEPTH_STENCIL,1020!==b.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=1020,r=f(b.type)));c.texImage2D(a.TEXTURE_2D,0,x,p.width,p.height,0,k,r,null)}else if(b.isDataTexture)if(0<x.length&&n){for(var H=0,aa=x.length;H<aa;H++)p=x[H],c.texImage2D(a.TEXTURE_2D,H,k,p.width,p.height,0,k,r,p.data);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,k,p.width,p.height,0,k,r,p.data);else if(b.isCompressedTexture)for(H=
0,aa=x.length;H<aa;H++)p=x[H],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(k)?c.compressedTexImage2D(a.TEXTURE_2D,H,k,p.width,p.height,0,p.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,H,k,p.width,p.height,0,k,r,p.data);else if(0<x.length&&n){H=0;for(aa=x.length;H<aa;H++)p=x[H],c.texImage2D(a.TEXTURE_2D,H,k,k,r,p);b.generateMipmaps=!1}else c.texImage2D(a.TEXTURE_2D,0,k,k,
r,p);b.generateMipmaps&&n&&a.generateMipmap(a.TEXTURE_2D);m.__version=b.version;if(b.onUpdate)b.onUpdate(b);return}}c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,m.__webglTexture)}function u(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,
a.CLAMP_TO_EDGE),1001===g.wrapS&&1001===g.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,m(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,m(g.minFilter)),1003!==g.minFilter&&1006!==g.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||
1015===g.type&&null===b.get("OES_texture_float_linear")||1016===g.type&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy)}function k(b,e,g,h){var l=f(e.texture.format),m=f(e.texture.type);c.texImage2D(h,0,l,e.width,e.height,0,l,m,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,
0);a.bindFramebuffer(a.FRAMEBUFFER,null)}function r(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,
a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null)}var q=g.memory,w="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext;this.setTexture2D=n;this.setTextureCube=function(b,g){var m=d.get(b);if(6===b.image.length)if(0<b.version&&m.__version!==b.version){m.__image__webglTextureCube||(b.addEventListener("dispose",t),m.__image__webglTextureCube=a.createTexture(),q.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_CUBE_MAP,m.__image__webglTextureCube);
a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var n=b&&b.isCompressedTexture,p=b.image[0]&&b.image[0].isDataTexture,k=[],x=0;6>x;x++)k[x]=n||p?p?b.image[x].image:b.image[x]:h(b.image[x],e.maxCubemapSize);var r=l(k[0]),w=f(b.format),aa=f(b.type);u(a.TEXTURE_CUBE_MAP,b,r);for(x=0;6>x;x++)if(n)for(var A,D=k[x].mipmaps,z=0,Q=D.length;z<Q;z++)A=D[z],1023!==b.format&&1022!==b.format?-1<c.getCompressedTextureFormats().indexOf(w)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,z,w,A.width,A.height,
0,A.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,z,w,A.width,A.height,0,w,aa,A.data);else p?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,w,k[x].width,k[x].height,0,w,aa,k[x].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+x,0,w,w,aa,k[x]);b.generateMipmaps&&r&&a.generateMipmap(a.TEXTURE_CUBE_MAP);m.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(a.TEXTURE0+
g),c.bindTexture(a.TEXTURE_CUBE_MAP,m.__image__webglTextureCube)};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture)};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",p);f.__webglTexture=a.createTexture();q.textures++;var g=!0===b.isWebGLRenderTargetCube,h=l(b);if(g){e.__webglFramebuffer=[];for(var m=0;6>m;m++)e.__webglFramebuffer[m]=a.createFramebuffer()}else e.__webglFramebuffer=
a.createFramebuffer();if(g){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);u(a.TEXTURE_CUBE_MAP,b.texture,h);for(m=0;6>m;m++)k(e.__webglFramebuffer[m],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+m);b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,null)}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),u(a.TEXTURE_2D,b.texture,h),k(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_2D),
c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=!0===b.isWebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b&&b.isWebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&
b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);n(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.TEXTURE_2D,e,0);else throw Error("Unknown depthTexture format");
}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++)a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),r(e.__webglDepthbuffer[f],b);else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),r(e.__webglDepthbuffer,b);a.bindFramebuffer(a.FRAMEBUFFER,null)}};this.updateRenderTargetMipmap=function(b){var e=b.texture;e.generateMipmaps&&l(b)&&1003!==e.minFilter&&1006!==e.minFilter&&(b=b&&b.isWebGLRenderTargetCube?
a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null))}}function Uf(){var a={};return{get:function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c},"delete":function(b){delete a[b.uuid]},clear:function(){a={}}}}function Vf(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++)a.texImage2D(c+
b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);return f}function e(b){!0!==y[b]&&(a.enable(b),y[b]=!0)}function f(b){!1!==y[b]&&(a.disable(b),y[b]=!1)}function g(b,d,g,h,l,m,n,t){0!==b?e(a.BLEND):f(a.BLEND);if(b!==v||t!==A)2===b?t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):3===b?t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):
(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):4===b?t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):t?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),
v=b,A=t;if(5===b){l=l||d;m=m||g;n=n||h;if(d!==E||l!==F)a.blendEquationSeparate(c(d),c(l)),E=d,F=l;if(g!==L||h!==C||m!==da||n!==H)a.blendFuncSeparate(c(g),c(h),c(m),c(n)),L=g,C=h,da=m,H=n}else H=da=F=C=L=E=null}function h(a){n.setFunc(a)}function l(b){D!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),D=b)}function m(b){0!==b?(e(a.CULL_FACE),b!==z&&(1===b?a.cullFace(a.BACK):2===b?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):f(a.CULL_FACE);z=b}function t(b){void 0===b&&(b=a.TEXTURE0+P-1);W!==b&&(a.activeTexture(b),
W=b)}var p=new function(){var b=!1,c=new ga,d=null,e=new ga;return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(0,0,0,1)}}},n=new function(){var b=!1,c=null,d=null,g=null;return{setTest:function(b){b?e(a.DEPTH_TEST):f(a.DEPTH_TEST)},setMask:function(d){c===d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==
b){if(b)switch(b){case 0:a.depthFunc(a.NEVER);break;case 1:a.depthFunc(a.ALWAYS);break;case 2:a.depthFunc(a.LESS);break;case 3:a.depthFunc(a.LEQUAL);break;case 4:a.depthFunc(a.EQUAL);break;case 5:a.depthFunc(a.GEQUAL);break;case 6:a.depthFunc(a.GREATER);break;case 7:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}else a.depthFunc(a.LEQUAL);d=b}},setLocked:function(a){b=a},setClear:function(b){g!==b&&(a.clearDepth(b),g=b)},reset:function(){b=!1;g=d=c=null}}},u=new function(){var b=!1,c=
null,d=null,g=null,h=null,l=null,m=null,n=null,t=null;return{setTest:function(b){b?e(a.STENCIL_TEST):f(a.STENCIL_TEST)},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,e){if(d!==b||g!==c||h!==e)a.stencilFunc(b,c,e),d=b,g=c,h=e},setOp:function(b,c,d){if(l!==b||m!==c||n!==d)a.stencilOp(b,c,d),l=b,m=c,n=d},setLocked:function(a){b=a},setClear:function(b){t!==b&&(a.clearStencil(b),t=b)},reset:function(){b=!1;t=n=m=l=h=g=d=c=null}}},k=a.getParameter(a.MAX_VERTEX_ATTRIBS),r=new Uint8Array(k),
q=new Uint8Array(k),w=new Uint8Array(k),y={},K=null,v=null,E=null,L=null,C=null,F=null,da=null,H=null,A=!1,D=null,z=null,J=null,Q=null,M=null,O=null,P=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),k=parseFloat(/^WebGL\ ([0-9])/.exec(a.getParameter(a.VERSION))[1]),I=1<=parseFloat(k),W=null,S={},R=new ga,T=new ga,N={};N[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);N[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);return{buffers:{color:p,depth:n,stencil:u},init:function(){p.setClear(0,
0,0,1);n.setClear(1);u.setClear(0);e(a.DEPTH_TEST);h(3);l(!1);m(1);e(a.CULL_FACE);e(a.BLEND);g(1)},initAttributes:function(){for(var a=0,b=r.length;a<b;a++)r[a]=0},enableAttribute:function(c){r[c]=1;0===q[c]&&(a.enableVertexAttribArray(c),q[c]=1);0!==w[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),w[c]=0)},enableAttributeAndDivisor:function(b,c,d){r[b]=1;0===q[b]&&(a.enableVertexAttribArray(b),q[b]=1);w[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),w[b]=c)},disableUnusedAttributes:function(){for(var b=
0,c=q.length;b!==c;++b)q[b]!==r[b]&&(a.disableVertexAttribArray(b),q[b]=0)},enable:e,disable:f,getCompressedTextureFormats:function(){if(null===K&&(K=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++)K.push(c[d]);return K},setBlending:g,setColorWrite:function(a){p.setMask(a)},setDepthTest:function(a){n.setTest(a)},setDepthWrite:function(a){n.setMask(a)},
setDepthFunc:h,setStencilTest:function(a){u.setTest(a)},setStencilWrite:function(a){u.setMask(a)},setStencilFunc:function(a,b,c){u.setFunc(a,b,c)},setStencilOp:function(a,b,c){u.setOp(a,b,c)},setFlipSided:l,setCullFace:m,setLineWidth:function(b){b!==J&&(I&&a.lineWidth(b),J=b)},setPolygonOffset:function(b,c,d){if(b){if(e(a.POLYGON_OFFSET_FILL),Q!==c||M!==d)a.polygonOffset(c,d),Q=c,M=d}else f(a.POLYGON_OFFSET_FILL)},getScissorTest:function(){return O},setScissorTest:function(b){(O=b)?e(a.SCISSOR_TEST):
f(a.SCISSOR_TEST)},activeTexture:t,bindTexture:function(b,c){null===W&&t();var d=S[W];void 0===d&&(d={type:void 0,texture:void 0},S[W]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||N[b]),d.type=b,d.texture=c},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(b){console.error(b)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(b){console.error(b)}},scissor:function(b){!1===R.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),R.copy(b))},viewport:function(b){!1===
T.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),T.copy(b))},reset:function(){for(var b=0;b<q.length;b++)1===q[b]&&(a.disableVertexAttribArray(b),q[b]=0);y={};W=K=null;S={};z=D=v=null;p.reset();n.reset();u.reset()}}}function Wf(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&
0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp"}var e,f=void 0!==c.precision?c.precision:"highp",g=d(f);g!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);c=!0===c.logarithmicDepthBuffer&&!!b.get("EXT_frag_depth");var g=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),h=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l=a.getParameter(a.MAX_TEXTURE_SIZE),m=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),t=a.getParameter(a.MAX_VERTEX_ATTRIBS),
p=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),n=a.getParameter(a.MAX_VARYING_VECTORS),u=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),k=0<h,r=!!b.get("OES_texture_float");return{getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0},getMaxPrecision:d,precision:f,logarithmicDepthBuffer:c,maxTextures:g,maxVertexTextures:h,maxTextureSize:l,maxCubemapSize:m,maxAttributes:t,maxVertexUniforms:p,
maxVaryings:n,maxFragmentUniforms:u,vertexTextures:k,floatFragmentTextures:r,floatVertexTextures:k&&r}}function Xf(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];var d;switch(c){case "WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||
a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case "WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");
break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function Yf(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;l.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,l),h.normal.toArray(g,d),g[d+
3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new ua,l=new La,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};this.endShadows=function(){g=!1;a()};this.setState=function(c,h,l,k,x,r){if(!f||null===c||0===c.length||g&&!l)g?b(null):a();else{l=g?0:e;var q=4*l,w=x.clippingState||null;
m.value=w;w=b(c,k,q,r);for(c=0;c!==q;++c)w[c]=d[c];x.clippingState=w;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=l}}}function Yd(a){function b(){Y.init();Y.scissor(X.copy(fa).multiplyScalar(Ra));Y.viewport(Z.copy(ha).multiplyScalar(Ra));Y.buffers.color.setClear(Da.r,Da.g,Da.b,fb,F)}function c(){U=ja=null;V="";R=-1;Y.reset()}function d(a){a.preventDefault();c();b();Ma.clear()}function e(a){a=a.target;a.removeEventListener("dispose",e);f(a);Ma["delete"](a)}function f(a){var b=Ma.get(a).program;
a.program=void 0;void 0!==b&&ya.releaseProgram(b)}function g(a,b){return Math.abs(b[0])-Math.abs(a[0])}function h(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.program&&b.material.program&&a.material.program!==b.material.program?a.material.program.id-b.material.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function l(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-
b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function m(a,b,c,d,e){var f;c.transparent?(d=z,f=++T):(d=aa,f=++D);f=d[f];void 0!==f?(f.id=a.id,f.object=a,f.geometry=b,f.material=c,f.z=Fa.z,f.group=e):(f={id:a.id,object:a,geometry:b,material:c,z:Fa.z,group:e},d.push(f))}function t(a){if(!na.intersectsSphere(a))return!1;var b=ca.numPlanes;if(0===b)return!0;var c=P.clippingPlanes,d=a.center;a=-a.radius;var e=0;do if(c[e].distanceToPoint(d)<a)return!1;while(++e!==b);return!0}function p(a,b){if(!1!==
a.visible){if(0!==(a.layers.mask&b.layers.mask))if(a.isLight)H.push(a);else if(a.isSprite){var c;(c=!1===a.frustumCulled)||(ma.center.set(0,0,0),ma.radius=.7071067811865476,ma.applyMatrix4(a.matrixWorld),c=!0===t(ma));c&&M.push(a)}else if(a.isLensFlare)O.push(a);else if(a.isImmediateRenderObject)!0===P.sortObjects&&(Fa.setFromMatrixPosition(a.matrixWorld),Fa.applyMatrix4(va)),m(a,null,a.material,Fa.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.update(),(c=!1===a.frustumCulled)||
(c=a.geometry,null===c.boundingSphere&&c.computeBoundingSphere(),ma.copy(c.boundingSphere).applyMatrix4(a.matrixWorld),c=!0===t(ma)),c){var d=a.material;if(!0===d.visible)if(!0===P.sortObjects&&(Fa.setFromMatrixPosition(a.matrixWorld),Fa.applyMatrix4(va)),c=qa.update(a),d.isMultiMaterial){var e=c.groups,f=d.materials;if(0<e.length)for(var d=0,g=e.length;d<g;d++){var h=e[d],l=f[h.materialIndex];void 0===l?console.warn("THREE.WebGLRenderer: MultiMaterial has insufficient amount of materials for geometry. %i material(s) expected but only %i provided.",
e.length,f.length):!0===l.visible&&m(a,c,l,Fa.z,h)}else console.warn("THREE.WebGLRenderer: MultiMaterial can not be used without groups.")}else m(a,c,d,Fa.z,null)}c=a.children;d=0;for(g=c.length;d<g;d++)p(c[d],b)}}function n(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,l=g.geometry,m=void 0===d?g.material:d,g=g.group;h.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,h.matrixWorld);h.normalMatrix.getNormalMatrix(h.modelViewMatrix);h.onBeforeRender(P,b,c,l,m,g);if(h.isImmediateRenderObject){k(m);
var n=x(c,b.fog,m,h);V="";h.render(function(a){P.renderBufferImmediate(a,n,m)})}else P.renderBufferDirect(c,b.fog,l,m,h,g);h.onAfterRender(P,b,c,l,m,g)}}function k(a){2===a.side?Y.disable(B.CULL_FACE):Y.enable(B.CULL_FACE);Y.setFlipSided(1===a.side);!0===a.transparent?Y.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha):Y.setBlending(0);Y.setDepthFunc(a.depthFunc);Y.setDepthTest(a.depthTest);Y.setDepthWrite(a.depthWrite);
Y.setColorWrite(a.colorWrite);Y.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)}function x(a,b,c,d){ea=0;var g=Ma.get(c);oa&&(ta||a!==U)&&ca.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,g,a===U&&c.id===R);!1===c.needsUpdate&&(void 0===g.program?c.needsUpdate=!0:c.fog&&g.fog!==b?c.needsUpdate=!0:c.lights&&g.lightsHash!==ba.hash?c.needsUpdate=!0:void 0===g.numClippingPlanes||g.numClippingPlanes===ca.numPlanes&&g.numIntersection===ca.numIntersection||(c.needsUpdate=
!0));if(c.needsUpdate){a:{var h=Ma.get(c),l=ya.getParameters(c,ba,b,ca.numPlanes,ca.numIntersection,d),m=ya.getProgramCode(c,l),n=h.program,t=!0;if(void 0===n)c.addEventListener("dispose",e);else if(n.code!==m)f(c);else if(void 0!==l.shaderID)break a;else t=!1;t&&(l.shaderID?(n=bb[l.shaderID],h.__webglShader={name:c.type,uniforms:Ia.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}):h.__webglShader={name:c.type,uniforms:c.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader},
c.__webglShader=h.__webglShader,n=ya.acquireProgram(c,l,m),h.program=n,c.program=n);l=n.getAttributes();if(c.morphTargets)for(m=c.numSupportedMorphTargets=0;m<P.maxMorphTargets;m++)0<=l["morphTarget"+m]&&c.numSupportedMorphTargets++;if(c.morphNormals)for(m=c.numSupportedMorphNormals=0;m<P.maxMorphNormals;m++)0<=l["morphNormal"+m]&&c.numSupportedMorphNormals++;l=h.__webglShader.uniforms;if(!c.isShaderMaterial&&!c.isRawShaderMaterial||!0===c.clipping)h.numClippingPlanes=ca.numPlanes,h.numIntersection=
ca.numIntersection,l.clippingPlanes=ca.uniform;h.fog=b;h.lightsHash=ba.hash;c.lights&&(l.ambientLightColor.value=ba.ambient,l.directionalLights.value=ba.directional,l.spotLights.value=ba.spot,l.rectAreaLights.value=ba.rectArea,l.pointLights.value=ba.point,l.hemisphereLights.value=ba.hemi,l.directionalShadowMap.value=ba.directionalShadowMap,l.directionalShadowMatrix.value=ba.directionalShadowMatrix,l.spotShadowMap.value=ba.spotShadowMap,l.spotShadowMatrix.value=ba.spotShadowMatrix,l.pointShadowMap.value=
ba.pointShadowMap,l.pointShadowMatrix.value=ba.pointShadowMatrix);m=h.program.getUniforms();l=$a.seqWithValue(m.seq,l);h.uniformsList=l}c.needsUpdate=!1}var p=!1,t=n=!1,h=g.program,l=h.getUniforms(),m=g.__webglShader.uniforms;h.id!==ja&&(B.useProgram(h.program),ja=h.id,t=n=p=!0);c.id!==R&&(R=c.id,n=!0);if(p||a!==U){l.set(B,a,"projectionMatrix");la.logarithmicDepthBuffer&&l.setValue(B,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));a!==U&&(U=a,t=n=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||
c.isMeshStandardMaterial||c.envMap)p=l.map.cameraPosition,void 0!==p&&p.setValue(B,Fa.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&l.setValue(B,"viewMatrix",a.matrixWorldInverse);l.set(B,P,"toneMappingExposure");l.set(B,P,"toneMappingWhitePoint")}c.skinning&&(l.setOptional(B,d,"bindMatrix"),l.setOptional(B,d,"bindMatrixInverse"),a=d.skeleton)&&(la.floatVertexTextures&&a.useVertexTexture?
(l.set(B,a,"boneTexture"),l.set(B,a,"boneTextureWidth"),l.set(B,a,"boneTextureHeight")):l.setOptional(B,a,"boneMatrices"));if(n){c.lights&&(a=t,m.ambientLightColor.needsUpdate=a,m.directionalLights.needsUpdate=a,m.pointLights.needsUpdate=a,m.spotLights.needsUpdate=a,m.rectAreaLights.needsUpdate=a,m.hemisphereLights.needsUpdate=a);b&&c.fog&&(m.fogColor.value=b.color,b.isFog?(m.fogNear.value=b.near,m.fogFar.value=b.far):b.isFogExp2&&(m.fogDensity.value=b.density));if(c.isMeshBasicMaterial||c.isMeshLambertMaterial||
c.isMeshPhongMaterial||c.isMeshStandardMaterial||c.isMeshNormalMaterial||c.isMeshDepthMaterial){m.opacity.value=c.opacity;m.diffuse.value=c.color;c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);m.map.value=c.map;m.specularMap.value=c.specularMap;m.alphaMap.value=c.alphaMap;c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity);c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity);var k;c.map?k=c.map:c.specularMap?
k=c.specularMap:c.displacementMap?k=c.displacementMap:c.normalMap?k=c.normalMap:c.bumpMap?k=c.bumpMap:c.roughnessMap?k=c.roughnessMap:c.metalnessMap?k=c.metalnessMap:c.alphaMap?k=c.alphaMap:c.emissiveMap&&(k=c.emissiveMap);void 0!==k&&(k.isWebGLRenderTarget&&(k=k.texture),b=k.offset,k=k.repeat,m.offsetRepeat.value.set(b.x,b.y,k.x,k.y));m.envMap.value=c.envMap;m.flipEnvMap.value=c.envMap&&c.envMap.isCubeTexture?-1:1;m.reflectivity.value=c.reflectivity;m.refractionRatio.value=c.refractionRatio}c.isLineBasicMaterial?
(m.diffuse.value=c.color,m.opacity.value=c.opacity):c.isLineDashedMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity,m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale):c.isPointsMaterial?(m.diffuse.value=c.color,m.opacity.value=c.opacity,m.size.value=c.size*Ra,m.scale.value=.5*Ac,m.map.value=c.map,null!==c.map&&(k=c.map.offset,c=c.map.repeat,m.offsetRepeat.value.set(k.x,k.y,c.x,c.y))):c.isMeshLambertMaterial?c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap):
c.isMeshToonMaterial?(r(m,c),c.gradientMap&&(m.gradientMap.value=c.gradientMap)):c.isMeshPhongMaterial?r(m,c):c.isMeshPhysicalMaterial?(m.clearCoat.value=c.clearCoat,m.clearCoatRoughness.value=c.clearCoatRoughness,G(m,c)):c.isMeshStandardMaterial?G(m,c):c.isMeshDepthMaterial?c.displacementMap&&(m.displacementMap.value=c.displacementMap,m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias):c.isMeshNormalMaterial&&(c.bumpMap&&(m.bumpMap.value=c.bumpMap,m.bumpScale.value=
c.bumpScale),c.normalMap&&(m.normalMap.value=c.normalMap,m.normalScale.value.copy(c.normalScale)),c.displacementMap&&(m.displacementMap.value=c.displacementMap,m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias));void 0!==m.ltcMat&&(m.ltcMat.value=THREE.UniformsLib.LTC_MAT_TEXTURE);void 0!==m.ltcMag&&(m.ltcMag.value=THREE.UniformsLib.LTC_MAG_TEXTURE);$a.upload(B,g.uniformsList,m,P)}l.set(B,d,"modelViewMatrix");l.set(B,d,"normalMatrix");l.setValue(B,"modelMatrix",
d.matrixWorld);return h}function r(a,b){a.specular.value=b.specular;a.shininess.value=Math.max(b.shininess,1E-4);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias)}function G(a,b){a.roughness.value=
b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);
b.envMap&&(a.envMapIntensity.value=b.envMapIntensity)}function w(a){var b;if(1E3===a)return B.REPEAT;if(1001===a)return B.CLAMP_TO_EDGE;if(1002===a)return B.MIRRORED_REPEAT;if(1003===a)return B.NEAREST;if(1004===a)return B.NEAREST_MIPMAP_NEAREST;if(1005===a)return B.NEAREST_MIPMAP_LINEAR;if(1006===a)return B.LINEAR;if(1007===a)return B.LINEAR_MIPMAP_NEAREST;if(1008===a)return B.LINEAR_MIPMAP_LINEAR;if(1009===a)return B.UNSIGNED_BYTE;if(1017===a)return B.UNSIGNED_SHORT_4_4_4_4;if(1018===a)return B.UNSIGNED_SHORT_5_5_5_1;
if(1019===a)return B.UNSIGNED_SHORT_5_6_5;if(1010===a)return B.BYTE;if(1011===a)return B.SHORT;if(1012===a)return B.UNSIGNED_SHORT;if(1013===a)return B.INT;if(1014===a)return B.UNSIGNED_INT;if(1015===a)return B.FLOAT;if(1016===a&&(b=ia.get("OES_texture_half_float"),null!==b))return b.HALF_FLOAT_OES;if(1021===a)return B.ALPHA;if(1022===a)return B.RGB;if(1023===a)return B.RGBA;if(1024===a)return B.LUMINANCE;if(1025===a)return B.LUMINANCE_ALPHA;if(1026===a)return B.DEPTH_COMPONENT;if(1027===a)return B.DEPTH_STENCIL;
if(100===a)return B.FUNC_ADD;if(101===a)return B.FUNC_SUBTRACT;if(102===a)return B.FUNC_REVERSE_SUBTRACT;if(200===a)return B.ZERO;if(201===a)return B.ONE;if(202===a)return B.SRC_COLOR;if(203===a)return B.ONE_MINUS_SRC_COLOR;if(204===a)return B.SRC_ALPHA;if(205===a)return B.ONE_MINUS_SRC_ALPHA;if(206===a)return B.DST_ALPHA;if(207===a)return B.ONE_MINUS_DST_ALPHA;if(208===a)return B.DST_COLOR;if(209===a)return B.ONE_MINUS_DST_COLOR;if(210===a)return B.SRC_ALPHA_SATURATE;if(2001===a||2002===a||2003===
a||2004===a)if(b=ia.get("WEBGL_compressed_texture_s3tc"),null!==b){if(2001===a)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(2002===a)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(2003===a)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(2004===a)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(2100===a||2101===a||2102===a||2103===a)if(b=ia.get("WEBGL_compressed_texture_pvrtc"),null!==b){if(2100===a)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(2101===a)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(2102===a)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
if(2103===a)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(2151===a&&(b=ia.get("WEBGL_compressed_texture_etc1"),null!==b))return b.COMPRESSED_RGB_ETC1_WEBGL;if(103===a||104===a)if(b=ia.get("EXT_blend_minmax"),null!==b){if(103===a)return b.MIN_EXT;if(104===a)return b.MAX_EXT}return 1020===a&&(b=ia.get("WEBGL_depth_texture"),null!==b)?b.UNSIGNED_INT_24_8_WEBGL:0}console.log("THREE.WebGLRenderer","85dev");a=a||{};var y=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml",
"canvas"),K=void 0!==a.context?a.context:null,v=void 0!==a.alpha?a.alpha:!1,E=void 0!==a.depth?a.depth:!0,L=void 0!==a.stencil?a.stencil:!0,C=void 0!==a.antialias?a.antialias:!1,F=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,A=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,H=[],aa=[],D=-1,z=[],T=-1,Q=new Float32Array(8),M=[],O=[];this.domElement=y;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=
[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMappingWhitePoint=this.toneMappingExposure=this.toneMapping=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var P=this,ja=null,W=null,N=null,R=-1,V="",U=null,X=new ga,Sa=null,Z=new ga,ea=0,Da=new J(0),fb=0,kd=y.width,Ac=y.height,Ra=1,fa=new ga(0,0,kd,Ac),ka=!1,ha=new ga(0,0,kd,Ac),na=new jd,ca=new Yf,oa=!1,ta=!1,ma=new Pa,va=new S,Fa=new q,Ba=new S,wa=new S,ba={hash:"",ambient:[0,
0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},pa={calls:0,vertices:0,faces:0,points:0};this.info={render:pa,memory:{geometries:0,textures:0},programs:null};var B;try{v={alpha:v,depth:E,stencil:L,antialias:C,premultipliedAlpha:F,preserveDrawingBuffer:A};B=K||y.getContext("webgl",v)||y.getContext("experimental-webgl",v);if(null===B){if(null!==y.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";
throw"Error creating WebGL context.";}void 0===B.getShaderPrecisionFormat&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});y.addEventListener("webglcontextlost",d,!1)}catch(Zf){console.error("THREE.WebGLRenderer: "+Zf)}var ia=new Xf(B);ia.get("WEBGL_depth_texture");ia.get("OES_texture_float");ia.get("OES_texture_float_linear");ia.get("OES_texture_half_float");ia.get("OES_texture_half_float_linear");ia.get("OES_standard_derivatives");ia.get("ANGLE_instanced_arrays");
ia.get("OES_element_index_uint")&&(I.MaxIndex=4294967296);var la=new Wf(B,ia,a),Y=new Vf(B,ia,w),Ma=new Uf,ua=new Tf(B,ia,Y,Ma,la,w,this.info),qa=new Sf(B,Ma,this.info),ya=new Qf(this,la),Aa=new If;this.info.programs=ya.programs;var La=new Hf(B,ia,pa),Na=new Gf(B,ia,pa),Ha,za,ra,sa;b();this.context=B;this.capabilities=la;this.extensions=ia;this.properties=Ma;this.state=Y;var Ka=new Ge(this,ba,qa,la);this.shadowMap=Ka;var Oa=new Df(this,M),Qa=new Cf(this,O);this.getContext=function(){return B};this.getContextAttributes=
function(){return B.getContextAttributes()};this.forceContextLoss=function(){ia.get("WEBGL_lose_context").loseContext()};this.getMaxAnisotropy=function(){return la.getMaxAnisotropy()};this.getPrecision=function(){return la.precision};this.getPixelRatio=function(){return Ra};this.setPixelRatio=function(a){void 0!==a&&(Ra=a,this.setSize(ha.z,ha.w,!1))};this.getSize=function(){return{width:kd,height:Ac}};this.setSize=function(a,b,c){kd=a;Ac=b;y.width=a*Ra;y.height=b*Ra;!1!==c&&(y.style.width=a+"px",
y.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){Y.viewport(ha.set(a,b,c,d))};this.setScissor=function(a,b,c,d){Y.scissor(fa.set(a,b,c,d))};this.setScissorTest=function(a){Y.setScissorTest(ka=a)};this.getClearColor=function(){return Da};this.setClearColor=function(a,b){Da.set(a);fb=void 0!==b?b:1;Y.buffers.color.setClear(Da.r,Da.g,Da.b,fb,F)};this.getClearAlpha=function(){return fb};this.setClearAlpha=function(a){fb=a;Y.buffers.color.setClear(Da.r,Da.g,Da.b,fb,
F)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=B.COLOR_BUFFER_BIT;if(void 0===b||b)d|=B.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=B.STENCIL_BUFFER_BIT;B.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.resetGLState=c;this.dispose=function(){z=[];T=-1;aa=[];D=-1;y.removeEventListener("webglcontextlost",
d,!1)};this.renderBufferImmediate=function(a,b,c){Y.initAttributes();var d=Ma.get(a);a.hasPositions&&!d.position&&(d.position=B.createBuffer());a.hasNormals&&!d.normal&&(d.normal=B.createBuffer());a.hasUvs&&!d.uv&&(d.uv=B.createBuffer());a.hasColors&&!d.color&&(d.color=B.createBuffer());b=b.getAttributes();a.hasPositions&&(B.bindBuffer(B.ARRAY_BUFFER,d.position),B.bufferData(B.ARRAY_BUFFER,a.positionArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.position),B.vertexAttribPointer(b.position,3,B.FLOAT,!1,
0,0));if(a.hasNormals){B.bindBuffer(B.ARRAY_BUFFER,d.normal);if(!c.isMeshPhongMaterial&&!c.isMeshStandardMaterial&&!c.isMeshNormalMaterial&&1===c.shading)for(var e=0,f=3*a.count;e<f;e+=9){var g=a.normalArray,h=(g[e+0]+g[e+3]+g[e+6])/3,l=(g[e+1]+g[e+4]+g[e+7])/3,m=(g[e+2]+g[e+5]+g[e+8])/3;g[e+0]=h;g[e+1]=l;g[e+2]=m;g[e+3]=h;g[e+4]=l;g[e+5]=m;g[e+6]=h;g[e+7]=l;g[e+8]=m}B.bufferData(B.ARRAY_BUFFER,a.normalArray,B.DYNAMIC_DRAW);Y.enableAttribute(b.normal);B.vertexAttribPointer(b.normal,3,B.FLOAT,!1,0,
0)}a.hasUvs&&c.map&&(B.bindBuffer(B.ARRAY_BUFFER,d.uv),B.bufferData(B.ARRAY_BUFFER,a.uvArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.uv),B.vertexAttribPointer(b.uv,2,B.FLOAT,!1,0,0));a.hasColors&&0!==c.vertexColors&&(B.bindBuffer(B.ARRAY_BUFFER,d.color),B.bufferData(B.ARRAY_BUFFER,a.colorArray,B.DYNAMIC_DRAW),Y.enableAttribute(b.color),B.vertexAttribPointer(b.color,3,B.FLOAT,!1,0,0));Y.disableUnusedAttributes();B.drawArrays(B.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,
f){k(d);var h=x(a,b,d,e),l=!1;a=c.id+"_"+h.id+"_"+d.wireframe;a!==V&&(V=a,l=!0);b=e.morphTargetInfluences;if(void 0!==b){var m=[];a=0;for(var n=b.length;a<n;a++)l=b[a],m.push([l,a]);m.sort(g);8<m.length&&(m.length=8);var t=c.morphAttributes;a=0;for(n=m.length;a<n;a++)l=m[a],Q[a]=l[0],0!==l[0]?(b=l[1],!0===d.morphTargets&&t.position&&c.addAttribute("morphTarget"+a,t.position[b]),!0===d.morphNormals&&t.normal&&c.addAttribute("morphNormal"+a,t.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+
a),!0===d.morphNormals&&c.removeAttribute("morphNormal"+a));a=m.length;for(b=Q.length;a<b;a++)Q[a]=0;h.getUniforms().setValue(B,"morphTargetInfluences",Q);l=!0}b=c.index;n=c.attributes.position;m=1;!0===d.wireframe&&(b=qa.getWireframeAttribute(c),m=2);null!==b?(a=Na,a.setIndex(b)):a=La;if(l){a:{var l=void 0,p;if(c&&c.isInstancedBufferGeometry&&(p=ia.get("ANGLE_instanced_arrays"),null===p)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
break a}void 0===l&&(l=0);Y.initAttributes();var t=c.attributes,h=h.getAttributes(),r=d.defaultAttributeValues,q;for(q in h){var y=h[q];if(0<=y){var v=t[q];if(void 0!==v){var w=v.normalized,G=v.itemSize,K=qa.getAttributeProperties(v),C=K.__webglBuffer,L=K.type,K=K.bytesPerElement;if(v.isInterleavedBufferAttribute){var F=v.data,E=F.stride,v=v.offset;F&&F.isInstancedInterleavedBuffer?(Y.enableAttributeAndDivisor(y,F.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=F.meshPerAttribute*
F.count)):Y.enableAttribute(y);B.bindBuffer(B.ARRAY_BUFFER,C);B.vertexAttribPointer(y,G,L,w,E*K,(l*E+v)*K)}else v.isInstancedBufferAttribute?(Y.enableAttributeAndDivisor(y,v.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=v.meshPerAttribute*v.count)):Y.enableAttribute(y),B.bindBuffer(B.ARRAY_BUFFER,C),B.vertexAttribPointer(y,G,L,w,0,l*G*K)}else if(void 0!==r&&(w=r[q],void 0!==w))switch(w.length){case 2:B.vertexAttrib2fv(y,w);break;case 3:B.vertexAttrib3fv(y,w);break;case 4:B.vertexAttrib4fv(y,
w);break;default:B.vertexAttrib1fv(y,w)}}}Y.disableUnusedAttributes()}null!==b&&B.bindBuffer(B.ELEMENT_ARRAY_BUFFER,qa.getAttributeBuffer(b))}p=0;null!==b?p=b.count:void 0!==n&&(p=n.count);b=c.drawRange.start*m;n=null!==f?f.start*m:0;q=Math.max(b,n);f=Math.max(0,Math.min(p,b+c.drawRange.count*m,n+(null!==f?f.count*m:Infinity))-1-q+1);if(0!==f){if(e.isMesh)if(!0===d.wireframe)Y.setLineWidth(d.wireframeLinewidth*(null===W?Ra:1)),a.setMode(B.LINES);else switch(e.drawMode){case 0:a.setMode(B.TRIANGLES);
break;case 1:a.setMode(B.TRIANGLE_STRIP);break;case 2:a.setMode(B.TRIANGLE_FAN)}else e.isLine?(d=d.linewidth,void 0===d&&(d=1),Y.setLineWidth(d*(null===W?Ra:1)),e.isLineSegments?a.setMode(B.LINES):e.isLineLoop?a.setMode(B.LINE_LOOP):a.setMode(B.LINE_STRIP)):e.isPoints&&a.setMode(B.POINTS);c&&c.isInstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,q,f):a.render(q,f)}};this.render=function(a,b,c,d){if(void 0!==b&&!0!==b.isCamera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
else{V="";R=-1;U=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===b.parent&&b.updateMatrixWorld();b.matrixWorldInverse.getInverse(b.matrixWorld);va.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);na.setFromMatrix(va);H.length=0;T=D=-1;M.length=0;O.length=0;ta=this.localClippingEnabled;oa=ca.init(this.clippingPlanes,ta,b);p(a,b);aa.length=D+1;z.length=T+1;!0===P.sortObjects&&(aa.sort(h),z.sort(l));oa&&ca.beginShadows();for(var e=H,f=0,g=0,m=e.length;g<m;g++){var t=e[g];t.castShadow&&
(ba.shadows[f++]=t)}ba.shadows.length=f;Ka.render(a,b);for(var e=H,k=t=0,u=0,x,r,q,y,v=b.matrixWorldInverse,w=0,G=0,K=0,C=0,L=0,f=0,g=e.length;f<g;f++)if(m=e[f],x=m.color,r=m.intensity,q=m.distance,y=m.shadow&&m.shadow.map?m.shadow.map.texture:null,m.isAmbientLight)t+=x.r*r,k+=x.g*r,u+=x.b*r;else if(m.isDirectionalLight){var E=Aa.get(m);E.color.copy(m.color).multiplyScalar(m.intensity);E.direction.setFromMatrixPosition(m.matrixWorld);Fa.setFromMatrixPosition(m.target.matrixWorld);E.direction.sub(Fa);
E.direction.transformDirection(v);if(E.shadow=m.castShadow)E.shadowBias=m.shadow.bias,E.shadowRadius=m.shadow.radius,E.shadowMapSize=m.shadow.mapSize;ba.directionalShadowMap[w]=y;ba.directionalShadowMatrix[w]=m.shadow.matrix;ba.directional[w++]=E}else if(m.isSpotLight){E=Aa.get(m);E.position.setFromMatrixPosition(m.matrixWorld);E.position.applyMatrix4(v);E.color.copy(x).multiplyScalar(r);E.distance=q;E.direction.setFromMatrixPosition(m.matrixWorld);Fa.setFromMatrixPosition(m.target.matrixWorld);E.direction.sub(Fa);
E.direction.transformDirection(v);E.coneCos=Math.cos(m.angle);E.penumbraCos=Math.cos(m.angle*(1-m.penumbra));E.decay=0===m.distance?0:m.decay;if(E.shadow=m.castShadow)E.shadowBias=m.shadow.bias,E.shadowRadius=m.shadow.radius,E.shadowMapSize=m.shadow.mapSize;ba.spotShadowMap[K]=y;ba.spotShadowMatrix[K]=m.shadow.matrix;ba.spot[K++]=E}else if(m.isRectAreaLight)E=Aa.get(m),E.color.copy(x).multiplyScalar(r/(m.width*m.height)),E.position.setFromMatrixPosition(m.matrixWorld),E.position.applyMatrix4(v),wa.identity(),
Ba.copy(m.matrixWorld),Ba.premultiply(v),wa.extractRotation(Ba),E.halfWidth.set(.5*m.width,0,0),E.halfHeight.set(0,.5*m.height,0),E.halfWidth.applyMatrix4(wa),E.halfHeight.applyMatrix4(wa),ba.rectArea[C++]=E;else if(m.isPointLight){E=Aa.get(m);E.position.setFromMatrixPosition(m.matrixWorld);E.position.applyMatrix4(v);E.color.copy(m.color).multiplyScalar(m.intensity);E.distance=m.distance;E.decay=0===m.distance?0:m.decay;if(E.shadow=m.castShadow)E.shadowBias=m.shadow.bias,E.shadowRadius=m.shadow.radius,
E.shadowMapSize=m.shadow.mapSize;ba.pointShadowMap[G]=y;void 0===ba.pointShadowMatrix[G]&&(ba.pointShadowMatrix[G]=new S);Fa.setFromMatrixPosition(m.matrixWorld).negate();ba.pointShadowMatrix[G].identity().setPosition(Fa);ba.point[G++]=E}else m.isHemisphereLight&&(E=Aa.get(m),E.direction.setFromMatrixPosition(m.matrixWorld),E.direction.transformDirection(v),E.direction.normalize(),E.skyColor.copy(m.color).multiplyScalar(r),E.groundColor.copy(m.groundColor).multiplyScalar(r),ba.hemi[L++]=E);ba.ambient[0]=
t;ba.ambient[1]=k;ba.ambient[2]=u;ba.directional.length=w;ba.spot.length=K;ba.rectArea.length=C;ba.point.length=G;ba.hemi.length=L;ba.hash=w+","+G+","+K+","+C+","+L+","+ba.shadows.length;oa&&ca.endShadows();pa.calls=0;pa.vertices=0;pa.faces=0;pa.points=0;void 0===c&&(c=null);this.setRenderTarget(c);e=a.background;null===e?Y.buffers.color.setClear(Da.r,Da.g,Da.b,fb,F):e&&e.isColor&&(Y.buffers.color.setClear(e.r,e.g,e.b,1,F),d=!0);(this.autoClear||d)&&this.clear(this.autoClearColor,this.autoClearDepth,
this.autoClearStencil);e&&e.isCubeTexture?(void 0===ra&&(ra=new Ea,sa=new xa(new jb(5,5,5),new Ga({uniforms:bb.cube.uniforms,vertexShader:bb.cube.vertexShader,fragmentShader:bb.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1}))),ra.projectionMatrix.copy(b.projectionMatrix),ra.matrixWorld.extractRotation(b.matrixWorld),ra.matrixWorldInverse.getInverse(ra.matrixWorld),sa.material.uniforms.tCube.value=e,sa.modelViewMatrix.multiplyMatrices(ra.matrixWorldInverse,sa.matrixWorld),qa.update(sa),
P.renderBufferDirect(ra,null,sa.geometry,sa.material,sa,null)):e&&e.isTexture&&(void 0===Ha&&(Ha=new Ib(-1,1,1,-1,0,1),za=new xa(new kb(2,2),new Ja({depthTest:!1,depthWrite:!1,fog:!1}))),za.material.map=e,qa.update(za),P.renderBufferDirect(Ha,null,za.geometry,za.material,za,null));a.overrideMaterial?(d=a.overrideMaterial,n(aa,a,b,d),n(z,a,b,d)):(Y.setBlending(0),n(aa,a,b),n(z,a,b));Oa.render(a,b);Qa.render(a,b,Z);c&&ua.updateRenderTargetMipmap(c);Y.setDepthTest(!0);Y.setDepthWrite(!0);Y.setColorWrite(!0)}};
this.setFaceCulling=function(a,b){Y.setCullFace(a);Y.setFlipSided(0===b)};this.allocTextureUnit=function(){var a=ea;a>=la.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+la.maxTextures);ea+=1;return a};this.setTexture2D=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);ua.setTexture2D(b,
c)}}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);ua.setTexture2D(b,c)}}();this.setTextureCube=function(){var a=!1;return function(b,c){b&&b.isWebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);b&&b.isCubeTexture||Array.isArray(b.image)&&6===b.image.length?ua.setTextureCube(b,
c):ua.setTextureCubeDynamic(b,c)}}();this.getCurrentRenderTarget=function(){return W};this.setRenderTarget=function(a){(W=a)&&void 0===Ma.get(a).__webglFramebuffer&&ua.setupRenderTarget(a);var b=a&&a.isWebGLRenderTargetCube,c;a?(c=Ma.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,X.copy(a.scissor),Sa=a.scissorTest,Z.copy(a.viewport)):(c=null,X.copy(fa).multiplyScalar(Ra),Sa=ka,Z.copy(ha).multiplyScalar(Ra));N!==c&&(B.bindFramebuffer(B.FRAMEBUFFER,c),N=c);Y.scissor(X);Y.setScissorTest(Sa);
Y.viewport(Z);b&&(b=Ma.get(a.texture),B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,a.activeMipMapLevel))};this.readRenderTargetPixels=function(a,b,c,d,e,f){if(!1===(a&&a.isWebGLRenderTarget))console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else{var g=Ma.get(a).__webglFramebuffer;if(g){var h=!1;g!==N&&(B.bindFramebuffer(B.FRAMEBUFFER,g),h=!0);try{var m=a.texture,l=m.format,
n=m.type;1023!==l&&w(l)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===n||w(n)===B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)||1015===n&&(ia.get("OES_texture_float")||ia.get("WEBGL_color_buffer_float"))||1016===n&&ia.get("EXT_color_buffer_half_float")?B.checkFramebufferStatus(B.FRAMEBUFFER)===B.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&B.readPixels(b,
c,d,e,w(l),w(n),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{h&&B.bindFramebuffer(B.FRAMEBUFFER,N)}}}}}function Jb(a,b){this.name="";this.color=new J(a);this.density=void 0!==b?b:2.5E-4}function Kb(a,b,c){this.name="";this.color=new J(a);this.near=void 0!==b?b:1;this.far=void 0!==
c?c:1E3}function ld(){A.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0}function Zd(a,b,c,d,e){A.call(this);this.lensFlares=[];this.positionScreen=new q;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)}function lb(a){X.call(this);this.type="SpriteMaterial";this.color=new J(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;this.setValues(a)}function Bc(a){A.call(this);this.type="Sprite";this.material=void 0!==a?a:new lb}
function Cc(){A.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}})}function md(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new S;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=N.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new db(this.boneMatrices,this.boneTextureWidth,
this.boneTextureHeight,1023,1015)):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new S)}function nd(){A.call(this);this.type="Bone"}function od(a,b,c){xa.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new S;
this.bindMatrixInverse=new S;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],b=new nd,a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);e=0;for(f=this.geometry.bones.length;e<f;++e)d=this.geometry.bones[e],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?a[d.parent].add(a[e]):this.add(a[e])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);
this.bind(new md(a,void 0,c),this.matrixWorld)}function ka(a){X.call(this);this.type="LineBasicMaterial";this.color=new J(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a)}function Na(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new fa(a,b);A.call(this);this.type="Line";this.geometry=void 0!==a?a:new I;this.material=void 0!==b?b:new ka({color:16777215*Math.random()})}
function fa(a,b){Na.call(this,a,b);this.type="LineSegments"}function pd(a,b){Na.call(this,a,b);this.type="LineLoop"}function Ha(a){X.call(this);this.type="PointsMaterial";this.color=new J(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a)}function Lb(a,b){A.call(this);this.type="Points";this.geometry=void 0!==a?a:new I;this.material=void 0!==b?b:new Ha({color:16777215*Math.random()})}function Dc(){A.call(this);this.type="Group"}function qd(a,b,c,d,e,f,g,h,
l){function m(){requestAnimationFrame(m);a.readyState>=a.HAVE_CURRENT_DATA&&(t.needsUpdate=!0)}ea.call(this,a,b,c,d,e,f,g,h,l);this.generateMipmaps=!1;var t=this;m()}function Mb(a,b,c,d,e,f,g,h,l,m,t,p){ea.call(this,null,f,g,h,l,m,d,e,t,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function rd(a,b,c,d,e,f,g,h,l){ea.call(this,a,b,c,d,e,f,g,h,l);this.needsUpdate=!0}function Ec(a,b,c,d,e,f,g,h,l,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);ea.call(this,null,d,e,f,g,h,m,c,l);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Nb(a){function b(a,b){return a-b}I.call(this);this.type="WireframeGeometry";var c=[],d,e,f,g,h=[0,0],l={},m,t=["a","b","c"];if(a&&a.isGeometry){var p=a.faces;d=0;for(f=p.length;d<f;d++){var n=p[d];for(e=0;3>e;e++)h[0]=n[t[e]],h[1]=n[t[(e+1)%3]],h.sort(b),m=h.toString(),
void 0===l[m]&&(l[m]={index1:h[0],index2:h[1]})}for(m in l)d=l[m],t=a.vertices[d.index1],c.push(t.x,t.y,t.z),t=a.vertices[d.index2],c.push(t.x,t.y,t.z)}else if(a&&a.isBufferGeometry){var k,t=new q;if(null!==a.index){p=a.attributes.position;n=a.index;k=a.groups;0===k.length&&(k=[{start:0,count:n.count,materialIndex:0}]);a=0;for(g=k.length;a<g;++a)for(d=k[a],e=d.start,f=d.count,d=e,f=e+f;d<f;d+=3)for(e=0;3>e;e++)h[0]=n.getX(d+e),h[1]=n.getX(d+(e+1)%3),h.sort(b),m=h.toString(),void 0===l[m]&&(l[m]={index1:h[0],
index2:h[1]});for(m in l)d=l[m],t.fromBufferAttribute(p,d.index1),c.push(t.x,t.y,t.z),t.fromBufferAttribute(p,d.index2),c.push(t.x,t.y,t.z)}else for(p=a.attributes.position,d=0,f=p.count/3;d<f;d++)for(e=0;3>e;e++)l=3*d+e,t.fromBufferAttribute(p,l),c.push(t.x,t.y,t.z),l=3*d+(e+1)%3,t.fromBufferAttribute(p,l),c.push(t.x,t.y,t.z)}this.addAttribute("position",new z(c,3))}function Fc(a,b,c){T.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Ob(a,
b,c));this.mergeVertices()}function Ob(a,b,c){I.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g,h,l=b+1;for(g=0;g<=c;g++){var m=g/c;for(h=0;h<=b;h++){var t=h/b,p=a(t,m);e.push(p.x,p.y,p.z);f.push(t,m)}}for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*l+h+1,m=(g+1)*l+h+1,t=(g+1)*l+h,d.push(g*l+h,a,t),d.push(a,m,t);this.setIndex(d);this.addAttribute("position",new z(e,3));this.addAttribute("uv",new z(f,2));this.computeVertexNormals()}function Gc(a,
b,c,d){T.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new va(a,b,c,d));this.mergeVertices()}function va(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){var d=3*b;c.x=a[d+0];c.y=a[d+1];c.z=a[d+2]}function g(a,b,c,d){0>d&&1===a.x&&(l[b]=a.x-1);0===c.x&&0===c.z&&(l[b]=d/2/Math.PI+.5)}I.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;var h=[],l=[];(function(a){for(var c=
new q,d=new q,g=new q,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var l=c,k=d,G=g,w=Math.pow(2,a),y=[],K,v;for(K=0;K<=w;K++){y[K]=[];var E=l.clone().lerp(G,K/w),L=k.clone().lerp(G,K/w),C=w-K;for(v=0;v<=C;v++)y[K][v]=0===v&&K===w?E:E.clone().lerp(L,v/C)}for(K=0;K<w;K++)for(v=0;v<2*(w-K)-1;v++)l=Math.floor(v/2),0===v%2?(e(y[K][l+1]),e(y[K+1][l]),e(y[K][l])):(e(y[K][l+1]),e(y[K+1][l+1]),e(y[K+1][l]))}})(d||0);(function(a){for(var b=new q,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+
2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new q,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],l.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));for(var a=new q,b=new q,c=new q,d=new q,e=new D,f=new D,k=new D,G=0,w=0;G<h.length;G+=9,w+=6){a.set(h[G+0],h[G+1],h[G+2]);b.set(h[G+3],h[G+4],h[G+5]);c.set(h[G+6],h[G+7],h[G+8]);e.set(l[w+0],l[w+1]);f.set(l[w+2],l[w+3]);k.set(l[w+4],l[w+5]);d.copy(a).add(b).add(c).divideScalar(3);
var y=Math.atan2(d.z,-d.x);g(e,w+0,a,y);g(f,w+2,b,y);g(k,w+4,c,y)}for(a=0;a<l.length;a+=6)b=l[a+0],c=l[a+2],d=l[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(l[a+0]+=1),.2>c&&(l[a+2]+=1),.2>d&&(l[a+4]+=1))})();this.addAttribute("position",new z(h,3));this.addAttribute("normal",new z(h.slice(),3));this.addAttribute("uv",new z(l,2));this.normalizeNormals()}function Hc(a,b){T.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Pb(a,b));
this.mergeVertices()}function Pb(a,b){va.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Ic(a,b){T.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new mb(a,b));this.mergeVertices()}function mb(a,b){va.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";
this.parameters={radius:a,detail:b}}function Jc(a,b){T.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Qb(a,b));this.mergeVertices()}function Qb(a,b){var c=(1+Math.sqrt(5))/2;va.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";
this.parameters={radius:a,detail:b}}function Kc(a,b){T.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rb(a,b));this.mergeVertices()}function Rb(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;va.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,
0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Lc(a,b,c,d,e,f){T.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new Sb(a,b,c,d,e);this.tangents=a.tangents;
this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function Sb(a,b,c,d,e){function f(e){var f=a.getPointAt(e/b),m=g.normals[e];e=g.binormals[e];for(p=0;p<=d;p++){var t=p/d*Math.PI*2,x=Math.sin(t),t=-Math.cos(t);l.x=t*m.x+x*e.x;l.y=t*m.y+x*e.y;l.z=t*m.z+x*e.z;l.normalize();k.push(l.x,l.y,l.z);h.x=f.x+c*l.x;h.y=f.y+c*l.y;h.z=f.z+c*l.z;n.push(h.x,h.y,h.z)}}I.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,
closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new q,l=new q,m=new D,t,p,n=[],k=[],x=[],r=[];for(t=0;t<b;t++)f(t);f(!1===e?b:0);for(t=0;t<=b;t++)for(p=0;p<=d;p++)m.x=t/b,m.y=p/d,x.push(m.x,m.y);(function(){for(p=1;p<=b;p++)for(t=1;t<=d;t++){var a=(d+1)*p+(t-1),c=(d+1)*p+t,e=(d+1)*(p-1)+t;r.push((d+1)*(p-1)+(t-1),a,e);r.push(a,c,e)}})();this.setIndex(r);this.addAttribute("position",new z(n,3));
this.addAttribute("normal",new z(k,3));this.addAttribute("uv",new z(x,2))}function Mc(a,b,c,d,e,f,g){T.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Tb(a,b,c,d,e,f));this.mergeVertices()}function Tb(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*
.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}I.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||100;b=b||40;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],l=[],m=[],t=[],p,n,k=new q,x=new q;new D;var r=new q,G=new q,w=new q,y=new q,K=new q;for(p=0;p<=c;++p)for(n=p/c*e*Math.PI*2,g(n,e,f,a,r),g(n+.01,e,f,a,G),y.subVectors(G,r),K.addVectors(G,r),w.crossVectors(y,K),K.crossVectors(w,y),w.normalize(),
K.normalize(),n=0;n<=d;++n){var v=n/d*Math.PI*2,E=-b*Math.cos(v),v=b*Math.sin(v);k.x=r.x+(E*K.x+v*w.x);k.y=r.y+(E*K.y+v*w.y);k.z=r.z+(E*K.z+v*w.z);l.push(k.x,k.y,k.z);x.subVectors(k,r).normalize();m.push(x.x,x.y,x.z);t.push(p/c);t.push(n/d)}for(n=1;n<=c;n++)for(p=1;p<=d;p++)a=(d+1)*n+(p-1),b=(d+1)*n+p,e=(d+1)*(n-1)+p,h.push((d+1)*(n-1)+(p-1),a,e),h.push(a,b,e);this.setIndex(h);this.addAttribute("position",new z(l,3));this.addAttribute("normal",new z(m,3));this.addAttribute("uv",new z(t,2))}function Nc(a,
b,c,d,e){T.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Ub(a,b,c,d,e))}function Ub(a,b,c,d,e){I.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=[],g=[],h=[],l=[],m=new q,t=new q,p=new q,n,k;for(n=0;n<=c;n++)for(k=0;k<=d;k++){var x=k/d*e,r=n/c*Math.PI*2;t.x=(a+
b*Math.cos(r))*Math.cos(x);t.y=(a+b*Math.cos(r))*Math.sin(x);t.z=b*Math.sin(r);g.push(t.x,t.y,t.z);m.x=a*Math.cos(x);m.y=a*Math.sin(x);p.subVectors(t,m).normalize();h.push(p.x,p.y,p.z);l.push(k/d);l.push(n/c)}for(n=1;n<=c;n++)for(k=1;k<=d;k++)a=(d+1)*(n-1)+k-1,b=(d+1)*(n-1)+k,e=(d+1)*n+k,f.push((d+1)*n+k-1,a,e),f.push(a,b,e);this.setIndex(f);this.addAttribute("position",new z(g,3));this.addAttribute("normal",new z(h,3));this.addAttribute("uv",new z(l,2))}function ya(a,b){"undefined"!==typeof a&&(T.call(this),
this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals())}function Oc(a,b){b=b||{};var c=b.font;if(!1===(c&&c.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new T;c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);ya.call(this,c,b);this.type=
"TextGeometry"}function Pc(a,b,c,d,e,f,g){T.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new nb(a,b,c,d,e,f,g))}function nb(a,b,c,d,e,f,g){I.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==
d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=f+g,l,m,t=0,p=[],n=new q,k=new q,x=[],r=[],G=[],w=[];for(m=0;m<=c;m++){var y=[],K=m/c;for(l=0;l<=b;l++){var v=l/b;n.x=-a*Math.cos(d+v*e)*Math.sin(f+K*g);n.y=a*Math.cos(f+K*g);n.z=a*Math.sin(d+v*e)*Math.sin(f+K*g);r.push(n.x,n.y,n.z);k.set(n.x,n.y,n.z).normalize();G.push(k.x,k.y,k.z);w.push(v,1-K);y.push(t++)}p.push(y)}for(m=0;m<c;m++)for(l=0;l<b;l++)a=p[m][l+1],d=p[m][l],e=p[m+1][l],g=p[m+1][l+1],(0!==m||0<f)&&x.push(a,d,
g),(m!==c-1||h<Math.PI)&&x.push(d,e,g);this.setIndex(x);this.addAttribute("position",new z(r,3));this.addAttribute("normal",new z(G,3));this.addAttribute("uv",new z(w,2))}function Qc(a,b,c,d,e,f){T.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Vb(a,b,c,d,e,f))}function Vb(a,b,c,d,e,f){I.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,
phiSegments:d,thetaStart:e,thetaLength:f};a=a||20;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],l=[],m=[],t=a,p=(b-a)/d,n=new q,k=new D,x,r;for(x=0;x<=d;x++){for(r=0;r<=c;r++)a=e+r/c*f,n.x=t*Math.cos(a),n.y=t*Math.sin(a),h.push(n.x,n.y,n.z),l.push(0,0,1),k.x=(n.x/b+1)/2,k.y=(n.y/b+1)/2,m.push(k.x,k.y);t+=p}for(x=0;x<d;x++)for(b=x*(c+1),r=0;r<c;r++)a=r+b,e=a+c+1,f=a+c+2,t=a+1,g.push(a,e,t),g.push(e,f,t);this.setIndex(g);this.addAttribute("position",
new z(h,3));this.addAttribute("normal",new z(l,3));this.addAttribute("uv",new z(m,2))}function Rc(a,b,c,d){T.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Wb(a,b,c,d));this.mergeVertices()}function Wb(a,b,c,d){I.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=N.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,l=new q,m=new D,
t,p;for(t=0;t<=b;t++){p=c+t*h*d;var n=Math.sin(p),k=Math.cos(p);for(p=0;p<=a.length-1;p++)l.x=a[p].x*n,l.y=a[p].y,l.z=a[p].x*k,f.push(l.x,l.y,l.z),m.x=t/b,m.y=p/(a.length-1),g.push(m.x,m.y)}for(t=0;t<b;t++)for(p=0;p<a.length-1;p++)c=p+t*a.length,h=c+a.length,l=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,l,m);this.setIndex(e);this.addAttribute("position",new z(f,3));this.addAttribute("uv",new z(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new q,f=new q,g=new q,
c=b*a.length*3,p=t=0;t<a.length;t++,p+=3)e.x=d[p+0],e.y=d[p+1],e.z=d[p+2],f.x=d[c+p+0],f.y=d[c+p+1],f.z=d[c+p+2],g.addVectors(e,f).normalize(),d[p+0]=d[c+p+0]=g.x,d[p+1]=d[c+p+1]=g.y,d[p+2]=d[c+p+2]=g.z}function Xb(a,b){T.call(this);this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new Yb(a,b));this.mergeVertices()}function Yb(a,b){function c(a){var c,
h,m=e.length/3;a=a.extractPoints(b);var k=a.shape,r=a.holes;if(!1===za.isClockWise(k))for(k=k.reverse(),a=0,c=r.length;a<c;a++)h=r[a],!0===za.isClockWise(h)&&(r[a]=h.reverse());var q=za.triangulateShape(k,r);a=0;for(c=r.length;a<c;a++)h=r[a],k=k.concat(h);a=0;for(c=k.length;a<c;a++)h=k[a],e.push(h.x,h.y,0),f.push(0,0,1),g.push(h.x,h.y);a=0;for(c=q.length;a<c;a++)k=q[a],d.push(k[0]+m,k[1]+m,k[2]+m),l+=3}I.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;
var d=[],e=[],f=[],g=[],h=0,l=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,l,m),h+=l,l=0;this.setIndex(d);this.addAttribute("position",new z(e,3));this.addAttribute("normal",new z(f,3));this.addAttribute("uv",new z(g,2))}function Zb(a,b){function c(a,b){return a-b}I.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var d=[],e=Math.cos(N.DEG2RAD*(void 0!==b?b:1)),f=[0,0],g={},h,l=["a","b","c"],m;a.isBufferGeometry?(m=new T,m.fromBufferGeometry(a)):
m=a.clone();m.mergeVertices();m.computeFaceNormals();var t=m.vertices;m=m.faces;for(var p=0,n=m.length;p<n;p++)for(var k=m[p],x=0;3>x;x++)f[0]=k[l[x]],f[1]=k[l[(x+1)%3]],f.sort(c),h=f.toString(),void 0===g[h]?g[h]={index1:f[0],index2:f[1],face1:p,face2:void 0}:g[h].face2=p;for(h in g)if(f=g[h],void 0===f.face2||m[f.face1].normal.dot(m[f.face2].normal)<=e)l=t[f.index1],d.push(l.x,l.y,l.z),l=t[f.index2],d.push(l.x,l.y,l.z);this.addAttribute("position",new z(d,3))}function ob(a,b,c,d,e,f,g,h){T.call(this);
this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new Wa(a,b,c,d,e,f,g,h));this.mergeVertices()}function Wa(a,b,c,d,e,f,g,h){function l(c){var e,f,l,r=new D,C=new q,F=0,A=!0===c?a:b,H=!0===c?1:-1;f=x;for(e=1;e<=d;e++)k.push(0,G*H,0),n.push(0,H,0),u.push(.5,.5),x++;l=x;for(e=0;e<=d;e++){var aa=e/d*h+g,z=Math.cos(aa),aa=Math.sin(aa);C.x=A*aa;C.y=G*H;C.z=A*z;k.push(C.x,C.y,
C.z);n.push(0,H,0);r.x=.5*z+.5;r.y=.5*aa*H+.5;u.push(r.x,r.y);x++}for(e=0;e<d;e++)r=f+e,C=l+e,!0===c?t.push(C,C+1,r):t.push(C+1,C,r),F+=3;m.addGroup(w,F,!0===c?1:2);w+=F}I.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*
Math.PI;var t=[],k=[],n=[],u=[],x=0,r=[],G=c/2,w=0;(function(){var f,l,v=new q,E=new q,L=0,C=(b-a)/c;for(l=0;l<=e;l++){var F=[],A=l/e,H=A*(b-a)+a;for(f=0;f<=d;f++){var D=f/d,z=D*h+g,J=Math.sin(z),z=Math.cos(z);E.x=H*J;E.y=-A*c+G;E.z=H*z;k.push(E.x,E.y,E.z);v.set(J,C,z).normalize();n.push(v.x,v.y,v.z);u.push(D,1-A);F.push(x++)}r.push(F)}for(f=0;f<d;f++)for(l=0;l<e;l++)v=r[l+1][f],E=r[l+1][f+1],C=r[l][f+1],t.push(r[l][f],v,C),t.push(v,E,C),L+=6;m.addGroup(w,L,0);w+=L})();!1===f&&(0<a&&l(!0),0<b&&l(!1));
this.setIndex(t);this.addAttribute("position",new z(k,3));this.addAttribute("normal",new z(n,3));this.addAttribute("uv",new z(u,2))}function Sc(a,b,c,d,e,f,g){ob.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function Tc(a,b,c,d,e,f,g){Wa.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,
thetaLength:g}}function Uc(a,b,c,d){T.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new $b(a,b,c,d))}function $b(a,b,c,d){I.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],l,m,t=new q,k=new D;f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);m=0;for(l=3;m<=b;m++,l+=
3){var n=c+m/b*d;t.x=a*Math.cos(n);t.y=a*Math.sin(n);f.push(t.x,t.y,t.z);g.push(0,0,1);k.x=(f[l]/a+1)/2;k.y=(f[l+1]/a+1)/2;h.push(k.x,k.y)}for(l=1;l<=b;l++)e.push(l,l+1,0);this.setIndex(e);this.addAttribute("position",new z(f,3));this.addAttribute("normal",new z(g,3));this.addAttribute("uv",new z(h,2))}function ac(){Ga.call(this,{uniforms:Ia.merge([V.lights,{opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag});this.transparent=this.lights=!0;Object.defineProperties(this,
{opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(a){this.uniforms.opacity.value=a}}})}function bc(a){Ga.call(this,a);this.type="RawShaderMaterial"}function sd(a){this.uuid=N.generateUUID();this.type="MultiMaterial";this.materials=Array.isArray(a)?a:[];this.visible=!0}function Qa(a){X.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new J(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=
1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=
this.skinning=!1;this.setValues(a)}function pb(a){Qa.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a)}function ra(a){X.call(this);this.type="MeshPhongMaterial";this.color=new J(16777215);this.specular=new J(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=
null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function qb(a){ra.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";
this.gradientMap=null;this.setValues(a)}function rb(a){X.call(this,a);this.type="MeshNormalMaterial";this.bumpMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new D(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.lights=this.fog=!1;this.setValues(a)}function sb(a){X.call(this);this.type="MeshLambertMaterial";this.color=new J(16777215);this.lightMap=this.map=
null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new J(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function tb(a){X.call(this);this.type="LineDashedMaterial";this.color=new J(16777215);this.scale=
this.linewidth=1;this.dashSize=3;this.gapSize=1;this.lights=!1;this.setValues(a)}function $d(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)}}function sa(a){this.manager=void 0!==a?a:pa}
function Ne(a){this.manager=void 0!==a?a:pa;this._parser=null}function ae(a){this.manager=void 0!==a?a:pa;this._parser=null}function Vc(a){this.manager=void 0!==a?a:pa}function be(a){this.manager=void 0!==a?a:pa}function td(a){this.manager=void 0!==a?a:pa}function ha(a,b){A.call(this);this.type="Light";this.color=new J(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function ud(a,b,c){ha.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(A.DefaultUp);this.updateMatrix();
this.groundColor=new J(b)}function ub(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new D(512,512);this.map=null;this.matrix=new S}function vd(){ub.call(this,new Ea(50,1,.5,500))}function wd(a,b,c,d,e,f){ha.call(this,a,b);this.type="SpotLight";this.position.copy(A.DefaultUp);this.updateMatrix();this.target=new A;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?
d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new vd}function xd(a,b,c,d){ha.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new ub(new Ea(90,1,.5,500))}function yd(){ub.call(this,new Ib(-5,5,5,-5,.5,500))}function zd(a,b){ha.call(this,a,b);this.type="DirectionalLight";this.position.copy(A.DefaultUp);
this.updateMatrix();this.target=new A;this.shadow=new yd}function Ad(a,b){ha.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function la(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Bd(a,b,c,d){la.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function Wc(a,b,c,d){la.call(this,a,b,c,d)}function Cd(a,b,c,d){la.call(this,a,b,c,d)}function vb(a,
b,c,d){if(void 0===a)throw Error("track name is undefined");if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=ta.convertArray(b,this.TimeBufferType);this.values=ta.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize()}function cc(a,b,c,d){vb.call(this,a,b,c,d)}function Dd(a,b,c,d){la.call(this,a,b,c,d)}function Xc(a,b,c,d){vb.call(this,a,b,c,d)}function dc(a,b,c,d){vb.call(this,a,b,c,
d)}function Ed(a,b,c,d){vb.call(this,a,b,c,d)}function Fd(a,b,c){vb.call(this,a,b,c)}function Gd(a,b,c,d){vb.call(this,a,b,c,d)}function wb(a,b,c,d){vb.apply(this,arguments)}function Aa(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=N.generateUUID();0>this.duration&&this.resetDuration();this.optimize()}function Hd(a){this.manager=void 0!==a?a:pa;this.textures={}}function ce(a){this.manager=void 0!==a?a:pa}function ec(){this.onLoadStart=function(){};this.onLoadProgress=function(){};
this.onLoadComplete=function(){}}function de(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:pa;this.withCredentials=!1}function Oe(a){this.manager=void 0!==a?a:pa;this.texturePath=""}function Pe(a,b,c,d,e){b=.5*(d-b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function xb(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function yb(a,b,c,d,e){var f=1-a,g=1-a;return f*
f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function Ba(){}function Ta(a,b){this.v1=a;this.v2=b}function Yc(){this.curves=[];this.autoClose=!1}function Xa(a,b,c,d,e,f,g,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g;this.aRotation=h||0}function zb(a){this.points=void 0===a?[]:a}function fc(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function gc(a,b,c){this.v0=a;this.v1=b;this.v2=c}function Zc(a){Yc.call(this);this.currentPoint=new D;a&&this.fromPoints(a)}
function Ab(){Zc.apply(this,arguments);this.holes=[]}function ee(){this.subPaths=[];this.currentPath=null}function fe(a){this.data=a}function Qe(a){this.manager=void 0!==a?a:pa}function ge(a){this.manager=void 0!==a?a:pa}function he(a,b,c,d){ha.call(this,a,b);this.type="RectAreaLight";this.position.set(0,1,0);this.updateMatrix();this.width=void 0!==c?c:10;this.height=void 0!==d?d:10}function Re(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new Ea;this.cameraL.layers.enable(1);
this.cameraL.matrixAutoUpdate=!1;this.cameraR=new Ea;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1}function Id(a,b,c){A.call(this);this.type="CubeCamera";var d=new Ea(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new q(1,0,0));this.add(d);var e=new Ea(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new q(-1,0,0));this.add(e);var f=new Ea(90,1,a,b);f.up.set(0,0,1);f.lookAt(new q(0,1,0));this.add(f);var g=new Ea(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new q(0,-1,0));this.add(g);var h=new Ea(90,1,a,b);h.up.set(0,
-1,0);h.lookAt(new q(0,0,1));this.add(h);var l=new Ea(90,1,a,b);l.up.set(0,-1,0);l.lookAt(new q(0,0,-1));this.add(l);this.renderTarget=new Eb(c,c,{format:1022,magFilter:1006,minFilter:1006});this.renderTarget.texture.name="CubeCamera";this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,n=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=
3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=n;c.activeCubeFace=5;a.render(b,l,c);a.setRenderTarget(null)}}function ie(){A.call(this);this.type="AudioListener";this.context=je.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null}function hc(a){A.call(this);this.type="Audio";this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.loop=
!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[]}function ke(a){hc.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain)}function le(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}function me(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case "quaternion":b=
this._slerp;break;case "string":case "bool":a=Array;b=this._select;break;default:b=this._lerp}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0}function Se(a,b,c){c=c||ma.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)}function ma(a,b,c){this.path=b;this.parsedPath=c||ma.parseTrackName(b);this.node=ma.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function Te(a){this.uuid=N.generateUUID();this._objects=Array.prototype.slice.call(arguments);
this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c)b[arguments[c].uuid]=c;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}function Ue(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:2400,
endingEnd:2400},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=
this.zeroSlopeAtStart=!0}function Ve(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function Jd(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function Bb(){I.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0}function ne(a,b,c,d){this.uuid=N.generateUUID();this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function ic(a,b){this.uuid=N.generateUUID();this.array=
a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.onUploadCallback=function(){};this.version=0}function jc(a,b,c){ic.call(this,a,b);this.meshPerAttribute=c||1}function kc(a,b,c){U.call(this,a,b);this.meshPerAttribute=c||1}function We(a,b,c,d){this.ray=new gb(a,b);this.near=c||0;this.far=d||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
return this.Points}}})}function Xe(a,b){return a.distance-b.distance}function oe(a,b,c,d){if(!1!==a.visible&&(a.raycast(b,c),!0===d)){a=a.children;d=0;for(var e=a.length;d<e;d++)oe(a[d],b,c,!0)}}function Ye(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function Ze(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function $e(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?
c:0;return this}function ca(a,b){xa.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)}function $c(a){A.call(this);this.material=a;this.render=function(a){}}function ad(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=3*c.faces.length:c&&c.isBufferGeometry&&(b=c.attributes.normal.count);
c=new I;b=new z(6*b,3);c.addAttribute("position",b);fa.call(this,c,new ka({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function lc(a){A.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new I;for(var b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1)}a.addAttribute("position",new z(b,3));b=
new ka({fog:!1});this.cone=new fa(a,b);this.add(this.cone);this.update()}function mc(a){this.bones=this.getBoneList(a);for(var b=new I,c=[],d=[],e=new J(0,0,1),f=new J(0,1,0),g=0;g<this.bones.length;g++){var h=this.bones[g];h.parent&&h.parent.isBone&&(c.push(0,0,0),c.push(0,0,0),d.push(e.r,e.g,e.b),d.push(f.r,f.g,f.b))}b.addAttribute("position",new z(c,3));b.addAttribute("color",new z(d,3));c=new ka({vertexColors:2,depthTest:!1,depthWrite:!1,transparent:!0});fa.call(this,b,c);this.root=a;this.matrix=
a.matrixWorld;this.matrixAutoUpdate=!1;this.update()}function nc(a,b){this.light=a;this.light.updateMatrixWorld();var c=new nb(b,4,2),d=new Ja({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);xa.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1}function oc(a){A.call(this);this.light=a;this.light.updateMatrixWorld();var b=new Ja({color:a.color,fog:!1});a=new Ja({color:a.color,fog:!1,wireframe:!0});var c=new I;c.addAttribute("position",
new U(new Float32Array(18),3));this.add(new xa(c,b));this.add(new xa(c,a));this.update()}function pc(a,b){A.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;var c=new mb(b);c.rotateY(.5*Math.PI);var d=new Ja({vertexColors:2,wireframe:!0}),e=c.getAttribute("position"),e=new Float32Array(3*e.count);c.addAttribute("color",new U(e,3));this.add(new xa(c,d));this.update()}function bd(a,b,c,d){a=a||10;b=b||10;c=new J(void 0!==c?c:4473924);d=new J(void 0!==
d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],l=0,m=0,t=-g;l<=b;l++,t+=f){a.push(-g,0,t,g,0,t);a.push(t,0,-g,t,0,g);var k=l===e?c:d;k.toArray(h,m);m+=3;k.toArray(h,m);m+=3;k.toArray(h,m);m+=3;k.toArray(h,m);m+=3}b=new I;b.addAttribute("position",new z(a,3));b.addAttribute("color",new z(h,3));c=new ka({vertexColors:2});fa.call(this,b,c)}function Kd(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new J(void 0!==e?e:4473924);f=new J(void 0!==f?f:8947848);var g=[],h=[],l,m,t,k,n;for(t=0;t<=b;t++)m=
t/b*2*Math.PI,l=Math.sin(m)*a,m=Math.cos(m)*a,g.push(0,0,0),g.push(l,0,m),n=t&1?e:f,h.push(n.r,n.g,n.b),h.push(n.r,n.g,n.b);for(t=0;t<=c;t++)for(n=t&1?e:f,k=a-a/c*t,b=0;b<d;b++)m=b/d*2*Math.PI,l=Math.sin(m)*k,m=Math.cos(m)*k,g.push(l,0,m),h.push(n.r,n.g,n.b),m=(b+1)/d*2*Math.PI,l=Math.sin(m)*k,m=Math.cos(m)*k,g.push(l,0,m),h.push(n.r,n.g,n.b);a=new I;a.addAttribute("position",new z(g,3));a.addAttribute("color",new z(h,3));g=new ka({vertexColors:2});fa.call(this,a,g)}function cd(a,b,c,d){this.object=
a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;(c=this.object.geometry)&&c.isGeometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new I;b=new z(6*b,3);c.addAttribute("position",b);fa.call(this,c,new ka({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update()}function qc(a,b){A.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=
!1;void 0===b&&(b=1);var c=new I;c.addAttribute("position",new z([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));var d=new ka({fog:!1});this.add(new Na(c,d));c=new I;c.addAttribute("position",new z([0,0,0,0,0,1],3));this.add(new Na(c,d));this.update()}function dd(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1)}var d=new I,e=new ka({color:16777215,vertexColors:1}),f=[],g=[],h={},l=new J(16755200),m=new J(16711680),k=new J(43775),
p=new J(16777215),n=new J(3355443);b("n1","n2",l);b("n2","n4",l);b("n4","n3",l);b("n3","n1",l);b("f1","f2",l);b("f2","f4",l);b("f4","f3",l);b("f3","f1",l);b("n1","f1",l);b("n2","f2",l);b("n3","f3",l);b("n4","f4",l);b("p","n1",m);b("p","n2",m);b("p","n3",m);b("p","n4",m);b("u1","u2",k);b("u2","u3",k);b("u3","u1",k);b("c","t",p);b("p","c",n);b("cn1","cn2",n);b("cn3","cn4",n);b("cf1","cf2",n);b("cf3","cf4",n);d.addAttribute("position",new z(f,3));d.addAttribute("color",new z(g,3));fa.call(this,d,e);
this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function rc(a,b){void 0===b&&(b=16776960);var c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=new Float32Array(24),e=new I;e.setIndex(new U(c,1));e.addAttribute("position",new U(d,3));fa.call(this,e,new ka({color:b}));void 0!==a&&this.update(a)}function Cb(a,b,c,d,e,f){A.call(this);void 0===d&&(d=16776960);void 0===
c&&(c=1);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===Ld&&(Ld=new I,Ld.addAttribute("position",new z([0,0,0,0,1,0],3)),pe=new Wa(0,.5,1,5,1),pe.translate(0,-.5,0));this.position.copy(b);this.line=new Na(Ld,new ka({color:d}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new xa(pe,new Ja({color:d}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function Md(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new I;a.addAttribute("position",
new z(b,3));a.addAttribute("color",new z([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ka({vertexColors:2});fa.call(this,a,b)}function qe(){var a=0,b=0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,l){e=l*(g-e);h=l*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,l,m,k){e=((f-e)/l-(g-e)/(l+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+k)+(h-g)/k)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function Ka(a){this.points=
a||[];this.closed=!1}function ed(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d}function fd(a,b,c){this.v0=a;this.v1=b;this.v2=c}function gd(a,b){this.v1=a;this.v2=b}function Nd(a,b,c,d,e,f){Xa.call(this,a,b,c,c,d,e,f)}function af(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Ka.call(this,a);this.type="catmullrom";this.closed=!0}function bf(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");Ka.call(this,
a);this.type="catmullrom"}function re(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");Ka.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===
a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b}}();Object.assign(wa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;
var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;var c=[],d,e=b.length;for(d=0;d<e;d++)c[d]=b[d];for(d=0;d<e;d++)c[d].call(this,a)}}}});var N={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*
a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*N.DEG2RAD},radToDeg:function(a){return a*N.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},nearestPowerOfTwo:function(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2))},
nextPowerOfTwo:function(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a}};Object.defineProperties(D.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(D.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=
b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=
a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},subVectors:function(a,b){this.x=
a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a):this.y=this.x=0;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,
Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(){var a=new D,b=new D;return function(c,d){a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=
Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length())},
angle:function(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,
a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-
a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this}});var cf=0;ea.DEFAULT_IMAGE=void 0;ea.DEFAULT_MAPPING=300;Object.defineProperty(ea.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(ea.prototype,wa.prototype,{constructor:ea,isTexture:!0,clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=
a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,
name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var c=this.image;void 0===c.uuid&&(c.uuid=N.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.width=c.width,g.height=
c.height,g.getContext("2d").drawImage(c,0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",.6):g.toDataURL("image/png");d[e]={uuid:f,url:g}}b.image=c.uuid}return a.textures[this.uuid]=b},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(300===this.mapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%
2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y)}}});Object.assign(ga.prototype,{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},
setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,
this.w)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,
b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){isFinite(a)?
(this.x*=a,this.y*=a,this.z*=a,this.w*=a):this.w=this.z=this.y=this.x=0;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=
0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],l=a[9];c=a[2];b=a[6];var m=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(l-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(l+b)&&.1>Math.abs(e+h+m-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;m=(m+1)/2;d=(d+g)/4;f=(f+c)/4;l=(l+b)/4;e>h&&e>m?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):
h>m?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=l/c):.01>m?(c=b=.707106781,d=0):(d=Math.sqrt(m),b=f/d,c=l/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-l)*(b-l)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-l)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);
this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(){var a=new ga,b=new ga;return function(c,d){a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);
this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):
Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=
[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this}});Object.assign(Db.prototype,wa.prototype,{isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,
0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Eb.prototype=Object.create(Db.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isWebGLRenderTargetCube=!0;Object.assign(na,{slerp:function(a,b,
c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],l=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var k=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||l!==k||m!==p){f=1-g;var n=h*d+l*k+m*p+c*e,u=0<=n?1:-1,x=1-n*n;x>Number.EPSILON&&(x=Math.sqrt(x),n=Math.atan2(x,n*u),f=Math.sin(f*n)/x,g=Math.sin(g*n)/x);u*=g;h=h*f+d*u;l=l*f+k*u;m=m*f+p*u;c=c*f+e*u;f===1-g&&(g=1/Math.sqrt(h*h+l*l+m*m+c*c),h*=g,l*=g,m*=g,c*=g)}a[b]=h;a[b+1]=l;a[b+2]=m;a[b+3]=c}});Object.defineProperties(na.prototype,{x:{get:function(){return this._x},
set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a;this.onChangeCallback()}}});Object.assign(na.prototype,{set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,
this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===(a&&a.isEuler))throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),l=a.order;"XYZ"===l?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===
l?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===l?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===l?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===l?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===l&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],l=b[6],b=b[10],m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(l-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(l-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
.25*c,this._z=(g+l)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+l)/c,this._z=.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a=new q,b;return function(c,d){void 0===a&&(a=new q);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize()}}(),inverse:function(){return this.conjugate().normalize()},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,l=b._z,m=b._w;this._x=c*m+f*g+d*l-e*h;this._y=d*m+f*h+e*g-c*l;this._z=e*m+f*l+c*h-d*g;this._w=f*m-c*g-d*h-e*l;this.onChangeCallback();
return this},slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var l=Math.atan2(h,g),g=Math.sin((1-b)*l)/h,h=Math.sin(b*
l)/h;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},onChange:function(a){this.onChangeCallback=
a;return this},onChangeCallback:function(){}});Object.assign(q.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=
a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a=new na;return function(b){!1===
(b&&b.isEuler)&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(a.setFromEuler(b))}}(),applyAxisAngle:function(){var a=new na;return function(b,c){return this.applyQuaternion(a.setFromAxisAngle(b,c))}}(),applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,
d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this.divideScalar(a[3]*b+a[7]*c+a[11]*d+a[15])},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,l=a*c+g*b-e*d,m=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+l*-g-m*-f;this.y=l*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-l*-e;return this},project:function(){var a=new S;return function(b){a.multiplyMatrices(b.projectionMatrix,
a.getInverse(b.matrixWorld));return this.applyMatrix4(a)}}(),unproject:function(){var a=new S;return function(b){a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyMatrix4(a)}}(),transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/
a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(){var a=new q,b=new q;return function(c,d){a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),
clampLength:function(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c)},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=
0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){return this.multiplyScalar(a/this.length())},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-
d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b)},projectOnPlane:function(){var a=new q;return function(b){a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a=new q;return function(b){return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*
a.lengthSq());return Math.acos(N.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},distanceToManhattan:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){var b=Math.sin(a.phi)*a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this},setFromCylindrical:function(a){this.x=
a.radius*Math.sin(a.theta);this.y=a.y;this.z=a.radius*Math.cos(a.theta);return this},setFromMatrixPosition:function(a){return this.setFromMatrixColumn(a,3)},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){if("number"===typeof a){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var c=
a;a=b;b=c}return this.fromArray(a.elements,4*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);
return this}});Object.assign(S.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,l,m,k,p,n,u,x,r){var q=this.elements;q[0]=a;q[4]=b;q[8]=c;q[12]=d;q[1]=e;q[5]=f;q[9]=g;q[13]=h;q[2]=l;q[6]=m;q[10]=k;q[14]=p;q[3]=n;q[7]=u;q[11]=x;q[15]=r;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new S).fromArray(this.elements)},copy:function(a){for(var b=0;16>b;b++)this.elements[b]=a.elements[b];return this},copyPosition:function(a){var b=this.elements;
a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(){var a=new q;return function(b){var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();
c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;return this}}(),makeRotationFromEuler:function(a){!1===(a&&a.isEuler)&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var l=f*e,m=c*h,k=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=l+
m*d;b[5]=a-k*d;b[9]=-c*g;b[2]=k-a*d;b[6]=m+l*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a+k*c,b[4]=m*c-l,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=l*c-m,b[6]=k+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a-k*c,b[4]=-f*e,b[8]=m+l*c,b[1]=l+m*c,b[5]=f*h,b[9]=k-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,l=f*e,m=c*h,k=c*e,b[0]=g*h,b[4]=m*d-l,b[8]=a*d+k,b[1]=g*e,b[5]=k*d+a,b[9]=l*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=
g*h,b[4]=k-a*e,b[8]=m*e+l,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=l*e+m,b[10]=a-k*e):"XZY"===a.order&&(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+k,b[5]=f*h,b[9]=l*e-m,b[2]=m*e-l,b[6]=c*h,b[10]=k*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,l=e+e;a=c*g;var m=c*h,c=c*l,k=d*h,d=d*l,e=e*l,g=f*g,h=f*h,f=f*l;b[0]=1-(k+e);b[4]=m-f;b[8]=c+h;b[1]=m+f;b[5]=1-(a+e);b[9]=
d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+k);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new q,b=new q,c=new q;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.lengthSq()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.lengthSq()&&(c.z+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),multiply:function(a,b){return void 0!==b?
(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],l=c[12],m=c[1],k=c[5],p=c[9],n=c[13],u=c[2],q=c[6],r=c[10],G=c[14],w=c[3],y=c[7],K=c[11],c=c[15],v=d[0],E=d[4],L=d[8],C=d[12],F=d[1],A=d[5],H=d[9],D=d[13],z=d[2],J=d[6],
I=d[10],Q=d[14],M=d[3],O=d[7],P=d[11],d=d[15];e[0]=f*v+g*F+h*z+l*M;e[4]=f*E+g*A+h*J+l*O;e[8]=f*L+g*H+h*I+l*P;e[12]=f*C+g*D+h*Q+l*d;e[1]=m*v+k*F+p*z+n*M;e[5]=m*E+k*A+p*J+n*O;e[9]=m*L+k*H+p*I+n*P;e[13]=m*C+k*D+p*Q+n*d;e[2]=u*v+q*F+r*z+G*M;e[6]=u*E+q*A+r*J+G*O;e[10]=u*L+q*H+r*I+G*P;e[14]=u*C+q*D+r*Q+G*d;e[3]=w*v+y*F+K*z+c*M;e[7]=w*E+y*A+K*J+c*O;e[11]=w*L+y*H+K*I+c*P;e[15]=w*C+y*D+K*Q+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=
d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},applyToBufferAttribute:function(){var a=new q;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),
b.setXYZ(c,a.x,a.y,a.z);return b}}(),determinant:function(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],l=a[13],m=a[2],k=a[6],p=a[10],n=a[14];return a[3]*(+e*h*k-d*l*k-e*g*p+c*l*p+d*g*n-c*h*n)+a[7]*(+b*h*n-b*l*p+e*f*p-d*f*n+d*l*m-e*h*m)+a[11]*(+b*l*k-b*g*n-e*f*k+c*f*n+e*g*m-c*l*m)+a[15]*(-d*g*m-b*h*k+b*g*p+d*f*k-c*f*p+c*h*m)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];
a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],l=d[4],m=d[5],k=d[6],p=d[7],n=d[8],u=d[9],q=d[10],r=d[11],G=d[12],w=d[13],y=d[14],d=d[15],K=u*y*p-w*q*p+w*k*r-m*y*r-u*k*d+m*q*d,v=G*q*p-n*y*p-G*k*r+l*y*r+n*k*d-l*q*d,E=n*w*p-G*u*p+G*m*r-l*w*r-n*m*d+l*u*d,L=G*u*k-n*w*k-G*m*q+l*w*q+n*m*y-l*u*y,C=e*K+f*v+g*E+h*L;if(0===C){if(!0===
b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");return this.identity()}C=1/C;c[0]=K*C;c[1]=(w*q*h-u*y*h-w*g*r+f*y*r+u*g*d-f*q*d)*C;c[2]=(m*y*h-w*k*h+w*g*p-f*y*p-m*g*d+f*k*d)*C;c[3]=(u*k*h-m*q*h-u*g*p+f*q*p+m*g*r-f*k*r)*C;c[4]=v*C;c[5]=(n*y*h-G*q*h+G*g*r-e*y*r-n*g*d+e*q*d)*C;c[6]=(G*k*h-l*y*h-G*g*p+e*y*p+l*g*d-e*k*d)*C;c[7]=(l*q*h-n*k*h+n*g*p-e*q*p-l*g*r+e*k*r)*C;c[8]=E*C;c[9]=(G*u*
h-n*w*h-G*f*r+e*w*r+n*f*d-e*u*d)*C;c[10]=(l*w*h-G*m*h+G*f*p-e*w*p-l*f*d+e*m*d)*C;c[11]=(n*m*h-l*u*h-n*f*p+e*u*p+l*f*r-e*m*r)*C;c[12]=L*C;c[13]=(n*w*g-G*u*g+G*f*q-e*w*q-n*f*y+e*u*y)*C;c[14]=(G*m*g-l*w*g-G*f*k+e*w*k+l*f*y-e*m*y)*C;c[15]=(l*u*g-n*m*g+n*f*k-e*u*k-l*f*q+e*m*q)*C;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;
return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,
-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,l=e*f,m=e*g;this.set(l*f+c,l*g-d*h,l*h+d*g,0,l*g+d*h,m*g+c,m*h-d*f,0,l*h-d*g,m*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);
return this},decompose:function(){var a=new q,b=new S;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),l=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];for(c=0;16>c;c++)b.elements[c]=this.elements[c];c=1/g;var f=1/h,m=1/l;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=m;b.elements[9]*=m;b.elements[10]*=m;d.setFromRotationMatrix(b);
e.x=g;e.y=h;e.z=l;return this}}(),makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),l=1/(c-d),m=1/(f-e);g[0]=
2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*l;g[9]=0;g[13]=-((c+d)*l);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});Za.prototype=Object.create(ea.prototype);Za.prototype.constructor=Za;Za.prototype.isCubeTexture=!0;Object.defineProperty(Za.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});var Ae=new ea,Be=new Za,we=[],ye=[],ze=new Float32Array(16);Fe.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=
c[d];f.setValue(a,b[f.id])}};var Qd=/([\w\d_]+)(\])?(\[|\.)?/g;$a.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer)};$a.prototype.set=function(a,b,c){var d=this.map[c];void 0!==d&&d.setValue(a,b[c],this.renderer)};$a.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};$a.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};$a.seqWithValue=function(a,b){for(var c=
[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var Ia={merge:function(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d)b[e]=d[e]}return b},clone:function(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}},Z={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"\nvec3 transformed = vec3( position );\n",beginnormal_vertex:"\nvec3 objectNormal = vec3( normal );\n",bsdfs:"float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 ltcTextureCoords( const in GeometricContext geometry, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = (LUT_SIZE - 1.0)/LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5/LUT_SIZE;\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nvoid clipQuadToHorizon( inout vec3 L[5], out int n ) {\n\tint config = 0;\n\tif ( L[0].z > 0.0 ) config += 1;\n\tif ( L[1].z > 0.0 ) config += 2;\n\tif ( L[2].z > 0.0 ) config += 4;\n\tif ( L[3].z > 0.0 ) config += 8;\n\tn = 0;\n\tif ( config == 0 ) {\n\t} else if ( config == 1 ) {\n\t\tn = 3;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 2 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 3 ) {\n\t\tn = 4;\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t\tL[3] = -L[3].z * L[0] + L[0].z * L[3];\n\t} else if ( config == 4 ) {\n\t\tn = 3;\n\t\tL[0] = -L[3].z * L[2] + L[2].z * L[3];\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t} else if ( config == 5 ) {\n\t\tn = 0;\n\t} else if ( config == 6 ) {\n\t\tn = 4;\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 7 ) {\n\t\tn = 5;\n\t\tL[4] = -L[3].z * L[0] + L[0].z * L[3];\n\t\tL[3] = -L[3].z * L[2] + L[2].z * L[3];\n\t} else if ( config == 8 ) {\n\t\tn = 3;\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[1] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] =  L[3];\n\t} else if ( config == 9 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t\tL[2] = -L[2].z * L[3] + L[3].z * L[2];\n\t} else if ( config == 10 ) {\n\t\tn = 0;\n\t} else if ( config == 11 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = -L[2].z * L[3] + L[3].z * L[2];\n\t\tL[2] = -L[2].z * L[1] + L[1].z * L[2];\n\t} else if ( config == 12 ) {\n\t\tn = 4;\n\t\tL[1] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[0] = -L[0].z * L[3] + L[3].z * L[0];\n\t} else if ( config == 13 ) {\n\t\tn = 5;\n\t\tL[4] = L[3];\n\t\tL[3] = L[2];\n\t\tL[2] = -L[1].z * L[2] + L[2].z * L[1];\n\t\tL[1] = -L[1].z * L[0] + L[0].z * L[1];\n\t} else if ( config == 14 ) {\n\t\tn = 5;\n\t\tL[4] = -L[0].z * L[3] + L[3].z * L[0];\n\t\tL[0] = -L[0].z * L[1] + L[1].z * L[0];\n\t} else if ( config == 15 ) {\n\t\tn = 4;\n\t}\n\tif ( n == 3 )\n\t\tL[3] = L[0];\n\tif ( n == 4 )\n\t\tL[4] = L[0];\n}\nfloat integrateLtcBrdfOverRectEdge( vec3 v1, vec3 v2 ) {\n\tfloat cosTheta = dot( v1, v2 );\n\tfloat theta = acos( cosTheta );\n\tfloat res = cross( v1, v2 ).z * ( ( theta > 0.001 ) ? theta / sin( theta ) : 1.0 );\n\treturn res;\n}\nvoid initRectPoints( const in vec3 pos, const in vec3 halfWidth, const in vec3 halfHeight, out vec3 rectPoints[4] ) {\n\trectPoints[0] = pos - halfWidth - halfHeight;\n\trectPoints[1] = pos + halfWidth - halfHeight;\n\trectPoints[2] = pos + halfWidth + halfHeight;\n\trectPoints[3] = pos - halfWidth + halfHeight;\n}\nvec3 integrateLtcBrdfOverRect( const in GeometricContext geometry, const in mat3 brdfMat, const in vec3 rectPoints[4] ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 P = geometry.position;\n\tvec3 T1, T2;\n\tT1 = normalize(V - N * dot( V, N ));\n\tT2 = - cross( N, T1 );\n\tmat3 brdfWrtSurface = brdfMat * transpose( mat3( T1, T2, N ) );\n\tvec3 clippedRect[5];\n\tclippedRect[0] = brdfWrtSurface * ( rectPoints[0] - P );\n\tclippedRect[1] = brdfWrtSurface * ( rectPoints[1] - P );\n\tclippedRect[2] = brdfWrtSurface * ( rectPoints[2] - P );\n\tclippedRect[3] = brdfWrtSurface * ( rectPoints[3] - P );\n\tint n;\n\tclipQuadToHorizon(clippedRect, n);\n\tif ( n == 0 )\n\t\treturn vec3( 0, 0, 0 );\n\tclippedRect[0] = normalize( clippedRect[0] );\n\tclippedRect[1] = normalize( clippedRect[1] );\n\tclippedRect[2] = normalize( clippedRect[2] );\n\tclippedRect[3] = normalize( clippedRect[3] );\n\tclippedRect[4] = normalize( clippedRect[4] );\n\tfloat sum = 0.0;\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[0], clippedRect[1] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[1], clippedRect[2] );\n\tsum += integrateLtcBrdfOverRectEdge( clippedRect[2], clippedRect[3] );\n\tif (n >= 4)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[3], clippedRect[4] );\n\tif (n == 5)\n\t\tsum += integrateLtcBrdfOverRectEdge( clippedRect[4], clippedRect[0] );\n\tsum = max( 0.0, sum );\n\tvec3 Lo_i = vec3( sum, sum, sum );\n\treturn Lo_i;\n}\nvec3 Rect_Area_Light_Specular_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight,\n\t\tconst in float roughness,\n\t\tconst in sampler2D ltcMat, const in sampler2D ltcMag ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tvec2 uv = ltcTextureCoords( geometry, roughness );\n\tvec4 brdfLtcApproxParams, t;\n\tbrdfLtcApproxParams = texture2D( ltcMat, uv );\n\tt = texture2D( ltcMat, uv );\n\tfloat brdfLtcScalar = texture2D( ltcMag, uv ).a;\n\tmat3 brdfLtcApproxMat = mat3(\n\t\tvec3(   1,   0, t.y ),\n\t\tvec3(   0, t.z,   0 ),\n\t\tvec3( t.w,   0, t.x )\n\t);\n\tvec3 specularReflectance = integrateLtcBrdfOverRect( geometry, brdfLtcApproxMat, rectPoints );\n\tspecularReflectance *= brdfLtcScalar;\n\treturn specularReflectance;\n}\nvec3 Rect_Area_Light_Diffuse_Reflectance(\n\t\tconst in GeometricContext geometry,\n\t\tconst in vec3 lightPos, const in vec3 lightHalfWidth, const in vec3 lightHalfHeight ) {\n\tvec3 rectPoints[4];\n\tinitRectPoints( lightPos, lightHalfWidth, lightHalfHeight, rectPoints );\n\tmat3 diffuseBrdfMat = mat3(1);\n\tvec3 diffuseReflectance = integrateLtcBrdfOverRect( geometry, diffuseBrdfMat, rectPoints );\n\treturn diffuseReflectance;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
defaultnormal_vertex:"#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",encodings_fragment:"  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
envmap_pars_fragment:"#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",envmap_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
fog_vertex:"\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
gradientmap_pars_fragment:"#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
lights_pars:"uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_BlinnPhong( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = BlinnExponentToGGXRoughness( material.specularShininess );\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec / PI2;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff / PI2;\n\t}\n#endif\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 matDiffColor = material.diffuseColor;\n\t\tvec3 matSpecColor = material.specularColor;\n\t\tvec3 lightColor   = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 spec = Rect_Area_Light_Specular_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight,\n\t\t\t\troughness,\n\t\t\t\tltcMat, ltcMag );\n\t\tvec3 diff = Rect_Area_Light_Diffuse_Reflectance(\n\t\t\t\tgeometry,\n\t\t\t\trectAreaLight.position, rectAreaLight.halfWidth, rectAreaLight.halfHeight );\n\t\treflectedLight.directSpecular += lightColor * matSpecColor * spec;\n\t\treflectedLight.directDiffuse  += lightColor * matDiffColor * diff;\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
lights_template:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
logdepthbuf_fragment:"#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",map_particle_fragment:"#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",map_particle_pars_fragment:"#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
normal_flip:"#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",normal_fragment:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",project_vertex:"#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",tonemapping_pars_fragment:"#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
uv_pars_fragment:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
uv_vertex:"#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",cube_frag:"uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
cube_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
distanceRGBA_frag:"uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",distanceRGBA_vert:"varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
equirect_frag:"uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",equirect_vert:"varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
meshphysical_frag:"#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
meshphysical_vert:"#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
shadow_frag:"uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",shadow_vert:"#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"},$f={aliceblue:15792383,antiquewhite:16444375,
aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,
darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,
indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,
maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,
papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,
white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Object.assign(J.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(){function a(a,
c,d){0>d&&(d+=1);1<d&&--d;return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a}return function(b,c,d){b=N.euclideanModulo(b,1);c=N.clamp(c,0,1);d=N.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this}}(),setStyle:function(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];
switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=
/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+
c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}a&&0<a.length&&(c=$f[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);var c=
0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,
l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var l=e-f,f=.5>=h?l/(e+f):l/(2-e-f);switch(e){case b:g=(c-d)/l+(c<d?6:0);break;case c:g=(d-b)/l+2;break;case d:g=(b-c)/l+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=
a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-
this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});db.prototype=Object.create(ea.prototype);db.prototype.constructor=db;db.prototype.isDataTexture=!0;var V={common:{diffuse:{value:new J(15658734)},opacity:{value:1},
map:{value:null},offsetRepeat:{value:new ga(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new D(1,1)}},displacementmap:{displacementMap:{value:null},
displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new J(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},
spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],
properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new J(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new ga(0,0,1,1)}}},bb={basic:{uniforms:Ia.merge([V.common,V.aomap,V.lightmap,V.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:Ia.merge([V.common,V.aomap,V.lightmap,V.emissivemap,V.fog,V.lights,{emissive:{value:new J(0)}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},
phong:{uniforms:Ia.merge([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.gradientmap,V.fog,V.lights,{emissive:{value:new J(0)},specular:{value:new J(1118481)},shininess:{value:30}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:Ia.merge([V.common,V.aomap,V.lightmap,V.emissivemap,V.bumpmap,V.normalmap,V.displacementmap,V.roughnessmap,V.metalnessmap,V.fog,V.lights,{emissive:{value:new J(0)},roughness:{value:.5},metalness:{value:0},
envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},points:{uniforms:Ia.merge([V.points,V.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:Ia.merge([V.common,V.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:Ia.merge([V.common,V.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:Ia.merge([V.common,
V.bumpmap,V.normalmap,V.displacementmap,{opacity:{value:1}}]),vertexShader:Z.normal_vert,fragmentShader:Z.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new q}},vertexShader:Z.distanceRGBA_vert,fragmentShader:Z.distanceRGBA_frag}};bb.physical={uniforms:Ia.merge([bb.standard.uniforms,
{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag};Object.assign(id.prototype,{set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new D;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){a=a||new D;return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=a||new D;return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);
return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return(b||new D).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-
this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return(b||new D).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new D;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var Ef=0;Object.defineProperty(X.prototype,"needsUpdate",{get:function(){return this._needsUpdate},set:function(a){!0===a&&this.update();this._needsUpdate=a}});Object.assign(X.prototype,wa.prototype,{isMaterial:!0,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+
this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]="overdraw"===b?Number(c):c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());
void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearCoat&&(d.clearCoat=this.clearCoat);void 0!==this.clearCoatRoughness&&(d.clearCoatRoughness=this.clearCoatRoughness);this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);
this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,
d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&
(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);2!==this.shading&&(d.shading=this.shading);0!==this.side&&(d.side=this.side);0!==this.vertexColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===
this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=
this.wireframeLinejoin);d.skinning=this.skinning;d.morphTargets=this.morphTargets;c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.shading=a.shading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;
this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=
a.overdraw;this.visible=a.visible;this.clipShadows=a.clipShadows;this.clipIntersection=a.clipIntersection;a=a.clippingPlanes;var b=null;if(null!==a)for(var c=a.length,b=Array(c),d=0;d!==c;++d)b[d]=a[d].clone();this.clippingPlanes=b;return this},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}});Ga.prototype=Object.create(X.prototype);Ga.prototype.constructor=Ga;Ga.prototype.isShaderMaterial=!0;Ga.prototype.copy=function(a){X.prototype.copy.call(this,
a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Ia.clone(a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this};Ga.prototype.toJSON=function(a){a=X.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;
a.fragmentShader=this.fragmentShader;return a};ab.prototype=Object.create(X.prototype);ab.prototype.constructor=ab;ab.prototype.isMeshDepthMaterial=!0;ab.prototype.copy=function(a){X.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=
a.wireframeLinewidth;return this};Object.assign(Ua.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.length;h<l;h+=3){var m=a[h],k=a[h+1],p=a[h+2];m<b&&(b=m);k<c&&(c=k);p<d&&(d=p);m>e&&(e=m);k>f&&(f=k);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=
-Infinity,g=-Infinity,h=0,l=a.count;h<l;h++){var m=a.getX(h),k=a.getY(h),p=a.getZ(h);m<b&&(b=m);k<c&&(c=k);p<d&&(d=p);m>e&&(e=m);k>f&&(f=k);p>g&&(g=p)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new q;return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(a){this.makeEmpty();
return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){a=a||new q;return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){a=
a||new q;return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(){var a=new q;return function(b){var c=this;b.updateMatrixWorld(!0);b.traverse(function(b){var e,f;e=b.geometry;if(void 0!==e)if(e.isGeometry){var g=e.vertices;e=0;for(f=g.length;e<
f;e++)a.copy(g[e]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)}else if(e.isBufferGeometry&&(g=e.attributes.position,void 0!==g))for(e=0,f=g.count;e<f;e++)a.fromBufferAttribute(g,e).applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&
this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){return(b||new q).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(){var a=new q;return function(b){this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*
b.radius}}(),intersectsPlane:function(a){var b,c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant},clampPoint:function(a,b){return(b||new q).copy(a).clamp(this.min,this.max)},
distanceToPoint:function(){var a=new q;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new q;return function(b){b=b||new Pa;this.getCenter(b.center);b.radius=.5*this.getSize(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new q,new q,new q,new q,
new q,new q,new q,new q];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,
this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});Object.assign(Pa.prototype,{set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new Ua;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).getCenter(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));
this.radius=Math.sqrt(e);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},
intersectsPlane:function(a){return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new q;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new Ua;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},
translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});Object.assign(La.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,l){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=l;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],
a[7],a[2],a[5],a[8]);return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this},applyToBufferAttribute:function(){var a=new q;return function(b){for(var c=0,d=b.count;c<d;c++)a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(c,a.x,a.y,a.z);return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,
b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],l=a[7],a=a[8];return b*f*a-b*g*l-c*e*a+c*g*h+d*e*l-d*f*h},getInverse:function(a,b){a&&a.isMatrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],l=c[4],m=c[5],k=c[6],p=c[7],c=c[8],n=c*l-m*p,u=m*k-c*h,q=p*h-l*k,r=e*n+f*u+g*q;if(0===r){if(!0===b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");
return this.identity()}r=1/r;d[0]=n*r;d[1]=(g*p-c*f)*r;d[2]=(m*f-g*l)*r;d[3]=u*r;d[4]=(c*e-g*k)*r;d[5]=(g*h-m*e)*r;d[6]=q*r;d[7]=(f*k-p*e)*r;d[8]=(l*e-f*h)*r;return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=
b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}});Object.assign(ua.prototype,{set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},
setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new q,b=new q;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this}}(),clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);
this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,b){var c=this.distanceToPoint(a);return(b||new q).copy(this.normal).multiplyScalar(c)},intersectLine:function(){var a=new q;return function(b,c){var d=c||new q,e=
b.delta(a),f=this.normal.dot(e);if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return(a||new q).copy(this.normal).multiplyScalar(-this.constant)},
applyMatrix4:function(){var a=new q,b=new La;return function(c,d){var e=this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),f=this.normal.applyMatrix3(f).normalize();this.constant=-e.dot(f);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});Object.assign(jd.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);
g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],l=c[6],m=c[7],k=c[8],p=c[9],n=c[10],u=c[11],q=c[12],r=c[13],G=c[14],c=c[15];b[0].setComponents(f-a,m-g,u-k,c-q).normalize();b[1].setComponents(f+a,m+g,u+k,c+q).normalize();b[2].setComponents(f+d,m+h,u+p,c+r).normalize();b[3].setComponents(f-
d,m-h,u-p,c-r).normalize();b[4].setComponents(f-e,m-l,u-n,c-G).normalize();b[5].setComponents(f+e,m+l,u+n,c+G).normalize();return this},intersectsObject:function(){var a=new Pa;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSprite:function(){var a=new Pa;return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),
intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new q,b=new q;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>
g&&0>f)return!1}return!0}}(),containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});Object.assign(gb.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new q).copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();
return this},recast:function(){var a=new q;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new q;c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(){var a=new q;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);
a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b)}}(),distanceSqToSegment:function(){var a=new q,b=new q,c=new q;return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),l=-this.direction.dot(b),m=c.dot(this.direction),k=-c.dot(b),p=c.lengthSq(),n=Math.abs(1-l*l),u;0<n?(d=l*k-m,e=l*m-k,u=h*n,0<=d?e>=-u?e<=u?(h=1/n,d*=h,e*=h,l=d*(d+l*e+2*m)+e*(l*d+e+2*k)+p):(e=h,d=Math.max(0,-(l*
e+m)),l=-d*d+e*(e+2*k)+p):(e=-h,d=Math.max(0,-(l*e+m)),l=-d*d+e*(e+2*k)+p):e<=-u?(d=Math.max(0,-(-l*h+m)),e=0<d?-h:Math.min(Math.max(-h,-k),h),l=-d*d+e*(e+2*k)+p):e<=u?(d=0,e=Math.min(Math.max(-h,-k),h),l=e*(e+2*k)+p):(d=Math.max(0,-(l*h+m)),e=0<d?h:Math.min(Math.max(-h,-k),h),l=-d*d+e*(e+2*k)+p)):(e=0<l?-h:h,d=Math.max(0,-(l*e+m)),l=-d*d+e*(e+2*k)+p);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return l}}(),intersectSphere:function(){var a=new q;
return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),intersectsSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,
b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;
if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectsBox:function(){var a=new q;return function(b){return null!==this.intersectBox(b,a)}}(),intersectTriangle:function(){var a=new q,b=new q,c=new q,d=new q;return function(e,f,g,h,l){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=
-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,l)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});cb.RotationOrders=
"XYZ YZX ZXY XZY YXZ ZYX".split(" ");cb.DefaultOrder="XYZ";Object.defineProperties(cb.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this.onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this.onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this.onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a;this.onChangeCallback()}}});Object.assign(cb.prototype,{isEuler:!0,set:function(a,
b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=N.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],l=e[5],m=e[9],k=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?
(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,l),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-k,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-k,e),this._z=Math.atan2(-f,l)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(k,-1,1)),.99999>Math.abs(k)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=
0,this._z=Math.atan2(-f,l))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-k,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(p,l),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},setFromQuaternion:function(){var a=
new S;return function(b,c,d){a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,c,d)}}(),setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(){var a=new na;return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();
return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new q(this._x,this._y,this._z)},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){}});Object.assign(Td.prototype,{set:function(a){this.mask=1<<a},enable:function(a){this.mask|=1<<a},toggle:function(a){this.mask^=1<<a},disable:function(a){this.mask&=~(1<<a)},test:function(a){return 0!==
(this.mask&a.mask)}});var Ff=0;A.DefaultUp=new q(0,1,0);A.DefaultMatrixAutoUpdate=!0;Object.assign(A.prototype,wa.prototype,{isObject3D:!0,applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},
rotateOnAxis:function(){var a=new na;return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new q(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new q(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new q(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new q;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);
this.position.add(a.multiplyScalar(c));return this}}(),translateX:function(){var a=new q(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new q(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new q(0,0,1);return function(b){return this.translateOnAxis(a,b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new S;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),
lookAt:function(){var a=new S;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",
a);return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1))},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,
b);if(void 0!==e)return e}},getWorldPosition:function(a){a=a||new q;this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(){var a=new q,b=new q;return function(c){c=c||new na;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c}}(),getWorldRotation:function(){var a=new na;return function(b){b=b||new cb;this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1)}}(),getWorldScale:function(){var a=new q,b=new na;
return function(c){c=c||new q;this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c}}(),getWorldDirection:function(){var a=new na;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a)}}(),raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},traverseAncestors:function(a){var b=
this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},
toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||""===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var e={};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);"{}"!==JSON.stringify(this.userData)&&(e.userData=this.userData);!0===this.castShadow&&(e.castShadow=!0);!0===this.receiveShadow&&(e.receiveShadow=!0);!1===this.visible&&
(e.visible=!1);e.matrix=this.matrix.toArray();void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid);void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid);if(0<this.children.length){e.children=[];for(var f=0;f<this.children.length;f++)e.children.push(this.children[f].toJSON(a).object)}if(c){var c=
b(a.geometries),f=b(a.materials),g=b(a.textures);a=b(a.images);0<c.length&&(d.geometries=c);0<f.length&&(d.materials=f);0<g.length&&(d.textures=g);0<a.length&&(d.images=a)}d.object=e;return d},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=
a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++)this.add(a.children[c].clone());return this}});Object.assign(Gb.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){return(a||new q).addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return(a||new q).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){var c=b||new q;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new q,
b=new q;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=N.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new q;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});Object.assign(Va,{normal:function(){var a=
new q;return function(b,c,d,e){e=e||new q;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}(),barycoordFromPoint:function(){var a=new q,b=new q,c=new q;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var l=b.dot(b);g=b.dot(c);var m=d*l-e*e;h=h||new q;if(0===m)return h.set(-2,-1,-1);m=1/m;l=(l*f-e*g)*m;d=(d*g-e*f)*m;return h.set(1-l-d,d,l)}}(),containsPoint:function(){var a=
new q;return function(b,c,d,e){b=Va.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}()});Object.assign(Va.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new q,b=new q;return function(){a.subVectors(this.c,
this.b);b.subVectors(this.a,this.b);return.5*a.cross(b).length()}}(),midpoint:function(a){return(a||new q).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return Va.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new ua).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return Va.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return Va.containsPoint(a,this.a,this.b,this.c)},closestPointToPoint:function(){var a=
new ua,b=[new Gb,new Gb,new Gb],c=new q,d=new q;return function(e,f){var g=f||new q,h=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b);b[1].set(this.b,this.c);b[2].set(this.c,this.a);for(var l=0;l<b.length;l++){b[l].closestPointToPoint(c,!0,d);var m=c.distanceToSquared(d);m<h&&(h=m,g.copy(d))}}return g}}(),equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});Object.assign(qa.prototype,
{clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});Ja.prototype=Object.create(X.prototype);Ja.prototype.constructor=Ja;Ja.prototype.isMeshBasicMaterial=!0;Ja.prototype.copy=
function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=
a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};Object.defineProperty(U.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(U.prototype,{isBufferAttribute:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.itemSize:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);
this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.dynamic=a.dynamic;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new J);b[c++]=f.r;b[c++]=f.g;
b[c++]=f.b}return this},copyIndicesArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new D);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
d),f=new q);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new ga);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*
this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=
d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)}});sc.prototype=Object.create(U.prototype);sc.prototype.constructor=sc;tc.prototype=Object.create(U.prototype);tc.prototype.constructor=tc;uc.prototype=Object.create(U.prototype);uc.prototype.constructor=uc;vc.prototype=
Object.create(U.prototype);vc.prototype.constructor=vc;hb.prototype=Object.create(U.prototype);hb.prototype.constructor=hb;wc.prototype=Object.create(U.prototype);wc.prototype.constructor=wc;ib.prototype=Object.create(U.prototype);ib.prototype.constructor=ib;z.prototype=Object.create(U.prototype);z.prototype.constructor=z;xc.prototype=Object.create(U.prototype);xc.prototype.constructor=xc;Object.assign(Ie.prototype,{computeGroups:function(a){var b,c=[],d=void 0;a=a.faces;for(var e=0;e<a.length;e++){var f=
a[e];f.materialIndex!==d&&(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d})}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,l;if(0<h){l=[];for(var m=0;m<h;m++)l[m]=[];this.morphTargets.position=l}var k=a.morphNormals,p=k.length,n;if(0<p){n=[];for(m=0;m<p;m++)n[m]=[];this.morphTargets.normal=n}for(var u=
a.skinIndices,q=a.skinWeights,r=u.length===c.length,G=q.length===c.length,m=0;m<b.length;m++){var w=b[m];this.vertices.push(c[w.a],c[w.b],c[w.c]);var y=w.vertexNormals;3===y.length?this.normals.push(y[0],y[1],y[2]):(y=w.normal,this.normals.push(y,y,y));y=w.vertexColors;3===y.length?this.colors.push(y[0],y[1],y[2]):(y=w.color,this.colors.push(y,y,y));!0===e&&(y=d[0][m],void 0!==y?this.uvs.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new D,
new D,new D)));!0===f&&(y=d[1][m],void 0!==y?this.uvs2.push(y[0],y[1],y[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",m),this.uvs2.push(new D,new D,new D)));for(y=0;y<h;y++){var K=g[y].vertices;l[y].push(K[w.a],K[w.b],K[w.c])}for(y=0;y<p;y++)K=k[y].vertexNormals[m],n[y].push(K.a,K.b,K.c);r&&this.skinIndices.push(u[w.a],u[w.b],u[w.c]);G&&this.skinWeights.push(q[w.a],q[w.b],q[w.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=
a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this}});var Vd=0;Object.assign(T.prototype,wa.prototype,{isGeometry:!0,applyMatrix:function(a){for(var b=(new La).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==
this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},rotateX:function(){var a=new S;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=new S;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new S;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=
new S;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new S;return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new A;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),fromBufferGeometry:function(a){function b(a,b,d,e){var f=void 0!==g?[k[a].clone(),k[b].clone(),k[d].clone()]:[],u=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new qa(a,
b,d,f,u,e);c.faces.push(e);void 0!==l&&c.faceVertexUvs[0].push([p[a].clone(),p[b].clone(),p[d].clone()]);void 0!==m&&c.faceVertexUvs[1].push([n[a].clone(),n[b].clone(),n[d].clone()])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,l=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(var k=[],p=[],n=[],u=e=0;e<f.length;e+=3,
u+=2)c.vertices.push(new q(f[e],f[e+1],f[e+2])),void 0!==g&&k.push(new q(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new J(h[e],h[e+1],h[e+2])),void 0!==l&&p.push(new D(l[u],l[u+1])),void 0!==m&&n.push(new D(m[u],m[u+1]));if(void 0!==d)if(f=a.groups,0<f.length)for(e=0;e<f.length;e++)for(var x=f[e],r=x.start,G=x.count,u=r,r=r+G;u<r;u+=3)b(d[u],d[u+1],d[u+2],x.materialIndex);else for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==
a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new S;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this},computeFaceNormals:function(){for(var a=
new q,b=new q,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===a&&(a=!0);var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new q;if(a){var e,f,g,h=new q,l=new q;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,
f),l.subVectors(e,f),h.cross(l),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(this.computeFaceNormals(),a=0,b=this.faces.length;a<b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=c.vertexNormals,3===e.length?(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=
!0)},computeFlatVertexNormals:function(){var a,b,c;this.computeFaceNormals();a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):
e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new T;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;
var g=this.morphNormals[a].vertexNormals,h,l;c=0;for(d=this.faces.length;c<d;c++)h=new q,l={a:new q,b:new q,c:new q},e.push(h),g.push(l)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],l=g.vertexNormals[c],h.copy(e.normal),l.a.copy(e.vertexNormals[0]),l.b.copy(e.vertexNormals[1]),l.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=
e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Ua);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new Pa);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!1===
(a&&a.isGeometry))console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,l=a.faces,m=this.faceVertexUvs[0],k=a.faceVertexUvs[0],p=this.colors,n=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new La).getNormalMatrix(b));a=0;for(var u=g.length;a<u;a++){var q=g[a].clone();void 0!==b&&q.applyMatrix4(b);f.push(q)}a=0;for(u=n.length;a<u;a++)p.push(n[a].clone());a=0;for(u=l.length;a<u;a++){var g=l[a],
r=g.vertexNormals,n=g.vertexColors,p=new qa(g.a+e,g.b+e,g.c+e);p.normal.copy(g.normal);void 0!==d&&p.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++)q=r[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),p.vertexNormals.push(q);p.color.copy(g.color);b=0;for(f=n.length;b<f;b++)q=n[b],p.vertexColors.push(q.clone());p.materialIndex=g.materialIndex+c;h.push(p)}a=0;for(u=k.length;a<u;a++)if(c=k[a],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(c[b].clone());m.push(d)}}},mergeMesh:function(a){!1===
(a&&a.isMesh)?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix))},mergeVertices:function(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],
e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]===e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,1);f=this.vertices.length-b.length;this.vertices=b;return f},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===
b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=l.length/3;l.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=k.length;k.push(a.getHex());return p[b]}function d(a){var b=
a.x.toString()+a.y.toString();if(void 0!==u[b])return u[b];u[b]=n.length/2;n.push(a.x,a.y);return u[b]}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}var h=[],l=[],m={},k=[],p={},n=[],u={};for(g=0;g<this.faces.length;g++){var q=
this.faces[g],r=void 0!==this.faceVertexUvs[0][g],G=0<q.normal.length(),w=0<q.vertexNormals.length,y=1!==q.color.r||1!==q.color.g||1!==q.color.b,K=0<q.vertexColors.length,v=0,v=a(v,0,0),v=a(v,1,!0),v=a(v,2,!1),v=a(v,3,r),v=a(v,4,G),v=a(v,5,w),v=a(v,6,y),v=a(v,7,K);h.push(v);h.push(q.a,q.b,q.c);h.push(q.materialIndex);r&&(r=this.faceVertexUvs[0][g],h.push(d(r[0]),d(r[1]),d(r[2])));G&&h.push(b(q.normal));w&&(G=q.vertexNormals,h.push(b(G[0]),b(G[1]),b(G[2])));y&&h.push(c(q.color));K&&(q=q.vertexColors,
h.push(c(q[0]),c(q[1]),c(q[2])))}e.data={};e.data.vertices=f;e.data.normals=l;0<k.length&&(e.data.colors=k);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e},clone:function(){return(new T).copy(this)},copy:function(a){var b,c,d,e,f,g;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;d=a.vertices;b=0;for(c=d.length;b<
c;b++)this.vertices.push(d[b].clone());d=a.colors;b=0;for(c=d.length;b<c;b++)this.colors.push(d[b].clone());d=a.faces;b=0;for(c=d.length;b<c;b++)this.faces.push(d[b].clone());b=0;for(c=a.faceVertexUvs.length;b<c;b++){var h=a.faceVertexUvs[b];void 0===this.faceVertexUvs[b]&&(this.faceVertexUvs[b]=[]);d=0;for(e=h.length;d<e;d++){var l=h[d],m=[];f=0;for(g=l.length;f<g;f++)m.push(l[f].clone());this.faceVertexUvs[b].push(m)}}f=a.morphTargets;b=0;for(c=f.length;b<c;b++){g={};g.name=f[b].name;if(void 0!==
f[b].vertices)for(g.vertices=[],d=0,e=f[b].vertices.length;d<e;d++)g.vertices.push(f[b].vertices[d].clone());if(void 0!==f[b].normals)for(g.normals=[],d=0,e=f[b].normals.length;d<e;d++)g.normals.push(f[b].normals[d].clone());this.morphTargets.push(g)}f=a.morphNormals;b=0;for(c=f.length;b<c;b++){g={};if(void 0!==f[b].vertexNormals)for(g.vertexNormals=[],d=0,e=f[b].vertexNormals.length;d<e;d++)h=f[b].vertexNormals[d],l={},l.a=h.a.clone(),l.b=h.b.clone(),l.c=h.c.clone(),g.vertexNormals.push(l);if(void 0!==
f[b].faceNormals)for(g.faceNormals=[],d=0,e=f[b].faceNormals.length;d<e;d++)g.faceNormals.push(f[b].faceNormals[d].clone());this.morphNormals.push(g)}d=a.skinWeights;b=0;for(c=d.length;b<c;b++)this.skinWeights.push(d[b].clone());d=a.skinIndices;b=0;for(c=d.length;b<c;b++)this.skinIndices.push(d[b].clone());d=a.lineDistances;b=0;for(c=d.length;b<c;b++)this.lineDistances.push(d[b]);b=a.boundingBox;null!==b&&(this.boundingBox=b.clone());b=a.boundingSphere;null!==b&&(this.boundingSphere=b.clone());this.elementsNeedUpdate=
a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});I.MaxIndex=65535;Object.assign(I.prototype,wa.prototype,{isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?
this.index=new (65535<Ud(a)?ib:hb)(a,1):this.index=a},addAttribute:function(a,b,c){if(!1===(b&&b.isBufferAttribute)&&!1===(b&&b.isInterleavedBufferAttribute))console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new U(b,c));else if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b);else return this.attributes[a]=b,this},getAttribute:function(a){return this.attributes[a]},removeAttribute:function(a){delete this.attributes[a];
return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToBufferAttribute(b),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new La).getNormalMatrix(a).applyToBufferAttribute(b),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&
this.computeBoundingSphere();return this},rotateX:function(){var a=new S;return function(b){a.makeRotationX(b);this.applyMatrix(a);return this}}(),rotateY:function(){var a=new S;return function(b){a.makeRotationY(b);this.applyMatrix(a);return this}}(),rotateZ:function(){var a=new S;return function(b){a.makeRotationZ(b);this.applyMatrix(a);return this}}(),translate:function(){var a=new S;return function(b,c,d){a.makeTranslation(b,c,d);this.applyMatrix(a);return this}}(),scale:function(){var a=new S;
return function(b,c,d){a.makeScale(b,c,d);this.applyMatrix(a);return this}}(),lookAt:function(){var a=new A;return function(b){a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix)}}(),center:function(){this.computeBoundingBox();var a=this.boundingBox.getCenter().negate();this.translate(a.x,a.y,a.z);return a},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new z(3*b.vertices.length,3);var c=new z(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));
this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new z(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===
b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),
c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&
(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new Ie).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",(new U(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),
this.addAttribute("normal",(new U(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",(new U(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",(new U(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",(new U(b,2)).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new (65535<Ud(a.indices)?Uint32Array:Uint16Array)(3*
a.indices.length),this.setIndex((new U(b,1)).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new z(3*g.length,3);b.push(h.copyVector3sArray(g))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new z(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new z(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));
null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Ua);var a=this.attributes.position;void 0!==a?this.boundingBox.setFromBufferAttribute(a):this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
this)},computeBoundingSphere:function(){var a=new Ua,b=new q;return function(){null===this.boundingSphere&&(this.boundingSphere=new Pa);var c=this.attributes.position;if(c){var d=this.boundingSphere.center;a.setFromBufferAttribute(c);a.getCenter(d);for(var e=0,f=0,g=c.count;f<g;f++)b.x=c.getX(f),b.y=c.getY(f),b.z=c.getZ(f),e=Math.max(e,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
this)}}}(),computeFaceNormals:function(){},computeVertexNormals:function(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new U(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++)e[f]=0;var e=b.normal.array,h,l,m,k=new q,p=new q,n=new q,u=new q,x=new q;if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var r=0,G=c.length;r<G;++r)for(f=c[r],g=f.start,h=f.count,f=g,g+=h;f<
g;f+=3)h=3*a[f+0],l=3*a[f+1],m=3*a[f+2],k.fromArray(d,h),p.fromArray(d,l),n.fromArray(d,m),u.subVectors(n,p),x.subVectors(k,p),u.cross(x),e[h]+=u.x,e[h+1]+=u.y,e[h+2]+=u.z,e[l]+=u.x,e[l+1]+=u.y,e[l+2]+=u.z,e[m]+=u.x,e[m+1]+=u.y,e[m+2]+=u.z}else for(f=0,g=d.length;f<g;f+=9)k.fromArray(d,f),p.fromArray(d,f+3),n.fromArray(d,f+6),u.subVectors(n,p),x.subVectors(k,p),u.cross(x),e[f]=u.x,e[f+1]=u.y,e[f+2]=u.z,e[f+3]=u.x,e[f+4]=u.y,e[f+5]=u.z,e[f+6]=u.x,e[f+7]=u.y,e[f+8]=u.z;this.normalizeNormals();b.normal.needsUpdate=
!0}},merge:function(a,b){if(!1===(a&&a.isBufferGeometry))console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++)e[f]=g[h];return this}},normalizeNormals:function(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),
a[e]*=b,a[e+1]*=b,a[e+2]*=b},toNonIndexed:function(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var a=new I,b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*e),h,l=0,m=0,k=b.length;m<k;m++){h=b[m]*e;for(var p=0;p<e;p++)g[l++]=f[h++]}a.addAttribute(d,new U(g,e))}return a},toJSON:function(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};
a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b)void 0!==b[c]&&(a[c]=b[c]);return a}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized}}c=this.groups;
0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),radius:c.radius});return a},clone:function(){return(new I).copy(this)},copy:function(a){var b,c,d;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(b in c)this.addAttribute(b,c[b].clone());var e=a.morphAttributes;for(b in e){var f=
[],g=e[b];c=0;for(d=g.length;c<d;c++)f.push(g[c].clone());this.morphAttributes[b]=f}b=a.groups;c=0;for(d=b.length;c<d;c++)e=b[c],this.addGroup(e.start,e.count,e.materialIndex);b=a.boundingBox;null!==b&&(this.boundingBox=b.clone());b=a.boundingSphere;null!==b&&(this.boundingSphere=b.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});xa.prototype=Object.assign(Object.create(A.prototype),{constructor:xa,
isMesh:!0,setDrawMode:function(a){this.drawMode=a},copy:function(a){A.prototype.copy.call(this,a);this.drawMode=a.drawMode;return this},updateMorphTargets:function(){var a=this.geometry.morphTargets;if(void 0!==a&&0<a.length){this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var b=0,c=a.length;b<c;b++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[a[b].name]=b}},raycast:function(){function a(a,b,c,d,e,f,g){Va.barycoordFromPoint(a,b,c,d,r);e.multiplyScalar(r.x);f.multiplyScalar(r.y);
g.multiplyScalar(r.z);e.add(f).add(g);return e.clone()}function b(a,b,c,d,e,f,g){var h=a.material;if(null===(1===h.side?c.intersectTriangle(f,e,d,!0,g):c.intersectTriangle(d,e,f,2!==h.side,g)))return null;w.copy(g);w.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(w);return c<b.near||c>b.far?null:{distance:c,point:w.clone(),object:a}}function c(c,d,e,f,m,k,p,t){g.fromBufferAttribute(f,k);h.fromBufferAttribute(f,p);l.fromBufferAttribute(f,t);if(c=b(c,d,e,g,h,l,G))m&&(n.fromBufferAttribute(m,
k),u.fromBufferAttribute(m,p),x.fromBufferAttribute(m,t),c.uv=a(G,g,h,l,n,u,x)),c.face=new qa(k,p,t,Va.normal(g,h,l)),c.faceIndex=k;return c}var d=new S,e=new gb,f=new Pa,g=new q,h=new q,l=new q,m=new q,k=new q,p=new q,n=new D,u=new D,x=new D,r=new q,G=new q,w=new q;return function(q,r){var v=this.geometry,w=this.material,L=this.matrixWorld;if(void 0!==w&&(null===v.boundingSphere&&v.computeBoundingSphere(),f.copy(v.boundingSphere),f.applyMatrix4(L),!1!==q.ray.intersectsSphere(f)&&(d.getInverse(L),
e.copy(q.ray).applyMatrix4(d),null===v.boundingBox||!1!==e.intersectsBox(v.boundingBox)))){var C;if(v.isBufferGeometry){var F,A,w=v.index,H=v.attributes.position,L=v.attributes.uv,D,z;if(null!==w)for(D=0,z=w.count;D<z;D+=3){if(v=w.getX(D),F=w.getX(D+1),A=w.getX(D+2),C=c(this,q,e,H,L,v,F,A))C.faceIndex=Math.floor(D/3),r.push(C)}else for(D=0,z=H.count;D<z;D+=3)if(v=D,F=D+1,A=D+2,C=c(this,q,e,H,L,v,F,A))C.index=v,r.push(C)}else if(v.isGeometry){var J,I,L=w&&w.isMultiMaterial;D=!0===L?w.materials:null;
z=v.vertices;F=v.faces;A=v.faceVertexUvs[0];0<A.length&&(H=A);for(var Q=0,M=F.length;Q<M;Q++){var O=F[Q];C=!0===L?D[O.materialIndex]:w;if(void 0!==C){A=z[O.a];J=z[O.b];I=z[O.c];if(!0===C.morphTargets){C=v.morphTargets;var P=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);l.set(0,0,0);for(var ja=0,W=C.length;ja<W;ja++){var S=P[ja];if(0!==S){var R=C[ja].vertices;g.addScaledVector(m.subVectors(R[O.a],A),S);h.addScaledVector(k.subVectors(R[O.b],J),S);l.addScaledVector(p.subVectors(R[O.c],I),S)}}g.add(A);
h.add(J);l.add(I);A=g;J=h;I=l}if(C=b(this,q,e,A,J,I,G))H&&(P=H[Q],n.copy(P[0]),u.copy(P[1]),x.copy(P[2]),C.uv=a(G,A,J,I,n,u,x)),C.face=O,C.faceIndex=Q,r.push(C)}}}}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});Hb.prototype=Object.create(T.prototype);Hb.prototype.constructor=Hb;jb.prototype=Object.create(I.prototype);jb.prototype.constructor=jb;yc.prototype=Object.create(T.prototype);yc.prototype.constructor=yc;kb.prototype=Object.create(I.prototype);
kb.prototype.constructor=kb;oa.prototype=Object.create(A.prototype);oa.prototype.constructor=oa;oa.prototype.isCamera=!0;oa.prototype.getWorldDirection=function(){var a=new na;return function(b){b=b||new q;this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a)}}();oa.prototype.lookAt=function(){var a=new S;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();oa.prototype.clone=function(){return(new this.constructor).copy(this)};oa.prototype.copy=
function(a){A.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this};Ea.prototype=Object.assign(Object.create(oa.prototype),{constructor:Ea,isPerspectiveCamera:!0,copy:function(a){oa.prototype.copy.call(this,a);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;
return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*N.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*N.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*N.RAD2DEG*Math.atan(Math.tan(.5*N.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,
d,e,f){this.aspect=a/b;this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*N.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f)var g=f.fullWidth,h=f.fullHeight,e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());
this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far)},toJSON:function(a){a=A.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Ib.prototype=Object.assign(Object.create(oa.prototype),{constructor:Ib,isOrthographicCamera:!0,
copy:function(a){oa.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix()},clearViewOffset:function(){this.view=null;this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-
this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view)var c=this.zoom/(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/c*f,a=a-this.view.offsetY/b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,
this.far)},toJSON:function(a){a=A.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});var Pf=0;Jb.prototype.isFogExp2=!0;Jb.prototype.clone=function(){return new Jb(this.color.getHex(),this.density)};Jb.prototype.toJSON=function(a){return{type:"FogExp2",color:this.color.getHex(),
density:this.density}};Kb.prototype.isFog=!0;Kb.prototype.clone=function(){return new Kb(this.color.getHex(),this.near,this.far)};Kb.prototype.toJSON=function(a){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}};ld.prototype=Object.assign(Object.create(A.prototype),{constructor:ld,copy:function(a,b){A.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=
a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=A.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());return b}});Zd.prototype=Object.assign(Object.create(A.prototype),{constructor:Zd,isLensFlare:!0,copy:function(a){A.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=
a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++)this.lensFlares.push(a.lensFlares[b]);return this},add:function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new J(16777215));void 0===d&&(d=1);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d})},updateLensFlares:function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;
for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation)}});lb.prototype=Object.create(X.prototype);lb.prototype.constructor=lb;lb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this};Bc.prototype=Object.assign(Object.create(A.prototype),{constructor:Bc,isSprite:!0,raycast:function(){var a=
new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y/4||c.push({distance:Math.sqrt(d),point:this.position,face:null,object:this})}}(),clone:function(){return(new this.constructor(this.material)).copy(this)}});Cc.prototype=Object.assign(Object.create(A.prototype),{constructor:Cc,copy:function(a){A.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance)}return this},
addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a)},getObjectForDistance:function(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object},raycast:function(){var a=new q;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}(),update:function(){var a=new q,b=new q;return function(c){var d=
this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++)if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;for(;e<f;e++)d[e].object.visible=!1}}}(),toJSON:function(a){a=A.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});
Object.assign(md.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new S;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}},pose:function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),
a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){var a=new S;return function(){for(var b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.toArray(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)}}(),clone:function(){return new md(this.bones,this.boneInverses,this.useVertexTexture)}});nd.prototype=Object.assign(Object.create(A.prototype),{constructor:nd,isBone:!0});
od.prototype=Object.assign(Object.create(xa.prototype),{constructor:od,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){if(this.geometry&&this.geometry.isGeometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();
Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0)}else if(this.geometry&&this.geometry.isBufferGeometry)for(var b=new ga,d=this.geometry.attributes.skinWeight,a=0;a<d.count;a++)b.x=d.getX(a),b.y=d.getY(a),b.z=d.getZ(a),b.w=d.getW(a),c=1/b.lengthManhattan(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w)},updateMatrixWorld:function(a){xa.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?
this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture)).copy(this)}});ka.prototype=Object.create(X.prototype);ka.prototype.constructor=ka;ka.prototype.isLineBasicMaterial=!0;ka.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;
return this};Na.prototype=Object.assign(Object.create(A.prototype),{constructor:Na,isLine:!0,raycast:function(){var a=new S,b=new gb,c=new Pa;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var l=new q,m=new q,h=new q,k=new q,p=this&&this.isLineSegments?2:1;if(g.isBufferGeometry){var n=g.index,
u=g.attributes.position.array;if(null!==n)for(var n=n.array,g=0,x=n.length-1;g<x;g+=p){var r=n[g+1];l.fromArray(u,3*n[g]);m.fromArray(u,3*r);r=b.distanceSqToSegment(l,m,k,h);r>f||(k.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(k),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else for(g=0,x=u.length/3-1;g<x;g+=p)l.fromArray(u,3*g),m.fromArray(u,3*g+3),r=b.distanceSqToSegment(l,m,k,h),r>f||(k.applyMatrix4(this.matrixWorld),
r=d.ray.origin.distanceTo(k),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}else if(g.isGeometry)for(l=g.vertices,m=l.length,g=0;g<m-1;g+=p)r=b.distanceSqToSegment(l[g],l[g+1],k,h),r>f||(k.applyMatrix4(this.matrixWorld),r=d.ray.origin.distanceTo(k),r<d.near||r>d.far||e.push({distance:r,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}))}}}(),clone:function(){return(new this.constructor(this.geometry,
this.material)).copy(this)}});fa.prototype=Object.assign(Object.create(Na.prototype),{constructor:fa,isLineSegments:!0});pd.prototype=Object.assign(Object.create(Na.prototype),{constructor:pd,isLineLoop:!0});Ha.prototype=Object.create(X.prototype);Ha.prototype.constructor=Ha;Ha.prototype.isPointsMaterial=!0;Ha.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this};Lb.prototype=Object.assign(Object.create(A.prototype),
{constructor:Lb,isPoints:!0,raycast:function(){var a=new S,b=new gb,c=new Pa;return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<k){var h=b.closestPointToPoint(a);h.applyMatrix4(l);var m=d.ray.origin.distanceTo(h);m<d.near||m>d.far||e.push({distance:m,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g})}}var g=this,h=this.geometry,l=this.matrixWorld,m=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(l);
if(!1!==d.ray.intersectsSphere(c)){a.getInverse(l);b.copy(d.ray).applyMatrix4(a);var m=m/((this.scale.x+this.scale.y+this.scale.z)/3),k=m*m,m=new q;if(h.isBufferGeometry){var p=h.index,h=h.attributes.position.array;if(null!==p)for(var n=p.array,p=0,u=n.length;p<u;p++){var x=n[p];m.fromArray(h,3*x);f(m,x)}else for(p=0,n=h.length/3;p<n;p++)m.fromArray(h,3*p),f(m,p)}else for(m=h.vertices,p=0,n=m.length;p<n;p++)f(m[p],p)}}}(),clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});
Dc.prototype=Object.assign(Object.create(A.prototype),{constructor:Dc});qd.prototype=Object.create(ea.prototype);qd.prototype.constructor=qd;Mb.prototype=Object.create(ea.prototype);Mb.prototype.constructor=Mb;Mb.prototype.isCompressedTexture=!0;rd.prototype=Object.create(ea.prototype);rd.prototype.constructor=rd;Ec.prototype=Object.create(ea.prototype);Ec.prototype.constructor=Ec;Ec.prototype.isDepthTexture=!0;Nb.prototype=Object.create(I.prototype);Nb.prototype.constructor=Nb;Fc.prototype=Object.create(T.prototype);
Fc.prototype.constructor=Fc;Ob.prototype=Object.create(I.prototype);Ob.prototype.constructor=Ob;Gc.prototype=Object.create(T.prototype);Gc.prototype.constructor=Gc;va.prototype=Object.create(I.prototype);va.prototype.constructor=va;Hc.prototype=Object.create(T.prototype);Hc.prototype.constructor=Hc;Pb.prototype=Object.create(va.prototype);Pb.prototype.constructor=Pb;Ic.prototype=Object.create(T.prototype);Ic.prototype.constructor=Ic;mb.prototype=Object.create(va.prototype);mb.prototype.constructor=
mb;Jc.prototype=Object.create(T.prototype);Jc.prototype.constructor=Jc;Qb.prototype=Object.create(va.prototype);Qb.prototype.constructor=Qb;Kc.prototype=Object.create(T.prototype);Kc.prototype.constructor=Kc;Rb.prototype=Object.create(va.prototype);Rb.prototype.constructor=Rb;Lc.prototype=Object.create(T.prototype);Lc.prototype.constructor=Lc;Sb.prototype=Object.create(I.prototype);Sb.prototype.constructor=Sb;Mc.prototype=Object.create(T.prototype);Mc.prototype.constructor=Mc;Tb.prototype=Object.create(I.prototype);
Tb.prototype.constructor=Tb;Nc.prototype=Object.create(T.prototype);Nc.prototype.constructor=Nc;Ub.prototype=Object.create(I.prototype);Ub.prototype.constructor=Ub;var za={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,l;if(0<za.area(a))for(h=0;h<c;h++)e[h]=h;else for(h=0;h<c;h++)e[h]=c-1-h;var m=2*c;for(h=c-1;2<c;){if(0>=m--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
break}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);l=h+1;c<=l&&(l=0);var k;a:{var p,n,q,x,r,G,w,y;p=a[e[g]].x;n=a[e[g]].y;q=a[e[h]].x;x=a[e[h]].y;r=a[e[l]].x;G=a[e[l]].y;if(0>=(q-p)*(G-n)-(x-n)*(r-p))k=!1;else{var K,v,E,A,C,F,D,H,z,J;K=r-q;v=G-x;E=p-r;A=n-G;C=q-p;F=x-n;for(k=0;k<c;k++)if(w=a[e[k]].x,y=a[e[k]].y,!(w===p&&y===n||w===q&&y===x||w===r&&y===G)&&(D=w-p,H=y-n,z=w-q,J=y-x,w-=r,y-=G,z=K*J-v*z,D=C*H-F*D,H=E*y-A*w,z>=-Number.EPSILON&&H>=-Number.EPSILON&&D>=-Number.EPSILON)){k=!1;break a}k=!0}}if(k){d.push([a[e[g]],
a[e[h]],a[e[l]]]);f.push([e[g],e[h],e[l]]);g=h;for(l=h+1;l<c;g++,l++)e[g]=e[l];c--;m=2*c}}return b?f:d}}(),triangulateShape:function(a,b){function c(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function d(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function e(a,b,c,e,f){var g=b.x-a.x,h=b.y-a.y,l=e.x-c.x,m=e.y-c.y,k=a.x-c.x,n=a.y-c.y,p=h*l-g*m,t=h*k-g*n;if(Math.abs(p)>Number.EPSILON){if(0<p){if(0>t||t>p)return[];l=m*k-l*
n;if(0>l||l>p)return[]}else{if(0<t||t<p)return[];l=m*k-l*n;if(0<l||l<p)return[]}if(0===l)return!f||0!==t&&t!==p?[a]:[];if(l===p)return!f||0!==t&&t!==p?[b]:[];if(0===t)return[c];if(t===p)return[e];f=l/p;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!==t||m*k!==l*n)return[];h=0===g&&0===h;l=0===l&&0===m;if(h&&l)return a.x!==c.x||a.y!==c.y?[]:[a];if(h)return d(c,e,a)?[a]:[];if(l)return d(a,b,c)?[c]:[];0!==g?(a.x<b.x?(g=a,l=a.x,h=b,a=b.x):(g=b,l=b.x,h=a,a=a.x),c.x<e.x?(b=c,p=c.x,m=e,c=e.x):(b=e,p=e.x,m=c,c=c.x)):
(a.y<b.y?(g=a,l=a.y,h=b,a=b.y):(g=b,l=b.y,h=a,a=a.y),c.y<e.y?(b=c,p=c.y,m=e,c=e.y):(b=e,p=e.y,m=c,c=c.y));return l<=p?a<p?[]:a===p?f?[]:[b]:a<=c?[b,h]:[b,m]:l>c?[]:l===c?f?[]:[g]:a<=c?[g,h]:[g,m]}function f(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}c(a);b.forEach(c);var g,h,l,m,k,p={};l=a.concat();g=0;for(h=b.length;g<h;g++)Array.prototype.push.apply(l,b[g]);g=0;for(h=
l.length;g<h;g++)k=l[g].x+":"+l[g].y,void 0!==p[k]&&console.warn("THREE.ShapeUtils: Duplicate point",k,g),p[k]=g;g=function(a,b){function c(a,b){var d=h.length-1,e=a-1;0>e&&(e=d);var g=a+1;g>d&&(g=0);d=f(h[a],h[e],h[g],l[b]);if(!d)return!1;d=l.length-1;e=b-1;0>e&&(e=d);g=b+1;g>d&&(g=0);return(d=f(l[b],l[e],l[g],h[a]))?!0:!1}function d(a,b){var c,f;for(c=0;c<h.length;c++)if(f=c+1,f%=h.length,f=e(a,b,h[c],h[f],!0),0<f.length)return!0;return!1}function g(a,c){var d,f,h,l;for(d=0;d<m.length;d++)for(f=
b[m[d]],h=0;h<f.length;h++)if(l=h+1,l%=f.length,l=e(a,c,f[h],f[l],!0),0<l.length)return!0;return!1}var h=a.concat(),l,m=[],k,n,p,t,q,A=[],D,z,J,I=0;for(k=b.length;I<k;I++)m.push(I);D=0;for(var Q=2*m.length;0<m.length;){Q--;if(0>Q){console.log("Infinite Loop! Holes left:"+m.length+", Probably Hole outside Shape!");break}for(n=D;n<h.length;n++){p=h[n];k=-1;for(I=0;I<m.length;I++)if(t=m[I],q=p.x+":"+p.y+":"+t,void 0===A[q]){l=b[t];for(z=0;z<l.length;z++)if(t=l[z],c(n,z)&&!d(p,t)&&!g(p,t)){k=z;m.splice(I,
1);D=h.slice(0,n+1);t=h.slice(n);z=l.slice(k);J=l.slice(0,k+1);h=D.concat(z).concat(J).concat(t);D=n;break}if(0<=k)break;A[q]=!0}if(0<=k)break}}return h}(a,b);var n=za.triangulate(g,!1);g=0;for(h=n.length;g<h;g++)for(m=n[g],l=0;3>l;l++)k=m[l].x+":"+m[l].y,k=p[k],void 0!==k&&(m[l]=k);return n.concat()},isClockWise:function(a){return 0>za.area(a)}};ya.prototype=Object.create(T.prototype);ya.prototype.constructor=ya;ya.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],
b)};ya.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d,e,f;e=a.x-b.x;f=a.y-b.y;d=c.x-a.x;var g=c.y-a.y,h=e*e+f*f;if(Math.abs(e*g-f*d)>Number.EPSILON){var l=Math.sqrt(h),m=Math.sqrt(d*d+g*g),h=b.x-f/l;b=b.y+e/l;g=((c.x-g/m-h)*g-(c.y+d/m-b)*d)/(e*g-f*d);d=h+e*g-a.x;e=b+f*g-a.y;f=d*d+e*e;if(2>=f)return new D(d,e);f=Math.sqrt(f/2)}else a=!1,e>Number.EPSILON?d>Number.EPSILON&&
(a=!0):e<-Number.EPSILON?d<-Number.EPSILON&&(a=!0):Math.sign(f)===Math.sign(g)&&(a=!0),a?(d=-f,f=Math.sqrt(h)):(d=e,e=f,f=Math.sqrt(h/2));return new D(d/f,e/f)}function e(a,b){var c,d;for(R=a.length;0<=--R;){c=R;d=R-1;0>d&&(d=a.length-1);var e,f=u+2*k;for(e=0;e<f;e++){var g=U*e,h=U*(e+1),l=b+c+g,g=b+d+g,m=b+d+h,h=b+c+h,l=l+H,g=g+H,m=m+H,h=h+H;J.faces.push(new qa(l,g,h,null,null,1));J.faces.push(new qa(g,m,h,null,null,1));l=w.generateSideWallUV(J,l,g,m,h);J.faceVertexUvs[0].push([l[0],l[1],l[3]]);
J.faceVertexUvs[0].push([l[1],l[2],l[3]])}}}function f(a,b,c){J.vertices.push(new q(a,b,c))}function g(a,b,c){a+=H;b+=H;c+=H;J.faces.push(new qa(a,b,c,null,null,0));a=w.generateTopUV(J,a,b,c);J.faceVertexUvs[0].push(a)}var h=void 0!==b.amount?b.amount:100,l=void 0!==b.bevelThickness?b.bevelThickness:6,m=void 0!==b.bevelSize?b.bevelSize:l-2,k=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:12,u=void 0!==b.steps?b.steps:
1,x=b.extrudePath,r,G=!1,w=void 0!==b.UVGenerator?b.UVGenerator:ya.WorldUVGenerator,y,A,v,E;x&&(r=x.getSpacedPoints(u),G=!0,p=!1,y=void 0!==b.frames?b.frames:x.computeFrenetFrames(u,!1),A=new q,v=new q,E=new q);p||(m=l=k=0);var z,C,F,J=this,H=this.vertices.length,x=a.extractPoints(n),n=x.shape,I=x.holes;if(x=!za.isClockWise(n)){n=n.reverse();C=0;for(F=I.length;C<F;C++)z=I[C],za.isClockWise(z)&&(I[C]=z.reverse());x=!1}var S=za.triangulateShape(n,I),T=n;C=0;for(F=I.length;C<F;C++)z=I[C],n=n.concat(z);
var N,Q,M,O,P,U=n.length,W,V=S.length,x=[],R=0;M=T.length;N=M-1;for(Q=R+1;R<M;R++,N++,Q++)N===M&&(N=0),Q===M&&(Q=0),x[R]=d(T[R],T[N],T[Q]);var X=[],Z,ca=x.concat();C=0;for(F=I.length;C<F;C++){z=I[C];Z=[];R=0;M=z.length;N=M-1;for(Q=R+1;R<M;R++,N++,Q++)N===M&&(N=0),Q===M&&(Q=0),Z[R]=d(z[R],z[N],z[Q]);X.push(Z);ca=ca.concat(Z)}for(N=0;N<k;N++){M=N/k;O=l*Math.cos(M*Math.PI/2);Q=m*Math.sin(M*Math.PI/2);R=0;for(M=T.length;R<M;R++)P=c(T[R],x[R],Q),f(P.x,P.y,-O);C=0;for(F=I.length;C<F;C++)for(z=I[C],Z=X[C],
R=0,M=z.length;R<M;R++)P=c(z[R],Z[R],Q),f(P.x,P.y,-O)}Q=m;for(R=0;R<U;R++)P=p?c(n[R],ca[R],Q):n[R],G?(v.copy(y.normals[0]).multiplyScalar(P.x),A.copy(y.binormals[0]).multiplyScalar(P.y),E.copy(r[0]).add(v).add(A),f(E.x,E.y,E.z)):f(P.x,P.y,0);for(M=1;M<=u;M++)for(R=0;R<U;R++)P=p?c(n[R],ca[R],Q):n[R],G?(v.copy(y.normals[M]).multiplyScalar(P.x),A.copy(y.binormals[M]).multiplyScalar(P.y),E.copy(r[M]).add(v).add(A),f(E.x,E.y,E.z)):f(P.x,P.y,h/u*M);for(N=k-1;0<=N;N--){M=N/k;O=l*Math.cos(M*Math.PI/2);Q=
m*Math.sin(M*Math.PI/2);R=0;for(M=T.length;R<M;R++)P=c(T[R],x[R],Q),f(P.x,P.y,h+O);C=0;for(F=I.length;C<F;C++)for(z=I[C],Z=X[C],R=0,M=z.length;R<M;R++)P=c(z[R],Z[R],Q),G?f(P.x,P.y+r[u-1].y,r[u-1].x+O):f(P.x,P.y,h+O)}(function(){if(p){var a=0*U;for(R=0;R<V;R++)W=S[R],g(W[2]+a,W[1]+a,W[0]+a);a=U*(u+2*k);for(R=0;R<V;R++)W=S[R],g(W[0]+a,W[1]+a,W[2]+a)}else{for(R=0;R<V;R++)W=S[R],g(W[2],W[1],W[0]);for(R=0;R<V;R++)W=S[R],g(W[0]+U*u,W[1]+U*u,W[2]+U*u)}})();(function(){var a=0;e(T,a);a+=T.length;C=0;for(F=
I.length;C<F;C++)z=I[C],e(z,a),a+=z.length})()};ya.WorldUVGenerator={generateTopUV:function(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new D(b.x,b.y),new D(c.x,c.y),new D(d.x,d.y)]},generateSideWallUV:function(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return.01>Math.abs(b.y-c.y)?[new D(b.x,1-b.z),new D(c.x,1-c.z),new D(d.x,1-d.z),new D(e.x,1-e.z)]:[new D(b.y,1-b.z),new D(c.y,1-c.z),new D(d.y,1-d.z),new D(e.y,1-e.z)]}};Oc.prototype=Object.create(ya.prototype);Oc.prototype.constructor=
Oc;Pc.prototype=Object.create(T.prototype);Pc.prototype.constructor=Pc;nb.prototype=Object.create(I.prototype);nb.prototype.constructor=nb;Qc.prototype=Object.create(T.prototype);Qc.prototype.constructor=Qc;Vb.prototype=Object.create(I.prototype);Vb.prototype.constructor=Vb;Rc.prototype=Object.create(T.prototype);Rc.prototype.constructor=Rc;Wb.prototype=Object.create(I.prototype);Wb.prototype.constructor=Wb;Xb.prototype=Object.create(T.prototype);Xb.prototype.constructor=Xb;Yb.prototype=Object.create(I.prototype);
Yb.prototype.constructor=Yb;Zb.prototype=Object.create(I.prototype);Zb.prototype.constructor=Zb;ob.prototype=Object.create(T.prototype);ob.prototype.constructor=ob;Wa.prototype=Object.create(I.prototype);Wa.prototype.constructor=Wa;Sc.prototype=Object.create(ob.prototype);Sc.prototype.constructor=Sc;Tc.prototype=Object.create(Wa.prototype);Tc.prototype.constructor=Tc;Uc.prototype=Object.create(T.prototype);Uc.prototype.constructor=Uc;$b.prototype=Object.create(I.prototype);$b.prototype.constructor=
$b;var Oa=Object.freeze({WireframeGeometry:Nb,ParametricGeometry:Fc,ParametricBufferGeometry:Ob,TetrahedronGeometry:Hc,TetrahedronBufferGeometry:Pb,OctahedronGeometry:Ic,OctahedronBufferGeometry:mb,IcosahedronGeometry:Jc,IcosahedronBufferGeometry:Qb,DodecahedronGeometry:Kc,DodecahedronBufferGeometry:Rb,PolyhedronGeometry:Gc,PolyhedronBufferGeometry:va,TubeGeometry:Lc,TubeBufferGeometry:Sb,TorusKnotGeometry:Mc,TorusKnotBufferGeometry:Tb,TorusGeometry:Nc,TorusBufferGeometry:Ub,TextGeometry:Oc,SphereGeometry:Pc,
SphereBufferGeometry:nb,RingGeometry:Qc,RingBufferGeometry:Vb,PlaneGeometry:yc,PlaneBufferGeometry:kb,LatheGeometry:Rc,LatheBufferGeometry:Wb,ShapeGeometry:Xb,ShapeBufferGeometry:Yb,ExtrudeGeometry:ya,EdgesGeometry:Zb,ConeGeometry:Sc,ConeBufferGeometry:Tc,CylinderGeometry:ob,CylinderBufferGeometry:Wa,CircleGeometry:Uc,CircleBufferGeometry:$b,BoxGeometry:Hb,BoxBufferGeometry:jb});ac.prototype=Object.create(Ga.prototype);ac.prototype.constructor=ac;ac.prototype.isShadowMaterial=!0;bc.prototype=Object.create(Ga.prototype);
bc.prototype.constructor=bc;bc.prototype.isRawShaderMaterial=!0;Object.assign(sd.prototype,{isMultiMaterial:!0,toJSON:function(a){for(var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata;b.materials.push(f)}b.visible=this.visible;return b},clone:function(){for(var a=new this.constructor,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());
a.visible=this.visible;return a}});Qa.prototype=Object.create(X.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isMeshStandardMaterial=!0;Qa.prototype.copy=function(a){X.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;
this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=
a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};pb.prototype=Object.create(Qa.prototype);pb.prototype.constructor=pb;pb.prototype.isMeshPhysicalMaterial=!0;pb.prototype.copy=function(a){Qa.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;
return this};ra.prototype=Object.create(X.prototype);ra.prototype.constructor=ra;ra.prototype.isMeshPhongMaterial=!0;ra.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;
this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=
a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};qb.prototype=Object.create(ra.prototype);qb.prototype.constructor=qb;qb.prototype.isMeshToonMaterial=!0;qb.prototype.copy=function(a){ra.prototype.copy.call(this,a);this.gradientMap=a.gradientMap;return this};rb.prototype=Object.create(X.prototype);rb.prototype.constructor=rb;rb.prototype.isMeshNormalMaterial=!0;rb.prototype.copy=function(a){X.prototype.copy.call(this,
a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};sb.prototype=Object.create(X.prototype);sb.prototype.constructor=sb;sb.prototype.isMeshLambertMaterial=
!0;sb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;
this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};tb.prototype=Object.create(X.prototype);tb.prototype.constructor=tb;tb.prototype.isLineDashedMaterial=!0;tb.prototype.copy=function(a){X.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=
a.dashSize;this.gapSize=a.gapSize;return this};var ag=Object.freeze({ShadowMaterial:ac,SpriteMaterial:lb,RawShaderMaterial:bc,ShaderMaterial:Ga,PointsMaterial:Ha,MultiMaterial:sd,MeshPhysicalMaterial:pb,MeshStandardMaterial:Qa,MeshPhongMaterial:ra,MeshToonMaterial:qb,MeshNormalMaterial:rb,MeshLambertMaterial:sb,MeshDepthMaterial:ab,MeshBasicMaterial:Ja,LineDashedMaterial:tb,LineBasicMaterial:ka,Material:X}),hd={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==
this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},pa=new $d;Object.assign(sa.prototype,{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=hd.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){var h=g[1],l=!!g[2],g=g[3],g=window.decodeURIComponent(g);l&&(g=window.atob(g));try{var m,k=(this.responseType||
"").toLowerCase();switch(k){case "arraybuffer":case "blob":m=new ArrayBuffer(g.length);for(var p=new Uint8Array(m),l=0;l<g.length;l++)p[l]=g.charCodeAt(l);"blob"===k&&(m=new Blob([m],{type:h}));break;case "document":m=(new DOMParser).parseFromString(g,h);break;case "json":m=JSON.parse(g);break;default:m=g}window.setTimeout(function(){b&&b(m);e.manager.itemEnd(a)},0)}catch(q){window.setTimeout(function(){d&&d(q);e.manager.itemError(a)},0)}}else{var n=new XMLHttpRequest;n.open("GET",a,!0);n.addEventListener("load",
function(c){var f=c.target.response;hd.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(console.warn("THREE.FileLoader: HTTP Status 0 received."),b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemError(a))},!1);void 0!==c&&n.addEventListener("progress",function(a){c(a)},!1);n.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.responseType&&(n.responseType=this.responseType);void 0!==this.withCredentials&&(n.withCredentials=this.withCredentials);
n.overrideMimeType&&n.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");n.send(null)}e.manager.itemStart(a);return n},setPath:function(a){this.path=a;return this},setResponseType:function(a){this.responseType=a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this}});Object.assign(Ne.prototype,{load:function(a,b,c,d){function e(e){l.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,
format:a.format,mipmaps:a.mipmaps};m+=1;6===m&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Mb;h.image=g;var l=new sa(this.manager);l.setPath(this.path);l.setResponseType("arraybuffer");if(Array.isArray(a))for(var m=0,k=0,p=a.length;k<p;++k)e(k);else l.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*
a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h},setPath:function(a){this.path=a;return this}});Object.assign(ae.prototype,{load:function(a,b,c,d){var e=this,f=new db,g=new sa(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==
a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1008,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});Object.assign(Vc.prototype,
{load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);var e=this,f=hd.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;c=document.createElementNS("http://www.w3.org/1999/xhtml","img");c.addEventListener("load",function(){hd.add(a,this);b&&b(this);e.manager.itemEnd(a)},!1);c.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a)},!1);void 0!==this.crossOrigin&&(c.crossOrigin=this.crossOrigin);e.manager.itemStart(a);
c.src=a;return c},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});Object.assign(be.prototype,{load:function(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new Za,g=new Vc(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=
a;return this}});Object.assign(td.prototype,{load:function(a,b,c,d){var e=new ea,f=new Vc(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){var d=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data\:image\/jpeg/);e.format=d?1022:1023;e.image=c;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this}});ha.prototype=Object.assign(Object.create(A.prototype),{constructor:ha,
isLight:!0,copy:function(a){A.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=A.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&
(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});ud.prototype=Object.assign(Object.create(ha.prototype),{constructor:ud,isHemisphereLight:!0,copy:function(a){ha.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(ub.prototype,{copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},
toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});vd.prototype=Object.assign(Object.create(ub.prototype),{constructor:vd,isSpotLightShadow:!0,update:function(a){var b=2*N.RAD2DEG*a.angle,c=this.mapSize.width/this.mapSize.height;a=a.distance||500;var d=this.camera;if(b!==d.fov||c!==d.aspect||a!==d.far)d.fov=
b,d.aspect=c,d.far=a,d.updateProjectionMatrix()}});wd.prototype=Object.assign(Object.create(ha.prototype),{constructor:wd,isSpotLight:!0,copy:function(a){ha.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});xd.prototype=Object.assign(Object.create(ha.prototype),{constructor:xd,isPointLight:!0,copy:function(a){ha.prototype.copy.call(this,a);this.distance=a.distance;
this.decay=a.decay;this.shadow=a.shadow.clone();return this}});yd.prototype=Object.assign(Object.create(ub.prototype),{constructor:yd});zd.prototype=Object.assign(Object.create(ha.prototype),{constructor:zd,isDirectionalLight:!0,copy:function(a){ha.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});Ad.prototype=Object.assign(Object.create(ha.prototype),{constructor:Ad,isAmbientLight:!0});var ta={arraySlice:function(a,b,c){return ta.isTypedArray(a)?
new a.constructor(a.subarray(b,c)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*
b,l=0;l!==b;++l)e[g++]=a[h+l];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];while(void 0!==f)}}}};Object.assign(la.prototype,{evaluate:function(a){var b=
this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=
0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function(a,
b,c){}});Object.assign(la.prototype,{beforeStart_:la.prototype.copySampleValue_,afterEnd_:la.prototype.copySampleValue_});Bd.prototype=Object.assign(Object.create(la.prototype),{constructor:Bd,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=
a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,l=this._offsetPrev,m=this._offsetNext,k=this._weightPrev,p=this._weightNext,n=(c-b)/(d-b);c=n*n;d=c*n;b=-k*d+2*k*c-k*n;k=(1+k)*d+(-1.5-2*k)*c+(-.5+k)*n+1;n=(-1-p)*d+(1.5+p)*c+.5*n;p=p*d-p*c;for(c=0;c!==g;++c)e[c]=
b*f[l+c]+k*f[h+c]+n*f[a+c]+p*f[m+c];return e}});Wc.prototype=Object.assign(Object.create(la.prototype),{constructor:Wc,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Cd.prototype=Object.assign(Object.create(la.prototype),{constructor:Cd,interpolate_:function(a,b,c,d){return this.copySampleValue_(a-1)}});var Ya;Ya={TimeBufferType:Float32Array,ValueBufferType:Float32Array,
DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Cd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new Wc(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Bd(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){var b;switch(a){case 2300:b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=
this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn(b)}else this.createInterpolant=b},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},
getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),d=this.getValueSize(),this.times=ta.arraySlice(c,e,f),this.values=ta.arraySlice(this.values,
e*d,f*d);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("invalid value size in track",this),a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(console.error("track is empty",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("time is not a valid number",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("out of order keys",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&ta.isTypedArray(b))for(f=
0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("value is not a valid number",this,f,d);a=!1;break}return a},optimize:function(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,l=a[g];if(l!==a[g+1]&&(1!==g||l!==l[0]))if(d)h=!0;else for(var m=g*c,k=m-c,p=m+c,l=0;l!==c;++l){var n=b[m+l];if(n!==b[k+l]||n!==b[p+l]){h=!0;break}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,m=e*c,l=0;l!==c;++l)b[m+l]=b[h+l];++e}}if(0<f){a[e]=
a[f];h=f*c;m=e*c;for(l=0;l!==c;++l)b[m+l]=b[h+l];++e}e!==a.length&&(this.times=ta.arraySlice(a,0,e),this.values=ta.arraySlice(b,0,e*c));return this}};cc.prototype=Object.assign(Object.create(Ya),{constructor:cc,ValueTypeName:"vector"});Dd.prototype=Object.assign(Object.create(la.prototype),{constructor:Dd,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)na.slerpFlat(e,0,f,a-g,f,a,b);return e}});Xc.prototype=Object.assign(Object.create(Ya),
{constructor:Xc,ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new Dd(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});dc.prototype=Object.assign(Object.create(Ya),{constructor:dc,ValueTypeName:"number"});Ed.prototype=Object.assign(Object.create(Ya),{constructor:Ed,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
Fd.prototype=Object.assign(Object.create(Ya),{constructor:Fd,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});Gd.prototype=Object.assign(Object.create(Ya),{constructor:Gd,ValueTypeName:"color"});wb.prototype=Ya;Ya.constructor=wb;Object.assign(wb,{parse:function(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=wb._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=
[],d=[];ta.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)},toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{var b={name:a.name,times:ta.convertArray(a.times,Array),values:ta.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b},_getTrackTypeForValueTypeName:function(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return dc;
case "vector":case "vector2":case "vector3":case "vector4":return cc;case "color":return Gd;case "quaternion":return Xc;case "bool":case "boolean":return Fd;case "string":return Ed}throw Error("Unsupported typeName: "+a);}});Object.assign(Aa,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(wb.parse(c[e]).scale(d));return new Aa(a.name,a.duration,b)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==
e;++d)b.push(wb.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],l=[];h.push((g+e-1)%e,g,(g+1)%e);l.push(0,1,0);var m=ta.getKeyframeOrder(h),h=ta.sortedArray(h,1,m),l=ta.sortedArray(l,1,m);d||0!==h[0]||(h.push(e),l.push(l[0]));f.push((new dc(".morphTargetInfluences["+b[g].name+"]",h,l)).scale(1/c))}return new Aa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(var d=
0;d<c.length;d++)if(c[d].name===b)return c[d];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],l=h.name.match(e);if(l&&1<l.length){var m=l[1];(l=d[m])||(d[m]=l=[]);l.push(h)}}a=[];for(m in d)a.push(Aa.CreateFromMorphTargetSequence(m,d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("  no animation in JSONLoader data"),null;for(var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ta.flattenJSON(c,
f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30,h=a.hierarchy||[],l=0;l<h.length;l++){var m=h[l].keys;if(m&&0!==m.length)if(m[0].morphTargets){for(var f={},k=0;k<m.length;k++)if(m[k].morphTargets)for(var p=0;p<m[k].morphTargets.length;p++)f[m[k].morphTargets[p]]=-1;for(var n in f){for(var q=[],x=[],p=0;p!==m[k].morphTargets.length;++p){var r=m[k];q.push(r.time);x.push(r.morphTarget===n?1:0)}d.push(new dc(".morphTargetInfluence["+n+"]",q,x))}f=f.length*
(g||1)}else k=".bones["+b[l].name+"]",c(cc,k+".position",m,"pos",d),c(Xc,k+".quaternion",m,"rot",d),c(cc,k+".scale",m,"scl",d)}return 0===d.length?null:new Aa(e,f,d)}});Object.assign(Aa.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b)var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);this.duration=a},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();
return this}});Object.assign(Hd.prototype,{load:function(a,b,c,d){var e=this;(new sa(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setTextures:function(a){this.textures=a},parse:function(a){function b(a){void 0===c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new ag[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==
a.metalness&&(d.metalness=a.metalness);void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=a.shininess);void 0!==a.clearCoat&&(d.clearCoat=a.clearCoat);void 0!==a.clearCoatRoughness&&(d.clearCoatRoughness=a.clearCoatRoughness);void 0!==a.uniforms&&(d.uniforms=a.uniforms);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&
(d.vertexColors=a.vertexColors);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.shading&&(d.shading=a.shading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.wireframe&&(d.wireframe=
a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap),
d.transparent=!0);void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));if(void 0!==a.normalScale){var e=a.normalScale;!1===Array.isArray(e)&&(e=[e,e]);d.normalScale=(new D).fromArray(e)}void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&
(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==
a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));if(void 0!==a.materials)for(var e=0,f=a.materials.length;e<f;e++)d.materials.push(this.parse(a.materials[e]));return d}});Object.assign(ce.prototype,{load:function(a,b,c,d){var e=this;(new sa(e.manager)).load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=new I,c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,
Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};void 0!==c&&(c=new d[c.type](c.array),b.setIndex(new U(c,1)));var e=a.data.attributes,f;for(f in e){var g=e[f],c=new d[g.type](g.array);b.addAttribute(f,new U(c,g.itemSize,g.normalized))}d=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==d)for(f=0,c=d.length;f!==c;++f)e=d[f],b.addGroup(e.start,e.count,e.materialIndex);a=a.data.boundingSphere;void 0!==
a&&(d=new q,void 0!==a.center&&d.fromArray(a.center),b.boundingSphere=new Pa(d,a.radius));return b}});ec.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e}return null}};Object.assign(ec.prototype,{crossOrigin:void 0,extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b,c){for(var d=[],e=0;e<a.length;++e)d[e]=
this.createMaterial(a[e],b,c);return d},createMaterial:function(){var a={NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5},b=new J,c=new td,d=new Hd;return function(e,f,g){function h(a,b,d,e,h){a=f+a;var m=ec.Handlers.get(a);null!==m?a=m.load(a):(c.setCrossOrigin(g),a=c.load(a));void 0!==b&&(a.repeat.fromArray(b),1!==b[0]&&(a.wrapS=1E3),1!==b[1]&&(a.wrapT=1E3));void 0!==d&&a.offset.fromArray(d);void 0!==e&&("repeat"===e[0]&&(a.wrapS=1E3),"mirror"===
e[0]&&(a.wrapS=1002),"repeat"===e[1]&&(a.wrapT=1E3),"mirror"===e[1]&&(a.wrapT=1002));void 0!==h&&(a.anisotropy=h);b=N.generateUUID();l[b]=a;return b}var l={},m={uuid:N.generateUUID(),type:"MeshLambertMaterial"},k;for(k in e){var p=e[k];switch(k){case "DbgColor":case "DbgIndex":case "opticalDensity":case "illumination":break;case "DbgName":m.name=p;break;case "blending":m.blending=a[p];break;case "colorAmbient":case "mapAmbient":console.warn("THREE.Loader.createMaterial:",k,"is no longer supported.");
break;case "colorDiffuse":m.color=b.fromArray(p).getHex();break;case "colorSpecular":m.specular=b.fromArray(p).getHex();break;case "colorEmissive":m.emissive=b.fromArray(p).getHex();break;case "specularCoef":m.shininess=p;break;case "shading":"basic"===p.toLowerCase()&&(m.type="MeshBasicMaterial");"phong"===p.toLowerCase()&&(m.type="MeshPhongMaterial");"standard"===p.toLowerCase()&&(m.type="MeshStandardMaterial");break;case "mapDiffuse":m.map=h(p,e.mapDiffuseRepeat,e.mapDiffuseOffset,e.mapDiffuseWrap,
e.mapDiffuseAnisotropy);break;case "mapDiffuseRepeat":case "mapDiffuseOffset":case "mapDiffuseWrap":case "mapDiffuseAnisotropy":break;case "mapEmissive":m.emissiveMap=h(p,e.mapEmissiveRepeat,e.mapEmissiveOffset,e.mapEmissiveWrap,e.mapEmissiveAnisotropy);break;case "mapEmissiveRepeat":case "mapEmissiveOffset":case "mapEmissiveWrap":case "mapEmissiveAnisotropy":break;case "mapLight":m.lightMap=h(p,e.mapLightRepeat,e.mapLightOffset,e.mapLightWrap,e.mapLightAnisotropy);break;case "mapLightRepeat":case "mapLightOffset":case "mapLightWrap":case "mapLightAnisotropy":break;
case "mapAO":m.aoMap=h(p,e.mapAORepeat,e.mapAOOffset,e.mapAOWrap,e.mapAOAnisotropy);break;case "mapAORepeat":case "mapAOOffset":case "mapAOWrap":case "mapAOAnisotropy":break;case "mapBump":m.bumpMap=h(p,e.mapBumpRepeat,e.mapBumpOffset,e.mapBumpWrap,e.mapBumpAnisotropy);break;case "mapBumpScale":m.bumpScale=p;break;case "mapBumpRepeat":case "mapBumpOffset":case "mapBumpWrap":case "mapBumpAnisotropy":break;case "mapNormal":m.normalMap=h(p,e.mapNormalRepeat,e.mapNormalOffset,e.mapNormalWrap,e.mapNormalAnisotropy);
break;case "mapNormalFactor":m.normalScale=[p,p];break;case "mapNormalRepeat":case "mapNormalOffset":case "mapNormalWrap":case "mapNormalAnisotropy":break;case "mapSpecular":m.specularMap=h(p,e.mapSpecularRepeat,e.mapSpecularOffset,e.mapSpecularWrap,e.mapSpecularAnisotropy);break;case "mapSpecularRepeat":case "mapSpecularOffset":case "mapSpecularWrap":case "mapSpecularAnisotropy":break;case "mapMetalness":m.metalnessMap=h(p,e.mapMetalnessRepeat,e.mapMetalnessOffset,e.mapMetalnessWrap,e.mapMetalnessAnisotropy);
break;case "mapMetalnessRepeat":case "mapMetalnessOffset":case "mapMetalnessWrap":case "mapMetalnessAnisotropy":break;case "mapRoughness":m.roughnessMap=h(p,e.mapRoughnessRepeat,e.mapRoughnessOffset,e.mapRoughnessWrap,e.mapRoughnessAnisotropy);break;case "mapRoughnessRepeat":case "mapRoughnessOffset":case "mapRoughnessWrap":case "mapRoughnessAnisotropy":break;case "mapAlpha":m.alphaMap=h(p,e.mapAlphaRepeat,e.mapAlphaOffset,e.mapAlphaWrap,e.mapAlphaAnisotropy);break;case "mapAlphaRepeat":case "mapAlphaOffset":case "mapAlphaWrap":case "mapAlphaAnisotropy":break;
case "flipSided":m.side=1;break;case "doubleSided":m.side=2;break;case "transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");m.opacity=p;break;case "depthTest":case "depthWrite":case "colorWrite":case "opacity":case "reflectivity":case "transparent":case "visible":case "wireframe":m[k]=p;break;case "vertexColors":!0===p&&(m.vertexColors=2);"face"===p&&(m.vertexColors=1);break;default:console.error("THREE.Loader.createMaterial: Unsupported",k,p)}}"MeshBasicMaterial"===
m.type&&delete m.emissive;"MeshPhongMaterial"!==m.type&&delete m.specular;1>m.opacity&&(m.transparent=!0);d.setTextures(l);return d.parse(m)}}()});Object.assign(de.prototype,{load:function(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:ec.prototype.extractUrlBase(a),g=new sa(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+
a+" should be loaded with THREE.ObjectLoader instead.");return}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return}}c=e.parse(c,f);b(c.geometry,c.materials)},c,d)},setTexturePath:function(a){this.texturePath=a},parse:function(a,b){var c=new T,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,l,m,k,p,n,u,x,r,A,w,y=a.faces;k=a.vertices;var z=a.normals,v=a.colors,E=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&
E++;for(d=0;d<E;d++)c.faceVertexUvs[d]=[]}l=0;for(m=k.length;l<m;)d=new q,d.x=k[l++]*b,d.y=k[l++]*b,d.z=k[l++]*b,c.vertices.push(d);l=0;for(m=y.length;l<m;)if(b=y[l++],u=b&1,h=b&2,d=b&8,p=b&16,x=b&32,k=b&64,b&=128,u){u=new qa;u.a=y[l];u.b=y[l+1];u.c=y[l+3];r=new qa;r.a=y[l+1];r.b=y[l+2];r.c=y[l+3];l+=4;h&&(h=y[l++],u.materialIndex=h,r.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<E;d++)for(A=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)n=y[l++],w=A[2*n],n=A[2*n+1],w=
new D(w,n),2!==g&&c.faceVertexUvs[d][h].push(w),0!==g&&c.faceVertexUvs[d][h+1].push(w);p&&(p=3*y[l++],u.normal.set(z[p++],z[p++],z[p]),r.normal.copy(u.normal));if(x)for(d=0;4>d;d++)p=3*y[l++],x=new q(z[p++],z[p++],z[p]),2!==d&&u.vertexNormals.push(x),0!==d&&r.vertexNormals.push(x);k&&(k=y[l++],k=v[k],u.color.setHex(k),r.color.setHex(k));if(b)for(d=0;4>d;d++)k=y[l++],k=v[k],2!==d&&u.vertexColors.push(new J(k)),0!==d&&r.vertexColors.push(new J(k));c.faces.push(u);c.faces.push(r)}else{u=new qa;u.a=y[l++];
u.b=y[l++];u.c=y[l++];h&&(h=y[l++],u.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<E;d++)for(A=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)n=y[l++],w=A[2*n],n=A[2*n+1],w=new D(w,n),c.faceVertexUvs[d][h].push(w);p&&(p=3*y[l++],u.normal.set(z[p++],z[p++],z[p]));if(x)for(d=0;3>d;d++)p=3*y[l++],x=new q(z[p++],z[p++],z[p]),u.vertexNormals.push(x);k&&(k=y[l++],u.color.setHex(v[k]));if(b)for(d=0;3>d;d++)k=y[l++],u.vertexColors.push(new J(v[k]));c.faces.push(u)}})(d);(function(){var b=void 0!==a.influencesPerVertex?
a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new ga(a.skinWeights[d],1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new ga(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&
console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.")})();(function(b){if(void 0!==a.morphTargets)for(var d=0,g=a.morphTargets.length;d<g;d++){c.morphTargets[d]={};c.morphTargets[d].name=a.morphTargets[d].name;c.morphTargets[d].vertices=[];for(var h=c.morphTargets[d].vertices,l=a.morphTargets[d].vertices,m=0,k=l.length;m<k;m+=3){var p=new q;p.x=l[m]*b;p.y=l[m+1]*b;p.z=l[m+2]*b;h.push(p)}}if(void 0!==
a.morphColors&&0<a.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),b=c.faces,h=a.morphColors[0].colors,d=0,g=b.length;d<g;d++)b[d].color.fromArray(h,3*d)})(d);(function(){var b=[],d=[];void 0!==a.animation&&d.push(a.animation);void 0!==a.animations&&(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var g=0;g<d.length;g++){var h=Aa.parseAnimation(d[g],c.bones);h&&b.push(h)}c.morphTargets&&(d=Aa.CreateClipsFromMorphTargetSequences(c.morphTargets,
10),b=b.concat(d));0<b.length&&(c.animations=b)})();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=ec.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d}}});Object.assign(Oe.prototype,{load:function(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;(new sa(e.manager)).load(a,function(c){var g=null;try{g=JSON.parse(c)}catch(h){void 0!==d&&d(h);console.error("THREE:ObjectLoader: Can't parse "+
a+".",h.message);return}c=g.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a+". Use THREE.JSONLoader instead."):e.parse(g,b)},c,d)},setTexturePath:function(a){this.texturePath=a},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e)}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,
c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new de,d=new ce,e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":case "PlaneBufferGeometry":g=new Oa[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":g=new Oa[h.type](h.width,h.height,h.depth,h.widthSegments,
h.heightSegments,h.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":g=new Oa[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":g=new Oa[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":g=new Oa[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);
break;case "SphereGeometry":case "SphereBufferGeometry":g=new Oa[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "DodecahedronGeometry":case "IcosahedronGeometry":case "OctahedronGeometry":case "TetrahedronGeometry":g=new Oa[h.type](h.radius,h.detail);break;case "RingGeometry":case "RingBufferGeometry":g=new Oa[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":g=
new Oa[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":g=new Oa[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case "LatheGeometry":case "LatheBufferGeometry":g=new Oa[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case "BufferGeometry":g=d.parse(h);break;case "Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+
h.type+'"');continue}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a,b){var c={};if(void 0!==a){var d=new Hd;d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=g}}return c},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=Aa.parse(a[c]);b.push(d)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a)})}
var d=this,e={};if(void 0!==a&&0<a.length){var f=new $d(b),g=new Vc(f);g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var l=a[f],m=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(l.url)?l.url:d.texturePath+l.url;e[l.uuid]=c(m)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,
EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},e={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},f={NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008},g={};if(void 0!==a)for(var h=0,l=a.length;h<l;h++){var m=a[h];void 0===m.image&&console.warn('THREE.ObjectLoader: No "image" specified for',
m.uuid);void 0===b[m.image]&&console.warn("THREE.ObjectLoader: Undefined image",m.image);var k=new ea(b[m.image]);k.needsUpdate=!0;k.uuid=m.uuid;void 0!==m.name&&(k.name=m.name);void 0!==m.mapping&&(k.mapping=c(m.mapping,d));void 0!==m.offset&&k.offset.fromArray(m.offset);void 0!==m.repeat&&k.repeat.fromArray(m.repeat);void 0!==m.wrap&&(k.wrapS=c(m.wrap[0],e),k.wrapT=c(m.wrap[1],e));void 0!==m.minFilter&&(k.minFilter=c(m.minFilter,f));void 0!==m.magFilter&&(k.magFilter=c(m.magFilter,f));void 0!==
m.anisotropy&&(k.anisotropy=m.anisotropy);void 0!==m.flipY&&(k.flipY=m.flipY);g[m.uuid]=k}return g},parseObject:function(){var a=new S;return function(b,c,d){function e(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a]}function f(a){if(void 0!==a)return void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),d[a]}var g;switch(b.type){case "Scene":g=new ld;void 0!==b.background&&Number.isInteger(b.background)&&(g.background=new J(b.background));
void 0!==b.fog&&("Fog"===b.fog.type?g.fog=new Kb(b.fog.color,b.fog.near,b.fog.far):"FogExp2"===b.fog.type&&(g.fog=new Jb(b.fog.color,b.fog.density)));break;case "PerspectiveCamera":g=new Ea(b.fov,b.aspect,b.near,b.far);void 0!==b.focus&&(g.focus=b.focus);void 0!==b.zoom&&(g.zoom=b.zoom);void 0!==b.filmGauge&&(g.filmGauge=b.filmGauge);void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset);void 0!==b.view&&(g.view=Object.assign({},b.view));break;case "OrthographicCamera":g=new Ib(b.left,b.right,b.top,b.bottom,
b.near,b.far);break;case "AmbientLight":g=new Ad(b.color,b.intensity);break;case "DirectionalLight":g=new zd(b.color,b.intensity);break;case "PointLight":g=new xd(b.color,b.intensity,b.distance,b.decay);break;case "SpotLight":g=new wd(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case "HemisphereLight":g=new ud(b.color,b.groundColor,b.intensity);break;case "Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new od(g,h):new xa(g,h);break;case "LOD":g=new Cc;break;
case "Line":g=new Na(e(b.geometry),f(b.material),b.mode);break;case "LineLoop":g=new pd(e(b.geometry),f(b.material));break;case "LineSegments":g=new fa(e(b.geometry),f(b.material));break;case "PointCloud":case "Points":g=new Lb(e(b.geometry),f(b.material));break;case "Sprite":g=new Bc(f(b.material));break;case "Group":g=new Dc;break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh type. Instantiates Object3D instead.");default:g=new A}g.uuid=b.uuid;void 0!==
b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.quaternion&&g.quaternion.fromArray(b.quaternion),void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);b.shadow&&(void 0!==b.shadow.bias&&(g.shadow.bias=b.shadow.bias),
void 0!==b.shadow.radius&&(g.shadow.radius=b.shadow.radius),void 0!==b.shadow.mapSize&&g.shadow.mapSize.fromArray(b.shadow.mapSize),void 0!==b.shadow.camera&&(g.shadow.camera=this.parseObject(b.shadow.camera)));void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=b.userData);if(void 0!==b.children)for(var l in b.children)g.add(this.parseObject(b.children[l],c,d));if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var m=b[h];l=g.getObjectByProperty("uuid",m.object);void 0!==
l&&g.addLevel(l,m.distance)}return g}}()});Object.assign(Ba.prototype,{getPoint:function(){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null},getPointAt:function(a){a=this.getUtoTmapping(a);return this.getPoint(a)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=this.getLengths();
return a[a.length-1]},getLengths:function(a){void 0===a&&(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),
d,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,l;g<=h;)if(d=Math.floor(g+(h-g)/2),l=c[d]-f,0>l)g=d+1;else if(0<l)h=d-1;else{h=d;break}d=h;if(c[d]===f)return d/(e-1);g=c[d];return(d+(f-g)/(c[d+1]-g))/(e-1)},getTangent:function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()},getTangentAt:function(a){a=this.getUtoTmapping(a);return this.getTangent(a)},computeFrenetFrames:function(a,b){var c=new q,d=[],e=[],f=[],g=new q,h=new S,l,m;
for(l=0;l<=a;l++)m=l/a,d[l]=this.getTangentAt(m),d[l].normalize();e[0]=new q;f[0]=new q;l=Number.MAX_VALUE;m=Math.abs(d[0].x);var k=Math.abs(d[0].y),p=Math.abs(d[0].z);m<=l&&(l=m,c.set(1,0,0));k<=l&&(l=k,c.set(0,1,0));p<=l&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(l=1;l<=a;l++)e[l]=e[l-1].clone(),f[l]=f[l-1].clone(),g.crossVectors(d[l-1],d[l]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(N.clamp(d[l-1].dot(d[l]),-1,1)),e[l].applyMatrix4(h.makeRotationAxis(g,
c))),f[l].crossVectors(d[l],e[l]);if(!0===b)for(c=Math.acos(N.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),l=1;l<=a;l++)e[l].applyMatrix4(h.makeRotationAxis(d[l],c*l)),f[l].crossVectors(d[l],e[l]);return{tangents:d,normals:e,binormals:f}}});Ta.prototype=Object.create(Ba.prototype);Ta.prototype.constructor=Ta;Ta.prototype.isLineCurve=!0;Ta.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);
return b};Ta.prototype.getPointAt=function(a){return this.getPoint(a)};Ta.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};Yc.prototype=Object.assign(Object.create(Ba.prototype),{constructor:Yc,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Ta(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=
b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===
a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++)for(var f=e[d],f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&f.isLineCurve?1:f&&f.isSplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h)}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},createPointsGeometry:function(a){a=this.getPoints(a);return this.createGeometry(a)},
createSpacedPointsGeometry:function(a){a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){for(var b=new T,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new q(e.x,e.y,e.z||0))}return b}});Xa.prototype=Object.create(Ba.prototype);Xa.prototype.constructor=Xa;Xa.prototype.isEllipseCurve=!0;Xa.prototype.getPoint=function(a){for(var b=2*Math.PI,c=this.aEndAngle-this.aStartAngle,d=Math.abs(c)<Number.EPSILON;0>c;)c+=b;for(;c>b;)c-=b;c<Number.EPSILON&&(c=d?0:b);!0!==this.aClockwise||
d||(c=c===b?-b:c-b);b=this.aStartAngle+a*c;a=this.aX+this.xRadius*Math.cos(b);var e=this.aY+this.yRadius*Math.sin(b);0!==this.aRotation&&(b=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=a-this.aX,e-=this.aY,a=d*b-e*c+this.aX,e=d*c+e*b+this.aY);return new D(a,e)};zb.prototype=Object.create(Ba.prototype);zb.prototype.constructor=zb;zb.prototype.isSplineCurve=!0;zb.prototype.getPoint=function(a){var b=this.points,c=(b.length-1)*a;a=Math.floor(c);var c=c-a,d=b[0===a?a:a-1],e=b[a],f=b[a>b.length-
2?b.length-1:a+1],b=b[a>b.length-3?b.length-1:a+2];return new D(Pe(c,d.x,e.x,f.x,b.x),Pe(c,d.y,e.y,f.y,b.y))};fc.prototype=Object.create(Ba.prototype);fc.prototype.constructor=fc;fc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new D(yb(a,b.x,c.x,d.x,e.x),yb(a,b.y,c.y,d.y,e.y))};gc.prototype=Object.create(Ba.prototype);gc.prototype.constructor=gc;gc.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2;return new D(xb(a,b.x,c.x,d.x),xb(a,b.y,c.y,d.y))};
var se=Object.assign(Object.create(Yc.prototype),{fromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)},moveTo:function(a,b){this.currentPoint.set(a,b)},lineTo:function(a,b){var c=new Ta(this.currentPoint.clone(),new D(a,b));this.curves.push(c);this.currentPoint.set(a,b)},quadraticCurveTo:function(a,b,c,d){a=new gc(this.currentPoint.clone(),new D(a,b),new D(c,d));this.curves.push(a);this.currentPoint.set(c,d)},bezierCurveTo:function(a,b,c,d,e,
f){a=new fc(this.currentPoint.clone(),new D(a,b),new D(c,d),new D(e,f));this.curves.push(a);this.currentPoint.set(e,f)},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a),b=new zb(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1])},arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f)},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,
c,d,e,f,g,h)},absellipse:function(a,b,c,d,e,f,g,h){a=new Xa(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a)}});Zc.prototype=se;se.constructor=Zc;Ab.prototype=Object.assign(Object.create(se),{constructor:Ab,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractAllPoints:function(a){return{shape:this.getPoints(a),
holes:this.getPointsHoles(a)}},extractPoints:function(a){return this.extractAllPoints(a)}});Object.assign(ee.prototype,{moveTo:function(a,b){this.currentPath=new Zc;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b)},lineTo:function(a,b){this.currentPath.lineTo(a,b)},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d)},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f)},splineThru:function(a){this.currentPath.splineThru(a)},toShapes:function(a,
b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Ab;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],l=h.x-g.x,m=h.y-g.y;if(Math.abs(m)>Number.EPSILON){if(0>m&&(g=b[f],l=-l,h=b[e],m=-m),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0}else{e=m*(a.x-g.x)-l*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=za.isClockWise,f=this.subPaths;
if(0===f.length)return[];if(!0===b)return c(f);var g,h,l,m=[];if(1===f.length)return h=f[0],l=new Ab,l.curves=h.curves,m.push(l),m;var k=!e(f[0].getPoints()),k=a?!k:k;l=[];var p=[],n=[],q=0,x;p[q]=void 0;n[q]=[];for(var r=0,z=f.length;r<z;r++)h=f[r],x=h.getPoints(),g=e(x),(g=a?!g:g)?(!k&&p[q]&&q++,p[q]={s:new Ab,p:x},p[q].s.curves=h.curves,k&&q++,n[q]=[]):n[q].push({h:h,p:x[0]});if(!p[0])return c(f);if(1<p.length){r=!1;h=[];e=0;for(f=p.length;e<f;e++)l[e]=[];e=0;for(f=p.length;e<f;e++)for(g=n[e],
k=0;k<g.length;k++){q=g[k];x=!0;for(z=0;z<p.length;z++)d(q.p,p[z].p)&&(e!==z&&h.push({froms:e,tos:z,hole:k}),x?(x=!1,l[z].push(q)):r=!0);x&&l[e].push(q)}0<h.length&&(r||(n=l))}r=0;for(e=p.length;r<e;r++)for(l=p[r].s,m.push(l),h=n[r],f=0,g=h.length;f<g;f++)l.holes.push(h[f].h);return m}});Object.assign(fe.prototype,{isFont:!0,generateShapes:function(a,b,c){void 0===b&&(b=100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=(d.boundingBox.yMax-d.boundingBox.yMin+d.underlineThickness)*
e,g=0,h=0;b=[];for(var l=0;l<a.length;l++){var m=a[l];if("\n"===m)g=0,h-=f;else{var k;k=e;var p=g,n=h;if(m=d.glyphs[m]||d.glyphs["?"]){var q=new ee,x=[],r,z,w,y,A,v,D,I;if(m.o)for(var C=m._cachedOutline||(m._cachedOutline=m.o.split(" ")),F=0,J=C.length;F<J;)switch(C[F++]){case "m":r=C[F++]*k+p;z=C[F++]*k+n;q.moveTo(r,z);break;case "l":r=C[F++]*k+p;z=C[F++]*k+n;q.lineTo(r,z);break;case "q":r=C[F++]*k+p;z=C[F++]*k+n;A=C[F++]*k+p;v=C[F++]*k+n;q.quadraticCurveTo(A,v,r,z);if(y=x[x.length-1]){w=y.x;y=y.y;
for(var H=1;H<=c;H++){var N=H/c;xb(N,w,A,r);xb(N,y,v,z)}}break;case "b":if(r=C[F++]*k+p,z=C[F++]*k+n,A=C[F++]*k+p,v=C[F++]*k+n,D=C[F++]*k+p,I=C[F++]*k+n,q.bezierCurveTo(A,v,D,I,r,z),y=x[x.length-1])for(w=y.x,y=y.y,H=1;H<=c;H++)N=H/c,yb(N,w,A,D,r),yb(N,y,v,I,z)}k={offsetX:m.ha*k,path:q}}else k=void 0;g+=k.offsetX;b.push(k.path)}}c=[];d=0;for(a=b.length;d<a;d++)Array.prototype.push.apply(c,b[d].toShapes());return c}});Object.assign(Qe.prototype,{load:function(a,b,c,d){var e=this;(new sa(this.manager)).load(a,
function(a){var c;try{c=JSON.parse(a)}catch(d){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new fe(a)}});var Od,je={getContext:function(){void 0===Od&&(Od=new (window.AudioContext||window.webkitAudioContext));return Od},setContext:function(a){Od=a}};Object.assign(ge.prototype,{load:function(a,b,c,d){var e=new sa(this.manager);e.setResponseType("arraybuffer");
e.load(a,function(a){je.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});he.prototype=Object.assign(Object.create(ha.prototype),{constructor:he,isRectAreaLight:!0,copy:function(a){ha.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this}});Object.assign(Re.prototype,{update:function(){var a,b,c,d,e,f,g,h,l=new S,m=new S;return function(k){if(a!==this||b!==k.focus||c!==k.fov||d!==k.aspect*this.aspect||e!==k.near||f!==k.far||g!==k.zoom||h!==this.eyeSep){a=this;b=
k.focus;c=k.fov;d=k.aspect*this.aspect;e=k.near;f=k.far;g=k.zoom;var p=k.projectionMatrix.clone();h=this.eyeSep/2;var n=h*e/b,q=e*Math.tan(N.DEG2RAD*c*.5)/g,x,r;m.elements[12]=-h;l.elements[12]=h;x=-q*d+n;r=q*d+n;p.elements[0]=2*e/(r-x);p.elements[8]=(r+x)/(r-x);this.cameraL.projectionMatrix.copy(p);x=-q*d-n;r=q*d-n;p.elements[0]=2*e/(r-x);p.elements[8]=(r+x)/(r-x);this.cameraR.projectionMatrix.copy(p)}this.cameraL.matrixWorld.copy(k.matrixWorld).multiply(m);this.cameraR.matrixWorld.copy(k.matrixWorld).multiply(l)}}()});
Id.prototype=Object.create(A.prototype);Id.prototype.constructor=Id;ie.prototype=Object.assign(Object.create(A.prototype),{constructor:ie,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null)},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):
this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination)},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.value=a},updateMatrixWorld:function(){var a=new q,b=new na,c=new q,d=new q;return function(e){A.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.positionX?(e.positionX.setValueAtTime(a.x,
this.context.currentTime),e.positionY.setValueAtTime(a.y,this.context.currentTime),e.positionZ.setValueAtTime(a.z,this.context.currentTime),e.forwardX.setValueAtTime(d.x,this.context.currentTime),e.forwardY.setValueAtTime(d.y,this.context.currentTime),e.forwardZ.setValueAtTime(d.z,this.context.currentTime),e.upX.setValueAtTime(f.x,this.context.currentTime),e.upY.setValueAtTime(f.y,this.context.currentTime),e.upZ.setValueAtTime(f.z,this.context.currentTime)):(e.setPosition(a.x,a.y,a.z),e.setOrientation(d.x,
d.y,d.z,f.x,f.y,f.z))}}()});hc.prototype=Object.assign(Object.create(A.prototype),{constructor:hc,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else{var a=this.context.createBufferSource();a.buffer=this.buffer;a.loop=this.loop;a.onended=this.onEnded.bind(this);a.playbackRate.setValueAtTime(this.playbackRate,this.startTime);a.start(0,this.startTime);this.isPlaying=!0;this.source=a;return this.connect()}},pause:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else return this.source.stop(),this.startTime=0,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-
1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");
else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setValueAtTime(this.playbackRate,this.context.currentTime),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=
a,!0===this.isPlaying&&(this.source.loop=this.loop),this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.value=a;return this}});ke.prototype=Object.assign(Object.create(hc.prototype),{constructor:ke,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=
a},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=a},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a},updateMatrixWorld:function(){var a=new q;return function(b){A.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z)}}()});Object.assign(le.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);
return this.data},getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(me.prototype,{accumulate:function(a,b){var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f)c[e+f]=c[f];f=b}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&
this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d)if(c[d]!==c[d+b]){e.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){na.slerpFlat(a,b,a,b,a,c,d)},_lerp:function(a,b,c,d,e){for(var f=
1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}}});Object.assign(Se.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,
c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(ma,{Composite:Se,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new ma.Composite(a,b,c):new ma(a,b,c)},parseTrackName:function(a){var b=/^((?:[\w-]+[\/:])*)([\w-]+)?(?:\.([\w-]+)(?:\[(.+)\])?)?\.([\w-]+)(?:\[(.+)\])?$/.exec(a);if(!b)throw Error("cannot parse trackName at all: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};if(null===b.propertyName||0===b.propertyName.length)throw Error("can not parse propertyName from trackName: "+
a);return b},findNode:function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=0;c<a.bones.length;c++){var d=a.bones[c];if(d.name===b)return d}return null}(a.skeleton);if(c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g}return null};if(c=d(a.children))return c}return null}});Object.assign(ma.prototype,{_getValue_unavailable:function(){},
_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=
a[b]},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=
!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],
getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=ma.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("  can not bind to material as node does not have a material",
this);return}if(!a.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("  can not bind to objectName of node, undefined",this);return}a=a[c]}if(void 0!==f){if(void 0===
a[f]){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("  trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===
d){if(!a.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return}if(!a.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",this);return}for(c=0;c<this.node.geometry.morphTargets.length;c++)if(a.geometry.morphTargets[c].name===e){e=c;break}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e}else void 0!==f.fromArray&&void 0!==f.toArray?
(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("  trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound}});Object.assign(ma.prototype,{_getValue_unbound:ma.prototype.getValue,
_setValue_unbound:ma.prototype.setValue});Object.assign(Te.prototype,{isAnimationObjectGroup:!0,add:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,l=h.length,m=0,k=arguments.length;m!==k;++m){var p=arguments[m],n=p.uuid,q=e[n];if(void 0===q){q=c++;e[n]=q;b.push(p);for(var n=0,x=l;n!==x;++n)h[n].push(new ma(p,f[n],g[n]))}else if(q<d){var r=--d,x=b[r];e[x.uuid]=q;b[q]=x;e[n]=r;b[r]=p;n=0;for(x=l;n!==x;++n){var z=
h[n],w=z[q];z[q]=z[r];void 0===w&&(w=new ma(p,f[n],g[n]));z[r]=w}}else void 0!==b[q]&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")}this.nCachedObjects_=d},remove:function(a){for(var b=this._objects,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var l=arguments[g],m=l.uuid,k=d[m];if(void 0!==k&&k>=c){var p=c++,n=b[p];d[n.uuid]=k;b[k]=n;d[m]=p;b[p]=
l;l=0;for(m=f;l!==m;++l){var n=e[l],q=n[k];n[k]=n[p];n[p]=q}}}this.nCachedObjects_=c},uncache:function(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,l=arguments.length;h!==l;++h){var k=arguments[h].uuid,q=e[k];if(void 0!==q)if(delete e[k],q<d){var k=--d,p=b[k],n=--c,u=b[n];e[p.uuid]=q;b[q]=p;e[u.uuid]=k;b[k]=u;b.pop();p=0;for(u=g;p!==u;++p){var x=f[p],r=x[n];x[q]=x[k];x[k]=r;x.pop()}}else for(n=--c,u=b[n],e[u.uuid]=q,b[q]=u,b.pop(),
p=0,u=g;p!==u;++p)x=f[p],x[q]=x[n],x.pop()}this.nCachedObjects_=d},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,l=this.nCachedObjects_,k=Array(h.length),d=e.length;c[a]=d;f.push(a);g.push(b);e.push(k);c=l;for(d=h.length;c!==d;++c)k[c]=new ma(h[c],a,b);return k},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=
this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(Ue.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&
this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,
b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},
setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=
this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(a,b,c,d){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,
f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}},_updateWeight:function(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===
b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(2200===d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{d=2202===d;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,
d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}))}if(d&&1===(e&1))return this.time=b,c-b}return this.time=b},_setEndings:function(a,
b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}});Object.assign(Ve.prototype,wa.prototype,{_bindAction:function(a,b){var c=a._localRoot||
this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,l=this._bindingsByRootAndName,k=l[h];void 0===k&&(k={},l[h]=k);for(l=0;l!==e;++l){var q=d[l],p=q.name,n=k[p];if(void 0===n){n=f[l];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,h,p));continue}n=new me(ma.create(c,p,b&&b._propertyBindings[l].binding.parsedPath),q.ValueTypeName,q.getValueSize());++n.referenceCount;this._addInactiveBinding(n,h,p)}f[l]=n;g[l].resultBuffer=n.buffer}},
_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];
0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},
controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=
this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var b=a._clip.uuid,c=this._actionsByClip,d=c[b],e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&
this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=
this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f)break a;delete e[d]}},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=
this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new Wc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b){var c=b||this._root,d=c.uuid,e="string"===
typeof a?Aa.findByName(c,a):a,c=null!==e?e.uuid:a,f=this._actionsByClip[c],g=null;if(void 0!==f){g=f.actionByRoot[d];if(void 0!==g)return g;g=f.knownActions[0];null===e&&(e=g._clip)}if(null===e)return null;e=new Ue(this,e,b);this._bindAction(e,g);this._addInactiveAction(e,c,d);return e},existingAction:function(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?Aa.findByName(c,a):a,c=this._actionsByClip[c?c.uuid:a];return void 0!==c?c.actionByRoot[d]||null:null},stopAllAction:function(){for(var a=
this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e)a[e].reset();for(e=0;e!==d;++e)c[e].useCount=0;return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f)}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},getRoot:function(){return this._root},
uncacheClip:function(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,l=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;l._cacheIndex=h;b[h]=l;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d))}c=
this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c)a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){var c=this.existingAction(a,b);null!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}});Jd.prototype.clone=function(){return new Jd(void 0===this.value.clone?this.value:this.value.clone())};Bb.prototype=Object.create(I.prototype);Bb.prototype.constructor=Bb;Bb.prototype.isInstancedBufferGeometry=!0;Bb.prototype.addGroup=function(a,b,
c){this.groups.push({start:a,count:b,materialIndex:c})};Bb.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b)this.addAttribute(c,b[c].clone());a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}return this};Object.defineProperties(ne.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(ne.prototype,{isInterleavedBufferAttribute:!0,
setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*
this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+
3]=e;return this}});Object.defineProperty(ic.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(ic.prototype,{isInterleavedBuffer:!0,setArray:function(a){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.count=void 0!==a?a.length/this.stride:0;this.array=a},setDynamic:function(a){this.dynamic=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.dynamic=
a.dynamic;return this},copyAt:function(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=a;return this}});jc.prototype=Object.create(ic.prototype);jc.prototype.constructor=jc;jc.prototype.isInstancedInterleavedBuffer=!0;jc.prototype.copy=function(a){ic.prototype.copy.call(this,
a);this.meshPerAttribute=a.meshPerAttribute;return this};kc.prototype=Object.create(U.prototype);kc.prototype.constructor=kc;kc.prototype.isInstancedBufferAttribute=!0;kc.prototype.copy=function(a){U.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this};Object.assign(We.prototype,{linePrecision:1,set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,
.5).unproject(b).sub(this.ray.origin).normalize()):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b){var c=[];oe(a,this,c,b);c.sort(Xe);return c},intersectObjects:function(a,b){var c=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=
0,e=a.length;d<e;d++)oe(a[d],this,c,b);c.sort(Xe);return c}});Object.assign(Ye.prototype,{start:function(){this.oldTime=this.startTime=(performance||Date).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=(performance||Date).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});
Object.assign(Ze.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this},setFromVector3:function(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(N.clamp(a.y/this.radius,-1,1)));
return this}});Object.assign($e.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){this.radius=Math.sqrt(a.x*a.x+a.z*a.z);this.theta=Math.atan2(a.x,a.z);this.y=a.y;return this}});ca.prototype=Object.create(xa.prototype);ca.prototype.constructor=ca;ca.prototype.createAnimation=function(a,b,c,d){b={start:b,
end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};ca.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var l=h[1];d[l]||(d[l]={start:Infinity,end:-Infinity});h=d[l];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=l)}}for(l in d)h=
d[l],this.createAnimation(l,h.start,h.end,a);this.firstAnimation=c};ca.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};ca.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};ca.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};ca.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];
c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};ca.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};ca.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};ca.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};ca.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};ca.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=
0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()")};ca.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};ca.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,
d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+N.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*
g):this.morphTargetInfluences[d.currentFrame]=g}}};$c.prototype=Object.create(A.prototype);$c.prototype.constructor=$c;$c.prototype.isImmediateRenderObject=!0;ad.prototype=Object.create(fa.prototype);ad.prototype.constructor=ad;ad.prototype.update=function(){var a=new q,b=new q,c=new La;return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g&&g.isGeometry)for(var h=
g.vertices,l=g.faces,k=g=0,q=l.length;k<q;k++)for(var p=l[k],n=0,u=p.vertexNormals.length;n<u;n++){var x=p.vertexNormals[n];a.copy(h[p[d[n]]]).applyMatrix4(e);b.copy(x).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1}else if(g&&g.isBufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,n=g=0,u=d.count;n<u;n++)a.set(d.getX(n),d.getY(n),d.getZ(n)).applyMatrix4(e),b.set(h.getX(n),h.getY(n),h.getZ(n)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),
f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;f.needsUpdate=!0;return this}}();lc.prototype=Object.create(A.prototype);lc.prototype.constructor=lc;lc.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};lc.prototype.update=function(){var a=new q,b=new q;return function(){var c=this.light.distance?this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);
this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();mc.prototype=Object.create(fa.prototype);mc.prototype.constructor=mc;mc.prototype.getBoneList=function(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};mc.prototype.update=function(){var a=new q,b=new S,c=new S;return function(){var d=this.geometry,e=d.getAttribute("position");c.getInverse(this.root.matrixWorld);
for(var f=0,g=0;f<this.bones.length;f++){var h=this.bones[f];h.parent&&h.parent.isBone&&(b.multiplyMatrices(c,h.matrixWorld),a.setFromMatrixPosition(b),e.setXYZ(g,a.x,a.y,a.z),b.multiplyMatrices(c,h.parent.matrixWorld),a.setFromMatrixPosition(b),e.setXYZ(g+1,a.x,a.y,a.z),g+=2)}d.getAttribute("position").needsUpdate=!0}}();nc.prototype=Object.create(xa.prototype);nc.prototype.constructor=nc;nc.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};nc.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
oc.prototype=Object.create(A.prototype);oc.prototype.constructor=oc;oc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose();this.children[1].geometry.dispose();this.children[1].material.dispose()};oc.prototype.update=function(){var a=new q,b=new q;return function(){var c=this.children[0],d=this.children[1];if(this.light.target){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);var e=b.clone().sub(a);
c.lookAt(e);d.lookAt(e)}c.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);var d=.5*this.light.width,e=.5*this.light.height,c=c.geometry.getAttribute("position"),f=c.array;f[0]=d;f[1]=-e;f[2]=0;f[3]=d;f[4]=e;f[5]=0;f[6]=-d;f[7]=e;f[8]=0;f[9]=-d;f[10]=e;f[11]=0;f[12]=-d;f[13]=-e;f[14]=0;f[15]=d;f[16]=-e;f[17]=0;c.needsUpdate=!0}}();pc.prototype=Object.create(A.prototype);pc.prototype.constructor=
pc;pc.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};pc.prototype.update=function(){var a=new q,b=new J,c=new J;return function(){var d=this.children[0],e=d.geometry.getAttribute("color");b.copy(this.light.color).multiplyScalar(this.light.intensity);c.copy(this.light.groundColor).multiplyScalar(this.light.intensity);for(var f=0,g=e.count;f<g;f++){var h=f<g/2?b:c;e.setXYZ(f,h.r,h.g,h.b)}d.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());
e.needsUpdate=!0}}();bd.prototype=Object.create(fa.prototype);bd.prototype.constructor=bd;Kd.prototype=Object.create(fa.prototype);Kd.prototype.constructor=Kd;cd.prototype=Object.create(fa.prototype);cd.prototype.constructor=cd;cd.prototype.update=function(){var a=new q,b=new q,c=new La;return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=
0,k=0,m=f.length;k<m;k++){var q=f[k],p=q.normal;a.copy(g[q.a]).add(g[q.b]).add(g[q.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1}e.needsUpdate=!0;return this}}();qc.prototype=Object.create(A.prototype);qc.prototype.constructor=qc;qc.prototype.dispose=function(){var a=this.children[0],b=this.children[1];a.geometry.dispose();a.material.dispose();b.geometry.dispose();b.material.dispose()};
qc.prototype.update=function(){var a=new q,b=new q,c=new q;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);var d=this.children[0],e=this.children[1];d.lookAt(c);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);e.lookAt(c);e.scale.z=c.length()}}();dd.prototype=Object.create(fa.prototype);dd.prototype.constructor=dd;dd.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);
a=c[a];if(void 0!==a)for(g=b.getAttribute("position"),h=0,k=a.length;h<k;h++)g.setXYZ(a[h],d.x,d.y,d.z)}var b,c,d=new q,e=new oa;return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",
-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.getAttribute("position").needsUpdate=!0}}();rc.prototype=Object.create(fa.prototype);rc.prototype.constructor=rc;rc.prototype.update=function(){var a=new Ua;return function(b){b&&b.isBox3?a.copy(b):a.setFromObject(b);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=
b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere()}}}();var Ld,pe;Cb.prototype=Object.create(A.prototype);Cb.prototype.constructor=Cb;Cb.prototype.setDirection=function(){var a=new q,b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();Cb.prototype.setLength=function(a,b,c){void 0===
b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};Cb.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a)};Md.prototype=Object.create(fa.prototype);Md.prototype.constructor=Md;var Pd=new q,te=new qe,ue=new qe,ve=new qe;Ka.prototype=Object.create(Ba.prototype);Ka.prototype.constructor=Ka;Ka.prototype.getPoint=function(a){var b=this.points,
c=b.length;2>c&&console.log("duh, you need at least 2 points");a*=c-(this.closed?0:1);var d=Math.floor(a);a-=d;this.closed?d+=0<d?0:(Math.floor(Math.abs(d)/b.length)+1)*b.length:0===a&&d===c-1&&(d=c-2,a=1);var e,f,g;this.closed||0<d?e=b[(d-1)%c]:(Pd.subVectors(b[0],b[1]).add(b[0]),e=Pd);f=b[d%c];g=b[(d+1)%c];this.closed||d+2<c?b=b[(d+2)%c]:(Pd.subVectors(b[c-1],b[c-2]).add(b[c-1]),b=Pd);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var h="chordal"===this.type?.5:.25,c=Math.pow(e.distanceToSquared(f),
h),d=Math.pow(f.distanceToSquared(g),h),h=Math.pow(g.distanceToSquared(b),h);1E-4>d&&(d=1);1E-4>c&&(c=d);1E-4>h&&(h=d);te.initNonuniformCatmullRom(e.x,f.x,g.x,b.x,c,d,h);ue.initNonuniformCatmullRom(e.y,f.y,g.y,b.y,c,d,h);ve.initNonuniformCatmullRom(e.z,f.z,g.z,b.z,c,d,h)}else"catmullrom"===this.type&&(c=void 0!==this.tension?this.tension:.5,te.initCatmullRom(e.x,f.x,g.x,b.x,c),ue.initCatmullRom(e.y,f.y,g.y,b.y,c),ve.initCatmullRom(e.z,f.z,g.z,b.z,c));return new q(te.calc(a),ue.calc(a),ve.calc(a))};
ed.prototype=Object.create(Ba.prototype);ed.prototype.constructor=ed;ed.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2,e=this.v3;return new q(yb(a,b.x,c.x,d.x,e.x),yb(a,b.y,c.y,d.y,e.y),yb(a,b.z,c.z,d.z,e.z))};fd.prototype=Object.create(Ba.prototype);fd.prototype.constructor=fd;fd.prototype.getPoint=function(a){var b=this.v0,c=this.v1,d=this.v2;return new q(xb(a,b.x,c.x,d.x),xb(a,b.y,c.y,d.y),xb(a,b.z,c.z,d.z))};gd.prototype=Object.create(Ba.prototype);gd.prototype.constructor=gd;
gd.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=new q;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b};Nd.prototype=Object.create(Xa.prototype);Nd.prototype.constructor=Nd;Ba.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(Ba.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};af.prototype=Object.create(Ka.prototype);bf.prototype=Object.create(Ka.prototype);re.prototype=Object.create(Ka.prototype);
Object.assign(re.prototype,{initFromArray:function(a){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(a){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(a){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});bd.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Object.assign(id.prototype,
{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});Object.assign(Ua.prototype,
{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)},
size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");return this.getSize(a)}});Gb.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};N.random16=function(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");return Math.random()};Object.assign(La.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
return this.toArray(a,b)},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToBuffer:function(a,b,c){console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
return this.applyToBufferAttribute(a)},applyToVector3Array:function(a,b,c){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(S.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){var a;
return function(){void 0===a&&(a=new q);console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return a.setFromMatrixColumn(this,3)}}(),setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},
rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBuffer:function(a,b,c){console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");return this.applyToBufferAttribute(a)},applyToVector3Array:function(a,b,c){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
return this.makePerspective(a,b,d,c,e,f)}});ua.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};na.prototype.multiplyVector3=function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(gb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)}});Object.assign(Ab.prototype,{extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new ya(this,a)},
makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new Xb(this,a)}});Object.assign(D.prototype,{fromAttribute:function(a,b,c){console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});Object.assign(q.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},fromAttribute:function(a,b,c){console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});Object.assign(ga.prototype,{fromAttribute:function(a,
b,c){console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)}});T.prototype.computeTangents=function(){console.warn("THREE.Geometry: .computeTangents() has been removed.")};Object.assign(A.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},
translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)}});Object.defineProperties(A.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.defineProperties(Cc.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels}}});Ea.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(ha.prototype,
{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},
shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(U.prototype,
{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");return this.array.length}}});Object.assign(I.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,
b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")}});Object.defineProperties(I.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
return this.groups}}});Object.defineProperties(Jd.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");return this}}});Object.defineProperties(X.prototype,{wrapAround:{get:function(){console.warn("THREE."+this.type+": .wrapAround has been removed.")},set:function(){console.warn("THREE."+this.type+
": .wrapAround has been removed.")}},wrapRGB:{get:function(){console.warn("THREE."+this.type+": .wrapRGB has been removed.");return new J}}});Object.defineProperties(ra.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Ga.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
return this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(Yd.prototype,{supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc")},
supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},
addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")}});Object.defineProperties(Yd.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
this.shadowMap.type=a}},shadowMapCullFace:{get:function(){return this.shadowMap.cullFace},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");this.shadowMap.cullFace=a}}});Object.defineProperties(Ge.prototype,{cullFace:{get:function(){return this.renderReverseSided?2:1},set:function(a){a=1!==a;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+a+".");this.renderReverseSided=a}}});Object.defineProperties(Db.prototype,
{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
return this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
return this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},
set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});hc.prototype.load=function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new ge).load(a,function(a){b.setBuffer(a)});return this};
le.prototype.getData=function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};k.WebGLRenderTargetCube=Eb;k.WebGLRenderTarget=Db;k.WebGLRenderer=Yd;k.ShaderLib=bb;k.UniformsLib=V;k.UniformsUtils=Ia;k.ShaderChunk=Z;k.FogExp2=Jb;k.Fog=Kb;k.Scene=ld;k.LensFlare=Zd;k.Sprite=Bc;k.LOD=Cc;k.SkinnedMesh=od;k.Skeleton=md;k.Bone=nd;k.Mesh=xa;k.LineSegments=fa;k.LineLoop=pd;k.Line=Na;k.Points=Lb;k.Group=Dc;k.VideoTexture=qd;k.DataTexture=db;k.CompressedTexture=
Mb;k.CubeTexture=Za;k.CanvasTexture=rd;k.DepthTexture=Ec;k.Texture=ea;k.CompressedTextureLoader=Ne;k.DataTextureLoader=ae;k.CubeTextureLoader=be;k.TextureLoader=td;k.ObjectLoader=Oe;k.MaterialLoader=Hd;k.BufferGeometryLoader=ce;k.DefaultLoadingManager=pa;k.LoadingManager=$d;k.JSONLoader=de;k.ImageLoader=Vc;k.FontLoader=Qe;k.FileLoader=sa;k.Loader=ec;k.Cache=hd;k.AudioLoader=ge;k.SpotLightShadow=vd;k.SpotLight=wd;k.PointLight=xd;k.RectAreaLight=he;k.HemisphereLight=ud;k.DirectionalLightShadow=yd;k.DirectionalLight=
zd;k.AmbientLight=Ad;k.LightShadow=ub;k.Light=ha;k.StereoCamera=Re;k.PerspectiveCamera=Ea;k.OrthographicCamera=Ib;k.CubeCamera=Id;k.Camera=oa;k.AudioListener=ie;k.PositionalAudio=ke;k.AudioContext=je;k.AudioAnalyser=le;k.Audio=hc;k.VectorKeyframeTrack=cc;k.StringKeyframeTrack=Ed;k.QuaternionKeyframeTrack=Xc;k.NumberKeyframeTrack=dc;k.ColorKeyframeTrack=Gd;k.BooleanKeyframeTrack=Fd;k.PropertyMixer=me;k.PropertyBinding=ma;k.KeyframeTrack=wb;k.AnimationUtils=ta;k.AnimationObjectGroup=Te;k.AnimationMixer=
Ve;k.AnimationClip=Aa;k.Uniform=Jd;k.InstancedBufferGeometry=Bb;k.BufferGeometry=I;k.GeometryIdCount=function(){return Vd++};k.Geometry=T;k.InterleavedBufferAttribute=ne;k.InstancedInterleavedBuffer=jc;k.InterleavedBuffer=ic;k.InstancedBufferAttribute=kc;k.Face3=qa;k.Object3D=A;k.Raycaster=We;k.Layers=Td;k.EventDispatcher=wa;k.Clock=Ye;k.QuaternionLinearInterpolant=Dd;k.LinearInterpolant=Wc;k.DiscreteInterpolant=Cd;k.CubicInterpolant=Bd;k.Interpolant=la;k.Triangle=Va;k.Math=N;k.Spherical=Ze;k.Cylindrical=
$e;k.Plane=ua;k.Frustum=jd;k.Sphere=Pa;k.Ray=gb;k.Matrix4=S;k.Matrix3=La;k.Box3=Ua;k.Box2=id;k.Line3=Gb;k.Euler=cb;k.Vector4=ga;k.Vector3=q;k.Vector2=D;k.Quaternion=na;k.Color=J;k.MorphBlendMesh=ca;k.ImmediateRenderObject=$c;k.VertexNormalsHelper=ad;k.SpotLightHelper=lc;k.SkeletonHelper=mc;k.PointLightHelper=nc;k.RectAreaLightHelper=oc;k.HemisphereLightHelper=pc;k.GridHelper=bd;k.PolarGridHelper=Kd;k.FaceNormalsHelper=cd;k.DirectionalLightHelper=qc;k.CameraHelper=dd;k.BoxHelper=rc;k.ArrowHelper=Cb;
k.AxisHelper=Md;k.CatmullRomCurve3=Ka;k.CubicBezierCurve3=ed;k.QuadraticBezierCurve3=fd;k.LineCurve3=gd;k.ArcCurve=Nd;k.EllipseCurve=Xa;k.SplineCurve=zb;k.CubicBezierCurve=fc;k.QuadraticBezierCurve=gc;k.LineCurve=Ta;k.Shape=Ab;k.Path=Zc;k.ShapePath=ee;k.Font=fe;k.CurvePath=Yc;k.Curve=Ba;k.ShapeUtils=za;k.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new Dc,d=0,e=b.length;d<e;d++)c.add(new xa(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},
attach:function(a,b,c){var d=new S;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};k.WireframeGeometry=Nb;k.ParametricGeometry=Fc;k.ParametricBufferGeometry=Ob;k.TetrahedronGeometry=Hc;k.TetrahedronBufferGeometry=Pb;k.OctahedronGeometry=Ic;k.OctahedronBufferGeometry=mb;k.IcosahedronGeometry=Jc;k.IcosahedronBufferGeometry=Qb;k.DodecahedronGeometry=Kc;k.DodecahedronBufferGeometry=Rb;k.PolyhedronGeometry=Gc;k.PolyhedronBufferGeometry=va;k.TubeGeometry=Lc;k.TubeBufferGeometry=Sb;k.TorusKnotGeometry=
Mc;k.TorusKnotBufferGeometry=Tb;k.TorusGeometry=Nc;k.TorusBufferGeometry=Ub;k.TextGeometry=Oc;k.SphereGeometry=Pc;k.SphereBufferGeometry=nb;k.RingGeometry=Qc;k.RingBufferGeometry=Vb;k.PlaneGeometry=yc;k.PlaneBufferGeometry=kb;k.LatheGeometry=Rc;k.LatheBufferGeometry=Wb;k.ShapeGeometry=Xb;k.ShapeBufferGeometry=Yb;k.ExtrudeGeometry=ya;k.EdgesGeometry=Zb;k.ConeGeometry=Sc;k.ConeBufferGeometry=Tc;k.CylinderGeometry=ob;k.CylinderBufferGeometry=Wa;k.CircleGeometry=Uc;k.CircleBufferGeometry=$b;k.BoxGeometry=
Hb;k.BoxBufferGeometry=jb;k.ShadowMaterial=ac;k.SpriteMaterial=lb;k.RawShaderMaterial=bc;k.ShaderMaterial=Ga;k.PointsMaterial=Ha;k.MultiMaterial=sd;k.MeshPhysicalMaterial=pb;k.MeshStandardMaterial=Qa;k.MeshPhongMaterial=ra;k.MeshToonMaterial=qb;k.MeshNormalMaterial=rb;k.MeshLambertMaterial=sb;k.MeshDepthMaterial=ab;k.MeshBasicMaterial=Ja;k.LineDashedMaterial=tb;k.LineBasicMaterial=ka;k.Material=X;k.Float64BufferAttribute=xc;k.Float32BufferAttribute=z;k.Uint32BufferAttribute=ib;k.Int32BufferAttribute=
wc;k.Uint16BufferAttribute=hb;k.Int16BufferAttribute=vc;k.Uint8ClampedBufferAttribute=uc;k.Uint8BufferAttribute=tc;k.Int8BufferAttribute=sc;k.BufferAttribute=U;k.REVISION="85dev";k.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2};k.CullFaceNone=0;k.CullFaceBack=1;k.CullFaceFront=2;k.CullFaceFrontBack=3;k.FrontFaceDirectionCW=0;k.FrontFaceDirectionCCW=1;k.BasicShadowMap=0;k.PCFShadowMap=1;k.PCFSoftShadowMap=2;k.FrontSide=0;k.BackSide=1;k.DoubleSide=2;k.FlatShading=1;k.SmoothShading=2;k.NoColors=0;k.FaceColors=1;k.VertexColors=
2;k.NoBlending=0;k.NormalBlending=1;k.AdditiveBlending=2;k.SubtractiveBlending=3;k.MultiplyBlending=4;k.CustomBlending=5;k.AddEquation=100;k.SubtractEquation=101;k.ReverseSubtractEquation=102;k.MinEquation=103;k.MaxEquation=104;k.ZeroFactor=200;k.OneFactor=201;k.SrcColorFactor=202;k.OneMinusSrcColorFactor=203;k.SrcAlphaFactor=204;k.OneMinusSrcAlphaFactor=205;k.DstAlphaFactor=206;k.OneMinusDstAlphaFactor=207;k.DstColorFactor=208;k.OneMinusDstColorFactor=209;k.SrcAlphaSaturateFactor=210;k.NeverDepth=
0;k.AlwaysDepth=1;k.LessDepth=2;k.LessEqualDepth=3;k.EqualDepth=4;k.GreaterEqualDepth=5;k.GreaterDepth=6;k.NotEqualDepth=7;k.MultiplyOperation=0;k.MixOperation=1;k.AddOperation=2;k.NoToneMapping=0;k.LinearToneMapping=1;k.ReinhardToneMapping=2;k.Uncharted2ToneMapping=3;k.CineonToneMapping=4;k.UVMapping=300;k.CubeReflectionMapping=301;k.CubeRefractionMapping=302;k.EquirectangularReflectionMapping=303;k.EquirectangularRefractionMapping=304;k.SphericalReflectionMapping=305;k.CubeUVReflectionMapping=306;
k.CubeUVRefractionMapping=307;k.RepeatWrapping=1E3;k.ClampToEdgeWrapping=1001;k.MirroredRepeatWrapping=1002;k.NearestFilter=1003;k.NearestMipMapNearestFilter=1004;k.NearestMipMapLinearFilter=1005;k.LinearFilter=1006;k.LinearMipMapNearestFilter=1007;k.LinearMipMapLinearFilter=1008;k.UnsignedByteType=1009;k.ByteType=1010;k.ShortType=1011;k.UnsignedShortType=1012;k.IntType=1013;k.UnsignedIntType=1014;k.FloatType=1015;k.HalfFloatType=1016;k.UnsignedShort4444Type=1017;k.UnsignedShort5551Type=1018;k.UnsignedShort565Type=
1019;k.UnsignedInt248Type=1020;k.AlphaFormat=1021;k.RGBFormat=1022;k.RGBAFormat=1023;k.LuminanceFormat=1024;k.LuminanceAlphaFormat=1025;k.RGBEFormat=1023;k.DepthFormat=1026;k.DepthStencilFormat=1027;k.RGB_S3TC_DXT1_Format=2001;k.RGBA_S3TC_DXT1_Format=2002;k.RGBA_S3TC_DXT3_Format=2003;k.RGBA_S3TC_DXT5_Format=2004;k.RGB_PVRTC_4BPPV1_Format=2100;k.RGB_PVRTC_2BPPV1_Format=2101;k.RGBA_PVRTC_4BPPV1_Format=2102;k.RGBA_PVRTC_2BPPV1_Format=2103;k.RGB_ETC1_Format=2151;k.LoopOnce=2200;k.LoopRepeat=2201;k.LoopPingPong=
2202;k.InterpolateDiscrete=2300;k.InterpolateLinear=2301;k.InterpolateSmooth=2302;k.ZeroCurvatureEnding=2400;k.ZeroSlopeEnding=2401;k.WrapAroundEnding=2402;k.TrianglesDrawMode=0;k.TriangleStripDrawMode=1;k.TriangleFanDrawMode=2;k.LinearEncoding=3E3;k.sRGBEncoding=3001;k.GammaEncoding=3007;k.RGBEEncoding=3002;k.LogLuvEncoding=3003;k.RGBM7Encoding=3004;k.RGBM16Encoding=3005;k.RGBDEncoding=3006;k.BasicDepthPacking=3200;k.RGBADepthPacking=3201;k.CubeGeometry=Hb;k.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
return new qa(a,b,c,e,f,g)};k.LineStrip=0;k.LinePieces=1;k.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been renamed to THREE.MultiMaterial.");return new sd(a)};k.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Lb(a,b)};k.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Bc(a)};k.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
return new Lb(a,b)};k.PointCloudMaterial=function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Ha(a)};k.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new Ha(a)};k.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Ha(a)};k.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
return new q(a,b,c)};k.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return(new U(a,b)).setDynamic(!0)};k.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new sc(a,b)};k.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new tc(a,
b)};k.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new uc(a,b)};k.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new vc(a,b)};k.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new hb(a,b)};k.Int32Attribute=
function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");return new wc(a,b)};k.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");return new ib(a,b)};k.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");return new z(a,b)};k.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
return new xc(a,b)};k.ClosedSplineCurve3=af;k.SplineCurve3=bf;k.Spline=re;k.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");return new rc(a,b)};k.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new fa(new Zb(a.geometry),new ka({color:void 0!==b?b:16777215}))};k.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
return new fa(new Nb(a.geometry),new ka({color:void 0!==b?b:16777215}))};k.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");return new sa(a)};k.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new ae(a)};k.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
var d;b.isMesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};k.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new td;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},
loadTextureCube:function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new be;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")}};
k.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b)};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b)};this.pickingRay=function(){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")}};k.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");
this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){}};Object.defineProperty(k,"__esModule",{value:!0})});

define('deviceInformator',[],function(){

	function _isAndroid() { return navigator.userAgent.match(/Android/i) != null; }
	function _isBlackBerry() { return navigator.userAgent.match(/BlackBerry/i) != null; }
	function _isIOS() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) != null; }
	function _isOpera() {  return navigator.userAgent.match(/Opera Mini/i) != null; }
	function _isWindowsPhone() {  return navigator.userAgent.match(/IEMobile/i) != null; }

	return {
	    isMobile: function() {
	        return _isAndroid() || _isBlackBerry() || _isIOS() || _isOpera() || _isWindowsPhone();
	    }
	}

});
define('triangle',['threejs'], function(THREE){

	var Triangle = function(vertA, vertB, vertC) {

		var self = this;

		var _geom = new THREE.Geometry();

		_geom.vertices.push(vertA);
		_geom.vertices.push(vertB);
		_geom.vertices.push(vertC);

		_geom.faces.push( new THREE.Face3( 0, 1, 2 ) );
		_geom.computeFaceNormals();

		var _mesh = new THREE.Mesh( _geom, new THREE.MeshNormalMaterial() );

		self.getMesh = function() {
			return _mesh;
		}
	}

	return Triangle;
});

define('quad',['threejs', 'triangle'], function(THREE, Triangle) {

	var Quad = function (id, scene, position, normal, sideLength) {

		var self = this;
		var _id = id;
		var _plane = null;
		var _geometry = null;
		var _material = null;
		var _texture = null;
		var _initialPosition = null;
		var _triangle = null;

		self.initialize = function() {

			_initialPosition = position; 
			_geometry = new THREE.PlaneGeometry( sideLength, sideLength, 1, 1 );
			_material = new THREE.MeshBasicMaterial({
			 										  side: THREE.DoubleSide,
			 										  color: "#999999",
			 										  transparent: true,
			 										  opacity: 0.75 
			 										 });

			_plane = new THREE.Mesh( _geometry, _material );
			_plane.name = _id;
			_plane.position.set(position.x, position.y, position.z);
			_plane.lookAt(position.clone().add(normal));
		}

		self.initialize();

		self.getID = function() {
			return _id;
		}

		self.getMesh = function() { return _plane; }
		self.getPosition = function() { return _plane.position; }
		self.getRotation = function() { return _plane.rotation; }

		self.setMaterial = function(someMaterial) {
			_plane.material = someMaterial;
		}

		self.setMaterialColor = function(someColor) {
			_plane.material.color.setHex(someColor);
		}

		self.pushForward = function(howMuch) {
			var newPosition = _initialPosition.clone().addScaledVector(normal, howMuch);
			_plane.position.set(newPosition.x, newPosition.y, newPosition.z);
		}

		self.update = function(){
			// do nothing for now
		}

		self.setLookAt = function(newLookAt) {
			_plane.lookAt(newLookAt);
		}
	}

	return Quad;
});
define('imageQuad',['threejs', 'quad'], function(THREE, Quad) {

	var ImageQuad = function(id, scene, position, normal, sideLength, imageElement){
	
		var _imageElement = null;
		var _texture = null;
		var _quad = null;

		var self = this;

		self.initialize = function() {

			_quad = new Quad(id, scene, position, normal, sideLength);

			_imageElement = imageElement;

			_texture = new THREE.Texture(_imageElement);
	        _texture.minFilter = THREE.LinearFilter;
	        _texture.magFilter = THREE.LinearFilter;
	        _texture.format = THREE.RGBFormat;
	        _texture.wrapS = THREE.ClampToEdgeWrapping;
	        _texture.wrapT = THREE.ClampToEdgeWrapping;

	        _material = new THREE.MeshBasicMaterial({
	        	map: _texture,
	        	overdraw: true,
	        	transparent: true,
	        	opacity: 0.9,
	        	side: THREE.DoubleSide
	        });

	        _quad.setMaterial(_material);
		}

		self.initialize();

		self.getID = function() {
			return _quad.getID();
		}

		self.getMesh = function() { return _quad.getMesh(); }

        self.update = function() {
			_texture.needsUpdate = true;
		}

		self.pushForward = function(howMuch) {
			_quad.pushForward(howMuch);
		}

		self.setLookAt = function(newLookAt) {
			_quad.setLookAt(newLookAt);
		}

	}
	
	return ImageQuad;
});
define('videoQuad',['threejs', 'quad'], function(THREE, Quad) {

	var VideoQuad = function(id, scene, position, normal, sideLength, videoElement){
	
		var _videoElement = null;
		var _texture = null;
		var _quad = null;

		var self = this;

		self.initialize = function() {

			_quad = new Quad(id, scene, position, normal, sideLength);

			_videoElement = videoElement;

			_texture = new THREE.Texture(_videoElement);
	        _texture.minFilter = THREE.NearestFilter;
	        _texture.magFilter = THREE.NearestFilter;
	        _texture.format = THREE.RGBFormat;
	        _texture.wrapS = THREE.ClampToEdgeWrapping;
	        _texture.wrapT = THREE.ClampToEdgeWrapping;

	        _material = new THREE.MeshBasicMaterial({
	        	map: _texture,
	        	overdraw: true,
	        	transparent: true,
	        	opacity: 0.9,
	        	side: THREE.DoubleSide
	        });

	        _quad.setMaterial(_material);
		}

		self.initialize();

		self.getID = function() {
			return _quad.getID();
		}

		self.getMesh = function() { return _quad.getMesh(); }

		self.pushForward = function(howMuch) {
			_quad.pushForward(howMuch);
		}

		self.update = function() {
			_texture.needsUpdate = true;
		}

		self.getVideoElementID = function() {
			return videoElement.id;
		}

		self.setLookAt = function(newLookAt) {
			_quad.setLookAt(newLookAt);
		}
	}
	
	return VideoQuad;
});
define('threejsCSS3D',['threejs'], function(THREE) {

	THREE.CSS3DObject = function ( element ) {

	THREE.Object3D.call( this );

		this.element = element;
		this.element.style.position = 'absolute';

		this.addEventListener( 'removed', function ( event ) {

			if ( this.element.parentNode !== null ) {

				this.element.parentNode.removeChild( this.element );

			}

		} );

	};

	THREE.CSS3DObject.prototype = Object.create( THREE.Object3D.prototype );
	THREE.CSS3DObject.prototype.constructor = THREE.CSS3DObject;

	THREE.CSS3DSprite = function ( element ) {

		THREE.CSS3DObject.call( this, element );

	};

	THREE.CSS3DSprite.prototype = Object.create( THREE.CSS3DObject.prototype );
	THREE.CSS3DSprite.prototype.constructor = THREE.CSS3DSprite;

	//

	THREE.CSS3DRenderer = function () {

		console.log( 'THREE.CSS3DRenderer', THREE.REVISION );

		var _width, _height;
		var _widthHalf, _heightHalf;

		var matrix = new THREE.Matrix4();

		var cache = {
			camera: { fov: 0, style: '' },
			objects: {}
		};

		var domElement = document.createElement( 'div' );
		domElement.style.overflow = 'hidden';

		domElement.style.WebkitTransformStyle = 'preserve-3d';
		domElement.style.MozTransformStyle = 'preserve-3d';
		domElement.style.oTransformStyle = 'preserve-3d';
		domElement.style.transformStyle = 'preserve-3d';

		this.domElement = domElement;

		var cameraElement = document.createElement( 'div' );

		cameraElement.style.WebkitTransformStyle = 'preserve-3d';
		cameraElement.style.MozTransformStyle = 'preserve-3d';
		cameraElement.style.oTransformStyle = 'preserve-3d';
		cameraElement.style.transformStyle = 'preserve-3d';

		domElement.appendChild( cameraElement );

		this.setClearColor = function () {};

		this.getSize = function() {

			return {
				width: _width,
				height: _height
			};

		};

		this.setSize = function ( width, height ) {

			_width = width;
			_height = height;

			_widthHalf = _width / 2;
			_heightHalf = _height / 2;

			domElement.style.width = width + 'px';
			domElement.style.height = height + 'px';

			cameraElement.style.width = width + 'px';
			cameraElement.style.height = height + 'px';

		};

		var epsilon = function ( value ) {

			return Math.abs( value ) < Number.EPSILON ? 0 : value;

		};

		var getCameraCSSMatrix = function ( matrix ) {

			var elements = matrix.elements;

			return 'matrix3d(' +
				epsilon( elements[ 0 ] ) + ',' +
				epsilon( - elements[ 1 ] ) + ',' +
				epsilon( elements[ 2 ] ) + ',' +
				epsilon( elements[ 3 ] ) + ',' +
				epsilon( elements[ 4 ] ) + ',' +
				epsilon( - elements[ 5 ] ) + ',' +
				epsilon( elements[ 6 ] ) + ',' +
				epsilon( elements[ 7 ] ) + ',' +
				epsilon( elements[ 8 ] ) + ',' +
				epsilon( - elements[ 9 ] ) + ',' +
				epsilon( elements[ 10 ] ) + ',' +
				epsilon( elements[ 11 ] ) + ',' +
				epsilon( elements[ 12 ] ) + ',' +
				epsilon( - elements[ 13 ] ) + ',' +
				epsilon( elements[ 14 ] ) + ',' +
				epsilon( elements[ 15 ] ) +
			')';

		};

		var getObjectCSSMatrix = function ( matrix ) {

			var elements = matrix.elements;

			return 'translate3d(-50%,-50%,0) matrix3d(' +
				epsilon( elements[ 0 ] ) + ',' +
				epsilon( elements[ 1 ] ) + ',' +
				epsilon( elements[ 2 ] ) + ',' +
				epsilon( elements[ 3 ] ) + ',' +
				epsilon( - elements[ 4 ] ) + ',' +
				epsilon( - elements[ 5 ] ) + ',' +
				epsilon( - elements[ 6 ] ) + ',' +
				epsilon( - elements[ 7 ] ) + ',' +
				epsilon( elements[ 8 ] ) + ',' +
				epsilon( elements[ 9 ] ) + ',' +
				epsilon( elements[ 10 ] ) + ',' +
				epsilon( elements[ 11 ] ) + ',' +
				epsilon( elements[ 12 ] ) + ',' +
				epsilon( elements[ 13 ] ) + ',' +
				epsilon( elements[ 14 ] ) + ',' +
				epsilon( elements[ 15 ] ) +
			')';

		};

		var renderObject = function ( object, camera ) {

			if ( object instanceof THREE.CSS3DObject ) {

				var style;

				if ( object instanceof THREE.CSS3DSprite ) {

					// http://swiftcoder.wordpress.com/2008/11/25/constructing-a-billboard-matrix/

					matrix.copy( camera.matrixWorldInverse );
					matrix.transpose();
					matrix.copyPosition( object.matrixWorld );
					matrix.scale( object.scale );

					matrix.elements[ 3 ] = 0;
					matrix.elements[ 7 ] = 0;
					matrix.elements[ 11 ] = 0;
					matrix.elements[ 15 ] = 1;

					style = getObjectCSSMatrix( matrix );

				} else {

					style = getObjectCSSMatrix( object.matrixWorld );

				}

				var element = object.element;
				var cachedStyle = cache.objects[ object.id ];

				if ( cachedStyle === undefined || cachedStyle !== style ) {

					element.style.WebkitTransform = style;
					element.style.MozTransform = style;
					element.style.oTransform = style;
					element.style.transform = style;

					cache.objects[ object.id ] = style;

				}

				if ( element.parentNode !== cameraElement ) {

					cameraElement.appendChild( element );

				}

			}

			for ( var i = 0, l = object.children.length; i < l; i ++ ) {

				renderObject( object.children[ i ], camera );

			}

		};

		this.render = function ( scene, camera ) {

			var fov = 0.5 / Math.tan( THREE.Math.degToRad( camera.getEffectiveFOV() * 0.5 ) ) * _height;

			if ( cache.camera.fov !== fov ) {

				domElement.style.WebkitPerspective = fov + "px";
				domElement.style.MozPerspective = fov + "px";
				domElement.style.oPerspective = fov + "px";
				domElement.style.perspective = fov + "px";

				cache.camera.fov = fov;

			}

			scene.updateMatrixWorld();

			if ( camera.parent === null ) camera.updateMatrixWorld();

			camera.matrixWorldInverse.getInverse( camera.matrixWorld );

			var style = "translate3d(0,0," + fov + "px)" + getCameraCSSMatrix( camera.matrixWorldInverse ) +
				" translate3d(" + _widthHalf + "px," + _heightHalf + "px, 0)";

			if ( cache.camera.style !== style ) {

				cameraElement.style.WebkitTransform = style;
				cameraElement.style.MozTransform = style;
				cameraElement.style.oTransform = style;
				cameraElement.style.transform = style;

				cache.camera.style = style;

			}

			renderObject( scene, camera );

		};

	};

	return {
		Object3D: THREE.CSS3DObject,
		CSS3DSprite: THREE.CSS3DSprite,
		CSS3DRenderer: THREE.CSS3DRenderer

	}
});


define('htmlQuad',['threejs', 'quad', 'threejsCSS3D'], function(THREE, Quad, THREECSS3D) {


	
	var HTMLQuad = function(id, scene, cssScene, position, normal, sideLength, htmlElement){
		
		var _cssObject = null;
		var _otherCssObject = null;
		var _quad = null;
		var _otherQuad = null;

		var self = this;

		function _updateCSSObjectPositionAndRotation(){
			_cssObject.position.copy(_quad.getMesh().getWorldPosition());
			_cssObject.rotation.copy(_quad.getMesh().getWorldRotation());
			_cssObject.scale.copy(_quad.getMesh().getWorldScale());

			_otherCssObject.position.copy(_otherQuad.getMesh().getWorldPosition());
			_otherCssObject.rotation.copy(_otherQuad.getMesh().getWorldRotation());
			_otherCssObject.scale.copy(_otherQuad.getMesh().getWorldScale());
		}

		self.initialize = function() {

			 _otherQuad = new Quad(id, scene, position, normal, sideLength);
			 _quad = new Quad(id + "1", scene, position.clone().addScaledVector(normal, -1), normal.clone().negate(), sideLength);

			_cssObject = new THREECSS3D.Object3D(htmlElement);
			_otherCssObject = new THREECSS3D.Object3D(htmlElement);

			_updateCSSObjectPositionAndRotation();
			cssScene.add(_cssObject);
			cssScene.add(_otherCssObject);

			var material   = new THREE.MeshBasicMaterial();
			material.color.set('black')
			material.opacity   = 0;
			material.blending  = THREE.NoBlending;
			_quad.setMaterial(material);
			_otherQuad.setMaterial(material);
		}

		self.initialize();

		self.getID = function() {
			return _quad.getID();
		}

		self.getMesh = function() { return _quad.getMesh(); }
		self.getOtherMesh = function() { return _otherQuad.getMesh(); }

        self.update = function() {
			_updateCSSObjectPositionAndRotation();
		}

		self.pushForward = function(howMuch) {
			_quad.pushForward(-howMuch);
			_otherQuad.pushForward(howMuch);
			_updateCSSObjectPositionAndRotation();
		}

		self.setLookAt = function(newLookAt) {
			_quad.setLookAt(newLookAt);
		}
	}

	return HTMLQuad;
});
define('cube',['threejs', 'quad', 'videoQuad', 'imageQuad', 'htmlQuad'], function(THREE, Quad, VideoQuad, ImageQuad, HTMLQuad) {

	function Cube(scene, cssScene, position, frontVec, upVec, size, sidesInformation) {

		var self = this;

		var _rightVec = new THREE.Vector3().crossVectors(frontVec, upVec);
		var _rearVec = frontVec.clone().negate();
		var _leftVec = _rightVec.clone().negate();
		var _downVec = upVec.clone().negate();

		var _quads = {};
		var _group;

		var _hardcodedSideInformation = {
			"FRONT" : { position: position.clone().addScaledVector(frontVec, size / 2), normal: frontVec },
			"REAR" : { position: position.clone().addScaledVector(_rearVec, size / 2), normal: _rearVec },
			"RIGHT": { position: position.clone().addScaledVector(_rightVec, size / 2), normal: _rightVec },
			"LEFT" : { position: position.clone().addScaledVector(_leftVec, size / 2), normal: _leftVec },
			"TOP" : {position: position.clone().addScaledVector(upVec, size / 2), normal: upVec },
			"BOTTOM" : { position: position.clone().addScaledVector(_downVec, size / 2), normal: _downVec }
		};

		function _validateSideAndItsInformation(side, sideInformation){

			if (sideInformation.quadType == "EMPTY")
				return;
			if (sideInformation.quadType == "VIDEO") {
				if (!sideInformation.hasOwnProperty("videoElement"))
					throw "Cube side that has quadType \"VIDEO\" must contain property \"videoElement\"";
				return;
			}
			if (sideInformation.quadType == "IMAGE"){
				if (!sideInformation.hasOwnProperty("imageElement"))
					throw "Cube side that has quadType \"IMAGE\" must contain property \"imageElement\"";
				return;
			}
			if (sideInformation.quadType = "HTML"){
				if (!sideInformation.hasOwnProperty("htmlElement"))
					throw "Cube side that has quad type \"HTML\" must contatin property \"htmlElement\"";
				return;
			}
		}
		function _createCubeSide(side, sideInformation) {

			_validateSideAndItsInformation(side, sideInformation);

			switch (sidesInformation[side].quadType){
				case "EMPTY" : return new Quad(side, scene, _hardcodedSideInformation[side].position, _hardcodedSideInformation[side].normal, size);
				case "VIDEO" : return new VideoQuad(side, scene, _hardcodedSideInformation[side].position, _hardcodedSideInformation[side].normal, size, sideInformation.videoElement);
				case "IMAGE" : return new ImageQuad(side, scene, _hardcodedSideInformation[side].position, _hardcodedSideInformation[side].normal, size, sideInformation.imageElement);
				case "HTML"	 : return new HTMLQuad(side, scene, cssScene, _hardcodedSideInformation[side].position, _hardcodedSideInformation[side].normal, size, sideInformation.htmlElement);
			}
		}

		function _initialize() {

			_group = new THREE.Object3D();
			_group.name = "CubeGroup";
			_quads["FRONT"] = _createCubeSide("FRONT", sidesInformation["FRONT"]);
			_quads["REAR"] = _createCubeSide("REAR", sidesInformation["REAR"]);
			_quads["RIGHT"] = _createCubeSide("RIGHT", sidesInformation["RIGHT"]);
			_quads["LEFT"] = _createCubeSide("LEFT", sidesInformation["LEFT"]);
			_quads["TOP"] = _createCubeSide("TOP", sidesInformation["TOP"]);
			_quads["BOTTOM"] = _createCubeSide("BOTTOM", sidesInformation["BOTTOM"]);

			Object.keys(_quads).forEach(function(side) {
				_group.add(_quads[side].getMesh());

				if (_quads[side].getOtherMesh)
				_group.add(_quads[side].getOtherMesh());
			});

			scene.add(_group);
		}

		_initialize();

	    self.expand = function(howMuch) {
	    	Object.keys(_quads).forEach(function(side) {
	    		_quads[side].pushForward(howMuch);
	    	});
	    }

	    self.rotateX = function(howMuch) {
	    	_group.rotation.y += howMuch;
	    }

	    self.rotateY = function(howMuch) {
	    	_group.rotation.x += howMuch;
	    }

		self.setRotationX = function(howMuch) {
	    	_group.rotation.y = howMuch;
	    }

	    self.setRotationY = function(howMuch) {
	    	_group.rotation.x = howMuch;
	    }	    

	    self.update = function(deltaTime)  {
	    	Object.keys(_quads).forEach(function(side) {
	    		_quads[side].update();
	    	});
	    }

	    self.getQuadAtSide = function(side) {
	    	return _quads[side];
	    }

	    self.getQuadMeshesArray = function() {
	    	return Object.keys(_quads).map(function(side) {
	    		return _quads[side].getMesh();
	    	});
	    }
	}


	return Cube;
});
define('cubeRotator',['threejs'], function(THREE) {

	var CubeRotator = function(cube){

		var self = this;
		var _cube = cube;
		var _lastRotation = new THREE.Vector2();
		var _lastSpeed = new THREE.Vector2();

		var _initialVelocity = new THREE.Vector2();
		var _dragAcceleration = new THREE.Vector2();
		var _forceActive = false;
		var _timeFromForceApplied = 0.0;
		var _lastDeltaVelocity = 0.0;

		self.startTheRotation = function(newStartRotation) {
			_lastRotation.copy(newStartRotation);
		}

		self.doTheRotation = function(currentRotation) {

			_lastSpeed = currentRotation.clone().sub(_lastRotation);

			_cube.rotateX(_lastSpeed.x);
			_cube.rotateY(_lastSpeed.y);

			_lastRotation.copy(currentRotation);
		}

		self.finishTheRotation = function() {

			var initialVelocity = new THREE.Vector2().copy(_lastSpeed);
			var dragAcceleration = initialVelocity.clone().multiplyScalar(2.0);
			self.applyForce(initialVelocity, dragAcceleration);
		}

		self.applyForce = function(initialVelocity, dragAcceleration) {
	    	_initialVelocity = initialVelocity;
	    	_dragAcceleration = dragAcceleration;
	    	_timeFromForceApplied = 0.0;
	    	_forceActive = true;
	    	_lastDeltaVelocity = new THREE.Vector2();
	    }

	    self.update = function(deltaTime) {

	    	if (_forceActive)
	    	{
	    		var deltaVelocity = _initialVelocity.clone().addScaledVector(_dragAcceleration,  -_timeFromForceApplied);
	    		
	    		if (_lastDeltaVelocity.length() != 0 && deltaVelocity.length() > _lastDeltaVelocity.length())
	    		{
	    			_forceActive = false;
	    			return;
	    		}

	    		cube.rotateX(deltaVelocity.x);
	    		cube.rotateY(deltaVelocity.y);
	    		
	    		_lastDeltaVelocity.copy(deltaVelocity);
	    		_timeFromForceApplied += deltaTime / 1000.0;
	    	}
	    }
	}

	return CubeRotator;
});
define('cubeExpander',['threejs'], function() {

	var CubeExpander = function(cube, desiredTime, easeFunction){

		var self = this;
		var _initialExpansion = 0.0;
		var _desiredExpansion = 0.0;
		var _currentExpansion = 0.0;
		var _timeSpent = 0.0;
		var _active = false;

		self.expandTo = function(expansion) {
			_desiredExpansion = expansion;
			_timeSpent = 0.0;
			_active = true;
		}

		self.update = function(deltaTime) {

			if (!_active)
				return;

			if (_timeSpent > desiredTime)
			{
				_active = false;
				_initialExpansion = _currentExpansion;
				cube.expand(_desiredExpansion);
				return;
			}

			_currentExpansion = _initialExpansion + (_desiredExpansion - _initialExpansion) * easeFunction(_timeSpent / desiredTime);
			cube.expand(_currentExpansion);
			_timeSpent += deltaTime / 1000;
			
		}
	}

	return CubeExpander;

});
/**
 * @author mrdoob / http://mrdoob.com/
 */

define('threeObjLoader',['threejs'], function(THREE) {
	
	THREE.OBJLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

		this.materials = null;

		this.regexp = {
			// v float float float
			vertex_pattern           : /^v\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
			// vn float float float
			normal_pattern           : /^vn\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
			// vt float float
			uv_pattern               : /^vt\s+([\d|\.|\+|\-|e|E]+)\s+([\d|\.|\+|\-|e|E]+)/,
			// f vertex vertex vertex
			face_vertex              : /^f\s+(-?\d+)\s+(-?\d+)\s+(-?\d+)(?:\s+(-?\d+))?/,
			// f vertex/uv vertex/uv vertex/uv
			face_vertex_uv           : /^f\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+))?/,
			// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
			face_vertex_uv_normal    : /^f\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)\s+(-?\d+)\/(-?\d+)\/(-?\d+)(?:\s+(-?\d+)\/(-?\d+)\/(-?\d+))?/,
			// f vertex//normal vertex//normal vertex//normal
			face_vertex_normal       : /^f\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)\s+(-?\d+)\/\/(-?\d+)(?:\s+(-?\d+)\/\/(-?\d+))?/,
			// o object_name | g group_name
			object_pattern           : /^[og]\s*(.+)?/,
			// s boolean
			smoothing_pattern        : /^s\s+(\d+|on|off)/,
			// mtllib file_reference
			material_library_pattern : /^mtllib /,
			// usemtl material_name
			material_use_pattern     : /^usemtl /
		};

	};

	THREE.OBJLoader.prototype = {

		constructor: THREE.OBJLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var loader = new THREE.FileLoader( scope.manager );
			loader.setPath( this.path );
			loader.load( url, function ( text ) {

				onLoad( scope.parse( text ) );

			}, onProgress, onError );

		},

		setPath: function ( value ) {

			this.path = value;

		},

		setMaterials: function ( materials ) {

			this.materials = materials;

		},

		_createParserState : function () {

			var state = {
				objects  : [],
				object   : {},

				vertices : [],
				normals  : [],
				uvs      : [],

				materialLibraries : [],

				startObject: function ( name, fromDeclaration ) {

					// If the current object (initial from reset) is not from a g/o declaration in the parsed
					// file. We need to use it for the first parsed g/o to keep things in sync.
					if ( this.object && this.object.fromDeclaration === false ) {

						this.object.name = name;
						this.object.fromDeclaration = ( fromDeclaration !== false );
						return;

					}

					var previousMaterial = ( this.object && typeof this.object.currentMaterial === 'function' ? this.object.currentMaterial() : undefined );

					if ( this.object && typeof this.object._finalize === 'function' ) {

						this.object._finalize( true );

					}

					this.object = {
						name : name || '',
						fromDeclaration : ( fromDeclaration !== false ),

						geometry : {
							vertices : [],
							normals  : [],
							uvs      : []
						},
						materials : [],
						smooth : true,

						startMaterial : function( name, libraries ) {

							var previous = this._finalize( false );

							// New usemtl declaration overwrites an inherited material, except if faces were declared
							// after the material, then it must be preserved for proper MultiMaterial continuation.
							if ( previous && ( previous.inherited || previous.groupCount <= 0 ) ) {

								this.materials.splice( previous.index, 1 );

							}

							var material = {
								index      : this.materials.length,
								name       : name || '',
								mtllib     : ( Array.isArray( libraries ) && libraries.length > 0 ? libraries[ libraries.length - 1 ] : '' ),
								smooth     : ( previous !== undefined ? previous.smooth : this.smooth ),
								groupStart : ( previous !== undefined ? previous.groupEnd : 0 ),
								groupEnd   : -1,
								groupCount : -1,
								inherited  : false,

								clone : function( index ) {
									var cloned = {
										index      : ( typeof index === 'number' ? index : this.index ),
										name       : this.name,
										mtllib     : this.mtllib,
										smooth     : this.smooth,
										groupStart : 0,
										groupEnd   : -1,
										groupCount : -1,
										inherited  : false
									};
									cloned.clone = this.clone.bind(cloned);
									return cloned;
								}
							};

							this.materials.push( material );

							return material;

						},

						currentMaterial : function() {

							if ( this.materials.length > 0 ) {
								return this.materials[ this.materials.length - 1 ];
							}

							return undefined;

						},

						_finalize : function( end ) {

							var lastMultiMaterial = this.currentMaterial();
							if ( lastMultiMaterial && lastMultiMaterial.groupEnd === -1 ) {

								lastMultiMaterial.groupEnd = this.geometry.vertices.length / 3;
								lastMultiMaterial.groupCount = lastMultiMaterial.groupEnd - lastMultiMaterial.groupStart;
								lastMultiMaterial.inherited = false;

							}

							// Ignore objects tail materials if no face declarations followed them before a new o/g started.
							if ( end && this.materials.length > 1 ) {

								for ( var mi = this.materials.length - 1; mi >= 0; mi-- ) {
									if ( this.materials[mi].groupCount <= 0 ) {
										this.materials.splice( mi, 1 );
									}
								}

							}

							// Guarantee at least one empty material, this makes the creation later more straight forward.
							if ( end && this.materials.length === 0 ) {

								this.materials.push({
									name   : '',
									smooth : this.smooth
								});

							}

							return lastMultiMaterial;

						}
					};

					// Inherit previous objects material.
					// Spec tells us that a declared material must be set to all objects until a new material is declared.
					// If a usemtl declaration is encountered while this new object is being parsed, it will
					// overwrite the inherited material. Exception being that there was already face declarations
					// to the inherited material, then it will be preserved for proper MultiMaterial continuation.

					if ( previousMaterial && previousMaterial.name && typeof previousMaterial.clone === "function" ) {

						var declared = previousMaterial.clone( 0 );
						declared.inherited = true;
						this.object.materials.push( declared );

					}

					this.objects.push( this.object );

				},

				finalize : function() {

					if ( this.object && typeof this.object._finalize === 'function' ) {

						this.object._finalize( true );

					}

				},

				parseVertexIndex: function ( value, len ) {

					var index = parseInt( value, 10 );
					return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

				},

				parseNormalIndex: function ( value, len ) {

					var index = parseInt( value, 10 );
					return ( index >= 0 ? index - 1 : index + len / 3 ) * 3;

				},

				parseUVIndex: function ( value, len ) {

					var index = parseInt( value, 10 );
					return ( index >= 0 ? index - 1 : index + len / 2 ) * 2;

				},

				addVertex: function ( a, b, c ) {

					var src = this.vertices;
					var dst = this.object.geometry.vertices;

					dst.push( src[ a + 0 ] );
					dst.push( src[ a + 1 ] );
					dst.push( src[ a + 2 ] );
					dst.push( src[ b + 0 ] );
					dst.push( src[ b + 1 ] );
					dst.push( src[ b + 2 ] );
					dst.push( src[ c + 0 ] );
					dst.push( src[ c + 1 ] );
					dst.push( src[ c + 2 ] );

				},

				addVertexLine: function ( a ) {

					var src = this.vertices;
					var dst = this.object.geometry.vertices;

					dst.push( src[ a + 0 ] );
					dst.push( src[ a + 1 ] );
					dst.push( src[ a + 2 ] );

				},

				addNormal : function ( a, b, c ) {

					var src = this.normals;
					var dst = this.object.geometry.normals;

					dst.push( src[ a + 0 ] );
					dst.push( src[ a + 1 ] );
					dst.push( src[ a + 2 ] );
					dst.push( src[ b + 0 ] );
					dst.push( src[ b + 1 ] );
					dst.push( src[ b + 2 ] );
					dst.push( src[ c + 0 ] );
					dst.push( src[ c + 1 ] );
					dst.push( src[ c + 2 ] );

				},

				addUV: function ( a, b, c ) {

					var src = this.uvs;
					var dst = this.object.geometry.uvs;

					dst.push( src[ a + 0 ] );
					dst.push( src[ a + 1 ] );
					dst.push( src[ b + 0 ] );
					dst.push( src[ b + 1 ] );
					dst.push( src[ c + 0 ] );
					dst.push( src[ c + 1 ] );

				},

				addUVLine: function ( a ) {

					var src = this.uvs;
					var dst = this.object.geometry.uvs;

					dst.push( src[ a + 0 ] );
					dst.push( src[ a + 1 ] );

				},

				addFace: function ( a, b, c, d, ua, ub, uc, ud, na, nb, nc, nd ) {

					var vLen = this.vertices.length;

					var ia = this.parseVertexIndex( a, vLen );
					var ib = this.parseVertexIndex( b, vLen );
					var ic = this.parseVertexIndex( c, vLen );
					var id;

					if ( d === undefined ) {

						this.addVertex( ia, ib, ic );

					} else {

						id = this.parseVertexIndex( d, vLen );

						this.addVertex( ia, ib, id );
						this.addVertex( ib, ic, id );

					}

					if ( ua !== undefined ) {

						var uvLen = this.uvs.length;

						ia = this.parseUVIndex( ua, uvLen );
						ib = this.parseUVIndex( ub, uvLen );
						ic = this.parseUVIndex( uc, uvLen );

						if ( d === undefined ) {

							this.addUV( ia, ib, ic );

						} else {

							id = this.parseUVIndex( ud, uvLen );

							this.addUV( ia, ib, id );
							this.addUV( ib, ic, id );

						}

					}

					if ( na !== undefined ) {

						// Normals are many times the same. If so, skip function call and parseInt.
						var nLen = this.normals.length;
						ia = this.parseNormalIndex( na, nLen );

						ib = na === nb ? ia : this.parseNormalIndex( nb, nLen );
						ic = na === nc ? ia : this.parseNormalIndex( nc, nLen );

						if ( d === undefined ) {

							this.addNormal( ia, ib, ic );

						} else {

							id = this.parseNormalIndex( nd, nLen );

							this.addNormal( ia, ib, id );
							this.addNormal( ib, ic, id );

						}

					}

				},

				addLineGeometry: function ( vertices, uvs ) {

					this.object.geometry.type = 'Line';

					var vLen = this.vertices.length;
					var uvLen = this.uvs.length;

					for ( var vi = 0, l = vertices.length; vi < l; vi ++ ) {

						this.addVertexLine( this.parseVertexIndex( vertices[ vi ], vLen ) );

					}

					for ( var uvi = 0, l = uvs.length; uvi < l; uvi ++ ) {

						this.addUVLine( this.parseUVIndex( uvs[ uvi ], uvLen ) );

					}

				}

			};

			state.startObject( '', false );

			return state;

		},

		parse: function ( text ) {

			console.time( 'OBJLoader' );

			var state = this._createParserState();

			if ( text.indexOf( '\r\n' ) !== - 1 ) {

				// This is faster than String.split with regex that splits on both
				text = text.replace( /\r\n/g, '\n' );

			}

			if ( text.indexOf( '\\\n' ) !== - 1) {

				// join lines separated by a line continuation character (\)
				text = text.replace( /\\\n/g, '' );

			}

			var lines = text.split( '\n' );
			var line = '', lineFirstChar = '', lineSecondChar = '';
			var lineLength = 0;
			var result = [];

			// Faster to just trim left side of the line. Use if available.
			var trimLeft = ( typeof ''.trimLeft === 'function' );

			for ( var i = 0, l = lines.length; i < l; i ++ ) {

				line = lines[ i ];

				line = trimLeft ? line.trimLeft() : line.trim();

				lineLength = line.length;

				if ( lineLength === 0 ) continue;

				lineFirstChar = line.charAt( 0 );

				// @todo invoke passed in handler if any
				if ( lineFirstChar === '#' ) continue;

				if ( lineFirstChar === 'v' ) {

					lineSecondChar = line.charAt( 1 );

					if ( lineSecondChar === ' ' && ( result = this.regexp.vertex_pattern.exec( line ) ) !== null ) {

						// 0                  1      2      3
						// ["v 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

						state.vertices.push(
							parseFloat( result[ 1 ] ),
							parseFloat( result[ 2 ] ),
							parseFloat( result[ 3 ] )
						);

					} else if ( lineSecondChar === 'n' && ( result = this.regexp.normal_pattern.exec( line ) ) !== null ) {

						// 0                   1      2      3
						// ["vn 1.0 2.0 3.0", "1.0", "2.0", "3.0"]

						state.normals.push(
							parseFloat( result[ 1 ] ),
							parseFloat( result[ 2 ] ),
							parseFloat( result[ 3 ] )
						);

					} else if ( lineSecondChar === 't' && ( result = this.regexp.uv_pattern.exec( line ) ) !== null ) {

						// 0               1      2
						// ["vt 0.1 0.2", "0.1", "0.2"]

						state.uvs.push(
							parseFloat( result[ 1 ] ),
							parseFloat( result[ 2 ] )
						);

					} else {

						throw new Error( "Unexpected vertex/normal/uv line: '" + line  + "'" );

					}

				} else if ( lineFirstChar === "f" ) {

					if ( ( result = this.regexp.face_vertex_uv_normal.exec( line ) ) !== null ) {

						// f vertex/uv/normal vertex/uv/normal vertex/uv/normal
						// 0                        1    2    3    4    5    6    7    8    9   10         11         12
						// ["f 1/1/1 2/2/2 3/3/3", "1", "1", "1", "2", "2", "2", "3", "3", "3", undefined, undefined, undefined]

						state.addFace(
							result[ 1 ], result[ 4 ], result[ 7 ], result[ 10 ],
							result[ 2 ], result[ 5 ], result[ 8 ], result[ 11 ],
							result[ 3 ], result[ 6 ], result[ 9 ], result[ 12 ]
						);

					} else if ( ( result = this.regexp.face_vertex_uv.exec( line ) ) !== null ) {

						// f vertex/uv vertex/uv vertex/uv
						// 0                  1    2    3    4    5    6   7          8
						// ["f 1/1 2/2 3/3", "1", "1", "2", "2", "3", "3", undefined, undefined]

						state.addFace(
							result[ 1 ], result[ 3 ], result[ 5 ], result[ 7 ],
							result[ 2 ], result[ 4 ], result[ 6 ], result[ 8 ]
						);

					} else if ( ( result = this.regexp.face_vertex_normal.exec( line ) ) !== null ) {

						// f vertex//normal vertex//normal vertex//normal
						// 0                     1    2    3    4    5    6   7          8
						// ["f 1//1 2//2 3//3", "1", "1", "2", "2", "3", "3", undefined, undefined]

						state.addFace(
							result[ 1 ], result[ 3 ], result[ 5 ], result[ 7 ],
							undefined, undefined, undefined, undefined,
							result[ 2 ], result[ 4 ], result[ 6 ], result[ 8 ]
						);

					} else if ( ( result = this.regexp.face_vertex.exec( line ) ) !== null ) {

						// f vertex vertex vertex
						// 0            1    2    3   4
						// ["f 1 2 3", "1", "2", "3", undefined]

						state.addFace(
							result[ 1 ], result[ 2 ], result[ 3 ], result[ 4 ]
						);

					} else {

						throw new Error( "Unexpected face line: '" + line  + "'" );

					}

				} else if ( lineFirstChar === "l" ) {

					var lineParts = line.substring( 1 ).trim().split( " " );
					var lineVertices = [], lineUVs = [];

					if ( line.indexOf( "/" ) === - 1 ) {

						lineVertices = lineParts;

					} else {

						for ( var li = 0, llen = lineParts.length; li < llen; li ++ ) {

							var parts = lineParts[ li ].split( "/" );

							if ( parts[ 0 ] !== "" ) lineVertices.push( parts[ 0 ] );
							if ( parts[ 1 ] !== "" ) lineUVs.push( parts[ 1 ] );

						}

					}
					state.addLineGeometry( lineVertices, lineUVs );

				} else if ( ( result = this.regexp.object_pattern.exec( line ) ) !== null ) {

					// o object_name
					// or
					// g group_name

					// WORKAROUND: https://bugs.chromium.org/p/v8/issues/detail?id=2869
					// var name = result[ 0 ].substr( 1 ).trim();
					var name = ( " " + result[ 0 ].substr( 1 ).trim() ).substr( 1 );

					state.startObject( name );

				} else if ( this.regexp.material_use_pattern.test( line ) ) {

					// material

					state.object.startMaterial( line.substring( 7 ).trim(), state.materialLibraries );

				} else if ( this.regexp.material_library_pattern.test( line ) ) {

					// mtl file

					state.materialLibraries.push( line.substring( 7 ).trim() );

				} else if ( ( result = this.regexp.smoothing_pattern.exec( line ) ) !== null ) {

					// smooth shading

					// @todo Handle files that have varying smooth values for a set of faces inside one geometry,
					// but does not define a usemtl for each face set.
					// This should be detected and a dummy material created (later MultiMaterial and geometry groups).
					// This requires some care to not create extra material on each smooth value for "normal" obj files.
					// where explicit usemtl defines geometry groups.
					// Example asset: examples/models/obj/cerberus/Cerberus.obj

					var value = result[ 1 ].trim().toLowerCase();
					state.object.smooth = ( value === '1' || value === 'on' );

					var material = state.object.currentMaterial();
					if ( material ) {

						material.smooth = state.object.smooth;

					}

				} else {

					// Handle null terminated files without exception
					if ( line === '\0' ) continue;

					throw new Error( "Unexpected line: '" + line  + "'" );

				}

			}

			state.finalize();

			var container = new THREE.Group();
			container.materialLibraries = [].concat( state.materialLibraries );

			for ( var i = 0, l = state.objects.length; i < l; i ++ ) {

				var object = state.objects[ i ];
				var geometry = object.geometry;
				var materials = object.materials;
				var isLine = ( geometry.type === 'Line' );

				// Skip o/g line declarations that did not follow with any faces
				if ( geometry.vertices.length === 0 ) continue;

				var buffergeometry = new THREE.BufferGeometry();

				buffergeometry.addAttribute( 'position', new THREE.BufferAttribute( new Float32Array( geometry.vertices ), 3 ) );

				if ( geometry.normals.length > 0 ) {

					buffergeometry.addAttribute( 'normal', new THREE.BufferAttribute( new Float32Array( geometry.normals ), 3 ) );

				} else {

					buffergeometry.computeVertexNormals();

				}

				if ( geometry.uvs.length > 0 ) {

					buffergeometry.addAttribute( 'uv', new THREE.BufferAttribute( new Float32Array( geometry.uvs ), 2 ) );

				}

				// Create materials

				var createdMaterials = [];

				for ( var mi = 0, miLen = materials.length; mi < miLen ; mi++ ) {

					var sourceMaterial = materials[mi];
					var material = undefined;

					if ( this.materials !== null ) {

						material = this.materials.create( sourceMaterial.name );

						// mtl etc. loaders probably can't create line materials correctly, copy properties to a line material.
						if ( isLine && material && ! ( material instanceof THREE.LineBasicMaterial ) ) {

							var materialLine = new THREE.LineBasicMaterial();
							materialLine.copy( material );
							material = materialLine;

						}

					}

					if ( ! material ) {

						material = ( ! isLine ? new THREE.MeshPhongMaterial() : new THREE.LineBasicMaterial() );
						material.name = sourceMaterial.name;

					}

					material.shading = sourceMaterial.smooth ? THREE.SmoothShading : THREE.FlatShading;

					createdMaterials.push(material);

				}

				// Create mesh

				var mesh;

				if ( createdMaterials.length > 1 ) {

					for ( var mi = 0, miLen = materials.length; mi < miLen ; mi++ ) {

						var sourceMaterial = materials[mi];
						buffergeometry.addGroup( sourceMaterial.groupStart, sourceMaterial.groupCount, mi );

					}

					var multiMaterial = new THREE.MultiMaterial( createdMaterials );
					mesh = ( ! isLine ? new THREE.Mesh( buffergeometry, multiMaterial ) : new THREE.LineSegments( buffergeometry, multiMaterial ) );

				} else {

					mesh = ( ! isLine ? new THREE.Mesh( buffergeometry, createdMaterials[ 0 ] ) : new THREE.LineSegments( buffergeometry, createdMaterials[ 0 ] ) );
				}

				mesh.name = object.name;

				container.add( mesh );

			}

			console.timeEnd( 'OBJLoader' );

			return container;

		}

	};
	
	return THREE.OBJLoader;

});


/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define('Hammer',[],function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map;
define('scene',['threejs',
		'deviceInformator',
		'imageQuad',
		 'cube',
		 'cubeRotator',
		 'cubeExpander',
		 'threejsCSS3D',
		 'threeObjLoader',
		 'Hammer'
		], function(THREE, DeviceInformator, ImageQuad, Cube, CubeRotator, CubeExpander, THREECSS3D, THREEObjLoader, Hammer) {
	
	var scene, cssScene, camera, renderer, cssRenderer;
	var mainCube, cubeRotator, cubeExpander, logo3DQuad;
	var _videoManager;
	var _imageManager;
	var _cubeSidesDetails;
	var relectionMaterial;
	var shouldExpandTheCube = true;

	function _init(videoManager, imageManager, cubeSidesDetails) {

		_videoManager = videoManager;
		_imageManager = imageManager;
		_cubeSidesDetails = cubeSidesDetails;

	    scene = new THREE.Scene();
	    cssScene = new THREE.Scene();

	    _initializeCamera();
	    _initializeLights();
	   	_initializeWebGLRenderer();
	   	_initializeCSS3dRenderer();

	    _initializeCube();			
	    _initializeLogo();		
	    _initializeHammerCallbacks();

		window.addEventListener( 'resize', _onWindowResize, false );
	}

	function _initializeWebGLRenderer(){

		renderer = new THREE.WebGLRenderer({anitialiasing: true, alpha:true});
	    renderer.setSize( window.innerWidth, window.innerHeight );
	    renderer.setClearColor( 0xDDDDDD, 1 );
	    renderer.domElement.style.position = 'absolute';
	    renderer.domElement.style.zIndex = 1;
	    renderer.domElement.style.top = 0;

	    document.body.appendChild( renderer.domElement );
	    renderer.domElement.style.pointerEvents = "none";
	}

	function _initializeCSS3dRenderer(){
		cssRenderer = new THREECSS3D.CSS3DRenderer();
	    cssRenderer.setSize( window.innerWidth, window.innerHeight );
	    cssRenderer.setClearColor(0xDDDDDD, 1);
	    cssRenderer.domElement.style.position = 'absolute';
		cssRenderer.domElement.style.top = 0;
		cssRenderer.domElement.style.zIndex = 0;

		document.body.appendChild( cssRenderer.domElement );
	}

	function _initializeCamera() {
		camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	   	camera.position.z = 500;
	   	camera.position.y= 200;
	   	camera.lookAt(new THREE.Vector3(0.0, 0, 100.0));
	}

	function _initializeLights() {
		 var dirLight = new THREE.DirectionalLight(0xffffff, 1);
	    dirLight.position.set(100, 100, 50);
	    dirLight.intensity = 1.5;
	    scene.add(dirLight);
	}

	function _initializeCube() {
	   	mainCube = new Cube(scene, cssScene, new THREE.Vector3(0.0, 0.0, 0.0), new THREE.Vector3(1.0, 0.0, 0.0), new THREE.Vector3(0.0, 1.0, 0.0), 250, _cubeSidesDetails);
	    cubeRotator = new CubeRotator(mainCube);
	    var cubeExpansionEaseFunc = function(x) { return x*x; };
	    cubeExpander = new CubeExpander(mainCube, 0.5, cubeExpansionEaseFunc);
	}

	function _initializeLogo() {
		var loader = new THREEObjLoader();
		loader.load( "./data/models/logo_cred_3d_model_triangulated.obj", function ( object ) {
			console.log(object);
			object.scale.x = 200;
			object.scale.y = 200;
			object.scale.z = 200;

			var colors = [0x0070BB, 0x0070BB, 0x222222]
			object.children.forEach(function(childMesh, index) { 

				childMesh.material = new THREE.MeshPhongMaterial({
				side: THREE.DoubleSide,
				shading: THREE.FlatShading,
				color: colors[index],
				shininess: 100,
				specular: 0XFFFFFF
				});
			});

		  	scene.add( object );
		  	logo3DQuad = object;
		  	logo3DQuad.lookAt(camera.position);
		} );
	}

	function _initializeHammerCallbacks(){

		var hammertime = new Hammer(cssRenderer.domElement, {});

		hammertime.on('panstart', function(event){
			var x = (((event.center.x) / window.innerWidth) * 2.0 - 1) * Math.PI * 2;
			var y = (((event.center.y) / window.innerHeight) * 2.0 - 1) *  Math.PI * 2;
			cubeRotator.startTheRotation(new THREE.Vector2(x, y));

			// for experimental iframes
			Array.from(document.getElementsByTagName("iframe")).forEach(function(iframe) {
				iframe.style.pointerEvents = "none";
			});
		});

		hammertime.on('panmove', function(event) {

			var x = (((event.center.x) / window.innerWidth) * 2.0 - 1) * Math.PI * 2;
			var y = (((event.center.y) / window.innerHeight) * 2.0 - 1) *  Math.PI * 2;
			cubeRotator.doTheRotation(new THREE.Vector2(x, y));
		});

		hammertime.on('panend', function (event) {
			
			cubeRotator.finishTheRotation();

			// for experimental iframes
			Array.from(document.getElementsByTagName("iframe")).forEach(function(iframe) {
				iframe.style.pointerEvents = "all";
			});
		})

		hammertime.on('doubletap', function(event){
			if (shouldExpandTheCube)
	   			cubeExpander.expandTo(40);
			else
	   			cubeExpander.expandTo(0);

	     	shouldExpandTheCube = !shouldExpandTheCube;
		});

		hammertime.on('tap', function(event){

			var tapPosition = new THREE.Vector2(event.center.x, event.center.y);
			
	 		var mouse = new THREE.Vector2();
		 	mouse.x = ( tapPosition.x / window.innerWidth ) * 2 - 1;
			mouse.y = - ( tapPosition.y / window.innerHeight ) * 2 + 1;
			var raycaster = new THREE.Raycaster();

			raycaster.setFromCamera( mouse, camera );

			var intersectionObjects = raycaster.intersectObjects( mainCube.getQuadMeshesArray() );
			if (intersectionObjects.length == 0)
				return;

			var clickedSideID = intersectionObjects[0].object.name;
			var clickedQuad = mainCube.getQuadAtSide(clickedSideID);

			if (clickedQuad.constructor.name == "VideoQuad")
				_videoManager.toggleVideoByID(clickedQuad.getVideoElementID());
		});

		window.addEventListener( 'touchmove', function(e) {
			e.preventDefault();
		});
	}

	function _onWindowResize() {

		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );
		cssRenderer.setSize(window.innerWidth, window.innerHeight);
	}

	var _lastTime = new Date();

	function _animate() {

	   requestAnimationFrame( _animate );

	   var currentTime = new Date();
	   var deltaTime = currentTime - _lastTime
	   _render(deltaTime);
	   _lastTime =  currentTime;

	}

	function _render(deltaTime) {
	    
	    cubeExpander.update(deltaTime);
	    cubeRotator.update(deltaTime);
	    mainCube.update(deltaTime);

		// render the scene
   		cssRenderer.render(cssScene, camera);
   		renderer.render( scene, camera );
	}

	return {

		init: function(videoManager, imageManager, cubeSidesDetails) { return _init(videoManager, imageManager, cubeSidesDetails); },
		animate: function() { return _animate(); }
	}

});
define('videoManager',[], function() {

	var VideoManager = function(videosInfo){

		var self = this;
		var _videoElements = [];
		var _videosInfo = videosInfo;
		var _currentVideo = {
			id: null,
			playing: false
		}

		self.initialize = function()  {
			_videosInfo.forEach(function(videoInfo) {
				var newVideoElement = document.createElement('video');
				newVideoElement.src = videoInfo.src;
				newVideoElement.loop = true;
				newVideoElement.id = videoInfo.id;
				newVideoElement.setAttribute('playsinline', 'true');
				newVideoElement.setAttribute('webkit-playsinline', 'true');
				console.log(newVideoElement);
				//enableInlineVideo(newVideoElement, {everywhere: true});

				// ios hack - begin
				newVideoElement.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);
		        if (newVideoElement.hasAttribute("controls")) {
		            newVideoElement.removeAttribute("controls")   
		        }
		        // ios hack - end


				_videoElements.push(newVideoElement);
			});
		}

		self.initialize();
		
		self.addVideoElement = function(newVideoElement) {
			_videoElements.push(newVideoElement);
		}

		self.toggleVideoByID = function(someID) {

			_videoElements.forEach(function(videoElement) {
				if (videoElement.id == someID)
				{
					if (_currentVideo.id == null) {
						_currentVideo = {};
						_currentVideo.id = videoElement.id;
						_currentVideo.playing = true;
						videoElement.play();
					}
					else if (_currentVideo.id == someID){

						if (_currentVideo.playing) {
							_currentVideo.playing = false;
							videoElement.pause();
						}
						else {
							_currentVideo.playing = true;
							videoElement.play();
						}
					}
					else {
						_currentVideo.id = videoElement.id;
						_currentVideo.playing = true;
						videoElement.play();
					}
				}
				else
					videoElement.pause();
			});
		}

		self.getVideoByID = function(someID) {

			var resultVideo = null;

			for (var i = 0; i < _videoElements.length; i++){
				if (_videoElements[i].id == someID){
					resultVideo = _videoElements[i];
					break;
				}
			}

			if (resultVideo == null)
				throw "Video with id " + someID + " doesn't exist.";

			return resultVideo;
		}
	}



	return VideoManager;
});
define('imageManager',[], function(){

	var ImageManager = function(imagesInfo){

		var self = this;
		var _imageElements = [];
		var _imagesInfo = imagesInfo;

		self.initialize = function() {

			_imagesInfo.forEach(function(imageInfo) {
				var newImageElement = document.createElement('img');
				newImageElement.src = imageInfo.src;
				newImageElement.id = imageInfo.id;
				_imageElements.push(newImageElement);
			});
		}

		self.initialize();
		
		self.addImageElement = function(newImageElement) {
			_imageElements.push(newImageElement);
		}

		self.getImageByID = function(someID) {

			let resultImage = null;

			for (var i = 0 ; i < _imageElements.length; i++){
				if (_imageElements[i].id == someID)
				{
					resultImage = _imageElements[i];
					break;
				}
			}

			if (resultImage == null)
				throw "Image with id " + someID + " doesn't exist.";

			return resultImage;
		}
	}

	return ImageManager;
});


requirejs.config({
    baseUrl: "/scripts",
    paths: {
        "threejs"		: "../libs/threejs/three.min",
        "threejsCSS3D"	: "../libs/threejs/three.css3DObject",
        "threeObjLoader": "../libs/threejs/threeObjLoader"
    }
});

require(['threejs', 'scene', 'videoManager', 'imageManager'], function(THREE, scene, VideoManager, ImageManager) {

	function getURLParameter(name) {
  		return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
	}

	var videoManager;
	var imageManager;
	var cubeSidesDetails;

	var stage = getURLParameter("stage");

	if (!stage)
		return;
	
	if (stage == "started")
	{
		videoManager = new VideoManager([]);

		imageManager = new ImageManager([{ "id": "initial-side-1", "src": "data/images/initial-side-1.png"}, 
    								 { "id": "initial-side-2", "src": "data/images/initial-side-2.png"},
    								 { "id": "initial-side-3", "src": "data/images/initial-side-3.png"},
    								 { "id": "initial-side-4", "src": "data/images/initial-side-4.png"},
    								 { "id": "initial-top", "src": "data/images/initial-top.jpg"},
    								 { "id": "initial-bottom", "src" : "data/images/initial-bottom.jpg"},
    								 { "id": "mainLogoImage", "src": "data/images/mainLogo.png"}]);

		cubeSidesDetails = {
	    					"FRONT" : {  quadType: "IMAGE", imageElement: imageManager.getImageByID("initial-side-1")},
	    					"REAR" : {  quadType: "IMAGE", imageElement: imageManager.getImageByID("initial-side-2")},
	    					"RIGHT" : {  quadType: "IMAGE", imageElement: imageManager.getImageByID("initial-side-3")},
	    					"LEFT" : {  quadType: "IMAGE", imageElement: imageManager.getImageByID("initial-side-4")},
	    					"BOTTOM" : {  quadType: "IMAGE", imageElement: imageManager.getImageByID("initial-bottom")},
	    					"TOP": {  quadType: "IMAGE", imageElement: imageManager.getImageByID("initial-top")}
	    				};

	   
	}
	else if (stage == "finished")
	{
		videoManager = new VideoManager([{ "id": "finished-side-1", "src": "data/video/video1.mp4"},
	    								 { "id": "finished-side-2", "src": "data/video/video2.mp4"},
	    								 { "id": "finished-side-3", "src": "data/video/video3.mp4"},
	    								 { "id": "finished-side-4", "src": "data/video/video4.mp4"}]);


		imageManager = new ImageManager([{ "id": "finished-top", "src": "data/images/finished-top.jpg"},
										 { "id": "finished-bottom", "src": "data/images/finished-bottom.jpg" },
    									 { "id": "mainLogoImage", "src": "data/images/mainLogo.png"}]);

		var wrapper = document.createElement('div');
		wrapper.style.width = '250px';
		wrapper.style.height = '250px';
		wrapper.style.opacity = 0.9;
		var button = document.createElement('button');
			button.className = "contactButton";
			button.innerHTML = "Contact us";
			button.style.position = "relative";
			button.style.top = "50%";
			button.style.left = "50%";
			button.style.marginLeft = "-75px";
			button.style.marginTop = "-60px";
			button.style.width = "150px";
			button.style.height = "120px";
			button.style.backgroundColor = "#0070BB";
			button.style.color = "#FFF";
		wrapper.appendChild(button);
		console.log(wrapper);

	    cubeSidesDetails = {
		    					"RIGHT" : { quadType: "VIDEO", videoElement: videoManager.getVideoByID("finished-side-1")},
		    					"REAR" : {  quadType: "VIDEO", videoElement: videoManager.getVideoByID("finished-side-2")},
		    					"FRONT" : {  quadType: "VIDEO", videoElement: videoManager.getVideoByID("finished-side-3") },
		    					"LEFT" : {  quadType: "VIDEO", videoElement: videoManager.getVideoByID("finished-side-4")},
		    					"BOTTOM" : {  quadType: "HTML", htmlElement: wrapper },
		    					"TOP": {  quadType: "IMAGE", imageElement: imageManager.getImageByID("finished-top")}
		    				};

	}
	else if (stage == "experimental"){

		videoManager = new VideoManager([{ "id": "finished-side-1", "src": "data/video/video1.mp4"},
	    								 { "id": "finished-side-2", "src": "data/video/video2.mp4"},
	    								 { "id": "finished-side-3", "src": "data/video/video3.mp4"},
	    								 { "id": "finished-side-4", "src": "data/video/video4.mp4"}]);


		imageManager = new ImageManager([{ "id": "finished-top", "src": "data/images/finished-top.jpg"},
										 { "id": "finished-bottom", "src": "data/images/finished-bottom.jpg" },
    									 { "id": "mainLogoImage", "src": "data/images/mainLogo.png"}]);

		var element	= document.createElement('iframe')
		element.src	= 'https://www.youtube.com/embed/OpVyP21kY7o'
		element.style.width = '200px';
		element.style.height = '200px';
		element.style.opacity = '0.9';
		
		var element1	= document.createElement('iframe')
		element1.src	= 'https://www.youtube.com/embed/OpVyP21kY7o'
		element1.style.width = '200px';
		element1.style.height = '200px';
		element1.style.opacity = '0.9';
		

		var element2	= document.createElement('iframe')
		element2.src	= 'https://www.youtube.com/embed/OpVyP21kY7o'
		element2.style.width = '200px';
		element2.style.height = '200px';
		element2.style.opacity = '0.9';
		

		var element3	= document.createElement('iframe')
		element3.src	= 'https://www.youtube.com/embed/OpVyP21kY7o'
		element3.style.width = '200px';
		element3.style.height = '200px';
		element3.style.opacity = '0.9';
		
	    cubeSidesDetails = {
	    						"RIGHT" : { quadType: "HTML", htmlElement: element },
		    					"REAR" : {  quadType: "HTML", htmlElement: element3},
		    					"FRONT" : {  quadType: "HTML", htmlElement: element2},
		    					"LEFT" : {  quadType: "HTML", htmlElement: element1},
		    					"BOTTOM" : {  quadType: "IMAGE", imageElement: imageManager.getImageByID("finished-bottom") },
		    					"TOP": {  quadType: "IMAGE", imageElement: imageManager.getImageByID("finished-top")}
		    				};
	}

	scene.init(videoManager, imageManager, cubeSidesDetails);
	scene.animate();	
});
define("main", function(){});

