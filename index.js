function loadContent(page) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = this.responseText;
        }
        if (page == "views/recipe") {
            loadRecipes();
        }
        //USTEDES AQUÍ ESTÁN CARGANDO MUY MANUALMENTE EL HTML
        //POR ESO DEBEN LLAMAR TMBMANUALMENTE EL JS Y EL CSS
        //EL CSS DIRÍA QUE LO DEJEN EN UN ARCHIVO ÚNICO POR ESTA VEZ
        //PUEDE HABER ERRORES DE CONSOLA DESPRECIABLES EN CUANTO A SINCRONÍA
    };
    xhttp.open('GET', page + '.html', true);
    xhttp.send();
}
// Manejo de eventos de clic en los enlaces de navegación

document.addEventListener('DOMContentLoaded', function () {
    let navLinks = document.querySelectorAll('nav ul a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            let page = this.getAttribute('href').substring(1);
            loadContent(page);
        });
    }
});

// let recipes = [];

//RECIPES
function loadRecipes() {
    for (let i = 0; i < entries.length; i++) {
        displayEntry(entries[i]);
    }
}

//EVENTOS DE INICIO
let entries = [
    {
        imgSrc: "Imagenes/Arepas.webp",
        title: "Arepa",
        ingredients: ["300 ml. of warm water.",
            "220 g. of P.A.N. or similar precooked corn flour",
            "1/2 dessert spoonful of salt (4 grams)"]
    },
    {
        imgSrc: "Imagenes/Arepas.webp",
        title: "Arepa2",
        ingredients: ["300 ml. of warm water.",
            "220 g. of P.A.N. or similar precooked corn flour",
            "1/2 dessert spoonful of salt (4 grams)"]
    },
    {
        imgSrc: "Imagenes/Arepas.webp",
        title: "Arepa3",
        ingredients: ["300 ml. of warm water.",
            "220 g. of P.A.N. or similar precooked corn flour",
            "1/2 dessert spoonful of salt (4 grams)"]
    }
];
let displayEntry = function (entry) {
    let newArticle = document.createElement("article");

    let newImg = document.createElement("img");
    let newh2 = document.createElement("h2");
    let newUl = document.createElement("ul");

    let newOl1 = document.createElement("ol");
    let newOl2 = document.createElement("ol");
    let newOl3 = document.createElement("ol");

    newImg.src = entry.imgSrc;
    newImg.style.height = "400px";
    newImg.style.width = "400px";

    newh2.innerText = entry.title;

    newOl1.innerText = entry.ingredients[0];
    newOl2.innerText = entry.ingredients[1];
    newOl3.innerText = entry.ingredients[2];

    newUl.appendChild(newOl1);
    newUl.appendChild(newOl2);
    newUl.appendChild(newOl3);

    newArticle.appendChild(newh2);
    newArticle.appendChild(newImg);
    newArticle.appendChild(newUl);

    let entriesContainer = document.getElementById("entries-container");
    entriesContainer.appendChild(newArticle);
};

loadContent("views/recipe");