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
const images = carousel.querySelectorAll('img');
const prevBtn = carousel.querySelector('.prev');
const nextBtn = carousel.querySelector('.next');
let currentIndex = 0;
const intervalTime = 5000; // 5秒切換一次

// 顯示指定索引的圖片
function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
    currentIndex = index;
}

// 下一張
function nextImage() {
    const nextIndex = (currentIndex + 1) % images.length;
    showImage(nextIndex);
}

// 上一張
function prevImage() {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(prevIndex);
}

// 自動播放
let autoPlay = setInterval(nextImage, intervalTime);

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

// 滑鼠懸停暫停自動播放
carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(nextImage, intervalTime);
});