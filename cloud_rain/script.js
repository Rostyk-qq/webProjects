function rain(){
    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');

    const left = Math.floor((Math.random() * 310) + 1);
    const rainWidth = (Math.random() * 5) + 1;
    const rainHeight = (Math.random() * 10) + 1;
    const rainDuration = Math.random() * 0.5;

    e.classList.add('drop');
    e.style.left = left + 'px';
    e.style.width = 0.5 * rainHeight + 'px';
    e.style.height = 5 * rainWidth + 'px';
    e.style.animationDuration = 1 + rainDuration + 's';
    cloud.appendChild(e);

    setTimeout(() => {
        cloud.removeChild(e);
    }, 2000);
}

setInterval(() => {
    rain();
}, 20);
