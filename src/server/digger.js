var ROT = {
    /**
    * @returns {bool} Is rot.js supported by this browser?
    */
    isSupported: function() {
        return !!(document.createElement("canvas").getContext && Function.prototype.bind);
    },

    /** Default with for display and map generators */
    DEFAULT_WIDTH: 80,
    /** Default height for display and map generators */
    DEFAULT_HEIGHT: 25,

    /** Directional constants. Ordering is important! */
    DIRS: {
        "4": [
        [ 0, -1],
        [ 1,  0],
        [ 0,  1],
        [-1,  0]
        ],
        "8": [
        [ 0, -1],
        [ 1, -1],
        [ 1,  0],
        [ 1,  1],
        [ 0,  1],
        [-1,  1],
        [-1,  0],
        [-1, -1]
        ],
        "6": [
        [-1, -1],
        [ 1, -1],
        [ 2,  0],
        [ 1,  1],
        [-1,  1],
        [-2,  0]
        ]
    },

    /** Cancel key. */
    VK_CANCEL: 3,
    /** Help key. */
    VK_HELP: 6,
    /** Backspace key. */
    VK_BACK_SPACE: 8,
    /** Tab key. */
    VK_TAB: 9,
    /** 5 key on Numpad when NumLock is unlocked. Or on Mac, clear key which is positioned at NumLock key. */
    VK_CLEAR: 12,
    /** Return/enter key on the main keyboard. */
    VK_RETURN: 13,
    /** Reserved, but not used. */
    VK_ENTER: 14,
    /** Shift key. */
    VK_SHIFT: 16,
    /** Control key. */
    VK_CONTROL: 17,
    /** Alt (Option on Mac) key. */
    VK_ALT: 18,
    /** Pause key. */
    VK_PAUSE: 19,
    /** Caps lock. */
    VK_CAPS_LOCK: 20,
    /** Escape key. */
    VK_ESCAPE: 27,
    /** Space bar. */
    VK_SPACE: 32,
    /** Page Up key. */
    VK_PAGE_UP: 33,
    /** Page Down key. */
    VK_PAGE_DOWN: 34,
    /** End key. */
    VK_END: 35,
    /** Home key. */
    VK_HOME: 36,
    /** Left arrow. */
    VK_LEFT: 37,
    /** Up arrow. */
    VK_UP: 38,
    /** Right arrow. */
    VK_RIGHT: 39,
    /** Down arrow. */
    VK_DOWN: 40,
    /** Print Screen key. */
    VK_PRINTSCREEN: 44,
    /** Ins(ert) key. */
    VK_INSERT: 45,
    /** Del(ete) key. */
    VK_DELETE: 46,
    /***/
    VK_0: 48,
    /***/
    VK_1: 49,
    /***/
    VK_2: 50,
    /***/
    VK_3: 51,
    /***/
    VK_4: 52,
    /***/
    VK_5: 53,
    /***/
    VK_6: 54,
    /***/
    VK_7: 55,
    /***/
    VK_8: 56,
    /***/
    VK_9: 57,
    /** Colon (:) key. Requires Gecko 15.0 */
    VK_COLON: 58,
    /** Semicolon (;) key. */
    VK_SEMICOLON: 59,
    /** Less-than (<) key. Requires Gecko 15.0 */
    VK_LESS_THAN: 60,
    /** Equals (=) key. */
    VK_EQUALS: 61,
    /** Greater-than (>) key. Requires Gecko 15.0 */
    VK_GREATER_THAN: 62,
    /** Question mark (?) key. Requires Gecko 15.0 */
    VK_QUESTION_MARK: 63,
    /** Atmark (@) key. Requires Gecko 15.0 */
    VK_AT: 64,
    /***/
    VK_A: 65,
    /***/
    VK_B: 66,
    /***/
    VK_C: 67,
    /***/
    VK_D: 68,
    /***/
    VK_E: 69,
    /***/
    VK_F: 70,
    /***/
    VK_G: 71,
    /***/
    VK_H: 72,
    /***/
    VK_I: 73,
    /***/
    VK_J: 74,
    /***/
    VK_K: 75,
    /***/
    VK_L: 76,
    /***/
    VK_M: 77,
    /***/
    VK_N: 78,
    /***/
    VK_O: 79,
    /***/
    VK_P: 80,
    /***/
    VK_Q: 81,
    /***/
    VK_R: 82,
    /***/
    VK_S: 83,
    /***/
    VK_T: 84,
    /***/
    VK_U: 85,
    /***/
    VK_V: 86,
    /***/
    VK_W: 87,
    /***/
    VK_X: 88,
    /***/
    VK_Y: 89,
    /***/
    VK_Z: 90,
    /***/
    VK_CONTEXT_MENU: 93,
    /** 0 on the numeric keypad. */
    VK_NUMPAD0: 96,
    /** 1 on the numeric keypad. */
    VK_NUMPAD1: 97,
    /** 2 on the numeric keypad. */
    VK_NUMPAD2: 98,
    /** 3 on the numeric keypad. */
    VK_NUMPAD3: 99,
    /** 4 on the numeric keypad. */
    VK_NUMPAD4: 100,
    /** 5 on the numeric keypad. */
    VK_NUMPAD5: 101,
    /** 6 on the numeric keypad. */
    VK_NUMPAD6: 102,
    /** 7 on the numeric keypad. */
    VK_NUMPAD7: 103,
    /** 8 on the numeric keypad. */
    VK_NUMPAD8: 104,
    /** 9 on the numeric keypad. */
    VK_NUMPAD9: 105,
    /** * on the numeric keypad. */
    VK_MULTIPLY: 106,
    /** + on the numeric keypad. */
    VK_ADD: 107,
    /***/
    VK_SEPARATOR: 108,
    /** - on the numeric keypad. */
    VK_SUBTRACT: 109,
    /** Decimal point on the numeric keypad. */
    VK_DECIMAL: 110,
    /** / on the numeric keypad. */
    VK_DIVIDE: 111,
    /** F1 key. */
    VK_F1: 112,
    /** F2 key. */
    VK_F2: 113,
    /** F3 key. */
    VK_F3: 114,
    /** F4 key. */
    VK_F4: 115,
    /** F5 key. */
    VK_F5: 116,
    /** F6 key. */
    VK_F6: 117,
    /** F7 key. */
    VK_F7: 118,
    /** F8 key. */
    VK_F8: 119,
    /** F9 key. */
    VK_F9: 120,
    /** F10 key. */
    VK_F10: 121,
    /** F11 key. */
    VK_F11: 122,
    /** F12 key. */
    VK_F12: 123,
    /** F13 key. */
    VK_F13: 124,
    /** F14 key. */
    VK_F14: 125,
    /** F15 key. */
    VK_F15: 126,
    /** F16 key. */
    VK_F16: 127,
    /** F17 key. */
    VK_F17: 128,
    /** F18 key. */
    VK_F18: 129,
    /** F19 key. */
    VK_F19: 130,
    /** F20 key. */
    VK_F20: 131,
    /** F21 key. */
    VK_F21: 132,
    /** F22 key. */
    VK_F22: 133,
    /** F23 key. */
    VK_F23: 134,
    /** F24 key. */
    VK_F24: 135,
    /** Num Lock key. */
    VK_NUM_LOCK: 144,
    /** Scroll Lock key. */
    VK_SCROLL_LOCK: 145,
    /** Circumflex (^) key. Requires Gecko 15.0 */
    VK_CIRCUMFLEX: 160,
    /** Exclamation (!) key. Requires Gecko 15.0 */
    VK_EXCLAMATION: 161,
    /** Double quote () key. Requires Gecko 15.0 */
    VK_DOUBLE_QUOTE: 162,
    /** Hash (#) key. Requires Gecko 15.0 */
    VK_HASH: 163,
    /** Dollar sign ($) key. Requires Gecko 15.0 */
    VK_DOLLAR: 164,
    /** Percent (%) key. Requires Gecko 15.0 */
    VK_PERCENT: 165,
    /** Ampersand (&) key. Requires Gecko 15.0 */
    VK_AMPERSAND: 166,
    /** Underscore (_) key. Requires Gecko 15.0 */
    VK_UNDERSCORE: 167,
    /** Open parenthesis (() key. Requires Gecko 15.0 */
    VK_OPEN_PAREN: 168,
    /** Close parenthesis ()) key. Requires Gecko 15.0 */
    VK_CLOSE_PAREN: 169,
    /* Asterisk (*) key. Requires Gecko 15.0 */
    VK_ASTERISK: 170,
    /** Plus (+) key. Requires Gecko 15.0 */
    VK_PLUS: 171,
    /** Pipe (|) key. Requires Gecko 15.0 */
    VK_PIPE: 172,
    /** Hyphen-US/docs/Minus (-) key. Requires Gecko 15.0 */
    VK_HYPHEN_MINUS: 173,
    /** Open curly bracket ({) key. Requires Gecko 15.0 */
    VK_OPEN_CURLY_BRACKET: 174,
    /** Close curly bracket (}) key. Requires Gecko 15.0 */
    VK_CLOSE_CURLY_BRACKET: 175,
    /** Tilde (~) key. Requires Gecko 15.0 */
    VK_TILDE: 176,
    /** Comma (,) key. */
    VK_COMMA: 188,
    /** Period (.) key. */
    VK_PERIOD: 190,
    /** Slash (/) key. */
    VK_SLASH: 191,
    /** Back tick (`) key. */
    VK_BACK_QUOTE: 192,
    /** Open square bracket ([) key. */
    VK_OPEN_BRACKET: 219,
    /** Back slash (\) key. */
    VK_BACK_SLASH: 220,
    /** Close square bracket (]) key. */
    VK_CLOSE_BRACKET: 221,
    /** Quote (''') key. */
    VK_QUOTE: 222,
    /** Meta key on Linux, Command key on Mac. */
    VK_META: 224,
    /** AltGr key on Linux. Requires Gecko 15.0 */
    VK_ALTGR: 225,
    /** Windows logo key on Windows. Or Super or Hyper key on Linux. Requires Gecko 15.0 */
    VK_WIN: 91,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_KANA: 21,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_HANGUL: 21,
    /** 英数 key on Japanese Mac keyboard. Requires Gecko 15.0 */
    VK_EISU: 22,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_JUNJA: 23,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_FINAL: 24,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_HANJA: 25,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_KANJI: 25,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_CONVERT: 28,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_NONCONVERT: 29,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_ACCEPT: 30,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_MODECHANGE: 31,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_SELECT: 41,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_PRINT: 42,
    /** Linux support for this keycode was added in Gecko 4.0. */
    VK_EXECUTE: 43,
    /** Linux support for this keycode was added in Gecko 4.0.	 */
    VK_SLEEP: 95
};

module.exports = ROT;

/**
* Sets prototype of this function to an instance of parent function
* @param {function} parent
*/
Function.prototype.extend = function(parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
    return this;
}

/**
* @class Base map generator
* @param {int} [width=ROT.DEFAULT_WIDTH]
* @param {int} [height=ROT.DEFAULT_HEIGHT]
*/
ROT.Map = function(width, height) {
    this._width = width || ROT.DEFAULT_WIDTH;
    this._height = height || ROT.DEFAULT_HEIGHT;
};

ROT.Map.prototype.create = function(callback) {}

ROT.Map.prototype._fillMap = function(value) {
    var map = [];
    for (var i=0;i<this._width;i++) {
        map.push([]);
        for (var j=0;j<this._height;j++) {
            map[i].push(value);
        }
    }
    return map;
}




/**
* @returns {any} Randomly picked item, null when length=0
*/
Array.prototype.random = function() {
    if (!this.length) { return null; }
        return this[Math.floor(ROT.RNG.getUniform() * this.length)];
    }

    /**
    * @returns {array} New array with randomized items
    * FIXME destroys this!
    */
    Array.prototype.randomize = function() {
        var result = [];
        while (this.length) {
            var index = this.indexOf(this.random());
            result.push(this.splice(index, 1)[0]);
        }
        return result;
    }



/**
* @namespace
* This code is an implementation of Alea algorithm; (C) 2010 Johannes Baagøe.
* Alea is licensed according to the http://en.wikipedia.org/wiki/MIT_License.
*/
ROT.RNG = {
    /**
    * @returns {number}
    */
    getSeed: function() {
        return this._seed;
    },

    /**
    * @param {number} seed Seed the number generator
    */
    setSeed: function(seed) {
        seed = (seed < 1 ? 1/seed : seed);

        this._seed = seed;
        this._s0 = (seed >>> 0) * this._frac;

        seed = (seed*69069 + 1) >>> 0;
        this._s1 = seed * this._frac;

        seed = (seed*69069 + 1) >>> 0;
        this._s2 = seed * this._frac;

        this._c = 1;
        return this;
    },

    /**
    * @returns {float} Pseudorandom value [0,1), uniformly distributed
    */
    getUniform: function() {
        var t = 2091639 * this._s0 + this._c * this._frac;
        this._s0 = this._s1;
        this._s1 = this._s2;
        this._c = t | 0;
        this._s2 = t - this._c;
        return this._s2;
    },

    /**
    * @param {int} lowerBound The lower end of the range to return a value from, inclusive
    * @param {int} upperBound The upper end of the range to return a value from, inclusive
    * @returns {int} Pseudorandom value [lowerBound, upperBound], using ROT.RNG.getUniform() to distribute the value
    */
    getUniformInt: function(lowerBound, upperBound) {
        var max = Math.max(lowerBound, upperBound);
        var min = Math.min(lowerBound, upperBound);
        return Math.floor(this.getUniform() * (max - min + 1)) + min;
    },

    /**
    * @param {float} [mean=0] Mean value
    * @param {float} [stddev=1] Standard deviation. ~95% of the absolute values will be lower than 2*stddev.
    * @returns {float} A normally distributed pseudorandom value
    */
    getNormal: function(mean, stddev) {
        do {
            var u = 2*this.getUniform()-1;
            var v = 2*this.getUniform()-1;
            var r = u*u + v*v;
        } while (r > 1 || r == 0);

        var gauss = u * Math.sqrt(-2*Math.log(r)/r);
        return (mean || 0) + gauss*(stddev || 1);
    },

    /**
    * @returns {int} Pseudorandom value [1,100] inclusive, uniformly distributed
    */
    getPercentage: function() {
        return 1 + Math.floor(this.getUniform()*100);
    },

    /**
    * @param {object} data key=whatever, value=weight (relative probability)
    * @returns {string} whatever
    */
    getWeightedValue: function(data) {
        var avail = [];
        var total = 0;

        for (var id in data) {
            total += data[id];
        }
        var random = Math.floor(this.getUniform()*total);

        var part = 0;
        for (var id in data) {
            part += data[id];
            if (random < part) { return id; }
            }

            return null;
        },

        /**
        * Get RNG state. Useful for storing the state and re-setting it via setState.
        * @returns {?} Internal state
        */
        getState: function() {
            return [this._s0, this._s1, this._s2, this._c];
        },

        /**
        * Set a previously retrieved state.
        * @param {?} state
        */
        setState: function(state) {
            this._s0 = state[0];
            this._s1 = state[1];
            this._s2 = state[2];
            this._c  = state[3];
            return this;
        },

        /**
        * Returns a cloned RNG
        */
        clone: function() {
            var clone = Object.create(this);
            clone.setState(this.getState());
            return clone;
        },

        _s0: 0,
        _s1: 0,
        _s2: 0,
        _c: 0,
        _frac: 2.3283064365386963e-10 /* 2^-32 */
    }

    ROT.RNG.setSeed(Date.now());















/**
* @class Dungeon map: has rooms and corridors
* @augments ROT.Map
*/
ROT.Map.Dungeon = function(width, height) {
    ROT.Map.call(this, width, height);
    this._rooms = []; /* list of all rooms */
    this._corridors = [];
}
ROT.Map.Dungeon.extend(ROT.Map);

/**
* Get all generated rooms
* @returns {ROT.Map.Feature.Room[]}
*/
ROT.Map.Dungeon.prototype.getRooms = function() {
    return this._rooms;
}

/**
* Get all generated corridors
* @returns {ROT.Map.Feature.Corridor[]}
*/
ROT.Map.Dungeon.prototype.getCorridors = function() {
    return this._corridors;
}











/**
* @class Dungeon feature; has own .create() method
*/
ROT.Map.Feature = function() {}
ROT.Map.Feature.prototype.isValid = function(canBeDugCallback) {}
ROT.Map.Feature.prototype.create = function(digCallback) {}
ROT.Map.Feature.prototype.debug = function() {}
ROT.Map.Feature.createRandomAt = function(x, y, dx, dy, options) {}

/**
* @class Room
* @augments ROT.Map.Feature
* @param {int} x1
* @param {int} y1
* @param {int} x2
* @param {int} y2
* @param {int} [doorX]
* @param {int} [doorY]
*/
ROT.Map.Feature.Room = function(x1, y1, x2, y2, doorX, doorY) {
    this._x1 = x1;
    this._y1 = y1;
    this._x2 = x2;
    this._y2 = y2;
    this._doors = {};
    if (arguments.length > 4) { this.addDoor(doorX, doorY); }
    }
    ROT.Map.Feature.Room.extend(ROT.Map.Feature);

    /**
    * Room of random size, with a given doors and direction
    */
    ROT.Map.Feature.Room.createRandomAt = function(x, y, dx, dy, options) {
        var min = options.roomWidth[0];
        var max = options.roomWidth[1];
        var width = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

        var min = options.roomHeight[0];
        var max = options.roomHeight[1];
        var height = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

        if (dx == 1) { /* to the right */
            var y2 = y - Math.floor(ROT.RNG.getUniform() * height);
            return new this(x+1, y2, x+width, y2+height-1, x, y);
        }

        if (dx == -1) { /* to the left */
            var y2 = y - Math.floor(ROT.RNG.getUniform() * height);
            return new this(x-width, y2, x-1, y2+height-1, x, y);
        }

        if (dy == 1) { /* to the bottom */
            var x2 = x - Math.floor(ROT.RNG.getUniform() * width);
            return new this(x2, y+1, x2+width-1, y+height, x, y);
        }

        if (dy == -1) { /* to the top */
            var x2 = x - Math.floor(ROT.RNG.getUniform() * width);
            return new this(x2, y-height, x2+width-1, y-1, x, y);
        }
    }

    /**
    * Room of random size, positioned around center coords
    */
    ROT.Map.Feature.Room.createRandomCenter = function(cx, cy, options) {
        var min = options.roomWidth[0];
        var max = options.roomWidth[1];
        var width = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

        var min = options.roomHeight[0];
        var max = options.roomHeight[1];
        var height = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

        var x1 = cx - Math.floor(ROT.RNG.getUniform()*width);
        var y1 = cy - Math.floor(ROT.RNG.getUniform()*height);
        var x2 = x1 + width - 1;
        var y2 = y1 + height - 1;

        return new this(x1, y1, x2, y2);
    }

    /**
    * Room of random size within a given dimensions
    */
    ROT.Map.Feature.Room.createRandom = function(availWidth, availHeight, options) {
        var min = options.roomWidth[0];
        var max = options.roomWidth[1];
        var width = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

        var min = options.roomHeight[0];
        var max = options.roomHeight[1];
        var height = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

        var left = availWidth - width - 1;
        var top = availHeight - height - 1;

        var x1 = 1 + Math.floor(ROT.RNG.getUniform()*left);
        var y1 = 1 + Math.floor(ROT.RNG.getUniform()*top);
        var x2 = x1 + width - 1;
        var y2 = y1 + height - 1;

        return new this(x1, y1, x2, y2);
    }

    ROT.Map.Feature.Room.prototype.addDoor = function(x, y) {
        this._doors[x+","+y] = 1;
        return this;
    }

    /**
    * @param {function}
    */
    ROT.Map.Feature.Room.prototype.getDoors = function(callback) {
        for (var key in this._doors) {
            var parts = key.split(",");
            callback(parseInt(parts[0]), parseInt(parts[1]));
        }
        return this;
    }

    ROT.Map.Feature.Room.prototype.clearDoors = function() {
        this._doors = {};
        return this;
    }

    ROT.Map.Feature.Room.prototype.addDoors = function(isWallCallback) {
        var left = this._x1-1;
        var right = this._x2+1;
        var top = this._y1-1;
        var bottom = this._y2+1;

        for (var x=left; x<=right; x++) {
            for (var y=top; y<=bottom; y++) {
                if (x != left && x != right && y != top && y != bottom) { continue; }
                    if (isWallCallback(x, y)) { continue; }

                        this.addDoor(x, y);
                    }
                }

                return this;
            }

            ROT.Map.Feature.Room.prototype.debug = function() {
                console.log("room", this._x1, this._y1, this._x2, this._y2);
            }

            ROT.Map.Feature.Room.prototype.isValid = function(isWallCallback, canBeDugCallback) {
                var left = this._x1-1;
                var right = this._x2+1;
                var top = this._y1-1;
                var bottom = this._y2+1;

                for (var x=left; x<=right; x++) {
                    for (var y=top; y<=bottom; y++) {
                        if (x == left || x == right || y == top || y == bottom) {
                            if (!isWallCallback(x, y)) { return false; }
                            } else {
                                if (!canBeDugCallback(x, y)) { return false; }
                                }
                            }
                        }

                        return true;
                    }

                    /**
                    * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty, 1 = wall, 2 = door. Multiple doors are allowed.
                    */
                    ROT.Map.Feature.Room.prototype.create = function(digCallback) {
                        var left = this._x1-1;
                        var right = this._x2+1;
                        var top = this._y1-1;
                        var bottom = this._y2+1;

                        var value = 0;
                        for (var x=left; x<=right; x++) {
                            for (var y=top; y<=bottom; y++) {
                                if (x+","+y in this._doors) {
                                    value = 2;
                                } else if (x == left || x == right || y == top || y == bottom) {
                                    value = 1;
                                } else {
                                    value = 0;
                                }
                                digCallback(x, y, value);
                            }
                        }
                    }

                    ROT.Map.Feature.Room.prototype.getCenter = function() {
                        return [Math.round((this._x1 + this._x2)/2), Math.round((this._y1 + this._y2)/2)];
                    }

                    ROT.Map.Feature.Room.prototype.getLeft = function() {
                        return this._x1;
                    }

                    ROT.Map.Feature.Room.prototype.getRight = function() {
                        return this._x2;
                    }

                    ROT.Map.Feature.Room.prototype.getTop = function() {
                        return this._y1;
                    }

                    ROT.Map.Feature.Room.prototype.getBottom = function() {
                        return this._y2;
                    }

                    /**
                    * @class Corridor
                    * @augments ROT.Map.Feature
                    * @param {int} startX
                    * @param {int} startY
                    * @param {int} endX
                    * @param {int} endY
                    */
                    ROT.Map.Feature.Corridor = function(startX, startY, endX, endY) {
                        this._startX = startX;
                        this._startY = startY;
                        this._endX = endX;
                        this._endY = endY;
                        this._endsWithAWall = true;
                    }
                    ROT.Map.Feature.Corridor.extend(ROT.Map.Feature);

                    ROT.Map.Feature.Corridor.createRandomAt = function(x, y, dx, dy, options) {
                        var min = options.corridorLength[0];
                        var max = options.corridorLength[1];
                        var length = min + Math.floor(ROT.RNG.getUniform()*(max-min+1));

                        return new this(x, y, x + dx*length, y + dy*length);
                    }

                    ROT.Map.Feature.Corridor.prototype.debug = function() {
                        console.log("corridor", this._startX, this._startY, this._endX, this._endY);
                    }

                    ROT.Map.Feature.Corridor.prototype.isValid = function(isWallCallback, canBeDugCallback){
                        var sx = this._startX;
                        var sy = this._startY;
                        var dx = this._endX-sx;
                        var dy = this._endY-sy;
                        var length = 1 + Math.max(Math.abs(dx), Math.abs(dy));

                        if (dx) { dx = dx/Math.abs(dx); }
                            if (dy) { dy = dy/Math.abs(dy); }
                                var nx = dy;
                                var ny = -dx;

                                var ok = true;
                                for (var i=0; i<length; i++) {
                                    var x = sx + i*dx;
                                    var y = sy + i*dy;

                                    if (!canBeDugCallback(     x,      y)) { ok = false; }
                                        if (!isWallCallback  (x + nx, y + ny)) { ok = false; }
                                            if (!isWallCallback  (x - nx, y - ny)) { ok = false; }

                                                if (!ok) {
                                                    length = i;
                                                    this._endX = x-dx;
                                                    this._endY = y-dy;
                                                    break;
                                                }
                                            }

                                            /**
                                            * If the length degenerated, this corridor might be invalid
                                            */

                                            /* not supported */
                                            if (length == 0) { return false; }

                                                /* length 1 allowed only if the next space is empty */
                                                if (length == 1 && isWallCallback(this._endX + dx, this._endY + dy)) { return false; }

                                                    /**
                                                    * We do not want the corridor to crash into a corner of a room;
                                                    * if any of the ending corners is empty, the N+1th cell of this corridor must be empty too.
                                                    *
                                                    * Situation:
                                                    * #######1
                                                    * .......?
                                                    * #######2
                                                    *
                                                    * The corridor was dug from left to right.
                                                    * 1, 2 - problematic corners, ? = N+1th cell (not dug)
                                                    */
                                                    var firstCornerBad = !isWallCallback(this._endX + dx + nx, this._endY + dy + ny);
                                                    var secondCornerBad = !isWallCallback(this._endX + dx - nx, this._endY + dy - ny);
                                                    this._endsWithAWall = isWallCallback(this._endX + dx, this._endY + dy);
                                                    if ((firstCornerBad || secondCornerBad) && this._endsWithAWall) { return false; }

                                                        return true;
                                                    }

                                                    /**
                                                    * @param {function} digCallback Dig callback with a signature (x, y, value). Values: 0 = empty.
                                                    */
                                                    ROT.Map.Feature.Corridor.prototype.create = function(digCallback) {
                                                        var sx = this._startX;
                                                        var sy = this._startY;
                                                        var dx = this._endX-sx;
                                                        var dy = this._endY-sy;
                                                        var length = 1+Math.max(Math.abs(dx), Math.abs(dy));

                                                        if (dx) { dx = dx/Math.abs(dx); }
                                                            if (dy) { dy = dy/Math.abs(dy); }
                                                                var nx = dy;
                                                                var ny = -dx;

                                                                for (var i=0; i<length; i++) {
                                                                    var x = sx + i*dx;
                                                                    var y = sy + i*dy;
                                                                    digCallback(x, y, 0);
                                                                }

                                                                return true;
                                                            }

                                                            ROT.Map.Feature.Corridor.prototype.createPriorityWalls = function(priorityWallCallback) {
                                                                if (!this._endsWithAWall) { return; }

                                                                    var sx = this._startX;
                                                                    var sy = this._startY;

                                                                    var dx = this._endX-sx;
                                                                    var dy = this._endY-sy;
                                                                    if (dx) { dx = dx/Math.abs(dx); }
                                                                        if (dy) { dy = dy/Math.abs(dy); }
                                                                            var nx = dy;
                                                                            var ny = -dx;

                                                                            priorityWallCallback(this._endX + dx, this._endY + dy);
                                                                            priorityWallCallback(this._endX + nx, this._endY + ny);
                                                                            priorityWallCallback(this._endX - nx, this._endY - ny);
                                                                        }















/**
 * @class Random dungeon generator using human-like digging patterns.
 * Heavily based on Mike Anderson's ideas from the "Tyrant" algo, mentioned at
 * http://www.roguebasin.roguelikedevelopment.org/index.php?title=Dungeon-Building_Algorithm.
 * @augments ROT.Map.Dungeon
 */
ROT.Map.Digger = function(width, height, options) {
    ROT.Map.Dungeon.call(this, width, height);

    this._options = {
        roomWidth: [3, 9], /* room minimum and maximum width */
        roomHeight: [3, 5], /* room minimum and maximum height */
        corridorLength: [3, 10], /* corridor minimum and maximum length */
        dugPercentage: 0.2, /* we stop after this percentage of level area has been dug out */
        timeLimit: 1000 /* we stop after this much time has passed (msec) */
    }
    for (var p in options) { this._options[p] = options[p]; }

    this._features = {
        "Room": 4,
        "Corridor": 4
    }
    this._featureAttempts = 20; /* how many times do we try to create a feature on a suitable wall */
    this._walls = {}; /* these are available for digging */

    this._digCallback = this._digCallback.bind(this);
    this._canBeDugCallback = this._canBeDugCallback.bind(this);
    this._isWallCallback = this._isWallCallback.bind(this);
    this._priorityWallCallback = this._priorityWallCallback.bind(this);
}
ROT.Map.Digger.extend(ROT.Map.Dungeon);

/**
 * Create a map
 * @see ROT.Map#create
 */
ROT.Map.Digger.prototype.create = function(callback) {
    this._rooms = [];
    this._corridors = [];
    this._map = this._fillMap(1);
    this._walls = {};
    this._dug = 0;
    var area = (this._width-2) * (this._height-2);

    this._firstRoom();

    var t1 = Date.now();

    do {
        var t2 = Date.now();
        if (t2 - t1 > this._options.timeLimit) { break; }

        /* find a good wall */
        var wall = this._findWall();
        if (!wall) { break; } /* no more walls */

        var parts = wall.split(",");
        var x = parseInt(parts[0]);
        var y = parseInt(parts[1]);
        var dir = this._getDiggingDirection(x, y);
        if (!dir) { continue; } /* this wall is not suitable */

//		console.log("wall", x, y);

        /* try adding a feature */
        var featureAttempts = 0;
        do {
            featureAttempts++;
            if (this._tryFeature(x, y, dir[0], dir[1])) { /* feature added */
                //if (this._rooms.length + this._corridors.length == 2) { this._rooms[0].addDoor(x, y); } /* first room oficially has doors */
                this._removeSurroundingWalls(x, y);
                this._removeSurroundingWalls(x-dir[0], y-dir[1]);
                break;
            }
        } while (featureAttempts < this._featureAttempts);

        var priorityWalls = 0;
        for (var id in this._walls) {
            if (this._walls[id] > 1) { priorityWalls++; }
        }

    } while (this._dug/area < this._options.dugPercentage || priorityWalls); /* fixme number of priority walls */

    this._addDoors();

    if (callback) {
        for (var i=0;i<this._width;i++) {
            for (var j=0;j<this._height;j++) {
                callback(i, j, this._map[i][j]);
            }
        }
    }

    this._walls = {};
    this._map = null;

    return this;
}

ROT.Map.Digger.prototype._digCallback = function(x, y, value) {
    if (value == 0 || value == 2) { /* empty */
        try{
        this._map[x][y] = 0;
    } catch (err) {
        console.log(this._map);
    }
        this._dug++;
    } else { /* wall */
        this._walls[x+","+y] = 1;
    }
}

ROT.Map.Digger.prototype._isWallCallback = function(x, y) {
    if (x < 0 || y < 0 || x >= this._width || y >= this._height) { return false; }
    return (this._map[x][y] == 1);
}

ROT.Map.Digger.prototype._canBeDugCallback = function(x, y) {
    if (x < 1 || y < 1 || x+1 >= this._width || y+1 >= this._height) { return false; }
    return (this._map[x][y] == 1);
}

ROT.Map.Digger.prototype._priorityWallCallback = function(x, y) {
    this._walls[x+","+y] = 2;
}

ROT.Map.Digger.prototype._firstRoom = function() {
    var cx = Math.floor(this._width/2);
    var cy = Math.floor(this._height/2);
    var room = ROT.Map.Feature.Room.createRandomCenter(cx, cy, this._options);
    this._rooms.push(room);
    room.create(this._digCallback);
}

/**
 * Get a suitable wall
 */
ROT.Map.Digger.prototype._findWall = function() {
    var prio1 = [];
    var prio2 = [];
    for (var id in this._walls) {
        var prio = this._walls[id];
        if (prio == 2) {
            prio2.push(id);
        } else {
            prio1.push(id);
        }
    }

    var arr = (prio2.length ? prio2 : prio1);
    if (!arr.length) { return null; } /* no walls :/ */

    var id = arr.random();
    delete this._walls[id];

    return id;
}

/**
 * Tries adding a feature
 * @returns {bool} was this a successful try?
 */
ROT.Map.Digger.prototype._tryFeature = function(x, y, dx, dy) {
    var feature = ROT.RNG.getWeightedValue(this._features);
    feature = ROT.Map.Feature[feature].createRandomAt(x, y, dx, dy, this._options);

    if (!feature.isValid(this._isWallCallback, this._canBeDugCallback)) {
//		console.log("not valid");
//		feature.debug();
        return false;
    }

    feature.create(this._digCallback);
//	feature.debug();

    if (feature instanceof ROT.Map.Feature.Room) { this._rooms.push(feature); }
    if (feature instanceof ROT.Map.Feature.Corridor) {
        feature.createPriorityWalls(this._priorityWallCallback);
        this._corridors.push(feature);
    }

    return true;
}

ROT.Map.Digger.prototype._removeSurroundingWalls = function(cx, cy) {
    var deltas = ROT.DIRS[4];

    for (var i=0;i<deltas.length;i++) {
        var delta = deltas[i];
        var x = cx + delta[0];
        var y = cy + delta[1];
        delete this._walls[x+","+y];
        var x = cx + 2*delta[0];
        var y = cy + 2*delta[1];
        delete this._walls[x+","+y];
    }
}

/**
 * Returns vector in "digging" direction, or false, if this does not exist (or is not unique)
 */
ROT.Map.Digger.prototype._getDiggingDirection = function(cx, cy) {
    var result = null;
    var deltas = ROT.DIRS[4];

    for (var i=0;i<deltas.length;i++) {
        var delta = deltas[i];
        var x = cx + delta[0];
        var y = cy + delta[1];

        if (x < 0 || y < 0 || x >= this._width || y >= this._width) { return null; }

        if (!this._map[x][y]) { /* there already is another empty neighbor! */
            if (result) { return null; }
            result = delta;
        }
    }

    /* no empty neighbor */
    if (!result) { return null; }

    return [-result[0], -result[1]];
}

/**
 * Find empty spaces surrounding rooms, and apply doors.
 */
ROT.Map.Digger.prototype._addDoors = function() {
    var data = this._map;
    var isWallCallback = function(x, y) {
        try {
            return (data[x][y] == 1);
        } catch (err) {
            console.log(err);
            console.log(data);
        }
    }
    for (var i = 0; i < this._rooms.length; i++ ) {
        var room = this._rooms[i];
        room.clearDoors();
        room.addDoors(isWallCallback);
    }
}
