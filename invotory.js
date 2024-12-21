const fs = require("fs");
const prompt = require("prompt-sync")();
const Product = require("./product");
const { Console } = require("console");
const produit = new Product();
let products = [];
class Inventory {
    static ajouter_un_product() {
        if (fs.existsSync("data.json")) {
            products = JSON.parse(fs.readFileSync("data.json", "utf-8"));
        } else {
            fs.writeFileSync("data.json", "[ ]");
        }
        produit.name = prompt("ENTRER LE NOM DE PRODUIT : ");
        produit.description = prompt("ENTRER LA DESCRIPTION DE PRODUIT :");
        produit.quantity = prompt("ENTRER LA QUANTITY DE PRODUIT : ");
        produit.price = prompt("ENTRER LE PRICE DE PRODUIT :");
        products.push(produit);
        products = JSON.stringify(products);
        fs.writeFileSync("data.json", products, null, 4);
    }
    static afichage_les_product() {
        if (fs.existsSync("data.json")) {
            products = JSON.parse(fs.readFileSync("data.json", "utf-8"));
            for (let i = 0; i < products.length; i++) {
                console.log(products[i]);
            }

        } else {
            Console.log("AUCUN PRODUCT TROUVER POUR AFFICHER !!!!");
        }

    }
  
}
module.exports = Inventory;