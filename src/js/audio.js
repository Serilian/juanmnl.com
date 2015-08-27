var context = new AudioContext();
var request = new XMLHttpRequest();

request.open('GET', './audio/powerup.wav', true);
request.responseType = 'arraybuffer';

request.onload = function() {
  context.decodeAudioData(request.response, function(decodeAudioBuffer) {
    audioBuffer = decodeAudioBuffer;
  });
};

request.send();

var powerUp = function() {
  var source = context.createBufferSource();

  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start(context.currentTime);
};

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

var initNote = function () {
  var osc = context.createOscillator(),
    volume = context.createGain();

  volume.gain.value = 0.25;

  osc.frequency.value = 840;
  osc.type = 'square';

  osc.connect(volume);
  volume.connect(context.destination);
  osc.start(context.currentTime);
  osc.stop(context.currentTime + 0.15);
};
