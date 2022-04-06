function LMinuscule() {
    var ch = prompt("entrez une chaine de caractère");
    var n = 0;
    for (var i = 0; i < ch.length; i++) {
        if ((ch.charCodeAt(i) >= 97) && (ch.charCodeAt(i) <= 122)) {
            n = n + 1;
        }
    }
    console.log("le nombre des caractères minuscules est ", n);
}
console.log(LMinuscule());
