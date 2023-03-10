/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface HistoricalPortfolioRequest {
    /**
     * The requested fiat currency.
     */
    quoteCurrency?: string;
    /**
     * The range of the historical portfolio in days, defaults to 30 days (max days = 2000).
     *
     */
    days?: number;
}
