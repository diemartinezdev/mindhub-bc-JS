let apiData = [];

function getData() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((apiData) => {
      events = apiData.events;
      createCards(events);
      getCategory(events);
      checkCategory();
      console.log(events);
    })
    .catch((error) => console.log(error.message));
}
getData();

// Cards

const eventsContainer = document.getElementById("cards");

function createCards(array) {
  eventsContainer.innerHTML = "";

  eventsCards = "";

  if (array.length > 0) {
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
                    <button type="button" onclick="window.location.href ='./detail.html?_id=${event._id}'" class="btn btn-outline-info">Info</button>
                    </div>
                    </div>`;
    });
    eventsContainer.innerHTML = eventsCards;
  } else {
    eventsContainer.innerHTML = `<p>No results found, please modify filters</p>`;
  }
}

// Search Bar

const eventsSearch = document.getElementById("searchbar");

let events = [];

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

  array.forEach((event) => {
    // si no existe en el array, agrega el elemento
    if (allCategories.indexOf(event.category) < 0) {
      allCategories.push(event.category);
    }
  });
  //ordena
  let ordererCategories = allCategories.sort();

  let categoryList = "";

  ordererCategories.forEach(
    (category) =>
      (categoryList += `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
  <label class="form-check-label" for="checkbox">${category}</label></div>`)
  );
  eventsCategories.innerHTML = categoryList;
}

function checkCategory() {
  let checkboxEvent = document.querySelectorAll(".form-check-input");

  let checked = [];

  checkboxEvent.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      // console.log(checkbox.checked);

      if (checkbox.checked === true) {
        checked.push(checkbox.value);
        checkedCategoryCards(checked);
        // } else if (checked = []) {
        //   console.log(events);
        //   checkedCategoryCards(events);
      } else {
        checked = checked.filter((category) => category !== checkbox.value);
        checkedCategoryCards(checked);
      }
      console.log(checked);
    });
  });
}
checkCategory();

let checkEventCards = [];

function checkedCategoryCards(checked) {
  let checkEventCards = [];
  checked.forEach((category) => {
    const checkedEventList = events.filter(
      (event) => event.category == category
    );
    checkedEventList.forEach((event) => checkEventCards.push(event));
    console.log(checkEventCards);
  });
  createCards(checkEventCards, eventsContainer);
}
