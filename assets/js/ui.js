export function updateIndicators(currentIndex, galleryItems) {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

export function createIndicators(galleryItems, indicatorsContainer) {
    galleryItems.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => switchImage(index));
        indicatorsContainer.appendChild(indicator);
    });
}
