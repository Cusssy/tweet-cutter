function cutText() {
    // obtener el texto del cuadro de entrada
    var input = document.getElementById("inputText").value;
  
    // asegurarse de que el texto termine en un espacio
    if (input.charAt(input.length - 1) !== " ") {
      input += " ";  // utilizar el operador de concatenación en lugar del de asignación
    }
  
    // dividir el texto en partes de 240 caracteres
    var parts = [];
    var start = 0;
    while (start < input.length) {
      var end = start + 230;
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
      partDiv.innerText = parts[i] + " [" + (i + 1) + "/" + parts.length + "]";
  
      // agregar el div al div principal solo si tiene texto
      if (partDiv.innerText.trim() !== "") {
        outputDiv.appendChild(partDiv);
      }
    }
      // agregar el evento onclick a cada div
    let divs = outputDiv.childNodes;
    for (let i = 0; i < divs.length; i++) {
      divs[i].onclick = function() {
        // seleccionar el texto del div
        let range = document.createRange();
        range.selectNode(this);
        window.getSelection().addRange(range);
        
        // copiar el texto seleccionado al portapapeles
        document.execCommand("copy");
      }
    }
  }
