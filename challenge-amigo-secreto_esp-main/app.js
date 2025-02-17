// Obtener los nombres de los participantes del archivo index.html
const participantes = Array.from(document.querySelectorAll('.participante')).map(el => el.textContent);

// Función para mezclar los nombres y asignar el amigo secreto
function asignarAmigoSecreto(participantes) {
    let asignaciones = {};
    let nombresDisponibles = [...participantes];

    participantes.forEach(participante => {
        let indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
        let amigoSecreto = nombresDisponibles[indiceAleatorio];

        // Asegurarse de que un participante no se asigne a sí mismo
        while (amigoSecreto === participante) {
            indiceAleatorio = Math.floor(Math.random() * nombresDisponibles.length);
            amigoSecreto = nombresDisponibles[indiceAleatorio];
        }

        asignaciones[participante] = amigoSecreto;
        nombresDisponibles.splice(indiceAleatorio, 1);
    });

    return asignaciones;
}

// Asignar los amigos secretos y mostrar los resultados
const asignaciones = asignarAmigoSecreto(participantes);
console.log(asignaciones);
