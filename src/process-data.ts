/**
 * @file: process-data.ts
 * @description 数据处理
 */

export function processData(old:string[], data:string[]) {
    if (!old.length) return data;
    if (!data.length) return [];

    return getChangedList(old, data);
}

function getChangedList(old:string[], list:string[]) {
    let changedList = [];
    list.forEach((item) => {
        if (old.indexOf(item) === -1) {
            changedList.push(item);
        }
    });
    return changedList;
}