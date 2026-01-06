const tracks = document.getElementById("track")
const viewport = document.getElementById('viewport')


let cards = Array.from(tracks.children) 
const OGCount= cards.length

function ensureClones() {
  // Get only the original cards (first N cards)
  const originals = Array.from(tracks.querySelectorAll('.card')).slice(0, OGCount);

  // Clear track content before adding clones
  tracks.innerHTML = '';

  const cloneCount = 3; // How many times to repeat the originals
  for (let i = 0; i < cloneCount; i++) {
    originals.forEach(c => tracks.appendChild(c.cloneNode(true))); // Clone each card and append
  }
}

// Call to clone cards initially
ensureClones();
cards = Array.from(tracks.children);
console.log(cards)

function getItemWidth(){
    const style = getComputedStyle(cards[0])
    return cards[0].offsetWidth + parseFloat(style.marginRight || 0)
}
let itemW = getItemWidth();
let totalWidth = itemW * cards.length; 
//   console.log(totalWidth)

let position =0;
let velocity=0;
let smoothPos =0;

const friction =0.91;
const Wheel = 0.1;
const LerpSpeed = 0.14;

// Handle wheel scroll for desktop to add velocity
window.addEventListener('wheel', e => {
  e.preventDefault(); // Prevent page scroll
  velocity += e.deltaY * wheelMultiplier; // Increase velocity based on scroll amount
}, { passive: false });
