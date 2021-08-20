const ValueDisplay = ({ total, tipAmount }) => {
    return (
        <div className="display">
            <div className="display__row">
                <div className="display__textbox">
                    <div className="display__text">Tip Amount</div>
                    <div className="display__subtext">/ person</div>
                </div>
                <div className="display__value">${tipAmount.toFixed(2)}</div>
            </div>
            <div className="display__row">
                <div className="display__textbox">
                    <div className="display__text">Total</div>
                    <div className="display__subtext">/ person</div>
                </div>
                <div className="display__value">${total.toFixed(2)}</div>
            </div>
            <button type="submit" className="submit-btn">Reset</button>
        </div>
    )
}

export default ValueDisplay
