'use strict'

let first = prompt('Введите число которое хотите возвести в степень', '');

let second = prompt('Введите степень', '');

function pow(x = first, n = second) {
   if (x === '') {
      alert('Вы не ввели значение');
      return;
   }
   else if (n === '') {
      alert('Вы не ввели значение для возведения в степень ');
      return;
   } else if (isNaN(x) || isNaN(n)) {
      alert('Вводить можно только цифры!');
   } else {
      alert(`Результат : ${x ** n}`);
   }
}

pow();


