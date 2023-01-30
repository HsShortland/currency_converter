import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CurrencyDropDown from './components/CurrencyDropDown';
import ConversionButton from './components/ConversionButton';
import SwitchCurrencyButton from './components/SwitchCurrencyButton';
import DismissableAlert from './components/DismissableAlert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



function App() {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [dropDownSelection1, setDropDownSelection1] = useState('');
  const [dropDownSelection2, setDropDownSelection2] = useState('');
  const [exchangeRate, setExchangeRate] = useState([]);
  const [nullInputAlert, setNullInputAlert] = useState(false);
  const [storedConvertedCurrency, setStoredConvertedCurrency] = useState(null);

  const fetchAllData = () => {
    const allCountriesAPI = 'https://openexchangerates.org/api/currencies.json'
    const allRatesAPI = 'https://api.exchangerate-api.com/v4/latest/GBP'

    const getAllCountries = axios.get(allCountriesAPI)
    const getAllRates = axios.get(allRatesAPI)

    axios.all([getAllCountries, getAllRates]).then(
      axios.spread((...allData) => {
        const allCountries = allData[0].data
        const allRates = allData[1].data.rates;

        setCountries(allCountries)
        setExchangeRate(allRates)
      }
      )
    )
  }
  useEffect(() => {
    fetchAllData()
  }, []
  )
  return (<Container>
    <div className="App">
      <Row className="align-items-center" style={{ height: "20vh" }}>
        <Col>
          <Form>
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" id="numberInput" onChange={event => setUserInput(event.target.value)}>
            </Form.Control>
          </Form>
        </Col>
      </Row>
      <Row style={{ height: "10vh" }}>
        <Col>
          <CurrencyDropDown countries={countries} dropDownSelection={dropDownSelection1} setDropDownSelection={setDropDownSelection1}></CurrencyDropDown>
        </Col>
      </Row>
      <Row style={{ height: "10vh" }}>
        <Col>
          <CurrencyDropDown countries={countries} dropDownSelection={dropDownSelection2} setDropDownSelection={setDropDownSelection2}></CurrencyDropDown>
        </Col>
      </Row>
      <Row className="justify-content-center" style={{ textAlign: "center", height: "10vh" }}>
        <Col>
          <SwitchCurrencyButton dropDownSelection1={dropDownSelection1} dropDownSelection2={dropDownSelection2}
            setDropDownSelection1={setDropDownSelection1} setDropDownSelection2={setDropDownSelection2}
            setStoredConvertedCurrency={setStoredConvertedCurrency}
          ></SwitchCurrencyButton>
          <ConversionButton
            countries={countries} exchangeRate={exchangeRate} userInput={userInput} setUserInput={setUserInput}
            dropDownSelection1={dropDownSelection1} dropDownSelection2={dropDownSelection2}
            nullInputAlert={nullInputAlert} setNullInputAlert={setNullInputAlert} storedConvertedCurrency={storedConvertedCurrency}
            setStoredConvertedCurrency={setStoredConvertedCurrency}>
          </ConversionButton>
          <DismissableAlert nullInputAlert={nullInputAlert} setNullInputAlert={setNullInputAlert}
            userInput={userInput} setUserInput={setUserInput}></DismissableAlert>
        </Col>
      </Row>
    </div>
  </Container>

  );
}

export default App;
