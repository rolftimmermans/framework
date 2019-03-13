/// <reference types="node" />
import { IncomingMessage as Request, ServerResponse as Response } from "http";
import { Stack } from "../middleware";
export { Request, Response };
export declare type Body = Buffer | object | string;
export interface Data {
    [key: string]: any;
}
export declare class Context {
    stack: Stack;
    request: Request;
    response: Response;
    body: Body;
    data: Data;
    constructor(stack: Stack, request: Request, response: Response);
    get(header: string): string | undefined;
    readonly method: string;
    readonly url: string;
    set(header: string, value: string | number): void;
    status: number;
    readonly sent: boolean;
    inspect(): {
        data: Data;
        req: string;
        res: string;
        stack: import("../middleware").Middleware[];
    };
}
export default Context;
