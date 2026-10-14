"use strict";

const fisk = [
    {
        id: "idKlovnefisk",
        name: "Klovnefisk",
        color: "orange,hvid,sort",
        size: "10-12cm",
        food: "smaa krebsdyr,plankton/alger",
        lifespan:"6-10aar",
        sound: "klovnfisk.wav",
        svg: "img/klovnefisk.svg",
    },


     {
        id: "idPincetfisk",
        name: "Pincetfisk",
        color: "gul, blaa",
        size: "18-22 cm",
        food: "smaa krebsdyr, fiskeaeg og smaa havdyr",
        lifespan:"op til 18 aar ",
        sound: "kommer",
        svg: "img/pincetfisk.svg",
    },

         {
        id: "idDvaergkejser",
        name: "Dvaergkejser",
        color: "roed, moerkeblaa, blaa og lilla",
        size: "12-15 cm",
        food: "smaa krebsdyr og alger",
        lifespan:"op til 7 aar ",
        sound: "kommer",
        svg: "img/dvaergkejser.svg",
    },


       {
        id: "idSortbaandet-kirurg",
        name: "Sortbaandet kirug",
        color: "soelv, sort og gulgroen",
        size: "22-26 cm",
        food: "alger og plantefoede",
        lifespan:"op til 7 aar ",
        sound: "hvid-sort-fisk.wav",
        svg: "img/sortbaandet-kirurg.svg",


    },

     {
        id: "idLilla-lille-antia",
        name: "Lilla Anthias",
        color: "lilla",
        size: "ca. 8-15 cm",
        food: "plankton og smaa krebsdyr",
        lifespan: "5-7 aar",
        svg: "img/lilla-lille-antias.svg",
    },

    {
        id: "idOrange-lille-antias",
        name: "Orange Anthias",
        color: "lilla",
        size: "ca. 8-15 cm",
        food: "plankton og smaa krebsdyr",
        lifespan: "5-7 aar",
        svg: "img/lilla-lille-antias.svg",

    },

    {
        id: "idRosa-lille-antias",
        name: "Rosa Anthias",
        color: "rosa",
        size: "ca. 8-15 cm",
        food: "plankton og smaa krebsdyr",
        lifespan: "5-7 aar",
        sound: "kommer",
        svg: "img/rosa-lille-antias.svg",
    }

    


]
console.log(fisk)



const fishInfo = document.getElementById("fishInfo");

fisk.forEach(function(fiskObj) {
    const fishElement = document.getElementById(fiskObj.id);

    fishElement.addEventListener("click", function() {
      console.log("Du klikkede på:", fiskObj.name);
    fishInfo.innerHTML = `
    <strong>${fiskObj.name}</strong> <br>
    Farve:${fiskObj.color} <br>
    Størrelse:${fiskObj.size} <br>
    Spiser:${fiskObj.food} <br>
    Levetid:${fiskObj.lifespan} <br>
`
    fishInfo.classList.add("show");
      
    });
     
});



// stemme til pincetfisk (fisk2)
const pincetfisk = document.getElementById("idPincetfisk");

pincetfisk.addEventListener("click", function() {
    const audio = new Audio("sound/pincetfisk.wav");
    audio.play();
});


// stemme til dværgkejser (fisk3)
const dvaergkejser = document.getElementById("idDvaergkejser");

dvaergkejser.addEventListener("click", function() {
    const audio = new Audio("sound/dværgkejser.wav");
    audio.play();
});


// stemme til dværgkejser (fisk4)
const sortbaandet = document.getElementById("idSortbaandet-kirurg");

sortbaandet.addEventListener("click", function() {
    const audio = new Audio("sound/sortbaandet.fisk.wav");
    audio.play();
});


// stemme til lilla-lille-antia (fisk5)
const lilla = document.getElementById("idLilla-lille-antia");

lilla.addEventListener("click", function() {
    const audio = new Audio("sound/lilla.fisk.wav");
    audio.play();
});


// stemme til orange-lille-antias (fisk6)
const orange = document.getElementById("idOrange-lille-antias");

orange.addEventListener("click", function() {
    const audio = new Audio("sound/lille.orange.fisk.wav");
    audio.play();
});


// stemme til rosa-lille-antias (fisk7)
const rosa = document.getElementById("idRosa-lille-antias");

rosa.addEventListener("click", function() {
    const audio = new Audio("sound/rosa.fisk.wav");
    audio.play();
});




document.addEventListener("click", function () {
    bgMusic.play();
});


const bg = document.getElementById("bg");

function createBubble() {
  const bubble = document.createElement("div");

  const size = Math.random() * 30 + 10;

  bubble.classList.add("bubble");

  bubble.style.width = size + "px";
  bubble.style.height = size + "px";

  bubble.style.left = Math.random() * 100 + "%";

  bubble.style.animationDuration =
    (Math.random() * 4 + 4) + "s";

  bg.appendChild(bubble);

  bubble.addEventListener("animationend", () => {
    bubble.remove();
  });
}

setInterval(createBubble, 300);






    