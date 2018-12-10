let spoilerShow = false;


$(() => {
    $('[data-toggle="tooltip"]').tooltip()
  })

let hostName = "http://sataris.tk/karty/";



let xhrCharList = new XMLHttpRequest(); 

xhrCharList.open("GET", hostName, true)

xhrCharList.timeout = 8000;

let aside = document.querySelector(".aside")
let close = document.querySelector(".menu__close")
let openingIcon = document.querySelector(".opening-icon")
let html = document.querySelector("html")
let main = document.querySelector(".main")
let menu = document.querySelector("#menu")


function closeClick() {
    aside.style.transform = "translateX(-110%)"
    close.style.display = "none";
    html.style.WebkitFilter = "none"
    }

function returnTo() {

    loadingScreen(loader)    

}

let loader = document.querySelector(".loader");

function loadingScreen(e, b = true) {
    // the function describes if the loading screen should be displayed or not
    e.style.transition = transition_time + "s";
    e.style.opacity = "1";
    html.style.overflow = "hidden"
    
    if (b !== true){
        setTimeout(() => {
            e.style.display = "none";
        }, animationTime);

        e.style.transition = "all " + transition_time + "s";
        e.style.opacity = "0";
        html.style.overflow = "auto";
        }   
    }

xhrCharList.addEventListener('timeout', (e) => {
    html.innerText = "Przekroczono czas oczekiwania na odpowiedź serwera :c"
})

xhrCharList.addEventListener('error', (e) => {

})

// animation time defined (for changing opacity, colors, etc)
let animationTime = 1000;
let transition_time = animationTime/1000;


loadingScreen(loader)







//smooth scrolling
        $('a[href*="#"]')

  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {

    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {

        var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {

        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {

            
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });

    