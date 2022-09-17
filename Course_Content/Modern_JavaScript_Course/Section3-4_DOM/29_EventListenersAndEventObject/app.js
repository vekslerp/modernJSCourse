// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//   console.log('Hello World');

//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onlClick);

function onlClick(e){
  // console.log('clicked');

  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  e.target.innerText = 'Hello';

  // Event type
  val = e.type;

  // Event timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the window
  val = e.offsetY;
  val = e.offsetX;


  console.log(val);
}