/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { CovalentApi } from "@fern-api/covalent";

/**
 * @example
 *     {
 *         contractDecimals: 18,
 *         contractName: "Frontier Token",
 *         contractTickerSymbol: "FRONT",
 *         contractAddress: "0xf8c3527cc04340b208c854e985240c02f7b7793f",
 *         logoUrl: "https://logos.covalenthq.com/tokens/1/0xf8c3527cc04340b208c854e985240c02f7b7793f.png",
 *         holdings: [{
 *                 timestamp: new Date("2023-01-25T00:00:00Z"),
 *                 quoteRate: 0.20990574,
 *                 open: {
 *                     balance: "4843997835959514312853",
 *                     quote: 1016.783
 *                 },
 *                 high: {
 *                     balance: "4843997835959514312853",
 *                     quote: 1016.783
 *                 },
 *                 low: {
 *                     balance: "4843997835959514312853",
 *                     quote: 1016.783
 *                 },
 *                 close: {
 *                     balance: "4843997835959514312853",
 *                     quote: 1016.783
 *                 }
 *             }]
 *     }
 */
export interface Token {
    /** Smart contract decimals. */
    contractDecimals: number;
    /** Smart contract name. */
    contractName: string;
    /** Smart contract ticker symbol. */
    contractTickerSymbol: string;
    /** Smart contract address. */
    contractAddress: string;
    /** Smart contract URL. */
    logoUrl: string;
    holdings: CovalentApi.classA.Holding[];
}
