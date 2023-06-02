import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {Button} from '../components/Button';
import useCalculator from '../hooks/useCalculator';

export const CalculadoraScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculadoraContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.prevResult}>{prevNumber}</Text>
      )}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.btnRow}>
        <Button title="C" color="#9B9B9B" action={clean} />
        <Button title="+/-" color="#9B9B9B" action={posNeg} />
        <Button title="del" color="#9B9B9B" action={del} />
        <Button title="/" color="#FF9427" action={btnDivider} />
      </View>
      <View style={styles.btnRow}>
        <Button title="7" action={pressNumber} />
        <Button title="8" action={pressNumber} />
        <Button title="9" action={pressNumber} />
        <Button title="x" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.btnRow}>
        <Button title="4" action={pressNumber} />
        <Button title="5" action={pressNumber} />
        <Button title="6" action={pressNumber} />
        <Button title="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.btnRow}>
        <Button title="1" action={pressNumber} />
        <Button title="2" action={pressNumber} />
        <Button title="3" action={pressNumber} />
        <Button title="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.btnRow}>
        <Button title="0" ancho action={pressNumber} />
        <Button title="." action={pressNumber} />
        <Button title="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
