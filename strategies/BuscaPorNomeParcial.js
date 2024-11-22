const EstrategiaBusca = require("./EstrategiaBusca");

class BuscaPorNomeParcial extends EstrategiaBusca {
  buscar(contatos, nomeParcial) {
    const regex = new RegExp(nomeParcial, "i");
    return contatos.filter((contato) => regex.test(contato.nome));
  }
}

module.exports = BuscaPorNomeParcial;