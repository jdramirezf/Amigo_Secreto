function agregarAmigo() {
    // Obtenemos los elementos de las etiquetas input, ul y p
    const input = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const mensaje = document.getElementById('mensaje');

    let nombre = input.value.toUpperCase().replace(/[^A-Z\s]/g, '');

    if (nombre.length < 2 || nombre.length > 15) {
        alert('El nombre debe tener entre 2 y 15 caracteres.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    input.value = '';

    let totalCaracteres = 0;
    document.querySelectorAll('#listaAmigos li').forEach(item => {
        totalCaracteres += item.textContent.length;
    });

    mensaje.textContent = `El número total de caracteres es: ${totalCaracteres}`;
}

document.getElementById('amigo').addEventListener('input', function() {
    this.value = this.value.toUpperCase().replace(/[^A-Z\s]/g, '');
});