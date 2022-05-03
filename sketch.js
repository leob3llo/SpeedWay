function setup() {
  createCanvas(500, 400);
trilhaSonora.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostrarCarros();  
  movimentoCarros();
  movimentoAtor();
  voltarPosicaoInicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
  
}