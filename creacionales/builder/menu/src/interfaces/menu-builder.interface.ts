import Menu from "../products/menu";

export interface MenuBuilder {
    reset(): MenuBuilder;
    buildMainCourse(mainCourse: string): MenuBuilder;
    buildDrink(drink: string): MenuBuilder;
    buildEntree(entree: string): MenuBuilder;
    buildDessert(dessert: string): MenuBuilder;
    buildSide(side: string): MenuBuilder;
    buildSize(size: string): MenuBuilder;
    buildDelivery(delivery: boolean): MenuBuilder;
    buildPrice(price: number): MenuBuilder;
    build(): Menu;
}