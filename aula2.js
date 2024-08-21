// var -> Criando uma Variavel 

    // var altura = 5;
    // var comprimento = 8;

    // var area = altura * comprimento ;
    // console.log(area);

    // Criando uma variavek ( forma mais atualizada de criar uma variavel )

    let altura = 5;
    let comprimento = 8;
    let forma = "retangulo"
    let area;

    if (forma ==="retangulo"){
        area + altura * comprimento
    }else{
        area + (altura * comprimento) / 2 
    }
    console.log("Deveria ser uma")

    // const -> Ultilizada para criar "Variaveis que são fixas que não se alteram
    //condiçoes booleanas (Truly ou falsy)
    // 0 = false true
    // 1 =

    const usuarioLogado = true;
    const contaPaga = false;

    console.log(0 == false); // True
    console.log(contaPaga == 0) // True
    console.log(contaPaga ===0); // False
    console.log("" == false); // True
    console.log(1 == true); // True

    // Nulo e indefinido
    // nulo -> vazio ou nada

    let fernando;
    let vanessa = null;
    let numero = 3;
    let texto = "EU gosto de programação"
    
    // consultando os tipos de variaveis

    console.log(typeof fernando);
    console.log(typeof  vanessa);
    console.log(typeof  numero);
    console.log(typeof  texto);
      
    // Conversão de variá
    
    const numeroNumber = 390;
    const numeroString = "390"

    console.log(numeroNumber == numeroString); // compara apenas o valor
    console.log(numeroNumber === numeroString); // compara o tipo
    console.log(numeroNumber + numeroString); // concatenação
    console.log(numeroNumber + Number(numeroString)); // Soma de numeros

    


  