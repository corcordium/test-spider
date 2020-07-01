import { processData } from '../src/process-data';

describe('Process data', () => {
    test('process fetch list data', () => {
        const oldData = ['m132'];
        const data = ['m234'];
        const arr = processData(oldData, data);
        expect(arr).toEqual(['m234']);
    })
});