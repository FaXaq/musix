const Note = require('./Note')
const sharpToFlatAliases = {
  "As": new Note("B", 4, "b"),
  "Bs": new Note("C", 4),
  "Cs": new Note("D", 4, "b"),
  "Ds": new Note("E", 4 "b"),
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
  static findAliasWithKey(note, key) {
    console.log('y')
    if (note.getAccidental().isSharp() && key.getAccidental.isFlat()) {
      /* find flat alias */
      return NoteAlias.findFlatAlias(note)
    } else if (note.getAccidental().isFlat() && key.getAccidental().isSharp()) {
      return NoteAlias.findSharpAlias(note)
    } else if (note.getAccidental.isDoubleSharp()) {
      return NoteAlias.findDoubleSharpAlias(note)
    } else if (note.getAccidental.isDoubleFlat()) {
      return NoteAlias.findDoubleFlatAlias(note)
    }

    return note
  }

  static findFlatAlias(note) {
    let noteFullName = note.getFullName()
    if (sharpToFlatAliases.hasOwnProperty(noteFullName)) {
      return sharpToFlatAliases[noteFullName].duplicate()
    }
  }

  static findDoubleFlatAlias(note) {
    let noteFullName = note.getFullName()
    if (doubleFlatAliases.hasOwnProperty(noteFullName)) {
      return doubleFlatAliases[noteFullName].duplicate()
    }
  }

  static findSharpAlias(note) {
    let noteFullName = note.getFullName()
    if (flatToSharpAliases.hasOwnProperty(noteFullName)) {
      return flatToSharpAliases[noteFullName].duplicate()
    }
  }

  static findDoubleSharpAlias(note) {
    console.log('finding double sharp')
    let noteFullName = note.getFullName()
    if (doubleSharpAliases.hasOwnProperty(noteFullName)) {
      return doubleSharpAliases[noteFullName].duplicate()
    }
  }
}

module.exports = NoteAlias
