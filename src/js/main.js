var elById = document.getElementById('header'); // #header
var elByClassName = document.getElementsByClassName('header'); // .header
var elementsByClass = document.getElementsByClassName('some-class');
var elByTag = document.getElementsByTagName('h1'); // h1


var elQuerySelector = document.querySelector('.some-class');
var elQuerySelectorAll = document.querySelectorAll('.some-class');

console.log(elById);
console.log(elByClassName);
console.log(elementsByClass);
console.log(elByTag);
console.log(elQuerySelector);
console.log(elQuerySelectorAll);


// elById.style.backgroundColor = "red";
elById.style.fontSize = '40px';
elById.classList.add('temporary');
elById.classList.remove('temporary');
elById.classList.toggle('temporary');

console.log(elById.classList.contains('temporary'));

function toggleBackground(event) {
    event.target.classList.toggle('header');
}

function doSmth() {
    console.log('smth');
}

// elById.onclick = toggleBackground;

elById.addEventListener('click', toggleBackground);
elById.addEventListener('click', doSmth);


var newEl = document.createElement('div');

newEl.innerHTML = `
<div>
    <div>
        <h6>Deep</h6>
    </div>
</div>
`;
// newEl.innerText = '<span> a new element</span>';
newEl.style.color = 'red';
newEl.classList.add('new-span');

var newSpan = document.createElement('span');
newSpan.innerText = 'new span';


elById.appendChild(newEl);
elById.insertBefore(newSpan, newEl);

var body = document.body;
var remove = document.querySelector('div.some-class');

// body.removeChild(remove);


var fotoGalery = [
    {
        imgPath: './img/cat.jpg',
        topContent: 'Top content',
        bottomContent: 'BottomContent'
    },
    {
        imgPath: './img/cat.jpg',
        topContent: 'Top content 2',
        bottomContent: 'BottomContent 2'
    }
]

var galeryItemMarkUp = function ({imgPath, topContent, bottomContent}) {
    return `
        <img src="${imgPath}" alt="">
        <div class="description">
            <div class="description__top">
            ${topContent}
            </div>
            <div class="description__bottom">
            ${bottomContent}
            </div>
        </div>
    `;
}


for (var i = 0; i < fotoGalery.length; i++) {
    var galeryItem = document.createElement('div');
    galeryItem.classList.add('image');
    galeryItem.innerHTML = galeryItemMarkUp(fotoGalery[i]);
    document.body.appendChild(galeryItem);
}