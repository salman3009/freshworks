import './App.css';
import { useState } from 'react';

function App() {

  const [getList, setList] = useState([]);

  const finalHandler = (event) => {
    event.preventDefault();
  }

  const onChangeHandler = () => {

  }

  return (
    <div className="App">
      <form
        id="frmReplace"
        name="replace"
        onSubmit={finalHandler}
      >
        <div
          aria-labelledby="radiogroup"
          role="form"
        >
          <fieldset>
            <div>
              <input
                aria-checked="true"
                aria-labelledby="addressRole"
                checked="true"
                disabled="true"
                id="existing-address"
                name="address-role"
                onChange={onChangeHandler}
                role="addressRole"
                tabIndex="0"
                type="radio"
              />
              <label
                className="input-lable"
                htmlFor="existing-address"
              >
                Existing Address
              </label>
            </div>
            <div>
              <input
                aria-checked="true"
                aria-labelledby="addressRole"
                checked="true"
                disabled="true"
                id="new-address"
                name="address-role"
                onChange={onChangeHandler}
                role="addressRole"
                tabIndex="1"
                type="radio"
              />
              <label
                className="input-lable"
                htmlFor="existing-address"
              >
                New Address
              </label>
            </div>
            <div>
              <button
                id="card"
                type="submit"
              >
                Submit
              </button>
            </div>
          </fieldset>
          <div>
            <input
              maxLength="32"
              name="street"
              onChange={onChangeHandler}
              placeholder="details"
              type="text"
              value="default value"
            />
            <label>Street Details</label>
          </div>
          <div>
            <label>
              State
            </label>
            <select
              name="stateInput"
              onChange={onChangeHandler}
              value="default value"
            >
              {
                getList !== null ? getList.map((obj, index) => {
                  return (
                    <option
                      key={index}
                      value={obj}
                    >
                      {obj}
                    </option>
                  )
                }) : null
              }
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
