function resultadoFinal() {
  var valorElemento = document.getElementById("valor1");
  var valor = valorElemento.value;
  var valorNota1 = parseFloat(valor);

  var valorElemento = document.getElementById("valor2");
  var valor = valorElemento.value;
  var valorNota2 = parseFloat(valor);

  var valorElemento = document.getElementById("valor3");
  var valor = valorElemento.value;
  var valorNota3 = parseFloat(valor);

  var valorElemento = document.getElementById("valor4");
  var valor = valorElemento.value;
  var valorNota4 = parseFloat(valor);

  var valorMedia = (valorNota1 + valorNota2 + valorNota3 + valorNota4) / 4;
  console.log(valorMedia);

  var notaFixada = valorMedia.toFixed(1);

  var elementoBoletim = document.getElementById("boletim");
  if (valorMedia >= 6) {
    var boletim =
      "Sua média final é " + notaFixada + " Parabéns! Você passou de ano!";
  } else if (valorMedia < 6) {
    var boletim =
      "Sua média final é " + notaFixada + " Você ficou de recuperação!";
  } else {
    var boletim = "Erro";
  }
  elementoBoletim.innerHTML = boletim;
}
