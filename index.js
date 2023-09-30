function limpiar(){
    document.getElementById("display").value = "";
    document.getElementById("display").textContent = "";
    document.getElementById("error").textContent = "Operación no válida";

}

// Función para mostrar números y operadores en el display
function agregar(value){
    document.getElementById("display").value += value;
}

 // Función para calcular y mostrar el resultado
function calculate(){
    try{
        document.getElementById("display").value = eval(document.getElementById("display").value)
    }catch(error){
        document.getElementById("display").value = "Error";
    }
}
// Funciones trigonométricas
        function calculateTrig(operation) {
            var inputValue = parseFloat(document.getElementById("display").value);
            if (!isNaN(inputValue)) {
                switch(operation){
                    case "sin":
                        document.getElementById("display").value = Math.sin(inputValue);
                        break;
                    case "cos":
                        document.getElementById("display").value = Math.cos(inputValue);
                        break;
                    case "tan":
                        document.getElementById("display").value = Math.tan(inputValue);
                        break;
                }                               
            } else {
                document.getElementById("display").value = "Error";
            }
        }

        // Función para calcular la raíz cuadrada
        function calculateSqrt() {
            var inputValue = parseFloat(document.getElementById("display").value);
            if (!isNaN(inputValue)) {
                document.getElementById("display").value = Math.sqrt(inputValue);
            } else {
                document.getElementById("display").value = "Error";
            }
        }


