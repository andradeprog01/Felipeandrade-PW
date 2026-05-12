var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
var resultado = document.querySelector("#resultado");


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
    resultado.innerHTML = (Number(n1.value) + Number(n2.value)/2);
    limpar();
}
function areaQ(){
    if (n1.value != n2.value)
    {
        resultado.innerHTML = "Os dois lados devem possuir o mesmo tamanho!"
    }
    else{
        resultado.innerHTML = Number(n1.value) * Number(n2.value);
    }
}
function IP(){
    var soma = Number(n1.value) + Number(n2.value)
    if(soma%2==0)
    {
        resultado.innerHTML = "Numero par"
                                                                   
    }
    else{
        resultado.innerHTML = "Numero impar"
    }
}
