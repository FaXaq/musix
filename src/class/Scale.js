const scales = {
  "chromatic": {
    "intervals": ["P1","A1","M2","A2","M3","P4","A4","P5","A5","M6","A6","M7"],
    "text": "Chromatic",
  },
  "major": {
    "intervals": ["P1","M2","M3","P4","P5","M6","M7"],
    "minAlt": "maj",
    "text": "Major",
  },
  "major-pentatonic": {
    "intervals": ["P1","M2","M3","P5","M6"],
    "text": "Major Pentatonic"
  },
  "minor": {
    "intervals": ["P1","M2","m3","P4","P5","m6","m7"],
    "alt": "natural minor",
    "text": "Minor",
  },
  "blues": {
    "intervals": ["P1","M2","M3","d5","P5","M6"],
    "text": "Blues"
  },
  "minor-pentatonic": {
    "intervals": ["P1","m3","P4","P5","m7"],
    "text": "Minor Pentatonic"
  },
}
const Interval = require('./Interval')
const Note = require('./Note')
const NoteAlias = require('./NoteAlias')
const Chord = require('./Chord')
const IntervalHandler = require('../super/IntervalHandler.js')
const defaultScale = 'chromatic'

module.exports = class Scale extends IntervalHandler {
  /**
   * @param {object} params : Properties available (name, key)
   */
  constructor(params) {

    super(params)
    /* Initialize scale name */
    if (!params || !params.name || !scales.hasOwnProperty(params.name)) {
      this.name = defaultScale
    } else {
      this.name = params.name
    }

    /* Initialize scale key */
    if (!params || !params.root || !(params.root instanceof Note)) {
      this.root = new Note({ name: 'C' })
    } else {
      this.root = params.root
    }

    // Initialize custom intervals
    if (params && params.intervals && (params.intervals instanceof Array)) {
      this.intervals = params.intervals
    }

    this._populateParams(scales)
    this._populateIntervals()
    this._populateNotes(defaultScale)
  }

  getChords() {
    let notesNumber = this.notes.length;
    for (var i = 0; i < notesNumber; i++) {
      let third = i + 2,
          fifth = i + 4,
          thirdIndex = third % notesNumber,
          fifthIndex = fifth % notesNumber,
          octaveThird = Math.floor(third / notesNumber),
          octaveFifth = Math.floor(fifth / notesNumber)
      console.log(new Chord({
        root: this.notes[i].duplicate(),
        notes: [
          this.notes[i].duplicate(),
          this.notes[thirdIndex].duplicate().toOctaveUp(octaveThird),
          this.notes[fifthIndex].duplicate().toOctaveUp(octaveFifth)
        ]
      }))
    }
  }

  getText() {
    return this.text
  }

  getAlt() {
    return this.alt ? this.alt : ''
  }

  getMinAlt() {
    return this.minAlt ? this.minAlt : ''
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

  static getScalesDefinitions() {
    return scales
  }
}
