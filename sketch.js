// localização e forma da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// velocidade da bolinha 
let velocidadeX = 20;
let velocidadeY = 20;

// estrutura da minha raquete 
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

// estrutura raquete do oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150; 
let velocidadeYOponente;
let chanceDeErrar = 0

//estrutura placar 
let meusPontos = 0;
let oponentePontos = 0;

//estrutura som
let trilha;
let raquetada;
let ponto;

let colidiu = false;


function preload() {

    trilha = loadSound("trilha.mp3");
    raquetada = loadSound("raquetada.mp3");
    ponto = loadSound("ponto.mp3");

}

function setup() {
    createCanvas(600, 400);
    trilha.loop();

}

function draw() {
    background(0);
    desenhaBolinha();
    velocidadeBolinha();
    colisaoBordas();
    desenhaRaquete(xRaquete, yRaquete);
    desenhaRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaquete();
   // verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete );
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente );
    movimentaRaqueteOponeente();
    mostraPontos();
    marcaPontos();
    calculaChanceDeErrar();
    bolinhaNaoFicaPresa();

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

function desenhaRaquete(x, y) {
    rect(x, y, larguraRaquete, alturaRaquete );
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
        raquetada.play();
    }

}

function verificaColisaoRaquete(x, y) {
    
    colidiu =  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    
    if (colidiu){
    
        velocidadeX *= -1;
        raquetada.play();
    
    }
    
}

function calculaChanceDeErrar() {
    
    if(oponentePontos >= meusPontos ) {
        chanceDeErrar += 1;
    
        if(chanceDeErrar >= 39) {

            chanceDeErrar = 40;

        }

    } else { 
    chanceDeErrar -= 1;
    
        if (chanceDeErrar <= 35) {
            chanceDeErrar = 35
        }
    
    }
}

function  movimentaRaqueteOponeente() {
    
    velocidadeYOponente = yBolinha -yRaqueteOponente - larguraRaquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente;
    calculaChanceDeErrar();

}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}





function mostraPontos() {
    
    stroke(255)
    textSize(16);
    textAlign(CENTER);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(oponentePontos, 470, 26)
}

function marcaPontos() {
    
    if (xBolinha > 590){
        meusPontos ++;
        ponto.play();
    }

    if (xBolinha < 10){
        oponentePontos ++;
        ponto.play();
    }
    
}































