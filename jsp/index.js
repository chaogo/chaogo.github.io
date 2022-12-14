// import data from './json/content.json'  assert { type: 'JSON' };

let height_array = [];
let profile;
let education;
let experience;
let abilities;
let projects;
let contact;
let messageBtn;
let messageForm;

let content={
    "profile":{
        "aboutMe":"balabala"
    },
    "education":[
        {"description":"balabala"},
        {"description":"balabala"},
        {"description":"balabala"}
    ],
        
    "experience":[
        {"description":"balabala"},
        {"description":"balabala"},
        {"description":"balabala"}
    ],
    "abilities":[
        {"skill":"Python","score":5},
        {"skill":"HTML(5)","score":5},
        {"skill":"CSS(3)","score":5},
        {"skill":"Javascript","score":4},
        {"skill":"Bootstrap","score":4},
        {"skill":"React","score":4},
        {"skill":"NodeJS","score":3},
        {"skill":"MySQL","score":3},
        {"skill":"MongoDB","score":2},
        {"skill":"Express","score":2},
        {"skill":"Git","score":4},
        {"skill":"Pytorch","score":4}
    ]

}

let aboutMe=content.profile.aboutMe;
let description_education=content.education.map(item => {
    return item.description;
});

let description_experience=content.education.map(item => {
    return item.description;
});




function getDistance(el) {

    let dis = window.pageYOffset + el.getBoundingClientRect().top;
    return dis;
}
function foldDetail(el) {
    let target = el.parentNode.nextElementSibling;
    if (el.innerHTML == "Hide Detail.") {
        el.innerHTML = "Detail."
        target.style.display = "none";
    }
    else {
        el.innerHTML = "Hide Detail.";
        target.style.display = "block";
    }

}

function foldNav() {
    let el = document.getElementById("side-nav");
    if (el.style.visibility == "visible") {
        el.style.visibility = "hidden";
    }
    else {
        el.style.visibility = "visible";
    }

}

function turnButton(el) {

    if (el.firstElementChild.style.transform != "rotate(45deg)") {

        el.firstElementChild.style.transform = "rotate(45deg)";
        el.firstElementChild.style.color = "white";
    }
    else {
        el.firstElementChild.style.transform = "rotate(0deg)";
        el.firstElementChild.style.color = "black";
    }


}

function rollingBar(el) {


    let currentY = window.scrollY;
    for (h of height_array) {
        if (currentY < (h-1 )) {
            window.scroll({
                top: h
            });
            return;
        }
    }




    //el.style.display='none';
}

function sendMessage() {
    let txt = 'message sent!';
    if (!messageForm.children[1].checkValidity()) {
        txt = 'Please check your name :)';
        messageForm.children[11].style.color = 'red';
        messageForm.children[11].innerHTML = txt;
    }

    else if (!messageForm.children[4].checkValidity()) {
        txt = 'Please check your email :)';
        messageForm.children[11].style.color = 'red';
        messageForm.children[11].innerHTML = txt;
    }

    else if (!messageForm.children[8].checkValidity()) {
        txt = 'Please check the message :)';
        messageForm.children[11].style.color = 'red';
        messageForm.children[11].innerHTML = txt;
    }
    else {
        messageForm.children[11].style.color = 'blue';
        messageForm.children[11].innerHTML = txt;
        

        setTimeout(function(){
            messageForm.children[1].value = '';
        messageForm.children[4].value = '';
        messageForm.children[8].value = '';

        },1000);
        

        //send email to me and the sender

    }


}

function removeMessage() {

    messageForm.children[11].innerHTML = '';

}
// window.addEventListener("hashchange", function () {

//     if (window.scrollY <= height_array[3]) {
//         window.scrollTo(window.scrollX, window.scrollY - 80);

//     }
// });

window.onscroll = function () {
    let projects = document.getElementById("projects");
    let h = getDistance(projects);
    let rolling = document.getElementsByClassName("side-rolling")[0];
    let op = 1;


    // let pos = 0.5 * window.innerHeight - 10;

    // if (window.scrollY <= 140) {
    //     pos = 0.5 * window.innerHeight - 10;
    // }
    // if (window.scrollY > 140){

    //     pos = 0.5 * window.innerHeight - 150 + window.scrollY;
    // }

    // rolling.style.top = pos + "px";

    // console.log(rolling.style.top);
    let disRollingToMiddle = 0.5 * window.innerHeight - 140;
    let secondPoint=h - window.innerHeight*0.5 ;
    let transparencyPoint=h - window.innerHeight*0.5 +200;
    if (window.scrollY <= disRollingToMiddle) {
        op = 1;
    }
    else if (window.scrollY > disRollingToMiddle && window.scrollY <= (disRollingToMiddle + 500)) {
        op = 1 - (window.scrollY - disRollingToMiddle) / 1000;
    }

    else if (window.scrollY > (disRollingToMiddle + 250) && window.scrollY <= secondPoint) {
        op = 0.5;
    }
    else if (window.scrollY >= transparencyPoint) {
        op = 0;
    }
    else {
        op = 0.5 - (window.scrollY - secondPoint) / 400;
    }
    rolling.style.opacity = op;
    rolling.firstElementChild.style.opacity = op;
}

window.onload = function () {




    profile = document.getElementById("profile");
    education = document.getElementById("education");
    experience = document.getElementById("workExperience");
    skills = document.getElementById("abilities");
    projects = document.getElementById("projects");
    

    profile.lastElementChild.children[1].lastElementChild.innerHTML=aboutMe;

    for(let i=1;i<4;i++){
        education.children[i].lastElementChild.lastElementChild.innerHTML=description_education[i-1];

    }

    for(let i=1;i<4;i++){
        experience.children[i].lastElementChild.lastElementChild.innerHTML=description_education[i-1];

    }

    height_array.push(getDistance(profile));
    height_array.push(getDistance(education));
    height_array.push(getDistance(experience));
    height_array.push(getDistance(skills));
    height_array.push(getDistance(projects));
    console.log(height_array);

    messageBtn = document.getElementById("send-message-btn");
    messageForm = document.getElementById("message-form");

    messageBtn.addEventListener("click", sendMessage);

    let closeBtn = document.getElementById("close-modal");
    closeBtn.addEventListener("click", removeMessage);



    let fd = document.getElementsByClassName("fold_detail");
    for (let el of fd) {
        el.addEventListener("click", function () { foldDetail(this); });
    }

    let navButton = document.getElementById("nav-button");
    navButton.addEventListener("click", foldNav);
    navButton.addEventListener("click", function () { turnButton(this); });

    // let navItem = document.getElementsByClassName("vertical-nav-item");
    // for (let el of navItem) {
    //     el.addEventListener("click", foldNav);
    //     el.addEventListener("click", function () { turnButton(navButton); });
    // }

    let rolling = document.getElementsByClassName("side-rolling")[0];
    rolling.addEventListener("click", function () { rollingBar(this); });
}

window.onresize = function () {
    height_array[0] = getDistance(profile);
    height_array[1] = (getDistance(education));
    height_array[2] = (getDistance(experience));
    height_array[3] = (getDistance(skills));
    height_array[4] = (getDistance(projects));

    console.log(height_array);

}




