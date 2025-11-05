// Chapter5 index.jslet randomNumButton = document.querySelector('#randomNumButton');

console.log('Chapter5 loaded');randomNumButton.addEventListener('click', () => {

    let ulElement = document.querySelector('ul');
    let newLi = document.createElement('li');
    newLi.innerHTML = getRandomInt(45);
    ulElement.appendChild(newLi);
});