// Smooth scroll for navigation links
document.querySelectorAll('nav ul.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Simple form submission handler with alert
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        this.reset();
    } else {
        alert('Please fill in all fields before submitting.');
    }
});

// Fun interactive effect: project items scale on mouse move
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mousemove', e => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;
        item.style.transform = `translateY(-10px) rotateX(${deltaY * 10}deg) rotateY(${deltaX * 10}deg)`;
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(-10px) rotateX(0deg) rotateY(0deg)';
    });
});
