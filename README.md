# Oficina Fortalecenco Conexões (27/06)
### Prof Kheronn - NRE Wenceslau Braz - Programação Paraná

>  Projeto realizado na oficina de Formação para professores da rede estadual do Paraná que lecionam componentes de Programação Paraná, Pensamento COmputacional no Ensino Fundamentl e Médio, e Programação I e II do Ensino Médio. O objetivo é praticar e demonstrar como o HTML, CSS e JavaScript trabalham juntos para criar experiências dinâmicas na web. 
Nele, criamos um botão que "foge" do cursor do mouse, explorando conceitos fundamentais de programação na prática!

## 🚀 O Que Você Vai Encontrar
Neste repositório, você encontrará os três pilares do desenvolvimento web que dão vida ao nosso "Botão Fugitivo":

index.html: O esqueleto da nossa página, onde o botão e o título são definidos.

estilo.css: A roupa e a maquiagem da página, responsável pelo visual, cores e pela mágica que permite ao botão se mover livremente.

script.js: A inteligência por trás da fuga do botão, controlando seu movimento e reação ao mouse.

## 🧠 Pensamento Computacional em Ação
Este projeto não é apenas sobre código; é sobre pensar como um cientista da computação! Veja como aplicamos conceitos importantes aqui:

Decomposição: Quebramos o problema da "fuga" em partes menores:

- Detectar a posição do mouse.

- Saber onde o botão está.

- Calcular a distância entre os dois.

- Decidir para onde o botão deve ir.

- Mover o botão para a nova posição.

- Abstração: Representamos a tela do computador e as posições do mouse e do botão como coordenadas X e Y (como em um plano cartesiano), simplificando o problema.

- Reconhecimento de Padrões: O JavaScript detecta um "padrão" (o mouse se aproximando de uma "zona de perigo") e reage a ele.

- Algoritmo: Definimos um passo a passo claro e lógico para o botão calcular sua nova posição e fugir.


## ✨ Conceitos Chave Abordados
### HTML:

- Estrutura básica de um documento web (!DOCTYPE html, html, head, body).

- Inclusão de títulos (h1).

- Criação de botões (button) e uso de id para identificação única.

- Conexão com arquivos CSS e JavaScript (link, script src="..." defer).

### CSS:

- Estilização de elementos (body, h1, #botao).

- Uso de propriedades como background, color, font-family, padding, border-radius, box-shadow.

- Flexbox para centralização de conteúdo (display: flex, justify-content, align-items).

- position: relative: O ponto de partida para o movimento do botão.

- transition: Para movimentos e mudanças de estilo suaves.

- overflow: hidden: Essencial para evitar barras de rolagem indesejadas.

### JavaScript:

- Seleção de Elementos: Como o JavaScript "encontra" elementos HTML na página (document.getElementById(), document.body).

- Eventos: Como o JavaScript "ouve" e reage a interações do usuário (addEventListener('mousemove', ...), evento.clientX, evento.clientY).

- Manipulação de Estilos: Como o JavaScript muda o visual de um elemento dinamicamente (botao.style.position, botao.style.left, botao.style.top).

- Geometria e Coordenadas: getBoundingClientRect(), window.innerWidth, window.innerHeight.

- Lógica Condicional: O if que decide se o botão deve fugir.

- Matemática Básica: Math.abs().

- ## 🛠️ Como Executar o Projeto

Clone ou Baixe este repositório para o seu computador.

Abra o arquivo index.html em qualquer navegador web (Google Chrome, Firefox, Edge, etc.).

Mova o mouse em direção ao botão e veja a mágica acontecer!


