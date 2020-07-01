import { writeFileSync, readFileSync } from 'fs';
import { saveDiffData } from '../src/save-data';
import { ProcessOptions } from '../src/types/process-options';

describe('Save data', () => {
    const options:ProcessOptions = {
        fetchUrl: 'http://localhost:3000/list',
        type: 'text',
        logFile: 'log/log-error.txt',
        outputFile: 'tests/data/output.data',
        existenceFile: 'data/existence.data'
    };

    test('saved data is empty', () => {
        writeFileSync(options.outputFile, '');
        const data = 'm123\nm234';
        return Promise.resolve()
               .then(() => saveDiffData([data], options))
               .then(() => {
                   const outputHtml = readFileSync(options.outputFile).toString();
                   expect(outputHtml).toEqual(data);
               }).then(() => {
                    const existenceHtml = readFileSync(options.existenceFile).toString();
                    expect(existenceHtml).toEqual(data);
               })
    });
    test('add diff data', () => {
      const newData = ['m456'];
      const oldData = ['m123'];
      return Promise.resolve()
             .then(() => saveDiffData([newData, oldData], options))
             .then(() => {
                const outputHtml = readFileSync(options.outputFile).toString();
                expect(outputHtml).toEqual('m456');
             })
    })
});