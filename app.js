'use strict';

const wrap = document.getElementById('wrap');
const section = document.querySelectorAll('.section');

const div_sections = document.createElement('div');
div_sections.className = "sects";
div_sections.style.transtion = "1s";

wrap.appendChild(div_sections);
section.forEach(el => {
    div_sections.appendChild(el);
})



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

let y = 0;

const handleScroll = (e) => {
    let delta = e.wheelDelta;
    console.log(delta);
        if (delta < 0){
            if (delta % 120 === 0){
                y++;
                if (y >= section.length - 1){
                    y = section.length - 1;
                }
            }
            div_sections.style.transition = "1s";
            div_sections.style.transform = `translateY(-${height * y}px)`;
        } else {
            if (delta % 120 === 0){
                y--;
                if (y <= 0){
                    y = 0;
                }
            }
            div_sections.style.transform = `translateY(-${height * y}px)`;
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