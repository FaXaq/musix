describe("Interval", function() {
  const Interval = require("../../src/class/Interval.js");

  describe("When creating a new Interval", function() {
    describe("without parameters", function() {
      /* default values should be a C 4 */
      it("should instanciate", function() {
        let interval = new Interval()
        expect(interval instanceof Interval).toBeTruthy()
        expect(interval.getName()).toBe('Perfect unison')
      })
    })

    describe("With parameters", function() {
      it("should instanciate with a name", function() {
          let interval = new Interval("M3")
          expect(interval instanceof Interval).toBeTruthy()
          expect(interval.getName()).toBe('Major third')
      })
    })
  })

  describe("When manipulating intervals", function() {
    it("should give the semitones from the perfect unison", function() {
      let interval = new Interval("M3")
      expect(interval.getSemitonesFromUnison()).toEqual(4)
    })

    it("shoudl give the semitones between two intervals", function() {
        let i1 = new Interval("M3")
        let i2 = new Interval("m3")
        expect(Interval.getSemitonesBetween(i1, i2)).toEqual(-1)


        i1 = new Interval("P1")
        i2 = new Interval("P8")
        expect(Interval.getSemitonesBetween(i1, i2)).toEqual(12)


        i1 = new Interval("d1")
        i2 = new Interval("P5")
        expect(Interval.getSemitonesBetween(i1, i2)).toEqual(7)
    })
  })
})
