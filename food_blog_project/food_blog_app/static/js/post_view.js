AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: true
});
feather.replace();

// Rating stars functionality
const ratingStars = document.querySelectorAll('#rating-stars button');
const ratingText = document.getElementById('rating-text');
let currentRating = 0;

ratingStars.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        currentRating = rating;
        
        // Update stars
        ratingStars.forEach((s, index) => {
            const starIcon = s.querySelector('i');
            if (index < rating) {
                s.classList.add('text-amber-400');
                s.classList.remove('text-gray-300', 'hover:text-amber-400');
                starIcon.classList.add('fill-current');
            } else {
                s.classList.remove('text-amber-400');
                s.classList.add('text-gray-300', 'hover:text-amber-400');
                starIcon.classList.remove('fill-current');
            }
        });

        // Update text
        const ratings = ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];
        ratingText.textContent = ratings[rating - 1];
    });

    star.addEventListener('mouseenter', () => {
        const hoverRating = parseInt(star.getAttribute('data-rating'));
        ratingStars.forEach((s, index) => {
            if (index < hoverRating) {
                s.classList.add('text-amber-300');
            }
        });
    });

    star.addEventListener('mouseleave', () => {
        ratingStars.forEach((s, index) => {
            if (index >= currentRating) {
                s.classList.remove('text-amber-300');
            }
        });
    });
});
