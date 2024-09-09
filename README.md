# Teste Agendamento de Transferencias Financeiras

Este projeto apresenta um componente principal com uma tabela dos agendamentos recentes. Essa tabela sera inicializada vazia pois os dados que ela consome vem do Banco de Dados h2, que e reinicializado cada vez que o projeto do backend e inicializado. 

Este componente usa uma store (vuex) para gerenciar o estado do componente e essa store disponibiliza os dados potencialmente para todos os componentes. 

O agendamento acontece no modal que e mostrado ao clicar no botao agendar. Atraves dele controe-se o objeto payload que sera processado pelo servico scheduling.

Para rodar o projeto e necessario modificar o env.example para conter a URL do servico scheduling. http://localhost:8080/api

Instale as dependencias com o comando:

``` 
npm install
``` 
Inicie o servidor com o comando:

```
npm run dev
```