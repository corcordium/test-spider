/**
 * @file: index.ts
 * @description 入口文件
 */

import { init } from './init';


init({
    fetchUrl: 'http://localhost:3000/list',
    type: 'text',
    logFile: 'log/log-error.txt',
    outputFile: 'data/output.data',
    existenceFile: 'data/existence.data'
});