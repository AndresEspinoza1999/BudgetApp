import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses, budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total,item)=>{
            return (total+= item.cost);
    },0)
    const alertType = totalExpenses > budget ? "alert-danger" : "alert-primary"

    return (
        <div>
            <div className={`alert ${alertType}` }>
                <span>Spent so far ${totalExpenses}</span>
            </div>
        </div>
    )
}

export default ExpenseTotal
