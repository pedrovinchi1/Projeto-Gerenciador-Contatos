const EstrategiaBusca = require("./EstrategiaBusca");

class BuscaPorNomeCompleto extends EstrategiaBusca {
  buscar(contatos, nome) {
    return contatos.filter((contato) => contato.nome === nome);
  }
}

module.exports = BuscaPorNomeCompleto;