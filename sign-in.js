const nameInput = document.querySelector('#name-input');
const userInput = document.querySelector('#user-input');
const form = document.querySelector('form');

const allLetersRegexp = /^[a-z]+$/i;
const userRegexp = /^[a-z]+[0-9]+$/;

nameInput.addEventListener('blur', (event) => {validateInput(event, allLetersRegexp)} );

userInput.addEventListener('blur', (event) => {validateInput(event, userRegexp)} );

function validateInput(event, regex) {
    const input = event.target.value;
    if (regex.test(input)) {
        event.target.classList.add('valid')
        event.target.classList.remove('invalid')
        //remove warning message
    }
    else {
        event.target.classList.add('invalid')
        event.target.classList.remove('valid')
        //add warning message
        const warningMessage = document.createElement('p')
        warningMessage.innerText = 'input is invalid'
        console.log(warningMessage)
        event.target.parentNode.appendChild(warningMessage)
    }
}

form.addEventListener('submit', validateSubmit)

function validateSubmit(event) {
    if(!nameInput.classList.contains('valid') || !userInput.classList.contains('valid')) {
        event.preventDefault();
    }
}