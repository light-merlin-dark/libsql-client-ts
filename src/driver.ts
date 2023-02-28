import { BoundStatement, Params, ResultSet } from "./shared-types.js";

export interface Driver {
    execute(stmt: string, params?: Params): Promise<ResultSet>;
    transaction(stmts: (string | BoundStatement)[]): Promise<ResultSet[]>;
}
