let cloud1 = document.querySelector('.cloud1')
let cloud2 = document.querySelector('.cloud2')
let cloud3 = document.querySelector('.cloud3')
let boat = document.querySelector('.boat')
let logo = document.querySelector('.logo')
let Abt = document.querySelector('.Abt')
window.addEventListener('scroll', () => {

let windowY = window.scrollY
cloud1.style.transform = `translate(-${windowY}px)`
cloud2.style.transform = `translate(${windowY}px)`
cloud3.style.transform = `translate(${windowY}px)`
boat.style.transform = `translate(-${windowY}px)`
logo.style.transform = `translate(${windowY}px)`
Abt.style.transform = `translate(-${windowY}px)`

})