// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor development
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.
describe('addThemUp', ()=> {
    test('Function takes two number arguments and returns the sum.', () => {
        expect(addThemUp(1, 2)).toEqual(3)
        expect(addThemUp(-1, -2)).toEqual(-3)
        expect(addThemUp(1.5, 2.5)).toEqual(4)
    })
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.
const addThemUp = (num1, num2) => {
    return num1 + num2;
}

// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.
describe('triangleArea', () => {
    test('Function takes in two number arguments and returns the area of a triangle.', () => {
        expect(triangleArea(1, 2)).toEqual(4)
        expect(triangleArea(3, 4)).toEqual(24)
        expect(triangleArea(5, 6)).toEqual(60)
    })
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.
const triangleArea = (base, height) => {
    return ((base * height) * 2);    
}