require('./sass/main.scss');

var React = require('react');
// temp
var $ = require('jquery');
var ReactDOM = require('react-dom');
var App = require('./components/App');

main();

function main() {
	var app = document.getElementById('app');
	ReactDOM.render(<App />, app);
}



/// AUDIO ///////////////////////////////////////

// var context = new AudioContext();
// var request = new XMLHttpRequest();
//
// request.open('GET', './audio/powerup.wav', true);
// request.responseType = 'arraybuffer';
//
// request.onload = function() {
//   context.decodeAudioData(request.response, function(decodeAudioBuffer) {
//     audioBuffer = decodeAudioBuffer;
//   });
// };
//
// request.send();
//
// var powerUp = function() {
//   var source = context.createBufferSource();
//
//   source.buffer = audioBuffer;
//   source.connect(context.destination);
//   source.start(context.currentTime);
// };
//
// var crtSound = function () {
//   var osc1 = context.createOscillator();
//       osc2 = context.createOscillator();
//       osc3 = context.createOscillator();
//       volumeHi = context.createGain();
//       volumeLo = context.createGain();
//       volumeMi = context.createGain();
//
//   // FIRST OSCILLATOR
//
//   // osc1.frequency.value = 100;
//   // osc1.type = 'square';
//
//   osc1.connect(volumeMi);
//   osc1.start(context.currentTime);
//
//   // SECOND OSCILLATOR
//
//   osc2.frequency.value = 60;
//   osc2.type = 'square';
//
//   osc2.connect(volumeLo);
//   osc2.start(context.currentTime);
//
//   // THIRD OSCILLATOR
//
//   osc3.frequency.value = 50;
//   osc3.type = 'square';
//
//   osc3.connect(volumeLo);
//   osc3.start(context.currentTime);
//
//   // SPEAKERS
//
//
//   volumeLo.gain.value = 0.0005;
//   volumeLo.connect(context.destination);
//   volumeMi.gain.value = 0.001;
//   volumeMi.connect(context.destination);
// };
//
// var initNote = function () {
//   var osc = context.createOscillator(),
//     volume = context.createGain();
//
//   volume.gain.value = 0.25;
//
//   osc.frequency.value = 840;
//   osc.type = 'square';
//
//   osc.connect(volume);
//   volume.connect(context.destination);
//   osc.start(context.currentTime);
//   osc.stop(context.currentTime + 0.15);
// };

// OLD /////////////////////////////////////////////

// $(document).ready(function () {
//   $('#preload').show();
//   $('#frame').hide();
//   $('#loading').hide();
//   $('#cursor-blank').hide();
//   $('#error').hide();
//   $('#serverReady').hide();
//
//
//   $(document).on({
//     'keypress': function (e) {
//       if (e.which === 13) {
//         initMachine();
//         $(this).off(e);
//       }
//     }
//   });
//
//   $(document).on({
//     'touchstart': function (e) {
//       initMachine();
//       $(this).off(e);
//     }
//   });
//
//   $("#switch").on('click', function () {
//     $(this).toggleClass("switch-on", "remove");
//     $(this).toggleClass("switch-off", "add");
//     $("#screen").toggleClass("on", "remove");
//     $("#screen").toggleClass("off", "add");
//   });
// });
//
// function initMachine() {
//   powerUp();
//   $("#preload").hide();
//   $("#frame").css("visibility", "visible").show();
//
//   console.log("H3ll0 Y0u C0d3 V0y3ur!! I'll open source this site when it ressembles something :P Don't forget to say hi on twitter -> @_juanmnl");
//
//   var loading = function () {
//     setTimeout(function () {
//       initNote();
//       console.log('Loaded');
//     }, 730);
//
//     $("#loading").show().append().typed({
//       strings: ['<small><span class="warning">Warning: ** This site is a prototype and under heavy development **</span></small>', '<small>Work: <span class="ok">Local/remote</span><br>Job: <span class="ok">Open - Full-time</span><br>Languages: <span class="ok">HTML5 - CSS <i>(Sass-Post-Myth)</i> - Js <i>(jQuery- Node-React-Ember-Meteor)</i></span><br>Platforms: <span class="ok">Web/Mobile</span></small><br>'],
//       showCursor: false,
//       contentType: 'html'
//     });
//   };
//   var loadingOff = function () {
//     $("#loading").hide();
//   };
//
//   var errorShow = function () {
//     $("#error").show();
//   };
//   var errorHide = function () {
//     $("#error").hide();
//   };
//
//   var thinking = function () {
//     $(".thinking").hide();
//   };
//
//   var serverReady = function () {
//     $("#serverReady").show();
//   };
//   var serverReadyHide = function () {
//     $("#serverReady").hide();
//   };
//
//   var welcomeText = function () {
//     $("#frame #screen .text span").typed({
//       strings: [
//         'Hello there! :)',
//         'How are you?',
//         'My name is Juan Manuel Cornejo and i\'m a frontend designer/engineer.<br>I currently work from Quito, Ecuador. <small>(0.2333° S, 78.5167° W – UTC/GMT -5)</small><br><br> I love building things for the web. My areas of interest are:<br><br>- RESEARCH and DEVELOPMENT<br>- UI ENGINEERING <i><small>(User interface)</small></i><br>- UX DESIGN <i><small>(User experience)</small></i><br>- PRODUCT DESIGN <br>- PROTOTYPE DEVELOPMENT<br>- WEB/MOBILE CONSULTING<br><br>  <small>This is a WIP (work-in-progress) of an UI research i\'m working on.</small><br><br>If you want to get in touch, please contact me on twitter<br>or throw me an email juanmnl@me.com<br><br>Thank you for stopping by!<br><br>:P<br><br>  – Juanmnl<br><br><small>** Please continue with the buttons on the right <i>(external links for now)</i> **</small>'
//       ],
//       contentType: 'html',
//       loop: false,
//       startDelay: 1200
//     });
//   };
//
//   setTimeout(loading, 1400);
//   setTimeout(loadingOff, 19000);
//   setTimeout(errorShow, 1800);
//   setTimeout(errorHide, 2500);
//   setTimeout(thinking, 19700);
//   setTimeout(serverReady, 19300);
//   setTimeout(serverReadyHide, 19700);
//   setTimeout(welcomeText, 20000);
// }
