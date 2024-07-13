// get all data
const url = './model/data.json'
const getData = async () => {
  let data = await fetch(url).then(response => response.json())
  return data
}

// Store 'data' on the local storage
getData().then(data => { 
  // console.log(data)
  localStorage.setItem('allTrips', JSON.stringify(data))
})

// latest umrah offers
const latestOffersPro = document.querySelector('.umrah-latest')
const latestOffers = ( async () => {
  await getData().then(data => { 
    let umrahTrips = data.filter(trip => trip.category == 'umrah')
    let renderProducts = umrahTrips.map(product => { 
      return /*html*/`
        <div class="col p-3">
          <a href="details.html"
            class="product d-flex justify-content-center position-relative overflow-hidden mx-auto rounded-5 text-center text-white"
            onclick="getCatAndID(${product.id})">
            <img src="./img/${product.imgs[0]}" class="h-100" alt="img">
            <div class="product-company">
              <img src="./img/${product.company.companyLogo}" alt="logo">
            </div>
            <div class="product-level text-regular">
              <span>${product.level}</span>
            </div>
            <div class="product-text">
              <h3 class="fs-4 mb-1">${product.tripTitle}</h3>
              <div class="d-flex align-items-center justify-content-center">
                <p class="fs-3 text-bold mb-0">${product.quadruplePrice}</p>
                <span class="fs-6 text-regular d-block" style="margin-top: -5px; margin-right: 5px;">جنيه مصري</span>
              </div>
            </div>
          </a>
        </div>
      `
  })
    latestOffersPro.innerHTML = renderProducts.join('')
  })
})()

// latest travel offers

const latestTravelPro = document.querySelector('.travel-latest')
const latestTravel = ( async () => {
  await getData().then( data => { 
    let insideTrip = data.filter(trip => trip.category == 'insideTrip')
    let renderProducts = insideTrip.map(product => { 
      return /*html*/`
        <div class="col p-3">
          <a href="details.html"
            class="product d-flex justify-content-center position-relative overflow-hidden mx-auto rounded-5 text-center text-white"
            onclick="getCatAndID(${product.id})">
            <img src="./img/${product.imgs[0]}" class="h-100" alt="img">
            <div class="product-company">
              <img src="./img/${product.company.companyLogo}" alt="logo">
            </div>
            <div class="product-text">
              <h3 class="fs-4 mb-1">${product.tripTitle}</h3>
              <div class="d-flex align-items-center justify-content-center">
                <p class="fs-3 text-bold mb-0">${product.mainPrice}</p>
                <span class="fs-6 text-regular d-block" style="margin-top: -5px; margin-right: 5px;">جنيه مصري</span>
              </div>
            </div>
          </a>
        </div>
      `
  })
    latestTravelPro.innerHTML = renderProducts.join('')
  })
})()