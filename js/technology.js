// switching by clicking on numbers
let numbers = document.querySelectorAll(".numbers div")
let numberOne = document.querySelector(".number-one")
let numberTwo = document.querySelector(".number-two")
let numberThree = document.querySelector(".number-three")

let h1 = document.querySelector(".info h1")
let context = document.querySelector(".info .context")

let img = document.querySelector(".technology-img")

let source = document.querySelector(".right-side picture source")

let myReq = new XMLHttpRequest()
myReq.open("GET" , "js/data.json")
myReq.send()

numberOne.onclick = () =>{
    numbers.forEach((e) => {
        e.classList.remove("active")
    })
    numberOne.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    h1.textContent = information.technology[0].name
    context.textContent = information.technology[0].description
    img.src = information.technology[0].images.portrait
    source.srcset = information.technology[0].images.landscape
}

numberTwo.onclick = () =>{
    numbers.forEach((e) => {
        e.classList.remove("active")
    })
    numberTwo.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    h1.textContent = information.technology[1].name
    context.textContent = information.technology[1].description
    img.src = information.technology[1].images.portrait
    source.srcset = information.technology[1].images.landscape
}

numberThree.onclick = () =>{
    numbers.forEach((e) => {
        e.classList.remove("active")
    })
    numberThree.classList.add("active")
    let information = JSON.parse(myReq.responseText)
    h1.textContent = information.technology[2].name
    context.textContent = information.technology[2].description
    img.src = information.technology[2].images.portrait
    source.srcset = information.technology[2].images.landscape
}