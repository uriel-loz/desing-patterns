import { SQLQueryBuilder } from "../interfaces/sql-query-builder";
import SqlProperties from "../products/sql-properties";
import SqlQuery from "../products/sql-query";

class ConcreteSqlQueryBuilder implements SQLQueryBuilder {
    private query!: SqlProperties;

    constructor() {
        this.reset();
    }

    setColumns(columns: string[]): SQLQueryBuilder {
        this.query.setColumns(columns);
        return this;
    }

    setColumnsRaw(columns: string): SQLQueryBuilder {
        const rawColumns = columns.split(',').map(col => col.trim());
        this.query.setColumns(rawColumns);
        return this;
    }

    setTable(table: string): SQLQueryBuilder {
        this.query.setTable(table);
        return this;
    }

    setCondition(condition: string): SQLQueryBuilder {
        this.query.setCondition(condition);
        return this;
    }

    setOrder(column: string, direction: 'ASC' | 'DESC' = 'ASC'): SQLQueryBuilder {
        this.query.setOrderBy(column, direction);
        return this;
    }

    setLimit(count: number): SQLQueryBuilder {
        this.query.setLimit(count);
        return this;
    }

    setOffset(count: number): SQLQueryBuilder {
        this.query.setOffset(count);
        return this;
    }

    reset(): SQLQueryBuilder {
        this.query = new SqlProperties();
        return this;
    }

    build(): SqlQuery {
        let sql = `SELECT ${this.query.getColumns().join(', ')} FROM ${this.query.getTable()}`;
        const params: Record<string, number | string | null> = {};

        return new SqlQuery(sql, params);
    }
}

export default ConcreteSqlQueryBuilder;