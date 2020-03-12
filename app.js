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
                  <img class="portfolioImage" src="${projects[i].image}"></img>
                  <div class="cardstyle">
                      <h4>${projects[i].title}</h4>
                      <p>${projects[i].description}</p>
                      <a href="${projects[i].url}" target="_blank">learn more</a>
                      </br></br>
                  </div>
              </div>`
              $portfolioDiv.append($card)
          }
}

// HAMBURGER NAV
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function navBurger() {
  var x = document.getElementById("myTopNav");
  if (x.style.display === "block") {
    x.style.display = "none"
    console.log(x.style.display);
  } else {
    x.style.display = "block";
  }
}



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





// i'd like my array of projects to looks just like this...
// let projects = [
//   {title: 'Startup Matchmaker', image: 'image url', description: "some desc", url: 'url to project'}
// ]