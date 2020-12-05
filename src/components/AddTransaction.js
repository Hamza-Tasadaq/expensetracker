import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext';

function AddTransaction() {
    const { addTransaction } = useContext(GlobalContext);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState();

    const onsubmit = (e) => {
        e.preventDefault();
        if (title === "" || amount === "") {

        }
        else {
            const newTransaction = {
                amount: +amount,
                title,
                id: Math.floor(Math.random() * 10000)
            }
            console.log(newTransaction)
            addTransaction(newTransaction);
            setTitle("")
            setAmount("");
        }
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onsubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                    (negative - expense, positive - income)
                    </label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="Enter amount..." />
                </div>
                <button type="submit" className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
