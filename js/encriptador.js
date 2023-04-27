let divInnerText = document.getElementById("divInnerText");
let textArea = document.getElementById("textRecibed");
let textRecibed = "";
let button = document.createElement("button");
let txtArea = document.createElement("textarea");
txtArea.style.backgroundColor = "#f3f5fc";
txtArea.style.border = 0;
txtArea.style.color = "#0a3871";
txtArea.rows = 15;
txtArea.cols = 12;

button.className = "btn btn-secondary btn-lg";
button.textContent = "Copiar";
button.id = "btnCopy";

textArea.addEventListener("change", () => {
  textRecibed = textArea.value;
});

const encriptador = (text) => {
  if (text != "") {
    divInnerText.style.backgroundImage = "";
    let textLower = text.toLowerCase();
    let textoNormalizado = textLower
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    let nuevotexto = textoNormalizado.replace(/[aeiou]/g, (e) => {
      let vocales = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" };
      return vocales[e];
    });

    txtArea.innerText = nuevotexto;
    divInnerText.appendChild(txtArea);

    divInnerText.appendChild(button);

    textArea.value = "";
  } else {
    alert("Debes Digitar algo");
  }
};

function desencriptador(textoEncriptado) {
  textoEncriptado;
  let textM = textoEncriptado.toLowerCase();
  let textTransform = textM
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    txtArea.innerText = textTransform;
    divInnerText.innerHTML = ""
    divInnerText.style.backgroundImage = "";

    divInnerText.appendChild(txtArea);
    divInnerText.appendChild(button);

}
function copyText() {
  /* Obtén el contenido del textarea */
  var text = txtArea.value;

  /* Copia el contenido al portapapeles */
  navigator.clipboard.writeText(text);

  /* Muestra una alerta confirmando que se copió el texto */
  alert("El texto ha sido copiado al portapapeles");
}
button.addEventListener("click", copyText);
