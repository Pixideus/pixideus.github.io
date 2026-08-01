function createCard(build) {

    const column = document.createElement("div");

    column.className = "col-xl-3 col-lg-4 col-md-6";


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


    column.appendChild(card);

    return column;

}
function displayBuilds() {

    const buildsContainer = document.getElementById("builds-container");
    const legacyContainer = document.getElementById("legacy-container");


    builds.forEach(build => {

        const card = createCard(build);


        if (build.section === "My Builds") {

            buildsContainer.appendChild(card);

        }


        if (build.section === "Old Builds") {

            legacyContainer.appendChild(card);

        }

    });

}
