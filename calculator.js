

function obrisiJedan() {
  document.querySelector('.prikaz').innerHTML = document.querySelector('.prikaz').innerHTML.slice(0, -1) ;
}

function obrisiSkroz() {
  document.querySelector('.prikaz').innerHTML = "";
}

function dodajZnak(znak) {
  document.querySelector('.prikaz').innerHTML = znak;
}