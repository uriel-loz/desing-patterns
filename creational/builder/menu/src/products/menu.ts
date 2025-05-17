class Menu {
    private _mainCourse!: string;
    private _drink: string = '';
    private _entree: string = '';
    private _dessert: string = '';
    private _side: string = '';
    private _size: string = '';
    private _delivery: boolean = false;
    private _price: number = 0;

    public get mainCourse(): string {
        return this._mainCourse;
    }

    public set mainCourse(value: string) {
        if (!value) 
            throw new Error("Main course cannot be empty");

        this._mainCourse = value;
    }

    public get drink(): string {
        return this._drink;
    }

    public set drink(value: string) {
        this._drink = value;
    }

    public get entree(): string {
        return this._entree;
    }

    public set entree(value: string) {
        this._entree = value;
    }

    public get dessert(): string {
        return this._dessert;
    }

    public set dessert(value: string) {
        this._dessert = value;
    }

    public get side(): string {
        return this._side;
    }

    public set side(value: string) {
        this._side = value;
    }

    public get size(): string {
        return this._size;
    }

    public set size(value: string) {
        this._size = value;
    }

    public get delivery(): boolean {
        return this._delivery;
    }

    public set delivery(value: boolean) {
        this._delivery = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }
    
    public description(): string {
        return `Menu:
        Main Course: ${this.mainCourse},
        Drink: ${this.drink},
        Entrée: ${this.entree},
        Dessert: ${this.dessert},
        Side: ${this.side},
        Size: ${this.size},
        Delivery: ${this.delivery},
        Price: ${this.price}`;
    }
}

export default Menu;