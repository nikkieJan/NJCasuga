document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, message });
        
        form.reset();
        
        alert('Thank you for your message! I\'ll get back to you soon.');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
});
 // Slideshow functionality
 function startSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow');
    
    slideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll('img');
        let currentIndex = 0;
        
        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }
        
        setInterval(showNextImage, 4300); // Change image every 1.5 seconds
    });
}


// Start slideshows
startSlideshows();

// Student project showcase: one photo at a time, rotating every 3 seconds
function startStudentShowcase() {
    const img = document.getElementById('student-showcase-img');
    const caption = document.getElementById('student-showcase-caption');
    if (!img || !caption) return;

    const items = [
        { src: 'pictures/student-tubigify.jpg', alt: 'Tubigify sensor-based rainwater filtration project', caption: 'Tubigify — sensor-based rainwater filtration' },
        { src: 'pictures/student-pluvitech.jpg', alt: 'Pluvitech responsive sensor system project', caption: 'Pluvitech — responsive sensor system' },
        { src: 'pictures/student-soil.jpg', alt: 'Soil irrigation system project', caption: 'Soil Irrigation System — automated watering' },
        { src: 'pictures/app-slide1.jpg', alt: 'Women and Children Abuse Informative App', caption: 'Women & Children Abuse Informative App — mobile app on RA 9262' }
    ];

    let currentIndex = 0;

    setInterval(() => {
        img.classList.add('fade');
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % items.length;
            img.src = items[currentIndex].src;
            img.alt = items[currentIndex].alt;
            caption.textContent = items[currentIndex].caption;
            img.classList.remove('fade');
        }, 400);
    }, 3000);
}

startStudentShowcase();
