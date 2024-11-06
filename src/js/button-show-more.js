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

//   modalСloseButtons.forEach((item) => {
//     item.addEventListener('click', function (event) {
//       closeModalWindow()
//     })
//   })

//   function closeModalWindow() {
//     const timeAnimation = 280
//     const timeClose = 260

//     modalElem.animate([{ opacity: '1' }, { opacity: '0' }], {
//       duration: timeAnimation,
//       easing: 'ease-in-out'
//     })
//     modalButtonClose.animate([{ translate: '0' }, { translate: '1000%' }], {
//       duration: timeAnimation,
//       easing: 'ease-in-out'
//     })
//     modalElemInner.animate([{ translate: '0' }, { translate: '100%' }], {
//       duration: timeAnimation,
//       easing: 'ease-in-out'
//     })
//     setTimeout(() => {
//       modalElem.close(),
//         document.body.classList.remove('modal-close-scroll'),
//         modalButtonClose.classList.remove('modal-close--active')
//     }, timeClose)
//   }
//   // })
// })
