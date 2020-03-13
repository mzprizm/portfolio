console.log('app.js is connected')
if (typeof $ == 'undefined'){
  console.log('oops! I still have to link my jQuery properly!');
} else {console.log('I did it! I linked jQuery and this js file properly!')};





/* API */
let id = '16XjkVywfKrr5xFVnmsXPG6RyjTjue2VBurZf7dwCDUc'

let source = `https://spreadsheets.google.com/feeds/list/16XjkVywfKrr5xFVnmsXPG6RyjTjue2VBurZf7dwCDUc/od6/public/values?alt=json`

fetch(source)
  .then( response => response.json() ) 
  .then( data =>  {
      console.log('data', data)
      // data.feed.entry is the array that stores our projects
      // the projects are stored as objects -- DECLARE projects array
      let projects = data.feed.entry.map( project => {
        return {
          title: project.gsx$title.$t,
          image: project.gsx$image.$t,
          description: project.gsx$description.$t,
          url: project.gsx$url.$t
        }
      })
      app(projects)
  }) // this provides us access to the parse data
  .catch( err => console.log('err', err))

const $portfolioDiv = $('portfolioDiv')

function app(projects) {
    // DECLARE app/function on projects  the rest of my app:
  console.log('app - projects', projects)

// projects appear as card divs on homepage
  for (let i = 0; i < projects.length; i++) {
              let $card = 
              `<div class="card">
                  <div class="cardstyle">
                      <h3 class="helvetica, gray">${projects[i].title}</h3>
                      <p>${projects[i].description}</p>
                      <a href="${projects[i].url}" target="_blank">learn more</a>
                      </br></br>
                  </div>
                  <a href="${projects[i].url}"><img class="portfolioImage" src="${projects[i].image}"
                  ></img></a>
              </div>
              </br>`
              $portfolioDiv.append($card)
          }
}



// SCROLL //
console.log(window.top)

$( document ).ready(function() { // Tells the function to wait to preform until everything on the page has loaded.
    $(window).scroll(function() { // Says this function is preformed continuisly while scrolling.
        var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
            SectionOneOffset = $('#home').offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
            SectionTwoOffset = $('#portfolioSection').offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
            console.log(SectionOneOffset)
// // #mktgDesign #art #contact
        if (Scroll >= SectionOneOffset) { // If you have scrolled past section one do this.
            $(".menu-item-1").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section one do this.
            $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        }
        if (Scroll >= SectionTwoOffset) { // If you have scrolled past section two do this.You can duplicate this for as many sections as you want.
            $(".menu-item-2").addClass("current-menu-item"); // Adds class of current-menu-item to the menu item with a class of menu-item-2
            $(".menu-item-1").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-1
        } else { // If you have not scrolled section two do this.
            $(".menu-item-2").removeClass("current-menu-item"); // Removes class of current-menu-item to the menu item with a class of menu-item-2
        }
    });
});







// HAMBURGER NAV
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function navBurger() {
//   var x = document.getElementById("myTopNav");
//   if (x.style.display === "block") {
//     x.style.display = "none"
//     console.log(x.style.display);
//   } else {
//     x.style.display = "block";
//   }
// }





// //  sticky nav 
// // When the user scrolls the page, execute navScroll
// window.onscroll = function() {navScroll()};

// // Get the topnav
// var topnav = document.getElementById("topnav");

// // Get the offset position of the navbar
// var sticky = topnav.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickyNav() {
//   if (window.pageYOffset >= sticky) {
//     topnav.classList.add("sticky")
//   } else {
//     topnav.classList.remove("sticky");
//   }
// }