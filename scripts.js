document.addEventListener('DOMContentLoaded', () => {
    const productSections = document.querySelectorAll('.product-gallery');
    const leftArrows = document.querySelectorAll('.left-arrow');
    const rightArrows = document.querySelectorAll('.right-arrow');

    const scrollProducts = (container, direction) => {
        const scrollAmount = container.clientWidth;
        container.scrollBy({ 
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    leftArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const container = arrow.parentElement.querySelector('.products');
            scrollProducts(container, 'left');
        });
    });

    rightArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const container = arrow.parentElement.querySelector('.products');
            scrollProducts(container, 'right');
        });
    });

    // Navigation scroll
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // "Read More" functionality
    const storyParagraph = document.getElementById('story-paragraph');
    const readMoreButton = document.getElementById('read-more');
    const fullStory = storyParagraph.innerHTML;

    storyParagraph.innerHTML = fullStory.substring(0, 200) + '...';
    
    readMoreButton.addEventListener('click', () => {
        if (storyParagraph.innerHTML.length < fullStory.length) {
            storyParagraph.innerHTML = fullStory;
            readMoreButton.innerText = 'Read Less';
        } else {
            storyParagraph.innerHTML = fullStory.substring(0, 200) + '...';
            readMoreButton.innerText = 'Read More';
        }
    });

    // "Shop Now" button functionality
    const shopNowButton = document.getElementById('shop-now');
    shopNowButton.addEventListener('click', () => {
        document.getElementById('new-arrivals').scrollIntoView({ behavior: 'smooth' });
    });
});
