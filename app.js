// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initNavigation();
    initTypingAnimation();
    initScrollAnimations();
    initCounterAnimations();
    initTestimonialSlider();
    initContactForm();
    initSmoothScrolling();
    initHeroButtons();
    initSocialLinks();
    initWellnessSurvey(); // Add wellness survey initialization
});

// Wellness Survey Integration Class
// Wellness Survey Integration Class
class WellnessSurvey {
  constructor() {
    this.isOpen = false;
    this.surveyUrl = '/themed-wellness-survey.html';
    this.init();
  }

  init() {
    this.bindEvents();
    this.showTrigger();
  }

  bindEvents() {
    const trigger = document.getElementById('surveyTrigger');
    const modal = document.getElementById('surveyModal');
    const closeBtn = document.getElementById('surveyClose');
    const iframe = document.getElementById('surveyIframe');
    const loading = document.getElementById('surveyLoading');
    const successOverlay = document.getElementById('surveySuccess');

    if (!trigger || !modal || !closeBtn || !iframe || !loading || !successOverlay) {
      console.error('Missing elements:', {
        trigger: !!trigger,
        modal: !!modal,
        closeBtn: !!closeBtn,
        iframe: !!iframe,
        loading: !!loading,
        successOverlay: !!successOverlay
      });
      return;
    }

    trigger.addEventListener('click', () => {
      console.log('Survey button clicked');
      this.openSurvey();
    });

    closeBtn.addEventListener('click', () => this.closeSurvey());

    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeSurvey();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.closeSurvey();
    });

    iframe.addEventListener('load', () => {
      console.log('Iframe loaded');
      loading.style.display = 'none';
      iframe.style.display = 'block';
    });

    iframe.addEventListener('error', () => {
      console.error('Iframe failed to load');
      alert('Failed to load survey. Please try again.');
      this.closeSurvey();
    });

    window.addEventListener('message', (e) => {
      if (e.data.type === 'surveyCompleted') {
        successOverlay.style.display = 'flex';
        setTimeout(() => {
          this.closeSurvey();
          successOverlay.style.display = 'none';
        }, 3000);
      } else if (e.data.type === 'closeSurvey') {
        this.closeSurvey();
      }
    });
  }

  openSurvey() {
    const modal = document.getElementById('surveyModal');
    const iframe = document.getElementById('surveyIframe');
    const loading = document.getElementById('surveyLoading');

    modal.classList.add('active');
    this.isOpen = true;
    loading.style.display = 'flex';
    iframe.style.display = 'none';
    iframe.src = this.surveyUrl + '?t=' + Date.now();
    document.body.style.overflow = 'hidden';
  }

  closeSurvey() {
    const modal = document.getElementById('surveyModal');
    modal.classList.remove('active');
    this.isOpen = false;
    document.body.style.overflow = 'auto';
  }

  showTrigger() {
    const trigger = document.getElementById('surveyTrigger');
    if (trigger) {
      trigger.style.display = 'inline-flex';
      trigger.style.visibility = 'visible';
      trigger.style.opacity = '1';
      trigger.classList.add('animate-on-scroll');
    } else {
      console.error('Survey trigger not found');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new WellnessSurvey();
});

function initWellnessSurvey() {
    if (document.getElementById('surveyTrigger')) {

        const trigger = document.getElementById('surveyTrigger');
        if (trigger) {
            trigger.addEventListener('mouseenter', () => {
                trigger.style.transform = 'translateY(-4px) scale(1.05)';
            });
            trigger.addEventListener('mouseleave', () => {
                trigger.style.transform = 'translateY(0) scale(1)';
            });

            setInterval(() => {
                if (!document.getElementById('surveyModal').classList.contains('active')) {
                    trigger.style.animation = 'none';
                    setTimeout(() => {
                        trigger.style.animation = 'surveyPulse 3s ease-in-out infinite';
                    }, 100);
                }
            }, 30000);
        }
    }
}

// Only call this ONCE!
function initWellnessSurvey() {
    if (document.getElementById('surveyTrigger')) {

        // Enhanced trigger button interactions
        const trigger = document.getElementById('surveyTrigger');
        if (trigger) {
            trigger.addEventListener('mouseenter', () => {
                trigger.style.transform = 'translateY(-4px) scale(1.05)';
            });
            trigger.addEventListener('mouseleave', () => {
                trigger.style.transform = 'translateY(0) scale(1)';
            });
            setInterval(() => {
                if (!document.getElementById('surveyModal').classList.contains('active')) {
                    trigger.style.animation = 'none';
                    setTimeout(() => {
                        trigger.style.animation = 'surveyPulse 3s ease-in-out infinite';
                    }, 100);
                }
            }, 30000);
        }
    }
}

// Initialize Wellness Survey
function initWellnessSurvey() {
    // Check if survey elements exist in DOM
    if (document.getElementById('surveyTrigger')) {

        
        // Enhanced trigger button interactions
        const trigger = document.getElementById('surveyTrigger');
        if (trigger) {
            // Add hover sound effect (optional)
            trigger.addEventListener('mouseenter', () => {
                trigger.style.transform = 'translateY(-4px) scale(1.05)';
            });
            
            trigger.addEventListener('mouseleave', () => {
                trigger.style.transform = 'translateY(0) scale(1)';
            });

            // Periodic attention-grabbing animation
            setInterval(() => {
                if (!document.getElementById('surveyModal').classList.contains('active')) {
                    trigger.style.animation = 'none';
                    setTimeout(() => {
                        trigger.style.animation = 'surveyPulse 3s ease-in-out infinite';
                    }, 100);
                }
            }, 30000); // Every 30 seconds
        }
    }
}

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) return;

    // Toggle mobile menu
    navToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(19, 52, 59, 0.98)';
            } else {
                navbar.style.background = 'rgba(19, 52, 59, 0.95)';
            }
        }
    });
}

// Typing animation for hero tagline
function initTypingAnimation() {
    const typingText = document.getElementById('typingText');
    if (!typingText) return;

    const texts = [
        'Wellness begins with what you choose daily.',
        'Helping families rethink hydration, energy & EMF awareness.',
        'Your trusted Kangen Water global distributor.',
        'Transform your health, transform your life.'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; // Pause before next text
        }

        setTimeout(typeText, typeSpeed);
    }

    typeText();
}

// Initialize hero buttons
function initHeroButtons() {
    // Start Your Wellness Journey button
    const heroCtaBtn = document.querySelector('a[href="#contact"]');
    if (heroCtaBtn) {
        heroCtaBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const offsetTop = contactSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    // WhatsApp Consultation button in hero
    const heroWhatsAppBtn = document.querySelector('.hero-buttons a[href*="whatsapp"]');
    if (heroWhatsAppBtn) {
        heroWhatsAppBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = encodeURIComponent('नमस्ते Tejesh जी! मैं आपसे wellness consultation के बारे में बात करना चाहता हूं।');
            const whatsappURL = `https://api.whatsapp.com/send?phone=918770343316&text=${message}`;
            window.open(whatsappURL, '_blank');
        });
    }
}

// Initialize social links
function initSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
        
        // Add click handler for WhatsApp link specifically
        if (link.href.includes('whatsapp')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const message = encodeURIComponent('नमस्ते Tejesh जी! मैं आपसे wellness के बारे में बात करना चाहता हूं।');
                const whatsappURL = `https://api.whatsapp.com/send?phone=918770343316&text=${message}`;
                window.open(whatsappURL, '_blank');
            });
        }
    });

    // Also handle resource links
    const resourceButtons = document.querySelectorAll('.resource-card .btn');
    resourceButtons.forEach(btn => {
        if (!btn.hasAttribute('target')) {
            btn.setAttribute('target', '_blank');
        }
    });

    // Handle service links
    const serviceLinks = document.querySelectorAll('.service-link');
    serviceLinks.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
    });

    // Handle blog links
    const blogLinks = document.querySelectorAll('.blog-link');
    blogLinks.forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
        }
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Add animate-on-scroll class to elements
    const animatedElements = document.querySelectorAll(
        '.wellness-card, .service-card, .resource-card, .contact-item, .social-link'
    );
    
    animatedElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Counter animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const increment = target / 100;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    if (target >= 1000) {
                        counter.textContent = Math.floor(current) + '+';
                    } else if (target === 24) {
                        counter.textContent = Math.floor(current) + '/7';
                    } else {
                        counter.textContent = Math.floor(current) + '+';
                    }
                }, 20);

                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.7 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Testimonial slider
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    if (testimonials.length === 0) return;

    function showSlide(index) {
        // Hide all testimonials
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('active');
        });

        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Show current testimonial and activate dot
        if (testimonials[index]) {
            testimonials[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonials.length;
        showSlide(currentSlide);
    }

    function startSlideShow() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function stopSlideShow() {
        if (slideInterval) {
            clearInterval(slideInterval);
        }
    }

    // Initialize first slide
    showSlide(0);

    // Add click listeners to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.preventDefault();
            currentSlide = index;
            showSlide(currentSlide);
            stopSlideShow();
            startSlideShow();
        });
    });

    // Start automatic slideshow
    startSlideShow();

    // Pause on hover
    const testimonialSection = document.querySelector('.testimonials');
    if (testimonialSection) {
        testimonialSection.addEventListener('mouseenter', stopSlideShow);
        testimonialSection.addEventListener('mouseleave', startSlideShow);
    }
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const interest = document.getElementById('interest').value;
        const message = document.getElementById('message').value.trim();

        // Validate required fields
        if (!name || !phone || !interest) {
            showNotification('कृपया सभी आवश्यक फ़ील्ड भरें। / Please fill all required fields.', 'error');
            return;
        }

        // Validate phone number
        if (phone.length < 10) {
            showNotification('कृपया वैध फोन नंबर दर्ज करें। / Please enter a valid phone number.', 'error');
            return;
        }

        // Create WhatsApp message
        let whatsappMessage = `नमस्ते Tejesh जी!\n\n`;
        whatsappMessage += `मेरा नाम: ${name}\n`;
        whatsappMessage += `फोन नंबर: ${phone}\n`;
        whatsappMessage += `रुचि का क्षेत्र: ${getInterestText(interest)}\n`;
        
        if (message) {
            whatsappMessage += `संदेश: ${message}\n`;
        }
        
        whatsappMessage += `\nकृपया मुझसे संपर्क करें। धन्यवाद!`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Create WhatsApp URL
        const whatsappURL = `https://api.whatsapp.com/send?phone=918770343316&text=${encodedMessage}`;
        
        // Open WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Reset form
        contactForm.reset();
        
        // Show success message
        showNotification('आपका संदेश तैयार हो गया है! WhatsApp खुल रहा है।', 'success');
    });
}

function getInterestText(interest) {
    const interestMap = {
        'kangen-water': 'Kangen Water Solutions',
        'wellness-consultation': 'Wellness Consultation',
        'emf-protection': 'EMF Protection',
        'workshop': 'Free Wellness Workshop'
    };
    return interestMap[interest] || interest;
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--color-surface);
        color: var(--color-text);
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        border-left: 4px solid var(--color-success);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-size: 14px;
        line-height: 1.4;
    `;

    if (type === 'error') {
        notification.style.borderLeftColor = 'var(--color-error)';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Add floating animation to service icons on hover
document.addEventListener('DOMContentLoaded', function() {
    const serviceIcons = document.querySelectorAll('.service-icon, .wellness-icon');
    
    serviceIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            this.offsetHeight; // Trigger reflow
            this.style.animation = 'float 1s ease-in-out';
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');
    const bubbles = document.querySelectorAll('.bubble');
    
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    
    // Add parallax to bubbles
    bubbles.forEach((bubble, index) => {
        const speed = 0.1 + (index * 0.05);
        bubble.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger hero animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease-out';
    }
});

// Enhanced mobile experience
if (window.innerWidth <= 768) {
    // Add touch-friendly interactions
    const touchElements = document.querySelectorAll('.service-card, .resource-card, .wellness-card');
    
    touchElements.forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Add scroll-to-top functionality
function initScrollToTop() {
    // Check if survey trigger exists to avoid positioning conflicts
    const surveyTrigger = document.getElementById('surveyTrigger');
    const bottomPosition = surveyTrigger ? '90px' : '30px'; // Position above survey button if it exists
    
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: ${bottomPosition};
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--color-primary);
        color: var(--color-btn-primary-text);
        border: none;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollToTopBtn);

    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });

    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top when DOM is ready
document.addEventListener('DOMContentLoaded', initScrollToTop);

// Add hover effects to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Performance optimization: Lazy loading for animations
const lazyAnimateElements = document.querySelectorAll('.service-card, .resource-card, .testimonial-card');

const lazyAnimateObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            lazyAnimateObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

lazyAnimateElements.forEach(element => {
    lazyAnimateObserver.observe(element);
});

// Fix for testimonial slider initialization delay
setTimeout(() => {
    const testimonials = document.querySelectorAll('.testimonial-card');
    if (testimonials.length > 0) {
        testimonials[0].classList.add('active');
        const firstDot = document.querySelector('.dot');
        if (firstDot) {
            firstDot.classList.add('active');
        }
    }
}, 500);