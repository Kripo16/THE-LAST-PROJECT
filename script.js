function checkPassword() {
    const passwordEntered = document.getElementById('password').value.trim();
    const correctPassword = 'kawbie'; // Set your password here
    const letter = `
        ياخو من نيتك تحسبني رايح نخليك تقرا الميساج؟؟
        المهم رايح نكتبلها هنا
    `;

    if (passwordEntered.toLowerCase() === correctPassword) {
        document.body.style.backgroundColor = "#FFF0F5";
        document.getElementById('password-container').style.display = 'none';
        const letterContainer = document.getElementById('letter-container');
        letterContainer.style.display = 'block';
        setTimeout(() => {
            letterContainer.classList.add('show');
        }, 100); // Delay to ensure display change is applied before opacity transition
        document.getElementById('letter').innerHTML = letter.replace(/\n/g, '<br>');
    } else {
        alert('Incorrect password. Please try again.');
    }
}

function openReplyForm() {
    const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSdtIUwYrYskvtmvlsIJdWm0TOKixRu3ydZExTYQIHYWgkTtwQ/viewform?usp=sf_link";
    window.open(googleFormLink, '_blank');
}
