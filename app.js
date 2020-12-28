let button = document.querySelector("#ham-menu");

let navBar = document.querySelector("nav");

let sideMenu = document.querySelector(".sidemenu");

let readfull = document.querySelector("#readfullbutton");

let fulltext = document.querySelector(".readfull");

const toggle = ()=>{
    if(sideMenu.style.display === "none"){
        sideMenu.style.display="block";
        sideMenu.style.zIndex="10";
        navBar.style.zIndex="10";
    } else{
        sideMenu.style.display="none";
    }
}

const toggle2 = ()=>{
    if(fulltext.style.display === "none"){
        fulltext.style.display="block";
    } else{
        fulltext.style.display="none";
    }
}
button.addEventListener("click", toggle);

readfull.addEventListener("click", toggle2);


gsap.registerPlugin(ScrollTrigger);


gsap.to(".dust-svg",{
    opacity:0,
    delay:3,
    duration:3,
    repeat: -1
});

gsap.timeline({
    ScrollTrigger:{
        trigger:".contact",
        toggleActions:"restart",
        markers:true,
    }
})

gsap.from(".send-svg",{
    y:400,
    x:-300,
    rotate:360,
    duration:5
})