# Desafio Fullstack Veritas (Mini Kanban de Tarefas)
Desafio técnico para o processo de seleção estágio Fullstack na Veritas

## Como executar
No diretório backend abra uma janela de terminal e gere um .exe e execute-o

go build; .\backend ou go build && .\backend

No diretório fronted abra uma nova janela de terminal e execute o comando

npm run dev

## Observações
* frontend gerado com vite para facilitar as configurações de build
* gofiber no backend para lidar com requisições, axios no frontend

## Limitações

### Funcionalidades não implementadas
* persistência dos dados em um arquivo .json
* possiblidade de excluir e mover tarefas de uma coluna para outra
* drag and drop de tarefas
* documntação e diagrama User Flow

### Pontos para melhorias
* interface intuitiva e responsiva
* experiência do usuário
* documentação
* persistência de dados
* processo de execução do backend + frontend