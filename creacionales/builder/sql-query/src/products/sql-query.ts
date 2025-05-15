class SqlQuery {
    private _sql: string = '';
    private _parameters: Record<string, number | string | null> = {};

    constructor(sql: string, parameters: Record<string, number | string | null> = {}) {
        this._sql = sql;
        this._parameters = parameters;
    }

    get sql(): string {
        return this._sql;
    }

    set sql(value: string) {
        this._sql = value;
    }

    get parameters(): Record<string, number | string | null> {
        return this._parameters;
    }

    set parameters(value: Record<string, number | string | null>) {
        this._parameters = value;
    }

    toString(): string {
        return this._sql;
    }
}

export default SqlQuery;