document.addEventListener("DOMContentLoaded", function () {
    const postButton = document.querySelector(".post-box button");
    const postInput = document.querySelector(".post-box textarea");
    const mainContent = document.querySelector(".main-content");

    postButton.addEventListener("click", function () {
        if (postInput.value.trim() !== "") {
            const newPost = document.createElement("div");
            newPost.classList.add("post");
            newPost.innerHTML = `<h4>You</h4><p>${postInput.value}</p>`;
            mainContent.appendChild(newPost);
            postInput.value = "";
        }
    });
});
