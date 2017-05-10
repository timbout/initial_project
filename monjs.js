
// JS du tp facturation du panier en temps reel :

function aPayerParArticle(){
    var facturations = document.querySelectorAll (".global li")
    facturations.forEach(function(facturation){
        var price= facturation.querySelector(".price");
        var quantite= facturation.querySelector(".quantite");
       
        if ((quantite.value  != "" && !isNaN (quantite.value)) && (price.value !="" && !isNaN (price.value))) {
            var calc = price.value*quantite.value;
            console.log(calc);
            facturation.querySelector(".totalAPayer").value = calc;
        }
    });
}

// var totalGeneral = document.queryAll(".totalAPayer")
// var netAPayer = 0;

// elements.forEach(function(element){
//     netAPayer += 
// })









// Cours DOM: but faire un formulaire qui va verifier les données saisies 

// function verif(){
//     // if (document.getElementById(All)=return true ) {
//     //     document.formul.focus();
//     //     document.formul.backgroundcolor ="solid red";
//     // }

//     if (document.getElementById ("Mr"&&"Mme").checked== "") {
//         alert("attention il faut mettre un titre")
//         return false
//     }


//     if (document.getElementById ("nom").value=="") {
//         alert("attention il faut remplir le champ le Nom")

//         return false
//         // console.log (document.getElementById ("nom").value);
//     }

//     if (document.getElementById ("prenom").value=="") {
//         alert("attention il faut remplir le champ le Prénom")

//         return false
//     }
//     if (document.getElementById ("mail").value=="") {
//         alert("attention il faut remplir le champ le Mail")
//         return false
//     }
//     if (document.getElementById ("tel").value=="") {
//         alert("attention il faut remplir le champ le Téléphone")
//         return false
//     }
//     var mobile= /^(01|02|03|04|05|06|07|08|09|0033|\+33)[0-9]{8}/;
//     if (mobile.test(document.getElementById('tel').value)){
//     return true;
//     }
//     else{
//     alert("entrez un bon numero");
//     document.formul.tel.focus();
//     document.formul.tel.style.backgroundcolor="#f2dede";
//     }
// }




// var.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// pour calcul de mon panier:

// <script language = "javascript" type="text/javascript">

// fonction sum_element(){
//     var somme=0;
//     var result = document.getElementById("somme");
//     for (var i = 1; i<6; i++) {
//         var element = document.getElementById ("el_"+i);
//         if (element.value!="" && !lisNaN(element.value)) {
//             somme + = parsenInt (element.value);
//         }
//     }






// var questions = [
// { ques: "question 1 ?", reponse: "oui"}
// { ques: "question 2 ?", reponse: "oui"}
// { ques: "question 3 ?", reponse: "non"}
// { ques: "question 4 ?", reponse: "non"}
// ]

// Var laReponse;

// for ( i = 0; i < questions.length; i++) {
//     laReponse=prompt (questions[i].ques);
//     laReponse.tolowerCase();

//     if (prompt (laReponse)=== questions[i].reponse.tolowerCase())
//     }   
// console.log( "bonne reponse pour" + question[i].ques;)

// else{
//     console.log("fausse repons :"+question[i]+ques+ " etait" + question(i).reponse)
// }






// EXO: un tableau avec la moyenne des eleves et la classe 
// but: faire la moyenne generale des classes puis le classement


// function etudiant ("nom", "prenom"){
//     if (prenom == undefined){
//         prenom = "Robert"
//     }
//     console.log( nom + prenom)
// }




// je demande la soustraction ( a-b) avant de faire le resultat qui sera le resultat de celle ci  + a et + b

// function soustraction (a, b,){
//     return a-b
// }

// function addition (a, b, c, d) {
//     var resultat = soustraction (a, b)
//     return resultat + c+ d

// }



// function addition (a, b, c, d) {
//     return (a + b + c + d )

// }

// function division (a, b, c, d){
//     return a/b/c/d
// }

// function soustraction (a, b, c, d){
//     return a-b-c-d
// }

// function multipli (a, b, c, d){
//     return a*b*c*d
// }






// EXO :essayer de voir si le chiffre rentré est un nombre 1ER !!



// var premier= function (nombre){
//     for (var i = 2; i<nombre; i++) {
//         if (nombre%i ===0){
//             console.log( nombre+ " n'est pas un nombre 1er car divisible par "+ i)
//             return false
//         }

//     }
//     console.log (nombre + " est un nombre 1er")
//     return true
// }
       








// var etu = [];
// etu = ["moussa", "pierre", "kevin", "paul", "jacques", "kevin"];


// var nbr=0;

// for (var i =  0; i< etu.length; i++;) { 
//     console.log(i);

//     if(etu[i]==="kevin") {
//         console.log (etu[i] +" est la en position " + i + "!" );
//     }   
//     else  (nbr=etu.length); {
//         alert("ben il est pas la!");
//     }
// }








// EXO Boucles:

// var nombre = 5;
// ;
// for (var i = 0; i< nombre; i++) {
//     console.log ("ma boucle " + i +" for");
// }

// var i=0;
// while (i<nombre){
//     console.log ("ma boucle " + i + " while");
//     i=i+1;
// }

// console.log (i);

// i=2;
// do{
//     console.log ("ma boucle " + i + " do while");
//     i++;
// } while (i<nombre);








// var nombre = prompt("entrez votre age");
// nombre = parseInt(nombre)
// confirm("ton age est bien de " + (nombre) " ans ?");

// if (isNaN(nombre)) {
//     alert("merci de mettre un chiffre blaireau !!! ");


// }



// if (nombre >=18 && nombre<=25){
//     console.log ("t'es majeur bravo, et tu as une reduction");
//     alert("t'es majeur bravo, et tu as une reduction")

// }


// else if (nombre >25 && nombre<=90){
    
//     console.log ("t'es majeur bravo, tu peux rentrer");
//     alert("t'es majeur bravo, tu peux rentrer")
// }

// else if (nombre >=90){
//     console.log ("t'es vieux, tu as la mega reduction");
//     alert("t'es vieux, tu as la mega reduction")
// }



// else if (nombre <17)  {
//     console.log ("nombre");
//     alert("t'es pas majeur, reviens dans "+ (18-nombre) + " ans !")
// }

// else if (nombre == 17)  {
//     console.log ("nombre");
//     alert("t'es pas majeur, reviens dans "+ (18-nombre) + " an !")
// }






