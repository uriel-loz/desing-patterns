import { join } from "path";
import { Product } from "../interfaces/products.interface";
import { readFileSync } from "fs";

class UsdCurrencyService {
    private products!: Product[];

    constructor() {
        this.loadProducts();
    }

    getPriceInUsd(productId: number): number {
        const product = this.products.find(product => product.id === productId);
        

        if (!product)
            throw new Error("Product not found");

        return product.price;
    }

    private loadProducts(): void {
        const path = join(__dirname, "..", "data", "products.json");
        const object = readFileSync(path, "utf-8");
        const {products} = JSON.parse(object);

        this.products = products;
    }
}

export default UsdCurrencyService;