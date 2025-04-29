import Address from "./address";
import Contact from "./contact";
import Phone from "./phone";

class Employee {
    private _age: number|null = null;
    private _name: string|null = null;
    private _gender: string|null = null;
    private _adress: Address|null = null;
    private _phone: Phone[] = [];
    private _contact: Contact[] = [];

    constructor(age: number | null, name: string | null, gender: string | null, adress: Address | null, phone: Phone[], contact: Contact[]) {
        this._age = age;
        this._name = name;
        this._gender = gender;
        this._adress = adress;
        this._phone = phone;
        this._contact = contact;
    }

    public get age(): number|null {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public get name(): string|null {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get gender(): string|null {
        return this._gender;
    }

    public set gender(value: string) {
        this._gender = value;
    }

    public get adress(): Address|null {
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