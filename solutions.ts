
const  multiplyValue = (value: number, multiplier?:number) : number=>{

    if(multiplier!== undefined){
        return value * multiplier;
    }

    return value*2;

}
const processInput = (input: number | string | boolean): string | number => {


    if(typeof input === 'number'){

        return multiplyValue(input, 10);
    }

    else if(typeof input === 'boolean'){

        return input ? "Active" : "Inactive";
    }
    else {

        return input.trim().toLowerCase();
    }

}

const formatCoordinate = ([latitude, longitude, locationName]: readonly [number, number, string]): string => {

    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
const concatenateArrays = <T> (...arrays:T[][]): T[] => {

    const result: T[] = [];
    for (const arr of arrays) {
        result.push(...arr);
    }
    return result;
}


interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents : number): Course[] => {

    return courses.filter((course:Course): boolean => course.students >= minStudents && course.isPublished);
}

const pluckValues = <T, K extends keyof T> (items: T[], key: K): T[K][] => {

    return items.map((item:T): T[K] => item[key]);
}

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {

        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {

    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo(): string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
   return new Promise<string>((resolve, reject) => {
    if(age<18){
         reject(new Error("Access Denied: Must be 18 or older"));
         return
    }
    else{
        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    }
   });

}

