//FUNÇÕES!!!!
let X = "NADA";
console.log(X)
X = 19;
y = 20;

imprimeTexto(y)
// declaração de frunção

// 1) declara a função

function imprimeTexto (Texto){
    console.log(Texto)
}

// 2) chamar/executar função
imprimeTexto(X)
imprimeTexto(vini)
 function soma (){
    return 2 + 2
 }
console.log(sama())
imprimeTexto(somaNumeros(2, 3))
imprimeTexto(somaNumeros(23, 34))
function somaNumeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade( nome, idade){
    return`Meu nome é ${nome} e minha idade é {idade} `
}
// A ordem dos paramentros é importante!!
imprimeTexto(nomeIdade("vini", 17))
imprimeTexto(nomeIdade(17, "gabriel"))

imprimeTexto(Multiplicacao())
//voce pode definir um paramentro inicial para a funcão
function Multiplicacao(numero4 = 2, numero5 = 5){
    return numero4 * numero5
}
imprimeTexto(Multiplicacao(soma(3,4), soma(5,10)))

// Expressao de funcao

const constanteSoma = function(nume1, nume2){return nume1 + nume2}

console.log(constanteSoma(3,6)) 

// funcao e var são "listadas" no topo do arquivo

// Arrow function
 
const apresentaArrow = nome => `meu nome é $(nome)`
const somaEmFlexa = (nu1, nu2) => nu1 + nu2;

console.log(apresentaArrow)("Fernando")
console.log(somaEmFlexa(2,4))

const somaNumeroPequenos = (num1, num2) => {
    if(num1 || nume2 > 10){
        return "Essa funcao é apenas para números pequenos"
    } else {

    }        
    
}

console.log(somaNumerosPequenos(2,3))

