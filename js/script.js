"use strict";

const fisk = [
    {
        id: "idKlovnefisk",
        name: "Klovnefisk",
        color: "orange,hvid,sort",
        size: "10-12cm",
        food: "smaa krebsdyr,plankton/alger",
        lifespan:"6-10aar",
        sound: "sound/nemo.wav",
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
        id: "idSortbaandetkirurg",
        name: "Sortbaandet kirug",
        color: "soelv, sort og gulgroen",
        size: "22-26 cm",
        food: "alger og plantefoede",
        lifespan:"op til 7 aar ",
        sound: "hvid-sort-fisk.wav",
        svg: "img/sortbaandet-kirurg.svg",


    },

    {
        id: "idRosaAntias",
        name: "Rosa Anthias",
        color: "rosa",
        size: "ca. 8-15 cm",
        food: "plankton og smaa krebsdyr",
        lifespan: "5-7 aar",
        sound: "kommer",
        svg: "img/rosa-lille-antias.svg",
    },

    {
        id: "idLillaAntias",
        name: "Lilla Anthias",
        color: "lilla",
        size: "ca. 8-15 cm",
        food: "plankton og smaa krebsdyr",
        lifespan: "5-7 aar",
        svg: "img/lilla-lille-antias.svg",
    }


]
console.log(fisk)



const bgMusic = document.getElementById("bgMusic");

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


    


    