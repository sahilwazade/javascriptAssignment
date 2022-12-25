// // if else

var age = 19

if(age>18){
    console.log("you are eligible to vote")
}else{
    console.log("you are not eligible to vote")
}


// // switch

let area = 17
let PI = 3.142 , l = 5 , b = 4 , r = 3;

switch(area){
    case "circle":
        console.log("area of circle is :" + PI*r**2);

        break;

         case "triangle":
        console.log("area of triangle is :" + (l*b)/2);

        break;

          case "rectangle":
        console.log("area of rectangle is :" +  (l*b));

        break;
}


// // for loop

let friends = ["akshay","hupesh","sanju","raju","junaid"]

for (let i=0;i<friends.length;i++){
    console.log(friends[i])
}

// // continue

let numbers = [1,2,3,4,5,6,7,8,9,10]

for(let i=0;i<numbers.length;i++){
    if(numbers[i] == 3) continue
    console.log(numbers[i])
}



// // while

let table = [1,2,3,4,5,6,7,8,9]
let i=0
while(i<table.length){
    console.log(table[i])
    i++
}

// recursion

function factorial(n){
    if(n==1) return 1
    else return (n * factorial(n-1))
}

console.log(factorial(5))


// closure
function x(){
    let a=10
    function y(){
        a++
        console.log(a)
    }
   return y

}
const z = x()

z()
z()

// binary search
function binarySearch(sortedArray, key) {
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (sortedArray[middle] === key) {
            return middle;
        } else if (sortedArray[middle] < key) {

            start = middle + 1;
        } else {

            end = middle - 1;
        }
    }
    return -1;
}



// prime number

function prime(){
  
    let n=27
    
    let result = []
while(n>0){
    let flag= true
    for(let i=2;i<n-1;i++){
        if(n%i==0){
        flag = false
        break;
    }


}
if(flag == true){
  result.push(n)
}
n--

}


console.log(result)


for(let i=0;i<result.length-1;i++){
    let diff = result[i] - result[i+1]
    console.log(diff)
}
}
prime()