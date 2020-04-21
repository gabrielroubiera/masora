const names = require('./utils/names');
const lastnames = require('./utils/lastnames');
const mails = require('./utils/mails');

// Random numbers

const randomNumber = (length) => {
    let randomNumber = 0;
    if(length === undefined){
        console.log('%cMasora: (Random Numbers): You must put a limit as a parameter.', 'color: orange');
    } else if(length === 0){
        randomNumber = Math.floor(Math.random() * 0);
        console.log('%cMasora: (Random Numbers): If you use 0 as a limit, a random number is not generated.', 'color: orange');
    } else if(length > 0 && length <= 16){
        let digits = "1";
        for(let i = 0; i<length; i++){
            digits += "0";
        }
        digits = parseInt(digits);
        for(let i = 0; i<10000; i++){
            if(randomNumber === 0){
                randomNumber = Math.floor(Math.random() * 10);
            } else if(randomNumber.toString().length === length){
                break;
            } else {
                randomNumber = Math.floor(Math.random() * digits);
            }
        }   
    } else if(length > 16){
        console.log('%cMasora: (Random Numbers): You passed the limit of digits, use less than 16 digits.', 'color: orange');;
    }
    return randomNumber;
}

// return an number from your digit paramss

function returnNumberDigits(digits, limit){
    let i = randomNumber(digits);
    while(i > limit){
        i = randomNumber(digits);
    }
    return i;
}

// Random names

const randomName = () => {    
    let i  = returnNumberDigits(2, 15);
    let name = names[i];
    return name;
}
// Random lastnames

const randomLastname = () => {    
    let i = returnNumberDigits(3, 450);
    let lastname = lastnames[i];
    return lastname;
}

// Random mail

const randomMail = () => {
    let name = randomName();
    let lastname = randomLastname();
    let i = returnNumberDigits(1,3);
    let mail;
    if(name.length >= 6){
        mail = `${name}${randomNumber(2)}${mails[i]}`;
    } else {
        mail = `${name}${lastname}${mails[i]}`;        
    }
    return mail.toLocaleLowerCase();
}

// Random username

const randomUsername = () => {
    let name = randomName();
    let lastname = randomLastname();
    let i = returnNumberDigits(1,3);
    let username;
    if(name.length >= 6){
        username = `${name}${randomNumber(2)}`;
    } else {
        username = `${name}${lastname}`;        
    }
    return username.toLocaleLowerCase();
}

const randomDate = (s) => {
   
}

module.exports = {
    randomNumber,
    randomName,
    randomLastname,
    randomMail,
    randomUsername
}
