import TestingFunctions from "../testing-functions"
import { IPushedTransactions } from "../types"

describe('product-dashboard-utils', () => {
    describe('groupTransactions', () => {
        it('should handle an empty list of transactions.', () => {
            expect(() => TestingFunctions.groupTransactions(null as any)).not.toThrow()
        })

        it('should handle an empty list of transactions.', () => {
            expect(() => TestingFunctions.groupTransactions([])).not.toThrow()
        })

        it('should handle a new transaction.', () => {
            const result = TestingFunctions.groupTransactions([{
                grossPrice: 1,
                id: 'test',
                productId: '1234',
                productName: 'name',
                serviceTypeAliasId: 'alias',
                soldAt: '2022-04-01T09:10:15.000Z'
            }])

            expect(result[0].id).toEqual('test')
            expect(result[0].index).toEqual(-1)
            expect(result[0].alias).toEqual('alias')
            expect(result[0].transactions.length).toEqual(1)
            expect(result[0].transactions[0].grossPrice).toEqual(1)
            expect(result[0].transactions[0].id).toEqual('test')
            expect(result[0].transactions[0].productId).toEqual('1234')
            expect(result[0].transactions[0].productName).toEqual('name')
            expect(result[0].transactions[0].serviceTypeAliasId).toEqual('alias')
        })

        it('should handle a transaction of multiple items.', () => {
            const result = TestingFunctions.groupTransactions([{
                grossPrice: 1,
                id: 'test 1',
                productId: '1234',
                productName: 'product 1',
                serviceTypeAliasId: 'alias 1',
                soldAt: '2022-04-01T09:10:15.000Z'
            },
            {
                grossPrice: 2,
                id: 'test 2',
                productId: '9876',
                productName: 'product 2',
                serviceTypeAliasId: 'alias 2',
                soldAt: '2022-04-01T09:10:15.000Z'
            }])

            expect(result[0].id).toEqual('test 1')
            expect(result[0].index).toEqual(-1)
            expect(result[0].alias).toEqual('alias 1')
            expect(result[0].transactions.length).toEqual(2)
            expect(result[0].transactions[0].grossPrice).toEqual(1)
            expect(result[0].transactions[0].id).toEqual('test 1')
            expect(result[0].transactions[0].productId).toEqual('1234')
            expect(result[0].transactions[0].productName).toEqual('product 1')
            expect(result[0].transactions[0].serviceTypeAliasId).toEqual('alias 1')
            expect(result[0].transactions[1].grossPrice).toEqual(2)
            expect(result[0].transactions[1].id).toEqual('test 2')
            expect(result[0].transactions[1].productId).toEqual('9876')
            expect(result[0].transactions[1].productName).toEqual('product 2')
            expect(result[0].transactions[1].serviceTypeAliasId).toEqual('alias 2')
        })

        it('should split different transactions accross two grouped transactions', () => {
            const result = TestingFunctions.groupTransactions([{
                grossPrice: 1,
                id: 'test 1',
                productId: '1234',
                productName: 'product 1',
                serviceTypeAliasId: 'alias 1',
                soldAt: '2022-04-01T09:10:15.000Z'
            },
            {
                grossPrice: 2,
                id: 'test 2',
                productId: '9876',
                productName: 'product 2',
                serviceTypeAliasId: 'alias 2',
                soldAt: '2022-04-01T10:10:15.000Z'
            }])

            expect(result[0].id).toEqual('test 2')
            expect(result[0].index).toEqual(-1)
            expect(result[0].alias).toEqual('alias 2')
            expect(result[0].transactions.length).toEqual(1)
            expect(result[0].transactions[0].grossPrice).toEqual(2)
            expect(result[0].transactions[0].id).toEqual('test 2')
            expect(result[0].transactions[0].productId).toEqual('9876')
            expect(result[0].transactions[0].productName).toEqual('product 2')
            expect(result[0].transactions[0].serviceTypeAliasId).toEqual('alias 2')

            expect(result[1].id).toEqual('test 1')
            expect(result[1].index).toEqual(-1)
            expect(result[1].alias).toEqual('alias 1')
            expect(result[1].transactions.length).toEqual(1)
            expect(result[1].transactions[0].grossPrice).toEqual(1)
            expect(result[1].transactions[0].id).toEqual('test 1')
            expect(result[1].transactions[0].productId).toEqual('1234')
            expect(result[1].transactions[0].productName).toEqual('product 1')
            expect(result[1].transactions[0].serviceTypeAliasId).toEqual('alias 1')
        })

        it('should do group a list of ordered transactions.', () => {
            const result = TestingFunctions.groupTransactions([{
                grossPrice: 1,
                id: 'test 1',
                productId: '1234',
                productName: 'product 1',
                serviceTypeAliasId: 'alias 1',
                soldAt: '2022-04-01T09:10:15.000Z'
            },
            {
                grossPrice: 2,
                id: 'test 2',
                productId: '9876',
                productName: 'product 2',
                serviceTypeAliasId: 'alias 2',
                soldAt: '2022-04-01T10:10:15.000Z'
            },
            {
                grossPrice: 3,
                id: 'test 3',
                productId: '9876',
                productName: 'product 2',
                serviceTypeAliasId: 'alias 2',
                soldAt: '2022-04-01T10:10:15.000Z'
            },
            {
                grossPrice: 4,
                id: 'test 4',
                productId: '9876',
                productName: 'product 2',
                serviceTypeAliasId: 'alias 2',
                soldAt: '2022-04-01T11:10:15.000Z'
            },
            {
                grossPrice: 5,
                id: 'test 5',
                productId: '9876',
                productName: 'product 2',
                serviceTypeAliasId: 'alias 2',
                soldAt: '2022-04-01T11:10:15.000Z'
            }])

            expect(result.length).toEqual(3)
            expect(result[0].transactions.length).toEqual(2)
            expect(result[0].transactions[0].id).toEqual('test 4')
            expect(result[0].transactions[1].id).toEqual('test 5')
            expect(result[1].transactions.length).toEqual(2)
            expect(result[1].transactions[0].id).toEqual('test 2')
            expect(result[1].transactions[1].id).toEqual('test 3')
            expect(result[2].transactions.length).toEqual(1)
            expect(result[2].transactions[0].id).toEqual('test 1')
        })

        it('should do group a list of unordered transactions.', () => {
            const result = TestingFunctions.groupTransactions([
                {
                    grossPrice: 5,
                    id: 'test 5',
                    productId: '9876',
                    productName: 'product 2',
                    serviceTypeAliasId: 'alias 2',
                    soldAt: '2022-04-01T11:10:15.000Z'
                },
                {
                    grossPrice: 2,
                    id: 'test 2',
                    productId: '9876',
                    productName: 'product 2',
                    serviceTypeAliasId: 'alias 2',
                    soldAt: '2022-04-01T10:10:15.000Z'
                },
                {
                    grossPrice: 1,
                    id: 'test 1',
                    productId: '1234',
                    productName: 'product 1',
                    serviceTypeAliasId: 'alias 1',
                    soldAt: '2022-04-01T09:10:15.000Z'
                },
                {
                    grossPrice: 4,
                    id: 'test 4',
                    productId: '9876',
                    productName: 'product 2',
                    serviceTypeAliasId: 'alias 2',
                    soldAt: '2022-04-01T11:10:15.000Z'
                },
                {
                    grossPrice: 3,
                    id: 'test 3',
                    productId: '9876',
                    productName: 'product 2',
                    serviceTypeAliasId: 'alias 2',
                    soldAt: '2022-04-01T10:10:15.000Z'
                }
            ])

            expect(result.length).toEqual(3)
            expect(result[0].transactions.length).toEqual(2)
            expect(result[0].transactions[0].id).toEqual('test 5')
            expect(result[0].transactions[1].id).toEqual('test 4')
            expect(result[1].transactions.length).toEqual(2)
            expect(result[1].transactions[0].id).toEqual('test 2')
            expect(result[1].transactions[1].id).toEqual('test 3')
            expect(result[2].transactions.length).toEqual(1)
            expect(result[2].transactions[0].id).toEqual('test 1')
        })
    })

    describe('mapTransactions', () => {
        it('should return an empty array when no data is sent.', () => {
            const result = TestingFunctions.mapTransactions(undefined)
            expect(result.length).toEqual(0)
        })

        it('should return an empty array when no data is sent.', () => {
            const result = TestingFunctions.mapTransactions(
                {
                    transactions: [
                        {
                            grossPrice: 1,
                            productId: 'id-1',
                            productName: 'prod-1',
                            serviceTypeAliasId: 'alias-1',
                            soldAt: '2022-04-01T09:10:15.000Z'
                        }
                    ]
                } as IPushedTransactions)
            expect(result.length).toEqual(1)
            expect(result[0].grossPrice).toEqual(1)
            expect(result[0].id).not.toBeNull()
            expect(result[0].productId).toEqual('id-1')
            expect(result[0].productName).toEqual('prod-1')
            expect(result[0].serviceTypeAliasId).toEqual('alias-1')
        })
    })

    describe('mergeGroupedTransactions', () => {
        it('should insert a later transaction before the current transactions.', () => {
            const result = TestingFunctions.mergeGroupedTransactions([
                {
                    alias: 'alias-1',
                    comparisonDate: 1664838000000,
                    date: '11:10:15',
                    id: 'original',
                    index: -1,
                    transactions: []
                }
            ], [
                {
                    alias: 'alias-2',
                    comparisonDate: 1664838000001,
                    date: '11:10:16',
                    id: 'later',
                    index: -1,
                    transactions: []
                }
            ])
    
            expect(result.length).toEqual(2)
            expect(result[0].id).toEqual('later')
            expect(result[1].id).toEqual('original')
        })
    
        it('should insert an earlier transaction after the current transactions.', () => {
            const result = TestingFunctions.mergeGroupedTransactions([
                {
                    alias: 'alias-1',
                    comparisonDate: 1664838000001,
                    date: '11:10:15',
                    id: 'original',
                    index: -1,
                    transactions: []
                }
            ], [
                {
    
                    alias: 'alias-2',
                    comparisonDate: 1664838000000,
                    date: '11:10:14',
                    id: 'earlier',
                    index: -1,
                    transactions: []
                }
            ])
    
            expect(result.length).toEqual(2)
            expect(result[0].id).toEqual('original')
            expect(result[1].id).toEqual('earlier')
        })
    
        it('should insert an transaction between the current transactions.', () => {
            const result = TestingFunctions.mergeGroupedTransactions([
                {
                    alias: 'alias-1',
                    comparisonDate: 1664838000002,
                    date: '11:10:14',
                    id: 'original-1',
                    index: -1,
                    transactions: []
                },
                {
                    alias: 'alias-2',
                    comparisonDate: 1664838000000,
                    date: '11:10:16',
                    id: 'original-2',
                    index: -1,
                    transactions: []
                }
            ], [
                {
                    alias: 'alias-3',
                    comparisonDate: 1664838000001,
                    date: '11:10:15',
                    id: 'between',
                    index: -1,
                    transactions: []
                }
            ])
    
            expect(result.length).toEqual(3)
            expect(result[0].id).toEqual('original-1')
            expect(result[1].id).toEqual('between')
            expect(result[2].id).toEqual('original-2')
        })
    
        it('should return just the specified number of entries', () => {
            const result = TestingFunctions.mergeGroupedTransactions([
                {
                    alias: 'alias-1',
                    comparisonDate: 1664838000002,
                    date: '11:10:14',
                    id: 'original-1',
                    index: -1,
                    transactions: []
                },
                {
                    alias: 'alias-2',
                    comparisonDate: 1664838000000,
                    date: '11:10:16',
                    id: 'original-2',
                    index: -1,
                    transactions: []
                }
            ], [
                {
                    alias: 'alias-3',
                    comparisonDate: 1664838000001,
                    date: '11:10:15',
                    id: 'between',
                    index: -1,
                    transactions: []
                }
            ], 2)
        
            expect(result.length).toEqual(2)
            expect(result[0].id).toEqual('original-1')
            expect(result[1].id).toEqual('between')
        })
    })
})