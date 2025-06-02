
        // Create animated background particles
        function createParticles() {
            const bgAnimation = document.getElementById('bgAnimation');
            const particleCount = window.innerWidth < 768 ? 25 : 50; // Reduce particles on mobile
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 20 + 's';
                particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                bgAnimation.appendChild(particle);
            }
        }

        // Mobile menu functionality
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
        }

        function closeMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.remove('active');
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            
            if (!mobileMenu.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                mobileMenu.classList.remove('active');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add parallax effect to floating shapes (disabled on mobile for performance)
        if (window.innerWidth > 768) {
            window.addEventListener('mousemove', (e) => {
                const shapes = document.querySelectorAll('.floating-shape');
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                shapes.forEach((shape, index) => {
                    const speed = (index + 1) * 0.5;
                    const xPos = (x - 0.5) * speed * 50;
                    const yPos = (y - 0.5) * speed * 50;
                    shape.style.transform = `translate(${xPos}px, ${yPos}px)`;
                });
            });
        }

        // Initialize particles when page loads
        window.addEventListener('load', createParticles);

        // Recreate particles on window resize
        window.addEventListener('resize', () => {
            const bgAnimation = document.getElementById('bgAnimation');
            bgAnimation.innerHTML = '';
            createParticles();
        });

        // Add scroll effect to header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.15)';
                header.style.backdropFilter = 'blur(30px)';
            } else {
                header.style.background = 'rgba(255, 255, 255, 0.1)';
                header.style.backdropFilter = 'blur(20px)';
            }
        });

        // Handle orientation change
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                const bgAnimation = document.getElementById('bgAnimation');
                bgAnimation.innerHTML = '';
                createParticles();
            }, 100);
        });
