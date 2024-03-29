window.addEventListener('load', styleCreate)

function styleCreate(e){
    document.documentElement.classList.add('domLoaded');

    const cardMenu = document.querySelector('.card__menu');
    const cardItem = document.getElementById('start');
    const line = document.querySelector('.line');

    appendLineWithStyle(cardItem, line);

    cardMenu.onclick = (e) => {
        if(e.target.closest('li')){
            const getItem = e.target.closest('li');
            appendLineWithStyle(getItem, line);
        }
    }
    function appendLineWithStyle(getItem, line){
        line.style.cssText = `
                top: ${getItem.offsetTop}px;
                height: ${getItem.offsetHeight}px;
                background-color: ${getItem.dataset.itemColor};
                transition: all .6s ease;
            `;
    }
}
