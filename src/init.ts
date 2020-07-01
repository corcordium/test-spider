/**
 * @file: init.ts
 * @description 初始化
 */

import { fetchData } from './fetch-data';
import { readFileSync } from 'fs';
import { processData } from './process-data';
import { saveDiffData } from './save-data';
import { ProcessOptions } from './types/process-options';
import { writeLog } from './log';
import { parser } from './parser/parser';

export async function init(options?: ProcessOptions) {
    let fetchText = await fetchData(options.fetchUrl);

    if (!fetchData) {
        writeLog(options.logFile, '接口获取数据异常');
    }

    const data = readFileSync(options.outputFile).toString();
    const oldDataList = parser(options.type, readFileSync(options.existenceFile).toString(), options);
    const fetchDataList = parser(options.type, fetchText, options);

    if (data === '') {
        saveDiffData([fetchText], options);
    } else {
        let newArr: string[] = processData(oldDataList, fetchDataList);
        saveDiffData([newArr, data], options);
    }
}