//= require jquery
//= require jquery_ujs
//= require popper
//= require bootstrap
// app/javascript/packs/application.js
//= require jquery
//= require jquery_ujs


document.addEventListener("DOMContentLoaded", function() {
  // código js
  document.getElementById('nextBtn').addEventListener('click', function() {
    document.getElementById('tela2').classList.toggle('tela-expanded');
  });
});
