// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19


var name = prompt('type down your name');
var surname = prompt('type down your surname');
var favouriteColor = prompt('choose your favourite color');
alert('you are all set, the password has been settled!');

document.getElementById('password').innerText = ' ' + name + surname + favouriteColor + '19';
