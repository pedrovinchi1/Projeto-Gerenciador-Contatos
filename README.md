#Documentação do Sistema de Gerenciamento de Contatos

Descrição do Sistema:
O sistema de gerenciamento de contatos permite que os usuários adicionem, removam, listem e busquem contatos por nome.
O objetivo é fornecer uma interface de linha de comando (CLI) para gerenciar contatos e demonstrar o uso de padrões de projeto estruturais e comportamentais no desenvolvimento.    

Funcionalidades
Adicionar Contatos:
    *Permite adicionar contatos com nome, telefone e e-mail.
Remover Contatos:
    *Remove contatos pelo nome.
Listar Contatos:
    *Lista todos os contatos armazenados.
Buscar Contatos:
    *Busca contatos pelo nome completo.
    *Busca contatos por parte do nome (busca parcial).
Interface CLI:
    *Interação com o sistema por meio de opções de menu no terminal.


Requisitos
*O sistema utiliza o módulo readline do Node.js, portanto, é necessário ter o Node.js instalado no ambiente.


Estrutura do Projeto

projeto-gerenciador-contatos/
│
├── models/
│   ├── Contato.js
│
├── core/
│   ├── GerenciadorContatos.js
│   ├── GerenciadorComLogger.js
│
├── strategies/
│   ├── EstrategiaBusca.js
│   ├── BuscaPorNomeCompleto.js
│   ├── BuscaPorNomeParcial.js
│
├── cli/
│   ├── cli.js
│
├── index.js

Uso dos Padrões de Projeto
1. Decorator (Estrutural)
Classe: GerenciadorComLogger
O padrão Decorator foi aplicado para adicionar funcionalidades ao gerenciador de contatos (logging) sem modificar diretamente a classe GerenciadorContatos.
Isso facilita a extensão futura de funcionalidades.

2. Strategy (Comportamental)
Classes: BuscaPorNomeCompleto, BuscaPorNomeParcial
O padrão Strategy foi utilizado para implementar diferentes algoritmos de busca de contatos.
Isso permite que novos critérios de busca sejam adicionados sem alterar o código existente.
