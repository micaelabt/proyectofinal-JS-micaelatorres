
function calculadora() {
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let operacion = prompt("¿Qué operación deseas realizar? (+, -, *, /)");
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    
    let resultado;
    
    if (operacion === "+") {
      resultado = num1 + num2;  // Suma
    } else if (operacion === "-") {
      resultado = num1 - num2;  // Resta
    } else if (operacion === "*") {
      resultado = num1 * num2;  // Multiplicación
    } else if (operacion === "/") {
      if (num2 !== 0) {
        resultado = num1 / num2;  // División
      } else {
        alert("Operacion No valida.");
        return;  
      }
    } else {
      alert("Operación no válida. Tenes que usar +, -, *, o /.");
      return;
    }
    
    alert("El resultado es: " + resultado);
  }
  
  calculadora();