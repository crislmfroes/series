const form = document.querySelector('form');
const datalist = document.querySelector('#series');
// TODO verificar se já existem disciplinas
// antes de inicializar o vetor
form.addEventListener('submit', function (e) {
  let titulos = [];
  if (Persistencia.existe('titulos')) {
    titulos = Persistencia.carrega('titulos');
  }
  titulos.push({
    titulo: form.titulo.value,
    temporada: form.temporada.value,
    capitulos: form.capitulos.value

  });
  Persistencia.salva('titulos', titulos);
  form.reset();
  sucesso('Série foi cadastrada corretamente!');
  e.preventDefault();
});
function sucesso (mensagem) {
  let source   = document.querySelector("#sucesso").innerHTML;
  let template = Handlebars.compile(source);
  let html = template({
    'mensagem': mensagem
  });
  document.querySelector('div.mensagem').innerHTML = html;
}
