import { External_exception } from '../External_exception';
export declare class Invalid_parameter_exception extends External_exception {
    eid: string;
    constructor(message: string, solution?: any, data?: any);
}
