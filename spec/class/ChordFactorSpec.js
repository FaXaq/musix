describe("ChordFactor", function() {
  describe("When loading ChordFactor", function() {
    it("should instanciate all chord factors available", function() {
        const ChordFactor = require("../../src/class/ChordFactor.js");

        expect(typeof ChordFactor.getFactors() === "object").toBeTruthy()
        expect(ChordFactor.getFactors().length).toBe(15)
    })
  })
})
