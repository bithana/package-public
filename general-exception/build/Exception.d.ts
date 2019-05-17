import { Eid, Exception_Interface, Exception_Visibility } from './type';
import { CustomError } from 'ts-custom-error';
export declare class Exception extends CustomError implements Exception_Interface {
    eid: Eid;
    message: string;
    visibility: Exception_Visibility;
    solution?: string;
    data?: any;
    /**
     * Exception Constructor Name
     *
     * @example 'External_Exception'
     */
    type: string;
    constructor(eid: Eid, message: string, visibility?: Exception_Visibility, solution?: string, data?: any);
    /**
     * Whether `this` is given Exception Type
     * @param Exception_Class
     */
    is(Exception_Class: Function): boolean;
    set_eid(eid: Eid): void;
    get_data(): any;
    get_message(): string;
    get_solution(): string;
    to_doc(): string;
    toString(): string;
}
