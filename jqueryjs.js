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

$("calc").get('+');
