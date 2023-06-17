/*Comando que fará que o botão só funcione caso o usuário digite o nome dele*/

const input = document.querySelector('.login-input');

const button = document.querySelector('.login-button');

const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {

    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '')
    }

    }

    const handleSubmit = (event) => {
        event.preventDefault();


        localStorage.setItem('player', input.value);
        window.location = 'index2.html';

    }


input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

