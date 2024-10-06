document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();
    let valid = true;
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        showError('nameError', 'Name is required');
        valid = false;
    } else if (!/^[a-zA-Z ]+$/.test(name)) {
        showError('nameError', 'Name can only contain letters and spaces');
        valid = false;
    }
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        showError('emailError', 'Email is required');
        valid = false;
    } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
        showError('emailError', 'Enter a valid email');
        valid = false;
    }
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        showError('messageError', 'Message is required');
        valid = false;
    }
    if (valid) {
        alert('Form submitted successfully!');
    }
});
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}
function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function (el) {
        el.style.display = 'none';
    });
}

let currentSlide = 0;
function changeSlide(direction) {
    const slides = document.querySelectorAll('.pic');
    const totalSlides = slides.length;
    const slidesToShow = 3;
    currentSlide = (currentSlide + direction + Math.ceil(totalSlides / slidesToShow)) % Math.ceil(totalSlides / slidesToShow);
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.transform = `translateX(-${currentSlide * (100 / slidesToShow)}%)`;
}
