"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
exports.__esModule = true;
exports.PassportVerifier = void 0;
var DIDKit = __importStar(require("@spruceid/didkit-wasm"));
var passport_sdk_reader_1 = require("@gitcoinco/passport-sdk-reader");
var PassportVerifier = (function () {
    function PassportVerifier(url, network) {
        if (url === void 0) { url = "https://ceramic.passport-iam.gitcoin.co"; }
        if (network === void 0) { network = "1"; }
        this._reader = new passport_sdk_reader_1.PassportReader(url, network);
    }
    PassportVerifier.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, new Promise(function (resolve) { return resolve(DIDKit); }).then(function (didkit) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!didkit["default"]) return [3, 2];
                                        return [4, Promise.resolve(didkit["default"]).then(function (didkit) {
                                                _this._DIDKit = didkit;
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [3, 3];
                                    case 2:
                                        this._DIDKit = didkit;
                                        _a.label = 3;
                                    case 3: return [2];
                                }
                            });
                        }); })];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    PassportVerifier.prototype.verifyPassport = function (address, passport, additionalStampChecks) {
        return __awaiter(this, void 0, void 0, function () {
            var passportRecord, _a, stamps, _b;
            var _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = passport;
                        if (_a) return [3, 2];
                        return [4, this._reader.getPassport(address)];
                    case 1:
                        _a = (_d.sent());
                        _d.label = 2;
                    case 2:
                        passportRecord = _a;
                        if (!passportRecord) return [3, 4];
                        stamps = passportRecord.stamps;
                        _b = [__assign({}, passportRecord)];
                        _c = {};
                        return [4, Promise.all(stamps.map(function (stamp) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4, this.verifyStamp(address, stamp, additionalStampChecks)];
                                        case 1: return [2, (_a.sent())];
                                    }
                                });
                            }); }))];
                    case 3: return [2, __assign.apply(void 0, _b.concat([(_c.stamps = _d.sent(), _c)]))];
                    case 4: return [2, false];
                }
            });
        });
    };
    PassportVerifier.prototype.verifyStamp = function (address, stamp, additionalStampChecks) {
        return __awaiter(this, void 0, void 0, function () {
            var stampAddress, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!stamp) return [3, 2];
                        stamp.verified = true;
                        stampAddress = stamp.credential.credentialSubject.id.replace("did:pkh:eip155:1:", "").toLowerCase();
                        stamp.verified = stampAddress !== address.toLowerCase() ? false : stamp.verified;
                        if (stamp.verified && additionalStampChecks) {
                            stamp.verified = !additionalStampChecks(stamp) ? false : stamp.verified;
                        }
                        if (!stamp.verified) return [3, 2];
                        _a = stamp;
                        return [4, this.verifyCredential(stamp.credential)];
                    case 1:
                        _a.verified = _b.sent();
                        _b.label = 2;
                    case 2: return [2, stamp];
                }
            });
        });
    };
    PassportVerifier.prototype.verifyCredential = function (credential) {
        return __awaiter(this, void 0, void 0, function () {
            var expirationDate, proof, verify, _a, _b, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!!this._DIDKit) return [3, 2];
                        return [4, this.init()];
                    case 1:
                        _c.sent();
                        _c.label = 2;
                    case 2:
                        expirationDate = credential.expirationDate, proof = credential.proof;
                        if (!(new Date(expirationDate) > new Date())) return [3, 7];
                        _c.label = 3;
                    case 3:
                        _c.trys.push([3, 5, , 6]);
                        _b = (_a = JSON).parse;
                        return [4, this._DIDKit.verifyCredential(JSON.stringify(credential), "{\"proofPurpose\":\"".concat(proof.proofPurpose, "\"}"))];
                    case 4:
                        verify = _b.apply(_a, [_c.sent()]);
                        return [2, verify.errors.length === 0];
                    case 5:
                        e_1 = _c.sent();
                        return [2, false];
                    case 6: return [3, 8];
                    case 7: return [2, false];
                    case 8: return [2];
                }
            });
        });
    };
    return PassportVerifier;
}());
exports.PassportVerifier = PassportVerifier;
