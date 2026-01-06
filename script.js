window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '0.5rem 1rem'; 
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    } else {
        header.style.padding = '1rem'; 
        header.style.boxShadow = 'none';
    }
});
const ctaButton = document.querySelector('.cta');
if(ctaButton) {
    ctaButton.addEventListener('click', function(e) {
        console.log("Το κουμπί πατήθηκε!");
    });
}