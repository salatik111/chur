function checkAge(age) {
  if (age >= 21) {
    return true;
  } else {
    return confirm('У вас есть разрешение от ваших родителей?');
  }
}

let age = prompt('Сколько вам лет?', 21);

if ( checkAge(age) ) {
  alert( 'Доступ получен' );
} else {
  alert( 'В доступе отказано' );
}
