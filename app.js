const Note = require('./src/class/Note.js')
const Interval = require('./src/class/Interval.js')
const Accidental = require('./src/class/Accidental.js')
const Scale = require('./src/class/Scale.js')
const Pitch = require('./src/class/Pitch.js')

let n = new Scale({
  name: 'major',
  key: new Note('C', 4)
})

n = new Scale({
  name: 'major',
  key: new Note('G', 4, 's')
})

n = new Scale({
  name: 'minor',
  key: new Note('A', 4)
})

n = new Scale({
  name: 'major',
  key: new Note('D', 4, 'b')
})

n = new Scale({
  name: 'major',
  key: new Note('B', 4, 'b')
})

n = new Scale({
  name: 'major-pentatonic',
  key: new Note('B', 4, 'b')
})

n = new Scale({
  name: 'minor-pentatonic',
  key: new Note('B', 4)
})


exports.Note = Note;
