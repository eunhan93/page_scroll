const section = document.querySelectorAll('.section');

let height = window.innerHeight;
let width = window.scrollWidth;

const setSize = (h, w) => {
    section.forEach(el => {
        el.style.height = h + "px";
        el.style.width = w + "px";
    });
}

const handleScroll = (e) => {
    // 추후 구현 예정
}

const handleResize = () => {
    let reHeight = window.innerHeight;
    let reWidth = window.scrollWidth;
    setSize(reHeight, reWidth);
}

const init = () => {
    setSize(height, width);
    window.addEventListener("resize", handleResize);
    window.addEventListener('scroll', handleScroll);
}

init();