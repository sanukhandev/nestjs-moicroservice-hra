import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    async createToken(user: any) {
        const accessToken = await this.jwtService.sign({ user });
        return { accessToken };
    }

   async decryptToken(token: string) {
        return await this.jwtService.verify(token);
    }

}
