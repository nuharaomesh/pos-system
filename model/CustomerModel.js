export default class CustomerModel {

    constructor(id, firstName, lastName, address, salary, age) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._address = address;
        this._salary = salary;
        this._age = age;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get address() {
        return this._address;
    }

    set address(value) {
        this._address = value;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {
        this._salary = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}