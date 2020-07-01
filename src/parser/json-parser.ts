/**
 * @file: json-parser.ts
 * @description 解析json资源
 */

import { jsonTypeData } from '../types/json-type-data';
import { writeLog } from '../log';
import { ProcessOptions } from '../types/process-options';

export function jsonParser(data: string, options: ProcessOptions):string[] {
    let list:jsonTypeData;

    try {
        list = JSON.parse(data);
    } catch (err) {
        writeLog(options.logFile, err);
    }

    return list.list;
}