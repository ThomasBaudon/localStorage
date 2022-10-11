'use strict';

console.log('hello');

const main = document.querySelector('main');
const h1 = document.querySelector('h1');
const paragraph = document.querySelector('p');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const clear = document.querySelector('#clear');

var h1_value = document.getElementById('h1').innerText;
var p_value = document.querySelector('p').innerText;



/* ADD/MINUS PARAGRAPHs */
plus.addEventListener('click', add_paragraph);
minus.addEventListener('click', remove_paragraph);

/**
 * add paragraph in <main>
 */
function add_paragraph() {
    let para = document.createElement('p');
    para.setAttribute("class", "para");
    para.setAttribute("contenteditable", "true");
    para.innerText = 'Ajouter votre contenu ici...';
    main.append(para);
}

/**
 * remove paragraph in <main>
 */
function remove_paragraph() {
    const paragraph = document.getElementsByTagName('p');

    // console.log(paragraph);

    if(!paragraph[1].classList.contains('para')) {
       console.log('Je ne peux pas supprimer ce qui n’exite pas');
    } else{
        const main = document.getElementById('main');
        main.removeChild(main.lastElementChild);
    }
}

/* LOCAL STORAGE */

// document.body.onkeyup = (e) =>{
//     localStorage.setItem('titre', document.getElementById('h1').textContent);
//     localStorage.setItem('paragraphe', document.getElementById('para').textContent);
// }

// if(localStorage.getItem('titre') != null)
//     h1.textContent = localStorage.getItem('titre');

// if(localStorage.getItem('paragraphe') != null)
//     paragraph.textContent = localStorage.getItem('paragraphe');



document.body.onkeyup = (e)=> {

    localStorage.setItem('contenu', document.getElementById('main').innerHTML)
}
  
if(localStorage.getItem('contenu')){
    document.querySelector('main').innerHTML = localStorage.getItem('contenu') 
}

/**
 * clear the localStorage
 */
clear.addEventListener('click', () =>{
    localStorage.clear();
    console.log('clear!');
    document.location.reload();
})

/* INUTILE */

// window.onclick = function(e) {
//     console.log(e.target);
// }


/* MODIFY TITLE & PARAGRAPH */

// h1.addEventListener('click', () =>{
//     h1.innerText = 'Écrire et sauvegarder';
// });

// paragraph.addEventListener('click', () =>{
//     paragraph.innerText = 'Savais tu que tu pouvais écrire et sauvegarder ton contenu dans le navigateur';
// });