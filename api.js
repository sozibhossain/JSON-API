// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json.title));
// }

// function loadData() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((data) => displayUser(data));
// }

// function displayUser(data) {
//   for(const user of data){
//     console.log(user)
//   }
// }


function loadData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => displayUser(data));
}

function displayUser(data) {
    const ul = document.getElementById('users')
  for(const user of data){
    console.log(user.name)
    const li = document.createElement('li');
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
