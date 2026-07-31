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


    builds.forEach(build => {


        if (build.section === "My Builds") {

            const card = createCard(build);

            buildsContainer.appendChild(card);

        }


    });


}



displayBuilds();

function openBuild(build){

    alert(build.title);

}
