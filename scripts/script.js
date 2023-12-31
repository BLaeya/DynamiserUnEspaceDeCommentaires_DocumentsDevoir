// Fonctionnalité message d'erreur
const errorMessage = document.getElementById("error-message");

const error = () => {
    errorMessage.style.display = "contents";
};


// Fonctionnalité vérification du remplissage des champs
const firstname = document.getElementById("first-name");
const lastname = document.getElementById("last-name");
const message = document.getElementById("message");
const divInput = document.querySelectorAll("[class = 'mt-1']");

function formEmpty () {
    let isFormEmpty = false;
    
    divInput.forEach((element) => {
        switch (element.firstElementChild) {
            case firstname:
                if (firstname.value == "") {
                    error();
                    isFormEmpty = true;
                }
                break;
            case lastname:
                if (lastname.value == "") {
                    error();
                    isFormEmpty = true;
                }
                break;
            case message:
                if (message.value == "") {
                    error();
                    isFormEmpty = true;
                }
                break;
        }
    });

    return isFormEmpty;
};


// Fonctionnalité ajout d'un commentaire
const commentList =  document.getElementById("comment-list");

function addAComment () {
if (!formEmpty()) {

    let commentSection = document.createElement("div");
    commentSection.className = "flex space-x-4 text-sm text-gray-500";
    let nameDiv = document.createElement("div");
    nameDiv.className = "flex-1 py-10 border-t border-gray-200";
    let nameTitle = document.createElement("h3");
    nameTitle.className = "font-medium text-gray-900";
    let name = document.createTextNode(`${firstname.value} ${lastname.value}`);
    let commentDiv = document.createElement("div");
    commentDiv.className = "prose prose-sm mt-4 max-w-none text-gray-500";
    let comment = document.createElement("p");
    let commentContent = document.createTextNode(message.value);

    comment.appendChild(commentContent);
    commentDiv.appendChild(comment);

    nameTitle.appendChild(name);
    nameDiv.appendChild(nameTitle);
    nameDiv.appendChild(commentDiv);

    commentSection.appendChild(nameDiv);

    commentList.appendChild(commentSection);

    // Nettoyage du formulaire
    firstname.value = "";
    lastname.value = "";
    message.value = "";
    }
}

// Fonctionnalité validation
const submit = document.querySelector("button");

submit.addEventListener("click", (e) => {
    e.preventDefault();
    addAComment();    
})


