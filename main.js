const iconBurger= document.querySelector("#icon__burger");
console.log(iconBurger)
const menu= document.querySelector("#menu")

iconBurger.addEventListener("click", function(){
    menu.classList.toggle("show__menu")
})