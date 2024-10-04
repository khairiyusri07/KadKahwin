let currentPage = 0; // Track the current page index
const totalPages = 3; // Total number of pages
let isScrolling = false;

window.addEventListener('wheel', function(event) {
    if (!isScrolling) {
        isScrolling = true;

        if (event.deltaY > 0 && currentPage < totalPages - 1) {
            currentPage++;
        } else if (event.deltaY < 0 && currentPage > 0) {
            currentPage--;
        }

        document.getElementById('page1').style.transform = `translateY(${-currentPage * 100}vh)`;
        document.getElementById('page2').style.transform = `translateY(${-currentPage * 100}vh)`;
        document.getElementById('page3').style.transform = `translateY(${-currentPage * 100}vh)`;

        setTimeout(() => {
            isScrolling = false;
        }, 500); 
    }
});

// Initialize the second and third pages to be off-screen
document.getElementById('page2').style.transform = 'translateY(100vh)';
document.getElementById('page3').style.transform = 'translateY(100vh)';
