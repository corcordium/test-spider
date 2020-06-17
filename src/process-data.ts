export function processData(old, data) {
    const newArr = [];
    data.forEach((item, index) => {
        if (old.indexOf(item) === -1) {
            newArr.push(item);
        }
    });
    return newArr;
}