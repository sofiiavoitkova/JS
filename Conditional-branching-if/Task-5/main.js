// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
let message = (login == 'Сотрудник') ? 'Привет':
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина': 
    '';