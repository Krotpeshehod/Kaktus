const headerButton = document.querySelector('.header__button');
const media = document.querySelector('#media');
const topScroll = media.offsetTop;

const footerButton = document.querySelector('.footer__button')
const header = document.querySelector('#header');
const bottScroll = header.offsetTop;

function scrollDown(){
  window.scroll({
      left: 0,
      top: topScroll,
      behavior: 'smooth',
  })
}

headerButton.addEventListener('click', ()=> {
  scrollDown();
});


function scrollVisibile() {
  if (window.pageYOffset > 50) {
    footerButton.style.opacity = '1'
    footerButton.classList.add('footer__button_visible')
  } else { footerButton.style.opacity = '0'
    footerButton.classList.remove('footer__button_visible')}
}

window.onscroll = scrollVisibile;

function scrollTop() {
  window.scroll({
    left: 0,
    top: bottScroll,
    behavior: 'smooth',  
})
}


footerButton.addEventListener('click', ()=> {
  scrollTop();
});
