import fs from 'fs';
import path from 'path';
import __dirname from '../utils/path.js';

const productsPath = path.join(__dirname, 'data', 'products.json');

class Product {
    constructor(title) {
        this.title = title;
    }
    
    save() {
        // Logic to save the product, e.g., to a database
        fs.readFile(productsPath, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(productsPath, JSON.stringify(products), (err) => {
                if (err) {
                    console.error('Error writing to file', err);
                }
            });
        });
        console.log(`Product saved: ${this.title}`);
    }
    
    static fetchAll(cb) {
        // Logic to fetch all products, e.g., from a database
        return fs.readFile(productsPath, (err, fileContent) => {
            if (err) {
                console.error('Error reading file', err);
                return cb([]);
            }
            return cb(JSON.parse(fileContent).products || []);
        });
    }
}

export default Product;