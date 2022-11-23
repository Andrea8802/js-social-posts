const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Ciclo per aggiungere post
posts.forEach((element, i) => {

    // Container
    document.getElementById("container").innerHTML += `<div class="post"></div>`;
    
    // Header-----

    // Post
    const post = document.getElementsByClassName("post");
    post[i].innerHTML += `<div class="post__header"> <div class="post-meta"></div> </div>`;

    // Immagine profilo
    const postMeta = document.getElementsByClassName("post-meta");
    postMeta[i].innerHTML += `<div class="post-meta__icon"> <img class="profile-pic" src="${element.author.image}" alt="${element.author.image === null ? nameSplit(element.author.name) : ""}"> </div>`;
    postMeta[i].innerHTML += `<div class="post-meta__data"></div>`;
    
    // Body-----

    // Nome e data creazione post
    const postMetaData = document.getElementsByClassName("post-meta__data");
    postMetaData[i].innerHTML += `<div class="post-meta__author">${element.author.name}</div>`;
    postMetaData[i].innerHTML += `<div class="post-meta__time">${element.created.split("-").reverse().join("-")}</div>`;

    // Testo e contenuto
    post[i].innerHTML += `<div class="post__text">${element.content}</div>`
    post[i].innerHTML += `<div class="post__image"> <img src="${element.media}"> </div>`;
    post[i].innerHTML += `<div class="post__footer"></div>`;

    // Footer-----

    const postFooter = document.getElementsByClassName("post__footer");
    postFooter[i].innerHTML = `<div class="likes js-likes"> <div class="likes__cta"></div> </div>`;

    // Sezione like con pulsante
    const likes = document.getElementsByClassName("likes");
    const likesCta = document.getElementsByClassName("likes__cta");
    likesCta[i].innerHTML = `<a class="like-button  js-like-button"  data-postid="${element.id}">
    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
    <span class="like-button__label">
    Mi Piace
    </span>
    </a>`;

    // Contatore Like
    likes[i].innerHTML += `<div class="likes__counter"> Piace a <b id="like-counter-1" class="js-likes-counter">${element.likes}</b> persone </div>`
});

// Array con id dei post piaciuti
const liked = [];

// Click sul tasto like
for(let i = 0; i < posts.length; i++){
    document.getElementsByClassName("like-button")[i].addEventListener("click",
        function(){
            this.classList.add("like-button--liked");
            liked.push(posts[i].id);
        }
    )
};

// Funzione per recuperare le prime lettere del nome
function nameSplit(splitName){
    const nameArray = splitName.split(" ");
    let finalArray = [];
    nameArray.forEach (element => {
        finalArray.push(element.charAt(0));
    })
    console.log(finalArray);
    return finalArray;
}

