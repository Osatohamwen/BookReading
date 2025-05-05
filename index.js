const slider = document.getElementById('slider');
const cards = document.querySelectorAll('.card');

let current = 0;

function updateCards() {
    cards.forEach((card, index) => {
        const offset = (index - current + cards.length) % cards.length;

        if (offset === 0) {
            // Center main card
            card.style.transform = 'translateX(0px) scale(1)';
            card.style.opacity = 1;
            card.style.zIndex = cards.length;
        } else {
            // Stack all others slightly to right
            const moveRight = 60 * offset; // each next card moves 60px more
            const scaleDown = 1 - offset * 0.05; // smaller as it goes deeper
            const opacityDown = 1 - offset * 0.15; // more faded

            card.style.transform = `translateX(${moveRight}px) scale(${scaleDown})`;
            card.style.opacity = opacityDown > 0 ? opacityDown : 0;
            card.style.zIndex = cards.length - offset;
        }
    });
}

function nextCard() {
    current = (current + 1) % cards.length;
    updateCards();
}

// Start
updateCards();
setInterval(nextCard, 3000);  // Change every 3s
