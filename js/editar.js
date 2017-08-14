const select = document.querySelector('.custom-select');
function adicionaOption(nome, id) {
  let option = document.createElement('option');
  option.value = id;
  option.innerText = nome;
  select.appendChild(option);
}
let dados = [];
if (Persistencia.existe('titulos')) {
  dados = Persistencia.carrega('titulos');
}
for (let i = 0; i < dados.length; i++) {
  let titulo = dados[i];
  adicionaOption(titulo.titulo, i);
}
