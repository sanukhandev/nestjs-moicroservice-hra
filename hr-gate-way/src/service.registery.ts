import { ClientProviderOptions, Transport } from "@nestjs/microservices";

export const AuthService: ClientProviderOptions = { name: 'authService', transport: Transport.TCP, options: {host:'auth-service', port: 3001 } }
export const DBservice: ClientProviderOptions = { name: 'dbService', transport: Transport.TCP, options: {host:'db-service', port: 3002 } }


