let mainImg = document.getElementById("main-img");
let subImg = document.querySelectorAll(".image img");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

let currentIndex = 0;

subImg.forEach((subImg, index)=> {
    subImg.addEventListener('click', () => {
        mainImg.src = subImg.src;
        currentIndex = index;
    });
});

mainImg.addEventListener('load', () => {
    mainImg.classList.add("loaded");
})
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if(currentIndex >= subImg.length) {
        currentIndex = 0;
    }
    mainImg.classList.remove('loaded');
    mainImg.src = subImg[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
    currentIndex = subImg.length - 1;
    }
    mainImg.classList.remove('loaded');
    mainImg.src = subImg[currentIndex].src;
});