let reviews = [{
        id: 1,
        name: "Moein",
        job: "IT head",
        img: "https://i.ibb.co/KjgqkMz/Screenshot-2022-11-27-at-8-08-39-PM.png",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores iure, dignissimos facere fuga molestiaesoluta id. Deserunt iure excepturi amet voluptatibus enim, est recusandae ipsa? Excep"
    },
    {
        id: 2,
        name: "anna johnson",
        job: "Mentor",
        img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        msg: "Sharpen your JavaScript skills by building 15 projects using plain JavaScript without frameworks. In this tutorial course, you will be taught step-by-step how to build JavaScript projects."
    },
    {
        id: 3,
        name: "peter jones",
        job: "null",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        msg: "Sharpen your JavaScript skills by building 15 projects using plain JavaScript without frameworks. In this tutorial course, you will be taught step-by-step how to build JavaScript projects."
    },
    {
        id: 4,
        name: "bill anderson",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        msg: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
    }
]

let name = document.getElementById('name');
let job = document.getElementById('job');
let img = document.getElementById('img');
let text = document.getElementById('msg');


let leftArrow = document.getElementById('one');
let rightArrow = document.getElementById('two');
let surpriseBtn = document.getElementById('three');

let currentUser = 0;
// window.addEventListener('DOMContentLoaded', () => {
//     const user = reviews[currentUser];
//     img.src = user.img;
//     name.textContent = user.name;
//     job.textContent = user.job;
//     text.textContent = user.msg;
// })

function showPerson(person) {
    const user = reviews[person];
    img.src = user.img;
    name.textContent = user.name;
    job.textContent = user.job;
    text.textContent = user.msg;
}
rightArrow.addEventListener('click', () => {
    currentUser++;
    if (currentUser > reviews.length - 1) {
        currentUser = 0;
    }
    showPerson(currentUser);
})

leftArrow.addEventListener('click', () => {
    currentUser--;
    if (currentUser < 0) {
        currentUser = reviews.length - 1;
    }
    showPerson(currentUser);
})

surpriseBtn.addEventListener('click', () => {
    currentUser = Math.floor(Math.random() * reviews.length);
    showPerson(currentUser);
})