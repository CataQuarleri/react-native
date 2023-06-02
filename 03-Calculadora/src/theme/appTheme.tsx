import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    background: {
        backgroundColor: 'black',
        flex: 1,
    },
    calculadoraContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
        
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 20,
        marginRight: 10
    },
    prevResult: {
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
        marginRight: 10

    },
    btnRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
        
    }
  
});