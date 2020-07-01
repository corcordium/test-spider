/**
 * @file: html-parser.ts
 * @description 解析html资源
 */

import { JSDOM } from 'jsdom';

export function htmlParser (data: string): string[] {
    let dataList = [];
    const itemsDom = new JSDOM(data);
    const items = Array.apply(null, itemsDom.window.document.querySelectorAll('.item-id'));
    items.forEach((item) => {
        dataList.push(item.textContent);
    });
    return dataList;
}