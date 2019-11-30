import { CustomError } from 'ts-custom-error';
import { Eid, Exception_Interface } from './type';
export declare class E extends CustomError implements Exception_Interface {
    /**
     * Unique error code for error identifying, can be overwritten by by descendents.
     */
    eid: Eid | string;
    /**
     * String version of error chain from inheritance.
     * @example 'e.external.invalid_api_argument'
     */
    echain: string;
    /**
     * Error chain from inheritance.
     * @example [ 'e', 'external', 'invalid_api_argument' ]
     */
    chain: string[];
    /**
     * Error level, defined and specified by descendents.
     *
     * @example 'internal'
     * @example 'api'
     * @example 'database'
     * @example 'file'
     */
    level: string;
    /**
     * Error title
     * One line to cover the error.
     *
     * @example 'Missing configuration <port> for database'
     */
    title: string;
    /**
     * How to solve this problem
     */
    solution?: string;
    message: string;
    data?: any;
    constructor(title: string, solution?: string, data?: any);
    /**
     * @param ins
     * @param echain
     */
    generate_echain(ins?: any): any;
    /**
     * Whether `this` is given Exception Type
     * @param Exception_Class
     */
    is(Exception_Class: Function): boolean;
    to_doc(): string;
    toString(): string;
}
