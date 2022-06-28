module.exports = function toReadable (number) {
 const numbersArray = [
        [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
    ];

  let readableN = '';
  let lastNumber = Math.floor(number % 10);
  let firstNumber = +number.toString().slice(0,1);
  
  if (number < 20 )
    return console.log(readableN = numbersArray[0][number]);
    
  else if (number >= 20 && number < 100 && number % 10 == 0) 
    return console.log(readableN = numbersArray[1][firstNumber]);
  else if (number >= 20 && number < 100 && number % 10 !== 0)   
    return console.log(readableN = numbersArray[1][firstNumber] + ' ' + numbersArray[0][lastNumber]);
    
  else if (number >= 100 && number % 100 == 0)
    return console.log(readableN = `${numbersArray[0][firstNumber]} hundred`);
  else if (number >= 100 && number % 100 < 20)   
    return console.log(readableN = `${numbersArray[0][firstNumber]} hundred ${numbersArray[0][number % 100]}`);
  else if (number >= 100 && number % 100 >= 20)   
    return console.log(readableN = `${numbersArray[0][firstNumber]} hundred ${numbersArray[1][firstNumber]} ${numbersArray[0][lastNumber]}`);
    
    }


