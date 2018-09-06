/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var proposition=-solution;
var essai=0;

var chance=6;

 

do {             
            proposition = Number(prompt("Entrez un nombre entre 1 et 100:"));

            if (proposition<solution)
            {
                alert(proposition+" est trop petit.");
            }
            else if (proposition>solution)
            {
                alert(proposition+" est trop grand.");
            }
          

    essai++;
        
    
} while(essai<chance &&  proposition!==solution);

if(proposition===solution)
{
   alert("Felicitation! La solution était "+solution+".");
}

else
{
     alert("Desole ... La solution était "+solution+".");
} 
