// Cards


const eventsContainer = document.querySelector("#cards");

const amazingCards = createCards(data.events);

eventsContainer.innerHTML = amazingCards;

// Equivalente a decir:
// document.querySelector('#cards').innerHTML = createCards(data.events)

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
                    <button type="button" onclick="location.href='./detail.html?id=${event.id}" class="btn btn-outline-info">Info</button>
                    </div>
                    </div>`;
  }
  return eventsCards;
}

// Prueba categorias

// let categories = document.querySelectorAll("input[type=checkbox]")

// categories.forEach(function (category) {

let category = document.getElementById("inlineCheckbox1")
  category.addEventListener("change", (event) => {
    const filterObj = data.events.filter((event) => event.category == "Costume Party")
  
    console.log(filterObj);

  })

// const eventsCategories = document.querySelector("#categories");

// const amazingCategories = showCategories(data.events);

// eventsCategories.innerHTML = amazingCategories;

// function showCategories(array) {

// let eventCategory = "";

// for (const event of array) {

// eventCategory += `<div class="form-check form-check-inline">
// <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
// <label class="form-check-label" for="inlineCheckbox1">${event.category}</label>
// </div>`
// }
// return eventCategory;
// }

// let costumePartyCategory = events.filter((event)=> data.event.category == "Costume Party")


// Prueba search

// function searching(data.events) {
//   data.events.forEach(event) => {
    
//   });

// }


// let searchBar = document.getElementById("searchbar")

// searchBar.addEventListener("keyup", () => {

//   let filteredCards = events.filter((event) => event.name.toLowerCase().includes(searchBar.value.toLowerCase()))
  
//   createCards(filteredCards)
// })
// VER

// whateverElement.addEventListener("event type", () => {
//   const input = document.getElementById("searchbar");

//   input.addEventListener("input", (e) => {

//     let value = e.target.value;

//     if (value && value.trim().length > 0) {
//       value = value.trim().toLowerCase()

//       createCards(data.filter(data => {
//         return data.includes(value)
//       }))
//     } else {

//     }
//   })
// })