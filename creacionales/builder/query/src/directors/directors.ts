import { SQLQueryBuilder } from "../interfaces/sql-query-builder";
import SqlQuery from "../products/sql-query";

class Director {
    private builder: SQLQueryBuilder;

    constructor(builder: SQLQueryBuilder) {
        this.builder = builder;
    }

    buildSimpleSelectAll(table: string): SqlQuery{
        return this.builder.reset()
            .setColumns(['*'])
            .setTable('users')
            .build();
    }
}

export default Director;