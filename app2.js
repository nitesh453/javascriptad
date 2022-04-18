//Primitive type
/* .number var let count
  .string
  .Boolean - true / false
  .Null
  .undefined
  */

//STRING METHODS

var str = "my name is Nitesh paswan";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim()); //they remove the blank space
console.log(str.indexOf('is'));
console.log(str.slice(4));
console.log(str.slice(4, 10));
var str1 = str.replace('paswan', 'Bhatt');
console.log(str1);
// STRING TEMPLATE LITERALS

var user = "!How are you."
console.log(`${str} ${user}`);
//MATH OBJECT & RANDOM number

Math.PI
Math.round(4.8)
Math.abs(-89)
Math.pow(2, 7)
Math.floor(3.999)
Math.random() //random return b/w the 0.0-0.9
//ARRAYS

var arr = [1, 2, 3, 4, 5, 6];
var arrString = ['nitesh', 'paswan', 'nikhil', 'abhishek', 'kumar'];
console.log(arr.length);
arr.push(7, 8, 9); //stack
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0, 0, 1); //lifo
console.log(arr);
arr.shift();
console.log(arr);

console.log(arr.concat(arrString)); //merge two string
console.log(arr.includes(5)); //the value is present or not
console.log(arr.indexOf(8)); //return the position
console.log(arr.reverse());
console.log(arr.join('-'));

// OBJECT- the core of javaScript

let person = {
  fname: "Nitesh",
  lname: 'paswan',
  age: 20,
  add: "Shanti nagar rishikesh",
  pno: 8077261939

};
person['fname'] = 'nikhil';
person['roll'] = 190216;  //add and update the data
console.log(person);
console.log(person.fname);
//their are nested are avialable this is use for like shoping cart
//Dice roll function
function rolldie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(`rolled : ${roll}`);
}
function throwDice() {
  rolldie();
  rolldie();
  rolldie();
  rolldie();

}
throwDice();
//function applay on collaction of data
arr.forEach(function (num) {
  console.log(num * 2);
});


var x;
x = document.getElementById('name').innerText;
console.log(x);
x = document.getElementById("name").innerHTML;
console.log(x);

x = document.getElementById("name").getAttribute("style");
console.log(x);

x = document.getElementById("name").getAttributeNode("class").value;
console.log(x);
x = document.getElementById("name").getAttributeNode("class").name;
console.log(x);
x = document.getElementById("name").attributes;
console.log(x);

//Set the DOM

document.getElementById('demo').innerHTML = "nitesh paswan";
x = document.getElementById('demo').innerText;
console.log(x);
document.getElementById('demo').setAttribute("style", "color:green; text-align:center;");

x = document.body.innerHTML;
console.log(x);
x = document.getElementsByClassName("xyz");
console.log(x);
x[1].innerHTML = "nitesh kumar";
console.log(x);
x = document.getElementsByClassName("xyz");

console.log(x[0]);

x = document.querySelector(".xyz");
console.log(x);
x = document.querySelector("#name");
console.log(x);
x = document.querySelector("p");
console.log(x);
var but = document.querySelector('#btn');
console.dir(but); //they uesd for open the javascript directory
x = document.querySelectorAll(".xyz");
console.log(x);
x = document.querySelectorAll(".xyz")[1].innerHTML;
console.log(x);
x = document.querySelectorAll(".xyz")[1].innerHTML = "nitesh bhatt";
console.log(x);
x = document.querySelectorAll("ul")[0].innerHTML;
console.log(x);
x = document.querySelectorAll("ul li")[1].innerHTML;
console.log(x);


//style with javascript

document.querySelector(".xyz").style.backgroundColor = "green";
x = document.querySelector(".xyz");
console.log(x);

//by class name

document.querySelector(".xyz").className = "abc xyz";
x = document.querySelector(".xyz").className;
console.log(x);
// classList are same as className but diff. is className return string and classList return array STRING

//classList methods
document.querySelector(".nav").addEventListener("click", efg);
function efg() {
  // document.querySelector(".nav").classList.add("efg");
  document.querySelector(".nav").classList.toggle("cde");

}
var a = document.querySelector(".nav").classList.length;
console.log(a);
document.querySelector(".xyz").classList.remove("abc");


//Event lisner

document.querySelector('.nav').onclick = abc;

function abc() {
  document.querySelector(".nav").style.backgroundColor = "red";
}


//Dom traversal method

x = document.querySelector('.nav').parentElement;
console.log(x);
x = document.querySelector('html').parentNode;  //anything is return in parentNode
console.log(x);
x = document.querySelector('.nav').children;
console.log(x);
x = document.querySelector('.nav').childNodes; //the return all nodes
console.log(x);
x = document.querySelector('.nav').firstChild; //they write all child
console.log(x);
x = document.querySelector('.nav').lastChild; //they write all child
console.log(x);
x = document.querySelector('.nav').firstElementChild;
console.log(x);
x = document.querySelector('.nav').lastElementChild;
console.log(x);
x = document.querySelector('.nav_bar').nextElementSibling;
console.log(x);
x = document.querySelector('.xyz').previousElementSibling;
console.log(x);
x = document.querySelector('.nav_bar').nextSibling;  //they return all
console.log(x);
x = document.querySelector('.nav_bar').previousSibling;  //they return all
console.log(x);

// Add eventsListener in javascript

var but = document.querySelector('#btn');
but.addEventListener('click', function () {
  alert("this is addEventListner");
})
but.addEventListener('click', function () {
  console.log('event in console');
})
but.addEventListener('mouseover', function () {
  but.innerHTML = "don't touch me";
})
but.addEventListener('mouseout', function () {
  but.innerHTML = "Back to click me";
})
window.addEventListener('scroll', function () {
  console.log('stop scrolling')
})


//   DOM create methodes

var new_create = document.createElement('h2');
console.log(new_create);
var new_text = document.createTextNode('hello everyone');
console.log(new_text);
var new_comment = document.createComment('this is comment');
console.log(new_comment);
// Append child use for the attach the two element and text;
new_create.appendChild(new_text); //append last me hi save karti hai isko change karne ke liye alg variables hai
document.querySelector('.test').appendChild(new_create);
document.querySelector('.test').appendChild(new_comment);
var target = document.querySelector('.test');
target.insertBefore(new_create, target.childNodes[0])
target.insertAdjacentElement('afterbegin', new_create);
var target = document.querySelector('.containor'); //This is a insertAdjacentHTML /demo
var element = "<h2>My name is Nitesh</h2>";
target.insertAdjacentHTML("beforeend", element);
var element = 'This is text';
target.insertAdjacentText('afterbegin', element); //This is a insertAdjacentText

// replaceChild and removeChild
//
var element = document.createElement("li");
var text = document.createTextNode("hello");
element.appendChild(text);          //this is a replaceChild
var target = document.querySelector('#list');
var old = target.children[0];
target.replaceChild(element, old);

//   var old = target.children[1];  // this is removeChild
target.removeChild(target.children[1]);

// DOM Clone node
var target = document.querySelector('#list').children[0];
var copy = target.cloneNode(true);
document.getElementById('copy').appendChild(copy);


//setInterval and clearInterval

var id = setInterval(anim, 1000);
var a = 0;
function anim() {
  a = a + 20;
  if (a == 300) {
    clearInterval(id);
  }
  else {
    document.querySelector('.containor').style.marginLeft = a + 'px';

  }
}

//setTimeout  and cleartimeout

var ids = setTimeout(ani, 6000);
var a = 100;
function ani() {
  document.getElementById('copy').style.fontSize = a + 'px';

}
function stopanimation() {
  clearTimeout(ids);
}

//Bom in javaScript

var a = window.innerWidth;
console.log(a);
var a = window.outerWidth;
console.log(a);
var a = window.innerHeight;
console.log(a);
var a = window.outerHeight;
console.log(a);
var a = navigator.cookieEnabled;
console.log(a);
var a = navigator.appName;
console.log(a);
var a = navigator.appCodeName;
console.log(a);
var a = navigator.product;
console.log(a);
var a = navigator.appVersion
console.log(a);
var a = navigator.userAgent
console.log(a);
var a = navigator.platform
console.log(a);
var a = navigator.language
console.log(a);
var a = navigator.onLine
console.log(a);



/// Advance javascript in javascript

//String TEMPLATE

var str = "nitesh paswan";
function ca() {
  console.log(`How are you ${str}`);
}
ca();

//Arrow  gunction

var call = (a, b) => {
  console.log(a + b);
}
call(3, 5);
//Rest opertor are use when many arugs pass on function then use arguments function
// then its pass the string in function then use rest opertor

/*   function sum() {
     let sum = 0;
     for(let i in arguments){
       sum += arguments[i];
     }
console.log(sum);
   }
  */

function sum(name, ...args) {
  let sum = 0;
  for (let i in args) {
    sum += args[i];
  }
  console.log(sum);
  console.log(name);
}
sum('nitesh paswan', 29, 30, 120);

//Spered opertor  are use for set the all array ins function array use for spered function

var arr = [19, 30, 28, 29];
var str = ['nik', 'jujj', 'jfdj'];
console.log(...arr, ...str);
//var srr1 = arr.concat(str);
//console.log(srr1);
var obj1 = {
  name: "nitesh",
  lname: "paswan"
};
var obj2 = {
  age: 50
};
var obj3 = {
  ...obj1,
  ...obj2
};
console.log(obj3);
