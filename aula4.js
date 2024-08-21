//, FUNÇÕES!!!!

let x = "nada";
console.log(x)
x = "oi"
y = "tchau"

//Declaração de função

imprimeTexto(Y)
// 1) Declara a função

function imprimeTexto(texto) {
     console.log(texto)
}

// 2) chamar?executar a função

imprimeTexto9(x)
imprimeTexto("Eu sou profeasor")

function soma(){
    return  2 + 2 
}

console.log(soma())
imprimeTexto(soma())
imprimeTexto(somaDeNumeros( 4,7))
imprimeTexto(somaDeNumeros(24, 11))

function somaDeNmeros(numero1, numero2){
    return numero1 + numero2
}

function nomeIdade(nome, idade){
    return ` Meu nome é ${nome} e minha idade é ${idade}

}
    //  A ordem dos parâmetros é impotante!!
imprimeTexto(nomeIdade("Teo", 32))
imprimeTexto(nomeidade(17, "fernando"))

imprimeTexto(multiplicacao())

function multiplicacao(numero4 = 2, numero = 5){
     return numero4 * numero5
}
     imprimeTexto(multiplicacao(somaDeNumeros(3,10)));
   

}





