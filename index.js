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
      fazerAniversario() {
        this.idade++;
      },
      andar(metros) {
        if (metros === 0 || metros < 0) {
          console.log("Informe uma distância válida");
        } else if (this.andando === true) {
          this.caminhouQuantosMetros += metros;
        } else {
          this.caminhouQuantosMetros += metros;
          this.andando = true;
        }
      },
      parar() {
        this.andando = false;
      },
      apresentar() {
        console.log(
          `Olá, eu sou o ${this.nome}, tenho ${this.idade} ${
            this.idade === 1 ? `ano` : `anos`
          } , peso ${this.peso}kg, tenho ${this.altura}m e já caminhei ${
            this.caminhouQuantosMetros
          } ${this.caminhouQuantosMetros === 1 ? `metro` : `metros`}.`
        );
      },
    });
    return console.log(
      `Pessoa cadastrada com sucesso! Agora temos ${cadastro.length} pessoa(s) cadastrada(s).`
    );
  };

  const gerarRelatorio = function gerarRelatorio() {
    for (let i = 0; i < cadastro.length; i++) {
      cadastro[i].apresentar();
    }
  };
  cadastrarPessoa("Pedro", 20, "Masculino", 80, 1.76);
  cadastrarPessoa("Maria", 19, "Feminino", 50, 1.54);
  cadastrarPessoa("João", 56, "Masculino", 70, 1.63);
  cadastrarPessoa("Jorge", 1, "Masculino", 10, 0.3);

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
  cadastro[2].andar(1);

  cadastro[2].fazerAniversario();
  cadastro[1].parar();
  gerarRelatorio();
})();
