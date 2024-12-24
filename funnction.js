//function that returns the sum of two numbers
 function sum(a,b){
return a+b;
 }
 console.log(sum(3,2));
 //function that takes a string and returns the string in reverse
 function reverseString(s){
let reversed="";
for(let i=s.length-1;i>=0;i--){
reversed+=s[i];
}
console.log("Reversed String",reversed);
 }
 reverseString("Hello World");
 //function that checks wether a number is even or odd
 function checkEvenOdd(n){
    if(n%2==0){
        console.log(n,"is even");
    }
    else{
        console.log(n,"is odd");
    }
 }
 checkEvenOdd(10);
 //function that takes an array of numbers and return their average
 function average(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];}
    
    }
    average(arr[1,2,3,4,5,6]);
    console.log("average",sum/2);
    
