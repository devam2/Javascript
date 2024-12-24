// Using a for loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  //loop that creates a multiplication table of a given number
  let num = 5;
let result=5;
  for (let i = 1; i <= 10; i++) {
    result = result * num;
    console.log( result);
  }

// a loop to print all the even numbers between 1 and 20
let evenNumber=0;
for (let i = 1; i <= 20; i++) {
if(i%2==0){
evenNumber=i;

}
console.log(evenNumber);
}
//loop to find the sum of all numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
sum+=i;
}
console.log(sum,);
//loop that prints all the elements of the array
let array = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
//loop that reverse a given string
let str = "Hello World";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
reversed+=str[i];
}
console.log(reversed);