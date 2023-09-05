const carouselContainer = document.querySelector(".carousel-container");
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = carouselContainer.clientWidth;
  carouselContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}


setInterval(function() {
  currentIndex = (currentIndex + 1) % 3;
  showSlide(currentIndex);
}, 5000);

document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all fields.');
    return; 
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match.');
    return; 
  }


  window.location.href = 'appointment.html'; 
});



document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  x
  window.location.href = 'appointment.html'; 
});


  question.addEventListener('click', () => {
    answer.classList.toggle('open');
    toggleIcon.textContent = answer.classList.contains('open') ? '-' : '+';
  });


const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling; 
    answer.classList.toggle('show-answer'); 
  });
});

window.addEventListener('scroll', function () {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const audioElement = document.getElementById('background-music');
  const audioControlButton = document.getElementById('audio-control');

  audioControlButton.addEventListener('click', function() {
    if (audioElement.paused) {
      audioElement.play();
      audioControlButton.textContent = 'Pause Music';
    } else {
      audioElement.pause();
      audioControlButton.textContent = 'Play Music';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
});