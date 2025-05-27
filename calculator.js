let flag = false;


function rezultat(){
  for (let i = 0 ; i < document.querySelector('.neprikaz').innerHTML.length; i++) {
    if (i === 0 && (document.querySelector('.neprikaz').innerHTML[i] === "/" || document.querySelector('.neprikaz').innerHTML[i] === "*" || document.querySelector('.neprikaz').innerHTML[i] === "%")) {
      document.querySelector('.prikaz').innerHTML = "ne moze to";
      document.querySelector('.neprikaz').innerHTML = "";
    } 

  }
  document.querySelector('.prikaz').innerHTML= eval(document.querySelector('.neprikaz').innerHTML);
  document.querySelector('.neprikaz').innerHTML= eval(document.querySelector('.neprikaz').innerHTML);
  flag = true;
}


function obrisiJedan() {
  if (flag) {
    document.querySelector('.prikaz').innerHTML = "";
    document.querySelector('.neprikaz').innerHTML = "";
    flag = false;
  }
  else {
    document.querySelector('.prikaz').innerHTML = document.querySelector('.prikaz').innerHTML.slice(0, -1);
    document.querySelector('.neprikaz').innerHTML = document.querySelector('.neprikaz').innerHTML.slice(0, -1);
  }
  
}

function obrisiSkroz() {
  document.querySelector('.prikaz').innerHTML = "";
  document.querySelector('.neprikaz').innerHTML = "";
  flag = false;
}

function dodajZnak(znak) {
  document.querySelector('.prikaz').innerHTML += znak;
  document.querySelector('.neprikaz').innerHTML += znak;
  flag = false;
}

console.log(Number(eval("/23")));