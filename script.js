let profileElement = document.getElementById("profiletext")
let navbar = document.getElementById("nav")
let menu = document.querySelector("i")
let menuBar = document.querySelector(".additional-profile-setting")
let dark = document.getElementById("dark-mode")
let dark2 = document.getElementById("dark-mode2")
let nav = document.querySelector("header")
let home = document.getElementById("home")
let aside = document.querySelector("aside")
let movies = document.getElementById("movies")
let newtext = document.getElementById("newtext")
let movies2 = document.getElementById("movies-2")
let newt = document.getElementById("text")
let movies3 = document.getElementById("movies-3")
let movies4 = document.getElementById("movies-4")
let movies5 = document.getElementById("movies-5")
let movies6 = document.getElementById("movies-6")
let tex = document.getElementById("tex")
let te = document.getElementById("te")
let t = document.getElementById("t")
let texti = document.getElementById("texti")

profileElement.addEventListener("click",()=>{
    menuBar.classList.toggle("swipe")
    let after = profileElement.querySelector("span")
    after.classList.toggle("rotate")
})

menu.addEventListener("click",()=>{
    navbar.classList.toggle("height")
})

dark.addEventListener("click",()=>{
    let btn = dark.querySelector("button")
    if(btn.classList.toggle("move")){
        darkmode()
    }
    else{
        white()
    }
})

dark2.addEventListener("click",()=>{
    let btn2 = dark2.querySelector("button")
    if(btn2.classList.toggle("move")){
       darkmode()
    }
    else{
        white()
       
    }
})

function darkmode(){
    navbar.classList.add("bg")
    nav.id = "color"
    aside.id = "color"
    aside.classList.add("bgcolor")
    profileElement.style.color = "black"
    home.style.color = "red"
    movies.style.background = "white"
    newtext.style.color = "black"
    movies2.style.background = "white"
    movies3.style.background = "white"
    movies4.style.background = "white"
    movies5.style.background = "white"
    movies6.style.background = "white"
    newt.style.color = "black"
    tex.style.color = "black"
    te.style.color = "black"
    texti.style.color = "black"
    t.style.color = "black"
    menu.style.color = "black"
}

function white(){
    nav.id = ""
    navbar.classList.remove("bg")
    profileElement.style.color = "white"
    home.style.color = "red"
    aside.classList.remove("bgcolor")
    aside.id = ""
    movies.style.background = ""
    newtext.style.color = ""
    movies2.style.background = ""
    movies3.style.background = ""
    movies4.style.background = ""
    movies5.style.background = ""
    movies6.style.background = ""
    newt.style.color = ""
    tex.style.color = ""
    te.style.color = ""
    t.style.color = ""
    texti.style.color = ""
    menu.style.color = ""
}






