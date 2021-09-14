import dollarSign from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const Inputs = ({
  bill,
  people,
  customTipPercent,
  handleBillChange,
  handleClick,
  activeButton,
  error,
  buttonValues,
  handlePeopleChange,
  handleCustomTipChange,
}) => {
  return (
    <div className="input-group">
      <label htmlFor="bill" className="form__label">
        Bill
      </label>
      <div className="input-wrapper">
        <input
          type="text"
          name="bill"
          id="bill"
          placeholder="0"
          value={bill}
          onChange={handleBillChange}
          className="form__input --bill"
        />
        <img src={dollarSign} alt="dollar-sign" className="input-icon" />
      </div>
      <label htmlFor="" className="form__label">
        Select Tip %
      </label>
      <div className="grid">
        {buttonValues.map((percent) => {
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
          value={customTipPercent}
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
          placeholder="0"
          onChange={handlePeopleChange}
          value={people}
          className={`form__input --people ${error ? "error-border" : ""}`}
        />
        <img src={person} alt="person" className="input-icon" />
      </div>
    </div>
  );
};

export default Inputs;
