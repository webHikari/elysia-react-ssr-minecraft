const blocks = ['terms', 'penalty', 'base', 'rules'];
const navButtons = document.querySelectorAll('.nav-button');

function trackScroll() {
const scrollPosition = window.scrollY;

  for (let i = 0; i < blocks.length; i++) {
    const block = document.getElementById(blocks[i]);
    const blockPosition = block.offsetTop;
    if (scrollPosition+200 >= blockPosition) {
      for (let j = 0; j < blocks.length; j++) {
        navButtons[j].classList.remove('button-active');
        navButtons[j].classList.remove('button-past');
      }
      navButtons[i].classList.add('button-active');
      for (let k = 0; k < i; k++) {
        navButtons[k].classList.add('button-past');
      }
    }
  }
}

function scrollToBlock(index) {
  const block = document.getElementById(blocks[index]);
  const blockPosition = block.offsetTop;

  window.scrollTo({
    top: blockPosition,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', trackScroll);

for (let i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', function(event) {
    const index = Array.prototype.indexOf.call(navButtons, event.target);
    scrollToBlock(index);
  });
}
