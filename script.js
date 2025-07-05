document.querySelector('.sales__button__icon').addEventListener('click', function(e) {
    e.target.closest('.sales__button__icon').classList.toggle('sales__button__icon--toggle');
})
