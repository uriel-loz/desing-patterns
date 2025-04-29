import SqlQuery from "../products/sql-query";


export interface SQLQueryBuilder {
    reset(): SQLQueryBuilder;
    setColumns(columns: string[]): SQLQueryBuilder;
    setTable(table: string): SQLQueryBuilder;
    setCondition(condition: string): SQLQueryBuilder;
    setOrder(column: string, direction?: 'ASC' | 'DESC'): SQLQueryBuilder;
    setLimit(count: number): SQLQueryBuilder;
    setOffset(count: number): SQLQueryBuilder;
    // join(table: string, condition: string): SQLQueryBuilder;
    // insert(table: string, values: Record<string, string|number>): SQLQueryBuilder;
    // update(table: string, values: Record<string, string|number>): SQLQueryBuilder;
    // delete(table: string): SQLQueryBuilder;
    build(): SqlQuery;
}