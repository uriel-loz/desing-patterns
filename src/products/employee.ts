import Address from "./address";
import Contact from "./contact";
import Phone from "./phone";

class Employee {
    private _age!: number;
    private _name!: string;
    private _gender!: string;
    private _adress!: Address;
    private _phone!: Phone[];
    private _contact!: Contact[];

    constructor(age: number, name: string, gender: string, adress: Address, phone: Phone[], contact: Contact[]) {
        this._age = age;
        this._name = name;
        this._gender = gender;
        this._adress = adress;
        this._phone = phone;
        this._contact = contact;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get gender(): string {
        return this._gender;
    }

    public set gender(value: string) {
        this._gender = value;
    }

    public get adress(): Address {
        return this._adress;
    }

    public set adress(value: Address) {
        this._adress = value;
    }

    public get phone(): Phone[] {
        return this._phone;
    }

    public set phone(value: Phone[]) {
        this._phone = value;
    }

    public get contact(): Contact[] {
        return this._contact;
    }

    public set contact(value: Contact[]) {
        this._contact = value;
    }
}

export default Employee;