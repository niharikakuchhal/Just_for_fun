document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector('.preloader');
    const content = document.getElementById('content');
    const loginBox = document.querySelector('.login-box');

    // Simulate a loading delay for demonstration
    setTimeout(() => {
        preloader.style.display = 'none'; // Hide preloader
        content.style.display = 'flex';   // Show the content
        loginBox.classList.add('fade-in');
    }, 2000); // Adjust the time as per requirement
});
