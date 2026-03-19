// ===== LOCATION PAGE ANIMATIONS =====

// Smooth scroll reveal for info cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all info cards
document.querySelectorAll('.info-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    observer.observe(card);
});

// Add hover ripple effect to cards
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'radial-gradient(circle, rgba(218, 196, 127, 0.6), transparent)';
        ripple.style.borderRadius = '50%';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'rippleEffect 0.6s ease-out';
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple effect keyframe animation
if (!document.querySelector('style[data-ripple]')) {
    const style = document.createElement('style');
    style.setAttribute('data-ripple', 'true');
    style.innerHTML = `
        @keyframes rippleEffect {
            from {
                width: 20px;
                height: 20px;
                opacity: 1;
            }
            to {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Directions button enhanced interaction
const directionsBtn = document.querySelector('.directions-btn');
if (directionsBtn) {
    directionsBtn.addEventListener('click', function(e) {
        // Add click animation
        this.style.animation = 'buttonClick 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        setTimeout(() => {
            this.style.animation = 'none';
        }, 600);
    });
}

// Add button click animation
if (!document.querySelector('style[data-button]')) {
    const style = document.createElement('style');
    style.setAttribute('data-button', 'true');
    style.innerHTML = `
        @keyframes buttonClick {
            0% {
                transform: scale(1.1) translateY(-4px);
            }
            50% {
                transform: scale(1.08) translateY(-2px);
            }
            100% {
                transform: scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Page load entrance animation
window.addEventListener('load', function() {
    const header = document.querySelector('.location-header');
    const mapSection = document.querySelector('.map-section');
    
    if (header) {
        header.style.animation = 'slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    }
    
    if (mapSection) {
        mapSection.style.animation = 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s both';
    }
});

// Smooth navigation active state
document.querySelectorAll('.nav-item').forEach(link => {
    if (link.href.includes('our location')) {
        link.classList.add('active');
    }
});

// Add glow effect on navigation hover
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.textShadow = '0 0 15px rgba(178, 34, 34, 0.4)';
    });
    
    link.addEventListener('mouseleave', function() {
        if (!this.classList.contains('active')) {
            this.style.textShadow = 'none';
        }
    });
});
