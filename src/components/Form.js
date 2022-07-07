import React from "react";
import ValueDisplay from "./ValueDisplay";
import { useState } from "react";
import Inputs from "./Inputs";

const Form = () => {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tipPercent, setTipPercent] = useState(0);
  const [customTipPercent, setCustomTipPercent] = useState("");
  const [activeButton, setActiveButton] = useState("");
  const [error, setError] = useState(false);
  const buttonValues = [5, 10, 15, 25, 50];

  const handleClick = (e) => {
    e.preventDefault();
    setTipPercent(e.target.value);
    setCustomTipPercent("");
    setActiveButton(e.target.value);
  };

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handlePeopleChange = (e) => {
    if (e.target.value === "0") {
      setError(true);
      return setPeople("0");
    }
    setError(false);
    setPeople(e.target.value);
  };

  const handleCustomTipChange = (e) => {
    if (e.target.value > 100) return;
    setTipPercent(0);
    setActiveButton("");
    setCustomTipPercent(e.target.value);
  };

  const handleReset = () => {
    setBill("");
    setTipPercent(0);
    setCustomTipPercent("");
    setPeople("");
    setActiveButton("");
    setError("");
  };

  let tipAmount = people > 0 ? (parseInt(bill) * (parseInt(tipPercent) / 100)) / parseInt(people) : 0;
  let customTipAmount = parseInt(bill) * (parseInt(customTipPercent) / 100);
  let total = people > 0 ? (parseInt(bill) / parseInt(people)) + tipAmount : 0;
  let customTipTotal =
    people && customTipAmount
      ? (parseInt(bill) + customTipAmount) / parseInt(people)
      : 0;

  return (
    <main>
      <form className="form">
        <Inputs
          bill={bill}
          people={people}
          customTipPercent={customTipPercent}
          handleBillChange={handleBillChange}
          handleClick={handleClick}
          activeButton={activeButton}
          error={error}
          buttonValues={buttonValues}
          handlePeopleChange={handlePeopleChange}
          handleCustomTipChange={handleCustomTipChange}
        />
        <ValueDisplay
          handleReset={handleReset}
          total={total}
          customTipTotal={customTipTotal}
          tipAmount={tipAmount}
          customTipAmount={customTipAmount}
        />
      </form>
    </main>
  );
};

export default Form;
