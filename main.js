const posts = [
    {
        id: 1,
        content:
            "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: "Phil Mangione",
            image: "https://unsplash.it/300/300?image=15",
        },
        likes: 80,
        created: "2021-06-25",
    },
    {
        id: 2,
        content:
            "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=112",
        author: {
            name: "Sofia Perlari",
            image: "https://unsplash.it/300/300?image=10",
        },
        likes: 120,
        created: "2021-09-03",
    },
    {
        id: 3,
        content:
            "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=234",
        author: {
            name: "Chiara Passaro",
            image: "https://unsplash.it/300/300?image=20",
        },
        likes: 78,
        created: "2021-05-15",
    },
    {
        id: 4,
        content:
            "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/300?image=233",
        author: {
            name: "Luca Formicola",
            image: "https://unsplash.it/300/300?image=56",
        },
        likes: 56,
        created: "2021-04-03",
    },
    {
        id: 5,
        content:
            "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        media: "https://unsplash.it/600/400?image=534",
        author: {
            name: "Alessandro Sainato",
            image: "https://unsplash.it/300/300?image=29",
        },
        likes: 95,
        created: "2021-03-05",
    },
];
{
    /* <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Phil Mangione</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="https://unsplash.it/600/300?image=171" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                </div>
            </div> 
        </div>            
    </div> */
}
const idList = [];
const authorList = [];
const createdList = [];
const contentList = [];
const mediaList = [];
const likesList = [];

posts.forEach((object) => {
    const { author } = object;
    authorList.push(author);
    const { created } = object;
    createdList.push(created);
    const { content } = object;
    contentList.push(content);
    const { media } = object;
    mediaList.push(media);
    const { likes } = object;
    likesList.push(likes);
    const { id } = object;
    idList.push(id);
});
console.log(mediaList);

const names = [];
const images = [];
authorList.forEach((obj) => {
    const { name } = obj;
    names.push(name);
    const { image } = obj;
    images.push(image);
});

const postsContainer = document.getElementById("container");
// Creating and appending children
let counter = 0;

posts.forEach(() => {
    const postElement = generateElement("div", "post");
    postsContainer.appendChild(postElement);

    const postHeader = generateElement("div", "post__header");
    postElement.appendChild(postHeader);

    const postMeta = generateElement("div", "post-meta");
    postHeader.appendChild(postMeta);

    const postMetaIcon = generateElement("div", "post-meta__icon");
    postMetaIcon.innerHTML += `<img class="profile-pic" src="${images[counter]}" alt="${names[counter]}">`;
    postMeta.appendChild(postMetaIcon);

    const postMetaData = generateElement("div", "post-meta__data");
    postMetaData.innerHTML += `<div class="post-meta__author">${
        names[counter]
    }</div>
        <div class="post-meta__time">${invertDate(createdList[counter])}</div>`;
    postMeta.appendChild(postMetaData);

    const postText = generateElement("div", "post__text");
    postText.innerHTML += contentList[counter];
    postElement.appendChild(postText);

    const postImage = generateElement("div", "post__image");
    postImage.innerHTML += `<img src="${mediaList[counter]}" alt="">`;
    postElement.appendChild(postImage);

    const postFooter = generateElement("div", "post__footer");
    postFooter.innerHTML += `<div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${idList[counter]}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
        </div>
        <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likesList[counter]}</b> persone
        </div>`;
    postElement.appendChild(postFooter);

    counter++;
});

function generateElement(tagName, className) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    return element;
}

function invertDate(string) {
    const year = string.slice(0, 4);
    const month = string.slice(4, 7);
    const day = string.slice(8);
    string = day + month + "-" + year;
    return string;
}
