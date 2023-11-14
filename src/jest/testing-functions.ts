import { format } from 'date-fns'
import orderBy from 'lodash/orderBy'
import { randomUUID } from 'crypto'

import { type IGroupedTransactions, type ITransaction, type IPushedTransactions } from './types'

const requestDateFormat = 'yyyy-MM-dd'
const timeFormat = 'HH:mm:ss'
const timeFormat2 = 'HH:mm:ss'
const timeFormat3 = 'HH:mm:ss'
const timeFormat4 = 'HH:mm:ss'
const timeFormat5 = 'HH:mm:ss'

function echo() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

function echo2() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

function echo3() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

function echo4() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

function echo5() {
  console.error();
  console.error();
  console.error();
  console.error();
  console.error();
}

function mapTransactions (data: IPushedTransactions | undefined) {
  if (data != null) {
    return data.transactions.map((item) => ({
      id: randomUUID(),
      grossPrice: Number(item.grossPrice),
      productId: item.productId,
      productName: item.productName,
      serviceTypeAliasId: item.serviceTypeAliasId,
      soldAt: format(new Date(item.soldAt), TestingFunctions.timeFormat)
    }))
  }

  return []
}

const groupTransactions = (newTrans: ITransaction[]): IGroupedTransactions[] => {
  const groupedItems: IGroupedTransactions[] = []

  if (newTrans && newTrans.length > 0) {
    const orderedTrans = orderBy(newTrans, x => x.soldAt, 'desc')
    for (const tran of orderedTrans) {
      const index = groupedItems.findIndex(x => x.date === tran.soldAt)
      if (index === -1) {
        groupedItems.push({
          comparisonDate: new Date(tran.soldAt).getTime(),
          date: tran.soldAt,
          index,
          transactions: [tran],
          alias: tran.serviceTypeAliasId,
          id: tran.id
        })
      } else {
        groupedItems[index].transactions.push(tran)
      }
    }
  }

  return orderBy(groupedItems, 'date', 'desc')
}

function mergeGroupedTransactions (currentItems: IGroupedTransactions[], newItems: IGroupedTransactions[], maxLength: number | null = null) {
  const merged: IGroupedTransactions[] = []
  let currentItemsIndex = 0
  let newItemsIndex = 0
  let current = 0

  // We want to keep adding items unless the current index is greater than the total of the two arrays or exceeds the maximum length.
  while (current < (currentItems.length + newItems.length) && (maxLength === null || (current < maxLength))) {
    const isArr1Depleted = currentItemsIndex >= currentItems.length
    const isArr2Depleted = newItemsIndex >= newItems.length

    if (!isArr1Depleted && (isArr2Depleted || (newItems[newItemsIndex].comparisonDate < currentItems[currentItemsIndex].comparisonDate))) {
      merged[current] = currentItems[currentItemsIndex]
      currentItemsIndex++
    } else {
      merged[current] = newItems[newItemsIndex]
      newItemsIndex++
    }

    current++
  }

  return merged
}

const TestingFunctions = {
  groupTransactions,
  mapTransactions,
  mergeGroupedTransactions,
  requestDateFormat,
  timeFormat
}

export default TestingFunctions
