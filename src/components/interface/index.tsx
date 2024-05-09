import { useState } from 'react';
import ButtonCalculator from '../ButtonCalculator';
import './Interface.css';
const Interface = () => {

  const [numbersButton, setNumbersButton] = useState([
    'RESET', '1', '2',
    '3', '4', '5',
    '6', '7', '8',
    '9', '0', '*',
    '+', '=', '/',
  ]);

  const [operation, setOperation] = useState('');
  const [stateButton, setStateButton] = useState(false);
  const onClick = (value: string) => {
    if (value == '=') {
      let resultOperation = eval(operation);
      setOperation(operation + ' = ' + resultOperation.toString());
      setStateButton(true);
    } else if (value == 'RESET') {
      setOperation('');
      setStateButton(false);
    }
    else {
      setOperation(operation + value);
    }

  }

  return (
    <div className='calculadora'>

      <div className='calculadora__display'>
        <div id="display">
          <h1>{operation}</h1>
        </div>
      </div>

      <div className='calculadora__buttons'>
        {
          numbersButton.map((number) =>
            number != 'RESET' ?
              <ButtonCalculator
                key={number}
                number={number}
                onChange={onClick}
                state={stateButton}
              />
              :
              <ButtonCalculator
                key={number}
                number={number}
                onChange={onClick}
                state={!stateButton}
              />
          )
        }
      </div>
    </div>
  )
}

export default Interface;

