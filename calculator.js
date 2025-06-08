let flag = false;


function rezultat(){
  for (let i = 0 ; i < document.querySelector('.neprikaz').innerHTML.length; i++) {
    if (i === 0 && (document.querySelector('.neprikaz').innerHTML[i] === "/" || document.querySelector('.neprikaz').innerHTML[i] === "*" || document.querySelector('.neprikaz').innerHTML[i] === "%")) {
      document.querySelector('.prikaz').innerHTML = "error";
      document.querySelector('.neprikaz').innerHTML = "";
      return;
    } 
    
  }
  document.querySelector('.prikaz').innerHTML= eval(document.querySelector('.neprikaz').innerHTML);
  document.querySelector('.neprikaz').innerHTML= eval(document.querySelector('.neprikaz').innerHTML);
  flag = true;
}


function obrisiJedan() {
  if (document.querySelector('.prikaz').innerHTML === "error"){
    document.querySelector('.prikaz').innerHTML = "";
    document.querySelector('.neprikaz').innerHTML = "";
    flag = false;
  }
  else {
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
  
  
}

function obrisiSkroz() {
  document.querySelector('.prikaz').innerHTML = "";
  document.querySelector('.neprikaz').innerHTML = "";
  flag = false;
}

function dodajZnak(znak) {
  flag = false;
  if (document.querySelector('.prikaz').innerHTML === "error"){
    document.querySelector('.prikaz').innerHTML = "";
    document.querySelector('.neprikaz').innerHTML = "";
    document.querySelector('.prikaz').innerHTML += znak;
    document.querySelector('.neprikaz').innerHTML += znak;
    
  }
  else if (znak === "%" || znak === "*" || znak === "-" || znak === "+" || znak === "/" || znak === "."){
    if (document.querySelector('.prikaz').innerHTML[document.querySelector('.prikaz').innerHTML.length - 1] === undefined) {

    }
    else if (document.querySelector('.prikaz').innerHTML[document.querySelector('.prikaz').innerHTML.length - 1] === "%" || document.querySelector('.prikaz').innerHTML[document.querySelector('.prikaz').innerHTML.length - 1] === "*" || document.querySelector('.prikaz').innerHTML[document.querySelector('.prikaz').innerHTML.length - 1] === "/" || document.querySelector('.prikaz').innerHTML[document.querySelector('.prikaz').innerHTML.length - 1] === "+" || document.querySelector('.prikaz').innerHTML[document.querySelector('.prikaz').innerHTML.length - 1] === "-" || document.querySelector('.prikaz').innerHTML[document.querySelector('.prikaz').innerHTML.length - 1] === ".") {
      
      document.querySelector('.prikaz').innerHTML = document.querySelector('.prikaz').innerHTML.slice(0, -1);
      document.querySelector('.neprikaz').innerHTML = document.querySelector('.neprikaz').innerHTML.slice(0, -1);
      document.querySelector('.prikaz').innerHTML += znak;
      document.querySelector('.neprikaz').innerHTML += znak;
      
      if (znak === "%") {
        document.querySelector('.neprikaz').innerHTML = document.querySelector('.neprikaz').innerHTML.slice(0, -1);
        document.querySelector('.neprikaz').innerHTML += "*0.01";
        rezultat()
        
      }
      
    }
    else {
      if (znak === "%") {
        document.querySelector('.prikaz').innerHTML += znak;
        document.querySelector('.neprikaz').innerHTML += "*0.01";
        rezultat()
        
      }
      else {
        document.querySelector('.prikaz').innerHTML += znak;
        document.querySelector('.neprikaz').innerHTML += znak;
        
      }
      
    }
  }
  else { 
    document.querySelector('.prikaz').innerHTML += znak;
    document.querySelector('.neprikaz').innerHTML += znak;
    
  }
  
}