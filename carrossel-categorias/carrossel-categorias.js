let index = 0;
const cards = document.querySelectorAll('.card');
const slider = document.querySelector('.slider-wrapper');
const total = cards.length;
let autoPlay = setInterval(() => changeSlide(1), 4000);

function update() {
  cards.forEach((card, i) => {
    // Reseta estilos inline do mouse e classes
    card.style.transform = ''; 
    card.className = 'card'; 

    if (i === index) {
      card.classList.add('active');
    } else if (i === (index + 1) % total) {
      card.classList.add('next');
    } else if (i === (index - 1 + total) % total) {
      card.classList.add('prev');
    } else {
      card.classList.add('hide');
    }
  });
}


// Reseta ao tirar o mouse
// Quando o mouse entra na área do slider, paramos o timer
slider.addEventListener('mouseenter', () => {
  clearInterval(autoPlay); 
});

// Quando o mouse sai, resetamos as posições e ligamos o timer novamente
slider.addEventListener('mouseleave', () => {
  resetTimer(); // Retoma o slider automático
  
  // Seu código original que volta a imagem pra posição estática
  const activeCard = document.querySelector('.card.active');
  if (activeCard) {
    activeCard.style.transform = `translate3d(0, 0, 150px) rotateY(0deg) rotateX(0deg)`;
  }
});

function changeSlide(direction) {
  index = (index + direction + total) % total;
  update();
  resetTimer();
}

function clickToSlide(clickedIndex) {
  if (index !== clickedIndex) {
    index = clickedIndex;
    update();
    resetTimer();
  }
}

function resetTimer() {
  clearInterval(autoPlay);
  autoPlay = setInterval(() => changeSlide(1), 4000);
}

// Inicializa
update();