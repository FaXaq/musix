describe("Player", function() {
  var Note = require('../../src/class/Note');

  describe("When creating a new note", function() {
    describe("without parameters", function() {
      /* default values should be a C 4 */
      it("should instanciate", function() {
        let note = new Note()
        expect(note instanceof Note).toBeTruthy()
        expect(note.getName()).toBe('C')
        expect(note.pitch.getValue()).toEqual(4)
      })
    })


    describe("with parameters", function() {
      /* default values should be a C 4 */
      it("should instanciate with only a name", function() {
        let note = new Note('A')
        expect(note instanceof Note).toBeTruthy()
        expect(note.getName()).toBe('A')
        expect(note.pitch.getValue()).toEqual(4)
      })

      it("should instanciate with a name and a pitch", function() {
        let note = new Note('A', 2)
        expect(note instanceof Note).toBeTruthy()
        expect(note.getName()).toBe('A')
        expect(note.pitch.getValue()).toEqual(2)
      })

      it("should instanciate with a name, a pitch, and an accidental", function() {
        let note = new Note('A', 2, 's')
        expect(note instanceof Note).toBeTruthy()
        expect(note.getName()).toBe('A')
        expect(note.pitch.getValue()).toEqual(2)
        expect(note.accidental.getName()).toEqual('s')
      })
    })
  })
})
