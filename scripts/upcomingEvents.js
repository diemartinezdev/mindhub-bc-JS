let apiData = [];

function getData() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((apiData) => {
      upcomingEvents = apiData.events.filter(
        (event) => event.date > apiData.currentDate
      );

      createCards(upcomingEvents);
      getCategory(upcomingEvents);
      filterAll();
      console.log(upcomingEvents);
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

// Categories

const eventsCategories = document.getElementById("categories");

function getCategory(array) {
  let allCategories = [];

  array.forEach((upcomingEvent) => {
    // si no existe en el array, agrega el elemento
    if (allCategories.indexOf(upcomingEvent.category) < 0) {
      allCategories.push(upcomingEvent.category);
    }
  });
  //ordena
  let ordererCategories = allCategories.sort();

  let categoryList = "";

  ordererCategories.forEach(
    (category) =>
      (categoryList += `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="${category}" value="${category}" onclick="filterAll()">
  <label class="form-check-label" for="${category}">${category}</label></div>`)
  );
  eventsCategories.innerHTML = categoryList;
}

// Search bar

const eventsSearch = document.getElementById("searchbar");
eventsSearch.addEventListener("input", filterAll);

function filterAll() {
  const checkboxEvent = document.querySelectorAll("input:checked");

  let categoryString = Array.from(checkboxEvent).map((categ) => categ.value);
  console.log(upcomingEvents);
  const arrayFiltered = upcomingEvents.filter(
    (element) =>
      (categoryString.length == 0 ||
        categoryString.includes(element.category)) &&
      element.name.toLowerCase().includes(eventsSearch.value.toLowerCase())
  );
  createCards(arrayFiltered);
}
