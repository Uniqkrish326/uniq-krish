// Smooth entry animation
window.addEventListener("load", () => {
  document.querySelector(".hero").style.opacity = 1;
});



  const scrollContainer = document.getElementById("projectScroll");

  document.querySelector(".scroll-btn.left").onclick = () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  };

  document.querySelector(".scroll-btn.right").onclick = () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  };

