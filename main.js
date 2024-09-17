const jokecontainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getjoke = async ()=>{
    let response = await fetch(url);
    let data = await response.json();
    jokecontainer.innerHTML = data.joke;
}

btn.addEventListener('click',getjoke);