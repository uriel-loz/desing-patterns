import { MenuBuilder } from "../interfaces/menu-builder.interface";
import Menu from "../products/menu";

class MenuDirector {
    private builder!: MenuBuilder;

    constructor(builder: MenuBuilder) {
        this.builder = builder;
    }

    childrendsMenu(delivery: boolean): Menu {
        return this.builder.reset()
        .buildMainCourse("Chicken Nuggets")
        .buildDrink("Juice")
        .buildEntree("Fruit")
        .buildDessert("Ice Cream")
        .buildSide("Fries")
        .buildSize("Small")
        .buildDelivery(delivery)
        .buildPrice(5.99)
        .build();
    }

    familyMenu(delivery: boolean): Menu {
        return this.builder.reset()
        .buildMainCourse("Pizza")
        .buildDrink("Soda")
        .buildEntree("Salad")
        .buildDessert("Brownie")
        .buildSide("Garlic Bread")
        .buildSize("Large")
        .buildDelivery(delivery)
        .buildPrice(19.99)
        .build();
    }

    gourmetMenu(delivery: boolean): Menu {
        return this.builder.reset()
        .buildMainCourse("Steak")
        .buildDrink("Wine")
        .buildEntree("Shrimp Cocktail")
        .buildDessert("Cheesecake")
        .buildSide("Asparagus")
        .buildSize("Medium")
        .buildDelivery(delivery)
        .buildPrice(49.99)
        .build();
    }
}

export default MenuDirector;