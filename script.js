
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    
    window.location.href = 'appointment.html'; 
  });
  

  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    window.location.href = 'appointment.html'; 
  });
s          