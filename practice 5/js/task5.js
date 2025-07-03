const heroPhoto = document.querySelector("#photo-hero")
const photo1 = document.querySelector("#photo1")
const photo2 = document.querySelector("#photo2")
const photo3 = document.querySelector("#photo3")
const photo4 = document.querySelector("#photo4")
const photo5 = document.querySelector("#photo5")

photo1.addEventListener ("click", () => {
    heroPhoto.src = photo1.src
})
photo2.addEventListener ("click", () => {
    heroPhoto.src = photo2.src
})
photo3.addEventListener ("click", () => {
    heroPhoto.src = photo3.src
})
photo4.addEventListener ("click", () => {
    heroPhoto.src = photo4.src
})
photo5.addEventListener ("click", () => {
    heroPhoto.src = photo5.src
})

