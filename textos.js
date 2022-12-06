let input = document.getElementById("input");
let textarea = document.getElementById("mensaje");

input.addEventListener("change", () => {
  let archivos = input.files;
  if (archivos.length == 0) return;

  let archivo = archivos[0];

  let contenido = new FileReader();

  contenido.onload = (e) => {
    let archivo = e.target.result;
    let lineas = archivo.split(/\r\n|\n/);
    console.log(lineas);
    textarea.value = lineas.join("\n");
  };
  contenido.onerror = (e) => alert(e.target.error.name);
  contenido.readAsText(archivo);
});