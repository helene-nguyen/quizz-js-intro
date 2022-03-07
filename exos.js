/**
 *  Challenge Quizz
 *
 * Pour ce challenge, suit les instructions dans le fichier README.md
 * Et écris ton code ici même !
 */

/* Exo 1 */
// Ton code ici...

var question1 = "Quelle mer borde la ville de Sébastopol ?";
var solution1 = "la mer Noire";

/* Exo 2 */
// Ton code ici...

var reponse1 = prompt(question1);

if (reponse1 === solution1) {
    alert("Gagné !");
} else {
    alert('Perdu...');
}


/* Exo 3 */
// Ton code ici...

var question2 = "Quel est l'âge du capitaine ?";
var solution2 = 63;
var reponse2 = prompt(question2);
var reponse2Parse = parseInt(reponse2);

if (reponse2Parse === solution2) {
    alert("Gagné !");
} else {
    alert('Perdu...');
}

//BONUS
var congrateAll = "Bravo, vous avez toutes les réponses justes !";
var congrateOne = "Mince, vous n'avez qu'une seule bonne réponse";
var noCongrate = "Bon, va falloir réviser tout ça !";

if (reponse1 === solution1 && reponse2Parse === solution2) {
    alert(congrateAll);
} else if (reponse1 != solution1 && reponse2Parse != solution2) {
    alert(noCongrate);
} else {
    alert(congrateOne);
}

//BONUS how many good answers
var score = 0;

if (reponse1 === solution1) {

    score++;

    if (reponse2Parse === solution2) {
        score++;
        alert("Vous avez " + score + " points !");
    } else if (reponse2Parse != solution2) {
        alert("Vous avez " + score + " point !");
    }
} else if (reponse1 != solution1) {

    if (reponse2Parse === solution2) {
        score++;
        alert("Vous avez " + score + " point !");
    } 
    else
        alert("Vous n'avez aucun point !");
}