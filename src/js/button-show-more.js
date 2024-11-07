document.addEventListener('DOMContentLoaded', function () {
  const showMoreButtons = document.querySelectorAll('.button-show-more')
  window.addEventListener('resize', (event) => {})
  showMoreButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault()

      const buttonId = item.getAttribute('data-show-more')
      console.log(buttonId)
      const Elem = document.querySelector(
        '.swiper-wrapper[data-show-more="' + buttonId + '"]'
      )
      if (item.classList.contains('button-show-more--active')) {
        Elem.classList.remove('services-slider-wrapper--active')
        item.classList.remove('button-show-more--active')
        item.querySelector('span').textContent = 'Показать все'
      } else {
        Elem.classList.add('services-slider-wrapper--active')
        item.classList.add('button-show-more--active')
        item.querySelector('span').textContent = 'Скрыть'
      }
    })
  })
})
