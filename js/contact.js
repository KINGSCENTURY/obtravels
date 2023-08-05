document.getElementById('ob-contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var form = this;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();

    // Display success or error message
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert('Thank you for contacting us. We will get back to you soon.');
                form.reset();
            } else {
                alert('Oops! Something went wrong. Please try again later.');
            }
        }
    };

    xhr.open('POST', form.getAttribute('action'), true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(formData);
});
  