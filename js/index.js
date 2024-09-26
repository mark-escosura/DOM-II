// Your code goes here

// ****** h1 ******

const allH1 = document.querySelector('.logo-heading');
    

allH1.addEventListener('mouseover', (event) =>{
    event.target.style.color = 'blue';
}, false);

allH1.addEventListener('mouseout', (event) => {
    event.target.style.color = '';
},false);

// ****** body ******
const body = document.querySelector('body');
body.addEventListener('keydown', () => {
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
})
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape"){
        document.classList.add("off");
    }
});

// ****** nav ******

const nav = document.querySelector('header nav');

nav.addEventListener('click', (event) => {
    event.preventDefault();
}, false);

nav.addEventListener('mouseover', (event) => {
    event.target.style.color = 'green';
}, false);

nav.addEventListener('mouseout', (event) => {
    event.target.style.color = '';
}, false);

// ****** h2 ******

const allH2 = document.querySelectorAll ('h2'); // querySelectorAll will make the declared variable an array
allH2.forEach(h2 => {
    h2.addEventListener('mouseover', (event) => {
        event.target.style.color = 'red';
    })

    h2.addEventListener('mouseout', (event) => {
        event.target.style.color = '';
    })
}, false);

// ****** images ******

const images = document.querySelectorAll('img');
images.forEach(img => { 
    img.addEventListener('mouseover', () => { 
        img.style.opacity = '.86';
    })

    img.addEventListener('mouseout', () => {
        img.style.opacity = '';
    })
}, false);

// ****** paragraph ******

const paraSelect = document.querySelectorAll('p');
paraSelect.forEach(p => {
    p.addEventListener('select', (event) => {
        event.target.style.backgroundColor = 'yellow';
    })
}, false);

// ****** button ******

const signMeUpButton = document.querySelector('.btn')
signMeUpButton.onclick = (event) => {
    console.log('What happen');
}

signMeUpButton.addEventListener('click', (event) => {
    console.log(event.target);
})

signMeUpButton.addEventListener('click', (event) => {
    if(event.target === signMeUpButton){
        alert('Sign-Up form is currently under construction!')
    }
});

signMeUpButton.addEventListener('blur', () => {
    if(event.target === signMeUpButton){
        signMeUpButton.style.filter = 'blur';
    }
})