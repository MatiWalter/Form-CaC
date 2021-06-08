const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const button = document.getElementById('button');

const validateEmail = (email) => {
  return regEx.test(email);
};

const validatePassword = (password) => {
  return password.trim().length > 0;
};

const alert = document.getElementById('alert');
const alerta = (message, type) => {
  alert.className = '';
  alert.classList.add('alert', 'mt-3');
  alert.classList.add(`${type}`);
  alert.innerHTML = message;
}

button.addEventListener('click', (e) => {
  e.preventDefault();

  const { value: email } = document.getElementById('email');
  const { value: password } = document.getElementById('password');

  const validEmail = validateEmail(email);
  const validPassword = validatePassword(password);

  if (!validEmail && !validPassword) {
    alerta('No pueden haber campos vacíos', 'alert-danger');
  } else if (!validEmail) {
    alerta('La casilla de email ingresada no corresponde a una casilla de correo activa', 'alert-info');
  } else if (!validPassword) {
    alerta('El campo clave no puede estar vacío', 'alert-danger');
  } else {
    alerta('Submit ficticio enviado con éxito', 'alert-success');
  }
});