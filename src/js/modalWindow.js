document.addEventListener('DOMContentLoaded', function () {
  let modalOpenButtons = document.querySelectorAll('.button-open-modal')
  let modalСloseButtons = document.querySelectorAll('.action-button--cross')

  modalOpenButtons.forEach(function (item) {
    item.addEventListener('click', function (event) {
      event.preventDefault()
      //нахожу нужное модальное окно сравнивая data-modal атрибуты его и кнопки
      const modalId = item.getAttribute('data-modal')
      const modalElem = document.querySelector(
        '.modal[data-modal="' + modalId + '"]'
      )
      const modalElemInner = modalElem.querySelector('.modal__inner')
      const modalButtonClose = modalElem.querySelector('.modal__button-close')
      document.body.classList.add('modal-close-scroll')
      modalElem.showModal()

      ///закрытие по клику вне модального окна(::backdrop)
      modalElem.addEventListener('click', (event) => {
        if (event.target === modalElem) closeModalWindow()
      })

      modalСloseButtons.forEach((item) => {
        item.addEventListener('click', function (event) {
          closeModalWindow()
        })
      })

      function closeModalWindow() {
        const timeAnimation = 280
        const timeClose = 260

        modalElem.animate([{ opacity: '1' }, { opacity: '0' }], {
          duration: timeAnimation,
          easing: 'ease-in-out'
        })
        modalButtonClose.animate([{ translate: '0' }, { translate: '1000%' }], {
          duration: timeAnimation,
          easing: 'ease-in-out'
        })
        modalElemInner.animate([{ translate: '0' }, { translate: '100%' }], {
          duration: timeAnimation,
          easing: 'ease-in-out'
        })
        setTimeout(() => {
          modalElem.close(),
            document.body.classList.remove('modal-close-scroll'),
            modalButtonClose.classList.remove('modal-close--active')
        }, timeClose)
      }
    })
  })
})
