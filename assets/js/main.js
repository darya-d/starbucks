function imgSlider(anything){
  document.querySelector('.starbucks').src = anything;
}
function changeColor(color){
  const textStarbucks = document.querySelector('.text-box__title span');
  const circle = document.querySelector('.circle');
  circle.style.background = color;
  textStarbucks.style.color = color;
}