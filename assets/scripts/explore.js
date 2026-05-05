// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore > button');
  const faceImage = document.querySelector('#explore > img');
  const synth = window.speechSynthesis;

  function loadVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      if (voice.default) option.textContent += ' — DEFAULT';
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
  }

  talkButton.addEventListener('click', () => {
    const text = textArea.value;
    if (!text || voiceSelect.value === 'select') return;

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = synth.getVoices();
    const selected = voices.find((v) => v.name === voiceSelect.value);
    if (selected) utterance.voice = selected;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utterance.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}
