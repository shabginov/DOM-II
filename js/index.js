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