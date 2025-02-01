// Handle post form submission
const postForm = document.getElementById('post-form');
const postContent = document.getElementById('post-content');
const postsContainer = document.getElementById('posts');

postForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const content = postContent.value.trim();
    if (content) {
        const post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
            <p>${content}</p>
        `;
        postsContainer.prepend(post); // Add new post to the top
        postContent.value = ''; // Clear the text area
    }
});
