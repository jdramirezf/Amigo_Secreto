
document.getElementById("amigo").addEventListener("input", validarTexto);
document.getElementById("amigo").addEventListener("input", function() {
    this.value = this.value.toUpperCase();
});
function validarTexto() {
    let input = document.getElementById("amigo");
    let mensaje = document.getElementById("mensaje");
    
    if (input && mensaje) {
        // Expresión regular para permitir solo letras y espacios
        let soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/;
        
        // Si el valor no cumple la expresión regular, eliminamos el último caracter ingresado
        if (!soloLetras.test(input.value) && input.value.length > 0) {
            input.value = input.value.slice(0, -1);
        }
        
        // Actualiza el mensaje con la cantidad de caracteres
        mensaje.textContent = "El número total de caracteres es: " + input.value.length;
    }
}