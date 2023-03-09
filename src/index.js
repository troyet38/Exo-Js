let btns = document.querySelectorAll('.btn-1');
let result1 = document.querySelector('.div-to-color-1');

let text1 = document.querySelector('.text');
let affiche = document.querySelector('.affiche');

let chiffre = document.querySelector('.chiffre');
let nb = document.querySelector('.nombre');

let form = document.querySelector('.form');
let text2A =document.querySelector('.text2-A');
let text2B =document.querySelector('.text2-B');
let affiche2 = document.querySelector('.affiche2');

let chiffre2 = document.querySelector('.chiffre2');
let nb2 = document.querySelector('.nombre2');

let language = document.querySelector('.language');
let affiche3 = document.querySelector('.affiche3');

let carre = document.querySelector('.carre')
let result2 = document.querySelector('.div-to-color-7');


let btns2 = document.querySelectorAll('.btn-3');
let result3 = document.querySelector('.div-to-color-8');


let check = document.querySelectorAll('.check');

let affiche4 = document.querySelector('.affiche4');



btns.forEach(element => {
    element.addEventListener('click',(e) => {
        result1.style.backgroundColor = e.target.textContent
    })
});


text1.addEventListener('input',(el) =>{
    affiche.textContent = el.target.value
})

chiffre.addEventListener('change',(el2)=>{
    nb.textContent = el2.target.value
})



form.addEventListener('submit',(e) => {
    e.preventDefault();
    affiche2.textContent = `${text2A.value} - ${text2B.value}`;
   
})
    



chiffre2.addEventListener('input',(el2)=>{
    nb2.textContent = el2.target.value
})


language.addEventListener('input',(el) =>{
    affiche3.textContent = el.target.value
})


carre.addEventListener('input',(el) =>{
    result2.style.backgroundColor = el.target.value;
    
})


btns2.forEach(element => {
    element.addEventListener('click',(el) => {
        result3.style.backgroundColor = el.target.value;
    })
    
});



check.forEach(element => {
    element.addEventListener('click',(e) => {
        affiche4.textContent = e.target.value
    })
});