function occurrenceCaractère() {
    var CH = prompt("saisir un texte");
    var Oc = [];
    var T = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (var i = 0; i < T.length; i++) {
        Oc[T[i]] = 0;
    }
    for (var i = 0; i < CH.length; i++) {
        for (var j = 0; j < T.length; j++) {
            if (CH[i].toUpperCase() == T[j]) {
                Oc[T[j]] += 1;
            }
        }
    }
    console.log(Oc);
}
console.log(occurrenceCaractère());
