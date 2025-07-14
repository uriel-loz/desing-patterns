import ExpressCoffee from "./components/express-coffee";
import MilkDecorator from "./decorators/milk-decorator";
import ChocolateDecorator from "./decorators/chocolate-decorator";
import { Coffee } from "./interfaces/coffee";

class Main {
    run(): void {
        let coffee: Coffee = new ExpressCoffee();
        coffee = new MilkDecorator(coffee);
        coffee = new ChocolateDecorator(coffee);
        console.log(coffee.showInformation());
        console.log("Cost: $", coffee.cost());
    }
}

const main = new Main();
main.run();