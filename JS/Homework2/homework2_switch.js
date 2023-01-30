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

// Considering that the cases are
//  pre-defined cases, it may be more elegant to use switch instead of if - else-if - else statements
switch (chineseZodiac) {
    case 0:
        alert("Your Chinese Zodiac is Rat");
        break;
    case 1:
        alert("Your Chinese Zodiac is Ox");
        break;
    case 2:
        alert("Your Chinese Zodiac is Tiger");
        break;
    case 3:
        alert("Your Chinese Zodiac is Rabbit");
        break;
    case 4:
        alert("Your Chinese Zodiac is Dragon");
        break;
    case 5:
        alert("Your Chinese Zodiac is Snake");
        break;
    case 6:
        alert("Your Chinese Zodiac is Horse");
        break;
    case 7:
        alert("Your Chinese Zodiac is Goat");
        break;
    case 8:
        alert("Your Chinese Zodiac is Monkey");
        break;
    case 9:
        alert("Your Chinese Zodiac is Rooster");
        break;
    case 10:
        alert("Your Chinese Zodiac is Dog");
        break;
    case 11:
        alert("Your Chinese Zodiac is Pig");
        break;
}