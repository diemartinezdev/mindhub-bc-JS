function getData() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((apiData) => {
      console.log(apiData);
      events = apiData.events;
      console.log(events);
      createCards(events, eventsContainer);
    })
    .catch((error) => console.log(error.message));
}

getData();

const eventsContainer = document.getElementById("cards");

const eventsCategories = document.getElementById("categories");

const eventsCheckbox = document.querySelectorAll("#checkbox");

const eventsSearch = document.getElementById("searchbar");

let events = [];

function createCards(array, location) {
  if (array.length == 0) {
    location.innerHTML = `<p>No results found, please modify filters</p>`;
    return false;
  }
  eventsCards = "";
  array.forEach((event) => {
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
                    <button type="button" onclick="moreInfo('${event._id}')" class="btn btn-outline-info">Info</button>
                    </div>
                    </div>`;
  });
  location.innerHTML = eventsCards;
}

function moreInfo(_id) {
  window.location.href = `./detail.html?_id=${_id}`;
}

function searchInput(array, text) {
  return array.filter((event) =>
    event.name.toLowerCase().includes(text.toLowerCase())
  );
}

eventsSearch.addEventListener("input", () => {
  let arrayFiltered = searchInput(events, eventsSearch.value);
  createCards(arrayFiltered, eventsContainer);
});
