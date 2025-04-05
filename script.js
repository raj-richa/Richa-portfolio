// Smooth scrolling for navigation links and Contact Me (both button and menu link)
document.querySelectorAll('.nav-links a, .contact-btn, .contact-link').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        let targetId;
        if (this.classList.contains('contact-btn') || this.classList.contains('contact-link')) {
            targetId = 'contact'; // Contact Me scrolls to #contact
        } else {
            targetId = this.getAttribute('href').substring(1);
        }
        const targetSection = document.getElementById(targetId);

        if (targetId === 'resume') {
            window.open('https://drive.google.com/file/d/1U9kUpXe-WTidhP_neeQzC9qiIUE19vhE/view?usp=sharing', '_blank');
        } else {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
        // Close menu on click (if in hamburger menu)
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// "Get In Touch" and "Say Hello" buttons scroll to contact section
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});

// Hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});