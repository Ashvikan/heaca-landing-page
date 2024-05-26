document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var form = e.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onload = function () {
        var responseMessage = document.getElementById('message');
        if (xhr.status === 200) {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = 'green';
            form.reset();
        } else {
            responseMessage.textContent = 'An error occurred. Please try again.';
            responseMessage.style.color = 'red';
        }
    };
    xhr.send(formData);
});
