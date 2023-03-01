// Cards

document.querySelector('#cards').innerHTML = createCards(data.events)
/* Equivalente a decir:
const eventsContainer = document.querySelector("#cards");

const amazingCards = createCards(data.events);

eventsContainer.innerHTML = amazingCards;
*/

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


// Prueba search
// let searchBar = document.getElementById("searchbar")

// searchBar.addEventListener y se cortó la loz


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

// Prueba categorias

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
