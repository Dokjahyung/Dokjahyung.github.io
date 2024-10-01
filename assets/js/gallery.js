const Gallery = (() => {
    let currentIndex = 0;
    const galleryItems = document.querySelectorAll('.gallery-item');
    const indicatorsContainer = document.querySelector('.indicators');

    function switchImage(nextIndex) {
        galleryItems[currentIndex].classList.remove('active');
        currentIndex = nextIndex;
        galleryItems[currentIndex].classList.add('active');
        updateIndicators();
    }

    function showPreviousImage() {
        const nextIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        switchImage(nextIndex);
    }

    function showNextImage() {
        const nextIndex = (currentIndex + 1) % galleryItems.length;
        switchImage(nextIndex);
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function createIndicators() {
        galleryItems.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            indicator.addEventListener('click', () => switchImage(index));
            indicatorsContainer.appendChild(indicator);
        });
    }

    return {
        init() {
            document.querySelector('.arrow.left').addEventListener('click', showPreviousImage);
            document.querySelector('.arrow.right').addEventListener('click', showNextImage);
            createIndicators();
            updateIndicators();
        }
    };
})();

Gallery.init();
