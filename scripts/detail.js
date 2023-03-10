let queryString = document.location.search;

let params = new URLSearchParams(queryString);

let _id = params.get("_id");

let cardsInfo = data.events.filter((event) => event._id == _id);

const cardsContainer = document.getElementById("detail-body");
let cardsData = "";
cardsData += `<div class="detail-container">
<div class="detail-image">
    <img src="${cardsInfo[0].image}" alt="${cardsInfo[0].name}" class="shadow rounded img-fluid" id="event-image">
</div>
<div class="detail-description">
    <h4><b>${cardsInfo[0].name}</b></h4>
    <br><br>
    <p>${cardsInfo[0].description}</p>
    <br><br>
    <p>Date: ${cardsInfo[0].date}</p>
    <p><em>Location: ${cardsInfo[0].place}</em></p>
    <p><strong>Price: $${cardsInfo[0].price}</strong></p>
    </div>
    </div>
    
    <div class="detail-container2 card shadow" style="width: 50vw;">
        <img src="${cardsInfo[0].image}" alt="${cardsInfo[0].name}" class="card-img-top shadow">
        <div class="card-body">
            <h4><b>${cardsInfo[0].name}</b></h4>
            <br>
            <p>${cardsInfo[0].description}</p>
            <br>
            <p>Date: ${cardsInfo[0].date}</p>
            <p><em>Location: ${cardsInfo[0].place}</em></p>
            <p><strong>Price: $${cardsInfo[0].price}</strong></p>
        </div>
    </div>
    <div class="detail-buttons">
        <button type="button" onclick="backToIndex()" class="btn btn-info">Back</button>
        <button type="button" onclick="contactUs()" class="btn btn-warning">Contact us!</button>
    </div>`;

function backToIndex() {
  window.location.href = `./index.html`;
}

function contactUs() {
  window.location.href = `./contact.html`;
}

cardsContainer.innerHTML = cardsData;
