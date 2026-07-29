const gallery = document.getElementById("gallery");

const filters = document.querySelectorAll(".filter");

const modal = document.getElementById("modal");

const closeModal = document.getElementById("closeModal");

const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalVideo = document.getElementById("modalVideo");

const previousImage = document.getElementById("previousImage");

const nextImage = document.getElementById("nextImage");



let currentBuild = null;

let currentImageIndex = 0;



// ===============================
// CREATION DES CARTES
// ===============================


function displayBuilds(category = "all"){


    gallery.innerHTML = "";


    builds.forEach((build)=>{


        if(
            category !== "all" &&
            !build.category.includes(category)
        ){

            return;

        }



        const card = document.createElement("article");


        card.className = "card";



        card.innerHTML = `

            <img src="${build.cover}" alt="${build.title}">


            <div class="card-content">


                <span class="category">

                    ${build.category.join(" / ")}

                </span>


                <h3>
                    ${build.title}
                </h3>


                <p>
                    ${build.description}
                </p>


            </div>

        `;



        card.addEventListener("click",()=>{

            openModal(build);

        });



        gallery.appendChild(card);



    });


}



// ===============================
// OUVERTURE MODAL
// ===============================


function openModal(build){


    currentBuild = build;

    currentImageIndex = 0;


    modalTitle.textContent = build.title;


    modalDescription.textContent = build.description;


    showImage();



    if(build.video){

        modalVideo.src = build.video;

        modalVideo.style.display="block";

    }
    else{

        modalVideo.src="";

        modalVideo.style.display="none";

    }



    modal.classList.add("show");


}





function showImage(){


    if(!currentBuild.images.length){

        return;

    }


    modalImage.src =
    currentBuild.images[currentImageIndex];


}





// ===============================
// GALERIE IMAGES
// ===============================


nextImage.onclick = ()=>{


    if(!currentBuild){

        return;

    }


    currentImageIndex++;


    if(
        currentImageIndex >= currentBuild.images.length
    ){

        currentImageIndex = 0;

    }


    showImage();


};




previousImage.onclick = ()=>{


    if(!currentBuild){

        return;

    }


    currentImageIndex--;


    if(currentImageIndex < 0){

        currentImageIndex =
        currentBuild.images.length - 1;

    }


    showImage();


};





// ===============================
// FERMETURE MODAL
// ===============================


closeModal.onclick = ()=>{


    modal.classList.remove("show");


    modalVideo.src="";


};




window.onclick = (event)=>{


    if(event.target === modal){

        modal.classList.remove("show");

        modalVideo.src="";

    }


};





// ===============================
// FILTRES
// ===============================


filters.forEach(button=>{


    button.addEventListener("click",()=>{


        filters.forEach(btn=>{

            btn.classList.remove("active");

        });



        button.classList.add("active");



        displayBuilds(
            button.dataset.filter
        );



    });


});





// ===============================
// INITIALISATION
// ===============================


displayBuilds();
