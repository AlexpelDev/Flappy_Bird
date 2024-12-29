console.log("[AlexpelDev] Flappy Bird");

const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector("canvas");
const contexto = canvas.getContext("2d");

// [Plano de Fundo]
const planoDeFundo = {
    spriteX: 390,
    spriteY: 0,
    largura: 275,
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    desenha() {
      contexto.fillStyle = '#70c5ce'
      contexto.fillRect(0,0, canvas.width, canvas.height)

      contexto.drawImage(
        sprites,
        planoDeFundo.spriteX, planoDeFundo.spriteY,
        planoDeFundo.largura, planoDeFundo.altura,
        planoDeFundo.x, planoDeFundo.y,
        planoDeFundo.largura, planoDeFundo.altura,
      );

      contexto.drawImage(
        sprites,
        planoDeFundo.spriteX, planoDeFundo.spriteY,
        planoDeFundo.largura, planoDeFundo.altura,
        (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
        planoDeFundo.largura, planoDeFundo.altura,
      );
    }
  };

// [Chão]
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY, // Posição X e Y do chão
      chao.largura, chao.altura, // Tamanho do chão
      chao.x, chao.y, // Posição X e Y do chão no canvas
      chao.largura, chao.altura // Tamanho do chão no canvas
    );

    contexto.drawImage(
      sprites,
      chao.spriteX, chao.spriteY, // Posição X e Y do chão
      chao.largura, chao.altura, // Tamanho do chão
      (chao.x, + chao.largura), chao.y, // Posição X e Y do chão no canvas
      chao.largura, chao.altura // Tamanho do chão no canvas
    );
  },
};

// [Personagem]
const flappyBird = {
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  gravidade: 0.25,
  velocidade: 0,
  atualiza() {
    flappyBird.velocidade = flappyBird.velocidade + flappyBird.gravidade;
    flappyBird.y = flappyBird.y + flappyBird.velocidade; // TESTE
  },
  desenha() {
    contexto.drawImage(
      sprites,
      flappyBird.spriteX, flappyBird.spriteY, // Posição X e Y da imagem
      flappyBird.largura, flappyBird.altura, // Tamanho da imagem
      flappyBird.x, flappyBird.y, // Posição X e Y da imagem no canvas
      flappyBird.largura,
      flappyBird.altura // Tamanho da imagem no canvas
    );
  },
};

// [Colisão]
function loop() {
  flappyBird.atualiza();
  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();

  requestAnimationFrame(loop);
}

loop();
