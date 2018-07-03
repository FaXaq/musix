describe("Note", function() {
  var Note = require('../../src/class/Note');
  var NoteAlias = require('../../src/class/NoteAlias');

  describe("When requesting a sharp note Alias", function() {
    it("should give you the flat alias", function() {
      let note = new Note({ name: 'F', sciPitch: 4, accidental: 's' })
      let newNote = NoteAlias.findFlatAlias(note)
      expect(newNote.getName()).toBe('G')
      expect(newNote.getAccidental().getName()).toBe('b')
    })
  })
})
