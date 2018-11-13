var hero = document.querySelector('.ba-hero');
var text = document.querySelector('.ba-cool-title');
var walk = 100;

function moveShadow(event) {
    var x = event.clientX,
        y = event.clientY;

var width = hero.offsetWidth,
    height = hero.offsetHeight;


var xWalk = (x/width * walk) - (walk/2);
var yWalk = (y/height * walk) - (walk/2);

        text.style.textShadow = 
        `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.6),
        ${xWalk * -1}px ${yWalk}px 0 rgba(255,0,0,0.6),
        ${xWalk}px ${yWalk * -1}px 0 rgba(255,255,0,0.6),
        ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,0,255,0.6),
        ${yWalk}px ${xWalk}px 0 rgba(0,255,0,0.6),
        ${yWalk * -1}px ${xWalk * -1}px 0 rgba(0,255,255,0.6)
        `
        ;
}

hero.addEventListener('mousemove', moveShadow);