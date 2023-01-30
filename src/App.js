import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CurrencyDropDown from './components/CurrencyDropDown';
import ConversionButton from './components/ConversionButton';
import SwitchCurrencyButton from './components/SwitchCurrencyButton';
import DismissableAlert from './components/DismissableAlert';



function App() {
  const [countries, setCountries] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [dropDownSelection1, setDropDownSelection1] = useState('');
  const [dropDownSelection2, setDropDownSelection2] = useState('');
  const [exchangeRate, setExchangeRate] = useState([]);
  const [nullInputAlert, setNullInputAlert] = useState(false);
  const [storedConvertedCurrency, setStoredConvertedCurrency] = useState(null);

  const fetchAllData = () =>{
    const allCountriesAPI = 'https://openexchangerates.org/api/currencies.json'
    const allRatesAPI = 'https://api.exchangerate-api.com/v4/latest/GBP'

    const getAllCountries = axios.get(allCountriesAPI)
    const getAllRates = axios.get(allRatesAPI)

    axios.all([getAllCountries, getAllRates]).then(
      axios.spread((...allData) =>{
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
  },[]
  )
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <input type="text" id="numberInput" onChange={event => setUserInput(event.target.value)}></input>
      <CurrencyDropDown countries={countries} dropDownSelection={dropDownSelection1} setDropDownSelection={setDropDownSelection1}></CurrencyDropDown>
      <CurrencyDropDown countries={countries} dropDownSelection={dropDownSelection2} setDropDownSelection={setDropDownSelection2}></CurrencyDropDown>
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
    </div>
  );
}

export default App;
