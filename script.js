function moveButton() {
    const btn = document.getElementById('noButton');
    
    // Calculate available space (viewport minus button size)
    const padding = 20;
    const maxX = window.innerWidth - btn.offsetWidth - padding;
    const maxY = window.innerHeight - btn.offsetHeight - padding;

    // Generate random coordinates within bounds
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply new position
    btn.style.left = randomX + 'px';
    btn.style.top = randomY + 'px';
}

// Ensure the button jumps on both hover (PC) and touch (Mobile)
const noBtn = document.getElementById('noButton');
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents accidental clicks on mobile
    moveButton();
});

function nextPage() {
    window.location.href = "yes.html"; // Create a second page for the celebration!

}