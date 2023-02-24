// const cardsContainer = document.querySelector('#contenedor');

// let allCards = createCards(data);

// eventsCards.innerHTML = allCards;

// function createCards(data) {
//     let card = "";
//     for (const event of data.events ) {
//         card += `<div class="card h-100 shadow">
//         <img src="${data.events.image}" class="card-img-top mh-100 shadow" alt="${events.name}">
//         <div class="card-body">
//             <h5 class="card-title">${data.events.name}</h5>
//             <p class="card-text">${data.events.description}</p>
//         </div>
//         <div class="card-footer d-flex justify-content-between align-items-center"
//             style="height:52px">
//             <p>Prize $${data.events.prize}</p>
//             <button type="button" class="btn btn-outline-info">Info</button>
//         </div>
//     </div>`
//     }
//         return cards
//     }

const contenedorTarjetas = document.querySelector("#contenedor");

let tarjetas = "";
for (const event of data.events) {
  tarjetas += `<div class="card h-100 shadow" style="max-width: 18rem;">
            <img src="${event.image}" class="card-img-top shadow" alt="${event.name}">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
            </div>
            <div class="card-footer d-flex justify-content-between align-items-center"
                style="height:52px">
                <p>Prize $${event.price}</p>
                <button type="button" class="btn btn-outline-info">Info</button>
            </div>
        </div>`;
}

contenedorTarjetas.innerHTML = tarjetas;

