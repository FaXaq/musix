/**
 * This is the Pitch class.
 * Contains an API to check pitch, modify it, etc.
 * @public
 */
class Pitch {
  constructor(value) {
    this.value = Pitch.validateSci(value)
  }

  next() {
    this.value++
  }

  previous() {
    this.value--
  }

  getValue() {
    return this.value
  }

  static validateSci(pitch) {
    if (pitch === undefined) {
      return 4
    } else if (typeof pitch === "number" &&
               pitch >= 0) {
      return pitch
    }

    return new Error('Pitch is invalid', pitch)
  }
}

module.exports = Pitch;
