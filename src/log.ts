/**
 * @file: log.ts
 * @description 日志文件
 */

import { writeFile } from 'fs';

export async function writeLog(file, log, callback?) {
    writeFile(file, log, (err) => {
        callback && callback(err);
    });
}