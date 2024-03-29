
function createRain(){

    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');

    const left = Math.floor((Math.random() * 310) + 1);
    const width = (Math.random() * 5) + 1;
    const height = (Math.random() * 10) + 1;
    const animationDuration = Math.random() * 0.5;

    e.classList.add('rain');
    e.style.left = left + 'px';
    e.style.width = 0.5 * width + 'px';
    e.style.height = 3 * height + 'px';
    e.style.animationDuration = 1 + animationDuration + 's';
    cloud.appendChild(e);

    setTimeout(() => {
        cloud.removeChild(e);
    }, 2000);
}

setInterval(() => {
    createRain();
}, 20);
