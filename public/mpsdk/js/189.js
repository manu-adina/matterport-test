/*! For license information please see 189.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[189],{41835:(t,e,i)=>{i.d(e,{Z:()=>o});class o{}},22533:(t,e,i)=>{var o;i.d(e,{S:()=>o}),function(t){t[t.Standard=0]="Standard",t[t.Depth=1]="Depth",t[t.Transparent=2]="Transparent",t[t.Wireframe=3]="Wireframe",t[t.UV=4]="UV"}(o||(o={}))},7402:(t,e,i)=>{i.d(e,{g:()=>h});var o=i(81396),s=i(17878),n=i(56512),r=i(82814),a=i(12529),l=i(53203);class h extends r.S{constructor(t,e,i=s.o.ALL){super(),this._opacity=1,this._chunks=[],this.size=new o.Vector3,this.center=new o.Vector3,this.built=!1,this.layers.mask=i.mask,this.name=`RoomMesh:${t}-${e}`,this.meshGroup=t,this.meshSubgroup=e,this.renderOrder=a.z.default,this.onBeforeRender=(t,e,i,o,s,n)=>{this.updateUniforms(s,n)}}dispose(){this.reset()}reset(){this._chunks.length=0,this.geometry.dispose(),delete this.onBuild,delete this.onOpacityUpdate,this.built=!1}addChunk(t){-1===this._chunks.indexOf(t)&&this._chunks.push(t)}getChunk(t){return this._chunks[t]}build(){if(this.built)throw new Error("build() should only be called once");if(!this._chunks.length)return;const t=(0,n.qf)(this._chunks.map((t=>t.geometry)));t.clearGroups();let e=0;this.material=[],this._chunks.forEach(((i,o)=>{i.geometry&&i.geometry.index&&(t.addGroup(e,i.geometry.index.count,o),e+=i.geometry.index.count,i.geometry.dispose(),i.geometry=t,i.notifyOnMaterialUpdated((t=>{Array.isArray(this.material)&&(this.material[o]=t),this.onMaterialUpdate&&this.onMaterialUpdate()})),i.onOpacityUpdate=t=>{this.opacity=t})})),this.geometry=t,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.material=this._chunks.map((t=>t.material)),this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}buildWithTileChunk(t){if(this.built)return;const{meshGroup:e,meshSubgroup:i,lod:o}=t;this.name=`RoomMesh:${o}-${e}-${i}-${t.chunkIndex}`,this.meshGroup=e,this.meshSubgroup=i,this._chunks.push(t),t.notifyOnMaterialUpdated((t=>{this.material=t,this.onMaterialUpdate&&this.onMaterialUpdate()})),t.onOpacityUpdate=t=>{this.opacity=t},this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}updateUniforms(t,e){t instanceof o.RawShaderMaterial&&(e?this.chunks[e.materialIndex].onBeforeDraw(t):this.chunks.length&&this.chunks[0].onBeforeDraw(t))}get boundingBox(){return(0,n.A5)(this.geometry)}set opacity(t){t!==this.opacity&&(this._opacity=t,this.raycastEnabled=t>l.xx.FADE_CLICKABLE_THRESHOLD,this.renderOrder=t<l.xx.FADE_OPAQUE?a.z.ghostFloor:a.z.default,this.onOpacityUpdate&&this.onOpacityUpdate(t))}get opacity(){return this._opacity}get chunks(){return this._chunks}getSortKey(){return this.chunks.length?this._chunks[0].getSortKey():0}}},51411:(t,e,i)=>{i.d(e,{n:()=>s});var o=i(19663);class s extends o.m{constructor(t,e,i){super(),this.id="MESH_PREVIEW_POSITION",this.payload={enabled:t,previewCirclePosition:e,size:i}}}},68191:(t,e,i)=>{i.d(e,{U:()=>n});var o=i(19663),s=i(22533);class n extends o.m{constructor(t){super(),this.id="SET_CHUNK_RENDER_MODE",this.payload={mode:t}}}n.modes=s.S},38987:(t,e,i)=>{i.d(e,{u:()=>s});var o=i(19663);class s extends o.m{constructor(t=null){super(),this.id="SET_MOUSE_CURSOR",this.payload={cursor:t}}}},34956:(t,e,i)=>{var o;i.d(e,{C:()=>o}),function(t){t.NONE="none",t.DEFAULT="default",t.MOVE="move",t.MOVE_LF="col-resize",t.MOVE_UD="row-resize",t.XHAIR="crosshair",t.PLUS="cell",t.QUESTION="help",t.NOPE="not-allowed",t.FINGER="pointer",t.TEXT="text",t.TEXT_VERT="vertical-text",t.ZOOM_IN="zoom-in",t.ZOOM_OUT="zoom-in",t.GRAB="grab",t.GRABBING="grabbing",t.ARROW_R="e-resize",t.ARROW_L="w-resize",t.ARROW_U="n-resize",t.ARROW_D="s-resize",t.ARROW_UR="ne-resize",t.ARROW_UL="nw-resize",t.ARROW_DR="se-resize",t.ARROW_DL="sw-resize",t.ARROW_LR="ew-resize",t.ARROW_UD="ns-resize",t.ARROW_URDL="nesw-resize",t.ARROW_ULDR="nwse-resize"}(o||(o={}))},93642:(t,e,i)=>{i.d(e,{O8:()=>a,SI:()=>s,WI:()=>l,uQ:()=>n,zf:()=>r});var o=i(69505);const s=1e3/60,n=(0,o.Id)(70),r=-n,a=.05,l=.1/60},49219:(t,e,i)=>{i.r(e),i.d(e,{default:()=>f,lookAccelerationKey:()=>_});var o=i(97542),s=i(81396),n=i(90304),r=i(93642),a=i(21646),l=i(49827),h=i(41835),c=i(46950);class d extends h.Z{constructor(t){super(),this.cameraPoseProxy=t,this.lookVelocity=new s.Vector2,this.lookAccel=new s.Vector2,this.tempAxis=new s.Vector3,this.tempOrientation=new s.Quaternion,this.currentOrientation=new s.Quaternion,this.tempEuler=new s.Euler,this.poseController=null,this.transition={active:!1,startTime:0,elapsed:0,duration:0,velocity:new s.Vector2,easeOut:!1}}setController(t){return this.poseController=t,this}setLookAcceleration(t,e=!1){this.transition.active||(e&&(t.x&&this.lookVelocity.x&&Math.sign(t.x)!==Math.sign(this.lookVelocity.x)&&(this.lookVelocity.x=0),t.y&&this.lookVelocity.y&&Math.sign(t.y)!==Math.sign(this.lookVelocity.y)&&(this.lookVelocity.y=0)),this.lookAccel.x=void 0!==t.x?t.x:this.lookAccel.x,this.lookAccel.y=void 0!==t.y?t.y:this.lookAccel.y)}startTransition(t,e,i){var o;const s=new c.Q;return this.transition.active=!0,this.transition.duration=t,this.transition.elapsed=0,this.transition.startTime=Date.now(),this.transition.deferred=s,this.transition.velocity.copy(e),this.transition.easeOut=i,this.lookAccel.set(0,0),this.lookVelocity.copy(e),null===(o=this.poseController)||void 0===o||o.beginExternalTransition(),s.promise()}stopTransition(){var t;this.transition.active&&(null===(t=this.poseController)||void 0===t||t.endExternalTransition(),this.transition.active=!1),this.transition.deferred&&(this.transition.deferred.resolve(),this.transition.deferred=void 0)}updateTransition(t){const e=t/r.SI;if(this.lookVelocity.copy(this.transition.velocity),this.transition.elapsed+=t,this.transition.elapsed>=this.transition.duration){const e=this.transition.duration-(this.transition.elapsed-t);this.lookVelocity.multiplyScalar(e/t)}else this.lookVelocity.multiplyScalar(e)}updateCameraParameters(){var t;const e=this.cameraPoseProxy.pose;this.tempEuler.setFromQuaternion(e.rotation,"YXZ");const i=this.tempEuler.x,o=(0,l.uZ)(this.lookVelocity.y,r.zf-i,r.uQ-i);this.tempAxis.copy(n.f.RIGHT),this.tempOrientation.setFromAxisAngle(this.tempAxis.applyQuaternion(e.rotation),o),this.currentOrientation.copy(e.rotation).premultiply(this.tempOrientation),this.tempOrientation.setFromAxisAngle(n.f.UP,this.lookVelocity.x),this.currentOrientation.premultiply(this.tempOrientation),e.rotation.equals(this.currentOrientation)||(this.tempOrientation.copy(this.currentOrientation).normalize(),null===(t=this.poseController)||void 0===t||t.updateCameraRotation(this.tempOrientation))}update(t){const e=this.cameraPoseProxy.pose,i=t/r.SI;e.rotation.equals(this.currentOrientation)||this.currentOrientation.copy(e.rotation),this.transition.active?(this.updateTransition(t),this.updateCameraParameters(),this.transition.elapsed>=this.transition.duration&&(this.stop(this.transition.easeOut),this.transition.active=!1)):(this.lookAccel.length()>a.Z.epsilon||this.lookVelocity.length()>a.Z.epsilon)&&(this.lookVelocity.addScaledVector(this.lookAccel,i),this.updateCameraParameters(),this.lookVelocity.multiplyScalar(Math.pow(1-r.O8,i)))}stop(t=!1){this.stopTransition(),this.lookAccel.set(0,0),t||this.lookVelocity.set(0,0)}startRotateTransition(t,e,i){return this.beforeStartRotationTransition&&this.beforeStartRotationTransition(),this.startTransition(t,e.clone().multiplyScalar(r.SI),i).nativePromise()}startTranslateTransition(t,e,i=!0){throw new Error("Panning isn't supported in Panorama Controls")}startZoomTransition(t,e,i){throw new Error("Zooming isn't supported in Panorama Controls")}}var u=i(23254),p=i(5135),m=i(95882),y=i(16782),g=i(32597),k=i(6667),x=i(5090),R=i(80592),O=i(89553),v=i(34029),A=i(69170),S=i(25985);const _="Rotation speed";class f extends o.Y{constructor(){super(...arguments),this.name="panorama-controls",this.controlsEngaged=!1,this.lookAccelerationSpeed=r.WI,this.calcRotationAngle=(()=>{const t=new s.Matrix4,e=new s.Vector3,i=new s.Vector3;return(o,n)=>{t.copy(this.cameraData.pose.projection.asThreeMatrix4()),t.invert(),e.set(o.x-n.x,o.y-n.y,-1).applyMatrix4(t),i.set(o.x,o.y,-1).applyMatrix4(t);const r=Math.sqrt(e.x*e.x+e.z*e.z),a=Math.sqrt(i.x*i.x+i.z*i.z),l=Math.atan2(e.y,r),h=Math.atan2(i.y,a)-l;e.y=0,i.y=0,e.normalize(),i.normalize();const c=Math.acos(e.dot(i));let d=0;return isNaN(c)||(d=c,n.x>0&&(d*=-1)),new s.Vector2(-d,-h)}})()}async init(t,e){const i=await e.getModuleBySymbol(A.y.CONTROLS_COMMON);this.controls=new d(i.cameraPoseProxy),this.cameraData=await e.market.waitForData(S.M);const o=this.cameraData;this.controls.beforeStartRotationTransition=()=>{o.transition&&o.transition.activeInternal&&o.transition.to.rotation&&(o.transition.to.rotation=void 0)},i.addControls(m.Ey.Panorama,this.controls),i.addControls(m.Ey.Mesh,this.controls),this.market=e.market,this.bindings.push(e.subscribe(x.Z,(t=>{this.controls.stop()}))),e.getModuleBySymbol(A.y.INPUT).then((t=>{t.registerHandler(R.E0,(t=>{this.validateViewmode()&&this.controls.stop()})),t.registerHandler(R._t,(t=>{this.validateViewmode()&&t.buttons&y.r.PRIMARY&&(this.controlsEngaged=!0,this.onDrag(t.position,t.delta),this.controls.update(r.SI),this.controls.stop())})),t.registerHandler(R._R,(t=>{this.validateViewmode()&&this.controlsEngaged&&(t.timeSinceLastMove<100&&!(t.buttons&y.r.PRIMARY)&&(this.onDrag(t.position,t.delta),this.controls.update(r.SI),this.controls.setLookAcceleration({x:0,y:0})),this.controlsEngaged=!1)})),t.registerHandler(O.e,(t=>{this.validateViewmode()&&this.onKey(t.key,t.state)}))}))}onUpdate(t){this.validateViewmode()&&this.controls.update(t)}onDrag(t,e){this.controls.setLookAcceleration(this.calcRotationAngle(t,e))}onKey(t,e){var i,o;const s=null!==(o=null===(i=this.market.tryGetData(v.e))||void 0===i?void 0:i.tryGetProperty(_,null))&&void 0!==o?o:null;this.lookAccelerationSpeed=s?s*(Math.PI/180)/60:this.lookAccelerationSpeed;const n=e===k.M.DOWN;switch(t){case g.R.LEFTARROW:case g.R.J:this.controls.setLookAcceleration({x:n?this.lookAccelerationSpeed:0},!0);break;case g.R.RIGHTARROW:case g.R.L:this.controls.setLookAcceleration({x:n?-this.lookAccelerationSpeed:0},!0);break;case g.R.K:this.controls.setLookAcceleration({y:n?-this.lookAccelerationSpeed:0},!0);break;case g.R.I:this.controls.setLookAcceleration({y:n?this.lookAccelerationSpeed:0},!0)}}validateViewmode(){var t,e,i,o;return null!==(e=null===(t=this.market.tryGetData(u.O))||void 0===t?void 0:t.isInside())&&void 0!==e&&e&&null!==(o=!(null===(i=this.market.tryGetData(p.Z))||void 0===i?void 0:i.isVR()))&&void 0!==o&&o}}},93377:(t,e,i)=>{i.d(e,{b:()=>s});var o=i(81396);class s extends o.RawShaderMaterial{onBeforeCompile(t,e){super.onBeforeCompile(t,e),e.capabilities.isWebGL2&&this.glslVersion!==o.GLSL3&&(t.glslVersion=o.GLSL3,t.vertexShader=n+t.vertexShader,t.fragmentShader=r+t.fragmentShader)}}const n="\n#define attribute in\n#define varying out\n#define texture2D texture\n",r="\n#define varying in\nout highp vec4 pc_fragColor;\n#define gl_FragColor pc_fragColor\n#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n"},87928:(t,e,i)=>{i.d(e,{E:()=>s});var o=i(81396);class s extends o.Mesh{constructor(t,e){super(t,e)}}},69984:(t,e,i)=>{i.d(e,{D5:()=>h,Ex:()=>c,G1:()=>a,rn:()=>l});var o=i(81396),s=i(39880);const n=()=>Math.random(),r={},a=(t,e=n())=>(r[e]||(r[e]=new o.Vector4(n(),n(),n(),t)),r[e]),l=()=>new o.Color(n(),n(),n()),h=t=>t instanceof Object&&"r"in t&&"g"in t&&"b"in t;function c(t){return`#${(0,s.Q_)(255*t.r,2,"0",16)}${(0,s.Q_)(255*t.g,2,"0",16)}${(0,s.Q_)(255*t.b,2,"0",16)}`}}}]);