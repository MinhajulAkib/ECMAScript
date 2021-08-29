function loadData(){
   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
function loadPost(){
     fetch('https://jsonplaceholder.typicode.com/posts')
     .then(response => response.json())
     .then(data => displayPost(data))
 }
function displayPost(data){
     const ol = document.getElementById('load');
     console.log(data);
     for(const user of data){
         console.log(user);
         const li = document.createElement('li');
        li.innerText = `Id: ${user.id}, Title: ${user.title}`;
        ol.appendChild(li);
     }
 }


//Dynamically Display Loaded Data On Your Website
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(data => displayUsers(data))
 }
 function displayUsers(data){
     const ul = document.getElementById('users');
     console.log(data);
    for(const user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name}, Email: ${user.email}`;
        ul.appendChild(li);
    }
 }