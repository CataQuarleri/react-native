import {useRef, useState} from 'react';

enum Operations {
  add,
  subtract,
  multiply,
  divide,
}

export default function useCalculator() {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const operator = useRef<Operations>();

  const clean = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const pressNumber = (pressedButton: string) => {
    if (number.includes('.') && pressedButton === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (pressedButton === '.') {
        setNumber(number + pressedButton);
      } else if (pressedButton === '0' && number.includes('.')) {
        setNumber(number + pressedButton);
      } else if (pressedButton !== '0' && !number.includes('.')) {
        setNumber(pressedButton);
      } else if (pressedButton === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + pressedButton);
      }
    } else {
      setNumber(number + pressedButton);
    }
  };

  const posNeg = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const del = () => {
    if (number.length == 1 || (number.length == 2 && number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const handlePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber('0');
  };

  const btnDivider = () => {
    handlePreviousNumber();
    operator.current = Operations.divide;
  };

  const btnMultiply = () => {
    handlePreviousNumber();
    operator.current = Operations.multiply;
  };

  const btnSubtract = () => {
    handlePreviousNumber();
    operator.current = Operations.subtract;
  };

  const btnAdd = () => {
    handlePreviousNumber();
    operator.current = Operations.add;
  };

  const calculate = () => {
    const num1 = Number(prevNumber);
    const num2 = Number(number);

    switch (operator.current) {
      case Operations.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operations.divide:
        let division = num1 / num2;
        if (!isFinite(division)) {
          setNumber('invalid');
        } else {
          setNumber(`${division}`);
        }
        break;
      case Operations.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operations.subtract:
        setNumber(`${num1 - num2}`);

      default:
        break;
    }
    setPrevNumber('0');
  };

  return {
    prevNumber,
    number,
    clean,
    posNeg,
    del,
    btnDivider,
    pressNumber,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  };
}
