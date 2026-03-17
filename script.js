function mostrarRamo(){

let nombre = document.getElementById("nombre").value

if(nombre === ""){
alert("Escribe tu nombre primero 🌻")
return
}

document.getElementById("inicio").style.display="none"

document.getElementById("sorpresa").style.display="block"

document.getElementById("mensaje").innerHTML="Para " + nombre + " 🌻"

const ramo = document.querySelector(".ramo")

setTimeout(()=>{
ramo.classList.add("visible")
},200)

}