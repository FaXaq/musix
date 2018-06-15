const Note = require('./Note')
const Pitch = require('./Pitch')

const sharpToFlatAliases = {
  "As": new Note("B", 4, "b"),
  "Bs": new Note("C", 4),
  "Cs": new Note("D", 4, "b"),
  "Ds": new Note("E", 4, "b"),
  "Es": new Note("F", 4),
  "Fs": new Note("G", 4, "b"),
  "Gs": new Note("A", 4, "b")
}
const flatToSharpAliases = {
  "Ab": new Note("G", 4, "s"),
  "Bb": new Note("A", 4, "s"),
  "Cb": new Note("B", 4),
  "Db": new Note("C", 4, "s"),
  "Eb": new Note("D", 4, "s"),
  "Fb": new Note("E", 4),
  "Gb": new Note("F", 4, "s")
}
const doubleSharpAliases = {
  "Ass": new Note('B', 4),
  "Bss": new Note('C', 4, 's'),
  "Css": new Note('D', 4),
  "Dss": new Note('E', 4),
  "Ess": new Note('F', 4, 's'),
  "Fss": new Note('G', 4),
  "Gss": new Note('A', 4)
}
const doubleFlatAliases = {
  "Abb": new Note('G', 4),
  "Bbb": new Note('A', 4),
  "Cbb": new Note('B', 4, 'b'),
  "Dbb": new Note('C', 4),
  "Ebb": new Note('D', 4),
  "Fbb": new Note('E', 4, 'b'),
  "Gbb": new Note('F', 4)
}
const naturalAliases = {}

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
    }

    return note
  }

  /* get flat alias from sharp note */
  static findFlatAlias(note) {
    let noteFullName = note.getFullName()
    if (sharpToFlatAliases.hasOwnProperty(noteFullName)) {
      let newNote = sharpToFlatAliases[noteFullName].duplicate()
      newNote.setPitch(new Pitch(note.getPitch().getValue()))

      /* if note was a C, we brought it down so dec the pitch */
      if (note._isC()) newNote.incPitch()

      return newNote
    }
  }

  /* find flat or natural alias from double flat note */
  static findDoubleFlatAlias(note) {
    let noteFullName = note.getFullName()
    if (doubleFlatAliases.hasOwnProperty(noteFullName)) {
      let newNote = doubleFlatAliases[noteFullName].duplicate()
      newNote.setPitch(new Pitch(note.getPitch().getValue()))

      /* if note was a C, we brought it down so dec the pitch */
      if (note._isC()) newNote.decPitch()

      return newNote
    }
  }

  /* get sharp alias from flat note */
  static findSharpAlias(note) {
    let noteFullName = note.getFullName()
    if (flatToSharpAliases.hasOwnProperty(noteFullName)) {
      let newNote = flatToSharpAliases[noteFullName].duplicate()

      newNote.setPitch(new Pitch(note.getPitch().getValue()))

      /* if note was a C, we brought it up so inc the pitch */
      if (note._isC()) newNote.decPitch()

      return newNote
    }
  }

  static findDoubleSharpAlias(note) {
    let noteFullName = note.getFullName()
    if (doubleSharpAliases.hasOwnProperty(noteFullName)) {
      let newNote = doubleSharpAliases[noteFullName].duplicate()

      newNote.setPitch(new Pitch(note.getPitch().getValue()))

      /* if note was a C, we brought it up so inc the pitch */
      if (note._isC()) newNote.incPitch()

      return newNote
    }
  }
}

module.exports = NoteAlias
