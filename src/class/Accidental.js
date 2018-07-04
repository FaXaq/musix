/* default list of accidentals, used to check if string is accidental or not, keep this order and every occurence of data has to be of 5 : sharp, double sharp, flat, double flat, natural */
const sharp = 's'
const doubleSharp = 'ss'
const flat = 'b'
const doubleFlat = 'bb'
const natural = 'n'
const accidentals = [
  sharp,
  doubleSharp,
  flat,
  doubleFlat,
  natural
]
const accidentalsText = [
  '♯',
  '𝄪',
  '♭',
  '𝄫',
  '♮'
]
const accidentalsABC = [
  '^',
  '^^',
  '_',
  '__',
  '='
]

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

  getABCNotation() {
    return Accidental.ABCNotation(this)
  }

  getText() {
    return accidentalsText[accidentals.indexOf(this.getName())] || ''
  }

  isAccidental() {
    return Accidental.isAccidental(this)
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
  static isNatural(accidental) {
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

  static getAccidentals() {
    return accidentals;
  }

  static getRandomAccidental() {
    return new Accidental(accidentals[Math.floor(Math.random()*accidentals.length)])
  }

  static getRandomSimpleAccidental() {
    let simpleAccidentals = [
      '',
      Accidental.getSharp(),
      Accidental.getFlat()
    ]
    return new Accidental(simpleAccidentals[Math.floor(Math.random()*simpleAccidentals.length)])
  }

  static ABCNotation(accidental) {
    if (accidental.isAccidental())
      return accidentalsABC[accidentals.indexOf(accidental.getName())]
    else return
  }

  static isAccidental(accidental) {
    if (accidental instanceof Accidental && accidentals.includes(accidental.name)) return true
    return false
  }
}
