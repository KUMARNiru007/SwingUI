const previewBtn = document.getElementById('previewBtn');
const codeBtn = document.getElementById('codeBtn');
const previewSection = document.getElementById('previewSection');
const codeSection = document.getElementById('codeSection');
const copyBtn = document.getElementById('copyBtn');

previewBtn.addEventListener('click', () => {
  previewSection.classList.remove('hidden');
  codeSection.classList.add('hidden');
});

codeBtn.addEventListener('click', () => {
  previewSection.classList.add('hidden');
  codeSection.classList.remove('hidden');
});

copyBtn.addEventListener('click', () => {
  const codeText = document.querySelector('pre').innerText;
  navigator.clipboard.writeText(codeText).then(() => {
    alert('Code copied!');
  });
});
