const products = [];

class Product {
    constructor(title) {
        this.title = title;
    }
    
    save() {
        // Logic to save the product, e.g., to a database
        products.push(this);
        console.log(`Product saved: ${this.title}`);
    }
    
    static fetchAll() {
        // Logic to fetch all products, e.g., from a database
        return products;
    }
}

export default Product;