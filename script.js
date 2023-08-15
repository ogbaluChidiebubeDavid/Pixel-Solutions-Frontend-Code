let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});

// nav for mobile codes
var sidemenu = document.getElementById('sidemenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav #sidemenu li a');

closeMenu.addEventListener('click', closemenu);
openMenu.addEventListener('click', openmenu);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        closemenu();
    })
})

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-255px';
}

//how-section
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

var navlink = document.getElementsByClassName('nav-link');

function activateTab(navtab){
    for(navitem of navlink){
        navitem.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    document.getElementById(navtab).classList.add('active');
}