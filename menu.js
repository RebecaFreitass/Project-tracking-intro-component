const menuIcon = document.getElementById("menu")
const menuList = document.querySelector(".nav-menu")

console.log(menuIcon)
menuIcon.addEventListener("onclick", clickmenu())

function setMenu(){
    menuList.style.display = "flex"
    menuIcon.setAttribute('src', 'images/icon-close.svg') 
}
function removeMenu(){
    menuList.style.display = "none"
    menuIcon.setAttribute('src', 'images/icon-hamburger.svg')
}

function clickmenu(){
    if(menuList.style.display === "none" ){
        setMenu()
    }else{
        removeMenu()
    }
}


