//ex 1 variaveis//
let nome = 'joao'
console.log(nome)

//ex 2//
let a= 5 , b=8
let soma = a + b
console.log("A soma de a e b é:", soma);

//ex 3//
let primeironome ='josefa';
let ultimonome = 'silva';
let nomeCompleto = primeironome + ultimonome;
console.log (nomeCompleto)

//ex 4//
let pessoa= {
    nome:'tantofaz',
    idade:'37',
    endereco:'seilaqualquerrua',
    telefone:'4799957634'
}
console.log(pessoa)

//ex 4.5 vetores//
let frutas = ["maçã", "banana", "laranja"];
frutas.push =("uva")
console.log(frutas);

//ex 5//
let numeros = [1,2,3,4,5];
numeros[5] = 6
numeros.push(7)
console.log(numeros)

//ex 6//
let cores = ['vermelho', 'verde', 'azul'];
console.log(cores)
for(i=0; i<cores.length; i++)
    console.log(cores[i])

//ex 7//
let idade = 15;

if (idade >= 18) {
    console.log("Maior de idade");
} else {
 console.log("Menor de idade");
}

//ex 8//
let nota = 2;

if (nota >= 7) {
   
    console.log("Aprovado");
} else if (nota >= 5 == nota < 7) {
   
    console.log("Recuperação");
} else {
    
    console.log("Reprovado");
}

//ex 9//
let diaDaSemana = 7 ;
switch(diaDaSemana) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    
        
      
}
  
    
//ex 10//
  for(let i = 1; i <= 10; i++) {
    console.log(i);




    

 
