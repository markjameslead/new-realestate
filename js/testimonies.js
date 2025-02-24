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

function submitReview() {
  var reviewText = document.getElementById('reviewText').value
  if (reviewText.trim() === '') {
    alert('Please enter a review before submitting.')
    return
  }
  var reviewsDiv = document.getElementById('reviews')
  var newReview = document.createElement('div')
  newReview.classList.add('review')
  newReview.innerHTML = `<p><strong>Anonymous</strong></p><p>"${reviewText}"</p>`
  reviewsDiv.insertBefore(newReview, reviewsDiv.firstChild)
  document.getElementById('reviewText').value = ''
}

function showPhone(params) {
  alert('+1 808 205 7166')
}
