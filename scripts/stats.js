let apiData = [];

function getData() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((apiData) => {
      events = apiData.events;
      pastEvents = apiData.events.filter(
        (event) => event.date < apiData.currentDate
      );
      upcomingEvents = apiData.events.filter(
        (event) => event.date > apiData.currentDate
      );
      printTable(
        results(
          assistance(events),
          assistance(events).reverse(),
          capacity(events)
        ),
        "stats1"
      );
      printOtherTable(dataTable(upcomingEvents), "upcoming");
      printOtherTable(dataTable(pastEvents), "past");
    })
    .catch((error) => console.log(error.message));
}
getData();

function assistance(array) {
  const arrayPercentage = array.map((event) => {
    return {
      attendance: (event.assistance / event.capacity) * 100,
      nameEvent: event.name,
    };
  });
  arrayPercentage.sort((a, b) => a.attendance - b.attendance);
  return arrayPercentage;
}

function capacity(array) {
  const arrayCapacity = array.map((event) => {
    return {
      capacity: event.capacity,
      nameEvent: event.name,
    };
  });
  arrayCapacity.sort((a, b) => b.capacity - a.capacity);
  return arrayCapacity;
}

function results(highestPercentage, lowestPercentage, largerCapacity) {
  let all = {
    highestPercentage: highestPercentage[0].nameEvent,
    lowestPercentage: lowestPercentage[0].nameEvent,
    largerCapacity: largerCapacity[0].nameEvent,
  };
  return all;
}

function printTable(results, location) {
  const table = document.getElementById(location);
  table.innerHTML = `<tr>
    <td>${results.highestPercentage}</td>
    <td>${results.lowestPercentage}</td>
    <td>${results.largerCapacity}</td>
    </tr>`;
}

function dataTable(array) {
  let categories = Array.from(new Set(array.map((a) => a.category)));
  let eventCategories = categories.map((cat) =>
    array.filter((event) => event.category == cat)
  );
  let result = eventCategories.map((eventCat) => {
    let calculate = eventCat.reduce(
      (acc, event) => {
        (acc.category = event.category),
          (acc.revenues += event.price * (event.assistance || event.estimate)),
          (acc.attendance +=
            ((event.assistance || event.estimate) * 100) / event.capacity);
        return acc;
      },
      {
        category: "",
        revenues: 0,
        attendance: 0,
      }
    );
    calculate.attendance = calculate.attendance / eventCat.length;
    return calculate;
  });
  return result;
}

function printOtherTable(array, idTag) {
  const upcomingTable = document.getElementById(idTag);
  let html = array.map((events) => {
    return `
    <tr>
    <td>${events.category}</td>
    <td>$${events.revenues}</td>
    <td>${events.attendance.toFixed(2)}%</td>
    </tr>`;
  });
  upcomingTable.innerHTML = html.join("");
}
