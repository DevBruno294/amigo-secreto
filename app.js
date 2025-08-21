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


function sortearAmigo() {
    // 1. Validar que el array no esté vacío
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = `el amigo sorteado es: ${nombreSorteado}`
}