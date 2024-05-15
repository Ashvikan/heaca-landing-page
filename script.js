document.addEventListener('DOMContentLoaded', function() {
    const headline = document.getElementById('headline');
    const enFlag = document.getElementById('en-flag');
    const daFlag = document.getElementById('da-flag');
    let phase = 0;
    let text = "";
    let index = 0;
    const typingSpeed = 100;
    let typingTimeout;

    const phrases = {
        en: [
            "We are working on something new",
            "Healthy environments create sustainable results"
        ],
        da: [
            "Vi arbejder på noget nyt",
            "Sunde miljøer skaber bæredygtige resultater"
        ]
    };

    const textContent = {
        en: [
            "At Heaca, we specialize in fostering healthier and more productive work environments through tailored health promotion solutions. We collaborate with businesses of all sizes and industries to develop and implement transformative health policies.",
            "Our services include health assessments, policy development, program implementation, and expert advice on health insurance and vaccination schemes. We work closely with clients to identify optimal solutions that meet employee needs and align with company objectives.",
            "We specialize in providing tailored support for international companies sending employees to Denmark. Our services ensure a smooth transition and optimal well-being for employees throughout their assignment. From arranging medical assistance to facilitating health checks and medication access, we streamline the process to enhance employee experience and productivity during their stay in Denmark."
        ],
        da: [
            "Hos Heaca specialiserer vi os i at fremme sundere og mere produktive arbejdsmiljøer gennem skræddersyede sundhedsfremmende løsninger. Vi samarbejder med virksomheder af alle størrelser og industrier for at udvikle og implementere transformative sundhedspolitikker.",
            "Vores tjenester omfatter sundhedsvurderinger, politikudvikling, programimplementering og ekspert rådgivning om sundhedsforsikring og vaccinationsordninger. Vi arbejder tæt sammen med kunder for at identificere optimale løsninger, der opfylder medarbejdernes behov og er i overensstemmelse med virksomhedens mål.",
            "Vi specialiserer os i at yde skræddersyet støtte til internationale virksomheder, der sender medarbejdere til Danmark. Vores tjenester sikrer en glat overgang og optimal trivsel for medarbejdere under hele deres ophold. Fra at arrangere medicinsk assistance til at facilitere sundhedstjek og adgang til medicin, strømliner vi processen for at forbedre medarbejdernes oplevelse og produktivitet under deres ophold i Danmark."
        ]
    };

    function typeWriter(language = 'en') {
        if (typingTimeout) clearTimeout(typingTimeout);

        if (phase < phrases[language].length) {
            if (index < phrases[language][phase].length) {
                text += phrases[language][phase].charAt(index);
                headline.innerHTML = text;
                index++;
                typingTimeout = setTimeout(() => typeWriter(language), typingSpeed);
            } else if (phase < phrases[language].length - 1) {
                phase++;
                text = "";
                index = 0;
                typingTimeout = setTimeout(() => typeWriter(language), 2000);
            }
        }
    }

    function switchLanguage(language) {
        phase = 0;
        text = "";
        index = 0;
        headline.innerHTML = "";
        if (typingTimeout) clearTimeout(typingTimeout);
        typeWriter(language);

        document.getElementById('text-1').innerHTML = textContent[language][0];
        document.getElementById('text-2').innerHTML = textContent[language][1];
        document.getElementById('text-3').innerHTML = textContent[language][2];

        if (language === 'en') {
            enFlag.style.display = 'none';
            daFlag.style.display = 'inline';
        } else {
            enFlag.style.display = 'inline';
            daFlag.style.display = 'none';
        }
    }

    enFlag.addEventListener('click', () => switchLanguage('en'));
    daFlag.addEventListener('click', () => switchLanguage('da'));

    switchLanguage('en'); // Start with English by default
});
