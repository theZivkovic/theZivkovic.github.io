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

			if (clickedQuad && clickedQuad.constructor.name == "VideoQuad")
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
				newVideoElement.loop = true;
				newVideoElement.id = videoInfo.id;
				newVideoElement.setAttribute('playsinline', 'true');
				newVideoElement.setAttribute('webkit-playsinline', 'true');
				newVideoElement.setAttribute('src', videoInfo.src);

				// ios hack - begin
				newVideoElement.addEventListener("contextmenu", function (e) { e.preventDefault(); e.stopPropagation(); }, false);
		        if (newVideoElement.hasAttribute("controls")) {
		            newVideoElement.removeAttribute("controls")   
		        }
		        // ios hack - end

		        newVideoElement.load();
		        newVideoElement.pause();
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

			var resultImage = null;

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
/*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 *//*!
 * MediaElement.js
 * http://www.mediaelementjs.com/
 *
 * Wrapper that mimics native HTML5 MediaElement (audio and video)
 * using a variety of technologies (pure JavaScript, Flash, iframe)
 *
 * Copyright 2010-2017, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){},{}],2:[function(a,b,c){(function(c){var d="undefined"!=typeof c?c:"undefined"!=typeof window?window:{},e=a(1);if("undefined"!=typeof document)b.exports=document;else{var f=d["__GLOBAL_DOCUMENT_CACHE@4"];f||(f=d["__GLOBAL_DOCUMENT_CACHE@4"]=e),b.exports=f}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{1:1}],3:[function(a,b,c){(function(a){"undefined"!=typeof window?b.exports=window:"undefined"!=typeof a?b.exports=a:"undefined"!=typeof self?b.exports=self:b.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],4:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f=a(6),g=d(f),h=a(14),i=a(24),j={lang:"en",en:h.EN};j.language=function(){for(var a=arguments.length,b=Array(a),c=0;a>c;c++)b[c]=arguments[c];if(null!==b&&void 0!==b&&b.length){if("string"!=typeof b[0])throw new TypeError("Language code must be a string value");if(!b[0].match(/^[a-z]{2}(\-[a-z]{2})?$/i))throw new TypeError("Language code must have format `xx` or `xx-xx`");j.lang=b[0],void 0===j[b[0]]?(b[1]=null!==b[1]&&void 0!==b[1]&&"object"===e(b[1])?b[1]:{},j[b[0]]=i.isObjectEmpty(b[1])?h.EN:b[1]):null!==b[1]&&void 0!==b[1]&&"object"===e(b[1])&&(j[b[0]]=b[1])}return j.lang},j.t=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("string"==typeof a&&a.length){var c=void 0,d=void 0,f=j.language(),g=function(a,b,c){if("object"!==("undefined"==typeof a?"undefined":e(a))||"number"!=typeof b||"number"!=typeof c)return a;var d=function(){return[function(){return arguments.length<=1?void 0:arguments[1]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 0===(arguments.length<=0?void 0:arguments[0])||1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return(arguments.length<=0?void 0:arguments[0])%10===1&&(arguments.length<=0?void 0:arguments[0])%100!==11?arguments.length<=1?void 0:arguments[1]:0!==(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])||11===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])||12===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])>2&&(arguments.length<=0?void 0:arguments[0])<20?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:0===(arguments.length<=0?void 0:arguments[0])||(arguments.length<=0?void 0:arguments[0])%100>0&&(arguments.length<=0?void 0:arguments[0])%100<20?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return(arguments.length<=0?void 0:arguments[0])%10===1&&(arguments.length<=0?void 0:arguments[0])%100!==11?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:[3]},function(){return(arguments.length<=0?void 0:arguments[0])%10===1&&(arguments.length<=0?void 0:arguments[0])%100!==11?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])>=2&&(arguments.length<=0?void 0:arguments[0])<=4?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return(arguments.length<=0?void 0:arguments[0])%100===1?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])%100===2?arguments.length<=3?void 0:arguments[3]:(arguments.length<=0?void 0:arguments[0])%100===3||(arguments.length<=0?void 0:arguments[0])%100===4?arguments.length<=4?void 0:arguments[4]:arguments.length<=1?void 0:arguments[1]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])>2&&(arguments.length<=0?void 0:arguments[0])<7?arguments.length<=3?void 0:arguments[3]:(arguments.length<=0?void 0:arguments[0])>6&&(arguments.length<=0?void 0:arguments[0])<11?arguments.length<=4?void 0:arguments[4]:arguments.length<=5?void 0:arguments[5]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:(arguments.length<=0?void 0:arguments[0])%100>=3&&(arguments.length<=0?void 0:arguments[0])%100<=10?arguments.length<=4?void 0:arguments[4]:(arguments.length<=0?void 0:arguments[0])%100>=11?arguments.length<=5?void 0:arguments[5]:arguments.length<=6?void 0:arguments[6]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:0===(arguments.length<=0?void 0:arguments[0])||(arguments.length<=0?void 0:arguments[0])%100>1&&(arguments.length<=0?void 0:arguments[0])%100<11?arguments.length<=2?void 0:arguments[2]:(arguments.length<=0?void 0:arguments[0])%100>10&&(arguments.length<=0?void 0:arguments[0])%100<20?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return(arguments.length<=0?void 0:arguments[0])%10===1?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10===2?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 11!==(arguments.length<=0?void 0:arguments[0])&&(arguments.length<=0?void 0:arguments[0])%10===1?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:(arguments.length<=0?void 0:arguments[0])%10>=2&&(arguments.length<=0?void 0:arguments[0])%10<=4&&((arguments.length<=0?void 0:arguments[0])%100<10||(arguments.length<=0?void 0:arguments[0])%100>=20)?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:8!==(arguments.length<=0?void 0:arguments[0])&&11!==(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:arguments.length<=2?void 0:arguments[2]},function(){return 1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:2===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:3===(arguments.length<=0?void 0:arguments[0])?arguments.length<=3?void 0:arguments[3]:arguments.length<=4?void 0:arguments[4]},function(){return 0===(arguments.length<=0?void 0:arguments[0])?arguments.length<=1?void 0:arguments[1]:1===(arguments.length<=0?void 0:arguments[0])?arguments.length<=2?void 0:arguments[2]:arguments.length<=3?void 0:arguments[3]}]}();return d[c].apply(null,[b].concat(a))};return void 0!==j[f]&&(c=j[f][a],null!==b&&"number"==typeof b&&(d=j[f]["mejs.plural-form"],c=g.apply(null,[c,b,d]))),!c&&j.en&&(c=j.en[a],null!==b&&"number"==typeof b&&(d=j.en["mejs.plural-form"],c=g.apply(null,[c,b,d]))),c=c||a,null!==b&&"number"==typeof b&&(c=c.replace("%1",b)),i.escapeHTML(c)}return a},g["default"].i18n=j,"undefined"!=typeof mejsL10n&&g["default"].i18n.language(mejsL10n.language,mejsL10n.strings),c["default"]=j},{14:14,24:24,6:6}],5:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0});var f=a(3),g=d(f),h=a(2),i=d(h),j=a(6),k=d(j),l=a(25),m=a(7),n=function o(a,b){var c=this;e(this,o);var d=this;d.defaults={renderers:[],fakeNodeName:"mediaelementwrapper",pluginPath:"build/",shimScriptAccess:"sameDomain"},b=Object.assign(d.defaults,b),d.mediaElement=i["default"].createElement(b.fakeNodeName),d.mediaElement.options=b;var f=a;if("string"==typeof a?d.mediaElement.originalNode=i["default"].getElementById(a):(d.mediaElement.originalNode=a,f=a.id),f=f||"mejs_"+Math.random().toString().slice(2),void 0!==d.mediaElement.originalNode&&null!==d.mediaElement.originalNode&&d.mediaElement.appendChild){d.mediaElement.originalNode.setAttribute("id",f+"_from_mejs");var g=d.mediaElement.originalNode.tagName.toLowerCase();["video","audio"].includes(g)&&!d.mediaElement.originalNode.getAttribute("preload")&&d.mediaElement.originalNode.setAttribute("preload","none"),d.mediaElement.originalNode.parentNode.insertBefore(d.mediaElement,d.mediaElement.originalNode),d.mediaElement.appendChild(d.mediaElement.originalNode)}d.mediaElement.id=f,d.mediaElement.renderers={},d.mediaElement.renderer=null,d.mediaElement.rendererName=null,d.mediaElement.changeRenderer=function(a,b){var d=c;if(void 0!==d.mediaElement.renderer&&null!==d.mediaElement.renderer&&d.mediaElement.renderer.name===a)return d.mediaElement.renderer.pause(),d.mediaElement.renderer.stop&&d.mediaElement.renderer.stop(),d.mediaElement.renderer.show(),d.mediaElement.renderer.setSrc(b[0].src),!0;void 0!==d.mediaElement.renderer&&null!==d.mediaElement.renderer&&(d.mediaElement.renderer.pause(),d.mediaElement.renderer.stop&&d.mediaElement.renderer.stop(),d.mediaElement.renderer.hide());var e=d.mediaElement.renderers[a],f=null;if(void 0!==e&&null!==e)return e.show(),e.setSrc(b[0].src),d.mediaElement.renderer=e,d.mediaElement.rendererName=a,!0;for(var g=d.mediaElement.options.renderers.length?d.mediaElement.options.renderers:m.renderer.order,h=0,i=g.length;i>h;h++){var j=g[h];if(j===a){var k=m.renderer.renderers;f=k[j];var l=Object.assign(f.options,d.mediaElement.options);return e=f.create(d.mediaElement,l,b),e.name=a,d.mediaElement.renderers[f.name]=e,d.mediaElement.renderer=e,d.mediaElement.rendererName=a,e.show(),!0}}return!1},d.mediaElement.setSize=function(a,b){void 0!==d.mediaElement.renderer&&null!==d.mediaElement.renderer&&d.mediaElement.renderer.setSize(a,b)};var h=k["default"].html5media.properties,j=k["default"].html5media.methods,n=function(a,b,c,d){var e=a[b],f=function(){return c.apply(a,[e])},g=function(b){return e=d.apply(a,[b])};Object.defineProperty(a,b,{get:f,set:g})},p=function(a){"src"!==a&&!function(){var b=""+a.substring(0,1).toUpperCase()+a.substring(1),c=function(){return void 0!==d.mediaElement.renderer&&null!==d.mediaElement.renderer?d.mediaElement.renderer["get"+b]():null},e=function(a){void 0!==d.mediaElement.renderer&&null!==d.mediaElement.renderer&&d.mediaElement.renderer["set"+b](a)};n(d.mediaElement,a,c,e),d.mediaElement["get"+b]=c,d.mediaElement["set"+b]=e}()},q=function(){return void 0!==d.mediaElement.renderer&&null!==d.mediaElement.renderer?d.mediaElement.renderer.getSrc():null},r=function(a){var b=[];if("string"==typeof a)b.push({src:a,type:a?l.getTypeFromFile(a):""});else for(var c=0,e=a.length;e>c;c++){var f=l.absolutizeUrl(a[c].src),g=a[c].type;b.push({src:f,type:""!==g&&null!==g&&void 0!==g||!f?g:l.getTypeFromFile(f)})}var h=m.renderer.select(b,d.mediaElement.options.renderers.length?d.mediaElement.options.renderers:[]),j=void 0;return d.mediaElement.originalNode.setAttribute("src",b[0].src||""),null===h?(j=i["default"].createEvent("HTMLEvents"),j.initEvent("error",!1,!1),j.message="No renderer found",void d.mediaElement.dispatchEvent(j)):(d.mediaElement.changeRenderer(h.rendererName,b),void((void 0===d.mediaElement.renderer||null===d.mediaElement.renderer)&&(j=i["default"].createEvent("HTMLEvents"),j.initEvent("error",!1,!1),j.message="Error creating renderer",d.mediaElement.dispatchEvent(j))))},s=function(a){d.mediaElement[a]=function(){for(var b=arguments.length,c=Array(b),e=0;b>e;e++)c[e]=arguments[e];return void 0!==d.mediaElement.renderer&&null!==d.mediaElement.renderer&&"function"==typeof d.mediaElement.renderer[a]?d.mediaElement.renderer[a](c):null}};n(d.mediaElement,"src",q,r),d.mediaElement.getSrc=q,d.mediaElement.setSrc=r;for(var t=0,u=h.length;u>t;t++)p(h[t]);for(var v=0,w=j.length;w>v;v++)s(j[v]);if(d.mediaElement.events={},d.mediaElement.addEventListener=function(a,b){d.mediaElement.events[a]=d.mediaElement.events[a]||[],d.mediaElement.events[a].push(b)},d.mediaElement.removeEventListener=function(a,b){if(!a)return d.mediaElement.events={},!0;var c=d.mediaElement.events[a];if(!c)return!0;if(!b)return d.mediaElement.events[a]=[],!0;for(var e=0;e<c.length;e++)if(c[e]===b)return d.mediaElement.events[a].splice(e,1),!0;return!1},d.mediaElement.dispatchEvent=function(a){var b=d.mediaElement.events[a.type];if(b)for(var c=0;c<b.length;c++)b[c].apply(null,[a])},null!==d.mediaElement.originalNode){var x=[];switch(d.mediaElement.originalNode.nodeName.toLowerCase()){case"iframe":x.push({type:"",src:d.mediaElement.originalNode.getAttribute("src")});break;case"audio":case"video":var y=void 0,z=void 0,A=void 0,B=d.mediaElement.originalNode.childNodes.length,C=d.mediaElement.originalNode.getAttribute("src");if(C){var D=d.mediaElement.originalNode;x.push({type:l.formatType(C,D.getAttribute("type")),src:C})}for(var E=0;B>E;E++)y=d.mediaElement.originalNode.childNodes[E],y.nodeType===Node.ELEMENT_NODE&&"source"===y.tagName.toLowerCase()&&(z=y.getAttribute("src"),A=l.formatType(z,y.getAttribute("type")),x.push({type:A,src:z}))}x.length>0&&(d.mediaElement.src=x)}return d.mediaElement.options.success&&d.mediaElement.options.success(d.mediaElement,d.mediaElement.originalNode),d.mediaElement};g["default"].MediaElement=n,c["default"]=n},{2:2,25:25,3:3,6:6,7:7}],6:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0});var e=a(3),f=d(e),g={};g.version="3.2.4",g.html5media={properties:["volume","src","currentTime","muted","duration","paused","ended","buffered","error","networkState","readyState","seeking","seekable","currentSrc","preload","bufferedBytes","bufferedTime","initialTime","startOffsetTime","defaultPlaybackRate","playbackRate","played","autoplay","loop","controls"],readOnlyProperties:["duration","paused","ended","buffered","error","networkState","readyState","seeking","seekable"],methods:["load","play","pause","canPlayType"],events:["loadstart","progress","suspend","abort","error","emptied","stalled","play","pause","loadedmetadata","loadeddata","waiting","playing","canplay","canplaythrough","seeking","seeked","timeupdate","ended","ratechange","durationchange","volumechange"],mediaTypes:["audio/mp3","audio/ogg","audio/oga","audio/wav","audio/x-wav","audio/wave","audio/x-pn-wav","audio/mpeg","audio/mp4","video/mp4","video/webm","video/ogg"]},f["default"].mejs=g,c["default"]=g},{3:3}],7:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0}),c.renderer=void 0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a(6),i=d(h),j=function(){function a(){e(this,a),this.renderers={},this.order=[]}return g(a,[{key:"add",value:function(a){if(void 0===a.name)throw new TypeError("renderer must contain at least `name` property");this.renderers[a.name]=a,this.order.push(a.name)}},{key:"select",value:function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=b.length;b=b.length?b:this.order,c||!function(){var a=[/^(html5|native)/,/^flash/,/iframe$/],c=function(b){for(var c=0,d=a.length;d>c;c++)if(null!==b.match(a[c]))return c;return a.length};b.sort(function(a,b){return c(a)-c(b)})}();for(var d=0,e=b.length;e>d;d++){var f=b[d],g=this.renderers[f];if(null!==g&&void 0!==g)for(var h=0,i=a.length;i>h;h++)if("function"==typeof g.canPlayType&&"string"==typeof a[h].type&&g.canPlayType(a[h].type))return{rendererName:g.name,src:a[h].src}}return null}},{key:"order",set:function(a){if(!Array.isArray(a))throw new TypeError("order must be an array of strings.");this._order=a},get:function(){return this._order}},{key:"renderers",set:function(a){if(null!==a&&"object"!==("undefined"==typeof a?"undefined":f(a)))throw new TypeError("renderers must be an array of objects.");this._renderers=a},get:function(){return this._renderers}}]),a}(),k=c.renderer=new j;i["default"].Renderers=k},{6:6}],8:[function(a,b,c){"use strict";function d(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b}function e(a){return a&&a.__esModule?a:{"default":a}}var f=a(3),g=e(f),h=a(2),i=e(h),j=a(4),k=e(j),l=a(16),m=e(l),n=a(23),o=d(n),p=a(24);Object.assign(l.config,{usePluginFullScreen:!0,fullscreenText:null}),Object.assign(m["default"].prototype,{isFullScreen:!1,isNativeFullScreen:!1,isInIframe:!1,isPluginClickThroughCreated:!1,fullscreenMode:"",containerSizeTimeout:null,buildfullscreen:function(a,b,c,d){if(a.isVideo){a.isInIframe=g["default"].location!==g["default"].parent.location,d.addEventListener("loadstart",function(){a.detectFullscreenMode()});var e=null,f=this,h=p.isString(f.options.fullscreenText)?f.options.fullscreenText:k["default"].t("mejs.fullscreen"),i=$('<div class="'+f.options.classPrefix+"button "+f.options.classPrefix+'fullscreen-button">'+('<button type="button" aria-controls="'+f.id+'" title="'+h+'" aria-label="'+h+'" tabindex="0"></button>')+"</div>");if(f.addControlElement(i,"fullscreen"),i.on("click",function(){var b=o.HAS_TRUE_NATIVE_FULLSCREEN&&o.IS_FULLSCREEN||a.isFullScreen;b?a.exitFullScreen():a.enterFullScreen()}).on("mouseover",function(){if("plugin-hover"===f.fullscreenMode){null!==e&&(clearTimeout(e),e=null);var b=i.offset(),c=a.container.offset();d.positionFullscreenButton(b.left-c.left,b.top-c.top,!0)}}).on("mouseout",function(){"plugin-hover"===f.fullscreenMode&&(null!==e&&clearTimeout(e),e=setTimeout(function(){d.hideFullscreenButton()},1500))}),a.fullscreenBtn=i,f.globalBind("keydown",function(b){var c=b.which||b.keyCode||0;27===c&&(o.HAS_TRUE_NATIVE_FULLSCREEN&&o.IS_FULLSCREEN||f.isFullScreen)&&a.exitFullScreen()}),f.normalHeight=0,f.normalWidth=0,o.HAS_TRUE_NATIVE_FULLSCREEN){var j=function(){a.isFullScreen&&(o.isFullScreen()?(a.isNativeFullScreen=!0,a.setControlsSize()):(a.isNativeFullScreen=!1,a.exitFullScreen()))};a.globalBind(o.FULLSCREEN_EVENT_NAME,j)}}},detectFullscreenMode:function(){var a=this,b=null!==a.media.rendererName&&null!==a.media.rendererName.match(/(native|html5)/),c="";return o.HAS_TRUE_NATIVE_FULLSCREEN&&b?c="native-native":o.HAS_TRUE_NATIVE_FULLSCREEN&&!b?c="plugin-native":a.usePluginFullScreen?o.SUPPORT_POINTER_EVENTS?(c="plugin-click",a.createPluginClickThrough()):c="plugin-hover":c="fullwindow",a.fullscreenMode=c,c},createPluginClickThrough:function(){var a=this;if(!a.isPluginClickThroughCreated){var b=!1,c=function(){if(b){for(var c in d)d[c].hide();a.fullscreenBtn.css("pointer-events",""),a.controls.css("pointer-events",""),a.media.removeEventListener("click",a.clickToPlayPauseCallback),b=!1}},d={},e=["top","left","right","bottom"],f=function(){var b=a.fullscreenBtn.offset().left-a.container.offset().left,c=a.fullscreenBtn.offset().top-a.container.offset().top,e=a.fullscreenBtn.outerWidth(!0),f=a.fullscreenBtn.outerHeight(!0),g=a.container.width(),h=a.container.height();for(var i in d)i.css({position:"absolute",top:0,left:0});d.top.width(g).height(c),d.left.width(b).height(f).css({top:c}),d.right.width(g-b-e).height(f).css({top:c,left:b+e}),d.bottom.width(g).height(h-f-c).css({top:c+f})};a.globalBind("resize",function(){f()});for(var g=0,h=e.length;h>g;g++)d[e[g]]=$('<div class="'+a.options.classPrefix+'fullscreen-hover" />').appendTo(a.container).mouseover(c).hide();a.fullscreenBtn.on("mouseover",function(){if(!a.isFullScreen){var c=a.fullscreenBtn.offset(),e=a.container.offset();a.media.positionFullscreenButton(c.left-e.left,c.top-e.top,!1),a.fullscreenBtn.css("pointer-events","none"),a.controls.css("pointer-events","none"),a.media.addEventListener("click",a.clickToPlayPauseCallback);for(var g=0,h=d.length;h>g;g++)d[g].show();f(),b=!0}}),a.media.addEventListener("fullscreenchange",function(){a.isFullScreen=!a.isFullScreen,a.isFullScreen?a.media.removeEventListener("click",a.clickToPlayPauseCallback):a.media.addEventListener("click",a.clickToPlayPauseCallback),c()}),a.globalBind("mousemove",function(c){if(b){var d=a.fullscreenBtn.offset();(c.pageY<d.top||c.pageY>d.top+a.fullscreenBtn.outerHeight(!0)||c.pageX<d.left||c.pageX>d.left+a.fullscreenBtn.outerWidth(!0))&&(a.fullscreenBtn.css("pointer-events",""),a.controls.css("pointer-events",""),b=!1)}}),a.isPluginClickThroughCreated=!0}},cleanfullscreen:function(a){a.exitFullScreen()},enterFullScreen:function(){var a=this,b=null!==a.media.rendererName&&null!==a.media.rendererName.match(/(html5|native)/);if(o.IS_IOS&&o.HAS_IOS_FULLSCREEN&&"function"==typeof a.media.webkitEnterFullscreen)return void a.media.webkitEnterFullscreen();$(i["default"].documentElement).addClass(a.options.classPrefix+"fullscreen"),a.normalHeight=a.container.height(),a.normalWidth=a.container.width(),"native-native"===a.fullscreenMode||"plugin-native"===a.fullscreenMode?(o.requestFullScreen(a.container[0]),a.isInIframe&&setTimeout(function d(){if(a.isNativeFullScreen){var b=.002,c=$(g["default"]).width(),e=screen.width,f=Math.abs(e-c),h=e*b;f>h?a.exitFullScreen():setTimeout(d,500)}},1e3)):"fullwindow"===a.fullscreeMode,a.container.addClass(a.options.classPrefix+"container-fullscreen").width("100%").height("100%"),a.containerSizeTimeout=setTimeout(function(){a.container.css({width:"100%",height:"100%"}),a.setControlsSize()},500),b?a.$media.width("100%").height("100%"):a.container.find("iframe, embed, object, video").width("100%").height("100%"),a.options.setDimensions&&"function"==typeof a.media.setSize&&a.media.setSize(screen.width,screen.height),a.layers.children("div").width("100%").height("100%"),a.fullscreenBtn&&a.fullscreenBtn.removeClass(a.options.classPrefix+"fullscreen").addClass(a.options.classPrefix+"unfullscreen"),a.setControlsSize(),a.isFullScreen=!0;var c=Math.min(screen.width/a.width,screen.height/a.height);a.container.find("."+a.options.classPrefix+"captions-text").css("font-size",100*c+"%"),a.container.find("."+a.options.classPrefix+"captions-text").css("line-height","normal"),a.container.find("."+a.options.classPrefix+"captions-position").css("bottom","45px"),a.container.trigger("enteredfullscreen")},exitFullScreen:function(){var a=this,b=null!==a.media.rendererName&&null!==a.media.rendererName.match(/(native|html5)/);clearTimeout(a.containerSizeTimeout),o.HAS_TRUE_NATIVE_FULLSCREEN&&(o.IS_FULLSCREEN||a.isFullScreen)&&o.cancelFullScreen(),$(i["default"].documentElement).removeClass(a.options.classPrefix+"fullscreen"),a.container.removeClass(a.options.classPrefix+"container-fullscreen"),a.options.setDimensions&&(a.container.width(a.normalWidth).height(a.normalHeight),b?a.$media.width(a.normalWidth).height(a.normalHeight):a.container.find("iframe, embed, object, video").width(a.normalWidth).height(a.normalHeight),"function"==typeof a.media.setSize&&a.media.setSize(a.normalWidth,a.normalHeight),a.layers.children("div").width(a.normalWidth).height(a.normalHeight)),a.fullscreenBtn.removeClass(a.options.classPrefix+"unfullscreen").addClass(a.options.classPrefix+"fullscreen"),a.setControlsSize(),a.isFullScreen=!1,a.container.find("."+a.options.classPrefix+"captions-text").css("font-size",""),a.container.find("."+a.options.classPrefix+"captions-text").css("line-height",""),a.container.find("."+a.options.classPrefix+"captions-position").css("bottom",""),a.container.trigger("exitedfullscreen")}})},{16:16,2:2,23:23,24:24,3:3,4:4}],9:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(16),f=d(e),g=a(4),h=d(g),i=a(24);Object.assign(e.config,{playText:null,pauseText:null}),Object.assign(f["default"].prototype,{buildplaypause:function(a,b,c,d){function e(a){"play"===a?(l.removeClass(f.options.classPrefix+"play").removeClass(f.options.classPrefix+"replay").addClass(f.options.classPrefix+"pause"),m.attr({title:k,"aria-label":k})):(l.removeClass(f.options.classPrefix+"pause").removeClass(f.options.classPrefix+"replay").addClass(f.options.classPrefix+"play"),m.attr({title:j,"aria-label":j}))}var f=this,g=f.options,j=i.isString(g.playText)?g.playText:h["default"].t("mejs.play"),k=i.isString(g.pauseText)?g.pauseText:h["default"].t("mejs.pause"),l=$('<div class="'+f.options.classPrefix+"button "+f.options.classPrefix+"playpause-button "+(f.options.classPrefix+'play">')+('<button type="button" aria-controls="'+f.id+'" title="'+j+'" aria-label="'+k+'" tabindex="0"></button>')+"</div>"),m=l.find("button");f.addControlElement(l,"playpause"),l.click(function(){d.paused?d.play():d.pause()}),e("pse"),d.addEventListener("play",function(){e("play")},!1),d.addEventListener("playing",function(){e("play")},!1),d.addEventListener("pause",function(){e("pse")},!1),d.addEventListener("paused",function(){e("pse")},!1),d.addEventListener("ended",function(){a.options.loop||(l.removeClass(f.options.classPrefix+"pause").removeClass(f.options.classPrefix+"play").addClass(f.options.classPrefix+"replay"),m.attr({title:j,"aria-label":j}))},!1)}})},{16:16,24:24,4:4}],10:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(16),f=d(e),g=a(4),h=d(g),i=a(23),j=a(27);Object.assign(e.config,{enableProgressTooltip:!0}),Object.assign(f["default"].prototype,{buildprogress:function(a,b,c,d){var e=0,f=!1,g=!1,k=this,l=a.options.autoRewind,m=a.options.enableProgressTooltip?'<span class="'+k.options.classPrefix+'time-float">'+('<span class="'+k.options.classPrefix+'time-float-current">00:00</span>')+('<span class="'+k.options.classPrefix+'time-float-corner"></span>')+"</span>":"",n=$('<div class="'+k.options.classPrefix+'time-rail">'+('<span class="'+k.options.classPrefix+"time-total "+k.options.classPrefix+'time-slider">')+('<span class="'+k.options.classPrefix+'time-buffering"></span>')+('<span class="'+k.options.classPrefix+'time-loaded"></span>')+('<span class="'+k.options.classPrefix+'time-current"></span>')+('<span class="'+k.options.classPrefix+'time-handle"></span>')+(""+m)+"</span></div>");k.addControlElement(n,"progress"),b.find("."+k.options.classPrefix+"time-buffering").hide(),k.rail=b.find("."+k.options.classPrefix+"time-rail"),k.total=b.find("."+k.options.classPrefix+"time-total"),k.loaded=b.find("."+k.options.classPrefix+"time-loaded"),k.current=b.find("."+k.options.classPrefix+"time-current"),k.handle=b.find("."+k.options.classPrefix+"time-handle"),k.timefloat=b.find("."+k.options.classPrefix+"time-float"),k.timefloatcurrent=b.find("."+k.options.classPrefix+"time-float-current"),k.slider=b.find("."+k.options.classPrefix+"time-slider"),k.newTime=0,k.forcedHandlePause=!1;var o=function(b){var c=k.total.offset(),e=k.total.width(),g=0,h=0,l=void 0;l=b.originalEvent&&b.originalEvent.changedTouches?b.originalEvent.changedTouches[0].pageX:b.changedTouches?b.changedTouches[0].pageX:b.pageX,d.duration&&(l<c.left?l=c.left:l>e+c.left&&(l=e+c.left),h=l-c.left,g=h/e,k.newTime=.02>=g?0:g*d.duration,f&&null!==d.currentTime&&k.newTime.toFixed(4)!==d.currentTime.toFixed(4)&&(k.setCurrentRailHandle(k.newTime),k.updateCurrent(k.newTime)),i.IS_IOS||i.IS_ANDROID||(k.timefloat.css("left",h),k.timefloatcurrent.html(j.secondsToTimeCode(k.newTime,a.options.alwaysShowHours,a.options.showTimecodeFrameCount,a.options.framesPerSecond,a.options.secondsDecimalLength)),k.timefloat.show()))},p=function(){var b=d.currentTime,c=h["default"].t("mejs.time-slider"),e=j.secondsToTimeCode(b,a.options.alwaysShowHours,a.options.showTimecodeFrameCount,a.options.framesPerSecond,a.options.secondsDecimalLength),f=d.duration;k.slider.attr({role:"slider",tabindex:0}),d.paused?k.slider.attr({"aria-label":c,"aria-valuemin":0,"aria-valuemax":f,"aria-valuenow":b,"aria-valuetext":e}):k.slider.removeAttr("aria-label aria-valuemin aria-valuemax aria-valuenow aria-valuetext")},q=function(){var a=new Date;a-e>=1e3&&d.play()},r=function(){f&&k.newTime.toFixed(4)!==d.currentTime.toFixed(4)&&(d.setCurrentTime(k.newTime),a.setCurrentRail(),k.updateCurrent(k.newTime)),k.forcedHandlePause&&k.media.play(),k.forcedHandlePause=!1};k.slider.on("focus",function(){a.options.autoRewind=!1}).on("blur",function(){a.options.autoRewind=l}).on("keydown",function(b){if(new Date-e>=1e3&&(g=d.paused),k.options.keyActions.length){var c=b.which||b.keyCode||0,f=d.duration,h=a.options.defaultSeekForwardInterval(d),j=a.options.defaultSeekBackwardInterval(d),l=d.currentTime;switch(c){case 37:case 40:d.duration!==1/0&&(l-=j);break;case 39:case 38:d.duration!==1/0&&(l+=h);break;case 36:l=0;break;case 35:l=f;break;case 32:return void(i.IS_FIREFOX||(d.paused?d.play():d.pause()));case 13:return void(d.paused?d.play():d.pause());default:return}l=0>l?0:l>=f?f:Math.floor(l),e=new Date,g||d.pause(),l<d.duration&&!g&&setTimeout(q,1100),d.setCurrentTime(l),b.preventDefault(),b.stopPropagation()}}).on("mousedown touchstart",function(a){k.forcedHandlePause=!1,d.duration!==1/0&&(1===a.which||0===a.which)&&(d.paused||(k.media.pause(),k.forcedHandlePause=!0),f=!0,o(a),k.globalBind("mousemove.dur touchmove.dur",function(a){o(a)}),k.globalBind("mouseup.dur touchend.dur",function(){r(),f=!1,void 0!==k.timefloat&&k.timefloat.hide(),k.globalUnbind("mousemove.dur touchmove.dur mouseup.dur touchend.dur")}))}).on("mouseenter",function(){d.duration!==1/0&&(k.globalBind("mousemove.dur",function(a){o(a)}),void 0===k.timefloat||i.IS_IOS||i.IS_ANDROID||k.timefloat.show())}).on("mouseleave",function(){d.duration!==1/0&&(f||(k.globalUnbind("mousemove.dur"),
void 0!==k.timefloat&&k.timefloat.hide()))}),d.addEventListener("progress",function(c){d.duration!==1/0?(b.find("."+k.options.classPrefix+"broadcast").length&&(k.slider.show(),b.find("."+k.options.classPrefix+"broadcast").remove()),a.setProgressRail(c),k.forcedHandlePause||a.setCurrentRail(c)):b.find("."+k.options.classPrefix+"broadcast").length||(b.find("."+k.options.classPrefix+"time-rail").append('<span class="'+k.options.classPrefix+'broadcast">'+h["default"].t("mejs.live-broadcast")+"</span>"),k.slider.hide())},!1),d.addEventListener("timeupdate",function(c){d.duration!==1/0?(b.find("."+k.options.classPrefix+"broadcast").length&&(k.slider.show(),b.find("."+k.options.classPrefix+"broadcast").remove()),a.setProgressRail(c),k.forcedHandlePause||a.setCurrentRail(c),p(c)):b.find("."+k.options.classPrefix+"broadcast").length||(b.find("."+k.options.classPrefix+"time-rail").append('<span class="'+k.options.classPrefix+'broadcast">'+h["default"].t("mejs.live-broadcast")+"</span>"),k.slider.hide())},!1),k.container.on("controlsresize",function(b){d.duration!==1/0&&(a.setProgressRail(b),k.forcedHandlePause||a.setCurrentRail(b))})},setProgressRail:function(a){var b=null,c=this,d=void 0!==a?a.target:c.media;d&&d.buffered&&d.buffered.length>0&&d.buffered.end&&d.duration?b=d.buffered.end(d.buffered.length-1)/d.duration:d&&void 0!==d.bytesTotal&&d.bytesTotal>0&&void 0!==d.bufferedBytes?b=d.bufferedBytes/d.bytesTotal:a&&a.lengthComputable&&0!==a.total&&(b=a.loaded/a.total),null!==b&&(b=Math.min(1,Math.max(0,b)),c.loaded&&c.total&&c.loaded.width(100*b+"%"))},setCurrentRailHandle:function(a){var b=this;b.setCurrentRailMain(b,a)},setCurrentRail:function(){var a=this;a.setCurrentRailMain(a)},setCurrentRailMain:function(a,b){if(void 0!==a.media.currentTime&&a.media.duration){var c="undefined"==typeof b?a.media.currentTime:b;if(a.total&&a.handle){var d=Math.round(a.total.width()*c/a.media.duration),e=d-Math.round(a.handle.outerWidth(!0)/2);d=c/a.media.duration*100,a.current.width(d+"%"),a.handle.css("left",e)}}}})},{16:16,23:23,27:27,4:4}],11:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(16),f=d(e),g=a(27);Object.assign(e.config,{duration:0,timeAndDurationSeparator:"<span> | </span>"}),Object.assign(f["default"].prototype,{buildcurrent:function(a,b,c,d){var e=this,f=$('<div class="'+e.options.classPrefix+'time" role="timer" aria-live="off">'+('<span class="'+e.options.classPrefix+'currenttime">'+g.secondsToTimeCode(0,a.options.alwaysShowHours,a.options.showTimecodeFrameCount,a.options.framesPerSecond,a.options.secondsDecimalLength)+"</span>")+"</div>");e.addControlElement(f,"current"),e.currenttime=e.controls.find("."+e.options.classPrefix+"currenttime"),d.addEventListener("timeupdate",function(){e.controlsAreVisible&&a.updateCurrent()},!1)},buildduration:function(a,b,c,d){var e=this;if(b.children().last().find("."+e.options.classPrefix+"currenttime").length>0){var f=$(e.options.timeAndDurationSeparator+'<span class="'+e.options.classPrefix+'duration">'+(g.secondsToTimeCode(e.options.duration,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength)+"</span>"));f.appendTo(b.find("."+e.options.classPrefix+"time"))}else{b.find("."+e.options.classPrefix+"currenttime").parent().addClass(e.options.classPrefix+"currenttime-container");var h=$('<div class="'+e.options.classPrefix+"time "+e.options.classPrefix+'duration-container">'+('<span class="'+e.options.classPrefix+'duration">')+(g.secondsToTimeCode(e.options.duration,e.options.alwaysShowHours,e.options.showTimecodeFrameCount,e.options.framesPerSecond,e.options.secondsDecimalLength)+"</span>")+"</div>");e.addControlElement(h,"duration")}e.durationD=e.controls.find("."+e.options.classPrefix+"duration"),d.addEventListener("timeupdate",function(){e.controlsAreVisible&&a.updateDuration()},!1)},updateCurrent:function(){var a=this,b=a.media.currentTime;isNaN(b)&&(b=0),a.currenttime&&a.currenttime.html(g.secondsToTimeCode(b,a.options.alwaysShowHours,a.options.showTimecodeFrameCount,a.options.framesPerSecond,a.options.secondsDecimalLength))},updateDuration:function(){var a=this,b=a.media.duration;(isNaN(b)||b===1/0||0>b)&&(a.media.duration=a.options.duration=b=0),a.options.duration>0&&(b=a.options.duration);var c=g.secondsToTimeCode(b,a.options.alwaysShowHours,a.options.showTimecodeFrameCount,a.options.framesPerSecond,a.options.secondsDecimalLength);a.container.toggleClass(a.options.classPrefix+"long-video",c.length>5),a.durationD&&b>0&&a.durationD.html(c)}})},{16:16,27:27}],12:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(6),f=d(e),g=a(4),h=d(g),i=a(16),j=d(i),k=a(27),l=a(24);Object.assign(i.config,{startLanguage:"",tracksText:null,chaptersText:null,tracksAriaLive:!1,hideCaptionsButtonWhenEmpty:!0,toggleCaptionsButtonWhenOnlyOne:!1,slidesSelector:""}),Object.assign(j["default"].prototype,{hasChapters:!1,buildtracks:function(a,b,c,d){if(0!==a.tracks.length){var e=this,f=e.options.tracksAriaLive?' role="log" aria-live="assertive" aria-atomic="false"':"",g=l.isString(e.options.tracksText)?e.options.tracksText:h["default"].t("mejs.captions-subtitles"),i=l.isString(e.options.chaptersText)?e.options.chaptersText:h["default"].t("mejs.captions-chapters"),j=a.tracks.length;if(e.domNode.textTracks)for(var k=e.domNode.textTracks.length-1;k>=0;k--)e.domNode.textTracks[k].mode="hidden";e.cleartracks(a),a.captions=$('<div class="'+e.options.classPrefix+"captions-layer "+e.options.classPrefix+'layer">'+('<div class="'+e.options.classPrefix+"captions-position "+e.options.classPrefix+'captions-position-hover"'+f+">")+('<span class="'+e.options.classPrefix+'captions-text"></span>')+"</div></div>").prependTo(c).hide(),a.captionsText=a.captions.find("."+e.options.classPrefix+"captions-text"),a.captionsButton=$('<div class="'+e.options.classPrefix+"button "+e.options.classPrefix+'captions-button">'+('<button type="button" aria-controls="'+e.id+'" title="'+g+'" aria-label="'+g+'" tabindex="0"></button>')+('<div class="'+e.options.classPrefix+"captions-selector "+e.options.classPrefix+'offscreen">')+('<ul class="'+e.options.classPrefix+'captions-selector-list">')+('<li class="'+e.options.classPrefix+'captions-selector-list-item">')+('<input type="radio" class="'+e.options.classPrefix+'captions-selector-input" ')+('name="'+a.id+'_captions" id="'+a.id+'_captions_none" ')+'value="none" checked="checked" />'+('<label class="'+e.options.classPrefix+"captions-selector-label ")+(e.options.classPrefix+'captions-selected" ')+('for="'+a.id+'_captions_none">'+h["default"].t("mejs.none")+"</label>")+"</li></ul></div></div>"),e.addControlElement(a.captionsButton,"tracks"),a.chaptersButton=$('<div class="'+e.options.classPrefix+"button "+e.options.classPrefix+'chapters-button">'+('<button type="button" aria-controls="'+e.id+'" title="'+i+'" aria-label="'+i+'" tabindex="0"></button>')+('<div class="'+e.options.classPrefix+"chapters-selector "+e.options.classPrefix+'offscreen">')+('<ul class="'+e.options.classPrefix+'chapters-selector-list"></ul>')+"</div></div>");for(var m=0,n=0;j>n;n++){var o=a.tracks[n].kind;"subtitles"===o||"captions"===o?m++:"chapters"!==o||b.find("."+e.options.classPrefix+"chapter-selector").length||a.chaptersButton.insertAfter(a.captionsButton)}e.options.toggleCaptionsButtonWhenOnlyOne&&1===m?a.captionsButton.on("click",function(){var b="none";null===a.selectedTrack&&(b=a.tracks[0].trackId),a.setTrack(b)}):a.captionsButton.on("mouseenter focusin",function(){$(this).find("."+e.options.classPrefix+"captions-selector").removeClass(e.options.classPrefix+"offscreen")}).on("mouseleave focusout",function(){$(this).find("."+e.options.classPrefix+"captions-selector").addClass(e.options.classPrefix+"offscreen")}).on("click","input[type=radio]",function(){a.setTrack(this.value)}).on("click","."+e.options.classPrefix+"captions-selector-label",function(){$(this).siblings('input[type="radio"]').trigger("click")}).on("keydown",function(a){a.stopPropagation()}),a.chaptersButton.on("mouseenter focusin",function(){var a=$(this),b=a.find("."+e.options.classPrefix+"chapters-selector-list").children().length;b&&a.find("."+e.options.classPrefix+"chapters-selector").removeClass(e.options.classPrefix+"offscreen")}).on("mouseleave focusout",function(){$(this).find("."+e.options.classPrefix+"chapters-selector").addClass(e.options.classPrefix+"offscreen")}).on("click","input[type=radio]",function(){var b=$(this);a.chaptersButton.find("li").attr("aria-checked",!1).end().find("."+e.options.classPrefix+"chapters-selected").removeClass(e.options.classPrefix+"chapters-selected"),b.prop("checked",!0).siblings("."+e.options.classPrefix+"chapters-selector-label").addClass(e.options.classPrefix+"chapters-selected").end().parent().attr("aria-checked",!0),d.setCurrentTime(parseFloat(b.val())),d.paused&&d.play()}).on("click","."+e.options.classPrefix+"chapters-selector-label",function(){$(this).siblings('input[type="radio"]').trigger("click")}).on("keydown",function(a){a.stopPropagation()}),a.options.alwaysShowControls?a.container.find("."+e.options.classPrefix+"captions-position").addClass(e.options.classPrefix+"captions-position-hover"):a.container.on("controlsshown",function(){a.container.find("."+e.options.classPrefix+"captions-position").addClass(e.options.classPrefix+"captions-position-hover")}).on("controlshidden",function(){d.paused||a.container.find("."+e.options.classPrefix+"captions-position").removeClass(e.options.classPrefix+"captions-position-hover")}),a.trackToLoad=-1,a.selectedTrack=null,a.isLoadingTrack=!1;for(var p=0;j>p;p++){var q=a.tracks[p].kind;("subtitles"===q||"captions"===q)&&a.addTrackButton(a.tracks[p].trackId,a.tracks[p].srclang,a.tracks[p].label)}a.loadNextTrack(),d.addEventListener("timeupdate",function(){a.displayCaptions()},!1),""!==a.options.slidesSelector&&(a.slidesContainer=$(a.options.slidesSelector),d.addEventListener("timeupdate",function(){a.displaySlides()},!1)),e.container.on("controlsresize",function(){e.adjustLanguageBox()})}},cleartracks:function(a){a&&(a.captions&&a.captions.remove(),a.chapters&&a.chapters.remove(),a.captionsText&&a.captionsText.remove(),a.captionsButton&&a.captionsButton.remove(),a.chaptersButton&&a.chaptersButton.remove())},rebuildtracks:function(){var a=this;a.findTracks(),a.buildtracks(a,a.controls,a.layers,a.media)},findTracks:function(){var a=this,b=a.$media.find("track");a.tracks=[],b.each(function(b,c){c=$(c);var d=c.attr("srclang")?c.attr("srclang").toLowerCase():"",e=a.id+"_track_"+b+"_"+c.attr("kind")+"_"+d;a.tracks.push({trackId:e,srclang:d,src:c.attr("src"),kind:c.attr("kind"),label:c.attr("label")||"",entries:[],isLoaded:!1})})},setTrack:function(a){var b=this;if(b.captionsButton.find('input[type="radio"]').prop("checked",!1).end().find("."+b.options.classPrefix+"captions-selected").removeClass(b.options.classPrefix+"captions-selected").end().find('input[value="'+a+'"]').prop("checked",!0).siblings("."+b.options.classPrefix+"captions-selector-label").addClass(b.options.classPrefix+"captions-selected"),"none"===a)return b.selectedTrack=null,void b.captionsButton.removeClass(b.options.classPrefix+"captions-enabled");for(var c=0,d=b.tracks.length;d>c;c++){var e=b.tracks[c];if(e.trackId===a){null===b.selectedTrack&&b.captionsButton.addClass(b.options.classPrefix+"captions-enabled"),b.selectedTrack=e,b.captions.attr("lang",b.selectedTrack.srclang),b.displayCaptions();break}}},loadNextTrack:function(){var a=this;a.trackToLoad++,a.trackToLoad<a.tracks.length?(a.isLoadingTrack=!0,a.loadTrack(a.trackToLoad)):(a.isLoadingTrack=!1,a.checkForTracks())},loadTrack:function(a){var b=this,c=b.tracks[a],d=function(){c.isLoaded=!0,b.enableTrackButton(c),b.loadNextTrack()};void 0===c||void 0===c.src&&""===c.src||$.ajax({url:c.src,dataType:"text",success:function(a){"string"==typeof a&&/<tt\s+xml/gi.exec(a)?c.entries=f["default"].TrackFormatParser.dfxp.parse(a):c.entries=f["default"].TrackFormatParser.webvtt.parse(a),d(),"slides"===c.kind?b.setupSlides(c):"chapters"!==c.kind||b.hasChapters||(b.drawChapters(c),b.hasChapters=!0)},error:function(){b.removeTrackButton(c.trackId),b.loadNextTrack()}})},enableTrackButton:function(a){var b=this,c=a.srclang,d=$("#"+a.trackId),e=a.label;""===e&&(e=h["default"].t(f["default"].language.codes[c])||c),d.prop("disabled",!1).siblings("."+b.options.classPrefix+"captions-selector-label").html(e),b.options.startLanguage===c&&d.prop("checked",!0).trigger("click"),b.adjustLanguageBox()},removeTrackButton:function(a){var b=this;b.captionsButton.find("input[id="+a+"]").closest("li").remove(),b.adjustLanguageBox()},addTrackButton:function(a,b,c){var d=this;""===c&&(c=h["default"].t(f["default"].language.codes[b])||b),d.captionsButton.find("ul").append($('<li class="'+d.options.classPrefix+'captions-selector-list-item">'+('<input type="radio" class="'+d.options.classPrefix+'captions-selector-input" ')+('name="'+d.id+'_captions" id="'+a+'" value="'+a+'" disabled="disabled" />')+('<label class="'+d.options.classPrefix+'captions-selector-label">'+c+" (loading)</label>")+"</li>")),d.adjustLanguageBox(),d.container.find("."+d.options.classPrefix+"captions-translations option[value="+b+"]").remove()},adjustLanguageBox:function(){var a=this;a.captionsButton.find("."+a.options.classPrefix+"captions-selector").height(a.captionsButton.find("."+a.options.classPrefix+"captions-selector-list").outerHeight(!0)+a.captionsButton.find("."+a.options.classPrefix+"captions-translations").outerHeight(!0))},checkForTracks:function(){var a=this,b=!1;if(a.options.hideCaptionsButtonWhenEmpty){for(var c=0,d=a.tracks.length;d>c;c++){var e=a.tracks[c].kind;if(("subtitles"===e||"captions"===e)&&a.tracks[c].isLoaded){b=!0;break}}b||(a.captionsButton.hide(),a.setControlsSize())}},displayCaptions:function(){if(void 0!==this.tracks){var a=this,b=a.selectedTrack,c=function(a){var b=document.createElement("div");b.innerHTML=a;for(var c=b.getElementsByTagName("script"),d=c.length;d--;)c[d].parentNode.removeChild(c[d]);for(var e=b.getElementsByTagName("*"),f=0,g=e.length;g>f;f++)for(var h=e[f].attributes,i=Array.prototype.slice.call(h),j=0,k=i.length;k>j;j++)i[j].name.startsWith("on")||i[j].value.startsWith("javascript")?e[f].parentNode.removeChild(e[f]):"style"===i[j].name&&e[f].removeAttribute(i[j].name);return b.innerHTML};if(null!==b&&b.isLoaded){var d=a.searchTrackPosition(b.entries,a.media.currentTime);if(d>-1)return a.captionsText.html(c(b.entries[d].text)).attr("class",a.options.classPrefix+"captions-text "+(b.entries[d].identifier||"")),void a.captions.show().height(0);a.captions.hide()}else a.captions.hide()}},setupSlides:function(a){var b=this;b.slides=a,b.slides.entries.imgs=[b.slides.entries.length],b.showSlide(0)},showSlide:function(a){if(void 0!==this.tracks&&void 0!==this.slidesContainer){var b=this,c=b.slides.entries[a].text,d=b.slides.entries[a].imgs;void 0===d||void 0===d.fadeIn?b.slides.entries[a].imgs=d=$('<img src="'+c+'">').on("load",function(){d.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()}):d.is(":visible")||d.is(":animated")||d.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if(void 0!==this.slides){var a=this,b=a.slides,c=a.searchTrackPosition(b.entries,a.media.currentTime);return c>-1?void a.showSlide(c):void 0}},drawChapters:function(a){var b=this,c=a.entries.length;if(c){b.chaptersButton.find("ul").empty();for(var d=0;c>d;d++)b.chaptersButton.find("ul").append($('<li class="'+b.options.classPrefix+'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">'+('<input type="radio" class="'+b.options.classPrefix+'captions-selector-input" ')+('name="'+b.id+'_chapters" value="'+a.entries[d].start+'" disabled>')+('<label class="'+b.options.classPrefix+'chapters-selector-label">'+a.entries[d].text+"</label>")+"</li>"));$.each(b.chaptersButton.find('input[type="radio"]'),function(){$(this).prop({disabled:!1,checked:!1})})}},searchTrackPosition:function(a,b){for(var c=0,d=a.length-1,e=void 0,f=void 0,g=void 0;d>=c;){if(e=c+d>>1,f=a[e].start,g=a[e].stop,b>=f&&g>b)return e;b>f?c=e+1:f>b&&(d=e-1)}return-1}}),f["default"].language={codes:{af:"mejs.afrikaans",sq:"mejs.albanian",ar:"mejs.arabic",be:"mejs.belarusian",bg:"mejs.bulgarian",ca:"mejs.catalan",zh:"mejs.chinese","zh-cn":"mejs.chinese-simplified","zh-tw":"mejs.chines-traditional",hr:"mejs.croatian",cs:"mejs.czech",da:"mejs.danish",nl:"mejs.dutch",en:"mejs.english",et:"mejs.estonian",fl:"mejs.filipino",fi:"mejs.finnish",fr:"mejs.french",gl:"mejs.galician",de:"mejs.german",el:"mejs.greek",ht:"mejs.haitian-creole",iw:"mejs.hebrew",hi:"mejs.hindi",hu:"mejs.hungarian",is:"mejs.icelandic",id:"mejs.indonesian",ga:"mejs.irish",it:"mejs.italian",ja:"mejs.japanese",ko:"mejs.korean",lv:"mejs.latvian",lt:"mejs.lithuanian",mk:"mejs.macedonian",ms:"mejs.malay",mt:"mejs.maltese",no:"mejs.norwegian",fa:"mejs.persian",pl:"mejs.polish",pt:"mejs.portuguese",ro:"mejs.romanian",ru:"mejs.russian",sr:"mejs.serbian",sk:"mejs.slovak",sl:"mejs.slovenian",es:"mejs.spanish",sw:"mejs.swahili",sv:"mejs.swedish",tl:"mejs.tagalog",th:"mejs.thai",tr:"mejs.turkish",uk:"mejs.ukrainian",vi:"mejs.vietnamese",cy:"mejs.welsh",yi:"mejs.yiddish"}},f["default"].TrackFormatParser={webvtt:{pattern:/^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(a){for(var b=a.split(/\r?\n/),c=[],d=void 0,e=void 0,f=void 0,g=0,h=b.length;h>g;g++){if(d=this.pattern.exec(b[g]),d&&g<b.length){for(g-1>=0&&""!==b[g-1]&&(f=b[g-1]),g++,e=b[g],g++;""!==b[g]&&g<b.length;)e=e+"\n"+b[g],g++;e=$.trim(e).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),c.push({identifier:f,start:0===k.convertSMPTEtoSeconds(d[1])?.2:k.convertSMPTEtoSeconds(d[1]),stop:k.convertSMPTEtoSeconds(d[3]),text:e,settings:d[5]})}f=""}return c}},dfxp:{parse:function(a){a=$(a).filter("tt");var b=a.children("div").eq(0),c=b.find("p"),d=a.find("#"+b.attr("style")),e=[],f=void 0;if(d.length){var g=d.removeAttr("id").get(0).attributes;if(g.length){f={};for(var h=0,i=g.length;i>h;h++)f[g[h].name.split(":")[1]]=g[h].value}}for(var j=0,l=c.length;l>j;j++){var m=void 0,n={start:null,stop:null,style:null,text:null};if(c.eq(j).attr("begin")&&(n.start=k.convertSMPTEtoSeconds(c.eq(j).attr("begin"))),!n.start&&c.eq(j-1).attr("end")&&(n.start=k.convertSMPTEtoSeconds(c.eq(j-1).attr("end"))),c.eq(j).attr("end")&&(n.stop=k.convertSMPTEtoSeconds(c.eq(j).attr("end"))),!n.stop&&c.eq(j+1).attr("begin")&&(n.stop=k.convertSMPTEtoSeconds(c.eq(j+1).attr("begin"))),f){m="";for(var o in f)m+=o+":"+f[o]+";"}m&&(n.style=m),0===n.start&&(n.start=.2),n.text=$.trim(c.eq(j).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,"<a href='$1' target='_blank'>$1</a>"),e.push(n)}return e}}}},{16:16,24:24,27:27,4:4,6:6}],13:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(16),f=d(e),g=a(4),h=d(g),i=a(23),j=a(24);Object.assign(e.config,{muteText:null,unmuteText:null,allyVolumeControlText:null,hideVolumeOnTouchDevices:!0,audioVolume:"horizontal",videoVolume:"vertical"}),Object.assign(f["default"].prototype,{buildvolume:function(a,b,c,d){if(!i.IS_ANDROID&&!i.IS_IOS||!this.options.hideVolumeOnTouchDevices){var e=this,f=e.isVideo?e.options.videoVolume:e.options.audioVolume,g=j.isString(e.options.muteText)?e.options.muteText:h["default"].t("mejs.mute"),k=j.isString(e.options.unmuteText)?e.options.unmuteText:h["default"].t("mejs.unmute"),l=j.isString(e.options.allyVolumeControlText)?e.options.allyVolumeControlText:h["default"].t("mejs.volume-help-text"),m="horizontal"===f?$('<div class="'+e.options.classPrefix+"button "+e.options.classPrefix+"volume-button "+e.options.classPrefix+'mute">'+('<button type="button" aria-controls="'+e.id+'" title="'+g+'" aria-label="'+g+'" tabindex="0"></button>')+"</div>"+('<a href="javascript:void(0);" class="'+e.options.classPrefix+'horizontal-volume-slider">')+('<span class="'+e.options.classPrefix+'offscreen">'+l+"</span>")+('<div class="'+e.options.classPrefix+'horizontal-volume-total">')+('<div class="'+e.options.classPrefix+'horizontal-volume-current"></div>')+('<div class="'+e.options.classPrefix+'horizontal-volume-handle"></div>')+"</div></a>").appendTo(b):$('<div class="'+e.options.classPrefix+"button "+e.options.classPrefix+"volume-button "+e.options.classPrefix+'mute">'+('<button type="button" aria-controls="'+e.id+'" title="'+g+'" aria-label="'+g+'" tabindex="0"></button>')+('<a href="javascript:void(0);" class="'+e.options.classPrefix+'volume-slider">')+('<span class="'+e.options.classPrefix+'offscreen">'+l+"</span>")+('<div class="'+e.options.classPrefix+'volume-total">')+('<div class="'+e.options.classPrefix+'volume-current"></div>')+('<div class="'+e.options.classPrefix+'volume-handle"></div>')+"</div></a></div>");e.addControlElement(m,"volume");var n=e.container.find("."+e.options.classPrefix+"volume-slider, \n				."+e.options.classPrefix+"horizontal-volume-slider"),o=e.container.find("."+e.options.classPrefix+"volume-total, \n				."+e.options.classPrefix+"horizontal-volume-total"),p=e.container.find("."+e.options.classPrefix+"volume-current, \n				."+e.options.classPrefix+"horizontal-volume-current"),q=e.container.find("."+e.options.classPrefix+"volume-handle, \n				."+e.options.classPrefix+"horizontal-volume-handle"),r=function(a){a=Math.max(0,a),a=Math.min(a,1),0===a?(m.removeClass(e.options.classPrefix+"mute").addClass(e.options.classPrefix+"unmute"),m.children("button").attr({title:k,"aria-label":k})):(m.removeClass(e.options.classPrefix+"unmute").addClass(e.options.classPrefix+"mute"),m.children("button").attr({title:g,"aria-label":g}));var b=100*a+"%";"vertical"===f?(p.css({bottom:"0",height:b}),q.css({bottom:b,marginBottom:-q.height()/2+"px"})):(p.css({left:"0",width:b}),q.css({left:b,marginLeft:-q.width()/2+"px"}))},s=function(a){var b=null,c=o.offset();if("vertical"===f){var e=o.height(),g=a.pageY-c.top;if(b=(e-g)/e,0===c.top||0===c.left)return}else{var h=o.width(),i=a.pageX-c.left;b=i/h}b=Math.max(0,b),b=Math.min(b,1),r(b),0===b?d.setMuted(!0):d.setMuted(!1),d.setVolume(b)},t=!1,u=!1;m.on("mouseenter focusin",function(){n.show(),u=!0}).on("mouseleave focusout",function(){u=!1,t||"vertical"!==f||n.hide()});var v=function(){var a=Math.floor(100*d.volume);n.attr({"aria-label":h["default"].t("mejs.volume-slider"),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a,"aria-valuetext":a+"%",role:"slider",tabindex:-1})};n.on("mouseover",function(){u=!0}).on("mousedown",function(a){return s(a),e.globalBind("mousemove.vol",function(a){s(a)}),e.globalBind("mouseup.vol",function(){t=!1,e.globalUnbind("mousemove.vol mouseup.vol"),u||"vertical"!==f||n.hide()}),t=!0,!1}).on("keydown",function(a){if(e.options.keyActions.length){var b=a.which||a.keyCode||0,c=d.volume;switch(b){case 38:c=Math.min(c+.1,1);break;case 40:c=Math.max(0,c-.1);break;default:return!0}return t=!1,r(c),d.setVolume(c),!1}}),m.find("button").on("click",function(){d.setMuted(!d.muted)}).on("focus",function(){"vertical"===f&&n.show()}).on("blur",function(){"vertical"===f&&n.hide()}),d.addEventListener("volumechange",function(a){t||(d.muted?(r(0),m.removeClass(e.options.classPrefix+"mute").addClass(e.options.classPrefix+"unmute")):(r(d.volume),m.removeClass(e.options.classPrefix+"unmute").addClass(e.options.classPrefix+"mute"))),v(a)},!1),0===a.options.startVolume&&d.setMuted(!0);var w=null!==e.media.rendererName&&null!==e.media.rendererName.match(/(native|html5)/);w&&d.setVolume(a.options.startVolume),e.container.on("controlsresize",function(){d.muted?(r(0),m.removeClass(e.options.classPrefix+"mute").addClass(e.options.classPrefix+"unmute")):(r(d.volume),m.removeClass(e.options.classPrefix+"unmute").addClass(e.options.classPrefix+"mute"))})}}})},{16:16,23:23,24:24,4:4}],14:[function(a,b,c){"use strict";/*!
 * This is a `i18n` language object.
 *
 * English; This can serve as a template for other languages to translate
 *
 * @author
 *   TBD
 *   Sascha Greuel (Twitter: @SoftCreatR)
 *
 * @see core/i18n.js
 */
Object.defineProperty(c,"__esModule",{value:!0});c.EN={"mejs.plural-form":1,"mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}},{}],15:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(3),f=d(e),g=a(6),h=d(g);"undefined"!=typeof jQuery?h["default"].$=f["default"].jQuery=f["default"].$=jQuery:"undefined"!=typeof Zepto?(h["default"].$=f["default"].Zepto=f["default"].$=Zepto,Zepto.fn.outerWidth=function(a){var b=$(this).width();return a&&(b+=parseInt($(this).css("margin-right"),10),b+=parseInt($(this).css("margin-left"),10)),b}):"undefined"!=typeof ender&&(h["default"].$=f["default"].ender=f["default"].$=ender)},{3:3,6:6}],16:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(c,"__esModule",{value:!0}),c.config=void 0;var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},g=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),h=a(3),i=d(h),j=a(2),k=d(j),l=a(6),m=d(l),n=a(5),o=d(n),p=a(4),q=d(p),r=a(23),s=a(24),t=a(27),u=a(25);m["default"].mepIndex=0,m["default"].players={};var v=c.config={poster:"",showPosterWhenEnded:!1,showPosterWhenPaused:!1,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:40,defaultSeekBackwardInterval:function(a){return.05*a.duration},defaultSeekForwardInterval:function(a){return.05*a.duration},setDimensions:!0,audioWidth:-1,audioHeight:-1,startVolume:.8,loop:!1,autoRewind:!0,enableAutosize:!0,timeFormat:"",alwaysShowHours:!1,showTimecodeFrameCount:!1,framesPerSecond:25,alwaysShowControls:!1,hideVideoControlsOnLoad:!1,hideVideoControlsOnPause:!1,clickToPlayPause:!0,controlsTimeoutDefault:1500,controlsTimeoutMouseEnter:2500,controlsTimeoutMouseLeave:1e3,iPadUseNativeControls:!1,iPhoneUseNativeControls:!1,AndroidUseNativeControls:!1,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:!0,stretching:"auto",classPrefix:"mejs__",enableKeyboard:!0,pauseOtherPlayers:!0,secondsDecimalLength:0,keyActions:[{keys:[32,179],action:function(a,b){r.IS_FIREFOX||(b.paused||b.ended?b.play():b.pause())}},{keys:[38],action:function(a,b){(a.container.find("."+v.classPrefix+"volume-button>button").is(":focus")||a.container.find("."+v.classPrefix+"volume-slider").is(":focus"))&&a.container.find("."+v.classPrefix+"volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.min(b.volume+.1,1);b.setVolume(c),c>0&&b.setMuted(!1)}},{keys:[40],action:function(a,b){(a.container.find("."+v.classPrefix+"volume-button>button").is(":focus")||a.container.find("."+v.classPrefix+"volume-slider").is(":focus"))&&a.container.find("."+v.classPrefix+"volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.max(b.volume-.1,0);b.setVolume(c),.1>=c&&b.setMuted(!0)}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){a.isVideo&&(a.showControls(),a.startControlsTimer());var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a,b,c,d){d.ctrlKey||"undefined"!=typeof a.enterFullScreen&&(a.isFullScreen?a.exitFullScreen():a.enterFullScreen())}},{keys:[77],action:function(a){a.container.find("."+v.classPrefix+"volume-slider").css("display","block"),a.isVideo&&(a.showControls(),a.startControlsTimer()),a.media.muted?a.setMuted(!1):a.setMuted(!0)}}]};m["default"].MepDefaults=v;var w=function(){function a(b,c){e(this,a);var d=this;"undefined"!=typeof m["default"].$&&(i["default"].$=m["default"].$),d.hasFocus=!1,d.controlsAreVisible=!0,d.controlsEnabled=!0,d.controlsTimer=null;var f="string"==typeof b?k["default"].getElementById(b):b;if(!(d instanceof a))return new a(f,c);if(d.$media=d.$node=$(f),d.node=d.media=d.$media[0],d.node){if(void 0!==d.node.player)return d.node.player;void 0===c&&(c=d.$node.data("mejsoptions")),d.options=Object.assign({},v,c),d.options.timeFormat||(d.options.timeFormat="mm:ss",d.options.alwaysShowHours&&(d.options.timeFormat="hh:mm:ss"),d.options.showTimecodeFrameCount&&(d.options.timeFormat+=":ff")),t.calculateTimeFormat(0,d.options,d.options.framesPerSecond||25),d.id="mep_"+m["default"].mepIndex++,m["default"].players[d.id]=d;var g=Object.assign({},d.options,{success:function(a,b){d._meReady(a,b)},error:function(a){d._handleError(a)}}),h=d.media.tagName.toLowerCase();if(d.isDynamic="audio"!==h&&"video"!==h,d.isVideo=d.isDynamic?d.options.isVideo:"audio"!==h&&d.options.isVideo,r.IS_IPAD&&d.options.iPadUseNativeControls||r.IS_IPHONE&&d.options.iPhoneUseNativeControls)d.$media.attr("controls","controls"),r.IS_IPAD&&d.media.getAttribute("autoplay")&&d.play();else if(r.IS_ANDROID&&d.options.AndroidUseNativeControls);else if(d.isVideo||!d.isVideo&&d.options.features.length){d.$media.removeAttr("controls");var j=d.isVideo?q["default"].t("mejs.video-player"):q["default"].t("mejs.audio-player");$('<span class="'+d.options.classPrefix+'offscreen">'+j+"</span>").insertBefore(d.$media),d.container=$('<div id="'+d.id+'" class="'+d.options.classPrefix+"container "+d.options.classPrefix+'container-keyboard-inactive"'+('tabindex="0" role="application" aria-label="'+j+'">')+('<div class="'+d.options.classPrefix+'inner">')+('<div class="'+d.options.classPrefix+'layers"></div>')+('<div class="'+d.options.classPrefix+'controls"></div>')+('<div class="'+d.options.classPrefix+'mediaelement"></div>')+('<div class="'+d.options.classPrefix+'clear"></div>')+"</div></div>").addClass(d.$media[0].className).insertBefore(d.$media).focus(function(a){if(!d.controlsAreVisible&&!d.hasFocus&&d.controlsEnabled&&(d.showControls(!0),!r.HAS_MS_NATIVE_FULLSCREEN)){var b=s.isNodeAfter(a.relatedTarget,d.container[0])?"."+d.options.classPrefix+"controls ."+d.options.classPrefix+"button:last-child > button":"."+d.options.classPrefix+"playpause-button > button",c=d.container.find(b);c.focus()}}),d.options.features.length||d.container.css("background","transparent").find("."+d.options.classPrefix+"controls").hide(),d.isVideo&&"fill"===d.options.stretching&&!d.container.parent("."+d.options.classPrefix+"fill-container").length&&(d.outerContainer=d.$media.parent(),d.container.wrap('<div class="'+d.options.classPrefix+'fill-container"/>')),d.container.addClass((r.IS_ANDROID?d.options.classPrefix+"android ":"")+(r.IS_IOS?d.options.classPrefix+"ios ":"")+(r.IS_IPAD?d.options.classPrefix+"ipad ":"")+(r.IS_IPHONE?d.options.classPrefix+"iphone ":"")+(d.isVideo?d.options.classPrefix+"video ":d.options.classPrefix+"audio ")),d.container.find("."+d.options.classPrefix+"mediaelement").append(d.$media),d.node.player=d,d.controls=d.container.find("."+d.options.classPrefix+"controls"),d.layers=d.container.find("."+d.options.classPrefix+"layers");var l=d.isVideo?"video":"audio",n=l.substring(0,1).toUpperCase()+l.substring(1);d.options[l+"Width"]>0||d.options[l+"Width"].toString().indexOf("%")>-1?d.width=d.options[l+"Width"]:""!==d.media.style.width&&null!==d.media.style.width?d.width=d.media.style.width:d.media.getAttribute("width")?d.width=d.$media.attr("width"):d.width=d.options["default"+n+"Width"],d.options[l+"Height"]>0||d.options[l+"Height"].toString().indexOf("%")>-1?d.height=d.options[l+"Height"]:""!==d.media.style.height&&null!==d.media.style.height?d.height=d.media.style.height:d.$media[0].getAttribute("height")?d.height=d.$media.attr("height"):d.height=d.options["default"+n+"Height"],d.initialAspectRatio=d.height>=d.width?d.width/d.height:d.height/d.width,d.setPlayerSize(d.width,d.height),g.pluginWidth=d.width,g.pluginHeight=d.height}else d.isVideo||d.options.features.length||d.$media.hide();return new o["default"](d.$media[0],g),void 0!==d.container&&d.options.features.length&&d.controlsAreVisible&&!d.options.hideVideoControlsOnLoad&&d.container.trigger("controlsshown"),d}}return g(a,[{key:"showControls",value:function(a){var b=this;a=void 0===a||a,b.controlsAreVisible||(a?(b.controls.removeClass(b.options.classPrefix+"offscreen").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0,b.container.trigger("controlsshown")}),b.container.find("."+b.options.classPrefix+"control").removeClass(b.options.classPrefix+"offscreen").stop(!0,!0).fadeIn(200,function(){b.controlsAreVisible=!0})):(b.controls.removeClass(b.options.classPrefix+"offscreen").css("display","block"),b.container.find("."+b.options.classPrefix+"control").removeClass(b.options.classPrefix+"offscreen").css("display","block"),b.controlsAreVisible=!0,b.container.trigger("controlsshown")),b.setControlsSize())}},{key:"hideControls",value:function(a){var b=this;a=void 0===a||a,!b.controlsAreVisible||b.options.alwaysShowControls||b.keyboardAction||b.media.paused&&4===b.media.readyState&&(!b.options.hideVideoControlsOnLoad&&b.media.currentTime<=0||!b.options.hideVideoControlsOnPause&&b.media.currentTime>0)||b.isVideo&&!b.options.hideVideoControlsOnLoad&&!b.media.readyState||b.media.ended||(a?(b.controls.stop(!0,!0).fadeOut(200,function(){$(this).addClass(b.options.classPrefix+"offscreen").css("display","block"),b.controlsAreVisible=!1,b.container.trigger("controlshidden")}),b.container.find("."+b.options.classPrefix+"control").stop(!0,!0).fadeOut(200,function(){$(this).addClass(b.options.classPrefix+"offscreen").css("display","block")})):(b.controls.addClass(b.options.classPrefix+"offscreen").css("display","block"),b.container.find("."+b.options.classPrefix+"control").addClass(b.options.classPrefix+"offscreen").css("display","block"),b.controlsAreVisible=!1,b.container.trigger("controlshidden")))}},{key:"startControlsTimer",value:function(a){var b=this;a="undefined"!=typeof a?a:b.options.controlsTimeoutDefault,b.killControlsTimer("start"),b.controlsTimer=setTimeout(function(){b.hideControls(),b.killControlsTimer("hide")},a)}},{key:"killControlsTimer",value:function(){var a=this;null!==a.controlsTimer&&(clearTimeout(a.controlsTimer),delete a.controlsTimer,a.controlsTimer=null)}},{key:"disableControls",value:function(){var a=this;a.killControlsTimer(),a.hideControls(!1),this.controlsEnabled=!1}},{key:"enableControls",value:function(){var a=this;a.showControls(!1),a.controlsEnabled=!0}},{key:"_meReady",value:function(a,b){var c=this,d=b.getAttribute("autoplay"),e=!(void 0===d||null===d||"false"===d),g=null!==a.rendererName&&null!==a.rendererName.match(/(native|html5)/);if(!c.created){if(c.created=!0,c.media=a,c.domNode=b,!(r.IS_ANDROID&&c.options.AndroidUseNativeControls||r.IS_IPAD&&c.options.iPadUseNativeControls||r.IS_IPHONE&&c.options.iPhoneUseNativeControls)){var h=function(){if(!c.isVideo&&!c.options.features.length)return e&&g&&c.play(),c.options.success&&("string"==typeof c.options.success?i["default"][c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c)),{v:void 0};c.buildposter(c,c.controls,c.layers,c.media),c.buildkeyboard(c,c.controls,c.layers,c.media),c.buildoverlays(c,c.controls,c.layers,c.media),c.findTracks(),c.featurePosition={};for(var a=0,b=c.options.features.length;b>a;a++){var d=c.options.features[a];if(c["build"+d])try{c["build"+d](c,c.controls,c.layers,c.media)}catch(f){console.error("error building "+d,f)}}c.container.trigger("controlsready"),c.setPlayerSize(c.width,c.height),c.setControlsSize(),c.isVideo&&(!r.IS_ANDROID&&!r.IS_IOS||c.options.alwaysShowControls?(c.createIframeLayer(),c.clickToPlayPauseCallback=function(){if(c.options.clickToPlayPause){var a=c.$media.closest("."+c.options.classPrefix+"container").find("."+c.options.classPrefix+"overlay-button"),b=a.attr("aria-pressed");c.media.paused&&b?c.pause():c.media.paused?c.play():c.pause(),a.attr("aria-pressed",!b)}},c.media.addEventListener("click",c.clickToPlayPauseCallback,!1),c.container.on("mouseenter",function(){c.controlsEnabled&&(c.options.alwaysShowControls||(c.killControlsTimer("enter"),c.showControls(),c.startControlsTimer(c.options.controlsTimeoutMouseEnter)))}).on("mousemove",function(){c.controlsEnabled&&(c.controlsAreVisible||c.showControls(),c.options.alwaysShowControls||c.startControlsTimer(c.options.controlsTimeoutMouseEnter))}).on("mouseleave",function(){c.controlsEnabled&&(c.media.paused||c.options.alwaysShowControls||c.startControlsTimer(c.options.controlsTimeoutMouseLeave))})):c.$media.on("touchstart",function(){c.controlsAreVisible?c.hideControls(!1):c.controlsEnabled&&c.showControls(!1)}),c.options.hideVideoControlsOnLoad&&c.hideControls(!1),e&&!c.options.alwaysShowControls&&c.hideControls(),c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(a){c.options.videoHeight<=0&&!c.domNode.getAttribute("height")&&null!==a.target&&!isNaN(a.target.videoHeight)&&(c.setPlayerSize(a.target.videoWidth,a.target.videoHeight),c.setControlsSize(),c.media.setSize(a.target.videoWidth,a.target.videoHeight))},!1)),c.media.addEventListener("play",function(){c.hasFocus=!0;for(var a in m["default"].players)if(m["default"].players.hasOwnProperty(a)){var b=m["default"].players[a];b.id===c.id||!c.options.pauseOtherPlayers||b.paused||b.ended||(b.pause(),b.hasFocus=!1)}},!1),c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0),setTimeout(function(){$(c.container).find("."+c.options.classPrefix+"overlay-loading").parent().hide()},20)}catch(a){}"function"==typeof c.media.stop?c.media.stop():c.media.pause(),c.setProgressRail&&c.setProgressRail(),c.setCurrentRail&&c.setCurrentRail(),c.options.loop?c.play():!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},!1),c.media.addEventListener("loadedmetadata",function(){t.calculateTimeFormat(c.duration,c.options,c.options.framesPerSecond||25),c.updateDuration&&c.updateDuration(),c.updateCurrent&&c.updateCurrent(),c.isFullScreen||(c.setPlayerSize(c.width,c.height),c.setControlsSize())},!1);var h=null;c.media.addEventListener("timeupdate",function(){h!==c.media.duration&&(h=c.media.duration,t.calculateTimeFormat(h,c.options,c.options.framesPerSecond||25),c.updateDuration&&c.updateDuration(),c.updateCurrent&&c.updateCurrent(),c.setControlsSize())},!1),c.container.on("focusout",s.debounce(function(){setTimeout(function(){var a=$(k["default"].activeElement).closest("."+c.options.classPrefix+"container");c.keyboardAction&&!a.length&&(c.keyboardAction=!1,c.isVideo&&!c.options.alwaysShowControls&&c.hideControls(!0))},0)},100)),setTimeout(function(){c.setPlayerSize(c.width,c.height),c.setControlsSize()},50),c.globalBind("resize",function(){c.isFullScreen||r.HAS_TRUE_NATIVE_FULLSCREEN&&k["default"].webkitIsFullScreen||c.setPlayerSize(c.width,c.height),c.setControlsSize()}),c.globalBind("click",function(a){$(a.target).is("."+c.options.classPrefix+"container")?$(a.target).addClass(c.options.classPrefix+"container-keyboard-inactive"):$(a.target).closest("."+c.options.classPrefix+"container").length&&$(a.target).closest("."+c.options.classPrefix+"container").addClass(c.options.classPrefix+"container-keyboard-inactive")}),c.globalBind("keydown",function(a){$(a.target).is("."+c.options.classPrefix+"container")?$(a.target).removeClass(c.options.classPrefix+"container-keyboard-inactive"):$(a.target).closest("."+c.options.classPrefix+"container").length&&$(a.target).closest("."+c.options.classPrefix+"container").removeClass(c.options.classPrefix+"container-keyboard-inactive")})}();if("object"===("undefined"==typeof h?"undefined":f(h)))return h.v}e&&g&&c.play(),c.options.success&&("string"==typeof c.options.success?i["default"][c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c))}}},{key:"_handleError",value:function(a){var b=this;b.controls&&b.disableControls(),b.options.error&&b.options.error(a)}},{key:"setPlayerSize",value:function(a,b){var c=this;if(!c.options.setDimensions)return!1;if("undefined"!=typeof a&&(c.width=a),"undefined"!=typeof b&&(c.height=b),"undefined"!=typeof FB&&c.isVideo){FB.Event.subscribe("xfbml.ready",function(){var a=$(c.media).children(".fb-video");return c.width=a.width(),c.height=a.height(),c.setDimensions(c.width,c.height),!1});var d=$(c.media).children(".fb-video");d.length&&(c.width=d.width(),c.height=d.height())}switch(c.options.stretching){case"fill":c.isVideo?c.setFillMode():c.setDimensions(c.width,c.height);break;case"responsive":c.setResponsiveMode();break;case"none":c.setDimensions(c.width,c.height);break;default:c.hasFluidMode()===!0?c.setResponsiveMode():c.setDimensions(c.width,c.height)}}},{key:"hasFluidMode",value:function(){var a=this;return a.height.toString().includes("%")||"none"!==a.$node.css("max-width")&&a.$node.css("max-width")!==a.width||a.$node[0].currentStyle&&"100%"===a.$node[0].currentStyle.maxWidth}},{key:"setResponsiveMode",value:function(){var a=this,b=function(){return a.isVideo?a.media.videoWidth&&a.media.videoWidth>0?a.media.videoWidth:a.media.getAttribute("width")?a.media.getAttribute("width"):a.options.defaultVideoWidth:a.options.defaultAudioWidth}(),c=function(){return a.isVideo?a.media.videoHeight&&a.media.videoHeight>0?a.media.videoHeight:a.media.getAttribute("height")?a.media.getAttribute("height"):a.options.defaultVideoHeight:a.options.defaultAudioHeight}(),d=function(){var b=1;return a.isVideo?(b=a.media.videoWidth&&a.media.videoWidth>0&&a.media.videoHeight&&a.media.videoHeight>0?a.height>=a.width?a.media.videoWidth/a.media.videoHeight:a.media.videoHeight/a.media.videoWidth:a.initialAspectRatio,(isNaN(b)||.01>b||b>100)&&(b=1),b):b}(),e=a.container.parent().closest(":visible").height(),f=void 0,g=a.container.parent().closest(":visible").width();f=a.isVideo?"100%"===a.height?parseInt(g*c/b,10):a.height>=a.width?parseInt(g/d,10):parseInt(g*d,10):c,isNaN(f)&&(f=e),a.container.parent().length>0&&"body"===a.container.parent()[0].tagName.toLowerCase()&&(g=$(i["default"]).width(),f=$(i["default"]).height()),f&&g&&(a.container.width(g).height(f),a.$media.width("100%").height("100%"),a.isVideo&&a.media.setSize&&a.media.setSize(g,f),a.layers.children("."+a.options.classPrefix+"layer").width("100%").height("100%"))}},{key:"setFillMode",value:function(){var a=this,b=a.outerContainer;"none"!==a.$node.css("height")&&a.$node.css("height")!==a.height&&a.$node.css("height",""),"none"!==a.$node.css("max-width")&&a.$node.css("max-width")!==a.width&&a.$node.css("max-width",""),"none"!==a.$node.css("max-height")&&a.$node.css("max-height")!==a.height&&a.$node.css("max-height",""),a.$node[0].currentStyle&&("100%"===a.$node[0].currentStyle.height&&(a.$node[0].currentStyle.height=""),"100%"===a.$node[0].currentStyle.maxWidth&&(a.$node[0].currentStyle.maxWidth=""),"100%"===a.$node[0].currentStyle.maxHeight&&(a.$node[0].currentStyle.maxHeight="")),b.width()||b.height(a.$media.width()),b.height()||b.height(a.$media.height());var c=b.width(),d=b.height();a.setDimensions("100%","100%"),a.container.find("."+a.options.classPrefix+"poster img").css("display","block");var e=a.container.find("object, embed, iframe, video"),f=a.height,g=a.width,h=c,i=f*c/g,j=g*d/f,k=d,l=j>c==!1,m=l?Math.floor(h):Math.floor(j),n=l?Math.floor(i):Math.floor(k);l?(e.height(n).width(c),a.media.setSize&&a.media.setSize(c,n)):(e.height(d).width(m),a.media.setSize&&a.media.setSize(m,d)),e.css({"margin-left":Math.floor((c-m)/2),"margin-top":0})}},{key:"setDimensions",value:function(a,b){var c=this;c.container.width(a).height(b),c.layers.children("."+c.options.classPrefix+"layer").width(a).height(b)}},{key:"setControlsSize",value:function(){var a=this;if(a.container.is(":visible")&&a.rail&&a.rail.length&&a.rail.is(":visible")){var b=parseFloat(a.rail.css("margin-left"))+parseFloat(a.rail.css("margin-right")),c=parseFloat(a.total.css("margin-left"))+parseFloat(a.total.css("margin-right"))||0,d=0;a.rail.siblings().each(function(a,b){$(b).is(":visible")&&(d+=parseFloat($(b).outerWidth(!0)))}),d+=c+b+1,a.rail.width(a.controls.width()-d),a.container.trigger("controlsresize")}}},{key:"addControlElement",value:function(a,b){var c=this;void 0!==c.featurePosition[b]?a.insertAfter(c.controls.children(":eq("+(c.featurePosition[b]-1)+")")):(a.appendTo(c.controls),c.featurePosition[b]=c.controls.find(a).index())}},{key:"createIframeLayer",value:function(){var a=this;a.isVideo&&null!==a.media.rendererName&&null!==a.media.rendererName.match(/iframe/i)&&!a.container.find("#"+a.media.id+"-iframe-overlay").length&&$('<div id="'+a.media.id+'-iframe-overlay" class="'+a.options.classPrefix+'iframe-overlay"></div>').insertBefore($("#"+a.media.id+"_"+a.media.rendererName)).on("click",function(b){a.options.clickToPlayPause&&(a.media.paused?a.media.play():a.media.pause(),b.preventDefault(),b.stopPropagation())})}},{key:"resetSize",value:function(){var a=this;setTimeout(function(){a.setPlayerSize(a.width,a.height),a.setControlsSize()},50)}},{key:"setPoster",value:function(a){var b=this,c=b.container.find("."+b.options.classPrefix+"poster"),d=c.find("img");0===d.length&&(d=$('<img class="'+b.options.classPrefix+'poster-img" width="100%" height="100%" alt="" />').appendTo(c)),d.attr("src",a),c.css({"background-image":'url("'+a+'")'})}},{key:"changeSkin",value:function(a){var b=this;b.container[0].className=b.options.classPrefix+"container "+a,b.setPlayerSize(b.width,b.height),b.setControlsSize()}},{key:"globalBind",value:function(a,b,c){var d=this,e=d.node?d.node.ownerDocument:k["default"];a=s.splitEvents(a,d.id),a.d&&$(e).on(a.d,b,c),a.w&&$(i["default"]).on(a.w,b,c)}},{key:"globalUnbind",value:function(a,b){var c=this,d=c.node?c.node.ownerDocument:k["default"];a=s.splitEvents(a,c.id),a.d&&$(d).off(a.d,b),a.w&&$(i["default"]).off(a.w,b)}},{key:"buildposter",value:function(a,b,c,d){var e=this,f=$('<div class="'+e.options.classPrefix+"poster "+e.options.classPrefix+'layer"></div>').appendTo(c),g=a.$media.attr("poster");""!==a.options.poster&&(g=a.options.poster),g?e.setPoster(g):f.hide(),d.addEventListener("play",function(){f.hide()},!1),d.addEventListener("playing",function(){f.hide()},!1),a.options.showPosterWhenEnded&&a.options.autoRewind&&d.addEventListener("ended",function(){f.show()},!1),d.addEventListener("error",function(){f.hide()},!1),a.options.showPosterWhenPaused&&d.addEventListener("pause",function(){d.ended||f.show()},!1)}},{key:"buildoverlays",value:function(a,b,c,d){if(a.isVideo){var e=this,f=$('<div class="'+e.options.classPrefix+"overlay "+e.options.classPrefix+'layer">'+('<div class="'+e.options.classPrefix+'overlay-loading">')+('<span class="'+e.options.classPrefix+'overlay-loading-bg-img"></span>')+"</div></div>").hide().appendTo(c),g=$('<div class="'+e.options.classPrefix+"overlay "+e.options.classPrefix+'layer">'+('<div class="'+e.options.classPrefix+'overlay-error"></div>')+"</div>").hide().appendTo(c),h=$('<div class="'+e.options.classPrefix+"overlay "+e.options.classPrefix+"layer "+e.options.classPrefix+'overlay-play">'+('<div class="'+e.options.classPrefix+'overlay-button" role="button" tabindex="0"')+('aria-label="'+q["default"].t("mejs.play")+'" aria-pressed="false"></div>')+"</div>").appendTo(c).on("click",function(){if(e.options.clickToPlayPause){var a=e.$media.closest("."+e.options.classPrefix+"container").find("."+e.options.classPrefix+"overlay-button"),b=a.attr("aria-pressed");d.paused?d.play():d.pause(),a.attr("aria-pressed",!!b)}});null!==e.media.rendererName&&(e.media.rendererName.match(/(youtube|facebook)/)&&!a.$media.attr("poster")&&!a.options.poster||r.IS_STOCK_ANDROID)&&h.hide(),d.addEventListener("play",function(){h.hide(),f.hide(),b.find("."+e.options.classPrefix+"time-buffering").hide(),g.hide()},!1),d.addEventListener("playing",function(){h.hide(),f.hide(),b.find("."+e.options.classPrefix+"time-buffering").hide(),g.hide()},!1),d.addEventListener("seeking",function(){f.show(),b.find("."+e.options.classPrefix+"time-buffering").show()},!1),d.addEventListener("seeked",function(){f.hide(),b.find("."+e.options.classPrefix+"time-buffering").hide()},!1),d.addEventListener("pause",function(){r.IS_STOCK_ANDROID||h.show()},!1),d.addEventListener("waiting",function(){f.show(),b.find("."+e.options.classPrefix+"time-buffering").show()},!1),d.addEventListener("loadeddata",function(){f.show(),b.find("."+e.options.classPrefix+"time-buffering").show(),r.IS_ANDROID&&(d.canplayTimeout=setTimeout(function(){if(k["default"].createEvent){var a=k["default"].createEvent("HTMLEvents");return a.initEvent("canplay",!0,!0),d.dispatchEvent(a)}},300))},!1),d.addEventListener("canplay",function(){f.hide(),b.find("."+e.options.classPrefix+"time-buffering").hide(),clearTimeout(d.canplayTimeout)},!1),d.addEventListener("error",function(a){e._handleError(a),f.hide(),h.hide(),g.show(),g.find("."+e.options.classPrefix+"overlay-error").html(a.message)},!1),d.addEventListener("keydown",function(b){e.onkeydown(a,d,b)},!1)}}},{key:"buildkeyboard",value:function(a,b,c,d){var e=this;e.container.keydown(function(){e.keyboardAction=!0}),e.globalBind("keydown",function(b){var c=$(b.target).closest("."+e.options.classPrefix+"container");return a.hasFocus=0!==c.length&&c.attr("id")===a.$media.closest("."+e.options.classPrefix+"container").attr("id"),e.onkeydown(a,d,b)}),e.globalBind("click",function(b){a.hasFocus=0!==$(b.target).closest("."+e.options.classPrefix+"container").length})}},{key:"onkeydown",value:function(a,b,c){if(a.hasFocus&&a.options.enableKeyboard)for(var d=0,e=a.options.keyActions.length;e>d;d++)for(var f=a.options.keyActions[d],g=0,h=f.keys.length;h>g;g++)if(c.keyCode===f.keys[g])return f.action(a,b,c.keyCode,c),!1;return!0}},{key:"play",value:function(){var a=this;a.media.getCurrentTime()<=0&&a.load(),a.media.play()}},{key:"pause",value:function(){try{this.media.pause()}catch(a){}}},{key:"load",value:function(){var a=this;a.isLoaded||a.media.load(),a.isLoaded=!0}},{key:"setMuted",value:function(a){this.media.setMuted(a)}},{key:"setCurrentTime",value:function(a){this.media.setCurrentTime(a)}},{key:"getCurrentTime",value:function(){return this.media.currentTime}},{key:"setVolume",value:function(a){this.media.setVolume(a)}},{key:"getVolume",value:function(){return this.media.volume}},{key:"setSrc",value:function(a){var b=this,c=b.container.find("#"+b.media.id+"-iframe-overlay");b.media.setSrc(a),c.length&&c.remove(),b.createIframeLayer()}},{key:"remove",value:function(){var a=this,b=a.media.rendererName;a.media.paused||a.media.pause();var c=a.media.originalNode.getAttribute("src");a.media.setSrc("");for(var d in a.options.features){var e=a.options.features[d];if(a["clean"+e])try{a["clean"+e](a)}catch(g){console.error("error cleaning "+e,g)}}a.$node.css({width:a.$node.attr("width")||"auto",height:a.$node.attr("height")||"auto"}),a.isDynamic?a.$node.insertBefore(a.container):(a.$media.prop("controls",!0),a.$node.attr("id",a.$node.attr("id").replace("_"+b,"")),a.$node.attr("id",a.$node.attr("id").replace("_from_mejs","")),a.$node.removeProp("autoplay"),a.media.canPlayType(u.getTypeFromFile(c))&&a.$node.attr("src",c),null!==b.match(/iframe/i)&&a.container.find("#"+a.media.id+"-iframe-overlay").remove(),a.$node.clone().insertBefore(a.container).show(),a.$node.remove()),"function"==typeof a.media.destroy&&a.media.destroy(),delete m["default"].players[a.id],"object"===f(a.container)&&(a.container.prev("."+a.options.classPrefix+"offscreen").remove(),a.container.remove()),a.globalUnbind(),delete a.node.player}}]),a}();i["default"].MediaElementPlayer=w,c["default"]=w,function(a){"undefined"!=typeof a&&(a.fn.mediaelementplayer=function(b){return b===!1?this.each(function(){var b=a(this).data("mediaelementplayer");b&&b.remove(),a(this).removeData("mediaelementplayer")}):this.each(function(){a(this).data("mediaelementplayer",new w(this,b))}),this},a(k["default"]).ready(function(){a("."+v.classPrefix+"player").mediaelementplayer()}))}(m["default"].$)},{2:2,23:23,24:24,25:25,27:27,3:3,4:4,5:5,6:6}],17:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(3),f=d(e),g=a(2),h=d(g),i=a(6),j=d(i),k=a(7),l=a(24),m=a(25),n=a(23),o={isMediaLoaded:!1,creationQueue:[],prepareSettings:function(a){o.isLoaded?o.createInstance(a):(o.loadScript(a),o.creationQueue.push(a))},loadScript:function(a){"undefined"!=typeof dashjs?o.createInstance(a):o.isScriptLoaded||!function(){a.options.path="string"==typeof a.options.path?a.options.path:"//cdn.dashjs.org/latest/dash.mediaplayer.min.js";var b=h["default"].createElement("script"),c=h["default"].getElementsByTagName("script")[0],d=!1;b.src=a.options.path,b.onload=b.onreadystatechange=function(){d||this.readyState&&void 0!==this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,o.mediaReady(),b.onload=b.onreadystatechange=null)},c.parentNode.insertBefore(b,c),o.isScriptLoaded=!0}()},mediaReady:function(){for(o.isLoaded=!0,o.isScriptLoaded=!0;o.creationQueue.length>0;){var a=o.creationQueue.pop();o.createInstance(a)}},createInstance:function(a){var b=dashjs.MediaPlayer().create();f["default"]["__ready__"+a.id](b)}},p={name:"native_dash",options:{prefix:"native_dash",dash:{path:"//cdn.dashjs.org/latest/dash.mediaplayer.min.js",debug:!1}},canPlayType:function(a){return n.HAS_MSE&&["application/dash+xml"].includes(a)},create:function(a,b,c){var d=a.originalNode,e=a.id+"_"+b.prefix,g=d.getAttribute("preload"),i=d.getAttribute("autoplay"),m=null,n=void 0;m=d.cloneNode(!0),b=Object.assign(b,a.options);for(var p=j["default"].html5media.properties,q=function(a){
var b=""+a.substring(0,1).toUpperCase()+a.substring(1);m["get"+b]=function(){return null!==n?m[a]:null},m["set"+b]=function(b){j["default"].html5media.readOnlyProperties.includes(a)||null!==n&&("src"===a&&(n.attachSource(b),i&&m.play()),m[a]=b)}},r=0,s=p.length;s>r;r++)q(p[r]);if(f["default"]["__ready__"+e]=function(c){a.dashPlayer=n=c,n.getDebug().setLogToBrowserConsole(b.dash.debug),n.setAutoPlay(i),n.setScheduleWhilePaused("auto"===g);for(var d=j["default"].html5media.events.concat(["click","mouseover","mouseout"]),e=dashjs.MediaPlayer.events,f=function(b){"loadedmetadata"===b&&n.initialize(m,m.src,!1),m.addEventListener(b,function(b){var c=h["default"].createEvent("HTMLEvents");c.initEvent(b.type,b.bubbles,b.cancelable),a.dispatchEvent(c)})},k=0,o=d.length;o>k;k++)f(d[k]);var p=function(b){var c=l.createEvent(b.type,m);c.data=b,a.dispatchEvent(c),"error"===b.type.toLowerCase()&&console.error(b)};for(var q in e)e.hasOwnProperty(q)&&n.on(e[q],p)},c&&c.length>0)for(var t=0,u=c.length;u>t;t++)if(k.renderer.renderers[b.prefix].canPlayType(c[t].type)){m.setAttribute("src",c[t].src);break}m.setAttribute("id",e),d.parentNode.insertBefore(m,d),d.removeAttribute("autoplay"),d.style.display="none",o.prepareSettings({options:b.dash,id:e}),m.setSize=function(a,b){return m.style.width=a+"px",m.style.height=b+"px",m},m.hide=function(){return m.pause(),m.style.display="none",m},m.show=function(){return m.style.display="",m};var v=l.createEvent("rendererready",m);return a.dispatchEvent(v),m}};m.typeChecks.push(function(a){return a=a.toLowerCase(),a.includes(".mpd")?"application/dash+xml":null}),k.renderer.add(p)},{2:2,23:23,24:24,25:25,3:3,6:6,7:7}],18:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0}),c.PluginDetector=void 0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f=a(3),g=d(f),h=a(2),i=d(h),j=a(6),k=d(j),l=a(4),m=d(l),n=a(7),o=a(24),p=a(23),q=a(25),r=c.PluginDetector={plugins:[],hasPluginVersion:function(a,b){var c=r.plugins[a];return b[1]=b[1]||0,b[2]=b[2]||0,c[0]>b[0]||c[0]===b[0]&&c[1]>b[1]||c[0]===b[0]&&c[1]===b[1]&&c[2]>=b[2]},addPlugin:function(a,b,c,d,e){r.plugins[a]=r.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var f=[0,0,0],h=void 0,i=void 0;if(null!==p.NAV.plugins&&void 0!==p.NAV.plugins&&"object"===e(p.NAV.plugins[a])){if(h=p.NAV.plugins[a].description,h&&("undefined"==typeof p.NAV.mimeTypes||!p.NAV.mimeTypes[b]||p.NAV.mimeTypes[b].enabledPlugin)){f=h.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(var j=0,k=f.length;k>j;j++)f[j]=parseInt(f[j].match(/\d+/),10)}}else if(void 0!==g["default"].ActiveXObject)try{i=new ActiveXObject(c),i&&(f=d(i))}catch(l){}return f}};r.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[],c=a.GetVariable("$version");return c&&(c=c.split(" ")[1].split(","),b=[parseInt(c[0],10),parseInt(c[1],10),parseInt(c[2],10)]),b});var s={create:function(a,b,c){var d={};d.options=b,d.id=a.id+"_"+d.options.prefix,d.mediaElement=a,d.flashState={},d.flashApi=null,d.flashApiStack=[];for(var f=k["default"].html5media.properties,h=function(a){d.flashState[a]=null;var b=""+a.substring(0,1).toUpperCase()+a.substring(1);d["get"+b]=function(){if(null===d.flashApi)return null;if(void 0===d.flashApi["get_"+a])return null;var b=function(){var b=d.flashApi["get_"+a]();return"buffered"===a?{v:{start:function(){return 0},end:function(){return b},length:1}}:{v:b}}();return"object"===("undefined"==typeof b?"undefined":e(b))?b.v:void 0},d["set"+b]=function(b){"src"===a&&(b=q.absolutizeUrl(b)),null!==d.flashApi&&void 0!==d.flashApi["set_"+a]?d.flashApi["set_"+a](b):d.flashApiStack.push({type:"set",propName:a,value:b})}},j=0,l=f.length;l>j;j++)h(f[j]);var r=k["default"].html5media.methods,s=function(a){d[a]=function(){if(null!==d.flashApi){if(d.flashApi["fire_"+a])try{d.flashApi["fire_"+a]()}catch(b){}}else d.flashApiStack.push({type:"call",methodName:a})}};r.push("stop");for(var t=0,u=r.length;u>t;t++)s(r[t]);for(var v=["rendererready","loadeddata","loadedmetadata","canplay","error"],w=0,x=v.length;x>w;w++){var y=o.createEvent(v[w],d);a.dispatchEvent(y)}g["default"]["__ready__"+d.id]=function(){if(d.flashReady=!0,d.flashApi=i["default"].getElementById("__"+d.id),d.flashApiStack.length)for(var a=0,b=d.flashApiStack.length;b>a;a++){var c=d.flashApiStack[a];if("set"===c.type){var e=c.propName,f=""+e.substring(0,1).toUpperCase()+e.substring(1);d["set"+f](c.value)}else"call"===c.type&&d[c.methodName]()}},g["default"]["__event__"+d.id]=function(a,b){var c=o.createEvent(a,d);c.message=b||"",d.mediaElement.dispatchEvent(c)},d.flashWrapper=i["default"].createElement("div"),["always","sameDomain"].includes(d.options.shimScriptAccess)||(d.options.shimScriptAccess="sameDomain");var z=!!a.getAttribute("autoplay"),A=["uid="+d.id,"autoplay="+z,"allowScriptAccess="+d.options.shimScriptAccess],B=null!==a.originalNode&&"video"===a.originalNode.tagName.toLowerCase(),C=B?a.originalNode.height:1,D=B?a.originalNode.width:1;a.originalNode.getAttribute("src")&&A.push("src="+a.originalNode.getAttribute("src")),d.options.enablePseudoStreaming===!0&&(A.push("pseudostreamstart="+d.options.pseudoStreamingStartQueryParam),A.push("pseudostreamtype="+d.options.pseudoStreamingType)),a.appendChild(d.flashWrapper),null!==a.originalNode&&(a.originalNode.style.display="none");var E=[];if(p.IS_IE){var F=i["default"].createElement("div");d.flashWrapper.appendChild(F),E=['classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"','codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"','id="__'+d.id+'"','width="'+D+'"','height="'+C+'"'],B||E.push('style="clip: rect(0 0 0 0); position: absolute;"'),F.outerHTML="<object "+E.join(" ")+">"+('<param name="movie" value="'+d.options.pluginPath+d.options.filename+"?x="+new Date+'" />')+('<param name="flashvars" value="'+A.join("&amp;")+'" />')+'<param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" />'+('<param name="allowScriptAccess" value="'+d.options.shimScriptAccess+'" />')+'<param name="allowFullScreen" value="true" />'+("<div>"+m["default"].t("mejs.install-flash")+"</div>")+"</object>"}else E=['id="__'+d.id+'"','name="__'+d.id+'"','play="true"','loop="false"','quality="high"','bgcolor="#000000"','wmode="transparent"','allowScriptAccess="'+d.options.shimScriptAccess+'"','allowFullScreen="true"','type="application/x-shockwave-flash"','pluginspage="//www.macromedia.com/go/getflashplayer"','src="'+d.options.pluginPath+d.options.filename+'"','flashvars="'+A.join("&")+'"','width="'+D+'"','height="'+C+'"'],B||E.push('style="clip: rect(0 0 0 0); position: absolute;"'),d.flashWrapper.innerHTML="<embed "+E.join(" ")+">";if(d.flashNode=d.flashWrapper.lastChild,d.hide=function(){if(B){d.flashNode.style.position="absolute",d.flashNode.style.width="1px",d.flashNode.style.height="1px";try{d.flashNode.style.clip="rect(0 0 0 0);"}catch(a){}}},d.show=function(){if(B){d.flashNode.style.position="",d.flashNode.style.width="",d.flashNode.style.height="";try{d.flashNode.style.clip=""}catch(a){}}},d.setSize=function(a,b){d.flashNode.style.width=a+"px",d.flashNode.style.height=b+"px",null!==d.flashApi&&"function"==typeof d.flashApi.fire_setSize&&d.flashApi.fire_setSize(a,b)},d.destroy=function(){d.flashNode.parentNode.removeChild(d.flashNode)},c&&c.length>0)for(var G=0,H=c.length;H>G;G++)if(n.renderer.renderers[b.prefix].canPlayType(c[G].type)){d.setSrc(c[G].src);break}return d}},t=r.hasPluginVersion("flash",[10,0,0]);if(t){q.typeChecks.push(function(a){return a=a.toLowerCase(),a.startsWith("rtmp")?a.includes(".mp3")?"audio/rtmp":"video/rtmp":a.includes(".oga")||a.includes(".ogg")?"audio/ogg":a.includes(".m3u8")?"application/x-mpegURL":a.includes(".mpd")?"application/dash+xml":a.includes(".flv")?"video/flv":null});var u={name:"flash_video",options:{prefix:"flash_video",filename:"mediaelement-flash-video.swf",enablePseudoStreaming:!1,pseudoStreamingStartQueryParam:"start",pseudoStreamingType:"byte"},canPlayType:function(a){return["video/mp4","video/rtmp","audio/rtmp","rtmp/mp4","audio/mp4","video/flv","video/x-flv"].includes(a.toLowerCase())},create:s.create};n.renderer.add(u);var v={name:"flash_hls",options:{prefix:"flash_hls",filename:"mediaelement-flash-video-hls.swf"},canPlayType:function(a){return["application/x-mpegurl","vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].includes(a.toLowerCase())},create:s.create};n.renderer.add(v);var w={name:"flash_dash",options:{prefix:"flash_dash",filename:"mediaelement-flash-video-mdash.swf"},canPlayType:function(a){return["application/dash+xml"].includes(a.toLowerCase())},create:s.create};n.renderer.add(w);var x={name:"flash_audio",options:{prefix:"flash_audio",filename:"mediaelement-flash-audio.swf"},canPlayType:function(a){return["audio/mp3"].includes(a.toLowerCase())},create:s.create};n.renderer.add(x);var y={name:"flash_audio_ogg",options:{prefix:"flash_audio_ogg",filename:"mediaelement-flash-audio-ogg.swf"},canPlayType:function(a){return["audio/ogg","audio/oga","audio/ogv"].includes(a.toLowerCase())},create:s.create};n.renderer.add(y)}},{2:2,23:23,24:24,25:25,3:3,4:4,6:6,7:7}],19:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(3),f=d(e),g=a(2),h=d(g),i=a(6),j=d(i),k=a(7),l=a(24),m=a(23),n=a(25),o={isMediaStarted:!1,isMediaLoaded:!1,creationQueue:[],prepareSettings:function(a){o.isLoaded?o.createInstance(a):(o.loadScript(a),o.creationQueue.push(a))},loadScript:function(a){"undefined"!=typeof flvjs?o.createInstance(a):o.isMediaStarted||!function(){a.options.path="string"==typeof a.options.path?a.options.path:"//cdnjs.cloudflare.com/ajax/libs/flv.js/1.1.0/flv.min.js";var b=h["default"].createElement("script"),c=h["default"].getElementsByTagName("script")[0],d=!1;b.src=a.options.path,b.onload=b.onreadystatechange=function(){d||this.readyState&&void 0!==this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,o.mediaReady(),b.onload=b.onreadystatechange=null)},c.parentNode.insertBefore(b,c),o.isMediaStarted=!0}()},mediaReady:function(){for(o.isLoaded=!0,o.isMediaLoaded=!0;o.creationQueue.length>0;){var a=o.creationQueue.pop();o.createInstance(a)}},createInstance:function(a){var b=flvjs.createPlayer(a.options);f["default"]["__ready__"+a.id](b)}},p={name:"native_flv",options:{prefix:"native_flv",flv:{path:"//cdnjs.cloudflare.com/ajax/libs/flv.js/1.1.0/flv.min.js",cors:!0}},canPlayType:function(a){return m.HAS_MSE&&["video/x-flv","video/flv"].includes(a)},create:function(a,b,c){var d=a.originalNode,e=a.id+"_"+b.prefix,g=null,i=void 0;g=d.cloneNode(!0),b=Object.assign(b,a.options);for(var m=j["default"].html5media.properties,n=function(a){var b=""+a.substring(0,1).toUpperCase()+a.substring(1);g["get"+b]=function(){return null!==i?g[a]:null},g["set"+b]=function(b){j["default"].html5media.readOnlyProperties.includes(a)||null!==i&&(g[a]=b,"src"===a&&(i.unload(),i.detachMediaElement(),i.attachMediaElement(g),i.load()))}},p=0,q=m.length;q>p;p++)n(m[p]);if(f["default"]["__ready__"+e]=function(b){a.flvPlayer=i=b;for(var c=j["default"].html5media.events.concat(["click","mouseover","mouseout"]),d=function(b){"loadedmetadata"===b&&(i.unload(),i.detachMediaElement(),i.attachMediaElement(g),i.load()),g.addEventListener(b,function(b){var c=h["default"].createEvent("HTMLEvents");c.initEvent(b.type,b.bubbles,b.cancelable),a.dispatchEvent(c)})},e=0,f=c.length;f>e;e++)d(c[e])},c&&c.length>0)for(var r=0,s=c.length;s>r;r++)if(k.renderer.renderers[b.prefix].canPlayType(c[r].type)){g.setAttribute("src",c[r].src);break}g.setAttribute("id",e),d.parentNode.insertBefore(g,d),d.removeAttribute("autoplay"),d.style.display="none",b.flv.type="flv",b.flv.url=g.getAttribute("src"),o.prepareSettings({options:b.flv,id:e}),g.setSize=function(a,b){return g.style.width=a+"px",g.style.height=b+"px",g},g.hide=function(){return i.pause(),g.style.display="none",g},g.show=function(){return g.style.display="",g},g.destroy=function(){i.destroy()};var t=l.createEvent("rendererready",g);return a.dispatchEvent(t),g}};n.typeChecks.push(function(a){return a=a.toLowerCase(),a.includes(".flv")?"video/flv":null}),k.renderer.add(p)},{2:2,23:23,24:24,25:25,3:3,6:6,7:7}],20:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(3),f=d(e),g=a(2),h=d(g),i=a(6),j=d(i),k=a(7),l=a(24),m=a(23),n=a(25),o={isMediaStarted:!1,isMediaLoaded:!1,creationQueue:[],prepareSettings:function(a){o.isLoaded?o.createInstance(a):(o.loadScript(a),o.creationQueue.push(a))},loadScript:function(a){"undefined"!=typeof Hls?o.createInstance(a):o.isMediaStarted||!function(){a.options.path="string"==typeof a.options.path?a.options.path:"//cdn.jsdelivr.net/hls.js/latest/hls.min.js";var b=h["default"].createElement("script"),c=h["default"].getElementsByTagName("script")[0],d=!1;b.src=a.options.path,b.onload=b.onreadystatechange=function(){d||this.readyState&&void 0!==this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(d=!0,o.mediaReady(),b.onload=b.onreadystatechange=null)},c.parentNode.insertBefore(b,c),o.isMediaStarted=!0}()},mediaReady:function(){for(o.isLoaded=!0,o.isMediaLoaded=!0;o.creationQueue.length>0;){var a=o.creationQueue.pop();o.createInstance(a)}},createInstance:function(a){var b=new Hls(a.options);return f["default"]["__ready__"+a.id](b),b}},p={name:"native_hls",options:{prefix:"native_hls",hls:{path:"//cdn.jsdelivr.net/hls.js/latest/hls.min.js",autoStartLoad:!1,debug:!1}},canPlayType:function(a){return m.HAS_MSE&&["application/x-mpegurl","vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].includes(a.toLowerCase())},create:function(a,b,c){var d=a.originalNode,e=a.id+"_"+b.prefix,g=d.getAttribute("preload"),i=d.getAttribute("autoplay"),m=null,n=null;n=d.cloneNode(!0),b=Object.assign(b,a.options),b.autoStartLoad="auto"===g;for(var p=j["default"].html5media.properties,q=function(a){var c=""+a.substring(0,1).toUpperCase()+a.substring(1);n["get"+c]=function(){return null!==m?n[a]:null},n["set"+c]=function(c){j["default"].html5media.readOnlyProperties.includes(a)||null!==m&&(n[a]=c,"src"===a&&(m.destroy(),m=o.createInstance({options:b.hls,id:e}),m.attachMedia(n),m.loadSource(c),i&&m.on(hlsEvents.MANIFEST_PARSED,function(){n.play()})))}},r=0,s=p.length;s>r;r++)q(p[r]);if(f["default"]["__ready__"+e]=function(b){a.hlsPlayer=m=b;for(var c=j["default"].html5media.events.concat(["click","mouseover","mouseout"]),d=Hls.Events,e=function(b){if("loadedmetadata"===b){m.detachMedia();var c=n.src;m.attachMedia(n),m.loadSource(c),i&&m.on(d.MANIFEST_PARSED,function(){n.play()})}n.addEventListener(b,function(b){var c=h["default"].createEvent("HTMLEvents");c.initEvent(b.type,b.bubbles,b.cancelable),a.dispatchEvent(c)})},f=0,g=c.length;g>f;f++)e(c[f]);var k=void 0,o=void 0,p=function(b,c){var d=l.createEvent(b,n);if(d.data=c,a.dispatchEvent(d),"hlsError"===b&&(console.error(b,c),c.fatal))switch(c.type){case"mediaError":var e=(new Date).getTime();!k||e-k>3e3?(k=(new Date).getTime(),m.recoverMediaError()):!o||e-o>3e3?(o=(new Date).getTime(),console.warn("Attempting to swap Audio Codec and recover from media error"),m.swapAudioCodec(),m.recoverMediaError()):console.error("Cannot recover, last media error recovery failed");break;case"networkError":console.error("Network error");break;default:m.destroy()}};for(var q in d)d.hasOwnProperty(q)&&m.on(d[q],p)},c&&c.length>0)for(var t=0,u=c.length;u>t;t++)if(k.renderer.renderers[b.prefix].canPlayType(c[t].type)){n.setAttribute("src",c[t].src);break}"auto"!==g&&(n.addEventListener("play",function(){m.startLoad()},!1),n.addEventListener("pause",function(){m.stopLoad()},!1)),n.setAttribute("id",e),d.parentNode.insertBefore(n,d),d.removeAttribute("autoplay"),d.style.display="none",o.prepareSettings({options:b.hls,id:e}),n.setSize=function(a,b){return n.style.width=a+"px",n.style.height=b+"px",n},n.hide=function(){return n.pause(),n.style.display="none",n},n.show=function(){return n.style.display="",n},n.destroy=function(){m.destroy()},n.stop=function(){m.stopLoad()};var v=l.createEvent("rendererready",n);return a.dispatchEvent(v),n}};n.typeChecks.push(function(a){return a=a.toLowerCase(),a.includes(".m3u8")?"application/x-mpegURL":null}),k.renderer.add(p)},{2:2,23:23,24:24,25:25,3:3,6:6,7:7}],21:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(3),f=d(e),g=a(2),h=d(g),i=a(6),j=d(i),k=a(7),l=a(24),m=a(23),n={name:"html5",options:{prefix:"html5"},canPlayType:function(a){var b=h["default"].createElement("video");return m.IS_ANDROID&&null!==a.match(/\/mp(3|4)$/gi)||["application/x-mpegurl","vnd.apple.mpegurl","audio/mpegurl","audio/hls","video/hls"].includes(a.toLowerCase())&&m.SUPPORTS_NATIVE_HLS?"yes":b.canPlayType?b.canPlayType(a).replace(/no/,""):""},create:function(a,b,c){var d=a.id+"_"+b.prefix,e=null;void 0===a.originalNode||null===a.originalNode?(e=h["default"].createElement("audio"),a.appendChild(e)):e=a.originalNode,e.setAttribute("id",d);for(var f=j["default"].html5media.properties,g=function(a){var b=""+a.substring(0,1).toUpperCase()+a.substring(1);e["get"+b]=function(){return e[a]},e["set"+b]=function(b){j["default"].html5media.readOnlyProperties.includes(a)||(e[a]=b)}},i=0,m=f.length;m>i;i++)g(f[i]);for(var n=j["default"].html5media.events.concat(["click","mouseover","mouseout"]),o=function(b){e.addEventListener(b,function(b){var c=h["default"].createEvent("HTMLEvents");c.initEvent(b.type,b.bubbles,b.cancelable),a.dispatchEvent(c)})},p=0,q=n.length;q>p;p++)o(n[p]);if(e.setSize=function(a,b){return e.style.width=a+"px",e.style.height=b+"px",e},e.hide=function(){return e.style.display="none",e},e.show=function(){return e.style.display="",e},c&&c.length>0)for(var r=0,s=c.length;s>r;r++)if(k.renderer.renderers[b.prefix].canPlayType(c[r].type)){e.setAttribute("src",c[r].src);break}var t=l.createEvent("rendererready",e);return a.dispatchEvent(t),e}};f["default"].HtmlMediaElement=j["default"].HtmlMediaElement=n,k.renderer.add(n)},{2:2,23:23,24:24,3:3,6:6,7:7}],22:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f=a(3),g=d(f),h=a(2),i=d(h),j=a(6),k=d(j),l=a(7),m=a(24),n=a(25),o={isIframeStarted:!1,isIframeLoaded:!1,iframeQueue:[],enqueueIframe:function(a){o.isLoaded="undefined"!=typeof YT&&YT.loaded,o.isLoaded?o.createIframe(a):(o.loadIframeApi(),o.iframeQueue.push(a))},loadIframeApi:function(){if(!o.isIframeStarted){var a=i["default"].createElement("script");a.src="//www.youtube.com/player_api";var b=i["default"].getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b),o.isIframeStarted=!0}},iFrameReady:function(){for(o.isLoaded=!0,o.isIframeLoaded=!0;o.iframeQueue.length>0;){var a=o.iframeQueue.pop();o.createIframe(a)}},createIframe:function(a){return new YT.Player(a.containerId,a)},getYouTubeId:function(a){var b="";return a.indexOf("?")>0?(b=o.getYouTubeIdFromParam(a),""===b&&(b=o.getYouTubeIdFromUrl(a))):b=o.getYouTubeIdFromUrl(a),b},getYouTubeIdFromParam:function(a){if(void 0===a||null===a||!a.trim().length)return null;for(var b=a.split("?"),c=b[1].split("&"),d="",e=0,f=c.length;f>e;e++){var g=c[e].split("=");if("v"===g[0]){d=g[1];break}}return d},getYouTubeIdFromUrl:function(a){if(void 0===a||null===a||!a.trim().length)return null;var b=a.split("?");return a=b[0],a.substring(a.lastIndexOf("/")+1)},getYouTubeNoCookieUrl:function(a){if(void 0===a||null===a||!a.trim().length||!a.includes("//www.youtube"))return a;var b=a.split("/");return b[2]=b[2].replace(".com","-nocookie.com"),b.join("/")}},p={name:"youtube_iframe",options:{prefix:"youtube_iframe",youtube:{autoplay:0,controls:0,disablekb:1,end:0,loop:0,modestbranding:0,playsinline:0,rel:0,showinfo:0,start:0,iv_load_policy:3,nocookie:!1}},canPlayType:function(a){return["video/youtube","video/x-youtube"].includes(a)},create:function(a,b,c){var d={},f=[],h=4,j=null,l=!0,n=!1,p=null,q=1;d.options=b,d.id=a.id+"_"+b.prefix,d.mediaElement=a;for(var r=k["default"].html5media.properties,s=function(b){var c=""+b.substring(0,1).toUpperCase()+b.substring(1);d["get"+c]=function(){if(null!==j){var a=null,c=function(){switch(b){case"currentTime":return{v:j.getCurrentTime()};case"duration":return{v:j.getDuration()};case"volume":return q=j.getVolume()/100,{v:q};case"paused":return{v:l};case"ended":return{v:n};case"muted":return{v:j.isMuted()};case"buffered":var a=j.getVideoLoadedFraction(),c=j.getDuration();return{v:{start:function(){return 0},end:function(){return a*c},length:1}};case"src":return{v:j.getVideoUrl()};case"readyState":return{v:h}}}();return"object"===("undefined"==typeof c?"undefined":e(c))?c.v:a}return null},d["set"+c]=function(c){if(null!==j)switch(b){case"src":var e="string"==typeof c?c:c[0].src,g=o.getYouTubeId(e);a.getAttribute("autoplay")?j.loadVideoById(g):j.cueVideoById(g);break;case"currentTime":j.seekTo(c);break;case"muted":c?j.mute():j.unMute(),setTimeout(function(){var b=m.createEvent("volumechange",d);a.dispatchEvent(b)},50);break;case"volume":q=c,j.setVolume(100*c),setTimeout(function(){var b=m.createEvent("volumechange",d);a.dispatchEvent(b)},50);break;case"readyState":var h=m.createEvent("canplay",d);a.dispatchEvent(h)}else f.push({type:"set",propName:b,value:c})}},t=0,u=r.length;u>t;t++)s(r[t]);for(var v=k["default"].html5media.methods,w=function(a){d[a]=function(){if(null!==j)switch(a){case"play":return l=!1,j.playVideo();case"pause":return l=!0,j.pauseVideo();case"load":return null}else f.push({type:"call",methodName:a})}},x=0,y=v.length;y>x;x++)w(v[x]);var z=i["default"].createElement("div");z.id=d.id,d.options.youtube.nocookie&&a.originalNode.setAttribute("src",o.getYouTubeNoCookieUrl(c[0].src)),a.originalNode.parentNode.insertBefore(z,a.originalNode),a.originalNode.style.display="none";var A="audio"===a.originalNode.tagName.toLowerCase(),B=A?"0":a.originalNode.height,C=A?"0":a.originalNode.width,D=o.getYouTubeId(c[0].src),E={id:d.id,containerId:z.id,videoId:D,height:B,width:C,playerVars:Object.assign({controls:0,rel:0,disablekb:1,showinfo:0,modestbranding:0,html5:1,playsinline:0,start:0,end:0,iv_load_policy:3},d.options.youtube),origin:g["default"].location.host,events:{onReady:function(b){if(a.youTubeApi=j=b.target,a.youTubeState={paused:!0,ended:!1},f.length)for(var c=0,e=f.length;e>c;c++){var g=f[c];if("set"===g.type){var h=g.propName,i=""+h.substring(0,1).toUpperCase()+h.substring(1);d["set"+i](g.value)}else"call"===g.type&&d[g.methodName]()}p=j.getIframe();for(var k=["mouseover","mouseout"],l=function(b){var c=m.createEvent(b.type,d);a.dispatchEvent(c)},n=0,o=k.length;o>n;n++)p.addEventListener(k[n],l,!1);for(var q=["rendererready","loadeddata","loadedmetadata","canplay"],r=0,s=q.length;s>r;r++){var t=m.createEvent(q[r],d);a.dispatchEvent(t)}},onStateChange:function(b){var c=[];switch(b.data){case-1:c=["loadedmetadata"],l=!0,n=!1;break;case 0:c=["ended"],l=!1,n=!0,d.stopInterval();break;case 1:c=["play","playing"],l=!1,n=!1,d.startInterval();break;case 2:c=["pause"],l=!0,n=!1,d.stopInterval();break;case 3:c=["progress"],n=!1;break;case 5:c=["loadeddata","loadedmetadata","canplay"],l=!0,n=!1}for(var e=0,f=c.length;f>e;e++){var g=m.createEvent(c[e],d);a.dispatchEvent(g)}},onError:function(b){var c=m.createEvent("error",d);c.data=b.data,a.dispatchEvent(c)}}};return A&&(E.playerVars.playsinline=1),o.enqueueIframe(E),d.onEvent=function(b,c,d){null!==d&&void 0!==d&&(a.youTubeState=d)},d.setSize=function(a,b){null!==j&&j.setSize(a,b)},d.hide=function(){d.stopInterval(),d.pause(),p&&(p.style.display="none")},d.show=function(){p&&(p.style.display="")},d.destroy=function(){j.destroy()},d.interval=null,d.startInterval=function(){d.interval=setInterval(function(){var b=m.createEvent("timeupdate",d);a.dispatchEvent(b)},250)},d.stopInterval=function(){d.interval&&clearInterval(d.interval)},d}};g["default"].postMessage&&e(g["default"].addEventListener)&&(g["default"].onYouTubePlayerAPIReady=function(){o.iFrameReady()},n.typeChecks.push(function(a){return a=a.toLowerCase(),a.includes("//www.youtube")||a.includes("//youtu.be")?"video/x-youtube":null}),l.renderer.add(p))},{2:2,24:24,25:25,3:3,6:6,7:7}],23:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(c,"__esModule",{value:!0}),c.cancelFullScreen=c.requestFullScreen=c.isFullScreen=c.FULLSCREEN_EVENT_NAME=c.HAS_NATIVE_FULLSCREEN_ENABLED=c.HAS_TRUE_NATIVE_FULLSCREEN=c.HAS_IOS_FULLSCREEN=c.HAS_MS_NATIVE_FULLSCREEN=c.HAS_MOZ_NATIVE_FULLSCREEN=c.HAS_WEBKIT_NATIVE_FULLSCREEN=c.HAS_NATIVE_FULLSCREEN=c.SUPPORTS_NATIVE_HLS=c.SUPPORT_POINTER_EVENTS=c.HAS_MSE=c.IS_STOCK_ANDROID=c.IS_SAFARI=c.IS_FIREFOX=c.IS_CHROME=c.IS_EDGE=c.IS_IE=c.IS_ANDROID=c.IS_IOS=c.IS_IPHONE=c.IS_IPAD=c.UA=c.NAV=void 0;for(var e=a(3),f=d(e),g=a(2),h=d(g),i=a(6),j=d(i),k=c.NAV=f["default"].navigator,l=c.UA=k.userAgent.toLowerCase(),m=c.IS_IPAD=null!==l.match(/ipad/i),n=c.IS_IPHONE=null!==l.match(/iphone/i),o=(c.IS_IOS=n||m,c.IS_ANDROID=null!==l.match(/android/i)),p=c.IS_IE=k.appName.toLowerCase().includes("microsoft")||null!==k.appName.toLowerCase().match(/trident/gi),q=(c.IS_EDGE="msLaunchUri"in k&&!("documentMode"in h["default"])),r=c.IS_CHROME=null!==l.match(/chrome/gi),s=c.IS_FIREFOX=null!==l.match(/firefox/gi),t=c.IS_SAFARI=null!==l.match(/safari/gi)&&!r,u=c.IS_STOCK_ANDROID=null!==l.match(/^mozilla\/\d+\.\d+\s\(linux;\su;/gi),v=(c.HAS_MSE="MediaSource"in f["default"]),w=(c.SUPPORT_POINTER_EVENTS=function(){var a=h["default"].createElement("x"),b=h["default"].documentElement,c=f["default"].getComputedStyle;if(!("pointerEvents"in a.style))return!1;a.style.pointerEvents="auto",a.style.pointerEvents="x",b.appendChild(a);var d=c&&"auto"===c(a,"").pointerEvents;return b.removeChild(a),!!d}()),x=["source","track","audio","video"],y=void 0,z=0,A=x.length;A>z;z++)y=h["default"].createElement(x[z]);var B=c.SUPPORTS_NATIVE_HLS=t||o&&(r||u)||p&&null!==l.match(/edge/gi),C=void 0!==y.webkitEnterFullscreen,D=void 0!==y.requestFullscreen;C&&l.match(/mac os x 10_5/i)&&(D=!1,C=!1);var E=void 0!==y.webkitRequestFullScreen,F=void 0!==y.mozRequestFullScreen,G=void 0!==y.msRequestFullscreen,H=E||F||G,I=H,J="",K=void 0,L=void 0,M=void 0;F?I=h["default"].mozFullScreenEnabled:G&&(I=h["default"].msFullscreenEnabled),r&&(C=!1),H&&(E?J="webkitfullscreenchange":F?J="mozfullscreenchange":G&&(J="MSFullscreenChange"),c.isFullScreen=K=function(){return F?h["default"].mozFullScreen:E?h["default"].webkitIsFullScreen:G?null!==h["default"].msFullscreenElement:void 0},c.requestFullScreen=L=function(a){E?a.webkitRequestFullScreen():F?a.mozRequestFullScreen():G&&a.msRequestFullscreen()},c.cancelFullScreen=M=function(){E?h["default"].webkitCancelFullScreen():F?h["default"].mozCancelFullScreen():G&&h["default"].msExitFullscreen()});var N=c.HAS_NATIVE_FULLSCREEN=D,O=c.HAS_WEBKIT_NATIVE_FULLSCREEN=E,P=c.HAS_MOZ_NATIVE_FULLSCREEN=F,Q=c.HAS_MS_NATIVE_FULLSCREEN=G,R=c.HAS_IOS_FULLSCREEN=C,S=c.HAS_TRUE_NATIVE_FULLSCREEN=H,T=c.HAS_NATIVE_FULLSCREEN_ENABLED=I,U=c.FULLSCREEN_EVENT_NAME=J;c.isFullScreen=K,c.requestFullScreen=L,c.cancelFullScreen=M,j["default"].Features=j["default"].Features||{},j["default"].Features.isiPad=m,j["default"].Features.isiPhone=n,j["default"].Features.isiOS=j["default"].Features.isiPhone||j["default"].Features.isiPad,j["default"].Features.isAndroid=o,j["default"].Features.isIE=p,j["default"].Features.isEdge=q,j["default"].Features.isChrome=r,j["default"].Features.isFirefox=s,j["default"].Features.isSafari=t,j["default"].Features.isStockAndroid=u,j["default"].Features.hasMSE=v,j["default"].Features.supportsNativeHLS=B,j["default"].Features.supportsPointerEvents=w,j["default"].Features.hasiOSFullScreen=R,j["default"].Features.hasNativeFullscreen=N,j["default"].Features.hasWebkitNativeFullScreen=O,j["default"].Features.hasMozNativeFullScreen=P,j["default"].Features.hasMsNativeFullScreen=Q,j["default"].Features.hasTrueNativeFullScreen=S,j["default"].Features.nativeFullScreenEnabled=T,j["default"].Features.fullScreenEventName=U,j["default"].Features.isFullScreen=K,j["default"].Features.requestFullScreen=L,j["default"].Features.cancelFullScreen=M},{2:2,3:3,6:6}],24:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if("string"!=typeof a)throw new Error("Argument passed must be a string");var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};return a.replace(/[&<>"]/g,function(a){return b[a]})}function f(a,b){var c=this,d=arguments,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!1;if("function"!=typeof a)throw new Error("First argument must be a function");if("number"!=typeof b)throw new Error("Second argument must be a numeric value");var f=void 0;return function(){var g=c,h=d,i=function(){f=null,e||a.apply(g,h)},j=e&&!f;clearTimeout(f),f=setTimeout(i,b),j&&a.apply(g,h)}}function g(a){return Object.getOwnPropertyNames(a).length<=0}function h(a,b){var c=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,d={d:[],w:[]};return(a||"").split(" ").forEach(function(a){var e=a+"."+b;e.startsWith(".")?(d.d.push(e),d.w.push(e)):d[c.test(a)?"w":"d"].push(e)}),d.d=d.d.join(" "),d.w=d.w.join(" "),d}function i(a,b){if("string"!=typeof a)throw new Error("Event name must be a string");var c=void 0;return document.createEvent?(c=document.createEvent("Event"),c.initEvent(a,!0,!1)):(c={},c.type=a,c.target=b,c.canceleable=!0,c.bubbable=!1),c}function j(a,b){return!!(a&&b&&a.compareDocumentPosition(b)&&Node.DOCUMENT_POSITION_PRECEDING)}function k(a){return"string"==typeof a}Object.defineProperty(c,"__esModule",{value:!0}),c.escapeHTML=e,c.debounce=f,c.isObjectEmpty=g,c.splitEvents=h,c.createEvent=i,c.isNodeAfter=j,c.isString=k;var l=a(6),m=d(l);m["default"].Utils=m["default"].Utils||{},m["default"].Utils.escapeHTML=e,m["default"].Utils.debounce=f,m["default"].Utils.isObjectEmpty=g,m["default"].Utils.splitEvents=h,m["default"].Utils.createEvent=i,m["default"].Utils.isNodeAfter=j,m["default"].Utils.isString=k},{6:6}],25:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(a){if("string"!=typeof a)throw new Error("`url` argument must be a string");var b=document.createElement("div");return b.innerHTML='<a href="'+m.escapeHTML(a)+'">x</a>',b.firstChild.href}function f(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return a&&!b?h(a):g(b)}function g(a){if("string"!=typeof a)throw new Error("`type` argument must be a string");return a&&~a.indexOf(";")?a.substr(0,a.indexOf(";")):a}function h(a){if("string"!=typeof a)throw new Error("`url` argument must be a string");var b=void 0;if(!Array.isArray(n))throw new Error("`typeChecks` must be an array");if(n.length)for(var c=0,d=n.length;d>c;c++){var e=n[c];if("function"!=typeof e)throw new Error("Element in array must be a function")}for(var f=0,g=n.length;g>f;f++)if(b=n[f](a),void 0!==b&&null!==b)return b;var h=i(a),k=j(h),l="video/mp4";return k&&(["mp4","m4v","ogg","ogv","webm","flv","mpeg","mov"].includes(k)?l="video/"+k:["mp3","oga","wav","mid","midi"].includes(k)&&(l="audio/"+k)),l}function i(a){if("string"!=typeof a)throw new Error("`url` argument must be a string");var b=a.split("?")[0],c=b.split("\\").pop().split("/").pop();return c.indexOf(".")>-1?c.substring(c.lastIndexOf(".")+1):""}function j(a){if("string"!=typeof a)throw new Error("`extension` argument must be a string");switch(a){case"mp4":case"m4v":return"mp4";case"webm":case"webma":case"webmv":return"webm";case"ogg":case"oga":case"ogv":return"ogg";default:return a}}Object.defineProperty(c,"__esModule",{value:!0
}),c.typeChecks=void 0,c.absolutizeUrl=e,c.formatType=f,c.getMimeFromType=g,c.getTypeFromFile=h,c.getExtension=i,c.normalizeExtension=j;var k=a(6),l=d(k),m=a(24),n=c.typeChecks=[];l["default"].Utils=l["default"].Utils||{},l["default"].Utils.typeChecks=n,l["default"].Utils.absolutizeUrl=e,l["default"].Utils.formatType=f,l["default"].Utils.getMimeFromType=g,l["default"].Utils.getTypeFromFile=h,l["default"].Utils.getExtension=i,l["default"].Utils.normalizeExtension=j},{24:24,6:6}],26:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}var e=a(2),f=d(e);Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){throw new TypeError('"this" is null or not defined')}),void 0===f["default"].createEvent&&(f["default"].createEvent=function(){var a=f["default"].createEventObject();return a.timeStamp=(new Date).getTime(),a.enumerable=!0,a.writable=!0,a.configurable=!0,a.initEvent=function(a,b,c){(void 0).type=a,(void 0).bubbles=!!b,(void 0).cancelable=!!c,(void 0).bubbles||((void 0).stopPropagation=function(){(void 0).stoppedPropagation=!0,(void 0).cancelBubble=!0})},a}),"function"!=typeof Object.assign&&(Object.assign=function(a){if(null===a||void 0===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1,d=arguments.length;d>c;c++){var e=arguments[c];if(null!==e)for(var f in e)Object.prototype.hasOwnProperty.call(e,f)&&(b[f]=e[f])}return b}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(a,b){if(null===this||void 0===this)throw new TypeError('"this" is null or not defined');var c=Object(this),d=c.length>>>0;if(0===d)return!1;for(var e=0|b,f=Math.max(e>=0?e:d-Math.abs(e),0);d>f;){if(c[f]===a)return!0;f++}return!1}}),String.prototype.includes||(String.prototype.includes=function(){return-1!==String.prototype.indexOf.apply(this,arguments)}),String.prototype.startsWith||(String.prototype.startsWith=function(a,b){return b=b||0,this.substr(b,a.length)===a})},{2:2}],27:[function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{"default":a}}function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:25;return!(a%1===0)}function f(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!1,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:!1,d=arguments.length>3&&void 0!==arguments[3]?arguments[3]:25,f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;a=!a||"number"!=typeof a||0>a?0:a;var g=Math.round(.066666*d),h=Math.round(d),i=24*Math.round(3600*d),j=Math.round(600*d),k=e(d)?";":":",l=void 0,m=void 0,n=void 0,o=void 0,p=Math.round(a*d);if(e(d)){0>p&&(p=i+p),p%=i;var q=Math.floor(p/j),r=p%j;p+=9*g*q,r>g&&(p+=g*Math.floor((r-g)/Math.round(60*h-g)));var s=Math.floor(p/h);l=Math.floor(Math.floor(s/60)/60),m=Math.floor(s/60)%60,n=c?s%60:(p/h%60).toFixed(f)}else l=Math.floor(a/3600)%24,m=Math.floor(a/60)%60,n=c?Math.floor(a%60):(a%60).toFixed(f);l=0>=l?0:l,m=0>=m?0:m,n=0>=n?0:n;var t=b||l>0?(10>l?"0"+l:l)+":":"";return t+=(10>m?"0"+m:m)+":",t+=""+(10>n?"0"+n:n),c&&(o=(p%h).toFixed(0),o=0>=o?0:o,t+=10>o?k+"0"+o:""+k+o),t}function g(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:25;if("string"!=typeof a)throw new TypeError("Time must be a string");if(a.indexOf(";")>0&&(a=a.replace(";",":")),!a.match(/\d{2}(\:\d{2}){0,3}/))throw new TypeError("Time code must have the format `00:00:00`");var c=a.split(":"),d=void 0,f=0,g=0,h=0,i=0,j=0,k=Math.round(.066666*b),l=Math.round(b),m=3600*l,n=60*l;switch(c.length){default:case 1:h=parseInt(c[0],10);break;case 2:g=parseInt(c[0],10),h=parseInt(c[1],10);break;case 3:f=parseInt(c[0],10),g=parseInt(c[1],10),h=parseInt(c[2],10);break;case 4:f=parseInt(c[0],10),g=parseInt(c[1],10),h=parseInt(c[2],10),i=parseInt(c[3],10)}return e(b)?(j=60*f+g,d=m*f+n*g+l*h+i-k*(j-Math.floor(j/10))):d=(m*f+n*g+b*h+i)/b,parseFloat(d.toFixed(3))}function h(a,b){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:25;a=!a||"number"!=typeof a||0>a?0:a;for(var d=Math.floor(a/3600)%24,e=Math.floor(a/60)%60,f=Math.floor(a%60),g=Math.floor((a%1*c).toFixed(3)),h=[[g,"f"],[f,"s"],[e,"m"],[d,"h"]],i=b.timeFormat,j=i[1]===i[0],k=j?2:1,l=i.length<k?i[k]:":",m=i[0],n=!1,o=0,p=h.length;p>o;o++)if(i.indexOf(h[o][1])>-1)n=!0;else if(n){for(var q=!1,r=o;p>r;r++)if(h[r][0]>0){q=!0;break}if(!q)break;j||(i=m+i),i=h[o][1]+l+i,j&&(i=h[o][1]+i),m=h[o][1]}b.currentTimeFormat=i}function i(a){if("string"!=typeof a)throw new TypeError("Argument must be a string value");a=a.replace(",",".");var b=a.indexOf(".")>-1?a.split(".")[1].length:0,c=0,d=1;a=a.split(":").reverse();for(var e=0,f=a.length;f>e;e++)d=1,e>0&&(d=Math.pow(60,e)),c+=Number(a[e])*d;return Number(c.toFixed(b))}Object.defineProperty(c,"__esModule",{value:!0}),c.isDropFrame=e,c.secondsToTimeCode=f,c.timeCodeToSeconds=g,c.calculateTimeFormat=h,c.convertSMPTEtoSeconds=i;var j=a(6),k=d(j);k["default"].Utils=k["default"].Utils||{},k["default"].Utils.secondsToTimeCode=f,k["default"].Utils.timeCodeToSeconds=g,k["default"].Utils.calculateTimeFormat=h,k["default"].Utils.convertSMPTEtoSeconds=i},{6:6}]},{},[26,5,4,14,21,18,17,19,20,22,15,16,8,9,10,11,12,13]);
define("mediaelement", function(){});

/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<9
	// For `typeof node.method` instead of `node.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	location = window.location,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.9.1",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[2] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	// The number of elements contained in the matched element set
	size: function() {
		return this.length;
	},

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
		if ( !document.body ) {
			return setTimeout( jQuery.ready );
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type(obj) === "array";
	},

	isWindow: function( obj ) {
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {
			// Not own constructor property must be Object
			if ( obj.constructor &&
				!core_hasOwn.call(obj, "constructor") &&
				!core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
				return false;
			}
		} catch ( e ) {
			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.

		var key;
		for ( key in obj ) {}

		return key === undefined || core_hasOwn.call( obj, key );
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );
		if ( scripts ) {
			jQuery( scripts ).remove();
		}
		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: function( data ) {
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
			return window.JSON.parse( data );
		}

		if ( data === null ) {
			return data;
		}

		if ( typeof data === "string" ) {

			// Make sure leading/trailing whitespace is removed (IE can't handle it)
			data = jQuery.trim( data );

			if ( data ) {
				// Make sure the incoming data is actual JSON
				// Logic borrowed from http://json.org/json2.js
				if ( rvalidchars.test( data.replace( rvalidescape, "@" )
					.replace( rvalidtokens, "]" )
					.replace( rvalidbraces, "")) ) {

					return ( new Function( "return " + data ) )();
				}
			}
		}

		jQuery.error( "Invalid JSON: " + data );
	},

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new DOMParser();
				xml = tmp.parseFromString( data , "text/xml" );
			} else { // IE
				xml = new ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {
			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data );
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Use native String.trim function wherever possible
	trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
		function( text ) {
			return text == null ?
				"" :
				core_trim.call( text );
		} :

		// Otherwise use our own trimming functionality
		function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( core_indexOf ) {
				return core_indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {
				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: function() {
		return ( new Date() ).getTime();
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {
			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );

		// If IE event model is used
		} else {
			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch(e) {}

			if ( top && top.doScroll ) {
				(function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {
							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll("left");
						} catch(e) {
							return setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				})();
			}
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,
		// Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				args = args || [];
				args = [ context, args.slice ? args.slice() : args ];
				if ( list && ( !fired || stack ) ) {
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function() {

	var support, all, a,
		input, select, fragment,
		opt, eventName, isSupported, i,
		div = document.createElement("div");

	// Setup
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// Support tests won't run in some limited or non-browser environments
	all = div.getElementsByTagName("*");
	a = div.getElementsByTagName("a")[ 0 ];
	if ( !all || !a || !all.length ) {
		return {};
	}

	// First batch of tests
	select = document.createElement("select");
	opt = select.appendChild( document.createElement("option") );
	input = div.getElementsByTagName("input")[ 0 ];

	a.style.cssText = "top:1px;float:left;opacity:.5";
	support = {
		// Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		getSetAttribute: div.className !== "t",

		// IE strips leading whitespace when .innerHTML is used
		leadingWhitespace: div.firstChild.nodeType === 3,

		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		tbody: !div.getElementsByTagName("tbody").length,

		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		htmlSerialize: !!div.getElementsByTagName("link").length,

		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		style: /top/.test( a.getAttribute("style") ),

		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		hrefNormalized: a.getAttribute("href") === "/a",

		// Make sure that element opacity exists
		// (IE uses filter instead)
		// Use a regex to work around a WebKit issue. See #5145
		opacity: /^0.5/.test( a.style.opacity ),

		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		cssFloat: !!a.style.cssFloat,

		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		checkOn: !!input.value,

		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		optSelected: opt.selected,

		// Tests for enctype support on a form (#6743)
		enctype: !!document.createElement("form").enctype,

		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

		// jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
		boxModel: document.compatMode === "CSS1Compat",

		// Will be defined later
		deleteExpando: true,
		noCloneEvent: true,
		inlineBlockNeedsLayout: false,
		shrinkWrapBlocks: false,
		reliableMarginRight: true,
		boxSizingReliable: true,
		pixelPosition: false
	};

	// Make sure checked status is properly cloned
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<9
	try {
		delete div.test;
	} catch( e ) {
		support.deleteExpando = false;
	}

	// Check if we can trust getAttribute("value")
	input = document.createElement("input");
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment = document.createDocumentFragment();
	fragment.appendChild( input );

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	support.appendChecked = input.checked;

	// WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Opera does not clone events (and typeof div.attachEvent === undefined).
	// IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
	if ( div.attachEvent ) {
		div.attachEvent( "onclick", function() {
			support.noCloneEvent = false;
		});

		div.cloneNode( true ).click();
	}

	// Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
	for ( i in { submit: true, change: true, focusin: true }) {
		div.setAttribute( eventName = "on" + i, "t" );

		support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
	}

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv, tds,
			divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
			body = document.getElementsByTagName("body")[0];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		body.appendChild( container ).appendChild( div );

		// Support: IE8
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
		tds = div.getElementsByTagName("td");
		tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
		isSupported = ( tds[ 0 ].offsetHeight === 0 );

		tds[ 0 ].style.display = "";
		tds[ 1 ].style.display = "none";

		// Support: IE8
		// Check if empty table cells still have offsetWidth/Height
		support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

		// Check box-sizing and margin behavior
		div.innerHTML = "";
		div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
		support.boxSizing = ( div.offsetWidth === 4 );
		support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// Fails in WebKit before Feb 2011 nightlies
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		if ( typeof div.style.zoom !== core_strundefined ) {
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.innerHTML = "";
			div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
			support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			div.style.display = "block";
			div.innerHTML = "<div></div>";
			div.firstChild.style.width = "5px";
			support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

			if ( support.inlineBlockNeedsLayout ) {
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}

		body.removeChild( container );

		// Null elements to avoid leaks in IE
		container = div = tds = marginDiv = null;
	});

	// Null elements to avoid leaks in IE
	all = select = fragment = opt = a = input = null;

	return support;
})();

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var thisCache, ret,
		internalKey = jQuery.expando,
		getByName = typeof name === "string",

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
		return;
	}

	if ( !id ) {
		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {
		cache[ id ] = {};

		// Avoids exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		if ( !isNode ) {
			cache[ id ].toJSON = jQuery.noop;
		}
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( getByName ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !jQuery.acceptData( elem ) ) {
		return;
	}

	var i, l, thisCache,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split(" ");
					}
				}
			} else {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			for ( i = 0, l = name.length; i < l; i++ ) {
				delete thisCache[ name[i] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	} else if ( jQuery.support.deleteExpando || cache != cache.window ) {
		delete cache[ id ];

	// When all else fails, null
	} else {
		cache[ id ] = null;
	}
}

jQuery.extend({
	cache: {},

	// Unique for each copy of jQuery on the page
	// Non-digits removed to match rinlinejQuery
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	// The following elements throw uncatchable exceptions if you
	// attempt to add expando properties to them.
	noData: {
		"embed": true,
		// Ban all objects except for Flash (which handle expandos)
		"object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		"applet": true
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	},

	// A method for determining if a DOM node can handle the data expando
	acceptData: function( elem ) {
		// Do not set data on non-element because it will not be cleared (#8335).
		if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
			return false;
		}

		var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

		// nodes accept data unless otherwise specified; rejection can be conditional
		return !noData || noData !== true && elem.getAttribute("classid") === noData;
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[0],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[i].name;

						if ( !name.indexOf( "data-" ) ) {
							name = jQuery.camelCase( name.slice(5) );

							dataAttr( elem, name, data[ name ] );
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				jQuery.data( this, key );
			});
		}

		return jQuery.access( this, function( value ) {

			if ( value === undefined ) {
				// Try to fetch any internally stored data first
				return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
			}

			this.each(function() {
				jQuery.data( this, key, value );
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			jQuery.removeData( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray(data) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		hooks.cur = fn;
		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i,
	rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = jQuery.support.getSetAttribute,
	getSetInput = jQuery.support.input;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each(function() {
			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch( e ) {}
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isBool = typeof stateVal === "boolean";

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					state = stateVal,
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					state = isBool ? state : !self.hasClass( className );
					self[ state ? "addClass" : "removeClass" ]( className );
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					jQuery._data( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var ret, hooks, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val,
				self = jQuery(this);

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, self.val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var values = jQuery.makeArray( value );

				jQuery(elem).find("option").each(function() {
					this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
				});

				if ( !values.length ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, notxml, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( notxml ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {

			// In IE9+, Flash objects don't have .getAttribute (#12945)
			// Support: IE9+
			if ( typeof elem.getAttribute !== core_strundefined ) {
				ret =  elem.getAttribute( name );
			}

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( rboolean.test( name ) ) {
					// Set corresponding property to false for boolean attributes
					// Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
					if ( !getSetAttribute && ruseDefault.test( name ) ) {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					} else {
						elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		tabindex: "tabIndex",
		readonly: "readOnly",
		"for": "htmlFor",
		"class": "className",
		maxlength: "maxLength",
		cellspacing: "cellSpacing",
		cellpadding: "cellPadding",
		rowspan: "rowSpan",
		colspan: "colSpan",
		usemap: "useMap",
		frameborder: "frameBorder",
		contenteditable: "contentEditable"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				return ( elem[ name ] = value );
			}

		} else {
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;

			} else {
				return elem[ name ];
			}
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				// elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				var attributeNode = elem.getAttributeNode("tabindex");

				return attributeNode && attributeNode.specified ?
					parseInt( attributeNode.value, 10 ) :
					rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
						0 :
						undefined;
			}
		}
	}
});

// Hook for boolean attributes
boolHook = {
	get: function( elem, name ) {
		var
			// Use .prop to determine if this attribute is understood as boolean
			prop = jQuery.prop( elem, name ),

			// Fetch it accordingly
			attr = typeof prop === "boolean" && elem.getAttribute( name ),
			detail = typeof prop === "boolean" ?

				getSetInput && getSetAttribute ?
					attr != null :
					// oldIE fabricates an empty string for missing boolean attributes
					// and conflates checked/selected into attroperties
					ruseDefault.test( name ) ?
						elem[ jQuery.camelCase( "default-" + name ) ] :
						!!attr :

				// fetch an attribute node for properties not recognized as boolean
				elem.getAttributeNode( name );

		return detail && detail.value !== false ?
			name.toLowerCase() :
			undefined;
	},
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		// Use defaultChecked and defaultSelected for oldIE
		} else {
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}

		return name;
	}
};

// fix oldIE value attroperty
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return jQuery.nodeName( elem, "input" ) ?

				// Ignore the value *property* by using defaultValue
				elem.defaultValue :

				ret && ret.specified ? ret.value : undefined;
		},
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {
				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {
				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
				ret.value :
				undefined;
		},
		set: function( elem, value, name ) {
			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					(ret = elem.ownerDocument.createAttribute( name ))
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			return name === "value" || value === elem.getAttribute( name ) ?
				value :
				undefined;
		}
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		get: nodeHook.get,
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each([ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		});
	});
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
	jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
			get: function( elem ) {
				var ret = elem.getAttribute( name, 2 );
				return ret == null ? undefined : ret;
			}
		});
	});

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each([ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	});
}

if ( !jQuery.support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {
			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case senstitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		}
	});
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			get: function( elem ) {
				// Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
				return elem.getAttribute("value") === null ? "on" : elem.value;
			}
		};
	});
}
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	});
});
var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		// jQuery(...).bind("mouseover mouseout", fn);
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		event.isTrigger = true;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
				!(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {
						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, ret, handleObj, matched, j,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var sel, handleObj, matches, i,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur != this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Chrome 23+, Safari?
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			}
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== document.activeElement && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {
						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === document.activeElement && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Even when returnValue equals to undefined Firefox will still show alert
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{ type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event, to properly expose it to GC
			if ( typeof elem[ name ] === core_strundefined ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;
		if ( !e ) {
			return;
		}
		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

	jQuery.event.special.submit = {
		setup: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
				if ( form && !jQuery._data( form, "submitBubbles" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submit_bubble = true;
					});
					jQuery._data( form, "submitBubbles", true );
				}
			});
			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {
			// If form was submitted by the user, bubble the event up the tree
			if ( event._submit_bubble ) {
				delete event._submit_bubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event, true );
				}
			}
		},

		teardown: function() {
			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {
				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._just_changed = true;
						}
					});
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._just_changed && !event.isTrigger ) {
							this._just_changed = false;
						}
						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event, true );
					});
				}
				return false;
			}
			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event, true );
						}
					});
					jQuery._data( elem, "changeBubbles", true );
				}
			});
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var type, origFn;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var i,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	hasDuplicate,
	outermostContext,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsXML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,
	sortOrder,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	support = {},
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Array methods
	arr = [],
	pop = arr.pop,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},


	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	operators = "([*^$|!~]?=)",
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rsibling = /[\x20\t\r\n\f]*[+~]/,

	rnative = /^[^{]+\{\s*\[native code/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,
	rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	funescape = function( _, escaped ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		return high !== high ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Use a stripped-down slice if we can't use a native one
try {
	slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
} catch ( e ) {
	slice = function( i ) {
		var elem,
			results = [];
		while ( (elem = this[i++]) ) {
			results.push( elem );
		}
		return results;
	};
}

/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function isNative( fn ) {
	return rnative.test( fn + "" );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var cache,
		keys = [];

	return (cache = function( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	});
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return fn( div );
	} catch (e) {
		return false;
	} finally {
		// release memory in IE
		div = null;
	}
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( !documentIsXML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
				push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && !rbuggyQSA.test(selector) ) {
			old = true;
			nid = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results, slice.call( newContext.querySelectorAll(
						newSelector
					), 0 ) );
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsXML = isXML( doc );

	// Check if getElementsByTagName("*") returns only elements
	support.tagNameNoComments = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if attributes should be retrieved by attribute nodes
	support.attributes = assert(function( div ) {
		div.innerHTML = "<select></select>";
		var type = typeof div.lastChild.getAttribute("multiple");
		// IE8 returns a string for some attributes even when not present
		return type !== "boolean" && type !== "string";
	});

	// Check if getElementsByClassName can be trusted
	support.getByClassName = assert(function( div ) {
		// Opera can't find a second classname (in 9.6)
		div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
		if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
			return false;
		}

		// Safari 3.2 caches class attributes and doesn't catch changes
		div.lastChild.className = "e";
		return div.getElementsByClassName("e").length === 2;
	});

	// Check if getElementById returns elements by name
	// Check if getElementsByName privileges form controls or returns elements by ID
	support.getByName = assert(function( div ) {
		// Inject content
		div.id = expando + 0;
		div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
		docElem.insertBefore( div, docElem.firstChild );

		// Test
		var pass = doc.getElementsByName &&
			// buggy browsers will return fewer than the correct 2
			doc.getElementsByName( expando ).length === 2 +
			// buggy browsers will return more than the correct 0
			doc.getElementsByName( expando + 0 ).length;
		support.getIdNotName = !doc.getElementById( expando );

		// Cleanup
		docElem.removeChild( div );

		return pass;
	});

	// IE6/7 return modified attributes
	Expr.attrHandle = assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
			div.firstChild.getAttribute("href") === "#";
	}) ?
		{} :
		{
			"href": function( elem ) {
				return elem.getAttribute( "href", 2 );
			},
			"type": function( elem ) {
				return elem.getAttribute("type");
			}
		};

	// ID find and filter
	if ( support.getIdNotName ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
				var m = context.getElementById( id );

				return m ?
					m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
						[m] :
						undefined :
					[];
			}
		};
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.tagNameNoComments ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Name
	Expr.find["NAME"] = support.getByName && function( tag, context ) {
		if ( typeof context.getElementsByName !== strundefined ) {
			return context.getElementsByName( name );
		}
	};

	// Class
	Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
			return context.getElementsByClassName( className );
		}
	};

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21),
	// no need to also add to buggyMatches since matches checks buggyQSA
	// A support test would require too much code (would include document ready)
	rbuggyQSA = [ ":focus" ];

	if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explictly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// IE8 - Some boolean attributes are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Opera 10-12/IE8 - ^= $= *= and empty values
			// Should not select anything
			div.innerHTML = "<input type='hidden' i=''/>";
			if ( div.querySelectorAll("[i^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.webkitMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {
		var compare;

		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
			if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
				if ( a === doc || contains( preferredDoc, a ) ) {
					return -1;
				}
				if ( b === doc || contains( preferredDoc, b ) ) {
					return 1;
				}
				return 0;
			}
			return compare & 4 ? -1 : 1;
		}

		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	// Always assume the presence of duplicates if sort doesn't
	// pass them to our comparison function (as in Google Chrome).
	hasDuplicate = false;
	[0, 0].sort( sortOrder );
	support.detectDuplicates = hasDuplicate;

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	// rbuggyQSA always contains :focus, so no need for an existence check
	if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	var val;

	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	if ( !documentIsXML ) {
		name = name.toLowerCase();
	}
	if ( (val = Expr.attrHandle[ name ]) ) {
		return val( elem );
	}
	if ( documentIsXML || support.attributes ) {
		return elem.getAttribute( name );
	}
	return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
		name :
		val && val.specified ? val.value : null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		i = 1,
		j = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		for ( ; (elem = results[i]); i++ ) {
			if ( elem === results[ i - 1 ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[4] ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeName ) {
			if ( nodeName === "*" ) {
				return function() { return true; };
			}

			nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
			};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifider
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsXML ?
						elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
						elem.lang) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && !documentIsXML &&
					Expr.relative[ tokens[1].type ] ) {

				context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
				if ( !context ) {
					return results;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, slice.call( seed, 0 ) );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		documentIsXML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Easy API for creating new setFilters
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Initialize with the default document
setDocument();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	isSimple = /^.[^:#\[\.,]*$/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i, ret, self,
			len = this.length;

		if ( typeof selector !== "string" ) {
			self = this;
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		ret = [];
		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, this[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
		return ret;
	},

	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter(function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector, false) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector, true) );
	},

	is: function( selector ) {
		return !!selector && (
			typeof selector === "string" ?
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				rneedsContext.test( selector ) ?
					jQuery( selector, this.context ).index( this[0] ) >= 0 :
					jQuery.filter( selector, this ).length > 0 :
				this.filter( selector ).length > 0 );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			ret = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			cur = this[i];

			while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
				if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
					ret.push( cur );
					break;
				}
				cur = cur.parentNode;
			}
		}

		return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[0], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(
			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem, this );
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

jQuery.fn.andSelf = jQuery.fn.addBack;

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( !runtil.test( name ) ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

		if ( this.length > 1 && rparentsprev.test( name ) ) {
			ret = ret.reverse();
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 ?
			jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
			jQuery.find.matches(expr, elems);
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			cur = elem[ dir ];

		while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
			if ( cur.nodeType === 1 ) {
				matched.push( cur );
			}
			cur = cur[dir];
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var r = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				r.push( n );
			}
		}

		return r;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

	// Can't pass null or undefined to indexOf in Firefox 4
	// Set to 0 to skip string check
	qualifier = qualifier || 0;

	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep(elements, function( elem, i ) {
			var retVal = !!qualifier.call( elem, i, elem );
			return retVal === keep;
		});

	} else if ( qualifier.nodeType ) {
		return jQuery.grep(elements, function( elem ) {
			return ( elem === qualifier ) === keep;
		});

	} else if ( typeof qualifier === "string" ) {
		var filtered = jQuery.grep(elements, function( elem ) {
			return elem.nodeType === 1;
		});

		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter(qualifier, filtered, !keep);
		} else {
			qualifier = jQuery.filter( qualifier, filtered );
		}
	}

	return jQuery.grep(elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
	});
}
function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
		"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
	rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
	rleadingWhitespace = /^\s+/,
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rtbody = /<tbody/i,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
	},
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapAll( html.call(this, i) );
			});
		}

		if ( this[0] ) {
			// The elements to wrap the target around
			var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

			if ( this[0].parentNode ) {
				wrap.insertBefore( this[0] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function(i) {
				jQuery(this).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function(i) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	},

	append: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip(arguments, true, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				this.insertBefore( elem, this.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, false, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}

				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[0] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for (; i < l; i++ ) {
						// Remove element nodes and prevent memory leaks
						elem = this[i] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch(e) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function( value ) {
		var isFunc = jQuery.isFunction( value );

		// Make sure that the elements are removed from the DOM before they are inserted
		// this can help fix replacing a parent with child elements
		if ( !isFunc && typeof value !== "string" ) {
			value = jQuery( value ).not( this ).detach();
		}

		return this.domManip( [ value ], true, function( elem ) {
			var next = this.nextSibling,
				parent = this.parentNode;

			if ( parent ) {
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		});
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, table, callback ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[0],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[0] = value.call( this, index, table ? self.html() : undefined );
				}
				self.domManip( args, table, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				table = table && jQuery.nodeName( first, "tr" );
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call(
						table && jQuery.nodeName( this[i], "table" ) ?
							findOrAppend( this[i], "tbody" ) :
							this[i],
						node,
						i
					);
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery.ajax({
									url: node.src,
									type: "GET",
									dataType: "script",
									async: false,
									global: false,
									"throws": true
								});
							} else {
								jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
							}
						}
					}
				}

				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}

		return this;
	}
});

function findOrAppend( elem, tag ) {
	return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	var attr = elem.getAttributeNode("type");
	elem.type = ( attr && attr.specified ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[1];
	} else {
		elem.removeAttribute("type");
	}
	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; (elem = elems[i]) != null; i++ ) {
		jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
	}
}

function cloneCopyEvent( src, dest ) {

	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone(true);
			jQuery( insert[i] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
			undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
	if ( manipulation_rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
				(elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; (node = srcElements[i]) != null; ++i ) {
				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[i] ) {
					fixCloneNodeIssues( node, destElements[i] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; (node = srcElements[i]) != null; i++ ) {
					cloneCopyEvent( node, destElements[i] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,

			// Ensure a safe fragment
			safe = createSafeFragment( context ),

			nodes = [],
			i = 0;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;

					tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Manually add leading whitespace removed by IE
					if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
					}

					// Remove IE's autoinserted <tbody> from table fragments
					if ( !jQuery.support.tbody ) {

						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :

							// String was a bare <thead> or <tfoot>
							wrap[1] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;

						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
								elem.removeChild( tbody );
							}
						}
					}

					jQuery.merge( nodes, tmp.childNodes );

					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";

					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}

					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}

		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}

		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !jQuery.support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		tmp = null;

		return safe;
	},

	cleanData: function( elems, /* internal */ acceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			deleteExpando = jQuery.support.deleteExpando,
			special = jQuery.event.special;

		for ( ; (elem = elems[i]) != null; i++ ) {

			if ( acceptData || jQuery.acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// IE does not allow us to delete expando properties from nodes,
						// nor does it have a removeAttribute function on Document nodes;
						// we must handle all of these cases
						if ( deleteExpando ) {
							delete elem[ internalKey ];

						} else if ( typeof elem.removeAttribute !== core_strundefined ) {
							elem.removeAttribute( internalKey );

						} else {
							elem[ internalKey ] = null;
						}

						core_deletedIds.push( id );
					}
				}
			}
		}
	}
});
var iframe, getStyles, curCSS,
	ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/,
	rposition = /^(top|right|bottom|left)$/,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var len, styles,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		var bool = typeof state === "boolean";

		return this.each(function() {
			if ( bool ? state : isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Exclude the following css properties to add px
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

				// Wrapped to prevent IE from throwing errors when 'invalid' values are provided
				// Fixes bug #5509
				try {
					style[ name ] = value;
				} catch(e) {}
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	},

	// A method for quickly swapping in/out CSS properties to get correct calculations
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
	getStyles = function( elem ) {
		return window.getComputedStyle( elem, null );
	};

	curCSS = function( elem, name, _computed ) {
		var width, minWidth, maxWidth,
			computed = _computed || getStyles( elem ),

			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
			style = elem.style;

		if ( computed ) {

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret;
	};
} else if ( document.documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, _computed ) {
		var left, rs, rsLeft,
			computed = _computed || getStyles( elem ),
			ret = computed ? computed[ name ] : undefined,
			style = elem.style;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are proportional to the parent element instead
		// and we can't measure the parent instead because it might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		return ret === "" ? "auto" : ret;
	};
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

if ( !jQuery.support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {
			// IE uses filters for opacity
			return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
				( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
				computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
			(!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.hover = function( fnOver, fnOut ) {
	return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
};
var
	// Document location
	ajaxLocParts,
	ajaxLocation,
	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, response, type,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off, url.length );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": window.String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var // Cross-domain detection vars
			parts,
			// Loop variable
			i,
			// URL without anti-cache param
			cacheURL,
			// Response headers as string
			responseHeadersString,
			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,
			// Response headers
			responseHeaders,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// If successful, handle type chaining
			if ( status >= 200 && status < 300 || status === 304 ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 ) {
					isSuccess = true;
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					isSuccess = true;
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					isSuccess = ajaxConvert( s, response );
					statusText = isSuccess.state;
					success = isSuccess.data;
					error = isSuccess.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	}
});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes,
		responseFields = s.responseFields;

	// Fill responseXXX fields
	for ( type in responseFields ) {
		if ( type in responses ) {
			jqXHR[ responseFields[type] ] = responses[ type ];
		}
	}

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {
	var conv2, current, conv, tmp,
		converters = {},
		i = 0,
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice(),
		prev = dataTypes[ 0 ];

	// Apply the dataFilter if provided
	if ( s.dataFilter ) {
		response = s.dataFilter( response, s.dataType );
	}

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	// Convert to each sequential dataType, tolerating list modification
	for ( ; (current = dataTypes[++i]); ) {

		// There's only work to do if current dataType is non-auto
		if ( current !== "*" ) {

			// Convert response if prev dataType is non-auto and differs from current
			if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split(" ");
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.splice( i--, 0, current );
								}

								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s["throws"] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}

			// Update prev for next iteration
			prev = current;
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery("head")[0] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement("script");

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
var xhrCallbacks, xhrSupported,
	xhrId = 0,
	// #5280: Internet Explorer will keep connections alive if we don't abort on unload
	xhrOnUnloadAbort = window.ActiveXObject && function() {
		// Abort all pending requests
		var key;
		for ( key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	};

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject("Microsoft.XMLHTTP");
	} catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
	/* Microsoft failed to properly
	 * implement the XMLHttpRequest in IE7 (can't request local files),
	 * so we use the ActiveXObject when it is available
	 * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
	 * we need a fallback.
	 */
	function() {
		return !this.isLocal && createStandardXHR() || createActiveXHR();
	} :
	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport(function( s ) {
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !s.crossDomain || jQuery.support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {

					// Get a new xhr
					var handle, i,
						xhr = s.xhr();

					// Open the socket
					// Passing null username, generates a login popup on Opera (#2865)
					if ( s.username ) {
						xhr.open( s.type, s.url, s.async, s.username, s.password );
					} else {
						xhr.open( s.type, s.url, s.async );
					}

					// Apply custom fields if provided
					if ( s.xhrFields ) {
						for ( i in s.xhrFields ) {
							xhr[ i ] = s.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( s.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( s.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !s.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Need an extra try/catch for cross domain requests in Firefox 3
					try {
						for ( i in headers ) {
							xhr.setRequestHeader( i, headers[ i ] );
						}
					} catch( err ) {}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( s.hasContent && s.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, responseHeaders, statusText, responses;

						// Firefox throws exceptions when accessing properties
						// of an xhr when a network error occurred
						// http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
						try {

							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

								// Only called once
								callback = undefined;

								// Do not keep as active anymore
								if ( handle ) {
									xhr.onreadystatechange = jQuery.noop;
									if ( xhrOnUnloadAbort ) {
										delete xhrCallbacks[ handle ];
									}
								}

								// If it's an abort
								if ( isAbort ) {
									// Abort it manually if needed
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
									responseHeaders = xhr.getAllResponseHeaders();

									// When requesting binary data, IE6-9 will throw an exception
									// on any attempt to access responseText (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}

									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch( e ) {
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}

									// Filter status for non standard behaviors

									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && s.isLocal && !s.crossDomain ) {
										status = responses.text ? 200 : 404;
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
						} catch( firefoxAccessException ) {
							if ( !isAbort ) {
								complete( -1, firefoxAccessException );
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, responseHeaders );
						}
					};

					if ( !s.async ) {
						// if we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {
						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						setTimeout( callback );
					} else {
						handle = ++xhrId;
						if ( xhrOnUnloadAbort ) {
							// Create the active xhrs callbacks list if needed
							// and attach the unload handler
							if ( !xhrCallbacks ) {
								xhrCallbacks = {};
								jQuery( window ).unload( xhrOnUnloadAbort );
							}
							// Add to list of active xhrs callbacks
							xhrCallbacks[ handle ] = callback;
						}
						xhr.onreadystatechange = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	});
}
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var end, unit,
				tween = this.createTween( prop, value ),
				parts = rfxnum.exec( value ),
				target = tween.cur(),
				start = +target || 0,
				scale = 1,
				maxIterations = 20;

			if ( parts ) {
				end = +parts[2];
				unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

				// We need to compute starting value
				if ( unit !== "px" && start ) {
					// Iteratively approximate from a nonzero starting point
					// Prefer the current property, because this process will be trivial if it uses the same units
					// Fallback to end or a simple constant
					start = jQuery.css( tween.elem, prop, true ) || end || 1;

					do {
						// If previous iteration zeroed out, double until we get *something*
						// Use a string for doubling factor so we don't accidentally see scale as unchanged below
						scale = scale || ".5";

						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );

					// Update scale, tolerating zero or NaN from tween.cur()
					// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}

				tween.unit = unit;
				tween.start = start;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
			}
			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
	jQuery.each( props, function( prop, value ) {
		var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( collection[ index ].call( animation, prop, value ) ) {

				// we're done with this property
				return;
			}
		}
	});
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	createTweens( animation, props );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var value, name, index, easing, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/*jshint validthis:true */
	var prop, index, length,
		value, dataShow, toggle,
		tween, hooks, oldfire,
		anim = this,
		style = elem.style,
		orig = {},
		handled = [],
		hidden = elem.nodeType && isHidden( elem );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";

			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !jQuery.support.shrinkWrapBlocks ) {
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	}


	// show/hide pass
	for ( index in props ) {
		value = props[ index ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ index ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {
				continue;
			}
			handled.push( index );
		}
	}

	length = handled.length;
	if ( length ) {
		dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
		if ( "hidden" in dataShow ) {
			hidden = dataShow.hidden;
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( index = 0 ; index < length ; index++ ) {
			prop = handled[ index ];
			tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
			orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );
				doAnimation.finish = function() {
					anim.stop( true );
				};
				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.cur && hooks.cur.finish ) {
				hooks.cur.finish.call( this );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		box = { top: 0, left: 0 },
		elem = this[ 0 ],
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
		left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var position = jQuery.css( elem, "position" );

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		var curElem = jQuery( elem ),
			curOffset = curElem.offset(),
			curCSSTop = jQuery.css( elem, "top" ),
			curCSSLeft = jQuery.css( elem, "left" ),
			calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
			props = {}, curPosition = {}, curTop, curLeft;

		// need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || document.documentElement;
			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || document.documentElement;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? (prop in win) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// })();
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
	define( "jquery", [], function () { return jQuery; } );
}

})( window );


requirejs.config({
    baseUrl: "/scripts",
    paths: {
        "threejs"		: "../libs/threejs/three.min",
        "threejsCSS3D"	: "../libs/threejs/three.css3DObject",
        "threeObjLoader": "../libs/threejs/threeObjLoader",
        "jquery"		: "../libs/mediaelementjs/jquery",
        "mediaelement"	: "../libs/mediaelementjs/mediaelement-and-player.min"
    },
    shim: {
    	"jquery" : {
    		exports: '$'
    	}
    }
});

require(['threejs', 'scene', 'videoManager', 'imageManager',"mediaelement", "jquery"], function(THREE, scene, VideoManager, ImageManager) {

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

		var element	= document.createElement('video')
		element.style.width = '250px';
		element.style.height = '250px';
		element.style.opacity = '0.9';
		element.src = "data/video/video1.mp4";
		var player = new MediaElementPlayer(element, {features : ["playpause", "progress", "current", "duration", "tracks", "volume"]});
		player.container[0].style.opacity = 0.9;

		var element1	= document.createElement('video')
		element1.style.width = '250px';
		element1.style.height = '250px';
		element1.style.opacity = '0.9';
		element1.src = "data/video/video2.mp4";
		var player1 = new MediaElementPlayer(element1, {features : ["playpause", "progress", "current", "duration", "tracks", "volume"]});
		player1.container[0].style.opacity = 0.9;
		

		var element2	= document.createElement('video')
		element2.style.width = '250px';
		element2.style.height = '250px';
		element2.style.opacity = '0.9';
		element2.src = "data/video/video3.mp4";
		element2.id = "aaa"
		var player2 = new MediaElementPlayer(element2, {features : ["playpause", "progress", "current", "duration", "tracks", "volume"]});
		player2.container[0].style.opacity = 0.9;
		

		var element3	= document.createElement('video')
		element3.style.width = '250px';
		element3.style.height = '250px';
		element3.style.opacity = '0.9';
		element3.src = "data/video/video4.mp4";
		var player3 = new MediaElementPlayer(element3, {features : ["playpause", "progress", "current", "duration", "tracks", "volume"]});
		player3.container[0].style.opacity = 0.9;
		
	    cubeSidesDetails = {
	    						"RIGHT" : { quadType: "HTML", htmlElement: player.container[0] },
		    					"REAR" : {  quadType: "HTML", htmlElement: player1.container[0]},
		    					"FRONT" : {  quadType: "HTML", htmlElement: player2.container[0]},
		    					"LEFT" : {  quadType: "HTML", htmlElement: player3.container[0]},
		    					"BOTTOM" : {  quadType: "IMAGE", imageElement: imageManager.getImageByID("finished-bottom") },
		    					"TOP": {  quadType: "IMAGE", imageElement: imageManager.getImageByID("finished-top")}
		    				};
	}

	scene.init(videoManager, imageManager, cubeSidesDetails);
	scene.animate();	
});
define("main", function(){});

