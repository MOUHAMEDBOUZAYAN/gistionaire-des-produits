const readline = require("readline");
const Inventory = require("./invotory");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("BINVENUE DANS NOTRE GESTION DES PRODUIS .");
panneauDeControle();

function panneauDeControle() {
  console.log("++++++++++ { PANNAEU DE CONTROLE } ++++++++++ ");
  console.log("VEULLEZ ENTRER VOTRE CHOIX : ")
  console.log("1. POUR AJOUTRE UN PRODUIT.");
  console.log("2. POUR AFICHER LES PRODUITS.");
  console.log("3. PPOUR MOUDIFIER LES INFOS DE PRODUITS.");
  console.log("4. POUR SUPREMER LES PRODUITS.");
  console.log("5. POUR QUTTEZ.");
  console.log("++++++++++++++++++++++++++++++++++++++++++++++ ");
  rl.question("ENTRER VOTRE CHIOX : ", (choix) => {
    switch (choix) {
      case "1":
        console.log("AJOUTER UN NOUVEAU PRODUIT :");
        Inventory.ajouter_un_product();
        panneauDeControle();
        break;
      case "2":
        console.log(" LES PRODUITS QUI SONT DISPONIBLE :");
        Inventory.afichage_les_product();
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