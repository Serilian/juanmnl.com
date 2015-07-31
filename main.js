$(function() {
  $("#screen .text").typed({
    strings: ["Hola", "^500 Bienvenido a 1984... ^1000", "^1000 Quieres ^500 jugar un pequeño juego? ^1000", ";)", "Te atreves? ^500", "1) Si<br>2) No<br>" ],
    contentType: 'html',
    typeSpeed: 5,
    startDelay: 3000,
    loop: false
  });
});
