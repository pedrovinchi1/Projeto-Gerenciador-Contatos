class GerenciadorComLogger {
    constructor(gerenciador) {
      this.gerenciador = gerenciador;
    }
  
    adicionarContato(contato) {
      console.log("[LOG] Adicionando contato...");
      this.gerenciador.adicionarContato(contato);
      console.log("[LOG] Contato adicionado com sucesso.");
    }
  
    removerContato(nome) {
      console.log("[LOG] Removendo contato...");
      this.gerenciador.removerContato(nome);
      console.log("[LOG] Contato removido com sucesso.");
    }
  
    listarContatos() {
      this.gerenciador.listarContatos();
    }
  }
  
  module.exports = GerenciadorComLogger;