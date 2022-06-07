import {useState, useRef} from 'react';

enum Operators {
    addition,
    subtraction,
    multiplication,
    division,
}

export const useCalculator = () => {

    const [lastNum, setLastNum] = useState('0');
    const [num, setNum] = useState('0');
    const lastOperation = useRef<Operators>();
  
    const clean = () => {
      setNum('0');
      setLastNum('0');
    };
  
    const buildNumber = (numText: string) => {
      //Accept just one dot
      if (num.includes('.') && numText === '.') return;
  
      if (num.startsWith('0') || num.startsWith('-0')) {
        //Decimal
        if (numText === '.') {
          setNum(num + numText);
          //Evaluate if its another 0 and we hace a dot
        } else if (numText === '0' && num.includes('.')) {
          setNum(num + numText);
          //Evaluate if its different from 0 and has a dot
        } else if (numText !== '0' && !num.includes('.')) {
          setNum(numText);
          //Avois 000.0
        } else if (numText === '0' && num.includes('.')) {
          setNum(num);
        }
      } else {
        setNum(num + numText);
      }
    };
  
    const deleteBtn = () => {
      let negative = '';
      let numTemp = num;
  
      if (num.includes('-')) {
        negative = '-';
        numTemp = num.substr(1);
      }
  
      if (numTemp > 1) {
        setNum(negative + numTemp.slice(0, -1));
      } else {
        setNum('0');
      }
    };
  
    const positiveOrNegative = () => {
      if (num.includes('-')) {
        setNum(num.replace('-', ''));
      } else {
        setNum('-' + num);
      }
    };
  
    const changeNumForLast = () => {
      if (num.endsWith('.')) {
        setLastNum(num.slice(0, -1));
      } else {
        setLastNum(num);
      }
      setNum('0');
    };
  
    const btnDivision = () => {
      changeNumForLast();
      lastOperation.current = Operators.division;
    };
    const btnMultiplication = () => {
      changeNumForLast();
      lastOperation.current = Operators.multiplication;
    };
    const btnSubtraction = () => {
      changeNumForLast();
      lastOperation.current = Operators.subtraction;
    };
    const btnAddition = () => {
      changeNumForLast();
      lastOperation.current = Operators.addition;
    };
  
    const calculate = () => {
        const num1 = Number(num);
        const num2 = Number(lastNum);
  
        switch (lastOperation.current) {
            case Operators.addition:
                setNum(`${num1 + num2}`)
                break;
            case Operators.subtraction:
              setNum(`${num2 - num1}`)
                break;
            case Operators.multiplication:
              setNum(`${num2 / num1}`)
                break;
            case Operators.division:
              setNum(`${num1 * num2}`)
                break;    
            default:
                break;
        }
        setLastNum('0');
    }
    return{
        num,
        lastNum,
        clean,
        positiveOrNegative,
        deleteBtn,
        btnDivision,
        buildNumber,
        btnMultiplication,
        btnSubtraction,
        btnAddition,
        calculate
    }
}

