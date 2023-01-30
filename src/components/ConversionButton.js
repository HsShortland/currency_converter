
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';

const TIMEOUT_TIME = 600;

function ConversionButton(props) {
    const [secondsLeft, setSecondsLeft] = useState(0);
    const setStoredConvertedCurrency = props.setStoredConvertedCurrency;

    useEffect(() => {
        setInterval(() => {
            setSecondsLeft(secondsLeft => {
                if (secondsLeft > 0)
                    return secondsLeft - 1;
                else
                    setStoredConvertedCurrency(null);
            });
        }, 1000)
    }, [setStoredConvertedCurrency]
    );

    const convertCurrency = () => {
        const findRate1 = props.exchangeRate[props.dropDownSelection1];
        const findRate2 = props.exchangeRate[props.dropDownSelection2];
        let convertedCurrency = (1 / findRate1 * props.userInput) * (findRate2);
        console.log(convertedCurrency)
        props.setStoredConvertedCurrency(convertedCurrency);
        setSecondsLeft(TIMEOUT_TIME);
    }

    const clockIt = () => {
        let mins = Math.floor((secondsLeft / 60) % 60);
        let seconds = Math.floor(secondsLeft % 60);
        let displayMins = mins < 10 ? `0${mins}` : mins;
        let displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        return {
            displayMins: displayMins,
            displaySeconds: displaySeconds,
        };
    };

    const { displayMins, displaySeconds } = clockIt();

    return <>
        <Button onClick={() => {
            props.setNullInputAlert(props.userInput === ""); convertCurrency();
        }}>Convert</Button>
        {props.storedConvertedCurrency ?
            <>
                <p>{props.userInput} {props.dropDownSelection1} is equivalent to {props.storedConvertedCurrency} {props.dropDownSelection2}</p>
                {displayMins} : {displaySeconds}
            </>
            : null}
    </>
}

export default ConversionButton;