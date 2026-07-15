const form = document.getElementById('contactForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Page reload rokne ke liye

    let isValid = true;

    // 1. Name Validation - Not Empty
    if(name.value.trim() === '') {
        showError(name, 'nameError');
        isValid = false;
    } else {
        hideError(name, 'nameError');
    }

    // 2. Email Validation - Correct Format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email.value.trim() === '') {
        document.getElementById('emailError').innerText = 'Email cannot be empty';
        showError(email, 'emailError');
        isValid = false;
    } else if(!emailRegex.test(email.value.trim())) {
        document.getElementById('emailError').innerText = 'Please enter a valid email';
        showError(email, 'emailError');
        isValid = false;
    } else {
        hideError(email, 'emailError');
    }

    // 3. Message Validation - Not Empty
    if(message.value.trim() === '') {
        showError(message, 'messageError');
        isValid = false;
    } else {
        hideError(message, 'messageError');
    }

    // Agar sab valid hai
    if(isValid) {
        successMsg.style.display = 'block';
        form.reset(); // Form clear
        setTimeout(() => {
            successMsg.style.display = 'none';
        }, 3000);
    }
});

function showError(input, errorId) {
    input.classList.add('invalid');
    document.getElementById(errorId).style.display = 'block';
}

function hideError(input, errorId) {
    input.classList.remove('invalid');
    document.getElementById(errorId).style.display = 'none';
}