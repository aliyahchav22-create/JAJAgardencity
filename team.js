// Team Page Animations - our team.html

document.addEventListener('DOMContentLoaded', function() {
    animateSectionTitleWithUnderline();
    animateTeamCardsWithStagger();
    setupTeamCardHoverWithGlow();
});

function animateSectionTitleWithUnderline() {
    const title = document.querySelector('.section-title');
    const divider = document.querySelector('.divider');
    
    if (title) {
        title.style.opacity = '0';
        title.style.transform = 'scale(0.7) translateY(20px)';
        title.style.animation = 'scaleSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }
    
    if (divider) {
        divider.style.animation = 'expandWidthGradual 1s ease-out 0.4s forwards';
        divider.style.width = '0';
        divider.style.opacity = '0';
    }
}

function animateTeamCardsWithStagger() {
    const cards = document.querySelectorAll('.doc-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(60px) rotateY(15deg) scale(0.85)';
        card.style.transformStyle = 'preserve-3d';
        card.style.animation = `slideUpFlip 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
        card.style.animationDelay = `${0.5 + index * 0.2}s`;
    });
}

function setupTeamCardHoverWithGlow() {
    const cards = document.querySelectorAll('.doc-card');
    cards.forEach(card => {
        const imgBox = card.querySelector('.img-box');
        const infoBox = card.querySelector('.info-box');
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-20px) rotateY(0deg) scale(1.12) rotateZ(2deg)';
            this.style.boxShadow = '0 30px 70px rgba(0,0,0,0.3), 0 0 40px rgba(178, 34, 34, 0.3)';
            this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            
            if (imgBox) {
                imgBox.style.filter = 'brightness(1.25) contrast(1.2) drop-shadow(0 10px 25px rgba(178, 34, 34, 0.4))';
                imgBox.style.transform = 'scale(1.15) rotateZ(3deg)';
                imgBox.style.transition = 'all 0.4s ease';
            }
            
            if (infoBox) {
                infoBox.style.transform = 'translateY(-10px)';
                infoBox.style.transition = 'transform 0.3s ease';
            }
            
            // Add glow effect
            createGlowEffect(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateY(0deg) scale(1) rotateZ(0deg)';
            this.style.boxShadow = 'none';
            
            if (imgBox) {
                imgBox.style.filter = 'brightness(1) contrast(1)';
                imgBox.style.transform = 'scale(1) rotateZ(0deg)';
            }
            
            if (infoBox) {
                infoBox.style.transform = 'translateY(0)';
            }
            
            // Remove glow
            const glow = this.querySelector('.card-glow');
            if (glow) glow.remove();
        });
    });
}

function createGlowEffect(element) {
    if (element.querySelector('.card-glow')) return;
    
    const glow = document.createElement('div');
    glow.classList.add('card-glow');
    glow.style.position = 'absolute';
    glow.style.pointerEvents = 'none';
    glow.style.width = '100%';
    glow.style.height = '100%';
    glow.style.top = '0';
    glow.style.left = '0';
    glow.style.borderRadius = '10px';
    glow.style.background = 'radial-gradient(circle at center, rgba(178, 34, 34, 0.1) 0%, transparent 70%)';
    glow.style.animation = 'glowPulse 2s ease-in-out infinite';
    
    element.style.position = 'relative';
    element.appendChild(glow);
}

// Add keyframes
const teamStyle = document.createElement('style');
teamStyle.textContent = `
    @keyframes scaleSlideIn {
        from {
            opacity: 0;
            transform: scale(0.7) translateY(20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
    
    @keyframes expandWidthGradual {
        from {
            width: 0;
            opacity: 0;
        }
        to {
            width: 100%;
            opacity: 1;
        }
    }
    
    @keyframes slideUpFlip {
        0% {
            opacity: 0;
            transform: translateY(60px) rotateY(15deg) scale(0.85);
        }
        70% {
            opacity: 1;
            transform: translateY(-5px) rotateY(0deg) scale(1.05);
        }
        100% {
            transform: translateY(0) rotateY(0deg) scale(1);
        }
    }
    
    @keyframes glowPulse {
        0%, 100% {
            opacity: 0.5;
        }
        50% {
            opacity: 1;
        }
    }
`;
document.head.appendChild(teamStyle);

