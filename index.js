let slideIndex = 0
showSlides()

function showSlides() {
  let i
  let slides = document.getElementsByClassName('mySlides')
  let dots = document.getElementsByClassName('dot')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '')
  }
  slides[slideIndex - 1].style.display = 'block'
  dots[slideIndex - 1].className += ' active'
  setTimeout(showSlides, 2000) // Change image every 2 seconds
}
/*function searchListings() {
  let location = document.getElementById('location').value.toLowerCase()
  let price = document.getElementById('price').value.toLowerCase()
  let listings = document.querySelectorAll('.listing')
  console.log(price, listings)

  listings.forEach((listing) => {
    let text = listing.textContent.toLowerCase()
    if (text.includes(location) && text.includes(price)) {
      listing.style.display = 'block'
    } else {
      listing.style.display = 'none'
    }
  })
}*/

function redirectToListings() {
  var price = document.getElementById('price').value
  var location = document.getElementById('location').value
  if (price != '' || location != '') {
    // Redirect to listings.html with search parameters
    window.location.href = `../html/listings.html?location=${encodeURIComponent(
      location
    )}&price=${encodeURIComponent(price)}`
  } else {
    alert('Please enter your search parameters')
  }
}

function contactUs() {
  window.open('../html/contactus.html')
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
