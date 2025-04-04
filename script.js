// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetId === 'resume') {
            // Open resume in a new tab
            window.open('https://drive.google.com/file/d/1U9kUpXe-WTidhP_neeQzC9qiIUE19vhE/view?usp=sharing', '_blank');
        } else {
            // Smooth scroll to other sections
            window.scrollTo({
                top: targetSection.offsetTop - 60, // Adjust for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});

// Contact button in navbar scrolls to contact section
document.querySelector('.contact-btn').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// "Get In Touch" and "Say Hello" buttons scroll to contact section
document.querySelectorAll('.cta-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});