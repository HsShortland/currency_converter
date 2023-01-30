

function CurrencyDropDown(props) {
  

const countriesArray = Object.entries(props.countries)
    const convertedCountries = 
    countriesArray.map(([abv, country]) =><option value={abv} key={abv}>{abv} {country}</option>);

  // const convertedCountriesSelection = props.dropDownSelection
  // console.log(convertedCountriesSelection)
    return (
      <div> 
        <select className="form-select" aria-label="Default select example" id="selectCountry"
        onChange={event => props.setDropDownSelection(event.target.value)}
        value={props.dropDownSelection}
          >
            <option disabled value=""> -- select an option -- </option>
          {convertedCountries}
        </select>
      </div>
      );
    }
    
    export default CurrencyDropDown;