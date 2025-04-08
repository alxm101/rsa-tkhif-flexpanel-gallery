const panels = document.querySelectorAll('.panel');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function toggleOpen() {
  panels.forEach(panel => {
    panel.classList.remove('open', 'open-active');
    panel.style.backgroundColor = ''; // reset color
  });

  this.classList.add('open');
  this.style.backgroundColor = getRandomColor();
}

function toggleActive(e) {
  if (e.propertyName.includes('transform') && this.classList.contains('open')) {
    this.classList.add('open-active');
  }
}

panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});
