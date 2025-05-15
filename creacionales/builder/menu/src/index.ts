import ConcreteMenuBuilder from "./builder/concrete-menu-builder";
import MenuDirector from "./directors/director";

class ClientMenu {
    private builder = new ConcreteMenuBuilder();
    private director = new MenuDirector(this.builder);

    constructor() {
        this.childrenMenu();
        this.familyMenu();
        this.gourmetMenu();
    }

    public childrenMenu(): void {
        const childrenMenu = this.director.childrendsMenu(true);
        console.log("Children's Menu:");
        console.log(childrenMenu.description());
    }

    public familyMenu(): void {
        const familyMenu = this.director.familyMenu(true);
        console.log("Family Menu:");
        console.log(familyMenu.description());
    }

    public gourmetMenu(): void {
        const gourmetMenu = this.director.gourmetMenu(true);
        console.log("Gourmet Menu:");
        console.log(gourmetMenu.description());
    }
}

new ClientMenu();