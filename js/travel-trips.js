
// all inside trips
const travelTripsContainer = document.querySelector('.travel-trip')

const getTripsByCategory = (async () => {
  let trips = []
  await db.collection('trips').where('category', '==', 'insideTrip').get()
  .then(category => {
    category.forEach(cat => {
      let obj = cat.data()
      obj.id = `${cat.id}`
      trips.push(obj)
    })
    // console.log(trips)
  })

  let renderTravelTrips = trips.map(product => {

      return /*html*/`
        <div class="col card-link">
          <div>
            <div class="card rounded-5 overflow-hidden mx-auto" style="max-width: 425px">
              <!-- <div class="product-company">
                <img src="./img/${product.company.companyLogo}" alt="">
              </div> -->
              <div class="trip-date">
                <span class="day fs-7 d-block">${product.tripDay}</span>
                <span class="day-num d-block">${product.tripDayNum}</span>
                <span class="month fs-7 d-block">${product.tripMonth}</span>
              </div>
              <div onclick="getID('${product.id}')" class="image d-flex justify-content-center cursor-pointer">
                <img src="./img/${product.imgs[0]}" class="h-100" alt="">
              </div>
              <div class="card-body p-4">
                <div class="overflow-hidden py-1 mb-1" style="height: 32px;">
                  <h3 class="card-title max-content text-primary fs-5">${product.tripTitle}</h3>
                </div>
                <div class="text-primary d-flex align-items-center justify-content-start">
                  <p class="fs-3 text-bold mb-0">${product.mainPrice}</p>
                  <span class="fs-6 text-regular d-block" style="margin-top: -5px; margin-right: 5px;">جنيه</span>
                </div>
                <div class="overflow-hidden py-1 mb-1" style="height: 55px;">
                  <p class="card-text text-gray fs-7 lh-lg">
                  ${product.description}
                  </p>
                </div>
                <div class="btn-secondary d-block max-content text-regular rounded-4 mt-3 px-4 cursor-pointer"
                  style="padding-top: 14px; padding-bottom: 10px;" onclick="getID('${product.id}')">
                  لمزيد من التفاصيل
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  })
    travelTripsContainer.innerHTML = renderTravelTrips.join('')
})()