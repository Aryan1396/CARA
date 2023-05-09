// Script for navigation bar
const colse = document.getElementById('colse');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
   bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
   
if (colse) {
    colse.addEventListener('click',() => {
         nav.classList.remove('active');
     })
 }
   