document.addEventListener("DOMContentLoaded", function() {
  const textarea = document.querySelector(".contactForm .inputBox textarea");

  // Stel de minimale hoogte in
  const minHeight = textarea.clientHeight;

  textarea.addEventListener("input", function() {
    // Beperk de hoogte van de textarea tot de minimale hoogte
    textarea.style.height = minHeight + "px"; // Reset de hoogte naar de minimale hoogte
    if (textarea.scrollHeight > minHeight) {
      textarea.style.height = textarea.scrollHeight + "px"; // Vergroot de hoogte als de inhoud groter is
    }
  });

  // Voorkom dat de gebruiker het tekstvak naar boven kan slepen
  textarea.addEventListener("mousedown", function(event) {
    const startY = event.clientY;
    
    const mouseMoveHandler = function(event) {
      const currentY = event.clientY;
      if (currentY < startY) {
        textarea.style.height = minHeight + "px"; // Reset de hoogte als er naar boven wordt gesleept
      }
    };

    const mouseUpHandler = function() {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  });
});