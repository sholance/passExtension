import { PassportReader } from "@gitcoinco/passport-sdk-reader";
import { DIDKitLib, Passport, Stamp, VerifiableCredential } from "@gitcoinco/passport-sdk-types";
export declare class PassportVerifier {
    _DIDKit: DIDKitLib;
    _reader: PassportReader;
    constructor(url?: string, network?: string);
    init(): Promise<void>;
    verifyPassport(address: string, passport?: Passport, additionalStampChecks?: (stamp: Stamp) => boolean): Promise<Passport | false>;
    verifyStamp(address: string, stamp: Stamp, additionalStampChecks?: (stamp: Stamp) => boolean): Promise<Stamp | false>;
    verifyCredential(credential: VerifiableCredential): Promise<boolean>;
}
