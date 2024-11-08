document.addEventListener('DOMContentLoaded', function () {
  const showMoreButtons = document.querySelectorAll('.button-show-more')
  showMoreButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault()

      const buttonId = item.getAttribute('data-show-more')
      console.log('id: ' + buttonId)

      if (buttonId === 'about-us') {
        let elem = document.querySelector(
          '.text-wrapper[data-show-more="' + buttonId + '"]'
        )
        if (window.innerWidth > 1119) return
        if (item.classList.contains('button-show-more--active')) {
          elem.classList.remove('text-wrapper--active')
          item.classList.remove('button-show-more--active')
          item.querySelector('span').textContent = 'Читать далее'
        } else {
          elem.classList.add('text-wrapper--active')
          item.classList.add('button-show-more--active')
          item.querySelector('span').textContent = 'Скрыть'
        }
      } else {
        let elem = document.querySelector(
          '.swiper-wrapper[data-show-more="' + buttonId + '"]'
        )
        if (item.classList.contains('button-show-more--active')) {
          elem.classList.remove('services-slider-wrapper--active')
          item.classList.remove('button-show-more--active')
          item.querySelector('span').textContent = 'Читать далее'
        } else {
          elem.classList.add('services-slider-wrapper--active')
          item.classList.add('button-show-more--active')
          item.querySelector('span').textContent = 'Скрыть'
        }
      }
    })
  })
})
