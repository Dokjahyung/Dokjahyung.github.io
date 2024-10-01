import { updateIndicators, createIndicators } from './ui.js';
import { handleScrollShrink } from './nav.js';

// Ensure gallery items and arrows work as before
const galleryItems = document.querySelectorAll('.gallery-item');
const indicatorsContainer = document.querySelector('.indicators');
let currentIndex = 0;

function switchImage(nextIndex) {
    galleryItems[currentIndex].classList.remove('active');
    currentIndex = nextIndex;
    galleryItems[currentIndex].classList.add('active');
    updateIndicators(currentIndex, galleryItems);
}

function showPreviousImage() {
    const nextIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    switchImage(nextIndex);
}

function showNextImage() {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    switchImage(nextIndex);
}

// Handle Scroll Shrink
handleScrollShrink('#topBar', 50);

document.querySelector('.arrow.left').addEventListener('click', showPreviousImage);
document.querySelector('.arrow.right').addEventListener('click', showNextImage);

createIndicators(galleryItems, indicatorsContainer);
updateIndicators(currentIndex, galleryItems);


// Check if large section exists before attaching the video fade logic
const largeSection = document.querySelector('.large-section');
if (largeSection) {
    const video = document.getElementById('background-video');

    window.addEventListener('scroll', () => {
        const largeSectionHeight = largeSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Calculate fade-out effect: as the user scrolls down, reduce opacity
        const opacity = 1 - (scrollPosition / largeSectionHeight);
        video.style.opacity = Math.max(opacity, 0); // Ensures the opacity doesn't go below 0
    });
}

