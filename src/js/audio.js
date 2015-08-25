var context = new AudioContext();
var request = new XMLHttpRequest();

request.open('GET', './audio/tape.mp3', true);
request.responseType = 'arraybuffer';

request.onload = function() {
  context.decodeAudioData(request.response, function(decodeAudioBuffer) {
    audioBuffer = decodeAudioBuffer;
  });
};

request.send();

var playTape = function() {
  var source = context.createBufferSource();

  source.buffer = audioBuffer;
  source.connect(context.destination);
  source.start(context.currentTime);
};

var crtSound = function () {
  var osc1 = context.createOscillator();
      osc2 = context.createOscillator();
      osc3 = context.createOscillator();
      volumeLow = context.createGain();
      volumeMid = context.createGain();

  // FIRST OSCILLATOR

  osc1.frequency.value = 100;
  osc1.type = 'square';

  osc1.connect(volumeLow);
  osc1.start(context.currentTime);

  // SECOND OSCILLATOR

  osc2.frequency.value = 80;
  osc2.type = 'square';

  osc2.connect(volumeLow);
  osc2.start(context.currentTime);

  // SPEAKERS

  volumeLow.gain.value = 0.005;
  volumeLow.connect(context.destination);
  volumeMid.gain.value = 0.015;
  volumeMid.connect(context.destination);
};

var initNote = function () {
  var osc = context.createOscillator(),
    volume = context.createGain();

  volume.gain.value = 0.25;

  osc.frequency.value = 880;
  osc.type = 'square';

  osc.connect(volume);
  volume.connect(context.destination);
  osc.start(context.currentTime);
  osc.stop(context.currentTime + 0.15);
};
