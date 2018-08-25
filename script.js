const colorBtn = document.querySelector('.colorBtn'); // buton
const bodyBackgroundColor  = document.querySelector('body');      //body

const colors = ['yellow','red','green','#3b5998'];


colorBtn.addEventListener('click' , changeColor);

function changeColor(){
  //   bodyBackgroundColor.style.backgroundColor = 'blue';

  let random = Math.floor(Math.random() * colors.length);
  bodyBackgroundColor.style.backgroundColor = colors[random];
}
