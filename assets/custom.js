toggleClass = () => {
    document.querySelector('.banner').classList.add('animate-banner');
    document.querySelector('.small-header').classList.add('animate-span');
}
window.addEventListener('DOMContentLoaded', toggleClass)