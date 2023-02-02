// Função de rolagem suave
// Gostou? esse código é do 
// POP-IMAGE: jul10l1r4.github.io/POP-image/
// Quer fazer isso? veja o primeiro artigo
// que ensina a fazer isso em seis linhas
// https://jul10l1r4.github.io/artigo/Seja_performatico_-_efeito_scroll_com_6_linhas_sem_jquery/
// Licença: GPLv3
const go = (elemento) => {
  let vivo = document.querySelector(elemento)
  window.scroll({ 
	  top: vivo.offsetTop, 
	  left: 0,
	  behavior: 'smooth'
  })
} 
// Sem jquery :3
