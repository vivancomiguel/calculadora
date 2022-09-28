const valora = document.getElementById("valora");
const valorb = document.getElementById("valorb");

const valorc = document.getElementById("valorc");

const btnsumar = document.getElementById("btnplus");
const btnrestar = document.getElementById("btnminus");
const btnmultiplicar = document.getElementById("btnmul");
const btndividir = document.getElementById("btndiv");

/* Hace falta el arrow function */
const suma = (v1, v2) => {
  let a = parseInt(v1);
  let b = parseInt(v2);
  return a+b
};

const resta = (a, b) => a-b;

const multiplica = (a, b) => a*b;
const divide = (a, b) => a/b;

btnsumar.addEventListener('click', function(){
  valorc.value = suma(valora.value,valorb.value);
});
btnrestar.addEventListener('click', function(){
  valorc.value = resta(valora.value,valorb.value);
});
btnmultiplicar.addEventListener('click', function(){
  valorc.value = multiplica(valora.value,valorb.value);
});
btndividir.addEventListener('click', function(){
  valorc.value = divide(valora.value,valorb.value);
});