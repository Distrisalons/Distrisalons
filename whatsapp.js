const phoneNumber = "573143863043"; 
const message = "¡Hola! Vi tu página web y me gustaría saber más sobre tus productos de belleza.";
const encodedMessage = encodeURIComponent(message);
const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

const whatsappButton = document.getElementById("whatsapp-button");
if (whatsappButton) {
  whatsappButton.href = whatsappLink;
}