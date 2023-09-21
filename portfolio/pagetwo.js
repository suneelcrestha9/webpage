let burgerlist=document.querySelector('.burgerlist');

burgerlist.addEventListener('click',mylist);
function mylist(){
    document.getElementById("aside-left").classList.toggle("show");
}

// Function to hide the loader when the content is loaded
function hideLoader() {
    // Select the loader and content elements
    var loader = document.querySelector('.loaderwapper');
    var content = document.querySelector('.content');

    // Hide the loader
    loader.style.display = 'none';

    // Display the content
    content.style.display = 'block';
}

// Attach the hideLoader function to the window.onload event
window.onload = hideLoader;