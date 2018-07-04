describe("Note", function() {
  var Note = require('../../src/class/Note');
  var Pitch = require('../../src/class/Pitch');
  var Accidental = require('../../src/class/Accidental');

  describe("When requesting note information", function() {
    it("should give the name", function() {
      let note = new Note()
      expect(note.getName()).toBe('C')
    })

    it("should give the pitch", function() {
      let note = new Note()
      expect(note.getPitch() instanceof Pitch).toBeTruthy()
    })

    it("should give the accidental", function() {
      let note = new Note()
      expect(note.getAccidental() instanceof Accidental).toBeTruthy()
    })
  })

  describe("When comparing note information", function() {
    it("should compare the name", function() {
      let note = new Note({ name: 'C', sciPitch: 4, accidental: 'b' })
      expect(Note.equalsName(note, new Note({ name: 'C', sciPitch: 4, accidental: 'b' }))).toBeTruthy()
      expect(Note.equalsName(note, new Note({ name: 'D', sciPitch: 4, accidental: 'b' }))).toBeFalsy()
    })

    it("should compare the accidentals", function() {
      let note = new Note({ name: 'C', sciPitch: 4, accidental: 'b' })
      expect(Note.equalsAccidental(note, new Note({ name: 'C', sciPitch: 4, accidental: 'b' }))).toBeTruthy()
      expect(Note.equalsAccidental(note, new Note({ name: 'D', sciPitch: 4, accidental: 's' }))).toBeFalsy()
      expect(Note.equalsAccidental(note, new Note({ name: 'D', sciPitch: 4 }))).toBeFalsy()
    })

    it("shloud compare the pitchs", function() {
      let note = new Note({ name: 'C', sciPitch: 4, accidental: 'b' })
      expect(Note.equalsPitch(note, new Note({ name: 'C', sciPitch: 4, accidental: 'b' }))).toBeTruthy()
      expect(Note.equalsPitch(note, new Note({ name: 'D', sciPitch: 3, accidental: 's' }))).toBeFalsy()
    })
  })

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
        let note = new Note({ name: 'A' })
        expect(note instanceof Note).toBeTruthy()
        expect(note.getName()).toBe('A')
        expect(note.pitch.getValue()).toEqual(4)
      })

      it("should instanciate with a name and a pitch", function() {
        let note = new Note({ name: 'A', sciPitch: 2 })
        expect(note instanceof Note).toBeTruthy()
        expect(note.getName()).toBe('A')
        expect(note.pitch.getValue()).toEqual(2)
      })

      it("should instanciate with a name, a pitch, and an accidental", function() {
        let note = new Note({ name: 'A', sciPitch: 2, accidental: 's' })
        expect(note instanceof Note).toBeTruthy()
        expect(note.getName()).toBe('A')
        expect(note.pitch.getValue()).toEqual(2)
        expect(note.accidental.getName()).toEqual('s')
      })
    })
  })

  describe("When modifying a note", function() {
    describe("sharp", function() {
      it("should be able to sharpen it once", function() {
        let note = new Note()
        note.sharpen()
        expect(note.getName()).toBe('C')
        expect(note.pitch.getValue()).toEqual(4)
        expect(note.accidental.getName()).toEqual('s')
      })

      it("should be able to sharpen it twice", function() {
        let note = new Note()
        note.sharpenTo(2)
        expect(note.getName()).toBe('D')
        expect(note.pitch.getValue()).toEqual(4)
        expect(note.accidental.getName()).toEqual('')
      })

      it("should be able to sharpen a flat twice", function() {
        let note = new Note({ name: 'E', sciPitch: 4, accidental: 'b' })
        note.sharpenTo(2)
        expect(note.getName()).toBe('F')
        expect(note.pitch.getValue()).toEqual(4)
        expect(note.accidental.getName()).toEqual('')
      })

      it("should be able to sharpen it to the octave above", function() {
        let note = new Note()
        note.sharpenTo(12)
        expect(note.getName()).toBe('C')
        expect(note.pitch.getValue()).toEqual(5)
        expect(note.accidental.getName()).toEqual('')
      })

      it("should be able to sharpen it to the sharp above", function() {
        let note = new Note({ name: 'E', sciPitch: 4, accidental: 'ss' })
        note.sharpen(true)
        expect(note.getName()).toBe('F')
        expect(note.pitch.getValue()).toEqual(4)
        expect(note.accidental.getName()).toEqual('ss')
      })

      it("should be able to skip to the next note", function() {
        let note = new Note()
        note.setToNextNote()
        expect(note.getName()).toBe('D')
        expect(note.pitch.getValue()).toEqual(4)
        expect(note.accidental.getName()).toEqual('')
      })
    })

    describe("flat", function() {
      it("should be able to flatten it once", function() {
        let note = new Note()
        note.flatten()
        expect(note.getName()).toBe('B')
        expect(note.pitch.getValue()).toEqual(3)
        expect(note.accidental.getName()).toEqual('')
      })

      it("should be able to flatten it twice", function() {
        let note = new Note()
        note.flattenTo(-2)
        expect(note.getName()).toBe('B')
        expect(note.pitch.getValue()).toEqual(3)
        expect(note.accidental.getName()).toEqual('b')
      })

      it("should be able to flatten it to the octave below", function() {
        let note = new Note()
        note.flattenTo(-12)
        expect(note.getName()).toBe('C')
        expect(note.pitch.getValue()).toEqual(3)
        expect(note.accidental.getName()).toEqual('')
      })

      it("should be able to flatten a sharp", function() {
        let note = new Note({ name: 'F', sciPitch: 4, accidental: 's' })
        note.flattenTo(-2)
        expect(note.getName()).toBe('E')
        expect(note.pitch.getValue()).toEqual(4)
        expect(note.accidental.getName()).toEqual('')
      })

      it("should be able to skip to the previous note", function() {
        let note = new Note()
        note.setToPreviousNote()
        expect(note.getName()).toBe('B')
        expect(note.pitch.getValue()).toEqual(3)
        expect(note.accidental.getName()).toEqual('')
      })
    })
  })

  describe("When requesting a random note", function() {
    it("should get a random note", function() {
      expect(Note.getNotes().indexOf(Note.getRandomNote().getFullName())).toBeGreaterThan(-1)
    })

    it("should get a random note with accidental", function() {
      let randomNote = Note.getRandomNoteWithAccidental()
      expect(Note.getNotes().indexOf(randomNote.getName())).toBeGreaterThan(-1)
      expect(randomNote.getAccidental() instanceof Accidental).toBe(true)
    })
  })

  describe("When requesting ABC notation", function() {
    it("should give note with low pitch", function() {
      let note = new Note({ name: "E", sciPitch: 0 })
      expect(note.getABCNotation()).toEqual("E,,,,")
    })

    it("should give note with high pitch", function() {
      let note = new Note({ name: "F", sciPitch: 8 })
      expect(note.getABCNotation()).toEqual("f'''")
    })

    it("should give note with normal pitch", function() {
      let note = new Note({ name: "C", sciPitch: 4 })
      expect(note.getABCNotation()).toEqual("C")
    })

    it("should give note with high pitch", function() {
      let note = new Note({ name: "B", sciPitch: 5 })
      expect(note.getABCNotation()).toEqual("b")
    })
  })
})
