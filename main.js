// Task 1:

let n = prompt('Your name:');
let s = prompt('and surname:');
alert(`Привет, ${s} ${n}`);

// Task 2:

let years = prompt('What year were you born?');
const y = 2020;
years = y-years;
alert(`You are now ${years} years old:)`);

// Task 3:

let side = prompt('What is the length of the side of the square?');
let Pabcd = 4 * side;
alert(`Perimeter of a square is: ${Pabcd}`);
let Sabcd = side * side;
alert(`The area of the square is: ${Sabcd}`);

// Task 4:

let R = prompt('Enter the radius of the circle:');
let S = Math.PI*(R*R);
alert(`Area of a given circle ${S}`);

// Task 5:

let dis = prompt('What is the distance (in kilometrs) between cities A and B?');
let time = prompt('In what hour (in hours) do you need to overcome htis distance?');
let speed = dis/time;
alert(`The speed at which you need to move is: ${speed} km/h!`);

// Task 6:

let usd = prompt('how usd?');
const uah_cof = 28.3365;
let uah = usd * uah_cof;
alert(`Translated into uah: ${uah}`);

const euro_cof = 0.8541;
let euro = usd * euro_cof;
alert(`Translated into euro: ${euro}`);

// Task 7:

let num = prompt('gb?');
let Ob = 1024 * num;
let num_fils = Ob / 820;
alert(`Number of files = ${Math.trunc(num_fils)}`);

// Task 8:

let summ_many = prompt('summ many?');
let price_choc = prompt('price chocolate?');
let num_choc = summ_many / price_choc;
alert(`Number of chocolates = ${Math.trunc(num_choc)}`);
let ost = num_choc - Math.trunc(num_choc);
alert(`Surrender = ${ost}`);

// Task 9.1:

let number = prompt('Input there-digit number:');
alert(('' + number).split('').reverse().join(''));

// Task 9.2:

let numb = prompt('Input there-digit number:');
let result = 0;
while (numb) {
    result *= 10;
    result += numb % 10;
    numb = Math.floor(numb / 10);
}
alert(result);