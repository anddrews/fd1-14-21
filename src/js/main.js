// Number - числа
// string - строки ";dfgmdsf;g" ';ldkafjkals'
// Boolean - true / false
// null - 
// undefined - 
// Simbol - 
// object - 
// BigInt - 



console.log('before ' + variable);
variable = 10;
console.log('after ' + variable);


var variable;

if (true) {
    var variable;
} else {

}


smth();


function smth() {
    var fnVr = 20;
    console.log(variable);

}


console.log(fn);

var fn = function () {
    console.log('function expression');
}

fn();

function smth2() {
    var fnVr = 30;
}



var variable = 30;

console.log('after reassignment ' + variable);

// console.log(letVariable);
let letVariable = 'letVariable';
console.log(letVariable);


if (true) {
    let letInIf = 'letInIf';
    console.log(letInIf);
}

const constVariable = 'constVariable';

// constVariable = 20;


const today = 'Saturday';

const obj = {};

console.log(obj);

obj.a = 'smth';

console.log(obj);


const fnExpr = function Fn () {
    console.log('function expression');
    // Fn();
}


fnExpr();


const fibo = function fiboTmp (n) {
    if (n === 1) {
        // calculate 1 element

        return 0;
    }

    if (n === 2) {
        // calculate 2 element
        return 1;
    }


    //calculate n element

    return fiboTmp(n - 2) + fiboTmp(n - 1);
}

// console.log(fibo(1));
// console.log(fibo(2));
// console.log(fibo(3));
console.log(fibo(15));
// console.log(fibo(5));
// console.log(fibo(6));
// console.log(fibo(7));

//0 1 1 2 3 5 8


// *
// **
// ***
// ****
// *****
// ******
// *******




function triangle (lines, sign) {
    var tmp = sign || '*';
    for(var i = 0; i < lines; i++) {
        var res = tmp;
        for (var j = 0; j < i; j++){
            res += tmp; 
        }
        console.log(res);
    }
}


// triangle(10, '%');


//      *
//     ***
//    *****
//   *******
//  *********


function triangleIso (lines) {
    var maxStars = lines * 2 - 1;

    for (var i = 0; i < lines; i++) {
        var res = '';

        for (var j = 0; j < (maxStars - (i * 2) - 1) / 2; j++) {
            res += ' ';
        }
        for (var j = 0; j < (i + 1) * 2 - 1; j++) {
            res += '*';
        }

        console.log(res)
    }
}

// triangleIso(7);

//     *    
//    ***
// *********
//  *******
//   *****
//    ***
//     *



function middleStars(items, length) {
    var arr = new Array(length);
    arr.fill(' ');

    var middle = Math.trunc(arr.length / 2);


    if (items > 0) {
        arr[middle] = '*';

        for (var i = 1; i <= Math.trunc(items / 2); i++) {
            arr[middle - i] = '*';
            arr[middle + i] = '*';
        }

    }
    
    
    return arr.join('');
}

function renderShape(arr, renderLine) {
    var isExist = arr.every(function(item) {
        return item % 2
    })

    if (!isExist) {
        console.log('This shape can\'t be rendered');
        return ;
    }
    var length = Math.max(...arr);

    for (var i = 0; i < arr.length; i++) {
        console.log(renderLine(arr[i], length));
    }
}

var arr = [1, 3, 5, 7, 9, 7, 5, 3, 1];
var arr1 = [1, 3, 11, 7, 5, 3, 1];
var arr2 = [5, 5, 5, 5, 5];


function starsThenSpaces(items, length) {
    var arr = new Array(items);
    arr.fill('*');

    return arr.join('');
}

function spaceThenStars (items, length) {
    var stars = new Array(items);
    stars.fill('*');
    var spaces = new Array(length - items);
    spaces.fill(' ');
    
    return [...spaces, ...stars].join('');

}

renderShape(arr, middleStars);
renderShape(arr, starsThenSpaces);
renderShape(arr, spaceThenStars);

var c = 5;

console.log(`sum of 5 and 10
 is 3${ middleStars(3, 9) }
 3`);



var rnd = Math.random();
var min = 1;
var max = 10;

function getRnd (min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

console.log(getRnd(1, 10));
console.log(getRnd(1, 10));
console.log(getRnd(1, 10));
console.log(getRnd(1, 10));
console.log(getRnd(1, 10));
console.log(getRnd(1, 10));
console.log(getRnd(1, 10));
console.log(getRnd(1, 10));


