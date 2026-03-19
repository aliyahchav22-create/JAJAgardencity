// ===== PROFESSIONAL HOME PAGE ANIMATIONS =====
// Enhanced with elegant transitions and sophisticated effects

document.addEventListener('DOMContentLoaded', function() {
    animateHeroSection();
    animateFeaturesSection();
    animateCtaSection();
    animateFooterSection();
    setupInteractiveEffects();
    setupSmoothScrollReveal();
    animateNavigationBar();
});

// Elegant hero section entrance
function animateHeroSection() {
    const heroSection = document.querySelector('.hero-section');
    const brandingSection = document.querySelector('.branding-section');
    const mainTitle = document.querySelector('.main-title');
    const tagline = document.querySelector('.tagline');
    const welcomeBadge = document.querySelector('.welcome-badge');
    
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(50px)';
        heroSection.style.animation = 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
    }
    
    if (mainTitle) {
        mainTitle.style.opacity = '0';
        mainTitle.style.animation = 'slideDown 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards';
    }
    
    if (tagline) {
        tagline.style.opacity = '0';
        tagline.style.animation = 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards';
    }
    
    if (welcomeBadge) {
        welcomeBadge.style.opacity = '0';
        welcomeBadge.style.animation = 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards';
    }
}

// Animate features cards with stagger
function animateFeaturesSection() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.animation = `fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${0.8 + index * 0.15}s forwards`;
    });
}

// Animate CTA section
function animateCtaSection() {
    const ctaSection = document.querySelector('.cta-section');
    
    if (ctaSection) {
        ctaSection.style.opacity = '0';
        ctaSection.style.animation = 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards';
    }
}

// Interactive ripple effects
function setupInteractiveEffects() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 40px 100px rgba(178, 34, 34, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.1)';
        });
    });
}

// Smooth scroll reveal
function setupSmoothScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.feature-card, .cta-section').forEach(el => {
        observer.observe(el);
    });
}

// Animate navigation bar on scroll
function animateNavigationBar() {
    let lastScrollTop = 0;
    const navbar = document.querySelector('.white-navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        } else {
            // Scrolling up
            navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.08)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Add animations to stylesheet if not present
if (!document.querySelector('style[data-home-animations]')) {
    // Animate footer section on scroll
    function animateFooterSection() {
        const footer = document.querySelector('.elegant-footer');
        const footerSections = document.querySelectorAll('.footer-section');
        
        const footerObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });
        
        if (footer) {
            footer.style.opacity = '0';
            footer.style.animation = 'fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
        }
        
        footerSections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
        });
    }
    
    // Interactive footer effects
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 25px rgba(178, 34, 34, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = 'none';
        });
    });
    
    // Footer button hover effect
    const footerBtn = document.querySelector('.footer-contact-btn');
    if (footerBtn) {
        footerBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        footerBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
    
    // Footer links animation
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.paddingLeft = '24px';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.paddingLeft = '16px';
        });
    });
    
    const style = document.createElement('style');
    style.setAttribute('data-home-animations', 'true');
    style.innerHTML = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
        }
        
        @keyframes floatLogo {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
    `;
    document.head.appendChild(style);
}

// Elegant header entrance with 3D perspective
function animateHeaderEntrance() {
    const header = document.querySelector('.site-header');
    if (header) {
        header.style.opacity = '0';
        header.style.transform = 'translateY(-80px) rotateX(25deg)';
        header.style.transformStyle = 'preserve-3d';
        header.style.perspective = '1200px';
        header.style.animation = 'elegantSlideDownRotate 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
    }
    
    const h1 = document.querySelector('.header-text h1');
    const h2 = document.querySelector('.header-text h2');
    const mascot = document.querySelector('.mascot');
    
    if (h1) {
        h1.style.animation = 'professionalTextRevealScale 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s forwards';
        h1.style.opacity = '0';
        h1.style.letterSpacing = '2px';
    }
    if (h2) {
        h2.style.animation = 'professionalTextRevealScale 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.8s forwards';
        h2.style.opacity = '0';
    }
    if (mascot) {
        mascot.style.animation = 'professionalTextRevealScale 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.1s forwards';
        mascot.style.opacity = '0';
    }
}

// Professional branding animation with elegant effects
function animateBrandingWithEffects() {
    const branding = document.querySelector('.branding');
    if (branding) {
        branding.style.opacity = '0';
        branding.style.transform = 'scale(0.5) rotateZ(-20deg)';
        branding.style.animation = 'professionalElasticZoom 1.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.3s forwards';
    }
    
    const logoCircle = document.querySelector('.logo-circle');
    if (logoCircle) {
        logoCircle.style.animation = 'elegantFloat 4.5s ease-in-out infinite 1.3s';
        
        // Add sophisticated glow effect on hover
        logoCircle.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 50px rgba(178, 34, 34, 0.6), 0 0 100px rgba(52, 73, 94, 0.4)';
            this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            this.style.filter = 'brightness(1.15)';
        });
        
        logoCircle.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            this.style.filter = 'brightness(1)';
        });
    }
}

function animateStatusBadgeFloat() {
    const badge = document.querySelector('.open-badge, .status');
    if (badge) {
        badge.style.animation = 'floatPulse 3s ease-in-out infinite';
    }
}

function setupSocialItemsHoverWithStagger() {
    const socialItems = document.querySelectorAll('.social-items li');
    socialItems.forEach((item, index) => {
        item.style.animation = `slideInLeft 0.6s ease-out forwards`;
        item.style.animationDelay = `${1.5 + index * 0.15}s`;
        item.style.opacity = '0';
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(20px) scale(1.08)';
            this.style.boxShadow = '0 10px 30px rgba(52, 73, 94, 0.3)';
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

function setupTextReveal() {
    const textElements = document.querySelectorAll('h1, h2, p');
    textElements.forEach((el, index) => {
        if (el.closest('.header-text') || el.closest('.branding')) {
            el.style.cursor = 'pointer';
            el.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            el.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.08) rotateX(-5deg)';
                this.style.textShadow = '0 0 25px rgba(178, 34, 34, 0.4)';
                this.style.letterSpacing = '1px';
            });
            
            el.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotateX(0deg)';
                this.style.textShadow = 'none';
                this.style.letterSpacing = 'normal';
            });
        }
    });
}

// Add function for header hover effects
function setupHeaderHoverEffects() {
    const banner = document.querySelector('.school-banner');
    if (banner) {
        banner.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(1deg)';
            this.style.filter = 'brightness(1.1) saturate(1.15)';
            this.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        banner.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'brightness(1) saturate(1)';
        });
    }
}

// Professional keyframes for home page animations
const homeStyle = document.createElement('style');
homeStyle.textContent = `
    @keyframes elegantSlideDownRotate {
        from {
            opacity: 0;
            transform: translateY(-80px) rotateX(25deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
        }
    }
    
    @keyframes professionalTextRevealScale {
        0% {
            opacity: 0;
            transform: scale(0.7) translateY(30px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    @keyframes professionalElasticZoom {
        0% {
            opacity: 0;
            transform: scale(0.3) rotateZ(-35deg);
        }
        70% {
            opacity: 1;
            transform: scale(1.15) rotateZ(5deg);
        }
        100% {
            transform: scale(1) rotateZ(0deg);
        }
    }
    
    @keyframes elegantFloat {
        0%, 100% {
            transform: translateY(-25px) rotateZ(-1deg);
        }
        25% {
            transform: translateY(-38px) rotateZ(2deg);
        }
        50% {
            transform: translateY(-15px) rotateZ(-1.5deg);
        }
        75% {
            transform: translateY(-35px) rotateZ(1deg);
        }
    }
    
    @keyframes floatPulse {
        0%, 100% {
            transform: translateY(-8px) scale(1);
        }
        50% {
            transform: translateY(-20px) scale(1.12);
        }
    }
    
    @keyframes profesionalSlideInLeft {
        from {
            opacity: 0;
            transform: translateX(-60px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateX(0) scale(1);
        }
    }
    
    @keyframes slideDownRotate {
        from {
            opacity: 0;
            transform: translateY(-60px) rotateX(20deg);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
        }
    }
    
    @keyframes textRevealScale {
        0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    @keyframes elasticZoomIn {
        0% {
            opacity: 0;
            transform: scale(0.3) rotateZ(-30deg);
        }
        70% {
            opacity: 1;
            transform: scale(1.1) rotateZ(5deg);
        }
        100% {
            transform: scale(1) rotateZ(0deg);
        }
    }
    
    @keyframes float {
        0%, 100% {
            transform: translateY(-20px) rotateZ(0deg);
        }
        25% {
            transform: translateY(-30px) rotateZ(2deg);
        }
        50% {
            transform: translateY(-15px) rotateZ(-2deg);
        }
        75% {
            transform: translateY(-28px) rotateZ(1deg);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(homeStyle);

