    const showMore = document.querySelector('.show-more');
    const productsLength = document.querySelectorAll('.reviews__show-more').length;
    let items = 1;

    showMore.addEventListener('click', () => {
        const array = Array.from(document.querySelector('.reviews__grid-bottom').children);
        const visItems = array.slice(1, items);

        visItems.forEach(el => el.classList.add('is-visinle'));

        if (visItems.length === productsLength) {
            showMore.style.display = 'none';
        }
});