

$(document).ready(function(){


            $("button.off").click(function(){
                $("p").hide();
            });
            
            $("button.on").click(function(){
                $("p").show();
            });


            // <!-- Les toggles: -->

            $( "button.toggle" ).click (function() {
                $( "p" ).toggle( "slow" );
            });

            $("#monImage").fadeOut(5000).delay(300).fadeIn(5000);



            $("#checkAll").click(function(){
                var magazines= $("#magazine").find(":checkbox");
                if (this.checked) {
                    magazines.prop("checked", true);
                }
                else{magazines.prop("checked", false);
                }
            });







            // pour compter les carateres et mots de mon texte:

            $("#message") . keyup(function (){
                var nombreCaractere = $ (this).val() .length;
                var nombreMots = $.trim( $ (this).val()).split(" ") .length;

                if ( $ (this).val === "" ) {
                    nombreMots = 1;
                }
                var msg = "" + nombreMots + " mot(s) |" + nombreCaractere + " caractere(s)"
                $("#compteur").text(msg);


                if (nombreCaractere >200) {
                    $("#compteur").addclass("mauvais");
                    $("#message").addclass("mauvais-message");
                }
                else {
                    $("#compteur") .removeClasss ("mauvais");
                    $("#message") .removeClass ("mauvais-message");
                }
            })

        });









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

$("#checkall").click(function(){
    var magazines= $("#magazines").find(":checkbox");
        if ("this.checkbox") {
            magazines.prop("checked", true);
        }else{magazines.prop("checked", false);
    }
});



