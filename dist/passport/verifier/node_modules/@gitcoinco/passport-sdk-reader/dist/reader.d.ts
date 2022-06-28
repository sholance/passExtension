import { CeramicGenesis, Tulons } from "tulons";
export declare type CeramicStreams = Record<string, string | false>;
export declare type CeramicStampStream = {
    provider: string;
    credential: string;
};
export declare type CeramicStampRecord = {
    provider: string;
    credential: VerifiableCredential;
};
export declare type CeramicPassportStream = {
    issuanceDate: string;
    expiryDate: string;
    stamps: CeramicStampStream[];
};
export declare type CeramicPassportRecord = {
    issuanceDate: string;
    expiryDate: string;
    stamps: CeramicStampRecord[];
};
export declare type VerifiableCredential = {
    "@context": string[];
    type: string[];
    credentialSubject: {
        id: string;
        "@context": {
            [key: string]: string;
        }[];
        hash?: string;
        provider?: string;
        address?: string;
        challenge?: string;
    };
    issuer: string;
    issuanceDate: string;
    expirationDate: string;
    proof: {
        type: string;
        proofPurpose: string;
        verificationMethod: string;
        created: string;
        jws: string;
    };
};
export declare class PassportReader {
    _tulons: Tulons;
    _ceramic_gitcoin_passport_stream_id: string;
    constructor(url?: string, network?: string | number);
    getGenesis(address: string): Promise<CeramicGenesis | false>;
    getPassport(address: string, streams?: CeramicStreams): Promise<CeramicPassportStream | CeramicPassportRecord | false>;
    getPassportStream(address: string, streams?: CeramicStreams): Promise<CeramicPassportStream | false>;
}
