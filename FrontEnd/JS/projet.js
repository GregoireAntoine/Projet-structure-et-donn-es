var nom_client=""
var prenom_cleint=""
var adresse_client=""
var nbmrPain
var nbmrCroissant=0
var nbmrPistolet=0
var nbmrCouqueRaisins=0
var nbmrBrioche=0
var total=0
var satisfaction=0
var addi=0
// récuperation des données de la table produit pour le formulaire
var xhr= new XMLHttpRequest();
xhr.open('get','GetProduit', true)
xhr.onload = makeoptions
xhr.send();

tableau_utilisable=[{nom:'',prix:''}]


function makeoptions(){
    compteur=0
    tabProduit=JSON.parse(xhr.responseText)
// création de la table qui va être mise dans le html
    while(compteur<tabProduit.length){
      document.getElementById(compteur).innerHTML+=tabProduit[compteur].produ+" "+tabProduit[compteur].pri+"$<br>"
        compteur++;
    }
}


// récuperation des données introduite par l'utilisateur et envoye dans la db 

function liste_commande(t){
    nom_client=t.nom.value
    prenom_client=t.prenom.value
    adresse_client=t.adresse.value
    nbmrPain=parseFloat(t.pac.value )
    nbmrCroissant=parseFloat(t.croissant.value)
    nbmrPistolet=parseFloat(t.pistolet.value)
    nmbrCouqueRaisins=parseFloat(t.couque.value)
    nbmrBrioche=parseFloat(t.brioche.value )
    satisfaction=parseFloat(t.satis.value)
    
  total= nbmrPain*tabProduit[0].pri+nbmrCroissant*tabProduit[1].pri+nbmrPistolet*tabProduit[2].pri+tabProduit[3].pri*nmbrCouqueRaisins+tabProduit[4].pri*nbmrBrioche
alert("le total a payer lors de la reception sera de : "+ total +"$")
document.getElementById("page-commande").style.display="none"
document.getElementById("merci").style.display="block"
// création de l'url afin de renvoyer les valeurs à la db
let url = "commander?nom="+nom_client+"&prenom="+prenom_client+"&adresse="+adresse_client+"&pain="+nbmrPain+"&croi="+nbmrCroissant+"&pis="+nbmrPistolet+"&couque="+nmbrCouqueRaisins+"&brioche="+nbmrBrioche+"&satis="+satisfaction
console.log(url)   
 xhr= new XMLHttpRequest()
xhr.open("get",url)
xhr.send()
event.preventDefault()
}


// affiche la page gamme et fait "disparaitre" les autres

function lagamme(){
    document.getElementById("page-acceuil").style.display="none"
    document.getElementById("page-gamme").style.display="block"
    document.getElementById("page-commande").style.display="none"
    document.getElementById("panier").style.display="none"
    document.getElementById("merci").style.display="none"
    document.getElementById("pascommande").style.display="none"
}

// affiche la page acceuil et fait "disparaitre" les autres
function fonction_page_acceuil(){
   document.getElementById("page-acceuil").style.display="block"
   document.getElementById("page-gamme").style.display="none"
   document.getElementById("page-commande").style.display="none"
   document.getElementById("panier").style.display="none"
   document.getElementById("merci").style.display="none"
   document.getElementById("pascommande").style.display="none"
}

// affiche la page fcommande avec le formulaire et fait "disparaitre" les autres
function commande_client(){
    document.getElementById("page-acceuil").style.display="none"
    document.getElementById("page-gamme").style.display="none"
    document.getElementById("page-commande").style.display="block"
    document.getElementById("panier").style.display="none"
    document.getElementById("merci").style.display="none"
    document.getElementById("pascommande").style.display="none"
}


// demande à  l'utilisateur de rentrer son nom et prénom pour afficher tous ce qu'il a commander (cummulatif)
function monpanier(){

  // récupère donné rentré par utilisateur et envoye à la db
  var nom_panier= prompt("quelle est votre prenom ?")
  var panier_prenom = prompt("quelle est votre nom?")
  let lru = "panier?nam="+nom_panier+"&prenam"+panier_prenom
  xhr= new XMLHttpRequest()
  xhr.open("get",lru)
  xhr.send()


  // la db à traitée le nom et preonom pour en resortir un tableau avec les commande et est récupérer 
  var xhr= new XMLHttpRequest();
xhr.open('get','panier?nam='+nom_panier+"&prenam="+panier_prenom, true)
xhr.onload = makeoptions
xhr.send();
var retour
function makeoptions(){
retour=JSON.parse(xhr.responseText)
console.log(retour)

// Création du tableau de la commande de l'utilisateur
if(retour[0].PainChocolat==null && retour[0].Croissant==null && retour[0].Pistolet==null &&retour[0].CouqueRaisins==null &&   retour[0].Brioche==null)

{document.getElementById("pascommande").style.display="block"
document.getElementById("page-acceuil").style.display="none"
    document.getElementById("page-gamme").style.display="none"
    document.getElementById("page-commande").style.display="none"
    document.getElementById("panier").style.display="none"
    document.getElementById("merci").style.display="none"

}


else{


document.getElementById("panier").innerHTML='<h2>Votre commande</h2><br> quantit&eacute de Pain au chocolat :'+retour[0].PainChocolat+'<br><br> quantit&eacute de Croissants :'+retour[0].Croissant+'<br><br> quantit&eacute de Pistolets :'+retour[0].Pistolet+'<br><br> quantit&eacute de Couque au raisins :'+retour[0].CouqueRaisins+'<br><br> quantit&eacute de Brioche :'+retour[0].Brioche
document.getElementById("page-acceuil").style.display="none"
    document.getElementById("page-gamme").style.display="none"
    document.getElementById("page-commande").style.display="none"
    document.getElementById("panier").style.display="block"
    document.getElementById("pascommande").style.display="none"
    document.getElementById("merci").style.display="none"}
}
}
