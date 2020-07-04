var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');


function myFunction(url) {
  console.log(url)
  document.getElementById("dropdown-".concat(url)).classList.toggle("show");
  
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  
  //var myDropdown = document.getElementById("myDropdown");
  //var myBtn = document.getElementById("myBtn");
  
  //var all = document.getElementsByTagName("*");
  var all = document.getElementsByClassName("dropdown-toggle");
  console.log(all);
  for (var i=0, max=all.length; i < max; i++) {
    var dropdown = document.getElementById("dropdown-".concat(all[i].id.substr(4, all[i].id.len)));
    if (e.target != all[i]) {
	  console.log('all[i]');
	  console.log(all[i]);
	  console.log('dropdown');
	  console.log(dropdown);
	  //console.log(all[i].parent)
	  
      if (dropdown.classList.contains('show')) {
	    dropdown.classList.remove('show');
	    console.log('removed');
      }
	}
  }
  
  
  
  //console.log(e.target);
  
 /* if (e.target != myBtn) {
    if (myDropdown.classList.contains('show')) {
	  myDropdown.classList.remove('show');
	  console.log('removed');
    }
  }*/
  
}


menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}


