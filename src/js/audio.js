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
