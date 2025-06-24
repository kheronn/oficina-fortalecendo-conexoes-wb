const botao = document.getElementById('botao');
const corpo = document.body;

corpo.addEventListener('mousemove', function (evento) {
  const mouseX = evento.clientX;
  const mouseY = evento.clientY;
  
  const posicaoBotao = botao.getBoundingClientRect();
  console.log(mouseX)

  const distanciaLimite = 100;

  const centroBotaoX = posicaoBotao.left + posicaoBotao.width / 2;
  const centroBotaoY = posicaoBotao.top + posicaoBotao.height / 2;

  const distanciaX = mouseX - centroBotaoX;
  const distanciaY = mouseY - centroBotaoY;

  if (Math.abs(distanciaX) < distanciaLimite && Math.abs(distanciaY) < distanciaLimite) {
    const moverX = (distanciaX > 0 ? -1 : 1) * distanciaLimite;
    const moverY = (distanciaY > 0 ? -1 : 1) * distanciaLimite;

    const novaPosicaoX = Math.min(window.innerWidth - posicaoBotao.width, Math.max(0, botao.offsetLeft + moverX));
    const novaPosicaoY = Math.min(window.innerHeight - posicaoBotao.height, Math.max(0, botao.offsetTop + moverY));

    botao.style.position = 'absolute';
    botao.style.left = novaPosicaoX + 'px';
    botao.style.top = novaPosicaoY + 'px';
  }
});
