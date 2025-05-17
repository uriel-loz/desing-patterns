export interface Config {
    appName:  string;
    version:  string;
    server:   Server;
    database: Database;
    logging:  Logging;
    features: Features;
    api:      API;
}

export interface API {
    timeout:       number;
    retryAttempts: number;
}

export interface Database {
    host:     string;
    port:     number;
    username: string;
    password: string;
    name:     string;
    pool:     Pool;
}

export interface Pool {
    max:               number;
    min:               number;
    idleTimeoutMillis: number;
}

export interface Features {
    enableSignup:   boolean;
    enablePayments: boolean;
    experimentalUI: boolean;
}

export interface Logging {
    level:   string;
    file:    string;
    console: boolean;
}

export interface Server {
    host: string;
    port: number;
    ssl:  SSL;
}

export interface SSL {
    enabled:  boolean;
    keyPath:  string;
    certPath: string;
}
