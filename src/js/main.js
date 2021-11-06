var items = document.querySelectorAll('.tree > .tree__item');

items.forEach(function(item) {

    var children = item.querySelectorAll('.tree-node__item + .tree-node__sub-items > .tree > .tree__item');

    var el = item.querySelector('.tree-node__item');

    if (children.length) {
        el.dataset.childrenCount = children.length;
        el.classList.add('has-children');
    }
})