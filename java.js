
// 1 start to Learn JavaScript
console.log("Hello javascript");
// alert("Click Here")
document.write("Using document javascript");
console.warn("This is warning");
console.error("This is error")

// 2 Variable
var num1 = 33;
var num2 = 414;
console.log(num1 + num2)

// 3. Data Types
var str = "this is string";
var obj = {
    ali: 23,
    asad: 66,
    shabi: 99
}
var a = true;
console.log(str)
console.log(obj)
console.log(a)
// Variable null and undefined
var und;
var und = undefined;
console.log(und)
var n = null
console.log(n)
// refrence datatypes arrays
var arr = [1, 2, "shabi", 3, 4, 5]
console.log(arr)

// 4. operators
// same as like others languages 

// 5. Functions
function avg(a, b) {
    return (a + b) / 2
}
c = avg(4, 5);
console.log(c)
// summ = (a, b)=>{
//     return(a+b)
// }

// 5. Conditional statement
var a = 43;
if (a > 18) {
    console.log("You are youngger")
}
else {
    console.log("You are kid")
}

// 6. Loops 
var arye = [1, 2, 3, 4, 5, 6];
for (var i = 0; i <= arye.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log(arye[i])
};
arye.forEach(function (element) {
    console.log(element);
});
let j = 0;   // while loop
while (j < arye.length) {
    console.log(arye[j])
    j++;
}

// 7. Arrays Methods
// 8. String Methods

// 9. Date In JS
let myDate = new Date();
console.log(myDate)

// 10. DOM
let bton = document.getElementById('btn')
console.log(bton)
bton.style.background = "orange";
console.log(bton.innerHTML)

// 11. Events
function clicked() {
    console.log("Yes Clicked")
}
// Also addeven listner more

// 12. settimeout and setinterval
shablog = () => {
    console.log("I am settimeout log")
}
setTimeout(shablog, 3000)
// setInterval(shablog, 2000)

// 13. local storage to save data in user storage as string

// 14. JSON => for data exchange 
obj = {
    name: "shabi",
    length: 1
}
js = JSON.stringify(obj)
console.log(typeof js)
console.log(obj)
