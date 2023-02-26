const eventsContainer = document.querySelector("#cards");

const amazingCards = createCards(data.events);

eventsContainer.innerHTML = amazingCards;

function createCards(array) {
  let eventsCards = "";

  for (const event of array) {
    eventsCards += `<div class="card h-100 shadow" style="width: 22rem;">
        <img src="${event.image}" class="card-img-top shadow" alt="${event.name}">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text fst-italic fw-bold" style="color: #0dcaf0;">Date: ${event.date}</p>
                    <p class="card-text">${event.description}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between align-items-center"
                    style="height:52px">
                    <p>Price $${event.price}</p>
                    <button type="button" class="btn btn-outline-info">Info</button>
                    </div>
                    </div>`;
  }
  return eventsCards;
}
