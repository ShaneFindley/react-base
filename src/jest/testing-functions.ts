import { format } from 'date-fns';
import orderBy from 'lodash/orderBy';
import { randomUUID } from 'crypto';

import { IGroupedTransactions, ITransaction, IPushedTransactions } from './types';

const requestDateFormat = 'yyyy-MM-dd';
const timeFormat = 'HH:mm:ss';

function mapTransactions(data: IPushedTransactions | undefined) {
    if (data) {
        return data.transactions.map((item) => ({
            id: randomUUID(),
            grossPrice: Number(item.grossPrice),
            productId: item.productId,
            productName: item.productName,
            serviceTypeAliasId: item.serviceTypeAliasId,
            soldAt: format(new Date(item.soldAt), TestingFunctions.timeFormat)
        }));
    }

    return [];
}

const groupTransactions = (newTrans: ITransaction[]): IGroupedTransactions[] => {
    const groupedItems: IGroupedTransactions[] = [];

    if (newTrans && newTrans.length > 0) {
        const orderedTrans = orderBy(newTrans, x => x.soldAt, 'desc');
        for (const tran of orderedTrans) {
            const index = groupedItems.findIndex(x => x.date === tran.soldAt);
            if (index === -1) {
                groupedItems.push({
                    comparisonDate: new Date(tran.soldAt).getTime(),
                    date: tran.soldAt,
                    index,
                    transactions: [tran],
                    alias: tran.serviceTypeAliasId,
                    id: tran.id
                });
            } else {
                groupedItems[index].transactions.push(tran);
            }
        }
    }

    return orderBy(groupedItems, 'date', 'desc');
}

function mergeGroupedTransactions(currentItems: IGroupedTransactions[], newItems: IGroupedTransactions[], maxLength: number | null = null) {
    let merged: IGroupedTransactions[] = [];
    let currentItemsIndex = 0;
    let newItemsIndex = 0;
    let current = 0;

    // We want to keep adding items unless the current index is greater than the total of the two arrays or exceeds the maximum length.
    while (current < (currentItems.length + newItems.length) && (maxLength === null || (current < maxLength))) {

        let isArr1Depleted = currentItemsIndex >= currentItems.length;
        let isArr2Depleted = newItemsIndex >= newItems.length;

        if (!isArr1Depleted && (isArr2Depleted || (newItems[newItemsIndex].comparisonDate < currentItems[currentItemsIndex].comparisonDate))) {
            merged[current] = currentItems[currentItemsIndex];
            currentItemsIndex++;
        } else {
            merged[current] = newItems[newItemsIndex];
            newItemsIndex++;
        }

        current++;
    }

    return merged;
}

const TestingFunctions = {
    groupTransactions,
    mapTransactions,
    mergeGroupedTransactions,
    requestDateFormat,
    timeFormat
};

export default TestingFunctions;