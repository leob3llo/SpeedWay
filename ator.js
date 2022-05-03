//parametro do ator;
let xAtor = 125;
let yAtor = 370;
let comprimentoAtor = 30;
let larguraAtor =30;
let raioDeAcaoDoAtor = 15;
let colisao= false;

let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor,yAtor,
      comprimentoAtor,larguraAtor);
  //print(yAtor);
}  
function movimentoAtor(){

  if (keyIsDown(UP_ARROW)){
    yAtor += -2;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(atorPodeSeMover()){
    yAtor += 2;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
  }
  if (keyIsDown(LEFT_ARROW)){
    xAtor += -2}
}  

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], 
              cCarros[0], lCarros[0], xAtor, yAtor, 15)
    if (colisao){
      somDaColisao.play();
      voltaAtorPosicaoInicial();
        if (meusPontos > 0){
        meusPontos -= 1;
      }
    }
  }
}

function voltaAtorPosicaoInicial(){
  yAtor = 366;
}

function incluiPontos(){
  text(meusPontos, width /4, 29);
  textSize(27);
  textAlign(CENTER);
  fill(color(240,248,255));
  
} 

function marcaPonto(){
  if (yAtor < 15){
    //somPontuacao.play();
    meusPontos += 1;
    yAtor =370;
  }
}
  
function atorPodeSeMover() {
  return yAtor < 370;
  
}
  
  
  
  
  
  
  
  
