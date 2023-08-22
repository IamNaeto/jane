/** active header when window scroll down to 100px **/
const header = document.querySelector("header");
const headerContainer = document.querySelector(".header-container");
const boxShadowValue = "0 0 20px hsla(216, 14%, 14%, 0.05)"
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "#fff";
    header.style.paddingTop = "5px";
    header.style.paddingBottom = "5px";
    header.style.boxShadow = boxShadowValue;
    headerContainer.style.boxShadow = ""
    headerContainer.style.paddingLeft = "0px";
    headerContainer.style.paddingRight = "0px";
  } else {
    header.style.backgroundColor = "#f6f7f9";
    header.style.paddingTop = "15px";
    header.style.paddingBottom = "15px";
    header.style.boxShadow = ""
    headerContainer.style.boxShadow = boxShadowValue;
    headerContainer.style.paddingLeft = "20px";
    headerContainer.style.paddingRight = "20px";
  }
});

// Footer Date Update
const currentYearContainer = document.querySelector(".currentYearContainer")
const date = new Date()
const currentYear = date.getFullYear()
currentYearContainer.innerText = currentYear


// Scroll Reveal Animation
// Hero Section
let heroText = document.querySelector('.info');
let heroImg = document.querySelector('.hero-img');

ScrollReveal().reveal((heroText), {
scale: 0.2,
interval: 500,
delay: 300,
reset: true,
viewFactor: 0.3
});

ScrollReveal().reveal((heroImg), {
scale: 0.4,
interval: 300,
delay: 500,
reset: true,
easing: 'ease-out',
viewFactor: 0.3
  });


// About section
let aboutHeading = document.querySelector('.about-heading');
let aboutText = document.querySelector('.aboutText');
let aboutIntro = document.querySelectorAll('.box');
let aboutTextBtn = document.querySelectorAll('.bar');
ScrollReveal().reveal((aboutHeading), {
scale: 0.85,
delay: 300,
reset: true,
easing: 'ease-in',
});

ScrollReveal().reveal((aboutText), 
{
scale: 0.85,
delay: 500,
interval: 500,
reset: true,
rotate: {
x: 70,
z: 70
},
viewFactor: 0.4

});

ScrollReveal().reveal((aboutIntro), {
  delay: 400,
  reset: true,
  easing: 'ease-in',
  });

ScrollReveal().reveal((aboutTextBtn), {
scale: 0.85,
easing: 'steps(5)',
delay: 600,
reset: true,
viewFactor: 0.2
});


// Service Section 
let serviceHeading = document.querySelector('.serviceHeading');
let serviceIntro = document.querySelector('.serviceIntro');
let serviceCard = document.querySelectorAll('.service-col');

ScrollReveal().reveal((serviceHeading), {
scale: 0.85,
delay: 300,
reset: true,
easing: 'ease-in',
});

ScrollReveal().reveal((serviceCard), {
origin: 'bottom',
scale: 0.45,
interval: 300,
delay: 500,
reset: true,
easing: 'ease-out',
viewFactor: 0.3
});

ScrollReveal().reveal((serviceIntro), {
  delay: 400,
  reset: true,
  easing: 'ease-in',
  });


// Project Section
let projectHeading = document.querySelector('.project-heading');
let projectCol = document.querySelectorAll('.img');
let text = document.querySelectorAll('.text');
let proIntro = document.querySelector('.proIntro');

ScrollReveal().reveal((text), {
scale: 0.2,
easing: 'ease-out',
interval: 500,
delay: 300,
reset: true,
viewFactor: 0.3
});

ScrollReveal().reveal((projectHeading), {
scale: 0.85,
delay: 400,
reset: true,
easing: 'ease-in',
viewFactor: 0.3
});

ScrollReveal().reveal((projectCol), {
scale: 0.85,
delay: 500,
interval: 500,
reset: true,
rotate: {
x: 70,
z: 70
},
viewFactor: 0.3
});

ScrollReveal().reveal((proIntro), {
  delay: 400,
  reset: true,
  easing: 'ease-in',
  });


// contact section
let contactText = document.querySelector('.contact-text');
let input = document.querySelectorAll('input');
let sendBtn = document.querySelector('.sendBtn');
let textarea = document.querySelector('textarea');

ScrollReveal().reveal((contactText), {
  scale: 0.4,
  interval: 300,
  delay: 500,
  reset: true,
  easing: 'ease-out',
  viewFactor: 0.3
});

ScrollReveal().reveal((input), 
{
  scale: -0.4,
  delay: 400,
  reset: true,
  rotate: {
  x: 9,
  z: 9
  },
});
ScrollReveal().reveal((sendBtn), 
{
  scale: -0.4,
  delay: 400,
  reset: true,
  rotate: {
  x: 9,
  z: 9
  },
});

ScrollReveal().reveal((textarea), 
{
  scale: -0.4,
  delay: 400,
  reset: true,
  rotate: {
  x: 9,
  z: 9
  },
});

// Footer section
let rights = document.querySelector('.rights');
let socials = document.querySelectorAll('.socials');

ScrollReveal().reveal((rights), {
scale: 0.85,
easing: 'ease-in',
delay: 400,
reset: true,
viewFactor: 0.3
});


ScrollReveal().reveal((socials), {
scale: 0.45,
delay: 500,
reset: true,
easing: 'ease-in',
viewFactor: 0.3
});