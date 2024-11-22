const readline = require("readline");
const Contato = require("../models/Contato");
const GerenciadorContatos = require("../core/GerenciadorContatos");
const GerenciadorComLogger = require("../core/GerenciadorComLogger");
const BuscaContato = require("../strategies/EstrategiaBusca");
const BuscaPorNomeCompleto = require("../strategies/BuscaPorNomeCompleto");
const BuscaPorNomeParcial = require("../strategies/BuscaPorNomeParcial");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gerenciador = new GerenciadorComLogger(new GerenciadorContatos());
const busca = new BuscaContato(new BuscaPorNomeCompleto());

function menu() {
  console.log(`
Menu:
1. Adicionar Contato
2. Remover Contato
3. Listar Contatos
4. Buscar Contato (Nome Completo)
5. Buscar Contato (Nome Parcial)
6. Sair
`);
  rl.question("Escolha uma opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        rl.question("Nome: ", (nome) => {
          rl.question("Telefone: ", (telefone) => {
            rl.question("Email: ", (email) => {
              gerenciador.adicionarContato(new Contato(nome, telefone, email));
              menu();
            });
          });
        });
        break;
      case "2":
        rl.question("Nome do contato a remover: ", (nome) => {
          gerenciador.removerContato(nome);
          menu();
        });
        break;
      case "3":
        gerenciador.listarContatos();
        menu();
        break;
      case "4":
        rl.question("Nome completo para buscar: ", (nome) => {
          busca.setEstrategia(new BuscaPorNomeCompleto());
          const resultados = busca.buscar(gerenciador.contatos, nome);
          if (resultados.length > 0) {
            console.log("Resultados encontrados:");
            resultados.forEach((contato) => console.log(contato.toString()));
          } else {
            console.log("Nenhum contato encontrado.");
          }
          menu();
        });
        break;
      case "5":
        rl.question("Parte do nome para buscar: ", (nomeParcial) => {
          busca.setEstrategia(new BuscaPorNomeParcial());
          const resultados = busca.buscar(gerenciador.contatos, nomeParcial);
          if (resultados.length > 0) {
            console.log("Resultados encontrados:");
            resultados.forEach((contato) => console.log(contato.toString()));
          } else {
            console.log("Nenhum contato encontrado.");
          }
          menu();
        });
        break;
      case "6":
        console.log("Saindo...");
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        menu();
    }
  });
}

module.exports = menu;