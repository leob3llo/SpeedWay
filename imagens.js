let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

let somDatrilha;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator-1.png");
  imagemDoCarro = loadImage("imagens/carro-1.png"),                      
  imagemDoCarro2 = loadImage("imagens/carro-2.png");
  imagemDoCarro3 = loadImage("imagens/carro-3.png");
  
  imagemCarros = [imagemDoCarro,imagemDoCarro2,imagemDoCarro3,         
                 imagemDoCarro,imagemDoCarro2,imagemDoCarro3]

  trilhaSonora = loadSound("som/trilha.mp3");
  somDaColisao = loadSound("som/colidiu.mp3");
  //somPontuacao = loadSound("som/ponto.wav");

}




