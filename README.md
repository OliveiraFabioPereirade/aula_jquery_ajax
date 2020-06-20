# aula_jquery_ajax

Material desenvolvido durante o curso:

### Introdução à biblioteca jQuery

![](https://i.imgur.com/9sDlxZJ.png?1)

Oferecido por: 

### Digital Innovation One

Ministrado por:

### Rafael Galleani

---

## Temas abordados:

#### JQuery:
- Utilização do JQuery e Ajax
- Classe navbar para desenvolvimento do cabeçalho do site
- Criação e aplicação de estilo em tabelas
- Ocultando e exibindo elementos na página de forma dinâmica.

---

## Site desenvolvido:
O site foi desenvolvido utilizando o framework Bootstrap, e possui esta aparência inicial:

![](https://i.imgur.com/eRrT2tv.png)

O objetivo é exibir dados sobre um logradouro através do fornecimento do seu CEP.

Para tanto, realiza-se uma consulta a API da ViaCEP no formato Json, conforme o padrão abaixo:

![](https://i.imgur.com/4IPhfQV.png)

O usuário deve preencher corretamente o CEP desejado no campo "CEP" e clicar no botão "Buscar".

Após o clique no botão "Buscar", é chamada uma função em JavaScript que:
- exibe a barra de progresso animada;
- envia uma requisição GET a API da ViaCEP com o CEP fornecido.

Para indicar ao usuário que algo está sendo processado enquanto a reposta da ViaCEP não chega, a aparência do site fica como a figura abaixo:

![](https://i.imgur.com/1aZpxL0.png)

Como resposta, a API da ViaCEP retorna dados no formato abaixo:

![](https://i.imgur.com/MLG8uEm.png)

Quando chegam os dados da ViaCEP, a função disparada pelo botão "Buscar":
- esconde a barra de progresso animada;
- monta uma tabela com os dados recebidos e a exibe.

A aparência final do site fica como exibido abaixo:

![](https://i.imgur.com/ZDwZnrN.png)
