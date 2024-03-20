const celebrationBtn = document.getElementById('celebrationBtn');
const celebrationPage = document.getElementById('celebrationPage');

celebrationBtn.addEventListener('click', () => {
    // Hide the button
    celebrationBtn.style.display = 'none';

    // Remove the 'hidden' class from the celebration page
    celebrationPage.classList.remove('hidden');

    // Wait for 3 seconds before bursting the balloons
    setTimeout(() => {
        const balloons = document.querySelectorAll('.balloon');
        balloons.forEach(balloon => {
            balloon.style.animation = 'burst 1s forwards';
        });
    }, 3000);
});
