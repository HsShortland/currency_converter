import Alert from 'react-bootstrap/Alert';
import React from 'react'

function DismissableAlert(props) {

    if (props.nullInputAlert) {
        console.log('working')
        return <Alert variant="danger" onClose={() => props.setNullInputAlert(false)} dismissible>
            <Alert.Heading>No amount entered!</Alert.Heading>
            <p>Please add an amount of currency to convert.</p>
        </Alert>
    } else if (props.userInput !== null) {
        const userInputContains = props.userInput
        const arrayOfMatches = userInputContains.match(/\./g)
        console.log(arrayOfMatches)
        const numberOfMatches = arrayOfMatches?.length || 0;
        console.log(numberOfMatches);
        if (numberOfMatches > 1) {
            return <Alert variant="danger" onClose={() => props.setUserInput(null)} dismissible>
                <Alert.Heading>Error</Alert.Heading>
                <p>{props.userInput} is not a valid number</p>
            </Alert>
        }
    }
}
export default DismissableAlert;
