import SqlQuery from "../products/sql-query";

export interface SqlQueryBuilder {
    reset(): void;
    select(columns: string[]): SqlQueryBuilder;
    insert(table: string, values: Record<string, number | string | null>): SqlQueryBuilder;
    update(table: string, values: Record<string, number | string | null>): SqlQueryBuilder;
    delete(table: string): SqlQueryBuilder;
    from(table: string): SqlQueryBuilder;
    where(condition: string): SqlQueryBuilder;
    orderBy(column: string, direction?: 'ASC' | 'DESC'): SqlQueryBuilder;
    limit(count: number): SqlQueryBuilder;
    offset(count: number): SqlQueryBuilder;
    join(table: string, condition: string): SqlQueryBuilder;
    build(): SqlQuery;
}