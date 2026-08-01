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

    builds.forEach(build => {

        const card = createCard(build);

        if (build.section === "My Builds") {

            buildsContainer.appendChild(card);

        }

        if (build.section === "Old Builds" && legacyContainer) {

            legacyContainer.appendChild(card);

        }

    });

}

let currentBuild = null;
let currentImage = 0;


function openBuild(build){

    currentBuild = build;
    currentImage = 0;

    document.getElementById("gallery-title").textContent = build.title;

    document.getElementById("gallery-image").src =
        build.images[currentImage];

    document.getElementById("gallery-modal").style.display = "flex";

}



const nextImage = document.getElementById("next-image");

if(nextImage){

    nextImage.addEventListener("click", ()=>{

        if(!currentBuild) return;


        if(currentImage < currentBuild.images.length - 1){

            currentImage++;

            document.getElementById("gallery-image").src =
                currentBuild.images[currentImage];

        }

    });

}



const prevImage = document.getElementById("prev-image");

if(prevImage){

    prevImage.addEventListener("click", ()=>{

        if(!currentBuild) return;


        if(currentImage > 0){

            currentImage--;

            document.getElementById("gallery-image").src =
                currentBuild.images[currentImage];

        }

    });

}
if(typeof builds !== "undefined"){

    displayBuilds();

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



        viewer.addEventListener("click", (event) => {


            if(event.target === viewer){

                viewer.classList.remove("active");

            }


        });


    }


});


console.log("Script chargé");
