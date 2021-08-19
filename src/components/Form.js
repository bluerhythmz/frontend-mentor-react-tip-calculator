import React from "react";
import dollarSign from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'
import ValueDisplay from "./ValueDisplay";
import { useState } from "react";

const Form = () => {
    const [total, setTotal] = useState(0)
    const [bill, setBill] = useState('')
    const [tipPercent, setTipPercent] = useState(0)
    const percents = [5, 10, 15, 25, 50]

    const handleClick = (e) => {
        setTipPercent(e.target.value)
    }

    const handleBillChange = (e) => {
        const value = parseInt(e.target.value)
        if (e.target.value === '') {
            return setBill(0)
        }
        setBill(value)
    }

  return (
    <main>
      <div className="form">
        <label htmlFor="bill" className="form__label">
          Bill
        </label>
        <div className="input-wrapper">
            <input type="text" name="bill" id="bill" value={bill} onChange={handleBillChange} className="form__input --bill" />
            <img src={dollarSign} alt="dollar-sign" className="input-icon" />
        </div>
        <label htmlFor="" className="form__label">Select Tip %</label>
        <div className="grid">
          {percents.map(percent => (
              <button key={percent} onClick={handleClick} value={percent} className="tip-button">{percent}%</button>
          ))}
          <input type="text" name="tip" id="tip" className="form__input custom-tip" placeholder="Custom" />
        </div>
        <label htmlFor="bill" className="form__label">
          Number Of People
        </label>
        <div className="input-wrapper">
            <input type="text" name="number-of-people" id="number-of-people" className="form__input --people" />
            <img src={person} alt="person" className="input-icon" />
        </div>
        <ValueDisplay total={total} />
      </div>
    </main>
  );
};

export default Form;
