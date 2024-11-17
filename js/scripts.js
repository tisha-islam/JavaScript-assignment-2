// This function is to show hello world


/*\
 1, dfdff
 3 dfd
4. multiline comments

*/
//dfdfd
function number(c) {
    var numbers =(9*c/5)+32;
    return numbers;
}
var result =number(38);
console.log(result);
document.getElementById("fahr_1").innerHTML=result;


function number(c) {
    var numbers =(9*c/5)+32;
    return numbers;
}
var result =number(24);
console.log(result);
document.getElementById("fahr_2").innerHTML=result;

function number(c) {
    var numbers =(9*c/5)+32;
    return numbers;
}
var result =number(-1);
console.log(result);
document.getElementById("fahr_3").innerHTML=result;

var classification = ["John Hill","Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
classification.shift();
console.log(classification);

var classification = ["Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
classification.shift();
console.log(classification);

var classification = [ "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
classification.shift();
console.log(classification);
document.getElementById("best_students").innerHTML=classification


var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
console.log(course.title);
document.getElementById("course_title").innerHTML=course.title

console.log(course['categories'][o]);
document.getElementById("main_category").innerHTML=course['categories'][0]

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.pop();
shoppingList.shift();
shoppingList.unshift("Chocolate");
console.log(shoppingList);

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
shoppingList.push("cheese");
shoppingList.push("Eggs");
console.log(shoppingList);

function sum_args(num1,num2,num3,num4,num5){
    var sum = num1+num2+num3+num4+num5;
    console.log(sum);
}
sum_args(420,80,33,20,4);

var average=(420/557)*100;
console.log(average);

var roundedNumber = Math.round()
