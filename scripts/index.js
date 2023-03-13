function getData() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((apiData) => {
      console.log(apiData);
      events = apiData.events;
      createCards(events, eventsContainer);
      getCategory(events);
      filterCheckbox();
    })
    .catch((error) => console.log(error.message));
}

getData();

// Cards

const eventsContainer = document.getElementById("cards");

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

// Search Bar

const eventsSearch = document.getElementById("searchbar");

function searchInput(array, text) {
  return array.filter((event) =>
    event.name.toLowerCase().includes(text.toLowerCase())
  );
}

eventsSearch.addEventListener("input", () => {
  let arrayFiltered = searchInput(events, eventsSearch.value);
  createCards(arrayFiltered, eventsContainer);
});

// Categories

const eventsCategories = document.getElementById("categories");

function getCategory(array) {
  let allCategories = [];

  array.forEach((element) => {
    // si no existe en el array, agrega el elemento
    if (allCategories.indexOf(element.category) < 0) {
      allCategories.push(element.category);
    }
  });
  //ordena
  let OrdererCategories = allCategories.sort();

  let categoryList = "";

  OrdererCategories.forEach(
    (category) =>
      (categoryList += `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
  <label class="form-check-label" for="checkbox">${category}</label></div>`)
  );
  eventsCategories.innerHTML = categoryList;
}

// function showCategories(array) {
//   let categories = "";

//   array.map(
//     (category) =>
//       (categories += `<div class="form-check form-check-inline">
//       <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
//       <label class="form-check-label" for="checkbox">${category}</label></div>`)
//   );
//   return categories;
// }


const eventsCheckbox = document.querySelectorAll("#checkbox");
console.log(eventsCheckbox);
function filterCheckbox() {
  
}
filterCheckbox();

eventsCategories.addEventListener("change", (e) => {
  eventsCheckbox.innerHTML = "";

  let category = categoryCheckFilter(eventsCheckbox);
  let events = data.events.filter((event) => event.category == category);
  eventsCheckbox.innerHTML = createCards(events);
});
