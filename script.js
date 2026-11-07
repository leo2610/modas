const botaoMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// Fecha o menu depois que uma opção é selecionada.
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
});
