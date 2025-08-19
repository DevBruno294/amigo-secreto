let amigos = [];



function agregarAmigo(){
let agregarNombres = document.getElementById('amigo').value
if (agregarNombres == ''){
    alert('Por favor, escriba el nombre valido')
}else{
    amigos.push(agregarNombres)
    limpiarCaja()
    mostrarLista(); 
}
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(function(nombre) {
        const li = document.createElement('li');
        li.textContent = nombre;
        lista.appendChild(li);
    });
}