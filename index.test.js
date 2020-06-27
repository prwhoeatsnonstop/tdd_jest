const { fizzbuzz } = require('./index');

describe("fizzbuzz", () => {
    it("should return array of numbers given input", () => {
        expect(fizzbuzz(2)).toEqual([1, 2]);
    })

    it("should return array of numbers with multiple of 3 being replaced with the word fizz", () => {
        expect(fizzbuzz(3)).toEqual([1, 2, "fizz"]);
    })

    it("should return array of numbers with multiple of 5 being replaced with the word buzz", () => {
        expect(fizzbuzz(5)).toEqual([1, 2, "fizz", 4, "buzz"]);
    })


    it("should return array of numbers with multiple of 3 and 5 being replaced with the word fizzbuzz", () => {
        expect(fizzbuzz(15)).toEqual([1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz", 11, "fizz", 13, 14, "fizzbuzz"]);
    })
})