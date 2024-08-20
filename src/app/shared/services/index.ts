import { AuthService } from './auth/auth.service';
import { JwtService } from './jwt/jwt.service';

export const services = [AuthService, JwtService];

export * from './auth/auth.service';
export * from './jwt/jwt.service';

