document.addEventListener('DOMContentLoaded', function() {
    // Get elements using different methods
    const header = document.querySelector('header');
    const menuItems = document.getElementsByClassName('menu-option'); // getElementsByClassName
    const contactForm = document.getElementById('contact-form');
    const footer = document.querySelector('footer');
    const paragraphs = document.getElementsByTagName('p'); // getElementsByTagName
    const themeToggle = document.getElementById('themeToggle'); // Get the theme toggle button

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for theme toggle
    themeToggle.addEventListener('click', function() {
        document.body.style.backgroundColor = getRandomColor();
    });

    for (const paragraph of paragraphs) {
        paragraph.addEventListener('click', function() {
            alert('Ви натиснули на абзац: ' + paragraph.textContent);
        });
    }

    // Add events for menu items
    Array.from(menuItems).forEach(option => {
        option.onclick = function() {
            option.classList.toggle('highlight');
        };
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Форма надіслана');
    });
});
