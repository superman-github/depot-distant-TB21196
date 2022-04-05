// var bouton_envoi = document.getElementById("go");
// bouton_envoi.addEventListener("click", verif_formulaire);




var mon_formulaire = document.getElementById("form_nom");
mon_formulaire.addEventListener("submit", verif_formulaire);

//récupération de l'input nom
var nom = document.getElementById("id_nom");

//input code postal
var cp = document.getElementById("cp");




var filtre_nom = new RegExp("^[a-z]+$");

var filtre_cp = new RegExp("^[0-9]{5}$");





function verif_formulaire(e) {

    //alert("Vous avez cliqué sur :\n Envoyer !");

    //alert("ton nom est : " + nom.value);

    //vérification du champ nom
    //on vérifie si le champ est renseigné !


    var resultat = filtre_nom.test(nom.value);

    if (nom.value == "") {

        alert("veuillez renseigner votre nom !");

        //on empêche le formulaire d'être soumis ... envoyé.
        e.preventDefault();

    }



    //alert("retour de résultat : " + resultat);
    //vérification de la pertinence de l'info saisie par user
    else if (resultat == false) {

        alert("veuillez renseigner correctement votre nom !");

        e.preventDefault();

    }


    //verif code postal


    var resultat_cp = filtre_cp.test(cp.value);

    if (cp.value == "") {

        alert("veuillez renseigner votre code postal !");

        //on empêche le formulaire d'être soumis ... envoyé.
        e.preventDefault();

    } else if (resultat_cp == false) {

        alert("veuillez renseigner correctement votre nom !");

        e.preventDefault();

    }

















}