const botoes =  document ; querySelectorAll ("botao")
const textos =  document ; querySelectorAll (".aba-conteudo")

for(let i=0 ; i < botoes.length ; i ++){
    botoes.onclick = function () {
        for( let j = 0 ; j < botoes.length ; j ++ ){
            botoes[j].classlist.remove( "ativo");
            textos[i].classlist.remove( "ativo");
        }
        botoes[i]. classlist. add ("ativo");
        textos[i]. classlist. add ("ativo");
    }
}

const cotadores = document.querySelectorAll(".contador");
const tempoObjetivo1= new date ("2024-03-25T00:00:00");

contadores [0]. textContext = calculaTempo ( tempoObjetivo1) ;
 function calculaTempo(tempoObjetivo) {
   let tempoAtual = new date ();
   let tempoFinal = tempoObjetivo- tempoAtual
   let segundos = Math.floor(tempoFinal/1000);
   let minutos = Math.floor(segundos/60);
   let horas = Math.floor(minutos/60);
   let dias = Math.floor(horas/24);
   segundos% = 60;
   minutos% = 60;
   horas% = 60;
   return dias + "dias" + "horas" + minutos + "minutos" + segundos + "segundos"
}
