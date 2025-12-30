document.addEventListener('DOMContentLoaded', function() {
    const seeMore = document.getElementById('see-more');
    const moreItems = document.getElementById('more-items');

    seeMore.addEventListener('click', function(event) {
        event.preventDefault();
        moreItems.classList.toggle('hidden');
        seeMore.style.display = 'none';
    });
});
