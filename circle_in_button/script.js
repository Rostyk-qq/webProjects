 const getButton = document.getElementById('button');

    getButton.onclick = (e) => {
        if(!e.target) return;
        e.target.disabled = true;
        const circle = document.createElement('div');

        const diameter = Math.max(e.target.offsetWidth, e.target.offsetHeight);
        const radius = diameter / 2;
        const colorRand = Math.floor((Math.random() * 360) + 1);


        circle.style.width = circle.style.height = `${radius / 2}px`;
        circle.style.top = `${( e.pageY - (e.target.getBoundingClientRect().top - scrollY)) - (radius / 4)}px`;
        circle.style.left = `${(e.pageX - (e.target.getBoundingClientRect().left - scrollX)) - (radius / 4)}px`;
        circle.style.filter = `hue-rotate(${colorRand}deg)`;

        circle.classList.add('circle');
        getButton.appendChild(circle);

        const time = getTimeAnimation(circle);
        setTimeout(() => {
            circle.remove();
            e.target.disabled = false;
        }, time);
    };
    function getTimeAnimation(circle){
          const dur = getComputedStyle(circle).animationDuration;
          return dur.includes('ms') ? Number(dur.replace('ms', '')) : Number(dur.replace('s', '')) * 1000;
    }
