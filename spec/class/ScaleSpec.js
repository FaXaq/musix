describe("Scale", function() {
  var Note = require('../../src/class/Note');
  var Scale = require('../../src/class/Scale');
  let defaultNote = new Note({
    name: "E",
    sciPitch: 4,
    accidental: "b"
  });

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
          key: new Note({ name: 'C' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'C' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'D' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'E' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'F' }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'G' }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'A' }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'B' }))
      })

      it("should be able to create G major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note({ name: 'G' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'G' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'A' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'B' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'C', sciPitch: 5 }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'D', sciPitch: 5 }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'E', sciPitch: 5 }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'F', sciPitch: 5, accidental: 's' }))
      })

      it("should be able to create G major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note({ name: 'G' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'G' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'A' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'B' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'C', sciPitch: 5 }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'D', sciPitch: 5 }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'E', sciPitch: 5 }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'F', sciPitch: 5 , accidental: 's' }))
      })

      it("should be able to create D major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note({ name: 'D' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'D' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'E' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'F', sciPitch: 4, accidental: 's' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'G' }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'A' }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'B' }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'C', sciPitch: 5, accidental: 's' }))
      })

      it("should be able to create A major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note({ name: 'A' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'A' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'B' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'C', sciPitch: 5, accidental: 's' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'D', sciPitch: 5 }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'E', sciPitch: 5 }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'F', sciPitch: 5, accidental: 's' }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'G', sciPitch: 5, accidental: 's' }))
      })

      it("should be able to create E major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note({ name: 'E' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'E' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'F', sciPitch: 4, accidental: 's' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'G', sciPitch: 4, accidental: 's' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'A', sciPitch: 4 }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'B', sciPitch: 4 }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'C', sciPitch: 5, accidental: 's' }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'D', sciPitch: 5, accidental: 's' }))
      })

      it("should be able to create B major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note({ name: 'B' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'B' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'C', sciPitch: 5, accidental: 's' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'D', sciPitch: 5, accidental: 's' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'E', sciPitch: 5  }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'F', sciPitch: 5, accidental: 's' }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'G', sciPitch: 5, accidental: 's' }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'A', sciPitch: 5, accidental: 's' }))
      })

      it("should be able to create F major", function() {
        let scale = new Scale({
          name: 'major',
          key: new Note({ name: 'F' })
        })
        expect(scale.notes.length).toBe(7)
        expect(scale.notes[0]).toEqual(new Note({ name: 'F' }))
        expect(scale.notes[1]).toEqual(new Note({ name: 'G' }))
        expect(scale.notes[2]).toEqual(new Note({ name: 'A' }))
        expect(scale.notes[3]).toEqual(new Note({ name: 'B', accidental: 'b' }))
        expect(scale.notes[4]).toEqual(new Note({ name: 'C', sciPitch: 5 }))
        expect(scale.notes[5]).toEqual(new Note({ name: 'D', sciPitch: 5 }))
        expect(scale.notes[6]).toEqual(new Note({ name: 'E', sciPitch: 5 }))
      })
    })

    describe("With a key with accidental", function() {
      describe("sharp", function() {
        it("should be able to create C# major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'C', accidental: 's' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'C', accidental: 's' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'D', accidental: 's'  }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'E', accidental: 's'  }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'F', accidental: 's'  }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'G', accidental: 's'  }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'A', accidental: 's'  }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'B', accidental: 's'  }))
        })

        it("should be able to create G# major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'G', accidental: 's' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'G', accidental: 's' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'A', accidental: 's'  }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'B', accidental: 's'  }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'C', accidental: 's', sciPitch: 5  }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'D', accidental: 's', sciPitch: 5  }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'E', accidental: 's', sciPitch: 5  }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'F', accidental: 'ss', sciPitch: 5  }))
        })

        it("should be able to create D# major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'D', accidental: 's' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'D', accidental: 's' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'E', accidental: 's' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'F', accidental: 'ss' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'G', accidental: 's' }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'A', accidental: 's'  }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'B', accidental: 's'  }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'C', accidental: 'ss', sciPitch: 5  }))
        })

        it("should be able to create A# major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'A', accidental: 's' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'A', accidental: 's'  }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'B', accidental: 's'  }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'C', accidental: 'ss', sciPitch: 5 }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'D', accidental: 's', sciPitch: 5 }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'E', accidental: 's', sciPitch: 5 }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'F', accidental: 'ss', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'G', accidental: 'ss', sciPitch: 5 }))
        })

        it("should be able to create E# major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'E', accidental: 's' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'E', accidental: 's', }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'F', accidental: 'ss' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'G', accidental: 'ss' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'A', accidental: 's'  }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'B', accidental: 's'  }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'C', accidental: 'ss', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'D', accidental: 'ss', sciPitch: 5 }))
        })

        it("should be able to create B# major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'B', accidental: 's' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'B', accidental: 's'  }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'C', accidental: 'ss', sciPitch: 5  }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'D', accidental: 'ss', sciPitch: 5  }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'E', accidental: 's', sciPitch: 5 }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'F', accidental: 'ss', sciPitch: 5 }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'G', accidental: 'ss', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'A', accidental: 'ss', sciPitch: 5 }))
        })

        it("should be able to create F# major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'F', accidental: 's' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'F', accidental: 's' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'G', accidental: 's' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'A', accidental: 's' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'B' }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'C', accidental: 's', sciPitch: 5  }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'D', accidental: 's', sciPitch: 5  }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'E', accidental: 's', sciPitch: 5 }))
        })
      })
      describe("flat", function() {
        it("should be able to create Cb major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'C', accidental: 'b' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'C', accidental: 'b' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'D', accidental: 'b' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'E', accidental: 'b' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'F', accidental: 'b' }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'G', accidental: 'b' }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'A', accidental: 'b' }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'B', accidental: 'b' }))
        })


        it("should be able to create Gb major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'G', accidental: 'b' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'G', accidental: 'b' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'A', accidental: 'b' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'B', accidental: 'b' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'C', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'D', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'E', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'F', sciPitch: 5 }))
        })

        it("should be able to create Db major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'D', accidental: 'b' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'D', accidental: 'b' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'E', accidental: 'b' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'F' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'G', accidental: 'b' }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'A', accidental: 'b' }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'B', accidental: 'b' }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'C', sciPitch: 5 }))
        })

        it("should be able to create Ab major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'A', accidental: 'b' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'A', accidental: 'b' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'B', accidental: 'b' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'C', sciPitch: 5 }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'D', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'E', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'F', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'G', sciPitch: 5 }))
        })

        it("should be able to create Eb major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'E', accidental: 'b' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'E', accidental: 'b' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'F' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'G' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'A', accidental: 'b' }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'B', accidental: 'b' }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'C', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'D', sciPitch: 5 }))
        })

        it("should be able to create Bb major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'B', accidental: 'b' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'B', accidental: 'b' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'C', sciPitch: 5 }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'D', sciPitch: 5 }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'E', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'F', sciPitch: 5 }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'G', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'A', sciPitch: 5 }))
        })

        it("should be able to create Fb major", function() {
          let scale = new Scale({
            name: 'major',
            key: new Note({ name: 'F', accidental: 'b' })
          })
          expect(scale.notes.length).toBe(7)
          expect(scale.notes[0]).toEqual(new Note({ name: 'F', accidental: 'b' }))
          expect(scale.notes[1]).toEqual(new Note({ name: 'G', accidental: 'b' }))
          expect(scale.notes[2]).toEqual(new Note({ name: 'A', accidental: 'b' }))
          expect(scale.notes[3]).toEqual(new Note({ name: 'B', accidental: 'bb' }))
          expect(scale.notes[4]).toEqual(new Note({ name: 'C', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[5]).toEqual(new Note({ name: 'D', accidental: 'b', sciPitch: 5 }))
          expect(scale.notes[6]).toEqual(new Note({ name: 'E', accidental: 'b', sciPitch: 5 }))

        })
      })
    })
  })
})
