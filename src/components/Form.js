import React from "react";
import dollarSign from '../images/icon-dollar.svg'
import person from '../images/icon-person.svg'
import ValueDisplay from "./ValueDisplay";
import { useState } from "react";

const Form = () => {
    const [bill, setBill] = useState('')
    const [people, setPeople] = useState('')
    const [tipPercent, setTipPercent] = useState(0)
    const [customTipPercent, setCustomTipPercent] = useState(0)
    const percents = [5, 10, 15, 25, 50]
    const [activeButton, setActiveButton] = useState('')

    const handleClick = (e) => {
      const value = parseInt(e.target.value)
      if (value < 10) {
        setTipPercent(`${0}${value}`)
        return setActiveButton(value)
      }
      setTipPercent(value)
      setActiveButton(value)
    }

    const handleBillChange = (e) => {
        const value = parseInt(e.target.value)
        if (e.target.value === '') {
            return setBill(0)
        }
        setBill(value)
    }

    const handlePeopleChange = (e) => {
      const value = parseInt(e.target.value)
      /* if (e.target.value === '') {
        return setPeople(0)
      } */
      setPeople(value)
      }

    const handleCustomTipChange = (e) => {
      /* if (typeof e.target.value !== "number") return */
      const value = parseInt(e.target.value)
      /* if (e.target.value === '') {
        return setTipPercent(0)
      } */
      if (value === 0) {
        return setCustomTipPercent('')
      }
      if (value < 10) {
        return setCustomTipPercent(`0${value}`)
      }

      setCustomTipPercent(value)
    }

    const handleReset = () => {
      setBill(0)
      setTipPercent(0)
    }

    const tipAmount = bill *  `.${tipPercent}`
    const customTipAmount = bill *  `.${customTipPercent}`
    const total = people ? (bill + tipAmount) / people : 0 
    const customTipTotal = people ? (bill + customTipAmount) / people : 0 

  return (
    <main>
      <div className="form">
        <div className="input-group">
          <label htmlFor="bill" className="form__label">
              Bill
            </label>
            <div className="input-wrapper">
                <input type="text" name="bill" id="bill" value={bill} onChange={handleBillChange} className="form__input --bill" />
                <img src={dollarSign} alt="dollar-sign" className="input-icon" />
            </div>
            <label htmlFor="" className="form__label">Select Tip %</label>
            <div className="grid">
              {percents.map(percent => {
                  const activeClass = activeButton === percent ? "active" : ""
                  return (
                    <button key={percent} onClick={handleClick} value={percent} className={`tip-button ${activeClass}`}>{percent}%</button>
                  )
              })}
              <input type="text" name="tip" id="tip" className="form__input custom-tip" value={customTipPercent ? customTipPercent : ''} onChange={handleCustomTipChange} placeholder="Custom" />
            </div>
            <label htmlFor="bill" className="form__label">
              Number Of People
            </label>
            <div className="input-wrapper">
                <div className="error">Can't be zero</div>
                <input type="text" dir="rtl" name="number-of-people" id="number-of-people" onChange={handlePeopleChange} value={people} className="form__input --people" />
                <img src={person} alt="person" className="input-icon" />
            </div>
        </div>
        <ValueDisplay handleReset={handleReset} total={total} customTipTotal={customTipTotal} tipAmount={tipAmount} customTipAmount={customTipAmount} />
      </div>
    </main>
  );
};

export default Form;
