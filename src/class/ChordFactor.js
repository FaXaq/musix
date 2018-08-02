const factors = []
const Interval = require("./Interval.js")
const intervals = Interval.getIntervals()

class ChordFactor {
  constructor(interval) {
    this.name = interval.getNumber()
  }

  // getters & setters
  set name(name) {
    this._name = name
  }

  get name() {
    return this._name
  }

  static getFactors() {
    return factors
  }
}

for (var i in intervals) {
  if (intervals[i].isDirect()) {
    factors.push(new ChordFactor(intervals[i]))
  }
}

module.exports = ChordFactor
