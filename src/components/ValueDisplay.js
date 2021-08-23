const ValueDisplay = ({
  total,
  customTipTotal,
  tipAmount,
  customTipAmount,
  handleReset,
}) => {
  let noTotal = total ? false : true;
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
            ? customTipAmount.toLocaleString('EN', {minimumFractionDigits: 2, maximumFractionDigits: 2})
            : tipAmount.toLocaleString('EN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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
            ? customTipTotal.toLocaleString('EN', {minimumFractionDigits: 2, maximumFractionDigits: 2})
            : total.toLocaleString('EN', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
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
