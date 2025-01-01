//function that adds the number 7 at the end of the array using push method
function addSevenToArray(arr) {
    arr.push(7);
    return arr;

}
let myArray = [1, 2, 3];
let updatedArray = addSevenToArray(myArray);
console.log(updatedArray);
//function to remove using the pop method
function removeLastElement(arr) {
    arr.pop();
    return arr;
}
let newArray = ["bannana", "apple", "mango"];
let updatedArray2 = removeLastElement(newArray);
console.log(updatedArray2);

// using shift method to remove the first elemment

function removeFirstElement(arr) {
    arr.shift();
    return arr;
}
let fruits = [10, 20, 30, 40];
let updatedArray3 = removeFirstElement(fruits);
console.log(updatedArray3);
// using unshift method to add the element at the beginning of the array
function addElementAtBeginning(arr) {
    arr.unshift("start");
    return arr;


}
let newArray2 = ["middle", "end"]
let updatedArray4 = addElementAtBeginning(newArray2);
console.log(updatedArray4);


//converting array into string
let number=["one","two","three","four"];
let string = number.toString();
console.log(string);

//Combining two array into one using concatenation
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray);

//using slice method to extract first two elements from the array
function extractFirstTwoElements(arr) {
    return arr.slice(0, 2);}
    let numbers = [1, 2, 3, 4, 5];
    let extractedArray = extractFirstTwoElements(numbers);
    console.log(extractedArray);

    //using toStrng method to convert array into string and then finding its length
    function convertToArrayStringAndFindLength(arr) {
        let string = arr.toString();
        return string.length;
    }
    let numbers2 = [1, 2, 3, 4, 5];
    let length = convertToArrayStringAndFindLength(numbers2);
    console.log(length);

    //using pop method to remove last element from the array
    function removeLastElement(arr) {
        arr.pop();
        return arr}
        let numbers3 = [1, 2, 3, 4, 5];
        let updatedArray5 = removeLastElement(numbers3);
        console.log(updatedArray5);

        //