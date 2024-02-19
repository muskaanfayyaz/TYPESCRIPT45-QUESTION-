// EXERCISE 1

// 	Installed Node.js, TypeScript and VS Code on your computer

// EXERCISE 2

let person_name1 = "ERIC";
console.log(`Hello ${person_name1}, would you like to learn some Python today?`);

// EXERCISE 3

//lowercase
let personName2 : string ="muskaan";
console.log("lowercase:",personName2.toLowerCase());
//upercase
console.log("uppercase:",personName2.toUpperCase());
//titlecase
console.log("titlecase:",personName2.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());

// EXERCISE 4

const quoteText1: string = "The only way to do great work is to love what you do.";
const author1: string = "Steve Jobs";

const message1: string = `${author1} once said, "${quoteText1}"`;

console.log(message1);

// EXERCISE 5

const famous_person2: string = "Albert Einstein";
const quote2: string = "A person who never made a mistake never tried anything new.";

const message2: string =`${famous_person2} once said, "${quote2}"; `

console.log(message2);

// EXERCISE 6

let namewithwhitespaces1 : string= " \t\n  muskaan  \n\t";

console.log("Name with white spaces : " , namewithwhitespaces1);

let strippedname1 = namewithwhitespaces1.trim();
console.log("Name without white spaces : " , strippedname1);

// EXERCISE 7

// Addition
const additionResult1 = 5 + 3;
console.log("Addition:", additionResult1);

// Subtraction
const subtractionResult1 = 15 - 7;
console.log("Subtraction:", subtractionResult1);

// Multiplication
const multiplicationResult1 = 4 * 2;
console.log("Multiplication:", multiplicationResult1);

// Division
const divisionResult1 = 16 / 2;
console.log("Division:", divisionResult1);

// EXERCISE 8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// EXERCISE 9

const favoriteNumber1 = 14;
const message3 = `My favorite number is ${favoriteNumber1}1.`;
console.log(message3);

// EXERCISE 10

// Description: This program demonstrates various arithmetic operations resulting in the number 8.
// Addition operation resulting in 8
console.log(5 + 3);
// Subtraction operation resulting in 8
console.log(10 - 2);
// Multiplication operation resulting in 8
console.log(4 * 2);
// Division operation resulting in 8
console.log(16 / 2);
// Description: This program reveals my favorite number.
const favoriteNumber2 = 14; // my favorite number
const message4 = `My favorite number is ${favoriteNumber2}.`; // Message revealing the favorite number
console.log(message4); // Printing the message

// EXERCISE 11

// Array of friends' names
const names1: string[] = ["Aina","armish","kanchan","kainat"];
// Printing each person's name
names1.forEach(name => {
    console.log(name);
});

// EXERCISE 12

// Array of friends' names
const names2: string[] = ["Aina","armish","kanchan","kainat"];

// Printing personalized message to each person
names2.forEach(name => {
    console.log(`Hello, ${name}! Have a great day!`);
});

// EXERCISE 13

// Define an array of favorite mode of transportation
const favoriteTransportation1: string[] = ["Tesla", "Mercedes", "Vespa", "Jeep"];

// Print statements about the items in the array
favoriteTransportation1.forEach(item => {
    console.log(`I would like to own a ${item}.`);
});


// EXERCISE 14

// Define an array of guests
const guestList1: { name: string; message: string }[] = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you , join us for dinner. "
    },
    {
        name: "Marie",
        message: "Dear Marie , It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry,  I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];

// Print invitation messages to each guest
guestList1.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});


// EXERCISE 15

const guestList2: { name: string; message: string }[] = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you join us for dinner."
    },
    {
        name: "Marie",
        message: "Dear Marie, It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry, I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];
const replacementGuest1 = {
    name: "Albert",
    message: "Dear Albert, I would be delighted to invite you to join us for dinner. Your contributions to science have had a profound impact on humanity"
};

// Find the index of the guest who can't make it and replace them with the replacement guest
const guestIndex1 = guestList1.findIndex(guest => guest.name === "Ahmed");
if (guestIndex1 !== -1) {
    guestList1[guestIndex1] = replacementGuest1;
}

// Print invitation messages to each guest
guestList1.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});


// EXERCISE 16

// Define an array of guests
let guestList3: { name: string; message: string }[] = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you join us for dinner."
    },
    {
        name: "Marie",
        message: "Dear Marie, It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry, I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList3.unshift({
    name: "alia",
    message: "Dear alia, I would be honored to have you join us for dinner."
});

// Add one new guest to the middle of the array
const middleIndex1 = Math.floor(guestList1.length / 2);
guestList1.splice(middleIndex1, 0, {
    name: "Adanan",
    message: "Dear Adanan, I would be delighted to have you as my guest for dinner."
});

// Add one new guest to the end of the array
guestList1.push({
    name: "Nikil",
    message: "Dear Nikil,It would be a pleasure to have you join us for dinner."
});

// Print invitation messages to each guest
guestList1.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});


// EXERCISE 17

// Define an array of guests
let guestList4: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print message about the limitation on the number of invites
console.log("Sorry, due to unforeseen circumstances, we can only invite two guests for dinner.");

// Remove guests until only two remain
while (guestList4.length > 2) {
    const removedGuest = guestList.pop();
    if (removedGuest)
        console.log(`Sorry, ${removedGuest}, you're no longer invited to the dinner.`);
}

// Print invitation messages to the remaining two guests
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
});


// EXERCISE 18

let places1: string[] = ["saudia arabia", "paris", "switzerland", "turkey", "america"];
//original order
console.log("Original order:", places1);
// Alphabetical order
console.log("Alphabetical order:", [...places1].sort());
//original order
console.log("Original order after sorting:", places1);
// Reverse alphabetical order
console.log("Reverse alphabetical order:", [...places1].sort().reverse());
 //original order
console.log("Original order after reverse sorting:", places1);
// Reverse the order of the list
places1.reverse();
console.log("Reversed order:", places1);
// Reverse the order of the list again to get back to the original order
places1.reverse();
console.log("Original order after double reverse:", places);
// Sort the list alphabetically
places1.sort();
console.log("Sorted alphabetically:", places);
// Reverse the sorted array to get reverse alphabetical order
places1.reverse();
console.log("Sorted in reverse alphabetical order:", places);


// EXERCISE 19

// Define an array of guests
var guestList5 = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you join us for dinner."
    },
    {
        name: "Marie",
        message: "Dear Marie, It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry, I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];
// Print invitation messages to each guest
guestList5.forEach(function (guest) {
    console.log("Invitation to ".concat(guest.name, ": ").concat(guest.message));
});
// Print the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(guestList5.length));


// EXERCISE 20

// Define an array of fruits
const fruits1: string[] = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Print the list of fruits
console.log("List of fruits:");
fruits1.forEach(fruit => {
    console.log(fruit);
});


// EXERCISE 21

// Define objects representing different Urdu novels
const urduNovels1: { title: string; author: string; genre: string; year: number }[] = [
    {
        title: "Peer-e-Kamil",
        author: "Umera Ahmed",
        genre: "Spiritual Fiction",
        year: 2004
    },
    {
        title: "Mushaf",
        author: "Nimra Ahmed",
        genre: "Romantic",
        year: 2011
    },
    {
        title: "Aab-e-Hayat",
        author: "Umera Ahmed",
        genre: "Spiritual Fiction",
        year: 2015
    }
];

// Print the list of Urdu novels
console.log("List of Urdu novels:");
urduNovels1.forEach(novel => {
    console.log(`${novel.title} by ${novel.author} (${novel.year}), Genre: ${novel.genre}`);
});


// EXERCISE 22

const fruits2: string[] = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Accessing invalid index  to produce an index error
//console.log(fruits[10]); // Attempting to access index 10 which doesn't exist

// This line won't be reached because an error will be thrown above
console.log("This line will not be executed due to the index error.");
// Accessing a valid index
console.log(fruits2[2]); // Outputs: Orange


// EXERCISE 23

let x1 = 5;
let y1 = 10;

// Test 1:
console.log("Is x < y? I predict True.");
console.log(x1 < y1); 

// Test 2:
console.log("Is x > y? I predict False.");
console.log(x1 > y1); 

// Test 3: 
console.log("Is x == y? I predict False.");
console.log(x1 == y1); 

// Test 4: 
console.log("Is x != y? I predict True.");
console.log(x1 != y1);

// Test 5: 
console.log("Is x <= y? I predict True.");
console.log(x1 <= y1);

// Test 6: 
console.log("Is y <= x? I predict False.");
console.log(y1 <= x1); 

// Test 7: 
console.log("Is x >= y? I predict False.");
console.log(x1 >= y1); 

// Test 8: 
console.log("Is y >= x? I predict True.");
console.log(y1 >= x1); 

// Test 9:
console.log("Is x > 0? I predict True.");
console.log(x1 > 0); 

// Test 10: 
console.log("Is y < 0? I predict False.");
console.log(y1 < 0); 


// EXERCISE 24

// Tests for equality and inequality with strings
const string_a: string = "hello";
const string_b: string = "world";

console.log(string_a === string_b); // false
console.log(string_a !== string_b); // true

// Tests using the lower case function
const string_c: string = "Hello";
const string_d: string = "hello";

console.log(string_c.toLowerCase() === string_d.toLowerCase()); // true

// Numerical tests
const num_1: number = 5;
const num_2: number = 10;

console.log(num_1 === num_2); // false
console.log(num_1 !== num_2); // true
console.log(num_1 > num_2); // false
console.log(num_1 < num_2); // true
console.log(num_1 >= num_2); // false
console.log(num_1 <= num_2); // true

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
const item2: number = 6;

console.log(array.includes(item1)); // true
console.log(array.includes(item2)); // false

// Test whether an item is not in an array
console.log(!array.includes(item1)); // false
console.log(!array.includes(item2)); // true


// EXERCISE 25

// version 1:
const alien_color1: string = 'green';

if (alien_color1 === 'green') {
    console.log("The player just earned 5 points.");
}
// version 2:

const alien_color: string = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}


// EXERCISE 26

// version 1

const alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// version 2

const alien_color2: string = 'red'; // or 'yellow'

if (alien_color2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}


// EXERCISE 27

//  version 1 : green alien
const alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}

//  version 2 : yellow alien
const alien_color2: string = 'yellow';

if (alien_color2 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color2 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color2 === 'red') {
    console.log("The player earned 15 points.");
}

//  version 3 : red alien
const alien_color3: string = 'red';

if (alien_color3 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color3 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color3 === 'red') {
    console.log("The player earned 15 points.");
}


// EXERCISE 28

//  stages of life

const age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


// EXERCISE 29

// Array of favorite fruits
const favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];

// Check if certain fruits are in the array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
} else {
    console.log("You don't like oranges that much.");
}


// EXERCISE 30

// Array of usernames
const usernames: string[] = ['admin', 'ahmed', 'alsa', 'zubair', 'hassan'];

// Loop through the array and print greetings
for (const username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


// EXERCISE 31

// Array of usernames
let usernames: string[] = ['admin', 'ahmed', 'ali' , 'zubair', 'hassan'];

// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames
usernames = [];

// Check if the list of users is empty again
if (usernames.length === 0) {
    console.log("We need to find some users!");
}


// EXERCISE 32

//  current usernames
const current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];

//  new usernames
const new_users: string[] = ['user3', 'user6', 'user7', 'user8', 'user9'];

// Loop through the new_users list to check for uniqueness
for (const new_username of new_users) {
    if (current_users.includes(new_username)) {
        console.log(`The username "${new_username}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_username}" is available.`);
    }
}


// EXERCISE 33


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding: string;

    if (numbers[i] === 1) {
        ordinalEnding = "st";
    } else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    } else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${numbers[i]}${ordinalEnding}`);
}


// EXERCISE 34

const favoritePizzas: string[] = ["chicken tikka pizza", "malai boti pizza", "afghani pizza"];

// Printing pizza names
console.log("Pizza Names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing sentences about each pizza
console.log("\nSentences about each pizza:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} .`);
}

// Additional sentence about loving pizza
console.log("\nI really love pizza!");


// EXERCISE 35

const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing animal names
console.log("Animal Names:");
for (let animal of animals) {
    console.log(animal);
}

// Printing statements about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    switch (animal) {
        case "Dog":
            console.log(`A ${animal} would make a great pet.`);
            break;
        case "Cat":
            console.log(`A ${animal} would make a great companion.`);
            break;
        case "Rabbit":
            console.log(`A ${animal} would make a cute pet.`);
            break;
        default:
            console.log(`A ${animal} would make an interesting pet.`);
            break;
    }
}

// Statement about common characteristic
console.log("\nAny of these animals would make a great pet!");


// EXERCISE 36

function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Calling the function
make_shirt("Large", "Hello, World!");


// EXERCISE 37

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Creating large shirt with default message
make_shirt();

// Creating medium shirt with default message
make_shirt("Medium");

// Creating shirt of any size with a different message
make_shirt("Small", "Keep coding!");


// EXERCISE 38

function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");


// EXERCISE 39

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Paris", "France");
const city3 = city_country("karachi", "Pakistan");

// Printing the returned values
console.log(city1);
console.log(city2);
console.log(city3);


// EXERCISE 40

function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: title
    };
    
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating three dictionaries representing different albums
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12); // Album2 with 12 tracks
const album3 = make_album("Artist3", "Album3");

// Printing each return value to show album information
console.log(album1);
console.log(album2);
console.log(album3);


// EXERCISE 41

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician's names
const magicians: string[] = ["magician1","magician2","magician3","magician4"];

// Calling the function to show magician's names
show_magicians(magicians);


// EXERCISE 42

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["magician1", "magician2", "magician3", "magician4"];

// Calling make_great() to modify magician's names
magicians = make_great(magicians);

// Calling the function to show modified magician's names
show_magicians(magicians);

// EXERCISE 1

// 	Installed Node.js, TypeScript and VS Code on your computer

// EXERCISE 2

let person_name = "ERIC";
console.log(`Hello ${person_name}, would you like to learn some Python today?`);

// EXERCISE 3

//lowercase
let personName : string ="muskaan";
console.log("lowercase:",personName.toLowerCase());
//upercase
console.log("uppercase:",personName.toUpperCase());
//titlecase
console.log("titlecase:",personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase());

// EXERCISE 4

const quoteText: string = "The only way to do great work is to love what you do.";
const author: string = "Steve Jobs";

const message: string = `${author} once said, "${quoteText}"`;

console.log(message);

// EXERCISE 5

const famous_person: string = "Albert Einstein";
const quote: string = "A person who never made a mistake never tried anything new.";

const message: string =`${famous_person} once said, "${quote}"; `

console.log(message);

// EXERCISE 6

let namewithwhitespaces : string= " \t\n  muskaan  \n\t";

console.log("Name with white spaces : " , namewithwhitespaces);

let strippedname = namewithwhitespaces.trim();
console.log("Name without white spaces : " , strippedname);

// EXERCISE 7

// Addition
const additionResult = 5 + 3;
console.log("Addition:", additionResult);

// Subtraction
const subtractionResult = 15 - 7;
console.log("Subtraction:", subtractionResult);

// Multiplication
const multiplicationResult = 4 * 2;
console.log("Multiplication:", multiplicationResult);

// Division
const divisionResult = 16 / 2;
console.log("Division:", divisionResult);

// EXERCISE 8

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// EXERCISE 9

const favoriteNumber = 14;
const message = `My favorite number is ${favoriteNumber}.`;
console.log(message);

// EXERCISE 10

// Description: This program demonstrates various arithmetic operations resulting in the number 8.
// Addition operation resulting in 8
console.log(5 + 3);
// Subtraction operation resulting in 8
console.log(10 - 2);
// Multiplication operation resulting in 8
console.log(4 * 2);
// Division operation resulting in 8
console.log(16 / 2);
// Description: This program reveals my favorite number.
const favoriteNumber = 14; // my favorite number
const message = `My favorite number is ${favoriteNumber}.`; // Message revealing the favorite number
console.log(message); // Printing the message

// EXERCISE 11

// Array of friends' names
const names: string[] = ["Aina","armish","kanchan","kainat"];
// Printing each person's name
names.forEach(name => {
    console.log(name);
});

// EXERCISE 12

// Array of friends' names
const names: string[] = ["Aina","armish","kanchan","kainat"];

// Printing personalized message to each person
names.forEach(name => {
    console.log(`Hello, ${name}! Have a great day!`);
});

// EXERCISE 13

// Define an array of favorite mode of transportation
const favoriteTransportation: string[] = ["Tesla", "Mercedes", "Vespa", "Jeep"];

// Print statements about the items in the array
favoriteTransportation.forEach(item => {
    console.log(`I would like to own a ${item}.`);
});


// EXERCISE 14

// Define an array of guests
const guestList: { name: string; message: string }[] = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you , join us for dinner. "
    },
    {
        name: "Marie",
        message: "Dear Marie , It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry,  I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];

// Print invitation messages to each guest
guestList.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});


// EXERCISE 15

const guestList: { name: string; message: string }[] = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you join us for dinner."
    },
    {
        name: "Marie",
        message: "Dear Marie, It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry, I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];
const replacementGuest = {
    name: "Albert",
    message: "Dear Albert, I would be delighted to invite you to join us for dinner. Your contributions to science have had a profound impact on humanity"
};

// Find the index of the guest who can't make it and replace them with the replacement guest
const guestIndex = guestList.findIndex(guest => guest.name === "Ahmed");
if (guestIndex !== -1) {
    guestList[guestIndex] = replacementGuest;
}

// Print invitation messages to each guest
guestList.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});


// EXERCISE 16

// Define an array of guests
let guestList: { name: string; message: string }[] = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you join us for dinner."
    },
    {
        name: "Marie",
        message: "Dear Marie, It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry, I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guestList.unshift({
    name: "alia",
    message: "Dear alia, I would be honored to have you join us for dinner."
});

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, {
    name: "Adanan",
    message: "Dear Adanan, I would be delighted to have you as my guest for dinner."
});

// Add one new guest to the end of the array
guestList.push({
    name: "Nikil",
    message: "Dear Nikil,It would be a pleasure to have you join us for dinner."
});

// Print invitation messages to each guest
guestList.forEach(guest => {
    console.log(`Invitation to ${guest.name}: ${guest.message}`);
});


// EXERCISE 17

// Define an array of guests
let guestList: string[] = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Print message about the limitation on the number of invites
console.log("Sorry, due to unforeseen circumstances, we can only invite two guests for dinner.");

// Remove guests until only two remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    if (removedGuest)
        console.log(`Sorry, ${removedGuest}, you're no longer invited to the dinner.`);
}

// Print invitation messages to the remaining two guests
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
});


// EXERCISE 18

let places: string[] = ["saudia arabia", "paris", "switzerland", "turkey", "america"];
//original order
console.log("Original order:", places);
// Alphabetical order
console.log("Alphabetical order:", [...places].sort());
//original order
console.log("Original order after sorting:", places);
// Reverse alphabetical order
console.log("Reverse alphabetical order:", [...places].sort().reverse());
 //original order
console.log("Original order after reverse sorting:", places);
// Reverse the order of the list
places.reverse();
console.log("Reversed order:", places);
// Reverse the order of the list again to get back to the original order
places.reverse();
console.log("Original order after double reverse:", places);
// Sort the list alphabetically
places.sort();
console.log("Sorted alphabetically:", places);
// Reverse the sorted array to get reverse alphabetical order
places.reverse();
console.log("Sorted in reverse alphabetical order:", places);


// EXERCISE 19

// Define an array of guests
var guestList = [
    {
        name: "Ahmed",
        message: "Dear Ahmed, I would be honored to have you join us for dinner."
    },
    {
        name: "Marie",
        message: "Dear Marie, It would be a privilege to have you as my guest for dinner and discuss your remarkable achievements."
    },
    {
        name: "Harry",
        message: "Dear Harry, I would be humbled to share a meal with you and hear your insights on leadership and social change."
    }
];
// Print invitation messages to each guest
guestList.forEach(function (guest) {
    console.log("Invitation to ".concat(guest.name, ": ").concat(guest.message));
});
// Print the number of people invited to dinner
console.log("Number of people invited to dinner: ".concat(guestList.length));


// EXERCISE 20

// Define an array of fruits
const fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Print the list of fruits
console.log("List of fruits:");
fruits.forEach(fruit => {
    console.log(fruit);
});


// EXERCISE 21

// Define objects representing different Urdu novels
const urduNovels: { title: string; author: string; genre: string; year: number }[] = [
    {
        title: "Peer-e-Kamil",
        author: "Umera Ahmed",
        genre: "Spiritual Fiction",
        year: 2004
    },
    {
        title: "Mushaf",
        author: "Nimra Ahmed",
        genre: "Romantic",
        year: 2011
    },
    {
        title: "Aab-e-Hayat",
        author: "Umera Ahmed",
        genre: "Spiritual Fiction",
        year: 2015
    }
];

// Print the list of Urdu novels
console.log("List of Urdu novels:");
urduNovels.forEach(novel => {
    console.log(`${novel.title} by ${novel.author} (${novel.year}), Genre: ${novel.genre}`);
});


// EXERCISE 22

const fruits: string[] = ["Apple", "Banana", "Orange", "Grapes", "Strawberry"];

// Accessing invalid index  to produce an index error
//console.log(fruits[10]); // Attempting to access index 10 which doesn't exist

// This line won't be reached because an error will be thrown above
console.log("This line will not be executed due to the index error.");
// Accessing a valid index
console.log(fruits[2]); // Outputs: Orange


// EXERCISE 23

let x = 5;
let y = 10;

// Test 1:
console.log("Is x < y? I predict True.");
console.log(x < y); 

// Test 2:
console.log("Is x > y? I predict False.");
console.log(x > y); 

// Test 3: 
console.log("Is x == y? I predict False.");
console.log(x == y); 

// Test 4: 
console.log("Is x != y? I predict True.");
console.log(x != y);

// Test 5: 
console.log("Is x <= y? I predict True.");
console.log(x <= y);

// Test 6: 
console.log("Is y <= x? I predict False.");
console.log(y <= x); 

// Test 7: 
console.log("Is x >= y? I predict False.");
console.log(x >= y); 

// Test 8: 
console.log("Is y >= x? I predict True.");
console.log(y >= x); 

// Test 9:
console.log("Is x > 0? I predict True.");
console.log(x > 0); 

// Test 10: 
console.log("Is y < 0? I predict False.");
console.log(y < 0); 


// EXERCISE 24

// Tests for equality and inequality with strings
const string1: string = "hello";
const string2: string = "world";

console.log(string1 === string2); // false
console.log(string1 !== string2); // true

// Tests using the lower case function
const string3: string = "Hello";
const string4: string = "hello";

console.log(string3.toLowerCase() === string4.toLowerCase()); // true

// Numerical tests
const num1: number = 5;
const num2: number = 10;

console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // false
console.log(num1 < num2); // true
console.log(num1 >= num2); // false
console.log(num1 <= num2); // true

// Tests using "and" and "or" operators
const condition1: boolean = true;
const condition2: boolean = false;

console.log(condition1 && condition2); // false
console.log(condition1 || condition2); // true

// Test whether an item is in an array
const array: number[] = [1, 2, 3, 4, 5];
const item1: number = 3;
const item2: number = 6;

console.log(array.includes(item1)); // true
console.log(array.includes(item2)); // false

// Test whether an item is not in an array
console.log(!array.includes(item1)); // false
console.log(!array.includes(item2)); // true


// EXERCISE 25

// version 1:
const alien_color1: string = 'green';

if (alien_color1 === 'green') {
    console.log("The player just earned 5 points.");
}
// version 2:

const alien_color: string = 'red';
if (alien_color === 'green') {
    console.log("The player just earned 5 points.");
}


// EXERCISE 26

// version 1

const alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}

// version 2

const alien_color2: string = 'red'; // or 'yellow'

if (alien_color2 === 'green') {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points.");
}


// EXERCISE 27

//  version 1 : green alien
const alien_color: string = 'green';

if (alien_color === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color === 'red') {
    console.log("The player earned 15 points.");
}

//  version 2 : yellow alien
const alien_color2: string = 'yellow';

if (alien_color2 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color2 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color2 === 'red') {
    console.log("The player earned 15 points.");
}

//  version 3 : red alien
const alien_color3: string = 'red';

if (alien_color3 === 'green') {
    console.log("The player earned 5 points.");
} else if (alien_color3 === 'yellow') {
    console.log("The player earned 10 points.");
} else if (alien_color3 === 'red') {
    console.log("The player earned 15 points.");
}


// EXERCISE 28

//  stages of life

const age: number = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}


// EXERCISE 29

// Array of favorite fruits
const favorite_fruits: string[] = ['banana', 'apple', 'strawberry'];

// Check if certain fruits are in the array
if (favorite_fruits.includes('banana')) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes('apple')) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes('strawberry')) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes('orange')) {
    console.log("You really like oranges!");
} else {
    console.log("You don't like oranges that much.");
}


// EXERCISE 30

// Array of usernames
const usernames: string[] = ['admin', 'ahmed', 'alsa', 'zubair', 'hassan'];

// Loop through the array and print greetings
for (const username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}


// EXERCISE 31

// Array of usernames
let usernames: string[] = ['admin', 'ahmed', 'ali' , 'zubair', 'hassan'];

// Check if the list of users is not empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
} else {
    // Loop through the array and print greetings
    for (const username of usernames) {
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}

// Remove all usernames
usernames = [];

// Check if the list of users is empty again
if (usernames.length === 0) {
    console.log("We need to find some users!");
}


// EXERCISE 32

//  current usernames
const current_users: string[] = ['user1', 'user2', 'user3', 'user4', 'user5'];

//  new usernames
const new_users: string[] = ['user3', 'user6', 'user7', 'user8', 'user9'];

// Loop through the new_users list to check for uniqueness
for (const new_username of new_users) {
    if (current_users.includes(new_username)) {
        console.log(`The username "${new_username}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_username}" is available.`);
    }
}


// EXERCISE 33


const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
    let ordinalEnding: string;

    if (numbers[i] === 1) {
        ordinalEnding = "st";
    } else if (numbers[i] === 2) {
        ordinalEnding = "nd";
    } else if (numbers[i] === 3) {
        ordinalEnding = "rd";
    } else {
        ordinalEnding = "th";
    }

    console.log(`${numbers[i]}${ordinalEnding}`);
}


// EXERCISE 34

const favoritePizzas: string[] = ["chicken tikka pizza", "malai boti pizza", "afghani pizza"];

// Printing pizza names
console.log("Pizza Names:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

// Printing sentences about each pizza
console.log("\nSentences about each pizza:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} .`);
}

// Additional sentence about loving pizza
console.log("\nI really love pizza!");


// EXERCISE 35

const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing animal names
console.log("Animal Names:");
for (let animal of animals) {
    console.log(animal);
}

// Printing statements about each animal
console.log("\nStatements about each animal:");
for (let animal of animals) {
    switch (animal) {
        case "Dog":
            console.log(`A ${animal} would make a great pet.`);
            break;
        case "Cat":
            console.log(`A ${animal} would make a great companion.`);
            break;
        case "Rabbit":
            console.log(`A ${animal} would make a cute pet.`);
            break;
        default:
            console.log(`A ${animal} would make an interesting pet.`);
            break;
    }
}

// Statement about common characteristic
console.log("\nAny of these animals would make a great pet!");


// EXERCISE 36

function make_shirt(size: string, message: string): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Calling the function
make_shirt("Large", "Hello, World!");


// EXERCISE 37

function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`The shirt size is ${size} and the message printed on it is: "${message}"`);
}

// Creating large shirt with default message
make_shirt();

// Creating medium shirt with default message
make_shirt("Medium");

// Creating shirt of any size with a different message
make_shirt("Small", "Keep coding!");


// EXERCISE 38

function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");


// EXERCISE 39

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs
const city1 = city_country("Lahore", "Pakistan");
const city2 = city_country("Paris", "France");
const city3 = city_country("karachi", "Pakistan");

// Printing the returned values
console.log(city1);
console.log(city2);
console.log(city3);


// EXERCISE 40

function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
        artist: artist,
        title: title
    };
    
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Creating three dictionaries representing different albums
const album1 = make_album("Artist1", "Album1");
const album2 = make_album("Artist2", "Album2", 12); // Album2 with 12 tracks
const album3 = make_album("Artist3", "Album3");

// Printing each return value to show album information
console.log(album1);
console.log(album2);
console.log(album3);


// EXERCISE 41

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

// Array of magician's names
const magicians: string[] = ["magician1","magician2","magician3","magician4"];

// Calling the function to show magician's names
show_magicians(magicians);


// EXERCISE 42

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Array of magician's names
let magicians: string[] = ["magician1", "magician2", "magician3", "magician4"];
    
// Calling make_great() to modify magician's names
magicians = make_great(magicians);

// Calling the function to show modified magician's names
show_magicians(magicians);


// EXERCISE 43

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => console.log(magician));
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Original array 
const originalMagicians: string[] = ["magician1", "magician2", "magician3", "magician4"];

//  copy of the original array
const copiedMagicians: string[] = [...originalMagicians];

// Calling make_great() with a copy of the array
const greatMagicians: string[] = make_great(copiedMagicians);


console.log("Original Magicians:");
show_magicians(originalMagicians);


console.log("\nGreat Magicians:");
show_magicians(greatMagicians);


// EXERCISE 44

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("You ordered an empty sandwich.");
    } else {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => console.log("- " + item));
    }
    console.log(); // Empty line for spacing
}

// Calling the function with different numbers of arguments
makeSandwich("pattie", "Lettuce", "Tomato", "Mayo");
makeSandwich("pattie", "Cheese");
makeSandwich(); // Empty sandwich


// EXERCISE 45

function carInfo(manufacturer: string, modelName: string, ...additionalInfo: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    additionalInfo.forEach(info => {
        const key = Object.keys(info)[0];
        car[key] = info[key];
    });

    return car;
}

// Calling the function with required information and additional name-value pairs
const car = carInfo("Toyota", "Camry", {color: "Red"}, {year: 2022});

// Printing the returned object to verify the information stored correctly
console.log(car);

//end