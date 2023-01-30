/* Write javascript code that will get an input from the user and calculate which Chinese Zodiac a given year is in

Formula for Chinese Zodiac caluclation: (year - 4) % 12. Possible values:

0 - Rat
1 - Ox
2 - Tiger
3 - Rabbit
4 - Dragon
5 - Snake
6 - Horse
7 - Goat
8 - Monkey
9 - Rooster
10 - Dog
11 - Pig */
let birthYear = prompt("Please enter your birth year to see your Chinese Zodiac Sign: ");
console.log(birthYear);

// As JavaScript allows changing types of variables I used the same variable to parse the input to save memory
birthYear = parseInt(birthYear);
console.log(typeof birthYear);

while (birthYear < 1900 || birthYear > 2021) {
    birthYear = prompt("Please enter a valid birth year between 1900 and 2021: ");
    console.log(birthYear);
    birthYear = parseInt(birthYear);
}

let chineseZodiac = (birthYear - 4) % 12
console.log(chineseZodiac);

if (chineseZodiac === 0) {
    alert("Your Chinese Zodiac is Rat");
} else if (chineseZodiac === 1) {
    alert("Your Chinese Zodiac is Ox");
} else if (chineseZodiac === 2) {
    alert("Your Chinese Zodiac is Tiger");
} else if (chineseZodiac === 3) {
    alert("Your Chinese Zodiac is Rabbit");
} else if (chineseZodiac === 4) {
    alert("Your Chinese Zodiac is Dragon");
} else if (chineseZodiac === 5) {
    alert("Your Chinese Zodiac is Snake");
} else if (chineseZodiac === 6) {
    alert("Your Chinese Zodiac is Horse");
} else if (chineseZodiac === 7) {
    alert("Your Chinese Zodiac is Goat");
} else if (chineseZodiac === 8) {
    alert("Your Chinese Zodiac is Monkey");
} else if (chineseZodiac === 9) {s
    alert("Your Chinese Zodiac is Rooster");
} else if (chineseZodiac === 10) {
    alert("Your Chinese Zodiac is Dog");
} else {
    alert("Your Chinese Zodiac is Pig");
}