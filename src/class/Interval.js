const intervals = {
  "P1": {
    "semitones": 0,
    "direct": true,
    "name": "Perfect unison",
    "alt": "",
    "alt_short": "",
    "number": "root"
  },
  "d2": {
    "parent": "M2",
    "semitones": -2,
    "name": "Diminished second",
    "alt": "",
    "alt_short": "",
    "number": "second"
  },
  "m2": {
    "parent": "M2",
    "semitones": -1,
    "name": "Minor second",
    "alt": ["Semitone", "half tone", "half step"],
    "alt_short": "S",
    "number": "second"
  },
  "A1": {
    "parent": "P1",
    "semitones": 1,
    "name": "Augmented unison",
    "alt": ["Semitone", "half tone", "half step"],
    "alt_short": "S",
    "number": "root"
  },
  "M2": {
    "parent": "P1",
    "direct": true,
    "semitones": 2,
    "name": "Major second",
    "alt": ["Tone", "whole tone", "whole step"],
    "alt_short": "T",
    "number": "second"
  },
  "d3": {
    "parent": "M3",
    "semitones": -2,
    "name": "Diminished third",
    "alt": ["Tone", "whole tone", "whole step"],
    "alt_short": "T",
    "number": "third"
  },
  "m3": {
    "parent": "M3",
    "semitones": -1,
    "name": "Minor third",
    "alt": "",
    "alt-short": "",
    "number": "third"
  },
  "A2": {
    "parent": "M2",
    "semitones": 1,
    "name": "Augmented second",
    "alt": "",
    "alt-short": "",
    "number": "second"
  },
  "M3": {
    "parent": "M2",
    "direct": true,
    "semitones": 2,
    "name": "Major third",
    "alt": "",
    "alt-short": "",
    "number": "third"
  },
  "d4": {
    "parent": "P4",
    "semitones": -1,
    "name": "Diminished fourth",
    "alt": "",
    "alt-short": "",
    "number": "fourth"
  },
  "P4": {
    "parent": "M3",
    "direct": true,
    "semitones": 1,
    "name": "Perfect fourth",
    "alt": "",
    "alt-short": "",
    "number": "fourth"
  },
  "A3": {
    "parent": "M3",
    "semitones": 1,
    "name": "Augmented third",
    "alt": "",
    "alt-short": "",
    "number": "third"
  },
  "d5": {
    "parent": "P5",
    "semitones": -1,
    "name": "Diminished fifth",
    "alt": "Tritone",
    "alt-short": "TT",
    "number": "fifth"
  },
  "A4": {
    "parent": "P4",
    "semitones": 1,
    "name": "Augmented fourth",
    "alt": "Tritone",
    "alt-short": "TT",
    "number": "fourth"
  },
  "P5": {
    "parent": "P4",
    "direct": true,
    "semitones": 2,
    "name": "Perfect fifth",
    "alt": "",
    "alt-short": "",
    "number": "fifth"
  },
  "d6": {
    "parent": "M6",
    "semitones": -2,
    "name": "Diminished sixth",
    "alt": "",
    "alt-short": "",
    "number": "sixth"
  },
  "m6": {
    "parent": "M6",
    "semitones": -1,
    "name": "Minor sixth",
    "alt": "",
    "alt-short": "",
    "number": "sixth"
  },
  "A5": {
    "parent": "P5",
    "semitones": 1,
    "name": "Augmented fifth",
    "alt": "",
    "alt-short": "",
    "number": "fifth"
  },
  "M6": {
    "parent": "P5",
    "direct": true,
    "semitones": 2,
    "name": "Major sixth",
    "alt": "",
    "alt-short": "",
    "number": "sixth"
  },
  "d7": {
    "parent": "M7",
    "semitones": -2,
    "name": "Diminished seventh",
    "alt": "",
    "alt-short": "",
    "number": "seventh"
  },
  "m7": {
    "parent": "M7",
    "semitones": -1,
    "name": "Minor seventh",
    "alt": "",
    "alt-short": "",
    "number": "seventh"
  },
  "A6": {
    "parent": "M6",
    "semitones": 1,
    "name": "Augmented sixth",
    "alt": "",
    "alt-short": "",
    "number": "sixth"
  },
  "M7": {
    "parent": "M6",
    "direct": true,
    "semitones": 2,
    "name": "Major seventh",
    "alt": "",
    "alt-short": "",
    "number": "seventh"
  },
  "d8": {
    "parent": "P8",
    "semitones": -1,
    "name": "Diminished octave",
    "alt": "",
    "alt-short": "",
    "number": "eighth"
  },
  "P8": {
    "parent": "P1",
    "direct": true,
    "semitones": 12,
    "name": "Perfect octave",
    "alt": "",
    "alt-short": "",
    "number": "eighth"
  },
  "A7": {
    "parent": "M7",
    "semitones": 1,
    "name": "Augmented seventh",
    "alt": "",
    "alt-short": "",
    "number": "seventh"
  },
  "d9": {
    "parent": "M9",
    "semitones": -2,
    "name": "Diminished ninth",
    "alt": "",
    "alt-short": "",
    "number": "ninth"
  },
  "m9": {
    "parent": "M9",
    "semitones": -1,
    "name": "Minor ninth",
    "alt": "",
    "alt-short": "",
    "number": "ninth"
  },
  "A8": {
    "parent": "P8",
    "semitones": 1,
    "name": "Augmented octave",
    "alt": "",
    "alt-short": "",
    "number": "eighth"
  },
  "M9": {
    "parent": "P8",
    "direct": true,
    "semitones": 2,
    "name": "Minor ninth",
    "alt": "",
    "alt-short": "",
    "number": "ninth"
  },
  "d10": {
    "parent": "M10",
    "semitones": -2,
    "name": "Diminished tenth",
    "alt": "",
    "alt-short": "",
    "number": "tenth"
  },
  "m10": {
    "parent": "M10",
    "semitones": -1,
    "name": "Minor tenth",
    "alt": "",
    "alt-short": "",
    "number": "tenth"
  },
  "A9": {
    "parent": "M9",
    "semitones": 1,
    "name": "Augmented ninth",
    "alt": "",
    "alt-short": "",
    "number": "ninth"
  },
  "M10": {
    "parent": "M9",
    "direct": true,
    "semitones": 2,
    "name": "Major tenth",
    "alt": "",
    "alt-short": "",
    "number": "tenth"
  },
  "d11": {
    "parent": "P11",
    "semitones": -1,
    "name": "Diminished eleventh",
    "alt": "",
    "alt-short": "",
    "number": "eleventh"
  },
  "P11": {
    "parent": "M10",
    "direct": true,
    "semitones": 1,
    "name": "Perfect eleventh",
    "alt": "",
    "alt-short": "",
    "number": "eleventh"
  },
  "d12": {
    "parent": "P12",
    "semitones": -1,
    "name": "Diminished eleventh",
    "alt": "",
    "alt-short": "",
    "number": "twelfth"
  },
  "A11": {
    "parent": "P11",
    "semitones": 1,
    "name": "Augmented eleventh",
    "alt": "",
    "alt-short": "",
    "number": "eleventh"
  },
  "P12": {
    "parent": "P11",
    "direct": true,
    "semitones": 2,
    "name": "Perfect eleventh",
    "alt": "Tritave",
    "alt-short": "",
    "number": "twelfth"
  },
  "d13": {
    "parent": "M13",
    "semitones": -2,
    "name": "Diminished thirteen",
    "alt": "",
    "alt-short": "",
    "number": "thirteenth"
  },
  "m13": {
    "parent": "M13",
    "semitones": -1,
    "name": "Minor thirteen",
    "alt": "",
    "alt-short": "",
    "number": "thirteenth"
  },
  "A12": {
    "parent": "P12",
    "semitones": 1,
    "name": "Augmented twelfth",
    "alt": "",
    "alt-short": "",
    "number": "twelfth"
  },
  "M13": {
    "parent": "P12",
    "direct": true,
    "semitones": 2,
    "name": "Major thirteenth",
    "alt": "",
    "alt-short": "",
    "number": "thirteenth"
  },
  "d14": {
    "parent": "M14",
    "semitones": -2,
    "name": "Diminished fourteenth",
    "alt": "",
    "alt-short": "",
    "number": "fourteenth"
  },
  "m14": {
    "parent": "M14",
    "semitones": -1,
    "name": "Minor fourteenth",
    "alt": "",
    "alt-short": "",
    "number": "fourteenth"
  },
  "A13": {
    "parent": "M13",
    "semitones": 1,
    "name": "Augmented thirteen",
    "alt": "",
    "alt-short": "",
    "number": "thirteenth"
  },
  "M14": {
    "parent": "M13",
    "direct": true,
    "semitones": 2,
    "name": "Major fourteenth",
    "alt": "",
    "alt-short": "",
    "number": "fourteenth"
  },
  "d15": {
    "parent": "P15",
    "semitones": -1,
    "name": "Diminished fifteenth",
    "alt": "",
    "alt-short": "",
    "number": "fifteenth"
  },
  "P15": {
    "parent": "M14",
    "direct": true,
    "semitones": 1,
    "name": "Perfect fifteenth",
    "alt": "Double octave",
    "alt-short": "",
    "number": "fifteenth"
  },
  "A14": {
    "parent": "M14",
    "semitones": 1,
    "name": "Augmented fourteenth",
    "alt": "",
    "alt-short": "",
    "number": "fourteenth"
  },
  "A15": {
    "parent": "P15",
    "semitones": 1,
    "name": "Augmented fifteenth",
    "alt": "",
    "alt-short": "",
    "number": "fifteenth"
  },
}

const defaultInterval = Object.keys(intervals)[0];

class Interval {
  constructor(name) {
    if (!intervals.hasOwnProperty(name)) name = defaultInterval;

    this.name = name
    for (var prop in intervals[name]) {
      this[prop] = intervals[name][prop]
    }
  }

  // getters & setters

  set semitones(semitones) {
    this._semitones = semitones
  }

  get semitones() {
    return this._semitones
  }

  getParent() {
    return new Interval(this.parent)
  }

  getName() {
    return this.name
  }

  getNumber() {
    return this.number
  }

  hasParent() {
    if (this.parent) return true
    return false
  }

  isDirect() {
    return this.direct === true
  }

  getSemitonesFromUnison() {
    return Interval.getSemitonesFromUnison(this)
  }

  static getIntervals() {
    let instanciatedIntervals = {}
    Object.entries(intervals).forEach(
      ([key, value]) => instanciatedIntervals[key] = new Interval(key)
    );
    return instanciatedIntervals;
  }

  static getSemitonesToNextNote(note1, note2) {

  }

  static getSemitonesFromUnison(interval) {
    if (!(interval instanceof Interval)) return null

    if (interval.hasParent()) {
      return interval.semitones + Interval.getSemitonesFromUnison(interval.getParent())
    }

    return interval.semitones
  }

  static getSemitonesBetween(interval1, interval2) {
    return Interval.getSemitonesFromUnison(interval2) - Interval.getSemitonesFromUnison(interval1)
  }
}

module.exports = Interval
