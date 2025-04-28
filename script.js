// Button click - Change text/content
const interactiveButton = document.getElementById('interactiveButton');
interactiveButton.addEventListener('click', function() {
  interactiveButton.textContent = 'You clicked me!';
  interactiveButton.style.backgroundColor = 'green';
});

// Hover effect - Change color when mouse enters
const hoverElement = document.getElementById('hoverElement');
hoverElement.addEventListener('mouseover', function() {
  hoverElement.style.backgroundColor = 'lightcoral';
});
hoverElement.addEventListener('mouseout', function() {
  hoverElement.style.backgroundColor = 'lightblue';
});

// Keypress detection
const keypressInput = document.getElementById('keypressInput');
const keyPressResult = document.getElementById('keyPressResult');
keypressInput.addEventListener('keyup', function(event) {
  keyPressResult.textContent = `You pressed: ${event.key}`;
});

// Image gallery (slideshow)
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Add actual image paths here
let currentImageIndex = 0;

const nextImageButton = document.getElementById('nextImage');
const imageElement = document.getElementById('image');

nextImageButton.addEventListener('click', function() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  imageElement.src = images[currentImageIndex];
});

// Form validation
const validationForm = document.getElementById('validationForm');
validationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Email validation
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Password validation (min 8 characters)
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }

  alert('Form submitted successfully!');
});
