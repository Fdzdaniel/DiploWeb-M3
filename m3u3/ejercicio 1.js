function calcularMedioTransporte() {
    var distanciaInput = document.getElementById("distancia").value;
    var distancia = parseInt(distanciaInput);
    if (isNaN(distancia)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }
    if (distancia >= 0 && distancia < 1000) {
        document.getElementById("resultado").textContent = "Ir a pie.";
    } else if (distancia >= 1000 && distancia < 10000) {
        document.getElementById("resultado").textContent = "Ir en bicicleta.";
    } else if (distancia >= 10000 && distancia < 30000) {
        document.getElementById("resultado").textContent = "Ir en colectivo.";
    } else if (distancia >= 30000 && distancia < 100000) {
        document.getElementById("resultado").textContent = "Ir en auto.";
    } else {
        document.getElementById("resultado").textContent = "Ir en avión.";
    }
}
