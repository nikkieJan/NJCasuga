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

// Student project showcases: one photo at a time per category, rotating every 3 seconds
function startShowcase(imgId, captionId, items) {
    const img = document.getElementById(imgId);
    const caption = document.getElementById(captionId);
    if (!img || !caption) return;

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

const hardwareItems = [
    { src: 'pictures/student-tubigify.jpg', alt: 'Tubigify sensor-based rainwater filtration project', caption: 'Tubigify — sensor-based rainwater filtration' },
    { src: 'pictures/student-pluvitech.jpg', alt: 'Pluvitech responsive sensor system project', caption: 'Pluvitech — responsive sensor system' },
    { src: 'pictures/student-soil.jpg', alt: 'Soil irrigation system project', caption: 'Soil Irrigation System — automated watering' }
];

const softwareItems = [
    { src: 'pictures/app-slide1.jpg', alt: 'Women and Children Abuse Informative App', caption: 'Women & Children Abuse Informative App — mobile app on RA 9262' },
    { src: 'pictures/software-sulongkalikasan1.jpg', alt: 'Sulong Kalikasan environmental awareness app welcome screen', caption: 'Sulong Kalikasan — uniting the youth for a greener future' },
    { src: 'pictures/software-sulongkalikasan2.jpg', alt: 'Sulong Kalikasan interactive map screen', caption: 'Sulong Kalikasan — interactive structures map' },
    { src: 'pictures/software-kabihasnan1.jpg', alt: 'Kabihasnan educational game menu', caption: 'Kabihasnan — educational game menu' },
    { src: 'pictures/software-kabihasnan2.jpg', alt: 'Kabihasnan earth science fault quiz', caption: 'Kabihasnan — earth science quiz module' },
    { src: 'pictures/software-kabihasnan3.jpg', alt: 'Kabihasnan science room', caption: 'Kabihasnan — science room module' },
    { src: 'pictures/software-precalc.jpg', alt: 'Pre Calculus to Calculus Learning Guide app', caption: 'Pre Calculus to Calculus Learning Guide' }
];

startShowcase('hardware-showcase-img', 'hardware-showcase-caption', hardwareItems);
startShowcase('software-showcase-img', 'software-showcase-caption', softwareItems);
