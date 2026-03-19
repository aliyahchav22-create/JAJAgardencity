// Professional Animations for JAJA Garden City Website
// Enhanced with elegant transitions and sophisticated effects

// Initialize all animations on page load
document.addEventListener('DOMContentLoaded', function() {
    // Elegant page fade-in with stagger
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);

    // Animate all elements with orchestrated timing
    animateCardsWithEntrance();
    animateNavItemsWave();
    setupSmoothScroll();
    setupProfessionalButtons();
    setupElementAnimations();
});

// Sophisticated card entrance with elegant 3D effects
function animateCardsWithEntrance() {
    const cards = document.querySelectorAll('.card, .service-card, .doc-card, .branding');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) rotateX(70deg) scale(0.7)';
        card.style.transformStyle = 'preserve-3d';
        card.style.perspective = '1000px';
        card.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
        }, index * 140);
    });
}

// Elegant wave animation for navigation items
function animateNavItemsWave() {
    const navItems = document.querySelectorAll('.nav-item, .nav-container a');
    navItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `elegantWaveIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        item.style.animationDelay = `${index * 0.12}s`;
    });
}

// Professional hover effects with smooth transitions
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .service-card, .doc-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) scale(1.08) rotateX(5deg)';
            this.style.boxShadow = '0 25px 70px rgba(0,0,0,0.25), 0 0 40px rgba(178, 34, 34, 0.2)';
            this.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
        });
    });
});

// Advanced scroll reveal with elegant parallax effect
function setupSmoothScroll() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -120px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0) scale(1)';
            }
        });
    }, observerOptions);
    
    const revealElements = document.querySelectorAll('section, .main-content, .details-section, .doc-card, .service-card');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px) scale(0.95)';
        el.style.transition = 'all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });
}

// Professional hover effects on images with sophisticated filters
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img:not(.school-banner)');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) rotate(2deg)';
            this.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            this.style.filter = 'brightness(1.2) saturate(1.1) drop-shadow(0 12px 35px rgba(178, 34, 34, 0.3))';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'brightness(1) saturate(1) drop-shadow(0 2px 10px rgba(0, 0, 0, 0.1))';
        });
    });
});

// Professional button animations with elegant effects
function setupProfessionalButtons() {
    const buttons = document.querySelectorAll('button, .contact-btn, input[type="submit"]');
    buttons.forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.12) translateY(-5px)';
            this.style.boxShadow = '0 20px 50px rgba(178, 34, 34, 0.35), inset 0 1px 0 rgba(255,255,255,0.4)';
            this.style.textShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 8px 25px rgba(178, 34, 34, 0.3)';
            this.style.textShadow = 'none';
        });
        
        // Professional ripple effect on click
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('professional-ripple');
            ripple.style.animation = 'professionalRipple 0.7s ease-out';
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 700);
        });
    });
}

// Additional element animations
function setupElementAnimations() {
    // Form input animations
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.boxShadow = '0 0 25px rgba(178, 34, 34, 0.3), inset 0 0 8px rgba(178, 34, 34, 0.1)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        });
    });
    
    // Stagger animations for list items
    const listItems = document.querySelectorAll('li, .nav-item, .social-items li');
    listItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `elegantSlideInUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`;
        item.style.animationDelay = `${index * 0.12}s`;
    });
}

// Professional keyframe animations and styles
const style = document.createElement('style');
style.textContent = `
    @keyframes elegantWaveIn {
        0% {
            opacity: 0;
            transform: translateY(-25px) rotateX(90deg);
        }
        100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
        }
    }
    
    @keyframes elegantSlideInUp {
        from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.7) rotateZ(-10deg);
        }
        to {
            opacity: 1;
            transform: scale(1) rotateZ(0deg);
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.08);
        }
    }
    
    @keyframes professionalRipple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-15px);
        }
    }
    
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 8px rgba(178, 34, 34, 0.4);
        }
        50% {
            box-shadow: 0 0 25px rgba(178, 34, 34, 0.7);
        }
    }
    
    @keyframes smoothGlow {
        0%, 100% {
            text-shadow: 0 0 10px rgba(178, 34, 34, 0.3);
        }
        50% {
            text-shadow: 0 0 20px rgba(178, 34, 34, 0.6);
        }
    }
    
    /* Professional animation classes */
    .fade-in-animation {
        animation: fadeIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .slide-up-animation {
        animation: slideUp 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    .pulse-animation {
        animation: pulse 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
    }
    
    .float-animation {
        animation: float 3.5s ease-in-out infinite;
    }
    
    .glow-animation {
        animation: glow 2.5s ease-in-out infinite;
    }
    
    .smooth-glow-animation {
        animation: smoothGlow 2s ease-in-out infinite;
    }
    
    /* Professional ripple effect styling */
    .professional-ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.8);
        transform: scale(0);
        pointer-events: none;
    }
    
    /* Enhanced button styles */
    button, input[type="submit"], .contact-btn {
        position: relative;
        overflow: hidden;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        font-weight: 600;
        letter-spacing: 0.8px;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        font-family: 'Poppins', sans-serif;
    }
    
    button:before, input[type="submit"]:before, .contact-btn:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
        transition: left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 1;
    }
    
    button:hover:before, input[type="submit"]:hover:before, .contact-btn:hover:before {
        left: 100%;
    }
    
    /* Elegant link hover effects */
    a {
        transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
    
    /* Smooth scrollbar styling */
    ::-webkit-scrollbar {
        width: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(178, 34, 34, 0.05);
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(180deg, #b22222, #8b0000);
        border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(180deg, #d63636, #a01a1a);
    }
`;
document.head.appendChild(style);

