let numeroMaximo = prompt('Digite o número máximo do jogo! (Obs: o limite é de 1 a 100)')
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
// let tamanhoSecreto = (numeroSecreto <= 10) ? 'Escolha um número de 1 a 10' : 'Escolha um número entre 1 a 100';
console.log(numeroSecreto);
let escolhaNumero = prompt(`Digite um número de 1 a ${numeroMaximo}`);
let tentativa = 1;
// let palavraTentativa = (tentativa > 1) ? 'tentativas' : 'tentativa';

// alert(numeroSecreto == escolha);

if (escolhaNumero == numeroSecreto) {
    console.log(`Número secreto: ${numeroSecreto}`);
    alert('Certou parabéns. Você acertou na primeira tentativa');
} else {
    console.log(`Erro do usuário. Número secreto: ${numeroSecreto}`);
    while (escolhaNumero != numeroSecreto) {
        if (escolhaNumero > numeroSecreto) {
            console.log('Lucas vc sabe que o número é '+ numeroSecreto)
            alert('Vc errou, na vdd, o número é menor');
            escolhaNumero = prompt('Escolha novamente:');
            tentativa++
        } else {
            console.log('Lucas vc sabe que o número é '+ numeroSecreto)
            alert('Vc errou, na vdd, o número é maior');
            escolhaNumero = prompt('Escolha novamente:');
            // tentativa = tentativa + 1
            tentativa++
        }
        if (escolhaNumero == numeroSecreto){
            console.log('Boa');
            alert(`Vc acertou! N° de tentativa: ${tentativa}`)
        }

    }
}


// 1.
// console.log('Boas-vindas!');

// 2.
// let nome = 'Lucas';
// console.log('Olá, '+nome);

// // 3.
// let nome = 'Lucas';
// alert("Olá, "+nome);

// // 4.
// let linguagemProgramacao = prompt('Qual é a sua linguagem de programação preferida?');
// console.log(linguagemProgramacao);

// // 5. 
// let valor1 = 5;
// let valor2 = 5;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

// // 6. 
// let valor1 = 6;
// let valor2 = 2;
// resultado = valor1 - valor2;
// console.log(`A subtração de ${valor1} por ${valor2} é igual a ${resultado}`);

// // 7.
// let idadeUsuario = prompt('Digite sua idade:');
// if (idadeUsuario >= 18){
//     console.log('Você é maior de idade')
// } else {
//     console.log('Você é de menor de idade')
// }

// // 8.
// let numeroDigitado = prompt('Digite um número:');
// if (numeroDigitado > 0) {
//     console.log('O número é positivo.');
// } else {
//     if (numeroDigitado == 0) { 
//         console.log('Você digitou zero') 
//     } else{
//     console.log('O número é negativo');
// }
// }

// // 9.
// let i = 1
// while (i < 11){
//     console.log(i);
//     i++;
// }

// // 10.
// let notaAluno = parseFloat(prompt('Digite uma nota'));
// if (notaAluno > 10) {
//     console.log('VC ESTÁ MENTIDO, VC FOI EXPULSO DA ESCOLA >:<')
//     }else {
//         if (notaAluno >= 7.0) {
//             console.log('Aluno aprovado');
//         } else {
//             console.log('Aluno reprovado');
//         }
//     }

// 11.
// console.log(Math.random());

// 12.
// console.log(parseInt(Math.random() * 10 + 1));

// 13.
// console.log(parseInt(Math.random() * 1000 + 1));