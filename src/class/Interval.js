const intervals = {
  "P1": {
    "semitones": 0,
    "name": "Perfect unison",
    "alt": "",
    "alt_short": ""
  },
  "d2": {
    "parent": "M2",
    "semitones": -2,
    "name": "Diminished second",
    "alt": "",
    "alt_short": ""
  },
  "m2": {
    "parent": "M2",
    "semitones": -1,
    "name": "Minor second",
    "alt": ["Semitone","half tone", "half step"],
    "alt_short": "S"},
  "A1": {
    "parent": "P1",
    "semitones": 1,
    "name": "Augmented unison",
    "alt": ["Semitone","half tone", "half step"],
    "alt_short": "S"
  },
  "M2": {
    "parent": "P1",
    "direct": true,
    "semitones": 2,
    "name": "Major second",
    "alt": ["Tone","whole tone", "whole step"],
    "alt_short": "T"
  },
  "d3": {
    "parent": "M3",
    "semitones": -2,
    "name": "Diminished third",
    "alt": ["Tone","whole tone", "whole step"],
    "alt_short": "T"
  },
  "m3": {
    "parent": "M3",
    "semitones": -1,
    "name": "Minor third",
    "alt": "",
    "alt-short": ""
  },
  "A2": {
    "parent": "M2",
    "semitones": 1,
    "name": "Augmented second",
    "alt": "",
    "alt-short": ""
  },
  "M3": {
    "parent": "M2",
    "direct": true,
    "semitones": 2,
    "name": "Major third",
    "alt": "",
    "alt-short": ""
  },
  "d4": {
    "parent": "P4",
    "semitones": -1,
    "name": "Diminished fourth",
    "alt": "",
    "alt-short": ""
  },
  "P4": {
    "parent": "M3",
    "direct": true,
    "semitones": 1,
    "name": "Perfect fourth",
    "alt": "",
    "alt-short": ""
  },
  "A3": {
    "parent": "M3",
    "semitones": 1,
    "name": "Augmented third",
    "alt": "",
    "alt-short": ""
  },
  "d5": {
    "parent": "P5",
    "semitones": -1,
    "name": "Diminished fifth",
    "alt": "Tritone",
    "alt-short": "TT"
  },
  "A4": {
    "parent": "P4",
    "semitones": 1,
    "name": "Augmented fourth",
    "alt": "Tritone",
    "alt-short": "TT"
  },
  "P5": {
    "parent": "P4",
    "direct": true,
    "semitones": 2,
    "name": "Perfect fifth",
    "alt": "",
    "alt-short": ""
  },
  "d6": {
    "parent": "M6",
    "semitones": -2,
    "name": "Diminished sixth",
    "alt": "",
    "alt-short": ""
  },
  "m6": {
    "parent": "M6",
    "semitones": -1,
    "name": "Minor sixth",
    "alt": "",
    "alt-short": ""
  },
  "A5": {
    "parent": "P5",
    "semitones": 1,
    "name": "Augmented fifth",
    "alt": "",
    "alt-short": ""
  },
  "M6": {
    "parent": "P5",
    "direct": true,
    "semitones": 2,
    "name": "Major sixth",
    "alt": "",
    "alt-short": ""
  },
  "d7": {
    "parent": "M7",
    "semitones": -2,
    "name": "Diminished seventh",
    "alt": "",
    "alt-short": ""
  },
  "m7": {
    "parent": "M7",
    "semitones": -1,
    "name": "Minor seventh",
    "alt": "",
    "alt-short": ""
  },
  "A6": {
    "parent": "M6",
    "semitones": 1,
    "name": "Augmented sixth",
    "alt": "",
    "alt-short": ""
  },
  "M7": {
    "parent": "M6",
    "direct": true,
    "semitones": 2,
    "name": "Major seventh",
    "alt": "",
    "alt-short": ""
  },
  "d8": {
    "parent": "P8",
    "semitones": -1,
    "name": "Diminished octave",
    "alt": "",
    "alt-short": ""
  },
  "P8": {
    "parent": "P1",
    "direct": true,
    "semitones": 12,
    "name": "Perfect octave",
    "alt": "",
    "alt-short": ""
  },
  "A7": {
    "parent": "M7",
    "semitones": 1,
    "name": "Augmented seventh",
    "alt": "",
    "alt-short": ""
  }
}

class Interval {
  constructor(name) {
    if (intervals.hasOwnProperty(name)) {
      for (var prop in intervals[name]) {
        this.name = name
        this[prop] = intervals[name][prop]
      }
    }
  }

  getParent() {
    return new Interval(this.parent)
  }

  getName() {
    return this.name
  }

  hasParent() {
    if (this.parent) return true
    return false
  }

  isDirect() {
    return this.direct === true ? true : false
  }

  static getIntervals() {
    return intervals;
  }

  static getSemitonesToNextNote(note1, note2) {

  }
}

module.exports = Interval
