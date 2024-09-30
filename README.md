![image](https://github.com/user-attachments/assets/9dc2d39f-abc3-473b-8f13-5d5c56038058)

# DevFlow Kanban

## Descrição do Projeto

**DevFlow Kanban** https://dvalenascimento.github.io/devFlow_kanban.project/ é uma aplicação web que permite a organização visual de tarefas utilizando o método Kanban, facilitando o gerenciamento de processos de desenvolvimento de software. O projeto inclui colunas representando cada fase do ciclo de desenvolvimento, desde o levantamento de requisitos até o feedback e a melhoria contínua.

## Funcionalidades

- Interface Kanban visual, com colunas para diferentes fases do desenvolvimento de software:
  - Levantamento de Requisitos
  - Análise de Requisitos
  - Design do Sistema
  - Desenvolvimento
  - Testes
  - Implantação
  - Manutenção e Suporte
  - Feedback e Melhoria
- Adicionar, mover e excluir tarefas em cada coluna.
- Capacidade de vincular um link a cada tarefa para facilitar o acompanhamento de projetos relacionados.
- Armazenamento local de tarefas usando `localStorage`, mantendo as informações entre sessões.
- Botões de ajuda específicos para cada fase do Kanban, explicando a importância de cada etapa.
- Animações e layout responsivo para uma experiência visual agradável.

## Como Usar

1. Na página inicial, clique no botão **Iniciar** para ser levado ao quadro Kanban.
2. Para adicionar uma tarefa a uma coluna, clique no botão **Adicionar Tarefa** na coluna desejada e insira a descrição da tarefa.
3. As tarefas podem ser arrastadas entre as colunas para marcar a progressão entre as fases.
4. Clique no ícone ✏️ em uma tarefa para adicionar um link para o projeto relacionado.
5. Dê um duplo clique em uma tarefa para movê-la para cima na lista ou clique com o botão direito para movê-la para baixo.
6. Dê um duplo clique no ícone "X" de uma tarefa para excluí-la.
7. O progresso das tarefas é salvo localmente no navegador e será carregado automaticamente ao abrir a página novamente.

## Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página.
- **CSS3**: Estilização da interface do usuário, incluindo design responsivo e animações.
- **JavaScript (ES6+)**: Implementação da lógica da aplicação, incluindo adição de tarefas, armazenamento local e eventos de arrastar e soltar.
- **LocalStorage**: Armazenamento das tarefas localmente no navegador para persistência de dados.

## Requisitos do Sistema

- Navegador web moderno (Google Chrome, Firefox, Edge, etc.).
- Conexão à internet para carregar os recursos da página.

## Instalação

1. Clone o repositório do projeto:
   ```bash
   git clone https://github.com/DVALENASCIMENTO/DevFlowKanban.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd DevFlowKanban
   ```
3. Abra o arquivo `index.html` no navegador ou hospede a aplicação em um servidor web local.

## Estrutura do Projeto

```bash
DevFlowKanban/
├── css/
│   └── styles.css   # Estilos personalizados do projeto
├── images/
│   └── (Imagens de ícones, logotipos e projetos)
├── js/
│   └── script.js    # Lógica da aplicação
├── index.html       # Página principal da aplicação
└── README.md        # Documentação do projeto
```

## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para suas modificações:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações e commite:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie para o seu fork:
   ```bash
   git push origin minha-feature
   ```
5. Abra um pull request para que suas alterações sejam revisadas.

## Autor

**Diego Nascimento** - [GitHub](https://github.com/DVALENASCIMENTO)

Para mais informações sobre o autor, visite [LinkedIn](https://www.linkedin.com/in/diego-vale-do-nascimento-48212215b/).

---

Sinta-se à vontade para contribuir com sugestões, melhorias ou novos recursos!

### Licença

Este projeto é de código aberto e pode ser utilizado livremente conforme a licença MIT.

---

O **DevFlow Kanban** é uma excelente ferramenta para quem deseja melhorar a organização e produtividade no desenvolvimento de software, facilitando a visualização e o gerenciamento do progresso em cada etapa do projeto.
