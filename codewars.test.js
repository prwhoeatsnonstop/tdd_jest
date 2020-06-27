const { isPangram } = require('./codewars');

describe("isPangram", () => {
    it("should return false if sentence is not a pangram", () => {
        expect(isPangram("a")).toEqual(false);
        expect(isPangram("abd")).toEqual(false);
        expect(isPangram("asldfkj poiwqer")).toEqual(false);
    });

    it("should return true if sentence is a pangram", () => {
        expect(isPangram("The quick brown fox jumps over the lazy dog")).toEqual(true);
    })
})