let numeroSecreto = 5;
let chute;
let tentativas = 1;


while(chute != numeroSecreto) {

    chute = prompt('escolha um número entre 1 a 30');

if (numeroSecreto == chute) {
    alert(`isso ai voce acertou ${numeroSecreto} com ${tentativas} tentativas.`);
} else {

    if(chute > numeroSecreto) {
        alert(`O numero secreto é menor que ${chute} foi ${tentativas} tentativa`);
    } else {
        alert(`O numero secreto é maior que ${chute} foi ${tentativas} tentativa`);
    }
  // tentativas = tentativas + 1;
  tentativas++;
}

} 




