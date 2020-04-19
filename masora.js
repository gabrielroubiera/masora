const randomNumbers = (length) => {
    let randomNumber = 0;
    if(length === undefined){
        console.log('%Masora: (Random Numbers): You must put a limit as a parameter.', 'color: orange');
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

module.exports = {
    randomNumbers
}
