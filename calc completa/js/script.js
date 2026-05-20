var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var resultado = document.querySelector("#resultado");
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var resultPR = document.querySelector("#resultPR");

function Somar() {
  resultado.innerHTML = Number(n1.value) + Number(n2.value);
  var soma = Number(n1.value) + Number(n2.value);

  if (soma % 2 == 0) {
    resultado.innerHTML = soma + " - Numero par";
  } else {
    resultado.innerHTML = soma + " - Numero impar";
  }
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

function areaT() {
  resultado.innerHTML = Number(n1.value) + Number(n2.value) / 2;
  limpar();
}
function areaQ() {
  if (n1.value != n2.value) {
    resultado.innerHTML = "Os dois lados devem possuir o mesmo tamanho!";
  } else {
    resultado.innerHTML = Number(n1.value) * Number(n2.value);
  }
}
function IP() {
  var soma = Number(n1.value) + Number(n2.value);
  if (soma % 2 == 0) {
    resultado.innerHTML = "Numero par";
  } else {
    resultado.innerHTML = "Numero impar";
  }
}

function P1() {
  var proddesc = Number(p1.value) - Number(p1.value) * 0.1;
  resultPR.innerHTML = proddesc;
}
function lucro15() {
  var soma = Number(p1.value) + Number(p2.value);
  var lucro15 = soma + soma * 0.15;
  resultPR.innerHTML = lucro15;
}
function desc3() {
  var soma = Number(p1.value) + Number(p2.value);
  var desc3 = soma - soma * 0.03;
  resultPR.innerHTML = desc3;
}
function ifcont() {
  if (Number(p1.value) > 1000) {
    var desc7 = Number(p1.value) - Number(p1.value) * 0.07;
    resultPR.innerHTML = desc7;
  } else if (Number(p1.value) <= 500) {
    var desc5 = Number(p1.value) + Number(p1.value) * 0.05;
    resultPR.innerHTML = desc5;
  } else if (Number(p1.value) < 200) {
    resultPR.innerHTML = "Boas Compras!";
  }
}
