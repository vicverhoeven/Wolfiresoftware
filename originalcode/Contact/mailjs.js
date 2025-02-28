// Initialiseer EmailJS met je public key (vervang met je eigen public key)
emailjs.init("S9UADu1yacN0_ZEgs");  // Vervang "your_public_key" met de juiste public key

// Wacht tot de DOM volledig geladen is voordat je de event listener toevoegt
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  // Voeg een event listener toe voor het submit event
  form.addEventListener("submit", function(event) {
    event.preventDefault();  // Voorkom dat het formulier standaard wordt verzonden

    // Verzenden via EmailJS
    emailjs.sendForm("wolfire-software", "template_ute5rxm", this)
      .then(function(response) {
        console.log("E-mail succesvol verzonden", response);
        alert("Je bericht is succesvol verzonden! Bedankt voor je contact.");
      }, function(error) {
        console.error("Fout bij verzenden van e-mail", error);
      });
  });
});
  