import ConcreteSqlQueryBuilder from "./builder/concrete-sql-query-builder";
import Director from "./directors/directors";

class Main {
    private builder = new ConcreteSqlQueryBuilder();
    private director = new Director(this.builder);

    public run(){
        const sqlQuery = this.director.buildSimpleSelectAll('*');

        console.log(sqlQuery.sql);
        
    }
}

const main = new Main();
main.run();