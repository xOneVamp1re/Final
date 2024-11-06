/* eslint-disable no-unused-vars */
const buttonOpen = document.querySelector('.header__button--burger')
const buttonClose = document.querySelector('.action-button--cross')
const mobileMenu = document.querySelector('.mobile-nav__inner')
const mobileMenuOverlay = document.querySelector('.mobile-nav__overlay')

function openMobileMenu() {
  buttonOpen.addEventListener('click', function (_event) {
    mobileMenu.classList.add('mobile-nav__inner--open')
    mobileMenuOverlay.classList.add('mobile-nav__overlay--open')
    document.body.style.overflowY = 'hidden'
  })
}
openMobileMenu()

function closeMobileMenu() {
  mobileMenu.classList.remove('mobile-nav__inner--open')
  mobileMenuOverlay.classList.remove('mobile-nav__overlay--open')
  document.body.style.overflowY = 'auto'
}

buttonClose.addEventListener('click', function (_event) {
  closeMobileMenu()
})

mobileMenuOverlay.addEventListener('click', function (_event) {
  closeMobileMenu()
})
