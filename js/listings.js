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
  alert('+1 808 315 5177')
}

function filterListings() {
  // Get URL search parameters
  const urlParams = new URLSearchParams(window.location.search)
  const locationFilter = urlParams.get('location')?.toLowerCase() || ''
  const priceFilter = urlParams.get('price') || ''

  // Get all listings
  const listings = document.querySelectorAll('.listing')

  listings.forEach((listing) => {
    let listingLocation = listing.getAttribute('data-location').toLowerCase()
    let listingPrice = listing.getAttribute('data-price')

    if (
      (locationFilter === '' || listingLocation.includes(locationFilter)) &&
      (priceFilter === '' || listingPrice === priceFilter)
    ) {
      listing.classList.remove('hidden')
    } else {
      listing.classList.add('hidden')
    }
  })
}

// Run filtering when page loads
window.onload = filterListings

// Apply filters on this page based on search bar OR URL params
function applyFilters() {
  let locationInput = document
    .getElementById('locationInput')
    .value.toLowerCase()
  let priceInput = document.getElementById('priceInput').value.toLowerCase()

  filterListings(locationInput, priceInput)
}

function filterListings(locationInput, priceInput) {
  let listings = document.querySelectorAll('.listing')

  listings.forEach((listing) => {
    let price = listing
      .querySelector('.listing-price')
      .textContent.toLowerCase()
    let location = listing
      .querySelector('.listing-location')
      .textContent.toLowerCase()

    let matchLocation = location.includes(locationInput) || locationInput === ''
    let matchPrice = price.includes(priceInput) || priceInput === ''

    if (matchLocation && matchPrice) {
      listing.style.display = 'flex'
    } else {
      listing.style.display = 'none'
    }
  })
}

// Read URL params on page load
window.onload = function () {
  const params = new URLSearchParams(window.location.search)
  const locationParam = params.get('location')
    ? params.get('location').toLowerCase()
    : ''
  const priceParam = params.get('price')
    ? params.get('price').toLowerCase()
    : ''

  document.getElementById('locationInput').value = locationParam
  document.getElementById('priceInput').value = priceParam

  filterListings(locationParam, priceParam)
}
