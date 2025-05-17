import { SqlQueryBuilder } from "../interfaces/sql-query-builder";
import SqlQuery from "../products/sql-query";

class ConcreteSqlQueryBuilder implements SqlQueryBuilder{
    private query!: string;
    private params!: Record<string, number | string | null>;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.query = '';
        this.params = {};
    }

    select(columns: string[]): SqlQueryBuilder {
        this.query += `SELECT ${columns.join(', ')} `;
        return this;
    }

    insert(table: string, values: Record<string, number | string | null>): SqlQueryBuilder {
        const columns = Object.keys(values).join(', ');
        const placeholders = Object.values(values).map(value => `${value}`).join(', ');
        
        this.query += `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) `;
        this.params = { ...this.params, ...values };
        return this;
    }

    update(table: string, values: Record<string, number | string | null>): SqlQueryBuilder {
        const setClause = Object.entries(values)
            .map(([key, value]) => `${key} = '${value}'`)
            .join(', ');
        this.query += `UPDATE ${table} SET ${setClause} `;
        this.params = { ...this.params, ...values };
        return this;
    }

    delete(table: string): SqlQueryBuilder {
        this.query += `DELETE FROM ${table} `;
        return this;
    }

    from(table: string): SqlQueryBuilder {
        this.query += `FROM ${table} `;
        return this;
    }

    where(condition: string): SqlQueryBuilder {
        this.query += `WHERE ${condition} `;
        return this;
    }

    orderBy(column: string, direction: 'ASC' | 'DESC' = 'ASC'): SqlQueryBuilder {
        this.query += `ORDER BY ${column} ${direction} `;
        return this;
    }

    limit(count: number): SqlQueryBuilder {
        this.query += `LIMIT ${count} `;
        return this;
    }

    offset(count: number): SqlQueryBuilder {
        this.query += `OFFSET ${count} `;
        return this;
    }

    join(table: string, condition: string): SqlQueryBuilder {
        this.query += `JOIN ${table} ON ${condition} `;
        return this;
    }

    build(): SqlQuery {
        const result = new SqlQuery(this.query.trim(), this.params);
        this.reset(); // Reset after building the query
        return result;
    }
}

export default ConcreteSqlQueryBuilder;