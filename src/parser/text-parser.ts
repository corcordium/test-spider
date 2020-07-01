/**
 * @file: text-parser.ts
 * @description 解析text资源
 */

export function textParser (data:string):string[] {
    return data.split('\n');
}