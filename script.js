document.addEventListener('DOMContentLoaded', function() {
    const headline = document.getElementById('headline');
    let phase = 0;
    let text = "";
    let index = 0;
    const deleteSpeed = 50;
    const typingSpeed = 100;

    const phrases = [
        "This website is under construction",
        "Healthy environments create sustainable results"
    ];

    function typeWriter() {
        if (phase < phrases.length) {
            if (index < phrases[phase].length) {
                text += phrases[phase].charAt(index);
                headline.innerHTML = text;
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                setTimeout(deleteText, 1000); // wait before starting to delete
            }
        }
    }

    function deleteText() {
        if (text.length > 0) {
            text = text.substring(0, text.length - 1);
            headline.innerHTML = text;
            setTimeout(deleteText, deleteSpeed);
        } else {
            index = 0;
            phase++;
            setTimeout(typeWriter, typingSpeed); // wait before starting to type new text
        }
    }

    typeWriter();
});
