document.addEventListener('DOMContentLoaded', function() {
    // Get elements using different methods
    const header = document.querySelector('header');
    const menuItems = document.getElementsByClassName('menu-option'); // getElementsByClassName
    const contactForm = document.getElementById('contact-form');
    const footer = document.querySelector('footer');
    const paragraphs = document.getElementsByTagName('p'); // getElementsByTagName

    for (const paragraph of paragraphs) {
        paragraph.addEventListener('click', function() {
            alert('Ви натиснули на абзац: ' + paragraph.textContent);
        });
    }

    // Add events for menu items
    Array.from(menuItems).forEach(option => {
        option.addEventListener('click', function() {
            option.classList.toggle('highlight');
        });
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Форма надіслана');
    });
});
