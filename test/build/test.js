/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/wad.min.js":
/*!**************************!*\
  !*** ./build/wad.min.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(window,(function(){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=8)}([function(e,t,i){"use strict";i.d(t,"o",(function(){return u})),i.d(t,"n",(function(){return l})),i.d(t,"i",(function(){return o})),i.d(t,"p",(function(){return p})),i.d(t,"m",(function(){return f})),i.d(t,"D",(function(){return v})),i.d(t,"c",(function(){return m})),i.d(t,"d",(function(){return y})),i.d(t,"s",(function(){return b})),i.d(t,"h",(function(){return g})),i.d(t,"g",(function(){return w})),i.d(t,"f",(function(){return k})),i.d(t,"e",(function(){return T})),i.d(t,"b",(function(){return _})),i.d(t,"a",(function(){return R})),i.d(t,"l",(function(){return x})),i.d(t,"w",(function(){return O})),i.d(t,"y",(function(){return D})),i.d(t,"C",(function(){return j})),i.d(t,"A",(function(){return N})),i.d(t,"t",(function(){return P})),i.d(t,"B",(function(){return E})),i.d(t,"r",(function(){return q})),i.d(t,"u",(function(){return L})),i.d(t,"v",(function(){return S})),i.d(t,"z",(function(){return C})),i.d(t,"k",(function(){return G})),i.d(t,"q",(function(){return M})),i.d(t,"x",(function(){return A})),i.d(t,"j",(function(){return F}));var a=i(2),n=i.n(a),s=i(4);let o,r=window.AudioContext||window.webkitAudioContext,u={verbosity:0,suppressedLogs:0},l=function(e,t){t=t||1,u.verbosity>=t?console.log(e):u.suppressedLogs++},c=document.querySelector("a-scene");c&&c.audioListener&&c.audioListener.context?(o=c.audioListener.context,l("An A-Frame scene has been detected.")):o=new r;let h=function(){l("unlock",2),"suspended"===o.state?(l("suspended",2),o.resume()):"running"===o.state&&(l("The audio context is running.",2),l(o,2),window.removeEventListener("mousemove",h),window.removeEventListener("touchstart",h),window.removeEventListener("touchend",h))};window.addEventListener("mousemove",h),window.addEventListener("touchstart",h),window.addEventListener("touchend",h);let d=function(e){if(e.navigator.mediaDevices&&e.navigator.mediaDevices.getUserMedia)return e.navigator.mediaDevices.getUserMedia.bind(e.navigator.mediaDevices);let t=e.navigator.getUserMedia||e.navigator.webkitGetUserMedia||e.navigator.mozGetUserMedia;return t?function(i){return new Promise((function(a,n){t.call(e.navigator,i,a,n)}))}:function(){throw"getUserMedia is unsupported"}}(window);l(d?"Your browser supports getUserMedia.":"Your browser does not support getUserMedia.");let p=function(){Math.seed=6,Math.seededRandom=function(e,t){return e=e||1,t=t||0,Math.seed=(9301*Math.seed+49297)%233280,t+Math.seed/233280*(e-t)};for(var e=2*o.sampleRate,t=o.createBuffer(1,e,o.sampleRate),i=t.getChannelData(0),a=0;a<e;a++)i[a]=2*Math.seededRandom()-1;return t}(),f=function(e){return"[object Array]"===Object.prototype.toString.call(e)},v=function(e,t){return null==e?t:e},m=function(e,t){e.env={attack:t.env?v(t.env.attack,0):0,decay:t.env?v(t.env.decay,0):0,sustain:t.env?v(t.env.sustain,1):1,hold:t.env?v(t.env.hold,3.14159):3.14159,release:t.env?v(t.env.release,0):0},e.defaultEnv={attack:t.env?v(t.env.attack,0):0,decay:t.env?v(t.env.decay,0):0,sustain:t.env?v(t.env.sustain,1):1,hold:t.env?v(t.env.hold,3.14159):3.14159,release:t.env?v(t.env.release,0):0},e.userSetHold=!(!t.env||!t.env.hold)},y=function(e,t){t.filter?f(t.filter)?e.filter=t.filter.map((function(e){return{type:e.type||"lowpass",frequency:e.frequency||600,q:e.q||1,env:e.env||null}})):e.filter=[{type:t.filter.type||"lowpass",frequency:t.filter.frequency||600,q:t.filter.q||1,env:t.filter.env||null}]:t.filter=null},b=function(e,t){var i=new XMLHttpRequest;i.open("GET",e.source,!0),i.responseType="arraybuffer",e.playable--,i.onload=function(){o.decodeAudioData(i.response,(function(i){e.decodedBuffer=i,3.14159===e.env.hold&&(e.defaultEnv.hold=e.decodedBuffer.duration*(1/e.rate),e.env.hold=e.decodedBuffer.duration*(1/e.rate)),e.duration=1e3*e.env.hold,t&&t(e),e.playable++,e.playOnLoad&&e.play(e.playOnLoadArg)}))},i.send()},g=function(e,t){t.vibrato?e.vibrato={shape:v(t.vibrato.shape,"sine"),speed:v(t.vibrato.speed,1),magnitude:v(t.vibrato.magnitude,5),attack:v(t.vibrato.attack,0)}:e.vibrato=null},w=function(e,t){t.tremolo?e.tremolo={shape:v(t.tremolo.shape,"sine"),speed:v(t.tremolo.speed,1),magnitude:v(t.tremolo.magnitude,5),attack:v(t.tremolo.attack,1)}:e.tremolo=null},k=function(e,t){if(t.reverb){e.reverb={wet:v(t.reverb.wet,1)};var i=t.reverb.impulse||"https://frivolous.biz/audio/widehall.wav",a=new XMLHttpRequest;a.open("GET",i,!0),a.responseType="arraybuffer",e.playable--,a.onload=function(){o.decodeAudioData(a.response,(function(i){e.reverb.buffer=i,e.playable++,e.playOnLoad&&e.play(e.playOnLoadArg),e instanceof s.a&&e.setUp(t),"mic"===e.source&&e.reverb&&e.reverb.buffer&&e.reverb.node&&!e.reverb.node.buffer&&(e.reverb.node.convolver.buffer=e.reverb.buffer)}))},a.send()}else e.reverb=null},T=function(e,t){"panning"in t?(e.panning={location:t.panning},"number"==typeof t.panning?e.panning.type="stereo":(e.panning.type="3d",e.panning.panningModel=t.panningModel||"equalpower",e.panning.distanceModel=t.distanceModel,e.panning.maxDistance=t.maxDistance,e.panning.rolloffFactor=t.rolloffFactor,e.panning.refDistance=t.refDistance,e.panning.coneInnerAngle=t.coneInnerAngle,e.panning.coneOuterAngle=t.coneOuterAngle,e.panning.coneOuterGain=t.coneOuterGain)):e.panning={location:0,type:"stereo"},"stereo"!==e.panning.type||o.createStereoPanner||(l("Your browser does not support stereo panning. Falling back to 3D panning."),e.panning={location:[0,0,0],type:"3d",panningModel:"equalpower"})},_=function(e,t){t.delay?e.delay={delayTime:v(t.delay.delayTime,.5),maxDelayTime:v(t.delay.maxDelayTime,2),feedback:v(t.delay.feedback,.25),wet:v(t.delay.wet,.25)}:e.delay=null},x=function(e,t){return e.nodes=[],e.mediaStreamSource=null,e.gain=null,d({audio:!0,video:!1}).then((function(i){return e.mediaStreamSource=o.createMediaStreamSource(i),Wad.micConsent=!0,O(e,t),e})).catch((function(e){l("Error setting up microphone input: ",e)}))},O=function(e,t){e.nodes=[],e.gain=o.createGain(),e.gain.gain.value=v(t.volume,e.volume),e.nodes.push(e.mediaStreamSource),e.nodes.push(e.gain),(e.filter||t.filter)&&F(e,t),(e.reverb||t.reverb)&&C(e,t),T(e,t),D(e,t),(e.delay||t.delay)&&P(e,t),E(e,t),e.setUpExternalFxOnPlay(t,o)},G=function(e,t){e.filter.forEach((function(e,i){e.node.frequency.linearRampToValueAtTime(e.frequency,t.exactTime),e.node.frequency.linearRampToValueAtTime(e.env.frequency,t.exactTime+e.env.attack)}))},M=function(e,t){let i,a=t.loop||t.loop;i=-1!==e.env.hold&&(!a||e.userSetHold||t.env&&t.env.hold)?e.env.hold:999,e.gain[0].gain.linearRampToValueAtTime(1e-4,t.exactTime),e.gain[0].gain.linearRampToValueAtTime(e.volume,t.exactTime+e.env.attack+1e-5),e.gain[0].gain.linearRampToValueAtTime(e.volume*e.env.sustain,t.exactTime+e.env.attack+e.env.decay+2e-5),e.gain[0].gain.linearRampToValueAtTime(e.volume*e.env.sustain,t.exactTime+e.env.attack+e.env.decay+i+3e-5),e.gain[0].gain.linearRampToValueAtTime(1e-4,t.exactTime+e.env.attack+e.env.decay+i+e.env.release+4e-5),e.soundSource.start(t.exactTime,t.offset),e.soundSource.playbackRate||e.soundSource.stop(t.exactTime+e.env.attack+e.env.decay+i+e.env.release+5e-5)},q=function(e,t){let i,a=t&&t.destination||e.destination;for(let t=1;t<e.nodes.length;t++){let i,a;i="custom"===e.nodes[t-1].interface?e.nodes[t-1].output:e.nodes[t-1],a="custom"===e.nodes[t].interface?e.nodes[t].input:e.nodes[t],i.connect(a)}i="custom"===e.nodes[e.nodes.length-1].interface?e.nodes[e.nodes.length-1].output:e.nodes[e.nodes.length-1],i.connect(a)},A=function(e,t){t=t||{},e.soundSource=o.createOscillator(),e.soundSource.type=e.source,t.pitch?t.pitch in pitches?e.soundSource.frequency.value=pitches[t.pitch]:e.soundSource.frequency.value=t.pitch:e.soundSource.frequency.value=e.pitch},L=function(e,t){t&&t.env?(e.env.attack=v(t.env.attack,e.defaultEnv.attack),e.env.decay=v(t.env.decay,e.defaultEnv.decay),e.env.sustain=v(t.env.sustain,e.defaultEnv.sustain),e.env.hold=v(t.env.hold,e.defaultEnv.hold),e.env.release=v(t.env.release,e.defaultEnv.release)):e.env={attack:e.defaultEnv.attack,decay:e.defaultEnv.decay,sustain:e.defaultEnv.sustain,hold:e.defaultEnv.hold,release:e.defaultEnv.release}},F=function(e,t){t.filter&&!f(t.filter)&&(t.filter=[t.filter]),e.filter.forEach((function(i,a){i.node=o.createBiquadFilter(),i.node.type=i.type,i.node.frequency.value=t.filter&&t.filter[a]&&t.filter[a].frequency||i.frequency,i.node.Q.value=t.filter&&t.filter[a]&&t.filter[a].q||i.q,(t.filter&&t.filter[a].env||e.filter[a].env)&&"mic"!==e.source&&(i.env={attack:t.filter&&t.filter[a].env&&t.filter[a].env.attack||e.filter[a].env.attack,frequency:t.filter&&t.filter[a].env&&t.filter[a].env.frequency||e.filter[a].env.frequency}),e.nodes.push(i.node)}))},S=function(e,t){t&&t.filter&&e.filter?(f(t.filter)||(t.filter=[t.filter]),F(e,t)):e.filter&&F(e,e)},C=function(e,t){var i={interface:"custom",input:o.createGain(),convolver:o.createConvolver(),wet:o.createGain(),output:o.createGain()};i.convolver.buffer=e.reverb.buffer,i.wet.gain.value=e.reverb.wet,i.input.connect(i.convolver),i.input.connect(i.output),i.convolver.connect(i.wet),i.wet.connect(i.output),e.reverb.node=i,e.nodes.push(e.reverb.node)},D=function(e,t){var i=t&&t.panning;void 0===i&&(i=e.panning.location),"number"==typeof i&&o.createStereoPanner?(e.panning.node=o.createStereoPanner(),e.panning.node.pan.value=i,e.panning.type="stereo"):(e.panning.node=o.createPanner(),"number"==typeof i?e.panning.node.setPosition(i,0,0):e.panning.node.setPosition(i[0],i[1],i[2]),e.panning.node.panningModel=t.panningModel||e.panningModel||"equalpower",e.panning.type="3d",e.panning.node.distanceModel=t.distanceModel||e.distanceModel||e.panning.node.distanceModel,e.panning.node.maxDistance=t.maxDistance||e.maxDistance||e.panning.node.maxDistance,e.panning.node.rolloffFactor=t.rolloffFactor||e.rolloffFactor||e.panning.node.rolloffFactor,e.panning.node.refDistance=t.refDistance||e.refDistance||e.panning.node.refDistance,e.panning.node.coneInnerAngle=t.coneInnerAngle||e.coneInnerAngle||e.panning.node.coneInnerAngle,e.panning.node.coneOuterAngle=t.coneOuterAngle||e.coneOuterAngle||e.panning.node.coneOuterAngle,e.panning.node.coneOuterGain=t.coneOuterGain||e.coneOuterGain||e.panning.node.coneOuterGain),e.nodes.push(e.panning.node)},j=function(e,t){e.vibrato.wad=new Wad({source:e.vibrato.shape,pitch:e.vibrato.speed,volume:e.vibrato.magnitude,env:{attack:e.vibrato.attack},destination:e.soundSource.frequency}),e.vibrato.wad.play()},N=function(e,t){e.tremolo.wad=new Wad({source:e.tremolo.shape,pitch:e.tremolo.speed,volume:e.tremolo.magnitude,env:{attack:e.tremolo.attack,hold:10},destination:e.gain[0].gain}),e.tremolo.wad.play()},P=function(e,t){if(e.delay){t.delay||(t.delay={});var i={interface:"custom",input:o.createGain(),output:o.createGain(),delayNode:o.createDelay(e.delay.maxDelayTime),feedbackNode:o.createGain(),wetNode:o.createGain()};i.delayNode.delayTime.value=v(t.delay.delayTime,e.delay.delayTime),i.feedbackNode.gain.value=v(t.delay.feedback,e.delay.feedback),i.wetNode.gain.value=v(t.delay.wet,e.delay.wet),i.input.connect(i.delayNode),i.input.connect(i.output),i.delayNode.connect(i.feedbackNode),i.delayNode.connect(i.wetNode),i.feedbackNode.connect(i.delayNode),i.wetNode.connect(i.output),e.delay.delayNode=i,e.nodes.push(i)}},R=function(e,t){e.compressor=o.createDynamicsCompressor(),e.compressor.attack.value=v(t.compressor.attack,e.compressor.attack.value),e.compressor.knee.value=v(t.compressor.knee,e.compressor.knee.value),e.compressor.ratio.value=v(t.compressor.ratio,e.compressor.ratio.value),e.compressor.release.value=v(t.compressor.release,e.compressor.release.value),e.compressor.threshold.value=v(t.compressor.threshold,e.compressor.threshold.value),e.nodes.push(e.compressor)},B=new n.a(o),E=function(e,t){if(!e.tuna&&!t.tuna)return;let i={};if(e.tuna)for(let t in e.tuna)i[t]=e.tuna[t];if(t.tuna)for(let e in t.tuna)i[e]=t.tuna[e];for(let t in i){let a=new B[t](i[t]);e.nodes.push(a)}}},function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return n}));let a={A0:27.5,"A#0":29.1352,Bb0:29.1352,B0:30.8677,"B#0":32.7032,Cb1:30.8677,C1:32.7032,"C#1":34.6478,Db1:34.6478,D1:36.7081,"D#1":38.8909,Eb1:38.8909,E1:41.2034,Fb1:41.2034,"E#1":43.6535,F1:43.6535,"F#1":46.2493,Gb1:46.2493,G1:48.9994,"G#1":51.9131,Ab1:51.9131,A1:55,"A#1":58.2705,Bb1:58.2705,B1:61.7354,Cb2:61.7354,"B#1":65.4064,C2:65.4064,"C#2":69.2957,Db2:69.2957,D2:73.4162,"D#2":77.7817,Eb2:77.7817,E2:82.4069,Fb2:82.4069,"E#2":87.3071,F2:87.3071,"F#2":92.4986,Gb2:92.4986,G2:97.9989,"G#2":103.826,Ab2:103.826,A2:110,"A#2":116.541,Bb2:116.541,B2:123.471,Cb3:123.471,"B#2":130.813,C3:130.813,"C#3":138.591,Db3:138.591,D3:146.832,"D#3":155.563,Eb3:155.563,E3:164.814,Fb3:164.814,"E#3":174.614,F3:174.614,"F#3":184.997,Gb3:184.997,G3:195.998,"G#3":207.652,Ab3:207.652,A3:220,"A#3":233.082,Bb3:233.082,B3:246.942,Cb4:246.942,"B#3":261.626,C4:261.626,"C#4":277.183,Db4:277.183,D4:293.665,"D#4":311.127,Eb4:311.127,E4:329.628,Fb4:329.628,"E#4":349.228,F4:349.228,"F#4":369.994,Gb4:369.994,G4:391.995,"G#4":415.305,Ab4:415.305,A4:440,"A#4":466.164,Bb4:466.164,B4:493.883,Cb5:493.883,"B#4":523.251,C5:523.251,"C#5":554.365,Db5:554.365,D5:587.33,"D#5":622.254,Eb5:622.254,E5:659.255,Fb5:659.255,"E#5":698.456,F5:698.456,"F#5":739.989,Gb5:739.989,G5:783.991,"G#5":830.609,Ab5:830.609,A5:880,"A#5":932.328,Bb5:932.328,B5:987.767,Cb6:987.767,"B#5":1046.5,C6:1046.5,"C#6":1108.73,Db6:1108.73,D6:1174.66,"D#6":1244.51,Eb6:1244.51,Fb6:1318.51,E6:1318.51,"E#6":1396.91,F6:1396.91,"F#6":1479.98,Gb6:1479.98,G6:1567.98,"G#6":1661.22,Ab6:1661.22,A6:1760,"A#6":1864.66,Bb6:1864.66,B6:1975.53,Cb7:1975.53,"B#6":2093,C7:2093,"C#7":2217.46,Db7:2217.46,D7:2349.32,"D#7":2489.02,Eb7:2489.02,E7:2637.02,Fb7:2637.02,"E#7":2793.83,F7:2793.83,"F#7":2959.96,Gb7:2959.96,G7:3135.96,"G#7":3322.44,Ab7:3322.44,A7:3520,"A#7":3729.31,Bb7:3729.31,B7:3951.07,Cb8:3951.07,"B#7":4186.01,C8:4186.01},n=["C0","C#0","D0","D#0","E0","F0","F#0","G0","G#0","A0","A#0","B0","C1","C#1","D1","D#1","E1","F1","F#1","G1","G#1","A1","A#1","B1","C2","C#2","D2","D#2","E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3","C4","C#4","D4","D#4","E4","F4","F#4","G4","G#4","A4","A#4","B4","C5","C#5","D5","D#5","E5","F5","F#5","G5","G#5","A5","A#5","B5","C6","C#6","D6","D#6","E6","F6","F#6","G6","G#6","A6","A#6","B6","C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7","C8"]},function(e,t,i){!function(){var t,i,a=function(e,t){e.value=t},n=Object.create(null,{activate:{writable:!0,value:function(e){e?(this.input.disconnect(),this.input.connect(this.activateNode),this.activateCallback&&this.activateCallback(e)):(this.input.disconnect(),this.input.connect(this.output))}},bypass:{get:function(){return this._bypass},set:function(e){this._lastBypassValue!==e&&(this._bypass=e,this.activate(!e),this._lastBypassValue=e)}},connect:{value:function(e){this.output.connect(e)}},disconnect:{value:function(e){this.output.disconnect(e)}},connectInOrder:{value:function(e){for(var t=e.length-1;t--;){if(!e[t].connect)return console.error("AudioNode.connectInOrder: TypeError: Not an AudioNode.",e[t]);e[t+1].input?e[t].connect(e[t+1].input):e[t].connect(e[t+1])}}},getDefaults:{value:function(){var e={};for(var t in this.defaults)e[t]=this.defaults[t].value;return e}},automate:{value:function(e,i,a,n){var s,o=n?~~(n/1e3):t.currentTime,r=a?~~(a/1e3):0,u=this.defaults[e],l=this[e];l?u.automatable?(a?(s="linearRampToValueAtTime",l.cancelScheduledValues(o),l.setValueAtTime(l.value,o)):s="setValueAtTime",l[s](i,r+o)):l=i:console.error("Invalid Property for "+this.name)}}}),s="float",o="boolean",r="int";function u(e){if(!(this instanceof u))return new u(e);var a="undefined"==typeof window?{}:window;if(a.AudioContext||(a.AudioContext=a.webkitAudioContext),e||(console.log("tuna.js: Missing audio context! Creating a new context for you."),e=a.AudioContext&&new a.AudioContext),!e)throw new Error("Tuna cannot initialize because this environment does not support web audio.");!function(e){if(!0===e.__connectified__)return;var t=e.createGain(),i=Object.getPrototypeOf(Object.getPrototypeOf(t)),a=i.connect;i.connect=function(){var e=arguments[0];return arguments[0]=n.isPrototypeOf?n.isPrototypeOf(e)?e.input:e:e.input||e,a.apply(this,arguments),e},e.__connectified__=!0}(e),t=e,i=this}function l(e){return Math.max(0,Math.round(100*Math.pow(2,e/6))/100)}function c(e,t){var i,a,n,s=0,o=0,r=0;return i=e.toExponential().match(/^.\.?(.*)e(.+)$/),s=parseInt(i[2],10)-(i[1]+"").length,i=t.toExponential().match(/^.\.?(.*)e(.+)$/),(n=parseInt(i[2],10)-(i[1]+"").length)>s&&(s=n),a=e%t,s<-100||s>20?(o=Math.round(Math.log(a)/Math.log(10)),(a/(r=Math.pow(10,o))).toFixed(o-s)*r):parseFloat(a.toFixed(-s))}function h(e){return 0===e?1:Math.abs(e)/e}function d(e){return(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function p(e,t){return void 0===e?t:e}e.exports?e.exports=u:window.define("Tuna",(function(){return u})),u.prototype.Bitcrusher=function(e){e||(e=this.getDefaults()),this.bufferSize=e.bufferSize||this.defaults.bufferSize.value,this.input=t.createGain(),this.activateNode=t.createGain(),this.processor=t.createScriptProcessor(this.bufferSize,1,1),this.output=t.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output);var i,a,n,s,o,r=0,u=0;this.processor.onaudioprocess=function(e){for(i=e.inputBuffer.getChannelData(0),a=e.outputBuffer.getChannelData(0),n=Math.pow(.5,this.bits),o=i.length,s=0;s<o;s++)(r+=this.normfreq)>=1&&(r-=1,u=n*Math.floor(i[s]/n+.5)),a[s]=u},this.bits=e.bits||this.defaults.bits.value,this.normfreq=p(e.normfreq,this.defaults.normfreq.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Bitcrusher.prototype=Object.create(n,{name:{value:"Bitcrusher"},defaults:{writable:!0,value:{bits:{value:4,min:1,max:16,automatable:!1,type:r},bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:r},bypass:{value:!1,automatable:!1,type:o},normfreq:{value:.1,min:1e-4,max:1,automatable:!1,type:s}}},bits:{enumerable:!0,get:function(){return this.processor.bits},set:function(e){this.processor.bits=e}},normfreq:{enumerable:!0,get:function(){return this.processor.normfreq},set:function(e){this.processor.normfreq=e}}}),u.prototype.Cabinet=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.convolver=this.newConvolver(e.impulsePath||"../impulses/impulse_guitar.wav"),this.makeupNode=t.createGain(),this.output=t.createGain(),this.activateNode.connect(this.convolver.input),this.convolver.output.connect(this.makeupNode),this.makeupNode.connect(this.output),this.makeupGain=p(e.makeupGain,this.defaults.makeupGain.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Cabinet.prototype=Object.create(n,{name:{value:"Cabinet"},defaults:{writable:!0,value:{makeupGain:{value:1,min:0,max:20,automatable:!0,type:s},bypass:{value:!1,automatable:!1,type:o}}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(e){this.makeupNode.gain.setTargetAtTime(e,t.currentTime,.01)}},newConvolver:{value:function(e){return new i.Convolver({impulse:e,dryLevel:0,wetLevel:1})}}}),u.prototype.Chorus=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.attenuator=this.activateNode=t.createGain(),this.splitter=t.createChannelSplitter(2),this.delayL=t.createDelay(),this.delayR=t.createDelay(),this.feedbackGainNodeLR=t.createGain(),this.feedbackGainNodeRL=t.createGain(),this.merger=t.createChannelMerger(2),this.output=t.createGain(),this.lfoL=new i.LFO({target:this.delayL.delayTime,callback:a}),this.lfoR=new i.LFO({target:this.delayR.delayTime,callback:a}),this.input.connect(this.attenuator),this.attenuator.connect(this.output),this.attenuator.connect(this.splitter),this.splitter.connect(this.delayL,0),this.splitter.connect(this.delayR,1),this.delayL.connect(this.feedbackGainNodeLR),this.delayR.connect(this.feedbackGainNodeRL),this.feedbackGainNodeLR.connect(this.delayR),this.feedbackGainNodeRL.connect(this.delayL),this.delayL.connect(this.merger,0,0),this.delayR.connect(this.merger,0,1),this.merger.connect(this.output),this.feedback=p(e.feedback,this.defaults.feedback.value),this.rate=p(e.rate,this.defaults.rate.value),this.delay=p(e.delay,this.defaults.delay.value),this.depth=p(e.depth,this.defaults.depth.value),this.lfoR.phase=Math.PI/2,this.attenuator.gain.value=.6934,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Chorus.prototype=Object.create(n,{name:{value:"Chorus"},defaults:{writable:!0,value:{feedback:{value:.4,min:0,max:.95,automatable:!1,type:s},delay:{value:.0045,min:0,max:1,automatable:!1,type:s},depth:{value:.7,min:0,max:1,automatable:!1,type:s},rate:{value:1.5,min:0,max:8,automatable:!1,type:s},bypass:{value:!1,automatable:!1,type:o}}},delay:{enumerable:!0,get:function(){return this._delay},set:function(e){this._delay=2*Math.pow(10,e)*2e-4,this.lfoL.offset=this._delay,this.lfoR.offset=this._delay,this._depth=this._depth}},depth:{enumerable:!0,get:function(){return this._depth},set:function(e){this._depth=e,this.lfoL.oscillation=this._depth*this._delay,this.lfoR.oscillation=this._depth*this._delay}},feedback:{enumerable:!0,get:function(){return this._feedback},set:function(e){this._feedback=e,this.feedbackGainNodeLR.gain.setTargetAtTime(this._feedback,t.currentTime,.01),this.feedbackGainNodeRL.gain.setTargetAtTime(this._feedback,t.currentTime,.01)}},rate:{enumerable:!0,get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}}}),u.prototype.Compressor=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.compNode=this.activateNode=t.createDynamicsCompressor(),this.makeupNode=t.createGain(),this.output=t.createGain(),this.compNode.connect(this.makeupNode),this.makeupNode.connect(this.output),this.automakeup=p(e.automakeup,this.defaults.automakeup.value),this.makeupGain=p(e.makeupGain,this.defaults.makeupGain.value),this.threshold=p(e.threshold,this.defaults.threshold.value),this.release=p(e.release,this.defaults.release.value),this.attack=p(e.attack,this.defaults.attack.value),this.ratio=e.ratio||this.defaults.ratio.value,this.knee=p(e.knee,this.defaults.knee.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Compressor.prototype=Object.create(n,{name:{value:"Compressor"},defaults:{writable:!0,value:{threshold:{value:-20,min:-60,max:0,automatable:!0,type:s},release:{value:250,min:10,max:2e3,automatable:!0,type:s},makeupGain:{value:1,min:1,max:100,automatable:!0,type:s},attack:{value:1,min:0,max:1e3,automatable:!0,type:s},ratio:{value:4,min:1,max:50,automatable:!0,type:s},knee:{value:5,min:0,max:40,automatable:!0,type:s},automakeup:{value:!1,automatable:!1,type:o},bypass:{value:!1,automatable:!1,type:o}}},computeMakeup:{value:function(){var e=this.compNode;return-(e.threshold.value-e.threshold.value/e.ratio.value)/4}},automakeup:{enumerable:!0,get:function(){return this._automakeup},set:function(e){this._automakeup=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},threshold:{enumerable:!0,get:function(){return this.compNode.threshold},set:function(e){this.compNode.threshold.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},ratio:{enumerable:!0,get:function(){return this.compNode.ratio},set:function(e){this.compNode.ratio.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},knee:{enumerable:!0,get:function(){return this.compNode.knee},set:function(e){this.compNode.knee.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},attack:{enumerable:!0,get:function(){return this.compNode.attack},set:function(e){this.compNode.attack.value=e/1e3}},release:{enumerable:!0,get:function(){return this.compNode.release},set:function(e){this.compNode.release.value=e/1e3}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(e){this.makeupNode.gain.setTargetAtTime(l(e),t.currentTime,.01)}}}),u.prototype.Convolver=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.convolver=t.createConvolver(),this.dry=t.createGain(),this.filterLow=t.createBiquadFilter(),this.filterHigh=t.createBiquadFilter(),this.wet=t.createGain(),this.output=t.createGain(),this.activateNode.connect(this.filterLow),this.activateNode.connect(this.dry),this.filterLow.connect(this.filterHigh),this.filterHigh.connect(this.convolver),this.convolver.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.dryLevel=p(e.dryLevel,this.defaults.dryLevel.value),this.wetLevel=p(e.wetLevel,this.defaults.wetLevel.value),this.highCut=e.highCut||this.defaults.highCut.value,this.buffer=e.impulse||"../impulses/ir_rev_short.wav",this.lowCut=e.lowCut||this.defaults.lowCut.value,this.level=p(e.level,this.defaults.level.value),this.filterHigh.type="lowpass",this.filterLow.type="highpass",this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Convolver.prototype=Object.create(n,{name:{value:"Convolver"},defaults:{writable:!0,value:{highCut:{value:22050,min:20,max:22050,automatable:!0,type:s},lowCut:{value:20,min:20,max:22050,automatable:!0,type:s},dryLevel:{value:1,min:0,max:1,automatable:!0,type:s},wetLevel:{value:1,min:0,max:1,automatable:!0,type:s},level:{value:1,min:0,max:1,automatable:!0,type:s},bypass:{value:!1,automatable:!1,type:o}}},lowCut:{get:function(){return this.filterLow.frequency},set:function(e){this.filterLow.frequency.setTargetAtTime(e,t.currentTime,.01)}},highCut:{get:function(){return this.filterHigh.frequency},set:function(e){this.filterHigh.frequency.setTargetAtTime(e,t.currentTime,.01)}},level:{get:function(){return this.output.gain},set:function(e){this.output.gain.setTargetAtTime(e,t.currentTime,.01)}},dryLevel:{get:function(){return this.dry.gain},set:function(e){this.dry.gain.setTargetAtTime(e,t.currentTime,.01)}},wetLevel:{get:function(){return this.wet.gain},set:function(e){this.wet.gain.setTargetAtTime(e,t.currentTime,.01)}},buffer:{enumerable:!1,get:function(){return this.convolver.buffer},set:function(e){var i=this.convolver,a=new XMLHttpRequest;e?(a.open("GET",e,!0),a.responseType="arraybuffer",a.onreadystatechange=function(){4===a.readyState&&(a.status<300&&a.status>199||302===a.status)&&t.decodeAudioData(a.response,(function(e){i.buffer=e}),(function(e){e&&console.log("Tuna.Convolver.setBuffer: Error decoding data"+e)}))},a.send(null)):console.log("Tuna.Convolver.setBuffer: Missing impulse path!")}}}),u.prototype.Delay=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.dry=t.createGain(),this.wet=t.createGain(),this.filter=t.createBiquadFilter(),this.delay=t.createDelay(10),this.feedbackNode=t.createGain(),this.output=t.createGain(),this.activateNode.connect(this.delay),this.activateNode.connect(this.dry),this.delay.connect(this.filter),this.filter.connect(this.feedbackNode),this.feedbackNode.connect(this.delay),this.feedbackNode.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.delayTime=e.delayTime||this.defaults.delayTime.value,this.feedback=p(e.feedback,this.defaults.feedback.value),this.wetLevel=p(e.wetLevel,this.defaults.wetLevel.value),this.dryLevel=p(e.dryLevel,this.defaults.dryLevel.value),this.cutoff=e.cutoff||this.defaults.cutoff.value,this.filter.type="lowpass",this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Delay.prototype=Object.create(n,{name:{value:"Delay"},defaults:{writable:!0,value:{delayTime:{value:100,min:20,max:1e3,automatable:!1,type:s},feedback:{value:.45,min:0,max:.9,automatable:!0,type:s},cutoff:{value:2e4,min:20,max:2e4,automatable:!0,type:s},wetLevel:{value:.5,min:0,max:1,automatable:!0,type:s},dryLevel:{value:1,min:0,max:1,automatable:!0,type:s},bypass:{value:!1,automatable:!1,type:o}}},delayTime:{enumerable:!0,get:function(){return this.delay.delayTime},set:function(e){this.delay.delayTime.value=e/1e3}},wetLevel:{enumerable:!0,get:function(){return this.wet.gain},set:function(e){this.wet.gain.setTargetAtTime(e,t.currentTime,.01)}},dryLevel:{enumerable:!0,get:function(){return this.dry.gain},set:function(e){this.dry.gain.setTargetAtTime(e,t.currentTime,.01)}},feedback:{enumerable:!0,get:function(){return this.feedbackNode.gain},set:function(e){this.feedbackNode.gain.setTargetAtTime(e,t.currentTime,.01)}},cutoff:{enumerable:!0,get:function(){return this.filter.frequency},set:function(e){this.filter.frequency.setTargetAtTime(e,t.currentTime,.01)}}}),u.prototype.Filter=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.filter=t.createBiquadFilter(),this.output=t.createGain(),this.activateNode.connect(this.filter),this.filter.connect(this.output),this.frequency=e.frequency||this.defaults.frequency.value,this.Q=e.resonance||this.defaults.Q.value,this.filterType=p(e.filterType,this.defaults.filterType.value),this.gain=p(e.gain,this.defaults.gain.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Filter.prototype=Object.create(n,{name:{value:"Filter"},defaults:{writable:!0,value:{frequency:{value:800,min:20,max:22050,automatable:!0,type:s},Q:{value:1,min:.001,max:100,automatable:!0,type:s},gain:{value:0,min:-40,max:40,automatable:!0,type:s},bypass:{value:!1,automatable:!1,type:o},filterType:{value:"lowpass",automatable:!1,type:"string"}}},filterType:{enumerable:!0,get:function(){return this.filter.type},set:function(e){this.filter.type=e}},Q:{enumerable:!0,get:function(){return this.filter.Q},set:function(e){this.filter.Q.value=e}},gain:{enumerable:!0,get:function(){return this.filter.gain},set:function(e){this.filter.gain.setTargetAtTime(e,t.currentTime,.01)}},frequency:{enumerable:!0,get:function(){return this.filter.frequency},set:function(e){this.filter.frequency.setTargetAtTime(e,t.currentTime,.01)}}}),u.prototype.Gain=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.gainNode=t.createGain(),this.output=t.createGain(),this.activateNode.connect(this.gainNode),this.gainNode.connect(this.output),this.gain=p(e.gain,this.defaults.gain.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Gain.prototype=Object.create(n,{name:{value:"Gain"},defaults:{writable:!0,value:{bypass:{value:!1,automatable:!1,type:o},gain:{value:1,automatable:!0,type:s}}},gain:{enumerable:!0,get:function(){return this.gainNode.gain},set:function(e){this.gainNode.gain.setTargetAtTime(e,t.currentTime,.01)}}}),u.prototype.MoogFilter=function(e){var i,a,n,s,o,r,u,l,c,h,d,f,v,m,y;e||(e=this.getDefaults()),this.bufferSize=e.bufferSize||this.defaults.bufferSize.value,this.input=t.createGain(),this.activateNode=t.createGain(),this.processor=t.createScriptProcessor(this.bufferSize,1,1),this.output=t.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output),i=a=n=s=o=r=u=l=0,this.processor.onaudioprocess=function(e){for(c=e.inputBuffer.getChannelData(0),h=e.outputBuffer.getChannelData(0),d=1.16*this.cutoff,y=d*d*.35013*(d*d),f=this.resonance*(1-.15*d*d),m=c.length,v=0;v<m;v++)c[v]-=l*f,c[v]*=y,o=c[v]+.3*i+(1-d)*o,i=c[v],r=o+.3*a+(1-d)*r,a=o,u=r+.3*n+(1-d)*u,n=r,l=u+.3*s+(1-d)*l,s=u,h[v]=l},this.cutoff=p(e.cutoff,this.defaults.cutoff.value),this.resonance=p(e.resonance,this.defaults.resonance.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.MoogFilter.prototype=Object.create(n,{name:{value:"MoogFilter"},defaults:{writable:!0,value:{bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:r},bypass:{value:!1,automatable:!1,type:o},cutoff:{value:.065,min:1e-4,max:1,automatable:!1,type:s},resonance:{value:3.5,min:0,max:4,automatable:!1,type:s}}},cutoff:{enumerable:!0,get:function(){return this.processor.cutoff},set:function(e){this.processor.cutoff=e}},resonance:{enumerable:!0,get:function(){return this.processor.resonance},set:function(e){this.processor.resonance=e}}}),u.prototype.Overdrive=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.inputDrive=t.createGain(),this.waveshaper=t.createWaveShaper(),this.outputDrive=t.createGain(),this.output=t.createGain(),this.activateNode.connect(this.inputDrive),this.inputDrive.connect(this.waveshaper),this.waveshaper.connect(this.outputDrive),this.outputDrive.connect(this.output),this.ws_table=new Float32Array(this.k_nSamples),this.drive=p(e.drive,this.defaults.drive.value),this.outputGain=p(e.outputGain,this.defaults.outputGain.value),this.curveAmount=p(e.curveAmount,this.defaults.curveAmount.value),this.algorithmIndex=p(e.algorithmIndex,this.defaults.algorithmIndex.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Overdrive.prototype=Object.create(n,{name:{value:"Overdrive"},defaults:{writable:!0,value:{drive:{value:1,min:0,max:1,automatable:!0,type:s,scaled:!0},outputGain:{value:0,min:-46,max:0,automatable:!0,type:s,scaled:!0},curveAmount:{value:.725,min:0,max:1,automatable:!1,type:s},algorithmIndex:{value:0,min:0,max:5,automatable:!1,type:r},bypass:{value:!1,automatable:!1,type:o}}},k_nSamples:{value:8192},drive:{get:function(){return this.inputDrive.gain},set:function(e){this._drive=e}},curveAmount:{get:function(){return this._curveAmount},set:function(e){this._curveAmount=e,void 0===this._algorithmIndex&&(this._algorithmIndex=0),this.waveshaperAlgorithms[this._algorithmIndex](this._curveAmount,this.k_nSamples,this.ws_table),this.waveshaper.curve=this.ws_table}},outputGain:{get:function(){return this.outputDrive.gain},set:function(e){this._outputGain=l(e),this.outputDrive.gain.setValueAtTime(this._outputGain,t.currentTime,.01)}},algorithmIndex:{get:function(){return this._algorithmIndex},set:function(e){this._algorithmIndex=e,this.curveAmount=this._curveAmount}},waveshaperAlgorithms:{value:[function(e,t,i){var a,n,s=2*(e=Math.min(e,.9999))/(1-e);for(a=0;a<t;a++)n=2*a/t-1,i[a]=(1+s)*n/(1+s*Math.abs(n))},function(e,t,i){var a,n,s;for(a=0;a<t;a++)n=2*a/t-1,s=(.5*Math.pow(n+1.4,2)-1)*s>=0?5.8:1.2,i[a]=d(s)},function(e,t,i){var a,n,s,o=1-e;for(a=0;a<t;a++)s=(n=2*a/t-1)<0?-Math.pow(Math.abs(n),o+.04):Math.pow(n,o),i[a]=d(2*s)},function(e,t,i){var a,n,s,o,r=1-e>.99?.99:1-e;for(a=0;a<t;a++)n=2*a/t-1,(o=Math.abs(n))<r?s=o:o>r?s=r+(o-r)/(1+Math.pow((o-r)/(1-r),2)):o>1&&(s=o),i[a]=h(n)*s*(1/((r+1)/2))},function(e,t,i){var a,n;for(a=0;a<t;a++)n=2*a/t-1,i[a]=n<-.08905?-3/4*(1-Math.pow(1-(Math.abs(n)-.032857),12)+1/3*(Math.abs(n)-.032847))+.01:n>=-.08905&&n<.320018?n*n*-6.153+3.9375*n:.630035},function(e,t,i){var a,n,s=2+Math.round(14*e),o=Math.round(Math.pow(2,s-1));for(a=0;a<t;a++)n=2*a/t-1,i[a]=Math.round(n*o)/o}]}}),u.prototype.Panner=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.panner=t.createStereoPanner(),this.output=t.createGain(),this.activateNode.connect(this.panner),this.panner.connect(this.output),this.pan=p(e.pan,this.defaults.pan.value),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Panner.prototype=Object.create(n,{name:{value:"Panner"},defaults:{writable:!0,value:{bypass:{value:!1,automatable:!1,type:o},pan:{value:0,min:-1,max:1,automatable:!0,type:s}}},pan:{enumerable:!0,get:function(){return this.panner.pan},set:function(e){this.panner.pan.value=e}}}),u.prototype.Phaser=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.splitter=this.activateNode=t.createChannelSplitter(2),this.filtersL=[],this.filtersR=[],this.feedbackGainNodeL=t.createGain(),this.feedbackGainNodeR=t.createGain(),this.merger=t.createChannelMerger(2),this.filteredSignal=t.createGain(),this.output=t.createGain(),this.lfoL=new i.LFO({target:this.filtersL,callback:this.callback}),this.lfoR=new i.LFO({target:this.filtersR,callback:this.callback});for(var a=this.stage;a--;)this.filtersL[a]=t.createBiquadFilter(),this.filtersR[a]=t.createBiquadFilter(),this.filtersL[a].type="allpass",this.filtersR[a].type="allpass";this.input.connect(this.splitter),this.input.connect(this.output),this.splitter.connect(this.filtersL[0],0,0),this.splitter.connect(this.filtersR[0],1,0),this.connectInOrder(this.filtersL),this.connectInOrder(this.filtersR),this.filtersL[this.stage-1].connect(this.feedbackGainNodeL),this.filtersL[this.stage-1].connect(this.merger,0,0),this.filtersR[this.stage-1].connect(this.feedbackGainNodeR),this.filtersR[this.stage-1].connect(this.merger,0,1),this.feedbackGainNodeL.connect(this.filtersL[0]),this.feedbackGainNodeR.connect(this.filtersR[0]),this.merger.connect(this.output),this.rate=p(e.rate,this.defaults.rate.value),this.baseModulationFrequency=e.baseModulationFrequency||this.defaults.baseModulationFrequency.value,this.depth=p(e.depth,this.defaults.depth.value),this.feedback=p(e.feedback,this.defaults.feedback.value),this.stereoPhase=p(e.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Phaser.prototype=Object.create(n,{name:{value:"Phaser"},stage:{value:4},defaults:{writable:!0,value:{rate:{value:.1,min:0,max:8,automatable:!1,type:s},depth:{value:.6,min:0,max:1,automatable:!1,type:s},feedback:{value:.7,min:0,max:1,automatable:!1,type:s},stereoPhase:{value:40,min:0,max:180,automatable:!1,type:s},baseModulationFrequency:{value:700,min:500,max:1500,automatable:!1,type:s},bypass:{value:!1,automatable:!1,type:o}}},callback:{value:function(e,t){for(var i=0;i<4;i++)e[i].frequency.value=t}},depth:{get:function(){return this._depth},set:function(e){this._depth=e,this.lfoL.oscillation=this._baseModulationFrequency*this._depth,this.lfoR.oscillation=this._baseModulationFrequency*this._depth}},rate:{get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},baseModulationFrequency:{enumerable:!0,get:function(){return this._baseModulationFrequency},set:function(e){this._baseModulationFrequency=e,this.lfoL.offset=this._baseModulationFrequency,this.lfoR.offset=this._baseModulationFrequency,this.depth=this._depth}},feedback:{get:function(){return this._feedback},set:function(e){this._feedback=e,this.feedbackGainNodeL.gain.setTargetAtTime(this._feedback,t.currentTime,.01),this.feedbackGainNodeR.gain.setTargetAtTime(this._feedback,t.currentTime,.01)}},stereoPhase:{get:function(){return this._stereoPhase},set:function(e){this._stereoPhase=e;var t=this.lfoL._phase+this._stereoPhase*Math.PI/180;t=c(t,2*Math.PI),this.lfoR._phase=t}}}),u.prototype.PingPongDelay=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.wet=t.createGain(),this.stereoToMonoMix=t.createGain(),this.feedbackLevel=t.createGain(),this.output=t.createGain(),this.delayLeft=t.createDelay(10),this.delayRight=t.createDelay(10),this.activateNode=t.createGain(),this.splitter=t.createChannelSplitter(2),this.merger=t.createChannelMerger(2),this.activateNode.connect(this.splitter),this.splitter.connect(this.stereoToMonoMix,0,0),this.splitter.connect(this.stereoToMonoMix,1,0),this.stereoToMonoMix.gain.value=.5,this.stereoToMonoMix.connect(this.wet),this.wet.connect(this.delayLeft),this.feedbackLevel.connect(this.wet),this.delayLeft.connect(this.delayRight),this.delayRight.connect(this.feedbackLevel),this.delayLeft.connect(this.merger,0,0),this.delayRight.connect(this.merger,0,1),this.merger.connect(this.output),this.activateNode.connect(this.output),this.delayTimeLeft=void 0!==e.delayTimeLeft?e.delayTimeLeft:this.defaults.delayTimeLeft.value,this.delayTimeRight=void 0!==e.delayTimeRight?e.delayTimeRight:this.defaults.delayTimeRight.value,this.feedbackLevel.gain.value=void 0!==e.feedback?e.feedback:this.defaults.feedback.value,this.wet.gain.value=void 0!==e.wetLevel?e.wetLevel:this.defaults.wetLevel.value,this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.PingPongDelay.prototype=Object.create(n,{name:{value:"PingPongDelay"},delayTimeLeft:{enumerable:!0,get:function(){return this._delayTimeLeft},set:function(e){this._delayTimeLeft=e,this.delayLeft.delayTime.value=e/1e3}},delayTimeRight:{enumerable:!0,get:function(){return this._delayTimeRight},set:function(e){this._delayTimeRight=e,this.delayRight.delayTime.value=e/1e3}},wetLevel:{enumerable:!0,get:function(){return this.wet.gain},set:function(e){this.wet.gain.setTargetAtTime(e,t.currentTime,.01)}},feedback:{enumerable:!0,get:function(){return this.feedbackLevel.gain},set:function(e){this.feedbackLevel.gain.setTargetAtTime(e,t.currentTime,.01)}},defaults:{writable:!0,value:{delayTimeLeft:{value:200,min:1,max:1e4,automatable:!1,type:r},delayTimeRight:{value:400,min:1,max:1e4,automatable:!1,type:r},feedback:{value:.3,min:0,max:1,automatable:!0,type:s},wetLevel:{value:.5,min:0,max:1,automatable:!0,type:s},bypass:{value:!1,automatable:!1,type:o}}}}),u.prototype.Tremolo=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.splitter=this.activateNode=t.createChannelSplitter(2),this.amplitudeL=t.createGain(),this.amplitudeR=t.createGain(),this.merger=t.createChannelMerger(2),this.output=t.createGain(),this.lfoL=new i.LFO({target:this.amplitudeL.gain,callback:a}),this.lfoR=new i.LFO({target:this.amplitudeR.gain,callback:a}),this.input.connect(this.splitter),this.splitter.connect(this.amplitudeL,0),this.splitter.connect(this.amplitudeR,1),this.amplitudeL.connect(this.merger,0,0),this.amplitudeR.connect(this.merger,0,1),this.merger.connect(this.output),this.rate=e.rate||this.defaults.rate.value,this.intensity=p(e.intensity,this.defaults.intensity.value),this.stereoPhase=p(e.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.offset=1-this.intensity/2,this.lfoR.offset=1-this.intensity/2,this.lfoL.phase=this.stereoPhase*Math.PI/180,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.Tremolo.prototype=Object.create(n,{name:{value:"Tremolo"},defaults:{writable:!0,value:{intensity:{value:.3,min:0,max:1,automatable:!1,type:s},stereoPhase:{value:0,min:0,max:180,automatable:!1,type:s},rate:{value:5,min:.1,max:11,automatable:!1,type:s},bypass:{value:!1,automatable:!1,type:o}}},intensity:{enumerable:!0,get:function(){return this._intensity},set:function(e){this._intensity=e,this.lfoL.offset=1-this._intensity/2,this.lfoR.offset=1-this._intensity/2,this.lfoL.oscillation=this._intensity,this.lfoR.oscillation=this._intensity}},rate:{enumerable:!0,get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},stereoPhase:{enumerable:!0,get:function(){return this._stereoPhase},set:function(e){this._stereoPhase=e;var t=this.lfoL._phase+this._stereoPhase*Math.PI/180;t=c(t,2*Math.PI),this.lfoR.phase=t}}}),u.prototype.WahWah=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.activateNode=t.createGain(),this.envelopeFollower=new i.EnvelopeFollower({target:this,callback:function(e,t){e.sweep=t}}),this.filterBp=t.createBiquadFilter(),this.filterPeaking=t.createBiquadFilter(),this.output=t.createGain(),this.activateNode.connect(this.filterBp),this.filterBp.connect(this.filterPeaking),this.filterPeaking.connect(this.output),this.init(),this.automode=p(e.automode,this.defaults.automode.value),this.resonance=e.resonance||this.defaults.resonance.value,this.sensitivity=p(e.sensitivity,this.defaults.sensitivity.value),this.baseFrequency=p(e.baseFrequency,this.defaults.baseFrequency.value),this.excursionOctaves=e.excursionOctaves||this.defaults.excursionOctaves.value,this.sweep=p(e.sweep,this.defaults.sweep.value),this.activateNode.gain.value=2,this.envelopeFollower.activate(!0),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.WahWah.prototype=Object.create(n,{name:{value:"WahWah"},defaults:{writable:!0,value:{automode:{value:!0,automatable:!1,type:o},baseFrequency:{value:.5,min:0,max:1,automatable:!1,type:s},excursionOctaves:{value:2,min:1,max:6,automatable:!1,type:s},sweep:{value:.2,min:0,max:1,automatable:!1,type:s},resonance:{value:10,min:1,max:100,automatable:!1,type:s},sensitivity:{value:.5,min:-1,max:1,automatable:!1,type:s},bypass:{value:!1,automatable:!1,type:o}}},automode:{get:function(){return this._automode},set:function(e){this._automode=e,e?(this.activateNode.connect(this.envelopeFollower.input),this.envelopeFollower.activate(!0)):(this.envelopeFollower.activate(!1),this.activateNode.disconnect(),this.activateNode.connect(this.filterBp))}},filterFreqTimeout:{value:0},setFilterFreq:{value:function(){try{this.filterBp.frequency.value=Math.min(22050,this._baseFrequency+this._excursionFrequency*this._sweep),this.filterPeaking.frequency.value=Math.min(22050,this._baseFrequency+this._excursionFrequency*this._sweep)}catch(e){clearTimeout(this.filterFreqTimeout),this.filterFreqTimeout=setTimeout(function(){this.setFilterFreq()}.bind(this),0)}}},sweep:{enumerable:!0,get:function(){return this._sweep},set:function(e){this._sweep=Math.pow(e>1?1:e<0?0:e,this._sensitivity),this.setFilterFreq()}},baseFrequency:{enumerable:!0,get:function(){return this._baseFrequency},set:function(e){this._baseFrequency=50*Math.pow(10,2*e),this._excursionFrequency=Math.min(t.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},excursionOctaves:{enumerable:!0,get:function(){return this._excursionOctaves},set:function(e){this._excursionOctaves=e,this._excursionFrequency=Math.min(t.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},sensitivity:{enumerable:!0,get:function(){return this._sensitivity},set:function(e){this._sensitivity=Math.pow(10,e)}},resonance:{enumerable:!0,get:function(){return this._resonance},set:function(e){this._resonance=e,this.filterPeaking.Q=this._resonance}},init:{value:function(){this.output.gain.value=1,this.filterPeaking.type="peaking",this.filterBp.type="bandpass",this.filterPeaking.frequency.value=100,this.filterPeaking.gain.value=20,this.filterPeaking.Q.value=5,this.filterBp.frequency.value=100,this.filterBp.Q.value=1}}}),u.prototype.EnvelopeFollower=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.jsNode=this.output=t.createScriptProcessor(this.buffersize,1,1),this.input.connect(this.output),this.attackTime=p(e.attackTime,this.defaults.attackTime.value),this.releaseTime=p(e.releaseTime,this.defaults.releaseTime.value),this._envelope=0,this.target=e.target||{},this.callback=e.callback||function(){},this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.EnvelopeFollower.prototype=Object.create(n,{name:{value:"EnvelopeFollower"},defaults:{value:{attackTime:{value:.003,min:0,max:.5,automatable:!1,type:s},releaseTime:{value:.5,min:0,max:.5,automatable:!1,type:s},bypass:{value:!1,automatable:!1,type:o}}},buffersize:{value:256},envelope:{value:0},sampleRate:{value:44100},attackTime:{enumerable:!0,get:function(){return this._attackTime},set:function(e){this._attackTime=e,this._attackC=Math.exp(-1/this._attackTime*this.sampleRate/this.buffersize)}},releaseTime:{enumerable:!0,get:function(){return this._releaseTime},set:function(e){this._releaseTime=e,this._releaseC=Math.exp(-1/this._releaseTime*this.sampleRate/this.buffersize)}},callback:{get:function(){return this._callback},set:function(e){"function"==typeof e?this._callback=e:console.error("tuna.js: "+this.name+": Callback must be a function!")}},target:{get:function(){return this._target},set:function(e){this._target=e}},activate:{value:function(e){this.activated=e,e?(this.jsNode.connect(t.destination),this.jsNode.onaudioprocess=this.returnCompute(this)):(this.jsNode.disconnect(),this.jsNode.onaudioprocess=null),this.activateCallback&&this.activateCallback(e)}},returnCompute:{value:function(e){return function(t){e.compute(t)}}},compute:{value:function(e){var t,i,a,n,s=e.inputBuffer.getChannelData(0).length,o=e.inputBuffer.numberOfChannels;if(i=a=n=0,o>1)for(n=0;n<s;++n)for(;i<o;++i)a+=(t=e.inputBuffer.getChannelData(i)[n])*t/o;else for(n=0;n<s;++n)a+=(t=e.inputBuffer.getChannelData(0)[n])*t;a=Math.sqrt(a),this._envelope<a?(this._envelope*=this._attackC,this._envelope+=(1-this._attackC)*a):(this._envelope*=this._releaseC,this._envelope+=(1-this._releaseC)*a),this._callback(this._target,this._envelope)}}}),u.prototype.LFO=function(e){e||(e=this.getDefaults()),this.input=t.createGain(),this.output=t.createScriptProcessor(256,1,1),this.activateNode=t.destination,this.frequency=p(e.frequency,this.defaults.frequency.value),this.offset=p(e.offset,this.defaults.offset.value),this.oscillation=p(e.oscillation,this.defaults.oscillation.value),this.phase=p(e.phase,this.defaults.phase.value),this.target=e.target||{},this.output.onaudioprocess=this.callback(e.callback||function(){}),this.bypass=e.bypass||this.defaults.bypass.value},u.prototype.LFO.prototype=Object.create(n,{name:{value:"LFO"},bufferSize:{value:256},sampleRate:{value:44100},defaults:{value:{frequency:{value:1,min:0,max:20,automatable:!1,type:s},offset:{value:.85,min:0,max:22049,automatable:!1,type:s},oscillation:{value:.3,min:-22050,max:22050,automatable:!1,type:s},phase:{value:0,min:0,max:2*Math.PI,automatable:!1,type:s},bypass:{value:!1,automatable:!1,type:o}}},frequency:{get:function(){return this._frequency},set:function(e){this._frequency=e,this._phaseInc=2*Math.PI*this._frequency*this.bufferSize/this.sampleRate}},offset:{get:function(){return this._offset},set:function(e){this._offset=e}},oscillation:{get:function(){return this._oscillation},set:function(e){this._oscillation=e}},phase:{get:function(){return this._phase},set:function(e){this._phase=e}},target:{get:function(){return this._target},set:function(e){this._target=e}},activate:{value:function(e){e?(this.output.connect(t.destination),this.activateCallback&&this.activateCallback(e)):this.output.disconnect()}},callback:{value:function(e){var t=this;return function(){t._phase+=t._phaseInc,t._phase>2*Math.PI&&(t._phase=0),e(t._target,t._offset+t._oscillation*Math.sin(t._phase))}}}}),u.toString=u.prototype.toString=function(){return"Please visit https://github.com/Theodeus/tuna/wiki for instructions on how to use Tuna.js"}}()},function(e,t,i){"use strict";i.d(t,"d",(function(){return u})),i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return o})),i.d(t,"b",(function(){return r}));var a=i(0),n=i(1);let s=function(e,t,i,a){t=t||0,navigator.requestMIDIAccess().then((function(){r[t]?(r[t].onmidimessage=e,"function"==typeof i&&i()):"function"==typeof a&&a()}))},o={play:function(){Object(a.n)("playing midi")},stop:function(){Object(a.n)("stopping midi")}},r=[],u=function(e){Object(a.n)(e.receivedTime,e.data,2),144===e.data[0]?0===e.data[2]?(Object(a.n)("Playing note: ",2),Object(a.n)(n.b[e.data[1]-12],2),o.stop(n.b[e.data[1]-12])):e.data[2]>0&&(Object(a.n)("Stopping note: ",2),Object(a.n)(n.b[e.data[1]-12],2),o.play({pitch:n.b[e.data[1]-12],label:n.b[e.data[1]-12]})):176===e.data[0]?(Object(a.n)("controller"),46==e.data[1]&&(127==e.data[2]?o.pedalMod=!0:0==e.data[2]&&(o.pedalMod=!1))):224===e.data[0]&&Object(a.n)("pitch bend")},l=function(e){r=[];for(var t=e.inputs.values(),i=t.next();!i.done;i=t.next())r.push(i.value);Object(a.n)("MIDI inputs: "),Object(a.n)(r);for(var n=0;n<r.length;n++)r[n].onmidimessage=u},c=function(e){Object(a.n)("Failed to get MIDI access",e)};if(navigator&&navigator.requestMIDIAccess)try{navigator.requestMIDIAccess().then(l,c)}catch(e){Object(a.n)("Failed to get MIDI access",e)}},function(e,t,i){"use strict";var a=i(0),n=i(1),s=new Uint8Array(2048);function o(e){for(var t,i=e.inputBuffer.getChannelData(0),a=i.length,n=0,s=0;s<a;s++)t=i[s],Math.abs(t)>=this.clipLevel&&(this.clipping=!0,this.lastClip=window.performance.now()),n+=t*t;var o=Math.sqrt(n/a);this.volume=Math.max(o,this.volume*this.averaging)}const r=function(e){e||(e={}),this.isSetUp=!1,this.playable=1,e.reverb?Object(a.f)(this,e):this.setUp(e)};r.prototype.setUp=function(e){var t,i,n,s,r;this.wads=[],this.input=a.i.createAnalyser(),this.input.fftSize=2048,this.nodes=[this.input],this.destination=e.destination||a.i.destination,this.volume=e.volume||1,this.gain=a.i.createGain(),this.gain.gain.value=this.volume,this.output=a.i.createAnalyser(),this.tuna=e.tuna||null,this.audioMeter=null,e.audioMeter&&(this.audioMeter=(t=a.i,i=e.audioMeter.clipLevel,n=e.audioMeter.averaging,s=e.audioMeter.clipLag,(r=t.createScriptProcessor(512)).onaudioprocess=o,r.clipping=!1,r.lastClip=0,r.volume=0,r.clipLevel=i||.98,r.averaging=n||.95,r.clipLag=s||750,r.connect(t.destination),r.checkClipping=function(){return!!this.clipping&&(this.lastClip+this.clipLag<window.performance.now()&&(this.clipping=!1),this.clipping)},r.shutdown=function(){this.disconnect(),this.onaudioprocess=null},r),this.output.connect(this.audioMeter)),this.globalReverb=e.globalReverb||!1,Object(a.d)(this,e),this.filter&&Object(a.j)(this,e),this.reverb&&Object(a.z)(this,e),this.constructExternalFx(e,a.i),Object(a.e)(this,e),Object(a.y)(this,e),e.compressor&&Object(a.a)(this,e),Object(a.b)(this,e),Object(a.t)(this,e),Object(a.B)(this,e),this.nodes.push(this.gain),this.nodes.push(this.output),Object(a.r)(this,e),this.isSetUp=!0,e.callback&&e.callback(this)},r.prototype.updatePitch=function(e){this.input.getByteTimeDomainData(s);var t,i,o=function(e,t){var i=-1,a=0,n=0,s=!1;if(e.length<1996)return-1;for(let t=0;t<1e3;t++){var o=(e[t]-128)/128;n+=o*o}if((n=Math.sqrt(n/1e3))<.01)return-1;for(var r=1,u=4;u<=1e3;u++){var l=0;for(let t=0;t<1e3;t++)l+=Math.abs((e[t]-128)/128-(e[t+u]-128)/128);if((l=1-l/1e3)>.9&&l>r)s=!0;else if(s)return t/i;r=l,l>a&&(a=l,i=u)}return a>.01?t/i:-1}(s,a.i.sampleRate);if(-1!==o&&11025!==o&&12e3!==o){var r=o;this.pitch=Math.floor(r);var u=(t=r,i=Math.log(t/440)/Math.log(2)*12,Math.round(i)+69);this.noteName=n.b[u-12]}var l=this;l.rafID=window.requestAnimationFrame((function(){l.updatePitch()}))},r.prototype.stopUpdatingPitch=function(){cancelAnimationFrame(this.rafID)},r.prototype.setVolume=function(e){return this.isSetUp?this.gain.gain.value=e:Object(a.n)("This PolyWad is not set up yet."),this},r.prototype.setPitch=function(e){this.wads.forEach((function(t){return e in n.a?(t.soundSource&&(t.soundSource.frequency.value=n.a[e]),t.pitch=n.a[e]):(t.soundSource&&(t.soundSource.frequency.value=e),t.pitch=e),this}))},r.prototype.play=function(e){if(this.isSetUp)if(this.playable<1)this.playOnLoad=!0,this.playOnLoadArg=e;else{e&&e.volume&&(this.gain.gain.value=e.volume,e.volume=void 0);for(var t=0;t<this.wads.length;t++)this.wads[t].play(e)}else Object(a.n)("This PolyWad is not set up yet.");return this},r.prototype.stop=function(e){if(this.isSetUp)for(var t=0;t<this.wads.length;t++)this.wads[t].stop(e)},r.prototype.add=function(e){return this.isSetUp?(e.destination=this.input,this.wads.push(e),e instanceof r&&(e.output.disconnect(0),e.output.connect(this.input))):Object(a.n)("This PolyWad is not set up yet."),this},r.prototype.remove=function(e){if(this.isSetUp)for(var t=0;t<this.wads.length;t++)this.wads[t]===e&&(this.wads[t].destination=a.i.destination,this.wads.splice(t,1),e instanceof Wad.Poly&&(e.output.disconnect(0),e.output.connect(a.i.destination)));return this},r.prototype.constructExternalFx=function(e,t){},t.a=r},function(e,t,i){"use strict";function a(e,t){if(i=e,!(null!=(a=t)&&"undefined"!=typeof Symbol&&a[Symbol.hasInstance]?a[Symbol.hasInstance](i):i instanceof a))throw new TypeError("Cannot call a class as a function");var i,a}function n(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s,o,r,u=function(){function e(t,i){a(this,e),this.Wad=i,t=Object.assign({},e.defaultArgs,t),this.files=t.files,this.sounds=this.files.map((function(e){return e.play?e:new i({source:e})})),this.randomSounds=this.sounds.slice(),this.random=t.random,this.randomPlaysBeforeRepeat=this.sounds.length>3&&t.randomPlaysBeforeRepeat<this.sounds.length-1?t.randomPlaysBeforeRepeat:0,this.index=0,this.waitingSounds=[]}var t,i,s;return t=e,(i=[{key:"play",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!this.sounds.length)return 0;if(this.random){var i=Math.floor(Math.random()*this.randomSounds.length),a=this.randomSounds[i];return this.index=this.sounds.indexOf(a),this.waitingSounds=this.waitingSounds.filter((function(t){return t.plays-=1,!(t.plays<1)||(e.randomSounds.push(t.sound),null)})),this.randomPlaysBeforeRepeat&&(this.randomSounds.splice(i,1),this.waitingSounds.push({plays:this.randomPlaysBeforeRepeat,sound:a})),a.play(t)}var n=this.sounds[this.index]?this.sounds[this.index].play(t):void 0;return this.index+=1,this.index>=this.sounds.length&&(this.index=0),n}},{key:"add",value:function(e){return e.play||(e=new this.Wad({source:e})),this.sounds.push(e),this.randomSounds.push(e),this}},{key:"remove",value:function(e){var t=this.sounds.indexOf(e);if(-1===t)throw new Error("That sound does not exist: ".concat(e));this.sounds.splice(t,1);var i=this.randomSounds.indexOf(e);return-1===i?this.waitingSounds=this.waitingSounds.filter((function(t){return t.sound!==e})):this.randomSounds.splice(i,1),this}}])&&n(t.prototype,i),s&&n(t,s),e}();r={files:[],random:!1,randomPlaysBeforeRepeat:0},(o="defaultArgs")in(s=u)?Object.defineProperty(s,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):s[o]=r,t.a=u},function(e,t,i){"use strict";t.a={hiHatClosed:{source:"noise",env:{attack:.001,decay:.008,sustain:.2,hold:.03,release:.01},filter:{type:"highpass",frequency:400,q:1}},snare:{source:"noise",env:{attack:.001,decay:.01,sustain:.2,hold:.03,release:.02},filter:{type:"bandpass",frequency:300,q:.18}},hiHatOpen:{source:"noise",env:{attack:.001,decay:.008,sustain:.2,hold:.43,release:.01},filter:{type:"highpass",frequency:100,q:.2}},ghost:{source:"square",volume:.3,env:{attack:.01,decay:.002,sustain:.5,hold:2.5,release:.3},filter:{type:"lowpass",frequency:600,q:7,env:{attack:.7,frequency:1600}},vibrato:{attack:8,speed:8,magnitude:100}},piano:{source:"square",volume:1.4,env:{attack:.01,decay:.005,sustain:.2,hold:.015,release:.3},filter:{type:"lowpass",frequency:1200,q:8.5,env:{attack:.2,frequency:600}}}}},function(e,t,i){"use strict";var a=i(2),n=i.n(a);class s{constructor(e,t){this._setFunc=t,this.AudioParamautomationRate="a-rate",this.defaultValue=e,this.maxValue=34028234663852886e22,this.minValue=-34028234663852886e22,this._value=this.defaultValue}get value(){return this._value}set value(e){this._setFunc(e),this._value=e}}var o=i(0);let r=function(e){if(this.source=e.source,this.destination=e.destination||o.i.destination,this.volume=Object(o.D)(e.volume,1),this.defaultVolume=this.volume,this.playable=1,this.pitch=r.pitches[e.pitch]||e.pitch||440,this.gain=[],this.detune=e.detune||0,this.offset=e.offset||0,this.loop=e.loop||!1,this.tuna=e.tuna||null,this.rate=e.rate||1,this.sprite=e.sprite||null,Object(o.c)(this,e),Object(o.d)(this,e),Object(o.h)(this,e),Object(o.g)(this,e),Object(o.f)(this,e),this.constructExternalFx(e,o.i),Object(o.e)(this,e),Object(o.b)(this,e),this.duration=(this.env.attack+this.env.decay+this.env.hold+this.env.release)*(1/this.rate)*1e3,"noise"===this.source)this.decodedBuffer=o.p;else if("mic"===this.source)Object(o.l)(this,e);else if(this.source in{sine:0,sawtooth:0,square:0,triangle:0})e.callback&&e.callback(this);else if(Object(o.s)(this,e.callback),this.sprite){var t=this;for(var i in this.sprite)this[i]={sprite:this.sprite[i],play:function(e){return(e=e||{}).env=e.env||{},e.env.hold=this.sprite[1]-this.sprite[0],e.offset=this.sprite[0],t.play(e)}}}r.allWads.push(this)};r.allWads=[],r.micConsent=!1,r.audioContext=o.i,r.listener=new class{constructor(e){this._listener=e.listener,window.listener=this._listener,this.positionX=this._listener.positionX||new s(0,e=>this._listener.setPosition(e,this.positionY.value,this.positionZ.value)),this.positionY=this._listener.positionY||new s(0,e=>this._listener.setPosition(this.positionX.value,e,this.positionZ.value)),this.positionZ=this._listener.positionZ||new s(0,e=>this._listener.setPosition(this.positionX.value,this.positionY.value,e)),this.forwardX=this._listener.forwardX||new s(0,e=>this._listener.setOrientation(e,this.forwardY.value,this.forwardZ.value,this.upX.value,this.upY.value,this.upZ.value)),this.forwardY=this._listener.ForwardY||new s(0,e=>this._listener.setOrientation(this.forwardX.value,e,this.forwardZ.value,this.upX.value,this.upY.value,this.upZ.value)),this.forwardZ=this._listener.forwardZ||new s(-1,e=>this._listener.setOrientation(this.forwardX.value,this.forwardY.value,e,this.upX.value,this.upY.value,this.upZ.value)),this.upX=this._listener.upZ||new s(0,e=>this._listener.setOrientation(this.forwardX.value,this.forwardY.value,this.forwardZ.value,e,this.upY.value,this.upZ.value)),this.upY=this._listener.upY||new s(1,e=>this._listener.setOrientation(this.forwardX.value,this.forwardY.value,this.forwardZ.value,this.upX.value,e,this.upZ.value)),this.upZ=this._listener.upZ||new s(0,e=>this._listener.setOrientation(this.forwardX.value,this.forwardY.value,this.forwardZ.value,this.upX.value,this.upY.value,e))}setPosition(e,t,i){this.positionX.value=e,this.positionY.value=t,this.positionZ.value=i}getPosition(){return[this.positionX.value,this.positionY.value,this.positionZ.value]}setOrientation(e,t,i,a,n,s){this.forwardX.value=e,this.forwardY.value=t,this.forwardZ.value=i,this.upX.value=a,this.upY.value=n,this.upZ.value=s}getOrientation(){return[this.forwardX.value,this.forwardY.value,this.forwardZ.value,this.upX.value,this.upY.value,this.upZ.value]}}(o.i),null!=typeof n.a&&(r.tuna=new n.a(r.audioContext)),r.prototype.constructExternalFx=function(e,t){},r.prototype.setUpExternalFxOnPlay=function(e,t){},r.prototype.play=function(e){if(e=e||{arg:null},this.playable<1)this.playOnLoad=!0,this.playOnLoadArg=e;else if("mic"===this.source)r.micConsent?(null===e.arg||(Object(o.d)(this,e),Object(o.h)(this,e),Object(o.g)(this,e),Object(o.f)(this,e),this.constructExternalFx(e,o.i),Object(o.e)(this,e),Object(o.b)(this,e),Object(o.w)(this,e)),Object(o.r)(this,e)):(Object(o.n)("You have not given your browser permission to use your microphone."),Object(o.l)(this,e).then((function(t){t.play(e)})));else{this.nodes=[],e.wait||(e.wait=0),e.volume?this.volume=e.volume:this.volume=this.defaultVolume,e.offset=e.offset||this.offset||0,this.source in{sine:0,sawtooth:0,square:0,triangle:0}?Object(o.x)(this,e):(this.soundSource=o.i.createBufferSource(),this.soundSource.buffer=this.decodedBuffer,("noise"===this.source||this.loop||e.loop)&&(this.soundSource.loop=!0)),this.soundSource.detune&&(this.soundSource.detune.value=e.detune||this.detune),void 0===e.wait&&(e.wait=0),void 0===e.exactTime&&(e.exactTime=o.i.currentTime+e.wait),this.lastPlayedTime=e.exactTime-e.offset,this.nodes.push(this.soundSource),Object(o.u)(this,e),this.soundSource.playbackRate&&(this.soundSource.playbackRate.value=e.rate||this.rate,this.env.hold=this.env.hold*(1/this.soundSource.playbackRate.value)),Object(o.v)(this,e),Object(o.B)(this,e),this.setUpExternalFxOnPlay(e,o.i),this.gain.unshift(o.i.createGain()),this.gain[0].label=e.label,this.gain[0].soundSource=this.soundSource,this.nodes.push(this.gain[0]),this.gain.length>15&&(this.gain.length=15),this.reverb&&Object(o.z)(this,e),Object(o.y)(this,e),Object(o.t)(this,e),Object(o.r)(this,e),this.filter&&this.filter[0].env&&Object(o.k)(this,e),Object(o.q)(this,e),this.vibrato&&Object(o.C)(this,e),this.tremolo&&Object(o.A)(this,e);var t=this;if(this.soundSource.onended=function(e){t.playPromiseResolve(t)},!e.unpause)return this.playPromise=new Promise((function(e,i){t.playPromiseResolve=e})),this.playPromise}e.callback&&e.callback(this)},r.prototype.setVolume=function(e,t,i){if(t=t||.01,i){if(this.gain.length>0)for(let t=0;t<this.gain.length;t++)this.gain[t].label===i&&this.gain[t].gain.setValueAtTime(e,o.i.currentTime)}else this.defaultVolume=e,this.gain.length>0&&this.gain[0].gain.setValueAtTime(e,o.i.currentTime);return this},r.prototype.setRate=function(e){var t;return t=e&&e>0?e:0,this.soundSource?this.soundSource.playbackRate.value=t:Object(o.n)("Sorry, but the wad does not contain a soundSource!"),this},r.prototype.setPitch=function(e,t,i){if(t=t||.01,i)for(let a=0;a<this.gain.length;a++)this.gain[a].label===i&&(e in r.pitches?this.gain[a].soundSource.frequency.setTargetAtTime(r.pitches[e],o.i.currentTime,t):this.soundSource.frequency.settargetAtTime(e,o.i.currentTime,t));else e in r.pitches?(this.soundSource&&(this.soundSource.frequency.value=r.pitches[e]),this.pitch=r.pitches[e]):(this.soundSource&&(this.soundSource.frequency.value=e),this.pitch=e);return this},r.prototype.setDetune=function(e,t,i){if(t=t||.01,i)for(let a=0;a<this.gain.length;a++)this.gain[a].label===i&&this.gain[a].soundSource.detune.setTargetAtTime(e,o.i.currentTime,t);else this.soundSource.detune.setTargetAtTime(e,o.i.currentTime,t);return this},r.prototype.setPanning=function(e,t,i){return t=t||.01,"number"!=typeof e||o.i.createStereoPanner||(e=[e,0,0]),this.panning.location=e,Object(o.m)(e)&&"3d"===this.panning.type&&this.panning.node?this.panning.node.setPosition(e[0],e[1],e[2]):"number"==typeof e&&"stereo"===this.panning.type&&this.panning.node&&this.panning.node.pan.setTargetAtTime(e,o.i.currentTime,t),Object(o.m)(e)?this.panning.type="3d":"number"==typeof e&&(this.panning.type="stereo"),this},r.prototype.setReverb=function(e){var t;return t=e&&e>0&&e<1?e:e>=1?1:0,this.reverb?(this.reverb.wet=t,this.reverb.node&&(this.reverb.node.wet.gain.value=t)):Object(o.n)("Sorry, but the wad does not contain Reverb!"),this},r.prototype.setDelay=function(e,t,i){var a,n,s;return a=e&&e>0?e:0,n=t&&t>0&&t<1?t:t>=1?1:0,s=i&&i>0&&i<1?i:i>=1?1:0,this.delay?(this.delay.delayTime=a,this.delay.wet=n,this.delay.feedback=s,this.delay.delayNode&&(this.delay.delayNode.delayNode.delayTime.value=a,this.delay.delayNode.wetNode.gain.value=n,this.delay.delayNode.feedbackNode.gain.value=s)):Object(o.n)("Sorry, but the wad does not contain delay!",2),this},r.prototype.pause=function(e){this.pauseTime=o.i.currentTime,this.soundSource.onended=null,this.stop(e)},r.prototype.unpause=function(e){(e=e||{}).unpause=!0,this.pauseTime&&null!=this.lastPlayedTime?e.offset=this.pauseTime-this.lastPlayedTime:Object(o.n)("You tried to unpause a wad that was not played and paused, so it just played normally instead.",2),this.play(e)},r.prototype.stop=function(e){if("mic"!==this.source){if(!this.gain||!this.gain.length)return Object(o.n)("You tried to stop a Wad that never played. ",2),void Object(o.n)(this,2);if(e)for(var t=0;t<this.gain.length;t++)this.gain[t].label===e&&(this.gain[t].gain.cancelScheduledValues(o.i.currentTime),this.gain[t].gain.setValueAtTime(this.gain[t].gain.value,o.i.currentTime),this.gain[t].gain.linearRampToValueAtTime(1e-4,o.i.currentTime+this.env.release));else if(!e){this.gain[0].gain.cancelScheduledValues(o.i.currentTime),this.gain[0].gain.setValueAtTime(this.gain[0].gain.value,o.i.currentTime),this.gain[0].gain.linearRampToValueAtTime(1e-4,o.i.currentTime+this.env.release);try{this.soundSource.stop(o.i.currentTime+this.env.release)}catch(e){Object(o.n)(e,2);var i=this;setTimeout((function(){i.soundSource.dispatchEvent(new Event("ended")),i.soundSource.onended=null}),1e3*this.env.release)}}}else r.micConsent?this.mediaStreamSource.disconnect(0):Object(o.n)("You have not given your browser permission to use your microphone.");this.tremolo&&this.tremolo.wad.stop()},r.stopAll=function(e){for(var t=0;t<r.allWads.length;t++)r.allWads[t].stop(e)},r.setVolume=function(e){for(var t=0;t<r.allWads.length;t++)r.allWads[t].setVolume(e)};t.a=r},function(e,t,i){"use strict";i.r(t),function(e){var a=i(5),n=i(4),s=i(6),o=i(0),r=i(1),u=i(3);let l=i(7).a;l.Poly=n.a,l.SoundIterator=function(e){return new a.a(e,l)},l.pitches=r.a,l.pitchesArray=r.b,l.midiMap=u.d,l.assignMidiMap=u.a,l.midiInstrument=u.c,l.midiInputs=u.b,l.presets=s.a,l.logs=o.o,e.exports&&(e.exports=l),t.default=l}.call(this,i(9)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}}]).default}));

/***/ }),

/***/ "./test/src/index.js":
/*!***************************!*\
  !*** ./test/src/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../build/wad.min.js */ "./build/wad.min.js");
/* harmony import */ var _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_build_wad_min_js__WEBPACK_IMPORTED_MODULE_0__);


_build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.logs.verbosity = 1;
var ignition = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source:'./ignition.mp3'});
document.getElementById('ignition').addEventListener('click', async function(){
	// await ignition.play()
	await ignition.play();
	console.log('ignition');
	await ignition.play();
	console.log('ignition');
	await ignition.play();
	console.log('ignition');

});
document.getElementById('ignition-faster').addEventListener('click', async function(){
	await ignition.play({ rate: 2.0, });
	console.log('fast ignition');
	await ignition.play({ rate: 2.0, });
	console.log('fast ignition');
	await ignition.play({ rate: 2.0, });
	console.log('fast ignition');
});
document.getElementById('ignition-slower').addEventListener('click', async function(){
	await ignition.play({
		rate: 0.5,
	});
	console.log('slow ignition');
	await ignition.play({
		rate: 0.5,
	});
	console.log('slow ignition');
});
var helloMan = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({
	source: './hello-man.wav',
	sprite: {
		hello: [0, .4],
		man  : [.4,1]
	}
});
document.getElementById('sprite-a').addEventListener('click', async function(){
	await helloMan.hello.play({env:{release:.02}});
	await helloMan.hello.play({rate: 1.1, volume:1.2, env:{release:.02}});
});
document.getElementById('sprite-b').addEventListener('click', async function(){
	await helloMan.man.play({env:{attack: .1, release:.02}});
	await helloMan.man.play({env:{attack: .1, release:.02}});
});
document.getElementById('sprite-ab').addEventListener('click', async function(){
	await helloMan.play({env:{attack: .1, release:.02}});
	await helloMan.play({env:{attack: .1, release:.02}});
});

var longClip = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source:'./do-re-mi.wav'});
document.getElementById('full-song').addEventListener('click', function(){
	longClip.play().then(function(thatWad){
		console.log('Clip finished.');
	});
});
document.getElementById('pause-full-song').addEventListener('click', function(){
	longClip.pause();
});
document.getElementById('unpause-full-song').addEventListener('click', function(){
	longClip.unpause();
});
document.getElementById('stop-full-song').addEventListener('click', function(){
	longClip.stop();
});

var sine = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source:'sine', env: {attack: .07, hold: 1.5, release: .6}});

document.getElementById('sine').addEventListener('click', async function(){
	await sine.play();
	await sine.play();
});
document.getElementById('sine-left').addEventListener('click', async function(){
	await sine.play({panning: -1, label: 'left'});
	await sine.play({panning: -1, label: 'left'});
});
document.getElementById('sine-right').addEventListener('click', async function(){
	await sine.play({panning: 1, label: 'right'});
	await sine.play({panning: 1, label: 'right'});
});

document.getElementById('detune').addEventListener('click', function(){
	sine.setDetune(100);
});
document.getElementById('detune-left').addEventListener('click', function(){
	sine.setDetune(100, null, 'left');
});
document.getElementById('detune-right').addEventListener('click', function(){
	sine.setDetune(100, null, 'right');
});


document.getElementById('dampen').addEventListener('click', function(){
	sine.setVolume(.1);
});
document.getElementById('dampen-left').addEventListener('click', function(){
	sine.setVolume(.1, null, 'left');
});
document.getElementById('dampen-right').addEventListener('click', function(){
	sine.setVolume(.1, null, 'right');
});

document.getElementById('pan').addEventListener('click', function(){
	sine.setPanning(1);
});
document.getElementById('set-pitch').addEventListener('click', function(){
	sine.setPitch('B3');
});
document.getElementById('stop').addEventListener('click', function(){
	sine.stop();
});


var sawtooth = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source:'sawtooth', env:{hold:1, release:.2}});
var triangle = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source:'triangle', env:{hold:1, release:.2}});

var volumeDisplay = document.getElementById('polywad-volume');
var clippingDisplay = document.getElementById('polywad-clipping');
let displayAudioMeter = function(thatWad){
	polywad.add(sawtooth).add(triangle);
	setInterval(function(){
		volumeDisplay.innerText = Math.round(thatWad.audioMeter.volume * 1000);
		clippingDisplay.innerText = thatWad.audioMeter.checkClipping();
	}, 50);
}
window.polywad = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.Poly({
	reverb  : {
		wet     : 1,                                            
		impulse : '/widehall.wav' 
	},
	audioMeter: {
		clipLevel: .98,
		averaging: .95,
		clipLag: 750,
	},
	callback: displayAudioMeter
});


document.getElementById('polywad').addEventListener('click', function(){
	polywad.play();
});
document.getElementById('polywad-set-pitch').addEventListener('click', function(){
	polywad.setPitch('B3');
});

document.getElementById('stop').addEventListener('click', function(){
	sine.stop();
});
document.getElementById('polywad-stop').addEventListener('click', function(){
	polywad.stop();
});

var voice;
var tuner;
var rafId;
var logPitch = function(){
	console.log(tuner.pitch, tuner.noteName);
	rafId = requestAnimationFrame(logPitch);
};
document.getElementById('mic-consent').addEventListener('click', function(){
	voice = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({
		source  : 'mic',
		// reverb  : {
		//     wet : .4
		// },
		// filter  : {
		//     type      : 'highpass',
		//     frequency : 700
		// },
		// panning : -.2
	});

	tuner = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.Poly();
	// tuner.setVolume(0) // mute the tuner to avoid feedback
	tuner.add(voice);


});

document.getElementById('mic-play').addEventListener('click', function(){
	console.log('Play mic');
	voice.play();
});
document.getElementById('mic-stop').addEventListener('click', function(){
	console.log('Play mic');
	voice.stop();
});
document.getElementById('detect-pitch').addEventListener('click', function(){
	tuner.updatePitch();
	logPitch();
});
document.getElementById('stop-detect-pitch').addEventListener('click', function(){
	tuner.stopUpdatingPitch();
	cancelAnimationFrame(rafId);
});


var tunaConfig = {
	source: 'sawtooth',
	env: {
		attack: .1,
		hold: 2,
		release: .4
	},
	filter: {
		type: 'lowpass',
		frequency: 700
	}
};
var withoutTuna = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a(tunaConfig);

tunaConfig.tuna = {
	Chorus : {
		intensity: 0.3,  //0 to 1
		rate: 4,         //0.001 to 8
		stereoPhase: 0, //0 to 180
		bypass: 0
	}
}; 

var withTuna = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a(tunaConfig);

tunaConfig.tuna = {
	Phaser: {
		rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
		depth: 0.3,                    //0 to 1
		feedback: 0.2,                 //0 to 1+
		stereoPhase: 30,               //0 to 180
		baseModulationFrequency: 700,  //500 to 1500
		bypass: 0
	}
};
var tunaPhaser = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a(tunaConfig);

document.getElementById('no-tuna').addEventListener('click', function(){
	withoutTuna.play();
});
document.getElementById('tuna-chorus').addEventListener('click', function(){
	withTuna.play();
});
document.getElementById('tuna-phaser').addEventListener('click', function(){
	tunaPhaser.play();
});

//SoundIterator

var iterator = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.SoundIterator({files: [
	new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source: 'sawtooth', volume: 0.5, env:{hold:1}}),
	new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source: 'square', volume: 0.5, env:{hold:1}}),
	new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source: 'sine', volume: 0.5, env:{hold:1}}),
]});

document.getElementById('play-next-nonrandom-sound').addEventListener('click', function(){
	iterator.random = false;
	iterator.play();
});

document.getElementById('play-next-random-sound').addEventListener('click', function(){
	iterator.random = true;
	iterator.randomPlaysBeforeRepeat = 0;
	iterator.play();
});

document.getElementById('play-next-sound-with-1-randomPlaysBeforeRepeat').addEventListener('click', function(){
	iterator.random = true;
	iterator.randomPlaysBeforeRepeat = 1;
	iterator.play();
});

var newSound = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({source:'triangle', volume: 0.5, env:{hold:1}});

document.getElementById('add-sound').addEventListener('click', function(){
	iterator.add(newSound);
});

document.getElementById('remove-sound').addEventListener('click', function(){
	iterator.remove(newSound);
});

// AudioListener

var listenerReferenceSound = new _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a({
	source: './ignition.mp3',
	panning: [0,0,0]
});
var listener = _build_wad_min_js__WEBPACK_IMPORTED_MODULE_0___default.a.listener;

document.getElementById('listener-move-left').addEventListener('click', function(){
	listener.setPosition(listener.positionX.value-1, listener.positionY.value, listener.positionZ.value);
	listenerReferenceSound.play();
});

document.getElementById('listener-move-right').addEventListener('click', function(){
	listener.positionX.value += 1;
	listenerReferenceSound.play();
});

document.getElementById('listener-position').addEventListener('click', function(){
	alert('The listener is at: ' + JSON.stringify(listener.getPosition()));
});

document.getElementById('listener-face-left').addEventListener('click', function(){
	listener.setOrientation(-1, 0, 0, listener.upX.value, listener.upY.value, listener.upZ.value);
	listenerReferenceSound.play();
});

document.getElementById('listener-face-forward').addEventListener('click', function(){
	listener.setOrientation(0, 0, -1, listener.upX.value, listener.upY.value, listener.upZ.value);
	listenerReferenceSound.play();
});

document.getElementById('listener-face-right').addEventListener('click', function(){
	listener.forwardX.value = 1;
	listener.forwardY.value = 0;
	listener.forwardZ.value = 0;
	listenerReferenceSound.play();
});

document.getElementById('listener-orientation').addEventListener('click', function(){
	alert('The listener is at: ' + JSON.stringify(listener.getOrientation()));
});


/***/ })

/******/ });
//# sourceMappingURL=test.js.map