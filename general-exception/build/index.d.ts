import { CustomError } from 'ts-custom-error';
import { Eid, Exception_Interface } from './type';
export declare class E extends CustomError implements Exception_Interface {
    message: string;
    solution?: string;
    data?: any;
    eid: Eid | string;
    chain: string[];
    constructor(message: string, solution?: string, data?: any);
    make_eid(ins?: any, eid?: string): any;
    /**
     * Whether `this` is given Exception Type
     * @param Exception_Class
     */
    is(Exception_Class: Function): boolean;
    to_doc(): string;
    toString(): string;
}
