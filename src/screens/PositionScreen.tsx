import React from 'react'
import { View, StyleSheet } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={ styles.container }>
            <View style= { styles.grayBox }></View>
            <View style= { styles.purpleBox }></View>
            <View style= { styles.orangeBox }></View>
            <View style= { styles.greenBox }></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2BC4D9'
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white'
    },
    greenBox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left    : 0
    },
    grayBox: {
        backgroundColor: 'gray',
        borderWidth: 10,
        borderColor: 'white',
        ...StyleSheet.absoluteFillObject
    }
})