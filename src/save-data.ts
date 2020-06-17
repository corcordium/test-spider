import { writeFileSync } from 'fs';
import { Saveddata } from './types/saved-data';

export async function saveData(data: string[] | Saveddata) {
    if (Array.isArray(data)) {
        writeFileSync('data/output.data', data);
        writeFileSync('data/existence.data', data);
    }
    data.forEach((item) => {
        if (item.type === 'new') {
            writeFileSync('data/output.data', item.data);
        } else if (item.type === 'cur') {
            writeFileSync('data/existence.data', item.data);
        }
    });
}