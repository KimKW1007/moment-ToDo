const images = ['img01.jpg', 'img02.jpg', 'img03.jpg', 'img04.jpg', 'img05.jpg', 'img06.jpg', 'img07.jpg', 'img08.jpg', 'img09.jpg', 'img10.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg', 'img16.jpg'];

const wrapBg = document.querySelector('#wrapBg');
const randomImages = images[Math.floor(Math.random() * images.length)];

wrapBg.style.background= `url(./img/${randomImages}) no-repeat center center`;
wrapBg.style.backgroundSize= `cover`;

