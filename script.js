function createCard(build) {

    const card = document.createElement("div");

    card.className = "build-card";


    card.innerHTML = `

       <img src="${build.cover}" 
     alt="${build.title}"
     loading="lazy">

        <div class="build-content">

            <h3>${build.title}</h3>

            ${build.room ? `<p>${build.room}</p>` : ""}

        </div>

    `;


    card.addEventListener("click", () => {

        openBuild(build);

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

displayBuilds();

let currentBuild = null;
let currentImage = 0;


function openBuild(build){

    currentBuild = build;
    currentImage = 0;

    document.getElementById("gallery-title").textContent = build.title;

    document.getElementById("gallery-image").src =
        build.cover;

    document.getElementById("gallery-modal").style.display = "flex";

}

document.getElementById("next-image").addEventListener("click",()=>{

    if(currentImage < currentBuild.images.length - 1){

        currentImage++;

        document.getElementById("gallery-image").src =
        currentBuild.images[currentImage];

    }

});


document.getElementById("prev-image").addEventListener("click",()=>{

    if(currentImage > 0){

        currentImage--;

        document.getElementById("gallery-image").src =
        currentBuild.images[currentImage];

    }

});

document.getElementById("prev-image").addEventListener("click",()=>{

    if(currentImage > 0){

        currentImage--;

        document.getElementById("gallery-image").src =
        "images/Babylon/" + currentBuild.images[currentImage];

    }

});
