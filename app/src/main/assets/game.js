(()=>{var Oh=0,jc=1,Bh=2;var Yi=1,zh=2,Ns=3,Ci=0,$e=1,ln=2,Zi=0,Us=1,Ii=2,tl=3,el=4,kh=5;var Ji=100,Hh=101,Gh=102,Vh=103,Wh=104,Xh=200,qh=201,Yh=202,Zh=203,nl=204,il=205,Jh=206,$h=207,Kh=208,Qh=209,jh=210,tu=211,eu=212,nu=213,iu=214,Ia=0,Pa=1,La=2,ys=3,Da=4,Na=5,Ua=6,Fa=7,sl=0,su=1,ru=2,qn=0,rl=1,al=2,ol=3,Fr=4,cl=5,ll=6,hl=7;var ul=300,$i=301,Fs=302,uo=303,fo=304,vs=1e3,kn=1001,Oa=1002,qe=1003,au=1004;var Or=1005;var on=1006,po=1007;var ci=1008;var un=1009,dl=1010,fl=1011,Os=1012,mo=1013,Nn=1014,Tn=1015,Un=1016,go=1017,xo=1018,Ki=1020,pl=35902,ml=35899,gl=1021,xl=1022,Fn=1023,si=1026,li=1027,_o=1028,yo=1029,Pi=1030,vo=1031;var Mo=1033,Br=33776,zr=33777,kr=33778,Hr=33779,So=35840,bo=35841,Eo=35842,To=35843,wo=36196,Ao=37492,Ro=37496,Co=37488,Io=37489,Gr=37490,Po=37491,Lo=37808,Do=37809,No=37810,Uo=37811,Fo=37812,Oo=37813,Bo=37814,zo=37815,ko=37816,Ho=37817,Go=37818,Vo=37819,Wo=37820,Xo=37821,qo=36492,Yo=36494,Zo=36495,Jo=36283,$o=36284,Vr=36285,Ko=36286;var tr=2300,Ba=2301,Ra=2302,zc=2303,kc=2400,Hc=2401,Gc=2402;var ou=3200;var Qo=0,cu=1,hi="",De="srgb",er="srgb-linear",nr="linear",xe="srgb";var Ca=7680;var lu=519,hu=512,uu=513,du=514,_l=515,fu=516,pu=517,yl=518,vl=519,Ml=35044;var Sl="300 es",Mn=2e3,Ms=2001;function Fd(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Od(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mu(){let s=ir("canvas");return s.style.display="block",s}var eh={},Ss=null;function sr(...s){let t="THREE."+s.shift();Ss?Ss("log",t,...s):console.log(t,...s)}function gu(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function qt(...s){s=gu(s);let t="THREE."+s.shift();if(Ss)Ss("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Yt(...s){s=gu(s);let t="THREE."+s.shift();if(Ss)Ss("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ks(...s){let t=s.join(" ");t in eh||(eh[t]=!0,qt(...s))}function xu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var _u={[Ia]:Ia,[La]:Ua,[Da]:Da,[ys]:Na,[Pa]:Pa,[Ua]:La,[Fa]:Fa,[Na]:ys},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var fc=Math.PI/180,rr=180/Math.PI;function Li(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function le(s,t,e){return Math.max(t,Math.min(e,s))}function Bd(s,t){return(s%t+t)%t}function pc(s,t,e){return(1-e)*s+e*t}function yu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function jo(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vu(s,t){if(t.constructor===Float32Array)return s;let e=jo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function Mu(s,t){if(t.constructor===Float32Array)return s;let e=jo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Rl=class Rl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Rl.prototype.isVector2=!0;var ut=Rl,He=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3],f=r[a+0],u=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||c!==f||l!==u||h!==p){let m=c*f+l*u+h*p+d*_;m<0&&(f=-f,u=-u,p=-p,_=-_,m=-m);let g=1-o;if(m<.9995){let M=Math.acos(m),T=Math.sin(M);g=Math.sin(g*M)/T,o=Math.sin(o*M)/T,c=c*g+f*o,l=l*g+u*o,h=h*g+p*o,d=d*g+_*o}else{c=c*g+f*o,l=l*g+u*o,h=h*g+p*o,d=d*g+_*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],u=r[a+2],p=r[a+3];return t[e]=o*p+h*d+c*u-l*f,t[e+1]=c*p+h*f+l*d-o*u,t[e+2]=l*p+h*u+o*f-c*d,t[e+3]=h*p-o*d-c*f-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),u=c(i/2),p=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d+f*u*p;break;case"YZX":this._x=f*h*d+l*u*p,this._y=l*u*d+f*h*p,this._z=l*h*p-f*u*d,this._w=l*h*d-f*u*p;break;case"XZY":this._x=f*h*d-l*u*p,this._y=l*u*d-f*h*p,this._z=l*h*p+f*u*d,this._w=l*h*d+f*u*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(r+l)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Cl=class Cl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mc.copy(this).projectOnVector(t),this.sub(mc)}reflect(t){return this.sub(mc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Cl.prototype.isVector3=!0;var I=Cl,mc=new I,nh=new He,Il=class Il{constructor(t,e,n,i,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],u=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],T=i[4],S=i[7],A=i[2],w=i[5],x=i[8];return r[0]=a*_+o*M+c*A,r[3]=a*m+o*T+c*w,r[6]=a*g+o*S+c*x,r[1]=l*_+h*M+d*A,r[4]=l*m+h*T+d*w,r[7]=l*g+h*S+d*x,r[2]=f*_+u*M+p*A,r[5]=f*m+u*T+p*w,r[8]=f*g+u*S+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,u=l*r-a*c,p=e*d+n*f+i*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=u*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ks("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(gc.makeScale(t,e)),this}rotate(t){return Ks("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(gc.makeRotation(-t)),this}translate(t,e){return Ks("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Il.prototype.isMatrix3=!0;var $t=Il,gc=new $t,ih=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zd(){let s={enabled:!0,workingColorSpace:er,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xe&&(i.r=ii(i.r),i.g=ii(i.g),i.b=ii(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xe&&(i.r=_s(i.r),i.g=_s(i.g),i.b=_s(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===hi?nr:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[er]:{primaries:t,whitePoint:n,transfer:nr,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),s}var de=zd();function ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ts,za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=ir("canvas")),ts.width=t.width,ts.height=t.height;let i=ts.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ir("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kd=0,bs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Li(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xc(i[a].image)):r.push(xc(i[a]))}else r=xc(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?za.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var Hd=0,_c=new I,cn=class s extends Hn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=kn,i=kn,r=on,a=ci,o=Fn,c=un,l=s.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Li(),this.name="",this.source=new bs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(_c).x}get height(){return this.source.getSize(_c).y}get depth(){return this.source.getSize(_c).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case Oa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case Oa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=ul;cn.DEFAULT_ANISOTROPY=1;var Pl=class Pl{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],u=c[5],p=c[9],_=c[2],m=c[6],g=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(l+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(l+1)/2,S=(u+1)/2,A=(g+1)/2,w=(h+f)/4,x=(d+_)/4,v=(p+m)/4;return T>S&&T>A?T<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(T),i=w/n,r=x/n):S>A?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=w/i,r=v/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=x/r,i=v/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((l+u+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Pl.prototype.isVector4=!0;var Ae=Pl,ka=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new cn({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new bs(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ar=class extends cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends cn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qe,this.minFilter=qe,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ho=class ho{constructor(t,e,n,i,r,a,o,c,l,h,d,f,u,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,f,u,p,_,m)}set(t,e,n,i,r,a,o,c,l,h,d,f,u,p,_,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=h,g[10]=d,g[14]=f,g[3]=u,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ho().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,u=a*d,p=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=u+p*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=p+u*l,e[10]=a*c}else if(t.order==="YXZ"){let f=c*h,u=c*d,p=l*h,_=l*d;e[0]=f+_*o,e[4]=p*o-u,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=u*o-p,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){let f=c*h,u=c*d,p=l*h,_=l*d;e[0]=f-_*o,e[4]=-a*d,e[8]=p+u*o,e[1]=u+p*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let f=a*h,u=a*d,p=o*h,_=o*d;e[0]=c*h,e[4]=p*l-u,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=u*l-p,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let f=a*c,u=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=_-f*d,e[8]=p*d+u,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*d+p,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*c,u=a*l,p=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=a*h,e[9]=u*d-p,e[2]=p*d-u,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gd,t,Vd)}lookAt(t,e,n){let i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),yi.crossVectors(n,dn),yi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),yi.crossVectors(n,dn)),yi.normalize(),ta.crossVectors(dn,yi),i[0]=yi.x,i[4]=ta.x,i[8]=dn.x,i[1]=yi.y,i[5]=ta.y,i[9]=dn.y,i[2]=yi.z,i[6]=ta.z,i[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],u=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],T=n[7],S=n[11],A=n[15],w=i[0],x=i[4],v=i[8],C=i[12],R=i[1],D=i[5],F=i[9],V=i[13],P=i[2],H=i[6],Y=i[10],G=i[14],ot=i[3],X=i[7],st=i[11],at=i[15];return r[0]=a*w+o*R+c*P+l*ot,r[4]=a*x+o*D+c*H+l*X,r[8]=a*v+o*F+c*Y+l*st,r[12]=a*C+o*V+c*G+l*at,r[1]=h*w+d*R+f*P+u*ot,r[5]=h*x+d*D+f*H+u*X,r[9]=h*v+d*F+f*Y+u*st,r[13]=h*C+d*V+f*G+u*at,r[2]=p*w+_*R+m*P+g*ot,r[6]=p*x+_*D+m*H+g*X,r[10]=p*v+_*F+m*Y+g*st,r[14]=p*C+_*V+m*G+g*at,r[3]=M*w+T*R+S*P+A*ot,r[7]=M*x+T*D+S*H+A*X,r[11]=M*v+T*F+S*Y+A*st,r[15]=M*C+T*V+S*G+A*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],u=t[14],p=t[3],_=t[7],m=t[11],g=t[15],M=c*u-l*f,T=o*u-l*d,S=o*f-c*d,A=a*u-l*h,w=a*f-c*h,x=a*d-o*h;return e*(_*M-m*T+g*S)-n*(p*M-m*A+g*w)+i*(p*T-_*A+g*x)-r*(p*S-_*w+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-n*(r*h-o*c)+i*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],u=t[11],p=t[12],_=t[13],m=t[14],g=t[15],M=e*o-n*a,T=e*c-i*a,S=e*l-r*a,A=n*c-i*o,w=n*l-r*o,x=i*l-r*c,v=h*_-d*p,C=h*m-f*p,R=h*g-u*p,D=d*m-f*_,F=d*g-u*_,V=f*g-u*m,P=M*V-T*F+S*D+A*R-w*C+x*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/P;return t[0]=(o*V-c*F+l*D)*H,t[1]=(i*F-n*V-r*D)*H,t[2]=(_*x-m*w+g*A)*H,t[3]=(f*w-d*x-u*A)*H,t[4]=(c*R-a*V-l*C)*H,t[5]=(e*V-i*R+r*C)*H,t[6]=(m*S-p*x-g*T)*H,t[7]=(h*x-f*S+u*T)*H,t[8]=(a*F-o*R+l*v)*H,t[9]=(n*R-e*F-r*v)*H,t[10]=(p*w-_*S+g*M)*H,t[11]=(d*S-h*w-u*M)*H,t[12]=(o*C-a*D-c*v)*H,t[13]=(e*D-n*C+i*v)*H,t[14]=(_*T-p*A-m*M)*H,t[15]=(h*A-d*T+f*M)*H,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,u=r*h,p=r*d,_=a*h,m=a*d,g=o*d,M=c*l,T=c*h,S=c*d,A=n.x,w=n.y,x=n.z;return i[0]=(1-(_+g))*A,i[1]=(u+S)*A,i[2]=(p-T)*A,i[3]=0,i[4]=(u-S)*w,i[5]=(1-(f+g))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(p+T)*x,i[9]=(m-M)*x,i[10]=(1-(f+_))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=es.set(i[0],i[1],i[2]).length(),o=es.set(i[4],i[5],i[6]).length(),c=es.set(i[8],i[9],i[10]).length();r<0&&(a=-a),Cn.copy(this);let l=1/a,h=1/o,d=1/c;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,r,a,o=Mn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-i),f=(e+t)/(e-t),u=(n+i)/(n-i),p,_;if(c)p=r/(a-r),_=a*r/(a-r);else if(o===Mn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=Mn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-i),f=-(e+t)/(e-t),u=-(n+i)/(n-i),p,_;if(c)p=1/(a-r),_=a/(a-r);else if(o===Mn)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Ms)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ho.prototype.isMatrix4=!0;var ne=ho,es=new I,Cn=new ne,Gd=new I(0,0,0),Vd=new I(1,1,1),yi=new I,ta=new I,dn=new I,rh=new ne,ah=new He,Sn=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-le(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ah.setFromEuler(this),this.setFromQuaternion(ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wd=0,oh=new I,ns=new He,Kn=new ne,ea=new I,Hs=new I,Xd=new I,qd=new He,ch=new I(1,0,0),lh=new I(0,1,0),hh=new I(0,0,1),uh={type:"added"},Yd={type:"removed"},is={type:"childadded",child:null},yc={type:"childremoved",child:null},ke=class s extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=Li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new Sn,n=new He,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new $t}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(ch,t)}rotateY(t){return this.rotateOnAxis(lh,t)}rotateZ(t){return this.rotateOnAxis(hh,t)}translateOnAxis(t,e){return oh.copy(t).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ch,t)}translateY(t){return this.translateOnAxis(lh,t)}translateZ(t){return this.translateOnAxis(hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ea.copy(t):ea.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Hs,ea,this.up):Kn.lookAt(ea,Hs,this.up),this.quaternion.setFromRotationMatrix(Kn),i&&(Kn.extractRotation(i.matrixWorld),ns.setFromRotationMatrix(Kn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uh),is.child=t,this.dispatchEvent(is),is.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yd),yc.child=t,this.dispatchEvent(yc),yc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uh),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,Xd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),u=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ke.DEFAULT_UP=new I(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var nn=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zd={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),g=this._getHandJoint(l,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;l.inputState.pinching&&f>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},na={h:0,s:0,l:0};function vc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=de.workingColorSpace){return this.r=t,this.g=e,this.b=n,de.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=de.workingColorSpace){if(t=Bd(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=vc(a,r,t+1/3),this.g=vc(a,r,t),this.b=vc(a,r,t-1/3)}return de.colorSpaceToWorking(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Su[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return de.workingToColorSpace(en.copy(this),t),Math.round(le(en.r*255,0,255))*65536+Math.round(le(en.g*255,0,255))*256+Math.round(le(en.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.workingToColorSpace(en.copy(this),e);let n=en.r,i=en.g,r=en.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=De){de.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,i=en.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(na);let n=pc(vi.h,na.h,e),i=pc(vi.s,na.s,e),r=pc(vi.l,na.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Zt;Zt.NAMES=Su;var cr=class s{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ts=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},In=new I,Qn=new I,Mc=new I,jn=new I,ss=new I,rs=new I,dh=new I,Sc=new I,bc=new I,Ec=new I,Tc=new Ae,wc=new Ae,Ac=new Ae,ni=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),In.subVectors(t,e),i.cross(In);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){In.subVectors(i,e),Qn.subVectors(n,e),Mc.subVectors(t,e);let a=In.dot(In),o=In.dot(Qn),c=In.dot(Mc),l=Qn.dot(Qn),h=Qn.dot(Mc),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(l*c-o*h)*f,p=(a*h-o*c)*f;return r.set(1-u-p,p,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,a){return Tc.setScalar(0),wc.setScalar(0),Ac.setScalar(0),Tc.fromBufferAttribute(t,e),wc.fromBufferAttribute(t,n),Ac.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Tc,r.x),a.addScaledVector(wc,r.y),a.addScaledVector(Ac,r.z),a}static isFrontFacing(t,e,n,i){return In.subVectors(n,e),Qn.subVectors(t,e),In.cross(Qn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),In.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,a,o;ss.subVectors(i,n),rs.subVectors(r,n),Sc.subVectors(t,n);let c=ss.dot(Sc),l=rs.dot(Sc);if(c<=0&&l<=0)return e.copy(n);bc.subVectors(t,i);let h=ss.dot(bc),d=rs.dot(bc);if(h>=0&&d<=h)return e.copy(i);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(n).addScaledVector(ss,a);Ec.subVectors(t,r);let u=ss.dot(Ec),p=rs.dot(Ec);if(p>=0&&u<=p)return e.copy(r);let _=u*l-c*p;if(_<=0&&l>=0&&p<=0)return o=l/(l-p),e.copy(n).addScaledVector(rs,o);let m=h*p-u*d;if(m<=0&&d-h>=0&&u-p>=0)return dh.subVectors(r,i),o=(d-h)/(d-h+(u-p)),e.copy(i).addScaledVector(dh,o);let g=1/(m+_+f);return a=_*g,o=f*g,e.copy(n).addScaledVector(ss,a).addScaledVector(rs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},bn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ia.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(t.matrixWorld),this.union(ia)}let i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),sa.subVectors(this.max,Gs),as.subVectors(t.a,Gs),os.subVectors(t.b,Gs),cs.subVectors(t.c,Gs),Mi.subVectors(os,as),Si.subVectors(cs,os),Bi.subVectors(as,cs);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-Bi.z,Bi.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,Bi.z,0,-Bi.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-Bi.y,Bi.x,0];return!Rc(e,as,os,cs,sa)||(e=[1,0,0,0,1,0,0,0,1],!Rc(e,as,os,cs,sa))?!1:(ra.crossVectors(Mi,Si),e=[ra.x,ra.y,ra.z],Rc(e,as,os,cs,sa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new I,new I,new I,new I,new I,new I,new I,new I],Pn=new I,ia=new bn,as=new I,os=new I,cs=new I,Mi=new I,Si=new I,Bi=new I,Gs=new I,sa=new I,ra=new I,zi=new I;function Rc(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zi.fromArray(s,r);let o=i.x*Math.abs(zi.x)+i.y*Math.abs(zi.y)+i.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var ze=new I,aa=new ut,Jd=0,Ne=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=Tn,this.version=0,this._normalizationScale=t!==void 0?jo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)aa.fromBufferAttribute(this,e),aa.applyMatrix3(t),this.setXY(e,aa.x,aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Mu(t,this.array)}};var lr=class extends Ne{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var hr=class extends Ne{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Ne{constructor(t,e,n){super(new Float32Array(t),e,n)}},$d=new bn,Vs=new I,Cc=new I,ri=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(Cc)),this.expandByPoint(Vs.copy(t.center).sub(Cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kd=0,vn=new ne,Ic=new ke,ls=new I,fn=new bn,Ws=new bn,Xe=new I,Re=class s extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=Li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fd(t)?hr:lr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,n){return vn.makeTranslation(t,e,n),this.applyMatrix4(vn),this}scale(t,e,n){return vn.makeScale(t,e,n),this.applyMatrix4(vn),this}lookAt(t){return Ic.lookAt(t),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ws.setFromBufferAttribute(o),this.morphTargetsRelative?(Xe.addVectors(fn.min,Ws.min),fn.expandByPoint(Xe),Xe.addVectors(fn.max,Ws.max),fn.expandByPoint(Xe)):(fn.expandByPoint(Ws.min),fn.expandByPoint(Ws.max))}fn.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Xe.fromBufferAttribute(o,l),c&&(ls.fromBufferAttribute(t,l),Xe.add(ls)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ne(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new I,c[C]=new I;let h=new I,d=new I,f=new I,u=new ut,p=new ut,_=new ut,m=new I,g=new I;function M(C,R,D){l[C]=l[R]=l[D]=1,h.fromBufferAttribute(n,C),d.fromBufferAttribute(n,R),f.fromBufferAttribute(n,D),u.fromBufferAttribute(r,C),p.fromBufferAttribute(r,R),_.fromBufferAttribute(r,D),d.sub(h),f.sub(h),p.sub(u),_.sub(u);let F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(m.copy(d).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),g.copy(f).multiplyScalar(p.x).addScaledVector(d,-_.x).multiplyScalar(F),o[C].add(m),o[R].add(m),o[D].add(m),c[C].add(g),c[R].add(g),c[D].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let C=0,R=T.length;C<R;++C){let D=T[C],F=D.start,V=D.count;for(let P=F,H=F+V;P<H;P+=3)M(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let S=new I,A=new I,w=new I,x=new I;function v(C){w.fromBufferAttribute(i,C),x.copy(w);let R=o[C];S.copy(R),S.sub(w.multiplyScalar(w.dot(R))).normalize(),A.crossVectors(x,R);let F=A.dot(c[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,F)}for(let C=0,R=n.count;C<R;++C)l[C]&&v(C);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let f=0,u=t.count;f<u;f+=3){let p=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,u=e.count;f<u;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h),u=0,p=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let g=0;g<h;g++)f[p++]=l[u++]}return new Ne(f,h,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let f=l[h],u=t(f,n);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let u=l[d];h.push(u.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ur=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ml,this.updateRanges=[],this.version=0,this.uuid=Li()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=fh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fh(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=Li()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var an=new I,ws=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?jo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyMatrix4(t),this.setXYZ(e,an.x,an.y,an.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.applyNormalMatrix(t),this.setXYZ(e,an.x,an.y,an.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)an.fromBufferAttribute(this,e),an.transformDirection(t),this.setXYZ(e,an.x,an.y,an.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){sr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){sr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):vu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Mu(t,this.data.array)}},Pc=new I,Qd=new I,jd=new $t,Ln=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Pc.subVectors(n,e).cross(Qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Pc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jd.getNormalMatrix(t),i=this.coplanarPoint(Pc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tf=0,Gn=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Li(),this.name="",this.type="Material",this.blending=Us,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ca,this.stencilZFail=Ca,this.stencilZPass=Ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Zt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Vn=class extends Gn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},hs,Xs=new I,us=new I,ds=new I,fs=new ut,qs=new ut,bu=new ne,oa=new I,Ys=new I,ca=new I,ph=new ut,Lc=new ut,mh=new ut,ai=class extends ke{constructor(t=new Vn){if(super(),this.isSprite=!0,this.type="Sprite",hs===void 0){hs=new Re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ur(e,5);hs.setIndex([0,1,2,0,2,3]),hs.setAttribute("position",new ws(n,3,0,!1)),hs.setAttribute("uv",new ws(n,2,3,!1))}this.geometry=hs,this.material=t,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),us.setFromMatrixScale(this.matrixWorld),bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&us.multiplyScalar(-ds.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;la(oa.set(-.5,-.5,0),ds,a,us,i,r),la(Ys.set(.5,-.5,0),ds,a,us,i,r),la(ca.set(.5,.5,0),ds,a,us,i,r),ph.set(0,0),Lc.set(1,0),mh.set(1,1);let o=t.ray.intersectTriangle(oa,Ys,ca,!1,Xs);if(o===null&&(la(Ys.set(-.5,.5,0),ds,a,us,i,r),Lc.set(0,1),o=t.ray.intersectTriangle(oa,ca,Ys,!1,Xs),o===null))return;let c=t.ray.origin.distanceTo(Xs);c<t.near||c>t.far||e.push({distance:c,point:Xs.clone(),uv:ni.getInterpolation(Xs,oa,Ys,ca,ph,Lc,mh,new ut),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function la(s,t,e,n,i,r){fs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qs.x=r*fs.x-i*fs.y,qs.y=i*fs.x+r*fs.y):qs.copy(fs),s.copy(t),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(bu)}var ei=new I,Dc=new I,ha=new I,ua=new I,dr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dc.copy(t).add(e).multiplyScalar(.5),ha.copy(e).sub(t).normalize(),ua.copy(this.origin).sub(Dc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ha),o=ua.dot(this.direction),c=-ua.dot(ha),l=ua.lengthSq(),h=Math.abs(1-a*a),d,f,u,p;if(h>0)if(d=a*c-o,f=a*o-c,p=r*h,d>=0)if(f>=-p)if(f<=p){let _=1/h;d*=_,f*=_,u=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;else f<=-p?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l):f<=p?(d=0,f=Math.min(Math.max(-r,-c),r),u=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),u=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Dc).addScaledVector(ha,f),u}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let n=ei.dot(this.direction),i=ei.dot(ei)-n*n,r=t.radius*t.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,i,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=t.x-a.x,f=t.y-a.y,u=t.z-a.z,p=e.x-a.x,_=e.y-a.y,m=e.z-a.z,g=n.x-a.x,M=n.y-a.y,T=n.z-a.z,S=Math.abs(c),A=Math.abs(l),w=Math.abs(h),x,v,C,R,D,F,V,P,H,Y,G,ot;if(S>=A&&S>=w?(C=c,F=d,H=p,ot=g,c>=0?(x=l,v=h,R=f,D=u,V=_,P=m,Y=M,G=T):(x=h,v=l,R=u,D=f,V=m,P=_,Y=T,G=M)):A>=w?(C=l,F=f,H=_,ot=M,l>=0?(x=h,v=c,R=u,D=d,V=m,P=p,Y=T,G=g):(x=c,v=h,R=d,D=u,V=p,P=m,Y=g,G=T)):(C=h,F=u,H=m,ot=T,h>=0?(x=c,v=l,R=d,D=f,V=p,P=_,Y=g,G=M):(x=l,v=c,R=f,D=d,V=_,P=p,Y=M,G=g)),C===0)return null;let X=x/C,st=v/C,at=1/C,Pt=R-X*F,zt=D-st*F,j=V-X*H,Et=P-st*H,It=Y-X*ot,Gt=G-st*ot,Tt=It*Et-Gt*j,Vt=Pt*Gt-zt*It,_e=j*zt-Et*Pt;if(i){if(Tt<0||Vt<0||_e<0)return null}else if((Tt<0||Vt<0||_e<0)&&(Tt>0||Vt>0||_e>0))return null;let Ht=Tt+Vt+_e;if(Ht===0)return null;let ie=at*(Tt*F+Vt*H+_e*ot);return(Ht>0?ie<0:ie>0)?null:this.at(ie/Ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dn=class extends Gn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},gh=new ne,ki=new dr,da=new ri,xh=new I,fa=new I,pa=new I,ma=new I,Nc=new I,ga=new I,_h=new I,xa=new I,Wt=class extends ke{constructor(t=new Re,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(Nc.fromBufferAttribute(d,t),a?ga.addScaledVector(Nc,h):ga.addScaledVector(Nc.sub(e),h))}e.add(ga)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(da.containsPoint(ki.origin)===!1&&(ki.intersectSphere(da,xh)===null||ki.origin.distanceToSquared(xh)>(t.far-t.near)**2))&&(gh.copy(r).invert(),ki.copy(t.ray).applyMatrix4(gh),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],M=Math.max(m.start,u.start),T=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,A=T;S<A;S+=3){let w=o.getX(S),x=o.getX(S+1),v=o.getX(S+2);i=_a(this,g,t,n,l,h,d,w,x,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let M=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);i=_a(this,a,t,n,l,h,d,M,T,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=a[m.materialIndex],M=Math.max(m.start,u.start),T=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,A=T;S<A;S+=3){let w=S,x=S+1,v=S+2;i=_a(this,g,t,n,l,h,d,w,x,v),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=p,g=_;m<g;m+=3){let M=m,T=m+1,S=m+2;i=_a(this,a,t,n,l,h,d,M,T,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function ef(s,t,e,n,i,r,a,o){let c;if(t.side===$e?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Ci,o),c===null)return null;xa.copy(o),xa.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(xa);return l<e.near||l>e.far?null:{distance:l,point:xa.clone(),object:s}}function _a(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,fa),s.getVertexPosition(c,pa),s.getVertexPosition(l,ma);let h=ef(s,t,e,n,fa,pa,ma,_h);if(h){let d=new I;ni.getBarycoord(_h,fa,pa,ma,d),i&&(h.uv=ni.getInterpolatedAttribute(i,o,c,l,d,new ut)),r&&(h.uv1=ni.getInterpolatedAttribute(r,o,c,l,d,new ut)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:c,c:l,normal:new I,materialIndex:0};ni.getNormal(fa,pa,ma,f.normal),h.face=f,h.barycoord=d}return h}var fr=class extends cn{constructor(t=null,e=1,n=1,i,r,a,o,c,l=qe,h=qe,d,f){super(null,a,o,c,l,h,i,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var As=class extends Ne{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ps=new ne,yh=new ne,ya=[],vh=new bn,nf=new ne,Zs=new Wt,Js=new ri,pr=class extends Wt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,nf)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),vh.copy(t.boundingBox).applyMatrix4(ps),this.boundingBox.union(vh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ps),Js.copy(t.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ps),yh.multiplyMatrices(n,ps),Zs.matrixWorld=yh,Zs.raycast(t,ya);for(let a=0,o=ya.length;a<o;a++){let c=ya[a];c.instanceId=r,c.object=this,e.push(c)}ya.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fr(new Float32Array(i*this.count),i,this.count,_o,Tn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new ri,sf=new ut(.5,.5),va=new I,Ei=class{constructor(t=new Ln,e=new Ln,n=new Ln,i=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Mn,n=!1){let i=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],u=r[7],p=r[8],_=r[9],m=r[10],g=r[11],M=r[12],T=r[13],S=r[14],A=r[15];if(i[0].setComponents(l-a,u-h,g-p,A-M).normalize(),i[1].setComponents(l+a,u+h,g+p,A+M).normalize(),i[2].setComponents(l+o,u+d,g+_,A+T).normalize(),i[3].setComponents(l-o,u-d,g-_,A-T).normalize(),n)i[4].setComponents(c,f,m,S).normalize(),i[5].setComponents(l-c,u-f,g-m,A-S).normalize();else if(i[4].setComponents(l-c,u-f,g-m,A-S).normalize(),e===Mn)i[5].setComponents(l+c,u+f,g+m,A+S).normalize();else if(e===Ms)i[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){Hi.center.set(0,0,0);let e=sf.distanceTo(t.center);return Hi.radius=.7071067811865476+e,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Mh=new ne,Ga=class s{constructor(){this.coordinateSystem=Mn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Mh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ei),n[i].setFromProjectionMatrix(Mh,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ei),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var Rs=class extends Gn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Sh=new ne,Vc=new dr,Ma=new ri,Sa=new I,mr=class extends ke{constructor(t=new Re,e=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ma.copy(n.boundingSphere),Ma.applyMatrix4(i),Ma.radius+=r,t.ray.intersectsSphere(Ma)===!1)return;Sh.copy(i).invert(),Vc.copy(t.ray).applyMatrix4(Sh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let f=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let p=f,_=u;p<_;p++){let m=l.getX(p);Sa.fromBufferAttribute(d,m),bh(Sa,m,c,i,t,e,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let p=f,_=u;p<_;p++)Sa.fromBufferAttribute(d,p),bh(Sa,p,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bh(s,t,e,n,i,r,a){let o=Vc.distanceSqToPoint(s);if(o<e){let c=new I;Vc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var gr=class extends cn{constructor(t=[],e=$i,n,i,r,a,o,c,l,h){super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Wn=class extends cn{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends cn{constructor(t,e,n=Nn,i,r,a,o=qe,c=qe,l,h=si,d=1){if(h!==si&&h!==li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xr=class extends oi{constructor(t,e=Nn,n=$i,i,r,a=qe,o=qe,c,l=si){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_r=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},hn=class s extends Re{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,i,a,2),p("x","z","y",1,-1,t,n,-e,i,a,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function p(_,m,g,M,T,S,A,w,x,v,C){let R=S/x,D=A/v,F=S/2,V=A/2,P=w/2,H=x+1,Y=v+1,G=0,ot=0,X=new I;for(let st=0;st<Y;st++){let at=st*D-V;for(let Pt=0;Pt<H;Pt++){let zt=Pt*R-F;X[_]=zt*M,X[m]=at*T,X[g]=P,l.push(X.x,X.y,X.z),X[_]=0,X[m]=0,X[g]=w>0?1:-1,h.push(X.x,X.y,X.z),d.push(Pt/x),d.push(1-st/v),G+=1}}for(let st=0;st<v;st++)for(let at=0;at<x;at++){let Pt=f+at+H*st,zt=f+at+H*(st+1),j=f+(at+1)+H*(st+1),Et=f+(at+1)+H*st;c.push(Pt,zt,Et),c.push(zt,j,Et),ot+=6}o.addGroup(u,ot,C),u+=ot,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Xn=class s extends Re{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=e/2,d=Math.PI/2*t,f=e,u=2*d+f,p=n*2+r,_=i+1,m=new I,g=new I;for(let M=0;M<=p;M++){let T=0,S=0,A=0,w=0;if(M<=n){let C=M/n,R=C*Math.PI/2;S=-h-t*Math.cos(R),A=t*Math.sin(R),w=-t*Math.cos(R),T=C*d}else if(M<=n+r){let C=(M-n)/r;S=-h+C*e,A=t,w=0,T=d+C*f}else{let C=(M-n-r)/n,R=C*Math.PI/2;S=h+t*Math.sin(R),A=t*Math.cos(R),w=t*Math.sin(R),T=d+f+C*d}let x=Math.max(0,Math.min(1,T/u)),v=0;M===0?v=.5/i:M===p&&(v=-.5/i);for(let C=0;C<=i;C++){let R=C/i,D=R*Math.PI*2,F=Math.sin(D),V=Math.cos(D);g.x=-A*V,g.y=S,g.z=A*F,o.push(g.x,g.y,g.z),m.set(-A*V,w,A*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+v,x)}if(M>0){let C=(M-1)*_;for(let R=0;R<i;R++){let D=C+R,F=C+R+1,V=M*_+R,P=M*_+R+1;a.push(D,F,V),a.push(F,P,V)}}}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},yr=class s extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new I,h=new ut;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let u=n+d/e*i;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},mn=class s extends Re{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,_=[],m=n/2,g=0;M(),a===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(u,2));function M(){let S=new I,A=new I,w=0,x=(e-t)/n;for(let v=0;v<=r;v++){let C=[],R=v/r,D=R*(e-t)+t;for(let F=0;F<=i;F++){let V=F/i,P=V*c+o,H=Math.sin(P),Y=Math.cos(P);A.x=D*H,A.y=-R*n+m,A.z=D*Y,d.push(A.x,A.y,A.z),S.set(H,x,Y).normalize(),f.push(S.x,S.y,S.z),u.push(V,1-R),C.push(p++)}_.push(C)}for(let v=0;v<i;v++)for(let C=0;C<r;C++){let R=_[C][v],D=_[C+1][v],F=_[C+1][v+1],V=_[C][v+1];(t>0||C!==0)&&(h.push(R,D,V),w+=3),(e>0||C!==r-1)&&(h.push(D,F,V),w+=3)}l.addGroup(g,w,0),g+=w}function T(S){let A=p,w=new ut,x=new I,v=0,C=S===!0?t:e,R=S===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,m*R,0),f.push(0,R,0),u.push(.5,.5),p++;let D=p;for(let F=0;F<=i;F++){let P=F/i*c+o,H=Math.cos(P),Y=Math.sin(P);x.x=C*Y,x.y=m*R,x.z=C*H,d.push(x.x,x.y,x.z),f.push(0,R,0),w.x=H*.5+.5,w.y=Y*.5*R+.5,u.push(w.x,w.y),p++}for(let F=0;F<i;F++){let V=A+F,P=D+F;S===!0?h.push(P,P+1,V):h.push(P+1,P,V),v+=3}l.addGroup(g,v,S===!0?1:2),g+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Va=class s extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let T=new I,S=new I,A=new I;for(let w=0;w<e.length;w+=3)u(e[w+0],T),u(e[w+1],S),u(e[w+2],A),c(T,S,A,M)}function c(M,T,S,A){let w=A+1,x=[];for(let v=0;v<=w;v++){x[v]=[];let C=M.clone().lerp(S,v/w),R=T.clone().lerp(S,v/w),D=w-v;for(let F=0;F<=D;F++)F===0&&v===w?x[v][F]=C:x[v][F]=C.clone().lerp(R,F/D)}for(let v=0;v<w;v++)for(let C=0;C<2*(w-v)-1;C++){let R=Math.floor(C/2);C%2===0?(f(x[v][R+1]),f(x[v+1][R]),f(x[v][R])):(f(x[v][R+1]),f(x[v+1][R+1]),f(x[v+1][R]))}}function l(M){let T=new I;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(M),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function h(){let M=new I;for(let T=0;T<r.length;T+=3){M.x=r[T+0],M.y=r[T+1],M.z=r[T+2];let S=m(M)/2/Math.PI+.5,A=g(M)/Math.PI+.5;a.push(S,1-A)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let T=a[M+0],S=a[M+2],A=a[M+4],w=Math.max(T,S,A),x=Math.min(T,S,A);w>.9&&x<.1&&(T<.2&&(a[M+0]+=1),S<.2&&(a[M+2]+=1),A<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,T){let S=M*3;T.x=t[S+0],T.y=t[S+1],T.z=t[S+2]}function p(){let M=new I,T=new I,S=new I,A=new I,w=new ut,x=new ut,v=new ut;for(let C=0,R=0;C<r.length;C+=9,R+=6){M.set(r[C+0],r[C+1],r[C+2]),T.set(r[C+3],r[C+4],r[C+5]),S.set(r[C+6],r[C+7],r[C+8]),w.set(a[R+0],a[R+1]),x.set(a[R+2],a[R+3]),v.set(a[R+4],a[R+5]),A.copy(M).add(T).add(S).divideScalar(3);let D=m(A);_(w,R+0,M,D),_(x,R+2,T,D),_(v,R+4,S,D)}}function _(M,T,S,A){A<0&&M.x===1&&(a[T]=M.x-1),S.x===0&&S.z===0&&(a[T]=A/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let h=n[i],f=n[i+1]-h,u=(a-h)/f;return(i+u)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new ut:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,i=[],r=[],a=[],o=new I,c=new ne;for(let u=0;u<=t;u++){let p=u/t;i[u]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(i[u-1],i[u]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(le(i[u-1].dot(i[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,p))}a[u].crossVectors(i[u],r[u])}if(e===!0){let u=Math.acos(le(r[0].dot(r[t]),-1,1));u/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let p=1;p<=t;p++)r[p].applyMatrix4(c.makeRotationAxis(i[p],u*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Cs=class extends gn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ut){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,u=l-this.aY;c=f*h-u*d+this.aX,l=f*d+u*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Wa=class extends Cs{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bl(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,u*=h,i(a,o,f,u)},calc:function(r){let a=r*r,o=a*r;return s+t*r+e*a+n*o}}}var Eh=new I,Th=new I,Uc=new bl,Fc=new bl,Oc=new bl,Xa=class extends gn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(Th.subVectors(i[0],i[1]).add(i[0]),l=Th);let d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(Eh.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Eh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),Uc.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,p,_,m),Fc.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,p,_,m),Oc.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),Fc.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),Oc.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(Uc.calc(c),Fc.calc(c),Oc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function wh(s,t,e,n,i){let r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function rf(s,t){let e=1-s;return e*e*t}function af(s,t){return 2*(1-s)*s*t}function of(s,t){return s*s*t}function Qs(s,t,e,n){return rf(s,t)+af(s,e)+of(s,n)}function cf(s,t){let e=1-s;return e*e*e*t}function lf(s,t){let e=1-s;return 3*e*e*s*t}function hf(s,t){return 3*(1-s)*s*s*t}function uf(s,t){return s*s*s*t}function js(s,t,e,n,i){return cf(s,t)+lf(s,e)+hf(s,n)+uf(s,i)}var vr=class extends gn{constructor(t=new ut,e=new ut,n=new ut,i=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new ut){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(t,i.x,r.x,a.x,o.x),js(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qa=class extends gn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(js(t,i.x,r.x,a.x,o.x),js(t,i.y,r.y,a.y,o.y),js(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Mr=class extends gn{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ya=class extends gn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sr=class extends gn{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Qs(t,i.x,r.x,a.x),Qs(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Za=class extends gn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Qs(t,i.x,r.x,a.x),Qs(t,i.y,r.y,a.y),Qs(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},br=class extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){let n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(wh(o,c.x,l.x,h.x,d.x),wh(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new ut().fromArray(i))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Wa,CatmullRomCurve3:Xa,CubicBezierCurve:vr,CubicBezierCurve3:qa,EllipseCurve:Cs,LineCurve:Mr,LineCurve3:Ya,QuadraticBezierCurve:Sr,QuadraticBezierCurve3:Za,SplineCurve:br}),Ja=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Wc[i.type]().fromJSON(i))}return this.cacheLengths=null,this}},Er=class extends Ja{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Mr(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Sr(this.currentPoint.clone(),new ut(t,e),new ut(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){let o=new vr(this.currentPoint.clone(),new ut(t,e),new ut(n,i),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new br(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){let l=new Cs(t,e,n,i,r,a,o,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ti=class extends Er{constructor(t){super(t),this.uuid=Li(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Er().fromJSON(i))}return this}};function df(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=Eu(s,0,i,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=xf(s,t,r,e)),s.length>80*e){o=s[0],c=s[1];let h=o,d=c;for(let f=e;f<i;f+=e){let u=s[f],p=s[f+1];u<o&&(o=u),p<c&&(c=p),u>h&&(h=u),p>d&&(d=p)}l=Math.max(h-o,d-c),l=l!==0?32767/l:0}return Tr(r,a,e,o,c,l,0),a}function Eu(s,t,e,n,i){let r;if(i===Rf(s,t,e,n)>0)for(let a=t;a<e;a+=n)r=Ah(a/n|0,s[a],s[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Ah(a/n|0,s[a],s[a+1],r);return r&&Is(r,r.next)&&(Ar(r),r=r.next),r}function Vi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Is(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Tr(s,t,e,n,i,r,a){if(!s)return;!a&&r&&Sf(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?pf(s,n,i,r):ff(s)){t.push(c.i,s.i,l.i),Ar(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=mf(Vi(s),t),Tr(s,t,e,n,i,r,2)):a===2&&gf(s,t,e,n,i,r):Tr(Vi(s),t,e,n,i,r,1);break}}}function ff(s){let t=s.prev,e=s,n=s.next;if(Pe(t,e,n)>=0)return!1;let i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,h=Math.min(i,r,a),d=Math.min(o,c,l),f=Math.max(i,r,a),u=Math.max(o,c,l),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&$s(i,o,r,c,a,l,p.x,p.y)&&Pe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function pf(s,t,e,n){let i=s.prev,r=s,a=s.next;if(Pe(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,h=i.y,d=r.y,f=a.y,u=Math.min(o,c,l),p=Math.min(h,d,f),_=Math.max(o,c,l),m=Math.max(h,d,f),g=Xc(u,p,t,e,n),M=Xc(_,m,t,e,n),T=s.prevZ,S=s.nextZ;for(;T&&T.z>=g&&S&&S.z<=M;){if(T.x>=u&&T.x<=_&&T.y>=p&&T.y<=m&&T!==i&&T!==a&&$s(o,h,c,d,l,f,T.x,T.y)&&Pe(T.prev,T,T.next)>=0||(T=T.prevZ,S.x>=u&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==a&&$s(o,h,c,d,l,f,S.x,S.y)&&Pe(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;T&&T.z>=g;){if(T.x>=u&&T.x<=_&&T.y>=p&&T.y<=m&&T!==i&&T!==a&&$s(o,h,c,d,l,f,T.x,T.y)&&Pe(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;S&&S.z<=M;){if(S.x>=u&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==a&&$s(o,h,c,d,l,f,S.x,S.y)&&Pe(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function mf(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Is(n,i)&&wu(n,e,e.next,i)&&wr(n,i)&&wr(i,n)&&(t.push(n.i,e.i,i.i),Ar(e),Ar(e.next),e=s=i),e=e.next}while(e!==s);return Vi(e)}function gf(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tf(a,o)){let c=Au(a,o);a=Vi(a,a.next),c=Vi(c,c.next),Tr(a,t,e,n,i,r,0),Tr(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function xf(s,t,e,n){let i=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,l=Eu(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(Ef(l))}i.sort(_f);for(let r=0;r<i.length;r++)e=yf(i[r],e);return e}function _f(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function yf(s,t){let e=vf(s,t);if(!e)return t;let n=Au(e,s);return Vi(n,n.next),Vi(e,e.next)}function vf(s,t){let e=t,n=s.x,i=s.y,r=-1/0,a;if(Is(s,e))return e;do{if(Is(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Tu(i<l?n:r,i,c,l,i<l?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);wr(e,s)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Mf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Mf(s,t){return Pe(s.prev,s,t.prev)<0&&Pe(t.next,s,s.next)<0}function Sf(s,t,e,n){let i=s;do i.z===0&&(i.z=Xc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,bf(i)}function bf(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,e*=2}while(t>1);return s}function Xc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ef(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Tu(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function $s(s,t,e,n,i,r,a,o){return!(s===a&&t===o)&&Tu(s,t,e,n,i,r,a,o)}function Tf(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!wf(s,t)&&(wr(s,t)&&wr(t,s)&&Af(s,t)&&(Pe(s.prev,s,t.prev)||Pe(s,t.prev,t))||Is(s,t)&&Pe(s.prev,s,s.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Is(s,t){return s.x===t.x&&s.y===t.y}function wu(s,t,e,n){let i=Ea(Pe(s,t,e)),r=Ea(Pe(s,t,n)),a=Ea(Pe(e,n,s)),o=Ea(Pe(e,n,t));return!!(i!==r&&a!==o||i===0&&ba(s,e,t)||r===0&&ba(s,n,t)||a===0&&ba(e,s,n)||o===0&&ba(e,t,n))}function ba(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ea(s){return s>0?1:s<0?-1:0}function wf(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wu(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function wr(s,t){return Pe(s.prev,s,s.next)<0?Pe(s,t,s.next)>=0&&Pe(s,s.prev,t)>=0:Pe(s,t,s.prev)<0||Pe(s,s.next,t)<0}function Af(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Au(s,t){let e=qc(s.i,s.x,s.y),n=qc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Ah(s,t,e,n){let i=qc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ar(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qc(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rf(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Yc=class{static triangulate(t,e,n=2){return df(t,e,n)}},Gi=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];Rh(t),Ch(n,t);let a=t.length;e.forEach(Rh);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Ch(n,e[c]);let o=Yc.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Rh(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ch(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Wi=class s extends Re{constructor(t=new Ti([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new ce(i,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Cf,T,S=!1,A,w,x,v;if(g){T=g.getSpacedPoints(h),S=!0,f=!1;let K=g.isCatmullRomCurve3?g.closed:!1;A=g.computeFrenetFrames(h,K),w=new I,x=new I,v=new I}f||(m=0,u=0,p=0,_=0);let C=o.extractPoints(l),R=C.shape,D=C.holes;if(!Gi.isClockWise(R)){R=R.reverse();for(let K=0,_t=D.length;K<_t;K++){let ft=D[K];Gi.isClockWise(ft)&&(D[K]=ft.reverse())}}function V(K){let ft=10000000000000001e-36,Ct=K[0];for(let Mt=1;Mt<=K.length;Mt++){let Xt=Mt%K.length,Ot=K[Xt],ae=Ot.x-Ct.x,se=Ot.y-Ct.y,fe=ae*ae+se*se,U=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(Ct.x),Math.abs(Ct.y)),it=ft*U*U;if(fe<=it){K.splice(Xt,1),Mt--;continue}Ct=Ot}}V(R),D.forEach(V);let P=D.length,H=R;for(let K=0;K<P;K++){let _t=D[K];R=R.concat(_t)}function Y(K,_t,ft){return _t||Yt("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(_t,ft)}let G=R.length;function ot(K,_t,ft){let Ct,Mt,Xt,Ot=K.x-_t.x,ae=K.y-_t.y,se=ft.x-K.x,fe=ft.y-K.y,U=Ot*Ot+ae*ae,it=Ot*fe-ae*se;if(Math.abs(it)>Number.EPSILON){let Z=Math.sqrt(U),rt=Math.sqrt(se*se+fe*fe),z=_t.x-ae/Z,lt=_t.y+Ot/Z,ct=ft.x-fe/rt,nt=ft.y+se/rt,b=((ct-z)*fe-(nt-lt)*se)/(Ot*fe-ae*se);Ct=z+Ot*b-K.x,Mt=lt+ae*b-K.y;let y=Ct*Ct+Mt*Mt;if(y<=2)return new ut(Ct,Mt);Xt=Math.sqrt(y/2)}else{let Z=!1;Ot>Number.EPSILON?se>Number.EPSILON&&(Z=!0):Ot<-Number.EPSILON?se<-Number.EPSILON&&(Z=!0):Math.sign(ae)===Math.sign(fe)&&(Z=!0),Z?(Ct=-ae,Mt=Ot,Xt=Math.sqrt(U)):(Ct=Ot,Mt=ae,Xt=Math.sqrt(U/2))}return new ut(Ct/Xt,Mt/Xt)}let X=[];for(let K=0,_t=H.length,ft=_t-1,Ct=K+1;K<_t;K++,ft++,Ct++)ft===_t&&(ft=0),Ct===_t&&(Ct=0),X[K]=ot(H[K],H[ft],H[Ct]);let st=[],at,Pt=X.concat();for(let K=0,_t=P;K<_t;K++){let ft=D[K];at=[];for(let Ct=0,Mt=ft.length,Xt=Mt-1,Ot=Ct+1;Ct<Mt;Ct++,Xt++,Ot++)Xt===Mt&&(Xt=0),Ot===Mt&&(Ot=0),at[Ct]=ot(ft[Ct],ft[Xt],ft[Ot]);st.push(at),Pt=Pt.concat(at)}let zt;if(m===0)zt=Gi.triangulateShape(H,D);else{let K=[],_t=[];for(let ft=0;ft<m;ft++){let Ct=ft/m,Mt=u*Math.cos(Ct*Math.PI/2),Xt=p*Math.sin(Ct*Math.PI/2)+_;for(let Ot=0,ae=H.length;Ot<ae;Ot++){let se=Y(H[Ot],X[Ot],Xt);Vt(se.x,se.y,-Mt),Ct===0&&K.push(se)}for(let Ot=0,ae=P;Ot<ae;Ot++){let se=D[Ot];at=st[Ot];let fe=[];for(let U=0,it=se.length;U<it;U++){let Z=Y(se[U],at[U],Xt);Vt(Z.x,Z.y,-Mt),Ct===0&&fe.push(Z)}Ct===0&&_t.push(fe)}}zt=Gi.triangulateShape(K,_t)}let j=zt.length,Et=p+_;for(let K=0;K<G;K++){let _t=f?Y(R[K],Pt[K],Et):R[K];S?(x.copy(A.normals[0]).multiplyScalar(_t.x),w.copy(A.binormals[0]).multiplyScalar(_t.y),v.copy(T[0]).add(x).add(w),Vt(v.x,v.y,v.z)):Vt(_t.x,_t.y,0)}for(let K=1;K<=h;K++)for(let _t=0;_t<G;_t++){let ft=f?Y(R[_t],Pt[_t],Et):R[_t];S?(x.copy(A.normals[K]).multiplyScalar(ft.x),w.copy(A.binormals[K]).multiplyScalar(ft.y),v.copy(T[K]).add(x).add(w),Vt(v.x,v.y,v.z)):Vt(ft.x,ft.y,d/h*K)}for(let K=m-1;K>=0;K--){let _t=K/m,ft=u*Math.cos(_t*Math.PI/2),Ct=p*Math.sin(_t*Math.PI/2)+_;for(let Mt=0,Xt=H.length;Mt<Xt;Mt++){let Ot=Y(H[Mt],X[Mt],Ct);Vt(Ot.x,Ot.y,d+ft)}for(let Mt=0,Xt=D.length;Mt<Xt;Mt++){let Ot=D[Mt];at=st[Mt];for(let ae=0,se=Ot.length;ae<se;ae++){let fe=Y(Ot[ae],at[ae],Ct);S?Vt(fe.x,fe.y+T[h-1].y,T[h-1].x+ft):Vt(fe.x,fe.y,d+ft)}}}It(),Gt();function It(){let K=i.length/3;if(f){let _t=0,ft=G*_t;for(let Ct=0;Ct<j;Ct++){let Mt=zt[Ct];_e(Mt[2]+ft,Mt[1]+ft,Mt[0]+ft)}_t=h+m*2,ft=G*_t;for(let Ct=0;Ct<j;Ct++){let Mt=zt[Ct];_e(Mt[0]+ft,Mt[1]+ft,Mt[2]+ft)}}else{for(let _t=0;_t<j;_t++){let ft=zt[_t];_e(ft[2],ft[1],ft[0])}for(let _t=0;_t<j;_t++){let ft=zt[_t];_e(ft[0]+G*h,ft[1]+G*h,ft[2]+G*h)}}n.addGroup(K,i.length/3-K,0)}function Gt(){let K=i.length/3,_t=0;Tt(H,_t),_t+=H.length;for(let ft=0,Ct=D.length;ft<Ct;ft++){let Mt=D[ft];Tt(Mt,_t),_t+=Mt.length}n.addGroup(K,i.length/3-K,1)}function Tt(K,_t){let ft=K.length;for(;--ft>=0;){let Ct=ft,Mt=ft-1;Mt<0&&(Mt=K.length-1);for(let Xt=0,Ot=h+m*2;Xt<Ot;Xt++){let ae=G*Xt,se=G*(Xt+1),fe=_t+Ct+ae,U=_t+Mt+ae,it=_t+Mt+se,Z=_t+Ct+se;Ht(fe,U,it,Z)}}}function Vt(K,_t,ft){c.push(K),c.push(_t),c.push(ft)}function _e(K,_t,ft){ie(K),ie(_t),ie(ft);let Ct=i.length/3,Mt=M.generateTopUV(n,i,Ct-3,Ct-2,Ct-1);re(Mt[0]),re(Mt[1]),re(Mt[2])}function Ht(K,_t,ft,Ct){ie(K),ie(_t),ie(Ct),ie(_t),ie(ft),ie(Ct);let Mt=i.length/3,Xt=M.generateSideWallUV(n,i,Mt-6,Mt-3,Mt-2,Mt-1);re(Xt[0]),re(Xt[1]),re(Xt[3]),re(Xt[1]),re(Xt[2]),re(Xt[3])}function ie(K){i.push(c[K*3+0]),i.push(c[K*3+1]),i.push(c[K*3+2])}function re(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return If(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Wc[i.type]().fromJSON(i)),new s(n,t.options)}},Cf={generateTopUV:function(s,t,e,n,i){let r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new ut(r,a),new ut(o,c),new ut(l,h)]},generateSideWallUV:function(s,t,e,n,i,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[i*3],u=t[i*3+1],p=t[i*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ut(a,1-c),new ut(l,1-d),new ut(f,1-p),new ut(_,1-g)]:[new ut(o,1-c),new ut(h,1-d),new ut(u,1-p),new ut(m,1-g)]}};function If(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Rr=class s extends Va{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}};var xn=class s extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,f=e/c,u=[],p=[],_=[],m=[];for(let g=0;g<h;g++){let M=g*f-a;for(let T=0;T<l;T++){let S=T*d-r;p.push(S,-M,0),_.push(0,0,1),m.push(T/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let M=0;M<o;M++){let T=M+l*g,S=M+l*(g+1),A=M+1+l*(g+1),w=M+1+l*g;u.push(T,S,w),u.push(S,A,w)}this.setIndex(u),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},Cr=class s extends Re{constructor(t=.5,e=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],h=[],d=t,f=(e-t)/i,u=new I,p=new ut;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){let g=r+m/n*a;u.x=d*Math.cos(g),u.y=d*Math.sin(g),c.push(u.x,u.y,u.z),l.push(0,0,1),p.x=(u.x/e+1)/2,p.y=(u.y/e+1)/2,h.push(p.x,p.y)}d+=f}for(let _=0;_<i;_++){let m=_*(n+1);for(let g=0;g<n;g++){let M=g+m,T=M,S=M+n+1,A=M+n+2,w=M+1;o.push(T,S,w),o.push(S,A,w)}}this.setIndex(o),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ye=class s extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],d=new I,f=new I,u=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let M=[],T=g/n,S=a+T*o,A=t*Math.cos(S),w=Math.sqrt(t*t-A*A),x=0;g===0&&a===0?x=.5/e:g===n&&c===Math.PI&&(x=-.5/e);for(let v=0;v<=e;v++){let C=v/e,R=i+C*r;d.x=-w*Math.cos(R),d.y=A,d.z=w*Math.sin(R),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),m.push(C+x,1-T),M.push(l++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let T=h[g][M+1],S=h[g][M],A=h[g+1][M],w=h[g+1][M+1];(g!==0||a>0)&&u.push(T,S,w),(g!==n-1||c<Math.PI)&&u.push(S,A,w)}this.setIndex(u),this.setAttribute("position",new ce(p,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Xi=class s extends Re{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);let c=[],l=[],h=[],d=[],f=new I,u=new I,p=new I;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let g=0;g<=i;g++){let M=g/i*r;u.x=(t+e*Math.cos(m))*Math.cos(M),u.y=(t+e*Math.cos(m))*Math.sin(M),u.z=e*Math.sin(m),l.push(u.x,u.y,u.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),p.subVectors(u,f).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){let g=(i+1)*_+m-1,M=(i+1)*(_-1)+m-1,T=(i+1)*(_-1)+m,S=(i+1)*_+m;c.push(g,M,S),c.push(M,T,S)}this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Qi(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Ih(i))i.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ih(i[0])){let r=[];for(let a=0,o=i.length;a<o;a++)r[a]=i[a].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function sn(s){let t={};for(let e=0;e<s.length;e++){let n=Qi(s[e]);for(let i in n)t[i]=n[i]}return t}function Ih(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Pf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function El(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:de.workingColorSpace}var Ru={clone:Qi,merge:sn},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends Gn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Qi(t.uniforms),this.uniformsGroups=Pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Zt().setHex(i.value);break;case"v2":this.uniforms[n].value=new ut().fromArray(i.value);break;case"v3":this.uniforms[n].value=new I().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ne().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$a=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qt=class extends Gn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ka=class extends Gn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qa=class extends Gn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ms(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Ta(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var wi=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let a=0;a!==i;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ja=class extends wi{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,a=t+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hc:r=t,o=2*e-n;break;case Gc:r=i.length-2,o=e+i[r]-i[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hc:a=t,c=2*n-e;break;case Gc:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,M=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,T=(-1-u)*m+(1.5+u)*_+.5*p,S=u*m-u*_;for(let A=0;A!==o;++A)r[A]=g*a[h+A]+M*a[l+A]+T*a[c+A]+S*a[d+A];return r}},to=class extends wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(n-e)/(i-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*d+a[c+f]*h;return r}},eo=class extends wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},no=class extends wi{interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let m=0;m!==o;++m)r[m]=a[l+m]*_+a[c+m]*p;return r}let f=o*2,u=t-1;for(let p=0;p!==o;++p){let _=a[l+p],m=a[c+p],g=u*f+p*2,M=d[g],T=d[g+1],S=t*f+p*2,A=h[S],w=h[S+1],x=Uf(n,e,M,A,i);r[p]=Cu(x,_,T,w,m)}return r}};function Cu(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function Nf(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Uf(s,t,e,n,i){let r=(s-t)/(i-t);for(let a=0;a<8;a++){let o=Cu(r,t,e,n,i)-s;if(Math.abs(o)<1e-10)break;let c=Nf(r,t,e,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var _n=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ms(e,this.TimeBufferType),this.values=ms(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ms(t.times,Array),values:ms(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Ta(t.settings)&&(n.settings={inTangents:ms(t.settings.inTangents,Array),outTangents:ms(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new to(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new no(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case tr:e=this.InterpolantFactoryMethodDiscrete;break;case Ba:e=this.InterpolantFactoryMethodLinear;break;case Ra:e=this.InterpolantFactoryMethodSmooth;break;case zc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return tr;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return Ra;case this.InterpolantFactoryMethodBezier:return zc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;Ta(this.settings)&&(Ph(this.settings.inTangents,t),Ph(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Ta(this.settings)&&(Lh(this.settings.inTangents,t),Lh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Yt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Yt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(i!==void 0&&Od(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){Yt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ra,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(i)c=!0;else{let d=o*n,f=d-n,u=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[f+p]||_!==e[u+p]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)e[f+u]=e[d+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Ta(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Ph(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Lh(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Ba;var Ai=class extends _n{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=tr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var io=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};io.prototype.ValueTypeName="color";var so=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};so.prototype.ValueTypeName="number";var ro=class extends wi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let h=l+o;l!==h;l+=4)He.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ir=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ro(this.times,this.values,this.getValueSize(),t)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends _n{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=tr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ao=class extends _n{constructor(t,e,n,i){super(t,e,n,i)}};ao.prototype.ValueTypeName="vector";var oo=class{constructor(t,e,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let u=l[d],p=l[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Iu=new oo,co=class{constructor(t){this.manager=t!==void 0?t:Iu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var qi=class extends ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Pr=class extends qi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Bc=new ne,Dh=new I,Nh=new I,Ps=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ei,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Dh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dh),Nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Bc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=i?i.z/r.x:1,o=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;t.coordinateSystem===Ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Bc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wa=new I,Aa=new He,zn=new I,Lr=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(wa,Aa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(wa,Aa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wa,Aa,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},bi=new I,Uh=new ut,Fh=new ut,Je=class extends Lr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(bi.x,bi.y).multiplyScalar(-t/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-t/bi.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Fh),e.subVectors(Fh,Uh)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(fc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zc=class extends Ps{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=rr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Dr=class extends qi{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Jc=class extends Ps{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0}},Ls=class extends qi{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Jc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Nr=class extends Lr{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},$c=class extends Ps{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends qi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new $c}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var gs=-90,xs=1,Ds=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Je(gs,xs,t,e);i.layers=this.layers,this.add(i);let r=new Je(gs,xs,t,e);r.layers=this.layers,this.add(r);let a=new Je(gs,xs,t,e);a.layers=this.layers,this.add(a);let o=new Je(gs,xs,t,e);o.layers=this.layers,this.add(o);let c=new Je(gs,xs,t,e);c.layers=this.layers,this.add(c);let l=new Je(gs,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.mipmapsAutoUpdate=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,f,u),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},lo=class extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Tl="\\[\\]\\.:\\/",Ff=new RegExp("["+Tl+"]","g"),wl="[^"+Tl+"]",Of="[^"+Tl.replace("\\.","")+"]",Bf=/((?:WC+[\/:])*)/.source.replace("WC",wl),zf=/(WCOD+)?/.source.replace("WCOD",Of),kf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),Hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),Gf=new RegExp("^"+Bf+zf+kf+Hf+"$"),Vf=["material","materials","bones","map"],Kc=class{constructor(t,e,n){let i=n||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Te=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ff,"")}static parseTrackName(t){let e=Gf.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Vf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[i];if(a===void 0){let l=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Kc;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xx=new Float32Array(1);var Ll=class Ll{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Ll.prototype.isMatrix2=!0;var Qc=Ll;function Al(s,t,e,n){let i=Wf(n);switch(e){case gl:return s*t;case _o:return s*t/i.components*i.byteLength;case yo:return s*t/i.components*i.byteLength;case Pi:return s*t*2/i.components*i.byteLength;case vo:return s*t*2/i.components*i.byteLength;case xl:return s*t*3/i.components*i.byteLength;case Fn:return s*t*4/i.components*i.byteLength;case Mo:return s*t*4/i.components*i.byteLength;case Br:case zr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kr:case Hr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case bo:case To:return Math.max(s,16)*Math.max(t,8)/4;case So:case Eo:return Math.max(s,8)*Math.max(t,8)/2;case wo:case Ao:case Co:case Io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ro:case Gr:case Po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case No:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case zo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Go:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Xo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qo:case Yo:case Zo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jo:case $o:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Vr:case Ko:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wf(s){switch(s){case un:case dl:return{byteLength:1,components:1};case Os:case fl:case Un:return{byteLength:2,components:1};case go:case xo:return{byteLength:2,components:4};case Nn:case mo:case Tn:return{byteLength:4,components:1};case pl:case ml:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Qu(){let s=null,t=!1,e=null,n=null;function i(r,a){n=s.requestAnimationFrame(i),e(r,a)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function $f(s){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,d=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=s.HALF_FLOAT:u=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=s.SHORT;else if(l instanceof Uint32Array)u=s.UNSIGNED_INT;else if(l instanceof Int32Array)u=s.INT;else if(l instanceof Int8Array)u=s.BYTE;else if(l instanceof Uint8Array)u=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let h=c.array,d=c.updateRanges;if(s.bindBuffer(l,o),d.length===0)s.bufferSubData(l,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],_=d[u];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let _=d[u];s.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(s.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ap=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,am=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ym=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Am=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Im=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Um=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Fm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,km=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Vm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,i0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,s0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,r0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,a0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,o0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,u0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,m0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,R0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,C0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:Kf,alphahash_pars_fragment:Qf,alphamap_fragment:jf,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:sp,batching_pars_vertex:rp,batching_vertex:ap,begin_vertex:op,beginnormal_vertex:cp,bsdfs:lp,iridescence_fragment:hp,bumpmap_pars_fragment:up,clipping_planes_fragment:dp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:pp,clipping_planes_vertex:mp,color_fragment:gp,color_pars_fragment:xp,color_pars_vertex:_p,color_vertex:yp,common:vp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:Sp,displacementmap_vertex:bp,emissivemap_fragment:Ep,emissivemap_pars_fragment:Tp,colorspace_fragment:wp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Ip,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Gp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Np,fog_fragment:Up,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:kp,lights_pars_begin:Hp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:qp,lights_physical_fragment:Yp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Jp,lights_fragment_maps:$p,lights_fragment_end:Kp,lightprobes_pars_fragment:Qp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:tm,logdepthbuf_pars_vertex:em,logdepthbuf_vertex:nm,map_fragment:im,map_pars_fragment:sm,map_particle_fragment:rm,map_particle_pars_fragment:am,metalnessmap_fragment:om,metalnessmap_pars_fragment:cm,morphinstance_vertex:lm,morphcolor_vertex:hm,morphnormal_vertex:um,morphtarget_pars_vertex:dm,morphtarget_vertex:fm,normal_fragment_begin:pm,normal_fragment_maps:mm,normal_pars_fragment:gm,normal_pars_vertex:xm,normal_vertex:_m,normalmap_pars_fragment:ym,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:Mm,clearcoat_pars_fragment:Sm,iridescence_pars_fragment:bm,opaque_fragment:Em,packing:Tm,premultiplied_alpha_fragment:wm,project_vertex:Am,dithering_fragment:Rm,dithering_pars_fragment:Cm,roughnessmap_fragment:Im,roughnessmap_pars_fragment:Pm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Dm,shadowmap_vertex:Nm,shadowmask_pars_fragment:Um,skinbase_vertex:Fm,skinning_pars_vertex:Om,skinning_vertex:Bm,skinnormal_vertex:zm,specularmap_fragment:km,specularmap_pars_fragment:Hm,tonemapping_fragment:Gm,tonemapping_pars_fragment:Vm,transmission_fragment:Wm,transmission_pars_fragment:Xm,uv_pars_fragment:qm,uv_pars_vertex:Ym,uv_vertex:Zm,worldpos_vertex:Jm,background_vert:$m,background_frag:Km,backgroundCube_vert:Qm,backgroundCube_frag:jm,cube_vert:t0,cube_frag:e0,depth_vert:n0,depth_frag:i0,distance_vert:s0,distance_frag:r0,equirect_vert:a0,equirect_frag:o0,linedashed_vert:c0,linedashed_frag:l0,meshbasic_vert:h0,meshbasic_frag:u0,meshlambert_vert:d0,meshlambert_frag:f0,meshmatcap_vert:p0,meshmatcap_frag:m0,meshnormal_vert:g0,meshnormal_frag:x0,meshphong_vert:_0,meshphong_frag:y0,meshphysical_vert:v0,meshphysical_frag:M0,meshtoon_vert:S0,meshtoon_frag:b0,points_vert:E0,points_frag:T0,shadow_vert:w0,shadow_frag:A0,sprite_vert:R0,sprite_frag:C0},At={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Zn={basic:{uniforms:sn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:sn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:sn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:sn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:sn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new Zt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:sn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:sn([At.points,At.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:sn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:sn([At.common,At.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:sn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:sn([At.sprite,At.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:sn([At.common,At.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:sn([At.lights,At.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};Zn.physical={uniforms:sn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var tc={r:0,b:0,g:0},I0=new ne,ju=new $t;ju.set(-1,0,0,0,1,0,0,0,1);function P0(s,t,e,n,i,r){let a=new Zt(0),o=i===!0?0:1,c,l,h=null,d=0,f=null;function u(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){let S=M.backgroundBlurriness>0;T=t.get(T,S)}return T}function p(M){let T=!1,S=u(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),T=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,T){let S=u(T);S&&S.isCubeTexture?(l===void 0&&(l=new Wt(new hn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Qi(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(I0.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ju),l.material.toneMapped=de.getTransfer(S.colorSpace)!==xe,(h!==S||d!==S.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Wt(new xn(2,2),new En({name:"BackgroundMaterial",uniforms:Qi(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=de.getTransfer(S.colorSpace)!==xe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,T){M.getRGB(tc,El(s)),e.buffers.color.setClear(tc.r,tc.g,tc.b,T,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:p,addToRenderList:_,dispose:g}}function L0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null),r=i,a=!1;function o(D,F,V,P,H){let Y=!1,G=d(D,P,V,F);r!==G&&(r=G,l(r.object)),Y=u(D,P,V,H),Y&&p(D,P,V,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(D,F,V,P),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return s.createVertexArray()}function l(D){return s.bindVertexArray(D)}function h(D){return s.deleteVertexArray(D)}function d(D,F,V,P){let H=P.wireframe===!0,Y=n[F.id];Y===void 0&&(Y={},n[F.id]=Y);let G=D.isInstancedMesh===!0?D.id:0,ot=Y[G];ot===void 0&&(ot={},Y[G]=ot);let X=ot[V.id];X===void 0&&(X={},ot[V.id]=X);let st=X[H];return st===void 0&&(st=f(c()),X[H]=st),st}function f(D){let F=[],V=[],P=[];for(let H=0;H<e;H++)F[H]=0,V[H]=0,P[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:P,object:D,attributes:{},index:null}}function u(D,F,V,P){let H=r.attributes,Y=F.attributes,G=0,ot=V.getAttributes();for(let X in ot)if(ot[X].location>=0){let at=H[X],Pt=Y[X];if(Pt===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(Pt=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(Pt=D.instanceColor)),at===void 0||at.attribute!==Pt||Pt&&at.data!==Pt.data)return!0;G++}return r.attributesNum!==G||r.index!==P}function p(D,F,V,P){let H={},Y=F.attributes,G=0,ot=V.getAttributes();for(let X in ot)if(ot[X].location>=0){let at=Y[X];at===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(at=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(at=D.instanceColor));let Pt={};Pt.attribute=at,at&&at.data&&(Pt.data=at.data),H[X]=Pt,G++}r.attributes=H,r.attributesNum=G,r.index=P}function _(){let D=r.newAttributes;for(let F=0,V=D.length;F<V;F++)D[F]=0}function m(D){g(D,0)}function g(D,F){let V=r.newAttributes,P=r.enabledAttributes,H=r.attributeDivisors;V[D]=1,P[D]===0&&(s.enableVertexAttribArray(D),P[D]=1),H[D]!==F&&(s.vertexAttribDivisor(D,F),H[D]=F)}function M(){let D=r.newAttributes,F=r.enabledAttributes;for(let V=0,P=F.length;V<P;V++)F[V]!==D[V]&&(s.disableVertexAttribArray(V),F[V]=0)}function T(D,F,V,P,H,Y,G){G===!0?s.vertexAttribIPointer(D,F,V,H,Y):s.vertexAttribPointer(D,F,V,P,H,Y)}function S(D,F,V,P){_();let H=P.attributes,Y=V.getAttributes(),G=F.defaultAttributeValues;for(let ot in Y){let X=Y[ot];if(X.location>=0){let st=H[ot];if(st===void 0&&(ot==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),ot==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),st!==void 0){let at=st.normalized,Pt=st.itemSize,zt=t.get(st);if(zt===void 0)continue;let j=zt.buffer,Et=zt.type,It=zt.bytesPerElement,Gt=Et===s.INT||Et===s.UNSIGNED_INT||st.gpuType===mo;if(st.isInterleavedBufferAttribute){let Tt=st.data,Vt=Tt.isInterleavedBuffer===!0?Tt.stride:Tt.itemSize,_e=st.offset;if(Tt.isInstancedInterleavedBuffer||Tt.isInstancedBufferAttribute){for(let Ht=0;Ht<X.locationSize;Ht++)g(X.location+Ht,Tt.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)m(X.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,j);for(let Ht=0;Ht<X.locationSize;Ht++)T(X.location+Ht,Pt/X.locationSize,Et,at,Vt*It,(_e+Pt/X.locationSize*Ht)*It,Gt)}else{if(st.isInstancedBufferAttribute){for(let Tt=0;Tt<X.locationSize;Tt++)g(X.location+Tt,st.meshPerAttribute);D.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Tt=0;Tt<X.locationSize;Tt++)m(X.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,j);for(let Tt=0;Tt<X.locationSize;Tt++)T(X.location+Tt,Pt/X.locationSize,Et,at,Pt*It,Pt/X.locationSize*Tt*It,Gt)}}else if(G!==void 0){let at=G[ot];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(X.location,at);break;case 3:s.vertexAttrib3fv(X.location,at);break;case 4:s.vertexAttrib4fv(X.location,at);break;default:s.vertexAttrib1fv(X.location,at)}}}}M()}function A(){C();for(let D in n){let F=n[D];for(let V in F){let P=F[V];for(let H in P){let Y=P[H];for(let G in Y)h(Y[G].object),delete Y[G];delete P[H]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let F=n[D.id];for(let V in F){let P=F[V];for(let H in P){let Y=P[H];for(let G in Y)h(Y[G].object),delete Y[G];delete P[H]}}delete n[D.id]}function x(D){for(let F in n){let V=n[F];for(let P in V){let H=V[P];if(H[D.id]===void 0)continue;let Y=H[D.id];for(let G in Y)h(Y[G].object),delete Y[G];delete H[D.id]}}}function v(D){for(let F in n){let V=n[F],P=D.isInstancedMesh===!0?D.id:0,H=V[P];if(H!==void 0){for(let Y in H){let G=H[Y];for(let ot in G)h(G[ot].object),delete G[ot];delete H[Y]}delete V[P],Object.keys(V).length===0&&delete n[F]}}}function C(){R(),a=!0,r!==i&&(r=i,l(r.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:R,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function D0(s,t,e){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let f=0;for(let u=0;u<h;u++)f+=l[u];e.update(f,n,1)}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function N0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(x){return!(x!==Fn&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let v=x===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==un&&x!==Tn&&!v&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(qt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&qt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:w}}function U0(s){let t=this,e=null,n=0,i=!1,r=!1,a=new Ln,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||i;return i=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,T=M*4,S=g.clippingState||null;c.value=S,S=h(p,f,T,u);for(let A=0;A!==T;++A)S[A]=e[A];g.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,u,p){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,p!==!0||m===null){let g=u+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let T=0,S=u;T!==_;++T,S+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var qr=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new gr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new hn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:Qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:Zi});r.uniforms.tEquirect.value=e;let a=new Wt(i,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=on),new Ds(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}},Pu=256,F0=3,O0=20,td=256,ed=16,B0=3,z0=new I,k0=new Zt,zs=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ds(1,10,null),this._boxMesh=new Wt(new hn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:a=256,position:o=z0}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,f=c.autoClearColor,u=c.autoClearDepth,p=c.autoClearStencil,_=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,_===null&&(t.background=c.getClearColor(k0));let m=new Ds(n,i,h);return m.position.copy(o),m.update(c,t),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=u,c.autoClearStencil=p,t.background=_,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Pu,yu(t))}_fromTexture(t,e){t.mapping===$i||t.mapping===Fs?this._setSize(t.image.length===0?Pu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Lu(t,!1,!1),n=Math.log2(t)-F0;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Lu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===$i||t.mapping===Fs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Du()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=H0(),this._integrationMaterial=G0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/ed);for(let a=0;a<=n;a++){let o=s.lodToRoughness(a,n);if(a>n-B0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(td*Math.pow(o,4)))+.5:0;i.roughness.value=o,i.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=V0());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function Lu(s,t,e){return new qr(s,{minFilter:ci,generateMipmaps:t,type:Un,colorSpace:er,depthBuffer:e})}function Yr(s,t,e){return new En({name:s,uniforms:t,vertexShader:oe.cube_vert,fragmentShader:e,side:$e,blending:Zi,depthTest:!1,depthWrite:!1})}function H0(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${td}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function G0(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:ed}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function V0(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${O0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Du(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Nu(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function W0(s){let t=new WeakMap,e=new WeakMap,n=null;function i(f,u=!1){return f==null?null:u?a(f):r(f)}function r(f){if(f&&f.isTexture){let u=f.mapping;if(u===uo||u===fo)if(t.has(f)){let p=t.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new qr(p.height);return _.fromEquirectangularTexture(s,f),t.set(f,_),f.addEventListener("dispose",l),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let u=f.mapping,p=u===uo||u===fo,_=u===$i||u===Fs;if(p||_){let m=e.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new zs(s)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let M=f.image;return p&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new zs(s)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function o(f,u){return u===uo?f.mapping=$i:u===fo&&(f.mapping=Fs),f}function c(f){let u=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&u++;return u===p}function l(f){let u=f.target;u.removeEventListener("dispose",l);let p=t.get(u);p!==void 0&&(t.delete(u),p.dispose())}function h(f){let u=f.target;u.removeEventListener("dispose",h);let p=e.get(u);p!==void 0&&(e.delete(u),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function X0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ks("WebGLRenderer: "+n+" extension not supported."),i}}}function q0(s,t,e,n){let i={},r=new WeakMap,a=new FinalizationRegistry(p=>delete i[p]);function o(p){c(p.target)}function c(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",o),delete i[p.id],a.unregister(p);let _=r.get(p);_&&(t.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(p,_){return i[_.id]!==void 0||(_.addEventListener("dispose",o),i[_.id]=new WeakRef(_),a.register(_,_.id,_),e.memory.geometries++),_}function h(p){let _=p.attributes;for(let m in _)t.update(_[m],s.ARRAY_BUFFER)}function d(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let M=_!==null?_.array.length:m.array.length/3-1,T=m.count>=65535?hr:lr,S=new T(Math.ceil(M/3)*6,1),A=S.array;if(_!==null){let x=_.array;g=_.version;for(let v=0,C=0;v<M;v+=3){let R=x[v+0],D=x[v+1],F=x[v+2];A[C++]=R,A[C++]=D,A[C++]=D,A[C++]=F,A[C++]=F,A[C++]=R}}else{g=m.version;for(let x=0,v=0;x<M;x+=3){let C=x+0,R=x+1,D=x+2;A[v++]=C,A[v++]=R,A[v++]=R,A[v++]=D,A[v++]=D,A[v++]=C}}S.version=g;let w=r.get(p);w&&t.remove(w),r.set(p,S)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&d(p)}else d(p);return r.get(p)}function u(){for(let p in i){let _=i[p].deref();_!==void 0&&c(_)}}return{get:l,update:h,getWireframeAttribute:f,dispose:u}}function Y0(s,t,e){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),e.update(f,n,1)}function l(d,f,u){u!==0&&(s.drawElementsInstanced(n,f,r,d*a,u),e.update(f,n,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Z0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function J0(s,t,e){let n=new WeakMap,i=new Ae;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let C=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",C)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],T=0;u===!0&&(T=1),p===!0&&(T=2),_===!0&&(T=3);let S=o.attributes.position.count*T,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*A*4*d),x=new ar(w,S,A,d);x.type=Tn,x.needsUpdate=!0;let v=T*4;for(let R=0;R<d;R++){let D=m[R],F=g[R],V=M[R],P=S*A*4*R;for(let H=0;H<D.count;H++){let Y=H*v;u===!0&&(i.fromBufferAttribute(D,H),w[P+Y+0]=i.x,w[P+Y+1]=i.y,w[P+Y+2]=i.z,w[P+Y+3]=0),p===!0&&(i.fromBufferAttribute(F,H),w[P+Y+4]=i.x,w[P+Y+5]=i.y,w[P+Y+6]=i.z,w[P+Y+7]=0),_===!0&&(i.fromBufferAttribute(V,H),w[P+Y+8]=i.x,w[P+Y+9]=i.y,w[P+Y+10]=i.z,w[P+Y+11]=V.itemSize===4?i.w:1)}}f={count:d,texture:x,size:new ut(S,A)},n.set(o,f),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let p=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function $0(s,t,e,n,i){let r=new WeakMap;function a(l){let h=i.render.frame,d=l.geometry,f=t.get(l,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var K0={[rl]:"LINEAR_TONE_MAPPING",[al]:"REINHARD_TONE_MAPPING",[ol]:"CINEON_TONE_MAPPING",[Fr]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[hl]:"NEUTRAL_TONE_MAPPING",[cl]:"CUSTOM_TONE_MAPPING"};function Q0(s,t,e,n,i,r){let a=new pn(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Re;h.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ce([0,2,0,0,2,0],2));let d=new $a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Wt(h,d),u=new Nr(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,M=null,T=[],S=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),c!==null&&c.setSize(A,w);for(let x=0;x<T.length;x++){let v=T[x];v.setSize&&v.setSize(A,w)}},this.setEffects=function(A){T=A,S=T.length>0&&T[0].isRenderPass===!0;let w=a.width,x=a.height;T.length>0&&o===null&&(o=new pn(w,x,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new pn(w,x,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let v=i===!0&&T.some(C=>C.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&l===null&&(l=new oi(w,x),r===!0&&(l.format=li,l.type=Ki)),a.dispose(),a.depthTexture=v?l:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let C=0;C<T.length;C++){let R=T[C];R.setSize&&R.setSize(w,x),v&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(A,w){if(m||A.toneMapping===qn&&T.length===0)return!1;if(M=w,w!==null){let x=w.width,v=w.height;(a.width!==x||a.height!==v)&&this.setSize(x,v)}return S===!1&&A.setRenderTarget(a),g=A.toneMapping,A.toneMapping=qn,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=g,m=!0;let x=a,v=o;for(let C=0;C<T.length;C++){let R=T[C];R.enabled!==!1&&(R.render(A,v,x,w),R.needsSwap!==!1&&(x=v,v=v===o?c:o))}if(p!==A.outputColorSpace||_!==A.toneMapping){p=A.outputColorSpace,_=A.toneMapping,d.defines={},de.getTransfer(p)===xe&&(d.defines.SRGB_TRANSFER="");let C=K0[_];C&&(d.defines[C]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,A.setRenderTarget(M),A.render(f,u),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}var nd=new cn,id=new oi(1,1),sd=new xr(1),rd=new ar,ad=new Ha,od=new gr,Uu=[],Fu=[],Ou=new Float32Array(16),Bu=new Float32Array(9),zu=new Float32Array(4);function ks(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Uu[i];if(r===void 0&&(r=new Float32Array(i),Uu[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ic(s,t){let e=Fu[t];e===void 0&&(e=new Int32Array(t),Fu[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function j0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),Ve(e,t)}}function eg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),Ve(e,t)}}function ng(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),Ve(e,t)}}function ig(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;zu.set(n),s.uniformMatrix2fv(this.addr,!1,zu),Ve(e,n)}}function sg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;Bu.set(n),s.uniformMatrix3fv(this.addr,!1,Bu),Ve(e,n)}}function rg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(Ge(e,n))return;Ou.set(n),s.uniformMatrix4fv(this.addr,!1,Ou),Ve(e,n)}}function ag(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function og(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),Ve(e,t)}}function cg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),Ve(e,t)}}function lg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),Ve(e,t)}}function hg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ug(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),Ve(e,t)}}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),Ve(e,t)}}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),Ve(e,t)}}function sc(s){return s.version===0&&(s.compareFunction=vl,s.needsUpdate=!0),s}function pg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=sc(id):r=nd,e.setTexture2D(t||r,i)}function mg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ad,i)}function gg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=sc(sd):r=od,e.setTextureCube(t||r,i)}function xg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||rd,i)}function _g(s){switch(s){case 5126:return j0;case 35664:return tg;case 35665:return eg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return cg;case 35669:case 35673:return lg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return xg}}function yg(s,t){s.uniform1fv(this.addr,t)}function vg(s,t){let e=ks(t,this.size,2);s.uniform2fv(this.addr,e)}function Mg(s,t){let e=ks(t,this.size,3);s.uniform3fv(this.addr,e)}function Sg(s,t){let e=ks(t,this.size,4);s.uniform4fv(this.addr,e)}function bg(s,t){let e=ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Eg(s,t){let e=ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Tg(s,t){let e=ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wg(s,t){s.uniform1iv(this.addr,t)}function Ag(s,t){s.uniform2iv(this.addr,t)}function Rg(s,t){s.uniform3iv(this.addr,t)}function Cg(s,t){s.uniform4iv(this.addr,t)}function Ig(s,t){s.uniform1uiv(this.addr,t)}function Pg(s,t){s.uniform2uiv(this.addr,t)}function Lg(s,t){s.uniform3uiv(this.addr,t)}function Dg(s,t){s.uniform4uiv(this.addr,t)}function Ng(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=sc(id):a=nd;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,r[o])}function Ug(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||ad,r[a])}function Fg(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));let a;this.type===s.SAMPLER_CUBE_SHADOW?a=sc(sd):a=od;for(let o=0;o!==i;++o)e.setTextureCube(t[o]||a,r[o])}function Og(s,t,e){let n=this.cache,i=t.length,r=ic(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),Ve(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||rd,r[a])}function Bg(s){switch(s){case 5126:return yg;case 35664:return vg;case 35665:return Mg;case 35666:return Sg;case 35674:return bg;case 35675:return Eg;case 35676:return Tg;case 5124:case 35670:return wg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Fg;case 36289:case 36303:case 36311:case 36292:return Og}}var Ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},Fl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Bg(e.type)}},Ol=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(t,e[o.id],n)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function ku(s,t){s.seq.push(t),s.map[t.id]=t}function zg(s,t,e){let n=s.name,i=n.length;for(Dl.lastIndex=0;;){let r=Dl.exec(n),a=Dl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){ku(e,l===void 0?new Ul(o,s,t):new Fl(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Ol(o),ku(e,d)),e=d}}}var Bs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);zg(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function Hu(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var kg=37297,Hg=0;function Gg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Gu=new $t;function Vg(s){de._getMatrix(Gu,de.workingColorSpace,s);let t=`mat3( ${Gu.elements.map(e=>e.toFixed(4))} )`;switch(de.getTransfer(s)){case nr:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Vu(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Gg(s.getShaderSource(t),o)}else return r}function Wg(s,t){let e=Vg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Xg={[rl]:"Linear",[al]:"Reinhard",[ol]:"Cineon",[Fr]:"ACESFilmic",[ll]:"AgX",[hl]:"Neutral",[cl]:"Custom"};function qg(s,t){let e=Xg[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ec=new I;function Yg(){de.getLuminanceCoefficients(ec);let s=ec.x.toFixed(4),t=ec.y.toFixed(4),e=ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function Jg(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $g(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function Xr(s){return s!==""}function Wu(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Xu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(s){return s.replace(Kg,Qg)}function Qg(s,t){let e=oe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Bl(e)}var jg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(s){return s.replace(jg,tx)}function tx(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ex={[Yi]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function nx(s){return ex[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ix={[Fs]:"ENVMAP_MODE_REFRACTION"};function sx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ix[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var rx={[sl]:"ENVMAP_BLENDING_MULTIPLY",[su]:"ENVMAP_BLENDING_MIX",[ru]:"ENVMAP_BLENDING_ADD"};function ax(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":rx[s.combine]||"ENVMAP_BLENDING_NONE"}function ox(s,t,e,n){let i=s.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=nx(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=sx(e),d=ax(e),f=Zg(e),u=Jg(r),p=i.createProgram(),_,m,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Xr).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Xr).join(`
`),m.length>0&&(m+=`
`)):(_=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),m=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qn?"#define TONE_MAPPING":"",e.toneMapping!==qn?oe.tonemapping_pars_fragment:"",e.toneMapping!==qn?qg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Wg("linearToOutputTexel",e.outputColorSpace),Yg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Bl(a),a=Wu(a,e),a=Xu(a,e),o=Bl(o),o=Wu(o,e),o=Xu(o,e),a=qu(a),o=qu(o),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=g+_+a,T=g+m+o,S=Hu(i,i.VERTEX_SHADER,M),A=Hu(i,i.FRAGMENT_SHADER,T);i.attachShader(p,S),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(R){if(s.debug.checkShaderErrors){let D=i.getProgramInfoLog(p)||"",F=i.getShaderInfoLog(S)||"",V=i.getShaderInfoLog(A)||"",P=D.trim(),H=F.trim(),Y=V.trim(),G=!0,ot=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,S,A);else{let X=Vu(i,S,"vertex"),st=Vu(i,A,"fragment");Yt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+X+`
`+st)}else P!==""?qt("WebGLProgram: Program Info Log:",P):(H===""||Y==="")&&(ot=!1);ot&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:H,prefix:_},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(S),i.deleteShader(A),x=new Bs(i,p),v=$g(i,p)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(p,kg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}var cx=0,zl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new kl(t),e.set(t,n)),n}},kl=class{constructor(t){this.id=cx++,this.code=t,this.usedTimes=0}};function lx(s){return s===Pi||s===Gr||s===Vr}function hx(s,t,e,n,i,r){let a=new or,o=new zl,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,v,C,R,D,F){let V=R.fog,P=D.geometry,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?R.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,G=t.get(x.envMap||H,Y),ot=f[x.type],X=n.precision;x.precision!==null&&(X=n.getMaxPrecision(x.precision),X!==x.precision&&qt("WebGLProgram.getParameters:",x.precision,"not supported, using",X,"instead."));let st=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,at=st!==void 0?st.length:0,Pt=0;P.morphAttributes.position!==void 0&&(Pt=1),P.morphAttributes.normal!==void 0&&(Pt=2),P.morphAttributes.color!==void 0&&(Pt=3);let zt,j,Et,It;if(ot){let wt=Zn[ot];zt=wt.vertexShader,j=wt.fragmentShader}else{zt=x.vertexShader,j=x.fragmentShader;let wt=o.getVertexShaderStage(x),me=o.getFragmentShaderStage(x);o.update(x,wt,me),Et=wt.id,It=me.id}let Gt=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,_e=D.isBatchedMesh===!0,Ht=!!x.map,ie=!!x.matcap,re=!!G,K=re&&G.isPMREMTexture===!0,_t=!!x.aoMap,ft=!!x.lightMap,Ct=!!x.bumpMap&&x.wireframe===!1,Mt=!!x.normalMap,Xt=!!x.displacementMap,Ot=!!x.emissiveMap,ae=!!x.metalnessMap,se=!!x.roughnessMap,fe=x.anisotropy>0,U=x.clearcoat>0,it=x.diffuseRoughness>0,Z=x.dispersion>0,rt=x.retroreflectivity>0,z=x.iridescence>0,lt=x.sheen>0,ct=x.transmission>0,nt=fe&&!!x.anisotropyMap,b=U&&!!x.clearcoatMap,y=U&&!!x.clearcoatNormalMap,O=U&&!!x.clearcoatRoughnessMap,q=it&&!!x.diffuseRoughnessMap,tt=z&&!!x.iridescenceMap,pt=z&&!!x.iridescenceThicknessMap,gt=lt&&!!x.sheenColorMap,Q=lt&&!!x.sheenRoughnessMap,et=!!x.specularMap,yt=!!x.specularColorMap,L=!!x.specularIntensityMap,J=ct&&!!x.transmissionMap,$=ct&&!!x.thicknessMap,xt=!!x.gradientMap,dt=!!x.alphaMap,mt=x.alphaTest>0,Dt=!!x.alphaHash,jt=!!x.extensions,ht=qn;x.toneMapped&&(Gt===null||Gt.isXRRenderTarget===!0)&&(ht=s.toneMapping);let kt=K?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Jt={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:zt,fragmentShader:j,defines:x.defines,customVertexShaderID:Et,customFragmentShaderID:It,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:X,batching:_e,batchingColor:_e&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:Gt===null?s.outputColorSpace:Gt.isXRRenderTarget===!0?Gt.texture.colorSpace:de.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:ie,envMap:re,envMapMode:re&&G.mapping,envMapPMREM:K,envMapMaxLod:K?kt.length-1:null,envMapSize:K?kt[0].width:null,aoMap:_t,lightMap:ft,bumpMap:Ct,normalMap:Mt,displacementMap:Xt,emissiveMap:Ot,normalMapObjectSpace:Mt&&x.normalMapType===cu,normalMapTangentSpace:Mt&&x.normalMapType===Qo,packedNormalMap:Mt&&x.normalMapType===Qo&&lx(x.normalMap.format),metalnessMap:ae,roughnessMap:se,anisotropy:fe,anisotropyMap:nt,clearcoat:U,clearcoatMap:b,clearcoatNormalMap:y,clearcoatRoughnessMap:O,diffuseRoughness:it,diffuseRoughnessMap:q,dispersion:Z,retroreflection:rt,iridescence:z,iridescenceMap:tt,iridescenceThicknessMap:pt,sheen:lt,sheenColorMap:gt,sheenRoughnessMap:Q,specularMap:et,specularColorMap:yt,specularIntensityMap:L,transmission:ct,transmissionMap:J,thicknessMap:$,gradientMap:xt,opaque:x.transparent===!1&&x.blending===Us&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:mt,alphaHash:Dt,combine:x.combine,mapUv:Ht&&u(x.map.channel),aoMapUv:_t&&u(x.aoMap.channel),lightMapUv:ft&&u(x.lightMap.channel),bumpMapUv:Ct&&u(x.bumpMap.channel),normalMapUv:Mt&&u(x.normalMap.channel),displacementMapUv:Xt&&u(x.displacementMap.channel),emissiveMapUv:Ot&&u(x.emissiveMap.channel),metalnessMapUv:ae&&u(x.metalnessMap.channel),roughnessMapUv:se&&u(x.roughnessMap.channel),anisotropyMapUv:nt&&u(x.anisotropyMap.channel),clearcoatMapUv:b&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&u(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:q&&u(x.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&u(x.sheenRoughnessMap.channel),specularMapUv:et&&u(x.specularMap.channel),specularColorMapUv:yt&&u(x.specularColorMap.channel),specularIntensityMapUv:L&&u(x.specularIntensityMap.channel),transmissionMapUv:J&&u(x.transmissionMap.channel),thicknessMapUv:$&&u(x.thicknessMap.channel),alphaMapUv:dt&&u(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Mt||fe),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!P.attributes.uv&&(Ht||dt),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Tt,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Pt,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:F.filter(wt=>wt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&de.getTransfer(x.map.colorSpace)===xe,decodeVideoTextureEmissive:Ot&&x.emissiveMap.isVideoTexture===!0&&de.getTransfer(x.emissiveMap.colorSpace)===xe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ln,flipSided:x.side===$e,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:jt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(jt&&x.extensions.multiDraw===!0||_e)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function _(x){let v=[];if(x.shaderID?v.push(x.shaderID):(v.push(x.customVertexShaderID),v.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)v.push(C),v.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(v,x),g(v,x),v.push(s.outputColorSpace)),v.push(x.customProgramCacheKey),v.join()}function m(x,v){x.push(v.precision),x.push(v.outputColorSpace),x.push(v.envMapMode),x.push(v.envMapPMREM),x.push(v.envMapMaxLod),x.push(v.envMapSize),x.push(v.mapUv),x.push(v.alphaMapUv),x.push(v.lightMapUv),x.push(v.aoMapUv),x.push(v.bumpMapUv),x.push(v.normalMapUv),x.push(v.displacementMapUv),x.push(v.emissiveMapUv),x.push(v.metalnessMapUv),x.push(v.roughnessMapUv),x.push(v.anisotropyMapUv),x.push(v.clearcoatMapUv),x.push(v.clearcoatNormalMapUv),x.push(v.clearcoatRoughnessMapUv),x.push(v.diffuseRoughnessMapUv),x.push(v.iridescenceMapUv),x.push(v.iridescenceThicknessMapUv),x.push(v.sheenColorMapUv),x.push(v.sheenRoughnessMapUv),x.push(v.specularMapUv),x.push(v.specularColorMapUv),x.push(v.specularIntensityMapUv),x.push(v.transmissionMapUv),x.push(v.thicknessMapUv),x.push(v.combine),x.push(v.fogExp2),x.push(v.sizeAttenuation),x.push(v.morphTargetsCount),x.push(v.numSunLights),x.push(v.numDirLights),x.push(v.numPointLights),x.push(v.numSpotLights),x.push(v.numSpotLightMaps),x.push(v.numHemiLights),x.push(v.numRectAreaLights),x.push(v.numSunLightShadows),x.push(v.numDirLightShadows),x.push(v.numPointLightShadows),x.push(v.numSpotLightShadows),x.push(v.numSpotLightShadowsWithMaps),x.push(v.numLightProbes),x.push(v.numLightProbeGrids),x.push(v.shadowMapType),x.push(v.toneMapping),x.push(v.numClippingPlanes),x.push(v.numClipIntersection),x.push(v.depthPacking)}function g(x,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let v=f[x.type],C;if(v){let R=Zn[v];C=Ru.clone(R.uniforms)}else C=x.uniforms;return C}function T(x,v){let C=h.get(v);return C!==void 0?++C.usedTimes:(C=new ox(s,v,x,i),l.push(C),h.set(v,C)),C}function S(x){if(--x.usedTimes===0){let v=l.indexOf(x);l[v]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function A(x){o.remove(x)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:M,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:w}}function ux(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function dx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Zu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ju(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function o(f,u,p,_,m,g){let M=s[t];return M===void 0?(M={id:f.id,object:f,geometry:u,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},s[t]=M):(M.id=f.id,M.object=f,M.geometry=u,M.material=p,M.materialVariant=a(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=m,M.group=g),t++,M}function c(f,u,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);let T=o(f,u,p,_,m,g);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):e.push(T)}function l(f,u,p,_,m,g){let M=o(f,u,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(f,u){e.length>1&&e.sort(f||dx),n.length>1&&n.sort(u||Zu),i.length>1&&i.sort(u||Zu)}function d(){for(let f=t,u=s.length;f<u;f++){let p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:d,sort:h}}function fx(){let s=new WeakMap;function t(n,i){let r=s.get(n),a;return r===void 0?(a=new Ju,s.set(n,[a])):i>=r.length?(a=new Ju,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function px(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Zt};break;case"SpotLight":e={position:new I,direction:new I,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function mx(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var gx=0;function xx(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _x(s){let t=new px,e=mx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new ne,a=new ne;function o(l){let h=0,d=0,f=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let u=0,p=0,_=0,m=0,g=0,M=0,T=0,S=0,A=0,w=0,x=0,v=0,C=0,R=0;l.sort(xx);for(let F=0,V=l.length;F<V;F++){let P=l[F],H=P.color,Y=P.intensity,G=P.distance,ot=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Pi?ot=P.shadow.map.texture:ot=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=H.r*Y,d+=H.g*Y,f+=H.b*Y;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],Y);R++}else if(P.isSunLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize.copy(st.mapSize).multiply(st.getFrameExtents()),n.sunShadow[p]=at,n.sunShadowMap[p]=ot;let Pt=st.getViewportCount();for(let zt=0;zt<Pt;zt++)n.sunShadowMatrix[_+zt]=st.getMatrix(zt),n.sunShadowCascade[_+zt]=st._cascadeData[zt];_+=Pt,p++}n.sun[u]=X,u++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let st=P.shadow,at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.directionalShadow[m]=at,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=P.shadow.matrix,A++}n.directional[m]=X,m++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(Y),X.distance=G,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[M]=X;let st=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,st.updateMatrices(P),P.castShadow&&C++),n.spotLightMatrix[M]=st.matrix,P.castShadow){let at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,n.spotShadow[M]=at,n.spotShadowMap[M]=ot,x++}M++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(H).multiplyScalar(Y),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[T]=X,T++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let st=P.shadow,at=e.get(P);at.shadowIntensity=st.intensity,at.shadowBias=st.bias,at.shadowNormalBias=st.normalBias,at.shadowRadius=st.radius,at.shadowMapSize=st.mapSize,at.shadowCameraNear=st.camera.near,at.shadowCameraFar=st.camera.far,n.pointShadow[g]=at,n.pointShadowMap[g]=ot,n.pointShadowMatrix[g]=P.shadow.matrix,w++}n.point[g]=X,g++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(Y),X.groundColor.copy(P.groundColor).multiplyScalar(Y),n.hemi[S]=X,S++}}T>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let D=n.hash;(D.sunLength!==u||D.directionalLength!==m||D.pointLength!==g||D.spotLength!==M||D.rectAreaLength!==T||D.hemiLength!==S||D.numSunShadows!==p||D.numDirectionalShadows!==A||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==v||D.numLightProbes!==R)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=T,n.point.length=g,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,D.sunLength=u,D.directionalLength=m,D.pointLength=g,D.spotLength=M,D.rectAreaLength=T,D.hemiLength=S,D.numSunShadows=p,D.numDirectionalShadows=A,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=v,D.numLightProbes=R,n.version=gx++)}function c(l,h){let d=0,f=0,u=0,p=0,_=0,m=0,g=h.matrixWorldInverse;for(let M=0,T=l.length;M<T;M++){let S=l[M];if(S.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),d++}else if(S.isDirectionalLight){let A=n.directional[f];A.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(g),f++}else if(S.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),A.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(g),p++}else if(S.isRectAreaLight){let A=n.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){let A=n.point[u];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(g),m++}}}return{setup:o,setupView:c,state:n}}function $u(s){let t=new _x(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function a(d){d.isLightProbeGrid?i.push(d):e.push(d)}function o(d){n.push(d)}function c(){t.setup(e),i.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function yx(s){let t=new WeakMap;function e(i,r=0){let a=t.get(i),o;return a===void 0?(o=new $u(s),t.set(i,[o])):r>=a.length?(o=new $u(s),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Sx=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],bx=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Ku=new ne,Wr=new I,Nl=new I;function Ex(s,t,e){let n=new Ei,i=new ut,r=new ut,a=new Ae,o=new Ka,c=new Qa,l={},h=e.maxTextureSize,d={[Ci]:$e,[$e]:Ci,[ln]:ln},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:vx,fragmentShader:Mx}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new Re;p.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Wt(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yi;let g=this.type;this.render=function(w,x,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===zh&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yi);let C=s.getRenderTarget(),R=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Zi),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=g!==this.type;V&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(H=>H.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,H=w.length;P<H;P++){let Y=w[P],G=Y.shadow;if(G===void 0){qt("WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let ot=G.getFrameExtents();i.multiply(ot),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,G.mapSize.y=r.y));let X=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=X,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ns){if(Y.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new pn(i.x,i.y,{format:Pi,type:Un,minFilter:on,magFilter:on,generateMipmaps:!1}),G.map.texture.name=Y.name+".shadowMap",G.map.depthTexture=new oi(i.x,i.y,Tn),G.map.depthTexture.name=Y.name+".shadowMapDepth",G.map.depthTexture.format=si,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qe,G.map.depthTexture.magFilter=qe}else Y.isPointLight?(G.map=new qr(i.x),G.map.depthTexture=new xr(i.x,Nn)):(G.map=new pn(i.x,i.y),G.map.depthTexture=new oi(i.x,i.y,Nn)),G.map.depthTexture.name=Y.name+".shadowMap",G.map.depthTexture.format=si,this.type===Yi?(G.map.depthTexture.compareFunction=X?yl:_l,G.map.depthTexture.minFilter=on,G.map.depthTexture.magFilter=on):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=qe,G.map.depthTexture.magFilter=qe);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==i.x||G.map.height!==i.y)&&G.map.setSize(i.x,i.y);let st=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Y.isPointLight!==!0&&G.updateMatrices(Y,v);let at=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:v.layers;for(let Pt=0;Pt<st;Pt++){let zt=G.getCamera(Pt);if(Y.isPointLight){let j=G.camera,Et=G.matrix,It=Y.distance||j.far;It!==j.far&&(j.far=It,j.updateProjectionMatrix()),Wr.setFromMatrixPosition(Y.matrixWorld),j.position.copy(Wr),Nl.copy(j.position),Nl.add(Sx[Pt]),j.up.copy(bx[Pt]),j.lookAt(Nl),j.updateMatrixWorld(),Et.makeTranslation(-Wr.x,-Wr.y,-Wr.z),Ku.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Ku,j.coordinateSystem,j.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,Pt),s.clear();else{Pt===0&&(s.setRenderTarget(G.map),s.clear());let j=G.getViewport(Pt);a.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),F.viewport(a)}n=G.getFrustum(Pt),S(x,v,zt,Y,at,this.type)}G.isPointLightShadow!==!0&&this.type===Ns&&M(G,v),G.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(C,R,D)};function M(w,x){let v=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new pn(i.x,i.y,{format:Pi,type:Un}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(x,null,v,f,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(x,null,v,u,_,null)}function T(w,x,v,C){let R=null,D=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)R=D;else if(R=v.isPointLight===!0?c:o,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let F=R.uuid,V=x.uuid,P=l[F];P===void 0&&(P={},l[F]=P);let H=P[V];H===void 0&&(H=R.clone(),P[V]=H,x.addEventListener("dispose",A)),R=H}if(R.visible=x.visible,R.wireframe=x.wireframe,C===Ns?R.side=x.shadowSide!==null?x.shadowSide:x.side:R.side=x.shadowSide!==null?x.shadowSide:d[x.side],R.alphaMap=x.alphaMap,R.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,R.map=x.map,R.clipShadows=x.clipShadows,R.clippingPlanes=x.clippingPlanes,R.clipIntersection=x.clipIntersection,R.displacementMap=x.displacementMap,R.displacementScale=x.displacementScale,R.displacementBias=x.displacementBias,R.wireframeLinewidth=x.wireframeLinewidth,R.linewidth=x.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=s.properties.get(R);F.light=v}return R}function S(w,x,v,C,R,D){if(w.visible===!1)return;if(w.layers.test(R)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Ns)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let P=t.update(w),H=w.material;if(Array.isArray(H)){let Y=P.groups;for(let G=0,ot=Y.length;G<ot;G++){let X=Y[G],st=H[X.materialIndex];if(st&&st.visible){let at=T(w,st,C,D);w.onBeforeShadow(s,w,x,v,P,at,X),s.renderBufferDirect(v,null,P,at,w,X),w.onAfterShadow(s,w,x,v,P,at,X)}}}else if(H.visible){let Y=T(w,H,C,D);w.onBeforeShadow(s,w,x,v,P,Y,null),s.renderBufferDirect(v,null,P,Y,w,null),w.onAfterShadow(s,w,x,v,P,Y,null)}}let V=w.children;for(let P=0,H=V.length;P<H;P++)S(V[P],x,v,C,R,D)}function A(w){w.target.removeEventListener("dispose",A);for(let v in l){let C=l[v],R=w.target.uuid;R in C&&(C[R].dispose(),delete C[R])}}}function Tx(s,t){function e(){let L=!1,J=new Ae,$=null,xt=new Ae(0,0,0,0);return{setMask:function(dt){$!==dt&&!L&&(s.colorMask(dt,dt,dt,dt),$=dt)},setLocked:function(dt){L=dt},setClear:function(dt,mt,Dt,jt,ht){ht===!0&&(dt*=jt,mt*=jt,Dt*=jt),J.set(dt,mt,Dt,jt),xt.equals(J)===!1&&(s.clearColor(dt,mt,Dt,jt),xt.copy(J))},reset:function(){L=!1,$=null,xt.set(-1,0,0,0)}}}function n(){let L=!1,J=!1,$=null,xt=null,dt=null;return{setReversed:function(mt){if(J!==mt){let Dt=t.get("EXT_clip_control");mt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),J=mt;let jt=dt;dt=null,this.setClear(jt)}},getReversed:function(){return J},setTest:function(mt){mt?Tt(s.DEPTH_TEST):Vt(s.DEPTH_TEST)},setMask:function(mt){$!==mt&&!L&&(s.depthMask(mt),$=mt)},setFunc:function(mt){if(J&&(mt=_u[mt]),xt!==mt){switch(mt){case Ia:s.depthFunc(s.NEVER);break;case Pa:s.depthFunc(s.ALWAYS);break;case La:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case Da:s.depthFunc(s.EQUAL);break;case Na:s.depthFunc(s.GEQUAL);break;case Ua:s.depthFunc(s.GREATER);break;case Fa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}xt=mt}},setLocked:function(mt){L=mt},setClear:function(mt){dt!==mt&&(dt=mt,J&&(mt=1-mt),s.clearDepth(mt))},reset:function(){L=!1,$=null,xt=null,dt=null,J=!1}}}function i(){let L=!1,J=null,$=null,xt=null,dt=null,mt=null,Dt=null,jt=null,ht=null;return{setTest:function(kt){L||(kt?Tt(s.STENCIL_TEST):Vt(s.STENCIL_TEST))},setMask:function(kt){J!==kt&&!L&&(s.stencilMask(kt),J=kt)},setFunc:function(kt,Jt,wt){($!==kt||xt!==Jt||dt!==wt)&&(s.stencilFunc(kt,Jt,wt),$=kt,xt=Jt,dt=wt)},setOp:function(kt,Jt,wt){(mt!==kt||Dt!==Jt||jt!==wt)&&(s.stencilOp(kt,Jt,wt),mt=kt,Dt=Jt,jt=wt)},setLocked:function(kt){L=kt},setClear:function(kt){ht!==kt&&(s.clearStencil(kt),ht=kt)},reset:function(){L=!1,J=null,$=null,xt=null,dt=null,mt=null,Dt=null,jt=null,ht=null}}}let r=new e,a=new n,o=new i,c={},l=new WeakMap,h={},d={},f={},u=new WeakMap,p=[],_=null,m=!1,g=null,M=null,T=null,S=null,A=null,w=null,x=null,v=new Zt(0,0,0),C=0,R=!1,D=null,F=null,V=null,P=null,H=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ot=0,X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=ot>=1):X.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=ot>=2);let st=null,at={},Pt=s.getParameter(s.SCISSOR_BOX),zt=s.getParameter(s.VIEWPORT),j=new Ae().fromArray(Pt),Et=new Ae().fromArray(zt);function It(L,J,$,xt){let dt=new Uint8Array(4),mt=s.createTexture();s.bindTexture(L,mt),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<$;Dt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(J,0,s.RGBA,1,1,xt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(J+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return mt}let Gt={};Gt[s.TEXTURE_2D]=It(s.TEXTURE_2D,s.TEXTURE_2D,1),Gt[s.TEXTURE_CUBE_MAP]=It(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Gt[s.TEXTURE_2D_ARRAY]=It(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Gt[s.TEXTURE_3D]=It(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Tt(s.DEPTH_TEST),a.setFunc(ys),Ct(!1),Mt(jc),Tt(s.CULL_FACE),_t(Zi);function Tt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Vt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function _e(L,J){return f[L]!==J?(s.bindFramebuffer(L,J),f[L]=J,L===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=J),L===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=J),!0):!1}function Ht(L,J){let $=p,xt=!1;if(L){$=u.get(J),$===void 0&&($=[],u.set(J,$));let dt=L.textures;if($.length!==dt.length||$[0]!==s.COLOR_ATTACHMENT0){for(let mt=0,Dt=dt.length;mt<Dt;mt++)$[mt]=s.COLOR_ATTACHMENT0+mt;$.length=dt.length,xt=!0}}else $[0]!==s.BACK&&($[0]=s.BACK,xt=!0);xt&&s.drawBuffers($)}function ie(L){return _!==L?(s.useProgram(L),_=L,!0):!1}let re={[Ji]:s.FUNC_ADD,[Hh]:s.FUNC_SUBTRACT,[Gh]:s.FUNC_REVERSE_SUBTRACT};re[Vh]=s.MIN,re[Wh]=s.MAX;let K={[Xh]:s.ZERO,[qh]:s.ONE,[Yh]:s.SRC_COLOR,[nl]:s.SRC_ALPHA,[jh]:s.SRC_ALPHA_SATURATE,[Kh]:s.DST_COLOR,[Jh]:s.DST_ALPHA,[Zh]:s.ONE_MINUS_SRC_COLOR,[il]:s.ONE_MINUS_SRC_ALPHA,[Qh]:s.ONE_MINUS_DST_COLOR,[$h]:s.ONE_MINUS_DST_ALPHA,[tu]:s.CONSTANT_COLOR,[eu]:s.ONE_MINUS_CONSTANT_COLOR,[nu]:s.CONSTANT_ALPHA,[iu]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(L,J,$,xt,dt,mt,Dt,jt,ht,kt){if(L===Zi){m===!0&&(Vt(s.BLEND),m=!1);return}if(m===!1&&(Tt(s.BLEND),m=!0),L!==kh){if(L!==g||kt!==R){if((M!==Ji||A!==Ji)&&(s.blendEquation(s.FUNC_ADD),M=Ji,A=Ji),kt)switch(L){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ii:s.blendFunc(s.ONE,s.ONE);break;case tl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case el:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Yt("WebGLState: Invalid blending: ",L);break}else switch(L){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case tl:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",L);break}T=null,S=null,w=null,x=null,v.set(0,0,0),C=0,g=L,R=kt}return}dt=dt||J,mt=mt||$,Dt=Dt||xt,(J!==M||dt!==A)&&(s.blendEquationSeparate(re[J],re[dt]),M=J,A=dt),($!==T||xt!==S||mt!==w||Dt!==x)&&(s.blendFuncSeparate(K[$],K[xt],K[mt],K[Dt]),T=$,S=xt,w=mt,x=Dt),(jt.equals(v)===!1||ht!==C)&&(s.blendColor(jt.r,jt.g,jt.b,ht),v.copy(jt),C=ht),g=L,R=!1}function ft(L,J){L.side===ln?Vt(s.CULL_FACE):Tt(s.CULL_FACE);let $=L.side===$e;J&&($=!$),Ct($),L.blending===Us&&L.transparent===!1?_t(Zi):_t(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let xt=L.stencilWrite;o.setTest(xt),xt&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ot(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Tt(s.SAMPLE_ALPHA_TO_COVERAGE):Vt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(L){D!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),D=L)}function Mt(L){L!==Oh?(Tt(s.CULL_FACE),L!==F&&(L===jc?s.cullFace(s.BACK):L===Bh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Vt(s.CULL_FACE),F=L}function Xt(L){L!==V&&(G&&s.lineWidth(L),V=L)}function Ot(L,J,$){L?(Tt(s.POLYGON_OFFSET_FILL),(P!==J||H!==$)&&(P=J,H=$,a.getReversed()&&(J=-J,$=-$),s.polygonOffset(J,$))):Vt(s.POLYGON_OFFSET_FILL)}function ae(L){L?Tt(s.SCISSOR_TEST):Vt(s.SCISSOR_TEST)}function se(L){L===void 0&&(L=s.TEXTURE0+Y-1),st!==L&&(s.activeTexture(L),st=L)}function fe(L,J,$){$===void 0&&(st===null?$=s.TEXTURE0+Y-1:$=st);let xt=at[$];xt===void 0&&(xt={type:void 0,texture:void 0},at[$]=xt),(xt.type!==L||xt.texture!==J)&&(st!==$&&(s.activeTexture($),st=$),s.bindTexture(L,J||Gt[L]),xt.type=L,xt.texture=J)}function U(){let L=at[st];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function it(){try{s.compressedTexImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function Z(){try{s.compressedTexImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function rt(){try{s.texSubImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function z(){try{s.texSubImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function lt(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function ct(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function nt(){try{s.texStorage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function b(){try{s.texStorage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function y(){try{s.texImage2D(...arguments)}catch(L){Yt("WebGLState:",L)}}function O(){try{s.texImage3D(...arguments)}catch(L){Yt("WebGLState:",L)}}function q(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function tt(L,J){d[L]!==J&&(s.pixelStorei(L,J),d[L]=J)}function pt(L){j.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),j.copy(L))}function gt(L){Et.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Et.copy(L))}function Q(L,J){let $=l.get(J);$===void 0&&($=new WeakMap,l.set(J,$));let xt=$.get(L);xt===void 0&&(xt=s.getUniformBlockIndex(J,L.name),s.uniformBlockBinding(J,xt,xt),$.set(L,xt))}function et(L,J,$){let dt=l.get(J).get(L);c[dt]!==$&&(s.bindBufferBase(s.UNIFORM_BUFFER,dt,$),c[dt]=$)}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},st=null,at={},f={},c={},u=new WeakMap,p=[],_=null,m=!1,g=null,M=null,T=null,S=null,A=null,w=null,x=null,v=new Zt(0,0,0),C=0,R=!1,D=null,F=null,V=null,P=null,H=null,j.set(0,0,s.canvas.width,s.canvas.height),Et.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Tt,disable:Vt,bindFramebuffer:_e,drawBuffers:Ht,useProgram:ie,setBlending:_t,setMaterial:ft,setFlipSided:Ct,setCullFace:Mt,setLineWidth:Xt,setPolygonOffset:Ot,setScissorTest:ae,activeTexture:se,bindTexture:fe,unbindTexture:U,compressedTexImage2D:it,compressedTexImage3D:Z,texImage2D:y,texImage3D:O,pixelStorei:tt,getParameter:q,updateUBOMapping:Q,uniformBlockBinding:et,texStorage2D:nt,texStorage3D:b,texSubImage2D:rt,texSubImage3D:z,compressedTexSubImage2D:lt,compressedTexSubImage3D:ct,scissor:pt,viewport:gt,reset:yt}}function wx(s,t,e,n,i,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,h=new WeakMap,d=new Set,f,u=new WeakMap,p=new Set,_=new FinalizationRegistry(b=>p.delete(b)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,y){return m?new OffscreenCanvas(b,y):ir("canvas")}function M(b,y,O){let q=1,tt=nt(b);if((tt.width>O||tt.height>O)&&(q=O/Math.max(tt.width,tt.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let pt=Math.floor(q*tt.width),gt=Math.floor(q*tt.height);f===void 0&&(f=g(pt,gt));let Q=y?g(pt,gt):f;return Q.width=pt,Q.height=gt,Q.getContext("2d").drawImage(b,0,0,pt,gt),qt("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+pt+"x"+gt+")."),Q}else return"data"in b&&qt("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function T(b){return b.generateMipmaps}function S(b){s.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(b,y,O,q,tt,pt=!1){if(b!==null){if(s[b]!==void 0)return s[b];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let gt;q&&(gt=t.get("EXT_texture_norm16"),gt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===s.RED&&(O===s.FLOAT&&(Q=s.R32F),O===s.HALF_FLOAT&&(Q=s.R16F),O===s.UNSIGNED_BYTE&&(Q=s.R8),O===s.UNSIGNED_SHORT&&gt&&(Q=gt.R16_EXT),O===s.SHORT&&gt&&(Q=gt.R16_SNORM_EXT)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.R8UI),O===s.UNSIGNED_SHORT&&(Q=s.R16UI),O===s.UNSIGNED_INT&&(Q=s.R32UI),O===s.BYTE&&(Q=s.R8I),O===s.SHORT&&(Q=s.R16I),O===s.INT&&(Q=s.R32I)),y===s.RG&&(O===s.FLOAT&&(Q=s.RG32F),O===s.HALF_FLOAT&&(Q=s.RG16F),O===s.UNSIGNED_BYTE&&(Q=s.RG8),O===s.UNSIGNED_SHORT&&gt&&(Q=gt.RG16_EXT),O===s.SHORT&&gt&&(Q=gt.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RG8UI),O===s.UNSIGNED_SHORT&&(Q=s.RG16UI),O===s.UNSIGNED_INT&&(Q=s.RG32UI),O===s.BYTE&&(Q=s.RG8I),O===s.SHORT&&(Q=s.RG16I),O===s.INT&&(Q=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),O===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),O===s.UNSIGNED_INT&&(Q=s.RGB32UI),O===s.BYTE&&(Q=s.RGB8I),O===s.SHORT&&(Q=s.RGB16I),O===s.INT&&(Q=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),O===s.UNSIGNED_INT&&(Q=s.RGBA32UI),O===s.BYTE&&(Q=s.RGBA8I),O===s.SHORT&&(Q=s.RGBA16I),O===s.INT&&(Q=s.RGBA32I)),y===s.RGB&&(O===s.UNSIGNED_SHORT&&gt&&(Q=gt.RGB16_EXT),O===s.SHORT&&gt&&(Q=gt.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(Q=s.R11F_G11F_B10F)),y===s.RGBA){let et=pt?nr:de.getTransfer(tt);O===s.FLOAT&&(Q=s.RGBA32F),O===s.HALF_FLOAT&&(Q=s.RGBA16F),O===s.UNSIGNED_BYTE&&(Q=et===xe?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&gt&&(Q=gt.RGBA16_EXT),O===s.SHORT&&gt&&(Q=gt.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function x(b,y){let O;return b?y===null||y===Nn||y===Ki?O=s.DEPTH24_STENCIL8:y===Tn?O=s.DEPTH32F_STENCIL8:y===Os&&(O=s.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Nn||y===Ki?O=s.DEPTH_COMPONENT24:y===Tn?O=s.DEPTH_COMPONENT32F:y===Os&&(O=s.DEPTH_COMPONENT16),O}function v(b,y){return T(b)===!0||b.isFramebufferTexture&&b.minFilter!==qe&&b.minFilter!==on?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function C(b){let y=new WeakRef(b);n.get(b).__ref=y,p.add(y),_.register(b,y,y)}function R(b){let y=n.get(b).__ref;y!==void 0&&(p.delete(y),_.unregister(y))}function D(b){V(b.target)}function F(b){P(b.target)}function V(b){b.removeEventListener("dispose",D),R(b),Y(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&d.delete(b)}function P(b){b.removeEventListener("dispose",F),R(b),ot(b)}function H(){for(let b of p){let y=b.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):V(y))}p.clear(),d.clear()}function Y(b){let y=n.get(b);if(y.__webglInit===void 0)return;let O=b.source,q=u.get(O);if(q){let tt=q[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&G(b),Object.keys(q).length===0&&u.delete(O)}n.remove(b)}function G(b){let y=n.get(b);s.deleteTexture(y.__webglTexture);let O=b.source,q=u.get(O);delete q[y.__cacheKey],a.memory.textures--}function ot(b){let y=n.get(b);y.__depthDisposeCallback&&y.__depthDisposeCallback();let O=b.depthTexture;if(O&&O.renderTarget===b&&V(O),b.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(y.__webglFramebuffer[tt]))for(let pt=0;pt<y.__webglFramebuffer[tt].length;pt++)s.deleteFramebuffer(y.__webglFramebuffer[tt][pt]);else s.deleteFramebuffer(y.__webglFramebuffer[tt]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[tt])}else{if(Array.isArray(y.__webglFramebuffer))for(let tt=0;tt<y.__webglFramebuffer.length;tt++)s.deleteFramebuffer(y.__webglFramebuffer[tt]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let tt=0;tt<y.__webglColorRenderbuffer.length;tt++)y.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[tt]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let q=b.textures;for(let tt=0,pt=q.length;tt<pt;tt++){let gt=n.get(q[tt]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(q[tt])}n.remove(b)}let X=0;function st(){X=0}function at(){return X}function Pt(b){X=b}function zt(){let b=X;return b>=i.maxTextures&&qt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+i.maxTextures),X+=1,b}function j(b){let y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.mipmapsAutoUpdate),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Et(b,y){let O=n.get(b);if(b.isVideoTexture&&lt(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let q=b.image;if(q===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{ft(O,b,y);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function It(b,y){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ft(O,b,y);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function Gt(b,y){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){ft(O,b,y);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function Tt(b,y){let O=n.get(b);if(b.version>0&&O.__version!==b.version){Ct(O,b,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}let Vt={[vs]:s.REPEAT,[kn]:s.CLAMP_TO_EDGE,[Oa]:s.MIRRORED_REPEAT},_e={[qe]:s.NEAREST,[au]:s.NEAREST_MIPMAP_NEAREST,[Or]:s.NEAREST_MIPMAP_LINEAR,[on]:s.LINEAR,[po]:s.LINEAR_MIPMAP_NEAREST,[ci]:s.LINEAR_MIPMAP_LINEAR},Ht={[hu]:s.NEVER,[vl]:s.ALWAYS,[uu]:s.LESS,[_l]:s.LEQUAL,[du]:s.EQUAL,[yl]:s.GEQUAL,[fu]:s.GREATER,[pu]:s.NOTEQUAL};function ie(b,y){if(y.type===Tn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===on||y.magFilter===po||y.magFilter===Or||y.magFilter===ci||y.minFilter===on||y.minFilter===po||y.minFilter===Or||y.minFilter===ci)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,Vt[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,Vt[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,Vt[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,_e[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Ht[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qe||y.minFilter!==Or&&y.minFilter!==ci||y.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function re(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",D),C(y));let q=y.source,tt=u.get(q);tt===void 0&&(tt={},u.set(q,tt));let pt=j(y);if(pt!==b.__cacheKey){tt[pt]===void 0&&(tt[pt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,O=!0),tt[pt].usedTimes++;let gt=tt[b.__cacheKey];gt!==void 0&&(tt[b.__cacheKey].usedTimes--,gt.usedTimes===0&&G(y)),b.__cacheKey=pt,b.__webglTexture=tt[pt].texture}return O}function K(b,y,O){return Math.floor(Math.floor(b/O)/y)}function _t(b,y,O,q){let pt=b.updateRanges;if(pt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,O,q,y.data);else{pt.sort((L,J)=>L.start-J.start);let gt=0;for(let L=1;L<pt.length;L++){let J=pt[gt],$=pt[L],xt=J.start+J.count,dt=K($.start,y.width,4),mt=K(J.start,y.width,4);$.start<=xt+1&&dt===mt&&K($.start+$.count-1,y.width,4)===dt?J.count=Math.max(J.count,$.start+$.count-J.start):(++gt,pt[gt]=$)}pt.length=gt+1;let Q=e.getParameter(s.UNPACK_ROW_LENGTH),et=e.getParameter(s.UNPACK_SKIP_PIXELS),yt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let L=0,J=pt.length;L<J;L++){let $=pt[L],xt=Math.floor($.start/4),dt=Math.ceil($.count/4),mt=xt%y.width,Dt=Math.floor(xt/y.width),jt=dt,ht=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),e.pixelStorei(s.UNPACK_SKIP_ROWS,Dt),e.texSubImage2D(s.TEXTURE_2D,0,mt,Dt,jt,ht,O,q,y.data)}b.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Q),e.pixelStorei(s.UNPACK_SKIP_PIXELS,et),e.pixelStorei(s.UNPACK_SKIP_ROWS,yt)}}function ft(b,y,O){let q=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=s.TEXTURE_3D);let tt=re(b,y),pt=y.source;e.bindTexture(q,b.__webglTexture,s.TEXTURE0+O);let gt=n.get(pt);if(pt.version!==gt.__version||tt===!0){if(e.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let ht=de.getPrimaries(de.workingColorSpace),kt=y.colorSpace===hi?null:de.getPrimaries(y.colorSpace),Jt=y.colorSpace===hi||ht===kt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let et=M(y.image,!1,i.maxTextureSize);et=ct(y,et);let yt=r.convert(y.format,y.colorSpace),L=r.convert(y.type),J=w(y.internalFormat,yt,L,y.normalized,y.colorSpace,y.isVideoTexture);ie(q,y);let $,xt=y.mipmaps,dt=y.isVideoTexture!==!0,mt=gt.__version===void 0||tt===!0,Dt=pt.dataReady,jt=v(y,et);if(y.isDepthTexture)J=x(y.format===li,y.type),mt&&(dt?e.texStorage2D(s.TEXTURE_2D,1,J,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,J,et.width,et.height,0,yt,L,null));else if(y.isDataTexture)if(xt.length>0){dt&&mt&&e.texStorage2D(s.TEXTURE_2D,jt,J,xt[0].width,xt[0].height);for(let ht=0,kt=xt.length;ht<kt;ht++)$=xt[ht],dt?Dt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,$.width,$.height,yt,L,$.data):e.texImage2D(s.TEXTURE_2D,ht,J,$.width,$.height,0,yt,L,$.data);y.generateMipmaps=!1}else dt?(mt&&e.texStorage2D(s.TEXTURE_2D,jt,J,et.width,et.height),Dt&&_t(y,et,yt,L)):e.texImage2D(s.TEXTURE_2D,0,J,et.width,et.height,0,yt,L,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){dt&&mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,jt,J,xt[0].width,xt[0].height,et.depth);for(let ht=0,kt=xt.length;ht<kt;ht++)if($=xt[ht],y.format!==Fn)if(yt!==null)if(dt){if(Dt)if(y.layerUpdates.size>0){let Jt=Al($.width,$.height,y.format,y.type);for(let wt of y.layerUpdates){let me=$.data.subarray(wt*Jt/$.data.BYTES_PER_ELEMENT,(wt+1)*Jt/$.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,wt,$.width,$.height,1,yt,me)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,$.width,$.height,et.depth,yt,$.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,J,$.width,$.height,et.depth,0,$.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else dt?Dt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,$.width,$.height,et.depth,yt,L,$.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,J,$.width,$.height,et.depth,0,yt,L,$.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{dt&&mt&&e.texStorage2D(s.TEXTURE_2D,jt,J,xt[0].width,xt[0].height);for(let ht=0,kt=xt.length;ht<kt;ht++)$=xt[ht],y.format!==Fn?yt!==null?dt?Dt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,$.width,$.height,yt,$.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,J,$.width,$.height,0,$.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):dt?Dt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,$.width,$.height,yt,L,$.data):e.texImage2D(s.TEXTURE_2D,ht,J,$.width,$.height,0,yt,L,$.data)}else if(y.isDataArrayTexture)if(dt){if(mt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,jt,J,et.width,et.height,et.depth),Dt)if(y.layerUpdates.size>0){let ht=Al(et.width,et.height,y.format,y.type);for(let kt of y.layerUpdates){let Jt=et.data.subarray(kt*ht/et.data.BYTES_PER_ELEMENT,(kt+1)*ht/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,kt,et.width,et.height,1,yt,L,Jt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,yt,L,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,J,et.width,et.height,et.depth,0,yt,L,et.data);else if(y.isData3DTexture)dt?(mt&&e.texStorage3D(s.TEXTURE_3D,jt,J,et.width,et.height,et.depth),Dt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,yt,L,et.data)):e.texImage3D(s.TEXTURE_3D,0,J,et.width,et.height,et.depth,0,yt,L,et.data);else if(y.isFramebufferTexture){if(mt)if(dt)e.texStorage2D(s.TEXTURE_2D,jt,J,et.width,et.height);else{let ht=et.width,kt=et.height;for(let Jt=0;Jt<jt;Jt++)e.texImage2D(s.TEXTURE_2D,Jt,J,ht,kt,0,yt,L,null),ht>>=1,kt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let ht=s.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),et.parentNode!==ht){ht.appendChild(et),d.add(y),ht.onpaint=kt=>{let Jt=kt.changedElements;for(let wt of d)Jt.includes(wt.image)&&(wt.needsUpdate=!0)},ht.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,et);else{let Jt=s.RGBA,wt=s.RGBA,me=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Jt,wt,me,et)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(xt.length>0){if(dt&&mt){let ht=nt(xt[0]);e.texStorage2D(s.TEXTURE_2D,jt,J,ht.width,ht.height)}for(let ht=0,kt=xt.length;ht<kt;ht++)$=xt[ht],dt?Dt&&e.texSubImage2D(s.TEXTURE_2D,ht,0,0,yt,L,$):e.texImage2D(s.TEXTURE_2D,ht,J,yt,L,$);y.generateMipmaps=!1}else if(dt){if(mt){let ht=nt(et);e.texStorage2D(s.TEXTURE_2D,jt,J,ht.width,ht.height)}Dt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,L,et)}else e.texImage2D(s.TEXTURE_2D,0,J,yt,L,et);T(y)&&y.mipmapsAutoUpdate===!0&&S(q),gt.__version=pt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ct(b,y,O){if(y.image.length!==6)return;let q=re(b,y),tt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);let pt=n.get(tt);if(tt.version!==pt.__version||q===!0){e.activeTexture(s.TEXTURE0+O);let gt=de.getPrimaries(de.workingColorSpace),Q=y.colorSpace===hi?null:de.getPrimaries(y.colorSpace),et=y.colorSpace===hi||gt===Q?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let yt=y.isCompressedTexture||y.image[0].isCompressedTexture,L=y.image[0]&&y.image[0].isDataTexture,J=[];for(let wt=0;wt<6;wt++)!yt&&!L?J[wt]=M(y.image[wt],!0,i.maxCubemapSize):J[wt]=L?y.image[wt].image:y.image[wt],J[wt]=ct(y,J[wt]);let $=J[0],xt=r.convert(y.format,y.colorSpace),dt=r.convert(y.type),mt=w(y.internalFormat,xt,dt,y.normalized,y.colorSpace),Dt=y.isVideoTexture!==!0,jt=pt.__version===void 0||q===!0,ht=tt.dataReady,kt=v(y,$);ie(s.TEXTURE_CUBE_MAP,y);let Jt;if(y.isDepthTexture){if(mt=x(y.format===li,y.type),jt)if(Dt)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,mt,$.width,$.height);else for(let wt=0;wt<6;wt++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,mt,$.width,$.height,0,xt,dt,null)}else if(yt){Dt&&jt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,mt,$.width,$.height);for(let wt=0;wt<6;wt++){Jt=J[wt].mipmaps;for(let me=0;me<Jt.length;me++){let Fe=Jt[me];y.format!==Fn?xt!==null?Dt?ht&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,0,0,Fe.width,Fe.height,xt,Fe.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,mt,Fe.width,Fe.height,0,Fe.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,0,0,Fe.width,Fe.height,xt,dt,Fe.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me,mt,Fe.width,Fe.height,0,xt,dt,Fe.data)}}}else{if(Jt=y.mipmaps,Dt&&jt){Jt.length>0&&kt++;let wt=nt(J[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,mt,wt.width,wt.height)}for(let wt=0;wt<6;wt++)if(L){Dt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,J[wt].width,J[wt].height,xt,dt,J[wt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,mt,J[wt].width,J[wt].height,0,xt,dt,J[wt].data);for(let me=0;me<Jt.length;me++){let Bn=Jt[me].image[wt].image;Dt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,0,0,Bn.width,Bn.height,xt,dt,Bn.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,mt,Bn.width,Bn.height,0,xt,dt,Bn.data)}}else{Dt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,xt,dt,J[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,mt,xt,dt,J[wt]);for(let me=0;me<Jt.length;me++){let Fe=Jt[me];Dt?ht&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,0,0,xt,dt,Fe.image[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,me+1,mt,xt,dt,Fe.image[wt])}}}T(y)&&y.mipmapsAutoUpdate===!0&&S(s.TEXTURE_CUBE_MAP),pt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Mt(b,y,O,q,tt,pt){let gt=r.convert(O.format,O.colorSpace),Q=r.convert(O.type),et=w(O.internalFormat,gt,Q,O.normalized,O.colorSpace),yt=n.get(y),L=n.get(O);if(L.__renderTarget=y,!yt.__hasExternalTextures){let J=Math.max(1,y.width>>pt),$=Math.max(1,y.height>>pt);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,pt,et,J,$,y.depth,0,gt,Q,null):e.texImage2D(tt,pt,et,J,$,0,gt,Q,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),z(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,tt,L.__webglTexture,0,rt(y)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,tt,L.__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(b,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){let q=y.depthTexture,tt=q&&q.isDepthTexture?q.type:null,pt=x(y.stencilBuffer,tt),gt=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;z(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(y),pt,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(y),pt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pt,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,gt,s.RENDERBUFFER,b)}else{let q=y.textures;for(let tt=0;tt<q.length;tt++){let pt=q[tt],gt=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),et=w(pt.internalFormat,gt,Q,pt.normalized,pt.colorSpace);z(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt(y),et,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,rt(y),et,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,et,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ot(b,y,O){let q=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=n.get(y.depthTexture);tt.__renderTarget=y;let pt=q?y.depthTexture.image[0]:y.depthTexture.image;(!tt.__webglTexture||pt.width!==y.width||pt.height!==y.height)&&(pt.width=y.width,pt.height=y.height,y.depthTexture.needsUpdate=!0),q?Tt(y.depthTexture,0):Et(y.depthTexture,0);let gt=tt.__webglTexture,Q=rt(y),et=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,yt=y.depthTexture.format===li?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===si)z(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,et,gt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,yt,et,gt,0);else if(y.depthTexture.format===li)z(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,et,gt,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,yt,et,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(b){let y=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){let q=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){let tt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",tt)};q.addEventListener("dispose",tt),y.__depthDisposeCallback=tt}y.__boundDepthTexture=q}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let q=0;q<6;q++)Ot(y.__webglFramebuffer[q],b,q);else b.texture.mipmaps.length>0?Ot(y.__webglFramebuffer[0],b,0):Ot(y.__webglFramebuffer,b,0);else if(O){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=s.createRenderbuffer(),Xt(y.__webglDepthbuffer[q],b,!1);else{let tt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,pt)}}else if(b.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Xt(y.__webglDepthbuffer,b,!1);else{let tt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,pt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function se(b,y,O){let q=n.get(b);y!==void 0&&Mt(q.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ae(b)}function fe(b){let y=b.texture,O=n.get(b),q=n.get(y);b.addEventListener("dispose",F),C(b);let tt=b.textures,pt=b.isWebGLCubeRenderTarget===!0,gt=tt.length>1;if(gt||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=y.version,a.memory.textures++),pt){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let et=0;et<y.mipmaps.length;et++)O.__webglFramebuffer[Q][et]=s.createFramebuffer()}else O.__webglFramebuffer[Q]=s.createFramebuffer()}else{if(y.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)O.__webglFramebuffer[Q]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(gt)for(let Q=0,et=tt.length;Q<et;Q++){let yt=n.get(tt[Q]);yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture(),a.memory.textures++)}if(b.samples>0&&z(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<tt.length;Q++){let et=tt[Q];O.__webglColorRenderbuffer[Q]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);let yt=r.convert(et.format,et.colorSpace),L=r.convert(et.type),J=w(et.internalFormat,yt,L,et.normalized,et.colorSpace,b.isXRRenderTarget===!0),$=rt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,$,J,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),ie(s.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)Mt(O.__webglFramebuffer[Q][et],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et);else Mt(O.__webglFramebuffer[Q],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);T(y)?S(s.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(gt){for(let Q=0,et=tt.length;Q<et;Q++){let yt=tt[Q],L=n.get(yt),J=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(J,L.__webglTexture),ie(J,yt),Mt(O.__webglFramebuffer,b,yt,s.COLOR_ATTACHMENT0+Q,J,0),T(yt)&&S(J)}e.unbindTexture()}else{let Q=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Q=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Q,q.__webglTexture),ie(Q,y),y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)Mt(O.__webglFramebuffer[et],b,y,s.COLOR_ATTACHMENT0,Q,et);else Mt(O.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,Q,0);T(y)?S(Q):y.mipmaps.length>0&&s.texParameteri(Q,s.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}b.depthBuffer&&ae(b)}function U(b){let y=b.textures;for(let O=0,q=y.length;O<q;O++){let tt=y[O];if(T(tt)&&tt.mipmapsAutoUpdate===!0){let pt=A(b),gt=n.get(tt).__webglTexture;e.bindTexture(pt,gt),S(pt),e.unbindTexture()}}}let it=[];function Z(b){if(b.samples>0){if(z(b)===!1){let y=b.textures,O=b.width,q=b.height,tt=s.COLOR_BUFFER_BIT,pt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=n.get(b),Q=y.length>1;if(Q)for(let yt=0;yt<y.length;yt++)e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let yt=0;yt<y.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),Q){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let L=n.get(y[yt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,O,q,0,0,O,q,tt,s.NEAREST),c===!0&&(it.length=0,it.push(s.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&it.push(pt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Q)for(let yt=0;yt<y.length;yt++){e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.RENDERBUFFER,gt.__webglColorRenderbuffer[yt]);let L=n.get(y[yt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,gt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+yt,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function rt(b){return Math.min(i.maxSamples,b.samples)}function z(b){let y=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function lt(b){let y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function ct(b,y){let O=b.colorSpace,q=b.format,tt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==er&&O!==hi&&(de.getTransfer(O)===xe?(q!==Fn||tt!==un)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",O)),y}function nt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=zt,this.resetTextureUnits=st,this.getTextureUnits=at,this.setTextureUnits=Pt,this.setTexture2D=Et,this.setTexture2DArray=It,this.setTexture3D=Gt,this.setTextureCube=Tt,this.rebindTextures=se,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=z,this.dispose=H}function Ax(s,t){function e(n,i=hi){let r,a=de.getTransfer(i);if(n===un)return s.UNSIGNED_BYTE;if(n===go)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===ml)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===dl)return s.BYTE;if(n===fl)return s.SHORT;if(n===Os)return s.UNSIGNED_SHORT;if(n===mo)return s.INT;if(n===Nn)return s.UNSIGNED_INT;if(n===Tn)return s.FLOAT;if(n===Un)return s.HALF_FLOAT;if(n===gl)return s.ALPHA;if(n===xl)return s.RGB;if(n===Fn)return s.RGBA;if(n===si)return s.DEPTH_COMPONENT;if(n===li)return s.DEPTH_STENCIL;if(n===_o)return s.RED;if(n===yo)return s.RED_INTEGER;if(n===Pi)return s.RG;if(n===vo)return s.RG_INTEGER;if(n===Mo)return s.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Hr)if(a===xe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===So||n===bo||n===Eo||n===To)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===So)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wo||n===Ao||n===Ro||n===Co||n===Io||n===Gr||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wo||n===Ao)return a===xe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Co)return r.COMPRESSED_R11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===Po)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Ho||n===Go||n===Vo||n===Wo||n===Xo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===No)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Oo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ho)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Go)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xo)return a===xe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===Yo||n===Zo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qo)return a===xe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jo||n===$o||n===Vr||n===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Jo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===$o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Rx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _r(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:Rx,fragmentShader:Cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new xn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends Hn{constructor(t,e){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,u=null,p=null,_=typeof XRWebGLBinding<"u",m=new Hl,g={},M=e.getContextAttributes(),T=null,S=null,A=[],w=[],x=new ut,v=null,C=null,R=new Je;R.viewport=new Ae;let D=new Je;D.viewport=new Ae;let F=[R,D],V=new lo,P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let Et=A[j];return Et===void 0&&(Et=new Es,A[j]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(j){let Et=A[j];return Et===void 0&&(Et=new Es,A[j]=Et),Et.getGripSpace()},this.getHand=function(j){let Et=A[j];return Et===void 0&&(Et=new Es,A[j]=Et),Et.getHandSpace()};function Y(j){let Et=w.indexOf(j.inputSource);if(Et===-1)return;let It=A[Et];It!==void 0&&(It.update(j.inputSource,j.frame,l||a),It.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",G),i.removeEventListener("inputsourceschange",ot);for(let j=0;j<A.length;j++){let Et=w[j];Et!==null&&(w[j]=null,A[j].disconnect(Et))}P=null,H=null,m.reset();for(let j in g)delete g[j];if(t.setRenderTarget(T),u=null,f=null,d=null,i=null,S=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(x.width,x.height,!1),C!==null){let j=C.camera;j.fov=C.fov,j.zoom=C.zoom,j.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",G),i.addEventListener("inputsourceschange",ot),M.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let It=null,Gt=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,It=M.stencil?li:si,Gt=M.stencil?Ki:Nn);let Vt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new pn(f.textureWidth,f.textureHeight,{format:Fn,type:un,depthTexture:new oi(f.textureWidth,f.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,It),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let It={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,It),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new pn(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(j){for(let Et=0;Et<j.removed.length;Et++){let It=j.removed[Et],Gt=w.indexOf(It);Gt>=0&&(w[Gt]=null,A[Gt].disconnect(It))}for(let Et=0;Et<j.added.length;Et++){let It=j.added[Et],Gt=w.indexOf(It);if(Gt===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=w.length){w.push(It),Gt=Vt;break}else if(w[Vt]===null){w[Vt]=It,Gt=Vt;break}if(Gt===-1)break}let Tt=A[Gt];Tt&&Tt.connect(It)}}function X(j,Et){Et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(Et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let Et=j.near,It=j.far;m.texture!==null&&(m.depthNear>0&&(Et=m.depthNear),m.depthFar>0&&(It=m.depthFar)),V.near=D.near=R.near=Et,V.far=D.far=R.far=It,(P!==V.near||H!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),P=V.near,H=V.far),V.layers.mask=j.layers.mask|6,R.layers.mask=V.layers.mask&-5,D.layers.mask=V.layers.mask&-3;let Gt=j.parent,Tt=V.cameras;X(V,Gt);for(let Vt=0;Vt<Tt.length;Vt++)X(Tt[Vt],Gt);V.projectionMatrix.copy(R.projectionMatrix),V.projectionMatrixInverse.copy(R.projectionMatrixInverse),C===null&&j.isPerspectiveCamera&&(C={camera:j,fov:j.fov,zoom:j.zoom}),st(j,V,Gt)};function st(j,Et,It){It===null?j.matrix.copy(Et.matrixWorld):(j.matrix.copy(It.matrixWorld),j.matrix.invert(),j.matrix.multiply(Et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(Et.projectionMatrix),j.projectionMatrixInverse.copy(Et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=rr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&u===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(j){return g[j]};let at=null;function Pt(j,Et){if(h=Et.getViewerPose(l||a),p=Et,h!==null){let It=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let Gt=!1;It.length!==V.cameras.length&&(V.cameras.length=0,Gt=!0);for(let Ht=0;Ht<It.length;Ht++){let ie=It[Ht],re=null;if(u!==null)re=u.getViewport(ie);else{let _t=d.getViewSubImage(f,ie);re=_t.viewport,Ht===0&&(t.setRenderTargetTextures(S,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(S))}let K=F[Ht];K===void 0&&(K=new Je,K.layers.enable(Ht),K.viewport=new Ae,F[Ht]=K),K.matrix.fromArray(ie.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(ie.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(re.x,re.y,re.width,re.height),Ht===0&&(V.matrix.copy(K.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Gt===!0&&V.cameras.push(K)}let Tt=i.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let Ht=d.getDepthInformation(It[0]);Ht&&Ht.isValid&&Ht.texture&&m.init(Ht,i.renderState)}if(Tt&&Tt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let Ht=0;Ht<It.length;Ht++){let ie=It[Ht].camera;if(ie){let re=g[ie];re||(re=new _r,g[ie]=re);let K=d.getCameraImage(ie);re.sourceTexture=K}}}}for(let It=0;It<A.length;It++){let Gt=w[It],Tt=A[It];Gt!==null&&Tt!==void 0&&Tt.update(Gt,Et,l||a)}at&&at(j,Et),Et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Et}),p=null}let zt=new Qu;zt.setAnimationLoop(Pt),this.setAnimationLoop=function(j){at=j},this.dispose=function(){}}},Ix=new ne,cd=new $t;cd.set(-1,0,0,0,1,0,0,0,1);function Px(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,El(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,T,S){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&u(m,g,S)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,M,T):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===$e&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===$e&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),T=M.envMap,S=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cd),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,M,T){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=T*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,e(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===$e&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Lx(s,t,e,n){let i={},r={};function a(M,T){let S=T.program;n.uniformBlockBinding(M,S,i[M.id])}function o(M,T){let S=i[M.id];S===void 0&&(p(M),S=c(M),i[M.id]=S,M.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(M,A);let w=t.render.frame;r[M.id]!==w&&(l(M),r[M.id]=w)}function c(M){let T=s.createBuffer(),S=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,S,A),s.bindBuffer(s.UNIFORM_BUFFER,null),T}function l(M){let T=i[M.id],S=M.uniforms,A=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let w=0,x=S.length;w<x;w++){let v=S[w];if(Array.isArray(v))for(let C=0,R=v.length;C<R;C++)h(v[C],w,C,A);else h(v,w,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(M,T,S,A){if(f(M,T,S,A)===!0){let w=M.__offset,x=M.value;if(Array.isArray(x)){let v=0;for(let C=0;C<x.length;C++){let R=x[C],D=_(R,!0);d(R,M.__data,v),v+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,M.__data)}}function d(M,T,S){typeof M=="number"||typeof M=="boolean"?T[S]=M:M.isMatrix3?(T[S]=M.elements[0],T[S+1]=M.elements[1],T[S+2]=M.elements[2],T[S+3]=0,T[S+4]=M.elements[3],T[S+5]=M.elements[4],T[S+6]=M.elements[5],T[S+7]=0,T[S+8]=M.elements[6],T[S+9]=M.elements[7],T[S+10]=M.elements[8],T[S+11]=0):ArrayBuffer.isView(M)?T.set(M.subarray(0,T.length-S),S):M.toArray(T,S)}function f(M,T,S,A){let w=M.value,x=T+"_"+S;if(Array.isArray(w)){A[x]===void 0&&(A[x]=[]);let v=A[x],C=!1;for(let R=0;R<w.length;R++)u(w[R],v,R)===!0&&(C=!0);return C}return u(w,A,x)}function u(M,T,S){if(T[S]===void 0)return typeof M=="number"||typeof M=="boolean"?T[S]=M:ArrayBuffer.isView(M)?T[S]=M.slice():T[S]=M.clone(),!0;{let A=T[S];if(typeof M=="number"||typeof M=="boolean"){if(A!==M)return T[S]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(A.equals(M)===!1)return A.copy(M),!0}}return!1}function p(M){let T=M.uniforms,S=0,A=16;for(let x=0,v=T.length;x<v;x++){let C=Array.isArray(T[x])?T[x]:[T[x]];for(let R=0,D=C.length;R<D;R++){let F=C[R],V=Array.isArray(F.value)?F.value:[F.value],P=Array.isArray(T[x])||Array.isArray(F.value),H=S;for(let G=0,ot=V.length;G<ot;G++){let X=V[G],st=_(X,P),at=S%A,Pt=at%st.boundary,zt=at+Pt;S+=Pt,zt!==0&&A-zt<st.storage&&(S+=A-zt),G===0&&(H=S),S+=st.storage}let Y=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new Y((S-H)/Float32Array.BYTES_PER_ELEMENT),F.__offset=H}}let w=S%A;return w>0&&(S+=A-w),M.__size=S,M.__cache={},this}function _(M,T){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=16,S.storage=48):M.isMatrix4?(S.boundary=16,S.storage=64):M.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(S.boundary=16,S.storage=M.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",M),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(M){let T=M.target;T.removeEventListener("dispose",m),s.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function g(){for(let M in i)s.deleteBuffer(i[M]);i={},r={}}return{bind:a,update:o,dispose:g}}var Dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Yn=null;function Nx(){return Yn===null&&(Yn=new fr(Dx,16,16,Pi,Un),Yn.name="DFG_LUT",Yn.minFilter=on,Yn.magFilter=on,Yn.wrapS=kn,Yn.wrapT=kn,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}var nc=class{constructor(t={}){let{canvas:e=mu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=un}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=u,m=new Set([Mo,vo,yo]),g=new Set([un,Nn,Os,Ki,go,xo]),M=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,w=null,x=[],v=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,D=!1,F=null,V=null,P=null,H=null;this._outputColorSpace=De;let Y=0,G=0,ot=null,X=-1,st=null,at=new Ae,Pt=new Ae,zt=null,j=new Zt(0),Et=0,It=e.width,Gt=e.height,Tt=1,Vt=null,_e=null,Ht=new Ae(0,0,It,Gt),ie=new Ae(0,0,It,Gt),re=!1,K=new Ei,_t=new Ga,ft=!1,Ct=!1,Mt=new ne,Xt=new I,Ot=new Ae,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},se=!1;function fe(){return ot===null?Tt:1}let U=n;function it(E,N){return e.getContext(E,N)}let Z,rt,z,lt,ct,nt,b,y,O,q,tt,pt,gt,Q,et,yt,L,J,$,xt,dt,mt,Dt;try{let E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),U===null){let N="webgl2";if(U=it(N,E),U===null)throw it(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}jt()}catch(E){throw e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Yt("WebGLRenderer: "+E.message),E}function jt(){Z=new X0(U),Z.init(),dt=new Ax(U,Z),rt=new N0(U,Z,t,dt),z=new Tx(U,Z),rt.reversedDepthBuffer&&f&&z.buffers.depth.setReversed(!0),V=U.createFramebuffer(),P=U.createFramebuffer(),H=U.createFramebuffer(),lt=new Z0(U),ct=new ux,nt=new wx(U,Z,z,ct,rt,dt,lt),b=new W0(R),y=new $f(U),mt=new L0(U,y),O=new q0(U,y,lt,mt),q=new $0(U,O,y,mt,lt),J=new J0(U,rt,nt),et=new U0(ct),tt=new hx(R,b,Z,rt,mt,et),pt=new Px(R,ct),gt=new fx,Q=new yx(Z),L=new P0(R,b,z,q,p,c),yt=new Ex(R,q,rt),Dt=new Lx(U,lt,rt,z),$=new D0(U,Z,lt),xt=new Y0(U,Z,lt),lt.programs=tt.programs,R.capabilities=rt,R.extensions=Z,R.properties=ct,R.renderLists=gt,R.shadowMap=yt,R.state=z,R.info=lt}_!==un&&(C=new Q0(_,e.width,e.height,o,i,r));let ht=new Gl(R,U);this.xr=ht,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let E=Z.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=Z.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Tt},this.setPixelRatio=function(E){E!==void 0&&(Tt=E,this.setSize(It,Gt,!1))},this.getSize=function(E){return E.set(It,Gt)},this.setSize=function(E,N,W=!0){if(ht.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}It=E,Gt=N,e.width=Math.floor(E*Tt),e.height=Math.floor(N*Tt),W===!0&&(e.style.width=E+"px",e.style.height=N+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(It*Tt,Gt*Tt).floor()},this.setDrawingBufferSize=function(E,N,W){It=E,Gt=N,Tt=W,e.width=Math.floor(E*W),e.height=Math.floor(N*W),this.setViewport(0,0,E,N)},this.setEffects=function(E){if(_===un){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let N=0;N<E.length;N++)if(E[N].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(at)},this.getViewport=function(E){return E.copy(Ht)},this.setViewport=function(E,N,W,B){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,N,W,B),z.viewport(at.copy(Ht).multiplyScalar(fe()).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,N,W,B){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,N,W,B),z.scissor(Pt.copy(ie).multiplyScalar(fe()).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){z.setScissorTest(re=E)},this.setOpaqueSort=function(E){Vt=E},this.setTransparentSort=function(E){_e=E},this.getClearColor=function(E){return E.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,W=!0){let B=0;if(E){let k=!1;if(ot!==null){let St=ot.texture.format;k=m.has(St)}if(k){let St=ot.texture.type,Nt=g.has(St),vt=L.getClearColor(),Rt=L.getClearAlpha(),Bt=vt.r,te=vt.g,he=vt.b;Nt?(M[0]=Bt,M[1]=te,M[2]=he,M[3]=Rt,U.clearBufferuiv(U.COLOR,0,M)):(T[0]=Bt,T[1]=te,T[2]=he,T[3]=Rt,U.clearBufferiv(U.COLOR,0,T))}else B|=U.COLOR_BUFFER_BIT}N&&(B|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),F=E},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),L.dispose(),gt.dispose(),Q.dispose(),nt.dispose(),ct.dispose(),b.dispose(),q.dispose(),O.dispose(),mt.dispose(),Dt.dispose(),tt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ce),ht.removeEventListener("sessionend",Le),Oe.stop()};function kt(E){E.preventDefault(),sr("WebGLRenderer: Context Lost."),D=!0}function Jt(){sr("WebGLRenderer: Context Restored."),D=!1;let E=lt.autoReset,N=yt.enabled,W=yt.autoUpdate,B=yt.needsUpdate,k=yt.type;jt(),lt.autoReset=E,yt.enabled=N,yt.autoUpdate=W,yt.needsUpdate=B,yt.type=k}function wt(E){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function me(E){let N=E.target;N.removeEventListener("dispose",me),Fe(N)}function Fe(E){Bn(E),ct.remove(E)}function Bn(E){let N=ct.get(E).programs;N!==void 0&&(N.forEach(function(W){tt.releaseProgram(W)}),E.isShaderMaterial&&tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,W,B,k,St){N===null&&(N=ae);let Nt=k.isMesh&&k.matrixWorld.determinantAffine()<0,vt=Dd(E,N,W,B,k);z.setMaterial(B,Nt);let Rt=W.index,Bt=1;if(B.wireframe===!0){if(Rt=O.getWireframeAttribute(W),Rt===void 0)return;Bt=2}let te=W.drawRange,he=W.attributes.position,Ut=te.start*Bt,ue=(te.start+te.count)*Bt;St!==null&&(Ut=Math.max(Ut,St.start*Bt),ue=Math.min(ue,(St.start+St.count)*Bt)),Rt!==null?(Ut=Math.max(Ut,0),ue=Math.min(ue,Rt.count)):he!=null&&(Ut=Math.max(Ut,0),ue=Math.min(ue,he.count));let Be=ue-Ut;if(Be<0||Be===1/0)return;mt.setup(k,B,vt,W,Rt);let Ee,Se=$;if(Rt!==null&&(Ee=y.get(Rt),Se=xt,Se.setIndex(Ee)),k.isMesh)B.wireframe===!0?(z.setLineWidth(B.wireframeLinewidth*fe()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(k.isLine){let Qe=B.linewidth;Qe===void 0&&(Qe=1),z.setLineWidth(Qe*fe()),k.isLineSegments?Se.setMode(U.LINES):k.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else k.isPoints?Se.setMode(U.POINTS):k.isSprite&&Se.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(Z.get("WEBGL_multi_draw"))Se.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Qe=k._multiDrawStarts,Ft=k._multiDrawCounts,rn=k._multiDrawCount,ge=Rt?y.get(Rt).bytesPerElement:1,Fi=ct.get(B).currentProgram.getUniforms();for(let je=0;je<rn;je++)Fi.setValue(U,"_gl_DrawID",je),Se.render(Qe[je]/ge,Ft[je])}else if(k.isInstancedMesh)Se.renderInstances(Ut,Be,k.count);else if(W.isInstancedBufferGeometry){let Qe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ft=Math.min(W.instanceCount,Qe);Se.renderInstances(Ut,Be,Ft)}else Se.render(Ut,Be)};function ye(E,N,W,B){F!==null&&E.isNodeMaterial&&F.setObject(B,E),ft===!0&&et.setState(E,W,!1),E.transparent===!0&&E.side===ln&&E.forceSinglePass===!1?(E.side=$e,E.needsUpdate=!0,Ui(E,N,B),E.side=Ci,E.needsUpdate=!0,Ui(E,N,B),E.side=ln):Ui(E,N,B)}this.compile=function(E,N,W=null){W===null&&(W=E),F!==null&&F.renderStart(E,N,W),w=Q.get(W),w.init(N),v.push(w),W.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(w.pushLight(k),k.castShadow&&w.pushShadow(k))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Ct=this.localClippingEnabled,ft=et.init(this.clippingPlanes,Ct),ft===!0&&et.setGlobalState(this.clippingPlanes,N),F!==null&&yt.render(w.state.shadowsArray,W,N);let B=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let St=k.material;if(St)if(Array.isArray(St))for(let Nt=0;Nt<St.length;Nt++){let vt=St[Nt];ye(vt,W,N,k),B.add(vt)}else ye(St,W,N,k),B.add(St)}),w=v.pop(),F!==null&&F.renderEnd(),B},this.compileAsync=function(E,N,W=null){let B=this.compile(E,N,W);return new Promise(k=>{function St(){if(B.forEach(function(Nt){let Rt=ct.get(Nt).currentProgram;(Rt===void 0||Rt.isReady())&&B.delete(Nt)}),B.size===0){k(E);return}setTimeout(St,10)}Z.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let we=null;function Ke(E){we&&we(E)}function Ce(){Oe.stop()}function Le(){Oe.start()}let Oe=new Qu;Oe.setAnimationLoop(Ke),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(E){we=E,ht.setAnimationLoop(E),E===null?Oe.stop():Oe.start()},ht.addEventListener("sessionstart",Ce),ht.addEventListener("sessionend",Le),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;F!==null&&F.renderStart(E,N);let W=ht.enabled===!0&&ht.isPresenting===!0,B=C!==null&&(ot===null||W)&&C.begin(R,ot);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(N),N=ht.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,N,ot),w=Q.get(E,v.length),w.init(N),w.state.textureUnits=nt.getTextureUnits(),v.push(w),Mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),N.isArrayCamera?_t.setFromArrayCamera(N):K.setFromProjectionMatrix(Mt,Mn,N.reversedDepth),Ct=this.localClippingEnabled,ft=et.init(this.clippingPlanes,Ct),A=gt.get(E,x.length),A.init(),x.push(A),this.info.render.frame++,ht.enabled===!0&&ht.isPresenting===!0){let Nt=R.xr.getDepthSensingMesh();Nt!==null&&mi(Nt,N,-1/0,R.sortObjects)}mi(E,N,0,R.sortObjects),A.finish(),F!==null&&F.updateLights(w.state.lightsArray),R.sortObjects===!0&&A.sort(Vt,_e),se=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,se&&L.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),ft===!0&&et.beginShadows();let k=w.state.shadowsArray;if(yt.render(k,E,N),ft===!0&&et.endShadows(),(B&&C.hasRenderPass())===!1){let Nt=A.opaque,vt=A.transmissive;if(w.setupLights(),N.isArrayCamera){let Rt=N.cameras;if(vt.length>0)for(let Bt=0,te=Rt.length;Bt<te;Bt++){let he=Rt[Bt];gi(Nt,vt,E,he)}se&&L.render(E);for(let Bt=0,te=Rt.length;Bt<te;Bt++){let he=Rt[Bt];Jn(A,E,he,he.viewport)}}else vt.length>0&&gi(Nt,vt,E,N),se&&L.render(E),Jn(A,E,N)}ot!==null&&G===0&&(nt.updateMultisampleRenderTarget(ot),nt.updateRenderTargetMipmap(ot)),B&&C.end(R),E.isScene===!0&&E.onAfterRender(R,E,N),mt.resetDefaultState(),X=-1,st=null,v.pop(),v.length>0?(w=v[v.length-1],nt.setTextureUnits(w.state.textureUnits),ft===!0&&et.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,F!==null&&F.renderEnd()};function mi(E,N,W,B){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){let Nt=N.isArrayCamera?_t:K;if(!E.frustumCulled||E.intersectsFrustum(Nt)){B&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Mt);let vt=q.update(E),Rt=E.material;Rt.visible&&A.push(E,vt,Rt,W,Ot.z,null,N)}}else if(E.isMesh||E.isLine||E.isPoints){let Nt=N.isArrayCamera?_t:K;if(!E.frustumCulled||E.intersectsFrustum(Nt)){let vt=q.update(E),Rt=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ot.copy(vt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Mt)),Array.isArray(Rt)){let Bt=vt.groups;for(let te=0,he=Bt.length;te<he;te++){let Ut=Bt[te],ue=Rt[Ut.materialIndex];ue&&ue.visible&&A.push(E,vt,ue,W,Ot.z,Ut,N)}}else Rt.visible&&A.push(E,vt,Rt,W,Ot.z,null,N)}}}let St=E.children;for(let Nt=0,vt=St.length;Nt<vt;Nt++)mi(St[Nt],N,W,B)}function Jn(E,N,W,B){let{opaque:k,transmissive:St,transparent:Nt}=E;w.setupLightsView(W),ft===!0&&et.setGlobalState(R.clippingPlanes,W),B&&z.viewport(at.copy(B)),k.length>0&&xi(k,N,W),St.length>0&&xi(St,N,W),Nt.length>0&&xi(Nt,N,W),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function gi(E,N,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[B.id]===void 0){let Ut=Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[B.id]=new pn(1,1,{generateMipmaps:!0,type:Ut?Un:un,minFilter:ci,samples:Math.max(4,rt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:de.workingColorSpace})}let St=w.state.transmissionRenderTarget[B.id],Nt=B.viewport||at;St.setSize(Nt.z*R.transmissionResolutionScale,Nt.w*R.transmissionResolutionScale);let vt=R.getRenderTarget(),Rt=R.getActiveCubeFace(),Bt=R.getActiveMipmapLevel();R.setRenderTarget(St),R.getClearColor(j),Et=R.getClearAlpha(),Et<1&&R.setClearColor(16777215,.5),R.clear(),se&&L.render(W);let te=R.toneMapping;R.toneMapping=qn;let he=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),w.setupLightsView(B),ft===!0&&et.setGlobalState(R.clippingPlanes,B),xi(E,W,B),nt.updateMultisampleRenderTarget(St),nt.updateRenderTargetMipmap(St),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let ue=0,Be=N.length;ue<Be;ue++){let Ee=N[ue],{object:Se,geometry:Qe,material:Ft,group:rn}=Ee;if(Ft.side===ln&&Se.layers.test(B.layers)){let ge=Ft.side;Ft.side=$e,Ft.needsUpdate=!0,ji(Se,W,B,Qe,Ft,rn),Ft.side=ge,Ft.needsUpdate=!0,Ut=!0}}Ut===!0&&(nt.updateMultisampleRenderTarget(St),nt.updateRenderTargetMipmap(St))}R.setRenderTarget(vt,Rt,Bt),R.setClearColor(j,Et),he!==void 0&&(B.viewport=he),R.toneMapping=te}function xi(E,N,W){let B=N.isScene===!0?N.overrideMaterial:null;for(let k=0,St=E.length;k<St;k++){let Nt=E[k],{object:vt,geometry:Rt,group:Bt}=Nt,te=Nt.material;te.allowOverride===!0&&B!==null&&(te=B),vt.layers.test(W.layers)&&ji(vt,N,W,Rt,te,Bt)}}function ji(E,N,W,B,k,St){F!==null&&k.isNodeMaterial&&F.setObject(E,k),E.onBeforeRender(R,N,W,B,k,St),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(R,N,W,B,E,St),k.transparent===!0&&k.side===ln&&k.forceSinglePass===!1?(k.side=$e,k.needsUpdate=!0,R.renderBufferDirect(W,N,B,k,E,St),k.side=Ci,k.needsUpdate=!0,R.renderBufferDirect(W,N,B,k,E,St),k.side=ln):R.renderBufferDirect(W,N,B,k,E,St),E.onAfterRender(R,N,W,B,k,St)}function Qr(E){let N=0;for(let W of E)W.texture!==null&&N++;return N}function Ui(E,N,W){N.isScene!==!0&&(N=ae);let B=ct.get(E),k=w.state.lights,St=w.state.shadowsArray,Nt=k.state.version,vt=tt.getParameters(E,k.state,St,N,W,w.state.lightProbeGridArray),Rt=tt.getProgramCacheKey(vt),Bt=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let te=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=b.get(E.envMap||B.environment,te),B.envMapRotation=B.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",me),Bt=new Map,B.programs=Bt,B.programVariants=new Map);let he=Bt.get(Rt);if(he!==void 0){if(B.currentProgram===he&&B.lightsStateVersion===Nt)return Ql(E,vt),he}else vt.uniforms=tt.getUniforms(E),F!==null&&E.isNodeMaterial&&F.build(E,W,vt),E.onBeforeCompile(vt,R),he=tt.acquireProgram(vt,Rt),Bt.set(Rt,he),B.uniforms=vt.uniforms;let Ut=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=et.uniform),Ql(E,vt),B.needsLights=Ud(E),B.lightsStateVersion=Nt,B.needsLights&&(Ut.ambientLightColor.value=k.state.ambient,Ut.lightProbe.value=k.state.probe,Ut.sunLights.value=k.state.sun,Ut.sunLightShadows.value=k.state.sunShadow,Ut.directionalLights.value=k.state.directional,Ut.directionalLightShadows.value=k.state.directionalShadow,Ut.spotLights.value=k.state.spot,Ut.spotLightShadows.value=k.state.spotShadow,Ut.rectAreaLights.value=k.state.rectArea,Ut.ltc_1.value=k.state.rectAreaLTC1,Ut.ltc_2.value=k.state.rectAreaLTC2,Ut.pointLights.value=k.state.point,Ut.pointLightShadows.value=k.state.pointShadow,Ut.hemisphereLights.value=k.state.hemi,Ut.sunShadowMatrix.value=k.state.sunShadowMatrix,Ut.sunShadowCascade.value=k.state.sunShadowCascade,Ut.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ut.spotLightMatrix.value=k.state.spotLightMatrix,Ut.spotLightMap.value=k.state.spotLightMap,Ut.pointShadowMatrix.value=k.state.pointShadowMatrix),B.numLightProbeGrids=Qr(w.state.lightProbeGridArray),B.currentProgram=he,B.uniformsList=null,he}function dc(E,N,W,B,k){let St=ct.get(E),Nt=St.currentProgram.id+","+B+","+k,vt=St.programVariants.get(Nt);return vt===void 0?(vt=Ui(E,N,W),St.programVariants.set(Nt,vt)):(St.currentProgram=vt,St.uniformsList=null,St.outputColorSpace=B,St.toneMapping=k),vt}function Kl(E){if(E.uniformsList===null){let N=E.currentProgram.getUniforms();E.uniformsList=Bs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ql(E,N){let W=ct.get(E);W.outputColorSpace=N.outputColorSpace,W.batching=N.batching,W.batchingColor=N.batchingColor,W.instancing=N.instancing,W.instancingColor=N.instancingColor,W.instancingMorph=N.instancingMorph,W.skinning=N.skinning,W.morphTargets=N.morphTargets,W.morphNormals=N.morphNormals,W.morphColors=N.morphColors,W.morphTargetsCount=N.morphTargetsCount,W.numClippingPlanes=N.numClippingPlanes,W.numIntersection=N.numClipIntersection,W.vertexAlphas=N.vertexAlphas,W.vertexTangents=N.vertexTangents,W.toneMapping=N.toneMapping}function Dd(E,N,W,B,k){N.isScene!==!0&&(N=ae),nt.resetTextureUnits();let St=N.fog,Nt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,vt=ot===null?R.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:de.workingColorSpace,Rt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Bt=b.get(B.envMap||Nt,Rt),te=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,he=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ut=!!W.morphAttributes.position,ue=!!W.morphAttributes.normal,Be=!!W.morphAttributes.color,Ee=qn;B.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Ee=R.toneMapping);let Se=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qe=Se!==void 0?Se.length:0,Ft=ct.get(B),rn=w.state.lights;if(ft===!0&&(Ct===!0||E!==st)){let Ie=E===st&&B.id===X;et.setState(B,E,Ie)}let ge=!1,Fi=!1;B.version===Ft.__version?Ft.needsLights&&Ft.lightsStateVersion!==rn.state.version||k.isBatchedMesh&&Ft.batching===!1||!k.isBatchedMesh&&Ft.batching===!0||k.isBatchedMesh&&Ft.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ft.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ft.instancing===!1||!k.isInstancedMesh&&Ft.instancing===!0||k.isSkinnedMesh&&Ft.skinning===!1||!k.isSkinnedMesh&&Ft.skinning===!0||k.isInstancedMesh&&Ft.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ft.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ft.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ft.instancingMorph===!1&&k.morphTexture!==null||Ft.envMap!==Bt||B.fog===!0&&Ft.fog!==St||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==et.numPlanes||Ft.numIntersection!==et.numIntersection)||Ft.vertexAlphas!==te||Ft.vertexTangents!==he||Ft.morphTargets!==Ut||Ft.morphNormals!==ue||Ft.morphColors!==Be||Ft.morphTargetsCount!==Qe||Ft.numLightProbeGrids!==Qr(w.state.lightProbeGridArray)?ge=!0:(Ft.outputColorSpace!==vt||Ft.toneMapping!==Ee)&&(Fi=!0):(ge=!0,Ft.__version=B.version);let je=Ft.currentProgram;(ge===!0||Fi===!0)&&(je=Fi===!0?dc(B,N,k,vt,Ee):Ui(B,N,k),F&&B.isNodeMaterial&&F.onUpdateProgram(B,je,Ft));let jr=!1,_i=!1,Oi=!1,pe=je.getUniforms(),Ze=Ft.uniforms;if(z.useProgram(je.program)&&(jr=!0,_i=!0,Oi=!0),B.id!==X&&(X=B.id,_i=!0),jr||st!==E){z.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pe.setValue(U,"projectionMatrix",E.projectionMatrix),pe.setValue(U,"viewMatrix",E.matrixWorldInverse);let We=pe.map.cameraPosition;We!==void 0&&We.setValue(U,Xt.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&pe.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pe.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),st!==E&&(st=E,_i=!0,Oi=!0)}if(Ft.needsLights&&(rn.state.sunShadowMap.length>0&&pe.setValue(U,"sunShadowMap",rn.state.sunShadowMap,nt),rn.state.directionalShadowMap.length>0&&pe.setValue(U,"directionalShadowMap",rn.state.directionalShadowMap,nt),rn.state.spotShadowMap.length>0&&pe.setValue(U,"spotShadowMap",rn.state.spotShadowMap,nt),rn.state.pointShadowMap.length>0&&pe.setValue(U,"pointShadowMap",rn.state.pointShadowMap,nt)),k.isSkinnedMesh){pe.setOptional(U,k,"bindMatrix"),pe.setOptional(U,k,"bindMatrixInverse");let Ie=k.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),pe.setValue(U,"boneTexture",Ie.boneTexture,nt))}k.isBatchedMesh&&(pe.setOptional(U,k,"batchingTexture"),pe.setValue(U,"batchingTexture",k._matricesTexture,nt),pe.setOptional(U,k,"batchingIdTexture"),pe.setValue(U,"batchingIdTexture",k._indirectTexture,nt),pe.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&pe.setValue(U,"batchingColorTexture",k._colorsTexture,nt));let Rn=W.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&J.update(k,W,je),(_i||Ft.receiveShadow!==k.receiveShadow)&&(Ft.receiveShadow=k.receiveShadow,pe.setValue(U,"receiveShadow",k.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Ze.envMapIntensity.value=N.environmentIntensity),Ze.dfgLUT!==void 0&&(Ze.dfgLUT.value=Nx()),_i){if(pe.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ft.needsLights&&Nd(Ze,Oi),St&&B.fog===!0&&pt.refreshFogUniforms(Ze,St),pt.refreshMaterialUniforms(Ze,B,Tt,Gt,w.state.transmissionRenderTarget[E.id]),Ft.needsLights&&Ft.numLightProbeGrids>0){let Ie=S,We=0;for(let $n of w.state.lightProbeGridArray)$n.texture!==null&&(Ie.textures[We]=$n.texture,Ie.min[We]=$n.boundingBox.min,Ie.max[We]=$n.boundingBox.max,Ie.resolution[We]=$n.resolution,We++);for(let $n in Ie)Ie[$n].length=We;Ze.probesSH.value=Ie.textures,Ze.probesMin.value=Ie.min,Ze.probesMax.value=Ie.max,Ze.probesResolution.value=Ie.resolution}Bs.upload(U,Kl(Ft),Ze,nt)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Bs.upload(U,Kl(Ft),Ze,nt),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pe.setValue(U,"center",k.center),pe.setValue(U,"modelViewMatrix",k.modelViewMatrix),pe.setValue(U,"normalMatrix",k.normalMatrix),pe.setValue(U,"modelMatrix",k.matrixWorld),B.uniformsGroups!==void 0){let Ie=B.uniformsGroups;for(let We=0,$n=Ie.length;We<$n;We++){let th=Ie[We];Dt.update(th,je),Dt.bind(th,je)}}return je}function Nd(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.sunLights.needsUpdate=N,E.sunLightShadows.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ud(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(E,N,W){let B=ct.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),ct.get(E.texture).__webglTexture=N,ct.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){let W=ct.get(E);W.__webglFramebuffer=N,W.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,W=0){ot=E,Y=N,G=W;let B=null,k=!1,St=!1;if(E){let vt=ct.get(E);if(vt.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(U.FRAMEBUFFER,vt.__webglFramebuffer),at.copy(E.viewport),Pt.copy(E.scissor),zt=E.scissorTest,z.viewport(at),z.scissor(Pt),z.setScissorTest(zt),X=-1;return}else if(vt.__webglFramebuffer===void 0)nt.setupRenderTarget(E);else if(vt.__hasExternalTextures)nt.rebindTextures(E,ct.get(E.texture).__webglTexture,ct.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let te=E.depthTexture;if(vt.__boundDepthTexture!==te){if(te!==null&&ct.has(te)&&(E.width!==te.image.width||E.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(E)}}let Rt=E.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(St=!0);let Bt=ct.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Bt[N])?B=Bt[N][W]:B=Bt[N],k=!0):E.samples>0&&nt.useMultisampledRTT(E)===!1?B=ct.get(E).__webglMultisampledFramebuffer:Array.isArray(Bt)?B=Bt[W]:B=Bt,at.copy(E.viewport),Pt.copy(E.scissor),zt=E.scissorTest}else at.copy(Ht).multiplyScalar(Tt).floor(),Pt.copy(ie).multiplyScalar(Tt).floor(),zt=re;if(W!==0&&(B=V),z.bindFramebuffer(U.FRAMEBUFFER,B)&&z.drawBuffers(E,B),z.viewport(at),z.scissor(Pt),z.setScissorTest(zt),k){let vt=ct.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,vt.__webglTexture,W)}else if(St){let vt=N;for(let Rt=0;Rt<E.textures.length;Rt++){let Bt=ct.get(E.textures[Rt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Rt,Bt.__webglTexture,W,vt)}}else if(E!==null&&W!==0){let vt=ct.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vt.__webglTexture,W)}X=-1};function jl(E){let N=ct.get(E);return(N.__readFormat!==E.format||N.__readType!==E.type)&&(N.__readFormat=E.format,N.__readType=E.type,N.__formatReadable=rt.textureFormatReadable(E.format),N.__typeReadable=rt.textureTypeReadable(E.type)),N}this.readRenderTargetPixels=function(E,N,W,B,k,St,Nt,vt=0){if(!(E&&E.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Rt=Rt[Nt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt){z.bindFramebuffer(U.FRAMEBUFFER,Rt);try{let Bt=E.textures[vt],te=Bt.format,he=Bt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt);let Ut=jl(Bt);if(Ut.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ut.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-B&&W>=0&&W<=E.height-k&&U.readPixels(N,W,B,k,dt.convert(te),dt.convert(he),St)}finally{let Bt=ot!==null?ct.get(ot).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,N,W,B,k,St,Nt,vt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=ct.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Nt!==void 0&&(Rt=Rt[Nt],Array.isArray(Rt)&&(Rt=Rt[0])),Rt)if(N>=0&&N<=E.width-B&&W>=0&&W<=E.height-k){z.bindFramebuffer(U.FRAMEBUFFER,Rt);let Bt=E.textures[vt],te=Bt.format,he=Bt.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+vt);let Ut=jl(Bt);if(Ut.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ut.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ue),U.bufferData(U.PIXEL_PACK_BUFFER,St.byteLength,U.STREAM_READ),U.readPixels(N,W,B,k,dt.convert(te),dt.convert(he),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Be=ot!==null?ct.get(ot).__webglFramebuffer:null;z.bindFramebuffer(U.FRAMEBUFFER,Be);let Ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await xu(U,Ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ue),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,St),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ue),U.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,W=0){let B=Math.pow(2,-W),k=Math.floor(E.image.width*B),St=Math.floor(E.image.height*B),Nt=N!==null?N.x:0,vt=N!==null?N.y:0;nt.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,Nt,vt,k,St),z.unbindTexture()},this.copyTextureToTexture=function(E,N,W=null,B=null,k=0,St=0){let Nt,vt,Rt,Bt,te,he,Ut,ue,Be,Ee=E.isCompressedTexture?E.mipmaps[St]:E.image;if(W!==null)Nt=W.max.x-W.min.x,vt=W.max.y-W.min.y,Rt=W.isBox3?W.max.z-W.min.z:1,Bt=W.min.x,te=W.min.y,he=W.isBox3?W.min.z:0;else{let pe=Math.pow(2,-k);Nt=Math.floor(Ee.width*pe),vt=Math.floor(Ee.height*pe),E.isDataArrayTexture?Rt=Ee.depth:E.isData3DTexture?Rt=Math.floor(Ee.depth*pe):Rt=1,Bt=0,te=0,he=0}B!==null?(Ut=B.x,ue=B.y,Be=B.z):(Ut=0,ue=0,Be=0);let Se=dt.convert(N.format),Qe=dt.convert(N.type),Ft;N.isData3DTexture?(nt.setTexture3D(N,0),Ft=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(nt.setTexture2DArray(N,0),Ft=U.TEXTURE_2D_ARRAY):(nt.setTexture2D(N,0),Ft=U.TEXTURE_2D),z.activeTexture(U.TEXTURE0),z.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),z.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),z.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let rn=z.getParameter(U.UNPACK_ROW_LENGTH),ge=z.getParameter(U.UNPACK_IMAGE_HEIGHT),Fi=z.getParameter(U.UNPACK_SKIP_PIXELS),je=z.getParameter(U.UNPACK_SKIP_ROWS),jr=z.getParameter(U.UNPACK_SKIP_IMAGES);z.pixelStorei(U.UNPACK_ROW_LENGTH,Ee.width),z.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ee.height),z.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),z.pixelStorei(U.UNPACK_SKIP_ROWS,te),z.pixelStorei(U.UNPACK_SKIP_IMAGES,he);let _i=E.isDataArrayTexture||E.isData3DTexture,Oi=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){let pe=ct.get(E),Ze=ct.get(N),Rn=ct.get(pe.__renderTarget),Ie=ct.get(Ze.__renderTarget);z.bindFramebuffer(U.READ_FRAMEBUFFER,Rn.__webglFramebuffer),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let We=0;We<Rt;We++)_i&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ct.get(E).__webglTexture,k,he+We),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ct.get(N).__webglTexture,St,Be+We)),U.blitFramebuffer(Bt,te,Bt+Nt,te+vt,Ut,ue,Ut+Nt,ue+vt,U.DEPTH_BUFFER_BIT,U.NEAREST);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||E.isRenderTargetTexture||ct.has(E)){let pe=ct.get(E),Ze=ct.get(N);z.bindFramebuffer(U.READ_FRAMEBUFFER,P),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,H);for(let Rn=0;Rn<Rt;Rn++)_i?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pe.__webglTexture,k,he+Rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pe.__webglTexture,k),Oi?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ze.__webglTexture,St,Be+Rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ze.__webglTexture,St),k!==0?U.blitFramebuffer(Bt,te,Bt+Nt,te+vt,Ut,ue,Ut+Nt,ue+vt,U.COLOR_BUFFER_BIT,U.NEAREST):Oi?U.copyTexSubImage3D(Ft,St,Ut,ue,Be+Rn,Bt,te,Nt,vt):U.copyTexSubImage2D(Ft,St,Ut,ue,Bt,te,Nt,vt);z.bindFramebuffer(U.READ_FRAMEBUFFER,null),z.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Oi?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ft,St,Ut,ue,Be,Nt,vt,Rt,Se,Qe,Ee.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,St,Ut,ue,Be,Nt,vt,Rt,Se,Ee.data):U.texSubImage3D(Ft,St,Ut,ue,Be,Nt,vt,Rt,Se,Qe,Ee):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,St,Ut,ue,Nt,vt,Se,Qe,Ee.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,St,Ut,ue,Ee.width,Ee.height,Se,Ee.data):U.texSubImage2D(U.TEXTURE_2D,St,Ut,ue,Nt,vt,Se,Qe,Ee);z.pixelStorei(U.UNPACK_ROW_LENGTH,rn),z.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ge),z.pixelStorei(U.UNPACK_SKIP_PIXELS,Fi),z.pixelStorei(U.UNPACK_SKIP_ROWS,je),z.pixelStorei(U.UNPACK_SKIP_IMAGES,jr),St===0&&N.generateMipmaps===!0&&N.mipmapsAutoUpdate===!0&&U.generateMipmap(Ft),z.unbindTexture()},this.initRenderTarget=function(E){ct.get(E).__webglFramebuffer===void 0&&nt.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?nt.setTextureCube(E,0):E.isData3DTexture?nt.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?nt.setTexture2DArray(E,0):nt.setTexture2D(E,0),z.unbindTexture()},this.resetState=function(){Y=0,G=0,ot=null,z.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=de._getDrawingBufferColorSpace(t),e.unpackColorSpace=de._getUnpackColorSpace()}};function Vl(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Re;c.morphTargetsRelative=o;let l=0;for(let h=0;h<s.length;++h){let d=s[h],f=0,u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==s[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,d=[];for(let f=0;f<s.length;++f){let u=s[f].index;for(let p=0;p<u.count;++p)d.push(u.getX(p)+h);h+=s[f].attributes.position.count}c.setIndex(d)}for(let h in r){let d=ld(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<d;++f){let u=[];for(let _=0;_<a[h].length;++_)u.push(a[h][_][f]);let p=ld(u);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(p)}}}return c}function ld(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ne(a,e,n),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let d=c/e;for(let f=0,u=h.count;f<u;f++)for(let p=0;p<e;p++){let _=h.getComponent(f,p);o.setComponent(f+d,p,_)}}else a.set(h.array,c);c+=h.count*e}return i!==void 0&&(o.gpuType=i),o}var ac=1337;function bt(){return ac=ac*16807%2147483647,(ac-1)/2147483646}function hd(s){ac=s>>>0||1}var ui=new Uint8Array(512);(function(){let s=[];for(let t=0;t<256;t++)s[t]=t;for(let t=255;t>0;t--){let e=Math.floor(bt()*(t+1));[s[t],s[e]]=[s[e],s[t]]}for(let t=0;t<512;t++)ui[t]=s[t&255]})();var Zr=new Float32Array(256);for(let s=0;s<256;s++)Zr[s]=bt()*2-1;function ud(s,t,e){let n=Math.floor(s),i=Math.floor(t),r=s-n,a=t-i,o=r*r*(3-2*r),c=a*a*(3-2*a),l=(n%e+e)%e,h=(i%e+e)%e,d=(l+1)%e,f=(h+1)%e,u=Zr[ui[ui[l]+h]],p=Zr[ui[ui[d]+h]],_=Zr[ui[ui[l]+f]],m=Zr[ui[ui[d]+f]];return u+(p-u)*o+(_-u)*c+(u-p-_+m)*o*c}function Kt(s,t,e=4,n=5,i=.5){let r=1,a=0,o=0,c=e;for(let l=0;l<n;l++)a+=r*ud(s*c,t*c,c),o+=r,r*=i,c*=2;return a/o}function Ux(s,t,e=4,n=4){let i=1,r=0,a=0,o=e;for(let c=0;c<n;c++)r+=i*(1-Math.abs(ud(s*o,t*o,o))),a+=i,i*=.5,o*=2;return r/a}function Jr(s,t=s){let e=document.createElement("canvas");return e.width=s,e.height=t,e}var ve=(s,t=0,e=1)=>s<t?t:s>e?e:s,be=(s,t,e)=>s+(t-s)*e;function yn(s,t,e={}){let n=Jr(s),i=n.getContext("2d"),r=i.createImageData(s,s),a=new Float32Array(s*s),o=e.rough?new Uint8ClampedArray(s*s):null,c={r:0,g:0,b:0,h:0,rough:.8};for(let l=0;l<s;l++)for(let h=0;h<s;h++){t(h/s,l/s,c,h,l);let d=l*s+h;r.data[d*4]=ve(c.r)*255,r.data[d*4+1]=ve(c.g)*255,r.data[d*4+2]=ve(c.b)*255,r.data[d*4+3]=255,a[d]=c.h,o&&(o[d]=ve(c.rough)*255)}return i.putImageData(r,0,0),{col:n,height:a,rough:o,size:s,ctx:i}}function Fx(s,t,e=2){let n=Jr(t),i=n.getContext("2d"),r=i.createImageData(t,t);for(let a=0;a<t;a++)for(let o=0;o<t;o++){let c=s[a*t+(o-1+t)%t],l=s[a*t+(o+1)%t],h=s[(a-1+t)%t*t+o],d=s[(a+1)%t*t+o],f=(c-l)*e,u=(h-d)*e,p=1,_=Math.hypot(f,u,p),m=(a*t+o)*4;r.data[m]=(f/_*.5+.5)*255,r.data[m+1]=(u/_*.5+.5)*255,r.data[m+2]=(p/_*.5+.5)*255,r.data[m+3]=255}return i.putImageData(r,0,0),n}function Ox(s,t){let e=Jr(t),n=e.getContext("2d"),i=n.createImageData(t,t);for(let r=0;r<t*t;r++)i.data[r*4]=i.data[r*4+1]=i.data[r*4+2]=s[r],i.data[r*4+3]=255;return n.putImageData(i,0,0),e}function Wl(s,t=1,e=!1){let n=new Wn(s);return n.wrapS=n.wrapT=vs,n.repeat.set(t,t),n.anisotropy=4,e&&(n.colorSpace=De),n}function wn(s,t,e=1){return{map:Wl(s.col,e,!0),normalMap:Wl(Fx(s.height,s.size,t),e),roughnessMap:s.rough?Wl(Ox(s.rough,s.size),e):null}}function dd(){let s=yn(256,(t,e,n)=>{let i=Kt(t*1,e*.15,8,4),r=Ux(t+i*.15,e*.12,8,3),a=Kt(t,e,16,4),o=Math.pow(r,3);n.r=.1+o*.14+a*.03,n.g=.085+o*.11+a*.025,n.b=.07+o*.08+a*.02;let c=ve((Kt(t+5,e+2,4,4)-.25)*4);n.r=be(n.r,.25,c*.35),n.g=be(n.g,.28,c*.35),n.b=be(n.b,.2,c*.35),n.h=o+a*.2,n.rough=.95},{rough:!0});return wn(s,5)}function fd(){let s=yn(256,(t,e,n)=>{let i=Kt(t*.2,e,4,4)*6,r=Math.sin((t*30+i)*Math.PI)*.5+.5,a=Kt(t,e,32,3),o=ve(Kt(t+3,e,4,3)+.2);n.r=(.27+r*.08+a*.04)*(1-o*.4),n.g=(.17+r*.05+a*.03)*(1-o*.4),n.b=(.12+r*.03)*(1-o*.4),n.h=r*.4+a*.3,n.rough=.7-o*.1},{rough:!0});return wn(s,2)}function oc(){let s=yn(256,(t,e,n)=>{let i=Kt(t,e,8,5),r=0;Math.abs(Math.sin((t*.9+e*.4)*300+Kt(t,e,4,2)*40))>.985&&(r=1);let o=ve((Kt(t+2,e+7,4,5)-.4)*2.5)*.7;n.r=be(.55+i*.08+r*.2,.35,o),n.g=be(.56+i*.08+r*.2,.17,o),n.b=be(.58+i*.08+r*.2,.08,o),n.h=i*.3-r*.4+o*Kt(t,e,64,2),n.rough=.35+i*.1-r*.15+o*.5},{rough:!0});return wn(s,1.5)}function pd(s=0){let t=[[.4,.43,.33],[.45,.41,.37],[.33,.36,.29],[.47,.38,.33]],e=t[s%t.length],n=s*3.7,i=yn(512,(r,a,o)=>{let c=Kt(r+n,a,6,6),l=ve((Kt(r+n*2,a+1,3,4)+.05)*2.5),h=Math.pow(ve(1-Math.abs(Kt(r+n,a+9,5,5))*18),2),d=Math.pow(ve((Kt(r+n,a+4,10,3)-.45)*5),2),f=ve((Kt(r-n,a+2,4,5)-.42)*3),u=Kt(r,a,128,1),p=e[0]+c*.07,_=e[1]+c*.07,m=e[2]+c*.06;p=be(p,.36,l*.5),_=be(_,.32,l*.5),m=be(m,.36,l*.5),p-=h*.18,_-=h*.16,m-=h*.06,p=be(p,.35,d),_=be(_,.08,d),m=be(m,.06,d),p=be(p,.2,f*.7),_=be(_,.04,f*.7),m=be(m,.03,f*.7),o.r=p,o.g=_,o.b=m,o.h=c*.5+h*.5-d*1.2+u*.15,o.rough=.62-d*.35-f*.2},{rough:!0});return wn(i,3)}function Xl(s=0){let t=[[.18,.2,.26],[.32,.28,.22],[.25,.12,.1],[.2,.22,.17],[.27,.26,.24]],e=t[s%t.length],n=s*5.1,i=yn(256,(r,a,o)=>{let c=Math.sin(r*256*Math.PI)*Math.sin(a*256*Math.PI)*.5+.5,l=Kt(r+n,a,4,5),h=ve(Kt(r+n,a+3,3,4)*1.5+.3),d=ve((Kt(r-n,a+7,3,5)-.38)*3),f=ve((Kt(r+n,a+11,6,4)-.5)*8),u=1-h*.45+c*.06+l*.08;o.r=be(e[0]*u,.2,d*.85),o.g=be(e[1]*u,.01,d*.85),o.b=be(e[2]*u,.01,d*.85),o.r*=1-f*.6,o.g*=1-f*.6,o.b*=1-f*.6,o.h=c*.3+l*.5-f,o.rough=.95-d*.3},{rough:!0});return wn(i,3)}function Di(s=128,t=255,e=255,n=255,i=!1){let r=Jr(s),a=r.getContext("2d"),o=a.createImageData(s,s);for(let l=0;l<s;l++)for(let h=0;h<s;h++){let d=h/s-.5,f=l/s-.5,u=ve(1-Math.hypot(d,f)*2);u=u*u*(3-2*u),i&&(u*=ve(Kt(h/s,l/s,3,4)*1.2+.6));let p=(l*s+h)*4;o.data[p]=t,o.data[p+1]=e,o.data[p+2]=n,o.data[p+3]=u*255}a.putImageData(o,0,0);let c=new Wn(r);return c.colorSpace=De,c}function md(){let t=Jr(256),e=t.getContext("2d");e.fillStyle="rgba(70,0,0,0.95)";let n=(r,a,o)=>{e.beginPath(),e.arc(r,a,o,0,Math.PI*2),e.fill()};n(128,128,40);for(let r=0;r<30;r++){let a=bt()*Math.PI*2,o=30+bt()*80;n(128+Math.cos(a)*o,128+Math.sin(a)*o,3+bt()*14*(1-o/130))}for(let r=0;r<10;r++){let a=bt()*Math.PI*2;e.strokeStyle="rgba(70,0,0,0.9)",e.lineWidth=3+bt()*5,e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(a)*(60+bt()*50),128+Math.sin(a)*(60+bt()*50)),e.stroke()}let i=new Wn(t);return i.colorSpace=De,i}function gd(){let s=yn(256,(i,r,a)=>{let o=i-.5,c=r-.5,l=Math.hypot(o,c)*2,h=Kt(i,r,3,6),d=ve((Kt(i+3,r,5,3)-.2)*3),f=.85+h*.12-d*.2,u=l<.9?1:0,p=Math.pow(ve(1-l),2)*.5;a.r=u?f*.95:p*.7,a.g=u?f*.97:p*.75,a.b=u?f:p*.9,a.h=0}),t=s.ctx,e=t.getImageData(0,0,256,256);for(let i=0;i<e.data.length;i+=4)e.data[i+3]=Math.max(e.data[i],e.data[i+1],e.data[i+2]);t.putImageData(e,0,0);let n=new Wn(s.col);return n.colorSpace=De,n}function xd(){let s=yn(512,(t,e,n)=>{let i=Kt(t,e,8,6),r=Kt(t,e,128,2),a=Math.pow(ve(1-Math.abs(Kt(t+4,e,3,5))*22),3),o=ve((Kt(t+9,e+3,3,3)-.3)*6),c=ve((Kt(t+1,e+6,5,4)-.1)*2),l=.15+i*.03+r*.04-a*.08-o*.05-c*.03;n.r=l,n.g=l,n.b=l*1.03,n.h=r*.5-a*1.5+o*.2,n.rough=.9-o*.25-c*.15},{rough:!0});return wn(s,3)}function _d(){let s=yn(256,(t,e,n)=>{let i=Kt(t,e,4,5),r=Kt(t,e,64,2),a=Math.min(t,1-t)<.008||Math.min(e,1-e)<.008?1:0,o=ve((Kt(t+3,e,3,4)-.15)*2.5),c=Math.pow(ve(1-Math.abs(Kt(t+7,e+2,2,5))*30),3),l=.5+i*.06+r*.04-o*.12-a*.25-c*.2;n.r=l,n.g=l*.98,n.b=l*.95,n.h=r*.4-a*2-c,n.rough=.9},{rough:!0});return wn(s,3)}function yd(){let s=yn(256,(t,e,n)=>{let r=e*8%1,a=Kt(t,e,4,4),o=ve(Kt(t+2,e+5,3,4)*1.2+(1-e)*.2),c=ve((Kt(t+8,e+1,6,4)-.5)*4)*.6,l=.82-o*.22+a*.04-(r<.06?.35:0);n.r=l*(1-c*.4),n.g=l*(1-c*.45),n.b=l*(1-c*.5),n.h=r+a*.05-c*.2,n.rough=.8},{rough:!0});return wn(s,5)}function vd(){let s=yn(256,(t,e,n)=>{let r=Math.floor(e*10),a=e*10%1,o=Math.floor(t*6+r%2*.5),c=Math.sin(o*12.9898+r*78.233)*43758.5453%1,l=Kt(t,e,32,3),h=ve((Kt(t+3,e+1,3,4)-.2)*3),d=a>.9?1:0,f=(t*6+r%2*.5)%1<.03?1:0,u=.13+Math.abs(c)*.07+l*.03-d*.06-f*.06;n.r=be(u,.16,h*.6),n.g=be(u,.2,h*.6),n.b=be(u*1.05,.1,h*.6),n.h=a*.6+l*.3-f,n.rough=.95},{rough:!0});return wn(s,4)}function Md(){let s=yn(256,(t,e,n)=>{let r=Math.floor(e*16),a=e*16%1,o=(t*8+r%2*.5)%1,c=a<.12||o<.05,l=Math.floor(t*8+r%2*.5)+r*17,h=Math.abs(Math.sin(l*91.7)*4375.5%1),d=Kt(t,e,32,3);c?(n.r=n.g=.42+d*.05,n.b=.4,n.h=0):(n.r=.36+h*.12+d*.05,n.g=.16+h*.05,n.b=.11+h*.03,n.h=.6+d*.2),n.rough=.9},{rough:!0});return wn(s,4)}function Sd(){let s=yn(256,(t,e,n)=>{let r=t*6%1,a=Math.floor(t*6),o=Kt(t*.3+a,e*.05,8,4),c=Math.sin((e*60+o*8+a*3)*Math.PI)*.5+.5,l=Kt(t,e,16,3),h=r<.05?1:0,d=.6+Math.abs(Math.sin(a*37.1)*99.3%1)*.3,f=(.3+c*.06+l*.05)*d-h*.2;n.r=f,n.g=f*.8,n.b=f*.62,n.h=c*.3-h*2,n.rough=.95},{rough:!0});return wn(s,4)}function bd(){let s=yn(512,(t,e,n)=>{let i=Kt(t,e,6,6),r=Kt(t,e,128,2),a=ve((Kt(t+2,e+3,4,4)+.1)*2),o=ve((Kt(t+5,e+1,6,4)-.3)*4),c=be(.14,.24,a),l=be(.2,.21,a),h=be(.08,.1,a);c+=r*.05+i*.03,l+=r*.06+i*.03,h+=r*.02,c=be(c,.17,o),l=be(l,.13,o),h=be(h,.09,o),n.r=c,n.g=l,n.b=h,n.h=r*.8+i*.3,n.rough=1},{rough:!0});return wn(s,2.5)}var Ue=100,On=[-75,-25,25,75],Ni=4,di=6,An=81;function ee(s,t,e){let n=new hn(s,t,e),i=n.attributes.uv,r=[[e,t],[e,t],[s,e],[s,e],[s,t],[s,t]];for(let a=0;a<6;a++)for(let o=0;o<4;o++){let c=a*4+o;i.setXY(c,i.getX(c)*r[a][0],i.getY(c)*r[a][1])}return n}function ql(s,t,e,n=8){return new mn(s,t,e,n)}var Yl=class{constructor(){this.b={},this.m=new ne}add(t,e,n,i){let r=e.index?e.toNonIndexed():e;n&&r.applyMatrix4(n);for(let l of Object.keys(r.attributes))["position","normal","uv"].includes(l)||r.deleteAttribute(l);r.attributes.uv||r.setAttribute("uv",new ce(new Float32Array(r.attributes.position.count*2),2));let a=new Zt(i===void 0?16777215:i),o=r.attributes.position.count,c=new Float32Array(o*3);for(let l=0;l<o;l++)c[l*3]=a.r,c[l*3+1]=a.g,c[l*3+2]=a.b;r.setAttribute("color",new Ne(c,3)),r.clearGroups(),(this.b[t]=this.b[t]||[]).push(r)}build(t,e,n){let i={};for(let[r,a]of Object.entries(this.b)){let o=Vl(a),c=new Wt(o,e[r]);c.castShadow=n[r]!==!1,c.receiveShadow=!0,c.matrixAutoUpdate=!1,t.add(c),i[r]=c}return i}};function Bx(s){let t=s.index?s.toNonIndexed():s,e=[];for(let n of t.groups){let i=new Re;for(let r of["position","normal","uv"]){let a=t.attributes[r];i.setAttribute(r,new Ne(a.array.slice(n.start*a.itemSize,(n.start+n.count)*a.itemSize),a.itemSize))}e[n.materialIndex]=e[n.materialIndex]?Vl([e[n.materialIndex],i]):i}return e}var Zl=class{constructor(){this.list=[],this.cells=new Map,this.C=10}_key(t,e){return t*1e3+e}add(t){this.list.push(t);let[e,n,i,r]=t.type==="box"?[t.x0,t.x1,t.z0,t.z1]:[t.x-t.r,t.x+t.r,t.z-t.r,t.z+t.r];for(let a=Math.floor(e/this.C);a<=Math.floor(n/this.C);a++)for(let o=Math.floor(i/this.C);o<=Math.floor(r/this.C);o++){let c=this._key(a,o);this.cells.has(c)||this.cells.set(c,[]),this.cells.get(c).push(t)}return t}near(t,e,n=1){let i=new Set;for(let r=Math.floor((t-n)/this.C);r<=Math.floor((t+n)/this.C);r++)for(let a=Math.floor((e-n)/this.C);a<=Math.floor((e+n)/this.C);a++){let o=this.cells.get(this._key(r,a));if(o)for(let c of o)i.add(c)}return i}collide(t,e){for(let i of this.near(t.x,t.z,e+1))if(i.type==="cyl"){let r=t.x-i.x,a=t.z-i.z,o=Math.hypot(r,a),c=i.r+e;o<c&&o>1e-4&&(t.x+=r/o*(c-o),t.z+=a/o*(c-o))}else{let r=Math.max(i.x0,Math.min(t.x,i.x1)),a=Math.max(i.z0,Math.min(t.z,i.z1)),o=t.x-r,c=t.z-a,l=Math.hypot(o,c);if(l>1e-4)l<e&&(t.x+=o/l*(e-l),t.z+=c/l*(e-l));else{let h=[[t.x-i.x0,-1,0],[i.x1-t.x,1,0],[t.z-i.z0,0,-1],[i.z1-t.z,0,1]];h.sort((p,_)=>p[0]-_[0]);let[d,f,u]=h[0];t.x+=f*(d+e),t.z+=u*(d+e)}}let n=Ue-1.5;t.x=Math.max(-n,Math.min(n,t.x)),t.z=Math.max(-n,Math.min(n,t.z))}solidAt(t,e,n){for(let i of this.near(t,n,.5))if(!(e>i.h)){if(i.type==="cyl"){if(Math.hypot(t-i.x,n-i.z)<i.r)return i}else if(t>i.x0&&t<i.x1&&n>i.z0&&n<i.z1)return i}return null}blocked(t,e,n){if(Math.abs(t)>Ue-2||Math.abs(e)>Ue-2)return!0;for(let i of this.near(t,e,n+1))if(i.type==="cyl"){if(Math.hypot(t-i.x,e-i.z)<i.r+n)return!0}else if(t>i.x0-n&&t<i.x1+n&&e>i.z0-n&&e<i.z1+n)return!0;return!1}sightBlocked(t,e,n,i,r){let a=Math.hypot(n-t,i-e);for(let o=1;o<a-1;o+=.75){let c=t+(n-t)*o/a,l=e+(i-e)*o/a;for(let h of this.near(c,l,.1))if(h.kind==="house"&&h!==r&&c>h.x0&&c<h.x1&&l>h.z0&&l<h.z1)return!0}return!1}},Jl=class{constructor(t){this.cs=2,this.n=Math.ceil(Ue*2/this.cs);let e=this.n;this.block=new Uint8Array(e*e);for(let n=0;n<e;n++)for(let i=0;i<e;i++){let[r,a]=this.center(i,n);this.block[n*e+i]=t.blocked(r,a,.45)?1:0}this.dist=new Float32Array(e*e).fill(1e9),this.queue=new Int32Array(e*e)}center(t,e){return[-Ue+(t+.5)*this.cs,-Ue+(e+.5)*this.cs]}cell(t,e){let n=Math.max(0,Math.min(this.n-1,Math.floor((t+Ue)/this.cs))),i=Math.max(0,Math.min(this.n-1,Math.floor((e+Ue)/this.cs)));return[n,i]}compute(t,e,n=this.dist){let i=this.n,r=n,a=this.queue,o=this.block;r.fill(1e9);let[c,l]=this.cell(t,e),h=l*i+c;if(o[h]){let u=-1,p=1e9;for(let _=-3;_<=3;_++)for(let m=-3;m<=3;m++){let g=c+m,M=l+_;if(g<0||M<0||g>=i||M>=i||o[M*i+g])continue;let T=m*m+_*_;T<p&&(p=T,u=M*i+g)}if(u<0)return r;h=u}let d=0,f=0;for(r[h]=0,a[f++]=h;d<f;){let u=a[d++],p=u%i,_=u/i|0,m=r[u]+1;if(p>0){let g=u-1;!o[g]&&r[g]>m&&(r[g]=m,a[f++]=g)}if(p<i-1){let g=u+1;!o[g]&&r[g]>m&&(r[g]=m,a[f++]=g)}if(_>0){let g=u-i;!o[g]&&r[g]>m&&(r[g]=m,a[f++]=g)}if(_<i-1){let g=u+i;!o[g]&&r[g]>m&&(r[g]=m,a[f++]=g)}}return r}next(t,e,n=this.dist){let i=this.n,[r,a]=this.cell(t,e),o=null,c=n[a*i+r];for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){if(!h&&!l)continue;let d=r+h,f=a+l;if(d<0||f<0||d>=i||f>=i||h&&l&&(this.block[a*i+d]||this.block[f*i+r]))continue;let u=n[f*i+d]+(h&&l?.4:0);u<c&&(c=u,o=[d,f])}return o?this.center(o[0],o[1]):null}distAt(t,e,n=this.dist){let[i,r]=this.cell(t,e);return n[r*this.n+i]*this.cs}open(t,e){let[n,i]=this.cell(t,e);return!this.block[i*this.n+n]}};function Ed(s,t){hd(9001);let e=new Zl,n=new Yl,i=new ne,r=new He,a=new I,o=new I(1,1,1),c=(it,Z,rt,z=0)=>i.compose(a.set(it,Z,rt),r.setFromAxisAngle(new I(0,1,0),z),o.set(1,1,1)).clone();s.background=new Zt(461328),s.fog=new cr(658964,.036);let l=new En({side:$e,depthWrite:!1,fog:!1,uniforms:{flash:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
      varying vec3 vP; uniform float flash;
      float h(vec3 p){ return fract(sin(dot(p, vec3(12.9898,78.233,45.164)))*43758.5453); }
      void main(){
        float y = clamp(vP.y, 0.0, 1.0);
        vec3 c = mix(vec3(0.06,0.065,0.075), vec3(0.008,0.012,0.025), pow(y,0.5));
        c += vec3(0.05,0.03,0.01) * pow(1.0 - y, 6.0); // distant city glow
        vec3 q = floor(vP*350.0);
        c += vec3(step(0.998, h(q)) * smoothstep(0.08,0.3,y)) * 0.5;
        float cl = sin(vP.x*9.0+sin(vP.z*7.0)*2.0)*sin(vP.z*6.0+vP.x*3.0);
        c = mix(c, vec3(0.05,0.055,0.06), smoothstep(0.2,0.9,cl)*smoothstep(0.05,0.35,y)*0.6);
        c += flash*vec3(0.5,0.55,0.7)*(0.3+y);
        gl_FragColor = vec4(c,1.0);
      }`}),h=new Wt(new Ye(400,32,16),l);s.add(h);let d=new ai(new Vn({map:gd(),fog:!1,depthWrite:!1,transparent:!0}));d.position.set(-120,150,-220),d.scale.setScalar(50),s.add(d);let f=new ai(new Vn({map:Di(128,150,170,210),fog:!1,depthWrite:!1,transparent:!0,opacity:.3,blending:Ii}));f.position.copy(d.position),f.scale.setScalar(200),s.add(f);let u=new Pr(5596543,1709842,.75);s.add(u);let p=new Ur(11058400,1.1);p.castShadow=!0,p.shadow.mapSize.set(t.shadow,t.shadow),Object.assign(p.shadow.camera,{left:-35,right:35,top:35,bottom:-35,near:5,far:140}),p.shadow.bias=-8e-4,p.shadow.normalBias=.04,s.add(p),s.add(p.target);let _=(it,Z)=>{for(let rt of Object.values(it))rt&&rt.repeat.set(1/Z,1/Z);return it},m={lawn:new Qt({..._(bd(),6),roughness:1}),asphalt:new Qt({..._(xd(),8),roughness:1}),concrete:new Qt({..._(_d(),2),roughness:1}),siding:new Qt({..._(yd(),1.6),roughness:1,vertexColors:!0}),shingle:new Qt({..._(vd(),2.5),roughness:1}),brick:new Qt({..._(Md(),1.2),roughness:1}),plank:new Qt({..._(Sd(),1.5),roughness:1,vertexColors:!0}),trim:new Qt({roughness:.75,vertexColors:!0}),glass:new Qt({color:724756,roughness:.08,metalness:.6}),lit:new Qt({color:0,emissive:16757862,emissiveIntensity:1.1,roughness:.3}),paint:new Qt({roughness:.35,metalness:.55,vertexColors:!0}),rubber:new Qt({color:1118481,roughness:.9}),iron:new Qt({...oc(),color:5592405,metalness:.8,roughness:.7}),bush:new Qt({color:1911319,roughness:1,vertexColors:!0}),hazard:new Qt({color:3348480,emissive:16747024,emissiveIntensity:2}),bulb:new Qt({color:2234896,emissive:16760944,emissiveIntensity:2.5}),paintLine:new Qt({color:10127936,roughness:.8})},g=dd();m.bark=new Qt({...g,roughness:1,normalScale:new ut(2,2)});let M=new Wt(new xn(Ue*2+60,Ue*2+60),m.lawn);M.rotation.x=-Math.PI/2;{let it=M.geometry.attributes.uv,Z=M.geometry.attributes.position;for(let rt=0;rt<it.count;rt++)it.setXY(rt,Z.getX(rt),Z.getY(rt))}M.receiveShadow=!0,s.add(M);let T=()=>0,S=(it,Z,rt,z,lt)=>{let ct=new xn(Z-it,z-rt);ct.rotateX(-Math.PI/2),ct.translate((it+Z)/2,lt,(rt+z)/2);let nt=ct.attributes.uv,b=ct.attributes.position;for(let y=0;y<nt.count;y++)nt.setXY(y,b.getX(y),b.getZ(y));return ct},A=(it,Z)=>On.some(rt=>Math.abs(it-rt)<di&&Math.abs(Z)<An||Math.abs(Z-rt)<di&&Math.abs(it)<An);for(let it of On){n.add("asphalt",S(it-Ni,it+Ni,-An,An,.02)),n.add("asphalt",S(-An,An,it-Ni,it+Ni,.02));for(let Z of[-1,1]){let rt=it+Z*(Ni+1),z=ee(2,.12,An*2);{let ct=z.attributes.uv,nt=z.attributes.position;for(let b=0;b<ct.count;b++)ct.setXY(b,nt.getX(b)+rt,nt.getZ(b))}n.add("concrete",z,c(rt,.06,0));let lt=ee(An*2,.12,2);{let ct=lt.attributes.uv,nt=lt.attributes.position;for(let b=0;b<ct.count;b++)ct.setXY(b,nt.getX(b),nt.getZ(b)+rt)}n.add("concrete",lt,c(0,.061,rt))}for(let Z=-An+2;Z<An-2;Z+=6)On.some(rt=>Math.abs(Z-rt)<di+1)||(n.add("paintLine",ee(.15,.01,2.5),c(it,.03,Z)),n.add("paintLine",ee(2.5,.01,.15),c(Z,.03,it)))}let w=[12168600,9345692,10134410,13222836,11048570,8359065,12563866,9865082],x=[4857368,2043450,2765604,3811870,2105376],v=14210248,C=[];function R(it,Z,rt){let z=9.5+bt()*2.5,lt=8+bt()*2.5,ct=bt()<.5?2:1,nt=ct*2.7,b=.45,y=w[Math.floor(bt()*w.length)],O=(ye,we,Ke,Ce=0)=>new ne().makeRotationY(rt).setPosition(it,0,Z).multiply(new ne().makeRotationY(Ce).setPosition(ye,we,Ke)),q=(ye,we,Ke,Ce,Le,Oe,mi=0)=>n.add(ye,we,O(Ke,Ce,Le,mi),Oe);q("brick",ee(z+.15,b,lt+.15),0,b/2,-lt/2),q("siding",ee(z,nt,lt),0,b+nt/2,-lt/2,y);let tt=1.6+bt()*1.2,pt=.5,gt=new Ti;gt.moveTo(-lt/2-pt,0),gt.lineTo(lt/2+pt,0),gt.lineTo(0,tt),gt.lineTo(-lt/2-pt,0);let Q=new Wi(gt,{depth:z+pt*2,bevelEnabled:!1});Q.rotateY(Math.PI/2),Q.translate(-(z+pt*2)/2,0,0);let[et,yt]=Bx(Q);q("siding",et,0,b+nt,-lt/2,y),q("shingle",yt,0,b+nt,-lt/2),q("trim",ee(z+.2,.18,lt+.2),0,b+nt,-lt/2,v),bt()<.6&&q("brick",ee(.9,tt+1.6,.9),(bt()<.5?-1:1)*(z/2-1.2),b+nt+tt/2+.3,-lt/2-.6);let L=(ye,we,Ke,Ce)=>{let Le=bt(),Oe=Le<.12?"lit":"glass",mi=new ne().makeRotationY(Ce).setPosition(ye,we,Ke),Jn=(gi,xi,ji,Qr,Ui,dc)=>n.add(gi,xi,O(0,0,0).multiply(mi.clone().multiply(new ne().makeTranslation(ji,Qr,Ui))),dc);if(Jn(Oe,ee(1.05,1.3,.04),0,0,.01),Jn("trim",ee(1.25,.1,.1),0,.7,.04,v),Jn("trim",ee(1.35,.08,.2),0,-.7,.08,v),Jn("trim",ee(.1,1.4,.1),-.6,0,.04,v),Jn("trim",ee(.1,1.4,.1),.6,0,.04,v),Jn("trim",ee(.05,1.3,.05),0,0,.04,v),Le>.7)for(let gi=0;gi<3;gi++){let xi=ee(1.5,.2,.04),ji=new ne().makeRotationZ((bt()-.5)*.6).setPosition(0,-.45+gi*.45,.12);n.add("plank",xi,O(0,0,0).multiply(mi.clone().multiply(ji)),16777215)}},J=(bt()-.5)*(z-4);for(let ye=0;ye<ct;ye++){let we=b+ye*2.7+1.45,Ke=Math.floor((z-1.5)/2.6);for(let Ce=0;Ce<Ke;Ce++){let Le=-z/2+1.3+Ce*((z-2.6)/Math.max(1,Ke-1));ye===0&&Math.abs(Le-J)<1.4||L(Le,we,0,0)}for(let Ce of[-1,1])bt()<.8&&L(Ce*z/2,we,-lt/2+(bt()-.5)*2,Ce*Math.PI/2);bt()<.6&&L((bt()-.5)*(z-3),we,-lt,Math.PI)}let $=x[Math.floor(bt()*x.length)],xt=bt()<.25;if(q("trim",ee(1,2.1,.08),J+(xt?-.45:0),b+1.05,xt?.45:.03,$,xt?-1.3:0),xt&&q("glass",ee(.95,2.05,.02),J,b+1.05,0),q("trim",ee(1.3,.12,.12),J,b+2.16,.06,v),q("trim",ee(.12,2.2,.12),J-.6,b+1.1,.06,v),q("trim",ee(.12,2.2,.12),J+.6,b+1.1,.06,v),q("concrete",ee(2.8,b-.05,1.9),J,(b-.05)/2,.95),q("concrete",ee(1.6,.22,.5),J,.11,2.1),bt()<.5){q("shingle",ee(3.2,.15,2.2),J,b+2.7,1);for(let ye of[-1,1])q("trim",ee(.14,2.6,.14),J+ye*1.35,b+1.3,1.85,v)}q("bulb",ee(.12,.18,.08),J+.95,b+1.9,.08);let dt=1,mt=5.6,Dt=dt*(z/2+mt/2),jt=bt()<.6,ht=[[-z/2,z/2,-lt,0]];if(jt){let ye=lt*.85;q("siding",ee(mt,2.8,ye),Dt,1.4,-ye/2,y),q("shingle",ee(mt+.6,.25,ye+.6),Dt,2.9,-ye/2),q("trim",ee(mt-1.2,2.2,.06),Dt,1.1,.02,bt()<.5?v:10132114);for(let we=1;we<4;we++)q("trim",ee(mt-1.2,.04,.08),Dt,.03+we*.55,.05,7303016);ht.push([Dt-mt/2,Dt+mt/2,-ye,0])}q("concrete",ee(5,.04,6.2),jt?Dt:dt*(z/2+3),.02,3.1),q("concrete",ee(1.2,.04,3.6),J,.02,4.2);let kt=(jt?Dt:dt*(z/2+3))-dt*3.2;q("plank",ee(.1,1.05,.1),kt,.52,5.6,16777215),q("iron",ee(.25,.25,.5),kt,1.12,5.6);for(let ye=0;ye<3+Math.floor(bt()*3);ye++){let we=-z/2+.8+bt()*(z-1.6);if(Math.abs(we-J)<1.6)continue;let Ke=new Rr(.55+bt()*.35,1),Ce=Ke.attributes.position;for(let Le=0;Le<Ce.count;Le++){let Oe=.8+bt()*.4;Ce.setXYZ(Le,Ce.getX(Le)*Oe,Ce.getY(Le)*Oe*.85,Ce.getZ(Le)*Oe)}Ke.computeVertexNormals(),q("bush",Ke,we,.45,.6,new Zt().setHSL(.25+bt()*.06,.3,.22+bt()*.12).getHex())}let Jt=(ye,we)=>new I(ye,0,we).applyAxisAngle(new I(0,1,0),rt).add(new I(it,0,Z)),wt=[];for(let[ye,we,Ke,Ce]of ht){let Le=Jt(ye,Ke),Oe=Jt(we,Ce);wt.push(e.add({type:"box",x0:Math.min(Le.x,Oe.x),x1:Math.max(Le.x,Oe.x),z0:Math.min(Le.z,Oe.z),z1:Math.max(Le.z,Oe.z),h:b+nt+tt,kind:"house"}))}let me=Jt(J,.1),Fe=Jt(J,1.6),Bn=new I(Math.sin(rt),0,Math.cos(rt));C.push({door:me,trigger:Fe,facing:Bn,ry:rt,box:wt[0],doorY:b,w:z})}let D=(it,Z)=>{let rt=Z-it,z=Math.max(1,Math.round(rt/19));return Array.from({length:z},(lt,ct)=>it+(ct+.5)*rt/z)};for(let it=0;it<3;it++)for(let Z=0;Z<3;Z++){let rt=On[it]+di,z=On[it+1]-di,lt=On[Z]+di,ct=On[Z+1]-di;for(let b of D(rt,z))R(b,lt+6,Math.PI),R(b,ct-6,0);let nt=(lt+ct)/2;n.add("plank",ee(z-rt-2,1.7,.08),c((rt+z)/2,.85,nt),12103840),e.add({type:"box",x0:rt+1,x1:z-1,z0:nt-.1,z1:nt+.1,h:1.7,kind:"wood"})}for(let it of[-1,1]){for(let Z of D(-70,70))R(it*(An+6),Z,it>0?-Math.PI/2:Math.PI/2);for(let Z of D(-92,92))R(Z,it*(An+6),it>0?Math.PI:0)}for(let it of[-1,1])n.add("plank",ee(Ue*2,2.4,.1),c(0,1.2,it*Ue),10260608),n.add("plank",ee(.1,2.4,Ue*2),c(it*Ue,1.2,0),10260608);let F=[];for(let it of On)for(let Z=-70;Z<=70;Z+=23.3)if(!On.some(rt=>Math.abs(Z-rt)<di+2))for(let rt of[0,1]){let z=(Math.round(Z/23.3)+rt)%2===0?1:-1,lt=rt?Z:it+z*(Ni+1.6),ct=rt?it+z*(Ni+1.6):Z,nt=rt?0:-z,b=rt?-z:0;n.add("iron",ql(.07,.1,6.5,8),c(lt,3.25,ct)),n.add("iron",ee(Math.abs(nt)*1.6+.08,.08,Math.abs(b)*1.6+.08),c(lt+nt*.8,6.4,ct+b*.8));let y=lt+nt*1.6,O=ct+b*1.6;n.add("iron",ee(.5,.15,.5),c(y,6.35,O));let q=bt()<.3;q||n.add("bulb",ee(.36,.06,.36),c(y,6.25,O)),e.add({type:"cyl",x:lt,z:ct,r:.15,h:6.5,kind:"metal"}),F.push({x:y,z:O,broken:q,flicker:!q&&bt()<.2})}let V=Di(64,255,190,120),P=Di(128,255,170,90),H=[];for(let it of F){if(it.broken)continue;let Z=new ai(new Vn({map:V,blending:Ii,transparent:!0,depthWrite:!1,opacity:.55}));Z.position.set(it.x,6.15,it.z),Z.scale.setScalar(2.2),s.add(Z);let rt=new Wt(new xn(11,11),new Dn({map:P,blending:Ii,transparent:!0,depthWrite:!1,opacity:.12}));rt.rotation.x=-Math.PI/2,rt.position.set(it.x,.05,it.z),s.add(rt),H.push({l:it,g:Z,pool:rt})}let Y=[0,1,2].map(()=>{let it=new Ls(16756848,18,18,1.5);return s.add(it),it}),G=[6953492,1911876,9079430,2236962,3885626,13157560,4864808],ot=[],X=(it,Z,rt)=>{let z=G[Math.floor(bt()*G.length)],lt=(b,y,O)=>new ne().makeRotationY(rt).setPosition(it,0,Z).multiply(new ne().makeTranslation(b,y,O));n.add("paint",ee(1.8,.65,4.4),lt(0,.62,0),z),n.add("paint",ee(1.6,.55,2.3),lt(0,1.2,-.2),z),n.add("glass",ee(1.62,.45,2.1),lt(0,1.2,-.2));for(let b of[-1,1])for(let y of[-1.35,1.35]){let O=ql(.36,.36,.25,12);O.rotateZ(Math.PI/2),n.add("rubber",O,lt(b*.85,.36,y))}for(let b of[-.6,.6]){n.add("trim",ee(.35,.15,.05),lt(b,.75,2.2),14540253);let y=ee(.3,.12,.05);n.add("hazard",y,lt(b,.78,-2.21))}let ct=new bn().setFromBufferAttribute(new Ne(new Float32Array([-.95,0,-2.25,.95,0,2.25,-.95,0,2.25,.95,0,-2.25]),3)),nt=[[-.95,-2.25],[.95,-2.25],[-.95,2.25],[.95,2.25]].map(([b,y])=>new I(b,0,y).applyAxisAngle(new I(0,1,0),rt));e.add({type:"box",x0:it+Math.min(...nt.map(b=>b.x)),x1:it+Math.max(...nt.map(b=>b.x)),z0:Z+Math.min(...nt.map(b=>b.z)),z1:Z+Math.max(...nt.map(b=>b.z)),h:1.5,kind:"metal"})};for(let it=0;it<18;it++){let Z=On[Math.floor(bt()*4)],rt=-70+bt()*140;if(On.some(ct=>Math.abs(rt-ct)<di+3))continue;let z=(bt()<.5?-1:1)*2,lt=bt()<.3?(bt()-.5)*1.6:(bt()-.5)*.2;bt()<.5?X(Z+z,rt,(z>0?0:Math.PI)+lt):X(rt,Z+z,(z>0?Math.PI/2:-Math.PI/2)+lt)}function st(it,Z,rt,z,lt,ct){let nt=Z.clone().addScaledVector(rt,z),b=new mn(lt*.65,lt,z,Math.max(4,8-ct*2),2);if(b.translate(0,z/2,0),b.applyQuaternion(new He().setFromUnitVectors(new I(0,1,0),rt)),b.translate(Z.x,Z.y,Z.z),it.push(b),ct>=3||lt<.03)return;let y=2+Math.floor(bt()*2);for(let O=0;O<y;O++){let q=rt.clone();q.x+=(bt()-.5)*1.5,q.z+=(bt()-.5)*1.5,q.y+=bt()*.4,q.normalize(),st(it,Z.clone().lerp(nt,ct===0?.6+bt()*.4:1),q,z*(.6+bt()*.2),lt*.55,ct+1)}}let at=0;for(let it=0;it<400&&at<t.trees;it++){let Z=(bt()-.5)*(Ue*2-8),rt=(bt()-.5)*(Ue*2-8);if(A(Z,rt)||e.blocked(Z,rt,2.5))continue;let z=[],lt=.7+bt()*.6;st(z,new I(0,-.2,0),new I((bt()-.5)*.2,1,(bt()-.5)*.2).normalize(),(3+bt()*2)*lt,.22*lt,0);for(let ct of z)n.add("bark",ct,c(Z,0,rt,bt()*6));e.add({type:"cyl",x:Z,z:rt,r:.25*lt,h:4*lt,kind:"wood"}),at++}for(let it=0;it<40;it++){let Z=C[Math.floor(bt()*C.length)],rt=Z.door.clone().addScaledVector(Z.facing,5+bt()*.5).add(new I(Z.facing.z,0,-Z.facing.x).multiplyScalar((bt()-.5)*8));if(e.blocked(rt.x,rt.z,.5))continue;let z=bt()<.4,lt=ql(.3,.27,.95,10),ct=new ne().compose(new I(rt.x,z?.3:.48,rt.z),new He().setFromEuler(new Sn(z?Math.PI/2:0,bt()*6,0)),new I(1,1,1));n.add("paint",lt,ct,[2767402,3355443,2042426][Math.floor(bt()*3)])}let Pt=n.build(s,m,{asphalt:!1,paintLine:!1,lawn:!1,concrete:!0,glass:!1,lit:!1,bulb:!1,hazard:!1}),zt=new xn(.06,.5,1,3);zt.translate(0,.25,0);{let it=zt.attributes.position;for(let Z=0;Z<it.count;Z++){let rt=it.getY(Z);it.setX(Z,it.getX(Z)*(1-rt/.55)),it.setZ(Z,rt*rt*.4)}}zt.computeVertexNormals();let j=new pr(zt,new Qt({color:4870194,roughness:1,side:ln}),t.grass),Et=new ne,It=new Sn,Gt=new He,Tt=new I,Vt=new I,_e=new Zt,Ht=0;for(let it=0;it<t.grass*4&&Ht<t.grass;it++){let Z=(bt()-.5)*Ue*2,rt=(bt()-.5)*Ue*2;if(A(Z,rt)||e.blocked(Z,rt,.3))continue;It.set((bt()-.5)*.5,bt()*6.28,(bt()-.5)*.5);let z=.6+bt();Et.compose(Vt.set(Z,0,rt),Gt.setFromEuler(It),Tt.set(z,z,z)),j.setMatrixAt(Ht,Et),_e.setHSL(.15+bt()*.08,.3,.12+bt()*.12),j.setColorAt(Ht++,_e)}j.count=Ht,j.receiveShadow=!0,s.add(j);let ie=Di(128,170,185,200,!0),re=[];for(let it=0;it<t.mist;it++){let Z=new ai(new Vn({map:ie,transparent:!0,depthWrite:!1,opacity:.06+bt()*.08}));Z.position.set((bt()-.5)*80,.3+bt()*.8,(bt()-.5)*80),Z.scale.set(6+bt()*8,1.5+bt()*1.5,1),Z.userData.v=new ut((bt()-.5)*.4,(bt()-.5)*.4),s.add(Z),re.push(Z)}let K=new nn;{let it=Di(64,120,255,170),Z=new ai(new Vn({map:it,blending:Ii,transparent:!0,depthWrite:!1}));Z.scale.setScalar(1.4),Z.position.set(.9,.55,.9),K.add(Z),K.userData.flare=Z;let rt=new Wt(new mn(.03,.03,.3,6),new Qt({color:1127202,emissive:4521881,emissiveIntensity:2}));rt.position.set(.9,.5,.9),rt.rotation.z=.5,K.add(rt);let z=document.createElement("canvas");z.width=256,z.height=128;let lt=z.getContext("2d");lt.fillStyle="#6b5a44",lt.fillRect(0,0,256,128);for(let q=0;q<4;q++)lt.fillStyle="rgba(0,0,0,0.25)",lt.fillRect(0,q*32+30,256,3);lt.font="bold 74px Impact, Arial Black, sans-serif",lt.fillStyle="#3dff8f",lt.textAlign="center",lt.textBaseline="middle",lt.shadowColor="#3dff8f",lt.shadowBlur=8,lt.fillText("SAFE",128,66);let ct=new Wn(z);ct.colorSpace=De;let nt=new Wt(new xn(1.3,.65),new Qt({map:ct,emissiveMap:ct,emissive:3364147,roughness:.9}));nt.position.set(-1.25,.3,.75),nt.rotation.set(-.35,.25,0),nt.scale.setScalar(.8),K.add(nt);let b=new Dn({color:5636010});for(let[q,tt,pt,gt]of[[1.3,.06,0,2.2],[.06,2.2,-.65,1.1],[.06,2.2,.65,1.1]]){let Q=new Wt(new hn(q,tt,.05),b);Q.position.set(pt,gt,.14),K.add(Q)}let y=new Ls(6750122,12,14,1.6);y.position.set(0,1.6,1.6),K.add(y),K.userData.light=y;let O=new Wt(new Cr(1.75,1.95,48),new Dn({color:5636010,transparent:!0,opacity:.5,depthWrite:!1}));O.rotation.x=-Math.PI/2,O.position.set(0,.06-.45,1.5),K.add(O),K.userData.ring=O}K.visible=!1,s.add(K);let _t={obj:K,trigger:new I,house:null,place(it){this.house=it,K.position.set(it.door.x,it.doorY,it.door.z),K.rotation.y=it.ry,K.visible=!0,this.trigger.set(it.trigger.x,0,it.trigger.z)}},ft=new Jl(e),Ct=new Float32Array(ft.n*ft.n);function Mt(it,Z,rt){let z=ft.compute(it,Z,Ct),lt=null,ct=-1e9;for(let nt of C){if(nt===_t.house)continue;let[b,y]=ft.cell(nt.trigger.x,nt.trigger.z),O=z[y*ft.n+b]*ft.cs;if(O>1e8)continue;let q=e.sightBlocked(it,Z,nt.trigger.x,nt.trigger.z,nt.box),tt=-Math.abs(O-rt)+(q?1e3:0)+bt()*6;tt>ct&&(ct=tt,lt={h:nt,d:O,hidden:q})}return lt}let Xt=0,Ot=15+Math.random()*20,ae=0,se=[];function fe(it,Z,rt,z){let lt=z?z.x:0,ct=z?z.z:0;p.position.set(lt-24,30,ct-40),p.target.position.set(lt,0,ct),se.length=0;for(let nt of H)nt.d=Math.hypot(nt.l.x-lt,nt.l.z-ct),se.push(nt);se.sort((nt,b)=>nt.d-b.d),Y.forEach((nt,b)=>{let y=se[b];if(!y){nt.intensity=0;return}nt.position.set(y.l.x,6,y.l.z),nt.intensity=y.l.flicker?Math.sin(Z*23+b)>-.2||Math.random()<.3?18:2:18});for(let nt of H)if(nt.l.flicker){let b=Math.sin(Z*23)>-.2||Math.random()<.3;nt.g.material.opacity=b?.55:.1,nt.pool.material.opacity=b?.12:.02}if(ae+=it,m.hazard.emissiveIntensity=ae%1.1<.55?2.2:.05,K.visible){let nt=.8+Math.sin(Z*9)*.1+Math.random()*.15;K.userData.flare.scale.setScalar(1.4*nt),K.userData.light.intensity=10*nt,K.userData.ring.material.opacity=.35+Math.sin(Z*4)*.15}for(let nt of re){nt.position.x+=nt.userData.v.x*it,nt.position.z+=nt.userData.v.y*it;let b=nt.position.x-lt,y=nt.position.z-ct;Math.hypot(b,y)>42&&(nt.position.x=lt-b*.9,nt.position.z=ct-y*.9)}if(Ot-=it,Ot<=0){Xt=.6,Ot=18+Math.random()*25;let nt=1+Math.random()*2;setTimeout(()=>rt&&rt.ctx&&rt.thunder(nt),300+nt*900)}if(Xt>0){Xt-=it;let nt=Xt>0?(Math.sin(Xt*40)>0?1:.3)*(Xt/.6):0;l.uniforms.flash.value=nt,u.intensity=.75+nt*2.5}}let U=new I(-25,0,-25-Ni-1);return{col:e,nav:ft,groundHeight:T,update:fe,moonLight:p,goal:_t,houses:C,pickGoal:Mt,start:U,isStreet:A}}var Me=null;function Td(){Me={skin:[],cloth:[],pants:[]};for(let s=0;s<4;s++)Me.skin.push(new Qt({...pd(s),roughness:1,normalScale:new ut(.9,.9)}));for(let s=0;s<5;s++)Me.cloth.push(new Qt({...Xl(s),roughness:1,side:ln})),Me.pants.push(new Qt({...Xl(s+7),roughness:1,side:ln}));Me.eye=new Qt({color:14209696,emissive:10127920,emissiveIntensity:.9,roughness:.15}),Me.socket=new Qt({color:1181190,roughness:.9}),Me.teeth=new Qt({color:10260322,roughness:.5}),Me.mouth=new Qt({color:2753283,roughness:.4}),Me.gore=new Qt({color:5899525,roughness:.25,metalness:.05}),Me.bone=new Qt({color:14273706,roughness:.6}),Me.hair=new Qt({color:1709586,roughness:1})}function pi(s,t=.015,e=3,n=0){let i=s.attributes.position,r=s.attributes.normal;for(let a=0;a<i.count;a++){let o=i.getX(a),c=i.getY(a),l=i.getZ(a),h=Kt(o*e*.25+n,(c+l)*e*.25+n*.3,2,3)*t;i.setXYZ(a,o+r.getX(a)*h,c+r.getY(a)*h,l+r.getZ(a)*h)}return s.computeVertexNormals(),s}function cc(s,t,e,n){let i=pi(new Xn(s,t,6,12),s*.15,6,n);i.translate(0,-t/2-s*.4,0);let r=new Wt(i,e);return r.castShadow=!0,r}function fi(){return new nn}var $r=null;function zx(){if($r)return $r;$r=[];for(let s=0;s<3;s++){let t=new Ye(.13,28,22),e=t.attributes.position;for(let n=0;n<e.count;n++){let i=e.getX(n),r=e.getY(n),a=e.getZ(n);r*=1.18,i*=.92,a>.04&&r<0&&(i*=.85- -r*.6),a>.05&&r>.03&&r<.07&&(a+=.012),a>.05&&Math.abs(i)>.05&&r<0&&r>-.08&&(a-=.012),a>.1&&Math.abs(i)<.02&&r>-.04&&r<.03&&(a+=.022*(1-Math.abs(i)/.02)),e.setXYZ(n,i,r,a)}t.computeVertexNormals(),pi(t,.008,9,s*7),$r.push(t)}return $r}var Kr=class{constructor(t,e,n){this.scene=t,this.speed=n.speed,this.runner=n.runner,this.alive=!0,this.state="walk",this.t=Math.random()*10,this.attackTimer=0,this.stagger=0,this.deathT=0,this.stuckAxes=[],this.voiceTimer=1+Math.random()*4,this.pitch=.8+Math.random()*.45,this.limp=Math.random()*.6,this.lastStepPhase=0,this.headPos=new I,this.hp=3;let i=Me.skin[Math.floor(Math.random()*Me.skin.length)],r=Me.cloth[Math.floor(Math.random()*Me.cloth.length)],a=Me.pants[Math.floor(Math.random()*Me.pants.length)],o=.92+Math.random()*.18,c=Math.random()*100,l=this.root=new nn;l.rotation.order="YXZ",l.position.copy(e),l.scale.setScalar(o);let h=this.hips=fi();h.position.y=.98,l.add(h);let d=new Wt(pi(new Xn(.13,.1,4,12),.02,5,c),a);d.rotation.z=Math.PI/2,d.scale.set(1,1.05,.72),d.castShadow=!0,h.add(d);let f=this.spine=fi();f.position.y=.05,h.add(f);let u=pi(new Xn(.15,.36,6,16),.022,4,c+1);u.translate(0,.3,0);let p=new Wt(u,r);if(p.scale.set(1.08,1,.66),p.castShadow=!0,f.add(p),Math.random()<.5){let x=new Wt(new Ye(.07,12,8),Me.gore);x.scale.set(1,1.3,.35),x.position.set((Math.random()-.5)*.15,.32,.11),f.add(x);for(let v=0;v<3;v++){let C=new Wt(new Xi(.05,.007,4,10,Math.PI),Me.bone);C.position.set(x.position.x,.28+v*.035,.12),C.rotation.x=Math.PI/2-.3,f.add(C)}}let _=this.neck=fi();_.position.y=.62,f.add(_);let m=new Wt(pi(new mn(.055,.07,.12,12),.008,8,c),i);m.position.y=.04,m.castShadow=!0,_.add(m),this.neckMesh=m;let g=this.head=fi();g.position.y=.17,_.add(g);let M=new Wt(zx()[Math.floor(Math.random()*3)],i);M.castShadow=!0,g.add(M);for(let x of[-1,1]){let v=new Wt(new Ye(.03,10,8),Me.socket);v.position.set(x*.045,.02,.105),v.scale.set(1.1,.8,.6),g.add(v);let C=new Wt(new Ye(.017,10,8),Me.eye);C.position.set(x*.045+(Math.random()-.5)*.008,.018,.112),g.add(C)}let T=new Wt(new Ye(.045,12,8),Me.mouth);T.position.set(0,-.075,.095),T.scale.set(1,.7,.5),g.add(T);let S=this.jaw=fi();S.position.set(0,-.06,.02),g.add(S);let A=new Wt(pi(new Ye(.09,16,10,0,Math.PI*2,Math.PI*.5,Math.PI*.35),.006,9,c),i);A.scale.set(.95,.9,1.05),A.position.set(0,.035,.015),S.add(A);let w=new hn(.009,.016,.006);for(let x=0;x<8;x++){if(Math.random()<.25)continue;let v=(x/7-.5)*1.6,C=new Wt(w,Me.teeth);C.position.set(Math.sin(v)*.045,-.06,.08+Math.cos(v)*.03),C.rotation.z=(Math.random()-.5)*.4,g.add(C);let R=new Wt(w,Me.teeth);R.position.set(Math.sin(v)*.04,-.015,.075+Math.cos(v)*.028),S.add(R)}if(Math.random()<.7){let x=new Wt(pi(new Ye(.138,16,10,0,Math.PI*2,0,Math.PI*.42),.02,12,c+9),Me.hair);x.scale.y=1.15,x.rotation.x=-.25+Math.random()*.2,g.add(x)}this.arms=[];for(let x of[-1,1]){let v=fi();v.position.set(x*.21,.52,0),f.add(v);let C=cc(.055,.22,Math.random()<.5?r:i,c+x);v.add(C);let R=fi();R.position.y=-.31,v.add(R);let D=cc(.045,.22,i,c+x*3);R.add(D);let F=new Wt(pi(new Ye(.05,10,8),.01,10,c),i);F.scale.set(.8,1.3,.5),F.position.y=-.33,F.castShadow=!0,R.add(F);for(let V=0;V<4;V++){let P=new Wt(new Xn(.008,.05,2,5),i);P.position.set((V-1.5)*.016,-.4,.008),P.rotation.x=.4,R.add(P)}this.arms.push({sh:v,el:R,sx:x})}this.legs=[];for(let x of[-1,1]){let v=fi();v.position.set(x*.1,-.02,0),h.add(v);let C=cc(.075,.33,a,c+x*5);v.add(C);let R=fi();R.position.y=-.45,v.add(R);let D=cc(.06,.33,a,c+x*7);R.add(D);let F=new Wt(pi(new hn(.1,.07,.24,2,2,3),.01,8,c),Me.socket);F.position.set(0,-.47,.05),F.castShadow=!0,R.add(F),this.legs.push({hip:v,knee:R,sx:x})}t.add(l),this.collisionParts=[{obj:p,r:.22,off:new I(0,.3,0),part:"body"},{obj:d,r:.18,off:new I,part:"body"}]}getHeadWorld(t){return this.head.getWorldPosition(t)}faceTowards(t,e,n=3){let i=t.x-this.root.position.x,r=t.z-this.root.position.z,o=Math.atan2(i,r)-this.root.rotation.y;for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;this.root.rotation.y+=o*Math.min(1,e*n)}update(t,e,n){if(this.t+=t,!this.alive)return this._updateDead(t);let i=this.root.position,r=Math.hypot(e.x-i.x,e.z-i.z);this.faceTowards(this.steer||e,t,this.steer?5:3),this.stagger=Math.max(0,this.stagger-t),this.voiceTimer-=t,this.voiceTimer<=0&&(!this.dormant||Math.random()<.3)&&(this.getHeadWorld(this.headPos),n.audio.zombieVoice(this.headPos,this.runner&&Math.random()<.5?"scream":r<4?"snarl":"groan",this.pitch),this.voiceTimer=2.5+Math.random()*5);let a=this.speed*(this.speedMul===void 0?1:this.speedMul),o=this.t*(this.runner?9:3.6)*(.6+Math.min(this.speed,a+.3)*.5);if(r>1.15){this.state="walk";let u=this.speed*(this.speedMul===void 0?1:this.speedMul)*(this.stagger>0?.1:1)*(this.runner?1:1-this.limp*.3*Math.max(0,Math.sin(o)));i.x+=Math.sin(this.root.rotation.y)*u*t,i.z+=Math.cos(this.root.rotation.y)*u*t}else this.state="attack",this.attackTimer-=t,this.attackTimer<=0&&(this.attackTimer=1.3,this.attackAnim=.5,n.playerHit(this.runner?14:11,this));this.attackAnim>0&&(this.attackAnim-=t);let c=Math.sin(o),l=Math.cos(o),h=this.state==="walk"?1:.2,d=this.runner?.35:.12;this.hips.position.y=.98-Math.abs(l)*.04*h,this.hips.rotation.z=c*.08*h+this.limp*.08,this.hips.rotation.y=c*.12*h,this.spine.rotation.x=d+Math.sin(this.t*1.3)*.04-this.stagger*.8,this.spine.rotation.z=-c*.1*h+Math.sin(this.t*.7)*.05,this.neck.rotation.x=-d*.6+Math.sin(this.t*2.1)*.08,this.neck.rotation.z=Math.sin(this.t*.9+this.limp*5)*.25,this.jaw.rotation.x=.25+Math.abs(Math.sin(this.t*3.3))*.35;for(let u of this.legs){let p=u.sx*c,_=u.sx>0?this.limp:0;u.hip.rotation.x=-p*(this.runner?.8:.45)*h*(1-_*.6),u.knee.rotation.x=Math.max(0,-Math.cos(o+(u.sx>0?0:Math.PI)))*(this.runner?1.3:.7)*h+.05,u.hip.rotation.z=u.sx*.04}for(let u of this.arms){if(this.runner)u.sh.rotation.x=u.sx*c*.9-.3,u.el.rotation.x=-1.2;else{let p=this.attackAnim>0?-1.9+Math.sin(this.attackAnim*12)*.4:-1.35;u.sh.rotation.x=p+Math.sin(this.t*2+u.sx)*.12+u.sx*c*.08,u.el.rotation.x=-.25+Math.sin(this.t*3+u.sx*2)*.1}u.sh.rotation.z=-u.sx*.08}let f=Math.floor(o/Math.PI);f!==this.lastStepPhase&&this.state==="walk"&&(this.lastStepPhase=f,r<12&&(this.root.getWorldPosition(this.headPos),n.audio.zombieStep(this.headPos)))}hitBody(t,e){return this.stagger=.6,this.hp--,this.root.position.x+=e.x*.35,this.root.position.z+=e.z*.35,this.hp<=0?(this.die(t,!1),!0):!1}die(t,e,n){if(this.alive&&(this.alive=!1,this.deathT=0,this.fallDir=Math.random()<.6?-1:1,this.decap=e,e)){let i=new I,r=new He,a=new I;this.head.getWorldPosition(i),this.head.getWorldQuaternion(r),this.head.getWorldScale(a),this.neck.remove(this.head),this.head.position.copy(i),this.head.quaternion.copy(r),this.head.scale.copy(a),this.scene.add(this.head);let o=n?n.clone().multiplyScalar(.25):new I;o.y+=2.5+Math.random()*1.5,this.headVel=o,this.headSpin=new I((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),this.headRest=!1;let c=new Wt(new yr(.058,14),Me.gore);c.rotation.x=-Math.PI/2,c.position.y=.105,this.neck.add(c);let l=new Wt(new mn(.012,.012,.03,6),Me.bone);l.position.y=.115,this.neck.add(l)}}_updateDead(t){this.deathT+=t;let e=Math.min(1,this.deathT/.9),n=e*e*(3-2*e);for(let i of this.legs)i.knee.rotation.x=n*1.2,i.hip.rotation.x=-n*.6;this.hips.position.y=.98-n*.55+(e>=1,0),this.root.rotation.x=this.fallDir*-n*(Math.PI/2-.15)*(e>.4?1:e/.4);for(let i of this.arms)i.sh.rotation.x=-n*2.6*(this.fallDir>0?.3:1),i.el.rotation.x=-.4;if(this.deathT>.4&&!this.fallen&&(this.fallen=!0,this.onFall&&this.onFall()),this.headVel&&!this.headRest){let i=this.head;this.headVel.y-=9.8*t,i.position.addScaledVector(this.headVel,t),i.rotation.x+=this.headSpin.x*t,i.rotation.y+=this.headSpin.y*t,i.rotation.z+=this.headSpin.z*t,i.position.y<.12&&(i.position.y=.12,Math.abs(this.headVel.y)>1.5?(this.headVel.y*=-.35,this.headVel.x*=.5,this.headVel.z*=.5,this.headSpin.multiplyScalar(.4),this.onHeadBounce&&this.onHeadBounce(i.position)):this.headRest=!0)}if(this.deathT>6){let i=(this.deathT-6)*.35;if(this.root.position.y=-i,this.decap&&(this.head.position.y-=t*.35),this.deathT>8.5)return"remove"}return null}dispose(){this.scene.remove(this.root),this.decap&&this.scene.remove(this.head)}};var lc=class{constructor(){this.ctx=null,this.enabled=!0}init(){if(this.ctx){this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext,e=this.ctx=new t({latencyHint:"interactive"});this.master=e.createGain(),this.master.gain.value=.9;let n=e.createDynamicsCompressor();n.threshold.value=-14,n.ratio.value=4,this.master.connect(n).connect(e.destination),this.reverb=e.createConvolver(),this.reverb.buffer=this._impulse(2.8,2.5),this.reverbSend=e.createGain(),this.reverbSend.gain.value=.35,this.reverbSend.connect(this.reverb).connect(this.master),this.sfx=e.createGain(),this.sfx.gain.value=1,this.sfx.connect(this.master),this.sfx.connect(this.reverbSend),this.noiseBuf=this._noise(2),this.brownBuf=this._brown(4),this._ambient(),this.heartbeatOn=!1,this._heartLoop()}suspend(){this.ctx&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.resume()}_noise(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=e.getChannelData(0);for(let i=0;i<n.length;i++)n[i]=Math.random()*2-1;return e}_brown(t){let e=this.ctx.createBuffer(1,this.ctx.sampleRate*t,this.ctx.sampleRate),n=e.getChannelData(0),i=0;for(let r=0;r<n.length;r++)i=(i+.02*(Math.random()*2-1))/1.02,n[r]=i*3.5;return e}_impulse(t,e){let n=this.ctx.sampleRate,i=n*t,r=this.ctx.createBuffer(2,i,n);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let c=0;c<i;c++)o[c]=(Math.random()*2-1)*Math.pow(1-c/i,e)}return r}listener(t,e,n){if(!this.ctx)return;let i=this.ctx.listener,r=this.ctx.currentTime;i.positionX?(i.positionX.setValueAtTime(t.x,r),i.positionY.setValueAtTime(t.y,r),i.positionZ.setValueAtTime(t.z,r),i.forwardX.setValueAtTime(e.x,r),i.forwardY.setValueAtTime(e.y,r),i.forwardZ.setValueAtTime(e.z,r),i.upX.setValueAtTime(n.x,r),i.upY.setValueAtTime(n.y,r),i.upZ.setValueAtTime(n.z,r)):(i.setPosition(t.x,t.y,t.z),i.setOrientation(e.x,e.y,e.z,n.x,n.y,n.z))}panner(t){let e=this.ctx.createPanner();return e.panningModel="HRTF",e.distanceModel="inverse",e.refDistance=2,e.rolloffFactor=1.1,e.maxDistance=80,this.setPos(e,t),e.connect(this.sfx),e}setPos(t,e){if(t.positionX){let n=this.ctx.currentTime;t.positionX.setValueAtTime(e.x,n),t.positionY.setValueAtTime(e.y,n),t.positionZ.setValueAtTime(e.z,n)}else t.setPosition(e.x,e.y,e.z)}_out(t){return t?this.panner(t):this.sfx}_noiseSrc(t=this.noiseBuf,e=!1){let n=this.ctx.createBufferSource();return n.buffer=t,n.loop=e,n.loopStart=0,n.playbackRate.value=1,n}_env(t,e,n,i,r,a=1e-4){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(i,e+n),t.gain.exponentialRampToValueAtTime(Math.max(a,1e-4),e+n+r)}_ambient(){let t=this.ctx,e=this._noiseSrc(this.brownBuf,!0),n=t.createBiquadFilter();n.type="bandpass",n.Q.value=.7,n.frequency.value=400;let i=t.createGain();i.gain.value=.25,e.connect(n).connect(i).connect(this.master),e.start();let r=this._noiseSrc(this.noiseBuf,!0),a=t.createBiquadFilter();a.type="bandpass",a.Q.value=12,a.frequency.value=900;let o=t.createGain();o.gain.value=.015,r.connect(a).connect(o).connect(this.master),r.start();let c=()=>{let p=t.currentTime,_=2+Math.random()*4;n.frequency.setTargetAtTime(200+Math.random()*600,p,_/2),i.gain.setTargetAtTime(.12+Math.random()*.35,p,_/2),a.frequency.setTargetAtTime(600+Math.random()*900,p,_/2),o.gain.setTargetAtTime(Math.random()*.03,p,_/2),setTimeout(c,_*1e3)};c();let l=t.createGain();l.gain.value=0;let h=t.createBiquadFilter();h.type="lowpass",h.frequency.value=220,l.connect(h).connect(this.master),[41.2,41.5,61.7,82.1].forEach((p,_)=>{let m=t.createOscillator();m.type=_<2?"sawtooth":"triangle",m.frequency.value=p;let g=t.createGain();g.gain.value=_<2?.25:.15,m.connect(g).connect(l),m.start()});let d=()=>{let p=t.currentTime,_=6+Math.random()*8;l.gain.setTargetAtTime(.03+Math.random()*.07,p,_/3),h.frequency.setTargetAtTime(120+Math.random()*200,p,_/3),setTimeout(d,_*1e3)};d();let f=()=>{let p=t.currentTime,_=4200+Math.random()*600,m=this._randAround(15,30),g=this.panner(m),M=2+Math.floor(Math.random()*4);for(let T=0;T<M;T++){let S=t.createOscillator();S.frequency.value=_;let A=t.createGain(),w=p+T*.09;A.gain.setValueAtTime(0,w);for(let x=0;x<4;x++)A.gain.setValueAtTime(.05,w+x*.012),A.gain.setValueAtTime(0,w+x*.012+.006);S.connect(A).connect(g),S.start(w),S.stop(w+.06)}setTimeout(f,400+Math.random()*1800)};f(),setTimeout(f,700);let u=()=>{Math.random()<.55?this.owl(this._randAround(25,45)):this.crow(this._randAround(25,50)),setTimeout(u,9e3+Math.random()*16e3)};setTimeout(u,5e3)}_randAround(t,e){let n=Math.random()*Math.PI*2,i=t+Math.random()*(e-t);return{x:Math.cos(n)*i,y:4+Math.random()*6,z:Math.sin(n)*i}}owl(t){let e=this.ctx,n=this.panner(t),i=(a,o,c)=>{let l=e.createOscillator();l.type="sine",l.frequency.setValueAtTime(c*.9,a),l.frequency.linearRampToValueAtTime(c,a+.05),l.frequency.linearRampToValueAtTime(c*.94,a+o);let h=e.createGain();this._env(h,a,.05,.25,o),l.connect(h).connect(n),l.start(a),l.stop(a+o+.1)},r=e.currentTime;i(r,.35,380),i(r+.6,.15,400),i(r+.8,.15,400),i(r+1.1,.6,370)}crow(t){let e=this.ctx,n=this.panner(t),i=2+Math.floor(Math.random()*3);for(let r=0;r<i;r++){let a=e.currentTime+r*.38,o=e.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(520,a),o.frequency.linearRampToValueAtTime(380,a+.25);let c=this._noiseSrc(),l=e.createGain();l.gain.value=.4;let h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=1300,h.Q.value=3;let d=e.createBiquadFilter();d.type="bandpass",d.frequency.value=2400,d.Q.value=4;let f=e.createGain();this._env(f,a,.02,.3,.26),o.connect(h),c.connect(l).connect(h),o.connect(d),h.connect(f),d.connect(f),f.connect(n),o.start(a),o.stop(a+.32),c.start(a),c.stop(a+.32)}}thunder(t=1){let e=this.ctx,n=e.currentTime,i=this._noiseSrc(this.brownBuf),r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=300/t+80;let a=e.createGain();a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(1.2/t,n+.08),a.gain.exponentialRampToValueAtTime(.5/t,n+.8),a.gain.exponentialRampToValueAtTime(.7/t,n+1.4),a.gain.exponentialRampToValueAtTime(1e-4,n+4.5),i.connect(r).connect(a).connect(this.master),a.connect(this.reverbSend),i.start(n),i.stop(n+4.6)}zombieVoice(t,e="groan",n=1){if(!this.ctx)return;let i=this.ctx,r=i.currentTime,a=t?this.panner(t):this.sfx,o={groan:1.1+Math.random()*1.2,snarl:.5,scream:.9,pain:.45,die:1.6}[e],c={groan:85,snarl:120,scream:210,pain:150,die:95}[e]*n*(.85+Math.random()*.3),l=i.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(c,r),e==="die"?l.frequency.exponentialRampToValueAtTime(c*.45,r+o):e==="scream"?(l.frequency.linearRampToValueAtTime(c*1.4,r+.2),l.frequency.linearRampToValueAtTime(c*.8,r+o)):l.frequency.linearRampToValueAtTime(c*(.8+Math.random()*.4),r+o);let h=i.createOscillator();h.type="square",h.frequency.value=23+Math.random()*20;let d=i.createGain();d.gain.value=c*.18,h.connect(d).connect(l.frequency);let f=this._noiseSrc();f.playbackRate.value=.7;let u=i.createGain();u.gain.value=e==="snarl"?.9:.35;let p=i.createGain();p.gain.value=1,l.connect(p),f.connect(u).connect(p);let _=[[300,870,2240],[730,1090,2440],[520,1190,2390],[570,840,2410]],m=_[Math.floor(Math.random()*4)],g=_[Math.floor(Math.random()*4)],M=i.createGain();[0,1,2].forEach(v=>{let C=i.createBiquadFilter();C.type="bandpass",C.Q.value=v===0?5:8,C.frequency.setValueAtTime(m[v]*n,r),C.frequency.linearRampToValueAtTime(g[v]*n,r+o*.7);let R=i.createGain();R.gain.value=[1,.6,.25][v],p.connect(C).connect(R).connect(M)});let T=i.createGain();T.gain.value=.7;let S=i.createOscillator();S.frequency.value=5+Math.random()*9;let A=i.createGain();A.gain.value=.3,S.connect(A).connect(T.gain);let w=i.createGain(),x={groan:.9,snarl:1.1,scream:1,pain:1.2,die:1}[e];w.gain.setValueAtTime(1e-4,r),w.gain.exponentialRampToValueAtTime(x,r+.08),w.gain.setValueAtTime(x*.8,r+o*.6),w.gain.exponentialRampToValueAtTime(1e-4,r+o),M.connect(T).connect(w).connect(a),[l,h,f,S].forEach(v=>{v.start(r),v.stop(r+o+.05)})}zombieStep(t){let e=this.ctx,n=e.currentTime,i=this.panner(t),r=this._noiseSrc(),a=e.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(900,n),a.frequency.exponentialRampToValueAtTime(200,n+.25);let o=e.createGain();this._env(o,n,.03,.25,.25),r.connect(a).connect(o).connect(i),r.start(n,Math.random()),r.stop(n+.3)}whoosh(){let t=this.ctx,e=t.currentTime,n=this._noiseSrc(),i=t.createBiquadFilter();i.type="bandpass",i.Q.value=2.5,i.frequency.setValueAtTime(300,e),i.frequency.exponentialRampToValueAtTime(2200,e+.12),i.frequency.exponentialRampToValueAtTime(500,e+.3);let r=t.createGain();this._env(r,e,.07,.8,.25),n.connect(i).connect(r).connect(this.sfx),n.start(e,Math.random()),n.stop(e+.35);let a=t.createOscillator();a.type="sawtooth",a.frequency.setValueAtTime(130,e),a.frequency.linearRampToValueAtTime(100,e+.15);let o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=600,o.Q.value=3;let c=t.createGain();this._env(c,e,.02,.12,.15),a.connect(o).connect(c).connect(this.sfx),a.start(e),a.stop(e+.2)}spinLoop(t,e){let n=this.ctx,i=n.currentTime,r=this.panner(t),a=this._noiseSrc(this.noiseBuf,!0),o=n.createBiquadFilter();o.type="bandpass",o.frequency.value=1100,o.Q.value=1.5;let c=n.createGain();c.gain.value=0;let l=n.createOscillator();l.type="sine",l.frequency.value=e;let h=n.createGain();return h.gain.value=.35,l.connect(h).connect(c.gain),a.connect(o).connect(c).connect(r),a.start(i,Math.random()),l.start(i),{update:d=>this.setPos(r,d),stop:()=>{let d=n.currentTime;try{a.stop(d+.02),l.stop(d+.02)}catch{}}}}headHit(t){let e=this.ctx,n=e.currentTime,i=this.panner(t);for(let h=0;h<5;h++){let d=n+h*.012+Math.random()*.01,f=this._noiseSrc(),u=e.createBiquadFilter();u.type="highpass",u.frequency.value=1800;let p=e.createGain();this._env(p,d,.001,1.4,.03),f.connect(u).connect(p).connect(i),f.start(d,Math.random()),f.stop(d+.05)}let r=e.createOscillator();r.frequency.setValueAtTime(140,n),r.frequency.exponentialRampToValueAtTime(45,n+.2);let a=e.createGain();this._env(a,n,.004,1.5,.25),r.connect(a).connect(i),r.start(n),r.stop(n+.3),this.squelch(t,1.3);let o=this._noiseSrc(),c=e.createBiquadFilter();c.type="bandpass",c.frequency.value=3e3,c.Q.value=.8;let l=e.createGain();l.gain.setValueAtTime(1e-4,n+.05),l.gain.exponentialRampToValueAtTime(.35,n+.1),l.gain.exponentialRampToValueAtTime(1e-4,n+1.3),o.connect(c).connect(l).connect(i),o.start(n+.05,Math.random()),o.stop(n+1.4)}squelch(t,e=1){let n=this.ctx,i=n.currentTime,r=t?this.panner(t):this.sfx,a=this._noiseSrc(),o=n.createBiquadFilter();o.type="lowpass",o.Q.value=9,o.frequency.setValueAtTime(2500,i),o.frequency.exponentialRampToValueAtTime(250,i+.22);let c=n.createGain();this._env(c,i,.005,.9*e,.28),a.connect(o).connect(c).connect(r),a.start(i,Math.random()),a.stop(i+.32)}bodyHit(t){let e=this.ctx,n=e.currentTime,i=this.panner(t),r=e.createOscillator();r.frequency.setValueAtTime(110,n),r.frequency.exponentialRampToValueAtTime(50,n+.15);let a=e.createGain();this._env(a,n,.003,1.2,.2),r.connect(a).connect(i),r.start(n),r.stop(n+.25),this.squelch(t,.8)}groundThunk(t){let e=this.ctx,n=e.currentTime,i=this.panner(t),r=e.createOscillator();r.frequency.setValueAtTime(90,n),r.frequency.exponentialRampToValueAtTime(40,n+.15);let a=e.createGain();this._env(a,n,.002,1,.18),r.connect(a).connect(i),r.start(n),r.stop(n+.2);let o=this._noiseSrc(),c=e.createBiquadFilter();c.type="lowpass",c.frequency.value=1400;let l=e.createGain();this._env(l,n,.002,.6,.2),o.connect(c).connect(l).connect(i),o.start(n,Math.random()),o.stop(n+.25)}woodThunk(t){let e=this.ctx,n=e.currentTime,i=this.panner(t);[180,410,730].forEach((f,u)=>{let p=e.createOscillator();p.frequency.value=f*(.95+Math.random()*.1);let _=e.createGain();this._env(_,n,.002,[.9,.4,.2][u],.18-u*.04),p.connect(_).connect(i),p.start(n),p.stop(n+.25)});let r=this._noiseSrc(),a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=2500;let o=e.createGain();this._env(o,n,.001,.6,.05),r.connect(a).connect(o).connect(i),r.start(n,Math.random()),r.stop(n+.08);let c=e.createOscillator();c.frequency.value=95;let l=e.createGain();this._env(l,n,.01,.25,.5);let h=e.createOscillator();h.frequency.value=18;let d=e.createGain();d.gain.value=.2,h.connect(d).connect(l.gain),c.connect(l).connect(i),c.start(n),c.stop(n+.6),h.start(n),h.stop(n+.6)}stoneClang(t){let e=this.ctx,n=e.currentTime,i=this.panner(t);[1250,2710,3980,5600].forEach((c,l)=>{let h=e.createOscillator();h.frequency.value=c*(.97+Math.random()*.06);let d=e.createGain();this._env(d,n,.001,.35/(l+1),.5-l*.08),h.connect(d).connect(i),h.start(n),h.stop(n+.6)});let r=this._noiseSrc(),a=e.createBiquadFilter();a.type="highpass",a.frequency.value=2e3;let o=e.createGain();this._env(o,n,.001,.8,.07),r.connect(a).connect(o).connect(i),r.start(n,Math.random()),r.stop(n+.1)}bodyFall(t){let e=this.ctx,n=e.currentTime,i=this.panner(t);[0,.12].forEach((o,c)=>{let l=e.createOscillator();l.frequency.setValueAtTime(70,n+o),l.frequency.exponentialRampToValueAtTime(35,n+o+.2);let h=e.createGain();this._env(h,n+o,.005,c?.6:1,.3),l.connect(h).connect(i),l.start(n+o),l.stop(n+o+.35)});let r=this._noiseSrc(this.brownBuf),a=e.createGain();this._env(a,n,.01,.7,.4),r.connect(a).connect(i),r.start(n,Math.random()*2),r.stop(n+.45)}bite(){let t=this.ctx,e=t.currentTime;this.zombieVoice(null,"snarl",1);for(let n=0;n<3;n++){let i=e+.08+n*.02,r=this._noiseSrc(),a=t.createBiquadFilter();a.type="highpass",a.frequency.value=1500;let o=t.createGain();this._env(o,i,.001,.9,.04),r.connect(a).connect(o).connect(this.sfx),r.start(i,Math.random()),r.stop(i+.06)}this.squelch(null,.9)}playerHurt(){let t=this.ctx,e=t.currentTime+.05,n=t.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(160,e),n.frequency.linearRampToValueAtTime(110,e+.3);let i=t.createGain();[[650,6],[1080,8]].forEach(([a,o])=>{let c=t.createBiquadFilter();c.type="bandpass",c.frequency.value=a,c.Q.value=o,n.connect(c).connect(i)});let r=t.createGain();this._env(r,e,.02,.9,.35),i.connect(r).connect(this.sfx),n.start(e),n.stop(e+.4)}_beat(t,e){let n=this.ctx,i=n.createOscillator();i.frequency.setValueAtTime(60,t),i.frequency.exponentialRampToValueAtTime(35,t+.12);let r=n.createGain();this._env(r,t,.01,e,.15),i.connect(r).connect(this.master),i.start(t),i.stop(t+.2)}_heartLoop(){if(this.heartbeatOn){let t=this.ctx.currentTime;this._beat(t,.9),this._beat(t+.22,.6)}setTimeout(()=>this._heartLoop(),this.heartbeatOn?750:300)}bell(){let t=this.ctx,e=t.currentTime;[1,2.01,2.76,4.07,5.43].forEach((n,i)=>{let r=t.createOscillator();r.frequency.value=98*n;let a=t.createGain();this._env(a,e,.005,.35/(i+1),5-i*.7),r.connect(a),a.connect(this.master),a.connect(this.reverbSend),r.start(e),r.stop(e+5.2)})}gameOver(){let t=this.ctx,e=t.currentTime;[55,58.3,82.4,110].forEach(n=>{let i=t.createOscillator();i.type="sawtooth",i.frequency.setValueAtTime(n,e),i.frequency.exponentialRampToValueAtTime(n*.5,e+4);let r=t.createBiquadFilter();r.type="lowpass",r.frequency.value=400;let a=t.createGain();this._env(a,e,.3,.2,4),i.connect(r).connect(a),a.connect(this.master),a.connect(this.reverbSend),i.start(e),i.stop(e+4.5)})}playerStep(t){let e=this.ctx,n=e.currentTime,i=this._noiseSrc(),r=e.createBiquadFilter();r.type="bandpass",r.Q.value=.9,r.frequency.value=700+Math.random()*500;let a=e.createGain();this._env(a,n,.008,t?.4:.28,.13),i.connect(r).connect(a).connect(this.sfx),i.start(n,Math.random()),i.stop(n+.17);let o=this._noiseSrc(),c=e.createBiquadFilter();c.type="highpass",c.frequency.value=3500;let l=e.createGain();this._env(l,n+.02,.004,.07,.07),o.connect(c).connect(l).connect(this.sfx),o.start(n+.02,Math.random()),o.stop(n+.1);let h=e.createOscillator();h.frequency.setValueAtTime(75,n),h.frequency.exponentialRampToValueAtTime(40,n+.08);let d=e.createGain();this._env(d,n,.004,.25,.09),h.connect(d).connect(this.sfx),h.start(n),h.stop(n+.12)}goalHum(){if(this._hum)return this._hum;let t=this.ctx,e=t.currentTime,n=this.ctx.createPanner();n.panningModel="HRTF",n.distanceModel="inverse",n.refDistance=4,n.rolloffFactor=.8,n.maxDistance=120;let i=t.createGain();i.gain.value=0,n.connect(i),i.connect(this.master),i.connect(this.reverbSend);let r=t.createGain();r.gain.value=.12,r.connect(n),[220,261.6,329.6,440.8,221.3].forEach((l,h)=>{let d=t.createOscillator();d.type=h===4?"triangle":"sine",d.frequency.value=l;let f=t.createGain();f.gain.value=.25;let u=t.createOscillator();u.frequency.value=.15+h*.07;let p=t.createGain();p.gain.value=.18,u.connect(p).connect(f.gain),d.connect(f).connect(r),d.start(e),u.start(e)});let a=this._noiseSrc(this.noiseBuf,!0),o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=2600,o.Q.value=6;let c=t.createGain();return c.gain.value=.15,a.connect(o).connect(c).connect(r),a.start(e),this._hum={setPos:l=>this.setPos(n,l),on:l=>i.gain.setTargetAtTime(l?1:0,t.currentTime,.6)},this._hum}knock(t){let e=this.ctx,n=e.currentTime,i=this.panner(t);for(let r=0;r<2;r++){let a=n+r*.22,o=e.createOscillator();o.frequency.setValueAtTime(130,a),o.frequency.exponentialRampToValueAtTime(60,a+.12);let c=e.createGain();this._env(c,a,.002,1.1,.16),o.connect(c).connect(i),o.start(a),o.stop(a+.2);let l=this._noiseSrc(),h=e.createBiquadFilter();h.type="bandpass",h.frequency.value=900,h.Q.value=1.2;let d=e.createGain();this._env(d,a,.001,.6,.08),l.connect(h).connect(d).connect(i),l.start(a,Math.random()),l.stop(a+.1)}if(Math.random()<.4){let r=e.createOscillator();r.type="sawtooth",r.frequency.setValueAtTime(180,n+.5),r.frequency.linearRampToValueAtTime(120,n+.9);let a=e.createBiquadFilter();a.type="bandpass",a.frequency.value=700,a.Q.value=8;let o=e.createGain();this._env(o,n+.5,.05,.12,.4),r.connect(a).connect(o).connect(i),r.start(n+.5),r.stop(n+1)}}breath(){let t=this.ctx,e=t.currentTime;[[0,.32,1400],[.4,.4,900]].forEach(([n,i,r])=>{let a=this._noiseSrc(),o=t.createBiquadFilter();o.type="bandpass",o.frequency.value=r,o.Q.value=1.4;let c=t.createGain();c.gain.setValueAtTime(1e-4,e+n),c.gain.exponentialRampToValueAtTime(.22,e+n+i*.4),c.gain.exponentialRampToValueAtTime(1e-4,e+n+i),a.connect(o).connect(c).connect(this.sfx),a.start(e+n,Math.random()),a.stop(e+n+i+.05)})}levelComplete(){let t=this.ctx,e=t.currentTime;[261.6,329.6,392,523.2].forEach((n,i)=>{let r=e+i*.18;[1,2.01,3.02].forEach((a,o)=>{let c=t.createOscillator();c.frequency.value=n*a;let l=t.createGain();this._env(l,r,.01,.22/(o+1),2.5),c.connect(l),l.connect(this.master),l.connect(this.reverbSend),c.start(r),c.stop(r+2.6)})})}pickup(){let t=this.ctx,e=t.currentTime,n=this._noiseSrc(),i=t.createBiquadFilter();i.type="bandpass",i.frequency.value=3500,i.Q.value=3;let r=t.createGain();this._env(r,e,.003,.15,.08),n.connect(i).connect(r).connect(this.sfx),n.start(e,Math.random()),n.stop(e+.1)}click(){let t=this.ctx,e=t.currentTime,n=t.createOscillator();n.frequency.value=220,n.type="square";let i=t.createGain();this._env(i,e,.002,.08,.06),n.connect(i).connect(this.sfx),n.start(e),n.stop(e+.08)}};var Lt=s=>document.getElementById(s),kx=/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)||"ontouchstart"in window,wd=kx?{shadow:1024,grass:8e3,trees:40,mist:34,pr:Math.min(window.devicePixelRatio,1.5)}:{shadow:2048,grass:2e4,trees:60,mist:55,pr:Math.min(window.devicePixelRatio,2)},Hx=26,Ad=6,Rd=13,hc=5,Cd=1,Gx=.33,Id=1.65,Vx=2.5,Wx=4.3,Pd=.35,uc=s=>{try{window.AndroidBridge?window.AndroidBridge.vibrate(s):navigator.vibrate&&navigator.vibrate(s)}catch{}},$l=class{constructor(){this.audio=new lc,this.state="loading",this.best=+(localStorage.getItem("axezombie_best")||0)}async init(){let t=(o,c)=>(Lt("loadbar").style.width=o+"%",Lt("loadtxt").textContent=c,new Promise(l=>setTimeout(l,16)));await t(5,"Preparing renderer");let e=this.renderer=new nc({antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(wd.pr),e.setSize(innerWidth,innerHeight),e.shadowMap.enabled=!0,e.shadowMap.type=Yi,e.toneMapping=Fr,e.toneMappingExposure=1.15,e.outputColorSpace=De,Lt("game").appendChild(e.domElement);let n=this.scene=new Ts,i=this.camera=new Je(70,innerWidth/innerHeight,.05,500);i.rotation.order="YXZ",this.player=this.world?this.world.start.clone():new I,this.move={x:0,y:0},this.look={x:0,y:0},this.keys={},i.position.set(0,Id,0),n.add(i);let r=new Dr(14209216,14,30,.75,.9,1.3);r.position.set(0,.1,0),r.target.position.set(0,-.15,-1),i.add(r),i.add(r.target),await t(15,"Digging graves"),this.world=Ed(n,wd),this.player.copy(this.world.start),await t(55,"Raising the dead"),Td(),await t(80,"Sharpening axes"),this._buildAxe(),this._buildParticles(),await t(95,"Lighting the lantern"),this.zombies=[],this.flying=[],this.stuck=[],this.decals=[],this.yaw=0,this.pitch=0,this.shake=0,this.time=0,this._bindInput(),addEventListener("resize",()=>this._resize()),this._resize();let a=new Kr(n,new I(0,0,-8),{speed:0,runner:!1});e.render(n,i),a.dispose(),await t(100,"Ready"),Lt("loading").classList.add("hidden"),Lt("menu").classList.remove("hidden"),Lt("bestMenu").textContent=this.best,this.state="menu",this._last=performance.now(),e.setAnimationLoop(()=>this._frame()),window.onAppPause=()=>this.pause(),window.onAppResume=()=>this.audio.resume(),document.addEventListener("visibilitychange",()=>{document.hidden&&this.pause()})}_buildAxe(){let t=new Qt({...fd(),roughness:1}),e=new Qt({...oc(),metalness:.92,roughness:1,envMapIntensity:1}),n=new zs(this.renderer),i=new Ts;i.background=new Zt(1120290);let r=new Wt(new Ye(1,8,8),new Dn({color:8952251}));r.position.set(-3,4,-3),i.add(r);let a=new Wt(new Ye(.6,8,8),new Dn({color:16750916}));a.position.set(3,1,2),i.add(a),e.envMap=n.fromScene(i,.04).texture;let o=new Qt({color:14212580,metalness:1,roughness:.18,envMap:e.envMap});this.axeBlood=new Qt({color:4850178,roughness:.2,metalness:.2});let c=new nn,l=new mn(.017,.021,.62,10,6),h=l.attributes.position;for(let C=0;C<h.count;C++){let R=h.getY(C),D=1+Math.sin(R*9)*.06+(R<-.25?.25:0);h.setX(C,h.getX(C)*D),h.setZ(C,h.getZ(C)*D*1.25)}l.computeVertexNormals();let d=new Wt(l,t);d.position.y=-.17,c.add(d);let f=new Wt(new mn(.024,.024,.16,10),new Qt({color:2759184,roughness:.8}));f.position.y=-.38,c.add(f);let u=new Ti;u.moveTo(-.035,.05),u.lineTo(.03,.05),u.quadraticCurveTo(.08,.06,.13,.11),u.lineTo(.145,.105),u.quadraticCurveTo(.16,0,.135,-.1),u.lineTo(.12,-.105),u.quadraticCurveTo(.07,-.03,.03,-.03),u.lineTo(-.035,-.03),u.lineTo(-.035,.05);let p=new Wi(u,{depth:.022,bevelEnabled:!0,bevelThickness:.006,bevelSize:.004,bevelSegments:2,curveSegments:12});p.translate(0,0,-.011);let _=p.attributes.position;for(let C=0;C<_.count;C++){let R=_.getX(C),D=Math.max(.12,1-Math.max(0,R-.02)/.13);_.setZ(C,_.getZ(C)*D)}p.computeVertexNormals();let m=new Wt(p,e);m.rotation.y=-Math.PI/2,m.position.y=.1,c.add(m);let g=new Wt(new Xi(.11,.0035,4,20,1.75),o);g.rotation.y=-Math.PI/2,g.rotation.x=0,g.position.set(0,.105,.035),g.rotation.z=-.87,c.add(g);let M=new Wt(new hn(.034,.075,.045),e);M.position.set(0,.11,-.03),c.add(M),c.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),this.axeTemplate=c;let T=this.viewAxe=new nn,S=c.clone();S.rotation.set(-.15,Math.PI+.35,.35),T.add(S);let A=new Qt({color:9071189,roughness:.7}),w=new Qt({color:2764582,roughness:1}),x=new Wt(new Ye(.045,12,10),A);x.scale.set(1,1.2,1.1),x.position.set(0,-.36,0),S.add(x);let v=new Wt(new Xn(.045,.35,4,10),w);v.position.set(.05,-.45,.22),v.rotation.x=1.3,S.add(v),T.position.set(.34,-.2,-.72),T.traverse(C=>{C.isMesh&&(C.castShadow=!1,C.renderOrder=10)}),this.camera.add(T),this.vmBase=T.position.clone(),this.vmAnim={t:1,phase:"idle"}}_buildParticles(){this.pN=900;let e=new Re;this.pPos=new Float32Array(900*3),this.pCol=new Float32Array(900*3),this.pVel=new Float32Array(900*3),this.pLife=new Float32Array(900),this.pKind=new Uint8Array(900);for(let i=0;i<900;i++)this.pPos[i*3+1]=-100;e.setAttribute("position",new Ne(this.pPos,3)),e.setAttribute("color",new Ne(this.pCol,3));let n=new Rs({size:.06,map:Di(32),vertexColors:!0,transparent:!0,depthWrite:!1,sizeAttenuation:!0,alphaTest:.05});this.points=new mr(e,n),this.points.frustumCulled=!1,this.scene.add(this.points),this.pIdx=0,this.splatTex=md()}emit(t,e,n,i,r=0){for(let a=0;a<i;a++){let o=this.pIdx=(this.pIdx+1)%this.pN;if(this.pPos[o*3]=t.x,this.pPos[o*3+1]=t.y,this.pPos[o*3+2]=t.z,this.pVel[o*3]=e.x+(Math.random()-.5)*n,this.pVel[o*3+1]=e.y+(Math.random()-.3)*n,this.pVel[o*3+2]=e.z+(Math.random()-.5)*n,this.pLife[o]=.8+Math.random()*1.2,this.pKind[o]=r,r===0){let c=.25+Math.random()*.25;this.pCol[o*3]=c,this.pCol[o*3+1]=0,this.pCol[o*3+2]=0}else{let c=.15+Math.random()*.1;this.pCol[o*3]=c,this.pCol[o*3+1]=c*.8,this.pCol[o*3+2]=c*.6}}}_updateParticles(t){let e=this.pPos,n=this.pVel;for(let i=0;i<this.pN;i++){if(this.pLife[i]<=0)continue;this.pLife[i]-=t,n[i*3+1]-=9.8*t*(this.pKind[i]?.4:1),e[i*3]+=n[i*3]*t,e[i*3+1]+=n[i*3+1]*t,e[i*3+2]+=n[i*3+2]*t;let r=this.world.groundHeight(e[i*3],e[i*3+2])+.02;e[i*3+1]<r&&(this.pKind[i]===0&&Math.random()<.05&&this.splat(e[i*3],e[i*3+2],.15+Math.random()*.25),e[i*3+1]=-100,this.pLife[i]=0),this.pLife[i]<=0&&(e[i*3+1]=-100)}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}splat(t,e,n){let i=new Wt(new xn(1,1),new Qt({map:this.splatTex,transparent:!0,depthWrite:!1,roughness:.2,polygonOffset:!0,polygonOffsetFactor:-2}));if(i.rotation.x=-Math.PI/2,i.rotation.z=Math.random()*6.28,i.scale.setScalar(n),i.position.set(t,this.world.groundHeight(t,e)+.015,e),i.receiveShadow=!0,this.scene.add(i),this.decals.push({m:i,t:25}),this.decals.length>70){let r=this.decals.shift();this.scene.remove(r.m),r.m.material.dispose(),r.m.geometry.dispose()}}_bindInput(){let t=Lt("touch"),e=new Map;t.addEventListener("pointerdown",a=>{e.set(a.pointerId,{x:a.clientX,y:a.clientY,sx:a.clientX,sy:a.clientY,t:performance.now()}),t.setPointerCapture(a.pointerId)}),t.addEventListener("pointermove",a=>{let o=e.get(a.pointerId);if(!o||this.state!=="playing")return;let c=2.4/Math.max(innerWidth,1)*(this.sens||1);this.yaw-=(a.clientX-o.x)*c,this.pitch-=(a.clientY-o.y)*c,this.pitch=Math.max(-1.1,Math.min(1,this.pitch)),o.x=a.clientX,o.y=a.clientY});let n=a=>{let o=e.get(a.pointerId);e.delete(a.pointerId),o&&performance.now()-o.t<220&&Math.hypot(a.clientX-o.sx,a.clientY-o.sy)<12&&this.throwAxe()};t.addEventListener("pointerup",n),t.addEventListener("pointercancel",a=>e.delete(a.pointerId));let i=Lt("throwBtn");i.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),this.throwAxe(),i.classList.add("down")}),i.addEventListener("pointerup",()=>i.classList.remove("down")),i.addEventListener("pointerleave",()=>i.classList.remove("down")),this._joystick(Lt("moveZone"),Lt("moveBase"),Lt("moveKnob"),this.move,!0),this._joystick(Lt("lookZone"),Lt("lookBase"),Lt("lookKnob"),this.look,!1),addEventListener("keyup",a=>{this.keys[a.code]=!1}),addEventListener("keydown",a=>{this.keys[a.code]=!0,a.code==="Space"&&this.throwAxe(),(a.code==="Escape"||a.code==="KeyP")&&(this.state==="playing"?this.pause():this.state==="paused"&&this.resume())}),Lt("playBtn").onclick=()=>this.start(),Lt("againBtn").onclick=()=>this.start(),Lt("pauseBtn").onclick=a=>{a.stopPropagation(),this.pause()},Lt("resumeBtn").onclick=()=>this.resume(),Lt("quitBtn").onclick=()=>this.toMenu(),Lt("menuBtn").onclick=()=>this.toMenu();let r=Lt("sens");this.sens=+(localStorage.getItem("axezombie_sens")||1),r.value=this.sens,r.oninput=()=>{this.sens=+r.value,localStorage.setItem("axezombie_sens",r.value)}}_joystick(t,e,n,i,r){let a=null,o=0,c=0,l=55,h=()=>{e.style.left="",e.style.top="",e.classList.remove("active"),n.style.transform="translate(-50%,-50%)"},d=(u,p)=>{let _=u-o,m=p-c,g=Math.hypot(_,m);g>l&&(_*=l/g,m*=l/g),n.style.transform=`translate(calc(-50% + ${_}px), calc(-50% + ${m}px))`,i.x=_/l,i.y=m/l};t.addEventListener("pointerdown",u=>{if(a!==null)return;u.preventDefault(),u.stopPropagation(),a=u.pointerId,t.setPointerCapture(a);let p=t.getBoundingClientRect();if(r)o=u.clientX,c=u.clientY,e.style.left=o-p.left+"px",e.style.top=c-p.top+"px";else{let _=e.getBoundingClientRect();o=_.left+_.width/2,c=_.top+_.height/2}e.classList.add("active"),d(u.clientX,u.clientY)}),t.addEventListener("pointermove",u=>{u.pointerId===a&&d(u.clientX,u.clientY)});let f=u=>{u.pointerId===a&&(a=null,i.x=0,i.y=0,h())};t.addEventListener("pointerup",f),t.addEventListener("pointercancel",f),this._resetSticks=(this._resetSticks||[]).concat(()=>{a=null,i.x=0,i.y=0,h()})}_resize(){this.camera.aspect=innerWidth/innerHeight,this.camera.fov=innerWidth>innerHeight?65:80,this.camera.updateProjectionMatrix(),this.renderer.setSize(innerWidth,innerHeight)}start(){this.audio.init(),this.audio.click();for(let t of this.zombies)t.dispose();for(let t of this.flying)this.scene.remove(t.obj),t.snd&&t.snd.stop();for(let t of this.stuck)t.obj.parent&&t.obj.parent.remove(t.obj);this.zombies=[],this.flying=[],this.stuck=[],this.health=100,this.score=0,this.kills=0,this.headshots=0,this.combo=0,this.thrown=0,this.axes=hc,this.regen=0,this.cd=0,this.level=0,this.yaw=0,this.pitch=0,this.player.copy(this.world.start),this.stepPh=0,this.stamina=100,this.exhausted=!1,this.world.goal.house=null,this.levelDone=0,this.cleared=!1,Lt("fade").classList.remove("on"),(this._resetSticks||[]).forEach(t=>t()),this.audio.heartbeatOn=!1,["menu","over","paused"].forEach(t=>Lt(t).classList.add("hidden")),Lt("hud").classList.remove("hidden"),this.state="playing",this._startLevel(),this._hud()}pause(){this.state==="playing"&&(this.state="paused",Lt("paused").classList.remove("hidden"),this.audio.suspend())}resume(){this.state="playing",Lt("paused").classList.add("hidden"),this.audio.resume(),this._last=performance.now()}toMenu(){this.audio.resume(),this.state="menu",["over","paused","hud"].forEach(t=>Lt(t).classList.add("hidden")),Lt("menu").classList.remove("hidden"),Lt("bestMenu").textContent=this.best}_startLevel(){this.level++;let t=this.level;this.maxAlive=Math.min(18,5+t*2),this.spawnInterval=Math.max(.5,2.4-t*.25),this.spawnT=1,this.levelDone=0,this.hold=0,this.holdNeed=Math.min(9,4.5+t*.6);let e=Math.min(170,75+t*15),n=this.world.pickGoal(this.player.x,this.player.z,e);this.world.goal.place(n.h);let i=n.h.door;this.hum=this.audio.goalHum(),this.hum.setPos({x:i.x,y:1.5,z:i.z}),this.hum.on(!0),this.audio.bell();let r=Math.min(10,3+t);for(let a=0;a<r;a++)this._spawn(!0);this._hud(),this._msg(`LEVEL ${t}`,`Find the safe house \xB7 ~${Math.round(n.d)}m${t>=2?" \xB7 runners!":""}`)}_levelComplete(){this.levelDone=.001;let t=500*this.level;this.score+=t,this.health=Math.min(100,this.health+35),this.audio.heartbeatOn=!1,this.audio.levelComplete(),this.hum.on(!1),Lt("fade").classList.add("on"),Lt("fadeTxt").innerHTML=`<b>YOU MADE IT INSIDE</b><span>Level ${this.level} complete \xB7 +${t} \xB7 +35 health</span>`,this._hud()}_spawn(t=!1){let e=this.world,n=this.player,i=e.goal.trigger,r=null,a=null;for(let d=0;d<30&&!r;d++){let f,u;if(t){let p=Math.random()*Math.PI*2,_=4+Math.random()*10;f=i.x+Math.sin(p)*_,u=i.z+Math.cos(p)*_}else{let p=Math.atan2(i.x-n.x,i.z-n.z),_=Math.random()<.5?p+(Math.random()-.5)*1.8:Math.random()*Math.PI*2,m=18+Math.random()*18;f=n.x+Math.sin(_)*m,u=n.z+Math.cos(_)*m}if(!(Math.abs(f)>Ue-3||Math.abs(u)>Ue-3||!e.nav.open(f,u)||e.col.blocked(f,u,.4))&&!(Math.hypot(f-n.x,u-n.z)<14)){if(!t&&!e.col.sightBlocked(n.x,n.z,f,u)&&d<20){a=a||[f,u];continue}r=[f,u]}}if(r=r||a,!r)return;let o=this.level,c=o>=2&&Math.random()<Math.min(.5,.15+(o-2)*.08),l=c?Math.min(5,4+Math.random()*.5+o*.06):Math.min(1.9,.9+o*.08+Math.random()*.4),h=new Kr(this.scene,new I(r[0],0,r[1]),{speed:l,runner:c});h.root.rotation.y=Math.random()*Math.PI*2,h.dormant=t,h.home=new I(r[0],0,r[1]),h.onFall=()=>{let d=new I;h.root.getWorldPosition(d),this.audio.bodyFall(d)},h.onHeadBounce=d=>this.audio.squelch(d,.5),this.zombies.push(h)}throwAxe(){if(this.state!=="playing"||this.cd>0||this.axes<=0){this.state==="playing"&&this.axes<=0&&Lt("axes").classList.add("empty");return}this.axes--,this.cd=Gx,this.thrown++,this.vmAnim={t:0,phase:"throw"},this.audio.whoosh(),uc(15);let t=new I(0,0,-1).applyQuaternion(this.camera.quaternion),e=new I(1,0,0).applyQuaternion(this.camera.quaternion),n=this.camera.position.clone().addScaledVector(e,.18).addScaledVector(t,.4);n.y-=.08;let i=this._aimPoint(t),r=i.distanceTo(n)/Hx,a=i.clone().sub(n).divideScalar(r);a.y+=.5*Ad*r;let o=new nn,c=this.axeTemplate.clone();o.add(c),o.position.copy(n),o.lookAt(n.clone().add(a)),this.scene.add(o);let l=this.audio.spinLoop(n,Rd/(Math.PI*2));this.flying.push({obj:o,spinner:c,vel:a,prev:n.clone(),life:3,snd:l,dist:0}),this._hud()}_aimPoint(t){let e=this.camera.position,n=new I,i=60,r=(a,o)=>{let c=e.clone().sub(a),l=c.dot(t),h=c.dot(c)-o*o,d=l*l-h;if(d<0)return;let f=-l-Math.sqrt(d);f>.5&&f<i&&(i=f)};for(let a of this.zombies){if(!a.alive)continue;let o=a.root.scale.x;r(a.getHeadWorld(n),.15*o);for(let c of a.collisionParts)c.obj.getWorldPosition(n),c.off.y&&(n.y+=c.off.y*o),r(n,c.r*o)}for(let a=.5;a<i;a+=.5){let o=e.x+t.x*a,c=e.y+t.y*a,l=e.z+t.z*a;if(c<this.world.groundHeight(o,l)){i=a;break}}return e.clone().addScaledVector(t,i)}_segSphere(t,e,n,i){let r=e.clone().sub(t),a=t.clone().sub(n),o=r.dot(r),c=2*a.dot(r),l=a.dot(a)-i*i;if(l<0)return 0;let h=c*c-4*o*l;if(h<0)return-1;let d=(-c-Math.sqrt(h))/(2*o);return d>=0&&d<=1?d:-1}_updateAxes(t){let e=new I,n=new I;for(let i=this.flying.length-1;i>=0;i--){let r=this.flying[i];r.prev.copy(r.obj.position),r.vel.y-=Ad*t,r.obj.position.addScaledVector(r.vel,t),r.dist+=r.vel.length()*t,r.obj.lookAt(e.copy(r.obj.position).add(r.vel)),r.spinner.rotation.x+=Rd*t,r.snd&&r.snd.update(r.obj.position),r.life-=t;let a=r.prev,o=r.obj.position,c=null;for(let d of this.zombies){if(!d.alive)continue;let f=d.root.scale.x;d.getHeadWorld(n);let u=this._segSphere(a,o,n,.17*f);u>=0&&(!c||u<c.t)&&(c={t:u,z:d,part:"head"});for(let p of d.collisionParts)p.obj.getWorldPosition(e),p.off.y&&(e.y+=p.off.y*f),u=this._segSphere(a,o,e,p.r*f),u>=0&&(!c||u<c.t)&&(c={t:u,z:d,part:"body"});d.root.getWorldPosition(e),e.y+=.45*f,u=this._segSphere(a,o,e,.2*f),u>=0&&(!c||u<c.t)&&(c={t:u,z:d,part:"legs"})}if(c){let d=a.clone().lerp(o,c.t);this._hitZombie(r,c.z,c.part,d),this.flying.splice(i,1);continue}let l=this.world.col.solidAt(o.x,o.y,o.z),h=this.world.groundHeight(o.x,o.z);if(l||o.y<=h+.05){l||(o.y=h+.05);let d=l?l.kind:"ground";this._stick(r,this.scene,d==="metal"?"metal":d),d==="metal"?this.audio.stoneClang(o):l?this.audio.woodThunk(o):this.audio.groundThunk(o),this.emit(o,new I(0,1.2,0),1.2,14,1),this.combo=0,this.flying.splice(i,1);continue}(r.life<=0||r.dist>70)&&(this.scene.remove(r.obj),r.snd&&r.snd.stop(),this.flying.splice(i,1),this.combo=0)}}_stick(t,e,n){if(t.snd&&t.snd.stop(),t.spinner.rotation.x=Math.PI/2-.35+(Math.random()-.5)*.3,n==="metal"?(t.spinner.rotation.x=Math.random()*6,t.obj.position.y=this.world.groundHeight(t.obj.position.x,t.obj.position.z)+.04,t.obj.rotation.x=Math.PI/2):t.obj.position.addScaledVector(t.vel.clone().normalize(),.06),e.attach(t.obj),this.stuck.push({obj:t.obj,t:10}),this.stuck.length>14){let i=this.stuck.shift();i.obj.parent&&i.obj.parent.remove(i.obj)}}_hitZombie(t,e,n,i){let r=t.vel.clone().normalize();if(n==="head"){this.audio.headHit(i),this.audio.zombieVoice(i,"die",e.pitch),e.die(this,!0,t.vel),this._stick(t,e.head,"flesh"),this.emit(i,r.clone().multiplyScalar(2.5).add(new I(0,1.5,0)),3.5,70,0),e.spurt=1.4,this.kills++,this.headshots++,this.combo++;let a=Math.min(5,this.combo),o=100*a;this.score+=o,this._popup(a>1?`HEADSHOT! x${a}`:"HEADSHOT!",`+${o}`,!0),this.shake=Math.max(this.shake,.12),uc(40),this._hitmarker(!0)}else{this.audio.bodyHit(i),this.emit(i,r.clone().multiplyScalar(1.5),1.8,25,0);let a=n==="legs"?e.hips:e.spine;this._stick(t,a,"flesh");let o=e.hitBody(this,r);this.audio.zombieVoice(i,o?"die":"pain",e.pitch),o?(this.kills++,this.score+=40,this._popup("KILL","+40",!1)):this._popup("","Body hit \u2014 go for the head",!1,!0),this.combo=0,uc(20),this._hitmarker(!1)}this._hud()}playerHit(t,e){if(this.state!=="playing")return;this.health-=t,this.audio.bite(),this.audio.playerHurt(),this.shake=.35,uc(120);let n=Lt("damage");n.style.transition="none",n.style.opacity=1,requestAnimationFrame(()=>{n.style.transition="opacity 0.9s",n.style.opacity=0});let i=new I;e.getHeadWorld(i),this.emit(this.camera.position.clone().lerp(i,.5),new I(0,.5,0),2,20,0),this.audio.heartbeatOn=this.health<35,this.health<=0&&this._gameOver(),this._hud()}_gameOver(){this.state="over",this.health=0,this.audio.heartbeatOn=!1,this.audio.gameOver(),this.score>this.best?(this.best=this.score,localStorage.setItem("axezombie_best",this.best),Lt("newBest").classList.remove("hidden")):Lt("newBest").classList.add("hidden"),Lt("finalScore").textContent=this.score,Lt("finalWave").textContent=this.level,Lt("finalKills").textContent=this.kills,Lt("finalHead").textContent=this.headshots,Lt("finalAcc").textContent=this.thrown?Math.round(this.kills/this.thrown*100)+"%":"0%",Lt("bestOver").textContent=this.best,setTimeout(()=>{Lt("hud").classList.add("hidden"),Lt("over").classList.remove("hidden")},1200)}_hud(){Lt("hpfill").style.width=Math.max(0,this.health)+"%",Lt("hpfill").className=this.health<35?"low":"",Lt("score").textContent=this.score,Lt("wave").textContent="LEVEL "+this.level;let t="";for(let e=0;e<hc;e++)t+=`<i class="${e<this.axes?"on":""}"></i>`;Lt("axes").innerHTML=t,Lt("axes").classList.toggle("empty",this.axes===0),Lt("lowhp").style.opacity=this.health<35?1:0}_msg(t,e){let n=Lt("msg");n.innerHTML=`<b>${t}</b><span>${e||""}</span>`,n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}_popup(t,e,n,i){let r=document.createElement("div");r.className="popup"+(n?" red":"")+(i?" hint":""),r.innerHTML=`${t?`<b>${t}</b>`:""}<span>${e}</span>`,Lt("popups").appendChild(r),setTimeout(()=>r.remove(),1300)}_hitmarker(t){let e=Lt("hitmark");e.className=t?"head":"body",e.offsetWidth,e.classList.add("show")}_indicators(){let t=Lt("indicators"),e=this.yaw,n=Math.atan(Math.tan(this.camera.fov*Math.PI/360)*this.camera.aspect),i="";for(let h of this.zombies){if(!h.alive)continue;let d=h.root.position.x-this.player.x,f=h.root.position.z-this.player.z,u=Math.hypot(d,f);if(u>18)continue;let p=Math.atan2(-d,-f)-e;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;if(Math.abs(p)<n*.92)continue;let _=1-u/18,m=50-Math.sin(p)*42,g=50-Math.cos(p)*40;i+=`<div class="ind" style="left:${m}%;top:${g}%;opacity:${.35+_*.65};transform:translate(-50%,-50%) rotate(${-p}rad) scale(${.7+_*.6})"></div>`}t.innerHTML=i;let r=this.world.goal.trigger,a=r.x-this.player.x,o=r.z-this.player.z,c=Math.atan2(-a,-o)-e;for(;c>Math.PI;)c-=Math.PI*2;for(;c<-Math.PI;)c+=Math.PI*2;Lt("goalArrow").style.transform=`rotate(${-c}rad)`;let l=Math.hypot(a,o);Lt("goalDist").textContent=l<2.5?"HOLD":Math.round(l)+"m",Lt("goalArrow").style.visibility=l<2.5?"hidden":"visible"}_steer(t,e){let n=t.root.position,i=this.player,r=Math.hypot(i.x-n.x,i.z-n.z);if(t.dormant)if(r<17)t.dormant=!1,this.audio.zombieVoice(n.clone().setY(1.6),t.runner?"scream":"snarl",t.pitch);else{if(t.wanderT=(t.wanderT||0)-e,t.wanderT<=0||!t.steer){t.wanderT=3+Math.random()*4;let o=t.home.clone().add(new I((Math.random()-.5)*8,0,(Math.random()-.5)*8));t.steer=o}t.speedMul=Math.hypot(t.steer.x-n.x,t.steer.z-n.z)>.6?.3/Math.max(.3,t.speed):0;return}if(t.speedMul=r<3.5?t.runner?1.15:1.6:1,r<4){t.steer=null;return}let a=this.world.nav.next(n.x,n.z);a&&(a=this.world.nav.next(a[0],a[1])||a),t.steer=a?new I(a[0],0,a[1]):null}_frame(t){let e=performance.now(),n=t||Math.min(.05,(e-this._last)/1e3);this._last=e,this.time+=n;let i=this.state==="playing",r=this.state==="over";if(this.state==="menu"&&(this.yaw=Math.sin(this.time*.08)*1.4,this.pitch=.02+Math.sin(this.time*.13)*.04),i){this.cd=Math.max(0,this.cd-n),this.axes<hc?(this.regen+=n,this.regen>=Cd&&(this.regen=0,this.axes++,this.audio.pickup(),this._hud())):this.regen=0,Lt("regen").style.width=(this.axes<hc?this.regen/Cd*100:0)+"%";let _=this.sens||1,m=this.look.x*Math.abs(this.look.x),g=this.look.y*Math.abs(this.look.y);this.yaw-=m*2.8*_*n,this.pitch=Math.max(-1.1,Math.min(1,this.pitch-g*1.7*_*n)),this.keys.ArrowLeft&&(this.yaw+=2*n),this.keys.ArrowRight&&(this.yaw-=2*n);let M=this.move.x,T=this.move.y;this.keys.KeyW&&(T-=1),this.keys.KeyS&&(T+=1),this.keys.KeyA&&(M-=1),this.keys.KeyD&&(M+=1);let S=Math.hypot(M,T);S>1&&(M/=S,T/=S);let A=Math.min(1,S);if(this.moving=A>.12,this.moving&&this.levelDone===0){let x=A>.9||this.keys.ShiftLeft;this.stamina<=0&&(this.exhausted=!0),this.exhausted&&this.stamina>35&&(this.exhausted=!1);let v=x&&!this.exhausted;v?this.stamina=Math.max(0,this.stamina-20*n):this.stamina=Math.min(100,this.stamina+12*n),this.isRunning=v;let C=(v?Wx:Vx)*Math.min(1,A*1.15),R=Math.sin(this.yaw),D=Math.cos(this.yaw),F=(-R*-T+D*M)*C,V=(-D*-T-R*M)*C,P=this.player;P.x+=F*n,P.z+=V*n,this.world.col.collide(P,Pd);for(let H of this.zombies){if(!H.alive)continue;let Y=P.x-H.root.position.x,G=P.z-H.root.position.z,ot=Math.hypot(Y,G),X=.75;ot<X&&ot>1e-4&&(P.x+=Y/ot*(X-ot),P.z+=G/ot*(X-ot))}this.world.col.collide(P,Pd),this.stepPh+=n*C*1.9,this.stepPh>Math.PI&&(this.stepPh-=Math.PI,this.audio.playerStep(v)),this.bobAmt=Math.min(1,(this.bobAmt||0)+n*4)*(v?1.4:1)}else this.bobAmt=Math.max(0,(this.bobAmt||0)-n*4),this.stamina=Math.min(100,this.stamina+22*n),this.isRunning=!1;this.exhausted&&(this.breathT=(this.breathT||0)-n,this.breathT<=0&&(this.audio.breath(),this.breathT=.9)),Lt("stamfill").style.width=this.stamina+"%",Lt("stamfill").className=this.exhausted?"out":"",this.player.y=this.world.groundHeight(this.player.x,this.player.z),this.navT=(this.navT||0)-n,this.navT<=0&&(this.world.nav.compute(this.player.x,this.player.z),this.navT=.3);let w=this.zombies.filter(x=>x.alive).length;if(this.levelDone===0){this.spawnT-=n,this.spawnT<=0&&w<this.maxAlive&&(this._spawn(),this.spawnT=this.spawnInterval*(.6+Math.random()*.8));let x=this.world.goal.trigger,v=Math.hypot(x.x-this.player.x,x.z-this.player.z)<1.9;if(v){this.hold+=n,this.knockT=(this.knockT||0)-n,this.knockT<=0&&(this.audio.knock(this.world.goal.house.door),this.knockT=.9);for(let R of this.zombies)R.dormant=!1;this.hold>=this.holdNeed&&this._levelComplete()}else this.hold=Math.max(0,this.hold-n*.5);Lt("hold").classList.toggle("hidden",this.hold<=0),Lt("holdfill").style.width=Math.min(100,this.hold/this.holdNeed*100)+"%",Lt("holdtxt").textContent=v?"BREAKING IN\u2026 HOLD YOUR GROUND":"GET BACK TO THE DOOR!"}else{if(this.levelDone+=n,this.levelDone>1.3&&!this.cleared){this.cleared=!0;for(let v of this.zombies)v.dispose();this.zombies=[];for(let v of this.stuck)v.obj.parent&&v.obj.parent.remove(v.obj);this.stuck=[];let x=this.world.goal.house;this.player.set(x.trigger.x+x.facing.x*2.5,0,x.trigger.z+x.facing.z*2.5),this.yaw=Math.atan2(-x.facing.x,-x.facing.z)+Math.PI,this.pitch=0,this.stamina=100,this.exhausted=!1,Lt("hold").classList.add("hidden")}this.levelDone>3.2&&(this.cleared=!1,Lt("fade").classList.remove("on"),this._startLevel())}for(let x of this.zombies)x.alive&&!x.dormant&&Math.hypot(x.root.position.x-this.player.x,x.root.position.z-this.player.z)>55&&(x._despawn=!0);for(let x=this.zombies.length-1;x>=0;x--)this.zombies[x]._despawn&&(this.zombies[x].dispose(),this.zombies.splice(x,1))}if(i||r||this.state==="menu"){let _=this.player;for(let m=this.zombies.length-1;m>=0;m--){let g=this.zombies[m];g.alive&&i&&this._steer(g,n);let M=g.update(n,_,this);if(g.alive){let T=g.root.position;for(let S of this.zombies){if(S===g||!S.alive)continue;let A=T.x-S.root.position.x,w=T.z-S.root.position.z,x=Math.hypot(A,w);x<.7&&x>.001&&(T.x+=A/x*(.7-x)*.5,T.z+=w/x*(.7-x)*.5)}this.world.col.collide(T,.3),T.y=this.world.groundHeight(T.x,T.z)}if(g.spurt>0){g.spurt-=n;let T=new I;g.neck.getWorldPosition(T),T.y+=.1;let S=new I(0,1,0).applyQuaternion(g.neck.getWorldQuaternion(new He));this.emit(T,S.multiplyScalar(2.2*g.spurt),.8,3,0)}M==="remove"&&(g.dispose(),this.zombies.splice(m,1))}}(i||r)&&this._updateAxes(n),this._updateParticles(n);for(let _ of this.stuck)_.t-=n;for(let _=this.decals.length-1;_>=0;_--){let m=this.decals[_];m.t-=n,m.t<3&&(m.m.material.opacity=Math.max(0,m.t/3)),m.t<=0&&(this.scene.remove(m.m),m.m.material.dispose(),m.m.geometry.dispose(),this.decals.splice(_,1))}for(let _=this.stuck.length-1;_>=0;_--){let m=this.stuck[_];m.t<=0&&m.obj.parent===this.scene?(this.scene.remove(m.obj),this.stuck.splice(_,1)):m.obj.parent||this.stuck.splice(_,1)}this.shake=Math.max(0,this.shake-n);let a=this.shake*this.shake*.4,o=this.camera,c=Math.abs(Math.sin(this.stepPh||0))*.05*(this.bobAmt||0),l=Math.cos(this.stepPh||0)*.025*(this.bobAmt||0),h=Math.sin(this.yaw),d=Math.cos(this.yaw);o.position.set(this.player.x+d*l+(Math.random()-.5)*a,this.player.y+Id+c+Math.sin(this.time*1.6)*.008+(Math.random()-.5)*a,this.player.z-h*l),r?(this.overT=(this.overT||0)+n,this.pitch+=(.45-this.pitch)*n*2,o.position.y-=Math.min(1.25,this.overT*1.6)):this.overT=0,o.rotation.set(this.pitch,this.yaw,r?.3:0);let f=this.viewAxe,u=this.vmAnim;f.visible=i,u.t+=n;let p=Math.sin(this.time*2)*.006;if(u.phase==="throw"){let _=u.t;if(_<.08)f.rotation.x=_/.08*.9,f.position.set(this.vmBase.x+.05,this.vmBase.y+_*.6,this.vmBase.z+.1);else if(_<.2){let m=(_-.08)/.12;f.rotation.x=.9-m*2.6,f.position.set(this.vmBase.x-m*.15,this.vmBase.y+.05-m*.4,this.vmBase.z-m*.15)}else u.phase="draw",u.t=0;f.children[0].visible=u.t<.12||u.phase==="draw"}else if(u.phase==="draw"){let _=Math.min(1,u.t/.25),m=this.axes>0;f.children[0].visible=m,f.rotation.x=-.3*(1-_),f.position.set(this.vmBase.x,this.vmBase.y-.35*(1-_),this.vmBase.z),_>=1&&m&&(u.phase="idle")}else f.children[0].visible=!0,f.rotation.x=Math.sin(this.time*1.1)*.02,f.position.set(this.vmBase.x,this.vmBase.y+p,this.vmBase.z);if(this.audio.ctx){let _=new I(0,0,-1).applyQuaternion(o.quaternion),m=new I(0,1,0).applyQuaternion(o.quaternion);this.audio.listener(o.position,_,m)}this.world.update(n,this.time,this.audio.ctx?this.audio:null,this.player),i?this._indicators():Lt("indicators").innerHTML="",this._noRender||this.renderer.render(this.scene,o)}simulate(t,e=1/30){this._noRender=!0;for(let n=0;n<t;n+=e)this._frame(e);this._noRender=!1}},Ld=new $l;window.__game=Ld;Ld.init().catch(s=>{Lt("loadtxt").textContent="Error: "+s.message,console.error(s)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
