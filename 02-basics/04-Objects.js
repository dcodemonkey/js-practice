// const tinderUser = new Object(); // this will create an empty object
const tinderUser = {} // this will also create an empty object

// For above two line the first one is the constructor way of creating an object and the second one is the object literal way of creating an object.
tinderUser.id = "12345abcde"; // this will add a key value pair to the object
tinderUser.name = "Kunal"; // this will add a key value pair to the object
tinderUser.age = 28; // this will add a key value pair to the object
tinderUser.isLoggedIn = false; // this will add a key value pair to the object

// console.log(tinderUser); 

const regularUser = {
    email: "kunal@mg.com",
    fullName: {
        userfullname: {
            firstName: "Kunal",
            lastName: "Choudhary",
            age: 28,
            location: "New Delhi",
        }
    },
}

// console.log(regularUser.fullName.userfullname.firstName); // this will print Kunal

const obj1 = {10: "a", 20: "b", 30: "c"};
const obj2 = {40: "d", 50: "e", 60: "f"};


// const obj3 = {obj1, obj2}; // this will create an object with two keys obj1 and obj2
// console.log(obj3); // this will print the object with two keys obj1 and obj2

// const obj3 = Object.assign({},obj1, obj2); // this will create an object with merged values
const obj3 = {...obj1, ...obj2}; // this will create an object with merged values and this is the preferred way of merging objects in JS
// console.log(obj3); // this will print the object with merged values
// console.log(obj3); // this will print the object with merged values


const users = [
    { userId: 1, firstName: "Kunal", lastName: "Choudhary", email: "test@test.com" },
    { userId: 2, firstName: "Supriye", lastName: "Anand", email: "test1@test.com" },
    { userId: 3, firstName: "Khushbu", lastName: "Thapa", email: "test2@test.com" },

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // this will print the keys of the object
// console.log(Object.values(tinderUser)); // this will print the values of the object
// console.log(Object.entries(tinderUser)); // this will print the entries of the object

// console.log(tinderUser.hasOwnProperty("email")); // this will check if the object has the key email


const course = {
    title: "Javascript in Hindi",
    courseInstructor: "Kunal",
    price: 299,
}

// course.courseInstructor // this will print Kunal

const {courseInstructor} = course; // this will destructure the object and get the value of courseInstructor
const {courseInstructor: instructor} = course; // this will destructure the object and get the value of courseInstructor and rename it to instructor
// console.log(courseInstructor); // this will print Kunal
console.log(instructor); // this will print Kunal


// {
//     name: "Kunal",
//     age: 28,
//     isLoggedIn: false,
//     lastLogin: 2,
//     courses: ["Javascript", "Python", "Java"],
//     isPremium: true,
//     courseCount: 0,
// }


// [
//     {},
//     {},
//     {}
// ]




