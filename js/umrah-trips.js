
// all umrah trips
const umrahTripsContainer = document.querySelector('.new-umrah-trip')

const getTripsByCategory = (async () => {
  let trips = []
  await db.collection('trips')
  .where('category', '==', 'umrah')
  .where('status', '==', 'new').get()
  .then(category => {
    category.forEach(cat => {
      let obj = cat.data()
      obj.id = `${cat.id}`
      trips.push(obj)
    })
    // Sort the trips array by 'quadruplePrice' from lowest to highest
    trips.sort((a, b) => a.sort - b.sort)
    // console.log(trips)
  })
  let renderUmrahTrips = trips.map(product => {
    return /*html*/`
      <div class="col p-lg-4 py-3">
        <img src="./img/${product.img}" class="rounded-4 shadow" alt="" width="100%">
      </div>
    `
  })
    umrahTripsContainer.innerHTML = renderUmrahTrips.join('')
})()