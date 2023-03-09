const actualDate = setDate(data.currentDate);

let eventsContainer = document.getElementById("cards");

eventsContainer.innerHTML = createCards(data.events);


function setDate(date) {
  const time = new Date(date);
  return time;
}

function createCards(array) {
  let eventsCards = "";

  for (const event of array) {
    const eventDate = setDate(event.date);
    if (eventDate > actualDate) {
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
    }
  }
  return eventsCards;
}


function moreInfo(_id) {
  window.location.href = `./detail.html?_id=${_id}`;
}

// Categories

let eventsCategories = document.getElementById("categories");
eventsCategories.innerHTML = showCategories(getCategory(data.events));

function getCategory(arrData) {
  let allCategories = [];
  arrData.forEach((element) => {
    if (allCategories.indexOf(element.category) < 0) {
      allCategories.push(element.category);
    }
  });
  return allCategories.sort();
}

function showCategories(arrData) {
  let categories = "";
  arrData.map(
    (category) =>
      (categories += `<div class="form-check form-check-inline">
      <input class="form-check-input" type="checkbox" id="checkbox" value="${category}">
      <label class="form-check-label" for="checkbox">${category}</label></div>`)
  );
  return categories;
}

function categoryCheckFilter(arrData) {
  let category = [];
  for (let i = 0; i < arrData.length; i++) {
    if (arrData[i].checked) {
      category.push(arrData[i].value);
    }
  }
  return category;
}

let buttonEvents = document.getElementById("categories");

let checkboxEvents = document.querySelectorAll("#checkbox");

buttonEvents.addEventListener("change", (e) => {
  eventsContainer.innerHTML = "";

  let category = categoryCheckFilter(checkboxEvents);
  let events = data.events.filter((event) => event.category == category);
  eventsContainer.innerHTML = createCards(events);
});

// Search bar

let searchEvent = document.getElementById("searchbar");

searchEvent.addEventListener("change", (e) => {
  eventsContainer.innerHTML = "";
  
  let events = data.events.filter(
    (event) =>
      event.name.toLowerCase().includes(searchEvent.value.toLowerCase()) ||
      event.description.toLowerCase().includes(searchEvent.value.toLowerCase())
  );
  eventsContainer.innerHTML = createCards(events);
});