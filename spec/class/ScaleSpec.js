describe("Scale", function() {
  var Note = require('../../src/class/Note');
  var Scale = require('../../src/class/Scale');
  let defaultNote = new Note("E", 4, "b");

  describe("When creating a new scale", function() {
    it("should instanciate without parameters", function() {
      let scale = new Scale()
      expect(scale instanceof Scale).toBeTruthy()
    })

    it("should instanciate with a key", function() {
      let scale = new Scale({
        key: defaultNote
      })
      expect(scale instanceof Scale).toBeTruthy()
    })

    it("should instanciate with a key and a name", function() {
      let scale = new Scale({
        name: 'chromatic',
        key: defaultNote
      })
      expect(scale instanceof Scale).toBeTruthy()
    })
  })

  describe("When creating a major scale", function() {
    describe("With a key without accidental", function() {
      it("should be able to create C major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note('C')
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note('C'))
        expect(scale.notes[1]).toEqual(new Note('D'))
        expect(scale.notes[2]).toEqual(new Note('E'))
        expect(scale.notes[3]).toEqual(new Note('F'))
        expect(scale.notes[4]).toEqual(new Note('G'))
        expect(scale.notes[5]).toEqual(new Note('A'))
        expect(scale.notes[6]).toEqual(new Note('B'))
      })

      it("should be able to create G major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note('G')
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note('G'))
        expect(scale.notes[1]).toEqual(new Note('A'))
        expect(scale.notes[2]).toEqual(new Note('B'))
        expect(scale.notes[3]).toEqual(new Note('C', 5))
        expect(scale.notes[4]).toEqual(new Note('D', 5))
        expect(scale.notes[5]).toEqual(new Note('E', 5))
        expect(scale.notes[6]).toEqual(new Note('F', 5, 's'))
      })

      it("should be able to create G major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note('G')
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note('G'))
        expect(scale.notes[1]).toEqual(new Note('A'))
        expect(scale.notes[2]).toEqual(new Note('B'))
        expect(scale.notes[3]).toEqual(new Note('C', 5))
        expect(scale.notes[4]).toEqual(new Note('D', 5))
        expect(scale.notes[5]).toEqual(new Note('E', 5))
        expect(scale.notes[6]).toEqual(new Note('F', 5, 's'))
      })

      it("should be able to create D major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note('D')
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note('D'))
        expect(scale.notes[1]).toEqual(new Note('E'))
        expect(scale.notes[2]).toEqual(new Note('F', 4, 's'))
        expect(scale.notes[3]).toEqual(new Note('G'))
        expect(scale.notes[4]).toEqual(new Note('A'))
        expect(scale.notes[5]).toEqual(new Note('B'))
        expect(scale.notes[6]).toEqual(new Note('C', 5, 's'))
      })

      it("should be able to create A major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note('A')
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note('A'))
        expect(scale.notes[1]).toEqual(new Note('B'))
        expect(scale.notes[2]).toEqual(new Note('C', 5, 's'))
        expect(scale.notes[3]).toEqual(new Note('D', 5))
        expect(scale.notes[4]).toEqual(new Note('E', 5))
        expect(scale.notes[5]).toEqual(new Note('F', 5, 's'))
        expect(scale.notes[6]).toEqual(new Note('G', 5, 's'))
      })

      it("should be able to create E major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note('E')
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note('E'))
        expect(scale.notes[1]).toEqual(new Note('F', 4, 's'))
        expect(scale.notes[2]).toEqual(new Note('G', 4, 's'))
        expect(scale.notes[3]).toEqual(new Note('A', 4))
        expect(scale.notes[4]).toEqual(new Note('B', 4))
        expect(scale.notes[5]).toEqual(new Note('C', 5, 's'))
        expect(scale.notes[6]).toEqual(new Note('D', 5, 's'))
      })
    })
  })
})
