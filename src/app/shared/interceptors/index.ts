import { ErrorInterceptor } from './error-interceptor';
import { HttpTokenInterceptor } from './http.token.interceptor';

export const interceptors = [HttpTokenInterceptor, ErrorInterceptor];

export * from './http.token.interceptor';
export * from './error-interceptor';
