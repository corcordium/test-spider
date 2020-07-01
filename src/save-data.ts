/**
 * @file: save-data.ts
 * @description 数据写入
 */

import { writeFileSync } from 'fs';
import { ProcessOptions } from './types/process-options';
import { writeLog } from './log';

export async function saveDiffData(dataList:any[], options: ProcessOptions) {
    const newDataList = dataList[0];
    const savedDataList = dataList[1] || [];
    if (!savedDataList) {
        writeFileSync(options.outputFile, savedDataList);
        writeFileSync(options.existenceFile, savedDataList);
    }
    else if (!newDataList.length) {
        writeLog(options.logFile, '未能找到新增数据！');
    } else {
        const newDataListStr = newDataList.join('\n');
        writeFileSync(options.outputFile, newDataListStr);
        writeFileSync(options.existenceFile, savedDataList + '\n' + newDataListStr);
    }
}