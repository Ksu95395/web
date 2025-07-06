const openMenu = document.querySelector("#open-menu")
const infoMenu = document.querySelector("#info-menu")
const closeBtn = document.querySelector("#close-btn")
const burgerMenu = document.querySelector("#burger-menu")
const aBtn = document.querySelector("#a-btn");
const aBody = document.querySelector("#a-body");


 openMenu.addEventListener("click", ()=>{
    infoMenu.style.left="0px"
 })
 burgerMenu.addEventListener("click", ()=>{
    infoMenu.style.left="0px"
 })
 closeBtn.addEventListener("click", ()=>{
    infoMenu.style.left="-350px"
 })

 aBtn.addEventListener("click", () => {
    aBody.classList.toggle("info-text")
    aBtn.classList.toggle("info-text")
})