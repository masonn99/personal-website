document.addEventListener('DOMContentLoaded', function() {
    const seeMore = document.getElementById('see-more');
    const moreItems = document.getElementById('more-items');
    
    const emailLink = document.getElementById('email-link');
    const linkedinLink = document.getElementById('linkedin-link');

    emailLink.href = `mailto:${personalInfo.email}`;
    emailLink.target = '_blank';
    emailLink.rel = 'noopener noreferrer';
    linkedinLink.href = personalInfo.linkedin;
    linkedinLink.target = '_blank';
    linkedinLink.rel = 'noopener noreferrer';

    seeMore.addEventListener('click', function(event) {
        event.preventDefault();
        moreItems.classList.toggle('hidden');
        seeMore.style.display = 'none';
    });
});
