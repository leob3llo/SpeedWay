//parâmetros do carro

yCarros = [38.5, 95, 147, 208, 267, 310];
xCarros = [550,550,550,550,550,550];
vCarros =  [-3.25,-3.75, -4.15, -4.55, -4.35, -3.50];


cCarros = [35,45,40,50,40,45]; // comprimento carro
lCarros = [45,45,45,45,45,45]; //largura carro

function mostrarCarros(){
  for (let i = 0; i <imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i],cCarros[i],lCarros[i]);   
  //print("o valor de i nessa repetição é" +i)
  }   
}
function movimentoCarros(){
  for(i=0; i<xCarros.length; i++){
  xCarros[i] += vCarros[i];  
  }    
    }  
function   voltarPosicaoInicial(){
  for (var i= 0; i< xCarros.length;i++ ){
  if(xCarros[i] < -60){
      xCarros[i] = 550;   
      }
   }
}  
  
