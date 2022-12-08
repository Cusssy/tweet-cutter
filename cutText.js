function cutText() {
    // obtener el texto del cuadro de entrada
    var input = document.getElementById("inputText").value;
  
    // dividir el texto en partes de 240 caracteres
    var parts = [];
    var start = 0;
    while (start < input.length) {
      var end = start + 240;
      if (end > input.length) {
        end = input.length;
      }
      // asegurarse de que no se corten palabras
      while (end > start && input.charAt(end) !== " ") {
        end--;
      }
      parts.push(input.substring(start, end));
      start = end + 1;
    }
  
    // crear divs para mostrar el texto cortado
    var outputDiv = document.getElementById("outputDiv");
    outputDiv.innerHTML = "";  // limpiar el contenido existente
    for (var i = 0; i < parts.length; i++) {
      // crear un div para el fragmento actual
      var partDiv = document.createElement("div");
  
      // agregar el contador al div
      partDiv.innerText = (i + 1) + "/" + parts.length + ": " + parts[i];
  
      // agregar el div al div principal
      outputDiv.appendChild(partDiv);
    }
  }  