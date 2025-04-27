
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if(mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);
    
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
    
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .value-item, .project-card, .blog-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.service-card, .value-item, .project-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});
// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        if(mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log('Form submitted:', data);
    
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .value-item, .project-card, .blog-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.service-card, .value-item, .project-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Slider functionality
let slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const indicators = document.getElementsByClassName("indicator");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    for (i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active");
    }
    
    slides[slideIndex-1].classList.add("active");
    indicators[slideIndex-1].classList.add("active");
}

// Auto slide change
setInterval(() => {
    moveSlide(1);
}, 5000);

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        if(mainNav.classList.contains('active')) {
            mainNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Animation on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .value-item, .project-card, .blog-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

document.querySelectorAll('.service-card, .value-item, .project-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Slider Functionality
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('slide');
    const indicators = document.getElementsByClassName('indicator');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    
    // Deactivate all indicators
    for (i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove('active');
    }
    
    // Show current slide and activate its indicator
    slides[slideIndex - 1].classList.add('active');
    indicators[slideIndex - 1].classList.add('active');
}

function moveSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex += n);
    startSlideInterval();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlides(slideIndex = n);
    startSlideInterval();
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 5000);
}

// Initialize slider and start auto-rotation
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    startSlideInterval();
    
    // Pause on hover
    const slider = document.querySelector('.hero-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            startSlideInterval();
        });
    }
});