// changing planets

let img = document.querySelector(".planet-img")

let planets = document.querySelectorAll(".planets p")

let moon = document.querySelector(".moon")
let mars = document.querySelector(".mars")
let europa = document.querySelector(".europa")
let titan = document.querySelector(".titan")

let planetTitle = document.querySelector(".planet-title")
let planetParagraph = document.querySelector(".planet-paragraph")

let milsDistancee = document.querySelector(".mils-distance")
let monthDistancee = document.querySelector(".month-distance")

let myReq = new XMLHttpRequest()
myReq.open("GET" , "js/data.json")
myReq.send()

moon.onclick = () => {
    planets.forEach ((e) =>{
        e.classList.remove("active")
    })
    moon.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    planetTitle.textContent = information.destinations[0].name
    img.src = information.destinations[0].images.png
    planetParagraph.textContent = information.destinations[0].description
    milsDistancee.textContent = information.destinations[0].distance
    monthDistancee.textContent = information.destinations[0].travel
}

mars.onclick = () => {
    planets.forEach ((e) =>{
        e.classList.remove("active")
    })
    mars.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    planetTitle.textContent = information.destinations[1].name
    img.src = information.destinations[1].images.png
    planetParagraph.textContent = information.destinations[1].description
    milsDistancee.textContent = information.destinations[1].distance
    monthDistancee.textContent = information.destinations[1].travel
}

europa.onclick = () => {
    planets.forEach ((e) =>{
        e.classList.remove("active")
    })
    europa.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    planetTitle.textContent = information.destinations[2].name
    img.src = information.destinations[2].images.png
    planetParagraph.textContent = information.destinations[2].description
    milsDistancee.textContent = information.destinations[2].distance
    monthDistancee.textContent = information.destinations[2].travel
}

titan.onclick = () => {
    planets.forEach ((e) =>{
        e.classList.remove("active")
    })
    titan.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    planetTitle.textContent = information.destinations[3].name
    img.src = information.destinations[3].images.png
    planetParagraph.textContent = information.destinations[3].description
    milsDistancee.textContent = information.destinations[3].distance
    monthDistancee.textContent = information.destinations[3].travel
}