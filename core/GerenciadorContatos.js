class GerenciadorContatos {
    constructor() {
      this.contatos = [];
    }
  
    adicionarContato(contato) {
      this.contatos.push(contato);
      console.log(`Contato adicionado: ${contato.nome}`);
    }
  
    removerContato(nome) {
      const index = this.contatos.findIndex((c) => c.nome === nome);
      if (index !== -1) {
        const removido = this.contatos.splice(index, 1)[0];
        console.log(`Contato removido: ${removido.nome}`);
      } else {
        console.log(`Contato com nome "${nome}" não encontrado.`);
      }
    }
  
    listarContatos() {
      console.log("Lista de contatos:");
      this.contatos.forEach((contato) => console.log(contato.toString()));
    }
  }
  
  module.exports = GerenciadorContatos;