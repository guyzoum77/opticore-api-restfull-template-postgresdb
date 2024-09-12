import { postgresCheckerDatabase, optionalArgumentConnection } from "opticore-core-module";

/**
 * mySqlCheckerDatabase is function with an optional params.
 * So if you desire use an optional params define it in .env file.
 */
export const dbConnection = async(): Promise<void> => { await postgresCheckerDatabase(optionalArgumentConnection); }