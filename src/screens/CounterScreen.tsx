import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';

export const CounterScreen = () => {

    const [counter, setCounter] = useState(0)

    return (
        <View style = { styles.container }>
            <Text style = { styles.title }>
                Contador: { counter }
            </Text>

            <Fab
                title = "+1"
                onPress = {()=> setCounter(counter +1)}
                position = 'br'
            />

            <Fab
                title = "-1"
                onPress = {()=> setCounter(counter -1)}
                position = 'bl'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        top: -5
    }
    
})