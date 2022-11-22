// localização e forma da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

// velocidade da bolinha 
let velocidadeX = 6;
let velocidadeY = 6;

// estrutura da raquete 
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

let colidiu = false;


function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(0);
    desenhaBolinha();
    velocidadeBolinha();
    colisaoBordas();
    desenhaRaquete();
    movimentaRaquete();
   // verificaColisaoRaquete();
    colisaoMinhaRaqueteBiblioteca();
    
}

function desenhaBolinha() {

    circle(xBolinha, yBolinha, diametro);

}

function velocidadeBolinha() {

    xBolinha += velocidadeX;
    yBolinha += velocidadeY;

}

function colisaoBordas() {

    if (xBolinha + raio > width || xBolinha - raio < 0) {
        velocidadeX *= -1
    }

    if (yBolinha + raio > height || yBolinha - raio < 0) {
        velocidadeY *= -1
    }

} 

function desenhaRaquete() {

    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete );
}


function movimentaRaquete(){

    if(keyIsDown(UP_ARROW)) {
        yRaquete  -= 10;
    }

    if(keyIsDown(DOWN_ARROW)) {
        yRaquete  += 10;
    }
}

function verificaColisaoRaquete(){

    if(xBolinha - raio < xRaquete + larguraRaquete &&
    yBolinha - raio < yRaquete + alturaRaquete &&
    yBolinha + raio > yRaquete - alturaRaquete) {
    
        velocidadeX *= -1;
    }

}

function colisaoMinhaRaqueteBiblioteca() {

    colidiu = 
    collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete,
    xBolinha, yBolinha, raio);
    if (colidiu){
    
        velocidadeX *= -1
    
    }

}















