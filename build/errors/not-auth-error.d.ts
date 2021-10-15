import { CustomError } from './custom-error';
export declare class NotAuthError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
