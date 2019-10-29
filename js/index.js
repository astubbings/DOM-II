// Your code goes here
const funBusTextChange =  document.querySelector('.logo-heading');

funBusTextChange.addEventListener("mouseenter", () => {
    funBusTextChange.style.transform = 'scale(1.5)';
    funBusTextChange.style.transition = 'all 500ms';
    funBusTextChange.style.border ='2px solid black';
    funBusTextChange.style.padding = '0 1%';
    funBusTextChange.style.color = "darkorange";
    funBusTextChange.textContent = "Funnner Busss";
})

funBusTextChange.addEventListener("mouseleave", () => {
    funBusTextChange.style.transform = 'scale(1)';
    funBusTextChange.style.transition = 'all 500ms';
    funBusTextChange.style.border ='2px solid yellow';
    funBusTextChange.style.padding = '1% 1% 0 1%';
    funBusTextChange.style.color = "black";
})

// prevent clicking through the link to google.com on about nav link. blocks all default events via click for all a tags in nav
const funBusNavNoLink = document.querySelectorAll('.nav a').forEach(eachNavA => {
    eachNavA.addEventListener("click", (event) => {
        event.preventDefault();
    })
})

const funBusNavTextChange = document.querySelectorAll('.nav a').forEach(eachNavA => {
    eachNavA.addEventListener("mouseover", () => {
    eachNavA.style.transform = 'scale(1.2)';
    eachNavA.style.transition = 'all 50ms';
    eachNavA.style.padding = '1px';
    eachNavA.style.border = '1px dotted firebrick';
    //eachNavA.preventDefault();
    })
})
const funBusNavTextChangeRemove = document.querySelectorAll('.nav a').forEach(eachNavA => {
    eachNavA.addEventListener("mouseleave", () => {
    eachNavA.style.transform = 'scale(1.0)';
    eachNavA.style.transition = 'all 2000ms';
    eachNavA.style.padding = '1px';
    eachNavA.style.border = '1px dotted white';
    })
})

// body color transistions
const bodyClick = document.querySelector('body');


bodyClick.addEventListener('mousemove', () => {
    bodyClick.style.transition = 'all 2500ms';
    bodyClick.style.backgroundColor = 'lightgoldenrodyellow';
})
bodyClick.addEventListener('click', () => {
    bodyClick.style.backgroundColor = 'mistyrose';
})
bodyClick.addEventListener('mouseleave', () => {
    bodyClick.style.backgroundColor = 'white';
})

// resize browser window changes all the paragraph text colors
const paragraphColorOnResize = document.querySelectorAll('p').forEach(eachPara => {
    window.addEventListener('resize', () => {
    eachPara.style.color = 'olive';
    })
})
// same for all h2 and h4
const h2ColorOnResize = document.querySelectorAll('.home h2,h4').forEach(eachH2 => {
    window.addEventListener('resize', () => {
    eachH2.style.color = 'firebrick';
    })
})

const injectTextPageLoaded = document.createElement('p');

document.querySelector('.footer').appendChild(injectTextPageLoaded);

window.addEventListener('load', () => {
    injectTextPageLoaded.textContent = 'page is fully loaded';
  })

