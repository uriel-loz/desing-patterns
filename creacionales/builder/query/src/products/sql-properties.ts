class SqlProperties {
    private columns!: string[];
    private table!: string;
    private condition: string = '';
    private orderByColumn: string = '';
    private orderByDirection: 'ASC' | 'DESC' = 'ASC';
    private limitCount: number = 0;
    private offsetCount: number = 0;
    // private joinTable: string = '';
    // private joinCondition: string = '';
    // private insertTable: string = '';
    // private insertValues: Record<string, string | number> = {};
    // private updateTable: string = '';
    // private updateValues: Record<string, string | number> = {};
    // private deleteTable: string = '';
    // private deleteCondition: string = '';

    public getColumns(): string[] {
        return this.columns;
    }

    public setColumns(columns: string[]): void {
        this.columns = columns;
    }

    public getTable(): string {
        return this.table;
    }

    public setTable(table: string): void {
        this.table = table;
    }

    public getCondition(): string {
        return this.condition;
    }

    public setCondition(condition: string): void {
        this.condition = condition;
    }

    public getOrderByColumn(): string {
        return this.orderByColumn;
    }

    public setOrderBy(column: string, direction: 'ASC' | 'DESC'): void {
        this.orderByColumn = column;
        this.orderByDirection = direction;
    }

    public getLimitCount(): number {
        return this.limitCount;
    }

    public setLimit(count: number): void {
        this.limitCount = count;
    }

    public getOffsetCount(): number {
        return this.offsetCount;
    }

    public setOffset(count: number): void {
        this.offsetCount = count;
    }
}

export default SqlProperties;