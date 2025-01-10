
// all umrah trips
const umrahTripsContainer = document.querySelector('.new-umrah-trip')

const getTripsByCategory = (async () => {
  let trips = []
  let tripsSlice
  await db.collection('trips').where('category', '==', 'new-umrah').get()
  .then(category => {
    category.forEach(cat => {
      let obj = cat.data()
      obj.id = `${cat.id}`
      trips.push(obj)
    })
    // Sort the trips array by 'quadruplePrice' from lowest to highest
    trips.sort((a, b) => a.sort - b.sort)
    tripsSlice = trips.slice(0, 4)
    // console.log(trips)
  })
  let renderUmrahTrips = tripsSlice.map(product => {
    return /*html*/`
      <div class="col p-lg-4 py-3">
        <img src="./img/${product.img}" class="rounded-5 shadow" alt="" width="100%">
      </div>
    `
  })
    umrahTripsContainer.innerHTML = renderUmrahTrips.join('')
})()

// latest Umrah Trips
// const latestOffersPro = document.querySelector('.umrah-latest')

// const latestUmrahTrips = (async () => {
//   let trips = []
//   let tripsSlice
//   await db.collection('trips').where('category', '==', 'umrah').get()
//   .then(category => {
//     category.forEach(cat => {
//       let obj = cat.data()
//       obj.id = `${cat.id}`
//       trips.push(obj)
//     })
//     // Sort the trips array by 'quadruplePrice' from lowest to highest
//     trips.sort((a, b) => a.quadruplePrice - b.quadruplePrice)
//     tripsSlice = trips.slice(0, 4)
//   })

//   let renderProducts = tripsSlice.map(product => { 
//     return /*html*/`
//       <div class="col p-3">
//         <div
//           class="product d-flex justify-content-center position-relative overflow-hidden mx-auto rounded-5 text-center text-white cursor-pointer"
//           onclick="getID('${product.id}')">
//           <img src="./img/${product.imgs[0]}" class="h-100" alt="img">
//           <div class="product-company">
//             <img src="./img/${product.company.companyLogo}" alt="logo">
//           </div>
//           <div class="trip-date">
//             <span class="day fs-7 d-block">${product.tripDay}</span>
//             <span class="day-num d-block">${product.tripDayNum}</span>
//             <span class="month fs-7 d-block">${product.tripMonth}</span>
//           </div>
//           <div class="product-level text-regular">
//             <span>${product.level}</span>
//           </div>
//           <div class="product-text">
//             <h3 class="fs-4 mb-1">${product.tripTitle}</h3>
//             <div class="d-flex align-items-center justify-content-center">
//               <p class="fs-3 text-bold mb-0">${product.quadruplePrice}</p>
//               <span class="fs-6 text-regular d-block" style="margin-top: -5px; margin-right: 5px;">جنيه مصري</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     `
//   })
//   latestOffersPro.innerHTML = renderProducts.join('')
// })()

// latest travel offers
const latestTravelPro = document.querySelector('.travel-latest')
const latestTravelTrips = (async () => {
  let trips = []
  let tripsSlice
  await db.collection('trips').where('category', '==', 'insideTrip').get()
  .then(category => {
    category.forEach(cat => {
      let obj = cat.data()
      obj.id = `${cat.id}`
      trips.push(obj)
    })
    // Sort the trips array by 'quadruplePrice' from lowest to highest
    trips.sort((a, b) => a.mainPrice - b.mainPrice)
    tripsSlice = trips.slice(0, 4)
    // console.log(tripsSlice)
  })

  let renderProducts = trips.map(product => { 
    return /*html*/`
      <div class="col p-3">
        <div
          class="product d-flex justify-content-center position-relative overflow-hidden mx-auto rounded-5 text-center text-white cursor-pointer"
          onclick="getID('${product.id}')">
          <img src="./img/${product.imgs[0]}" class="h-100" alt="img">
          <!-- <div class="product-company">
            <img src="./img/${product.company.companyLogo}" alt="logo">
          </div> -->
          <div class="trip-date">
            <span class="day fs-7 d-block">${product.tripDay}</span>
            <span class="day-num d-block">${product.tripDayNum}</span>
            <span class="month fs-7 d-block">${product.tripMonth}</span>
          </div>
          <div class="product-text">
            <h3 class="fs-4 mb-1">${product.tripTitle}</h3>
            <div class="d-flex align-items-center justify-content-center">
              <p class="fs-3 text-bold mb-0">${product.mainPrice}</p>
              <span class="fs-6 text-regular d-block" style="margin-top: -5px; margin-right: 5px;">جنيه مصري</span>
            </div>
          </div>
        </div>
      </div>
    `
  })
  latestTravelPro.innerHTML = renderProducts.join('')
})()