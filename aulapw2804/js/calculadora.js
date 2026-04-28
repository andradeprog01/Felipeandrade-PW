var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var resultado = document.querySelector("#resultado");

function Somar() {
  resultado.innerHTML = Number(n1.value) + Number(n2.value);
  limpar();
}
function Subtrair() {
  resultado.innerHTML = Number(n1.value) - Number(n2.value);
  limpar();
}
function Multiplicar() {
  resultado.innerHTML = Number(n1.value) * Number(n2.value);
  limpar();
}
function Dividir() {
  if (Number(n2.value) == 0) {
    resultado.innerHTML = "Não é possível dividir por zero!";
  } else {
    resultado.innerHTML = Number(n1.value) / Number(n2.value);
    limpar();
  }
}
function limpar() {
  n1.value = "";
  n2.value = "";
}
