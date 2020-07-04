var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  console.log("MyFunction");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  
  var myDropdown = document.getElementById("myDropdown");
  var myBtn = document.getElementById("myBtn");
  
  if (e.target != myBtn) {
    if (myDropdown.classList.contains('show')) {
	  myDropdown.classList.remove('show');
	  console.log('removed');
    }
  }
  
}


menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}


