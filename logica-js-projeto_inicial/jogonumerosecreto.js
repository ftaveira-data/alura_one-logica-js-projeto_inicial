alert("Boas Vindas ao Jogo do Numero Secreto");

let numeroMaximo = 10000;
let numeroSecreto = parseInt(Math.random() * 10000+1);
console.log(numeroSecreto);

let tentativa = 1;
let chute = parseInt(prompt(`Escolha um número entre 1 e ${numeroMaximo}:`));        


while (numeroSecreto != chute ) {
   let dica = (chute < numeroSecreto) ? `Dica: O número secreto é MAIOR que ${chute}` : `Dica: O número secreto é MENOR que ${chute}`;    
    chute = parseInt(prompt(`${dica} Tentativa ${tentativa + 1}: Qual seu novo palpite?`));
    tentativa++;   
} 
let palavraTentativa = (tentativa === 1) ? "tentativa" : "tentativas";
alert(`Parabens! Você descobriu o numero secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}!`)

