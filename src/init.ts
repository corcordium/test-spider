import { fetchData } from './fetch-data';
import { Store } from './store';
import { HtmlPaser } from './html-parter';
import { WARN, ERROR, INFO } from './log';

interface ProcessOptions{
    outputPath: string;
    existPath: string;
    url: string;
}

export async function init(options: ProcessOptions) {
    let htmlContent = await fetchData(options.url).catch(err => {
        throw new Error(ERROR.NetworkError);
    });

    let itemList = new HtmlPaser(htmlContent).getItemList();
    let store = new Store(options.existPath);
    let newItemList = store.merge(itemList);
    if (newItemList.length > 0) {
        getcha();
        console.log(newItemList.length + '条');
        // update store
        await store.save();
        // save newItem to output
        new Store(options.outputPath).save(newItemList);
    } else {
        throw new Error(WARN.EmptyResult);
    }
    // start your code here
}

function getcha() {
    console.log(INFO.NewResult);
}