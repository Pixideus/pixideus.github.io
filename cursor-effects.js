/* =========================================
   Pixideus Cursor Effects
   Magic dust trail
========================================= */


document.addEventListener("DOMContentLoaded", () => {


    const cursorChoice = document.getElementById("cursor-choice");


    if (!cursorChoice) return;



    let selectedEffect = "default";



    const colors = {

        crystal: "#35b8ff",
        horde: "#ff3030",
        alliance: "#4da6ff",
        bottle: "#65ff65",
        flower: "#ff8fd8",
        kirin: "#b05cff",
        mrjigglesworth: "#66ff66",
        murloc: "#4fffff",
        pepe: "#ffe9a3",
        lantern: "#ff6600",
        rainbow: "rainbow"

    };



    const cursors = {

        crystal: "images/pointeur/cristalbleucursor.webp",
        horde: "images/pointeur/horde.png",
        alliance: "images/pointeur/alliance.png",
        bottle: "images/pointeur/bottle.webp",
        flower: "images/pointeur/flower.webp",
        kirin: "images/pointeur/kirin.webp",
        mrjigglesworth: "images/pointeur/mrjigglesworth.png",
        murloc: "images/pointeur/murloc.webp",
        pepe: "images/pointeur/pepe.webp",
        lantern: "images/pointeur/lantern.webp"

    };



    cursorChoice.addEventListener("change", function(){


        selectedEffect = this.value;



        if(selectedEffect === "default"){

            document.body.style.cursor = "default";

        }
        else if(cursors[selectedEffect]){


            document.body.style.cursor =
            `url(${cursors[selectedEffect]}), auto`;

        }


    });





    document.addEventListener("mousemove", function(e){


        if(selectedEffect === "default") return;



        const particle = document.createElement("span");


        particle.className = "pixideus-particle";



        particle.style.left = (e.clientX + 8) + "px";
particle.style.top = (e.clientY + 10) + "px";


        if(selectedEffect === "rainbow"){


            particle.style.background =
            `hsl(${Math.random()*360},100%,70%)`;


        }
        else {


            particle.style.background =
            colors[selectedEffect];


        }



        document.body.appendChild(particle);



        setTimeout(() => {


            particle.remove();


        },500);



    });



});
