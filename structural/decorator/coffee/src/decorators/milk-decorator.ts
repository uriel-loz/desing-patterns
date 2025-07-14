import ComplementsDecorator from "./complements-decorator";

class MilkDecorator extends ComplementsDecorator {
    private price: number = 10;
    private description: string = "Milk";

    cost(): number {
        return super.cost() + this.price;
    }

    showInformation(): string {
        return super.showInformation() + " + " + this.description;
    }
}

export default MilkDecorator;