const valora = document.getElementById("valora");
const valorb = document.getElementById("valorb");

const valorc = document.getElementById("valorc");

const btnsumar = document.getElementById("btnplus");
const btnrestar = document.getElementById("btnminus");
const btnmultiplicar = document.getElementById("btnmul");
const btndividir = document.getElementById("btndiv");

btnsumar.addEventListener('click', function(){
  const a = parseInt(valora.value);
  const b = parseInt(valorb.value);
  valorc.value = a+b;
});
btnrestar.addEventListener('click', function(){
  const a = parseInt(valora.value);
  const b = parseInt(valorb.value);
  valorc.value = a-b;
});
btnmultiplicar.addEventListener('click', function(){
  const a = parseInt(valora.value);
  const b = parseInt(valorb.value);
  valorc.value = a*b;
});
btndividir.addEventListener('click', function(){
  const a = parseInt(valora.value);
  const b = parseInt(valorb.value);
  valorc.value = a/b;
});