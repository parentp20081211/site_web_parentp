document.getElementById("bl").onclick = function() {couleur("blue");};

document.getElementById("v").onclick = function() {couleur("green");};

document.getElementById("j").onclick = function() {couleur("yellow");};

document.getElementById("r").onclick = function() {couleur("red");};

  function couleur(color) {
    var voiture = document.getElementById("voiture");
    voiture.style.backgroundColor = color;
  }
