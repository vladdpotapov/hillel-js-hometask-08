// TASK #04:

// В папке images есть изображения 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вывести изображение из этой папки полученное случайным образом (Math.random)

const imageBox = createElement('div', 'class', 'image-box');
const imageElement = createElement('img', 'id', 'image');

showRandomPicture();