/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CovalentApi } from "@fern-api/covalent";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.classA.balances.getHistoricalPortfolioValue.Response.Raw,
    CovalentApi.classA.HistoricalPortfolioResponse
> = core.serialization.lazyObject(async () => (await import("../../../../..")).classA.HistoricalPortfolioResponse);

export declare namespace Response {
    type Raw = serializers.classA.HistoricalPortfolioResponse.Raw;
}
