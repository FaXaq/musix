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
    it("should detect if it is an accidental", function() {
      let a = new Accidental()
      expect(a.isAccidental()).toBeFalsy()
    })

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

  describe("When requesting an ABC notation", function() {
    it("should give the double flat when accidental is double flat", function() {
      let a = new Accidental("bb")

      expect(a.getABCNotation()).toEqual("__")
    })

    it("should give the flat when accidental is flat", function() {
      let a = new Accidental("b")

      expect(a.getABCNotation()).toEqual("_")
    })

    it("should give the natural when accidental is natural", function() {
      let a = new Accidental("n")

      expect(a.getABCNotation()).toEqual("=")
    })

    it("should give the double flat when accidental is double flat", function() {
      let a = new Accidental("s")

      expect(a.getABCNotation()).toEqual("^")
    })

    it("should give the double flat when accidental is double flat", function() {
      let a = new Accidental("ss")

      expect(a.getABCNotation()).toEqual("^^")
    })
  })
})
