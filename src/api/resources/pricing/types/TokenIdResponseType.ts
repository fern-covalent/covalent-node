/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovalentApi } from "@fern-api/covalent";

export interface TokenIdResponseType {
    /** The updated time in UTC. */
    updatedAt: Date;
    /** List of tokens in portfolio */
    items: CovalentApi.TokenIdResponse[];
    pagination: CovalentApi.AppliedPagination;
}
