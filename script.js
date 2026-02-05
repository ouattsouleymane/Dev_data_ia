//  creation du bouton
document.addEventListener('DOMContentLoaded', function() {
    createInteractiveButton();
    animateOnScroll();
    
    initThemeToggle();
});

// bouton
function createInteractiveButton() {
    const firstSection = document.querySelector('section');
    
    // Créer le bouton
    const button = document.createElement('button');
    button.textContent = 'Afficher un message';
    button.className = 'interactive-btn';
    button.id = 'msgButton';
    
    const paragraph = firstSection.querySelector('p');
    paragraph.parentNode.insertBefore(button, paragraph);
    
    button.addEventListener('click', displayMessage);
}

// affiche du message au click
function displayMessage() {
    const name = 'Ouattara Souleymane';
    const message = `Bienvenue ! Je suis ${name}, heureux de vous accueillir sur mon site web. J'espère que vous y trouverez des informations intéressantes et utiles. N'hésitez pas à explorer et à me contacter si vous avez des questions !`;
    alert(message);
    
}

// animation lors du schrool
function animateOnScroll() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, 
    {
        threshold: 0.1
    });
    
    sections.forEach(section => observer.observe(section));
}

// 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// mode sombre
function initThemeToggle() {
    const themeBtn = document.getElementById('themeToggle');
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeBtn.textContent = '☀️';
    }
    
    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Mettre à jour l'icône
        if (document.body.classList.contains('dark-mode')) {
            themeBtn.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeBtn.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
}

