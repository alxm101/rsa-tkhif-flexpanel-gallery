const panels = document.querySelectorAll('.panel');

// Remove 'open' and 'open-active' from all panels
function toggleOpen() {
  panels.forEach(panel => panel.classList.remove('open', 'open-active'));
  this.classList.add('open');
}

// After flex transition ends, slide in the text
function toggleActive(e) {
  if (e.propertyName.includes('flex') && this.classList.contains('open')) {
    this.classList.add('open-active');
  }
}

// Add event listeners
panels.forEach(panel => {
  panel.addEventListener('click', toggleOpen);
  panel.addEventListener('transitionend', toggleActive);
});
