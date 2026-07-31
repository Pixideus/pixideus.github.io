function createCard(build) {

    const card = document.createElement("div");

    card.className = "build-card";


    card.innerHTML = `

        <img src="${build.cover}" alt="${build.title}">

        <div class="build-content">

            <h3>${build.title}</h3>

            <p>${build.description}</p>

        </div>

    `;


    return card;

}



function displayBuilds() {


    const buildsContainer = document.getElementById("builds-container");


    builds.forEach(build => {


        if (build.section === "My Builds") {

            const card = createCard(build);

            buildsContainer.appendChild(card);

        }


    });


}



displayBuilds();
