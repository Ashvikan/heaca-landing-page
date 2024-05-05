document.addEventListener('DOMContentLoaded', function() {
    const headline = document.getElementById('headline');
    let phase = 0;
    let text = "";
    let index = 0;
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
            } else if (phase < phrases.length - 1) {
                phase++;  // Move to the next phrase
                text = ""; // Clear the text for the next phrase
                index = 0; // Reset the index for the next phrase
                setTimeout(typeWriter, 1000); // Start the next phrase after a delay
            }
        }
    }

    typeWriter();
});
