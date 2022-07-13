const botaoEnviarHeader = document.getElementById('submit-header');
const emailHeader = document.getElementById('email-header');
const passwordHeader = document.getElementById('password-header');

function enviaHeader(evento) {
  if (emailHeader.value === 'tryber@teste.com' && passwordHeader.value === '123456') {
    evento.preventDefault();
    window.alert('Olá, Tryber!');
  } else {
    evento.preventDefault();
    window.alert('Email ou senha inválidos.');
  }
}

botaoEnviarHeader.addEventListener('click', enviaHeader);
