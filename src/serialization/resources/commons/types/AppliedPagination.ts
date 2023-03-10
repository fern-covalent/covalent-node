/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { CovalentApi } from "@fern-api/covalent";
import * as core from "../../../../core";

export const AppliedPagination: core.serialization.ObjectSchema<
    serializers.AppliedPagination.Raw,
    CovalentApi.AppliedPagination
> = core.serialization.object({
    hasMore: core.serialization.property("has_more", core.serialization.boolean().optional()),
    pageNumber: core.serialization.property("page_number", core.serialization.number().optional()),
    pageSize: core.serialization.property("page_size", core.serialization.number().optional()),
    totalCount: core.serialization.property("total_count", core.serialization.number().optional()),
});

export declare namespace AppliedPagination {
    interface Raw {
        has_more?: boolean | null;
        page_number?: number | null;
        page_size?: number | null;
        total_count?: number | null;
    }
}
