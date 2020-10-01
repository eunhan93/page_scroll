'use strict';

const wrap = document.getElementById('wrap');
const section = document.querySelectorAll('.section');


let height = window.innerHeight;
let width = window.scrollWidth;

let scrolling = false;

const setSize = (h, w) => {
    wrap.style.height = h + "px";
    wrap.style.width = w + "px";
    section.forEach(el => {
        el.style.height = h + "px";
        el.style.width = w + "px";
    });
}

const handleScroll = (e) => {
    let delta = e.wheelDelta;
        if (delta < 0){
            section.forEach(elem => {
                elem.style.animationDuration = 1000;
                elem.style.transform = `translateY(-${height}px)`;
            })
        } else {
            section.forEach(elem => {
                elem.style.animationDuration = 1000;
                elem.style.transform = `translateY(${height}px)`;
            })
        }
    
}

const handleResize = () => {
    let reHeight = window.innerHeight;
    let reWidth = window.scrollWidth;
    setSize(reHeight, reWidth);
}

const init = () => {
    setSize(height, width);
    window.addEventListener("resize", handleResize);
    wrap.addEventListener("wheel", handleScroll);
}

init();