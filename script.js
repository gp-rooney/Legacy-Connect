function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Helper to display error
function showError(inputId, message) {
  const errorDiv = document.getElementById(`${inputId}-error`);
  if (errorDiv) {
    errorDiv.textContent = message;
  }
}

// Helper to clear errors
function clearErrors(form) {
  form.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

// Contact Form Validation
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors(contactForm);

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const subject = contactForm.querySelector('#subject').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    let isValid = true;

    if (!name) {
      showError('name', 'Please enter your full name.');
      isValid = false;
    }
    if (!email) {
      showError('email', 'Please enter your email.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'Please enter a valid email address.');
      isValid = false;
    }
    if (!subject) {
      showError('subject', 'Please enter a subject.');
      isValid = false;
    }
    if (!message) {
      showError('message', 'Please enter your message.');
      isValid = false;
    }

    if (isValid) {
      showSuccessBanner('contact-success', 'Thank you! Your message has been sent.');
      contactForm.reset();
    }    
  });
}

// Login Form Validation
const loginForm = document.querySelector('.login-form');
if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors(loginForm);

    const email = loginForm.querySelector('#email').value.trim();
    const password = loginForm.querySelector('#password').value.trim();

    let isValid = true;

    if (!email) {
      showError('email', 'Please enter your email.');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'Please enter a valid email address.');
      isValid = false;
    }

    if (!password) {
      showError('password', 'Please enter your password.');
      isValid = false;
    }

    if (isValid) {
      showSuccessBanner('login-success', 'Login successful.');
      loginForm.reset();
    }    
  });
}
function showSuccessBanner(bannerId, message) {
  const banner = document.getElementById(bannerId);
  if (banner) {
    banner.textContent = message;
    banner.classList.add('show');

    setTimeout(() => {
      banner.classList.remove('show');
    }, 3000); // Visible for 3 seconds
  }
}

