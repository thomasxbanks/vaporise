let vaporise = document.querySelector('.vaporise .hero_title')
let browser = {
  width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
  height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
}

window.onscroll = () => {
  let scroll = window.pageYOffset;
  let opacity = ((1 - (scroll / 1000)) > 0) ? (1 - (scroll / 1000)) : 0
  let scale = ((1 + (scroll / 1000)) > 1) ? (1 + (scroll / 1000)) : 1
  let blur = ((1 + (scroll / 10)) > 1) ? (1 + (scroll / 100)) : 0
  if (scroll < browser.height) {
    vaporise.style.opacity = opacity
    vaporise.style.transform = `scale(${scale})`
    vaporise.style.filter = `blur(${blur}px)`
  }
}
