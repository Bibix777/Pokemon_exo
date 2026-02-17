"use strict";
const form = document.querySelector('.formulaire');
const div = document.querySelector('div');
const ul = document.querySelector('.list');


form.addEventListener('submit', onSubmit);

function onSubmit(event){
    event.preventDefault();
    div.innerText = "";

    const term = form.elements.search.value;
    const url = "https://web.mayfly.ovh/proxy/pokeapi.php?endpoint=pokemon/"+ term;
    fetch(url)
        .then(function(res){
            return res.json();
        }) 
        .then(function(data){ 
            const img = document.createElement('img');
            div.innerText = data.name;
            img.src = data.sprites.front_default;
            div.appendChild(img);
            
            const li = document.createElement('li');
            li.innerText = data.stats
            ul.appendChild(li);
        })
    
};
