document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.modal-container').classList.add('active');
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modal-container').classList.remove('active');
});

document.querySelector('.modal-container').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
        document.querySelector('.modal-container').classList.remove('active');
    }
});

const carousel = document.querySelector('#carousel');
const images = carousel.querySelectorAll('#i');
const images2 = carousel.querySelectorAll('#j');
const prevBtn = carousel.querySelector('#prev');
const nextBtn = carousel.querySelector('#next');
const prevBtn2 = carousel.querySelector('#prev2');
const nextBtn2 = carousel.querySelector('#next2');
let currentIndex = 0;
let currentIndex2 = 0;
const intervalTime = 3000; // 5秒切換一次

// 顯示指定索引的圖片
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex = index;
}
function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}
function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
}

function showImage2(index) {
    images2.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex2 = index;
}
function nextImage2() {
    const nextIndex = (currentIndex2 + 1) % images2.length;
    showImage2(nextIndex);
}
function prevImage2() {
    const prevIndex = (currentIndex2 - 1 + images2.length) % images2.length;
    showImage2(prevIndex);
}

// 自動播放
let autoPlay = setInterval(nextImage, intervalTime);
let autoPlay2 = setInterval(nextImage2, intervalTime);

// 點擊按鈕
nextBtn.addEventListener('click', () => {
    clearInterval(autoPlay); // 停止自動播放
    nextImage();
    autoPlay = setInterval(nextImage, intervalTime); // 重啟自動播放
});
prevBtn.addEventListener('click', () => {
    clearInterval(autoPlay);
    prevImage();
    autoPlay = setInterval(nextImage, intervalTime);
});

nextBtn2.addEventListener('click', () => {
    clearInterval(autoPlay2); // 停止自動播放
    nextImage2();
    autoPlay2 = setInterval(nextImage, intervalTime); // 重啟自動播放
});
prevBtn2.addEventListener('click', () => {
    clearInterval(autoPlay2);
    prevImage2();
    autoPlay2 = setInterval(nextImage, intervalTime);
});

// 滑鼠懸停暫停自動播放
// carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
// carousel.addEventListener('mouseleave', () => {
//     autoPlay = setInterval(nextImage, intervalTime);
// });


