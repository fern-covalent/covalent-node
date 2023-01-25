/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CovalentApi } from "@fern-api/covalent";
import * as core from "../../../../../../core";

export const Token: core.serialization.ObjectSchema<serializers.classA.Token.Raw, CovalentApi.classA.Token> =
    core.serialization.object({
        contractDecimals: core.serialization.property("contract_decimals", core.serialization.number()),
        contractName: core.serialization.property("contract_name", core.serialization.string()),
        contractTickerSymbol: core.serialization.property("contract_ticker_symbol", core.serialization.string()),
        contractAddress: core.serialization.property("contract_address", core.serialization.string()),
        logoUrl: core.serialization.property("logo_url", core.serialization.string()),
        holdings: core.serialization.list(
            core.serialization.lazyObject(async () => (await import("../../../../..")).classA.Holding)
        ),
    });

export declare namespace Token {
    interface Raw {
        contract_decimals: number;
        contract_name: string;
        contract_ticker_symbol: string;
        contract_address: string;
        logo_url: string;
        holdings: serializers.classA.Holding.Raw[];
    }
}