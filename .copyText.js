// en la función `cutText()`
for (let i = 0; i < output.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = output[i];
    div.id = `output-div-${i}`;  // agregar un atributo `id`
    outputDiv.appendChild(div);
    
    // agregar un event listener al div que escuche el evento `click`
    div.addEventListener("click", () => {
      // seleccionar el contenido del div
      const range = document.createRange();
      range.selectNode(div);
      window.getSelection().addRange(range);
      
      // copiar el contenido seleccionado al portapapeles
      document.execCommand("copy");
    });
  }  