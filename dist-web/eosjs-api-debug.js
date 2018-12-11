var eosjs_api =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/eosjs-api.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/abi.abi.json":
/*!**************************!*\
  !*** ./src/abi.abi.json ***!
  \**************************/
/*! exports provided: version, structs, default */
/***/ (function(module) {

module.exports = {"version":"eosio::abi/1.1","structs":[{"name":"extensions_entry","base":"","fields":[{"name":"tag","type":"uint16"},{"name":"value","type":"bytes"}]},{"name":"type_def","base":"","fields":[{"name":"new_type_name","type":"string"},{"name":"type","type":"string"}]},{"name":"field_def","base":"","fields":[{"name":"name","type":"string"},{"name":"type","type":"string"}]},{"name":"struct_def","base":"","fields":[{"name":"name","type":"string"},{"name":"base","type":"string"},{"name":"fields","type":"field_def[]"}]},{"name":"action_def","base":"","fields":[{"name":"name","type":"name"},{"name":"type","type":"string"},{"name":"ricardian_contract","type":"string"}]},{"name":"table_def","base":"","fields":[{"name":"name","type":"name"},{"name":"index_type","type":"string"},{"name":"key_names","type":"string[]"},{"name":"key_types","type":"string[]"},{"name":"type","type":"string"}]},{"name":"clause_pair","base":"","fields":[{"name":"id","type":"string"},{"name":"body","type":"string"}]},{"name":"error_message","base":"","fields":[{"name":"error_code","type":"uint64"},{"name":"error_msg","type":"string"}]},{"name":"variant_def","base":"","fields":[{"name":"name","type":"string"},{"name":"types","type":"string[]"}]},{"name":"abi_def","base":"","fields":[{"name":"version","type":"string"},{"name":"types","type":"type_def[]"},{"name":"structs","type":"struct_def[]"},{"name":"actions","type":"action_def[]"},{"name":"tables","type":"table_def[]"},{"name":"ricardian_clauses","type":"clause_pair[]"},{"name":"error_messages","type":"error_message[]"},{"name":"abi_extensions","type":"extensions_entry[]"},{"name":"variants","type":"variant_def[]$"}]}]};

/***/ }),

/***/ "./src/eosjs-api.ts":
/*!**************************!*\
  !*** ./src/eosjs-api.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module API
 */
// copyright defined in eosjs/LICENSE.txt
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
var ser = __webpack_require__(/*! ./eosjs-serialize */ "./src/eosjs-serialize.ts");
// tslint:disable-next-line
var abiAbi = __webpack_require__(/*! ../src/abi.abi.json */ "./src/abi.abi.json");
// tslint:disable-next-line
var transactionAbi = __webpack_require__(/*! ../src/transaction.abi.json */ "./src/transaction.abi.json");
var Api = /** @class */ (function () {
    /**
     * @param args
     *    * `rpc`: Issues RPC calls
     *    * `authorityProvider`: Get public keys needed to meet authorities in a transaction
     *    * `abiProvider`: Supplies ABIs in raw form (binary)
     *    * `signatureProvider`: Signs transactions
     *    * `chainId`: Identifies chain
     *    * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     *    * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    function Api(args) {
        /** Holds information needed to serialize contract actions */
        this.contracts = new Map();
        /** Fetched abis */
        this.cachedAbis = new Map();
        this.rpc = args.rpc;
        this.authorityProvider = args.authorityProvider || args.rpc;
        this.abiProvider = args.abiProvider || args.rpc;
        this.signatureProvider = args.signatureProvider;
        this.chainId = args.chainId;
        this.textEncoder = args.textEncoder;
        this.textDecoder = args.textDecoder;
        this.abiTypes = ser.getTypesFromAbi(ser.createInitialTypes(), abiAbi);
        this.transactionTypes = ser.getTypesFromAbi(ser.createInitialTypes(), transactionAbi);
    }
    /** Decodes an abi as Uint8Array into json. */
    Api.prototype.rawAbiToJson = function (rawAbi) {
        var buffer = new ser.SerialBuffer({
            textEncoder: this.textEncoder,
            textDecoder: this.textDecoder,
            array: rawAbi,
        });
        if (!ser.supportedAbiVersion(buffer.getString())) {
            throw new Error("Unsupported abi version");
        }
        buffer.restartRead();
        return this.abiTypes.get("abi_def").deserialize(buffer);
    };
    /** Get abi in both binary and structured forms. Fetch when needed. */
    Api.prototype.getCachedAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var cachedAbi, rawAbi, abi, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!reload && this.cachedAbis.get(accountName)) {
                            return [2 /*return*/, this.cachedAbis.get(accountName)];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.abiProvider.getRawAbi(accountName)];
                    case 2:
                        rawAbi = (_a.sent()).abi;
                        abi = this.rawAbiToJson(rawAbi);
                        cachedAbi = { rawAbi: rawAbi, abi: abi };
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        e_1.message = "fetching abi for " + accountName + ": " + e_1.message;
                        throw e_1;
                    case 4:
                        if (!cachedAbi) {
                            throw new Error("Missing abi for " + accountName);
                        }
                        this.cachedAbis.set(accountName, cachedAbi);
                        return [2 /*return*/, cachedAbi];
                }
            });
        });
    };
    /** Get abi in structured form. Fetch when needed. */
    Api.prototype.getAbi = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getCachedAbi(accountName, reload)];
                    case 1: return [2 /*return*/, (_a.sent()).abi];
                }
            });
        });
    };
    /** Get abis needed by a transaction */
    Api.prototype.getTransactionAbis = function (transaction, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var accounts, uniqueAccounts, actionPromises;
            var _this = this;
            return __generator(this, function (_a) {
                accounts = transaction.actions.map(function (action) { return action.account; });
                uniqueAccounts = new Set(accounts);
                actionPromises = __spread(uniqueAccounts).map(function (account) { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _a = {
                                    accountName: account
                                };
                                return [4 /*yield*/, this.getCachedAbi(account, reload)];
                            case 1: return [2 /*return*/, (_a.abi = (_b.sent()).rawAbi,
                                    _a)];
                        }
                    });
                }); });
                return [2 /*return*/, Promise.all(actionPromises)];
            });
        });
    };
    /** Get data needed to serialize actions in a contract */
    Api.prototype.getContract = function (accountName, reload) {
        if (reload === void 0) { reload = false; }
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _a, abi, types, actions, _b, _c, _d, name_1, type, result;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!reload && this.contracts.get(accountName)) {
                            return [2 /*return*/, this.contracts.get(accountName)];
                        }
                        return [4 /*yield*/, this.getAbi(accountName, reload)];
                    case 1:
                        abi = _e.sent();
                        types = ser.getTypesFromAbi(ser.createInitialTypes(), abi);
                        actions = new Map();
                        try {
                            for (_b = __values(abi.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
                                _d = _c.value, name_1 = _d.name, type = _d.type;
                                actions.set(name_1, ser.getType(types, type));
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        result = { types: types, actions: actions };
                        this.contracts.set(accountName, result);
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** Convert `value` to binary form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.serialize = function (buffer, type, value) {
        this.transactionTypes.get(type).serialize(buffer, value);
    };
    /** Convert data in `buffer` to structured form. `type` must be a built-in abi type or in `transaction.abi.json`. */
    Api.prototype.deserialize = function (buffer, type) {
        return this.transactionTypes.get(type).deserialize(buffer);
    };
    /** Convert a transaction to binary */
    Api.prototype.serializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        this.serialize(buffer, "transaction", __assign({ max_net_usage_words: 0, max_cpu_usage_ms: 0, delay_sec: 0, context_free_actions: [], actions: [], transaction_extensions: [] }, transaction));
        return buffer.asUint8Array();
    };
    /** Convert a transaction from binary. Leaves actions in hex. */
    Api.prototype.deserializeTransaction = function (transaction) {
        var buffer = new ser.SerialBuffer({ textEncoder: this.textEncoder, textDecoder: this.textDecoder });
        buffer.pushArray(transaction);
        return this.deserialize(buffer, "transaction");
    };
    /** Convert actions to hex */
    Api.prototype.serializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (_a) {
                            var account = _a.account, name = _a.name, authorization = _a.authorization, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var contract;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.getContract(account)];
                                        case 1:
                                            contract = _b.sent();
                                            return [2 /*return*/, ser.serializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                    }
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert actions from hex */
    Api.prototype.deserializeActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(actions.map(function (_a) {
                            var account = _a.account, name = _a.name, authorization = _a.authorization, data = _a.data;
                            return __awaiter(_this, void 0, void 0, function () {
                                var contract;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0: return [4 /*yield*/, this.getContract(account)];
                                        case 1:
                                            contract = _b.sent();
                                            return [2 /*return*/, ser.deserializeAction(contract, account, name, authorization, data, this.textEncoder, this.textDecoder)];
                                    }
                                });
                            });
                        }))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** Convert a transaction from binary. Also deserializes actions. */
    Api.prototype.deserializeTransactionWithActions = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var deserializedTransaction, deserializedActions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof transaction === "string") {
                            transaction = ser.hexToUint8Array(transaction);
                        }
                        deserializedTransaction = this.deserializeTransaction(transaction);
                        return [4 /*yield*/, this.deserializeActions(deserializedTransaction.actions)];
                    case 1:
                        deserializedActions = _a.sent();
                        return [2 /*return*/, __assign({}, deserializedTransaction, { actions: deserializedActions })];
                }
            });
        });
    };
    /**
     * Create and optionally broadcast a transaction.
     *
     * Named Parameters:
     *    * `broadcast`: broadcast this transaction?
     *    * `sign`: sign this transaction?
     *    * If both `blocksBehind` and `expireSeconds` are present,
     *      then fetch the block which is `blocksBehind` behind head block,
     *      use it as a reference for TAPoS, and expire the transaction `expireSeconds` after that block's time.
     * @returns node response if `broadcast`, `{signatures, serializedTransaction}` if `!broadcast`
     */
    Api.prototype.transact = function (transaction, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.broadcast, broadcast = _c === void 0 ? true : _c, _d = _b.sign, sign = _d === void 0 ? true : _d, blocksBehind = _b.blocksBehind, expireSeconds = _b.expireSeconds;
        return __awaiter(this, void 0, void 0, function () {
            var info, refBlock, abis, _e, _f, serializedTransaction, pushTransactionArgs, availableKeys, requiredKeys;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!!this.chainId) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 1:
                        info = _g.sent();
                        this.chainId = info.chain_id;
                        _g.label = 2;
                    case 2:
                        if (!(typeof blocksBehind === "number" && expireSeconds)) return [3 /*break*/, 6];
                        if (!!info) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rpc.get_info()];
                    case 3:
                        info = _g.sent();
                        _g.label = 4;
                    case 4: return [4 /*yield*/, this.rpc.get_block(info.head_block_num - blocksBehind)];
                    case 5:
                        refBlock = _g.sent();
                        transaction = __assign({}, ser.transactionHeader(refBlock, expireSeconds), transaction);
                        _g.label = 6;
                    case 6:
                        if (!this.hasRequiredTaposFields(transaction)) {
                            throw new Error("Required configuration or TAPOS fields are not present");
                        }
                        return [4 /*yield*/, this.getTransactionAbis(transaction)];
                    case 7:
                        abis = _g.sent();
                        _e = [{}, transaction];
                        _f = {};
                        return [4 /*yield*/, this.serializeActions(transaction.actions)];
                    case 8:
                        transaction = __assign.apply(void 0, _e.concat([(_f.actions = _g.sent(), _f)]));
                        serializedTransaction = this.serializeTransaction(transaction);
                        pushTransactionArgs = { serializedTransaction: serializedTransaction, signatures: [] };
                        if (!sign) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.signatureProvider.getAvailableKeys()];
                    case 9:
                        availableKeys = _g.sent();
                        return [4 /*yield*/, this.authorityProvider.getRequiredKeys({ transaction: transaction, availableKeys: availableKeys })];
                    case 10:
                        requiredKeys = _g.sent();
                        return [4 /*yield*/, this.signatureProvider.sign({
                                chainId: this.chainId,
                                requiredKeys: requiredKeys,
                                serializedTransaction: serializedTransaction,
                                abis: abis,
                            })];
                    case 11:
                        pushTransactionArgs = _g.sent();
                        _g.label = 12;
                    case 12:
                        if (broadcast) {
                            return [2 /*return*/, this.pushSignedTransaction(pushTransactionArgs)];
                        }
                        return [2 /*return*/, pushTransactionArgs];
                }
            });
        });
    };
    /** Broadcast a signed transaction */
    Api.prototype.pushSignedTransaction = function (_a) {
        var signatures = _a.signatures, serializedTransaction = _a.serializedTransaction;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                return [2 /*return*/, this.rpc.push_transaction({
                        signatures: signatures,
                        serializedTransaction: serializedTransaction,
                    })];
            });
        });
    };
    // eventually break out into TransactionValidator class
    Api.prototype.hasRequiredTaposFields = function (_a) {
        var expiration = _a.expiration, ref_block_num = _a.ref_block_num, ref_block_prefix = _a.ref_block_prefix, transaction = __rest(_a, ["expiration", "ref_block_num", "ref_block_prefix"]);
        return !!(expiration && ref_block_num && ref_block_prefix);
    };
    return Api;
}()); // Api
exports.default = Api;


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

/***/ "./src/eosjs-serialize.ts":
/*!********************************!*\
  !*** ./src/eosjs-serialize.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @module Serialize
 */
// copyright defined in eosjs/LICENSE.txt
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var numeric = __webpack_require__(/*! ./eosjs-numeric */ "./src/eosjs-numeric.ts");
/** State for serialize() and deserialize() */
var SerializerState = /** @class */ (function () {
    function SerializerState(options) {
        if (options === void 0) { options = {}; }
        /** Have any binary extensions been skipped? */
        this.skippedBinaryExtension = false;
        this.options = options;
    }
    return SerializerState;
}());
exports.SerializerState = SerializerState;
/** Serialize and deserialize data */
var SerialBuffer = /** @class */ (function () {
    /**
     * @param __namedParameters
     *    * `array`: `null` if serializing, or binary data to deserialize
     *    * `textEncoder`: `TextEncoder` instance to use. Pass in `null` if running in a browser
     *    * `textDecoder`: `TextDecider` instance to use. Pass in `null` if running in a browser
     */
    function SerialBuffer(_a) {
        var _b = _a === void 0 ? {} : _a, textEncoder = _b.textEncoder, textDecoder = _b.textDecoder, array = _b.array;
        /** Current position while reading (deserializing) */
        this.readPos = 0;
        this.array = array || new Uint8Array(1024);
        this.length = array ? array.length : 0;
        this.textEncoder = textEncoder || new TextEncoder();
        this.textDecoder = textDecoder || new TextDecoder("utf-8", { fatal: true });
    }
    /** Resize `array` if needed to have at least `size` bytes free */
    SerialBuffer.prototype.reserve = function (size) {
        if (this.length + size <= this.array.length) {
            return;
        }
        var l = this.array.length;
        while (this.length + size > l) {
            l = Math.ceil(l * 1.5);
        }
        var newArray = new Uint8Array(l);
        newArray.set(this.array);
        this.array = newArray;
    };
    /** Is there data available to read? */
    SerialBuffer.prototype.haveReadData = function () {
        return this.readPos < this.length;
    };
    /** Restart reading from the beginning */
    SerialBuffer.prototype.restartRead = function () {
        this.readPos = 0;
    };
    /** Return data with excess storage trimmed away */
    SerialBuffer.prototype.asUint8Array = function () {
        return new Uint8Array(this.array.buffer, this.array.byteOffset, this.length);
    };
    /** Append bytes */
    SerialBuffer.prototype.pushArray = function (v) {
        this.reserve(v.length);
        this.array.set(v, this.length);
        this.length += v.length;
    };
    /** Append bytes */
    SerialBuffer.prototype.push = function () {
        var v = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            v[_i] = arguments[_i];
        }
        this.pushArray(v);
    };
    /** Get a single byte */
    SerialBuffer.prototype.get = function () {
        if (this.readPos < this.length) {
            return this.array[this.readPos++];
        }
        throw new Error("Read past end of buffer");
    };
    /** Append bytes in `v`. Throws if `len` doesn't match `v.length` */
    SerialBuffer.prototype.pushUint8ArrayChecked = function (v, len) {
        if (v.length !== len) {
            throw new Error("Binary data has incorrect size");
        }
        this.pushArray(v);
    };
    /** Get `len` bytes */
    SerialBuffer.prototype.getUint8Array = function (len) {
        if (this.readPos + len > this.length) {
            throw new Error("Read past end of buffer");
        }
        var result = new Uint8Array(this.array.buffer, this.array.byteOffset + this.readPos, len);
        this.readPos += len;
        return result;
    };
    /** Append a `uint16` */
    SerialBuffer.prototype.pushUint16 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff);
    };
    /** Get a `uint16` */
    SerialBuffer.prototype.getUint16 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        return v;
    };
    /** Append a `uint32` */
    SerialBuffer.prototype.pushUint32 = function (v) {
        this.push((v >> 0) & 0xff, (v >> 8) & 0xff, (v >> 16) & 0xff, (v >> 24) & 0xff);
    };
    /** Get a `uint32` */
    SerialBuffer.prototype.getUint32 = function () {
        var v = 0;
        v |= this.get() << 0;
        v |= this.get() << 8;
        v |= this.get() << 16;
        v |= this.get() << 24;
        return v >>> 0;
    };
    /** Append a `uint64`. *Caution*: `number` only has 53 bits of precision */
    SerialBuffer.prototype.pushNumberAsUint64 = function (v) {
        this.pushUint32(v >>> 0);
        this.pushUint32(Math.floor(v / 4294967296) >>> 0);
    };
    /**
     * Get a `uint64` as a `number`. *Caution*: `number` only has 53 bits of precision; some values will change.
     * `numeric.binaryToDecimal(serialBuffer.getUint8Array(8))` recommended instead
     */
    SerialBuffer.prototype.getUint64AsNumber = function () {
        var low = this.getUint32();
        var high = this.getUint32();
        return (high >>> 0) * 4294967296 + (low >>> 0);
    };
    /** Append a `varuint32` */
    SerialBuffer.prototype.pushVaruint32 = function (v) {
        while (true) {
            if (v >>> 7) {
                this.push(0x80 | (v & 0x7f));
                v = v >>> 7;
            }
            else {
                this.push(v);
                break;
            }
        }
    };
    /** Get a `varuint32` */
    SerialBuffer.prototype.getVaruint32 = function () {
        var v = 0;
        var bit = 0;
        while (true) {
            var b = this.get();
            v |= (b & 0x7f) << bit;
            bit += 7;
            if (!(b & 0x80)) {
                break;
            }
        }
        return v >>> 0;
    };
    /** Append a `varint32` */
    SerialBuffer.prototype.pushVarint32 = function (v) {
        this.pushVaruint32((v << 1) ^ (v >> 31));
    };
    /** Get a `varint32` */
    SerialBuffer.prototype.getVarint32 = function () {
        var v = this.getVaruint32();
        if (v & 1) {
            return ((~v) >> 1) | 2147483648;
        }
        else {
            return v >>> 1;
        }
    };
    /** Append a `float32` */
    SerialBuffer.prototype.pushFloat32 = function (v) {
        this.pushArray(new Uint8Array((new Float32Array([v])).buffer));
    };
    /** Get a `float32` */
    SerialBuffer.prototype.getFloat32 = function () {
        return new Float32Array(this.getUint8Array(4).slice().buffer)[0];
    };
    /** Append a `float64` */
    SerialBuffer.prototype.pushFloat64 = function (v) {
        this.pushArray(new Uint8Array((new Float64Array([v])).buffer));
    };
    /** Get a `float64` */
    SerialBuffer.prototype.getFloat64 = function () {
        return new Float64Array(this.getUint8Array(8).slice().buffer)[0];
    };
    /** Append a `name` */
    SerialBuffer.prototype.pushName = function (s) {
        if (typeof s !== "string") {
            throw new Error("Expected string containing name");
        }
        function charToSymbol(c) {
            if (c >= "a".charCodeAt(0) && c <= "z".charCodeAt(0)) {
                return (c - "a".charCodeAt(0)) + 6;
            }
            if (c >= "1".charCodeAt(0) && c <= "5".charCodeAt(0)) {
                return (c - "1".charCodeAt(0)) + 1;
            }
            return 0;
        }
        var a = new Uint8Array(8);
        var bit = 63;
        for (var i = 0; i < s.length; ++i) {
            var c = charToSymbol(s.charCodeAt(i));
            if (bit < 5) {
                c = c << 1;
            }
            for (var j = 4; j >= 0; --j) {
                if (bit >= 0) {
                    a[Math.floor(bit / 8)] |= ((c >> j) & 1) << (bit % 8);
                    --bit;
                }
            }
        }
        this.pushArray(a);
    };
    /** Get a `name` */
    SerialBuffer.prototype.getName = function () {
        var a = this.getUint8Array(8);
        var result = "";
        for (var bit = 63; bit >= 0;) {
            var c = 0;
            for (var i = 0; i < 5; ++i) {
                if (bit >= 0) {
                    c = (c << 1) | ((a[Math.floor(bit / 8)] >> (bit % 8)) & 1);
                    --bit;
                }
            }
            if (c >= 6) {
                result += String.fromCharCode(c + "a".charCodeAt(0) - 6);
            }
            else if (c >= 1) {
                result += String.fromCharCode(c + "1".charCodeAt(0) - 1);
            }
            else {
                result += ".";
            }
        }
        if (result === ".............") {
            return result;
        }
        while (result.endsWith(".")) {
            result = result.substr(0, result.length - 1);
        }
        return result;
    };
    /** Append length-prefixed binary data */
    SerialBuffer.prototype.pushBytes = function (v) {
        this.pushVaruint32(v.length);
        this.pushArray(v);
    };
    /** Get length-prefixed binary data */
    SerialBuffer.prototype.getBytes = function () {
        return this.getUint8Array(this.getVaruint32());
    };
    /** Append a string */
    SerialBuffer.prototype.pushString = function (v) {
        this.pushBytes(this.textEncoder.encode(v));
    };
    /** Get a string */
    SerialBuffer.prototype.getString = function () {
        return this.textDecoder.decode(this.getBytes());
    };
    /** Append a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.pushSymbolCode = function (name) {
        if (typeof name !== "string") {
            throw new Error("Expected string containing symbol_code");
        }
        var a = [];
        a.push.apply(a, __spread(this.textEncoder.encode(name)));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol_code`. Unlike `symbol`, `symbol_code` doesn't include a precision. */
    SerialBuffer.prototype.getSymbolCode = function () {
        var a = this.getUint8Array(8);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return name;
    };
    /** Append a `symbol` */
    SerialBuffer.prototype.pushSymbol = function (_a) {
        var name = _a.name, precision = _a.precision;
        var a = [precision & 0xff];
        a.push.apply(a, __spread(this.textEncoder.encode(name)));
        while (a.length < 8) {
            a.push(0);
        }
        this.pushArray(a.slice(0, 8));
    };
    /** Get a `symbol` */
    SerialBuffer.prototype.getSymbol = function () {
        var precision = this.get();
        var a = this.getUint8Array(7);
        var len;
        for (len = 0; len < a.length; ++len) {
            if (!a[len]) {
                break;
            }
        }
        var name = this.textDecoder.decode(new Uint8Array(a.buffer, a.byteOffset, len));
        return { name: name, precision: precision };
    };
    /** Append an asset */
    SerialBuffer.prototype.pushAsset = function (s) {
        if (typeof s !== "string") {
            throw new Error("Expected string containing asset");
        }
        s = s.trim();
        var pos = 0;
        var amount = "";
        var precision = 0;
        if (s[pos] === "-") {
            amount += "-";
            ++pos;
        }
        var foundDigit = false;
        while (pos < s.length && s.charCodeAt(pos) >= "0".charCodeAt(0) && s.charCodeAt(pos) <= "9".charCodeAt(0)) {
            foundDigit = true;
            amount += s[pos];
            ++pos;
        }
        if (!foundDigit) {
            throw new Error("Asset must begin with a number");
        }
        if (s[pos] === ".") {
            ++pos;
            while (pos < s.length && s.charCodeAt(pos) >= "0".charCodeAt(0) && s.charCodeAt(pos) <= "9".charCodeAt(0)) {
                amount += s[pos];
                ++precision;
                ++pos;
            }
        }
        var name = s.substr(pos).trim();
        this.pushArray(numeric.signedDecimalToBinary(8, amount));
        this.pushSymbol({ name: name, precision: precision });
    };
    /** Get an asset */
    SerialBuffer.prototype.getAsset = function () {
        var amount = this.getUint8Array(8);
        var _a = this.getSymbol(), name = _a.name, precision = _a.precision;
        var s = numeric.signedBinaryToDecimal(amount, precision + 1);
        if (precision) {
            s = s.substr(0, s.length - precision) + "." + s.substr(s.length - precision);
        }
        return s + " " + name;
    };
    /** Append a public key */
    SerialBuffer.prototype.pushPublicKey = function (s) {
        var key = numeric.stringToPublicKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a public key */
    SerialBuffer.prototype.getPublicKey = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.publicKeyDataSize);
        return numeric.publicKeyToString({ type: type, data: data });
    };
    /** Append a private key */
    SerialBuffer.prototype.pushPrivateKey = function (s) {
        var key = numeric.stringToPrivateKey(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a private key */
    SerialBuffer.prototype.getPrivateKey = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.privateKeyDataSize);
        return numeric.privateKeyToString({ type: type, data: data });
    };
    /** Append a signature */
    SerialBuffer.prototype.pushSignature = function (s) {
        var key = numeric.stringToSignature(s);
        this.push(key.type);
        this.pushArray(key.data);
    };
    /** Get a signature */
    SerialBuffer.prototype.getSignature = function () {
        var type = this.get();
        var data = this.getUint8Array(numeric.signatureDataSize);
        return numeric.signatureToString({ type: type, data: data });
    };
    return SerialBuffer;
}()); // SerialBuffer
exports.SerialBuffer = SerialBuffer;
/** Is this a supported ABI version? */
function supportedAbiVersion(version) {
    return version.startsWith("eosio::abi/1.");
}
exports.supportedAbiVersion = supportedAbiVersion;
function checkDateParse(date) {
    var result = Date.parse(date);
    if (Number.isNaN(result)) {
        throw new Error("Invalid time format");
    }
    return result;
}
/** Convert date in ISO format to `time_point` (miliseconds since epoch) */
function dateToTimePoint(date) {
    return Math.round(checkDateParse(date + "Z") * 1000);
}
exports.dateToTimePoint = dateToTimePoint;
/** Convert `time_point` (miliseconds since epoch) to date in ISO format */
function timePointToDate(us) {
    var s = (new Date(us / 1000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.timePointToDate = timePointToDate;
/** Convert date in ISO format to `time_point_sec` (seconds since epoch) */
function dateToTimePointSec(date) {
    return Math.round(checkDateParse(date + "Z") / 1000);
}
exports.dateToTimePointSec = dateToTimePointSec;
/** Convert `time_point_sec` (seconds since epoch) to to date in ISO format */
function timePointSecToDate(sec) {
    var s = (new Date(sec * 1000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.timePointSecToDate = timePointSecToDate;
/** Convert date in ISO format to `block_timestamp_type` (half-seconds since a different epoch) */
function dateToBlockTimestamp(date) {
    return Math.round((checkDateParse(date + "Z") - 946684800000) / 500);
}
exports.dateToBlockTimestamp = dateToBlockTimestamp;
/** Convert `block_timestamp_type` (half-seconds since a different epoch) to to date in ISO format */
function blockTimestampToDate(slot) {
    var s = (new Date(slot * 500 + 946684800000)).toISOString();
    return s.substr(0, s.length - 1);
}
exports.blockTimestampToDate = blockTimestampToDate;
/** Convert `string` to `Symbol`. format: `precision,NAME`. */
function stringToSymbol(s) {
    if (typeof s !== "string") {
        throw new Error("Expected string containing symbol");
    }
    var m = s.match(/^([0-9]+),([A-Z]+)$/);
    if (!m) {
        throw new Error("Invalid symbol");
    }
    return { name: m[2], precision: +m[1] };
}
exports.stringToSymbol = stringToSymbol;
/** Convert `Symbol` to `string`. format: `precision,NAME`. */
function symbolToString(_a) {
    var name = _a.name, precision = _a.precision;
    return precision + "," + name;
}
exports.symbolToString = symbolToString;
/** Convert binary data to hex */
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
    return result.toUpperCase();
}
exports.arrayToHex = arrayToHex;
/** Convert hex to binary data */
function hexToUint8Array(hex) {
    if (typeof hex !== "string") {
        throw new Error("Expected string containing hex digits");
    }
    if (hex.length % 2) {
        throw new Error("Odd number of hex digits");
    }
    var l = hex.length / 2;
    var result = new Uint8Array(l);
    for (var i = 0; i < l; ++i) {
        var x = parseInt(hex.substr(i * 2, 2), 16);
        if (Number.isNaN(x)) {
            throw new Error("Expected hex string");
        }
        result[i] = x;
    }
    return result;
}
exports.hexToUint8Array = hexToUint8Array;
function serializeUnknown(buffer, data) {
    throw new Error("Don't know how to serialize " + this.name);
}
function deserializeUnknown(buffer) {
    throw new Error("Don't know how to deserialize " + this.name);
}
function serializeStruct(buffer, data, state, allowExtensions) {
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    var e_2, _a;
    if (typeof data !== "object") {
        throw new Error("expected object containing data: " + JSON.stringify(data));
    }
    if (this.base) {
        this.base.serialize(buffer, data, state, allowExtensions);
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (field.name in data) {
                if (state.skippedBinaryExtension) {
                    throw new Error("unexpected " + this.name + "." + field.name);
                }
                field.type.serialize(buffer, data[field.name], state, allowExtensions && field === this.fields[this.fields.length - 1]);
            }
            else {
                if (allowExtensions && field.type.extensionOf) {
                    state.skippedBinaryExtension = true;
                }
                else {
                    throw new Error("missing " + this.name + "." + field.name + " (type=" + field.type.name + ")");
                }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
}
function deserializeStruct(buffer, state, allowExtensions) {
    if (state === void 0) { state = new SerializerState(); }
    if (allowExtensions === void 0) { allowExtensions = true; }
    var e_3, _a;
    var result;
    if (this.base) {
        result = this.base.deserialize(buffer, state, allowExtensions);
    }
    else {
        result = {};
    }
    try {
        for (var _b = __values(this.fields), _c = _b.next(); !_c.done; _c = _b.next()) {
            var field = _c.value;
            if (allowExtensions && field.type.extensionOf && !buffer.haveReadData()) {
                state.skippedBinaryExtension = true;
            }
            else {
                result[field.name] = field.type.deserialize(buffer, state, allowExtensions);
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return result;
}
function serializeVariant(buffer, data, state, allowExtensions) {
    if (!Array.isArray(data) || data.length !== 2 || typeof data[0] !== "string") {
        throw new Error('expected variant: ["type", value]');
    }
    var i = this.fields.findIndex(function (field) { return field.name === data[0]; });
    if (i < 0) {
        throw new Error("type \"" + data[0] + "\" is not valid for variant");
    }
    buffer.pushVaruint32(i);
    this.fields[i].type.serialize(buffer, data[1], state, allowExtensions);
}
function deserializeVariant(buffer, state, allowExtensions) {
    var i = buffer.getVaruint32();
    if (i >= this.fields.length) {
        throw new Error("type index " + i + " is not valid for variant");
    }
    var field = this.fields[i];
    return [field.name, field.type.deserialize(buffer, state, allowExtensions)];
}
function serializeArray(buffer, data, state, allowExtensions) {
    var e_4, _a;
    buffer.pushVaruint32(data.length);
    try {
        for (var data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
            var item = data_2_1.value;
            this.arrayOf.serialize(buffer, item, state, false);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (data_2_1 && !data_2_1.done && (_a = data_2.return)) _a.call(data_2);
        }
        finally { if (e_4) throw e_4.error; }
    }
}
function deserializeArray(buffer, state, allowExtensions) {
    var len = buffer.getVaruint32();
    var result = [];
    for (var i = 0; i < len; ++i) {
        result.push(this.arrayOf.deserialize(buffer, state, false));
    }
    return result;
}
function serializeOptional(buffer, data, state, allowExtensions) {
    if (data === null || data === undefined) {
        buffer.push(0);
    }
    else {
        buffer.push(1);
        this.optionalOf.serialize(buffer, data, state, allowExtensions);
    }
}
function deserializeOptional(buffer, state, allowExtensions) {
    if (buffer.get()) {
        return this.optionalOf.deserialize(buffer, state, allowExtensions);
    }
    else {
        return null;
    }
}
function serializeExtension(buffer, data, state, allowExtensions) {
    this.extensionOf.serialize(buffer, data, state, allowExtensions);
}
function deserializeExtension(buffer, state, allowExtensions) {
    return this.extensionOf.deserialize(buffer, state, allowExtensions);
}
function createType(attrs) {
    return __assign({ name: "<missing name>", aliasOfName: "", arrayOf: null, optionalOf: null, extensionOf: null, baseName: "", base: null, fields: [], serialize: serializeUnknown, deserialize: deserializeUnknown }, attrs);
}
function checkRange(orig, converted) {
    if (Number.isNaN(+orig) || Number.isNaN(+converted) || (typeof orig !== "number" && typeof orig !== "string")) {
        throw new Error("Expected number");
    }
    if (+orig !== +converted) {
        throw new Error("Number is out of range");
    }
    return +orig;
}
/** Create the set of types built-in to the abi format */
function createInitialTypes() {
    var result = new Map(Object.entries({
        bool: createType({
            name: "bool",
            serialize: function (buffer, data) {
                if (typeof data !== "boolean") {
                    throw new Error("Expected true or false");
                }
                buffer.push(data ? 1 : 0);
            },
            deserialize: function (buffer) { return !!buffer.get(); },
        }),
        uint8: createType({
            name: "uint8",
            serialize: function (buffer, data) { buffer.push(checkRange(data, data & 0xff)); },
            deserialize: function (buffer) { return buffer.get(); },
        }),
        int8: createType({
            name: "int8",
            serialize: function (buffer, data) { buffer.push(checkRange(data, data << 24 >> 24)); },
            deserialize: function (buffer) { return buffer.get() << 24 >> 24; },
        }),
        uint16: createType({
            name: "uint16",
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data & 0xffff)); },
            deserialize: function (buffer) { return buffer.getUint16(); },
        }),
        int16: createType({
            name: "int16",
            serialize: function (buffer, data) { buffer.pushUint16(checkRange(data, data << 16 >> 16)); },
            deserialize: function (buffer) { return buffer.getUint16() << 16 >> 16; },
        }),
        uint32: createType({
            name: "uint32",
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getUint32(); },
        }),
        uint64: createType({
            name: "uint64",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.decimalToBinary(8, "" + data));
            },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int64: createType({
            name: "int64",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(8, "" + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(8)); },
        }),
        int32: createType({
            name: "int32",
            serialize: function (buffer, data) { buffer.pushUint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getUint32() | 0; },
        }),
        varuint32: createType({
            name: "varuint32",
            serialize: function (buffer, data) { buffer.pushVaruint32(checkRange(data, data >>> 0)); },
            deserialize: function (buffer) { return buffer.getVaruint32(); },
        }),
        varint32: createType({
            name: "varint32",
            serialize: function (buffer, data) { buffer.pushVarint32(checkRange(data, data | 0)); },
            deserialize: function (buffer) { return buffer.getVarint32(); },
        }),
        uint128: createType({
            name: "uint128",
            serialize: function (buffer, data) { buffer.pushArray(numeric.decimalToBinary(16, "" + data)); },
            deserialize: function (buffer) { return numeric.binaryToDecimal(buffer.getUint8Array(16)); },
        }),
        int128: createType({
            name: "int128",
            serialize: function (buffer, data) {
                buffer.pushArray(numeric.signedDecimalToBinary(16, "" + data));
            },
            deserialize: function (buffer) { return numeric.signedBinaryToDecimal(buffer.getUint8Array(16)); },
        }),
        float32: createType({
            name: "float32",
            serialize: function (buffer, data) { buffer.pushFloat32(data); },
            deserialize: function (buffer) { return buffer.getFloat32(); },
        }),
        float64: createType({
            name: "float64",
            serialize: function (buffer, data) { buffer.pushFloat64(data); },
            deserialize: function (buffer) { return buffer.getFloat64(); },
        }),
        float128: createType({
            name: "float128",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 16); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(16)); },
        }),
        bytes: createType({
            name: "bytes",
            serialize: function (buffer, data) {
                if (data instanceof Uint8Array || Array.isArray(data)) {
                    buffer.pushBytes(data);
                }
                else {
                    buffer.pushBytes(hexToUint8Array(data));
                }
            },
            deserialize: function (buffer, state) {
                if (state.options.bytesAsUint8Array) {
                    return buffer.getBytes();
                }
                else {
                    return arrayToHex(buffer.getBytes());
                }
            },
        }),
        string: createType({
            name: "string",
            serialize: function (buffer, data) { buffer.pushString(data); },
            deserialize: function (buffer) { return buffer.getString(); },
        }),
        name: createType({
            name: "name",
            serialize: function (buffer, data) { buffer.pushName(data); },
            deserialize: function (buffer) { return buffer.getName(); },
        }),
        time_point: createType({
            name: "time_point",
            serialize: function (buffer, data) { buffer.pushNumberAsUint64(dateToTimePoint(data)); },
            deserialize: function (buffer) { return timePointToDate(buffer.getUint64AsNumber()); },
        }),
        time_point_sec: createType({
            name: "time_point_sec",
            serialize: function (buffer, data) { buffer.pushUint32(dateToTimePointSec(data)); },
            deserialize: function (buffer) { return timePointSecToDate(buffer.getUint32()); },
        }),
        block_timestamp_type: createType({
            name: "block_timestamp_type",
            serialize: function (buffer, data) { buffer.pushUint32(dateToBlockTimestamp(data)); },
            deserialize: function (buffer) { return blockTimestampToDate(buffer.getUint32()); },
        }),
        symbol_code: createType({
            name: "symbol_code",
            serialize: function (buffer, data) { buffer.pushSymbolCode(data); },
            deserialize: function (buffer) { return buffer.getSymbolCode(); },
        }),
        symbol: createType({
            name: "symbol",
            serialize: function (buffer, data) { buffer.pushSymbol(stringToSymbol(data)); },
            deserialize: function (buffer) { return symbolToString(buffer.getSymbol()); },
        }),
        asset: createType({
            name: "asset",
            serialize: function (buffer, data) { buffer.pushAsset(data); },
            deserialize: function (buffer) { return buffer.getAsset(); },
        }),
        checksum160: createType({
            name: "checksum160",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 20); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(20)); },
        }),
        checksum256: createType({
            name: "checksum256",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 32); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(32)); },
        }),
        checksum512: createType({
            name: "checksum512",
            serialize: function (buffer, data) { buffer.pushUint8ArrayChecked(hexToUint8Array(data), 64); },
            deserialize: function (buffer) { return arrayToHex(buffer.getUint8Array(64)); },
        }),
        public_key: createType({
            name: "public_key",
            serialize: function (buffer, data) { buffer.pushPublicKey(data); },
            deserialize: function (buffer) { return buffer.getPublicKey(); },
        }),
        private_key: createType({
            name: "private_key",
            serialize: function (buffer, data) { buffer.pushPrivateKey(data); },
            deserialize: function (buffer) { return buffer.getPrivateKey(); },
        }),
        signature: createType({
            name: "signature",
            serialize: function (buffer, data) { buffer.pushSignature(data); },
            deserialize: function (buffer) { return buffer.getSignature(); },
        }),
    }));
    result.set("extended_asset", createType({
        name: "extended_asset",
        baseName: "",
        fields: [
            { name: "quantity", typeName: "asset", type: result.get("asset") },
            { name: "contract", typeName: "name", type: result.get("name") },
        ],
        serialize: serializeStruct,
        deserialize: deserializeStruct,
    }));
    return result;
} // createInitialTypes()
exports.createInitialTypes = createInitialTypes;
/** Get type from `types` */
function getType(types, name) {
    var type = types.get(name);
    if (type && type.aliasOfName) {
        return getType(types, type.aliasOfName);
    }
    if (type) {
        return type;
    }
    if (name.endsWith("[]")) {
        return createType({
            name: name,
            arrayOf: getType(types, name.substr(0, name.length - 2)),
            serialize: serializeArray,
            deserialize: deserializeArray,
        });
    }
    if (name.endsWith("?")) {
        return createType({
            name: name,
            optionalOf: getType(types, name.substr(0, name.length - 1)),
            serialize: serializeOptional,
            deserialize: deserializeOptional,
        });
    }
    if (name.endsWith("$")) {
        return createType({
            name: name,
            extensionOf: getType(types, name.substr(0, name.length - 1)),
            serialize: serializeExtension,
            deserialize: deserializeExtension,
        });
    }
    throw new Error("Unknown type: " + name);
}
exports.getType = getType;
/**
 * Get types from abi
 * @param initialTypes Set of types to build on.
 *     In most cases, it's best to fill this from a fresh call to `getTypesFromAbi()`.
 */
function getTypesFromAbi(initialTypes, abi) {
    var e_5, _a, e_6, _b, e_7, _c, e_8, _d, e_9, _e;
    var types = new Map(initialTypes);
    if (abi.types) {
        try {
            for (var _f = __values(abi.types), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = _g.value, new_type_name = _h.new_type_name, type = _h.type;
                types.set(new_type_name, createType({ name: new_type_name, aliasOfName: type }));
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
            }
            finally { if (e_5) throw e_5.error; }
        }
    }
    if (abi.structs) {
        try {
            for (var _j = __values(abi.structs), _k = _j.next(); !_k.done; _k = _j.next()) {
                var _l = _k.value, name_1 = _l.name, base = _l.base, fields = _l.fields;
                types.set(name_1, createType({
                    name: name_1,
                    baseName: base,
                    fields: fields.map(function (_a) {
                        var n = _a.name, type = _a.type;
                        return ({ name: n, typeName: type, type: null });
                    }),
                    serialize: serializeStruct,
                    deserialize: deserializeStruct,
                }));
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
            }
            finally { if (e_6) throw e_6.error; }
        }
    }
    if (abi.variants) {
        try {
            for (var _m = __values(abi.variants), _o = _m.next(); !_o.done; _o = _m.next()) {
                var _p = _o.value, name_2 = _p.name, t = _p.types;
                types.set(name_2, createType({
                    name: name_2,
                    fields: t.map(function (s) { return ({ name: s, typeName: s, type: null }); }),
                    serialize: serializeVariant,
                    deserialize: deserializeVariant,
                }));
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_o && !_o.done && (_c = _m.return)) _c.call(_m);
            }
            finally { if (e_7) throw e_7.error; }
        }
    }
    try {
        for (var types_1 = __values(types), types_1_1 = types_1.next(); !types_1_1.done; types_1_1 = types_1.next()) {
            var _q = __read(types_1_1.value, 2), name_3 = _q[0], type = _q[1];
            if (type.baseName) {
                type.base = getType(types, type.baseName);
            }
            try {
                for (var _r = __values(type.fields), _s = _r.next(); !_s.done; _s = _r.next()) {
                    var field = _s.value;
                    field.type = getType(types, field.typeName);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_s && !_s.done && (_e = _r.return)) _e.call(_r);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
    }
    catch (e_8_1) { e_8 = { error: e_8_1 }; }
    finally {
        try {
            if (types_1_1 && !types_1_1.done && (_d = types_1.return)) _d.call(types_1);
        }
        finally { if (e_8) throw e_8.error; }
    }
    return types;
} // getTypesFromAbi
exports.getTypesFromAbi = getTypesFromAbi;
/** TAPoS: Return transaction fields which reference `refBlock` and expire `expireSeconds` after `refBlock.timestamp` */
function transactionHeader(refBlock, expireSeconds) {
    return {
        expiration: timePointSecToDate(dateToTimePointSec(refBlock.timestamp) + expireSeconds),
        ref_block_num: refBlock.block_num & 0xffff,
        ref_block_prefix: refBlock.ref_block_prefix,
    };
}
exports.transactionHeader = transactionHeader;
/** Convert action data to serialized form (hex) */
function serializeActionData(contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textEncoder: textEncoder, textDecoder: textDecoder });
    action.serialize(buffer, data);
    return arrayToHex(buffer.asUint8Array());
}
exports.serializeActionData = serializeActionData;
/** Return action in serialized form */
function serializeAction(contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: serializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
}
exports.serializeAction = serializeAction;
/** Deserialize action data. If `data` is a `string`, then it's assumed to be in hex. */
function deserializeActionData(contract, account, name, data, textEncoder, textDecoder) {
    var action = contract.actions.get(name);
    if (typeof data === "string") {
        data = hexToUint8Array(data);
    }
    if (!action) {
        throw new Error("Unknown action " + name + " in contract " + account);
    }
    var buffer = new SerialBuffer({ textDecoder: textDecoder, textEncoder: textEncoder });
    buffer.pushArray(data);
    return action.deserialize(buffer);
}
exports.deserializeActionData = deserializeActionData;
/** Deserialize action. If `data` is a `string`, then it's assumed to be in hex. */
function deserializeAction(contract, account, name, authorization, data, textEncoder, textDecoder) {
    return {
        account: account,
        name: name,
        authorization: authorization,
        data: deserializeActionData(contract, account, name, data, textEncoder, textDecoder),
    };
}
exports.deserializeAction = deserializeAction;


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


/***/ }),

/***/ "./src/transaction.abi.json":
/*!**********************************!*\
  !*** ./src/transaction.abi.json ***!
  \**********************************/
/*! exports provided: version, types, structs, default */
/***/ (function(module) {

module.exports = {"version":"eosio::abi/1.0","types":[{"new_type_name":"account_name","type":"name"},{"new_type_name":"action_name","type":"name"},{"new_type_name":"permission_name","type":"name"}],"structs":[{"name":"permission_level","base":"","fields":[{"name":"actor","type":"account_name"},{"name":"permission","type":"permission_name"}]},{"name":"action","base":"","fields":[{"name":"account","type":"account_name"},{"name":"name","type":"action_name"},{"name":"authorization","type":"permission_level[]"},{"name":"data","type":"bytes"}]},{"name":"extension","base":"","fields":[{"name":"type","type":"uint16"},{"name":"data","type":"bytes"}]},{"name":"transaction_header","base":"","fields":[{"name":"expiration","type":"time_point_sec"},{"name":"ref_block_num","type":"uint16"},{"name":"ref_block_prefix","type":"uint32"},{"name":"max_net_usage_words","type":"varuint32"},{"name":"max_cpu_usage_ms","type":"uint8"},{"name":"delay_sec","type":"varuint32"}]},{"name":"transaction","base":"transaction_header","fields":[{"name":"context_free_actions","type":"action[]"},{"name":"actions","type":"action[]"},{"name":"transaction_extensions","type":"extension[]"}]}]};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9baWRdL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtYXBpLnRzIiwid2VicGFjazovL1tpZF0vLi9zcmMvZW9zanMtbnVtZXJpYy50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL2Vvc2pzLXNlcmlhbGl6ZS50cyIsIndlYnBhY2s6Ly9baWRdLy4vc3JjL3JpcGVtZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTs7R0FFRztBQUNILHlDQUF5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3pDLG1GQUF5QztBQUV6QywyQkFBMkI7QUFDM0IsSUFBTSxNQUFNLEdBQUcsbUJBQU8sQ0FB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LElBQUksRUFBRSxxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztLQUN2RixDQUFDO0FBQ04sQ0FBQztBQVRELDhDQVNDOzs7Ozs7Ozs7Ozs7O0FDeGxDRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNEJBQTRCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZW9zanMtYXBpLWRlYnVnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW9zanMtYXBpLnRzXCIpO1xuIiwiLyoqXG4gKiBAbW9kdWxlIEFQSVxuICovXG4vLyBjb3B5cmlnaHQgZGVmaW5lZCBpbiBlb3Nqcy9MSUNFTlNFLnR4dFxuXG5pbXBvcnQgeyBBYmlQcm92aWRlciwgQXV0aG9yaXR5UHJvdmlkZXIsIEJpbmFyeUFiaSwgQ2FjaGVkQWJpLCBTaWduYXR1cmVQcm92aWRlciB9IGZyb20gXCIuL2Vvc2pzLWFwaS1pbnRlcmZhY2VzXCI7XG5pbXBvcnQgSnNvblJwYyBmcm9tIFwiLi9lb3Nqcy1qc29ucnBjXCI7XG5pbXBvcnQgeyBBYmksIEdldEluZm9SZXN1bHQsIFB1c2hUcmFuc2FjdGlvbkFyZ3MgfSBmcm9tIFwiLi9lb3Nqcy1ycGMtaW50ZXJmYWNlc1wiO1xuaW1wb3J0ICogYXMgc2VyIGZyb20gXCIuL2Vvc2pzLXNlcmlhbGl6ZVwiO1xuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmNvbnN0IGFiaUFiaSA9IHJlcXVpcmUoJy4uL3NyYy9hYmkuYWJpLmpzb24nKTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuY29uc3QgdHJhbnNhY3Rpb25BYmkgPSByZXF1aXJlKCcuLi9zcmMvdHJhbnNhY3Rpb24uYWJpLmpzb24nKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBpIHtcbiAgICAvKiogSXNzdWVzIFJQQyBjYWxscyAqL1xuICAgIHB1YmxpYyBycGM6IEpzb25ScGM7XG5cbiAgICAvKiogR2V0IHN1YnNldCBvZiBgYXZhaWxhYmxlS2V5c2AgbmVlZGVkIHRvIG1lZXQgYXV0aG9yaXRpZXMgaW4gYSBgdHJhbnNhY3Rpb25gICovXG4gICAgcHVibGljIGF1dGhvcml0eVByb3ZpZGVyOiBBdXRob3JpdHlQcm92aWRlcjtcblxuICAgIC8qKiBTdXBwbGllcyBBQklzIGluIHJhdyBmb3JtIChiaW5hcnkpICovXG4gICAgcHVibGljIGFiaVByb3ZpZGVyOiBBYmlQcm92aWRlcjtcblxuICAgIC8qKiBTaWducyB0cmFuc2FjdGlvbnMgKi9cbiAgICBwdWJsaWMgc2lnbmF0dXJlUHJvdmlkZXI6IFNpZ25hdHVyZVByb3ZpZGVyO1xuXG4gICAgLyoqIElkZW50aWZpZXMgY2hhaW4gKi9cbiAgICBwdWJsaWMgY2hhaW5JZDogc3RyaW5nO1xuXG4gICAgcHVibGljIHRleHRFbmNvZGVyOiBUZXh0RW5jb2RlcjtcbiAgICBwdWJsaWMgdGV4dERlY29kZXI6IFRleHREZWNvZGVyO1xuXG4gICAgLyoqIENvbnZlcnRzIGFiaSBmaWxlcyBiZXR3ZWVuIGJpbmFyeSBhbmQgc3RydWN0dXJlZCBmb3JtIChgYWJpLmFiaS5qc29uYCkgKi9cbiAgICBwdWJsaWMgYWJpVHlwZXM6IE1hcDxzdHJpbmcsIHNlci5UeXBlPjtcblxuICAgIC8qKiBDb252ZXJ0cyB0cmFuc2FjdGlvbnMgYmV0d2VlbiBiaW5hcnkgYW5kIHN0cnVjdHVyZWQgZm9ybSAoYHRyYW5zYWN0aW9uLmFiaS5qc29uYCkgKi9cbiAgICBwdWJsaWMgdHJhbnNhY3Rpb25UeXBlczogTWFwPHN0cmluZywgc2VyLlR5cGU+O1xuXG4gICAgLyoqIEhvbGRzIGluZm9ybWF0aW9uIG5lZWRlZCB0byBzZXJpYWxpemUgY29udHJhY3QgYWN0aW9ucyAqL1xuICAgIHB1YmxpYyBjb250cmFjdHMgPSBuZXcgTWFwPHN0cmluZywgc2VyLkNvbnRyYWN0PigpO1xuXG4gICAgLyoqIEZldGNoZWQgYWJpcyAqL1xuICAgIHB1YmxpYyBjYWNoZWRBYmlzID0gbmV3IE1hcDxzdHJpbmcsIENhY2hlZEFiaT4oKTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBhcmdzXG4gICAgICogICAgKiBgcnBjYDogSXNzdWVzIFJQQyBjYWxsc1xuICAgICAqICAgICogYGF1dGhvcml0eVByb3ZpZGVyYDogR2V0IHB1YmxpYyBrZXlzIG5lZWRlZCB0byBtZWV0IGF1dGhvcml0aWVzIGluIGEgdHJhbnNhY3Rpb25cbiAgICAgKiAgICAqIGBhYmlQcm92aWRlcmA6IFN1cHBsaWVzIEFCSXMgaW4gcmF3IGZvcm0gKGJpbmFyeSlcbiAgICAgKiAgICAqIGBzaWduYXR1cmVQcm92aWRlcmA6IFNpZ25zIHRyYW5zYWN0aW9uc1xuICAgICAqICAgICogYGNoYWluSWRgOiBJZGVudGlmaWVzIGNoYWluXG4gICAgICogICAgKiBgdGV4dEVuY29kZXJgOiBgVGV4dEVuY29kZXJgIGluc3RhbmNlIHRvIHVzZS4gUGFzcyBpbiBgbnVsbGAgaWYgcnVubmluZyBpbiBhIGJyb3dzZXJcbiAgICAgKiAgICAqIGB0ZXh0RGVjb2RlcmA6IGBUZXh0RGVjaWRlcmAgaW5zdGFuY2UgdG8gdXNlLiBQYXNzIGluIGBudWxsYCBpZiBydW5uaW5nIGluIGEgYnJvd3NlclxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGFyZ3M6IHtcbiAgICAgICAgcnBjOiBKc29uUnBjLFxuICAgICAgICBhdXRob3JpdHlQcm92aWRlcj86IEF1dGhvcml0eVByb3ZpZGVyLFxuICAgICAgICBhYmlQcm92aWRlcj86IEFiaVByb3ZpZGVyLFxuICAgICAgICBzaWduYXR1cmVQcm92aWRlcjogU2lnbmF0dXJlUHJvdmlkZXIsXG4gICAgICAgIGNoYWluSWQ/OiBzdHJpbmcsXG4gICAgICAgIHRleHRFbmNvZGVyPzogVGV4dEVuY29kZXIsXG4gICAgICAgIHRleHREZWNvZGVyPzogVGV4dERlY29kZXIsXG4gICAgfSkge1xuICAgICAgICB0aGlzLnJwYyA9IGFyZ3MucnBjO1xuICAgICAgICB0aGlzLmF1dGhvcml0eVByb3ZpZGVyID0gYXJncy5hdXRob3JpdHlQcm92aWRlciB8fCBhcmdzLnJwYztcbiAgICAgICAgdGhpcy5hYmlQcm92aWRlciA9IGFyZ3MuYWJpUHJvdmlkZXIgfHwgYXJncy5ycGM7XG4gICAgICAgIHRoaXMuc2lnbmF0dXJlUHJvdmlkZXIgPSBhcmdzLnNpZ25hdHVyZVByb3ZpZGVyO1xuICAgICAgICB0aGlzLmNoYWluSWQgPSBhcmdzLmNoYWluSWQ7XG4gICAgICAgIHRoaXMudGV4dEVuY29kZXIgPSBhcmdzLnRleHRFbmNvZGVyO1xuICAgICAgICB0aGlzLnRleHREZWNvZGVyID0gYXJncy50ZXh0RGVjb2RlcjtcblxuICAgICAgICB0aGlzLmFiaVR5cGVzID0gc2VyLmdldFR5cGVzRnJvbUFiaShzZXIuY3JlYXRlSW5pdGlhbFR5cGVzKCksIGFiaUFiaSk7XG4gICAgICAgIHRoaXMudHJhbnNhY3Rpb25UeXBlcyA9IHNlci5nZXRUeXBlc0Zyb21BYmkoc2VyLmNyZWF0ZUluaXRpYWxUeXBlcygpLCB0cmFuc2FjdGlvbkFiaSk7XG4gICAgfVxuXG4gICAgLyoqIERlY29kZXMgYW4gYWJpIGFzIFVpbnQ4QXJyYXkgaW50byBqc29uLiAqL1xuICAgIHB1YmxpYyByYXdBYmlUb0pzb24ocmF3QWJpOiBVaW50OEFycmF5KTogQWJpIHtcbiAgICAgICAgY29uc3QgYnVmZmVyID0gbmV3IHNlci5TZXJpYWxCdWZmZXIoe1xuICAgICAgICAgICAgdGV4dEVuY29kZXI6IHRoaXMudGV4dEVuY29kZXIsXG4gICAgICAgICAgICB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlcixcbiAgICAgICAgICAgIGFycmF5OiByYXdBYmksXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXNlci5zdXBwb3J0ZWRBYmlWZXJzaW9uKGJ1ZmZlci5nZXRTdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuc3VwcG9ydGVkIGFiaSB2ZXJzaW9uXCIpO1xuICAgICAgICB9XG4gICAgICAgIGJ1ZmZlci5yZXN0YXJ0UmVhZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5hYmlUeXBlcy5nZXQoXCJhYmlfZGVmXCIpLmRlc2VyaWFsaXplKGJ1ZmZlcik7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhYmkgaW4gYm90aCBiaW5hcnkgYW5kIHN0cnVjdHVyZWQgZm9ybXMuIEZldGNoIHdoZW4gbmVlZGVkLiAqL1xuICAgIHB1YmxpYyBhc3luYyBnZXRDYWNoZWRBYmkoYWNjb3VudE5hbWU6IHN0cmluZywgcmVsb2FkID0gZmFsc2UpOiBQcm9taXNlPENhY2hlZEFiaT4ge1xuICAgICAgICBpZiAoIXJlbG9hZCAmJiB0aGlzLmNhY2hlZEFiaXMuZ2V0KGFjY291bnROYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkQWJpcy5nZXQoYWNjb3VudE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYWNoZWRBYmk6IENhY2hlZEFiaTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJhd0FiaSA9IChhd2FpdCB0aGlzLmFiaVByb3ZpZGVyLmdldFJhd0FiaShhY2NvdW50TmFtZSkpLmFiaTtcbiAgICAgICAgICAgIGNvbnN0IGFiaSA9IHRoaXMucmF3QWJpVG9Kc29uKHJhd0FiaSk7XG4gICAgICAgICAgICBjYWNoZWRBYmkgPSB7IHJhd0FiaSwgYWJpIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGUubWVzc2FnZSA9IGBmZXRjaGluZyBhYmkgZm9yICR7YWNjb3VudE5hbWV9OiAke2UubWVzc2FnZX1gO1xuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhY2hlZEFiaSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIGFiaSBmb3IgJHthY2NvdW50TmFtZX1gKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhY2hlZEFiaXMuc2V0KGFjY291bnROYW1lLCBjYWNoZWRBYmkpO1xuICAgICAgICByZXR1cm4gY2FjaGVkQWJpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYWJpIGluIHN0cnVjdHVyZWQgZm9ybS4gRmV0Y2ggd2hlbiBuZWVkZWQuICovXG4gICAgcHVibGljIGFzeW5jIGdldEFiaShhY2NvdW50TmFtZTogc3RyaW5nLCByZWxvYWQgPSBmYWxzZSk6IFByb21pc2U8QWJpPiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgdGhpcy5nZXRDYWNoZWRBYmkoYWNjb3VudE5hbWUsIHJlbG9hZCkpLmFiaTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGFiaXMgbmVlZGVkIGJ5IGEgdHJhbnNhY3Rpb24gKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0VHJhbnNhY3Rpb25BYmlzKHRyYW5zYWN0aW9uOiBhbnksIHJlbG9hZCA9IGZhbHNlKTogUHJvbWlzZTxCaW5hcnlBYmlbXT4ge1xuICAgICAgICBjb25zdCBhY2NvdW50czogc3RyaW5nW10gPSB0cmFuc2FjdGlvbi5hY3Rpb25zLm1hcCgoYWN0aW9uOiBzZXIuQWN0aW9uKTogc3RyaW5nID0+IGFjdGlvbi5hY2NvdW50KTtcbiAgICAgICAgY29uc3QgdW5pcXVlQWNjb3VudHM6IFNldDxzdHJpbmc+ID0gbmV3IFNldChhY2NvdW50cyk7XG4gICAgICAgIGNvbnN0IGFjdGlvblByb21pc2VzOiBBcnJheTxQcm9taXNlPEJpbmFyeUFiaT4+ID0gWy4uLnVuaXF1ZUFjY291bnRzXS5tYXAoXG4gICAgICAgICAgICBhc3luYyAoYWNjb3VudDogc3RyaW5nKTogUHJvbWlzZTxCaW5hcnlBYmk+ID0+ICh7XG4gICAgICAgICAgICAgICAgYWNjb3VudE5hbWU6IGFjY291bnQsIGFiaTogKGF3YWl0IHRoaXMuZ2V0Q2FjaGVkQWJpKGFjY291bnQsIHJlbG9hZCkpLnJhd0FiaSxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKGFjdGlvblByb21pc2VzKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGRhdGEgbmVlZGVkIHRvIHNlcmlhbGl6ZSBhY3Rpb25zIGluIGEgY29udHJhY3QgKi9cbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q29udHJhY3QoYWNjb3VudE5hbWU6IHN0cmluZywgcmVsb2FkID0gZmFsc2UpOiBQcm9taXNlPHNlci5Db250cmFjdD4ge1xuICAgICAgICBpZiAoIXJlbG9hZCAmJiB0aGlzLmNvbnRyYWN0cy5nZXQoYWNjb3VudE5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cmFjdHMuZ2V0KGFjY291bnROYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhYmkgPSBhd2FpdCB0aGlzLmdldEFiaShhY2NvdW50TmFtZSwgcmVsb2FkKTtcbiAgICAgICAgY29uc3QgdHlwZXMgPSBzZXIuZ2V0VHlwZXNGcm9tQWJpKHNlci5jcmVhdGVJbml0aWFsVHlwZXMoKSwgYWJpKTtcbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBzZXIuVHlwZT4oKTtcbiAgICAgICAgZm9yIChjb25zdCB7IG5hbWUsIHR5cGUgfSBvZiBhYmkuYWN0aW9ucykge1xuICAgICAgICAgICAgYWN0aW9ucy5zZXQobmFtZSwgc2VyLmdldFR5cGUodHlwZXMsIHR5cGUpKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSB7IHR5cGVzLCBhY3Rpb25zIH07XG4gICAgICAgIHRoaXMuY29udHJhY3RzLnNldChhY2NvdW50TmFtZSwgcmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiogQ29udmVydCBgdmFsdWVgIHRvIGJpbmFyeSBmb3JtLiBgdHlwZWAgbXVzdCBiZSBhIGJ1aWx0LWluIGFiaSB0eXBlIG9yIGluIGB0cmFuc2FjdGlvbi5hYmkuanNvbmAuICovXG4gICAgcHVibGljIHNlcmlhbGl6ZShidWZmZXI6IHNlci5TZXJpYWxCdWZmZXIsIHR5cGU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnRyYW5zYWN0aW9uVHlwZXMuZ2V0KHR5cGUpLnNlcmlhbGl6ZShidWZmZXIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiogQ29udmVydCBkYXRhIGluIGBidWZmZXJgIHRvIHN0cnVjdHVyZWQgZm9ybS4gYHR5cGVgIG11c3QgYmUgYSBidWlsdC1pbiBhYmkgdHlwZSBvciBpbiBgdHJhbnNhY3Rpb24uYWJpLmpzb25gLiAqL1xuICAgIHB1YmxpYyBkZXNlcmlhbGl6ZShidWZmZXI6IHNlci5TZXJpYWxCdWZmZXIsIHR5cGU6IHN0cmluZyk6IGFueSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zYWN0aW9uVHlwZXMuZ2V0KHR5cGUpLmRlc2VyaWFsaXplKGJ1ZmZlcik7XG4gICAgfVxuXG4gICAgLyoqIENvbnZlcnQgYSB0cmFuc2FjdGlvbiB0byBiaW5hcnkgKi9cbiAgICBwdWJsaWMgc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IGFueSk6IFVpbnQ4QXJyYXkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7IHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlciB9KTtcbiAgICAgICAgdGhpcy5zZXJpYWxpemUoYnVmZmVyLCBcInRyYW5zYWN0aW9uXCIsIHtcbiAgICAgICAgICAgIG1heF9uZXRfdXNhZ2Vfd29yZHM6IDAsXG4gICAgICAgICAgICBtYXhfY3B1X3VzYWdlX21zOiAwLFxuICAgICAgICAgICAgZGVsYXlfc2VjOiAwLFxuICAgICAgICAgICAgY29udGV4dF9mcmVlX2FjdGlvbnM6IFtdLFxuICAgICAgICAgICAgYWN0aW9uczogW10sXG4gICAgICAgICAgICB0cmFuc2FjdGlvbl9leHRlbnNpb25zOiBbXSxcbiAgICAgICAgICAgIC4uLnRyYW5zYWN0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlci5hc1VpbnQ4QXJyYXkoKTtcbiAgICB9XG5cbiAgICAvKiogQ29udmVydCBhIHRyYW5zYWN0aW9uIGZyb20gYmluYXJ5LiBMZWF2ZXMgYWN0aW9ucyBpbiBoZXguICovXG4gICAgcHVibGljIGRlc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb246IFVpbnQ4QXJyYXkpOiBhbnkge1xuICAgICAgICBjb25zdCBidWZmZXIgPSBuZXcgc2VyLlNlcmlhbEJ1ZmZlcih7IHRleHRFbmNvZGVyOiB0aGlzLnRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlcjogdGhpcy50ZXh0RGVjb2RlciB9KTtcbiAgICAgICAgYnVmZmVyLnB1c2hBcnJheSh0cmFuc2FjdGlvbik7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2VyaWFsaXplKGJ1ZmZlciwgXCJ0cmFuc2FjdGlvblwiKTtcbiAgICB9XG5cbiAgICAvKiogQ29udmVydCBhY3Rpb25zIHRvIGhleCAqL1xuICAgIHB1YmxpYyBhc3luYyBzZXJpYWxpemVBY3Rpb25zKGFjdGlvbnM6IHNlci5BY3Rpb25bXSk6IFByb21pc2U8c2VyLlNlcmlhbGl6ZWRBY3Rpb25bXT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoYWN0aW9ucy5tYXAoYXN5bmMgKHsgYWNjb3VudCwgbmFtZSwgYXV0aG9yaXphdGlvbiwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IHRoaXMuZ2V0Q29udHJhY3QoYWNjb3VudCk7XG4gICAgICAgICAgICByZXR1cm4gc2VyLnNlcmlhbGl6ZUFjdGlvbihcbiAgICAgICAgICAgICAgICBjb250cmFjdCwgYWNjb3VudCwgbmFtZSwgYXV0aG9yaXphdGlvbiwgZGF0YSwgdGhpcy50ZXh0RW5jb2RlciwgdGhpcy50ZXh0RGVjb2Rlcik7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICAvKiogQ29udmVydCBhY3Rpb25zIGZyb20gaGV4ICovXG4gICAgcHVibGljIGFzeW5jIGRlc2VyaWFsaXplQWN0aW9ucyhhY3Rpb25zOiBzZXIuQWN0aW9uW10pOiBQcm9taXNlPHNlci5BY3Rpb25bXT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoYWN0aW9ucy5tYXAoYXN5bmMgKHsgYWNjb3VudCwgbmFtZSwgYXV0aG9yaXphdGlvbiwgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250cmFjdCA9IGF3YWl0IHRoaXMuZ2V0Q29udHJhY3QoYWNjb3VudCk7XG4gICAgICAgICAgICByZXR1cm4gc2VyLmRlc2VyaWFsaXplQWN0aW9uKFxuICAgICAgICAgICAgICAgIGNvbnRyYWN0LCBhY2NvdW50LCBuYW1lLCBhdXRob3JpemF0aW9uLCBkYXRhLCB0aGlzLnRleHRFbmNvZGVyLCB0aGlzLnRleHREZWNvZGVyKTtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIC8qKiBDb252ZXJ0IGEgdHJhbnNhY3Rpb24gZnJvbSBiaW5hcnkuIEFsc28gZGVzZXJpYWxpemVzIGFjdGlvbnMuICovXG4gICAgcHVibGljIGFzeW5jIGRlc2VyaWFsaXplVHJhbnNhY3Rpb25XaXRoQWN0aW9ucyh0cmFuc2FjdGlvbjogVWludDhBcnJheSB8IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNhY3Rpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uID0gc2VyLmhleFRvVWludDhBcnJheSh0cmFuc2FjdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzZXJpYWxpemVkVHJhbnNhY3Rpb24gPSB0aGlzLmRlc2VyaWFsaXplVHJhbnNhY3Rpb24odHJhbnNhY3Rpb24pO1xuICAgICAgICBjb25zdCBkZXNlcmlhbGl6ZWRBY3Rpb25zID0gYXdhaXQgdGhpcy5kZXNlcmlhbGl6ZUFjdGlvbnMoZGVzZXJpYWxpemVkVHJhbnNhY3Rpb24uYWN0aW9ucyk7XG4gICAgICAgIHJldHVybiB7IC4uLmRlc2VyaWFsaXplZFRyYW5zYWN0aW9uLCBhY3Rpb25zOiBkZXNlcmlhbGl6ZWRBY3Rpb25zIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuZCBvcHRpb25hbGx5IGJyb2FkY2FzdCBhIHRyYW5zYWN0aW9uLlxuICAgICAqXG4gICAgICogTmFtZWQgUGFyYW1ldGVyczpcbiAgICAgKiAgICAqIGBicm9hZGNhc3RgOiBicm9hZGNhc3QgdGhpcyB0cmFuc2FjdGlvbj9cbiAgICAgKiAgICAqIGBzaWduYDogc2lnbiB0aGlzIHRyYW5zYWN0aW9uP1xuICAgICAqICAgICogSWYgYm90aCBgYmxvY2tzQmVoaW5kYCBhbmQgYGV4cGlyZVNlY29uZHNgIGFyZSBwcmVzZW50LFxuICAgICAqICAgICAgdGhlbiBmZXRjaCB0aGUgYmxvY2sgd2hpY2ggaXMgYGJsb2Nrc0JlaGluZGAgYmVoaW5kIGhlYWQgYmxvY2ssXG4gICAgICogICAgICB1c2UgaXQgYXMgYSByZWZlcmVuY2UgZm9yIFRBUG9TLCBhbmQgZXhwaXJlIHRoZSB0cmFuc2FjdGlvbiBgZXhwaXJlU2Vjb25kc2AgYWZ0ZXIgdGhhdCBibG9jaydzIHRpbWUuXG4gICAgICogQHJldHVybnMgbm9kZSByZXNwb25zZSBpZiBgYnJvYWRjYXN0YCwgYHtzaWduYXR1cmVzLCBzZXJpYWxpemVkVHJhbnNhY3Rpb259YCBpZiBgIWJyb2FkY2FzdGBcbiAgICAgKi9cbiAgICBwdWJsaWMgYXN5bmMgdHJhbnNhY3QodHJhbnNhY3Rpb246IGFueSwgeyBicm9hZGNhc3QgPSB0cnVlLCBzaWduID0gdHJ1ZSwgYmxvY2tzQmVoaW5kLCBleHBpcmVTZWNvbmRzIH06XG4gICAgICAgIHsgYnJvYWRjYXN0PzogYm9vbGVhbjsgc2lnbj86IGJvb2xlYW47IGJsb2Nrc0JlaGluZD86IG51bWJlcjsgZXhwaXJlU2Vjb25kcz86IG51bWJlcjsgfSA9IHt9KTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgbGV0IGluZm86IEdldEluZm9SZXN1bHQ7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNoYWluSWQpIHtcbiAgICAgICAgICAgIGluZm8gPSBhd2FpdCB0aGlzLnJwYy5nZXRfaW5mbygpO1xuICAgICAgICAgICAgdGhpcy5jaGFpbklkID0gaW5mby5jaGFpbl9pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgYmxvY2tzQmVoaW5kID09PSBcIm51bWJlclwiICYmIGV4cGlyZVNlY29uZHMpIHsgLy8gdXNlIGNvbmZpZyBmaWVsZHMgdG8gZ2VuZXJhdGUgVEFQT1MgaWYgdGhleSBleGlzdFxuICAgICAgICAgICAgaWYgKCFpbmZvKSB7XG4gICAgICAgICAgICAgICAgaW5mbyA9IGF3YWl0IHRoaXMucnBjLmdldF9pbmZvKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWZCbG9jayA9IGF3YWl0IHRoaXMucnBjLmdldF9ibG9jayhpbmZvLmhlYWRfYmxvY2tfbnVtIC0gYmxvY2tzQmVoaW5kKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uID0geyAuLi5zZXIudHJhbnNhY3Rpb25IZWFkZXIocmVmQmxvY2ssIGV4cGlyZVNlY29uZHMpLCAuLi50cmFuc2FjdGlvbiB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1JlcXVpcmVkVGFwb3NGaWVsZHModHJhbnNhY3Rpb24pKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZXF1aXJlZCBjb25maWd1cmF0aW9uIG9yIFRBUE9TIGZpZWxkcyBhcmUgbm90IHByZXNlbnRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhYmlzOiBCaW5hcnlBYmlbXSA9IGF3YWl0IHRoaXMuZ2V0VHJhbnNhY3Rpb25BYmlzKHRyYW5zYWN0aW9uKTtcbiAgICAgICAgdHJhbnNhY3Rpb24gPSB7IC4uLnRyYW5zYWN0aW9uLCBhY3Rpb25zOiBhd2FpdCB0aGlzLnNlcmlhbGl6ZUFjdGlvbnModHJhbnNhY3Rpb24uYWN0aW9ucykgfTtcbiAgICAgICAgY29uc3Qgc2VyaWFsaXplZFRyYW5zYWN0aW9uID0gdGhpcy5zZXJpYWxpemVUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gICAgICAgIGxldCBwdXNoVHJhbnNhY3Rpb25BcmdzOiBQdXNoVHJhbnNhY3Rpb25BcmdzICA9IHsgc2VyaWFsaXplZFRyYW5zYWN0aW9uLCBzaWduYXR1cmVzOiBbXSB9O1xuXG4gICAgICAgIGlmIChzaWduKSB7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVLZXlzID0gYXdhaXQgdGhpcy5zaWduYXR1cmVQcm92aWRlci5nZXRBdmFpbGFibGVLZXlzKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZEtleXMgPSBhd2FpdCB0aGlzLmF1dGhvcml0eVByb3ZpZGVyLmdldFJlcXVpcmVkS2V5cyh7IHRyYW5zYWN0aW9uLCBhdmFpbGFibGVLZXlzIH0pO1xuICAgICAgICAgICAgcHVzaFRyYW5zYWN0aW9uQXJncyA9IGF3YWl0IHRoaXMuc2lnbmF0dXJlUHJvdmlkZXIuc2lnbih7XG4gICAgICAgICAgICAgICAgY2hhaW5JZDogdGhpcy5jaGFpbklkLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkS2V5cyxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkVHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgYWJpcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChicm9hZGNhc3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTaWduZWRUcmFuc2FjdGlvbihwdXNoVHJhbnNhY3Rpb25BcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHVzaFRyYW5zYWN0aW9uQXJncztcbiAgICB9XG5cbiAgICAvKiogQnJvYWRjYXN0IGEgc2lnbmVkIHRyYW5zYWN0aW9uICovXG4gICAgcHVibGljIGFzeW5jIHB1c2hTaWduZWRUcmFuc2FjdGlvbih7IHNpZ25hdHVyZXMsIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbiB9OiBQdXNoVHJhbnNhY3Rpb25BcmdzKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucnBjLnB1c2hfdHJhbnNhY3Rpb24oe1xuICAgICAgICAgICAgc2lnbmF0dXJlcyxcbiAgICAgICAgICAgIHNlcmlhbGl6ZWRUcmFuc2FjdGlvbixcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZXZlbnR1YWxseSBicmVhayBvdXQgaW50byBUcmFuc2FjdGlvblZhbGlkYXRvciBjbGFzc1xuICAgIHByaXZhdGUgaGFzUmVxdWlyZWRUYXBvc0ZpZWxkcyh7IGV4cGlyYXRpb24sIHJlZl9ibG9ja19udW0sIHJlZl9ibG9ja19wcmVmaXgsIC4uLnRyYW5zYWN0aW9uIH06IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gISEoZXhwaXJhdGlvbiAmJiByZWZfYmxvY2tfbnVtICYmIHJlZl9ibG9ja19wcmVmaXgpO1xuICAgIH1cblxufSAvLyBBcGlcbiIsIi8qKlxuICogQG1vZHVsZSBOdW1lcmljXG4gKi9cbi8vIGNvcHlyaWdodCBkZWZpbmVkIGluIGVvc2pzL0xJQ0VOU0UudHh0XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby12YXItcmVxdWlyZXNcbmNvbnN0IHJpcGVtZDE2MCA9IHJlcXVpcmUoXCIuL3JpcGVtZFwiKS5SSVBFTUQxNjAuaGFzaCBhcyAoYTogVWludDhBcnJheSkgPT4gQXJyYXlCdWZmZXI7XG5cbmNvbnN0IGJhc2U1OENoYXJzID0gXCIxMjM0NTY3ODlBQkNERUZHSEpLTE1OUFFSU1RVVldYWVphYmNkZWZnaGlqa21ub3BxcnN0dXZ3eHl6XCI7XG5jb25zdCBiYXNlNjRDaGFycyA9IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrL1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVfYmFzZTU4X21hcCgpIHtcbiAgICBjb25zdCBiYXNlNThNID0gQXJyYXkoMjU2KS5maWxsKC0xKSBhcyBudW1iZXJbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhc2U1OENoYXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGJhc2U1OE1bYmFzZTU4Q2hhcnMuY2hhckNvZGVBdChpKV0gPSBpO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZTU4TTtcbn1cblxuY29uc3QgYmFzZTU4TWFwID0gY3JlYXRlX2Jhc2U1OF9tYXAoKTtcblxuZnVuY3Rpb24gY3JlYXRlX2Jhc2U2NF9tYXAoKSB7XG4gICAgY29uc3QgYmFzZTY0TSA9IEFycmF5KDI1NikuZmlsbCgtMSkgYXMgbnVtYmVyW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiYXNlNjRDaGFycy5sZW5ndGg7ICsraSkge1xuICAgICAgICBiYXNlNjRNW2Jhc2U2NENoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgICB9XG4gICAgYmFzZTY0TVtcIj1cIi5jaGFyQ29kZUF0KDApXSA9IDA7XG4gICAgcmV0dXJuIGJhc2U2NE07XG59XG5cbmNvbnN0IGJhc2U2NE1hcCA9IGNyZWF0ZV9iYXNlNjRfbWFwKCk7XG5cbi8qKiBJcyBgYmlnbnVtYCBhIG5lZ2F0aXZlIG51bWJlcj8gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05lZ2F0aXZlKGJpZ251bTogVWludDhBcnJheSkge1xuICAgIHJldHVybiAoYmlnbnVtW2JpZ251bS5sZW5ndGggLSAxXSAmIDB4ODApICE9PSAwO1xufVxuXG4vKiogTmVnYXRlIGBiaWdudW1gICovXG5leHBvcnQgZnVuY3Rpb24gbmVnYXRlKGJpZ251bTogVWludDhBcnJheSkge1xuICAgIGxldCBjYXJyeSA9IDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaWdudW0ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgeCA9ICh+YmlnbnVtW2ldICYgMHhmZikgKyBjYXJyeTtcbiAgICAgICAgYmlnbnVtW2ldID0geDtcbiAgICAgICAgY2FycnkgPSB4ID4+IDg7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gdW5zaWduZWQgZGVjaW1hbCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtXG4gKiBAcGFyYW0gc2l6ZSBiaWdudW0gc2l6ZSAoYnl0ZXMpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNpbWFsVG9CaW5hcnkoc2l6ZTogbnVtYmVyLCBzOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgVWludDhBcnJheShzaXplKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3Qgc3JjRGlnaXQgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChzcmNEaWdpdCA8IFwiMFwiLmNoYXJDb2RlQXQoMCkgfHwgc3JjRGlnaXQgPiBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FycnkgPSBzcmNEaWdpdCAtIFwiMFwiLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gcmVzdWx0W2pdICogMTAgKyBjYXJyeTtcbiAgICAgICAgICAgIHJlc3VsdFtqXSA9IHg7XG4gICAgICAgICAgICBjYXJyeSA9IHggPj4gODtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FycnkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgc2lnbmVkIGRlY2ltYWwgbnVtYmVyIGluIGBzYCB0byBhIGJpZ251bVxuICogQHBhcmFtIHNpemUgYmlnbnVtIHNpemUgKGJ5dGVzKVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2lnbmVkRGVjaW1hbFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XG4gICAgY29uc3QgbmVnYXRpdmUgPSBzWzBdID09PSBcIi1cIjtcbiAgICBpZiAobmVnYXRpdmUpIHtcbiAgICAgICAgcyA9IHMuc3Vic3RyKDEpO1xuICAgIH1cbiAgICBjb25zdCByZXN1bHQgPSBkZWNpbWFsVG9CaW5hcnkoc2l6ZSwgcyk7XG4gICAgaWYgKG5lZ2F0aXZlKSB7XG4gICAgICAgIG5lZ2F0ZShyZXN1bHQpO1xuICAgICAgICBpZiAoIWlzTmVnYXRpdmUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibnVtYmVyIGlzIG91dCBvZiByYW5nZVwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNOZWdhdGl2ZShyZXN1bHQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm51bWJlciBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQ29udmVydCBgYmlnbnVtYCB0byBhbiB1bnNpZ25lZCBkZWNpbWFsIG51bWJlclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5VG9EZWNpbWFsKGJpZ251bTogVWludDhBcnJheSwgbWluRGlnaXRzID0gMSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5KG1pbkRpZ2l0cykuZmlsbChcIjBcIi5jaGFyQ29kZUF0KDApKSBhcyBudW1iZXJbXTtcbiAgICBmb3IgKGxldCBpID0gYmlnbnVtLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIGxldCBjYXJyeSA9IGJpZ251bVtpXTtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSAoKHJlc3VsdFtqXSAtIFwiMFwiLmNoYXJDb2RlQXQoMCkpIDw8IDgpICsgY2Fycnk7XG4gICAgICAgICAgICByZXN1bHRbal0gPSBcIjBcIi5jaGFyQ29kZUF0KDApICsgeCAlIDEwO1xuICAgICAgICAgICAgY2FycnkgPSAoeCAvIDEwKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChcIjBcIi5jaGFyQ29kZUF0KDApICsgY2FycnkgJSAxMCk7XG4gICAgICAgICAgICBjYXJyeSA9IChjYXJyeSAvIDEwKSB8IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSguLi5yZXN1bHQpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYSBzaWduZWQgZGVjaW1hbCBudW1iZXJcbiAqIEBwYXJhbSBtaW5EaWdpdHMgMC1wYWQgcmVzdWx0IHRvIHRoaXMgbWFueSBkaWdpdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNpZ25lZEJpbmFyeVRvRGVjaW1hbChiaWdudW06IFVpbnQ4QXJyYXksIG1pbkRpZ2l0cyA9IDEpIHtcbiAgICBpZiAoaXNOZWdhdGl2ZShiaWdudW0pKSB7XG4gICAgICAgIGNvbnN0IHggPSBiaWdudW0uc2xpY2UoKTtcbiAgICAgICAgbmVnYXRlKHgpO1xuICAgICAgICByZXR1cm4gXCItXCIgKyBiaW5hcnlUb0RlY2ltYWwoeCwgbWluRGlnaXRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGJpbmFyeVRvRGVjaW1hbChiaWdudW0sIG1pbkRpZ2l0cyk7XG59XG5cbi8qKlxuICogQ29udmVydCBhbiB1bnNpZ25lZCBiYXNlLTU4IG51bWJlciBpbiBgc2AgdG8gYSBiaWdudW1cbiAqIEBwYXJhbSBzaXplIGJpZ251bSBzaXplIChieXRlcylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJhc2U1OFRvQmluYXJ5KHNpemU6IG51bWJlciwgczogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoc2l6ZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGxldCBjYXJyeSA9IGJhc2U1OE1hcFtzLmNoYXJDb2RlQXQoaSldO1xuICAgICAgICBpZiAoY2FycnkgPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGJhc2UtNTggdmFsdWVcIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyArK2opIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSByZXN1bHRbal0gKiA1OCArIGNhcnJ5O1xuICAgICAgICAgICAgcmVzdWx0W2pdID0geDtcbiAgICAgICAgICAgIGNhcnJ5ID0geCA+PiA4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYXJyeSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZS01OCB2YWx1ZSBpcyBvdXQgb2YgcmFuZ2VcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnJldmVyc2UoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYGJpZ251bWAgdG8gYSBiYXNlLTU4IG51bWJlclxuICogQHBhcmFtIG1pbkRpZ2l0cyAwLXBhZCByZXN1bHQgdG8gdGhpcyBtYW55IGRpZ2l0c1xuICovXG5leHBvcnQgZnVuY3Rpb24gYmluYXJ5VG9CYXNlNTgoYmlnbnVtOiBVaW50OEFycmF5LCBtaW5EaWdpdHMgPSAxKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW10gYXMgbnVtYmVyW107XG4gICAgZm9yIChjb25zdCBieXRlIG9mIGJpZ251bSkge1xuICAgICAgICBsZXQgY2FycnkgPSBieXRlO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJlc3VsdC5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgY29uc3QgeCA9IChiYXNlNThNYXBbcmVzdWx0W2pdXSA8PCA4KSArIGNhcnJ5O1xuICAgICAgICAgICAgcmVzdWx0W2pdID0gYmFzZTU4Q2hhcnMuY2hhckNvZGVBdCh4ICUgNTgpO1xuICAgICAgICAgICAgY2FycnkgPSAoeCAvIDU4KSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNhcnJ5KSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChiYXNlNThDaGFycy5jaGFyQ29kZUF0KGNhcnJ5ICUgNTgpKTtcbiAgICAgICAgICAgIGNhcnJ5ID0gKGNhcnJ5IC8gNTgpIHwgMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGJ5dGUgb2YgYmlnbnVtKSB7XG4gICAgICAgIGlmIChieXRlKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKFwiMVwiLmNoYXJDb2RlQXQoMCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5yZXZlcnNlKCk7XG4gICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoLi4ucmVzdWx0KTtcbn1cblxuLyoqIENvbnZlcnQgYW4gdW5zaWduZWQgYmFzZS02NCBudW1iZXIgaW4gYHNgIHRvIGEgYmlnbnVtICovXG5leHBvcnQgZnVuY3Rpb24gYmFzZTY0VG9CaW5hcnkoczogc3RyaW5nKSB7XG4gICAgbGV0IGxlbiA9IHMubGVuZ3RoO1xuICAgIGlmICgobGVuICYgMykgPT09IDEgJiYgc1tsZW4gLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgbGVuIC09IDE7XG4gICAgfSAvLyBmYyBhcHBlbmRzIGFuIGV4dHJhICc9J1xuICAgIGlmICgobGVuICYgMykgIT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiYmFzZS02NCB2YWx1ZSBpcyBub3QgcGFkZGVkIGNvcnJlY3RseVwiKTtcbiAgICB9XG4gICAgY29uc3QgZ3JvdXBzID0gbGVuID4+IDI7XG4gICAgbGV0IGJ5dGVzID0gZ3JvdXBzICogMztcbiAgICBpZiAobGVuID4gMCAmJiBzW2xlbiAtIDFdID09PSBcIj1cIikge1xuICAgICAgICBpZiAoc1tsZW4gLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgICAgIGJ5dGVzIC09IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBieXRlcyAtPSAxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGJ5dGVzKTtcblxuICAgIGZvciAobGV0IGdyb3VwID0gMDsgZ3JvdXAgPCBncm91cHM7ICsrZ3JvdXApIHtcbiAgICAgICAgY29uc3QgZGlnaXQwID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAwKV07XG4gICAgICAgIGNvbnN0IGRpZ2l0MSA9IGJhc2U2NE1hcFtzLmNoYXJDb2RlQXQoZ3JvdXAgKiA0ICsgMSldO1xuICAgICAgICBjb25zdCBkaWdpdDIgPSBiYXNlNjRNYXBbcy5jaGFyQ29kZUF0KGdyb3VwICogNCArIDIpXTtcbiAgICAgICAgY29uc3QgZGlnaXQzID0gYmFzZTY0TWFwW3MuY2hhckNvZGVBdChncm91cCAqIDQgKyAzKV07XG4gICAgICAgIHJlc3VsdFtncm91cCAqIDMgKyAwXSA9IChkaWdpdDAgPDwgMikgfCAoZGlnaXQxID4+IDQpO1xuICAgICAgICBpZiAoZ3JvdXAgKiAzICsgMSA8IGJ5dGVzKSB7XG4gICAgICAgICAgICByZXN1bHRbZ3JvdXAgKiAzICsgMV0gPSAoKGRpZ2l0MSAmIDE1KSA8PCA0KSB8IChkaWdpdDIgPj4gMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdyb3VwICogMyArIDIgPCBieXRlcykge1xuICAgICAgICAgICAgcmVzdWx0W2dyb3VwICogMyArIDJdID0gKChkaWdpdDIgJiAzKSA8PCA2KSB8IGRpZ2l0MztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogS2V5IHR5cGVzIHRoaXMgbGlicmFyeSBzdXBwb3J0cyAqL1xuZXhwb3J0IGNvbnN0IGVudW0gS2V5VHlwZSB7XG4gICAgazEgPSAwLFxuICAgIHIxID0gMSxcbn1cblxuLyoqIFB1YmxpYyBrZXkgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IHB1YmxpY0tleURhdGFTaXplID0gMzM7XG5cbi8qKiBQcml2YXRlIGtleSBkYXRhIHNpemUsIGV4Y2x1ZGluZyB0eXBlIGZpZWxkICovXG5leHBvcnQgY29uc3QgcHJpdmF0ZUtleURhdGFTaXplID0gMzI7XG5cbi8qKiBTaWduYXR1cmUgZGF0YSBzaXplLCBleGNsdWRpbmcgdHlwZSBmaWVsZCAqL1xuZXhwb3J0IGNvbnN0IHNpZ25hdHVyZURhdGFTaXplID0gNjU7XG5cbi8qKiBQdWJsaWMga2V5LCBwcml2YXRlIGtleSwgb3Igc2lnbmF0dXJlIGluIGJpbmFyeSBmb3JtICovXG5leHBvcnQgaW50ZXJmYWNlIEtleSB7XG4gICAgdHlwZTogS2V5VHlwZTtcbiAgICBkYXRhOiBVaW50OEFycmF5O1xufVxuXG5mdW5jdGlvbiBkaWdlc3RTdWZmaXhSaXBlbWQxNjAoZGF0YTogVWludDhBcnJheSwgc3VmZml4OiBzdHJpbmcpIHtcbiAgICBjb25zdCBkID0gbmV3IFVpbnQ4QXJyYXkoZGF0YS5sZW5ndGggKyBzdWZmaXgubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgZFtpXSA9IGRhdGFbaV07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3VmZml4Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGRbZGF0YS5sZW5ndGggKyBpXSA9IHN1ZmZpeC5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmlwZW1kMTYwKGQpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdUb0tleShzOiBzdHJpbmcsIHR5cGU6IEtleVR5cGUsIHNpemU6IG51bWJlciwgc3VmZml4OiBzdHJpbmcpOiBLZXkge1xuICAgIGNvbnN0IHdob2xlID0gYmFzZTU4VG9CaW5hcnkoc2l6ZSArIDQsIHMpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHsgdHlwZSwgZGF0YTogbmV3IFVpbnQ4QXJyYXkod2hvbGUuYnVmZmVyLCAwLCBzaXplKSB9O1xuICAgIGNvbnN0IGRpZ2VzdCA9IG5ldyBVaW50OEFycmF5KGRpZ2VzdFN1ZmZpeFJpcGVtZDE2MChyZXN1bHQuZGF0YSwgc3VmZml4KSk7XG4gICAgaWYgKGRpZ2VzdFswXSAhPT0gd2hvbGVbc2l6ZSArIDBdIHx8IGRpZ2VzdFsxXSAhPT0gd2hvbGVbc2l6ZSArIDFdXG4gICAgICAgIHx8IGRpZ2VzdFsyXSAhPT0gd2hvbGVbc2l6ZSArIDJdIHx8IGRpZ2VzdFszXSAhPT0gd2hvbGVbc2l6ZSArIDNdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNoZWNrc3VtIGRvZXNuJ3QgbWF0Y2hcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGtleVRvU3RyaW5nKGtleTogS2V5LCBzdWZmaXg6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpIHtcbiAgICBjb25zdCBkaWdlc3QgPSBuZXcgVWludDhBcnJheShkaWdlc3RTdWZmaXhSaXBlbWQxNjAoa2V5LmRhdGEsIHN1ZmZpeCkpO1xuICAgIGNvbnN0IHdob2xlID0gbmV3IFVpbnQ4QXJyYXkoa2V5LmRhdGEubGVuZ3RoICsgNCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXkuZGF0YS5sZW5ndGg7ICsraSkge1xuICAgICAgICB3aG9sZVtpXSA9IGtleS5kYXRhW2ldO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7ICsraSkge1xuICAgICAgICB3aG9sZVtpICsga2V5LmRhdGEubGVuZ3RoXSA9IGRpZ2VzdFtpXTtcbiAgICB9XG4gICAgcmV0dXJuIHByZWZpeCArIGJpbmFyeVRvQmFzZTU4KHdob2xlKTtcbn1cblxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvUHVibGljS2V5KHM6IHN0cmluZyk6IEtleSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHB1YmxpYyBrZXlcIik7XG4gICAgfVxuICAgIGlmIChzLnN1YnN0cigwLCAzKSA9PT0gXCJFT1NcIikge1xuICAgICAgICBjb25zdCB3aG9sZSA9IGJhc2U1OFRvQmluYXJ5KHB1YmxpY0tleURhdGFTaXplICsgNCwgcy5zdWJzdHIoMykpO1xuICAgICAgICBjb25zdCBrZXkgPSB7IHR5cGU6IEtleVR5cGUuazEsIGRhdGE6IG5ldyBVaW50OEFycmF5KHB1YmxpY0tleURhdGFTaXplKSB9O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHB1YmxpY0tleURhdGFTaXplOyArK2kpIHtcbiAgICAgICAgICAgIGtleS5kYXRhW2ldID0gd2hvbGVbaV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGlnZXN0ID0gbmV3IFVpbnQ4QXJyYXkocmlwZW1kMTYwKGtleS5kYXRhKSk7XG4gICAgICAgIGlmIChkaWdlc3RbMF0gIT09IHdob2xlW3B1YmxpY0tleURhdGFTaXplXSB8fCBkaWdlc3RbMV0gIT09IHdob2xlWzM0XVxuICAgICAgICAgICAgfHwgZGlnZXN0WzJdICE9PSB3aG9sZVszNV0gfHwgZGlnZXN0WzNdICE9PSB3aG9sZVszNl0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImNoZWNrc3VtIGRvZXNuJ3QgbWF0Y2hcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9IGVsc2UgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlBVQl9LMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIHB1YmxpY0tleURhdGFTaXplLCBcIksxXCIpO1xuICAgIH0gZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiUFVCX1IxX1wiKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgcHVibGljS2V5RGF0YVNpemUsIFwiUjFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIENvbnZlcnQgYGtleWAgdG8gc3RyaW5nIChiYXNlLTU4KSBmb3JtICovXG5leHBvcnQgZnVuY3Rpb24gcHVibGljS2V5VG9TdHJpbmcoa2V5OiBLZXkpIHtcbiAgICBpZiAoa2V5LnR5cGUgPT09IEtleVR5cGUuazEgJiYga2V5LmRhdGEubGVuZ3RoID09PSBwdWJsaWNLZXlEYXRhU2l6ZSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIksxXCIsIFwiUFVCX0sxX1wiKTtcbiAgICB9IGVsc2UgaWYgKGtleS50eXBlID09PSBLZXlUeXBlLnIxICYmIGtleS5kYXRhLmxlbmd0aCA9PT0gcHVibGljS2V5RGF0YVNpemUpIHtcbiAgICAgICAgcmV0dXJuIGtleVRvU3RyaW5nKGtleSwgXCJSMVwiLCBcIlBVQl9SMV9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHB1YmxpYyBrZXkgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIElmIGEga2V5IGlzIGluIHRoZSBsZWdhY3kgZm9ybWF0IChgRU9TYCBwcmVmaXgpLCB0aGVuIGNvbnZlcnQgaXQgdG8gdGhlIG5ldyBmb3JtYXQgKGBQVUJfSzFfYCkuXG4gKiBMZWF2ZXMgb3RoZXIgZm9ybWF0cyB1bnRvdWNoZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnZlcnRMZWdhY3lQdWJsaWNLZXkoczogc3RyaW5nKSB7XG4gICAgaWYgKHMuc3Vic3RyKDAsIDMpID09PSBcIkVPU1wiKSB7XG4gICAgICAgIHJldHVybiBwdWJsaWNLZXlUb1N0cmluZyhzdHJpbmdUb1B1YmxpY0tleShzKSk7XG4gICAgfVxuICAgIHJldHVybiBzO1xufVxuXG4vKiogSWYgYSBrZXkgaXMgaW4gdGhlIGxlZ2FjeSBmb3JtYXQgKGBFT1NgIHByZWZpeCksIHRoZW4gY29udmVydCBpdCB0byB0aGUgbmV3IGZvcm1hdCAoYFBVQl9LMV9gKS5cbiAqIExlYXZlcyBvdGhlciBmb3JtYXRzIHVudG91Y2hlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udmVydExlZ2FjeVB1YmxpY0tleXMoa2V5czogc3RyaW5nW10pIHtcbiAgICByZXR1cm4ga2V5cy5tYXAoY29udmVydExlZ2FjeVB1YmxpY0tleSk7XG59XG5cbi8qKiBDb252ZXJ0IGtleSBpbiBgc2AgdG8gYmluYXJ5IGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ByaXZhdGVLZXkoczogc3RyaW5nKTogS2V5IHtcbiAgICBpZiAodHlwZW9mIHMgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgcHJpdmF0ZSBrZXlcIik7XG4gICAgfVxuICAgIGlmIChzLnN1YnN0cigwLCA3KSA9PT0gXCJQVlRfUjFfXCIpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZ1RvS2V5KHMuc3Vic3RyKDcpLCBLZXlUeXBlLnIxLCBwcml2YXRlS2V5RGF0YVNpemUsIFwiUjFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHByaXZhdGUga2V5IGZvcm1hdFwiKTtcbiAgICB9XG59XG5cbi8qKiBDb252ZXJ0IGBrZXlgIHRvIHN0cmluZyAoYmFzZS01OCkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByaXZhdGVLZXlUb1N0cmluZyhrZXk6IEtleSkge1xuICAgIGlmIChrZXkudHlwZSA9PT0gS2V5VHlwZS5yMSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoa2V5LCBcIlIxXCIsIFwiUFZUX1IxX1wiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnJlY29nbml6ZWQgcHJpdmF0ZSBrZXkgZm9ybWF0XCIpO1xuICAgIH1cbn1cblxuLyoqIENvbnZlcnQga2V5IGluIGBzYCB0byBiaW5hcnkgZm9ybSAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvU2lnbmF0dXJlKHM6IHN0cmluZyk6IEtleSB7XG4gICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHNpZ25hdHVyZVwiKTtcbiAgICB9XG4gICAgaWYgKHMuc3Vic3RyKDAsIDcpID09PSBcIlNJR19LMV9cIikge1xuICAgICAgICByZXR1cm4gc3RyaW5nVG9LZXkocy5zdWJzdHIoNyksIEtleVR5cGUuazEsIHNpZ25hdHVyZURhdGFTaXplLCBcIksxXCIpO1xuICAgIH0gZWxzZSBpZiAocy5zdWJzdHIoMCwgNykgPT09IFwiU0lHX1IxX1wiKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmdUb0tleShzLnN1YnN0cig3KSwgS2V5VHlwZS5yMSwgc2lnbmF0dXJlRGF0YVNpemUsIFwiUjFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5yZWNvZ25pemVkIHNpZ25hdHVyZSBmb3JtYXRcIik7XG4gICAgfVxufVxuXG4vKiogQ29udmVydCBgc2lnbmF0dXJlYCB0byBzdHJpbmcgKGJhc2UtNTgpIGZvcm0gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVUb1N0cmluZyhzaWduYXR1cmU6IEtleSkge1xuICAgIGlmIChzaWduYXR1cmUudHlwZSA9PT0gS2V5VHlwZS5rMSkge1xuICAgICAgICByZXR1cm4ga2V5VG9TdHJpbmcoc2lnbmF0dXJlLCBcIksxXCIsIFwiU0lHX0sxX1wiKTtcbiAgICB9IGVsc2UgaWYgKHNpZ25hdHVyZS50eXBlID09PSBLZXlUeXBlLnIxKSB7XG4gICAgICAgIHJldHVybiBrZXlUb1N0cmluZyhzaWduYXR1cmUsIFwiUjFcIiwgXCJTSUdfUjFfXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVucmVjb2duaXplZCBzaWduYXR1cmUgZm9ybWF0XCIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogQG1vZHVsZSBTZXJpYWxpemVcbiAqL1xuLy8gY29weXJpZ2h0IGRlZmluZWQgaW4gZW9zanMvTElDRU5TRS50eHRcblxuaW1wb3J0ICogYXMgbnVtZXJpYyBmcm9tIFwiLi9lb3Nqcy1udW1lcmljXCI7XG5pbXBvcnQgeyBBYmksIEJsb2NrVGFwb3NJbmZvIH0gZnJvbSBcIi4vZW9zanMtcnBjLWludGVyZmFjZXNcIjtcblxuLyoqIEEgZmllbGQgaW4gYW4gYWJpICovXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgICAvKiogRmllbGQgbmFtZSAqL1xuICAgIG5hbWU6IHN0cmluZztcblxuICAgIC8qKiBUeXBlIG5hbWUgaW4gc3RyaW5nIGZvcm0gKi9cbiAgICB0eXBlTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqIFR5cGUgb2YgdGhlIGZpZWxkICovXG4gICAgdHlwZTogVHlwZTtcbn1cblxuLyoqIE9wdGlvbnMgZm9yIHNlcmlhbGl6ZSgpIGFuZCBkZXNlcmlhbGl6ZSgpICovXG5leHBvcnQgaW50ZXJmYWNlIFNlcmlhbGl6ZXJPcHRpb25zIHtcbiAgICBieXRlc0FzVWludDhBcnJheT86IGJvb2xlYW47XG59XG5cbi8qKiBTdGF0ZSBmb3Igc2VyaWFsaXplKCkgYW5kIGRlc2VyaWFsaXplKCkgKi9cbmV4cG9ydCBjbGFzcyBTZXJpYWxpemVyU3RhdGUge1xuICAgIHB1YmxpYyBvcHRpb25zOiBTZXJpYWxpemVyT3B0aW9ucztcblxuICAgIC8qKiBIYXZlIGFueSBiaW5hcnkgZXh0ZW5zaW9ucyBiZWVuIHNraXBwZWQ/ICovXG4gICAgcHVibGljIHNraXBwZWRCaW5hcnlFeHRlbnNpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFNlcmlhbGl6ZXJPcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG59XG5cbi8qKiBBIHR5cGUgaW4gYW4gYWJpICovXG5leHBvcnQgaW50ZXJmYWNlIFR5cGUge1xuICAgIC8qKiBUeXBlIG5hbWUgKi9cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVHlwZSBuYW1lIHRoaXMgaXMgYW4gYWxpYXMgb2YsIGlmIGFueSAqL1xuICAgIGFsaWFzT2ZOYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogVHlwZSB0aGlzIGlzIGFuIGFycmF5IG9mLCBpZiBhbnkgKi9cbiAgICBhcnJheU9mOiBUeXBlO1xuXG4gICAgLyoqIFR5cGUgdGhpcyBpcyBhbiBvcHRpb25hbCBvZiwgaWYgYW55ICovXG4gICAgb3B0aW9uYWxPZjogVHlwZTtcblxuICAgIC8qKiBNYXJrcyBiaW5hcnkgZXh0ZW5zaW9uIGZpZWxkcyAqL1xuICAgIGV4dGVuc2lvbk9mPzogVHlwZTtcblxuICAgIC8qKiBCYXNlIG5hbWUgb2YgdGhpcyB0eXBlLCBpZiB0aGlzIGlzIGEgc3RydWN0ICovXG4gICAgYmFzZU5hbWU6IHN0cmluZztcblxuICAgIC8qKiBCYXNlIG9mIHRoaXMgdHlwZSwgaWYgdGhpcyBpcyBhIHN0cnVjdCAqL1xuICAgIGJhc2U6IFR5cGU7XG5cbiAgICAvKiogQ29udGFpbmVkIGZpZWxkcywgaWYgdGhpcyBpcyBhIHN0cnVjdCAqL1xuICAgIGZpZWxkczogRmllbGRbXTtcblxuICAgIC8qKiBDb252ZXJ0IGBkYXRhYCB0byBiaW5hcnkgZm9ybSBhbmQgc3RvcmUgaW4gYGJ1ZmZlcmAgKi9cbiAgICBzZXJpYWxpemU6IChidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYW55LCBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikgPT4gdm9pZDtcblxuICAgIC8qKiBDb252ZXJ0IGRhdGEgaW4gYGJ1ZmZlcmAgZnJvbSBiaW5hcnkgZm9ybSAqL1xuICAgIGRlc2VyaWFsaXplOiAoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSA9PiBhbnk7XG59XG5cbi8qKiBTdHJ1Y3R1cmFsIHJlcHJlc2VudGF0aW9uIG9mIGEgc3ltYm9sICovXG5leHBvcnQgaW50ZXJmYWNlIFN5bWJvbCB7XG4gICAgLyoqIE5hbWUgb2YgdGhlIHN5bWJvbCwgbm90IGluY2x1ZGluZyBwcmVjaXNpb24gKi9cbiAgICBuYW1lOiBzdHJpbmc7XG5cbiAgICAvKiogTnVtYmVyIG9mIGRpZ2l0cyBhZnRlciB0aGUgZGVjaW1hbCBwb2ludCAqL1xuICAgIHByZWNpc2lvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRyYWN0IHtcbiAgICBhY3Rpb25zOiBNYXA8c3RyaW5nLCBUeXBlPjtcbiAgICB0eXBlczogTWFwPHN0cmluZywgVHlwZT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aG9yaXphdGlvbiB7XG4gICAgYWN0b3I6IHN0cmluZztcbiAgICBwZXJtaXNzaW9uOiBzdHJpbmc7XG59XG5cbi8qKiBBY3Rpb24gd2l0aCBkYXRhIGluIHN0cnVjdHVyZWQgZm9ybSAqL1xuZXhwb3J0IGludGVyZmFjZSBBY3Rpb24ge1xuICAgIGFjY291bnQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYXV0aG9yaXphdGlvbjogQXV0aG9yaXphdGlvbltdO1xuICAgIGRhdGE6IGFueTtcbn1cblxuLyoqIEFjdGlvbiB3aXRoIGRhdGEgaW4gc2VyaWFsaXplZCBoZXggZm9ybSAqL1xuZXhwb3J0IGludGVyZmFjZSBTZXJpYWxpemVkQWN0aW9uIHtcbiAgICBhY2NvdW50OiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGF1dGhvcml6YXRpb246IEF1dGhvcml6YXRpb25bXTtcbiAgICBkYXRhOiBzdHJpbmc7XG59XG5cbi8qKiBTZXJpYWxpemUgYW5kIGRlc2VyaWFsaXplIGRhdGEgKi9cbmV4cG9ydCBjbGFzcyBTZXJpYWxCdWZmZXIge1xuICAgIC8qKiBBbW91bnQgb2YgdmFsaWQgZGF0YSBpbiBgYXJyYXlgICovXG4gICAgcHVibGljIGxlbmd0aDogbnVtYmVyO1xuXG4gICAgLyoqIERhdGEgaW4gc2VyaWFsaXplZCAoYmluYXJ5KSBmb3JtICovXG4gICAgcHVibGljIGFycmF5OiBVaW50OEFycmF5O1xuXG4gICAgLyoqIEN1cnJlbnQgcG9zaXRpb24gd2hpbGUgcmVhZGluZyAoZGVzZXJpYWxpemluZykgKi9cbiAgICBwdWJsaWMgcmVhZFBvcyA9IDA7XG5cbiAgICBwdWJsaWMgdGV4dEVuY29kZXI6IFRleHRFbmNvZGVyO1xuICAgIHB1YmxpYyB0ZXh0RGVjb2RlcjogVGV4dERlY29kZXI7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gX19uYW1lZFBhcmFtZXRlcnNcbiAgICAgKiAgICAqIGBhcnJheWA6IGBudWxsYCBpZiBzZXJpYWxpemluZywgb3IgYmluYXJ5IGRhdGEgdG8gZGVzZXJpYWxpemVcbiAgICAgKiAgICAqIGB0ZXh0RW5jb2RlcmA6IGBUZXh0RW5jb2RlcmAgaW5zdGFuY2UgdG8gdXNlLiBQYXNzIGluIGBudWxsYCBpZiBydW5uaW5nIGluIGEgYnJvd3NlclxuICAgICAqICAgICogYHRleHREZWNvZGVyYDogYFRleHREZWNpZGVyYCBpbnN0YW5jZSB0byB1c2UuIFBhc3MgaW4gYG51bGxgIGlmIHJ1bm5pbmcgaW4gYSBicm93c2VyXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoeyB0ZXh0RW5jb2RlciwgdGV4dERlY29kZXIsIGFycmF5IH0gPSB7fSBhc1xuICAgICAgICB7IHRleHRFbmNvZGVyPzogVGV4dEVuY29kZXIsIHRleHREZWNvZGVyPzogVGV4dERlY29kZXIsIGFycmF5PzogVWludDhBcnJheSB9KSB7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBhcnJheSB8fCBuZXcgVWludDhBcnJheSgxMDI0KTtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gICAgICAgIHRoaXMudGV4dEVuY29kZXIgPSB0ZXh0RW5jb2RlciB8fCBuZXcgVGV4dEVuY29kZXIoKTtcbiAgICAgICAgdGhpcy50ZXh0RGVjb2RlciA9IHRleHREZWNvZGVyIHx8IG5ldyBUZXh0RGVjb2RlcihcInV0Zi04XCIsIHsgZmF0YWw6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgLyoqIFJlc2l6ZSBgYXJyYXlgIGlmIG5lZWRlZCB0byBoYXZlIGF0IGxlYXN0IGBzaXplYCBieXRlcyBmcmVlICovXG4gICAgcHVibGljIHJlc2VydmUoc2l6ZTogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCArIHNpemUgPD0gdGhpcy5hcnJheS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbCA9IHRoaXMuYXJyYXkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAodGhpcy5sZW5ndGggKyBzaXplID4gbCkge1xuICAgICAgICAgICAgbCA9IE1hdGguY2VpbChsICogMS41KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdBcnJheSA9IG5ldyBVaW50OEFycmF5KGwpO1xuICAgICAgICBuZXdBcnJheS5zZXQodGhpcy5hcnJheSk7XG4gICAgICAgIHRoaXMuYXJyYXkgPSBuZXdBcnJheTtcbiAgICB9XG5cbiAgICAvKiogSXMgdGhlcmUgZGF0YSBhdmFpbGFibGUgdG8gcmVhZD8gKi9cbiAgICBwdWJsaWMgaGF2ZVJlYWREYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkUG9zIDwgdGhpcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLyoqIFJlc3RhcnQgcmVhZGluZyBmcm9tIHRoZSBiZWdpbm5pbmcgKi9cbiAgICBwdWJsaWMgcmVzdGFydFJlYWQoKSB7XG4gICAgICAgIHRoaXMucmVhZFBvcyA9IDA7XG4gICAgfVxuXG4gICAgLyoqIFJldHVybiBkYXRhIHdpdGggZXhjZXNzIHN0b3JhZ2UgdHJpbW1lZCBhd2F5ICovXG4gICAgcHVibGljIGFzVWludDhBcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHRoaXMuYXJyYXkuYnVmZmVyLCB0aGlzLmFycmF5LmJ5dGVPZmZzZXQsIHRoaXMubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGJ5dGVzICovXG4gICAgcHVibGljIHB1c2hBcnJheSh2OiBudW1iZXJbXSB8IFVpbnQ4QXJyYXkpIHtcbiAgICAgICAgdGhpcy5yZXNlcnZlKHYubGVuZ3RoKTtcbiAgICAgICAgdGhpcy5hcnJheS5zZXQodiwgdGhpcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLmxlbmd0aCArPSB2Lmxlbmd0aDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGJ5dGVzICovXG4gICAgcHVibGljIHB1c2goLi4udjogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkodik7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIHNpbmdsZSBieXRlICovXG4gICAgcHVibGljIGdldCgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZFBvcyA8IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcnJheVt0aGlzLnJlYWRQb3MrK107XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhZCBwYXN0IGVuZCBvZiBidWZmZXJcIik7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBieXRlcyBpbiBgdmAuIFRocm93cyBpZiBgbGVuYCBkb2Vzbid0IG1hdGNoIGB2Lmxlbmd0aGAgKi9cbiAgICBwdWJsaWMgcHVzaFVpbnQ4QXJyYXlDaGVja2VkKHY6IFVpbnQ4QXJyYXksIGxlbjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh2Lmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCaW5hcnkgZGF0YSBoYXMgaW5jb3JyZWN0IHNpemVcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wdXNoQXJyYXkodik7XG4gICAgfVxuXG4gICAgLyoqIEdldCBgbGVuYCBieXRlcyAqL1xuICAgIHB1YmxpYyBnZXRVaW50OEFycmF5KGxlbjogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLnJlYWRQb3MgKyBsZW4gPiB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVhZCBwYXN0IGVuZCBvZiBidWZmZXJcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5hcnJheS5idWZmZXIsIHRoaXMuYXJyYXkuYnl0ZU9mZnNldCArIHRoaXMucmVhZFBvcywgbGVuKTtcbiAgICAgICAgdGhpcy5yZWFkUG9zICs9IGxlbjtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYHVpbnQxNmAgKi9cbiAgICBwdWJsaWMgcHVzaFVpbnQxNih2OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wdXNoKCh2ID4+IDApICYgMHhmZiwgKHYgPj4gOCkgJiAweGZmKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYHVpbnQxNmAgKi9cbiAgICBwdWJsaWMgZ2V0VWludDE2KCkge1xuICAgICAgICBsZXQgdiA9IDA7XG4gICAgICAgIHYgfD0gdGhpcy5nZXQoKSA8PCAwO1xuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgODtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIGB1aW50MzJgICovXG4gICAgcHVibGljIHB1c2hVaW50MzIodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHVzaCgodiA+PiAwKSAmIDB4ZmYsICh2ID4+IDgpICYgMHhmZiwgKHYgPj4gMTYpICYgMHhmZiwgKHYgPj4gMjQpICYgMHhmZik7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIGB1aW50MzJgICovXG4gICAgcHVibGljIGdldFVpbnQzMigpIHtcbiAgICAgICAgbGV0IHYgPSAwO1xuICAgICAgICB2IHw9IHRoaXMuZ2V0KCkgPDwgMDtcbiAgICAgICAgdiB8PSB0aGlzLmdldCgpIDw8IDg7XG4gICAgICAgIHYgfD0gdGhpcy5nZXQoKSA8PCAxNjtcbiAgICAgICAgdiB8PSB0aGlzLmdldCgpIDw8IDI0O1xuICAgICAgICByZXR1cm4gdiA+Pj4gMDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYHVpbnQ2NGAuICpDYXV0aW9uKjogYG51bWJlcmAgb25seSBoYXMgNTMgYml0cyBvZiBwcmVjaXNpb24gKi9cbiAgICBwdWJsaWMgcHVzaE51bWJlckFzVWludDY0KHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLnB1c2hVaW50MzIodiA+Pj4gMCk7XG4gICAgICAgIHRoaXMucHVzaFVpbnQzMihNYXRoLmZsb29yKHYgLyAweDEwMDAwXzAwMDApID4+PiAwKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBgdWludDY0YCBhcyBhIGBudW1iZXJgLiAqQ2F1dGlvbio6IGBudW1iZXJgIG9ubHkgaGFzIDUzIGJpdHMgb2YgcHJlY2lzaW9uOyBzb21lIHZhbHVlcyB3aWxsIGNoYW5nZS5cbiAgICAgKiBgbnVtZXJpYy5iaW5hcnlUb0RlY2ltYWwoc2VyaWFsQnVmZmVyLmdldFVpbnQ4QXJyYXkoOCkpYCByZWNvbW1lbmRlZCBpbnN0ZWFkXG4gICAgICovXG4gICAgcHVibGljIGdldFVpbnQ2NEFzTnVtYmVyKCkge1xuICAgICAgICBjb25zdCBsb3cgPSB0aGlzLmdldFVpbnQzMigpO1xuICAgICAgICBjb25zdCBoaWdoID0gdGhpcy5nZXRVaW50MzIoKTtcbiAgICAgICAgcmV0dXJuIChoaWdoID4+PiAwKSAqIDB4MTAwMDBfMDAwMCArIChsb3cgPj4+IDApO1xuICAgIH1cblxuICAgIC8qKiBBcHBlbmQgYSBgdmFydWludDMyYCAqL1xuICAgIHB1YmxpYyBwdXNoVmFydWludDMyKHY6IG51bWJlcikge1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHYgPj4+IDcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2goMHg4MCB8ICh2ICYgMHg3ZikpO1xuICAgICAgICAgICAgICAgIHYgPSB2ID4+PiA3O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnB1c2godik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYHZhcnVpbnQzMmAgKi9cbiAgICBwdWJsaWMgZ2V0VmFydWludDMyKCkge1xuICAgICAgICBsZXQgdiA9IDA7XG4gICAgICAgIGxldCBiaXQgPSAwO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgY29uc3QgYiA9IHRoaXMuZ2V0KCk7XG4gICAgICAgICAgICB2IHw9IChiICYgMHg3ZikgPDwgYml0O1xuICAgICAgICAgICAgYml0ICs9IDc7XG4gICAgICAgICAgICBpZiAoIShiICYgMHg4MCkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdiA+Pj4gMDtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYHZhcmludDMyYCAqL1xuICAgIHB1YmxpYyBwdXNoVmFyaW50MzIodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMucHVzaFZhcnVpbnQzMigodiA8PCAxKSBeICh2ID4+IDMxKSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIGB2YXJpbnQzMmAgKi9cbiAgICBwdWJsaWMgZ2V0VmFyaW50MzIoKSB7XG4gICAgICAgIGNvbnN0IHYgPSB0aGlzLmdldFZhcnVpbnQzMigpO1xuICAgICAgICBpZiAodiAmIDEpIHtcbiAgICAgICAgICAgIHJldHVybiAoKH52KSA+PiAxKSB8IDB4ODAwMF8wMDAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHYgPj4+IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgYGZsb2F0MzJgICovXG4gICAgcHVibGljIHB1c2hGbG9hdDMyKHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLnB1c2hBcnJheShuZXcgVWludDhBcnJheSgobmV3IEZsb2F0MzJBcnJheShbdl0pKS5idWZmZXIpKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYGZsb2F0MzJgICovXG4gICAgcHVibGljIGdldEZsb2F0MzIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KHRoaXMuZ2V0VWludDhBcnJheSg0KS5zbGljZSgpLmJ1ZmZlcilbMF07XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIGBmbG9hdDY0YCAqL1xuICAgIHB1YmxpYyBwdXNoRmxvYXQ2NCh2OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkobmV3IFVpbnQ4QXJyYXkoKG5ldyBGbG9hdDY0QXJyYXkoW3ZdKSkuYnVmZmVyKSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIGBmbG9hdDY0YCAqL1xuICAgIHB1YmxpYyBnZXRGbG9hdDY0KCkge1xuICAgICAgICByZXR1cm4gbmV3IEZsb2F0NjRBcnJheSh0aGlzLmdldFVpbnQ4QXJyYXkoOCkuc2xpY2UoKS5idWZmZXIpWzBdO1xuICAgIH1cblxuICAgIC8qKiBBcHBlbmQgYSBgbmFtZWAgKi9cbiAgICBwdWJsaWMgcHVzaE5hbWUoczogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgbmFtZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjaGFyVG9TeW1ib2woYzogbnVtYmVyKSB7XG4gICAgICAgICAgICBpZiAoYyA+PSBcImFcIi5jaGFyQ29kZUF0KDApICYmIGMgPD0gXCJ6XCIuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYyAtIFwiYVwiLmNoYXJDb2RlQXQoMCkpICsgNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjID49IFwiMVwiLmNoYXJDb2RlQXQoMCkgJiYgYyA8PSBcIjVcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjIC0gXCIxXCIuY2hhckNvZGVBdCgwKSkgKyAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYSA9IG5ldyBVaW50OEFycmF5KDgpO1xuICAgICAgICBsZXQgYml0ID0gNjM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IGMgPSBjaGFyVG9TeW1ib2wocy5jaGFyQ29kZUF0KGkpKTtcbiAgICAgICAgICAgIGlmIChiaXQgPCA1KSB7XG4gICAgICAgICAgICAgICAgYyA9IGMgPDwgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSA0OyBqID49IDA7IC0taikge1xuICAgICAgICAgICAgICAgIGlmIChiaXQgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICBhW01hdGguZmxvb3IoYml0IC8gOCldIHw9ICgoYyA+PiBqKSAmIDEpIDw8IChiaXQgJSA4KTtcbiAgICAgICAgICAgICAgICAgICAgLS1iaXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYSBgbmFtZWAgKi9cbiAgICBwdWJsaWMgZ2V0TmFtZSgpIHtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuZ2V0VWludDhBcnJheSg4KTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGJpdCA9IDYzOyBiaXQgPj0gMDspIHtcbiAgICAgICAgICAgIGxldCBjID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpdCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSAoYyA8PCAxKSB8ICgoYVtNYXRoLmZsb29yKGJpdCAvIDgpXSA+PiAoYml0ICUgOCkpICYgMSk7XG4gICAgICAgICAgICAgICAgICAgIC0tYml0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjID49IDYpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjICsgXCJhXCIuY2hhckNvZGVBdCgwKSAtIDYpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjID49IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjICsgXCIxXCIuY2hhckNvZGVBdCgwKSAtIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gXCIuLi4uLi4uLi4uLi4uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKHJlc3VsdC5lbmRzV2l0aChcIi5cIikpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHIoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBsZW5ndGgtcHJlZml4ZWQgYmluYXJ5IGRhdGEgKi9cbiAgICBwdWJsaWMgcHVzaEJ5dGVzKHY6IG51bWJlcltdIHwgVWludDhBcnJheSkge1xuICAgICAgICB0aGlzLnB1c2hWYXJ1aW50MzIodi5sZW5ndGgpO1xuICAgICAgICB0aGlzLnB1c2hBcnJheSh2KTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGxlbmd0aC1wcmVmaXhlZCBiaW5hcnkgZGF0YSAqL1xuICAgIHB1YmxpYyBnZXRCeXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VWludDhBcnJheSh0aGlzLmdldFZhcnVpbnQzMigpKTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgc3RyaW5nICovXG4gICAgcHVibGljIHB1c2hTdHJpbmcodjogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMucHVzaEJ5dGVzKHRoaXMudGV4dEVuY29kZXIuZW5jb2RlKHYpKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgc3RyaW5nICovXG4gICAgcHVibGljIGdldFN0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dERlY29kZXIuZGVjb2RlKHRoaXMuZ2V0Qnl0ZXMoKSk7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIGBzeW1ib2xfY29kZWAuIFVubGlrZSBgc3ltYm9sYCwgYHN5bWJvbF9jb2RlYCBkb2Vzbid0IGluY2x1ZGUgYSBwcmVjaXNpb24uICovXG4gICAgcHVibGljIHB1c2hTeW1ib2xDb2RlKG5hbWU6IHN0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHN0cmluZyBjb250YWluaW5nIHN5bWJvbF9jb2RlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGEgPSBbXTtcbiAgICAgICAgYS5wdXNoKC4uLnRoaXMudGV4dEVuY29kZXIuZW5jb2RlKG5hbWUpKTtcbiAgICAgICAgd2hpbGUgKGEubGVuZ3RoIDwgOCkge1xuICAgICAgICAgICAgYS5wdXNoKDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHVzaEFycmF5KGEuc2xpY2UoMCwgOCkpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYSBgc3ltYm9sX2NvZGVgLiBVbmxpa2UgYHN5bWJvbGAsIGBzeW1ib2xfY29kZWAgZG9lc24ndCBpbmNsdWRlIGEgcHJlY2lzaW9uLiAqL1xuICAgIHB1YmxpYyBnZXRTeW1ib2xDb2RlKCkge1xuICAgICAgICBjb25zdCBhID0gdGhpcy5nZXRVaW50OEFycmF5KDgpO1xuICAgICAgICBsZXQgbGVuO1xuICAgICAgICBmb3IgKGxlbiA9IDA7IGxlbiA8IGEubGVuZ3RoOyArK2xlbikge1xuICAgICAgICAgICAgaWYgKCFhW2xlbl0pIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy50ZXh0RGVjb2Rlci5kZWNvZGUobmV3IFVpbnQ4QXJyYXkoYS5idWZmZXIsIGEuYnl0ZU9mZnNldCwgbGVuKSk7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cblxuICAgIC8qKiBBcHBlbmQgYSBgc3ltYm9sYCAqL1xuICAgIHB1YmxpYyBwdXNoU3ltYm9sKHsgbmFtZSwgcHJlY2lzaW9uIH06IHsgbmFtZTogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciB9KSB7XG4gICAgICAgIGNvbnN0IGEgPSBbcHJlY2lzaW9uICYgMHhmZl07XG4gICAgICAgIGEucHVzaCguLi50aGlzLnRleHRFbmNvZGVyLmVuY29kZShuYW1lKSk7XG4gICAgICAgIHdoaWxlIChhLmxlbmd0aCA8IDgpIHtcbiAgICAgICAgICAgIGEucHVzaCgwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnB1c2hBcnJheShhLnNsaWNlKDAsIDgpKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgYHN5bWJvbGAgKi9cbiAgICBwdWJsaWMgZ2V0U3ltYm9sKCk6IHsgbmFtZTogc3RyaW5nLCBwcmVjaXNpb246IG51bWJlciB9IHtcbiAgICAgICAgY29uc3QgcHJlY2lzaW9uID0gdGhpcy5nZXQoKTtcbiAgICAgICAgY29uc3QgYSA9IHRoaXMuZ2V0VWludDhBcnJheSg3KTtcbiAgICAgICAgbGV0IGxlbjtcbiAgICAgICAgZm9yIChsZW4gPSAwOyBsZW4gPCBhLmxlbmd0aDsgKytsZW4pIHtcbiAgICAgICAgICAgIGlmICghYVtsZW5dKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMudGV4dERlY29kZXIuZGVjb2RlKG5ldyBVaW50OEFycmF5KGEuYnVmZmVyLCBhLmJ5dGVPZmZzZXQsIGxlbikpO1xuICAgICAgICByZXR1cm4geyBuYW1lLCBwcmVjaXNpb24gfTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGFuIGFzc2V0ICovXG4gICAgcHVibGljIHB1c2hBc3NldChzOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBhc3NldFwiKTtcbiAgICAgICAgfVxuICAgICAgICBzID0gcy50cmltKCk7XG4gICAgICAgIGxldCBwb3MgPSAwO1xuICAgICAgICBsZXQgYW1vdW50ID0gXCJcIjtcbiAgICAgICAgbGV0IHByZWNpc2lvbiA9IDA7XG4gICAgICAgIGlmIChzW3Bvc10gPT09IFwiLVwiKSB7XG4gICAgICAgICAgICBhbW91bnQgKz0gXCItXCI7XG4gICAgICAgICAgICArK3BvcztcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm91bmREaWdpdCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAocG9zIDwgcy5sZW5ndGggJiYgcy5jaGFyQ29kZUF0KHBvcykgPj0gXCIwXCIuY2hhckNvZGVBdCgwKSAmJiBzLmNoYXJDb2RlQXQocG9zKSA8PSBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICBmb3VuZERpZ2l0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGFtb3VudCArPSBzW3Bvc107XG4gICAgICAgICAgICArK3BvcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWZvdW5kRGlnaXQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2V0IG11c3QgYmVnaW4gd2l0aCBhIG51bWJlclwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc1twb3NdID09PSBcIi5cIikge1xuICAgICAgICAgICAgKytwb3M7XG4gICAgICAgICAgICB3aGlsZSAocG9zIDwgcy5sZW5ndGggJiYgcy5jaGFyQ29kZUF0KHBvcykgPj0gXCIwXCIuY2hhckNvZGVBdCgwKSAmJiBzLmNoYXJDb2RlQXQocG9zKSA8PSBcIjlcIi5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgYW1vdW50ICs9IHNbcG9zXTtcbiAgICAgICAgICAgICAgICArK3ByZWNpc2lvbjtcbiAgICAgICAgICAgICAgICArK3BvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuYW1lID0gcy5zdWJzdHIocG9zKS50cmltKCk7XG4gICAgICAgIHRoaXMucHVzaEFycmF5KG51bWVyaWMuc2lnbmVkRGVjaW1hbFRvQmluYXJ5KDgsIGFtb3VudCkpO1xuICAgICAgICB0aGlzLnB1c2hTeW1ib2woeyBuYW1lLCBwcmVjaXNpb24gfSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhbiBhc3NldCAqL1xuICAgIHB1YmxpYyBnZXRBc3NldCgpIHtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gdGhpcy5nZXRVaW50OEFycmF5KDgpO1xuICAgICAgICBjb25zdCB7IG5hbWUsIHByZWNpc2lvbiB9ID0gdGhpcy5nZXRTeW1ib2woKTtcbiAgICAgICAgbGV0IHMgPSBudW1lcmljLnNpZ25lZEJpbmFyeVRvRGVjaW1hbChhbW91bnQsIHByZWNpc2lvbiArIDEpO1xuICAgICAgICBpZiAocHJlY2lzaW9uKSB7XG4gICAgICAgICAgICBzID0gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSBwcmVjaXNpb24pICsgXCIuXCIgKyBzLnN1YnN0cihzLmxlbmd0aCAtIHByZWNpc2lvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHMgKyBcIiBcIiArIG5hbWU7XG4gICAgfVxuXG4gICAgLyoqIEFwcGVuZCBhIHB1YmxpYyBrZXkgKi9cbiAgICBwdWJsaWMgcHVzaFB1YmxpY0tleShzOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbnVtZXJpYy5zdHJpbmdUb1B1YmxpY0tleShzKTtcbiAgICAgICAgdGhpcy5wdXNoKGtleS50eXBlKTtcbiAgICAgICAgdGhpcy5wdXNoQXJyYXkoa2V5LmRhdGEpO1xuICAgIH1cblxuICAgIC8qKiBHZXQgYSBwdWJsaWMga2V5ICovXG4gICAgcHVibGljIGdldFB1YmxpY0tleSgpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldFVpbnQ4QXJyYXkobnVtZXJpYy5wdWJsaWNLZXlEYXRhU2l6ZSk7XG4gICAgICAgIHJldHVybiBudW1lcmljLnB1YmxpY0tleVRvU3RyaW5nKHsgdHlwZSwgZGF0YSB9KTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgcHJpdmF0ZSBrZXkgKi9cbiAgICBwdWJsaWMgcHVzaFByaXZhdGVLZXkoczogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IG51bWVyaWMuc3RyaW5nVG9Qcml2YXRlS2V5KHMpO1xuICAgICAgICB0aGlzLnB1c2goa2V5LnR5cGUpO1xuICAgICAgICB0aGlzLnB1c2hBcnJheShrZXkuZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqIEdldCBhIHByaXZhdGUga2V5ICovXG4gICAgcHVibGljIGdldFByaXZhdGVLZXkoKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLmdldCgpO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5nZXRVaW50OEFycmF5KG51bWVyaWMucHJpdmF0ZUtleURhdGFTaXplKTtcbiAgICAgICAgcmV0dXJuIG51bWVyaWMucHJpdmF0ZUtleVRvU3RyaW5nKHsgdHlwZSwgZGF0YSB9KTtcbiAgICB9XG5cbiAgICAvKiogQXBwZW5kIGEgc2lnbmF0dXJlICovXG4gICAgcHVibGljIHB1c2hTaWduYXR1cmUoczogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IG51bWVyaWMuc3RyaW5nVG9TaWduYXR1cmUocyk7XG4gICAgICAgIHRoaXMucHVzaChrZXkudHlwZSk7XG4gICAgICAgIHRoaXMucHVzaEFycmF5KGtleS5kYXRhKTtcbiAgICB9XG5cbiAgICAvKiogR2V0IGEgc2lnbmF0dXJlICovXG4gICAgcHVibGljIGdldFNpZ25hdHVyZSgpIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmdldFVpbnQ4QXJyYXkobnVtZXJpYy5zaWduYXR1cmVEYXRhU2l6ZSk7XG4gICAgICAgIHJldHVybiBudW1lcmljLnNpZ25hdHVyZVRvU3RyaW5nKHsgdHlwZSwgZGF0YSB9KTtcbiAgICB9XG59IC8vIFNlcmlhbEJ1ZmZlclxuXG4vKiogSXMgdGhpcyBhIHN1cHBvcnRlZCBBQkkgdmVyc2lvbj8gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0ZWRBYmlWZXJzaW9uKHZlcnNpb246IHN0cmluZykge1xuICAgIHJldHVybiB2ZXJzaW9uLnN0YXJ0c1dpdGgoXCJlb3Npbzo6YWJpLzEuXCIpO1xufVxuXG5mdW5jdGlvbiBjaGVja0RhdGVQYXJzZShkYXRlOiBzdHJpbmcpIHtcbiAgICBjb25zdCByZXN1bHQgPSBEYXRlLnBhcnNlKGRhdGUpO1xuICAgIGlmIChOdW1iZXIuaXNOYU4ocmVzdWx0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHRpbWUgZm9ybWF0XCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKiogQ29udmVydCBkYXRlIGluIElTTyBmb3JtYXQgdG8gYHRpbWVfcG9pbnRgIChtaWxpc2Vjb25kcyBzaW5jZSBlcG9jaCkgKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9UaW1lUG9pbnQoZGF0ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoY2hlY2tEYXRlUGFyc2UoZGF0ZSArIFwiWlwiKSAqIDEwMDApO1xufVxuXG4vKiogQ29udmVydCBgdGltZV9wb2ludGAgKG1pbGlzZWNvbmRzIHNpbmNlIGVwb2NoKSB0byBkYXRlIGluIElTTyBmb3JtYXQgKi9cbmV4cG9ydCBmdW5jdGlvbiB0aW1lUG9pbnRUb0RhdGUodXM6IG51bWJlcikge1xuICAgIGNvbnN0IHMgPSAobmV3IERhdGUodXMgLyAxMDAwKSkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcbn1cblxuLyoqIENvbnZlcnQgZGF0ZSBpbiBJU08gZm9ybWF0IHRvIGB0aW1lX3BvaW50X3NlY2AgKHNlY29uZHMgc2luY2UgZXBvY2gpICovXG5leHBvcnQgZnVuY3Rpb24gZGF0ZVRvVGltZVBvaW50U2VjKGRhdGU6IHN0cmluZykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKGNoZWNrRGF0ZVBhcnNlKGRhdGUgKyBcIlpcIikgLyAxMDAwKTtcbn1cblxuLyoqIENvbnZlcnQgYHRpbWVfcG9pbnRfc2VjYCAoc2Vjb25kcyBzaW5jZSBlcG9jaCkgdG8gdG8gZGF0ZSBpbiBJU08gZm9ybWF0ICovXG5leHBvcnQgZnVuY3Rpb24gdGltZVBvaW50U2VjVG9EYXRlKHNlYzogbnVtYmVyKSB7XG4gICAgY29uc3QgcyA9IChuZXcgRGF0ZShzZWMgKiAxMDAwKSkudG9JU09TdHJpbmcoKTtcbiAgICByZXR1cm4gcy5zdWJzdHIoMCwgcy5sZW5ndGggLSAxKTtcbn1cblxuLyoqIENvbnZlcnQgZGF0ZSBpbiBJU08gZm9ybWF0IHRvIGBibG9ja190aW1lc3RhbXBfdHlwZWAgKGhhbGYtc2Vjb25kcyBzaW5jZSBhIGRpZmZlcmVudCBlcG9jaCkgKi9cbmV4cG9ydCBmdW5jdGlvbiBkYXRlVG9CbG9ja1RpbWVzdGFtcChkYXRlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgoY2hlY2tEYXRlUGFyc2UoZGF0ZSArIFwiWlwiKSAtIDk0NjY4NDgwMDAwMCkgLyA1MDApO1xufVxuXG4vKiogQ29udmVydCBgYmxvY2tfdGltZXN0YW1wX3R5cGVgIChoYWxmLXNlY29uZHMgc2luY2UgYSBkaWZmZXJlbnQgZXBvY2gpIHRvIHRvIGRhdGUgaW4gSVNPIGZvcm1hdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrVGltZXN0YW1wVG9EYXRlKHNsb3Q6IG51bWJlcikge1xuICAgIGNvbnN0IHMgPSAobmV3IERhdGUoc2xvdCAqIDUwMCArIDk0NjY4NDgwMDAwMCkpLnRvSVNPU3RyaW5nKCk7XG4gICAgcmV0dXJuIHMuc3Vic3RyKDAsIHMubGVuZ3RoIC0gMSk7XG59XG5cbi8qKiBDb252ZXJ0IGBzdHJpbmdgIHRvIGBTeW1ib2xgLiBmb3JtYXQ6IGBwcmVjaXNpb24sTkFNRWAuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9TeW1ib2woczogc3RyaW5nKTogeyBuYW1lOiBzdHJpbmcsIHByZWNpc2lvbjogbnVtYmVyIH0ge1xuICAgIGlmICh0eXBlb2YgcyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBzdHJpbmcgY29udGFpbmluZyBzeW1ib2xcIik7XG4gICAgfVxuICAgIGNvbnN0IG0gPSBzLm1hdGNoKC9eKFswLTldKyksKFtBLVpdKykkLyk7XG4gICAgaWYgKCFtKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3ltYm9sXCIpO1xuICAgIH1cbiAgICByZXR1cm4geyBuYW1lOiBtWzJdLCBwcmVjaXNpb246ICttWzFdIH07XG59XG5cbi8qKiBDb252ZXJ0IGBTeW1ib2xgIHRvIGBzdHJpbmdgLiBmb3JtYXQ6IGBwcmVjaXNpb24sTkFNRWAuICovXG5leHBvcnQgZnVuY3Rpb24gc3ltYm9sVG9TdHJpbmcoeyBuYW1lLCBwcmVjaXNpb24gfTogeyBuYW1lOiBzdHJpbmcsIHByZWNpc2lvbjogbnVtYmVyIH0pIHtcbiAgICByZXR1cm4gcHJlY2lzaW9uICsgXCIsXCIgKyBuYW1lO1xufVxuXG4vKiogQ29udmVydCBiaW5hcnkgZGF0YSB0byBoZXggKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVRvSGV4KGRhdGE6IFVpbnQ4QXJyYXkpIHtcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgICBmb3IgKGNvbnN0IHggb2YgZGF0YSkge1xuICAgICAgICByZXN1bHQgKz0gKFwiMDBcIiArIHgudG9TdHJpbmcoMTYpKS5zbGljZSgtMik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQudG9VcHBlckNhc2UoKTtcbn1cblxuLyoqIENvbnZlcnQgaGV4IHRvIGJpbmFyeSBkYXRhICovXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9VaW50OEFycmF5KGhleDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBoZXggIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgaGV4IGRpZ2l0c1wiKTtcbiAgICB9XG4gICAgaWYgKGhleC5sZW5ndGggJSAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk9kZCBudW1iZXIgb2YgaGV4IGRpZ2l0c1wiKTtcbiAgICB9XG4gICAgY29uc3QgbCA9IGhleC5sZW5ndGggLyAyO1xuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGwpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHggPSBwYXJzZUludChoZXguc3Vic3RyKGkgKiAyLCAyKSwgMTYpO1xuICAgICAgICBpZiAoTnVtYmVyLmlzTmFOKHgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBoZXggc3RyaW5nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdFtpXSA9IHg7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVVua25vd24oYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IGFueSk6IFNlcmlhbEJ1ZmZlciB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRG9uJ3Qga25vdyBob3cgdG8gc2VyaWFsaXplIFwiICsgdGhpcy5uYW1lKTtcbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVVbmtub3duKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKTogU2VyaWFsQnVmZmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJEb24ndCBrbm93IGhvdyB0byBkZXNlcmlhbGl6ZSBcIiArIHRoaXMubmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVN0cnVjdCh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogYW55LFxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gbmV3IFNlcmlhbGl6ZXJTdGF0ZSgpLCBhbGxvd0V4dGVuc2lvbnMgPSB0cnVlKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImV4cGVjdGVkIG9iamVjdCBjb250YWluaW5nIGRhdGE6IFwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgIH1cbiAgICBpZiAodGhpcy5iYXNlKSB7XG4gICAgICAgIHRoaXMuYmFzZS5zZXJpYWxpemUoYnVmZmVyLCBkYXRhLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmZpZWxkcykge1xuICAgICAgICBpZiAoZmllbGQubmFtZSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuc2tpcHBlZEJpbmFyeUV4dGVuc2lvbikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuZXhwZWN0ZWQgXCIgKyB0aGlzLm5hbWUgKyBcIi5cIiArIGZpZWxkLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmllbGQudHlwZS5zZXJpYWxpemUoXG4gICAgICAgICAgICAgICAgYnVmZmVyLCBkYXRhW2ZpZWxkLm5hbWVdLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zICYmIGZpZWxkID09PSB0aGlzLmZpZWxkc1t0aGlzLmZpZWxkcy5sZW5ndGggLSAxXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoYWxsb3dFeHRlbnNpb25zICYmIGZpZWxkLnR5cGUuZXh0ZW5zaW9uT2YpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5za2lwcGVkQmluYXJ5RXh0ZW5zaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibWlzc2luZyBcIiArIHRoaXMubmFtZSArIFwiLlwiICsgZmllbGQubmFtZSArIFwiICh0eXBlPVwiICsgZmllbGQudHlwZS5uYW1lICsgXCIpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVN0cnVjdCh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGUgPSBuZXcgU2VyaWFsaXplclN0YXRlKCksIGFsbG93RXh0ZW5zaW9ucyA9IHRydWUpIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh0aGlzLmJhc2UpIHtcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5iYXNlLmRlc2VyaWFsaXplKGJ1ZmZlciwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0ge307XG4gICAgfVxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZHMpIHtcbiAgICAgICAgaWYgKGFsbG93RXh0ZW5zaW9ucyAmJiBmaWVsZC50eXBlLmV4dGVuc2lvbk9mICYmICFidWZmZXIuaGF2ZVJlYWREYXRhKCkpIHtcbiAgICAgICAgICAgIHN0YXRlLnNraXBwZWRCaW5hcnlFeHRlbnNpb24gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0W2ZpZWxkLm5hbWVdID0gZmllbGQudHlwZS5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZVZhcmlhbnQodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZGF0YSkgfHwgZGF0YS5sZW5ndGggIT09IDIgfHwgdHlwZW9mIGRhdGFbMF0gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdleHBlY3RlZCB2YXJpYW50OiBbXCJ0eXBlXCIsIHZhbHVlXScpO1xuICAgIH1cbiAgICBjb25zdCBpID0gdGhpcy5maWVsZHMuZmluZEluZGV4KChmaWVsZDogRmllbGQpID0+IGZpZWxkLm5hbWUgPT09IGRhdGFbMF0pO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHR5cGUgXCIke2RhdGFbMF19XCIgaXMgbm90IHZhbGlkIGZvciB2YXJpYW50YCk7XG4gICAgfVxuICAgIGJ1ZmZlci5wdXNoVmFydWludDMyKGkpO1xuICAgIHRoaXMuZmllbGRzW2ldLnR5cGUuc2VyaWFsaXplKGJ1ZmZlciwgZGF0YVsxXSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplVmFyaWFudCh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpID0gYnVmZmVyLmdldFZhcnVpbnQzMigpO1xuICAgIGlmIChpID49IHRoaXMuZmllbGRzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHR5cGUgaW5kZXggJHtpfSBpcyBub3QgdmFsaWQgZm9yIHZhcmlhbnRgKTtcbiAgICB9XG4gICAgY29uc3QgZmllbGQgPSB0aGlzLmZpZWxkc1tpXTtcbiAgICByZXR1cm4gW2ZpZWxkLm5hbWUsIGZpZWxkLnR5cGUuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgYWxsb3dFeHRlbnNpb25zKV07XG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZUFycmF5KHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnlbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XG4gICAgYnVmZmVyLnB1c2hWYXJ1aW50MzIoZGF0YS5sZW5ndGgpO1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBkYXRhKSB7XG4gICAgICAgIHRoaXMuYXJyYXlPZi5zZXJpYWxpemUoYnVmZmVyLCBpdGVtLCBzdGF0ZSwgZmFsc2UpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZGVzZXJpYWxpemVBcnJheSh0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcbiAgICBjb25zdCBsZW4gPSBidWZmZXIuZ2V0VmFydWludDMyKCk7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzLmFycmF5T2YuZGVzZXJpYWxpemUoYnVmZmVyLCBzdGF0ZSwgZmFsc2UpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplT3B0aW9uYWwodGhpczogVHlwZSwgYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IGFueSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSB7XG4gICAgaWYgKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGJ1ZmZlci5wdXNoKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1ZmZlci5wdXNoKDEpO1xuICAgICAgICB0aGlzLm9wdGlvbmFsT2Yuc2VyaWFsaXplKGJ1ZmZlciwgZGF0YSwgc3RhdGUsIGFsbG93RXh0ZW5zaW9ucyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZU9wdGlvbmFsKHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikge1xuICAgIGlmIChidWZmZXIuZ2V0KCkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uYWxPZi5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gc2VyaWFsaXplRXh0ZW5zaW9uKHRoaXM6IFR5cGUsIGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcbiAgICB0aGlzLmV4dGVuc2lvbk9mLnNlcmlhbGl6ZShidWZmZXIsIGRhdGEsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xufVxuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZUV4dGVuc2lvbih0aGlzOiBUeXBlLCBidWZmZXI6IFNlcmlhbEJ1ZmZlciwgc3RhdGU/OiBTZXJpYWxpemVyU3RhdGUsIGFsbG93RXh0ZW5zaW9ucz86IGJvb2xlYW4pIHtcbiAgICByZXR1cm4gdGhpcy5leHRlbnNpb25PZi5kZXNlcmlhbGl6ZShidWZmZXIsIHN0YXRlLCBhbGxvd0V4dGVuc2lvbnMpO1xufVxuXG5pbnRlcmZhY2UgQ3JlYXRlVHlwZUFyZ3Mge1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgYWxpYXNPZk5hbWU/OiBzdHJpbmc7XG4gICAgYXJyYXlPZj86IFR5cGU7XG4gICAgb3B0aW9uYWxPZj86IFR5cGU7XG4gICAgZXh0ZW5zaW9uT2Y/OiBUeXBlO1xuICAgIGJhc2VOYW1lPzogc3RyaW5nO1xuICAgIGJhc2U/OiBUeXBlO1xuICAgIGZpZWxkcz86IEZpZWxkW107XG4gICAgc2VyaWFsaXplPzogKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBhbnksIHN0YXRlPzogU2VyaWFsaXplclN0YXRlLCBhbGxvd0V4dGVuc2lvbnM/OiBib29sZWFuKSA9PiB2b2lkO1xuICAgIGRlc2VyaWFsaXplPzogKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBzdGF0ZT86IFNlcmlhbGl6ZXJTdGF0ZSwgYWxsb3dFeHRlbnNpb25zPzogYm9vbGVhbikgPT4gYW55O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUeXBlKGF0dHJzOiBDcmVhdGVUeXBlQXJncyk6IFR5cGUge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6IFwiPG1pc3NpbmcgbmFtZT5cIixcbiAgICAgICAgYWxpYXNPZk5hbWU6IFwiXCIsXG4gICAgICAgIGFycmF5T2Y6IG51bGwsXG4gICAgICAgIG9wdGlvbmFsT2Y6IG51bGwsXG4gICAgICAgIGV4dGVuc2lvbk9mOiBudWxsLFxuICAgICAgICBiYXNlTmFtZTogXCJcIixcbiAgICAgICAgYmFzZTogbnVsbCxcbiAgICAgICAgZmllbGRzOiBbXSxcbiAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVVbmtub3duLFxuICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVVbmtub3duLFxuICAgICAgICAuLi5hdHRycyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjaGVja1JhbmdlKG9yaWc6IG51bWJlciwgY29udmVydGVkOiBudW1iZXIpIHtcbiAgICBpZiAoTnVtYmVyLmlzTmFOKCtvcmlnKSB8fCBOdW1iZXIuaXNOYU4oK2NvbnZlcnRlZCkgfHwgKHR5cGVvZiBvcmlnICE9PSBcIm51bWJlclwiICYmIHR5cGVvZiBvcmlnICE9PSBcInN0cmluZ1wiKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBudW1iZXJcIik7XG4gICAgfVxuICAgIGlmICgrb3JpZyAhPT0gK2NvbnZlcnRlZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOdW1iZXIgaXMgb3V0IG9mIHJhbmdlXCIpO1xuICAgIH1cbiAgICByZXR1cm4gK29yaWc7XG59XG5cbi8qKiBDcmVhdGUgdGhlIHNldCBvZiB0eXBlcyBidWlsdC1pbiB0byB0aGUgYWJpIGZvcm1hdCAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRpYWxUeXBlcygpOiBNYXA8c3RyaW5nLCBUeXBlPiB7XG4gICAgY29uc3QgcmVzdWx0OiBNYXA8c3RyaW5nLCBUeXBlPiA9IG5ldyBNYXAoT2JqZWN0LmVudHJpZXMoe1xuICAgICAgICBib29sOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiYm9vbFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBib29sZWFuKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCB0cnVlIG9yIGZhbHNlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChkYXRhID8gMSA6IDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiAhIWJ1ZmZlci5nZXQoKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHVpbnQ4OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwidWludDhcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSAmIDB4ZmYpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0KCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBpbnQ4OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiaW50OFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2goY2hlY2tSYW5nZShkYXRhLCBkYXRhIDw8IDI0ID4+IDI0KSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldCgpIDw8IDI0ID4+IDI0OyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdWludDE2OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwidWludDE2XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFVpbnQxNihjaGVja1JhbmdlKGRhdGEsIGRhdGEgJiAweGZmZmYpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0VWludDE2KCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBpbnQxNjogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImludDE2XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFVpbnQxNihjaGVja1JhbmdlKGRhdGEsIGRhdGEgPDwgMTYgPj4gMTYpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0VWludDE2KCkgPDwgMTYgPj4gMTY7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB1aW50MzI6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJ1aW50MzJcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogbnVtYmVyKSB7IGJ1ZmZlci5wdXNoVWludDMyKGNoZWNrUmFuZ2UoZGF0YSwgZGF0YSA+Pj4gMCkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRVaW50MzIoKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHVpbnQ2NDogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInVpbnQ2NFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaEFycmF5KG51bWVyaWMuZGVjaW1hbFRvQmluYXJ5KDgsIFwiXCIgKyBkYXRhKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIG51bWVyaWMuYmluYXJ5VG9EZWNpbWFsKGJ1ZmZlci5nZXRVaW50OEFycmF5KDgpKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGludDY0OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiaW50NjRcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLnB1c2hBcnJheShudW1lcmljLnNpZ25lZERlY2ltYWxUb0JpbmFyeSg4LCBcIlwiICsgZGF0YSkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBudW1lcmljLnNpZ25lZEJpbmFyeVRvRGVjaW1hbChidWZmZXIuZ2V0VWludDhBcnJheSg4KSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBpbnQzMjogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImludDMyXCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IG51bWJlcikgeyBidWZmZXIucHVzaFVpbnQzMihjaGVja1JhbmdlKGRhdGEsIGRhdGEgfCAwKSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFVpbnQzMigpIHwgMDsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHZhcnVpbnQzMjogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInZhcnVpbnQzMlwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hWYXJ1aW50MzIoY2hlY2tSYW5nZShkYXRhLCBkYXRhID4+PiAwKSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFZhcnVpbnQzMigpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgdmFyaW50MzI6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJ2YXJpbnQzMlwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hWYXJpbnQzMihjaGVja1JhbmdlKGRhdGEsIGRhdGEgfCAwKSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFZhcmludDMyKCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB1aW50MTI4OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwidWludDEyOFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hBcnJheShudW1lcmljLmRlY2ltYWxUb0JpbmFyeSgxNiwgXCJcIiArIGRhdGEpKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBudW1lcmljLmJpbmFyeVRvRGVjaW1hbChidWZmZXIuZ2V0VWludDhBcnJheSgxNikpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgaW50MTI4OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiaW50MTI4XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQXJyYXkobnVtZXJpYy5zaWduZWREZWNpbWFsVG9CaW5hcnkoMTYsIFwiXCIgKyBkYXRhKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIG51bWVyaWMuc2lnbmVkQmluYXJ5VG9EZWNpbWFsKGJ1ZmZlci5nZXRVaW50OEFycmF5KDE2KSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBmbG9hdDMyOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmxvYXQzMlwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hGbG9hdDMyKGRhdGEpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRGbG9hdDMyKCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBmbG9hdDY0OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmxvYXQ2NFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBudW1iZXIpIHsgYnVmZmVyLnB1c2hGbG9hdDY0KGRhdGEpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRGbG9hdDY0KCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBmbG9hdDEyODogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImZsb2F0MTI4XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQ4QXJyYXlDaGVja2VkKGhleFRvVWludDhBcnJheShkYXRhKSwgMTYpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGFycmF5VG9IZXgoYnVmZmVyLmdldFVpbnQ4QXJyYXkoMTYpKTsgfSxcbiAgICAgICAgfSksXG5cbiAgICAgICAgYnl0ZXM6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJieXRlc1wiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcgfCBVaW50OEFycmF5IHwgbnVtYmVyW10pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkgfHwgQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIucHVzaEJ5dGVzKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlci5wdXNoQnl0ZXMoaGV4VG9VaW50OEFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIHN0YXRlPzogU2VyaWFsaXplclN0YXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLm9wdGlvbnMuYnl0ZXNBc1VpbnQ4QXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlci5nZXRCeXRlcygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5nZXRCeXRlcygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgc3RyaW5nOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFN0cmluZyhkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0U3RyaW5nKCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBuYW1lOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hOYW1lKGRhdGEpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXROYW1lKCk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB0aW1lX3BvaW50OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwidGltZV9wb2ludFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hOdW1iZXJBc1VpbnQ2NChkYXRlVG9UaW1lUG9pbnQoZGF0YSkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIHRpbWVQb2ludFRvRGF0ZShidWZmZXIuZ2V0VWludDY0QXNOdW1iZXIoKSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICB0aW1lX3BvaW50X3NlYzogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInRpbWVfcG9pbnRfc2VjXCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQzMihkYXRlVG9UaW1lUG9pbnRTZWMoZGF0YSkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIHRpbWVQb2ludFNlY1RvRGF0ZShidWZmZXIuZ2V0VWludDMyKCkpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgYmxvY2tfdGltZXN0YW1wX3R5cGU6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJibG9ja190aW1lc3RhbXBfdHlwZVwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hVaW50MzIoZGF0ZVRvQmxvY2tUaW1lc3RhbXAoZGF0YSkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJsb2NrVGltZXN0YW1wVG9EYXRlKGJ1ZmZlci5nZXRVaW50MzIoKSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBzeW1ib2xfY29kZTogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInN5bWJvbF9jb2RlXCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFN5bWJvbENvZGUoZGF0YSk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYnVmZmVyLmdldFN5bWJvbENvZGUoKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHN5bWJvbDogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInN5bWJvbFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hTeW1ib2woc3RyaW5nVG9TeW1ib2woZGF0YSkpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIHN5bWJvbFRvU3RyaW5nKGJ1ZmZlci5nZXRTeW1ib2woKSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBhc3NldDogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImFzc2V0XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaEFzc2V0KGRhdGEpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRBc3NldCgpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgY2hlY2tzdW0xNjA6IGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZTogXCJjaGVja3N1bTE2MFwiLFxuICAgICAgICAgICAgc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyLCBkYXRhOiBzdHJpbmcpIHsgYnVmZmVyLnB1c2hVaW50OEFycmF5Q2hlY2tlZChoZXhUb1VpbnQ4QXJyYXkoZGF0YSksIDIwKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBhcnJheVRvSGV4KGJ1ZmZlci5nZXRVaW50OEFycmF5KDIwKSk7IH0sXG4gICAgICAgIH0pLFxuICAgICAgICBjaGVja3N1bTI1NjogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcImNoZWNrc3VtMjU2XCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFVpbnQ4QXJyYXlDaGVja2VkKGhleFRvVWludDhBcnJheShkYXRhKSwgMzIpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGFycmF5VG9IZXgoYnVmZmVyLmdldFVpbnQ4QXJyYXkoMzIpKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIGNoZWNrc3VtNTEyOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tzdW01MTJcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoVWludDhBcnJheUNoZWNrZWQoaGV4VG9VaW50OEFycmF5KGRhdGEpLCA2NCk7IH0sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlcikgeyByZXR1cm4gYXJyYXlUb0hleChidWZmZXIuZ2V0VWludDhBcnJheSg2NCkpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgcHVibGljX2tleTogY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lOiBcInB1YmxpY19rZXlcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoUHVibGljS2V5KGRhdGEpOyB9LFxuICAgICAgICAgICAgZGVzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIpIHsgcmV0dXJuIGJ1ZmZlci5nZXRQdWJsaWNLZXkoKTsgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHByaXZhdGVfa2V5OiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwicHJpdmF0ZV9rZXlcIixcbiAgICAgICAgICAgIHNlcmlhbGl6ZShidWZmZXI6IFNlcmlhbEJ1ZmZlciwgZGF0YTogc3RyaW5nKSB7IGJ1ZmZlci5wdXNoUHJpdmF0ZUtleShkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0UHJpdmF0ZUtleSgpOyB9LFxuICAgICAgICB9KSxcbiAgICAgICAgc2lnbmF0dXJlOiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWU6IFwic2lnbmF0dXJlXCIsXG4gICAgICAgICAgICBzZXJpYWxpemUoYnVmZmVyOiBTZXJpYWxCdWZmZXIsIGRhdGE6IHN0cmluZykgeyBidWZmZXIucHVzaFNpZ25hdHVyZShkYXRhKTsgfSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplKGJ1ZmZlcjogU2VyaWFsQnVmZmVyKSB7IHJldHVybiBidWZmZXIuZ2V0U2lnbmF0dXJlKCk7IH0sXG4gICAgICAgIH0pLFxuICAgIH0pKTtcblxuICAgIHJlc3VsdC5zZXQoXCJleHRlbmRlZF9hc3NldFwiLCBjcmVhdGVUeXBlKHtcbiAgICAgICAgbmFtZTogXCJleHRlbmRlZF9hc3NldFwiLFxuICAgICAgICBiYXNlTmFtZTogXCJcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICB7IG5hbWU6IFwicXVhbnRpdHlcIiwgdHlwZU5hbWU6IFwiYXNzZXRcIiwgdHlwZTogcmVzdWx0LmdldChcImFzc2V0XCIpIH0sXG4gICAgICAgICAgICB7IG5hbWU6IFwiY29udHJhY3RcIiwgdHlwZU5hbWU6IFwibmFtZVwiLCB0eXBlOiByZXN1bHQuZ2V0KFwibmFtZVwiKSB9LFxuICAgICAgICBdLFxuICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVN0cnVjdCxcbiAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplU3RydWN0LFxuICAgIH0pKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59IC8vIGNyZWF0ZUluaXRpYWxUeXBlcygpXG5cbi8qKiBHZXQgdHlwZSBmcm9tIGB0eXBlc2AgKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlKHR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPiwgbmFtZTogc3RyaW5nKTogVHlwZSB7XG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmdldChuYW1lKTtcbiAgICBpZiAodHlwZSAmJiB0eXBlLmFsaWFzT2ZOYW1lKSB7XG4gICAgICAgIHJldHVybiBnZXRUeXBlKHR5cGVzLCB0eXBlLmFsaWFzT2ZOYW1lKTtcbiAgICB9XG4gICAgaWYgKHR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICAgIGlmIChuYW1lLmVuZHNXaXRoKFwiW11cIikpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVR5cGUoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGFycmF5T2Y6IGdldFR5cGUodHlwZXMsIG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMikpLFxuICAgICAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVBcnJheSxcbiAgICAgICAgICAgIGRlc2VyaWFsaXplOiBkZXNlcmlhbGl6ZUFycmF5LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKG5hbWUuZW5kc1dpdGgoXCI/XCIpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBvcHRpb25hbE9mOiBnZXRUeXBlKHR5cGVzLCBuYW1lLnN1YnN0cigwLCBuYW1lLmxlbmd0aCAtIDEpKSxcbiAgICAgICAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplT3B0aW9uYWwsXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVPcHRpb25hbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChuYW1lLmVuZHNXaXRoKFwiJFwiKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlVHlwZSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgZXh0ZW5zaW9uT2Y6IGdldFR5cGUodHlwZXMsIG5hbWUuc3Vic3RyKDAsIG5hbWUubGVuZ3RoIC0gMSkpLFxuICAgICAgICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemVFeHRlbnNpb24sXG4gICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVFeHRlbnNpb24sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIHR5cGU6IFwiICsgbmFtZSk7XG59XG5cbi8qKlxuICogR2V0IHR5cGVzIGZyb20gYWJpXG4gKiBAcGFyYW0gaW5pdGlhbFR5cGVzIFNldCBvZiB0eXBlcyB0byBidWlsZCBvbi5cbiAqICAgICBJbiBtb3N0IGNhc2VzLCBpdCdzIGJlc3QgdG8gZmlsbCB0aGlzIGZyb20gYSBmcmVzaCBjYWxsIHRvIGBnZXRUeXBlc0Zyb21BYmkoKWAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUeXBlc0Zyb21BYmkoaW5pdGlhbFR5cGVzOiBNYXA8c3RyaW5nLCBUeXBlPiwgYWJpOiBBYmkpIHtcbiAgICBjb25zdCB0eXBlcyA9IG5ldyBNYXAoaW5pdGlhbFR5cGVzKTtcbiAgICBpZiAoYWJpLnR5cGVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgeyBuZXdfdHlwZV9uYW1lLCB0eXBlIH0gb2YgYWJpLnR5cGVzKSB7XG4gICAgICAgICAgICB0eXBlcy5zZXQobmV3X3R5cGVfbmFtZSxcbiAgICAgICAgICAgICAgICBjcmVhdGVUeXBlKHsgbmFtZTogbmV3X3R5cGVfbmFtZSwgYWxpYXNPZk5hbWU6IHR5cGUgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChhYmkuc3RydWN0cykge1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgYmFzZSwgZmllbGRzIH0gb2YgYWJpLnN0cnVjdHMpIHtcbiAgICAgICAgICAgIHR5cGVzLnNldChuYW1lLCBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGJhc2VOYW1lOiBiYXNlLFxuICAgICAgICAgICAgICAgIGZpZWxkczogZmllbGRzLm1hcCgoeyBuYW1lOiBuLCB0eXBlIH0pID0+ICh7IG5hbWU6IG4sIHR5cGVOYW1lOiB0eXBlLCB0eXBlOiBudWxsIH0pKSxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVN0cnVjdCxcbiAgICAgICAgICAgICAgICBkZXNlcmlhbGl6ZTogZGVzZXJpYWxpemVTdHJ1Y3QsXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFiaS52YXJpYW50cykge1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgdHlwZXM6IHQgfSBvZiBhYmkudmFyaWFudHMpIHtcbiAgICAgICAgICAgIHR5cGVzLnNldChuYW1lLCBjcmVhdGVUeXBlKHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkczogdC5tYXAoKHMpID0+ICh7IG5hbWU6IHMsIHR5cGVOYW1lOiBzLCB0eXBlOiBudWxsIH0pKSxcbiAgICAgICAgICAgICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZVZhcmlhbnQsXG4gICAgICAgICAgICAgICAgZGVzZXJpYWxpemU6IGRlc2VyaWFsaXplVmFyaWFudCxcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IFtuYW1lLCB0eXBlXSBvZiB0eXBlcykge1xuICAgICAgICBpZiAodHlwZS5iYXNlTmFtZSkge1xuICAgICAgICAgICAgdHlwZS5iYXNlID0gZ2V0VHlwZSh0eXBlcywgdHlwZS5iYXNlTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0eXBlLmZpZWxkcykge1xuICAgICAgICAgICAgZmllbGQudHlwZSA9IGdldFR5cGUodHlwZXMsIGZpZWxkLnR5cGVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHlwZXM7XG59IC8vIGdldFR5cGVzRnJvbUFiaVxuXG4vKiogVEFQb1M6IFJldHVybiB0cmFuc2FjdGlvbiBmaWVsZHMgd2hpY2ggcmVmZXJlbmNlIGByZWZCbG9ja2AgYW5kIGV4cGlyZSBgZXhwaXJlU2Vjb25kc2AgYWZ0ZXIgYHJlZkJsb2NrLnRpbWVzdGFtcGAgKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2FjdGlvbkhlYWRlcihyZWZCbG9jazogQmxvY2tUYXBvc0luZm8sIGV4cGlyZVNlY29uZHM6IG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGV4cGlyYXRpb246IHRpbWVQb2ludFNlY1RvRGF0ZShkYXRlVG9UaW1lUG9pbnRTZWMocmVmQmxvY2sudGltZXN0YW1wKSArIGV4cGlyZVNlY29uZHMpLFxuICAgICAgICByZWZfYmxvY2tfbnVtOiByZWZCbG9jay5ibG9ja19udW0gJiAweGZmZmYsXG4gICAgICAgIHJlZl9ibG9ja19wcmVmaXg6IHJlZkJsb2NrLnJlZl9ibG9ja19wcmVmaXgsXG4gICAgfTtcbn1cblxuLyoqIENvbnZlcnQgYWN0aW9uIGRhdGEgdG8gc2VyaWFsaXplZCBmb3JtIChoZXgpICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplQWN0aW9uRGF0YShjb250cmFjdDogQ29udHJhY3QsIGFjY291bnQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBkYXRhOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsIHRleHREZWNvZGVyOiBUZXh0RGVjb2Rlcik6IHN0cmluZyB7XG4gICAgY29uc3QgYWN0aW9uID0gY29udHJhY3QuYWN0aW9ucy5nZXQobmFtZSk7XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbiAke25hbWV9IGluIGNvbnRyYWN0ICR7YWNjb3VudH1gKTtcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gbmV3IFNlcmlhbEJ1ZmZlcih7IHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciB9KTtcbiAgICBhY3Rpb24uc2VyaWFsaXplKGJ1ZmZlciwgZGF0YSk7XG4gICAgcmV0dXJuIGFycmF5VG9IZXgoYnVmZmVyLmFzVWludDhBcnJheSgpKTtcbn1cblxuLyoqIFJldHVybiBhY3Rpb24gaW4gc2VyaWFsaXplZCBmb3JtICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplQWN0aW9uKGNvbnRyYWN0OiBDb250cmFjdCwgYWNjb3VudDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcml6YXRpb246IEF1dGhvcml6YXRpb25bXSwgZGF0YTogYW55LCB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvZGVyOiBUZXh0RGVjb2Rlcik6IFNlcmlhbGl6ZWRBY3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICAgIGFjY291bnQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGF1dGhvcml6YXRpb24sXG4gICAgICAgIGRhdGE6IHNlcmlhbGl6ZUFjdGlvbkRhdGEoY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGRhdGEsIHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciksXG4gICAgfTtcbn1cblxuLyoqIERlc2VyaWFsaXplIGFjdGlvbiBkYXRhLiBJZiBgZGF0YWAgaXMgYSBgc3RyaW5nYCwgdGhlbiBpdCdzIGFzc3VtZWQgdG8gYmUgaW4gaGV4LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplQWN0aW9uRGF0YShjb250cmFjdDogQ29udHJhY3QsIGFjY291bnQ6IHN0cmluZywgbmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBzdHJpbmcgfCBVaW50OEFycmF5IHwgbnVtYmVyW10sIHRleHRFbmNvZGVyOiBUZXh0RW5jb2RlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29kZXI6IFRleHREZWNvZGVyKTogYW55IHtcbiAgICBjb25zdCBhY3Rpb24gPSBjb250cmFjdC5hY3Rpb25zLmdldChuYW1lKTtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZGF0YSA9IGhleFRvVWludDhBcnJheShkYXRhKTtcbiAgICB9XG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbiAke25hbWV9IGluIGNvbnRyYWN0ICR7YWNjb3VudH1gKTtcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gbmV3IFNlcmlhbEJ1ZmZlcih7IHRleHREZWNvZGVyLCB0ZXh0RW5jb2RlciB9KTtcbiAgICBidWZmZXIucHVzaEFycmF5KGRhdGEpO1xuICAgIHJldHVybiBhY3Rpb24uZGVzZXJpYWxpemUoYnVmZmVyKTtcbn1cblxuLyoqIERlc2VyaWFsaXplIGFjdGlvbi4gSWYgYGRhdGFgIGlzIGEgYHN0cmluZ2AsIHRoZW4gaXQncyBhc3N1bWVkIHRvIGJlIGluIGhleC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZUFjdGlvbihjb250cmFjdDogQ29udHJhY3QsIGFjY291bnQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBhdXRob3JpemF0aW9uOiBBdXRob3JpemF0aW9uW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogc3RyaW5nIHwgVWludDhBcnJheSB8IG51bWJlcltdLCB0ZXh0RW5jb2RlcjogVGV4dEVuY29kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29kZXI6IFRleHREZWNvZGVyKTogQWN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBhY2NvdW50LFxuICAgICAgICBuYW1lLFxuICAgICAgICBhdXRob3JpemF0aW9uLFxuICAgICAgICBkYXRhOiBkZXNlcmlhbGl6ZUFjdGlvbkRhdGEoY29udHJhY3QsIGFjY291bnQsIG5hbWUsIGRhdGEsIHRleHRFbmNvZGVyLCB0ZXh0RGVjb2RlciksXG4gICAgfTtcbn1cbiIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20vd2x6bGEwMDAvYmFjODNkZjZkM2M1MTkxNmM0ZGQwYmM5NDdlNDY5NDcvcmF3LzdlZTM0NjJiMDk1YWIyMjU4MGRkYWYxOTFmNDRhNTkwZGE2ZmUzM2IvUklQRU1ELTE2MC5qc1xuXG4vKlxuXHRSSVBFTUQtMTYwLmpzXG5cblx0XHRkZXZlbG9wZWRcblx0XHRcdGJ5IEsuIChodHRwczovL2dpdGh1Yi5jb20vd2x6bGEwMDApXG5cdFx0XHRvbiBEZWNlbWJlciAyNy0yOSwgMjAxNyxcblxuXHRcdGxpY2Vuc2VkIHVuZGVyXG5cblxuXHRcdHRoZSBNSVQgbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChjKSAyMDE3IEsuXG5cblx0XHQgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cblx0XHRvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvblxuXHRcdGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxuXHRcdHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuXHRcdGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vclxuXHRcdHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXG5cdFx0U29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcblx0XHRjb25kaXRpb25zOlxuXG5cdFx0IFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5cdFx0aW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHQgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcblx0XHRFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVNcblx0XHRPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuXHRcdE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXG5cdFx0SE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksXG5cdFx0V0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG5cdFx0RlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxuXHRcdE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cblwidXNlIHN0cmljdFwiO1xuXG5jbGFzcyBSSVBFTUQxNjBcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0Ly8gaHR0cHM6Ly93ZWJjYWNoZS5nb29nbGV1c2VyY29udGVudC5jb20vc2VhcmNoP3E9Y2FjaGU6Q25MT2dvbFRIWUVKOmh0dHBzOi8vd3d3LmNvc2ljLmVzYXQua3VsZXV2ZW4uYmUvcHVibGljYXRpb25zL2FydGljbGUtMzE3LnBkZlxuXHRcdC8vIGh0dHA6Ly9zaG9kaGdhbmdhLmluZmxpYm5ldC5hYy5pbi9iaXRzdHJlYW0vMTA2MDMvMjI5NzgvMTMvMTNfYXBwZW5kaXgucGRmXG5cdH1cblxuXHRzdGF0aWMgZ2V0X25fcGFkX2J5dGVzKG1lc3NhZ2Vfc2l6ZSAvKiBpbiBieXRlcywgMSBieXRlIGlzIDggYml0cy4gKi8pXG5cdHtcblx0XHQvLyAgT2J0YWluIHRoZSBudW1iZXIgb2YgYnl0ZXMgbmVlZGVkIHRvIHBhZCB0aGUgbWVzc2FnZS5cblx0XHQvLyBJdCBkb2VzIG5vdCBjb250YWluIHRoZSBzaXplIG9mIHRoZSBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXG5cdFx0Lypcblx0XHRcdGh0dHBzOi8vd2ViY2FjaGUuZ29vZ2xldXNlcmNvbnRlbnQuY29tL3NlYXJjaD9xPWNhY2hlOkNuTE9nb2xUSFlFSjpodHRwczovL3d3dy5jb3NpYy5lc2F0Lmt1bGV1dmVuLmJlL3B1YmxpY2F0aW9ucy9hcnRpY2xlLTMxNy5wZGZcblxuXHRcdFx0VGhlIENyeXB0b2dyYXBoaWMgSGFzaCBGdW5jdGlvbiBSSVBFTUQtMTYwXG5cblx0XHRcdHdyaXR0ZW4gYnlcblx0XHRcdFx0QmFydCBQcmVuZWVsLFxuXHRcdFx0XHRIYW5zIERvYmJlcnRpbixcblx0XHRcdFx0QW50b29uIEJvc3NlbGFlcnNcblx0XHRcdGluXG5cdFx0XHRcdDE5OTcuXG5cblx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0XHRcdMKnNSAgICAgRGVzY3JpcHRpb24gb2YgUklQRU1ELTE2MFxuXG5cdFx0XHQuLi4uLi5cblxuXHRcdFx0IEluIG9yZGVyIHRvIGd1YXJhbnRlZSB0aGF0IHRoZSB0b3RhbCBpbnB1dCBzaXplIGlzIGFcblx0XHRcdG11bHRpcGxlIG9mIDUxMiBiaXRzLCB0aGUgaW5wdXQgaXMgcGFkZGVkIGluIHRoZSBzYW1lXG5cdFx0XHR3YXkgYXMgZm9yIGFsbCB0aGUgbWVtYmVycyBvZiB0aGUgTUQ0LWZhbWlseTogb25lXG5cdFx0XHRhcHBlbmRzIGEgc2luZ2xlIDEgZm9sbG93ZWQgYnkgYSBzdHJpbmcgb2YgMHMgKHRoZVxuXHRcdFx0bnVtYmVyIG9mIDBzIGxpZXMgYmV0d2VlbiAwIGFuZCA1MTEpOyB0aGUgbGFzdCA2NCBiaXRzXG5cdFx0XHRvZiB0aGUgZXh0ZW5kZWQgaW5wdXQgY29udGFpbiB0aGUgYmluYXJ5IHJlcHJlc2VudGF0aW9uXG5cdFx0XHRvZiB0aGUgaW5wdXQgc2l6ZSBpbiBiaXRzLCBsZWFzdCBzaWduaWZpY2FudCBieXRlIGZpcnN0LlxuXHRcdCovXG5cdFx0Lypcblx0XHRcdGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvcmZjL3JmYzExODYudHh0XG5cblx0XHRcdFJGQyAxMTg2OiBNRDQgTWVzc2FnZSBEaWdlc3QgQWxnb3JpdGhtLlxuXG5cdFx0XHR3cml0dGVuIGJ5XG5cdFx0XHRcdFJvbmFsZCBMaW5uIFJpdmVzdFxuXHRcdFx0aW5cblx0XHRcdFx0T2N0b2JlciAxOTkwLlxuXG5cdFx0XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdFx0XHTCpzMgICAgIE1ENCBBbGdvcml0aG0gRGVzY3JpcHRpb25cblxuXHRcdFx0Li4uLi4uXG5cblx0XHRcdFN0ZXAgMS4gQXBwZW5kIHBhZGRpbmcgYml0c1xuXG5cdFx0XHQgVGhlIG1lc3NhZ2UgaXMgXCJwYWRkZWRcIiAoZXh0ZW5kZWQpIHNvIHRoYXQgaXRzIGxlbmd0aFxuXHRcdFx0KGluIGJpdHMpIGlzIGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIuIFRoYXQgaXMsIHRoZVxuXHRcdFx0bWVzc2FnZSBpcyBleHRlbmRlZCBzbyB0aGF0IGl0IGlzIGp1c3QgNjQgYml0cyBzaHkgb2Zcblx0XHRcdGJlaW5nIGEgbXVsdGlwbGUgb2YgNTEyIGJpdHMgbG9uZy4gUGFkZGluZyBpcyBhbHdheXNcblx0XHRcdHBlcmZvcm1lZCwgZXZlbiBpZiB0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlIGlzIGFscmVhZHlcblx0XHRcdGNvbmdydWVudCB0byA0NDgsIG1vZHVsbyA1MTIgKGluIHdoaWNoIGNhc2UgNTEyIGJpdHMgb2Zcblx0XHRcdHBhZGRpbmcgYXJlIGFkZGVkKS5cblxuXHRcdFx0IFBhZGRpbmcgaXMgcGVyZm9ybWVkIGFzIGZvbGxvd3M6IGEgc2luZ2xlIFwiMVwiIGJpdCBpc1xuXHRcdFx0YXBwZW5kZWQgdG8gdGhlIG1lc3NhZ2UsIGFuZCB0aGVuIGVub3VnaCB6ZXJvIGJpdHMgYXJlXG5cdFx0XHRhcHBlbmRlZCBzbyB0aGF0IHRoZSBsZW5ndGggaW4gYml0cyBvZiB0aGUgcGFkZGVkXG5cdFx0XHRtZXNzYWdlIGJlY29tZXMgY29uZ3J1ZW50IHRvIDQ0OCwgbW9kdWxvIDUxMi5cblxuXHRcdFx0U3RlcCAyLiBBcHBlbmQgbGVuZ3RoXG5cblx0XHRcdCBBIDY0LWJpdCByZXByZXNlbnRhdGlvbiBvZiBiICh0aGUgbGVuZ3RoIG9mIHRoZSBtZXNzYWdlXG5cdFx0XHRiZWZvcmUgdGhlIHBhZGRpbmcgYml0cyB3ZXJlIGFkZGVkKSBpcyBhcHBlbmRlZCB0byB0aGVcblx0XHRcdHJlc3VsdCBvZiB0aGUgcHJldmlvdXMgc3RlcC4gSW4gdGhlIHVubGlrZWx5IGV2ZW50IHRoYXRcblx0XHRcdGIgaXMgZ3JlYXRlciB0aGFuIDJeNjQsIHRoZW4gb25seSB0aGUgbG93LW9yZGVyIDY0IGJpdHNcblx0XHRcdG9mIGIgYXJlIHVzZWQuIChUaGVzZSBiaXRzIGFyZSBhcHBlbmRlZCBhcyB0d28gMzItYml0XG5cdFx0XHR3b3JkcyBhbmQgYXBwZW5kZWQgbG93LW9yZGVyIHdvcmQgZmlyc3QgaW4gYWNjb3JkYW5jZVxuXHRcdFx0d2l0aCB0aGUgcHJldmlvdXMgY29udmVudGlvbnMuKVxuXG5cdFx0XHQgQXQgdGhpcyBwb2ludCB0aGUgcmVzdWx0aW5nIG1lc3NhZ2UgKGFmdGVyIHBhZGRpbmcgd2l0aFxuXHRcdFx0Yml0cyBhbmQgd2l0aCBiKSBoYXMgYSBsZW5ndGggdGhhdCBpcyBhbiBleGFjdCBtdWx0aXBsZVxuXHRcdFx0b2YgNTEyIGJpdHMuIEVxdWl2YWxlbnRseSwgdGhpcyBtZXNzYWdlIGhhcyBhIGxlbmd0aFxuXHRcdFx0dGhhdCBpcyBhbiBleGFjdCBtdWx0aXBsZSBvZiAxNiAoMzItYml0KSB3b3Jkcy4gTGV0XG5cdFx0XHRNWzAgLi4uIE4tMV0gZGVub3RlIHRoZSB3b3JkcyBvZiB0aGUgcmVzdWx0aW5nIG1lc3NhZ2UsXG5cdFx0XHR3aGVyZSBOIGlzIGEgbXVsdGlwbGUgb2YgMTYuXG5cdFx0Ki9cblx0XHQvLyBodHRwczovL2NyeXB0by5zdGFja2V4Y2hhbmdlLmNvbS9hLzMyNDA3LzU0NTY4XG5cdFx0Lypcblx0XHRcdEV4YW1wbGUgY2FzZSAgIyAxXG5cdFx0XHRcdFswIGJpdDogbWVzc2FnZS5dXG5cdFx0XHRcdFsxIGJpdDogMS5dXG5cdFx0XHRcdFs0NDcgYml0czogMC5dXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxuXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgMlxuXHRcdFx0XHRbNTEyLWJpdHM6IG1lc3NhZ2VdXG5cdFx0XHRcdFsxIGJpdDogMS5dXG5cdFx0XHRcdFs0NDcgYml0czogMC5dXG5cdFx0XHRcdFs2NCBiaXRzOiBtZXNzYWdlIHNpemUgaW5mb3JtYXRpb24uXVxuXG5cdFx0XHRFeGFtcGxlIGNhc2UgICMgM1xuXHRcdFx0XHRbKDUxMiAtIDY0ID0gNDQ4KSBiaXRzOiBtZXNzYWdlLl1cblx0XHRcdFx0WzEgYml0OiAxLl1cblx0XHRcdFx0WzUxMSBiaXRzOiAwLl1cblx0XHRcdFx0WzY0IGJpdHM6IG1lc3NhZ2Ugc2l6ZSBpbmZvcm1hdGlvbi5dXG5cblx0XHRcdEV4YW1wbGUgY2FzZSAgIyA0XG5cdFx0XHRcdFsoNTEyIC0gNjUgPSA0NDcpIGJpdHM6IG1lc3NhZ2UuXVxuXHRcdFx0XHRbMSBiaXQ6IDEuXVxuXHRcdFx0XHRbMCBiaXQ6IDAuXVxuXHRcdFx0XHRbNjQgYml0czogbWVzc2FnZSBzaXplIGluZm9ybWF0aW9uLl1cblx0XHQqL1xuXHRcdC8vIFRoZSBudW1iZXIgb2YgcGFkZGluZyB6ZXJvIGJpdHM6XG5cdFx0Ly8gICAgICA1MTEgLSBbeyhtZXNzYWdlIHNpemUgaW4gYml0cykgKyA2NH0gKG1vZCA1MTIpXVxuXHRcdHJldHVybiA2NCAtICgobWVzc2FnZV9zaXplICsgOCkgJiAwYjAwMTExMTExIC8qIDYzICovKTtcblx0fVxuXHRzdGF0aWMgcGFkKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxuXHR7XG5cdFx0Y29uc3QgbWVzc2FnZV9zaXplID0gbWVzc2FnZS5ieXRlTGVuZ3RoO1xuXHRcdGNvbnN0IG5fcGFkID0gUklQRU1EMTYwLmdldF9uX3BhZF9ieXRlcyhtZXNzYWdlX3NpemUpO1xuXG5cdFx0Ly8gIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAgaXMgKCgyICoqIDUzKSAtIDEpIGFuZFxuXHRcdC8vIGJpdHdpc2Ugb3BlcmF0aW9uIGluIEphdmFzY3JpcHQgaXMgZG9uZSBvbiAzMi1iaXRzIG9wZXJhbmRzLlxuXHRcdGNvbnN0IGRpdm1vZCA9IChkaXZpZGVuZCwgZGl2aXNvcikgPT4gW1xuXHRcdFx0TWF0aC5mbG9vcihkaXZpZGVuZCAvIGRpdmlzb3IpLFxuXHRcdFx0ZGl2aWRlbmQgJSBkaXZpc29yXG5cdFx0XTtcblx0XHQvKlxuVG8gc2hpZnRcblxuICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0IG9cbiAgIDAwMDAwMDAwID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1ldGhvZCAjMVxuXG4gICAgMDAwMDAwMDAgMDAwPz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/XG4gICBbMDAwMDAwMDAgMDAwQUFBQUEgQUFBQUFBQUEgQUFBQUFBQUFdICg8QT4gY2FwdHVyZWQpXG4gICBbMDAwMDAwMDAgQUFBQUFBQUEgQUFBQUFBQUEgQUFBQUEwMDBdICg8QT4gc2hpZnRlZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IGNhcHR1cmVkKSBbQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkJdXG4gICAgICAgICAgICAgICAgICAgICAoPEI+IHNoaWZ0ZWQpIFtCQkJdW0JCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCMDAwXVxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXSAoPEE+ICYgPEJfMj4gbWVyZ2VkKVxuICAgWzAwMDAwMDAwIEFBQUFBQUFBIEFBQUFBQUFBIEFBQUFBQkJCXVtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cbiAgICAwMDAwMDAwMCA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8wMDBcblxuXHRcdGNvbnN0IHVpbnQzMl9tYXhfcGx1c18xID0gMHgxMDAwMDAwMDA7IC8vICgyICoqIDMyKVxuXHRcdGNvbnN0IFtcblx0XHRcdG1zZ19ieXRlX3NpemVfbW9zdCwgLy8gVmFsdWUgcmFuZ2UgWzAsICgyICoqIDIxKSAtIDFdLlxuXHRcdFx0bXNnX2J5dGVfc2l6ZV9sZWFzdCAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMzIpIC0gMV0uXG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIHVpbnQzMl9tYXhfcGx1c18xKTtcblx0XHRjb25zdCBbXG5cdFx0XHRjYXJyeSwgLy8gVmFsdWUgcmFuZ2UgWzAsIDddLlxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0IC8vIFZhbHVlIHJhbmdlIFswLCAoMiAqKiAzMikgLSA4XS5cblx0XHRdID0gZGl2bW9kKG1lc3NhZ2VfYnl0ZV9zaXplX2xlYXN0ICogOCwgdWludDMyX21heF9wbHVzXzEpO1xuXHRcdGNvbnN0IG1lc3NhZ2VfYml0X3NpemVfbW9zdCA9IG1lc3NhZ2VfYnl0ZV9zaXplX21vc3QgKiA4XG5cdFx0XHQrIGNhcnJ5OyAvLyBWYWx1ZSByYW5nZSBbMCwgKDIgKiogMjQpIC0gMV0uXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1ldGhvZCAjMlxuICAgIDAwMDAwMDAwIDAwMD8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ICA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/PyA/Pz8/Pz8/P1xuICAgICAgWzAwMDAwIDAwMEFBQUFBIEFBQUFBQUFBIEFBQUFBQUFBICBBQUFdICg8QT4gY2FwdHVyZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKDxCPiBjYXB0dXJlZCkgWzAwMEJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCIEJCQkJCQkJCXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoPEI+IHNoaWZ0ZWQpIFtCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQkJCQiBCQkJCQjAwMF1cbiAgIFswMDAwMDAwMCBBQUFBQUFBQSBBQUFBQUFBQSBBQUFBQUFBQV1bQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkJCQkIgQkJCQkIwMDBdXG4gICAgMDAwMDAwMDAgPz8/Pz8/Pz8gPz8/Pz8/Pz8gPz8/Pz8/Pz8gID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/Pz8/ID8/Pz8/MDAwXG5cblx0XHQqL1xuXHRcdGNvbnN0IFtcblx0XHRcdG1zZ19iaXRfc2l6ZV9tb3N0LFxuXHRcdFx0bXNnX2JpdF9zaXplX2xlYXN0XG5cdFx0XSA9IGRpdm1vZChtZXNzYWdlX3NpemUsIDUzNjg3MDkxMiAvKiAoMiAqKiAyOSkgKi8pXG5cdFx0XHQubWFwKCh4LCBpbmRleCkgPT4gKGluZGV4ID8gKHggKiA4KSA6IHgpKTtcblxuXHRcdC8vIGBBcnJheUJ1ZmZlci50cmFuc2ZlcigpYCBpcyBub3Qgc3VwcG9ydGVkLlxuXHRcdGNvbnN0IHBhZGRlZCA9IG5ldyBVaW50OEFycmF5KG1lc3NhZ2Vfc2l6ZSArIG5fcGFkICsgOCk7XG5cdFx0cGFkZGVkLnNldChuZXcgVWludDhBcnJheShtZXNzYWdlKSwgMCk7XG5cdFx0Y29uc3QgZGF0YV92aWV3ID0gbmV3IERhdGFWaWV3KHBhZGRlZC5idWZmZXIpO1xuXHRcdGRhdGFfdmlldy5zZXRVaW50OChtZXNzYWdlX3NpemUsIDBiMTAwMDAwMDApO1xuXHRcdGRhdGFfdmlldy5zZXRVaW50MzIoXG5cdFx0XHRtZXNzYWdlX3NpemUgKyBuX3BhZCxcblx0XHRcdG1zZ19iaXRfc2l6ZV9sZWFzdCxcblx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxuXHRcdCk7XG5cdFx0ZGF0YV92aWV3LnNldFVpbnQzMihcblx0XHRcdG1lc3NhZ2Vfc2l6ZSArIG5fcGFkICsgNCxcblx0XHRcdG1zZ19iaXRfc2l6ZV9tb3N0LFxuXHRcdFx0dHJ1ZSAvLyBMaXR0bGUtZW5kaWFuXG5cdFx0KTtcblxuXHRcdHJldHVybiBwYWRkZWQuYnVmZmVyO1xuXHR9XG5cblx0c3RhdGljIGYoaiwgeCwgeSwgeilcblx0e1xuXHRcdGlmKDAgPD0gaiAmJiBqIDw9IDE1KVxuXHRcdHsgLy8gRXhjbHVzaXZlLU9SXG5cdFx0XHRyZXR1cm4geCBeIHkgXiB6O1xuXHRcdH1cblx0XHRpZigxNiA8PSBqICYmIGogPD0gMzEpXG5cdFx0eyAvLyBNdWx0aXBsZXhpbmcgKG11eGluZylcblx0XHRcdHJldHVybiAoeCAmIHkpIHwgKH54ICYgeik7XG5cdFx0fVxuXHRcdGlmKDMyIDw9IGogJiYgaiA8PSA0Nylcblx0XHR7XG5cdFx0XHRyZXR1cm4gKHggfCB+eSkgXiB6O1xuXHRcdH1cblx0XHRpZig0OCA8PSBqICYmIGogPD0gNjMpXG5cdFx0eyAvLyBNdWx0aXBsZXhpbmcgKG11eGluZylcblx0XHRcdHJldHVybiAoeCAmIHopIHwgKHkgJiB+eik7XG5cdFx0fVxuXHRcdGlmKDY0IDw9IGogJiYgaiA8PSA3OSlcblx0XHR7XG5cdFx0XHRyZXR1cm4geCBeICh5IHwgfnopO1xuXHRcdH1cblx0fVxuXHRzdGF0aWMgSyhqKVxuXHR7XG5cdFx0aWYoMCA8PSBqICYmIGogPD0gMTUpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIDB4MDAwMDAwMDA7XG5cdFx0fVxuXHRcdGlmKDE2IDw9IGogJiYgaiA8PSAzMSlcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguU1FSVDIpXG5cdFx0XHRyZXR1cm4gMHg1QTgyNzk5OTtcblx0XHR9XG5cdFx0aWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5zcXJ0KDMpKVxuXHRcdFx0cmV0dXJuIDB4NkVEOUVCQTE7XG5cdFx0fVxuXHRcdGlmKDQ4IDw9IGogJiYgaiA8PSA2Mylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguc3FydCg1KSlcblx0XHRcdHJldHVybiAweDhGMUJCQ0RDO1xuXHRcdH1cblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLnNxcnQoNykpXG5cdFx0XHRyZXR1cm4gMHhBOTUzRkQ0RTtcblx0XHR9XG5cdH1cblx0c3RhdGljIEtQKGopIC8vIEsnXG5cdHtcblx0XHRpZigwIDw9IGogJiYgaiA8PSAxNSlcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCgyKSlcblx0XHRcdHJldHVybiAweDUwQTI4QkU2O1xuXHRcdH1cblx0XHRpZigxNiA8PSBqICYmIGogPD0gMzEpXG5cdFx0e1xuXHRcdFx0Ly8gTWF0aC5mbG9vcigoMiAqKiAzMCkgKiBNYXRoLmNicnQoMykpXG5cdFx0XHRyZXR1cm4gMHg1QzRERDEyNDtcblx0XHR9XG5cdFx0aWYoMzIgPD0gaiAmJiBqIDw9IDQ3KVxuXHRcdHtcblx0XHRcdC8vIE1hdGguZmxvb3IoKDIgKiogMzApICogTWF0aC5jYnJ0KDUpKVxuXHRcdFx0cmV0dXJuIDB4NkQ3MDNFRjM7XG5cdFx0fVxuXHRcdGlmKDQ4IDw9IGogJiYgaiA8PSA2Mylcblx0XHR7XG5cdFx0XHQvLyBNYXRoLmZsb29yKCgyICoqIDMwKSAqIE1hdGguY2JydCg3KSlcblx0XHRcdHJldHVybiAweDdBNkQ3NkU5O1xuXHRcdH1cblx0XHRpZig2NCA8PSBqICYmIGogPD0gNzkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIDB4MDAwMDAwMDA7XG5cdFx0fVxuXHR9XG5cdHN0YXRpYyBhZGRfbW9kdWxvMzIoLyogLi4uLi4uICovKVxuXHR7XG5cdFx0Ly8gMS4gIE1vZHVsbyBhZGRpdGlvbiAoYWRkaXRpb24gbW9kdWxvKSBpcyBhc3NvY2lhdGl2ZS5cblx0XHQvLyAgICBodHRwczovL3Byb29md2lraS5vcmcvd2lraS9Nb2R1bG9fQWRkaXRpb25faXNfQXNzb2NpYXRpdmVcbiBcdFx0Ly8gMi4gIEJpdHdpc2Ugb3BlcmF0aW9uIGluIEphdmFzY3JpcHRcblx0XHQvLyAgICBpcyBkb25lIG9uIDMyLWJpdHMgb3BlcmFuZHNcblx0XHQvLyAgICBhbmQgcmVzdWx0cyBpbiBhIDMyLWJpdHMgdmFsdWUuXG5cdFx0cmV0dXJuIEFycmF5XG5cdFx0XHQuZnJvbShhcmd1bWVudHMpXG5cdFx0XHQucmVkdWNlKChhLCBiKSA9PiAoYSArIGIpLCAwKSB8IDA7XG5cdH1cblx0c3RhdGljIHJvbDMyKHZhbHVlLCBjb3VudClcblx0eyAvLyBDeWNsaWMgbGVmdCBzaGlmdCAocm90YXRlKSBvbiAzMi1iaXRzIHZhbHVlLlxuXHRcdHJldHVybiAodmFsdWUgPDwgY291bnQpIHwgKHZhbHVlID4+PiAoMzIgLSBjb3VudCkpO1xuXHR9XG5cdHN0YXRpYyBoYXNoKG1lc3NhZ2UgLyogQW4gQXJyYXlCdWZmZXIuICovKVxuXHR7XG5cdFx0Ly8vLy8vLy8vLyAgICAgICBQYWRkaW5nICAgICAgIC8vLy8vLy8vLy9cblxuXHRcdC8vIFRoZSBwYWRkZWQgbWVzc2FnZS5cblx0XHRjb25zdCBwYWRkZWQgPSBSSVBFTUQxNjAucGFkKG1lc3NhZ2UpO1xuXG5cdFx0Ly8vLy8vLy8vLyAgICAgQ29tcHJlc3Npb24gICAgIC8vLy8vLy8vLy9cblxuXHRcdC8vIE1lc3NhZ2Ugd29yZCBzZWxlY3RvcnMuXG5cdFx0Y29uc3QgciA9IFtcblx0XHRcdDAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTUsXG5cdFx0XHQ3LCA0LCAxMywgMSwgMTAsIDYsIDE1LCAzLCAxMiwgMCwgOSwgNSwgMiwgMTQsIDExLCA4LFxuXHRcdFx0MywgMTAsIDE0LCA0LCA5LCAxNSwgOCwgMSwgMiwgNywgMCwgNiwgMTMsIDExLCA1LCAxMixcblx0XHRcdDEsIDksIDExLCAxMCwgMCwgOCwgMTIsIDQsIDEzLCAzLCA3LCAxNSwgMTQsIDUsIDYsIDIsXG5cdFx0XHQ0LCAwLCA1LCA5LCA3LCAxMiwgMiwgMTAsIDE0LCAxLCAzLCA4LCAxMSwgNiwgMTUsIDEzXG5cdFx0XTtcblx0XHRjb25zdCByUCA9IFsgLy8gcidcblx0XHRcdDUsIDE0LCA3LCAwLCA5LCAyLCAxMSwgNCwgMTMsIDYsIDE1LCA4LCAxLCAxMCwgMywgMTIsXG5cdFx0XHQ2LCAxMSwgMywgNywgMCwgMTMsIDUsIDEwLCAxNCwgMTUsIDgsIDEyLCA0LCA5LCAxLCAyLFxuXHRcdFx0MTUsIDUsIDEsIDMsIDcsIDE0LCA2LCA5LCAxMSwgOCwgMTIsIDIsIDEwLCAwLCA0LCAxMyxcblx0XHRcdDgsIDYsIDQsIDEsIDMsIDExLCAxNSwgMCwgNSwgMTIsIDIsIDEzLCA5LCA3LCAxMCwgMTQsXG5cdFx0XHQxMiwgMTUsIDEwLCA0LCAxLCA1LCA4LCA3LCA2LCAyLCAxMywgMTQsIDAsIDMsIDksIDExXG5cdFx0XTtcblxuXHRcdC8vIEFtb3VudHMgZm9yICdyb3RhdGUgbGVmdCcgb3BlcmF0aW9uLlxuXHRcdGNvbnN0IHMgPSBbXG5cdFx0XHQxMSwgMTQsIDE1LCAxMiwgNSwgOCwgNywgOSwgMTEsIDEzLCAxNCwgMTUsIDYsIDcsIDksIDgsXG5cdFx0XHQ3LCA2LCA4LCAxMywgMTEsIDksIDcsIDE1LCA3LCAxMiwgMTUsIDksIDExLCA3LCAxMywgMTIsXG5cdFx0XHQxMSwgMTMsIDYsIDcsIDE0LCA5LCAxMywgMTUsIDE0LCA4LCAxMywgNiwgNSwgMTIsIDcsIDUsXG5cdFx0XHQxMSwgMTIsIDE0LCAxNSwgMTQsIDE1LCA5LCA4LCA5LCAxNCwgNSwgNiwgOCwgNiwgNSwgMTIsXG5cdFx0XHQ5LCAxNSwgNSwgMTEsIDYsIDgsIDEzLCAxMiwgNSwgMTIsIDEzLCAxNCwgMTEsIDgsIDUsIDZcblx0XHRdO1xuXHRcdGNvbnN0IHNQID0gWyAvLyBzJ1xuXHRcdFx0OCwgOSwgOSwgMTEsIDEzLCAxNSwgMTUsIDUsIDcsIDcsIDgsIDExLCAxNCwgMTQsIDEyLCA2LFxuXHRcdFx0OSwgMTMsIDE1LCA3LCAxMiwgOCwgOSwgMTEsIDcsIDcsIDEyLCA3LCA2LCAxNSwgMTMsIDExLFxuXHRcdFx0OSwgNywgMTUsIDExLCA4LCA2LCA2LCAxNCwgMTIsIDEzLCA1LCAxNCwgMTMsIDEzLCA3LCA1LFxuXHRcdFx0MTUsIDUsIDgsIDExLCAxNCwgMTQsIDYsIDE0LCA2LCA5LCAxMiwgOSwgMTIsIDUsIDE1LCA4LFxuXHRcdFx0OCwgNSwgMTIsIDksIDEyLCA1LCAxNCwgNiwgOCwgMTMsIDYsIDUsIDE1LCAxMywgMTEsIDExXG5cdFx0XTtcblxuXHRcdC8vIFRoZSBzaXplLCBpbiBieXRlcywgb2YgYSB3b3JkLlxuXHRcdGNvbnN0IHdvcmRfc2l6ZSA9IDQ7XG5cblx0XHQvLyBUaGUgc2l6ZSwgaW4gYnl0ZXMsIG9mIGEgMTYtd29yZHMgYmxvY2suXG5cdFx0Y29uc3QgYmxvY2tfc2l6ZSA9IDY0O1xuXG5cdFx0Ly8gVGhlIG51bWJlciBvZiB0aGUgMTYtd29yZHMgYmxvY2tzLlxuXHRcdGNvbnN0IHQgPSBwYWRkZWQuYnl0ZUxlbmd0aCAvIGJsb2NrX3NpemU7XG5cblx0XHQvLyAgVGhlIG1lc3NhZ2UgYWZ0ZXIgcGFkZGluZyBjb25zaXN0cyBvZiB0IDE2LXdvcmQgYmxvY2tzIHRoYXRcblx0XHQvLyBhcmUgZGVub3RlZCB3aXRoIFhfaVtqXSwgd2l0aCAw4omkaeKJpCh0IOKIkiAxKSBhbmQgMOKJpGriiaQxNS5cblx0XHRjb25zdCBYID0gKG5ldyBBcnJheSh0KSlcblx0XHRcdC5maWxsKHVuZGVmaW5lZClcblx0XHRcdC5tYXAoKF8sIGkpID0+IGogPT4gKFxuXHRcdFx0XHRuZXcgRGF0YVZpZXcoXG5cdFx0XHRcdFx0cGFkZGVkLCBpICogYmxvY2tfc2l6ZSwgYmxvY2tfc2l6ZVxuXHRcdFx0XHQpLmdldFVpbnQzMihcblx0XHRcdFx0XHRqICogd29yZF9zaXplLFxuXHRcdFx0XHRcdHRydWUgLy8gTGl0dGxlLWVuZGlhblxuXHRcdFx0XHQpXG5cdFx0XHQpKTtcblxuXHRcdC8vICBUaGUgcmVzdWx0IG9mIFJJUEVNRC0xNjAgaXMgY29udGFpbmVkIGluIGZpdmUgMzItYml0IHdvcmRzLFxuXHRcdC8vIHdoaWNoIGZvcm0gdGhlIGludGVybmFsIHN0YXRlIG9mIHRoZSBhbGdvcml0aG0uIFRoZSBmaW5hbFxuXHRcdC8vIGNvbnRlbnQgb2YgdGhlc2UgZml2ZSAzMi1iaXQgd29yZHMgaXMgY29udmVydGVkIHRvIGEgMTYwLWJpdFxuXHRcdC8vIHN0cmluZywgYWdhaW4gdXNpbmcgdGhlIGxpdHRsZS1lbmRpYW4gY29udmVudGlvbi5cblx0XHRsZXQgaCA9IFtcblx0XHRcdDB4Njc0NTIzMDEsIC8vIGhfMFxuXHRcdFx0MHhFRkNEQUI4OSwgLy8gaF8xXG5cdFx0XHQweDk4QkFEQ0ZFLCAvLyBoXzJcblx0XHRcdDB4MTAzMjU0NzYsIC8vIGhfM1xuXHRcdFx0MHhDM0QyRTFGMCAgLy8gaF80XG5cdFx0XTtcblxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0OyArK2kpXG5cdFx0e1xuXHRcdFx0bGV0IEEgPSBoWzBdLCBCID0gaFsxXSwgQyA9IGhbMl0sIEQgPSBoWzNdLCBFID0gaFs0XTtcblx0XHRcdGxldCBBUCA9IEEsIEJQID0gQiwgQ1AgPSBDLCBEUCA9IEQsIEVQID0gRTtcblx0XHRcdGZvcihsZXQgaiA9IDA7IGogPCA4MDsgKytqKVxuXHRcdFx0e1xuXHRcdFx0XHQvLyBMZWZ0IHJvdW5kc1xuXHRcdFx0XHRsZXQgVCA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXG5cdFx0XHRcdFx0UklQRU1EMTYwLnJvbDMyKFxuXHRcdFx0XHRcdFx0UklQRU1EMTYwLmFkZF9tb2R1bG8zMihcblx0XHRcdFx0XHRcdFx0QSxcblx0XHRcdFx0XHRcdFx0UklQRU1EMTYwLmYoaiwgQiwgQywgRCksXG5cdFx0XHRcdFx0XHRcdFhbaV0ocltqXSksXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5LKGopXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0c1tqXVxuXHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0RVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRBID0gRTtcblx0XHRcdFx0RSA9IEQ7XG5cdFx0XHRcdEQgPSBSSVBFTUQxNjAucm9sMzIoQywgMTApO1xuXHRcdFx0XHRDID0gQjtcblx0XHRcdFx0QiA9IFQ7XG5cblx0XHRcdFx0Ly8gUmlnaHQgcm91bmRzXG5cdFx0XHRcdFQgPSBSSVBFTUQxNjAuYWRkX21vZHVsbzMyKFxuXHRcdFx0XHRcdFJJUEVNRDE2MC5yb2wzMihcblx0XHRcdFx0XHRcdFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoXG5cdFx0XHRcdFx0XHRcdEFQLFxuXHRcdFx0XHRcdFx0XHRSSVBFTUQxNjAuZihcblx0XHRcdFx0XHRcdFx0XHQ3OSAtIGosXG5cdFx0XHRcdFx0XHRcdFx0QlAsXG5cdFx0XHRcdFx0XHRcdFx0Q1AsXG5cdFx0XHRcdFx0XHRcdFx0RFBcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0WFtpXShyUFtqXSksXG5cdFx0XHRcdFx0XHRcdFJJUEVNRDE2MC5LUChqKVxuXHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdHNQW2pdXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRFUFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRBUCA9IEVQO1xuXHRcdFx0XHRFUCA9IERQO1xuXHRcdFx0XHREUCA9IFJJUEVNRDE2MC5yb2wzMihDUCwgMTApO1xuXHRcdFx0XHRDUCA9IEJQO1xuXHRcdFx0XHRCUCA9IFQ7XG5cdFx0XHR9XG5cdFx0XHRsZXQgVCA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFsxXSwgQywgRFApO1xuXHRcdFx0aFsxXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFsyXSwgRCwgRVApO1xuXHRcdFx0aFsyXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFszXSwgRSwgQVApO1xuXHRcdFx0aFszXSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFs0XSwgQSwgQlApO1xuXHRcdFx0aFs0XSA9IFJJUEVNRDE2MC5hZGRfbW9kdWxvMzIoaFswXSwgQiwgQ1ApO1xuXHRcdFx0aFswXSA9IFQ7XG5cdFx0fVxuXG5cdFx0Ly8gIFRoZSBmaW5hbCBvdXRwdXQgc3RyaW5nIHRoZW4gY29uc2lzdHMgb2YgdGhlIGNvbmNhdGVuYXRhdGlvblxuXHRcdC8vIG9mIGhfMCwgaF8xLCBoXzIsIGhfMywgYW5kIGhfNCBhZnRlciBjb252ZXJ0aW5nIGVhY2ggaF9pIHRvIGFcblx0XHQvLyA0LWJ5dGUgc3RyaW5nIHVzaW5nIHRoZSBsaXR0bGUtZW5kaWFuIGNvbnZlbnRpb24uXG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IEFycmF5QnVmZmVyKDIwKTtcblx0XHRjb25zdCBkYXRhX3ZpZXcgPSBuZXcgRGF0YVZpZXcocmVzdWx0KTtcblx0XHRoLmZvckVhY2goKGhfaSwgaSkgPT4gZGF0YV92aWV3LnNldFVpbnQzMihpICogNCwgaF9pLCB0cnVlKSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0UklQRU1EMTYwXG59XG4iXSwic291cmNlUm9vdCI6IiJ9