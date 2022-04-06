function codage() {
    var T = [];
    var voy = ['a', 'A', 'e', 'E', 'u', 'U', 'i', 'I', 'o', 'O', 'y', 'Y'];
    var s = "";
    while (((n % 2) != 0) || ((n < 4) || (n > 12))) {
        var n = Number(prompt("entrez la taille du tableau"));
    }
    for (var i = 0; i < n; i++) {
        T[i] = prompt("entrez la chaine de la case " + i + 1);
    }
    console.log(T);
    for (var i = 0; i < T.length; i++) {
        for (var j = 0; j < T[i].length; j++) {
            s = s + T[i][j];
            for (var k = 0; k < voy.length; k++) {
                if (T[i][j] == voy[k]) {
                    s = s + T[i].charCodeAt(j);
                }
            }
        }
        T[i] = s;
        s = "";
    }
    console.log(T);
}
console.log(codage());
