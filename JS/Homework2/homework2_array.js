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

let chineseZodiacSigns = ["Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", "Monkey", "Rooster", "Dog"];

let chineseZodiac = (birthYear - 4) % 12;
alert(`Your Chinese Zoidiac Sign is ${chineseZodiacSigns[chineseZodiac]}` );





