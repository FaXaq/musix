const Note = require('./src/class/Note.js')
const Interval = require('./src/class/Interval.js')
const Accidental = require('./src/class/Accidental.js')
const Scale = require('./src/class/Scale.js')
const Pitch = require('./src/class/Pitch.js')
const NoteAlias = require('./src/class/NoteAlias.js')

class Musix {
  constructor() {
    this.Note = Note;
    this.Interval = Interval;
    this.Accidental = Accidental;
    this.Scale = Scale;
    this.Pitch = Pitch;
    this.NoteAlias = NoteAlias;
  }
}

module.exports = new Musix()
