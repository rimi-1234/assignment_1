// Problem 1:

function filterEvenNumbers(numbers:number[]):number[]{
    const res: number[] = [];
   for (const num of numbers) {
        if (num % 2 === 0) {
            res.push(num);
        }
    }
    return res;
}
// filterEvenNumbers([1, 2, 3, 4, 5, 6]);


// Problem 2:
function reverseString(str: string): string {
    const reversed = str.split('').reverse().join('');
    return reversed;
}
// const input = "typescript";
// reverseString(input);


// Problem 3:

type StringOrNumber = string | number;
function checkType(res: StringOrNumber): string {
    if (typeof res === 'string') {
        return "String";
    } else {
        return "Number";
    }
}
// checkType("Hello");
// checkType(42);


// Problem 4:

function getProperty<T, K extends keyof T>(object: T, key: K): T[K] {
    return  object[key];
}
// const user = { id: 1, name: "John Doe", age: 21 };
// getProperty(user, "name");


// Problem 5:


interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
type ReadBook = Book & { isRead: boolean };

function toggleReadStatus(book: Book): ReadBook {
    const newBook: ReadBook = {
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        isRead: true
    };
    return newBook;
}

// const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// toggleReadStatus(myBook);

// Problem 6:

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
// const student = new Student("Alice", 20, "A");
// student.getDetails();

// Problem 7:
function getIntersection(arr1: number[], arr2: number[]): number[] {
    const result: number[] = [];
    for (const num of arr1) {
        if (arr2.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
// getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);