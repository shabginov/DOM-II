// Your code goes here

// Mouseover
let links = document.querySelectorAll('.nav-link');
function removeLink(event) {
  event.target.style.display = 'none';
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseover', removeLink);
}


// Keydown
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
  const char = event.which;
  console.log(String.fromCharCode(char));
})

// Focus ask Jose
const h1 = document.querySelector('.logo-heading');
h1.addEventListener('click', (event) => {
  // console.log(event.target);
  h1.textContent = 'Not Funny';
});

// Resize
window.addEventListener('resize', (event) => h1.style.display = 'none');

// Drag / Drop


// Wheel
const p = document.querySelectorAll('p')[0];
p.addEventListener('wheel', (event) => {
  // event.preventDefault();
  // console.log(event.target);
  let scale = 1;
  scale += event.deltaY * -0.01;

  // Restrict scale
  // scale = Math.min(Math.max(.125, scale), 4);
  p.style.transform = `scale(${scale})`;
})

// Select
const footer = document.querySelector('.footer p');
footer.addEventListener('select', event => {
  // const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  // console.log(selection);
  event.target.textContent = '2020 has begun!';
  console.log(event.target);
})