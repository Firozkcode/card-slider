document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const cardsWrapper = document.createElement("div");
    cardsWrapper.classList.add("cards-wrapper");

    // Duplicate cards to create an infinite loop effect
    const originalCards = [...container.children];
    originalCards.forEach(card => {
        let clone = card.cloneNode(true);
        cardsWrapper.appendChild(clone);
    });
    originalCards.forEach(card => {
        cardsWrapper.appendChild(card);
    });

    container.appendChild(cardsWrapper);

    let speed = 6; // Adjust speed
    let animationRunning = true;

    function moveCards() {
        if (animationRunning) {
            cardsWrapper.scrollLeft += speed;

            // Reset scroll position when reaching the end of the duplicated cards
            if (cardsWrapper.scrollLeft >= cardsWrapper.scrollWidth / 2) {
                cardsWrapper.scrollLeft = 0; // Reset to the start
            }
        }
        requestAnimationFrame(moveCards);
    }

    // Pause auto-slide on hover
    container.addEventListener("mouseenter", () => (animationRunning = false));
    container.addEventListener("mouseleave", () => (animationRunning = true));

    moveCards();
});