const c = document.getElementById("hero-lightpass");
const d = c.getContext("2d");

c.width = 1600;
c.height = 900;

const e = 59;

const aegisCurrentFrame = (index) =>
  `../images/rotate/${(index + 1).toString().padStart(4, "0")}.webp`;

const aegisImages = [];

for (let i = 0; i < e; i++) {
  const aegisImg = new Image();
  aegisImg.src = aegisCurrentFrame(i);
  aegisImages.push(aegisImg);
}

// https://www.youtube.com/watch?v=QY7Rj8aZcZk&ab_channel=KevinPowell
// making shapes
// https://www.youtube.com/watch?v=QY7Rj8aZcZk&ab_channel=KevinPowell
