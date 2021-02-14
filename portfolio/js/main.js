let gumb = document.querySelector('.header-burger');

gumb.addEventListener('click', function () {
    let menu = document.querySelector('.inner');
    let header = document.querySelector('.header');
    menu.classList.toggle('show');
    header.classList.toggle('header-mobile--shown');
})

$(".header-nav__link").click(function() { 
              
    var listItems = $(".header-nav__link"); 
      
    for (let i = 0; i < listItems.length; i++) { 
        listItems[i].classList.remove("active"); 
    } 
      
    this.classList.add("active"); 
}); 