// ELEMENTOS DEL DOM

const largo = document.querySelector(".largo")
const intermedio = document.getElementById("parrafo-intermedio")
const breve = document.querySelector(".parrafo-breve")
const navHome = document.getElementById("nav-home")
const navNoticias = document.getElementById("nav-noticias")
const navContacto = document.getElementById("nav-contacto")

// verifico que mis elementos estén bien llamados

console.log(navHome, navNoticias, navContacto, largo, intermedio, breve)

// EVENTOS

navHome.onclick = () => {
    largo.style.display = "flex"
    intermedio.style.display = "none"
    breve.style.display = "none" 
    console.log("me tocan")   
}

navNoticias.onclick = () => {
    largo.style.display = "none"
    intermedio.style.display = "flex"
    breve.style.display = "none"
}

navContacto.onclick = () => {
    largo.style.display = "none"
    intermedio.style.display = "none"
    breve.style.display = "flex"
}