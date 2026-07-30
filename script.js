function createCard(build) {

    const card = document.createElement("div");
    card.className = "card";


    card.innerHTML = `

        <img src="${build.cover}" alt="${build.title}">

        <div class="card-content">

            <h3>${build.title}</h3>

            <p>${build.description}</p>

            ${build.room ? `<p><strong>Room:</strong> ${build.room}</p>` : ""}

        </div>

    `;


    return card;

}



function displayBuilds() {


    const standalone = document.getElementById("standalone-builds");
    const collections = document.getElementById("collections");
    const oldBuilds = document.getElementById("old-builds");



    builds.forEach(build => {


        const card = createCard(build);



        if (build.section === "Standalone Builds") {

            standalone.appendChild(card);

        }


        else if (build.section === "Collections") {

            collections.appendChild(card);

        }


        else if (build.section === "Old Builds") {

            oldBuilds.appendChild(card);

        }


    });


}



displayBuilds();
