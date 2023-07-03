test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 144.70 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar are 144.70 yen, then 3.5 euros should be (3.5 * 144.70)
    const expected = 3.5 * 144.70; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBeCloseTo(506.45); //1 dollar are 144.70 yen, then 3.5 euros should be = (3.5 * 144.70)
})

test("One yen should be 0.01 pound", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pound = fromYenToPound(3.5)

    // if 1 yen are 0.01 pound, then 3.5 euros should be (3.5 * 0.01)
    const expected = 3.5 * 0.01; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.035); //1 yen are 0.8 pound, then 3.5 euros should be = (3.5 * 0.01)
})