export declare type Eid = 'INVALID_PARAMETER' | 'INVALID_PROPERTY' | 'INVALID_MODEL_PROPERTY' | 'INVALID_STATE' | 'INVALID_MODEL_STATE' | 'UNKNOWN_EXTERNAL_EXCEPTION';
export declare type Exception_Visibility = 'INTERNAL' | 'EXTERNAL';
export interface Exception_Interface {
    type: string;
    eid: Eid;
    message: string;
    visibility: string;
    solution?: string;
    data?: any;
}
