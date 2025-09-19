const colors = ['#0f0','#0ff','#ff0','#f0f'];
for(let i=0; i<40; i++){
  const confetti = document.createElement('div');
  confetti.style.position = 'fixed';
  confetti.style.width = '8px';
  confetti.style.height = '8px';
  confetti.style.background = colors[Math.floor(Math.random()*colors.length)];
  confetti.style.top = '-10px';
  confetti.style.left = Math.random()*window.innerWidth + 'px';
  confetti.style.opacity = 0.7;
  confetti.style.borderRadius = '50%';
  document.body.appendChild(confetti);

  const fallDuration = Math.random()*3 + 3;
  confetti.animate(
    [
      { transform: 'translateY(0)' },
      { transform: `translateY(${window.innerHeight}px)` }
    ],
    {
      duration: fallDuration*1000,
      iterations: Infinity,
      delay: Math.random()*2000
    }
  );
}

// --- EFECTO DE ESCRITURA ---
const textElement = document.querySelector("h1");
const fullText = textElement.textContent;
textElement.textContent = ""; // Vaciar el texto antes de escribir
let index = 0;

function typeWriter() {
  if (index < fullText.length) {
    textElement.textContent += fullText.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // velocidad de escritura
  }
}

typeWriter();
