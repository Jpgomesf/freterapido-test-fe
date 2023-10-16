# Conversor de Moedas

Este é um projeto de aplicativo web para mostrar a conversão de três moedas para Real Brasileiro (BRL). Ele utiliza o framework Angular em sua última versão para o desenvolvimento. As moedas convertidas são o Dólar Canadense (CAD), Peso Argentino (ARS) e Libra Esterlina (GBP).

## Instruções para Rodar o Projeto

Certifique-se de ter o Angular CLI instalado. Caso não tenha, instale-o globalmente usando:

```bash
npm install -g @angular/cli
```

### Passos para rodar o projeto

1. Clone o repositório usando o comando:

```bash
git clone [url](https://github.com/Jpgomesf/test-fe)
```

2. Navegue até o diretório do projeto:

```bash
cd test-fe
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

5. Abra o navegador e acesse http://localhost:4200/.

## Pré-processadores CSS

Este projeto utiliza Sass como pré-processador CSS.

## Container do Docker

Para rodar a aplicação em um container Docker, siga os passos abaixo:

1. Certifique-se de ter o Docker instalado.
2. Execute os seguintes comandos:

```bash
docker build -t test-fe .
docker run -d -p 8080:80 teste-fe
```

3. Acesse http://localhost:8080/ no navegador.

## Testes Automatizados

Para executar os testes automatizados, utilize o seguinte comando:

```bash
ng test
```

## Como Funciona

- A aplicação busca informações de conversão da API de moedas AwesomeAPI.
- A variação em porcentagem, a hora da atualização e a exibição colorida dos valores são gerenciadas de acordo com as regras definidas.
- As informações são cacheadas no front-end por 3 minutos e são atualizadas automaticamente a cada 3 minutos.

## Design e Paleta de Cores

O design da aplicação segue o mockup fornecido no link do Figma abaixo:

[Mockup do Projeto](https://www.figma.com/file/iJJ3KTyOKrjgYmL04qF8kr/Currency-Converter?node-id=0%3A1)

A paleta de cores utilizada está incluída no mockup.

## Fonte

A fonte usada na aplicação é "Poppins", com "Arial" ou qualquer outra fonte sem serifa como fallback.

## Recursos Adicionais

Você pode baixar a logo e o loader a partir do link do Google Drive abaixo:

[Recursos Adicionais](https://drive.google.com/drive/folders/1K1Gt892JAd1bB1dV7FNDLTP-fm_3P22F?usp=sharing)
