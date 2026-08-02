function createCard(build) {

    const card = document.createElement("div");

    card.className = "build-card";


    card.innerHTML = `
        <img src="${build.cover}" 
             alt="${build.title}"
             loading="lazy">

        <div class="build-content">
            <h3>${build.title}</h3>
            <p>${build.description}</p>
        </div>
    `;


    card.addEventListener("click", () => {

        window.location.href = `builds/build.html?id=${build.id}`;

    });


    return card;
}


function displayBuilds() {

    const buildsContainer = document.getElementById("builds-container");
    const legacyContainer = document.getElementById("legacy-container");

    if (!buildsContainer && !legacyContainer) {
        return;
    }

    builds.forEach(build => {

        const card = createCard(build);

        if (build.section === "My Builds" && buildsContainer) {

            buildsContainer.appendChild(card);

        }

        if (build.section === "Old Builds" && legacyContainer) {

            legacyContainer.appendChild(card);

        }

    });

}


if(typeof builds !== "undefined"){

    displayBuilds();

}

// =========================
// Build Page
// =========================

const params = new URLSearchParams(window.location.search);
const buildId = params.get("id");

if (buildId) {

    const build = builds.find(b => b.id === buildId);

    if (build) {

        document.getElementById("build-title").textContent = build.title;

        document.getElementById("build-description").textContent = build.description;

        document.getElementById("build-room").textContent = build.room;

        document.getElementById("breadcrumb-title").textContent = build.title;


       const video = document.getElementById("build-video");
const videoList = document.getElementById("video-list");


if (build.youtube) {

    video.src = build.youtube.replace("watch?v=", "embed/");

    video.title = build.title;

}


if (build.videos) {

    video.src = build.videos[0].url.replace("watch?v=", "embed/");

    build.videos.forEach((item, index) => {

     const button = document.createElement("button");

button.className = "video-thumb";

const img = document.createElement("img");

const play = document.createElement("span");

play.className = "play-icon";

play.innerHTML = "▶";

const videoId = item.url.split("watch?v=")[1];
img.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

img.alt = item.title;

button.appendChild(img);
button.appendChild(play);

button.addEventListener("click", () => {

    video.src = item.url.replace("watch?v=", "embed/");

});
const title = document.createElement("span");

title.className = "video-title";

title.textContent = item.title;

button.appendChild(title);
videoList.appendChild(button);
    });

}

       const gallery = document.getElementById("build-gallery");

build.images.forEach(image => {

    const img = document.createElement("img");

    img.src = "../" + image;

    img.dataset.full = "../" + image;

    img.alt = build.title;

    img.loading = "lazy";

    gallery.appendChild(img);

});

    }

}

// =========================
// Build Image Carousel Viewer
// =========================

document.addEventListener("DOMContentLoaded", () => {


    const galleryImages = document.querySelectorAll(".build-gallery img");

    const viewer = document.querySelector(".image-viewer");
    const viewerImage = document.querySelector(".image-viewer img");

    const closeViewer = document.querySelector(".close-viewer");

    const prevButton = document.querySelector(".prev-image");
    const nextButton = document.querySelector(".next-image");
console.log("Next button :", nextButton);

    let currentIndex = 0;



    function showImage(index) {

        currentIndex = index;

        viewerImage.src = galleryImages[currentIndex].dataset.full;

    }



    if(viewer && viewerImage){


        galleryImages.forEach((image, index) => {


            image.addEventListener("click", () => {


                showImage(index);

                viewer.classList.add("active");


            });


        });



        if(nextButton){

            nextButton.addEventListener("click", (event) => {

                event.stopPropagation();

                currentIndex++;

                if(currentIndex >= galleryImages.length){

                    currentIndex = 0;

                }

                showImage(currentIndex);

            });

        }



        if(prevButton){

            prevButton.addEventListener("click", (event) => {

                event.stopPropagation();

                currentIndex--;

                if(currentIndex < 0){

                    currentIndex = galleryImages.length - 1;

                }

                showImage(currentIndex);

            });

        }



        if(closeViewer){

            closeViewer.addEventListener("click", () => {

                viewer.classList.remove("active");

            });

        }

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        viewer.classList.remove("active");

    }

});

        viewer.addEventListener("click", (event) => {


            if(event.target === viewer){

                viewer.classList.remove("active");

            }


        });


    }


});


console.log("Script chargé");

const cursorChoice = document.getElementById("cursor-choice");

const cursors = {

    default: null,

    crystal: "images/cristalbleucursor.webp",
    horde: "images/horde.png",
    alliance: "images/alliance.png",
    bottle: "images/bottle.webp",
    flower: "images/flower.webp",
    kirin: "images/kirin.webp",
    mrjigglesworth: "images/mrjigglesworth.png",
    murloc: "images/murloc.webp",
    pepe: "images/pepe.webp",
    ink: "images/plumes.webp",
    lantern: "images/lanter.webp"

};


cursorChoice.addEventListener("change", function(){

    const selected = cursors[this.value];


    if(selected){

        document.documentElement.style.cursor =
        `url("${selected}") 16 16, auto`;

        document.body.style.cursor =
        `url("${selected}") 16 16, auto`;

        magicTrailEnabled = true;

    } else {

        document.documentElement.style.cursor = "";
        document.body.style.cursor = "";

        magicTrailEnabled = false;

    }

});
let magicTrailEnabled = false;


document.addEventListener("mousemove", function(e){

    if (!magicTrailEnabled) return;


    const particle = document.createElement("div");

    particle.className = "magic-particle";

    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";

    document.body.appendChild(particle);


    setTimeout(() => {
        particle.remove();
    }, 800);

});
