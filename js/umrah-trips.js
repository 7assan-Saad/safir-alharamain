// get all data
const url = './model/data.json'
const getData = async () => {
  let data = await fetch(url).then(response => response.json())
  return data
}

// umrah trips container

// umrah trips all
const umrahTripsContainer = document.querySelector('.umrah-trip')
const umrahTrips = ( async () => {
  await getData().then(data => { 
    let umrahTrips = data.filter(trip => trip.category == 'umrah')
    let renderUmrahTrips = umrahTrips.map(product => { 
      return /*html*/`
        <div class="col p-4 card-link">
          <a href="details.html" onclick="getCatAndID(${product.id})">
            <div class="card rounded-5 overflow-hidden">
              <div class="product-company">
                <img src="./img/${product.company.companyLogo}" alt="">
              </div>
              <div class="product-level text-regular">
                <span>${product.level}</span>
              </div>
              <div class="image d-flex justify-content-center">
                <img src="./img/${product.imgs[0]}" class="h-100" alt="kaaba photo">
              </div>
              <div class="card-body p-4">
                <div class="overflow-hidden py-1 mb-1" style="height: 32px;">
                  <h3 class="card-title max-content text-black fs-5">${product.tripTitle}</h3>
                </div>
                <div class="text-black d-flex align-items-center justify-content-start">
                  <p class="fs-3 text-bold mb-0">${product.quadruplePrice}</p>
                  <span class="fs-6 text-regular d-block" style="margin-top: -5px; margin-right: 5px;">جنيه مصري</span>
                </div>
                <div class="overflow-hidden py-1 mb-1" style="height: 47px;">
                  <p class="card-text text-gray">
                  ${product.description}
                  </p>
                </div>
                <a href="details.html" class="btn-gold d-block max-content text-regular rounded-4 mt-3 px-4"
                  style="padding-top: 14px; padding-bottom: 10px;"
                  onclick="getCatAndID(${product.id})">
                  لمزيد من التفاصيل
                </a>
              </div>
            </div>
          </a>
        </div>
      `
  })
    umrahTripsContainer.innerHTML = renderUmrahTrips.join('')
  })
})()