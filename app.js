let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
let chute;
let tentativas = 1;


while(chute != numeroSecreto) {

    chute = prompt(`escolha um número entre 1 a ${numeroMaximo} `);

if (numeroSecreto == chute) {
    break; 
} else {

    if(chute > numeroSecreto) {
        alert(`O numero secreto é MENOR ⬇️ que ${chute}, foi ${tentativas} tentativa`);
    } else {
        alert(`O numero secreto é MAIOR ⬆️ que ${chute}, foi ${tentativas} tentativa`);
    }
  // tentativas = tentativas + 1;
  tentativas++;
}

} 

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`🎉🎉🎉isso ai você acertou 🥳 ${numeroSecreto}🥳, com ${tentativas} ${palavraTentativa}.`);

