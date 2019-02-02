//create an array
const colors = ['yellow', 'green', 'blue', '#73FBD3', 'rgba(125,125,125, 0.5', 'purple', 'orange', '#73FBD3', '#D81159', '#F3C98B', '#D1BCE3', '#C6D8AF']

const btn = document.getElementById('btn');

//add event listener
btn.addEventListener('click', function () {

  let random = Math.floor(Math.random() * colors.length);
  const body = document.body;
  body.style.backgroundColor = colors[random]

  console.log(random);


})