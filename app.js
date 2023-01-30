// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class
let menu = document.querySelector('.fa-sharp');
let list = document.querySelector('.links')
let nav = document.querySelector('nav')

menu.addEventListener('click',()=>{
    menu.classList.toggle('rotate');
    list.classList.toggle('col2');
})
