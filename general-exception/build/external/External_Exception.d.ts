import { Exception } from '../Exception';
export declare class External_Exception extends Exception {
    status_code: number;
    constructor(message: string, solution?: string, data?: any);
}
