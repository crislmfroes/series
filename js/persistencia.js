const Persistencia = {
  salva: function (chave, objeto) {
    localStorage[chave] = JSON.stringify(objeto);
  },
  carrega: function (chave) {
    if (!this.existe(chave)) {
      return null;
    }
    return JSON.parse(localStorage[chave]);
  },
  existe: function (chave) {
    return localStorage[chave] ? true : false;
  },
  adiciona: function (chave, objeto) {
    let vetor = [];
    if (!objeto instanceof Array) {
      return null;
    }
    if (this.existe(chave)) {
      vetor = this.carrega(chave);
    }
    let existe = -1;
    for (var i = 0; i < vetor.length; i++) {
      let elemento = JSON.stringify(vetor[i]);
      if(elemento === JSON.stringify(objeto)){
        existe = 0;
      }
    }
    if (existe === -1) {
      vetor.push(objeto);
    }
    this.salva(chave, vetor);
  }
};

let o1 = {a:1,b:2}
let o3 = {a:2,b:2}
let o2 = {a:3,b:2}

Persistencia.adiciona('teste2', o1);
Persistencia.adiciona('teste2', o1);
Persistencia.adiciona('teste2', o2);
Persistencia.adiciona('teste2', o3);

console.log(Persistencia.carrega('teste2'));
