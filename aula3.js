//Alguns erros comuns

//const  numero; Primeiro erro: Não declarar uma constante


const minhaVar = "oi" // 2° Erro: Não declarar uma variável e chamar e chamar no codigo;
console.log(minhaVar); // exemplo, chamar minhavar com V minusculo;]

console.error("Isso está errado") // 3° "Erro" : Voce pode declarar um erro com o console.eeror

// Condicional abreviada if()

let idadeMinima = 18;
let idadecliente = 17;

if(idadeCliente >= idadeMinima){
    console.log("Cerveja")
} else {
    console.log("Nescau")
} 

//Valor termário
console.log(idadecliente >= idadeMinima? "Cerveja" : "suco")
//modo ternário, Utilizando a estrutura______>=_____? : __________
//modo ternário, Utilizando a estrutura______<+_____? : __________
//modo ternário, Utilizando a estrutura______==______? : _________

//Template string

const nome = "fernando";
const idade = 17;
const cidadeNatal = "Foz do Iguaçu"

const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci em cidade " + cidadeNatal;
console.log(apresentacao)

//teplate string
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade}, e minha cidade natal é ${cidadeNatal}´
console.log(aprentação2)