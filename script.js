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
document.title = `${build.title} - Pixideus`;
document.getElementById("build-title").textContent = build.title;

document.getElementById("build-description").textContent = build.description;

document.getElementById("build-room").textContent = build.room;

const blueprintElement = document.getElementById("build-blueprint");

if (build.blueprint) {

    if (build.blueprint === "contact") {

        blueprintElement.innerHTML = `
            <span class="blueprint-link">Blueprint</span>
            <span class="blueprint-code">Contact me</span>
        `;

        const blueprintLink = blueprintElement.querySelector(".blueprint-link");
        const blueprintCode = blueprintElement.querySelector(".blueprint-code");

        blueprintCode.style.display = "none";

        blueprintLink.addEventListener("click", () => {

            const isHidden = blueprintCode.style.display === "none";

            blueprintCode.style.display = isHidden ? "inline-block" : "none";

        });

    } else if (build.blueprint === "soon") {

        blueprintElement.innerHTML = `
            <span class="blueprint-soon">Blueprint: soon</span>
        `;

    } else {

        blueprintElement.innerHTML = `
            <span class="blueprint-link">Blueprint</span>
            <span class="blueprint-code">${build.blueprint}</span>
            <button class="blueprint-copy">Copy</button>
        `;

        const blueprintLink = blueprintElement.querySelector(".blueprint-link");
        const blueprintCode = blueprintElement.querySelector(".blueprint-code");
        const blueprintCopy = blueprintElement.querySelector(".blueprint-copy");

        blueprintCode.style.display = "none";
        blueprintCopy.style.display = "none";

        blueprintLink.addEventListener("click", () => {

            const isHidden = blueprintCode.style.display === "none";

            blueprintCode.style.display = isHidden ? "inline-block" : "none";
            blueprintCopy.style.display = isHidden ? "inline-block" : "none";

        });

        blueprintCopy.addEventListener("click", async () => {

            await navigator.clipboard.writeText(build.blueprint);

            blueprintCopy.textContent = "Copied!";

            setTimeout(() => {
                blueprintCopy.textContent = "Copy";
            }, 1500);

        });

    }
}
}

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

    document.querySelector(".video-container").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

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


            if(e.key === "Escape"){


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

/*==========================
  Mobile Menu
==========================*/

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if(menuToggle && nav){

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");

        nav.classList.toggle("active");

    });

}
