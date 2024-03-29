


function createRain(){
    const cloud = document.querySelector('.cloud');
    const e = document.createElement('div');


    e.classList.add('rain');
    cloud.appendChild(e);

    setTimeout(() => {
        cloud.removeChild(e);
    }, 2000);
}


setInterval(() => {
    createRain();
}, 20);