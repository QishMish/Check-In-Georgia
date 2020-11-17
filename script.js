// hamburger
const hamburgerMenu = document.querySelector(".hamburger-menu");
const links = document.querySelector(".links");

hamburgerMenu.addEventListener("click", ()=>{
    links.classList.toggle("show-links");
})

const navbar = document.querySelector(".navbar");
const topLink = document.querySelector(".scroll-top");

// scroll
window.addEventListener("scroll",  ()=> {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 500) {

    topLink.classList.add("show-top");
  } else {
    topLink.classList.remove("show-top");
  }
});

topLink.addEventListener("click", ()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior: "smooth"
    });

});

const scrollLinks =  document.querySelectorAll(".link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    console.log(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const linksheight = links.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;
    

    window.scrollTo({
        top: position,
        left:0,
        behavior: "smooth"
    });
  });
});


// slider

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);

// time
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();