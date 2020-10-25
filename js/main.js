var i = 0;
function changeImage() {
  var show = document.getElementById('showcase');
  imgs = '../img/showcase' + (i % 3) + '.jpg';
  show.style.background =
    '#333 url(' + imgs + ') no-repeat center center/cover';

  i++;
}
function slider() {
  setInterval(changeImage, 5000);
}

let navBar = document.getElementById('navbar');
let logo = document.getElementById('navbar').children[0];
let menu_list = document.getElementById('navbar').children[1];
console.log(logo);
hamburger.onclick = showMenu;

navBar.classList.add('hide');

function showMenu(event) {
  if (navBar.classList.contains('hide')) {
    menu_list.classList.add('show');
    logo.classList.add('hide');
    navBar.classList.remove('hide');
    navBar.classList.add('show');
  } else if (navBar.classList.contains('show')) {
    navBar.classList.remove('show');
    navBar.classList.add('hide');
  }
}
