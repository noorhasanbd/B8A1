# Access Modifiers in TypeScript OOP

## Introduction
To control the access of class members, we use access modifiers. TypeScript has `public`, `private`, `protected` and `readonly`.

## public
All properties and methods are public by default if no other access modifier is explicitly assigned. Public properties and methods can be accessed from anywhere.

    class Course {
        public id: string;
        public title: string;

        constructor(id: string, title: string) {
            this.id = id;
            this.title = title;
        }
    }

## private
A private member can be accessed only inside the class where it is declared. For external use, we use getter and setter methods.

    class Payment {
        private id: string;
        private paidAmount: number = 100;

        constructor(id: string) {
            this.id = id;
        }

        getPaidAmount(): number {
            return this.paidAmount;
        }
    }

    const payment = new Payment("P-1");
    payment.getPaidAmount(); // works
    payment.paidAmount; // compile-time error

## protected
A protected member acts like private, but it can also be used within a child class.

    class Employee {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee {
        getName(): string {
            return this.name;
        }
    }

## readonly
A readonly property is set one time, during declaration or in the constructor, and after that it cannot be changed anywhere else.

    class Player {
        readonly id: number;
        public name: string;

        constructor(id: number, name: string) {
            this.id = id;
            this.name = name;
        }
    }

    let babarAzam = new Player(10, "Babar Azam");
    babarAzam.id = 11; // compile-time error, id cannot be changed later

## Conclusion
Use `private` to hide data inside a class, `protected` to share it with child classes, and `readonly` for values that should not change after they are set.