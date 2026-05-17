// 1
// var a =10;
// a = 15;
// console.log(a);

// 2
// // let b = 20;
// // let b = 30;
// // let b =30 not accept redeclaration

// 3
// const c =50;
// console.log(c);

// 4
// // const x = 10;
// // x = 20;
// // No reassignment to constant variable

// 5
// var p=5;
// var p=10;
// console.log(p);

// 6
// let q = 25;
// q= q + 10;
// console.log(q);

// 7
// const r=7;
// console.log(r+3);

// 8
// var a=10;
// console.log(a);

// 9
// document.writeln("9: console.log()")

// 10
// document.writeln("10: console.warn()")

// 11
// document.writeln("11:console.error()")

// 12
// document.writeln("12: console.clear() , it will clears the console")

//  13

// let a = "hello";
//  console.log(typeof a);

// 14

// let b = 100;
// console.log(typeof b);

// 15
// let c = false;
// console.log(typeof c);

// 16

// let d;
// console.log(d);

// 17. object
// 18. number("25")

19

// let fruits = ["apple","mango","watermilen"]

// 20

// let arr = ["a","b","c"];
// console.log(arr[1]);

21

// let arr = ["x","y","z"];
// console.log(arr[arr.length-1]);
// 22.arr.length-1
23
// let arr = ["apple","banana"];
// console.log(arr.length);
// 24. arr.push("mango");
// 25
//  let person = {
//     name: "nikhil",
//     age: 26
// };
// 26
// let obj = {name:"Naveen"};
// console.log(obj.name);
// 27
// let obj = {
//   fruits: ["apple","banana"]
// };
// console.log(obj.fruits[1]);
// 28. obj.fruits[obj.fruits.length-1]
// 29
 // console.log(5 + 3);
// 30
// console.log(10 % 3);
// 31
// console.log(2 ** 3);
// 32
// console.log(10 / 2);
// 33

// let a = 5;
// a++;
// console.log(a);
// 34
// let b = 5;
// let c = b++;
// console.log(b, c);
// 35
// let x = 5;
// let y = ++x;
// console.log(x, y);
// 36
// let m = 3;
// let n = m--;
// console.log(m, n);
// 37
// console.log(5 == "5");
// 38
// console.log(5 === "5");
// 39
// console.log(true && false || true);
// 40
// 5 > 3 ? console.log("Yes") : console.log("No");

// console.log("10" + 5)
// console.log(10 + true)
// console.log(false + null)
// console.log("Hello" + undefined)
// console.log([1,2] + 5)

// // String + Number
// let a = "10" + 6
// console.log(a)
// console.log(typeof a)

// // Boolean + Number
// let b = true + 10
// console.log(b)
// console.log(typeof b)

// // Array + String
// let c = [1,2] + "hello"
// console.log(c)
// console.log(typeof c)

// // Object + Number
// let d = {} + 7
// console.log(d)
// console.log(typeof d)

// // Null + Number
// let e = null + 12
// console.log(e)
// console.log(typeof e)

// console.log(Number("500"))      
// console.log(Number(true))       
// console.log(Number(false))      
// console.log(Number(null))       
// console.log(Number("abc"))     
// console.log(Number([100]))      

// console.log(Boolean(""))            
// console.log(Boolean("javascript"))  
// console.log(Boolean(0))             
// console.log(Boolean(1))            
// console.log(Boolean(null))          
// console.log(Boolean(undefined))     
// console.log(Boolean([]))            
// console.log(Boolean({}))    

// let mark = 45

// if(mark > 35){
//     console.log("Pass")
// }else{
//     console.log("Fail")
// }

// let age = 20

// if(age >= 18){
//     console.log("Eligible")
// }else{
//     console.log("Not Eligible")
// }

// let a = 50
// let b = 80
// let c = 30

// if(a > b && a > c){
//     console.log("a is greatest")
// }
// else if(b > a && b > c){
//     console.log("b is greatest")
// }
// else{
//     console.log("c is greatest")
// }


// let signal = "red"

// switch(signal){
//     case "red":
//         console.log("stop")
//         break

//     case "yellow":
//         console.log("ready")
//         break

//     case "green":
//         console.log("go")
//         break

//     default:
//         console.log("invalid signal")
// }

// let username = "admin"
// let password = "1234"

// if(username === "admin"){
    
//     if(password === "1234"){
//         console.log("Login Success")
//     }else{
//         console.log("Invalid Password")
//     }

// }else{
//     console.log("Invalid Login")
// }

// let hour = 14

// if(hour >= 1 && hour <= 12){
//     console.log("Morning")
// }
// else if(hour >= 13 && hour <= 15){
//     console.log("Afternoon")
// }
// else if(hour >= 16 && hour <= 19){
//     console.log("Evening")
// }
// else if(hour >= 20 && hour <= 24){
//     console.log("Night")
// }
// else{
//     console.log("Invalid Hour")
// }

// console.log(true + true)
// console.log("5" - 2)
// console.log("5" + 2)
// console.log(null + 1)
// console.log(undefined + 1)
// console.log(Boolean(" "))
// console.log(Number(true))

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// // }
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`7 x ${i} = ${7 * i}`);
// }
// let i = 20;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// console.log("Total Sum =", sum);

// let fruits = ["apple", "banana", "orange", "grapes"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
// let count = 0;

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         count++;
//     }
// }

// console.log("Even Numbers Count =", count);
// for (let i = 1; i <= 5; i++) {
//     let stars = "";

//     for (let j = 1; j <= i; j++) {
//         stars += "*";
//     }

//     console.log(stars);
// }
// function welcome() {
//     console.log("Welcome to JavaScript");
// }

// welcome();
// function greet(name) {
//     console.log("Hello " + name);
// }

// greet("Naveen");
// function add(a, b) {
//     return a + b;
// }

// console.log(add(10, 20));
// function calculateSalary(salary, bonus) {
//     return salary + bonus;
// }

// let totalSalary = calculateSalary(50000, 5000);

// console.log(totalSalary);
// let student = {
//     name: "Rahul",
//     course: "JavaScript",
//     marks: 95
// };

// for (let key in student) {
//     console.log(key + " : " + student[key]);
// }
// function largest(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// console.log(largest(10, 50));

// let employee = {
//     name: "Ravi",
//     department: "IT",
//     salary: 50000
// };

// function addBonus(salary, bonus) {
//     return salary + bonus;
// }

// let finalSalary = addBonus(employee.salary, 5000);

// console.log("Employee Name:", employee.name);
// console.log("Department:", employee.department);
// console.log("Salary:", employee.salary);
// console.log("Salary after bonus:", finalSalary);
// let studentName = prompt("Enter Student Name:");
// let department = prompt("Enter Department:");
// let age = prompt("Enter Age:");

// console.log(`Welcome ${studentName}`);
// console.log(`Department: ${department}`);
// console.log(`Age: ${age}`);

// let balance = 10000;
// let amount = Number(prompt("Enter Withdrawal Amount:"));

// if (amount >= 100 && amount <= balance) {
//     console.log("Transaction Successful");
// } else if (amount < 100) {
//     console.log("Minimum withdrawal is 100");
// } else {
//     console.log("Insufficient Balance");
// }
// let orderAmount = Number(prompt("Enter Order Amount:"));

// let result = orderAmount > 499
//     ? "Free Delivery Available"
//     : "Delivery Charges Applied";

// console.log(result);
// let username = prompt("Enter Username:");

// if (username === "admin") {

//     let password = prompt("Enter Password:");

//     if (password === "1234") {
//         console.log("Login Success");
//     } else {
//         console.log("Wrong Password");
//     }

// } else {
//     console.log("Invalid Username");
// }
// let signal = prompt("Enter Signal Color:");

// switch (signal) {

//     case "red":
//         console.log("STOP");
//         break;

//     case "yellow":
//         console.log("READY");
//         break;

//     case "green":
//         console.log("GO");
//         break;

//     default:
//         console.log("Invalid Signal");
// }
// function salaryCalculation(basicSalary, bonus) {
//     return basicSalary + bonus;
// }

// console.log(salaryCalculation(25000, 5000));
// let prices = [100, 200, 300, 400];

// let total = 0;

// for (let i = 0; i < prices.length; i++) {
//     total += prices[i];
// }

// let average = total / prices.length;

// console.log("Total Price:", total);
// console.log("Average Price:", average);
// let contact = {
//     name: "Rahul",
//     phone: "9876543210",
//     status: "Online"
// };

// for (let key in contact) {
//     console.log(key + " : " + contact[key]);
// }
// function payment() {
//     console.log("Payment Successful");
// }

// function bookTicket(callback) {
//     console.log("Ticket Booked");
//     callback();
// }

// bookTicket(payment);
// function* deliveryStatus() {
//     yield "Order Confirmed";
//     yield "Preparing Food";
//     yield "Out for Delivery";
//     yield "Delivered";
// }

// let order = deliveryStatus();

// console.log(order.next().value);
// console.log(order.next().value);
// console.log(order.next().value);
// console.log(order.next().value);
