// Register Page Animations - workshop register.html & student register.html

document.addEventListener('DOMContentLoaded', function() {
    animateFormTitleWithFlair();
    animateFormElementsWithParallax();
    setupFormValidationWithAnimations();
    setupFormStaggerAnimation();
});

function animateFormTitleWithFlair() {
    const title = document.querySelector('.registration-title, h1, h2');
    if (title && title.textContent.includes('Register')) {
        title.style.opacity = '0';
        title.style.transform = 'scale(0.5) rotateZ(-20deg)';
        title.style.animation = 'titleFlip 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }
}

function animateFormElementsWithParallax() {
    const leftColumn = document.querySelector('.left-column');
    const rightColumn = document.querySelector('.right-column');
    
    if (leftColumn) {
        leftColumn.style.opacity = '0';
        leftColumn.style.transform = 'translateX(-100px) rotateY(25deg) scale(0.9)';
        leftColumn.style.transformStyle = 'preserve-3d';
        leftColumn.style.animation = 'slideInLeftPerspective 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards';
    }
    
    if (rightColumn) {
        rightColumn.style.opacity = '0';
        rightColumn.style.transform = 'translateX(100px) rotateY(-25deg) scale(0.9)';
        rightColumn.style.transformStyle = 'preserve-3d';
        rightColumn.style.animation = 'slideInRightPerspective 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards';
    }
}

function animateFormElementsWithParallax() {
    const form = document.querySelector('.registration-form');
    
    if (form) {
        form.style.opacity = '0';
        form.style.animation = 'fadeInForm 0.8s ease-out forwards';
    }
}

function setupFormValidationWithAnimations() {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
        input.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.boxShadow = '0 0 30px rgba(52, 73, 94, 0.5), inset 0 0 10px rgba(52, 73, 94, 0.1)';
            this.style.borderColor = '#b22222';
            this.style.backgroundColor = 'rgba(255,255,255,0.95)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1) translateY(0)';
            if (!this.value) {
                this.style.boxShadow = 'none';
                this.style.borderColor = 'initial';
                this.style.backgroundColor = 'initial';
            }
        });
        
        // On successful input
        input.addEventListener('input', function() {
            if (this.value.length > 0) {
                this.style.borderColor = '#4CAF50';
                this.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.4), inset 0 0 5px rgba(76, 175, 80, 0.1)';
            } else {
                this.style.borderColor = '#ddd';
                this.style.boxShadow = 'none';
            }
        });
    });
    
    // Submit button animation
    const submitBtn = document.querySelector('input[type="submit"], button[type="submit"]');
    if (submitBtn) {
        submitBtn.style.cursor = 'pointer';
        submitBtn.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        
        submitBtn.addEventListener('click', function(e) {
            if (this.form && !this.form.checkValidity()) {
                this.style.animation = 'shake 0.5s ease-in-out';
            } else {
                this.style.animation = 'successPulse 0.6s ease-out';
            }
        });
        
        submitBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-3px)';
            this.style.boxShadow = '0 15px 40px rgba(178, 34, 34, 0.5), inset 0 1px 0 rgba(255,255,255,0.3)';
        });
        
        submitBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    }
}

function setupFormStaggerAnimation() {
    const inputGroups = document.querySelectorAll('.input-group');
    inputGroups.forEach((group, index) => {
        group.style.opacity = '0';
        group.style.animation = `slideUpStagger 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`;
        group.style.animationDelay = `${0.4 + index * 0.1}s`;
    });
}

// Add keyframes
const registerStyle = document.createElement('style');
registerStyle.textContent = `
    @keyframes titleFlip {
        0% {
            opacity: 0;
            transform: scale(0.5) rotateZ(-20deg) rotateY(90deg);
        }
        100% {
            opacity: 1;
            transform: scale(1) rotateZ(0deg) rotateY(0deg);
        }
    }
    
    @keyframes slideInLeftPerspective {
        from {
            opacity: 0;
            transform: translateX(-100px) rotateY(25deg) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
        }
    }
    
    @keyframes slideInRightPerspective {
        from {
            opacity: 0;
            transform: translateX(100px) rotateY(-25deg) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateX(0) rotateY(0deg) scale(1);
        }
    }
    
    @keyframes fadeInForm {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    
    @keyframes slideUpStagger {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
        20%, 40%, 60%, 80% { transform: translateX(8px); }
    }
    
    @keyframes successPulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
    }
    
    input, textarea, select {
        border: 2px solid #ddd;
        border-radius: 8px;
        padding: 12px;
        font-size: 14px;
        transition: all 0.3s ease;
    }
    
    input:focus, textarea:focus, select:focus {
        outline: none;
    }
`;
document.head.appendChild(registerStyle);

