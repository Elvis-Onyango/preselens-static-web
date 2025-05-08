 
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileNav = document.getElementById('mobileNav');

        mobileMenuBtn.addEventListener('click', () => {
            mobileNav.classList.toggle('hidden');
            mobileMenuBtn.innerHTML = mobileNav.classList.contains('hidden') ? 
                '<i class="fas fa-bars"></i>' : '<i class="fas fa-times"></i>';
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const target = document.querySelector(targetId);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (!mobileNav.classList.contains('hidden')) {
                        mobileNav.classList.add('hidden');
                        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                    }
                }
            });
        });

        // Scroll animations using Intersection Observer
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-slide-up, .animate-slide-in, .animate-fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100');
                        entry.target.classList.remove('opacity-0');
                        
                        if (entry.target.classList.contains('animate-slide-up')) {
                            entry.target.classList.remove('translate-y-10');
                        }
                        
                        if (entry.target.classList.contains('animate-slide-in')) {
                            entry.target.classList.remove('-translate-x-10');
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            elements.forEach(el => {
                el.classList.add('opacity-0');
                
                if (el.classList.contains('animate-slide-up')) {
                    el.classList.add('translate-y-10');
                }
                
                if (el.classList.contains('animate-slide-in')) {
                    el.classList.add('-translate-x-10');
                }
                
                observer.observe(el);
            });
        };

        // Initialize on load
        window.addEventListener('load', animateOnScroll);
        window.addEventListener('scroll', animateOnScroll);

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
                header.classList.add('h-20');
                document.querySelector('.logo img').classList.add('h-12');
            } else {
                header.classList.remove('shadow-lg');
                header.classList.remove('h-20');
                document.querySelector('.logo img').classList.remove('h-12');
            }
        });
   
   // Projects Filter
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filter projects
                projectCards.forEach(card => {
                    if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

                const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const name = this.querySelector('#name').value;
                const email = this.querySelector('#email').value;
                
                // Show success message (in a real app, you would send this to a server)
                alert(`Thank you, ${name}! We have received your message and will contact you at ${email} soon.`);
                
                // Reset form
                this.reset();
            });
        }