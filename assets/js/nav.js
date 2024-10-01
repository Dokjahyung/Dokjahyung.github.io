// Scroll module to handle shrinking behavior of the top bar
export function handleScrollShrink(topBarSelector, shrinkHeight = 50) {
    document.addEventListener('DOMContentLoaded', () => {
        const topBar = document.querySelector(topBarSelector);
        const menuText = document.querySelector('.navlinks');

        if (!topBar) {
            console.error(`Element not found: ${topBarSelector}`);
            return;
        }
        // Function to apply shrink behavior on scroll
        function onScroll() {
            if (window.scrollY > shrinkHeight) {
                topBar.classList.add('shrunk');
                menuText.classList.add('shrunk');
                console.log('Shrinking: top bar and menu');
            } else {
                topBar.classList.remove('shrunk');
                menuText.classList.remove('shrunk');
                console.log('Restoring: top bar and menu');
            }
        }

        // Attach the scroll event listener
        window.addEventListener('scroll', onScroll);
    });
}

