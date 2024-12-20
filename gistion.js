const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("BINVENUE DANS NOTRE GESTION DES PRODUIS .");
panneauDeControle();

function panneauDeControle() {
  console.log("++++++++++ PANNAEU DE CONTROLE ++++++++++ ");
  console.log("VEULLEZ ENTRER VOTRE CHOIX : ")
  console.log("1. Pour Ajouter.");
  console.log("2. Pour Afficher.");
  console.log("3. Pour Modifier.");
  console.log("4. Pour Suprimer.");
  console.log("5. Pour quitter.");
  console.log("+++++++++++++++++++++++++++++++++++++++++");
  rl.question("Entrez votre choix : ", (choix) => {
    switch (choix) {
      case "1":
        console.log("AJOUTER UN NOUVEAU PRODUIT :");
        panneauDeControle();
        break;
      case "2":
        console.log(" LES PRODUITS QUI SONT DISPONIBLE :");
        panneauDeControle();
        break;
      case "3":
        console.log("METTRE À JOUR LES DÈTAIS DU PRODUITS :");
        panneauDeControle();
        break;
      case "4":
        console.log("SUPPRIMER LE PRODUITS :");
        panneauDeControle();
        break;
      case "5":
        console.log("\n MERCI ET AU REVOIR !");
        rl.close();
        break;
      default:
        console.log("\nCHOIX INVALIDE.  VEULLEZ ESSAYEZ LES OPTIONS DISPONIBLE !!!!");
        panneauDeControle();
        break;
    }
  });
}