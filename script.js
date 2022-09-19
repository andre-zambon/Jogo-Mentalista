var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;
var chute = parseInt(document.getElementById("valor").value);

function imprimeTentativas() {
  var numeroTentativas = document.getElementById("contadorTentativas");
  numeroTentativas.innerHTML = "Tentativas: " + tentativas;
  var mostraTentativas;
}

function desativaChute() {
  var elementoResultado = document.getElementById("resultado");

  if (tentativas == 3) {
    document.getElementById("btnChutar").disabled = true;
    elementoResultado.innerHTML = "Você perdeu";
    var desativaBtn;
  }
}

function confereChuteFora() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  if (chute > 10 || chute < 0) {
    var chuteFora = (elementoResultado.innerHTML =
      "Digite um número entre 0 e 10");
  }
}

function comparaChutes() {
  var chute = parseInt(document.getElementById("valor").value);
  var elementoResultado = document.getElementById("resultado");
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Parabéns. Você acertou";
    document.getElementById("btnChutar").disabled = true;
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "O número secreto é menor que seu chute";
  } else {
    elementoResultado.innerHTML = "O número secreto é maior que seu chute";
    var verificaChutes;
  }
}

function Chutar() {
  tentativas++;
  verificaChutes = comparaChutes();
  chuteFora = confereChuteFora();
  desativaBtn = desativaChute();
  mostraTentativas = imprimeTentativas();
  console.log(numeroSecreto);
  console.log(tentativas);
}