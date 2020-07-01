import { fetchData } from '../src/fetch-data';
import { writeFileSync, readFileSync } from 'fs';
import { init } from '../src/init';
import { ProcessOptions } from '../src/types/process-options';

describe('Spider init', () => {
    const options:ProcessOptions = {
        fetchUrl: 'http://localhost:3000/list',
        type: 'text',
        logFile: 'log/log-error.txt',
        outputFile: 'tests/data/output.data',
        existenceFile: 'data/existence.data'
    };
    test('output data is empty', () => {
        writeFileSync(options.outputFile, '');
        
        Promise.resolve()
        .then(() => init(options))
        .then(() => {
            const htmlContent = fetchData(options.fetchUrl);
            return htmlContent;
        }).then((content: string) => {
            const outputData = readFileSync(options.outputFile).toString();
            return [content, outputData];
        }).then((arr:string[]) => {
            expect(arr[0]).toEqual(arr[1]);
            writeFileSync(options.outputFile, '');
        });
    });
});