//function that adds the number 7 at the end of the array using push method
function addSevenToArray(arr){
arr.push(7);
return arr;

}
let myArray=[1,2,3];
let updatedArray=addSevenToArray(myArray);
console.log(updatedArray);
//function to remove using the pop method
function removeLastElement(arr){
    arr.pop("mango");
    return arr;}
    let newArray=["bannana","apple","mango"];
    let updatedArray2=removeLastElement(newArray);
    console.log(updatedArray2);
    