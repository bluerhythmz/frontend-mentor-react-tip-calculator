const ValueDisplay = ({
  total,
  customTipTotal,
  tipAmount,
  customTipAmount,
  handleReset,
}) => {
  let noTotal = total ? false : true;
  const getValueWithDecimals = (num) => {
    if (!num) {
      return "0.00";
    }

    return num.toFixed(2);
  };
  return (
    <div className="display">
      <div className="display__row">
        <div className="display__textbox">
          <div className="display__text">Tip Amount</div>
          <div className="display__subtext">/ person</div>
        </div>
        <div className="display__value">
          $
          {customTipAmount
            ? getValueWithDecimals(customTipAmount)
            : getValueWithDecimals(tipAmount)}
        </div>
      </div>
      <div className="display__row">
        <div className="display__textbox">
          <div className="display__text">Total</div>
          <div className="display__subtext">/ person</div>
        </div>
        <div className="display__value">
          $
          {customTipTotal
            ? getValueWithDecimals(customTipTotal)
            : getValueWithDecimals(total)}
        </div>
      </div>
      <button
        type="submit"
        onClick={handleReset}
        className="submit-btn"
        disabled={noTotal}
      >
        Reset
      </button>
    </div>
  );
};

export default ValueDisplay;
