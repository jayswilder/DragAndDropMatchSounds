const playGoatAudio = () => {
    const goatPronunciationAudio = new Audio('https://www.macmillandictionary.com/media/american/us_pron/g/goa/goat_/goat_American_English_pronunciation.mp3')
    goatPronunciationAudio.play()
}

const goatAudio = document.getElementById('goat');

goatAudio.addEventListener('click', playGoatAudio)

const playCabAudion = () => {
    const cabAudio = new Audio('https://www.macmillandictionary.com/media/american/us_pron/c/cab/cab_A/cab_American_English_pronunciation.mp3');
    cabAudio.play()
}

const cabAudio = document.getElementById('cab');

cabAudio.addEventListener('click', playCabAudion)


const playChairAudio = () => {
    const chairAudio = new Audio('https://www.macmillandictionary.com/media/american/us_pron/c/cha/chair/chair_American_English_pronunciation.mp3');
    chairAudio.play();
}

const chairAudio = document.getElementById('chair');

chairAudio.addEventListener('click', playChairAudio)