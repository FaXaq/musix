/* default list of accidentals, used to check if string is accidental or not, keep this order and every occurence of data has to be of 5 : sharp, double sharp, flat, double flat, natural */
const accidentals = ['s', 'ss', 'b', 'bb', 'n', '♯', '𝄪', '♭', '𝄫', '♮']
const sharp = 's'
const doubleSharp = 'ss'
const flat = 'b'
const doubleFlat = 'bb'
const natural = 'n'

module.exports = class Accidental {

  constructor(name) {
    this.name = Accidental.validate(name)
  }

  setToSharp() {
    this.name = Accidental.getSharp()
  }

  setToDoubleSharp() {
    this.name = Accidental.getDoubleSharp()
  }

  setToFlat() {
    this.name = Accidental.getFlat()
  }

  setToDoubleFlat() {
    this.name = Accidental.getDoubleFlat()
  }

  setToNatural() {
    this.name = Accidental.getNatural()
  }

  getName() {
    return this.name
  }

  isSharp() {
    return Accidental.isSharp(this)
  }

  isDoubleSharp() {
    return Accidental.isDoubleSharp(this)
  }

  isFlat() {
    return Accidental.isFlat(this)
  }

  isDoubleFlat() {
    return Accidental.isDoubleFlat(this)
  }

  isNatural() {
    return Accidental.isNatural(this)
  }

  static validate(accidental) {
    if (accidentals.includes(accidental)) return accidental
    else return ''
  }

  /**
   * check if accidental provided is a sharp
   * @param {Accidental} accidental string provided to test
   */
  static isSharp(accidental) {
    return (accidentals.indexOf(accidental.name) % 5 === 0)
  }

  /**
   * check if accidental provided is a double sharp
   * @param {Accidental} accidental string provided to test
   */
  static isDoubleSharp(accidental) {
    return (accidentals.indexOf(accidental.name) % 5 === 1)
  }

  /**
   * check if accidental provided is a flat
   * @param {Accidental} accidental string provided to test
   */
  static isFlat(accidental) {
    return (accidentals.indexOf(accidental.name) % 5 === 2)
  }

  /**
   * check if accidental provided is a double flat
   * @param {Accidental} accidental string provided to test
   */
  static isDoubleFlat(accidental) {
    return (accidentals.indexOf(accidental.name) % 5 === 3)
  }

  /**
   * check if accidental provided is a natural
   * @param {Accidental} accidental string provided to test
   */
  static isDoubleFlat(accidental) {
    return (accidentals.indexOf(accidental.name) % 5 === 4)
  }

  static getSharp() {
    return sharp
  }

  static getDoubleSharp() {
    return doubleSharp
  }

  static getFlat() {
    return flat
  }

  static getDoubleFlat() {
    return doubleFlat
  }

  static getNatural() {
    return natural
  }

  static isAccidental(accidental) {
    if (accidental instanceof Accidental && accidentals.includes(accidental.name)) return true
    return false
  }
}
