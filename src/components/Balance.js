import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const balane = amounts.reduce((a, b) => (a += b), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1 >${balane}</h1>
        </>
    )
}

export default Balance
