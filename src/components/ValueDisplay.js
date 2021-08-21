

const ValueDisplay = ({ total, customTipTotal, tipAmount, customTipAmount, handleReset }) => {
    let noTotal = total ? false : true
    return (
        <div className="display">
            <div className="display__row">
                <div className="display__textbox">
                    <div className="display__text">Tip Amount</div>
                    <div className="display__subtext">/ person</div>
                </div>
                <div className="display__value">${customTipAmount ? customTipAmount.toFixed(2) : tipAmount.toFixed(2)}</div>
            </div>
            <div className="display__row">
                <div className="display__textbox">
                    <div className="display__text">Total</div>
                    <div className="display__subtext">/ person</div>
                </div>
                <div className="display__value">${customTipTotal ? customTipTotal.toFixed(2) : total.toFixed(2)}</div>
            </div>
            <button type="submit" onClick={handleReset} className="submit-btn" disabled={noTotal} >Reset</button>
        </div>
    )
}

export default ValueDisplay
