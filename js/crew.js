// bars

let bars = document.querySelectorAll(".bars .bar")
let firstBar = document.querySelector(".douglas")
let secondBar = document.querySelector(".mark")
let thirdBar = document.querySelector(".victor")
let forthBar = document.querySelector(".anousheh")

let crewRank = document.querySelector(".crew-rank")
let crewTitle = document.querySelector(".crew-title")
let crewInfo = document.querySelector(".crew-info")

let crewImg = document.querySelector(".right-side .crew-img")

let myReq = new XMLHttpRequest()
myReq.open("GET" , "js/data.json")
myReq.send()

firstBar.onclick = () => {
    bars.forEach((e) => {
        e.classList.remove("active")
    })
    firstBar.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    crewRank.textContent = information.crew[0].role
    crewTitle.textContent = information.crew[0].name
    crewInfo.textContent = information.crew[0].bio
    crewImg.src = information.crew[0].images.png
}

secondBar.onclick = () => {
    bars.forEach((e) => {
        e.classList.remove("active")
    })
    secondBar.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    crewRank.textContent = information.crew[1].role
    crewTitle.textContent = information.crew[1].name
    crewInfo.textContent = information.crew[1].bio
    crewImg.src = information.crew[1].images.png
}

thirdBar.onclick = () => {
    bars.forEach((e) => {
        e.classList.remove("active")
    })
    thirdBar.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    crewRank.textContent = information.crew[2].role
    crewTitle.textContent = information.crew[2].name
    crewInfo.textContent = information.crew[2].bio
    crewImg.src = information.crew[2].images.png
}

forthBar.onclick = () => {
    bars.forEach((e) => {
        e.classList.remove("active")
    })
    forthBar.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    crewRank.textContent = information.crew[3].role
    crewTitle.textContent = information.crew[3].name
    crewInfo.textContent = information.crew[3].bio
    crewImg.src = information.crew[3].images.png
}