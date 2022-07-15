import { Logger } from "@nestjs/common";
import { DataSource } from "typeorm";

export class NoSqlDataSourceProvider {
    private readonly logger = new Logger('DataSourceProvider');
    constructor(private dbName: string = '') { }
    private readonly dbconn: any = {
        type: 'mongodb',
        host: 'mongodb',
        password: 'root',
        port: 27017,
        username: 'root',

    }

    async getDataSource(): Promise<DataSource> {
        let dataSource: any = false
        if (this.dbName) {
            this.logger.log(`Creating data source for database ${this.dbName}`)
            dataSource = new DataSource({
                ...this.dbconn,
                database: this.dbName,
            });
        } else {
            dataSource = new DataSource({
                ...this.dbconn,
            });
        }

        await dataSource.initialize();
        return dataSource;
    }
}