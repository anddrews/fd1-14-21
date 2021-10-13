// Number - числа
// string - строки ";dfgmdsf;g" ';ldkafjkals'
// Boolean - true / false
// null - 
// undefined - 
// Simbol - 
// object - 
// BigInt - 


var man = {
    age: 15,
    name: 'Alex',
    address: {
        city: 'Brooklin',
        street: '1st Left avenu'
    }
}

// var c = 3;

// var obj = man;

// man.name = 'Mike';

// console.log('man name ' + man.name);
// console.log('obj name ' + obj.name);

// var num = 3;
// var sec = num;

// console.log(num);
// console.log(sec);

// num = 5;
// console.log(num);
// console.log(sec);

// var number = '3';

// if (number === 3) {
//     console.log(' number more than five ' + number);
// } else if (number > 10) {
//     console.log(' number more than ten ' + number);
// } else {
//     console.log(' number ' + number);
// };

// console.log ('Switch case');

// var a = 5;

// switch (a) {
//     case 1: {
//         console.log(' variable is 1');
//         break;
//     }

//     case 2: 
//     case 5: {
//         console.log(' variable is 2 or 5');
//         break;
//     }

//     case 3: {
//         console.log(' variable is 3');
//         break;
//     }

//     default: {
//         console.log(' variable isn\'t 1 or 2 or 3');
//     }
// }


// var cond = 2;

// var variable = cond > 3 ? 'true' : 'false';

// console.log(variable);


// // Loops

// var a = 5;

// while (a > 0) {
//     console.log('while a = ' + a);
//     a = a - 1;
// }

// do {
//     console.log('do while a = ' + a);
//     a = a - 1;
// } while (a > 0);


// for (var index = 1; index <= 5; ) {
//     console.log ('for i = ' + index++);
// }

// var d = 3;
// var d = 5;
// let f = 3;
// const e = 5;
// f = 10;
// // e = 15;

// const t = {
//     b: 3,
// }

// t.b = 10;

function pow2 (number) {
    let result = number * number;

    return result;
}

function pow (num, exp) {
    let res = 1;

    for (var i = 1; i <= exp; i++) {
        res = res * num;
        // console.log(res)
    }

    return res;
}

const g = pow(10, 2);

// console.log('result ' + g);

// const numbers = [5, 4, 3, 2, 1, [1, 'two', 3 ,3], {a: 3}, 'jksdhfksdjh'];

// console.log(numbers[5][1]);

const arr = ['zero', 'one', 'two', 'tree', 'four', 'five', , 2];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


const numbers = [4, 6, 1, -9, 45, 33];
// 4 > 6 
// 4 > 1 -> 4 <-> 1 [1, 6, 4, -9, 45, 33]
// 1 > -9 -> 1 <-> -9 [-9, 6, 4, 1, 45, 33]
// -9 > 45
// -9 > 33
// [-9, 6, 4, 1, 45, 33]
// [-9, 1, 4, 6, 45, 33]
// [-9, 1, 4, 6, 45, 33]
// [-9, 1, 4, 6, 45, 33]
// [-9, 1, 4, 6, 33, 45]
// console.log(numbers);

// for (var i = 0; i < numbers.length - 1; i++) {
//     for (var j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             var tmp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = tmp;
//         }
//     }
//     // console.log(`${i + 1}  ${numbers}`);
// }

console.log(numbers.sort(function(a, b) {
    return b - a;
}))
// console.log(numbers);

// ''
// 'index * number = index * number and if index < 9 add \n'

const birds = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];


function isGoos (bird) {
    return !geese.includes(bird);
  }


function gooseFilter (birds) {
    return birds.find(function(bird) {
        return bird == 'Mallard sdfd';
    });
    
}

console.log(gooseFilter(birds));

var arr1 = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

console.log(arr1.concat(arr2))


