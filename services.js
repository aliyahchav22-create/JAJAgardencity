// Services/Subjects Page Animations - our services.html & our subjects.html

document.addEventListener('DOMContentLoaded', function() {
    animateTitleWithScale();
    animateServiceCardsWithBounce();
    setupServiceCardHoverWithRipple();
});

function animateTitleWithScale() {
    const title = document.querySelector('.main-title');
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'scale(0.3) rotateZ(-15deg)';
        title.style.animation = 'bounceZoomIn 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
        
        // Add text split animation
        const text = title.textContent;
        title.innerHTML = text.split('').map((char, i) => 
            `<span style="animation: charPop 0.6s ease-out ${i * 0.05}s forwards; opacity: 0; display: inline-block;">${char}</span>`
        ).join('');
    }
}

function animateServiceCardsWithBounce() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(80px) scale(0.8)';
        card.style.animation = `elasticSlideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
        card.style.animationDelay = `${0.2 + index * 0.12}s`;
    });
}

function setupServiceCardHoverWithRipple() {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const imageBox = card.querySelector('.image-box');
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) rotateZ(3deg) scale(1.08)';
            this.style.boxShadow = '0 25px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)';
            this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            if (imageBox) {
                imageBox.style.transform = 'scale(1.2) rotate(5deg)';
                imageBox.style.filter = 'brightness(1.2)';
                imageBox.style.transition = 'all 0.4s ease';
            }
            
            // Create ripple effect
            createRippleEffect(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateZ(0deg) scale(1)';
            this.style.boxShadow = 'none';
            
            if (imageBox) {
                imageBox.style.transform = 'scale(1) rotate(0deg)';
                imageBox.style.filter = 'brightness(1)';
            }
        });
    });
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.style.position = 'absolute';
    ripple.style.pointerEvents = 'none';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    ripple.style.borderRadius = '50%';
    ripple.style.top = '50%';
    ripple.style.left = '50%';
    ripple.style.transform = 'translate(-50%, -50%)';
    ripple.style.animation = 'rippleExpand 0.6s ease-out forwards';
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Add keyframes
const servicesStyle = document.createElement('style');
servicesStyle.textContent = `
    @keyframes bounceZoomIn {
        0% {
            opacity: 0;
            transform: scale(0.3) rotateZ(-15deg);
        }
        70% {
            opacity: 1;
            transform: scale(1.15) rotateZ(2deg);
        }
        100% {
            transform: scale(1) rotateZ(0deg);
        }
    }
    
    @keyframes elasticSlideUp {
        0% {
            opacity: 0;
            transform: translateY(80px) scale(0.8);
        }
        70% {
            opacity: 1;
            transform: translateY(-10px) scale(1.05);
        }
        100% {
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes charPop {
        0% {
            opacity: 0;
            transform: scale(0) translateY(20px) rotateZ(-20deg);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0) rotateZ(0deg);
        }
    }
    
    @keyframes rippleExpand {
        0% {
            width: 20px;
            height: 20px;
            opacity: 1;
        }
        100% {
            width: 300px;
            height: 300px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(servicesStyle);

