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
const notesText = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

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
   */
  constructor (params) {
    /**
     * @property {string} name Name of the note (ie: A, B, C, etc.)
     * @property {number} pitch Scientific pitch of the note (ie: 4), by defaults it's set to false
     * @property {string} accidental Accidental of the note (optional)
     */
    this.name = (params && params.name && Note.validateName(params.name)) ? params.name : 'C'
    this.pitch = (params && params.sciPitch) ? new Pitch(params.sciPitch) : new Pitch()
    if (params && params.accidental) {
      if (params.accidental instanceof Accidental) this.accidental = params.accidental
      else this.accidental = new Accidental(params.accidental)
    } else this.accidental = new Accidental
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

  getPitch() {
    return this.pitch
  }

  setPitch(pitch) {
    this.pitch = pitch
  }

  setAccidental(accidental) {
    this.accidental = accidental
  }

  getText() {
    return notesText[notes.indexOf(this.getName())]
  }

  getFullText() {
    return Note.getFullText(this)
  }

  getFullName() {
    return Note.getFullName(this)
  }

  getFullNameWithPitch() {
    return Note.getFullNameWithPitch(this)
  }

  duplicate() {
    return new Note({
      name: this.name,
      sciPitch: this.pitch.getValue(),
      accidental: this.accidental.getName()
    })
  }

  incPitch() {
    this.pitch.next()
  }

  decPitch() {
    this.pitch.previous()
  }

  /**
   * Tests if the note has an accidental
   */
  hasAccidental() {
    return Accidental.isAccidental(this.accidental)
  }

  sharpenTo(semitones, addAccidental, prevNote) {
    // console.log('sharpening to', semitones, addAccidental)
    while (semitones > 0) {
      /* check to change note only for last occurence */
      this.sharpen(addAccidental, prevNote)
      semitones--
    }
    return
  }

  toOctaveUp() {
    this.incPitch()
  }

  toOctaveDown() {
    this.decPitch()
  }

  /**
   * Sharpen note
   */
  sharpen(addAccidental, prevNote) {
    // console.log('sharpening', this.getFullName())
    if (this.hasAccidental()) {
      this._sharpenWithAccidental(addAccidental, prevNote)
    } else {
      /* logic here, if note is a B or E, push it to the next note not passing by accidental -> to change if note is in scale */
      if (this.isBorE() && !addAccidental) {
        this.setToNextNote()
      } else {
        this.accidental.setToSharp()
      }
    }
    // console.log('sharpened', this.getFullName())
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
    // console.log('flattening', this.getFullName())
    if (this.hasAccidental()) {
      this._flattenWithAccidental(addAccidental, prevNote)
    } else {
      /* logic here, if note is a C or F, push it to the previous note */
      if (this.isCorF() && !addAccidental) {
        this.setToPreviousNote()
      } else {
        this.accidental.setToFlat()
      }
    }
    // console.log('flattened', this.getFullName())
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
    // console.log('sharpening with accidental')
    /* if it already has an accidental */
    if (Accidental.isSharp(this.accidental)) {
      if (!addAccidental) {
        /* remove accidental and skip to next note */
        if (!this.isBorE()) {
          this.removeAccidental()
        }
        this.setToNextNote()
      } else {
        /* add accidental */
        this.accidental.setToDoubleSharp()
      }
    } else if (this.accidental.isFlat()) {
      /* remove flat accidental */
      this.removeAccidental()
    } else if (this.accidental.isDoubleFlat()) {
      /* if it has a double flat sharpen it by setting it to flat only */
      this.accidental.setToFlat()
    } else if (this.accidental.isDoubleSharp()) {
      /* if it has already a double sharp set it to next note and add a sharp to it, take care of the double sharps keeping for E and B */
      if (!this.isBorE()) {
        this.accidental.setToSharp()
      }
      this.setToNextNote()
    }
  }

  _flattenWithAccidental(addAccidental, prevNote) {
    /* if it already has an accidental */
    if (Accidental.isFlat(this.accidental)) {
      if (!addAccidental) {
        /* remove accidental and skip to next note */
        if (!this.isCorF()) {
          this.removeAccidental()
        }
        this.setToPreviousNote()
      } else {
        /* add accidental */
        this.accidental.setToDoubleFlat()
      }
    } else if (this.accidental.isSharp()) {
      /* remove flat accidental */
      this.removeAccidental()
    } else if (this.accidental.isDoubleSharp()) {
      /* if it has a double flat sharpen it by setting it to flat only */
      this.accidental.setToSharp()
    } else if (this.accidental.isDoubleFlat()) {
      /* if it has already a double sharp set it to previous note and add a flat to it take care of the double sharps keeping for C and F  */
      if (!this.isCorF()) {
        this.accidental.setToFlat()
      }
      this.setToPreviousNote()
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
  isBorE() {
    return this._isB() || this._isE()
  }

  /* check if note is C or F */
  isCorF() {
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
           note1.pitch.getValue() === note2.pitch.getValue() ? true : false
  }

  static equalsAccidental(note1, note2) {
    /* issue here on import package but on in tests /!\ */
    return note1 instanceof Note &&
           note2 instanceof Note &&
           note1.accidental.getName() === note2.accidental.getName() ? true : false
  }

  static equals(note1, note2) {
    return Note.equalsName(note1, note2) &&
           Note.equalsPitch(note1, note2) &&
           Note.equalsAccidental(note1, note2) ? true : false
  }

  static getFullText(note) {
    return note.getText() + note.getAccidental().getText()
  }

  static getFullName(note) {
    return note.getName() + note.getAccidental().getName()
  }

  static getFullNameWithPitch(note) {
    return note.getName() + note.getAccidental().getName() + note.getPitch().getValue()
  }

  static getRandomNote() {
    return new Note({
      name: notes[Math.floor(Math.random() * notes.length)]
    })
  }

  static getRandomNoteWithAccidental() {
    let note = Note.getRandomNote()
    let accidental = Accidental.getRandomSimpleAccidental()

    if (note.isBorE() && accidental.isSharp()) note.sharpen()
    else if (note.isCorF() && accidental.isFlat()) note.flatten()
    else note.setAccidental(accidental)

    return note
  }
}

module.exports = Note
