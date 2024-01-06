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

// console.log(`Toma str template`)