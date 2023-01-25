/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../..";
import { CovalentApi } from "@fern-api/covalent";
import * as core from "../../../../../../core";

export const Response: core.serialization.Schema<
    serializers.classA.balances.getTokenBalances.Response.Raw,
    CovalentApi.classA.BalanceResponseType
> = core.serialization.lazyObject(async () => (await import("../../../../..")).classA.BalanceResponseType);

export declare namespace Response {
    type Raw = serializers.classA.BalanceResponseType.Raw;
}