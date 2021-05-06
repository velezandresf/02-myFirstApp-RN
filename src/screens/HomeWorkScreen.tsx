import React from 'react'
import { View, StyleSheet } from 'react-native';

export const HomeWorkScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox}></View>
            <View style={styles.orangeBox}></View>
            <View style={styles.blueBox}></View>          
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        //flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        //top: 100,
        //alignSelf: 'flex-start'
    },
    orangeBox: {
        //flex: 1,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        //left: 100,
        top: 50
    },
    blueBox: {
        //flex: 2,
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        //alignSelf: 'flex-end'
    }
})