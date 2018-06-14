const Note = require('./src/class/Note.js')
const Interval = require('./src/class/Interval.js')
const Accidental = require('./src/class/Accidental.js')
const Scale = require('./src/class/Scale.js')
const Pitch = require('./src/class/Pitch.js')

let n = new Scale({
  name: 'major',
  key: new Note('C', 4)
})

console.log(JSON.stringify(n))

exports.Note = Note;
