const Note = require('./Note')
const Pitch = require('./Pitch')

const sharpToFlatAliases = {
  "As": new Note({ name: "B", accidental: "b" }),
  "Bs": new Note({ name: "C" }),
  "Cs": new Note({ name: "D", accidental: "b" }),
  "Ds": new Note({ name: "E", accidental: "b" }),
  "Es": new Note({ name: "F" }),
  "Fs": new Note({ name: "G", accidental: "b" }),
  "Gs": new Note({ name: "A", accidental: "b" })
}
const naturalToFlatAliases = {
  "A": new Note({ name: "B", accidental: "bb" }),
  "B": new Note({ name: "C", accidental: "b" }),
  "C": new Note({ name: "D", accidental: "bb" }),
  "D": new Note({ name: "E", accidental: "bb" }),
  "E": new Note({ name: "F", accidental: "b" }),
  "F": new Note({ name: "G", accidental: "bb" }),
  "G": new Note({ name: "A", accidental: "bb" })
}
const flatToSharpAliases = {
  "Ab": new Note({ name: "G", accidental: "s" }),
  "Bb": new Note({ name: "A", accidental: "s" }),
  "Cb": new Note({ name: "B" }),
  "Db": new Note({ name: "C", accidental: "s" }),
  "Eb": new Note({ name: "D", accidental: "s" }),
  "Fb": new Note({ name: "E" }),
  "Gb": new Note({ name: "F", accidental: "s" })
}
const naturalToSharpAliases = {
  "A": new Note({ name: "G", accidental: "ss" }),
  "B": new Note({ name: "A", accidental: "ss" }),
  "C": new Note({ name: "B", accidental: "s" }),
  "D": new Note({ name: "C", accidental: "ss" }),
  "E": new Note({ name: "D", accidental: "ss" }),
  "F": new Note({ name: "E", accidental: "s" }),
  "G": new Note({ name: "F", accidental: "ss" })
}
const doubleSharpAliases = {
  "Ass": new Note({ name: 'B', sciPitch:  4 }),
  "Bss": new Note({ name: 'C', sciPitch:  4, accidental: 's' }),
  "Css": new Note({ name: 'D', sciPitch:  4 }),
  "Dss": new Note({ name: 'E', sciPitch:  4 }),
  "Ess": new Note({ name: 'F', sciPitch:  4, accidental: 's' }),
  "Fss": new Note({ name: 'G', sciPitch:  4 }),
  "Gss": new Note({ name: 'A', sciPitch:  4 })
}
const doubleFlatAliases = {
  "Abb": new Note({ name: 'G', sciPitch:  4 }),
  "Bbb": new Note({ name: 'A', sciPitch:  4 }),
  "Cbb": new Note({ name: 'B', sciPitch:  4, accidental: 'b' }),
  "Dbb": new Note({ name: 'C', sciPitch:  4 }),
  "Ebb": new Note({ name: 'D', sciPitch:  4 }),
  "Fbb": new Note({ name: 'E', sciPitch:  4, accidental: 'b' }),
  "Gbb": new Note({ name: 'F', sciPitch:  4 })
}

class NoteAlias {
  static findAlias(note, key) {
    if (note.getAccidental().isSharp()) {
      return NoteAlias.findFlatAlias(note)
    } else if (note.getAccidental().isFlat()) {
      return NoteAlias.findSharpAlias(note)
    } else if (note.getAccidental().isDoubleSharp()) {
      return NoteAlias.findDoubleSharpAlias(note)
    } else if (note.getAccidental().isDoubleFlat()) {
      return NoteAlias.findDoubleFlatAlias(note)
    } else if (key.getAccidental().isFlat()) {
      return NoteAlias.findFlatAliasFromNatural(note)
    } else if (key.getAccidental().isSharp()) {
      return NoteAlias.findSharpAliasFromNatural(note)
    }

    return note
  }

  /* get flat alias from sharp note */
  static findFlatAlias(note) {
    return NoteAlias._findNoteInAliases(sharpToFlatAliases, note, true)
  }

  /* find flat or natural alias from double flat note */
  static findDoubleFlatAlias(note) {
    return NoteAlias._findNoteInAliases(doubleFlatAliases, note, false)
  }

  /* get sharp alias from flat note */
  static findSharpAlias(note) {
    return NoteAlias._findNoteInAliases(flatToSharpAliases, note, false)
  }

  static findDoubleSharpAlias(note) {
    return NoteAlias._findNoteInAliases(doubleSharpAliases, note, true)
  }

  static findFlatAliasFromNatural(note) {
    return NoteAlias._findNoteInAliases(naturalToFlatAliases, note, true)
  }

  static findSharpAliasFromNatural(note) {
    return NoteAlias._findNoteInAliases(naturalToSharpAliases, note, true)
  }

  static _findNoteInAliases(aliases, note, inc) {
    let noteFullName = note.getFullName()
    if (aliases.hasOwnProperty(noteFullName)) {
      let newNote = aliases[noteFullName].duplicate()

      newNote.setPitch(new Pitch(note.getPitch().getValue()))

      /* if note is a C, we brought it up so inc the pitch */
      if (newNote._isC()) {
        switch (inc) {
          case true:
            newNote.incPitch()
            break;
          default:
            newNote.decPitch()
            break;
        }
      }

      return newNote
    }
  }
}

module.exports = NoteAlias
