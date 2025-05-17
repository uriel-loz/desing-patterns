import { MenuBuilder } from '../interfaces/menu-builder.interface';
import Menu from '../products/menu';

class ConcreteMenuBuilder implements MenuBuilder {
    private menu!: Menu;

    constructor() {
        this.reset();
    }

    reset(): MenuBuilder {
        this.menu = new Menu();
        return this;
    }

    buildMainCourse(mainCourse: string): MenuBuilder {
        this.menu.mainCourse = mainCourse;
        return this;
    }

    buildDrink(drink: string): MenuBuilder {
        this.menu.drink = drink;
        return this;
    }

    buildEntree(entree: string): MenuBuilder {
        this.menu.entree = entree;
        return this;
    }

    buildDessert(dessert: string): MenuBuilder {
        this.menu.dessert = dessert;
        return this;
    }

    buildSide(side: string): MenuBuilder {
        this.menu.side = side;
        return this;
    }

    buildSize(size: string): MenuBuilder {
        this.menu.size = size;
        return this;
    }

    buildDelivery(delivery: boolean): MenuBuilder {
        this.menu.delivery = delivery;
        return this;
    }

    buildPrice(price: number): MenuBuilder {
        this.menu.price = price;
        return this;
    }

    build(): Menu {
        const result = this.menu;
        this.reset(); // Reset the builder for the next use
        return result;
    }
}

export default ConcreteMenuBuilder;