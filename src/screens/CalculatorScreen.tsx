import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../components/Button';
import {styles} from '../theme/appTheme';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
        {
            (lastNum !== '0') && <Text style={styles.smallResult}>{lastNum}</Text>
        }
      
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {num}
      </Text>

      {/* Row N°1 */}
      <View style={styles.row}>
        <Button text="C" color="#9B9B9B" action={clean} />
        <Button text="+/-" color="#9B9B9B" action={positiveOrNegative} />
        <Button text="del" color="#9B9B9B" action={deleteBtn} />
        <Button text="/" color="#FF9427" action={btnDivision} />
      </View>
      {/* Row N°2 */}
      <View style={styles.row}>
        <Button text="7" action={buildNumber} />
        <Button text="8" action={buildNumber} />
        <Button text="9" action={buildNumber} />
        <Button text="X" color="#FF9427" action={btnMultiplication} />
      </View>
      {/* Row N°3 */}
      <View style={styles.row}>
        <Button text="4" action={buildNumber} />
        <Button text="5" action={buildNumber} />
        <Button text="6" action={buildNumber} />
        <Button text="-" color="#FF9427" action={btnSubtraction} />
      </View>
      {/* Row N°4 */}
      <View style={styles.row}>
        <Button text="1" action={buildNumber} />
        <Button text="2" action={buildNumber} />
        <Button text="3" action={buildNumber} />
        <Button text="+" color="#FF9427" action={btnAddition} />
      </View>
      {/* Row N°5 */}
      <View style={styles.row}>
        <Button text="0" wider action={buildNumber} />
        <Button text="." action={buildNumber} />
        <Button text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
