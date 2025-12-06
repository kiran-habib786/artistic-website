let toggleButton= document.getElementById("toggle-button");
let navLiks= document.querySelector(".nav-links");

toggleButton.addEventListener("click",function(){
    navLiks.classList.toggle("active");
})


const cursor = document.querySelector('.cursor');
const cursorInner = document.querySelector('.cursor-inner');

let x = 0, y = 0;
let targetX = 0, targetY = 0;
let lastX = 0, lastY = 0;

// Show the cursor when moving
document.addEventListener('mousemove', (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
  cursor.classList.add('visible');

  // Hide dot if hovering an element with cursor:pointer
  const elem = document.elementFromPoint(e.clientX, e.clientY);
  if (elem && getComputedStyle(elem).cursor === 'pointer') {
    cursor.classList.add('hidden');
  } else {
    cursor.classList.remove('hidden');
  }
});

// Hide when mouse leaves window
document.addEventListener('mouseout', (e) => {
  if (!e.relatedTarget && !e.toElement) {
    cursor.classList.remove('visible');
  }
});

// Show again when mouse enters
document.addEventListener('mouseover', () => {
  cursor.classList.add('visible');
});

function animate() {
  // Smooth follow
  x += (targetX - x) * 0.15;
  y += (targetY - y) * 0.15;

  // Calculate speed
  const dx = x - lastX;
  const dy = y - lastY;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const speed = distance * 2;

  // Adjust glow intensity and scale
  const glowSize = Math.min(40 + speed, 100);
  const scale = Math.min(1 + speed / 30, 2);

  cursor.style.transform = `translate(${x}px, ${y}px)`;
  cursorInner.style.transform = `scale(${scale})`;
  cursorInner.style.boxShadow = `0 0 ${glowSize / 2}px #a8ff00, 0 0 ${glowSize}px #a8ff00`;

  lastX = x;
  lastY = y;

  requestAnimationFrame(animate);
}

animate();
