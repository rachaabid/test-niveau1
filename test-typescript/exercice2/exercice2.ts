function LMinuscule(): any {
  const ch = prompt("entrez une chaine de caractère");
  var n: number = 0;

  for (let i = 0; i < ch.length; i++) {

    if ((ch.charCodeAt(i) >= 97) && (ch.charCodeAt(i) <= 122)) {
      n = n + 1;
    }

  }
  console.log("le nombre des caractères minuscules est ", n);
}
console.log(LMinuscule());
