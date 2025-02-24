// Get URL parameters
const urlParams = new URLSearchParams(window.location.search)

document.getElementById('listingTitle').textContent = urlParams.get('title')
document.getElementById('listingPrice').textContent =
  '$' + urlParams.get('price')
document.getElementById('listingLocation').textContent =
  urlParams.get('location')
document.getElementById('listingAvailability').textContent =
  urlParams.get('availability')
document.getElementById('listingDescription').textContent =
  urlParams.get('description')

// Set Main Image
document.getElementById('mainImage').src = urlParams.get('img1')

// Load Gallery Images
const gallery = document.getElementById('imageGallery')
for (let i = 1; i <= 7; i++) {
  let imgSrc = urlParams.get(`img${i}`)
  if (imgSrc) {
    let img = document.createElement('img')
    img.src = imgSrc
    gallery.appendChild(img)
  }
}

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
