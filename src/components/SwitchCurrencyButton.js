

function SwitchCurrencyButton(props) {

    const switchCurrency = () => {
        const selectCurrency1 = props.dropDownSelection1
        const selectCurrency2 = props.dropDownSelection2

        props.setDropDownSelection1(selectCurrency2)
        props.setDropDownSelection2(selectCurrency1)
    }
    return (
        <button onClick={() => {switchCurrency(); props.setStoredConvertedCurrency(null); } }>Switch</button>
        
    );
}

export default SwitchCurrencyButton;