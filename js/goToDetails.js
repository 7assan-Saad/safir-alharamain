
function getCatAndID(id) {
  const allTrips = JSON.parse(localStorage.getItem('allTrips'))
  let select = allTrips.find(trip => trip.id === id)
  localStorage.setItem('tripDetail', JSON.stringify(select))
}
