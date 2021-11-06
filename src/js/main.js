//here will by JavaScript code ...

// var userInput = confirm('Tape smth');

// if (userInput) {
//     alert(userInput);
// }

var el = document.querySelector('#text-input');
var frm = document.querySelector('form');
var receiptes = document.querySelector('.receiptes');

function handleInputChange (event) {
    console.log(event.target.value);
}

function handleFormSubmit (event) {
    event.preventDefault();

    // for (var i = 0; i < event.target.length; i++) {
    //     if (event.target[i].value) {
    //         console.log(`${event.target[i].name} ${event.target[i].value}`);
    //     }

    // }
    
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(resp => resp.json())
        .then(data => {
            receiptes.innerHTML = JSON.stringify(data);
        })
}

frm.addEventListener('submit', handleFormSubmit);
// el.addEventListener('blur', handleInputChange);

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
.then(resp => resp.json())
.then(data => console.log(data))

