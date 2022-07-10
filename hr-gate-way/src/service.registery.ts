import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const DBservice: ClientProviderOptions = { name: 'dbService', transport: Transport.TCP, options: {host:'db-service', port: 3002 } }


