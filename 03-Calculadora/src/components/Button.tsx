import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
interface Props {
    title: string,
    color?: string,
    ancho?: boolean,
    action : (arg: string) => void,
}

export const Button = ({title, color = "#2D2D2D", ancho = false, action}: Props) => {
return (
    <TouchableOpacity onPress={()=>action(title)}>
    <View style={{...styles.btn, backgroundColor: color, width: ancho ? 180 : 80}}>
    <Text style={{...styles.btnText, color: (color === "#9B9B9B") ? 'black' : 'white' }}>{title}</Text>
  </View>
  </TouchableOpacity>
 );
};

const styles = StyleSheet.create({
    btn: {
        height: 80,
        width: 80,
        // backgroundColor: "#2D2D2D",
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        // fontWeight: 'bold'
    }
});