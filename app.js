let amigos = [];



function agregarAmigo(){
let agregarNombres = document.getElementById('amigo').value
console.log(agregarNombres)
if (agregarNombres == ''){
    alert('Por favor, escriba el nombre valido')
}else{
    amigos.push(agregarNombres)
    console.log(amigos)
}
}
