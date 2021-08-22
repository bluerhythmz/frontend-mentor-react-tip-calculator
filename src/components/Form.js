import React from "react";
import dollarSign from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";
import ValueDisplay from "./ValueDisplay";
import { useState } from "react";

const Form = () => {
  const [bill, setBill] = useState("0");
  const [people, setPeople] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [customTipPercent, setCustomTipPercent] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [error, setError] = useState(false);
  const percents = [5, 10, 15, 25, 50];

  const handleClick = (e) => {
    if (e.target.value < 10) {
      setTipPercent(`${0}${e.target.value}`);
      setCustomTipPercent("");
      return setActiveButton(e.target.value);
    }
    setTipPercent(e.target.value);
    setCustomTipPercent("");
    setActiveButton(e.target.value);
  };

  const handleBillChange = (e) => {
    if (e.target.value === "") {
      return setBill("0");
    }
    setBill(e.target.value);
  };

  const handlePeopleChange = (e) => {
    if (e.target.value === "") {
      setError(true);
      return setPeople("0");
    }
    setError(false);
    setPeople(e.target.value);
  };

  const handleCustomTipChange = (e) => {
    const value = parseInt(e.target.value)
    if (value === 0) {
      return setCustomTipPercent("");
    }
    if (value < 10) {
      setActiveButton("");
      setTipPercent(0);
      return setCustomTipPercent(`0${value}`);
    }
    setTipPercent(0);
    setActiveButton("");
    setCustomTipPercent(value);
  };

  const handleReset = () => {
    setBill(0);
    setTipPercent(0);
    setCustomTipPercent("");
    setPeople("");
    setActiveButton("");
    setError("");
  };

  let tipAmount = parseInt(bill) * `.${parseInt(tipPercent)}`;
  let customTipAmount = parseInt(bill) * `.${parseInt(customTipPercent)}`;
  let total = people ? (parseInt(bill) + tipAmount) / parseInt(people) : 0;
  let customTipTotal =
    people && customTipAmount
      ? (parseInt(bill) + customTipAmount) / parseInt(people)
      : 0;

  return (
    <main>
      <div className="form">
        <div className="input-group">
          <label htmlFor="bill" className="form__label">
            Bill
          </label>
          <div className="input-wrapper">
            <input
              type="text"
              name="bill"
              id="bill"
              value={bill}
              onChange={handleBillChange}
              className={`form__input --bill ${bill === "0" ? "no-bill" : ""}`}
            />
            <img src={dollarSign} alt="dollar-sign" className="input-icon" />
          </div>
          <label htmlFor="" className="form__label">
            Select Tip %
          </label>
          <div className="grid">
            {percents.map((percent) => {
              const activeClass =
                activeButton === percent.toString() ? "active" : "";
              return (
                <button
                  key={percent}
                  onClick={handleClick}
                  value={percent}
                  className={`tip-button ${activeClass}`}
                >
                  {percent}%
                </button>
              );
            })}
            <input
              type="text"
              name="tip"
              id="tip"
              className="form__input custom-tip"
              value={customTipPercent ? customTipPercent : ""}
              onChange={handleCustomTipChange}
              placeholder="Custom"
            />
          </div>
          <label htmlFor="bill" className="form__label">
            Number Of People
          </label>
          <div className="input-wrapper">
            <div className={error ? "error" : "no-error"}>Can't be zero</div>
            <input
              type="text"
              dir="rtl"
              name="number-of-people"
              id="number-of-people"
              onChange={handlePeopleChange}
              value={people}
              className={`form__input --people ${error ? "error-border" : ""}`}
            />
            <img src={person} alt="person" className="input-icon" />
          </div>
        </div>
        <ValueDisplay
          handleReset={handleReset}
          total={total}
          customTipTotal={customTipTotal}
          tipAmount={tipAmount}
          customTipAmount={customTipAmount}
        />
      </div>
    </main>
  );
};

export default Form;
