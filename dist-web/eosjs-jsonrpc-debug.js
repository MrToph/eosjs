var eosjs_jsonrpc =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eosjs-jsonrpc.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/eosjs-jsonrpc.ts":
/*!******************************!*\
  !*** ./src/eosjs-jsonrpc.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * @module JSON-RPC
 */
// copyright defined in eosjs/LICENSE.txt
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var eosjs_numeric_1 = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
var eosjs_rpcerror_1 = __webpack_require__(/*! ./eosjs-rpcerror */ "./src/eosjs-rpcerror.ts");
function arrayToHex(data) {
    var e_1, _a;
    var result = "";
    try {
        for (var data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
            var x = data_1_1.value;
            result += ("00" + x.toString(16)).slice(-2);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
/** Make RPC calls */
var JsonRpc = /** @class */ (function () {
    /**
     * @param args
     *    * `fetch`:
     *      * browsers: leave `null` or `undefined`
     *      * node: provide an implementation
     */
    function JsonRpc(endpoint, args) {
        if (args === void 0) { args = {}; }
        this.endpoint = endpoint;
        if (args.fetch) {
            this.fetchBuiltin = args.fetch;
        }
        else {
            this.fetchBuiltin = global.fetch;
        }
    }
    /** Post `body` to `endpoint + path`. Throws detailed error information in `RpcError` when available. */
    JsonRpc.prototype.fetch = function (path, body) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, f, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        f = this.fetchBuiltin;
                        return [4 /*yield*/, f(this.endpoint + path, {
                                body: JSON.stringify(body),
                                method: "POST",
                            })];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        if (json.processed && json.processed.except) {
                            throw new eosjs_rpcerror_1.default(json);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        e_2.isFetchError = true;
                        throw e_2;
                    case 4:
                        if (!response.ok) {
                            throw new eosjs_rpcerror_1.default(json);
                        }
                        return [2 /*return*/, json];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_abi` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_abi = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_abi", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_account` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_account = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_account", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block_header_state` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_block_header_state = function (block_num_or_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block_header_state", { block_num_or_id: block_num_or_id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_block` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_block = function (block_num_or_id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_block", { block_num_or_id: block_num_or_id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_code` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_code = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_code", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_balance` */
    JsonRpc.prototype.get_currency_balance = function (code, account, symbol) {
        if (symbol === void 0) { symbol = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_balance", { code: code, account: account, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_currency_stats` */
    JsonRpc.prototype.get_currency_stats = function (code, symbol) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_currency_stats", { code: code, symbol: symbol })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_info` */
    JsonRpc.prototype.get_info = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_info", {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producer_schedule` */
    JsonRpc.prototype.get_producer_schedule = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producer_schedule", {})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_producers` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_producers = function (json, lower_bound, limit) {
        if (json === void 0) { json = true; }
        if (lower_bound === void 0) { lower_bound = ""; }
        if (limit === void 0) { limit = 50; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_producers", { json: json, lower_bound: lower_bound, limit: limit })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_raw_code_and_abi` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.get_raw_code_and_abi = function (account_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_raw_code_and_abi", { account_name: account_name })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** calls `/v1/chain/get_raw_code_and_abi` and pulls out unneeded raw wasm code */
    // TODO: use `/v1/chain/get_raw_abi` directly when it becomes available
    JsonRpc.prototype.getRawAbi = function (accountName) {
        return __awaiter(this, void 0, void 0, function () {
            var rawCodeAndAbi, abi;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get_raw_code_and_abi(accountName)];
                    case 1:
                        rawCodeAndAbi = _a.sent();
                        abi = eosjs_numeric_1.base64ToBinary(rawCodeAndAbi.abi);
                        return [2 /*return*/, { accountName: rawCodeAndAbi.account_name, abi: abi }];
                }
            });
        });
    };
    /** Raw call to `/v1/chain/get_table_rows` */
    JsonRpc.prototype.get_table_rows = function (_a) {
        var _b = _a.json, json = _b === void 0 ? true : _b, code = _a.code, scope = _a.scope, table = _a.table, _c = _a.table_key, table_key = _c === void 0 ? "" : _c, _d = _a.lower_bound, lower_bound = _d === void 0 ? "" : _d, _e = _a.upper_bound, upper_bound = _e === void 0 ? "" : _e, _f = _a.index_position, index_position = _f === void 0 ? 1 : _f, _g = _a.key_type, key_type = _g === void 0 ? "" : _g, _h = _a.limit, limit = _h === void 0 ? 10 : _h;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/get_table_rows", {
                            json: json,
                            code: code,
                            scope: scope,
                            table: table,
                            table_key: table_key,
                            lower_bound: lower_bound,
                            upper_bound: upper_bound,
                            index_position: index_position,
                            key_type: key_type,
                            limit: limit,
                        })];
                    case 1: return [2 /*return*/, _j.sent()];
                }
            });
        });
    };
    /** Get subset of `availableKeys` needed to meet authorities in `transaction`. Implements `AuthorityProvider` */
    JsonRpc.prototype.getRequiredKeys = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = eosjs_numeric_1.convertLegacyPublicKeys;
                        return [4 /*yield*/, this.fetch("/v1/chain/get_required_keys", {
                                transaction: args.transaction,
                                available_keys: args.availableKeys,
                            })];
                    case 1: return [2 /*return*/, _a.apply(void 0, [(_b.sent()).required_keys])];
                }
            });
        });
    };
    /** Push a serialized transaction */
    JsonRpc.prototype.push_transaction = function (_a) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/chain/push_transaction", {
                            signatures: signatures,
                            compression: 0,
                            packed_context_free_data: "",
                            packed_trx: arrayToHex(serializedTransaction),
                        })];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/db_size/get` */
    JsonRpc.prototype.db_size_get = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, this.fetch("/v1/db_size/get", {})];
                case 1: return [2 /*return*/, _a.sent()];
            }
        }); });
    };
    /** Raw call to `/v1/history/get_actions` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_actions = function (account_name, pos, offset) {
        if (pos === void 0) { pos = null; }
        if (offset === void 0) { offset = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_actions", { account_name: account_name, pos: pos, offset: offset })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_transaction` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_transaction = function (id, block_num_hint) {
        if (block_num_hint === void 0) { block_num_hint = null; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_transaction", { id: id, block_num_hint: block_num_hint })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_key_accounts` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_key_accounts = function (public_key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_key_accounts", { public_key: public_key })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Raw call to `/v1/history/get_controlled_accounts` */
    // tslint:disable-next-line:variable-name
    JsonRpc.prototype.history_get_controlled_accounts = function (controlling_account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fetch("/v1/history/get_controlled_accounts", { controlling_account: controlling_account })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return JsonRpc;
}()); // JsonRpc
exports.default = JsonRpc;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/eosjs-numeric.ts":
/*!******************************!*\
  !*** ./src/eosjs-numeric.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module Numeric
 */
// copyright defined in eosjs/LICENSE.txt
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:no-var-requires
var ripemd160 = __webpack_require__(/*! ./ripemd */ "./src/ripemd.js").RIPEMD160.hash;
var base58Chars = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
function create_base58_map() {
    var base58M = Array(256).fill(-1);
    for (var i = 0; i < base58Chars.length; ++i) {
        base58M[base58Chars.charCodeAt(i)] = i;
    }
    return base58M;
}
var base58Map = create_base58_map();
function create_base64_map() {
    var base64M = Array(256).fill(-1);
    for (var i = 0; i < base64Chars.length; ++i) {
        base64M[base64Chars.charCodeAt(i)] = i;
    }
    base64M["=".charCodeAt(0)] = 0;
    return base64M;
}
var base64Map = create_base64_map();
/** Is `bignum` a negative number? */
function isNegative(bignum) {
    return (bignum[bignum.length - 1] & 0x80) !== 0;
}
exports.isNegative = isNegative;
/** Negate `bignum` */
function negate(bignum) {
    var carry = 1;
    for (var i = 0; i < bignum.length; ++i) {
        var x = (~bignum[i] & 0xff) + carry;
        bignum[i] = x;
        carry = x >> 8;
    }
}
exports.negate = negate;
/**
 * Convert an unsigned decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function decimalToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var srcDigit = s.charCodeAt(i);
        if (srcDigit < "0".charCodeAt(0) || srcDigit > "9".charCodeAt(0)) {
            throw new Error("invalid number");
        }
        var carry = srcDigit - "0".charCodeAt(0);
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 10 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("number is out of range");
        }
    }
    return result;
}
exports.decimalToBinary = decimalToBinary;
/**
 * Convert a signed decimal number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function signedDecimalToBinary(size, s) {
    var negative = s[0] === "-";
    if (negative) {
        s = s.substr(1);
    }
    var result = decimalToBinary(size, s);
    if (negative) {
        negate(result);
        if (!isNegative(result)) {
            throw new Error("number is out of range");
        }
    }
    else if (isNegative(result)) {
        throw new Error("number is out of range");
    }
    return result;
}
exports.signedDecimalToBinary = signedDecimalToBinary;
/**
 * Convert `bignum` to an unsigned decimal number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var result = Array(minDigits).fill("0".charCodeAt(0));
    for (var i = bignum.length - 1; i >= 0; --i) {
        var carry = bignum[i];
        for (var j = 0; j < result.length; ++j) {
            var x = ((result[j] - "0".charCodeAt(0)) << 8) + carry;
            result[j] = "0".charCodeAt(0) + x % 10;
            carry = (x / 10) | 0;
        }
        while (carry) {
            result.push("0".charCodeAt(0) + carry % 10);
            carry = (carry / 10) | 0;
        }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToDecimal = binaryToDecimal;
/**
 * Convert `bignum` to a signed decimal number
 * @param minDigits 0-pad result to this many digits
 */
function signedBinaryToDecimal(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    if (isNegative(bignum)) {
        var x = bignum.slice();
        negate(x);
        return "-" + binaryToDecimal(x, minDigits);
    }
    return binaryToDecimal(bignum, minDigits);
}
exports.signedBinaryToDecimal = signedBinaryToDecimal;
/**
 * Convert an unsigned base-58 number in `s` to a bignum
 * @param size bignum size (bytes)
 */
function base58ToBinary(size, s) {
    var result = new Uint8Array(size);
    for (var i = 0; i < s.length; ++i) {
        var carry = base58Map[s.charCodeAt(i)];
        if (carry < 0) {
            throw new Error("invalid base-58 value");
        }
        for (var j = 0; j < size; ++j) {
            var x = result[j] * 58 + carry;
            result[j] = x;
            carry = x >> 8;
        }
        if (carry) {
            throw new Error("base-58 value is out of range");
        }
    }
    result.reverse();
    return result;
}
exports.base58ToBinary = base58ToBinary;
/**
 * Convert `bignum` to a base-58 number
 * @param minDigits 0-pad result to this many digits
 */
function binaryToBase58(bignum, minDigits) {
    if (minDigits === void 0) { minDigits = 1; }
    var e_1, _a, e_2, _b;
    var result = [];
    try {
        for (var bignum_1 = __values(bignum), bignum_1_1 = bignum_1.next(); !bignum_1_1.done; bignum_1_1 = bignum_1.next()) {
            var byte = bignum_1_1.value;
            var carry = byte;
            for (var j = 0; j < result.length; ++j) {
                var x = (base58Map[result[j]] << 8) + carry;
                result[j] = base58Chars.charCodeAt(x % 58);
                carry = (x / 58) | 0;
            }
            while (carry) {
                result.push(base58Chars.charCodeAt(carry % 58));
                carry = (carry / 58) | 0;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (bignum_1_1 && !bignum_1_1.done && (_a = bignum_1.return)) _a.call(bignum_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var bignum_2 = __values(bignum), bignum_2_1 = bignum_2.next(); !bignum_2_1.done; bignum_2_1 = bignum_2.next()) {
            var byte = bignum_2_1.value;
            if (byte) {
                break;
            }
            else {
                result.push("1".charCodeAt(0));
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (bignum_2_1 && !bignum_2_1.done && (_b = bignum_2.return)) _b.call(bignum_2);
        }
        finally { if (e_2) throw e_2.error; }
    }
    result.reverse();
    return String.fromCharCode.apply(String, __spread(result));
}
exports.binaryToBase58 = binaryToBase58;
/** Convert an unsigned base-64 number in `s` to a bignum */
function base64ToBinary(s) {
    var len = s.length;
    if ((len & 3) === 1 && s[len - 1] === "=") {
        len -= 1;
    } // fc appends an extra '='
    if ((len & 3) !== 0) {
        throw new Error("base-64 value is not padded correctly");
    }
    var groups = len >> 2;
    var bytes = groups * 3;
    if (len > 0 && s[len - 1] === "=") {
        if (s[len - 2] === "=") {
            bytes -= 2;
        }
        else {
            bytes -= 1;
        }
    }
    var result = new Uint8Array(bytes);
    for (var group = 0; group < groups; ++group) {
        var digit0 = base64Map[s.charCodeAt(group * 4 + 0)];
        var digit1 = base64Map[s.charCodeAt(group * 4 + 1)];
        var digit2 = base64Map[s.charCodeAt(group * 4 + 2)];
        var digit3 = base64Map[s.charCodeAt(group * 4 + 3)];
        result[group * 3 + 0] = (digit0 << 2) | (digit1 >> 4);
        if (group * 3 + 1 < bytes) {
            result[group * 3 + 1] = ((digit1 & 15) << 4) | (digit2 >> 2);
        }
        if (group * 3 + 2 < bytes) {
            result[group * 3 + 2] = ((digit2 & 3) << 6) | digit3;
        }
    }
    return result;
}
exports.base64ToBinary = base64ToBinary;
/** Public key data size, excluding type field */
exports.publicKeyDataSize = 33;
/** Private key data size, excluding type field */
exports.privateKeyDataSize = 32;
/** Signature data size, excluding type field */
exports.signatureDataSize = 65;
function digestSuffixRipemd160(data, suffix) {
    var d = new Uint8Array(data.length + suffix.length);
    for (var i = 0; i < data.length; ++i) {
        d[i] = data[i];
    }
    for (var i = 0; i < suffix.length; ++i) {
        d[data.length + i] = suffix.charCodeAt(i);
    }
    return ripemd160(d);
}
function stringToKey(s, type, size, suffix) {
    var whole = base58ToBinary(size + 4, s);
    var result = { type: type, data: new Uint8Array(whole.buffer, 0, size) };
    var digest = new Uint8Array(digestSuffixRipemd160(result.data, suffix));
    if (digest[0] !== whole[size + 0] || digest[1] !== whole[size + 1]
        || digest[2] !== whole[size + 2] || digest[3] !== whole[size + 3]) {
        throw new Error("checksum doesn't match");
    }
    return result;
}
function keyToString(key, suffix, prefix) {
    var digest = new Uint8Array(digestSuffixRipemd160(key.data, suffix));
    var whole = new Uint8Array(key.data.length + 4);
    for (var i = 0; i < key.data.length; ++i) {
        whole[i] = key.data[i];
    }
    for (var i = 0; i < 4; ++i) {
        whole[i + key.data.length] = digest[i];
    }
    return prefix + binaryToBase58(whole);
}
/** Convert key in `s` to binary form */
function stringToPublicKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing public key");
    }
    if (s.substr(0, 3) === "EOS") {
        var whole = base58ToBinary(exports.publicKeyDataSize + 4, s.substr(3));
        var key = { type: 0 /* k1 */, data: new Uint8Array(exports.publicKeyDataSize) };
        for (var i = 0; i < exports.publicKeyDataSize; ++i) {
            key.data[i] = whole[i];
        }
        var digest = new Uint8Array(ripemd160(key.data));
        if (digest[0] !== whole[exports.publicKeyDataSize] || digest[1] !== whole[34]
            || digest[2] !== whole[35] || digest[3] !== whole[36]) {
            throw new Error("checksum doesn't match");
        }
        return key;
    }
    else if (s.substr(0, 7) === "PUB_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.publicKeyDataSize, "K1");
    }
    else if (s.substr(0, 7) === "PUB_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.publicKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.stringToPublicKey = stringToPublicKey;
/** Convert `key` to string (base-58) form */
function publicKeyToString(key) {
    if (key.type === 0 /* k1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "K1", "PUB_K1_");
    }
    else if (key.type === 1 /* r1 */ && key.data.length === exports.publicKeyDataSize) {
        return keyToString(key, "R1", "PUB_R1_");
    }
    else {
        throw new Error("unrecognized public key format");
    }
}
exports.publicKeyToString = publicKeyToString;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKey(s) {
    if (s.substr(0, 3) === "EOS") {
        return publicKeyToString(stringToPublicKey(s));
    }
    return s;
}
exports.convertLegacyPublicKey = convertLegacyPublicKey;
/** If a key is in the legacy format (`EOS` prefix), then convert it to the new format (`PUB_K1_`).
 * Leaves other formats untouched
 */
function convertLegacyPublicKeys(keys) {
    return keys.map(convertLegacyPublicKey);
}
exports.convertLegacyPublicKeys = convertLegacyPublicKeys;
/** Convert key in `s` to binary form */
function stringToPrivateKey(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing private key");
    }
    if (s.substr(0, 7) === "PVT_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.privateKeyDataSize, "R1");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.stringToPrivateKey = stringToPrivateKey;
/** Convert `key` to string (base-58) form */
function privateKeyToString(key) {
    if (key.type === 1 /* r1 */) {
        return keyToString(key, "R1", "PVT_R1_");
    }
    else {
        throw new Error("unrecognized private key format");
    }
}
exports.privateKeyToString = privateKeyToString;
/** Convert key in `s` to binary form */
function stringToSignature(s) {
    if (typeof s !== "string") {
        throw new Error("expected string containing signature");
    }
    if (s.substr(0, 7) === "SIG_K1_") {
        return stringToKey(s.substr(7), 0 /* k1 */, exports.signatureDataSize, "K1");
    }
    else if (s.substr(0, 7) === "SIG_R1_") {
        return stringToKey(s.substr(7), 1 /* r1 */, exports.signatureDataSize, "R1");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.stringToSignature = stringToSignature;
/** Convert `signature` to string (base-58) form */
function signatureToString(signature) {
    if (signature.type === 0 /* k1 */) {
        return keyToString(signature, "K1", "SIG_K1_");
    }
    else if (signature.type === 1 /* r1 */) {
        return keyToString(signature, "R1", "SIG_R1_");
    }
    else {
        throw new Error("unrecognized signature format");
    }
}
exports.signatureToString = signatureToString;


/***/ }),

/***/ "./src/eosjs-rpcerror.ts":
/*!*******************************!*\
  !*** ./src/eosjs-rpcerror.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module RPC-Error
 */
// copyright defined in eosjs/LICENSE.txt
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/** Holds detailed error information */
var RpcError = /** @class */ (function (_super) {
    __extends(RpcError, _super);
    function RpcError(json) {
        var _this = this;
        if (json.error && json.error.details && json.error.details.length && json.error.details[0].message) {
            _this = _super.call(this, json.error.details[0].message) || this;
        }
        else if (json.processed && json.processed.except && json.processed.except.message) {
            _this = _super.call(this, json.processed.except.message) || this;
        }
        else {
            _this = _super.call(this, json.message) || this;
        }
        Object.setPrototypeOf(_this, RpcError.prototype);
        _this.json = json;
        return _this;
    }
    return RpcError;
}(Error));
exports.default = RpcError;


/***/ }),

/***/ "./src/ripemd.js":
/*!***********************!*\
  !*** ./src/ripemd.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://gist.githubusercontent.com/wlzla000/bac83df6d3c51916c4dd0bc947e46947/raw/7ee3462b095ab22580ddaf191f44a590da6fe33b/RIPEMD-160.js

/*
	RIPEMD-160.js

		developed
			by K. (https://github.com/wlzla000)
			on December 27-29, 2017,

		licensed under


		the MIT license

		Copyright (c) 2017 K.

		 Permission is hereby granted, free of charge, to any person
		obtaining a copy of this software and associated documentation
		files (the "Software"), to deal in the Software without
		restriction, including without limitation the rights to use,
		copy, modify, merge, publish, distribute, sublicense, and/or
		sell copies of the Software, and to permit persons to whom the
		Software is furnished to do so, subject to the following
		conditions:

		 The above copyright notice and this permission notice shall be
		included in all copies or substantial portions of the Software.

		 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
		EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
		OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
		NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
		HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
		WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
		FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
		OTHER DEALINGS IN THE SOFTWARE.
*/



class RIPEMD160
{
	constructor()
	{
		// https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf
		// http://shodhganga.inflibnet.ac.in/bitstream/10603/22978/13/13_appendix.pdf
	}

	static get_n_pad_bytes(message_size /* in bytes, 1 byte is 8 bits. */)
	{
		//  Obtain the number of bytes needed to pad the message.
		// It does not contain the size of the message size information.
		/*
			https://webcache.googleusercontent.com/search?q=cache:CnLOgolTHYEJ:https://www.cosic.esat.kuleuven.be/publications/article-317.pdf

			The Cryptographic Hash Function RIPEMD-160

			written by
				Bart Preneel,
				Hans Dobbertin,
				Antoon Bosselaers
			in
				1997.

			--------------------------------------------------

			§5     Description of RIPEMD-160

			......

			 In order to guarantee that the total input size is a
			multiple of 512 bits, the input is padded in the same
			way as for all the members of the MD4-family: one
			appends a single 1 followed by a string of 0s (the
			number of 0s lies between 0 and 511); the last 64 bits
			of the extended input contain the binary representation
			of the input size in bits, least significant byte first.
		*/
		/*
			https://tools.ietf.org/rfc/rfc1186.txt

			RFC 1186: MD4 Message Digest Algorithm.

			written by
				Ronald Linn Rivest
			in
				October 1990.

			--------------------------------------------------

			§3     MD4 Algorithm Description

			......

			Step 1. Append padding bits

			 The message is "padded" (extended) so that its length
			(in bits) is congruent to 448, modulo 512. That is, the
			message is extended so that it is just 64 bits shy of
			being a multiple of 512 bits long. Padding is always
			performed, even if the length of the message is already
			congruent to 448, modulo 512 (in which case 512 bits of
			padding are added).

			 Padding is performed as follows: a single "1" bit is
			appended to the message, and then enough zero bits are
			appended so that the length in bits of the padded
			message becomes congruent to 448, modulo 512.

			Step 2. Append length

			 A 64-bit representation of b (the length of the message
			before the padding bits were added) is appended to the
			result of the previous step. In the unlikely event that
			b is greater than 2^64, then only the low-order 64 bits
			of b are used. (These bits are appended as two 32-bit
			words and appended low-order word first in accordance
			with the previous conventions.)

			 At this point the resulting message (after padding with
			bits and with b) has a length that is an exact multiple
			of 512 bits. Equivalently, this message has a length
			that is an exact multiple of 16 (32-bit) words. Let
			M[0 ... N-1] denote the words of the resulting message,
			where N is a multiple of 16.
		*/
		// https://crypto.stackexchange.com/a/32407/54568
		/*
			Example case  # 1
				[0 bit: message.]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 2
				[512-bits: message]
				[1 bit: 1.]
				[447 bits: 0.]
				[64 bits: message size information.]

			Example case  # 3
				[(512 - 64 = 448) bits: message.]
				[1 bit: 1.]
				[511 bits: 0.]
				[64 bits: message size information.]

			Example case  # 4
				[(512 - 65 = 447) bits: message.]
				[1 bit: 1.]
				[0 bit: 0.]
				[64 bits: message size information.]
		*/
		// The number of padding zero bits:
		//      511 - [{(message size in bits) + 64} (mod 512)]
		return 64 - ((message_size + 8) & 0b00111111 /* 63 */);
	}
	static pad(message /* An ArrayBuffer. */)
	{
		const message_size = message.byteLength;
		const n_pad = RIPEMD160.get_n_pad_bytes(message_size);

		//  `Number.MAX_SAFE_INTEGER` is ((2 ** 53) - 1) and
		// bitwise operation in Javascript is done on 32-bits operands.
		const divmod = (dividend, divisor) => [
			Math.floor(dividend / divisor),
			dividend % divisor
		];
		/*
To shift

   00000000 000????? ???????? ???????? ???????? ???????? ???????? ????????
                                     t o
   00000000 ???????? ???????? ???????? ???????? ???????? ???????? ?????000

--------------------------------------------------------------------------------

Method #1

    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
   [00000000 000AAAAA AAAAAAAA AAAAAAAA] (<A> captured)
   [00000000 AAAAAAAA AAAAAAAA AAAAA000] (<A> shifted)
                         (<B> captured) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                     (<B> shifted) [BBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB] (<A> & <B_2> merged)
   [00000000 AAAAAAAA AAAAAAAA AAAAABBB][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		const uint32_max_plus_1 = 0x100000000; // (2 ** 32)
		const [
			msg_byte_size_most, // Value range [0, (2 ** 21) - 1].
			msg_byte_size_least // Value range [0, (2 ** 32) - 1].
		] = divmod(message_size, uint32_max_plus_1);
		const [
			carry, // Value range [0, 7].
			msg_bit_size_least // Value range [0, (2 ** 32) - 8].
		] = divmod(message_byte_size_least * 8, uint32_max_plus_1);
		const message_bit_size_most = message_byte_size_most * 8
			+ carry; // Value range [0, (2 ** 24) - 1].

--------------------------------------------------------------------------------

Method #2
    00000000 000????? ???????? ????????  ???????? ???????? ???????? ????????
      [00000 000AAAAA AAAAAAAA AAAAAAAA  AAA] (<A> captured)
                         (<B> captured) [000BBBBB BBBBBBBB BBBBBBBB BBBBBBBB]
                          (<B> shifted) [BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
   [00000000 AAAAAAAA AAAAAAAA AAAAAAAA][BBBBBBBB BBBBBBBB BBBBBBBB BBBBB000]
    00000000 ???????? ???????? ????????  ???????? ???????? ???????? ?????000

		*/
		const [
			msg_bit_size_most,
			msg_bit_size_least
		] = divmod(message_size, 536870912 /* (2 ** 29) */)
			.map((x, index) => (index ? (x * 8) : x));

		// `ArrayBuffer.transfer()` is not supported.
		const padded = new Uint8Array(message_size + n_pad + 8);
		padded.set(new Uint8Array(message), 0);
		const data_view = new DataView(padded.buffer);
		data_view.setUint8(message_size, 0b10000000);
		data_view.setUint32(
			message_size + n_pad,
			msg_bit_size_least,
			true // Little-endian
		);
		data_view.setUint32(
			message_size + n_pad + 4,
			msg_bit_size_most,
			true // Little-endian
		);

		return padded.buffer;
	}

	static f(j, x, y, z)
	{
		if(0 <= j && j <= 15)
		{ // Exclusive-OR
			return x ^ y ^ z;
		}
		if(16 <= j && j <= 31)
		{ // Multiplexing (muxing)
			return (x & y) | (~x & z);
		}
		if(32 <= j && j <= 47)
		{
			return (x | ~y) ^ z;
		}
		if(48 <= j && j <= 63)
		{ // Multiplexing (muxing)
			return (x & z) | (y & ~z);
		}
		if(64 <= j && j <= 79)
		{
			return x ^ (y | ~z);
		}
	}
	static K(j)
	{
		if(0 <= j && j <= 15)
		{
			return 0x00000000;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.SQRT2)
			return 0x5A827999;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.sqrt(3))
			return 0x6ED9EBA1;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.sqrt(5))
			return 0x8F1BBCDC;
		}
		if(64 <= j && j <= 79)
		{
			// Math.floor((2 ** 30) * Math.sqrt(7))
			return 0xA953FD4E;
		}
	}
	static KP(j) // K'
	{
		if(0 <= j && j <= 15)
		{
			// Math.floor((2 ** 30) * Math.cbrt(2))
			return 0x50A28BE6;
		}
		if(16 <= j && j <= 31)
		{
			// Math.floor((2 ** 30) * Math.cbrt(3))
			return 0x5C4DD124;
		}
		if(32 <= j && j <= 47)
		{
			// Math.floor((2 ** 30) * Math.cbrt(5))
			return 0x6D703EF3;
		}
		if(48 <= j && j <= 63)
		{
			// Math.floor((2 ** 30) * Math.cbrt(7))
			return 0x7A6D76E9;
		}
		if(64 <= j && j <= 79)
		{
			return 0x00000000;
		}
	}
	static add_modulo32(/* ...... */)
	{
		// 1.  Modulo addition (addition modulo) is associative.
		//    https://proofwiki.org/wiki/Modulo_Addition_is_Associative
 		// 2.  Bitwise operation in Javascript
		//    is done on 32-bits operands
		//    and results in a 32-bits value.
		return Array
			.from(arguments)
			.reduce((a, b) => (a + b), 0) | 0;
	}
	static rol32(value, count)
	{ // Cyclic left shift (rotate) on 32-bits value.
		return (value << count) | (value >>> (32 - count));
	}
	static hash(message /* An ArrayBuffer. */)
	{
		//////////       Padding       //////////

		// The padded message.
		const padded = RIPEMD160.pad(message);

		//////////     Compression     //////////

		// Message word selectors.
		const r = [
			0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
			7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,
			3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,
			1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
			4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13
		];
		const rP = [ // r'
			5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
			6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,
			15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,
			8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
			12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11
		];

		// Amounts for 'rotate left' operation.
		const s = [
			11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,
			7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,
			11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,
			11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,
			9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6
		];
		const sP = [ // s'
			8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,
			9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,
			9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,
			15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,
			8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11
		];

		// The size, in bytes, of a word.
		const word_size = 4;

		// The size, in bytes, of a 16-words block.
		const block_size = 64;

		// The number of the 16-words blocks.
		const t = padded.byteLength / block_size;

		//  The message after padding consists of t 16-word blocks that
		// are denoted with X_i[j], with 0≤i≤(t − 1) and 0≤j≤15.
		const X = (new Array(t))
			.fill(undefined)
			.map((_, i) => j => (
				new DataView(
					padded, i * block_size, block_size
				).getUint32(
					j * word_size,
					true // Little-endian
				)
			));

		//  The result of RIPEMD-160 is contained in five 32-bit words,
		// which form the internal state of the algorithm. The final
		// content of these five 32-bit words is converted to a 160-bit
		// string, again using the little-endian convention.
		let h = [
			0x67452301, // h_0
			0xEFCDAB89, // h_1
			0x98BADCFE, // h_2
			0x10325476, // h_3
			0xC3D2E1F0  // h_4
		];

		for(let i = 0; i < t; ++i)
		{
			let A = h[0], B = h[1], C = h[2], D = h[3], E = h[4];
			let AP = A, BP = B, CP = C, DP = D, EP = E;
			for(let j = 0; j < 80; ++j)
			{
				// Left rounds
				let T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							A,
							RIPEMD160.f(j, B, C, D),
							X[i](r[j]),
							RIPEMD160.K(j)
						),
						s[j]
					),
					E
				);
				A = E;
				E = D;
				D = RIPEMD160.rol32(C, 10);
				C = B;
				B = T;

				// Right rounds
				T = RIPEMD160.add_modulo32(
					RIPEMD160.rol32(
						RIPEMD160.add_modulo32(
							AP,
							RIPEMD160.f(
								79 - j,
								BP,
								CP,
								DP
							),
							X[i](rP[j]),
							RIPEMD160.KP(j)
						),
						sP[j]
					),
					EP
				);
				AP = EP;
				EP = DP;
				DP = RIPEMD160.rol32(CP, 10);
				CP = BP;
				BP = T;
			}
			let T = RIPEMD160.add_modulo32(h[1], C, DP);
			h[1] = RIPEMD160.add_modulo32(h[2], D, EP);
			h[2] = RIPEMD160.add_modulo32(h[3], E, AP);
			h[3] = RIPEMD160.add_modulo32(h[4], A, BP);
			h[4] = RIPEMD160.add_modulo32(h[0], B, CP);
			h[0] = T;
		}

		//  The final output string then consists of the concatenatation
		// of h_0, h_1, h_2, h_3, and h_4 after converting each h_i to a
		// 4-byte string using the little-endian convention.
		const result = new ArrayBuffer(20);
		const data_view = new DataView(result);
		h.forEach((h_i, i) => data_view.setUint32(i * 4, h_i, true));
		return result;
	}
}

module.exports = {
	RIPEMD160
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9baWRdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tpZF0vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtanNvbnJwYy50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL2Vvc2pzLW51bWVyaWMudHMiLCJ3ZWJwYWNrOi8vW2lkXS8uL3NyYy9lb3Nqcy1ycGNlcnJvci50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL3JpcGVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNENBQTRDOztBQUU1Qzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7O0dBRUc7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SUFBSSxDQUFDLENBQUM7SUFDeEIsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN2QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUNwQixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2Q7YUFBTTtZQUNILEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDtLQUNKO0lBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckMsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRTtRQUN6QyxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFL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Q0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0QkFBNEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJlb3Nqcy1qc29ucnBjLWRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW9zanMtanNvbnJwYy50c1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qKlxuICogQG1vZHVsZSBKU09OLVJQQ1xuICovXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxuXG5pbXBvcnQgeyBBYmlQcm92aWRlciwgQXV0aG9yaXR5UHJvdmlkZXIsIEF1dGhvcml0eVByb3ZpZGVyQXJncywgQmluYXJ5QWJpIH0gZnJvbSBcIi4vZW9zanMtYXBpLWludGVyZmFjZXNcIjtcbmltcG9ydCB7IGJhc2U2NFRvQmluYXJ5LCBjb252ZXJ0TGVnYWN5UHVibGljS2V5cyB9IGZyb20gXCIuL2Vvc2pzLW51bWVyaWNcIjtcbmltcG9ydCB7IEdldEFiaVJlc3VsdCwgR2V0QmxvY2tSZXN1bHQsIEdldENvZGVSZXN1bHQsIEdldEluZm9SZXN1bHQsIEdldFJhd0NvZGVBbmRBYmlSZXN1bHQsIFB1c2hUcmFuc2FjdGlvbkFyZ3MgfSBmcm9tIFwiLi9lb3Nqcy1ycGMtaW50ZXJmYWNlc1wiOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lXG5pbXBvcnQgUnBjRXJyb3IgZnJvbSBcIi4vZW9zanMtcnBjZXJyb3JcIjtcblxuZnVuY3Rpb24gYXJyYXlUb0hleChkYXRhOiBVaW50OEFycmF5KSB7XG4gICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgZm9yIChjb25zdCB4IG9mIGRhdGEpIHtcbiAgICAgICAgcmVzdWx0ICs9IChcIjAwXCIgKyB4LnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogTWFrZSBSUEMgY2FsbHMgKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEpzb25ScGMgaW1wbGVtZW50cyBBdXRob3JpdHlQcm92aWRlciwgQWJpUHJvdmlkZXIge1xuICAgIHB1YmxpYyBlbmRwb2ludDogc3RyaW5nO1xuICAgIHB1YmxpYyBmZXRjaEJ1aWx0aW46IChpbnB1dD86IFJlcXVlc3QgfCBzdHJpbmcsIGluaXQ/OiBSZXF1ZXN0SW5pdCkgPT4gUHJvbWlzZTxSZXNwb25zZT47XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gYXJnc1xuICAgICAqICAgICogYGZldGNoYDpcbiAgICAgKiAgICAgICogYnJvd3NlcnM6IGxlYXZlIGBudWxsYCBvciBgdW5kZWZpbmVkYFxuICAgICAqICAgICAgKiBub2RlOiBwcm92aWRlIGFuIGltcGxlbWVudGF0aW9uXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZW5kcG9pbnQ6IHN0cmluZywgYXJnczpcbiAgICAgICAgeyBmZXRjaD86IChpbnB1dD86IHN0cmluZyB8IFJlcXVlc3QsIGluaXQ/OiBSZXF1ZXN0SW5pdCkgPT4gUHJvbWlzZTxSZXNwb25zZT4gfSA9IHt9LFxuICAgICkge1xuICAgICAgICB0aGlzLmVuZHBvaW50ID0gZW5kcG9pbnQ7XG4gICAgICAgIGlmIChhcmdzLmZldGNoKSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoQnVpbHRpbiA9IGFyZ3MuZmV0Y2g7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZldGNoQnVpbHRpbiA9IChnbG9iYWwgYXMgYW55KS5mZXRjaDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiBQb3N0IGBib2R5YCB0byBgZW5kcG9pbnQgKyBwYXRoYC4gVGhyb3dzIGRldGFpbGVkIGVycm9yIGluZm9ybWF0aW9uIGluIGBScGNFcnJvcmAgd2hlbiBhdmFpbGFibGUuICovXG4gICAgcHVibGljIGFzeW5jIGZldGNoKHBhdGg6IHN0cmluZywgYm9keTogYW55KSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgbGV0IGpzb247XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmID0gdGhpcy5mZXRjaEJ1aWx0aW47XG4gICAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGYodGhpcy5lbmRwb2ludCArIHBhdGgsIHtcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKGpzb24ucHJvY2Vzc2VkICYmIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBScGNFcnJvcihqc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZS5pc0ZldGNoRXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUnBjRXJyb3IoanNvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2FiaWAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBnZXRfYWJpKGFjY291bnRfbmFtZTogc3RyaW5nKTogUHJvbWlzZTxHZXRBYmlSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2FiaVwiLCB7IGFjY291bnRfbmFtZSB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfYWNjb3VudGAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBnZXRfYWNjb3VudChhY2NvdW50X25hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9hY2NvdW50XCIsIHsgYWNjb3VudF9uYW1lIH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9ibG9ja19oZWFkZXJfc3RhdGVgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2Jsb2NrX2hlYWRlcl9zdGF0ZShibG9ja19udW1fb3JfaWQ6IG51bWJlciB8IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9ibG9ja19oZWFkZXJfc3RhdGVcIiwgeyBibG9ja19udW1fb3JfaWQgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2Jsb2NrYCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgcHVibGljIGFzeW5jIGdldF9ibG9jayhibG9ja19udW1fb3JfaWQ6IG51bWJlciB8IHN0cmluZyk6IFByb21pc2U8R2V0QmxvY2tSZXN1bHQ+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2Jsb2NrXCIsIHsgYmxvY2tfbnVtX29yX2lkIH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9jb2RlYCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgcHVibGljIGFzeW5jIGdldF9jb2RlKGFjY291bnRfbmFtZTogc3RyaW5nKTogUHJvbWlzZTxHZXRDb2RlUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9jb2RlXCIsIHsgYWNjb3VudF9uYW1lIH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9jdXJyZW5jeV9iYWxhbmNlYCAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRfY3VycmVuY3lfYmFsYW5jZShjb2RlOiBzdHJpbmcsIGFjY291bnQ6IHN0cmluZywgc3ltYm9sOiBzdHJpbmcgPSBudWxsKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X2JhbGFuY2VcIiwgeyBjb2RlLCBhY2NvdW50LCBzeW1ib2wgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvY2hhaW4vZ2V0X2N1cnJlbmN5X3N0YXRzYCAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRfY3VycmVuY3lfc3RhdHMoY29kZTogc3RyaW5nLCBzeW1ib2w6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9jdXJyZW5jeV9zdGF0c1wiLCB7IGNvZGUsIHN5bWJvbCB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfaW5mb2AgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0X2luZm8oKTogUHJvbWlzZTxHZXRJbmZvUmVzdWx0PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2NoYWluL2dldF9pbmZvXCIsIHt9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfcHJvZHVjZXJfc2NoZWR1bGVgICovXG4gICAgcHVibGljIGFzeW5jIGdldF9wcm9kdWNlcl9zY2hlZHVsZSgpOiBQcm9taXNlPGFueT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcHJvZHVjZXJfc2NoZWR1bGVcIiwge30pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2NoYWluL2dldF9wcm9kdWNlcnNgICovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnZhcmlhYmxlLW5hbWVcbiAgICBwdWJsaWMgYXN5bmMgZ2V0X3Byb2R1Y2Vycyhqc29uID0gdHJ1ZSwgbG93ZXJfYm91bmQgPSBcIlwiLCBsaW1pdCA9IDUwKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vZ2V0X3Byb2R1Y2Vyc1wiLCB7IGpzb24sIGxvd2VyX2JvdW5kLCBsaW1pdCB9KTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfcmF3X2NvZGVfYW5kX2FiaWAgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBnZXRfcmF3X2NvZGVfYW5kX2FiaShhY2NvdW50X25hbWU6IHN0cmluZyk6IFByb21pc2U8R2V0UmF3Q29kZUFuZEFiaVJlc3VsdD4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcmF3X2NvZGVfYW5kX2FiaVwiLCB7IGFjY291bnRfbmFtZSB9KTtcbiAgICB9XG5cbiAgICAvKiogY2FsbHMgYC92MS9jaGFpbi9nZXRfcmF3X2NvZGVfYW5kX2FiaWAgYW5kIHB1bGxzIG91dCB1bm5lZWRlZCByYXcgd2FzbSBjb2RlICovXG4gICAgLy8gVE9ETzogdXNlIGAvdjEvY2hhaW4vZ2V0X3Jhd19hYmlgIGRpcmVjdGx5IHdoZW4gaXQgYmVjb21lcyBhdmFpbGFibGVcbiAgICBwdWJsaWMgYXN5bmMgZ2V0UmF3QWJpKGFjY291bnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPEJpbmFyeUFiaT4ge1xuICAgICAgICBjb25zdCByYXdDb2RlQW5kQWJpID0gYXdhaXQgdGhpcy5nZXRfcmF3X2NvZGVfYW5kX2FiaShhY2NvdW50TmFtZSk7XG4gICAgICAgIGNvbnN0IGFiaSA9IGJhc2U2NFRvQmluYXJ5KHJhd0NvZGVBbmRBYmkuYWJpKTtcbiAgICAgICAgcmV0dXJuIHsgYWNjb3VudE5hbWU6IHJhd0NvZGVBbmRBYmkuYWNjb3VudF9uYW1lLCBhYmkgfTtcbiAgICB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9jaGFpbi9nZXRfdGFibGVfcm93c2AgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0X3RhYmxlX3Jvd3Moe1xuICAgICAgICBqc29uID0gdHJ1ZSxcbiAgICAgICAgY29kZSxcbiAgICAgICAgc2NvcGUsXG4gICAgICAgIHRhYmxlLFxuICAgICAgICB0YWJsZV9rZXkgPSBcIlwiLFxuICAgICAgICBsb3dlcl9ib3VuZCA9IFwiXCIsXG4gICAgICAgIHVwcGVyX2JvdW5kID0gXCJcIixcbiAgICAgICAgaW5kZXhfcG9zaXRpb24gPSAxLFxuICAgICAgICBrZXlfdHlwZSA9IFwiXCIsXG4gICAgICAgIGxpbWl0ID0gMTAsXG4gICAgIH06IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFxuICAgICAgICAgICAgXCIvdjEvY2hhaW4vZ2V0X3RhYmxlX3Jvd3NcIiwge1xuICAgICAgICAgICAgICAgIGpzb24sXG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICBzY29wZSxcbiAgICAgICAgICAgICAgICB0YWJsZSxcbiAgICAgICAgICAgICAgICB0YWJsZV9rZXksXG4gICAgICAgICAgICAgICAgbG93ZXJfYm91bmQsXG4gICAgICAgICAgICAgICAgdXBwZXJfYm91bmQsXG4gICAgICAgICAgICAgICAgaW5kZXhfcG9zaXRpb24sXG4gICAgICAgICAgICAgICAga2V5X3R5cGUsXG4gICAgICAgICAgICAgICAgbGltaXQsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiogR2V0IHN1YnNldCBvZiBgYXZhaWxhYmxlS2V5c2AgbmVlZGVkIHRvIG1lZXQgYXV0aG9yaXRpZXMgaW4gYHRyYW5zYWN0aW9uYC4gSW1wbGVtZW50cyBgQXV0aG9yaXR5UHJvdmlkZXJgICovXG4gICAgcHVibGljIGFzeW5jIGdldFJlcXVpcmVkS2V5cyhhcmdzOiBBdXRob3JpdHlQcm92aWRlckFyZ3MpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0TGVnYWN5UHVibGljS2V5cygoYXdhaXQgdGhpcy5mZXRjaChcIi92MS9jaGFpbi9nZXRfcmVxdWlyZWRfa2V5c1wiLCB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbjogYXJncy50cmFuc2FjdGlvbixcbiAgICAgICAgICAgIGF2YWlsYWJsZV9rZXlzOiBhcmdzLmF2YWlsYWJsZUtleXMsXG4gICAgICAgIH0pKS5yZXF1aXJlZF9rZXlzKTtcbiAgICB9XG5cbiAgICAvKiogUHVzaCBhIHNlcmlhbGl6ZWQgdHJhbnNhY3Rpb24gKi9cbiAgICBwdWJsaWMgYXN5bmMgcHVzaF90cmFuc2FjdGlvbih7IHNpZ25hdHVyZXMsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiB9OiBQdXNoVHJhbnNhY3Rpb25BcmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvY2hhaW4vcHVzaF90cmFuc2FjdGlvblwiLCB7XG4gICAgICAgICAgICBzaWduYXR1cmVzLFxuICAgICAgICAgICAgY29tcHJlc3Npb246IDAsXG4gICAgICAgICAgICBwYWNrZWRfY29udGV4dF9mcmVlX2RhdGE6IFwiXCIsXG4gICAgICAgICAgICBwYWNrZWRfdHJ4OiBhcnJheVRvSGV4KHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiksXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2RiX3NpemUvZ2V0YCAqL1xuICAgIHB1YmxpYyBhc3luYyBkYl9zaXplX2dldCgpIHsgcmV0dXJuIGF3YWl0IHRoaXMuZmV0Y2goXCIvdjEvZGJfc2l6ZS9nZXRcIiwge30pOyB9XG5cbiAgICAvKiogUmF3IGNhbGwgdG8gYC92MS9oaXN0b3J5L2dldF9hY3Rpb25zYCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgcHVibGljIGFzeW5jIGhpc3RvcnlfZ2V0X2FjdGlvbnMoYWNjb3VudF9uYW1lOiBzdHJpbmcsIHBvczogbnVtYmVyID0gbnVsbCwgb2Zmc2V0OiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2hpc3RvcnkvZ2V0X2FjdGlvbnNcIiwgeyBhY2NvdW50X25hbWUsIHBvcywgb2Zmc2V0IH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2hpc3RvcnkvZ2V0X3RyYW5zYWN0aW9uYCAqL1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp2YXJpYWJsZS1uYW1lXG4gICAgcHVibGljIGFzeW5jIGhpc3RvcnlfZ2V0X3RyYW5zYWN0aW9uKGlkOiBzdHJpbmcsIGJsb2NrX251bV9oaW50OiBudW1iZXIgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2hpc3RvcnkvZ2V0X3RyYW5zYWN0aW9uXCIsIHsgaWQsIGJsb2NrX251bV9oaW50IH0pO1xuICAgIH1cblxuICAgIC8qKiBSYXcgY2FsbCB0byBgL3YxL2hpc3RvcnkvZ2V0X2tleV9hY2NvdW50c2AgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBoaXN0b3J5X2dldF9rZXlfYWNjb3VudHMocHVibGljX2tleTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKFwiL3YxL2hpc3RvcnkvZ2V0X2tleV9hY2NvdW50c1wiLCB7IHB1YmxpY19rZXkgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJhdyBjYWxsIHRvIGAvdjEvaGlzdG9yeS9nZXRfY29udHJvbGxlZF9hY2NvdW50c2AgKi9cbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dmFyaWFibGUtbmFtZVxuICAgIHB1YmxpYyBhc3luYyBoaXN0b3J5X2dldF9jb250cm9sbGVkX2FjY291bnRzKGNvbnRyb2xsaW5nX2FjY291bnQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5mZXRjaChcIi92MS9oaXN0b3J5L2dldF9jb250cm9sbGVkX2FjY291bnRzXCIsIHsgY29udHJvbGxpbmdfYWNjb3VudCB9KTtcbiAgICB9XG59IC8vIEpzb25ScGNcbiIsIi8qKlxuICogQG1vZHVsZSBOdW1lcmljXG4gKi9cbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby12YXItcmVxdWlyZXNcbmNvbnN0IHJpcGVtZDE2MCA9IHJlcXVpcmUoXCIuL3JpcGVtZFwiKS5SSVBFTUQxNjAuaGFzaCBhcyAoYTogVWludDhBcnJheSkgPT4gQXJyYXlCdWZmZXI7XG5cbmNvbnN0IGJhc2U1OENoYXJzID0gXCIxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6XCI7XG5jb25zdCBiYXNlNjRDaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVfYmFzZTU4X21hcCgpIHtcbiAgICBjb25zdCBiYXNlNThNID0gQXJyYXkoMjU2KS5maWxsKC0xKSBhcyBudW1iZXJbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2U1OENoYXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGJhc2U1OE1bYmFzZTU4Q2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTU4TTtcbn1cblxuY29uc3QgYmFzZTU4TWFwID0gY3JlYXRlX2Jhc2U1OF9tYXAoKTtcblxuZnVuY3Rpb24gY3JlYXRlX2Jhc2U2NF9tYXAoKSB7XG4gICAgY29uc3QgYmFzZTY0TSA9IEFycmF5KDI1NikuZmlsbCgtMSkgYXMgbnVtYmVyW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlNjRDaGFycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBiYXNlNjRNW2Jhc2U2NENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgICB9XG4gICAgYmFzZTY0TVtcIj1cIi5jaGFyQ29kZUF0KDApXSA9IDA7XG4gICAgcmV0dXJuIGJhc2U2NE07XG59XG5cbmNvbnN0IGJhc2U2NE1hcCA9IGNyZWF0ZV9iYXNlNjRfbWFwKCk7XG5cbi8qKiBJcyBgYmlnbnVtYCBhIG5lZ2F0aXZlIG51bWJlcj8gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05lZ2F0aXZlKGJpZ251bTogVWludDhBcnJheSkge1xuICAgIHJldHVybiAoYmlnbnVtW2JpZ251bS5sZW5ndGggLSAxXSAmIDB4ODApICE9PSAwO1xufVxuXG4vKiogTmVnYXRlIGBiaWdudW1gICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKGJpZ251bTogVWludDhBcnJheSkge1xuICAgIGxldCBjYXJyeSA9IDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaWdudW0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgeCA9ICh+YmlnbnVtW2ldICYgMHhmZikgKyBjYXJyeTtcbiAgICAgICAgYmlnbnVtW2ldID0geDtcbiAgICAgICAgY2FycnkgPSB4ID4+IDg7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNpbWFsVG9CaW5hcnkoc2l6ZTogbnVtYmVyLCBzOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3Qgc3JjRGlnaXQgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChzcmNEaWdpdCA8IFwiMFwiLmNoYXJDb2RlQXQoMCkgfHwgc3JjRGlnaXQgPiBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FycnkgPSBzcmNEaWdpdCAtIFwiMFwiLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcmVzdWx0W2pdICogMTAgKyBjYXJyeTtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XG4gICAgICAgICAgICBjYXJyeSA9IHggPj4gODtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FycnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxuICogQHBhcmFtIHNpemUgYmlnbnVtIHNpemUgKGJ5dGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmVkRGVjaW1hbFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XG4gICAgY29uc3QgbmVnYXRpdmUgPSBzWzBdID09PSBcIi1cIjtcbiAgICBpZiAobmVnYXRpdmUpIHtcbiAgICAgICAgcyA9IHMuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBkZWNpbWFsVG9CaW5hcnkoc2l6ZSwgcyk7XG4gICAgaWYgKG5lZ2F0aXZlKSB7XG4gICAgICAgIG5lZ2F0ZShyZXN1bHQpO1xuICAgICAgICBpZiAoIWlzTmVnYXRpdmUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIGlzIG91dCBvZiByYW5nZVwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNOZWdhdGl2ZShyZXN1bHQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydCBgYmlnbnVtYCB0byBhbiB1bnNpZ25lZCBkZWNpbWFsIG51bWJlclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5VG9EZWNpbWFsKGJpZ251bTogVWludDhBcnJheSwgbWluRGlnaXRzID0gMSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5KG1pbkRpZ2l0cykuZmlsbChcIjBcIi5jaGFyQ29kZUF0KDApKSBhcyBudW1iZXJbXTtcbiAgICBmb3IgKGxldCBpID0gYmlnbnVtLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGxldCBjYXJyeSA9IGJpZ251bVtpXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAoKHJlc3VsdFtqXSAtIFwiMFwiLmNoYXJDb2RlQXQoMCkpIDw8IDgpICsgY2Fycnk7XG4gICAgICAgICAgICByZXN1bHRbal0gPSBcIjBcIi5jaGFyQ29kZUF0KDApICsgeCAlIDEwO1xuICAgICAgICAgICAgY2FycnkgPSAoeCAvIDEwKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChcIjBcIi5jaGFyQ29kZUF0KDApICsgY2FycnkgJSAxMCk7XG4gICAgICAgICAgICBjYXJyeSA9IChjYXJyeSAvIDEwKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSguLi5yZXN1bHQpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYSBzaWduZWQgZGVjaW1hbCBudW1iZXJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZEJpbmFyeVRvRGVjaW1hbChiaWdudW06IFVpbnQ4QXJyYXksIG1pbkRpZ2l0cyA9IDEpIHtcbiAgICBpZiAoaXNOZWdhdGl2ZShiaWdudW0pKSB7XG4gICAgICAgIGNvbnN0IHggPSBiaWdudW0uc2xpY2UoKTtcbiAgICAgICAgbmVnYXRlKHgpO1xuICAgICAgICByZXR1cm4gXCItXCIgKyBiaW5hcnlUb0RlY2ltYWwoeCwgbWluRGlnaXRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmFyeVRvRGVjaW1hbChiaWdudW0sIG1pbkRpZ2l0cyk7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiB1bnNpZ25lZCBiYXNlLTU4IG51bWJlciBpbiBgc2AgdG8gYSBiaWdudW1cbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2U1OFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBjYXJyeSA9IGJhc2U1OE1hcFtzLmNoYXJDb2RlQXQoaSldO1xuICAgICAgICBpZiAoY2FycnkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGJhc2UtNTggdmFsdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSByZXN1bHRbal0gKiA1OCArIGNhcnJ5O1xuICAgICAgICAgICAgcmVzdWx0W2pdID0geDtcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJyeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZS01OCB2YWx1ZSBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYSBiYXNlLTU4IG51bWJlclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5VG9CYXNlNTgoYmlnbnVtOiBVaW50OEFycmF5LCBtaW5EaWdpdHMgPSAxKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW10gYXMgbnVtYmVyW107XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGJpZ251bSkge1xuICAgICAgICBsZXQgY2FycnkgPSBieXRlO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgY29uc3QgeCA9IChiYXNlNThNYXBbcmVzdWx0W2pdXSA8PCA4KSArIGNhcnJ5O1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gYmFzZTU4Q2hhcnMuY2hhckNvZGVBdCh4ICUgNTgpO1xuICAgICAgICAgICAgY2FycnkgPSAoeCAvIDU4KSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChiYXNlNThDaGFycy5jaGFyQ29kZUF0KGNhcnJ5ICUgNTgpKTtcbiAgICAgICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gNTgpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGJ5dGUgb2YgYmlnbnVtKSB7XG4gICAgICAgIGlmIChieXRlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiMVwiLmNoYXJDb2RlQXQoMCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzdWx0KTtcbn1cblxuLyoqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS02NCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtICovXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VG9CaW5hcnkoczogc3RyaW5nKSB7XG4gICAgbGV0IGxlbiA9IHMubGVuZ3RoO1xuICAgIGlmICgobGVuICYgMykgPT09IDEgJiYgc1tsZW4gLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgbGVuIC09IDE7XG4gICAgfSAvLyBmYyBhcHBlbmRzIGFuIGV4dHJhICc9J1xuICAgIGlmICgobGVuICYgMykgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZS02NCB2YWx1ZSBpcyBub3QgcGFkZGVkIGNvcnJlY3RseVwiKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXBzID0gbGVuID4+IDI7XG4gICAgbGV0IGJ5dGVzID0gZ3JvdXBzICogMztcbiAgICBpZiAobGVuID4gMCAmJiBzW2xlbiAtIDFdID09PSBcIj1cIikge1xuICAgICAgICBpZiAoc1tsZW4gLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgICAgIGJ5dGVzIC09IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXRlcyAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcblxuICAgIGZvciAobGV0IGdyb3VwID0gMDsgZ3JvdXAgPCBncm91cHM7ICsrZ3JvdXApIHtcbiAgICAgICAgY29uc3QgZGlnaXQwID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAwKV07XG4gICAgICAgIGNvbnN0IGRpZ2l0MSA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMSldO1xuICAgICAgICBjb25zdCBkaWdpdDIgPSBiYXNlNjRNYXBbcy5jaGFyQ29kZUF0KGdyb3VwICogNCArIDIpXTtcbiAgICAgICAgY29uc3QgZGlnaXQzID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAzKV07XG4gICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAwXSA9IChkaWdpdDAgPDwgMikgfCAoZGlnaXQxID4+IDQpO1xuICAgICAgICBpZiAoZ3JvdXAgKiAzICsgMSA8IGJ5dGVzKSB7XG4gICAgICAgICAgICByZXN1bHRbZ3JvdXAgKiAzICsgMV0gPSAoKGRpZ2l0MSAmIDE1KSA8PCA0KSB8IChkaWdpdDIgPj4gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyb3VwICogMyArIDIgPCBieXRlcykge1xuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDJdID0gKChkaWdpdDIgJiAzKSA8PCA2KSB8IGRpZ2l0MztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogS2V5IHR5cGVzIHRoaXMgbGlicmFyeSBzdXBwb3J0cyAqL1xuZXhwb3J0IGNvbnN0IGVudW0gS2V5VHlwZSB7XG4gICAgazEgPSAwLFxuICAgIHIxID0gMSxcbn1cblxuLyoqIFB1YmxpYyBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IHB1YmxpY0tleURhdGFTaXplID0gMzM7XG5cbi8qKiBQcml2YXRlIGtleSBkYXRhIHNpemUsIGV4Y2x1ZGluZyB0eXBlIGZpZWxkICovXG5leHBvcnQgY29uc3QgcHJpdmF0ZUtleURhdGFTaXplID0gMzI7XG5cbi8qKiBTaWduYXR1cmUgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IHNpZ25hdHVyZURhdGFTaXplID0gNjU7XG5cbi8qKiBQdWJsaWMga2V5LCBwcml2YXRlIGtleSwgb3Igc2lnbmF0dXJlIGluIGJpbmFyeSBmb3JtICovXG5leHBvcnQgaW50ZXJmYWNlIEtleSB7XG4gICAgdHlwZTogS2V5VHlwZTtcbiAgICBkYXRhOiBVaW50OEFycmF5O1xufVxuXG5mdW5jdGlvbiBkaWdlc3RTdWZmaXhSaXBlbWQxNjAoZGF0YTogVWludDhBcnJheSwgc3VmZml4OiBzdHJpbmcpIHtcbiAgICBjb25zdCBkID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGggKyBzdWZmaXgubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZFtpXSA9IGRhdGFbaV07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VmZml4Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGRbZGF0YS5sZW5ndGggKyBpXSA9IHN1ZmZpeC5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwZW1kMTYwKGQpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb0tleShzOiBzdHJpbmcsIHR5cGU6IEtleVR5cGUsIHNpemU6IG51bWJlciwgc3VmZml4OiBzdHJpbmcpOiBLZXkge1xuICAgIGNvbnN0IHdob2xlID0gYmFzZTU4VG9CaW5hcnkoc2l6ZSArIDQsIHMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHsgdHlwZSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkod2hvbGUuYnVmZmVyLCAwLCBzaXplKSB9O1xuICAgIGNvbnN0IGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KGRpZ2VzdFN1ZmZpeFJpcGVtZDE2MChyZXN1bHQuZGF0YSwgc3VmZml4KSk7XG4gICAgaWYgKGRpZ2VzdFswXSAhPT0gd2hvbGVbc2l6ZSArIDBdIHx8IGRpZ2VzdFsxXSAhPT0gd2hvbGVbc2l6ZSArIDFdXG4gICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbc2l6ZSArIDJdIHx8IGRpZ2VzdFszXSAhPT0gd2hvbGVbc2l6ZSArIDNdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNoZWNrc3VtIGRvZXNuJ3QgbWF0Y2hcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGtleVRvU3RyaW5nKGtleTogS2V5LCBzdWZmaXg6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaWdlc3QgPSBuZXcgVWludDhBcnJheShkaWdlc3RTdWZmaXhSaXBlbWQxNjAoa2V5LmRhdGEsIHN1ZmZpeCkpO1xuICAgIGNvbnN0IHdob2xlID0gbmV3IFVpbnQ4QXJyYXkoa2V5LmRhdGEubGVuZ3RoICsgNCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkuZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICB3aG9sZVtpXSA9IGtleS5kYXRhW2ldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgICB3aG9sZVtpICsga2V5LmRhdGEubGVuZ3RoXSA9IGRpZ2VzdFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHByZWZpeCArIGJpbmFyeVRvQmFzZTU4KHdob2xlKTtcbn1cblxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvUHVibGljS2V5KHM6IHN0cmluZyk6IEtleSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIGlmIChzLnN1YnN0cigwLCAzKSA9PT0gXCJFT1NcIikge1xuICAgICAgICBjb25zdCB3aG9sZSA9IGJhc2U1OFRvQmluYXJ5KHB1YmxpY0tleURhdGFTaXplICsgNCwgcy5zdWJzdHIoMykpO1xuICAgICAgICBjb25zdCBrZXkgPSB7IHR5cGU6IEtleVR5cGUuazEsIGRhdGE6IG5ldyBVaW50OEFycmF5KHB1YmxpY0tleURhdGFTaXplKSB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHB1YmxpY0tleURhdGFTaXplOyArK2kpIHtcbiAgICAgICAgICAgIGtleS5kYXRhW2ldID0gd2hvbGVbaV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkocmlwZW1kMTYwKGtleS5kYXRhKSk7XG4gICAgICAgIGlmIChkaWdlc3RbMF0gIT09IHdob2xlW3B1YmxpY0tleURhdGFTaXplXSB8fCBkaWdlc3RbMV0gIT09IHdob2xlWzM0XVxuICAgICAgICAgICAgfHwgZGlnZXN0WzJdICE9PSB3aG9sZVszNV0gfHwgZGlnZXN0WzNdICE9PSB3aG9sZVszNl0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNoZWNrc3VtIGRvZXNuJ3QgbWF0Y2hcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9LMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIHB1YmxpY0tleURhdGFTaXplLCBcIksxXCIpO1xuICAgIH0gZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiUFVCX1IxX1wiKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgcHVibGljS2V5RGF0YVNpemUsIFwiUjFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIENvbnZlcnQgYGtleWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXG5leHBvcnQgZnVuY3Rpb24gcHVibGljS2V5VG9TdHJpbmcoa2V5OiBLZXkpIHtcbiAgICBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUuazEgJiYga2V5LmRhdGEubGVuZ3RoID09PSBwdWJsaWNLZXlEYXRhU2l6ZSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIksxXCIsIFwiUFVCX0sxX1wiKTtcbiAgICB9IGVsc2UgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLnIxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gcHVibGljS2V5RGF0YVNpemUpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgXCJSMVwiLCBcIlBVQl9SMV9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXG4gKiBMZWF2ZXMgb3RoZXIgZm9ybWF0cyB1bnRvdWNoZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQdWJsaWNLZXkoczogc3RyaW5nKSB7XG4gICAgaWYgKHMuc3Vic3RyKDAsIDMpID09PSBcIkVPU1wiKSB7XG4gICAgICAgIHJldHVybiBwdWJsaWNLZXlUb1N0cmluZyhzdHJpbmdUb1B1YmxpY0tleShzKSk7XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuXG4vKiogSWYgYSBrZXkgaXMgaW4gdGhlIGxlZ2FjeSBmb3JtYXQgKGBFT1NgIHByZWZpeCksIHRoZW4gY29udmVydCBpdCB0byB0aGUgbmV3IGZvcm1hdCAoYFBVQl9LMV9gKS5cbiAqIExlYXZlcyBvdGhlciBmb3JtYXRzIHVudG91Y2hlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlZ2FjeVB1YmxpY0tleXMoa2V5czogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ga2V5cy5tYXAoY29udmVydExlZ2FjeVB1YmxpY0tleSk7XG59XG5cbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ByaXZhdGVLZXkoczogc3RyaW5nKTogS2V5IHtcbiAgICBpZiAodHlwZW9mIHMgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHJpdmF0ZSBrZXlcIik7XG4gICAgfVxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJQVlRfUjFfXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLnIxLCBwcml2YXRlS2V5RGF0YVNpemUsIFwiUjFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHByaXZhdGUga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaXZhdGVLZXlUb1N0cmluZyhrZXk6IEtleSkge1xuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIlIxXCIsIFwiUFZUX1IxX1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgcHJpdmF0ZSBrZXkgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvU2lnbmF0dXJlKHM6IHN0cmluZyk6IEtleSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHNpZ25hdHVyZVwiKTtcbiAgICB9XG4gICAgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19LMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIHNpZ25hdHVyZURhdGFTaXplLCBcIksxXCIpO1xuICAgIH0gZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiU0lHX1IxX1wiKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgc2lnbmF0dXJlRGF0YVNpemUsIFwiUjFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHNpZ25hdHVyZSBmb3JtYXRcIik7XG4gICAgfVxufVxuXG4vKiogQ29udmVydCBgc2lnbmF0dXJlYCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1N0cmluZyhzaWduYXR1cmU6IEtleSkge1xuICAgIGlmIChzaWduYXR1cmUudHlwZSA9PT0gS2V5VHlwZS5rMSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoc2lnbmF0dXJlLCBcIksxXCIsIFwiU0lHX0sxX1wiKTtcbiAgICB9IGVsc2UgaWYgKHNpZ25hdHVyZS50eXBlID09PSBLZXlUeXBlLnIxKSB7XG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhzaWduYXR1cmUsIFwiUjFcIiwgXCJTSUdfUjFfXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0XCIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQG1vZHVsZSBSUEMtRXJyb3JcbiAqL1xuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcblxuLyoqIEhvbGRzIGRldGFpbGVkIGVycm9yIGluZm9ybWF0aW9uICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBScGNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICAvKiogRGV0YWlsZWQgZXJyb3IgaW5mb3JtYXRpb24gKi9cbiAgICBwdWJsaWMganNvbjogYW55O1xuXG4gICAgY29uc3RydWN0b3IoanNvbjogYW55KSB7XG4gICAgICAgIGlmIChqc29uLmVycm9yICYmIGpzb24uZXJyb3IuZGV0YWlscyAmJiBqc29uLmVycm9yLmRldGFpbHMubGVuZ3RoICYmIGpzb24uZXJyb3IuZGV0YWlsc1swXS5tZXNzYWdlKSB7XG4gICAgICAgICAgICBzdXBlcihqc29uLmVycm9yLmRldGFpbHNbMF0ubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5wcm9jZXNzZWQgJiYganNvbi5wcm9jZXNzZWQuZXhjZXB0ICYmIGpzb24ucHJvY2Vzc2VkLmV4Y2VwdC5tZXNzYWdlKSB7XG4gICAgICAgICAgICBzdXBlcihqc29uLnByb2Nlc3NlZC5leGNlcHQubWVzc2FnZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdXBlcihqc29uLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBScGNFcnJvci5wcm90b3R5cGUpO1xuICAgICAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIH1cbn1cbiIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vd2x6bGEwMDAvYmFjODNkZjZkM2M1MTkxNmM0ZGQwYmM5NDdlNDY5NDcvcmF3LzdlZTM0NjJiMDk1YWIyMjU4MGRkYWYxOTFmNDRhNTkwZGE2ZmUzM2IvUklQRU1ELTE2MC5qc1xuXG4vKlxuXHRSSVBFTUQtMTYwLmpzXG5cblx0XHRkZXZlbG9wZWRcblx0XHRcdGJ5IEsuIChodHRwczovL2dpdGh1Yi5jb20vd2x6bGEwMDApXG5cdFx0XHRvbiBEZWNlbWJlciAyNy0yOSwgMjAxNyxcblxuXHRcdGxpY2Vuc2VkIHVuZGVyXG5cblxuXHRcdHRoZSBNSVQgbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChjKSAyMDE3IEsuXG5cblx0XHQgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cblx0XHRvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuXHRcdGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuXHRcdHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuXHRcdGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuXHRcdHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG5cdFx0U29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcblx0XHRjb25kaXRpb25zOlxuXG5cdFx0IFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5cdFx0aW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHQgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcblx0XHRFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcblx0XHRPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuXHRcdE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG5cdFx0SE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG5cdFx0V0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG5cdFx0RlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuXHRcdE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBSSVBFTUQxNjBcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0Ly8gaHR0cHM6Ly93ZWJjYWNoZS5nb29nbGV1c2VyY29udGVudC5jb20vc2VhcmNoP3E9Y2FjaGU6Q25MT2dvbFRIWUVKOmh0dHBzOi8vd3d3LmNvc2ljLmVzYXQua3VsZXV2ZW4uYmUvcHVibGljYXRpb25zL2FydGljbGUtMzE3LnBkZlxuXHRcdC8vIGh0dHA6Ly9zaG9kaGdhbmdhLmluZmxpYm5ldC5hYy5pbi9iaXRzdHJlYW0vMTA2MDMvMjI5NzgvMTMvMTNfYXBwZW5kaXgucGRmXG5cdH1cblxuXHRzdGF0aWMgZ2V0X25fcGFkX2J5dGVzKG1lc3NhZ2Vfc2l6ZSAvKiBpbiBieXRlcywgMSBieXRlIGlzIDggYml0cy4gKi8pXG5cdHtcblx0XHQvLyAgT2J0YWluIHRoZSBudW1iZXIgb2YgYnl0ZXMgbmVlZGVkIHRvIHBhZCB0aGUgbWVzc2FnZS5cblx0XHQvLyBJdCBkb2VzIG5vdCBjb250YWluIHRoZSBzaXplIG9mIHRoZSBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXG5cdFx0Lypcblx0XHRcdGh0dHBzOi8vd2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NlYXJjaD9xPWNhY2hlOkNuTE9nb2xUSFlFSjpodHRwczovL3d3dy5jb3NpYy5lc2F0Lmt1bGV1dmVuLmJlL3B1YmxpY2F0aW9ucy9hcnRpY2xlLTMxNy5wZGZcblxuXHRcdFx0VGhlIENyeXB0b2dyYXBoaWMgSGFzaCBGdW5jdGlvbiBSSVBFTUQtMTYwXG5cblx0XHRcdHdyaXR0ZW4gYnlcblx0XHRcdFx0QmFydCBQcmVuZWVsLFxuXHRcdFx0XHRIYW5zIERvYmJlcnRpbixcblx0XHRcdFx0QW50b29uIEJvc3NlbGFlcnNcblx0XHRcdGluXG5cdFx0XHRcdDE5OTcuXG5cblx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRcdMKnNSAgICAgRGVzY3JpcHRpb24gb2YgUklQRU1ELTE2MFxuXG5cdFx0XHQuLi4uLi5cblxuXHRcdFx0IEluIG9yZGVyIHRvIGd1YXJhbnRlZSB0aGF0IHRoZSB0b3RhbCBpbnB1dCBzaXplIGlzIGFcblx0XHRcdG11bHRpcGxlIG9mIDUxMiBiaXRzLCB0aGUgaW5wdXQgaXMgcGFkZGVkIGluIHRoZSBzYW1lXG5cdFx0XHR3YXkgYXMgZm9yIGFsbCB0aGUgbWVtYmVycyBvZiB0aGUgTUQ0LWZhbWlseTogb25lXG5cdFx0XHRhcHBlbmRzIGEgc2luZ2xlIDEgZm9sbG93ZWQgYnkgYSBzdHJpbmcgb2YgMHMgKHRoZVxuXHRcdFx0bnVtYmVyIG9mIDBzIGxpZXMgYmV0d2VlbiAwIGFuZCA1MTEpOyB0aGUgbGFzdCA2NCBiaXRzXG5cdFx0XHRvZiB0aGUgZXh0ZW5kZWQgaW5wdXQgY29udGFpbiB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uXG5cdFx0XHRvZiB0aGUgaW5wdXQgc2l6ZSBpbiBiaXRzLCBsZWFzdCBzaWduaWZpY2FudCBieXRlIGZpcnN0LlxuXHRcdCovXG5cdFx0Lypcblx0XHRcdGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvcmZjL3JmYzExODYudHh0XG5cblx0XHRcdFJGQyAxMTg2OiBNRDQgTWVzc2FnZSBEaWdlc3QgQWxnb3JpdGhtLlxuXG5cdFx0XHR3cml0dGVuIGJ5XG5cdFx0XHRcdFJvbmFsZCBMaW5uIFJpdmVzdFxuXHRcdFx0aW5cblx0XHRcdFx0T2N0b2JlciAxOTkwLlxuXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0XHTCpzMgICAgIE1ENCBBbGdvcml0aG0gRGVzY3JpcHRpb25cblxuXHRcdFx0Li4uLi4uXG5cblx0XHRcdFN0ZXAgMS4gQXBwZW5kIHBhZGRpbmcgYml0c1xuXG5cdFx0XHQgVGhlIG1lc3NhZ2UgaXMgXCJwYWRkZWRcIiAoZXh0ZW5kZWQpIHNvIHRoYXQgaXRzIGxlbmd0aFxuXHRcdFx0KGluIGJpdHMpIGlzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuIFRoYXQgaXMsIHRoZVxuXHRcdFx0bWVzc2FnZSBpcyBleHRlbmRlZCBzbyB0aGF0IGl0IGlzIGp1c3QgNjQgYml0cyBzaHkgb2Zcblx0XHRcdGJlaW5nIGEgbXVsdGlwbGUgb2YgNTEyIGJpdHMgbG9uZy4gUGFkZGluZyBpcyBhbHdheXNcblx0XHRcdHBlcmZvcm1lZCwgZXZlbiBpZiB0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlIGlzIGFscmVhZHlcblx0XHRcdGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIgKGluIHdoaWNoIGNhc2UgNTEyIGJpdHMgb2Zcblx0XHRcdHBhZGRpbmcgYXJlIGFkZGVkKS5cblxuXHRcdFx0IFBhZGRpbmcgaXMgcGVyZm9ybWVkIGFzIGZvbGxvd3M6IGEgc2luZ2xlIFwiMVwiIGJpdCBpc1xuXHRcdFx0YXBwZW5kZWQgdG8gdGhlIG1lc3NhZ2UsIGFuZCB0aGVuIGVub3VnaCB6ZXJvIGJpdHMgYXJlXG5cdFx0XHRhcHBlbmRlZCBzbyB0aGF0IHRoZSBsZW5ndGggaW4gYml0cyBvZiB0aGUgcGFkZGVkXG5cdFx0XHRtZXNzYWdlIGJlY29tZXMgY29uZ3J1ZW50IHRvIDQ0OCwgbW9kdWxvIDUxMi5cblxuXHRcdFx0U3RlcCAyLiBBcHBlbmQgbGVuZ3RoXG5cblx0XHRcdCBBIDY0LWJpdCByZXByZXNlbnRhdGlvbiBvZiBiICh0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlXG5cdFx0XHRiZWZvcmUgdGhlIHBhZGRpbmcgYml0cyB3ZXJlIGFkZGVkKSBpcyBhcHBlbmRlZCB0byB0aGVcblx0XHRcdHJlc3VsdCBvZiB0aGUgcHJldmlvdXMgc3RlcC4gSW4gdGhlIHVubGlrZWx5IGV2ZW50IHRoYXRcblx0XHRcdGIgaXMgZ3JlYXRlciB0aGFuIDJeNjQsIHRoZW4gb25seSB0aGUgbG93LW9yZGVyIDY0IGJpdHNcblx0XHRcdG9mIGIgYXJlIHVzZWQuIChUaGVzZSBiaXRzIGFyZSBhcHBlbmRlZCBhcyB0d28gMzItYml0XG5cdFx0XHR3b3JkcyBhbmQgYXBwZW5kZWQgbG93LW9yZGVyIHdvcmQgZmlyc3QgaW4gYWNjb3JkYW5jZVxuXHRcdFx0d2l0aCB0aGUgcHJldmlvdXMgY29udmVudGlvbnMuKVxuXG5cdFx0XHQgQXQgdGhpcyBwb2ludCB0aGUgcmVzdWx0aW5nIG1lc3NhZ2UgKGFmdGVyIHBhZGRpbmcgd2l0aFxuXHRcdFx0Yml0cyBhbmQgd2l0aCBiKSBoYXMgYSBsZW5ndGggdGhhdCBpcyBhbiBleGFjdCBtdWx0aXBsZVxuXHRcdFx0b2YgNTEyIGJpdHMuIEVxdWl2YWxlbnRseSwgdGhpcyBtZXNzYWdlIGhhcyBhIGxlbmd0aFxuXHRcdFx0dGhhdCBpcyBhbiBleGFjdCBtdWx0aXBsZSBvZiAxNiAoMzItYml0KSB3b3Jkcy4gTGV0XG5cdFx0XHRNWzAgLi4uIE4tMV0gZGVub3RlIHRoZSB3b3JkcyBvZiB0aGUgcmVzdWx0aW5nIG1lc3NhZ2UsXG5cdFx0XHR3aGVyZSBOIGlzIGEgbXVsdGlwbGUgb2YgMTYuXG5cdFx0Ki9cblx0XHQvLyBodHRwczovL2NyeXB0by5zdGFja2V4Y2hhbmdlLmNvbS9hLzMyNDA3LzU0NTY4XG5cdFx0Lypcblx0XHRcdEV4YW1wbGUgY2FzZSAgIyAxXG5cdFx0XHRcdFswIGJpdDogbWVzc2FnZS5dXG5cdFx0XHRcdFsxIGJpdDogMS5dXG5cdFx0XHRcdFs0NDcgYml0czogMC5dXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxuXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMlxuXHRcdFx0XHRbNTEyLWJpdHM6IG1lc3NhZ2VdXG5cdFx0XHRcdFsxIGJpdDogMS5dXG5cdFx0XHRcdFs0NDcgYml0czogMC5dXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxuXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgM1xuXHRcdFx0XHRbKDUxMiAtIDY0ID0gNDQ4KSBiaXRzOiBtZXNzYWdlLl1cblx0XHRcdFx0WzEgYml0OiAxLl1cblx0XHRcdFx0WzUxMSBiaXRzOiAwLl1cblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXG5cblx0XHRcdEV4YW1wbGUgY2FzZSAgIyA0XG5cdFx0XHRcdFsoNTEyIC0gNjUgPSA0NDcpIGJpdHM6IG1lc3NhZ2UuXVxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxuXHRcdFx0XHRbMCBiaXQ6IDAuXVxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cblx0XHQqL1xuXHRcdC8vIFRoZSBudW1iZXIgb2YgcGFkZGluZyB6ZXJvIGJpdHM6XG5cdFx0Ly8gICAgICA1MTEgLSBbeyhtZXNzYWdlIHNpemUgaW4gYml0cykgKyA2NH0gKG1vZCA1MTIpXVxuXHRcdHJldHVybiA2NCAtICgobWVzc2FnZV9zaXplICsgOCkgJiAwYjAwMTExMTExIC8qIDYzICovKTtcblx0fVxuXHRzdGF0aWMgcGFkKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxuXHR7XG5cdFx0Y29uc3QgbWVzc2FnZV9zaXplID0gbWVzc2FnZS5ieXRlTGVuZ3RoO1xuXHRcdGNvbnN0IG5fcGFkID0gUklQRU1EMTYwLmdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUpO1xuXG5cdFx0Ly8gIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgaXMgKCgyICoqIDUzKSAtIDEpIGFuZFxuXHRcdC8vIGJpdHdpc2Ugb3BlcmF0aW9uIGluIEphdmFzY3JpcHQgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzLlxuXHRcdGNvbnN0IGRpdm1vZCA9IChkaXZpZGVuZCwgZGl2aXNvcikgPT4gW1xuXHRcdFx0TWF0aC5mbG9vcihkaXZpZGVuZCAvIGRpdmlzb3IpLFxuXHRcdFx0ZGl2aWRlbmQgJSBkaXZpc29yXG5cdFx0XTtcblx0XHQvKlxuVG8gc2hpZnRcblxuICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IG9cbiAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1ldGhvZCAjMVxuXG4gICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XG4gICBbMDAwMDAwMDAgMDAwQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUFdICg8QT4gY2FwdHVyZWQpXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUEwMDBdICg8QT4gc2hpZnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IGNhcHR1cmVkKSBbQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkJdXG4gICAgICAgICAgICAgICAgICAgICAoPEI+IHNoaWZ0ZWQpIFtCQkJdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXSAoPEE+ICYgPEJfMj4gbWVyZ2VkKVxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cbiAgICAwMDAwMDAwMCA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8wMDBcblxuXHRcdGNvbnN0IHVpbnQzMl9tYXhfcGx1c18xID0gMHgxMDAwMDAwMDA7IC8vICgyICoqIDMyKVxuXHRcdGNvbnN0IFtcblx0XHRcdG1zZ19ieXRlX3NpemVfbW9zdCwgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDIxKSAtIDFdLlxuXHRcdFx0bXNnX2J5dGVfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gMV0uXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIHVpbnQzMl9tYXhfcGx1c18xKTtcblx0XHRjb25zdCBbXG5cdFx0XHRjYXJyeSwgLy8gVmFsdWUgcmFuZ2UgWzAsIDddLlxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0IC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAzMikgLSA4XS5cblx0XHRdID0gZGl2bW9kKG1lc3NhZ2VfYnl0ZV9zaXplX2xlYXN0ICogOCwgdWludDMyX21heF9wbHVzXzEpO1xuXHRcdGNvbnN0IG1lc3NhZ2VfYml0X3NpemVfbW9zdCA9IG1lc3NhZ2VfYnl0ZV9zaXplX21vc3QgKiA4XG5cdFx0XHQrIGNhcnJ5OyAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMjQpIC0gMV0uXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1ldGhvZCAjMlxuICAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xuICAgICAgWzAwMDAwIDAwMEFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBICBBQUFdICg8QT4gY2FwdHVyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBjYXB0dXJlZCkgWzAwMEJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IHNoaWZ0ZWQpIFtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQV1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXG5cblx0XHQqL1xuXHRcdGNvbnN0IFtcblx0XHRcdG1zZ19iaXRfc2l6ZV9tb3N0LFxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0XG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIDUzNjg3MDkxMiAvKiAoMiAqKiAyOSkgKi8pXG5cdFx0XHQubWFwKCh4LCBpbmRleCkgPT4gKGluZGV4ID8gKHggKiA4KSA6IHgpKTtcblxuXHRcdC8vIGBBcnJheUJ1ZmZlci50cmFuc2ZlcigpYCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGNvbnN0IHBhZGRlZCA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2Vfc2l6ZSArIG5fcGFkICsgOCk7XG5cdFx0cGFkZGVkLnNldChuZXcgVWludDhBcnJheShtZXNzYWdlKSwgMCk7XG5cdFx0Y29uc3QgZGF0YV92aWV3ID0gbmV3IERhdGFWaWV3KHBhZGRlZC5idWZmZXIpO1xuXHRcdGRhdGFfdmlldy5zZXRVaW50OChtZXNzYWdlX3NpemUsIDBiMTAwMDAwMDApO1xuXHRcdGRhdGFfdmlldy5zZXRVaW50MzIoXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCxcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdCxcblx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxuXHRcdCk7XG5cdFx0ZGF0YV92aWV3LnNldFVpbnQzMihcblx0XHRcdG1lc3NhZ2Vfc2l6ZSArIG5fcGFkICsgNCxcblx0XHRcdG1zZ19iaXRfc2l6ZV9tb3N0LFxuXHRcdFx0dHJ1ZSAvLyBMaXR0bGUtZW5kaWFuXG5cdFx0KTtcblxuXHRcdHJldHVybiBwYWRkZWQuYnVmZmVyO1xuXHR9XG5cblx0c3RhdGljIGYoaiwgeCwgeSwgeilcblx0e1xuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxuXHRcdHsgLy8gRXhjbHVzaXZlLU9SXG5cdFx0XHRyZXR1cm4geCBeIHkgXiB6O1xuXHRcdH1cblx0XHRpZigxNiA8PSBqICYmIGogPD0gMzEpXG5cdFx0eyAvLyBNdWx0aXBsZXhpbmcgKG11eGluZylcblx0XHRcdHJldHVybiAoeCAmIHkpIHwgKH54ICYgeik7XG5cdFx0fVxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0Nylcblx0XHR7XG5cdFx0XHRyZXR1cm4gKHggfCB+eSkgXiB6O1xuXHRcdH1cblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXG5cdFx0eyAvLyBNdWx0aXBsZXhpbmcgKG11eGluZylcblx0XHRcdHJldHVybiAoeCAmIHopIHwgKHkgJiB+eik7XG5cdFx0fVxuXHRcdGlmKDY0IDw9IGogJiYgaiA8PSA3OSlcblx0XHR7XG5cdFx0XHRyZXR1cm4geCBeICh5IHwgfnopO1xuXHRcdH1cblx0fVxuXHRzdGF0aWMgSyhqKVxuXHR7XG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIDB4MDAwMDAwMDA7XG5cdFx0fVxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguU1FSVDIpXG5cdFx0XHRyZXR1cm4gMHg1QTgyNzk5OTtcblx0XHR9XG5cdFx0aWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDMpKVxuXHRcdFx0cmV0dXJuIDB4NkVEOUVCQTE7XG5cdFx0fVxuXHRcdGlmKDQ4IDw9IGogJiYgaiA8PSA2Mylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCg1KSlcblx0XHRcdHJldHVybiAweDhGMUJCQ0RDO1xuXHRcdH1cblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoNykpXG5cdFx0XHRyZXR1cm4gMHhBOTUzRkQ0RTtcblx0XHR9XG5cdH1cblx0c3RhdGljIEtQKGopIC8vIEsnXG5cdHtcblx0XHRpZigwIDw9IGogJiYgaiA8PSAxNSlcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCgyKSlcblx0XHRcdHJldHVybiAweDUwQTI4QkU2O1xuXHRcdH1cblx0XHRpZigxNiA8PSBqICYmIGogPD0gMzEpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMykpXG5cdFx0XHRyZXR1cm4gMHg1QzRERDEyNDtcblx0XHR9XG5cdFx0aWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDUpKVxuXHRcdFx0cmV0dXJuIDB4NkQ3MDNFRjM7XG5cdFx0fVxuXHRcdGlmKDQ4IDw9IGogJiYgaiA8PSA2Mylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg3KSlcblx0XHRcdHJldHVybiAweDdBNkQ3NkU5O1xuXHRcdH1cblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIDB4MDAwMDAwMDA7XG5cdFx0fVxuXHR9XG5cdHN0YXRpYyBhZGRfbW9kdWxvMzIoLyogLi4uLi4uICovKVxuXHR7XG5cdFx0Ly8gMS4gIE1vZHVsbyBhZGRpdGlvbiAoYWRkaXRpb24gbW9kdWxvKSBpcyBhc3NvY2lhdGl2ZS5cblx0XHQvLyAgICBodHRwczovL3Byb29md2lraS5vcmcvd2lraS9Nb2R1bG9fQWRkaXRpb25faXNfQXNzb2NpYXRpdmVcbiBcdFx0Ly8gMi4gIEJpdHdpc2Ugb3BlcmF0aW9uIGluIEphdmFzY3JpcHRcblx0XHQvLyAgICBpcyBkb25lIG9uIDMyLWJpdHMgb3BlcmFuZHNcblx0XHQvLyAgICBhbmQgcmVzdWx0cyBpbiBhIDMyLWJpdHMgdmFsdWUuXG5cdFx0cmV0dXJuIEFycmF5XG5cdFx0XHQuZnJvbShhcmd1bWVudHMpXG5cdFx0XHQucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKSB8IDA7XG5cdH1cblx0c3RhdGljIHJvbDMyKHZhbHVlLCBjb3VudClcblx0eyAvLyBDeWNsaWMgbGVmdCBzaGlmdCAocm90YXRlKSBvbiAzMi1iaXRzIHZhbHVlLlxuXHRcdHJldHVybiAodmFsdWUgPDwgY291bnQpIHwgKHZhbHVlID4+PiAoMzIgLSBjb3VudCkpO1xuXHR9XG5cdHN0YXRpYyBoYXNoKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxuXHR7XG5cdFx0Ly8vLy8vLy8vLyAgICAgICBQYWRkaW5nICAgICAgIC8vLy8vLy8vLy9cblxuXHRcdC8vIFRoZSBwYWRkZWQgbWVzc2FnZS5cblx0XHRjb25zdCBwYWRkZWQgPSBSSVBFTUQxNjAucGFkKG1lc3NhZ2UpO1xuXG5cdFx0Ly8vLy8vLy8vLyAgICAgQ29tcHJlc3Npb24gICAgIC8vLy8vLy8vLy9cblxuXHRcdC8vIE1lc3NhZ2Ugd29yZCBzZWxlY3RvcnMuXG5cdFx0Y29uc3QgciA9IFtcblx0XHRcdDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsXG5cdFx0XHQ3LCA0LCAxMywgMSwgMTAsIDYsIDE1LCAzLCAxMiwgMCwgOSwgNSwgMiwgMTQsIDExLCA4LFxuXHRcdFx0MywgMTAsIDE0LCA0LCA5LCAxNSwgOCwgMSwgMiwgNywgMCwgNiwgMTMsIDExLCA1LCAxMixcblx0XHRcdDEsIDksIDExLCAxMCwgMCwgOCwgMTIsIDQsIDEzLCAzLCA3LCAxNSwgMTQsIDUsIDYsIDIsXG5cdFx0XHQ0LCAwLCA1LCA5LCA3LCAxMiwgMiwgMTAsIDE0LCAxLCAzLCA4LCAxMSwgNiwgMTUsIDEzXG5cdFx0XTtcblx0XHRjb25zdCByUCA9IFsgLy8gcidcblx0XHRcdDUsIDE0LCA3LCAwLCA5LCAyLCAxMSwgNCwgMTMsIDYsIDE1LCA4LCAxLCAxMCwgMywgMTIsXG5cdFx0XHQ2LCAxMSwgMywgNywgMCwgMTMsIDUsIDEwLCAxNCwgMTUsIDgsIDEyLCA0LCA5LCAxLCAyLFxuXHRcdFx0MTUsIDUsIDEsIDMsIDcsIDE0LCA2LCA5LCAxMSwgOCwgMTIsIDIsIDEwLCAwLCA0LCAxMyxcblx0XHRcdDgsIDYsIDQsIDEsIDMsIDExLCAxNSwgMCwgNSwgMTIsIDIsIDEzLCA5LCA3LCAxMCwgMTQsXG5cdFx0XHQxMiwgMTUsIDEwLCA0LCAxLCA1LCA4LCA3LCA2LCAyLCAxMywgMTQsIDAsIDMsIDksIDExXG5cdFx0XTtcblxuXHRcdC8vIEFtb3VudHMgZm9yICdyb3RhdGUgbGVmdCcgb3BlcmF0aW9uLlxuXHRcdGNvbnN0IHMgPSBbXG5cdFx0XHQxMSwgMTQsIDE1LCAxMiwgNSwgOCwgNywgOSwgMTEsIDEzLCAxNCwgMTUsIDYsIDcsIDksIDgsXG5cdFx0XHQ3LCA2LCA4LCAxMywgMTEsIDksIDcsIDE1LCA3LCAxMiwgMTUsIDksIDExLCA3LCAxMywgMTIsXG5cdFx0XHQxMSwgMTMsIDYsIDcsIDE0LCA5LCAxMywgMTUsIDE0LCA4LCAxMywgNiwgNSwgMTIsIDcsIDUsXG5cdFx0XHQxMSwgMTIsIDE0LCAxNSwgMTQsIDE1LCA5LCA4LCA5LCAxNCwgNSwgNiwgOCwgNiwgNSwgMTIsXG5cdFx0XHQ5LCAxNSwgNSwgMTEsIDYsIDgsIDEzLCAxMiwgNSwgMTIsIDEzLCAxNCwgMTEsIDgsIDUsIDZcblx0XHRdO1xuXHRcdGNvbnN0IHNQID0gWyAvLyBzJ1xuXHRcdFx0OCwgOSwgOSwgMTEsIDEzLCAxNSwgMTUsIDUsIDcsIDcsIDgsIDExLCAxNCwgMTQsIDEyLCA2LFxuXHRcdFx0OSwgMTMsIDE1LCA3LCAxMiwgOCwgOSwgMTEsIDcsIDcsIDEyLCA3LCA2LCAxNSwgMTMsIDExLFxuXHRcdFx0OSwgNywgMTUsIDExLCA4LCA2LCA2LCAxNCwgMTIsIDEzLCA1LCAxNCwgMTMsIDEzLCA3LCA1LFxuXHRcdFx0MTUsIDUsIDgsIDExLCAxNCwgMTQsIDYsIDE0LCA2LCA5LCAxMiwgOSwgMTIsIDUsIDE1LCA4LFxuXHRcdFx0OCwgNSwgMTIsIDksIDEyLCA1LCAxNCwgNiwgOCwgMTMsIDYsIDUsIDE1LCAxMywgMTEsIDExXG5cdFx0XTtcblxuXHRcdC8vIFRoZSBzaXplLCBpbiBieXRlcywgb2YgYSB3b3JkLlxuXHRcdGNvbnN0IHdvcmRfc2l6ZSA9IDQ7XG5cblx0XHQvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgMTYtd29yZHMgYmxvY2suXG5cdFx0Y29uc3QgYmxvY2tfc2l6ZSA9IDY0O1xuXG5cdFx0Ly8gVGhlIG51bWJlciBvZiB0aGUgMTYtd29yZHMgYmxvY2tzLlxuXHRcdGNvbnN0IHQgPSBwYWRkZWQuYnl0ZUxlbmd0aCAvIGJsb2NrX3NpemU7XG5cblx0XHQvLyAgVGhlIG1lc3NhZ2UgYWZ0ZXIgcGFkZGluZyBjb25zaXN0cyBvZiB0IDE2LXdvcmQgYmxvY2tzIHRoYXRcblx0XHQvLyBhcmUgZGVub3RlZCB3aXRoIFhfaVtqXSwgd2l0aCAw4omkaeKJpCh0IOKIkiAxKSBhbmQgMOKJpGriiaQxNS5cblx0XHRjb25zdCBYID0gKG5ldyBBcnJheSh0KSlcblx0XHRcdC5maWxsKHVuZGVmaW5lZClcblx0XHRcdC5tYXAoKF8sIGkpID0+IGogPT4gKFxuXHRcdFx0XHRuZXcgRGF0YVZpZXcoXG5cdFx0XHRcdFx0cGFkZGVkLCBpICogYmxvY2tfc2l6ZSwgYmxvY2tfc2l6ZVxuXHRcdFx0XHQpLmdldFVpbnQzMihcblx0XHRcdFx0XHRqICogd29yZF9zaXplLFxuXHRcdFx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxuXHRcdFx0XHQpXG5cdFx0XHQpKTtcblxuXHRcdC8vICBUaGUgcmVzdWx0IG9mIFJJUEVNRC0xNjAgaXMgY29udGFpbmVkIGluIGZpdmUgMzItYml0IHdvcmRzLFxuXHRcdC8vIHdoaWNoIGZvcm0gdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBhbGdvcml0aG0uIFRoZSBmaW5hbFxuXHRcdC8vIGNvbnRlbnQgb2YgdGhlc2UgZml2ZSAzMi1iaXQgd29yZHMgaXMgY29udmVydGVkIHRvIGEgMTYwLWJpdFxuXHRcdC8vIHN0cmluZywgYWdhaW4gdXNpbmcgdGhlIGxpdHRsZS1lbmRpYW4gY29udmVudGlvbi5cblx0XHRsZXQgaCA9IFtcblx0XHRcdDB4Njc0NTIzMDEsIC8vIGhfMFxuXHRcdFx0MHhFRkNEQUI4OSwgLy8gaF8xXG5cdFx0XHQweDk4QkFEQ0ZFLCAvLyBoXzJcblx0XHRcdDB4MTAzMjU0NzYsIC8vIGhfM1xuXHRcdFx0MHhDM0QyRTFGMCAgLy8gaF80XG5cdFx0XTtcblxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0OyArK2kpXG5cdFx0e1xuXHRcdFx0bGV0IEEgPSBoWzBdLCBCID0gaFsxXSwgQyA9IGhbMl0sIEQgPSBoWzNdLCBFID0gaFs0XTtcblx0XHRcdGxldCBBUCA9IEEsIEJQID0gQiwgQ1AgPSBDLCBEUCA9IEQsIEVQID0gRTtcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCA4MDsgKytqKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBMZWZ0IHJvdW5kc1xuXHRcdFx0XHRsZXQgVCA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXG5cdFx0XHRcdFx0UklQRU1EMTYwLnJvbDMyKFxuXHRcdFx0XHRcdFx0UklQRU1EMTYwLmFkZF9tb2R1bG8zMihcblx0XHRcdFx0XHRcdFx0QSxcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLmYoaiwgQiwgQywgRCksXG5cdFx0XHRcdFx0XHRcdFhbaV0ocltqXSksXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5LKGopXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0c1tqXVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0RVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRBID0gRTtcblx0XHRcdFx0RSA9IEQ7XG5cdFx0XHRcdEQgPSBSSVBFTUQxNjAucm9sMzIoQywgMTApO1xuXHRcdFx0XHRDID0gQjtcblx0XHRcdFx0QiA9IFQ7XG5cblx0XHRcdFx0Ly8gUmlnaHQgcm91bmRzXG5cdFx0XHRcdFQgPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxuXHRcdFx0XHRcdFJJUEVNRDE2MC5yb2wzMihcblx0XHRcdFx0XHRcdFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXG5cdFx0XHRcdFx0XHRcdEFQLFxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuZihcblx0XHRcdFx0XHRcdFx0XHQ3OSAtIGosXG5cdFx0XHRcdFx0XHRcdFx0QlAsXG5cdFx0XHRcdFx0XHRcdFx0Q1AsXG5cdFx0XHRcdFx0XHRcdFx0RFBcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0WFtpXShyUFtqXSksXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5LUChqKVxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdHNQW2pdXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRFUFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRBUCA9IEVQO1xuXHRcdFx0XHRFUCA9IERQO1xuXHRcdFx0XHREUCA9IFJJUEVNRDE2MC5yb2wzMihDUCwgMTApO1xuXHRcdFx0XHRDUCA9IEJQO1xuXHRcdFx0XHRCUCA9IFQ7XG5cdFx0XHR9XG5cdFx0XHRsZXQgVCA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFsxXSwgQywgRFApO1xuXHRcdFx0aFsxXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFsyXSwgRCwgRVApO1xuXHRcdFx0aFsyXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFszXSwgRSwgQVApO1xuXHRcdFx0aFszXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFs0XSwgQSwgQlApO1xuXHRcdFx0aFs0XSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFswXSwgQiwgQ1ApO1xuXHRcdFx0aFswXSA9IFQ7XG5cdFx0fVxuXG5cdFx0Ly8gIFRoZSBmaW5hbCBvdXRwdXQgc3RyaW5nIHRoZW4gY29uc2lzdHMgb2YgdGhlIGNvbmNhdGVuYXRhdGlvblxuXHRcdC8vIG9mIGhfMCwgaF8xLCBoXzIsIGhfMywgYW5kIGhfNCBhZnRlciBjb252ZXJ0aW5nIGVhY2ggaF9pIHRvIGFcblx0XHQvLyA0LWJ5dGUgc3RyaW5nIHVzaW5nIHRoZSBsaXR0bGUtZW5kaWFuIGNvbnZlbnRpb24uXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKDIwKTtcblx0XHRjb25zdCBkYXRhX3ZpZXcgPSBuZXcgRGF0YVZpZXcocmVzdWx0KTtcblx0XHRoLmZvckVhY2goKGhfaSwgaSkgPT4gZGF0YV92aWV3LnNldFVpbnQzMihpICogNCwgaF9pLCB0cnVlKSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0UklQRU1EMTYwXG59XG4iXSwic291cmNlUm9vdCI6IiJ9