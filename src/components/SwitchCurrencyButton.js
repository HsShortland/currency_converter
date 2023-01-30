import Button from 'react-bootstrap/Button';

function SwitchCurrencyButton(props) {

    const switchCurrency = () => {
        const selectCurrency1 = props.dropDownSelection1
        const selectCurrency2 = props.dropDownSelection2

        props.setDropDownSelection1(selectCurrency2)
        props.setDropDownSelection2(selectCurrency1)
    }
    return (
        <Button onClick={() => {switchCurrency(); props.setStoredConvertedCurrency(null); } }>Switch</Button>
        
    );
}

export default SwitchCurrencyButton;