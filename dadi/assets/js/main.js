
var playGame = prompt("Vuoi tentare la fortuna? Rispondi 'Si' o 'No'");

var Dadi = [];

while (playGame == "Si") {

playGame = prompt("Ritenta! 'Si' o 'No' ");


if (playGame == "Si"){
  for (var i = 0; i < 2; i++) {

    Dadi[i] = Math.ceil( Math.random() * 6 );

  }
}

if (Dadi[0] > Dadi[1]) {
  alert("Grande! Hai vinto");
} else if (Dadi[0] < Dadi[1]) {
  alert("Peccato! Hai perso!");
}

}
