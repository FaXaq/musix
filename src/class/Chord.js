const Interval = require('./Interval.js')
const Note = require('./Note.js')
const IntervalHandler = require('../super/IntervalHandler.js')

const chords = {
  "major": {
    "minAlt": "M",
    "text": "Major",
    "alt": "Major triad",
    "intervals": ["P1", "M3", "P5"]
  },
  "minor": {
    "minAlt": "m",
    "text": "Minor",
    "alt": "Minor triad",
    "intervals": ["P1", "m3", "P5"]
  }
}

const defaultChord = 'major'

// 3 ways to create a chord
// Either create it from a scale, a list of intervals, or a list of notes
module.exports = class Chord extends IntervalHandler {
  constructor(params) {
      super(params)
      /* Initialize chords name */
      if (!params || !params.name || !chords.hasOwnProperty(params.name)) {
        this.name = defaultChord
      } else {
        this.name = params.name
      }

      /* Initialize scale key */
      if (!params || !params.root || !(params.root instanceof Note)) {
        this.root = new Note({ name: 'C' })
      } else {
        this.root = params.root
      }

      // initialize custom notes
      if (params && params.notes && (params.notes instanceof Array)) {
        this.notes = params.notes
      }

      // Initialize custom intervals
      if (params && params.intervals && (params.intervals instanceof Array)) {
        this.intervals = params.intervals
      }

      // initialize custom scale
      if (params && params.scale && (params.scale instanceof Object)) {
        this.scale = params.scale
      }

      this._populateParams(chords)
      this._populateIntervals()
      if (!this.notes && this.intervals) this._populateNotesFromIntervals()
      else (!this.notes && this.scale) this._populateNotesFromScale()

      // default populate notes (based on the scale algorithm)
      if (!this.notes) this._populateNotes(defaultChord)
  }

  // getters & setters
  set name(name) {
    this._name = name
  }

  get name() {
    return this._name
  }
}
