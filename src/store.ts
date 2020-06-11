// import * as fs from '';

import { readFileSync, writeFileSync } from 'fs';
import { ERROR } from './log';

export class Store {
    private itemList: string[] = [];
    constructor(private filePath: string){

    }
    public load() {
        try {
            let content = readFileSync(this.filePath);
            if (content) {
                this.itemList = content.toString().split('\n');
            }
        } catch{
            throw new Error(ERROR.FileReadError);
        }

        return this;
    }
    
    public merge(itemList: string[]) {
        this.load();
        let newItemList: string[] = [];
        itemList.forEach(item => {
            if(this.itemList.indexOf(item) === -1) {
                newItemList.push(item);
            }
        });
        this.itemList = newItemList.concat(this.itemList);
        return newItemList;
    }

    public save(itemList?: string[]) {
        try {
            writeFileSync(this.filePath, 
                itemList? itemList.join('\n') : this.itemList.join('\n'));
        } catch {
            throw new Error(ERROR.FileWriteError);
        }

    }

}