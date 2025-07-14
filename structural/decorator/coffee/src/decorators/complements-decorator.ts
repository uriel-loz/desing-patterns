import { Coffee } from "../interfaces/coffee";

abstract class ComplementsDecorator implements Coffee {
    protected coffee: Coffee;

    constructor(coffee: Coffee) {
        this.coffee = coffee;
    }

    cost(): number {
        return this.coffee.cost();
    }

    showInformation(): string {
        return this.coffee.showInformation();
    }
}

export default ComplementsDecorator;