// Your code goes here
// ****** header ******

// heading 
const headerHeading = document.querySelector('.logo-heading');
    

headerHeading.addEventListener('mouseover', (event) =>{
    event.target.style.color = 'blue';
    // setTimeout(function(){
    //     event.target.style.color = '';
    // }, 1000);
}, false);
headerHeading.addEventListener('mouseout', (event) => {
    event.target.style.color = '';
},false);

// nav 
const nav = document.querySelector('header nav');

nav.addEventListener('click', (event) =>{
    event.preventDefault();
});

nav.addEventListener('mouseover', (event) =>{
    event.target.style.color = 'green';
    // setTimeout(function(event) { // determines how long the event will last
    //     event.target.style.color = '';
    // }, 1000);
}, false);
nav.addEventListener('mouseout', (event) =>{
    event.target.style.color = '';
}, false);

const allH2 = document.querySelectorAll ('h2'); // querySelectorAll will make the declared variable an array
allH2.forEach(h2 => {
    h2.addEventListener('mouseover', (event) => {
        event.target.style.color = 'red';
        setTimeout (() => {
            alert('press the "Escape" key to see some magic');
        }, 1000);
    })
    h2.addEventListener('mouseout', (event) => {
        event.target.style.color = '';
        setTimeout (() => {
            alert('press the "Escape" key to see some magic');
        }, 1000);
    })    

}, false);

// Images
const images = document.querySelectorAll('img');
images.forEach((e) => {
    images.addEventListener('dblclick', () => {
        e.target.style.opacity = '.50';
    });
},false);
console.log(images);