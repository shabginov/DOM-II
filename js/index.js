// Your code goes here

// mouseover
const links = document.querySelectorAll('.nav-link');
// console.log('links', typeof links);

links.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
  })
})

links.forEach(link => {
  link.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
  })
})

// load
const h1 = document.querySelector('h1');

window.addEventListener('load', () => {
  h1.textContent += ' has loaded!';
  const input = document.createElement('input');
  const br = document.createElement('br');
  input.setAttribute('value', 'Try selecting some text in here');
  h2.append(br, input);
})

// dblclick
const footer = document.querySelector('footer p')
footer.addEventListener('dblclick', (event) => {
  event.target.textContent = 'Copyright Fun Bus 2020';
  event.target.style.fontSize = '2rem';
})

// resize
window.addEventListener('resize', () => {
  alert('Please, do not do it!');
})

// select
const h2 = document.querySelector('h2');
h2.addEventListener('select', (event) => {
  const input = document.createElement('input');
  input.setAttribute('value', 'Try selecting some text in here');
  h2.append(input);
  h2.textContent = "You've selected me!";
  h2.style.color = 'brown';
  console.log(event.target);
})

// keydown
const body = document.querySelector('body');
body.addEventListener('keydown', (event) => {
  console.log("You pressed", event.code);
})