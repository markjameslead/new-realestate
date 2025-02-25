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
