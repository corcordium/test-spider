import { fetchData } from './fetch-data';
import { writeFileSync, readFileSync } from 'fs';
import { writeLog } from './log';
import { processData } from './process-data';
import { saveData } from './save-data';

interface ProcessOptions{
    fetchUrl: string;
    logFile: string;
}

export async function init(options?: ProcessOptions) {
    let htmlContent = await fetchData(options.fetchUrl);
    const data = readFileSync('data/output.data').toString();
    const oldData = readFileSync('data/existence.data').toString().split('\n');
    const htmlContentArr = htmlContent.split('\n');
    let newArr:any[] = [];

    if (data === '') {
        saveData(htmlContentArr);
    } else {
        newArr = processData(oldData, htmlContentArr);
        
        if (newArr.length === 0) {
            writeLog(options.logFile, '未能找到！');
        } else {
            const newStr = newArr.join('\n');
            const allStr = htmlContent + '\n' + newStr;
            saveData([{
                type: 'new',
                data: newStr
            }, {
                type: 'cur',
                data: allStr
            }]);
            getcha();
        }
    }
}

function getcha() {
    console.log('发现了新增内容！');
}
