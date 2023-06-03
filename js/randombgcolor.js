/******************************************
A Random Background Color Generator
******************************************/
let x;
let y;
let z;

/*** 
 * RANDOM COLOR GENERATOR
***/
const randomBackgroundColor = () => {
  x = Math.round(Math.random() * 255);
  y = Math.round(Math.random() * 255);
  z = Math.round(Math.random() * 255);
  return `rgb(${x}, ${y}, ${z})`;
};



/*** 
 * APPLYING THE COLOR
***/
const changeColorOnClick = document.getElementById('load-quote');

changeColorOnClick.addEventListener('click', () => {
  document.body.style.backgroundColor = randomBackgroundColor();
});