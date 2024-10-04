let currentPage = 0; // Track the current page index
const totalPages = 3; // Total number of pages
let isScrolling = false;
let startY = 0; // Starting Y coordinate of touch
let endY = 0;   // Ending Y coordinate of touch

window.addEventListener('wheel', function(event) {
    if (!isScrolling) {
        isScrolling = true;

        if (event.deltaY > 0 && currentPage < totalPages - 1) {
            currentPage++;
        } else if (event.deltaY < 0 && currentPage > 0) {
            currentPage--;
        }

        updatePageScroll();

        setTimeout(() => {
            isScrolling = false;
        }, 500); 
    }
});

// Handle touch events (for mobile)
window.addEventListener('touchstart', function(event) {
    startY = event.touches[0].clientY; // Get starting Y coordinate when touch begins
});

window.addEventListener('touchmove', function(event) {
    endY = event.touches[0].clientY; // Get Y coordinate as touch moves
});

window.addEventListener('touchend', function() {
    if (!isScrolling) {
        isScrolling = true;

        // Determine scroll direction based on touch swipe distance
        if (startY - endY > 50 && currentPage < totalPages - 1) {
            // Swipe up (scroll down)
            currentPage++;
        } else if (endY - startY > 50 && currentPage > 0) {
            // Swipe down (scroll up)
            currentPage--;
        }

        updatePageScroll();

        // Reset scrolling state after transition
        setTimeout(() => {
            isScrolling = false;
        }, 500); // Match with transition duration
    }
});


// Function to update page scroll based on the current page
function updatePageScroll() {
    document.getElementById('page1').style.transform = `translateY(${-currentPage * 100}vh)`;
    document.getElementById('page2').style.transform = `translateY(${-currentPage * 100}vh)`;
    document.getElementById('page3').style.transform = `translateY(${-currentPage * 100}vh)`;
}


// Initialize the second and third pages to be off-screen
document.getElementById('page2').style.transform = 'translateY(100vh)';
document.getElementById('page3').style.transform = 'translateY(100vh)';
