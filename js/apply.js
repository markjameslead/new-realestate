applicationForm.addEventListener('submit', function (event) {
  alert('Application submitted!')
  applicationForm.reset()
})

function contactUs() {
  window.open('contactus.html')
}

const hamMenu = document.querySelector('.ham-menu')
hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active')
})

ishowing = false

function displayNav() {
  if (ishowing === false) {
    var bar = document.getElementsByClassName('navbar')[0]
    bar.style.display = 'flex'

    ishowing = true
  } else {
    var bar = document.getElementsByClassName('navbar')[0]
    bar.style.display = 'none'

    ishowing = false
  }
}

function showPhone(params) {
  alert('+1 808 205 7166')
}
