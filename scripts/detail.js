let queryString = document.location.search

let params = new URLSearchParams(queryString)

let _id = params.get("_id")

let cardsInfo = data.events.filter(event => event._id == _id)

const cardsContainer = document.getElementById("detail-body");
let cardsData = "";
   cardsData  += `<div class="detail-container">
<div class="detail-image">
    <img src="${cardsInfo[0].image}" alt="${cardsInfo[0].name}" class="shadow rounded" style="max-width: 35vw;">
</div>
<div class="detail-description">
    <h4><b>${cardsInfo[0].name}</b></h4>
    <p class="card-text fst-italic fw-bold" style="color: #0dcaf0;">Date: ${cardsInfo[0].date}</p>
    <p>${cardsInfo[0].description}</p>
    <p>Location: ${cardsInfo[0].place}</p>
    <p>Price: $${cardsInfo[0].price}</p>
    <button type="button" onclick="backToIndex()" class="btn btn-outline-info">Back</button>

</div>
</div>`

cardsContainer.innerHTML = cardsData

function backToIndex() {
    window.location.href = `./index.html`
}
