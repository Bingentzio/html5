function Point (x,y) {
   this.x = x;
   this.y = y;
}

// 3 puntuz osatutako array bat sortu

var puntuak = [new Point(5,0), new Point(11,1), new Point(1,2)];

// demagun puntuak izeneko array horretatik, x koordenatua > 10 duten puntuak ezabatzea
// eskatzen digutela. Agian, burura datorkigun lehenengo ideia jarraian planteatzen dena
// izan daiteke, baina ez da zuzena. Zergatik?

var luzera = puntuak.length;
for (var i=0; i < luzera; i++) {
  if (puntuak[i].x > 10)
	puntuak.splice(i,1);
}


