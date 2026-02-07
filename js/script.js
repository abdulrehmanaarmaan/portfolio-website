document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('animate-slide-down');
        void mobileMenu.offsetWidth; // reset animation

        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('animate-slide-down'); // optional CSS animation
    });
})

// Auto-close mobile menu when link clicked
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


(function () {
    emailjs.init("EDWcOyk5YgrEkHns7"); // paste public key here
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_5q1pb9o",   // paste service id
        "template_9ewlj39",  // paste template id
        this
    )
        .then(function () {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert("Failed to send message. Try again.");
            console.log(error);
        });
});
