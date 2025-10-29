function changeTitle() {
    let titleElement = document.querySelector('#title')
    titleElement.innerHTML = '변신';
}

let eventTestButton = document.querySelector('#eventTestButton');
eventTestButton.addEventListener('click', changeTitle);

let addHandsomeButton = document.querySelector('#addHandsomeButton');
addHandsomeButton.addEventListener('click', () => {
    let ulElement = document.querySelector('ul');
    let newLi = document.createElement('li');
    newLi.innerHTML = '박민수';
    ulElement.appendChild(newLi);
});