// Adding a simple starry background effect using JS
document.addEventListener('DOMContentLoaded', () => {
    let starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);

    const createStars = () => {
        for (let i = 0; i < 200; i++) {
            let star = document.createElement('div');
            star.classList.add('star');
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.width = `${Math.random() * 2 + 1}px`;
            star.style.height = star.style.width;
            star.style.animationDuration = `${Math.random() * 3 + 1}s`;
            starsContainer.appendChild(star);
        }
    };

    createStars();
});
