document.getElementById('amigo').addEventListener('input', function() {
    this.value = this.value.toUpperCase().replace(/[^A-Z\s]/g, '').slice(0, 15);
    document.getElementById('mensaje').textContent = `Número de caracteres ingresados: ${this.value.length}`;
});
document.getElementById('listaAmigos').addEventListener('DOMSubtreeModified', function() {
    document.querySelector('.button-reset').disabled = this.children.length === 0;
});
const amigos = [];
const seleccionados = new Set();

document.querySelector('.button-add').addEventListener('click', function() {
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const mensaje = document.getElementById('mensaje');

    let nombre = input.value.toUpperCase().replace(/[^A-Z\s]/g, '');

    if (nombre.length < 2 || nombre.length > 15) {
        alert('El nombre debe tener entre 2 y 15 caracteres.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('El nombre ya está en la lista.');
        return;
    }

    if (amigos.length >= 8) {
        alert('No es posible agregar más amigos.');
        return;
    }

    amigos.push(nombre);

    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });

    input.value = '';
    mensaje.textContent = 'Número de caracteres ingresados: 0';

    if (amigos.length >= 8) {
        input.disabled = true;
        document.querySelector('.button-add').disabled = true;
    }

    document.querySelector('.button-reset').disabled = amigos.length === 0;
    document.querySelector('.button-draw').disabled = amigos.length < 4;
});

document.querySelector('.button-draw').addEventListener('click', function() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    if (amigos.length < 4) {
        alert('Se necesitan mínimo 4 amigos para jugar.');
        return;
    }

    if (seleccionados.size === amigos.length) {
        resultado.textContent = 'Fueron asignados todos los amigos de la lista.';
        return;
    }

    let amigoSeleccionado;
    do {
        amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (seleccionados.has(amigoSeleccionado));

    seleccionados.add(amigoSeleccionado);
    resultado.textContent = `Amigo seleccionado: ${amigoSeleccionado}`;
});

document.querySelector('.button-reset').addEventListener('click', function() {
    amigos.length = 0;
    seleccionados.clear();
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('amigo').disabled = false;
    document.querySelector('.button-add').disabled = false;
    document.querySelector('.button-reset').disabled = true;
    document.querySelector('.button-draw').disabled = true;
});

document.querySelector('.button-reset').disabled = amigos.length === 0;
document.querySelector('.button-draw').disabled = amigos.length < 4;