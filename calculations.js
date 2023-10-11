
// create a function that converts miles to kilometers

function milesToKilometers(miles) {

    if (typeof miles === 'number') {

        if( miles < 0){
            return 'Please make sure you input a valid non-negative number'
        }

        const kilometersPerMile = 1.60934;
        return miles * kilometersPerMile;
    
  } else {
        return `Please make sure you use a number`
  }
   
  }
  

// create a function that converts pounds to kilograms

function poundsToKilograms(pounds) {
    if (pounds < 0 || typeof pounds !== 'number') {
        return "invalid number";
    } else {
        return pounds * 0.453592;
    }
}

// create a function that converts degree F to degree C

function f2c(fahrenheit) {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    if (typeof fahrenheit !== "number") {
      return "Invalid input";
    } else {
      return celsius;
    }
  }



module.exports = {
    milesToKilometers,
    poundsToKilograms,
    f2c
  }