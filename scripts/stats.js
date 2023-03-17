let apiData = [];

function getData() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing")
    .then((response) => response.json())
    .then((apiData) => {
      events = apiData.events;
      console.log(events);
      mayorAsist(events);
    })
    .catch((error) => console.log(error.message));
}
getData();

statsContainer = document.getElementById("stats1");

// const showStats = (statistics) => {
//     let register = '';

//     statistics.forEach(statistic => {
//         register += `<tr>
//         <td>${}</td>
//         <td>${}</td>
//         <td>${}</td>
//     </tr>`
//     })
//     statsContainer.innerHTML = register;
// }

function mayorAsist(array) {
  let events = [];

  events = array.forEach(
    (event) =>
      ((event.assistance * 100) / event.capacity).toFixed(2) ||
      ((event.estimate * 100) / event.capacity).toFixed(2)
  );
  console.log(events);
}
