module.exports = function toReadable (number) {
    function toReadable (number) {
        let arrUnits = {
            0 : ' ', 1 : 'one', 2 : 'two', 3 : 'three', 4 : 'four', 5 : 'five', 6 : 'six', 7 : 'seven', 8 : 'eight', 9 : 'nine',};
        let arrDozens = {10 : 'ten', 20 : 'twenty', 30 : 'thirty', 40 : 'forty', 50 : 'fifty', 60 : 'sixty', 70 : 'seventy', 80 : 'eighty', 90 : 'ninety',};
        let arrTwoDigit = {11 : 'eleven', 12 : 'twelve',13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen',16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen' };
    
        let numberHR='';
       
        if (number == 0) return numberHR = 'zero';
    
        if (number > 0 && number <= 9) {
          return numberHR = arrUnits[number];
        }
    
        // if (number === 10) {
        //     return numberHR = arrDozens[number];
        //   }
    
        if (number >= 11 && number <= 19 ) {
          return numberHR = arrTwoDigit[number];
        }
        
        switch (number >= 20) {
          case (number % 10 == 0 && number.toString().length == 2): //20,30..90
              return numberHR = arrDozens[number];
          
          case (number % 10 != 0 && number.toString().length == 2): //21,31..99
              return numberHR = arrDozens[number - (number % 10)] + ' ' + arrUnits[number % 10];
    
          case (number % 100 == 0 && number.toString().length == 3):// 100,200..900
             return numberHR = arrUnits[number/100] + ' ' + 'hundred';
    
          case (number % 10 != 0 && number.toString().length == 3 && number%100 < 10)://101,109
            return numberHR = arrUnits[Math.floor(number/100)] + ' ' +'hundred'+ ' ' + arrUnits[number%10];
    
          case (number % 10 != 0 && number.toString().length == 3 && number%100 >= 10 && number%100 <= 19): // 110,111..119
          return numberHR = arrUnits[Math.floor(number/100)] + ' ' +'hundred'+ ' ' + arrTwoDigit[number%100];
    
          case (number % 10 == 0 && number.toString().length == 3)://120,930
          return numberHR = arrUnits[Math.floor(number/100)] + ' ' +'hundred'+ ' ' + arrDozens[number%100]
    
          case (number % 10 != 0 && number.toString().length == 3): 
              return numberHR = arrUnits[Math.floor(number/100)] + ' ' + 'hundred' + ' ' + arrDozens[(number%100)-(number%10)] + ' ' + arrUnits[number%10];
        }
    }
}

