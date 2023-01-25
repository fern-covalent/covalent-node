/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import { CovalentApi } from "@fern-api/covalent";
import urlJoin from "url-join";
import * as serializers from "../../../../../../serialization";
import * as errors from "../../../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.CovalentApiEnvironment | string;
        credentials?: core.Supplier<core.BasicAuth>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * [Full Endpoint Documentation](https://www.covalenthq.com/docs/api/#/0/Get%20token%20balances%20for%20address/USD/1)
     *
     * Given `chain_id` and wallet `address`, return current token balances along with their spot prices. This endpoint supports a variety of token standards like ERC20, ERC721 and ERC1155. As a special case, network native tokens like ETH on Ethereum are also returned even though it's not a token contract.
     */
    public async getTokenBalances(
        chainId: string,
        walletAddress: string,
        request?: CovalentApi.classA.TokenBalancesRequest
    ): Promise<CovalentApi.classA.BalanceResponseType> {
        const _queryParams = new URLSearchParams();
        if (request?.nft != null) {
            _queryParams.append("nft", request?.nft.toString());
        }

        if (request?.noNftFetch != null) {
            _queryParams.append("no-nft-fetch", request?.noNftFetch.toString());
        }

        if (request?.quoteCurrency != null) {
            _queryParams.append("quote-currency", request?.quoteCurrency);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CovalentApiEnvironment.Production,
                `/v1/${chainId}/address/${walletAddress}/balances_v2/`
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.classA.balances.getTokenBalances.Response.parse(
                _response.body as serializers.classA.balances.getTokenBalances.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CovalentApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CovalentApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CovalentApiTimeoutError();
            case "unknown":
                throw new errors.CovalentApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * [Full Endpoint Documentation](https://www.covalenthq.com/docs/api/#/0/Get%20historical%20portfolio%20value%20over%20time/USD/1)
     *
     * Given `chain_id` and wallet `address`, return wallet value for the last 30 days at 24 hour interval timestamps.
     */
    public async getHistoricalPortfolioValue(
        chainId: string,
        walletAddress: string,
        request?: CovalentApi.classA.HistoricalPortfolioRequest
    ): Promise<CovalentApi.classA.HistoricalPortfolioResponse> {
        const _queryParams = new URLSearchParams();
        if (request?.quoteCurrency != null) {
            _queryParams.append("quote-currency", request?.quoteCurrency);
        }

        if (request?.days != null) {
            _queryParams.append("days", request?.days.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.CovalentApiEnvironment.Production,
                `/v1/${chainId}/address/${walletAddress}/portfolio_v2/`
            ),
            method: "GET",
            headers: {
                Authorization: core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(this.options.credentials)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.classA.balances.getHistoricalPortfolioValue.Response.parse(
                _response.body as serializers.classA.balances.getHistoricalPortfolioValue.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CovalentApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CovalentApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CovalentApiTimeoutError();
            case "unknown":
                throw new errors.CovalentApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}