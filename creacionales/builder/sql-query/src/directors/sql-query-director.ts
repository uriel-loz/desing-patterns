import ConcreteSqlQueryBuilder from "../builder/concrete-sql-query-builder";
import { SqlQueryBuilder } from "../interfaces/sql-query-builder";

class SqlQueryDirector {
    private builder: SqlQueryBuilder;

    constructor(builder: SqlQueryBuilder) {
        this.builder = builder;
    }

    public buildSelectAllQuery(table: string): string {
        return this.builder.select(['*'])
            .from(table)
            .build()
            .sql;
    }

    public buildInsertQuery(table: string, values: Record<string, number | string | null>): string {
        return this.builder.insert(table, values)
            .build()
            .sql;
    }
    
    public buildUpdateQuery(table: string, values: Record<string, number | string | null>, condition: string): string {
        return this.builder.update(table, values)
            .where(condition)
            .build()
            .sql;
    }
}

export default SqlQueryDirector;