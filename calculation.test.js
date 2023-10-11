const milesToKilometers = require("./calculations").milesToKilometers
const poundsToKilograms = require("./calculations").poundsToKilograms
const f2c = require("./calculations").f2c

// hello
it("Convert miles to kilometers", ()=>{

    const miles = 10;
    const km = 16.0934;

    expect(milesToKilometers(miles)).toBeCloseTo(km)
    expect(milesToKilometers(0)).toBe(0)
    expect(milesToKilometers(-2)).toEqual('Please make sure you input a valid non-negative number')
    expect(milesToKilometers("miles")).toEqual('Please make sure you use a number')
    expect(milesToKilometers([1,2])).toEqual('Please make sure you use a number')
    expect(milesToKilometers({})).toEqual('Please make sure you use a number')
})

it("Convert pounds to kilograms", ()=>{

    const pounds = 10;
    const kg = 4.53592;

    expect(poundsToKilograms(pounds)).toBeCloseTo(kg)
    expect(poundsToKilograms(0)).toBe(0)
    expect(poundsToKilograms(-2)).toEqual('invalid number')
    expect(poundsToKilograms("miles")).toEqual('invalid number')
    expect(poundsToKilograms([1,2])).toEqual('invalid number')
    expect(poundsToKilograms({})).toEqual('invalid number')
})


it("Convert f to c", ()=>{

    const f = 10;
    const c = -12.2222;

    expect(f2c(f)).toBeCloseTo(c)
    expect(f2c(0)).toBeCloseTo(-17.7778)
    expect(f2c(-2)).toBeCloseTo(-18.8889)
    expect(f2c(212)).toEqual(100)
    expect(f2c(32)).toEqual(0)
    expect(f2c("miles")).toEqual('Invalid input')
    expect(f2c([1,2])).toEqual('Invalid input')
    expect(f2c({})).toEqual('Invalid input')
})
