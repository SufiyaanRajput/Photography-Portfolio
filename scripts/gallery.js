var menu_button = document.querySelector('.navigation p');
var menu = document.querySelector('#menu-overlay');
var close_icon = document.querySelector('#close');

menu_button.addEventListener('click', function(){
  menu.classList.remove('hide');
});

close_icon.addEventListener('click', function(){
  menu.classList.add('hide');
});
