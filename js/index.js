// Your code goes here

// Mouseover
let links = document.querySelectorAll('.nav-link');
function removeLink(event) {
  event.target.style.display = 'none';
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseover', removeLink);
}
