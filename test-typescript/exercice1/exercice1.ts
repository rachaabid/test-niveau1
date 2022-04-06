var T: number[]=[12, 18, 19, 14, 10, 12, 14, 19, 18, 13, 10, 15, 17, 14, 13, 16, 9];
var S=0;
var M;
for (let i=0; i<T.length; i++) {
  S=S+T[i];
}
M = S/T.length;

var sup=0;
for (let j=0; j<T.length; j++) {
  if (T[j]>M) {
    sup=sup+1;
  }
}
console.log("la moyenne de la classe est ",M);
console.log("le nombre des notes supérireur à la moyenne de classe est ",sup);