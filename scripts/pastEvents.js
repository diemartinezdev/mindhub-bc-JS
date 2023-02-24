const eventsContainer = document.querySelector("#cards");

let amazingCards = createCards(data.events)

eventsContainer.innerHTML = amazingCards;

function createCards(array) {
    
    let eventsCards = "";
    
    // let eventDate = new Date(data.events.Date);

    // let actualDate = new Date(data.currentDate);
    
    // if (eventDate.getTime < actualDate.getTime) {}
    
    for (const event of array) {
        eventsCards += `<div class="card h-100 shadow" style="width: 18rem;">
        <img src="${event.image}" class="card-img-top shadow" alt="${event.name}">
        <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center"
        style="height:52px">
        <p>Price $${event.price}</p>
        <button type="button" class="btn btn-outline-info">Info</button>
        </div>
        </div>`;
    }
        return eventsCards
    }
