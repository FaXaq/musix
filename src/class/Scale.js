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
const NoteAlias = require('./NoteAlias')
const defaultScale = 'chromatic'

module.exports = class Scale {
  /**
   * @param {object} params : Properties available (name, key)
   */
  constructor(params) {
    /* Initialize scale name */
    if (!params || !params.name || !scales.hasOwnProperty(params.name)) {
      this.name = defaultScale
    } else {
      this.name = params.name
    }

    /* Initialize scale key */
    if (!params || !params.key || !(params.key instanceof Note)) {
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

  getNoteFromInterval(interval) {
    return this.notes[this.getIntervalPosition(interval)].duplicate()
  }


  getIntervalPosition(interval) {
    for (var i = 0; i < this.intervals.length; i++) {
      if (interval.getName() === this.intervals[i].getName()) return i
    }
    return -1
  }

  _populateIntervals() {
    this.intervals = [];
    for (var i = 0; i < scales[this.name].intervals.length; i++) {
      this.intervals.push(new Interval(scales[this.name].intervals[i]))
    }
  }

  /* have to refactor this part ----- */

  /* Find parent from interval */
  _findParent(interval, prevNote) {
    /* check if it is in scale */
    let newNote
    /* if interval is already in the scale */
    if (this._hasInterval(interval)) {
      /* gather it */
      // console.log('has parent')
      newNote = this.getNoteFromInterval(interval)
    } else {
      /* else populate parent interval */
      // console.log('has to calculate it')
      newNote = this._populateParent(interval, prevNote)
    }

    // console.log('parent from interval', interval, "is", newNote)

    return newNote
  }

  _applyIntervalChange(interval, note, prevNote, addAccidentals) {
    if (interval.semitones > 0) {
      note.sharpenTo(interval.semitones, addAccidentals, prevNote)
    } else if (interval.semitones < 0) {
      note.flattenTo(interval.semitones, addAccidentals, prevNote)
    }
    return note
  }

  /* populate parent to find (minor, diminished or augmented) */
  _populateParent(interval, prevNote) {
    /* if it is already in the scale, find it and return it */
    if (this._hasInterval(interval)) {
      /* console.log('found interval', interval)
       * console.log('previous note is', prevNote)*/
      return this.getNoteFromInterval(interval)
    }

    prevNote = this._populateParent(interval.getParent(),
                                    prevNote)
    return this._applyIntervalChange(interval,
                                     prevNote.duplicate(),
                                     prevNote,
                                     this.intervals.length >= Note.getNotes().length && this.name !== defaultScale)
  }

  /* populate notes */
  _populateNotes() {
    this.notes = []
    for (var i = 0; i < this.intervals.length; i++) {
      let interval = this.intervals[i]
      let prevNote = (i == 0) ? this.key : this.notes[i-1]
      let newNote = prevNote.duplicate()

      /* if interval has parent or is not direct interval (Major or perfect) or has a different name from the previous interval we have to get it */
      if (interval.hasParent() &&
          (!interval.isDirect() ||
           interval.getParent().getName() !== this.intervals[i - 1].getName())) {
        newNote = this._findParent(interval.getParent(), prevNote)
      }

      newNote = this._applyIntervalChange(interval, newNote, prevNote, this.intervals.length >= Note.getNotes().length && this.name !== defaultScale)

      if (Note.equalsName(newNote, prevNote) &&
          i > 0 &&
          this.name != defaultScale) {
        newNote = NoteAlias.findAlias(newNote, this.key)
      }

      this.notes.push(newNote)
    }
  }

  /* end have to refactor this part */

  _hasInterval(interval) {
    return this.getIntervalPosition(interval) > -1 ? true : false
  }
}
