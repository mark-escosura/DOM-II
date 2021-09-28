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



// Images
const images = document.querySelector('.home .intro img');

images.addEventListener('dblclick', () => {
    
});
console.log(images);
// Welcome Sign




