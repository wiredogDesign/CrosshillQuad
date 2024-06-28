var trigger = document.querySelector('figcaption');
var clicktarget = document.querySelector('aside');

toggleClass = () => {
    clicktarget.classList.toggle('aside-toggle');
}
trigger.addEventListener('click', toggleClass);