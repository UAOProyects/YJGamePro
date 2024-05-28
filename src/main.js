const myCarouselElement = document.querySelector('#carouselExampleAutoplaying')
const cardOpacity = document.getElementsByClassName('card')


const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 1500,
  touch: false
})

cardOpacity.addEvenListener(click, e =>{ cardOpacity.style.opacity="1";})