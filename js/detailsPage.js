
let tripDetail = JSON.parse(localStorage.getItem('tripDetail'))

const detailsContainer = document.querySelector('.details-container')

// umrah
// insideTrip
// details umrah & hajj

if (tripDetail.category == 'umrah') {
  detailsContainer.innerHTML = /*html*/`
    <h1 class="fs-2 text-center mt-4 mb-0">${tripDetail.tripTitle}</h1>

    <!-- start swiper -->
    <div class="details-carousel swiper">
      <div class="slider-wrapper">
        <div class="swiper-wrapper">

            <!-- Slides Items -->
            ${
              tripDetail.imgs.map( img => {
                return /*html*/`
                  <div class="swiper-slide mx-auto w-100">
                    <div class="details-imgs rounded-5 overflow-hidden" style="max-height: 500px;">
                      <img class="w-100" src="./img/${img}" alt="kaaba">
                    </div>
                  </div>
                `
              }).join('')
            }

        </div>

        <!-- pagination -->
        <!-- <div class="swiper-pagination"></div> -->

        <!-- navigation buttons -->
        <!-- <div class="swiper-button-prev text-gray"></div>
        <div class="swiper-button-next text-gray"></div> -->

      </div>

    </div>
    <!-- end swiper -->

    <div class="program-details mx-auto mt-5" style="max-width: 900px;">
      <h3 class="fs-5 mb-3">تفاصيل البرنامج:</h3>
      <table class="table table-striped table-bordered rounded-4 overflow-hidden mb-4">
        <tbody>
          <tr>
            <td class="table-row">المستوى</td>
            <td class="table-row">${tripDetail.level}</td>
          </tr>
          <tr>
            <td class="table-row">مدة الرحلة</td>
            <td class="table-row">${tripDetail.flightDuration}</td>
          </tr>
          <tr>
            <td class="table-row">تاريخ الرحلة</td>
            <td class="table-row">${tripDetail.tripDate}</td>
          </tr>
          <tr>
            <td class="table-row">تاريخ العودة</td>
            <td class="table-row">${tripDetail.returnDate}</td>
          </tr>
          <tr>
            <td class="table-row">مسار الرحلة</td>
            <td class="table-row">${tripDetail.itinerary}</td>
          </tr>
          <tr>
            <td class="table-row">وسيلة السفر</td>
            <td class="table-row">${tripDetail.meansTravel}</td>
          </tr>
          <tr>
            <td class="table-row">شركة الطيران</td>
            <td class="table-row">${tripDetail.airline}</td>
          </tr>
          <tr>
            <td class="table-row">فندق مكة</td>
            <td class="table-row">${tripDetail.MakaHotel}</td>
          </tr>
          <tr>
            <td class="table-row">فندق المدينة</td>
            <td class="table-row">${tripDetail.MadinaHotel}</td>
          </tr>
          <tr>
            <td class="table-row">سعر الثنائي</td>
            <td class="table-row">${tripDetail.binaryPrice}<span class="ms-1 text-regular">جنيه مصري</span></td>
          </tr>
          <tr>
            <td class="table-row">سعر الثلاثي</td>
            <td class="table-row">${tripDetail.triplePrice}<span class="ms-1 text-regular">جنيه مصري</span></td>
          </tr>
          <tr>
            <td class="table-row">سعر الرباعي</td>
            <td class="table-row">${tripDetail.quadruplePrice}<span class="ms-1 text-regular">جنيه مصري</span></td>
          </tr>
          <tr>
            <td class="table-row">سعر الرضيع</td>
            <td class="table-row">${tripDetail.infantPrice}<span class="ms-1 text-regular">جنيه مصري</span></td>
          </tr>
          <tr>
            <td class="table-row">سعر الطفل</td>
            <td class="table-row">${tripDetail.childPrice}<span class="ms-1 text-regular">جنيه مصري</span></td>
          </tr>
        </tbody>
      </table>
      <div class="childs">
        <p class="mb-2">
          * الرضيع : من يوم إلى 2 سنة، والإقامة مع ذويهم بالغرفة بدون سرير إضافى.
        </p>
        <p class="mb-0">
          * الطفل : من 2 سنة الى 12 سنة، والإقامة مع ذويهم بالغرفة بدون سرير إضافى وله مقعد في الأتوبيس.
        </p>
      </div>
    </div>

    <div class="program-includes mt-5 mb-3 mx-auto px-2" style="max-width: 900px;">
      <h3 class="fs-5">البرنامج يشمل:</h3>
      <ul class="mt-3">
          ${
            tripDetail.programIncludes.map( pro => {
              return /*html*/`<li class="pro-item">${pro}</li>`
            }).join('')
          }
      </ul>
    </div>

    <div class="notes mt-5 mb-3 mx-auto px-2" style="max-width: 900px;">
      <h3 class="fs-5">ملاحظات:</h3>
      <ul class="mt-3">
          ${
            tripDetail.notes.map( note => {
              return /*html*/`<li class="pro-item">${note}</li>`
            }).join('')
          }
      </ul>
    </div>

    <div class="required-doc mt-5 mb-5 mx-auto px-2" style="max-width: 900px;">
      <h3 class="fs-5">الأوراق والمستندات المطلوبة:</h3>
      <ul class="mt-3">
        <li class="pro-item">جواز سفر صالح لمدة لا تقل عن عام على الأقل.</li>
        <li class="pro-item">فشهادة صحية خاصة بالحج والعمرة.</li>
        <li class="pro-item">عدد ( 3 ) صور شخصية خلفية بيضاء.</li>
        <li class="pro-item">استخراج تصريح سفر لمن هم في سن التجنيد.</li>
        <li class="pro-item">إيجاد محرم للنساء لمن هى أقل من ٤٥ سنة.</li>
        <li class="pro-item">يلزم مرافق للأطفال (الذكور) تحت ١٨ سنة.</li>
      </ul>
      <p class="mt-5">*تطبق الشروط والأحكام.</p>
      <p class="mt-3 text-bold text-gold">للمزيد من التفاصيل يرجى التواصل معنا لنتمكن من خدمتكم بشكل أفضل.</p>
    </div>
  `
}


function renderImgs() {
  for (let i = 0; i < tripDetail.imgs.length; i++) {
    return /*html*/`
    <div class="swiper-slide mx-auto w-100">
      <div class="details-imgs rounded-5 overflow-hidden" style="max-height: 500px;">
        <img class="w-100" src="./img/${tripDetail.imgs[i]}" alt="">
      </div>
    </div>
    `
  }
}

if (tripDetail.category == 'insideTrip') {
  detailsContainer.innerHTML = /*html*/`
      <h1 class="fs-2 text-center mt-5 mb-0">رحلة ${tripDetail.tripTitle}</h1>
      <!-- start swiper -->
      <div class="details-carousel swiper">
        <div class="slider-wrapper">
          <div class="swiper-wrapper">

              <!-- Slides Items -->
              ${ renderImgs() }

          </div>

          <!-- pagination -->
          <!-- <div class="swiper-pagination"></div> -->

          <!-- navigation buttons -->
          <!-- <div class="swiper-button-prev text-gray"></div>
          <div class="swiper-button-next text-gray"></div> -->

        </div>

      </div>
      <!-- end swiper -->
      <p class="fs-6 text-center mt-3">${tripDetail.description}</p>

      <div class="program-details mx-auto mt-5" style="max-width: 900px;">
      <h3 class="fs-5 mb-3">تفاصيل الرحلة:</h3>
      <table class="table table-striped table-bordered rounded-4 overflow-hidden mb-4">
        <tbody>
          <tr>
            <td class="table-row">اسم الرحلة</td>
            <td class="table-row">${tripDetail.tripTitle}</td>
          </tr>
          <tr>
            <td class="table-row">مدة الرحلة</td>
            <td class="table-row">${tripDetail.flightDuration}</td>
          </tr>
          <tr>
            <td class="table-row">تاريخ الرحلة</td>
            <td class="table-row">${tripDetail.tripDate}</td>
          </tr>
          <tr>
            <td class="table-row">تاريخ العودة</td>
            <td class="table-row">${tripDetail.returnDate}</td>
          </tr>
          <tr>
            <td class="table-row">مسار الرحلة</td>
            <td class="table-row">${tripDetail.itinerary}</td>
          </tr>
          <tr>
            <td class="table-row">وسيلة النقل</td>
            <td class="table-row">${tripDetail.meansTravel}</td>
          </tr>
          <tr>
            <td class="table-row">سعر الرحلة</td>
            <td class="table-row">${tripDetail.mainPrice}<span class="ms-1 text-regular">جنيه مصري</span></td>
          </tr>
          <tr>
            <td class="table-row">سعر الطفل</td>
            <td class="table-row">${tripDetail.childPrice}<span class="ms-1 text-regular">جنيه مصري</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="program-includes mt-5 mb-3 mx-auto px-2" style="max-width: 900px;">
      <h3 class="fs-5">الرحلة تشمل:</h3>
      <ul class="mt-3">
          ${
            tripDetail.programIncludes.map( pro => {
              return /*html*/`<li class="pro-item">${pro}</li>`
            }).join('')
          }
      </ul>
    </div>

    <div class="notes mt-5 mb-5 mx-auto px-2" style="max-width: 900px;">
      <h3 class="fs-5">ملاحظات:</h3>
      <ul class="mt-3">
          ${
            tripDetail.notes.map( note => {
              return /*html*/`<li class="pro-item">${note}</li>`
            }).join('')
          }
      </ul>
      <p class="my-4 text-bold text-gold">للمزيد من التفاصيل يرجى التواصل معنا لنتمكن من خدمتكم بشكل أفضل.</p>  
    </div>
  `
}