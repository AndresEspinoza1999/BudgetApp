import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4 } from "uuid";

export const AddExpenseForm = () => {
  const { dispatch } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [tag, setTag] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    const expense = {
      name: name,
      cost: parseInt(cost),
      tag: tag,
      id: uuidv4,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row align-items-center">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            type="text"
            required="required"
            className="form-control"
            id="cost"
            onChange={(event) => setCost(event.target.value)}
          />
        </div>
        <div className="col-sm">
          <select
            class="form-select form-select-md mb-1"
            aria-label="Tag"
            onChange={(event) => setTag(event.target.value)}
          >
            <option selected>Select Tag</option>
            <option value="Need">Need</option>
            <option value="Want">Want</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary" style={{marginTop: "26px"}}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
