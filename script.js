document.addEventListener('DOMContentLoaded', function() {
    const seeMore = document.getElementById('see-more');
    const moreItems = document.getElementById('more-items');
    
    const emailLink = document.getElementById('email-link');
    const linkedinLink = document.getElementById('linkedin-link');

    emailLink.href = `mailto:${personalInfo.email}`;
    linkedinLink.href = personalInfo.linkedin;

    seeMore.addEventListener('click', function(event) {
        event.preventDefault();
        moreItems.classList.toggle('hidden');
        seeMore.style.display = 'none';
    });
});
