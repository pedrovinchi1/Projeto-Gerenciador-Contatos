class Contato {
    constructor(nome, telefone, email) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
    }
  
    toString() {
      return `Nome: ${this.nome}, Telefone: ${this.telefone}, Email: ${this.email}`;
    }
  }
  
  module.exports = Contato;