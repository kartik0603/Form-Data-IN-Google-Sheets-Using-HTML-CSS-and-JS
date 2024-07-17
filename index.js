document.getElementById('data-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = new URLSearchParams();
    formData.forEach((value, key) => {
        data.append(key, value);
    });
    const formMessage = document.getElementById('form-message');
    
    fetch('https://script.google.com/macros/s/AKfycby_yLtRC4ywKrd2RNmSkfU74A7D6TLTD5EP1Bx9zHQLDLZgdWhdhNkPbg78hSkfyUQO/exec', {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === 'success') {
            form.reset();
            formMessage.textContent = 'Form submitted successfully!';
        } else {
            formMessage.textContent = 'There was an error submitting the form. Please try again.';
        }
    })
    .catch(error => {
        formMessage.textContent = 'There was an error submitting the form. Please try again.';
    });
});
