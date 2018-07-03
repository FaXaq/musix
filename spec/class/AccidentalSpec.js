describe("Note", function() {
  var Note = require('../../src/class/Note');
  var Accidental = require('../../src/class/Accidental');

  describe("When creating an accidental", function() {
    it("should instanciate without parameters", function() {
      let a = new Accidental()

      expect(a instanceof Accidental).toBeTruthy()
    })

    it("should instanciate with parameter", function() {
      let a = new Accidental("s")

      expect(a instanceof Accidental).toBeTruthy()
    })
  })

  describe("When testing accidental", function() {
    it("should detect a double flat", function() {
      let a = new Accidental("bb")

      expect(a.isDoubleFlat()).toBeTruthy()
    })

    it("should detect a flat", function() {
      let a = new Accidental("b")

      expect(a.isFlat()).toBeTruthy()
    })

    it("should detect a natural", function() {
      let a = new Accidental("n")

      expect(a.isNatural()).toBeTruthy()
    })

    it("should detect a sharp", function() {
      let a = new Accidental("s")

      expect(a.isSharp()).toBeTruthy()
    })

    it("should detect a double sharp", function() {
      let a = new Accidental("ss")

      expect(a.isDoubleSharp()).toBeTruthy()
    })

  })
})
