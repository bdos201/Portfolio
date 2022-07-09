const scrollButton = document.querySelector('.scroll-btn');

const scrollArrowOne = document.querySelector('.scroll-arrow-one');

const scrollArrowTwo = document.querySelector('.scroll-arrow-two');

scrollButton.addEventListener('mouseover', function () {
    scrollArrowOne.classList.toggle('float');
    scrollArrowTwo.classList.toggle('float');
});

scrollButton.addEventListener('mouseout', function () {
    scrollArrowOne.classList.toggle('float');
    scrollArrowTwo.classList.toggle('float');
});