import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'

function SwitchCurrencyButton(props) {

    const switchCurrency = () => {
        const selectCurrency1 = props.dropDownSelection1
        const selectCurrency2 = props.dropDownSelection2

        props.setDropDownSelection1(selectCurrency2)
        props.setDropDownSelection2(selectCurrency1)
    }
    return (
        <Button variant="primary" style={{ margin: 5 }} onClick={() => { switchCurrency(); props.setStoredConvertedCurrency(null); }}><FontAwesomeIcon icon={faRepeat} size="lg" /></Button>

    );
}

export default SwitchCurrencyButton;