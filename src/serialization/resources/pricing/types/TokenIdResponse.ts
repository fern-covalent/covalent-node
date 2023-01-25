/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovalentApi } from "@fern-api/covalent";
import * as core from "../../../../core";

export const TokenIdResponse: core.serialization.ObjectSchema<
    serializers.TokenIdResponse.Raw,
    CovalentApi.TokenIdResponse
> = core.serialization.object({
    contractDecimals: core.serialization.property("contract_decimals", core.serialization.number()),
    contractName: core.serialization.property("contract_name", core.serialization.string()),
    contractTickerSymbol: core.serialization.property("contract_ticker_symbol", core.serialization.string()),
    contractAddress: core.serialization.property("contract_address", core.serialization.string()),
    supportsErc: core.serialization.property("supports_erc", core.serialization.list(core.serialization.string())),
    logoUrl: core.serialization.property("logo_url", core.serialization.string()),
    tokenId: core.serialization.property("token_id", core.serialization.number()),
});

export declare namespace TokenIdResponse {
    interface Raw {
        contract_decimals: number;
        contract_name: string;
        contract_ticker_symbol: string;
        contract_address: string;
        supports_erc: string[];
        logo_url: string;
        token_id: number;
    }
}
