import { Logger } from "@nestjs/common";
import { DataSource } from "typeorm";

export class SQLDataSourceProvider {
    private readonly logger = new Logger('DataSourceProvider');
    constructor(private dbName:string = '') {}
    private readonly dbconn: any = {
        type: 'mysql',
        host: 'mysql',
        password: 'password',
        port: 3306,
        username: 'root',
      }

  
    async getDataSource (): Promise<DataSource> {
        let dataSource: any = false
        if(this.dbName) {
            this.logger.log(`Creating data source for database ${this.dbName}`)
            dataSource =  new DataSource({
                ...this.dbconn,
                database: this.dbName,
                entities: [__dirname + '/**/*.org.entity{.ts,.js}'],
            });
            this.logger.log( __dirname + '/**/*.org.entity{.ts,.js}')
        }
        else {
            dataSource =  new DataSource({
                ...this.dbconn,
            });
        }

        await dataSource.initialize();
        return dataSource;
    }
}