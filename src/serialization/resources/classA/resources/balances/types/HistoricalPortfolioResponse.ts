/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CovalentApi } from "@fern-api/covalent";
import * as core from "../../../../../../core";

export const HistoricalPortfolioResponse: core.serialization.ObjectSchema<
    serializers.classA.HistoricalPortfolioResponse.Raw,
    CovalentApi.classA.HistoricalPortfolioResponse
> = core.serialization.object({
    address: core.serialization.string(),
    updatedAt: core.serialization.property("updated_at", core.serialization.date()),
    nextUpdateAt: core.serialization.property("next_update_at", core.serialization.date()),
    quoteCurrency: core.serialization.property("quote_currency", core.serialization.string()),
    chainId: core.serialization.property("chain_id", core.serialization.number()),
    items: core.serialization.list(core.serialization.unknown()),
    pagination: core.serialization.lazyObject(async () => (await import("../../../../..")).AppliedPagination),
});

export declare namespace HistoricalPortfolioResponse {
    interface Raw {
        address: string;
        updated_at: string;
        next_update_at: string;
        quote_currency: string;
        chain_id: number;
        items: unknown[];
        pagination: serializers.AppliedPagination.Raw;
    }
}
