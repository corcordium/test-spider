import { writeFile } from 'fs';

export async function writeLog(file, log) {
    writeFile(file, log, (err) => {
        console.error('file not changed');
    });
}