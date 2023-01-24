// window.addEventListener('load', (event) => {

// })

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY -10) + 'px; left: ' + (e.pageX - 15) + 'px;');
})