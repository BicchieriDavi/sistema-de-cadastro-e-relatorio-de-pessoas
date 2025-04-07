/*
💻 Projeto 1 – Sistema de Cadastro e Relatório de Pessoas (em JS puro)

Objetivo: Criar um sistema em JavaScript que permita cadastrar pessoas e gerar um relatório com os dados delas. 
Tudo no código, sem HTML nem interface. Só no console mesmo.

Regras:
1. Cadastro de pessoas: Crie um array chamado cadastro (vazio no início). 
Cada pessoa será um objeto com as seguintes propriedades:
- nome (string)
- idade (number)
- sexo (string – "Masculino" ou "Feminino")
- peso (number)
- altura (number)
- andando (boolean – começa como false)
- caminhouQuantosMetros (number – começa como 0)

2. Função de cadastro
- Crie uma função chamada cadastrarPessoa que recebe os dados acima como parâmetros e adiciona a pessoa no array.
- Retorne algo como:
```"Pessoa cadastrada com sucesso! Agora temos X pessoa(s) cadastrada(s)."```

3. Métodos de ação (dentro de cada pessoa):
- fazerAniversario() → adiciona +1 na idade
- andar(metros) → soma os metros e define andando = true
- parar() → define andando = false
- apresentar() → retorna a frase: `
``"Olá, eu sou o [nome], tenho [idade] ano(s), peso [peso]kg, tenho [altura]m e já caminhei [X] metro(s)."``` 
(⚠️ Cuida do plural/singular de "ano" e "metro")

4. Função de relatório
- Crie uma função gerarRelatorio() que percorre todo o array cadastro e imprime a apresentação de cada pessoa com o método apresentar().

5. Regras extras:
- Se andar(0) ou andar(-5) for chamado, retorne: "Informe uma distância válida."
- Se a pessoa já estiver andando e chamar andar de novo, só soma os metros.
- O método parar() só muda o valor de andando, não zera os metros.

Exemplo de uso esperado:
```
cadastrarPessoa("Ana", 28, "Feminino", 60, 1.65);
cadastrarPessoa("Carlos", 32, "Masculino", 80, 1.80);

cadastro[0].fazerAniversario();
cadastro[0].andar(300);
cadastro[0].parar();

cadastro[1].andar(150);
cadastro[1].andar(150);

gerarRelatorio();
```
 */

(function () {
  let cadastro = [];

  const cadastrarPessoa = function cadastrarPessoa(
    nome,
    idade,
    sexo,
    peso,
    altura
  ) {
    cadastro.push({
      nome: nome,
      idade: idade,
      sexo: sexo,
      peso: peso,
      altura: altura,
      andando: false,
      caminhouQuantosMetros: 0,
    });
    return console.log(
      `Pessoa cadastrada com sucesso! Agora temos ${cadastro.length} pessoa(s) cadastrada(s).`
    );
  };

  cadastrarPessoa("Pedro", 20, "Masculino", 80, 1.76);
  cadastrarPessoa("Maria", 19, "Feminino", 50, 1.54);
  cadastrarPessoa("João", 56, "Masculino", 70, 1.63);

  cadastro.forEach((element, index) => {
    cadastro[index].fazerAniversario = function fazerAniversario() {
      cadastro[index].idade++;
    };

    cadastro[index].andar = function andar(metros) {
      if (metros === 0 || metros < 0) {
        console.log("Informe uma distância válida");
      } else if (cadastro[index].andando === true) {
        cadastro[index].caminhouQuantosMetros += metros;
      } else {
        cadastro[index].caminhouQuantosMetros += metros;
        cadastro[index].andando = true;
      }
    };

    cadastro[index].parar = function parar() {
      cadastro[index].andando = false;
    };

    cadastro[index].apresentar = function apresentar() {
      console.log(
        `Olá, eu sou o ${cadastro[index].nome}, tenho ${cadastro[index].idade} ano(s), peso ${cadastro[index].peso}kg, tenho ${cadastro[index].altura}m e já caminhei ${cadastro[index].caminhouQuantosMetros} metro(s).`
      );
    };
  });

  const gerarRelatorio = function gerarRelatorio() {
    for (var i = 0; i < cadastro.length; i++) {
      cadastro[i].apresentar();
    }
  };

  console.log(cadastro);
  cadastro[0].fazerAniversario();
  cadastro[1].fazerAniversario();
  cadastro[2].fazerAniversario();
  console.log("--------------------------------------------------------");
  cadastro[1].andar(300);
  console.log(cadastro[1]);
  console.log("--------------------------------------------------------");
  cadastro[1].parar();
  console.log(cadastro[1]);
  console.log("--------------------------------------------------------");
  cadastro[0].andar(700);
  cadastro[1].andar(400);
  cadastro[1].andar(77);
  cadastro[2].andar(0);
  cadastro[2].andar(-5);
  cadastro[2].andar(70);

  cadastro[2].fazerAniversario();
  cadastro[1].parar();
  gerarRelatorio();
})();
