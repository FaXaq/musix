/**
 * Pitch class, see './Pitch.js'
 */
const Pitch = require('./Pitch')
/**
 * Accidental class, see './Accidental.js'
 */
const Accidental = require('./Accidental')
/**
 * default notes, has to be in that order : A, B, C, D, E, F, G, you can change thoses names to : La, Si, Do, Ré, Mi, Fa, Sol for instance but keep the order !
 */
const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

/**
 * This is the Note class, it contains an API to handle notes (sharpen, flatten, check consistency, etc.)
 * @public
 */
class Note {

  /**
   * This constructor validates the note, pitch and accidental if provided
   * @param {string} note The note name
   * @param {number} sciPitch The scientific pitch for the note, default is 4
   * @param {string} accidental The note accidental (if needed)
   * @param {string} accidental The note accidental (if needed)
   */
  constructor (name, sciPitch, accidental) {
    /**
     * @property {string} name Name of the note (ie: A, B, C, etc.)
     * @property {number} pitch Scientific pitch of the note (ie: 4), by defaults it's set to false
     * @property {string} accidental Accidental of the note (optional)
     */
    this.name = Note.validateName(name) ? name : 'C'
    this.pitch = new Pitch(sciPitch)
    this.accidental = accidental instanceof Accidental ?
                      accidental : new Accidental(accidental);
  }

  /**
   * Getters & Setters
   */

  getName() {
    return this.name
  }

  getAccidental() {
    return this.accidental
  }

  duplicate() {
    return new Note(this.name,
                    this.pitch.getValue(),
                    this.accidental.getName())
  }

  /**
   * Tests if the note has an accidental
   */
  hasAccidental() {
    return Accidental.isAccidental(this.accidental)
  }

  sharpenTo(semitones, addAccidental, prevNote) {
    console.log('sharpening to', semitones, addAccidental)
    while (semitones > 0) {
      /* check to change note only for last occurence */
      this.sharpen(addAccidental, prevNote)
      semitones--
    }

    console.log('sharpened to', this)
    return
  }

  /**
   * Sharpen note
   */
  sharpen(addAccidental, prevNote) {
    console.log('-----')
    console.log('sharpening')
    /* console.log(this)
     * console.log(addAccidental)
     * console.log('-----') */
    if (this.hasAccidental()) {
      this._sharpenWithAccidental(addAccidental, prevNote)
    } else {
      /* logic here, if note is a B or E, push it to the next note not passing by accidental -> to change if note is in scale */
      if ((this._isBorE() && !addAccidental) || Note.equalsName(prevNote, this)) {
        this.setToNextNote()
        this.removeAccidental()
      } else {
        this.accidental.setToSharp()
      }
    }
  }

  flattenTo(semitones, addAccidental, prevNote) {
    while (semitones < 0) {
      this.flatten(addAccidental, prevNote)
      semitones++
    }
    return
  }

  /**
   * Flatten note
   */
  flatten(addAccidental, prevNote) {
    if (this.hasAccidental()) {
      this._flattenWithAccidental(addAccidental, prevNote)
    } else {
      /* logic here, if note is a C or F, push it to the previous note */
      if ((this._isCorF() && !addAccidental) || Note.equalsName(prevNote, this)) {
        this.setToPreviousNote()
        this.removeAccidental()
      } else {
        this.accidental.setToFlat()
      }
    }
  }

  setToNextNote() {
    if (notes.indexOf(this.name) + 1 == 2) this.pitch.next()
    this.name = notes[(notes.indexOf(this.name) + 1) % notes.length]
  }

  setToPreviousNote() {
    if (notes.indexOf(this.name) - 1 == 1) this.pitch.previous()
    this.name = notes[((notes.indexOf(this.name) - 1) + notes.length) % notes.length]
  }

  removeAccidental() {
    this.accidental = new Accidental()
  }

  /**
   * Sharpen Note with already an accidental
   */
  _sharpenWithAccidental(addAccidental, prevNote) {
    /* if it already has an accidental */
    if (Accidental.isSharp(this.accidental)) {
      if (!addAccidental || Note.equals(prevNote, this)) {
        /* remove accidental and skip to next note */
        this.setToNextNote()
        if (!prevNote._isBorE()) this.removeAccidental()
      } else {
        /* add accidental */
        this.accidental.setToDoubleSharp()
      }
    } else if (this.accidental.isFlat()) {
      /* remove flat accidental */
      this.removeAccidental()
    } else if (this.accidental.isDoubleFlat()) {
      /* if it has a double flat sharpen it by setting it to flat only */
      this.setToFlat()
    } else if (this.accidental.isDoubleSharp()) {
      /* if it has already a double sharp (not likely to happen) set it to next note and add a sharp to it */
      this.setToNextNote()
      this.removeAccidental()
      this.sharpen(addAccidental)
    }
  }

  _flattenWithAccidental(addAccidental, prevNote) {
    /* if it already has an accidental */
    if (Accidental.isFlat(this.accidental)) {
      if (!addAccidental) {
        /* remove accidental and skip to next note */
        this.setToPreviousNote()
        this.removeAccidental()
      } else {
        /* add accidental */
        this.accidental.setToDoubleFlat()
      }
    } else if (Accidental.isSharp(this.accidental)) {
      /* remove flat accidental */
      this.removeAccidental()
    } else if (Accidental.isDoubleSharp()) {
      /* if it has a double flat sharpen it by setting it to flat only */
      this.setToSharp()
    } else if (Accidental.isDoubleFlat()) {
      /* if it has already a double sharp (not likely to happen) set it to next note and add a sharp to it */
      this.setToPreviousNote()
      this.removeAccidental()
      this.flatten(addAccidental)
    }
  }

  _isA() {
    return notes.indexOf(this.name) === 0
  }

  _isB() {
    return notes.indexOf(this.name) === 1
  }

  _isC() {
    return notes.indexOf(this.name) === 2
  }

  _isD() {
    return notes.indexOf(this.name) === 3
  }

  _isE() {
    return notes.indexOf(this.name) === 4
  }

  _isF() {
    return notes.indexOf(this.name) === 5
  }

  _isG() {
    return notes.indexOf(this.name) === 6
  }

  /* check if note is B or E */
  _isBorE() {
    return this._isB() || this._isE()
  }

  /* check if note is C or F */
  _isCorF() {
    return this._isC() || this._isF()
  }


  /**
   * Static Methods
   */

  /**
   * Validates Note name
   * @param {string} note Note name (ie: A)
   */
  static validateName(note) {
    if (notes.indexOf(note) > -1) return true
    return false
  }

  /**
   * Tests if the note is instance of this class
   * @param {object} note instance of Note
   */
  static isNote(note) {
    if (note instanceof Note) return true
    return false
  }

  /**
   * Tests if note has accidental
   * @param {object} note instance of Note
   */
  static hasAccidental(note) {
    if (this.isNote(note)) {
      return this.accidental !== undefined ? true : false
    }

    return new Error('Provided wrong type of object', note)
  }

  static getNotes() {
    return notes;
  }

  static equalsName(note1, note2) {

    return note1 instanceof Note &&
           note2 instanceof Note &&
           note1.name === note2.name ? true : false
  }

  static equalsPitch(note1, note2) {
    return note1 instanceof Note &&
           note2 instanceof Note &&
           note1.pitch.getValue === note2.pitch.getValue ? true : false
  }

  static equalsAccidental(note1, note2) {
    return note1 instanceof Note &&
           note2 instanceof Note &&
           note1.accidental.getName === note2.accidental.getName ? true : false
  }

  static equals(note1, note2) {
    return Note.equalsName(note1, note2) &&
           Note.equalsPitch(note1, note2) &&
           Note.equalsAccidental(note1, note2) ? true : false
  }

  static getFullName(note) {
    return note.getName() + note.getAccidental().getName()
  }
}

module.exports = Note
