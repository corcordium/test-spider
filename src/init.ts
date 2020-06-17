import { fetchData } from './fetch-data';
import { writeFileSync, readFileSync } from 'fs';
import { writeLog } from './log';
import { processData } from './process-data';
// import { resolve } from 'path';

interface ProcessOptions{
    fetchUrl: string;
    logFile: string;
}

export async function init(options?: ProcessOptions) {
    let htmlContent = await fetchData(options.fetchUrl);
    const data = readFileSync('data/output.data').toString();
    const oldData = readFileSync('data/existence.data').toString();
    const htmlContentArr = htmlContent.split('\n');
    const dataArr = oldData.split('\n');
    let newArr:any[] = [];

    if (data === '') {
        saveNewData(htmlContent);
        saveCurData(htmlContent);
    } else {
        newArr = processData(oldData, htmlContentArr);
        
        if (newArr.length === 0) {
            writeLog(options.logFile, '未能找到！');
        } else {
            const newStr = newArr.join('\n');
            saveNewData(newStr);
            const allStr = htmlContent + '\n' + newStr;
            saveCurData(allStr);
            getcha();
        }
    }
}

function getcha() {
    console.log('发现了新增内容！');
}

function saveCurData (data) {
    writeFileSync('data/existence.data', data);
}

function saveNewData (data) {
    writeFileSync('data/output.data', data);
}
