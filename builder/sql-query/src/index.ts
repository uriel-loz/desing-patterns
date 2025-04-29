import ConcreteSqlQueryBuilder from "./builder/concrete-sql-query-builder";
import SqlQueryDirector from "./directors/sql-query-director";

class Main {
    private builder = new ConcreteSqlQueryBuilder();
    private director = new SqlQueryDirector(this.builder);

    public run() {
        const sqlQuery = this.director.buildSelectAllQuery('users');
        console.log(sqlQuery);
    }

    public runInsert() {
        const sqlQuery = this.director.buildInsertQuery('users', { name: 'John Doe', age: 30 });
        console.log(sqlQuery);
    }

    public runUpdate() {
        const sqlQuery = this.director.buildUpdateQuery('users', { name: 'Jane Doe' }, 'id = 1');
        console.log(sqlQuery);
    }
}

const main = new Main();
main.run();
main.runInsert();
main.runUpdate();