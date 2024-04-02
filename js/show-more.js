const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.program__elements').length;
let items = 9;

showMore.addEventListener('click', () => {
    items += 9;
    const array = Array.from(document.querySelector('.programs__inner-elements').children);
    const visItems = array.slice(0, items);

    visItems.forEach(el => el.classList.add('is-visinle'));

    if (visItems.length === productsLength) {
        showMore.style.display = 'none';
    }
});