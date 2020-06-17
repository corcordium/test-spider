export function processData(old, data) {
    let list = [];
    if (isObject && data.list) {
        list = data.list;
    } else {
        list = data;
    }
    return getNewArr(old, list);
}

function getNewArr(old, list) {
    let newArr = [];
    list.forEach((item, index) => {
        if (old.indexOf(item) === -1) {
            newArr.push(item);
        }
    });
    return newArr;
}

function isObject (data) {
    return typeof data === 'object' ? true : false;
}