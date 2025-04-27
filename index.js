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