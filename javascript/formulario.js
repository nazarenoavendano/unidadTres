const usuario = document.getElementById("usuario")
const clave = document.getElementById("clave")
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", e=> {
    e.preventDefault()
    if(usuario.value.length<= 8){
      alert("El usuario debe tener mas de 8 caracteres.")   
    } else {
      alert("validado")
    }
})