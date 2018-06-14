const scales = {
  "chromatic": {
    "intervals": ["P1","A1","M2","A2","M3","P4","A4","P5","A5","M6","A6","M7"]
  },
  "major": {
    "intervals": ["P1","M2","M3","P4","P5","M6","M7"]
  },
  "major-pentatonic": {
    "intervals": ["P1","M2","M3","P5","M6"]
  },
  "minor": {
    "intervals": ["P1","M2","m3","P4","P5","m6","m7"],
    "alt": "natural minor"
  },
  "blues": {
    "intervals": ["P1","M2","M3","d5","P5","M6"]
  },
  "minor-pentatonic": {
    "intervals": ["P1","m3","P4","P5","m7"]
  },
}
const Interval = require('./Interval')
const Note = require('./Note')
const defaultScale = 'chromatic'

module.exports = class Scale {
  /**
   * @param {object} params : Properties available (name, key)
   */
  constructor(params) {
    /* Initialize scale name */
    if (!params.name || !scales.hasOwnProperty(params.name)) {
      this.name = defaultScale
    } else {
      this.name = params.name
    }

    /* Initialize scale key */
    if (!params.key || !(params.key instanceof Note)) {
      this.key = new Note('C')
    } else {
      this.key = params.key
    }

    this._populateIntervals()
    this._populateNotes()
  }

  /**
   * check if note provided as param is already in scale
   */
  containsNote(note, count) {
    /* number of occurence in scale */
    let notesInScale = 0

    /* has to be above it */
    if (!count) count = 1

    if(!Note.isNote(note)) return false
    else {
      for (var i = 0; i < this.notes.length; i++) {
        if (Note.equalsName(note, this.notes[i]) &&
            Note.equalsAccidental(note, this.notes[i])) notesInScale++
      }
    }

    return notesInScale >= count ? true : false
  }

  _populateIntervals() {
    this.intervals = [];
    for (var i = 0; i < scales[this.name].intervals.length; i++) {
      this.intervals.push(new Interval(scales[this.name].intervals[i]))
    }
  }

  _findParent(interval, prevNote) {
    let newNote = prevNote.duplicate()

    if (interval.semitones > 0) {
      newNote.sharpenTo(interval.semitones, true, prevNote)
    } else if (interval.semitones < 0) {
      newNote.flattenTo(interval.semitones, true, prevNote)
    }

    return newNote
  }

  _populateNotes() {
    this.notes = []
    for (var i = 0; i < this.intervals.length; i++) {
      let interval = this.intervals[i]
      let prevNote = (i == 0) ? this.key : this.notes[i-1]
      let newNote = prevNote.duplicate()
      console.log('populating interval', interval)

      if (interval.hasParent() && !interval.isDirect()) {
        newNote = this._findParent(interval.getParent(), prevNote)
      }

      if (interval.semitones > 0) {
        newNote.sharpenTo(interval.semitones, true, prevNote)
      } else if (interval.semitones < 0) {
        newNote.flattenTo(interval.semitones, true, prevNote)
      }

      this.notes.push(newNote)
    }
  }
}
