const fs = require("fs");
const prompt = require("prompt-sync")();
const Product = require("./product");
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
}
module.exports = Inventory;