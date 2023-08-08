let audios = [
  {caminho:'audios/cavalo-ratinho.mp3', legenda:'Cavalo'},
  {caminho:'audios/yepa.mp3', legenda:'YEEEEE'},
  {caminho:'audios/nao-e-o-pai.mp3', legenda:'Não é o Pai'},
  {caminho:'audios/pare.mp3', legenda:'Pare'},
  {caminho:'audios/que-viadao-bonito-hein-ratinho_2.mp3', legenda:'Viad@o Bonito'},
  {caminho:'audios/ratinhooo_1.mp3', legenda:'Ratinhooo'},
  {caminho:'audios/uepa-mp3cut.mp3', legenda:'Uepa'},
  {caminho:'audios/vinheta-xaropinho-rapaz_dx3f4Be.mp3', legenda:'Rapaiz'},
  {caminho:'audios/de-copao-na-mao-estourado.mp3', legenda:'Bonus'},
];

let botoes = document.querySelectorAll('.botao');
let legendas = document.querySelectorAll('p');

  for (let i=0; i < 9; i++){
legendas[i].textContent = audios [i].legenda; 
botoes[i].setAttribute('data-item', i);
  }

let audioTag = document.querySelector('audio');

botoes.forEach(botao => {
  botao.addEventListener('click', ()  => {
   let som = audios[botao.getAttribute('data-item')];
   audioTag.setAttribute('src', som.caminho);
   audioTag.addEventListener('loadeddata', () => {
    audioTag.play();
   });

  });
});