document.addEventListener('DOMContentLoaded', function(e){
    e.preventDefault();

    const countRainLine = 250;
    let count = 1;

    const body = document.body;


    while(count < countRainLine){
        const line = document.createElement('i');

        body.style.position = 'relative';

        line.style.position = 'absolute';

        line.style.width = 1 + 'px';

        line.style.left = Math.floor(Math.random() * body.offsetWidth) + 'px';

        line.style.zIndex = '2';

        const animationDur= Math.random() * 3;
        const animationDelay= Math.random() * -10;

        line.style.animationDuration =  1 + animationDur + 's';
        line.style.animationDelay = animationDelay + 's';

        body.appendChild(line);
        count++;
    }
});