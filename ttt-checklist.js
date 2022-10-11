"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = function(fn, res) {
  return function() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
};
var __export = function(target, all) {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = function(to, from, except, desc) {
  if (from && typeof from == "object" || typeof from == "function")
    for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++)
      key = keys[i], !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: function(k) {
        return from[k];
      }.bind(null, key), enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = function(mod) {
  return __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);
};

// kolmafia-polyfill.js
var kolmafia, console, init_kolmafia_polyfill = __esm({
  "kolmafia-polyfill.js": function() {
    "use strict";
    kolmafia = require("kolmafia"), console = {
      log: kolmafia.print
    };
  }
});

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: function() {
    return main;
  }
});
module.exports = __toCommonJS(main_exports);
init_kolmafia_polyfill();
var import_kolmafia2 = require("kolmafia");

// node_modules/libram/dist/template-string.js
init_kolmafia_polyfill();
var import_kolmafia = require("kolmafia");

// node_modules/libram/dist/utils.js
init_kolmafia_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol != "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length == "number") {
      it && (o = it);
      var i = 0, F = function() {
      };
      return { s: F, n: function() {
        return i >= o.length ? { done: !0 } : { done: !1, value: o[i++] };
      }, e: function(_e2) {
        throw _e2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = !0, didErr = !1, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    return normalCompletion = step.done, step;
  }, e: function(_e3) {
    didErr = !0, err = _e3;
  }, f: function() {
    try {
      !normalCompletion && it.return != null && it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!!o) {
    if (typeof o == "string")
      return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor && (n = o.constructor.name), n === "Map" || n === "Set")
      return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }
}
function _arrayLikeToArray(arr, len) {
  (len == null || len > arr.length) && (len = arr.length);
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function splitByCommasWithEscapes(str) {
  var returnValue = [], ignoreNext = !1, currentString = "", _iterator2 = _createForOfIteratorHelper(str.split("")), _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
      var char = _step2.value;
      char === "\\" ? ignoreNext = !0 : (char == "," && !ignoreNext ? (returnValue.push(currentString.trim()), currentString = "") : currentString += char, ignoreNext = !1);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  return returnValue.push(currentString.trim()), returnValue;
}

// node_modules/libram/dist/template-string.js
var concatTemplateString = function(literals) {
  for (var _len = arguments.length, placeholders = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    placeholders[_key - 1] = arguments[_key];
  return literals.raw.reduce(function(acc, literal, i) {
    var _placeholders$i;
    return acc + literal + ((_placeholders$i = placeholders[i]) !== null && _placeholders$i !== void 0 ? _placeholders$i : "");
  }, "");
}, createSingleConstant = function(Type) {
  var tagFunction = function(literals) {
    for (var _len2 = arguments.length, placeholders = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)
      placeholders[_key2 - 1] = arguments[_key2];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return Type.get(input);
  };
  return tagFunction.none = Type.none, tagFunction;
}, createPluralConstant = function(Type) {
  return function(literals) {
    for (var _len3 = arguments.length, placeholders = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++)
      placeholders[_key3 - 1] = arguments[_key3];
    var input = concatTemplateString.apply(void 0, [literals].concat(placeholders));
    return input === "" ? Type.all() : Type.get(splitByCommasWithEscapes(input));
  };
}, $bounty = createSingleConstant(import_kolmafia.Bounty), $bounties = createPluralConstant(import_kolmafia.Bounty), $class = createSingleConstant(import_kolmafia.Class), $classes = createPluralConstant(import_kolmafia.Class), $coinmaster = createSingleConstant(import_kolmafia.Coinmaster), $coinmasters = createPluralConstant(import_kolmafia.Coinmaster), $effect = createSingleConstant(import_kolmafia.Effect), $effects = createPluralConstant(import_kolmafia.Effect), $element = createSingleConstant(import_kolmafia.Element), $elements = createPluralConstant(import_kolmafia.Element), $familiar = createSingleConstant(import_kolmafia.Familiar), $familiars = createPluralConstant(import_kolmafia.Familiar), $item = createSingleConstant(import_kolmafia.Item), $items = createPluralConstant(import_kolmafia.Item), $location = createSingleConstant(import_kolmafia.Location), $locations = createPluralConstant(import_kolmafia.Location), $monster = createSingleConstant(import_kolmafia.Monster), $monsters = createPluralConstant(import_kolmafia.Monster), $phylum = createSingleConstant(import_kolmafia.Phylum), $phyla = createPluralConstant(import_kolmafia.Phylum), $servant = createSingleConstant(import_kolmafia.Servant), $servants = createPluralConstant(import_kolmafia.Servant), $skill = createSingleConstant(import_kolmafia.Skill), $skills = createPluralConstant(import_kolmafia.Skill), $slot = createSingleConstant(import_kolmafia.Slot), $slots = createPluralConstant(import_kolmafia.Slot), $stat = createSingleConstant(import_kolmafia.Stat), $stats = createPluralConstant(import_kolmafia.Stat), $thrall = createSingleConstant(import_kolmafia.Thrall), $thralls = createPluralConstant(import_kolmafia.Thrall), $path = createSingleConstant(import_kolmafia.Path), $paths = createPluralConstant(import_kolmafia.Path);

// src/main.ts
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  return raw || (raw = strings.slice(0)), Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var timeTwitchingLocations = $locations(_templateObject || (_templateObject = _taggedTemplateLiteral(["The Cave Before Time, An Illicit Bohemian Party, Moonshiners' Woods, The Roman Forum, The Post-Mall, The Spooky Old Abandoned Mine, The Rowdy Saloon, Globe Theatre Backstage, Globe Theatre Backstage, KoL Con Clan Party House, 12 West Main"]))), locketMonsters = (0, import_kolmafia2.getLocketMonsters)();
function main() {
  timeTwitchingLocations.forEach(function(location) {
    (0, import_kolmafia2.print)("===".concat(location.toString(), "==="), "blue"), (0, import_kolmafia2.getMonsters)(location).forEach(function(monster) {
      var monsterChecklist = {
        name: monster.name,
        locket: Object.keys(locketMonsters).includes(monster.name),
        manuel: (0, import_kolmafia2.monsterFactoidsAvailable)(monster, !1)
      };
      (0, import_kolmafia2.print)("".concat(monster.name)), !monsterChecklist.locket || monsterChecklist.manuel < 3 ? ((0, import_kolmafia2.print)("Missing:", "red"), monsterChecklist.locket || (0, import_kolmafia2.print)("Locket Entry", "red"), monsterChecklist.manuel < 3 && (0, import_kolmafia2.print)("".concat(3 - monsterChecklist.manuel, " Manuel Entr").concat(3 - monsterChecklist.manuel > 1 ? "ies" : "y"), "red")) : (0, import_kolmafia2.print)("Done!", "green");
    }), (0, import_kolmafia2.print)();
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
