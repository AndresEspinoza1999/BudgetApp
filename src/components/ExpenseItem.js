import React, {useContext} from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);
    const {expenses} = useContext(AppContext);
    
var tagStyle = ""
if (props.tag === "Need"){
    tagStyle = "bg-info text-dark"
}
 if (props.tag === "Want"){
     tagStyle = "bg-warning text-dark"
 }
if(props.tag === "Savings"){
    tagStyle = "bg-success"
}
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }
    return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <div>
            <span className="badge rounded-pill bg-primary mr-3">
                ${props.cost}
            </span>
            <span className={`badge ${tagStyle}`}>
                {props.tag}
            </span>
            <TiDelete size="1.5em" onClick={handleDelete}></TiDelete>
        </div>
    </li>

    )
}

export default ExpenseItem
