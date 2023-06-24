let bar = document.querySelector("nav .bar")
let ul = document.querySelector("nav ul")

// burger icon

bar.onclick = () => {
    bar.style.display = "none"
    ul.classList.add("show")
    let img = document.createElement("img")
    img.src = "icons/icon-close.svg"
    img.style.alignSelf = "flex-end"
    img.onclick = () => {
        img.remove()
        bar.style.display = "block"
        ul.classList.remove("show")
    }
    ul.prepend(img)
}
