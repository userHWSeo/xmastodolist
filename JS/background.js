const bgImages = ["background01.jpg","background02.jpg","background03.jpg","background04.jpg"];

const randImg = bgImages[Math.floor(Math.random() * bgImages.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${randImg}`;

document.body.appendChild(bgImg);