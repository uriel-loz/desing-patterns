import { Coffee } from "../interfaces/coffee";

class ExpressCoffee implements Coffee {
    private description: string;
    private price: number;

    constructor() {
        this.description = "Express Coffee";
        this.price = 2;
    }

    cost(): number {
        return this.price;
    }

    showInformation(): string {
        return this.description;
    }
}

export default ExpressCoffee;