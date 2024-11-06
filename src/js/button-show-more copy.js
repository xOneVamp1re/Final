const buttonShowMore = document.getElementById('#button-show-more--brands')
const brandsSlides = Array.from(
  document.querySelectorAll('.brands-slider__elem')
)

window.addEventListener('resize', (event) => {
  if (
    event.target.window.innerWidth > 300 &&
    event.target.window.innerWidth < 767
  )
    resizeWindowMobile()
  if (
    event.target.window.innerWidth > 767 &&
    event.target.window.innerWidth < 1119
  )
    resizeWindowTablet()
  if (event.target.window.innerWidth > 1119) resizeWindowDesc()
})

function resizeWindowTablet() {
  if (window.innerWidth > 767 && window.innerWidth < 1119) {
    buttonShowMore.classList.remove('button-show-more--hidden')
    brandsSlides.forEach((item, index) => {
      item.classList.remove('brands-slider__elem--close')
      item.classList.add('brands-slider__elem--hidden')
      if (index <= 5) {
        item.classList.remove('brands-slider__elem--hidden')
      }
    })
  }
}
resizeWindowTablet()

function resizeWindowDesc() {
  if (window.innerWidth > 1119) {
    buttonShowMore.classList.remove('button-show-more--hidden')
    brandsSlides.forEach((item, index) => {
      item.classList.remove('brands-slider__elem--close')
      item.classList.add('brands-slider__elem--hidden')
      if (index <= 7) {
        item.classList.remove('brands-slider__elem--hidden')
      }
    })
  }
}
resizeWindowDesc()

function openBrandsList() {
  if (buttonShowMore.classList.contains('button-show-more--active')) {
    brandsSlides.forEach((item, index) => {
      if (index > 5) {
        item.classList.remove('brands-slider__elem--open'),
          item.classList.add('brands-slider__elem--close')
      }
    })
    buttonShowMore.querySelector('span').textContent = 'Показать все'
  } else {
    brandsSlides.forEach((item, index) => {
      if (index > 5) {
        item.classList.add('brands-slider__elem--open'),
          item.classList.remove('brands-slider__elem--hidden')
        item.classList.remove('brands-slider__elem--close')
      }
    })
    buttonShowMore.querySelector('span').textContent = 'Скрыть'
  }
  buttonShowMore.classList.toggle('button-show-more--active')
}

function openBrandsListDesc() {
  if (buttonShowMore.classList.contains('button-show-more--active')) {
    brandsSlides.forEach((item, index) => {
      item.classList.remove('brands-slider__elem--close')
      if (index > 7) {
        item.classList.remove('brands-slider__elem--open'),
          item.classList.add('brands-slider__elem--close')
      }
    })
    buttonShowMore.querySelector('span').textContent = 'Показать все'
  } else {
    brandsSlides.forEach((item, index) => {
      if (index > 7) {
        item.classList.add('brands-slider__elem--open'),
          item.classList.remove('brands-slider__elem--hidden')
        item.classList.remove('brands-slider__elem--close')
      }
    })
    buttonShowMore.querySelector('span').textContent = 'Скрыть'
  }
  buttonShowMore.classList.toggle('button-show-more--active')
}

function resizeWindowMobile() {
  if (window.innerWidth < 767) {
    buttonShowMore.classList.add('button-show-more--hidden')
    brandsSlides.forEach((item, index) => {
      item.classList.add('brands-slider__elem--hidden')
      if (index <= 8) {
        item.classList.remove('brands-slider__elem--hidden')
      }
    })
  }
}
resizeWindowMobile()

buttonShowMore.addEventListener('click', (event) => {
  if (window.innerWidth > 1119) {
    openBrandsListDesc()
  } else {
    openBrandsList()
  }
})
