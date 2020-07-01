/**
 * @file: parser.ts
 * @description parser分发
 */

import { htmlParser } from "./html-parser";
import { jsonParser } from "./json-parser";
import { ProcessOptions } from '../types/process-options';
import { textParser } from "./text-parser";

export function parser (type:string, data:string, options:ProcessOptions) {
    if (!type || !data) return [];
    if (type === 'html') {
        return htmlParser(data);
    } else if (type === 'json') {
        return jsonParser(data, options);
    } else {
        return textParser(data);
    }
}