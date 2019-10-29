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

const funBusNavTextChange = document.querySelectorAll('.nav a').forEach(eachNavA => {
    eachNavA.addEventListener("mouseover", () => {
    eachNavA.style.transform = 'scale(1.2)';
    eachNavA.style.transition = 'all 50ms';
    eachNavA.style.padding = '1px';
    eachNavA.style.border = '1px dotted firebrick';
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