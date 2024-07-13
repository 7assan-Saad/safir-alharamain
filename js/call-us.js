
let callBtn = document.querySelector('.call-us .call')
let callsCompany = document.querySelector('.call-us .call .calls-company')

callBtn.addEventListener("click", () => {
  callBtn.classList.toggle("close-icon")
  callsCompany.classList.toggle("hidden")
})