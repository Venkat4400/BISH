// ========== MENU TOGGLE ==========
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    if (!nav.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ========== INTERSECTION OBSERVER (Scroll Animation) ==========
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-in forwards';
        }
    });
}, observerOptions);

document.querySelectorAll('.event-card, .sponsor-logo').forEach(element => {
    observer.observe(element);
});

// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
    const countdownEl = document.getElementById('countdown1');
    if (countdownEl) {
        const days = countdownEl.querySelector('.countdown-item:nth-child(1) .countdown-number');
        const hours = countdownEl.querySelector('.countdown-item:nth-child(2) .countdown-number');
        const mins = countdownEl.querySelector('.countdown-item:nth-child(3) .countdown-number');
        
        setInterval(() => {
            let m = parseInt(mins.textContent);
            let h = parseInt(hours.textContent);
            let d = parseInt(days.textContent);
            
            if (m > 0) {
                mins.textContent = String(m - 1).padStart(2, '0');
            } else {
                mins.textContent = '59';
                if (h > 0) {
                    hours.textContent = String(h - 1).padStart(2, '0');
                } else {
                    hours.textContent = '23';
                    if (d > 0) {
                        days.textContent = String(d - 1).padStart(2, '0');
                    }
                }
            }
        }, 60000); // Update every minute
    }
}

// Initialize countdown on page load
document.addEventListener('DOMContentLoaded', updateCountdown);
