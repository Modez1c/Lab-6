const n = parseInt(prompt('Введіть число n: '));

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

if (isNaN(n)) {
  alert('Введене n не є числом');
} else {
  const result = fibonacci(n);
  alert(`Член №${n} послідовності Фібоначчі: ${result}`);
}

const now = new Date();

const months = [
  "січня", "лютого", "березня", "квітня", "травня", "червня",
  "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
];

const days = [
  "неділя", "понеділок", "вівторок", "середа", "четвер", "п’ятниця", "субота"
];

const formattedDate = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}, ${days[now.getDay()]}`;


const newElement = document.createElement("h2");
newElement.textContent = formattedDate;

const targetDate = new Date(2024, 10, 23);
const differenceInTime = targetDate.getTime() - new Date().getTime();
const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

const newElement2 = document.createElement("h3");
newElement2.textContent = `Днів до закінчення семестру: ${differenceInDays}`;

const parentElement = document.getElementById("main");
parentElement.prepend(newElement, newElement2);

document.getElementById("send").addEventListener("click", function() {
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;

  const regex = /^\p{L}+$/u;
  if (regex.test(name) && regex.test(surname)) {
    alert("Все вірно!");

  } else {
    alert("Ім'я вбо прізвище містять цифри!");
  }
});
