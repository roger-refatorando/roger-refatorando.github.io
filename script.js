const themeToggleButton = document.getElementById("theme-toggle");
const icon = themeToggleButton.querySelector("i");

themeToggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Inicialize o EmailJS com sua chave pública
  emailjs.init("6MCJoJsun7Hf-liCU"); // Substitua YOUR_PUBLIC_KEY pela sua chave pública do EmailJS

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Envia o formulário usando EmailJS
      emailjs.sendForm("service_s8zap48", "template_x9q7k0t", this).then(
        function () {
          console.log("SUCCESS!");
          alert("Email enviado com sucesso!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "Ocorreu um erro ao enviar o email. Por favor, tente novamente."
          );
        }
      );
    });
});
