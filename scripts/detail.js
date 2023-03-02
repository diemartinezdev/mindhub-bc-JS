const queryString = location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const cardsInfo = data.find(event => event.id == id)

const div = document.querySelector(".detail-body")
div.innerHTML = `<div class="detail-container">
<div class="detail-image">
    <img src="${cardsInfo.image}" alt="${cardsInfo.name}" class="shadow">
</div>
<div class="detail-description">
    <h4><b>${cardsInfo.name}</b></h4>
    <p class="card-text fst-italic fw-bold" style="color: #0dcaf0;">Date: ${cardsInfo.date}</p>
    <p>${cardsInfo.description}</p>
    <p>Location: ${cardsInfo.place}</p>
    <p>Price: $${cardsInfo.price}</p>
    <button type="button" onclick="location.href='./index.html" class="btn btn-outline-info">Back</button>

</div>
</div>`