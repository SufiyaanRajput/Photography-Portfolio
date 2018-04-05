var menu_button = document.querySelector('.navigation p');
var menu = document.querySelector('#menu-overlay');
var close_icon = document.querySelector('#close');
var buttons = document.querySelectorAll('.navigation, button, #menu-overlay div');

menu_button.addEventListener('click', function(){
  menu.classList.remove('hide');
});

close_icon.addEventListener('click', function(){
  menu.classList.add('hide');
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('mouseover', function(){
    this.classList.add('button-hover');
  });
  buttons[i].addEventListener('mouseout', function(){
    this.classList.remove('button-hover');
  });
}
