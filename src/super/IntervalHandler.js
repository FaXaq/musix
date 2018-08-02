const Interval = require('../class/Interval')
const Note = require('../class/Note')
const NoteAlias = require('../class/NoteAlias')

module.exports = class IntervalHandler {
  constructor() {  }
  // assume that what is in this.intervals is a list of valid interval names
  _populateIntervals() {
    // if a list of intervals has already been provided
    // instanciate them
    let intervals = this.intervals
    this.intervals = []
    for (var i = 0; i < intervals.length; i++) {
      this.intervals.push(new Interval(intervals[i]))
    }
  }

  _populateParams(params) {
    for (var param in params[this.name]) {
      if (param !== 'intervals' || !this[param]) {
        this[param] = params[this.name][param]
      }
    }
  }

  /* TODO: have to refactor this part ----- */

  /* Find parent from interval */
  _findParent(interval, prevNote, defaultName) {
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
      newNote = this._populateParent(interval, prevNote, defaultName)
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
  _populateParent(interval, prevNote, defaultName) {
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
                                     this.intervals.length >= Note.getNotes().length)
  }

  /* populate notes */
  _populateNotes(defaultName) {
    this.notes = []
    for (var i = 0; i < this.intervals.length; i++) {
      let interval = this.intervals[i]
      // get previous note in scale only if it's not the root AND
      // if semitones between interval are ascending
      // otherwise get root note and build from here
      let prevNote =
        (i == 0 || (i != 0 && Interval.getSemitonesBetween(this.intervals[i - 1], this.intervals[i]) <= 0)) ?
          this.root : this.notes[i-1]
      // new note to manipulate
      let newNote = prevNote.duplicate()
      let parent;

      // if interval has parent AND
      // has a different name from the previous interval we have to get it */
      if (interval.hasParent() &&
          interval.getParent().getName() !== this.intervals[i - 1].getName()) {
             // store parent to sharpen or flatten from here
             newNote = this._findParent(interval.getParent(), prevNote, defaultName)
             // if interval is direct, parent has to be retrieve for aliases
             // purposes, see _getAliasIfNeeded
             if (interval.isDirect()) parent = newNote.duplicate()
      }

      newNote = this._applyIntervalChange(interval,
        newNote,
        prevNote,
        this.intervals.length >= Note.getNotes().length)

      // get alias if needed
      newNote = this._getAliasIfNeeded(newNote, prevNote, parent, i)

      this.notes.push(newNote)
    }
  }

  _getAliasIfNeeded(newNote, prevNote, parent, i, defaultName) {
    if (i > 0 &&
      this.name != defaultName) {
      if (Note.equalsName(newNote, parent)) {
        newNote = NoteAlias.findAlias(newNote, this.root)
      }
      if (Note.equalsName(newNote, prevNote)) {
        newNote = NoteAlias.findAlias(newNote, this.root)
      }
    }
    return newNote
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

  _hasInterval(interval) {
    return this.getIntervalPosition(interval) > -1 ? true : false
  }
}
