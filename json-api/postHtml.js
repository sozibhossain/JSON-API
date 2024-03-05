
function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => displayPosts(data));
}
loadPosts();

function displayPosts(data){
    const postDetails = document.getElementById('posts');
    for(const post of data){
        // const postDetails = document.getElementById('posts');
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h1>${post.title}</h1>
            <p>${post.body}</p>
        `;
        postDetails.appendChild(div);
    }
}
