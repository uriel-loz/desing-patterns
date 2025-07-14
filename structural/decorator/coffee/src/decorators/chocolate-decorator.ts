import ComplementsDecorator from "./complements-decorator";

class ChocolateDecorator extends ComplementsDecorator {
    private price: number = 5;
    private description: string = "Chocolate";

    cost(): number {
        return super.cost() + this.price;
    }

    showInformation(): string {
        return super.showInformation() + " + " + this.description;
    }
}

export default ChocolateDecorator;