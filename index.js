// elementos del dom

const formularioDeValidacion = document.getElementById("formulario-validacion")
const inputNombre = document.getElementById("input-nombre")
const inputApellido = document.getElementById("input-apellido")
const aviso = document.querySelector(".aviso")
const formularioValidacionHtml = document.querySelector("#formulario-validacion-html")
console.log(formularioValidacionHtml)


// preventDefault() esencial para impedir que se actualice la página

formularioDeValidacion.onsubmit = (e) => {
    e.preventDefault()   
}

formularioValidacionHtml.onsubmit = (e) => {
    e.preventDefault()
}

// ejemplo de evento sobre un input

// inputNombre.oninput = () => {
//     console.log(inputNombre.value)
//     if(inputNombre.value.match(/^[a-zA-Z]+$/) ){
//         inputNombre.style.border = "3px solid green"
//     } else if (inputNombre.value.match(/^[0-9]+$/)) {
//         inputNombre.style.border = "3px solid red"
//         inputNombre.value = ""
//     }   
// }


// FUNCIÓN REUTILIZABLE PARA DIFERENTES INPUTS

const validacionDatos = tipoDeInput => {   

    tipoDeInput.oninput = () => {
        console.log(tipoDeInput.value)
        if(tipoDeInput.value.match(/^[a-zA-Z]+$/) && tipoDeInput.value.length >= 3){
            tipoDeInput.style.border = "3px solid green"
            aviso.style.display = "none"
        }
        else if(tipoDeInput.value.length <= 2){
            tipoDeInput.style.border = "3px solid red"
            console.log("más de 2 caracteres")
            aviso.style.display = "flex"
        }       
        else if (tipoDeInput.value.match(/^[0-9]+$/) ) {
            tipoDeInput.style.border = "3px solid red"
            tipoDeInput.value = ""
        } 
    }
} 

// ejecución de las funciones

validacionDatos(inputNombre)
validacionDatos(inputApellido)






