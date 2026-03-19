// About Page Animations - About us Garden City.html

document.addEventListener('DOMContentLoaded', function() {
    animateIntroSectionWithParallax();
    animateDetailsColumnsStaggered();
    animateImagesWithEffects();
    setupHeadingAnimations();
});

function animateIntroSectionWithParallax() {
    const introText = document.querySelector('.intro-text');
    const introImage = document.querySelector('.intro-image');
    
    if (introText) {
        introText.style.opacity = '0';
        introText.style.transform = 'translateX(-80px) skewY(5deg)';
        introText.style.animation = 'slideInLeftSkew 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }
    
    if (introImage) {
        introImage.style.opacity = '0';
        introImage.style.transform = 'translateX(80px) skewY(-5deg)';
        introImage.style.animation = 'slideInRightSkew 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }
}

function animateDetailsColumnsStaggered() {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column, index) => {
        column.style.opacity = '0';
        column.style.transform = 'translateY(60px) rotateX(-20deg) scale(0.9)';
        column.style.transformStyle = 'preserve-3d';
        column.style.animation = `slideUpRotate 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
        column.style.animationDelay = `${0.3 + index * 0.25}s`;
        
        // Add hover lift effect
        column.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) rotateX(0deg) scale(1.02)';
            this.style.boxShadow = '0 20px 50px rgba(52, 73, 94, 0.2)';
            this.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });
        
        column.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
            this.style.boxShadow = 'none';
        });
    });
}

function animateImagesWithEffects() {
    const images = document.querySelectorAll('.intro-image img');
    images.forEach(img => {
        img.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        img.style.borderRadius = '10px';
        
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.15) rotate(3deg) translateZ(20px)';
            this.style.filter = 'brightness(1.2) contrast(1.15) drop-shadow(0 15px 35px rgba(52, 73, 94, 0.4))';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
            this.style.filter = 'brightness(1) contrast(1)';
        });
    });
}

function setupHeadingAnimations() {
    const headings = document.querySelectorAll('.column h2');
    headings.forEach((heading, index) => {
        heading.style.opacity = '0';
        heading.style.animation = `textScaleIn 0.8s ease-out forwards`;
        heading.style.animationDelay = `${0.5 + index * 0.3}s`;
        
        heading.addEventListener('mouseenter', function() {
            this.style.color = '#b22222';
            this.style.textShadow = '0 0 15px rgba(178, 34, 34, 0.3)';
            this.style.transform = 'scale(1.05) skewX(-2deg)';
            this.style.transition = 'all 0.3s ease';
        });
        
        heading.addEventListener('mouseleave', function() {
            this.style.color = 'inherit';
            this.style.textShadow = 'none';
            this.style.transform = 'scale(1) skewX(0deg)';
        });
    });
}

// Add keyframes
const aboutStyle = document.createElement('style');
aboutStyle.textContent = `
    @keyframes slideInLeftSkew {
        from {
            opacity: 0;
            transform: translateX(-80px) skewY(5deg) rotateZ(-2deg);
        }
        to {
            opacity: 1;
            transform: translateX(0) skewY(0deg) rotateZ(0deg);
        }
    }
    
    @keyframes slideInRightSkew {
        from {
            opacity: 0;
            transform: translateX(80px) skewY(-5deg) rotateZ(2deg);
        }
        to {
            opacity: 1;
            transform: translateX(0) skewY(0deg) rotateZ(0deg);
        }
    }
    
    @keyframes slideUpRotate {
        from {
            opacity: 0;
            transform: translateY(60px) rotateX(-20deg) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
        }
    }
    
    @keyframes textScaleIn {
        0% {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
`;
document.head.appendChild(aboutStyle);

