const celebrationBtn = document.getElementById('celebrationBtn');
const initialPage = document.getElementById('initialPage');
const celebrationPage = document.getElementById('celebrationPage');
const wishMessage = document.getElementById('wishMessage');

celebrationBtn.addEventListener('click', () => {
    // Hide the initial page
    initialPage.style.display = 'none';

    // Display the celebration page
    celebrationPage.classList.remove('hidden');

    // Burst the balloons immediately
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.style.animation = 'burst 1s forwards';
    });

    // Change the wish message to "Happy Birthday Paul!"
    wishMessage.textContent = 'Happy Birthday Paul! \u2764';
});
