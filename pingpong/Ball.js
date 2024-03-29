
const STATIC_VELOCITY = 0.025;
const VELOCITY_INCREASE = 0.00001;
export default class Ball{

    constructor(ballElem) {
        this.ballElem = ballElem;
        this.reset();
    }

    reset(){
        this.x = 50;
        this.y = 50;
        this.direction = {x: 0};

        while (Math.abs(this.direction.x) <= 0.2 || Math.abs(this.direction.x) >= 0.9) {
            const heading = randomValueBetween(0, 2 * Math.PI);
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) };
        }
        this.velocity = STATIC_VELOCITY;
    }

    get x(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--x'));
    }
    set x(value){
        this.ballElem.style.setProperty('--x', JSON.parse(value));
    }

    get y(){
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue('--y'));
    }
    set y(value){
        this.ballElem.style.setProperty('--y', JSON.parse(value));
    }


    rect(){
        return this.ballElem.getBoundingClientRect();
    }

    update(delta, paddlesRects){
        this.x += this.direction.x * this.velocity * delta;
        this.y += this.direction.y * this.velocity * delta;

        this.velocity += VELOCITY_INCREASE * delta;

        const rect = this.rect();

        if(rect.bottom >= window.innerHeight || rect.top <= 0){
            this.direction.y *= -1;
        }
        if(paddlesRects.some(el => isCollision(el, rect))){
            this.direction.x *= -1;
        }
    }
}


function isCollision(el, rect){
    return el.left <= rect.right &&
        el.right >= rect.left &&
        el.top <= rect.bottom &&
        el.bottom >= rect.top;
}
function randomValueBetween(min, max){
    return Math.random() * (min - max) + max;
}