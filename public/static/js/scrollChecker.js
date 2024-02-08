var blocks = ['terms', 'penalty', 'base', 'rules'];
var navButtons = document.querySelectorAll('.nav-button');

function trackScroll() {
  var scrollPosition = window.scrollY;

  for (var i = 0; i < blocks.length; i++) {
    var block = document.getElementById(blocks[i]);
    var blockPosition = block.offsetTop;

    if (scrollPosition+200 >= blockPosition) {
      for (var j = 0; j < blocks.length; j++) {
        navButtons[j].classList.remove('button-active');
        navButtons[j].classList.remove('button-past');
      }

      navButtons[i].classList.add('button-active');
      for (var k = 0; k < i; k++) {
        navButtons[k].classList.add('button-past');
      }
    }
  }
}

function scrollToBlock(index) {
  var block = document.getElementById(blocks[index]);
  var blockPosition = block.offsetTop;

  window.scrollTo({
    top: blockPosition,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', trackScroll);

for (var i = 0; i < navButtons.length; i++) {
  navButtons[i].addEventListener('click', function(event) {
    var index = Array.prototype.indexOf.call(navButtons, event.target);
    scrollToBlock(index);
  });
}
