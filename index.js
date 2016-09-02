const RNVoiceFilter = require('react-native').NativeModules.RNVoiceFilter;

function VoiceFilter() {
  RNVoiceFilter.init();
}

VoiceFilter.prototype.listen = function () {
  RNVoiceFilter.listen();
  return this;
};

VoiceFilter.prototype.setVolume = function (volume) {
  RNVoiceFilter.setVolume(volume);
  return this;
};

VoiceFilter.prototype.stop = function () {
  RNVoiceFilter.stop();
  return this;
};


module.exports = VoiceFilter;
